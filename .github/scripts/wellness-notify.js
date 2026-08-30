// Wellness push reminder — inviato ogni mattina alle 8:45
// Legge PushSub dal foglio, filtra chi ha già compilato oggi, manda la push.

const webpush = require('web-push');

const VAPID_PUBLIC_KEY  = 'BAk4BYdzjxv-WP-YdpCQIFNa71SMb-5FvwqtOt6UJwn4GCAlwUa9Wsikpgc5OzjPlvK0_gyfko-dh9Z0yXB4guA';
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY;
const APPS_SCRIPT_URL   = process.env.APPS_SCRIPT_URL;
const APPS_SCRIPT_TOKEN = process.env.APPS_SCRIPT_TOKEN;
const APP_BASE_URL      = 'https://pamangiapane-lgtm.github.io/schede-allenamento/scheda.html';

if (!VAPID_PRIVATE_KEY || !APPS_SCRIPT_URL || !APPS_SCRIPT_TOKEN) {
  console.error('Variabili mancanti: VAPID_PRIVATE_KEY, APPS_SCRIPT_URL, APPS_SCRIPT_TOKEN');
  process.exit(1);
}

webpush.setVapidDetails('mailto:pamangiapane@gmail.com', VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

async function fetchSheet(foglio) {
  const url  = `${APPS_SCRIPT_URL}?token=${APPS_SCRIPT_TOKEN}&azione=leggi&foglio=${foglio}`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status} per foglio ${foglio}`);
  const data = await resp.json();
  if (!data.ok) throw new Error(`API error: ${data.errore}`);
  return data.dati || [];
}

async function main() {
  const [subRows, wellnessRows] = await Promise.all([
    fetchSheet('PushSub'),
    fetchSheet('Wellness'),
  ]);

  // Oggi in formato YYYY-MM-DD (UTC — il foglio usa questa convenzione)
  const today = new Date().toISOString().slice(0, 10);

  const submittedToday = new Set(
    wellnessRows
      .filter(r => String(r.Data || '').startsWith(today))
      .map(r => String(r.ID_Giocatrice))
  );
  console.log(`${today} — ${submittedToday.size} già compilate: [${[...submittedToday].join(', ')}]`);

  let sent = 0, skipped = 0, errors = 0;

  for (const row of subRows) {
    const idG = String(row.ID_Giocatrice || '').trim();
    // Salta demo/test e righe senza endpoint
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

    // URL personalizzato per aprire direttamente la scheda della giocatrice
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
      // 410 = subscription scaduta/revocata — normale dopo reinstall app
      console.warn(`  ✗ ID ${idG} — ${err.statusCode || err.message}`);
      errors++;
    }
  }

  console.log(`\nDone: ${sent} inviate | ${skipped} già compilato | ${errors} errori`);
}

main().catch(e => { console.error(e); process.exit(1); });
