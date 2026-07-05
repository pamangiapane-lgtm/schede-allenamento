// ══════════════════════════════════════════════════════════
// APPS SCRIPT — foglio DEV (Schede Squadra — Dati DEV)
// Incolla TUTTO questo codice nell'editor Apps Script del
// foglio DEV, poi fai: Deploy → Web app → Anyone → Deploy
// ══════════════════════════════════════════════════════════

const TOKEN = 'squadra2026-dev';

function doGet(e) {
  const token  = e.parameter.token;
  const azione = e.parameter.azione;
  const foglio = e.parameter.foglio;

  if (token !== TOKEN) return errore('Token non valido');

  try {
    if (azione === 'leggi') return leggi(foglio);
    return errore('Azione GET non valida: ' + azione);
  } catch (ex) {
    return errore(ex.toString());
  }
}

function doPost(e) {
  try {
    const body   = JSON.parse(e.postData.contents);
    const token  = body.token;
    const azione = body.azione;

    if (token !== TOKEN) return errore('Token non valido');

    if (azione === 'svuota_e_riscrivi') return svuotaERiscrivi(body);
    if (azione === 'log_progressi')     return logProgressi(body);
    return errore('Azione POST non valida: ' + azione);
  } catch (ex) {
    return errore(ex.toString());
  }
}

// ─── lettura foglio ───────────────────────────────────────
function leggi(nomeFoglio) {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(nomeFoglio);
  if (!sheet) return errore('Foglio non trovato: ' + nomeFoglio);

  const vals = sheet.getDataRange().getValues();
  if (vals.length < 2) return risposta({ ok: true, dati: [] });

  const heads = vals[0];
  const dati  = vals.slice(1).map(riga => {
    const obj = {};
    heads.forEach((h, i) => { obj[h] = riga[i]; });
    return obj;
  });
  return risposta({ ok: true, dati: dati });
}

// ─── riscrittura foglio ───────────────────────────────────
function svuotaERiscrivi(body) {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(body.foglio);
  if (!sheet) return errore('Foglio non trovato: ' + body.foglio);

  sheet.clearContents();
  const tutto = [body.intestazioni].concat(body.righe);
  sheet.getRange(1, 1, tutto.length, body.intestazioni.length).setValues(tutto);
  SpreadsheetApp.flush();
  return risposta({ ok: true, foglio: body.foglio, scritte: body.righe.length });
}

// ─── log progressi (salva seduta) ────────────────────────
function logProgressi(body) {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  let sheet   = ss.getSheetByName('Log_Progressi');
  if (!sheet) sheet = ss.insertSheet('Log_Progressi');

  const righe = body.righe || [];
  righe.forEach(r => sheet.appendRow(r));
  SpreadsheetApp.flush();
  return risposta({ ok: true, logged: righe.length });
}

// ─── helpers ──────────────────────────────────────────────
function risposta(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function errore(msg) {
  return risposta({ ok: false, errore: msg });
}
