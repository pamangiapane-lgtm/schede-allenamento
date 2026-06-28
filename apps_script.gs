// =====================================================
// Schede Squadra — Web App
// Incolla questo codice in Estensioni → Apps Script
// poi clicca Deploy → New deployment → Web app
// =====================================================

const TOKEN = 'squadra2026'; // puoi cambiarlo se vuoi

function doGet(e) {
  try {
    if (e.parameter.token !== TOKEN) return risposta({errore: 'token non valido'});
    const azione = e.parameter.azione;

    if (azione === 'leggi') {
      const foglio = e.parameter.foglio;
      const dati = leggiTutto(foglio);
      return risposta({ok: true, dati: dati});
    }

    return risposta({errore: 'azione non riconosciuta'});
  } catch(err) {
    return risposta({errore: err.message});
  }
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    if (body.token !== TOKEN) return risposta({errore: 'token non valido'});
    const azione = body.azione;

    if (azione === 'scrivi_riga') {
      scriviRiga(body.foglio, body.riga);
      return risposta({ok: true});
    }

    if (azione === 'svuota_e_riscrivi') {
      svuotaERiscrivi(body.foglio, body.intestazioni, body.righe);
      return risposta({ok: true});
    }

    if (azione === 'log_progressi') {
      const riga = [
        new Date().toISOString(),
        body.id_giocatrice,
        body.n_seduta,
        body.esercizio,
        body.data,
        body.valore,
        body.note || '',
        body.kg_usati  || '',
        body.reps_fatte || '',
        body.rm_stimato || ''
      ];
      scriviRiga('Progressi', riga);
      return risposta({ok: true});
    }

    return risposta({errore: 'azione non riconosciuta'});
  } catch(err) {
    return risposta({errore: err.message});
  }
}

// --- Funzioni interne ---

function leggiTutto(nomeFoglio) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const foglio = ss.getSheetByName(nomeFoglio);
  if (!foglio) return [];
  const dati = foglio.getDataRange().getValues();
  if (dati.length < 2) return [];
  const intestazioni = dati[0];
  return dati.slice(1).map(riga => {
    const obj = {};
    intestazioni.forEach((col, i) => { obj[col] = riga[i]; });
    return obj;
  });
}

function scriviRiga(nomeFoglio, riga) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const foglio = ss.getSheetByName(nomeFoglio);
  foglio.appendRow(riga);
}

function svuotaERiscrivi(nomeFoglio, intestazioni, righe) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const foglio = ss.getSheetByName(nomeFoglio);
  foglio.clearContents();
  foglio.appendRow(intestazioni);
  righe.forEach(r => foglio.appendRow(r));
}

function risposta(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
