// Wellness email reminder — inviato ogni mattina alle 8:45
// Legge le atlete da data/Giocatrici.csv (nel repo).
// Legge Wellness da GAS per saltare chi ha già compilato oggi (opzionale).
// Invia email via Gmail SMTP con App Password.

const nodemailer = require('nodemailer');
const fs         = require('fs');
const path       = require('path');

const GMAIL_USER        = process.env.GMAIL_USER;
const GMAIL_APP_PASS    = process.env.GMAIL_APP_PASSWORD;
const APPS_SCRIPT_URL   = process.env.APPS_SCRIPT_URL;
const APPS_SCRIPT_TOKEN = process.env.APPS_SCRIPT_TOKEN;
const APP_BASE_URL      = 'https://pamangiapane-lgtm.github.io/schede-allenamento/wellness.html';

if (!GMAIL_USER || !GMAIL_APP_PASS) {
  console.error('Variabili mancanti: GMAIL_USER e/o GMAIL_APP_PASSWORD');
  process.exit(1);
}

// ── Legge Giocatrici.csv ────────────────────────────────────────────────────
const csvPath = path.join(__dirname, '..', '..', 'data', 'Giocatrici.csv');
const lines   = fs.readFileSync(csvPath, 'utf8').trim().split('\n');
const header  = lines[0].split(',').map(h => h.trim());
const idxId   = header.indexOf('ID');
const idxNome = header.indexOf('Nome');
const idxMail = header.indexOf('Email');

const giocatrici = lines.slice(1).map(l => {
  const cols = l.split(',');
  return {
    id:    (cols[idxId]   || '').trim(),
    nome:  (cols[idxNome] || '').trim(),
    email: (cols[idxMail] || '').trim(),
  };
}).filter(g => g.id && g.email);

if (giocatrici.length === 0) {
  console.error('Nessuna atleta con email in Giocatrici.csv. Aggiungi le email e riprova.');
  process.exit(1);
}
console.log(`Giocatrici con email: ${giocatrici.length}`);

// ── Wellness (chi ha già compilato oggi) ────────────────────────────────────
async function fetchGAS(foglio) {
  const url  = `${APPS_SCRIPT_URL}?token=${APPS_SCRIPT_TOKEN}&azione=leggi&foglio=${foglio}`;
  const resp = await fetch(url, { signal: AbortSignal.timeout(10000) });
  const text = await resp.text();
  if (!resp.ok || text.trim().startsWith('<')) throw new Error('GAS non disponibile');
  const data = JSON.parse(text);
  if (!data.ok) throw new Error(data.errore);
  return data.dati || [];
}

// ── Email HTML ───────────────────────────────────────────────────────────────
function buildEmail(nome, id) {
  const url = `${APP_BASE_URL}?id=${id}`;
  return `
<!DOCTYPE html>
<html lang="it">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:system-ui,sans-serif;">
  <div style="max-width:480px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.10);">
    <div style="background:#0c1f40;padding:24px 28px;">
      <span style="font-size:28px;">🏐</span>
      <span style="display:block;color:#e8a020;font-size:1.3rem;font-weight:700;letter-spacing:.04em;margin-top:8px;">MARSALA VOLLEY</span>
    </div>
    <div style="padding:28px;">
      <p style="margin:0 0 8px;font-size:1rem;color:#0c1f40;">Ciao <strong>${nome}</strong>,</p>
      <p style="margin:0 0 24px;color:#4a6a8a;line-height:1.5;">
        Ricordati di compilare il <strong>questionario wellness</strong> prima della seduta di oggi.
        Ci vuole meno di un minuto!
      </p>
      <a href="${url}"
         style="display:inline-block;background:#e8a020;color:#0c1f40;font-weight:700;
                text-decoration:none;padding:14px 28px;border-radius:8px;font-size:1rem;">
        Compila il wellness →
      </a>
    </div>
    <div style="padding:16px 28px;border-top:1px solid #eef2f8;">
      <p style="margin:0;font-size:.8rem;color:#8aa4be;">Marsala Volley 2026/27 · Risparmia questo link per accedere in futuro</p>
    </div>
  </div>
</body>
</html>`;
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const today = new Date().toISOString().slice(0, 10);
  let compilate = new Set();

  if (APPS_SCRIPT_URL && APPS_SCRIPT_TOKEN) {
    try {
      const rows = await fetchGAS('Wellness');
      compilate  = new Set(
        rows.filter(r => String(r.Data || '').startsWith(today))
            .map(r => String(r.ID_Giocatrice))
      );
      console.log(`${today} — già compilate: [${[...compilate].join(', ')}]`);
    } catch (e) {
      console.warn(`Wellness non disponibile (${e.message}) — invio a tutte`);
    }
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASS },
  });

  let sent = 0, skipped = 0, errors = 0;

  for (const g of giocatrici) {
    if (compilate.has(g.id)) {
      console.log(`  ↷ ${g.nome} (ID ${g.id}) — già compilato`);
      skipped++;
      continue;
    }

    try {
      await transporter.sendMail({
        from:    `"Marsala Volley" <${GMAIL_USER}>`,
        to:      g.email,
        subject: '🏐 Compila il wellness di oggi — Marsala Volley',
        html:    buildEmail(g.nome, g.id),
      });
      console.log(`  ✓ ${g.nome} → ${g.email}`);
      sent++;
    } catch (err) {
      console.warn(`  ✗ ${g.nome} — ${err.message}`);
      errors++;
    }
  }

  console.log(`\nDone: ${sent} inviate | ${skipped} già compilato | ${errors} errori`);
}

main().catch(e => { console.error(e); process.exit(1); });
