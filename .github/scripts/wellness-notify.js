// Wellness push reminder — inviato ogni mattina alle 8:45
// Legge PushSub da GAS; se GAS non risponde usa il secret PUSH_SUBSCRIPTIONS.
// Legge Wellness per saltare chi ha già compilato oggi (opzionale: se GAS non risponde, invia a tutte).

const webpush = require('web-push');

const VAPID_PUBLIC_KEY   = 'BC8k3B_czFbc_dySae4Le6tgtyEpcyilthMSrD7sZvz7TRVqwkfKzIHnsDtfy39i7N2n9El6cbxlVfRCzOmr4mU';
const VAPID_PRIVATE_KEY  = process.env.VAPID_PRIVATE_KEY;
const APPS_SCRIPT_URL    = process.env.APPS_SCRIPT_URL;
const APPS_SCRIPT_TOKEN  = process.env.APPS_SCRIPT_TOKEN;
const PUSH_SUBSCRIPTIONS = process.env.PUSH_SUBSCRIPTIONS; // fallback: array JSON delle iscritte
const APP_BASE_URL       = 'https://pamangiapane-lgtm.github.io/schede-allenamento/scheda.html';

if (!VAPID_PRIVATE_KEY) {
  console.error('Variabile mancante: VAPID_PRIVATE_KEY');
  process.exit(1);
}

webpush.setVapidDetails('mailto:pamangiapane@gmail.com', VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

async function fetchSheetGAS(foglio) {
  const url  = `${APPS_SCRIPT_URL}?token=${APPS_SCRIPT_TOKEN}&azione=leggi&foglio=${foglio}`;
  const resp = await fetch(url);
  const text = await resp.text();
  if (!resp.ok)                    throw new Error(`HTTP ${resp.status}`);
  if (text.trim().startsWith('<')) throw new Error('risposta HTML (GAS richiede login Google)');
  const data = JSON.parse(text);
  if (!data.ok) throw new Error(`API: ${data.errore}`);
  return data.dati || [];
}

async function main() {

  // ── PushSub ─────────────────────────────────────────────────────────────
  let subRows = null;

  if (APPS_SCRIPT_URL && APPS_SCRIPT_TOKEN) {
    try {
      subRows = await fetchSheetGAS('PushSub');
      console.log(`PushSub da GAS: ${subRows.length} iscritte`);
    } catch (e) {
      console.warn(`GAS non raggiungibile per PushSub (${e.message}) — uso PUSH_SUBSCRIPTIONS`);
    }
  }

  if (!subRows) {
    if (!PUSH_SUBSCRIPTIONS) {
      console.error('Nessuna fonte per PushSub: GAS fallito e secret PUSH_SUBSCRIPTIONS non impostato.');
      process.exit(1);
    }
    const parsed = JSON.parse(PUSH_SUBSCRIPTIONS);
    subRows = Array.isArray(parsed) ? parsed : (parsed.dati || []);
    console.log(`PushSub da secret PUSH_SUBSCRIPTIONS: ${subRows.length} iscritte`);
  }

  // ── Wellness (chi ha già compilato oggi) ────────────────────────────────
  const today = new Date().toISOString().slice(0, 10);
  let submittedToday = new Set();

  if (APPS_SCRIPT_URL && APPS_SCRIPT_TOKEN) {
    try {
      const wellnessRows = await fetchSheetGAS('Wellness');
      submittedToday = new Set(
        wellnessRows
          .filter(r => String(r.Data || '').startsWith(today))
          .map(r => String(r.ID_Giocatrice))
      );
      console.log(`${today} — ${submittedToday.size} già compilate: [${[...submittedToday].join(', ')}]`);
    } catch (e) {
      console.warn(`Wellness non disponibile (${e.message}) — invio a tutte`);
    }
  }

  // ── Invio ───────────────────────────────────────────────────────────────
  let sent = 0, skipped = 0, errors = 0;

  for (const row of subRows) {
    const idG = String(row.ID_Giocatrice || '').trim();
    if (!idG || idG === '99' || idG === 'TEST_99' || !row.Endpoint) continue;

    if (submittedToday.has(idG)) {
      console.log(`  ↷ ID ${idG} — già compilato`);
      skipped++;
      continue;
    }

    const subscription = {
      endpoint: row.Endpoint,
      keys: { p256dh: row.P256dh, auth: row.Auth },
    };

    const payload = JSON.stringify({
      title: 'Marsala Volley 🏐',
      body:  'Compila il wellness prima della seduta di oggi!',
      url:   `${APP_BASE_URL}?id=${idG}`,
    });

    try {
      await webpush.sendNotification(subscription, payload);
      console.log(`  ✓ ID ${idG} — notifica inviata`);
      sent++;
    } catch (err) {
      console.warn(`  ✗ ID ${idG} — ${err.statusCode || err.message}`);
      errors++;
    }
  }

  console.log(`\nDone: ${sent} inviate | ${skipped} già compilato | ${errors} errori`);
}

main().catch(e => { console.error(e); process.exit(1); });
