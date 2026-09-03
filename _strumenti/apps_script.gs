const TOKEN = 'mv26-prd-3xF7wNqK';
const COACH_KEY = 'mv26-coach-8pL2wK';
const PROD_API_URL = 'https://script.google.com/macros/s/AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec';
const BACKUP_FOLDER_ID = '1iiM7V2CislN971wXZsOmnncGGj1lS1sG';
const SPREADSHEET_ID = '1FpjJONxZSqS-ZAdMCwk2gS3mudKEBAp5rE43UGPm6ow';

function doGet(e) {
  const token  = e.parameter.token;
  const azione = e.parameter.azione;
  const foglio = e.parameter.foglio;
  if (token !== TOKEN) return errore('Token non valido');
  try {
    if (azione === 'leggi') return leggi(foglio);
    if (azione === 'dashboard_summary') return dashboardSummary_();
    if (azione === 'leggi_note') return leggiNote(e.parameter.id, e.parameter.n_seduta);
    if (azione === 'leggi_tutte_note') return leggiTutteNote_();
    if (azione === 'salva_push_sub') {
      const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
      let sh = ss.getSheetByName('PushSub');
      if (!sh) { sh = ss.insertSheet('PushSub'); sh.appendRow(['ID_Giocatrice','Endpoint','P256dh','Auth','Aggiornato']); }
      const dati = sh.getDataRange().getValues();
      const idG = e.parameter.id_giocatrice, ep = e.parameter.endpoint, p2 = e.parameter.p256dh, au = e.parameter.auth;
      for (let i = 1; i < dati.length; i++) {
        if (String(dati[i][0]) === String(idG)) { sh.getRange(i+1,2,1,4).setValues([[ep,p2,au,new Date().toISOString()]]); return risposta({ok:true}); }
      }
      sh.appendRow([idG, ep, p2, au, new Date().toISOString()]);
      return risposta({ok: true});
    }
    if (azione === 'rimuovi_push_sub') {
      const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
      const sh = ss.getSheetByName('PushSub');
      if (!sh) return risposta({ ok: true, rimossa: false });
      const idG = e.parameter.id_giocatrice;
      const dati = sh.getDataRange().getValues();
      for (let i = dati.length - 1; i >= 1; i--) {
        if (String(dati[i][0]) === String(idG)) {
          sh.deleteRow(i + 1);
          return risposta({ ok: true, rimossa: true });
        }
      }
      return risposta({ ok: true, rimossa: false });
    }
    return errore('Azione GET non valida: ' + azione);
  } catch (ex) { return errore(ex.toString()); }
}

function doPost(e) {
  try {
    const body   = JSON.parse(e.postData.contents);
    const token  = body.token;
    const azione = body.azione;
    if (azione === 'salva_push_sub') return salvaPushSub_(body);
    if (token !== TOKEN) return errore('Token non valido');
    if (azione === 'log_progressi')     return logProgressi(body);
    if (azione === 'log_wellness')      return logWellness(body);
    if (azione === 'scrivi_foglio')     return scriviFoglio(body);
    if (azione === 'crea_foglio_info')  return creaFoglioInfo();
    if (azione === 'carica_da_github')  return caricaDaGithub_(body);
    if (azione === 'scrivi_nota_coach') return scriviNotaCoach_(body);
    if (azione === 'elimina_nota_coach') return eliminaNotaCoach_(body);
    if (azione === 'crea_backup') {
      if (String(body.coach_key) !== COACH_KEY) return errore('Coach key non valida');
      const nomeCopia = creaBackupManuale_();
      return risposta({ ok: true, nome: nomeCopia });
    }
    return errore('Azione POST non valida: ' + azione);
  } catch (ex) { return errore(ex.toString()); }
}

function salvaPushSub_(body) {
  const ss     = SpreadsheetApp.openById(SPREADSHEET_ID);
  let foglio   = ss.getSheetByName('PushSub');
  if (!foglio) {
    foglio = ss.insertSheet('PushSub');
    foglio.appendRow(['ID_Giocatrice','Endpoint','P256dh','Auth','Aggiornato']);
  }
  const idG = String(body.id_giocatrice || '').trim();
  if (!idG || !body.endpoint) return risposta({ ok: false, errore: 'Campi mancanti' });
  const dati = foglio.getDataRange().getValues();
  for (let i = 1; i < dati.length; i++) {
    if (String(dati[i][0]) === idG) {
      foglio.getRange(i+1,2,1,4).setValues([[body.endpoint,body.p256dh,body.auth,new Date().toISOString()]]);
      return risposta({ ok: true, aggiornato: true });
    }
  }
  foglio.appendRow([idG,body.endpoint,body.p256dh,body.auth,new Date().toISOString()]);
  return risposta({ ok: true, aggiornato: false });
}

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

function logProgressi(body) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Progressi');
  if (!sheet) sheet = ss.insertSheet('Progressi');
  if (body.righe && body.righe.length) {
    body.righe.forEach(r => sheet.appendRow(r));
    SpreadsheetApp.flush();
    return risposta({ ok: true, logged: body.righe.length });
  }
  const riga = [
    new Date().toISOString(),
    body.id_giocatrice, body.n_seduta, body.esercizio,
    body.data, body.valore, body.note || '',
    body.kg_usati || '', body.reps_fatte || '', body.rm_stimato || ''
  ];
  sheet.appendRow(riga);
  SpreadsheetApp.flush();
  return risposta({ ok: true, logged: 1 });
}

const FOGLIO_WHITELIST = new Set([
  'INFO', 'Giocatrici', 'Sedute', 'Esercizi', 'LibreriaIndividuale'
]);

function scriviFoglio(body) {
  const nomeFoglio = body.foglio;
  if (!FOGLIO_WHITELIST.has(nomeFoglio))
    return errore('Foglio non consentito: ' + nomeFoglio);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(nomeFoglio);
  if (!sheet) sheet = ss.insertSheet(nomeFoglio);
  sheet.clearContents();
  const intestazioni = body.intestazioni || [];
  const righe = body.righe || [];
  if (intestazioni.length) sheet.appendRow(intestazioni);
  righe.forEach(r => sheet.appendRow(r));
  SpreadsheetApp.flush();
  return risposta({ ok: true, scritte: righe.length });
}

function creaFoglioInfo() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('INFO');
  if (sheet) { sheet.clearContents(); sheet.clearFormats(); }
  else { sheet = ss.insertSheet('INFO'); }
  ss.setActiveSheet(sheet);
  ss.moveActiveSheet(1);

  const r1 = sheet.getRange('A1:D1');
  r1.merge().setValue('Schede Allenamento — Pre-Season 26')
    .setBackground('#1a3a6b').setFontColor('#ffffff')
    .setFontSize(14).setFontWeight('bold')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet.setRowHeight(1, 40);

  sheet.getRange('A3:D3').merge()
    .setValue('WEB APP — link da condividere con le atlete')
    .setFontWeight('bold');

  sheet.getRange('A4:D4').merge()
    .setValue('https://pamangiapane-lgtm.github.io/schede-allenamento/')
    .setFontColor('#1155cc');

  sheet.getRange('A6:D6').merge()
    .setValue('DEV — solo test (non condividere)')
    .setFontColor('#888888').setFontWeight('bold').setFontSize(9);

  sheet.getRange('A7:D7').merge()
    .setValue('https://pamangiapane-lgtm.github.io/schede-allenamento/dev/')
    .setFontColor('#888888').setFontSize(9);

  sheet.setColumnWidth(1, 450);
  SpreadsheetApp.flush();
  return risposta({ ok: true, foglio: 'INFO' });
}

function logWellness(body) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Wellness');
  if (!sheet) {
    sheet = ss.insertSheet('Wellness');
    sheet.appendRow(['Timestamp','ID_Giocatrice','Data','Qualita_Sonno','Fatica','Disponibilita','Dolori','Note']);
  }
  const riga = [
    new Date().toISOString(),
    body.id_giocatrice,
    body.data ?? '',
    body.qualita_sonno ?? '',
    body.fatica ?? '',
    body.disponibilita ?? '',
    body.dolori ?? '',
    body.note ?? ''
  ];
  const dati = sheet.getDataRange().getValues();
  for (let i = 1; i < dati.length; i++) {
    if (String(dati[i][1]) === String(body.id_giocatrice) && String(dati[i][2]) === String(body.data)) {
      sheet.getRange(i + 1, 1, 1, riga.length).setValues([riga]);
      SpreadsheetApp.flush();
      return risposta({ ok: true, aggiornato: true });
    }
  }
  sheet.appendRow(riga);
  SpreadsheetApp.flush();
  return risposta({ ok: true, logged: 1 });
}

function leggiTutteNote_() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Note_Coach');
  if (!sheet) return risposta({ ok: true, note: [] });
  const rows = leggiRighe_(sheet);
  return risposta({ ok: true, note: rows.reverse().map(r => ({
    timestamp:     String(r.Timestamp   || ''),
    id_giocatrice: String(r.ID_Giocatrice || ''),
    tipo:          r.Tipo      || 'generale',
    n_seduta:      r.N_Seduta  || '',
    testo:         r.Testo     || '',
    data_inizio:   r.Data_Inizio ? new Date(r.Data_Inizio).toISOString().split('T')[0] : '',
    data_fine:     r.Data_Fine   ? new Date(r.Data_Fine).toISOString().split('T')[0]   : ''
  })) });
}

function scriviNotaCoach_(body) {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Note_Coach');
  if (!sheet) return errore('Foglio Note_Coach non trovato');
  const ts = new Date().toISOString();
  sheet.appendRow([
    ts,
    body.id_giocatrice || 'TUTTE',
    body.tipo          || 'generale',
    body.n_seduta      || '',
    body.testo         || '',
    body.data_inizio   || '',
    body.data_fine     || ''
  ]);
  SpreadsheetApp.flush();
  return risposta({ ok: true, timestamp: ts });
}

function eliminaNotaCoach_(body) {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Note_Coach');
  if (!sheet) return errore('Foglio Note_Coach non trovato');
  const vals = sheet.getDataRange().getValues();
  for (let i = vals.length - 1; i >= 1; i--) {
    if (String(vals[i][0]) === String(body.timestamp)) {
      sheet.deleteRow(i + 1);
      SpreadsheetApp.flush();
      return risposta({ ok: true });
    }
  }
  return errore('Nota non trovata');
}

function leggiNote(idGiocatrice, nSeduta) {
  if (!idGiocatrice) return errore('id mancante');
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Note_Coach');
  if (!sheet) return risposta({ ok: true, note: [] });

  const rows  = leggiRighe_(sheet);
  const oggi  = new Date(); oggi.setHours(0, 0, 0, 0);

  const attive = rows.filter(r => {
    if (String(r.ID_Giocatrice) !== String(idGiocatrice) && String(r.ID_Giocatrice) !== 'TUTTE') return false;
    const inizio = r.Data_Inizio ? new Date(r.Data_Inizio) : null;
    const fine   = r.Data_Fine   ? new Date(r.Data_Fine)   : null;
    if (inizio) inizio.setHours(0, 0, 0, 0);
    if (fine)   fine.setHours(23, 59, 59, 999);
    if (inizio && oggi < inizio) return false;
    if (fine   && oggi > fine)   return false;
    return true;
  }).map(r => ({
    tipo:      r.Tipo || 'generale',
    n_seduta:  r.N_Seduta || '',
    testo:     r.Testo || '',
    timestamp: r.Timestamp || ''
  }));

  return risposta({ ok: true, note: attive });
}

// Esegui UNA VOLTA dall'editor per creare il foglio Note_Coach
function creaFoglioNoteCoach() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Note_Coach');
  if (sheet) { Logger.log('Foglio Note_Coach esiste già.'); return; }
  sheet = ss.insertSheet('Note_Coach');
  const heads = ['Timestamp','ID_Giocatrice','Tipo','N_Seduta','Testo','Data_Inizio','Data_Fine'];
  sheet.appendRow(heads);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, heads.length).setFontWeight('bold').setBackground('#1a3a6b').setFontColor('#ffffff');
  sheet.setColumnWidth(5, 300);
  SpreadsheetApp.flush();
  Logger.log('Foglio Note_Coach creato.');
}

// Esegui UNA VOLTA per creare il foglio Wellness con le intestazioni
function creaFoglioWellness() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Wellness');
  if (sheet) {
    Logger.log('Foglio Wellness esiste già.');
    return;
  }
  sheet = ss.insertSheet('Wellness');
  sheet.appendRow(['Timestamp','ID_Giocatrice','Data','Qualita_Sonno','Dolori','Energia','Note']);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#1a3a6b').setFontColor('#ffffff');
  SpreadsheetApp.flush();
  Logger.log('Foglio Wellness creato.');
}

// ── SETUP UNA TANTUM ─────────────────────────────────────────────────────────

// Esegui UNA VOLTA dall'editor, poi puoi ignorare questa funzione
function aggiungiColonnaLingua() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Giocatrici');
  if (!sheet) throw new Error('Foglio Giocatrici non trovato');

  const vals  = sheet.getDataRange().getValues();
  const heads = vals[0];

  // Aggiunge colonna Lingua se non esiste già
  let colLingua = heads.indexOf('Lingua');
  if (colLingua === -1) {
    colLingua = heads.length;
    sheet.getRange(1, colLingua + 1).setValue('Lingua');
  }

  // Imposta EN per Anja (ID=4) e Nelly (ID=14)
  const colID = heads.indexOf('ID');
  if (colID === -1) throw new Error('Colonna ID non trovata');

  vals.slice(1).forEach((riga, i) => {
    const id = String(riga[colID]);
    if (id === '4' || id === '14') {
      sheet.getRange(i + 2, colLingua + 1).setValue('EN');
    }
  });

  SpreadsheetApp.flush();
  Logger.log('Fatto — colonna Lingua aggiunta, EN impostato per ID 4 e 14');
}

function leggiRighe_(sheet) {
  const vals = sheet.getDataRange().getValues();
  if (vals.length < 2) return [];
  const heads = vals[0];
  return vals.slice(1).map(riga => {
    const obj = {};
    heads.forEach((h, i) => { obj[h] = riga[i]; });
    return obj;
  });
}

// ── REPORT SETTIMANALE STAFF (Google Slides) ─────────────────────────────────

const FOLDER_STAFF_ID = '1H8NcBNeUi1Jr7b-fx3blaPB8vRKfTrT2';
function creaBackup() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const file  = DriveApp.getFileById(ss.getId());
  const oggi  = new Date();
  const ts    = Utilities.formatDate(oggi, 'Europe/Rome', 'yyyy-MM-dd');
  const nome  = 'BACKUP-' + ts + ' — Schede Squadra';
  const mesiIT = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
                  'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  const meseLbl = Utilities.formatDate(oggi, 'Europe/Rome', 'yyyy-MM') + ' — ' + mesiIT[oggi.getMonth()];
  const root  = DriveApp.getFolderById(BACKUP_FOLDER_ID);
  const subs  = root.getFoldersByName(meseLbl);
  const sub   = subs.hasNext() ? subs.next() : root.createFolder(meseLbl);
  const copy  = file.makeCopy(nome, sub);
  Logger.log('Backup creato: ' + copy.getUrl());
}

function creaBackupManuale_() {
  const ss   = SpreadsheetApp.getActiveSpreadsheet();
  const file = DriveApp.getFileById(ss.getId());
  const oggi = new Date();
  const nome = 'Backup_' + ss.getName() + '_' + Utilities.formatDate(oggi, 'Europe/Rome', 'yyyy-MM-dd_HHmm');
  const mesiIT = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
                  'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  const meseLbl = Utilities.formatDate(oggi, 'Europe/Rome', 'yyyy-MM') + ' — ' + mesiIT[oggi.getMonth()];
  const root = DriveApp.getFolderById(BACKUP_FOLDER_ID);
  const subs = root.getFoldersByName(meseLbl);
  const sub  = subs.hasNext() ? subs.next() : root.createFolder(meseLbl);
  file.makeCopy(nome, sub);
  return nome;
}

function installaBackupTrigger() {
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'creaBackup')
    .forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('creaBackup')
    .timeBased()
    .everyDays(1)
    .atHour(3)
    .create();
}

function risposta(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

function salvaPushSub(body) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let foglio = ss.getSheetByName('PushSub');
  if (!foglio) {
    foglio = ss.insertSheet('PushSub');
    foglio.appendRow(['ID_Giocatrice','Endpoint','P256dh','Auth','Aggiornato']);
  }
  const dati = foglio.getDataRange().getValues();
  for (let i = 1; i < dati.length; i++) {
    if (String(dati[i][0]) === String(body.id_giocatrice)) {
      foglio.getRange(i + 1, 2, 1, 4).setValues([[body.endpoint, body.p256dh, body.auth, new Date().toISOString()]]);
      return risposta({ok: true});
    }
  }
  foglio.appendRow([body.id_giocatrice, body.endpoint, body.p256dh, body.auth, new Date().toISOString()]);
  return risposta({ok: true});
}

function errore(msg) { return risposta({ ok: false, errore: msg }); }

function caricaDaGithub_(body) {
  function fetchCsv(url) {
    const resp = UrlFetchApp.fetch(url, {muteHttpExceptions: true});
    if (resp.getResponseCode() !== 200)
      throw new Error('fetch fallita ' + resp.getResponseCode() + ': ' + url);
    const parsed = Utilities.parseCsv(resp.getContentText('UTF-8'));
    return { intestazioni: parsed[0], dati: parsed.slice(1) };
  }
  function scriviBulk(nomeFoglio, intestazioni, righe) {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(nomeFoglio);
    if (!sheet) sheet = ss.insertSheet(nomeFoglio);
    sheet.clearContents();
    const tutto = [intestazioni, ...righe];
    sheet.getRange(1, 1, tutto.length, intestazioni.length).setValues(tutto);
  }
  const sw1 = fetchCsv(body.url_sedute_w1);
  const sw2 = fetchCsv(body.url_sedute_w2);
  const ew1 = fetchCsv(body.url_esercizi_w1);
  const ew2 = fetchCsv(body.url_esercizi_w2);
  const tutteSedute   = sw1.dati.concat(sw2.dati);
  const tuttiEsercizi = ew1.dati.concat(ew2.dati);
  scriviBulk('Sedute',   sw1.intestazioni.concat(['Ordine']), tutteSedute.map((r, i) => r.concat([i + 1])));
  scriviBulk('Esercizi', ew1.intestazioni, tuttiEsercizi);
  return risposta({ ok: true, sedute: tutteSedute.length, esercizi: tuttiEsercizi.length });
}

function dashboardSummary_() {
  const ss  = SpreadsheetApp.getActiveSpreadsheet();
  const now = new Date();

  const cut7  = new Date(now); cut7.setDate(now.getDate() - 7);
  const cut28 = new Date(now); cut28.setDate(now.getDate() - 28);

  const SKIP = new Set(['RPE-seduta', 'Fatica-seduta', 'Peso-corporeo']);

  const PRE_SEASON_START = new Date('2026-08-24T00:00:00Z');
  const PRE_SEASON_DUR   = 66;

  const giocatrici = _leggiOggetti(ss, 'Giocatrici')
    .filter(g => g.ID && !isNaN(parseInt(g.ID)) && String(g.ID) !== '99');
  const progressi  = _leggiOggetti(ss, 'Progressi');
  const wellness   = _leggiOggetti(ss, 'Wellness');

  // ── Raggruppa righe per (ID_Giocatrice, N_Seduta) ─────────────────────────
  const sesMap = {};
  progressi.forEach(p => {
    if (!p.Timestamp || !p.N_Seduta) return;
    const ts = new Date(p.Timestamp);
    if (isNaN(ts)) return;
    const key = `${p.ID_Giocatrice}__${p.N_Seduta}`;
    if (!sesMap[key]) {
      sesMap[key] = { id: String(p.ID_Giocatrice), ts_end: ts, ts_start: ts, rpe: null, hasRealRows: false };
    }
    const s = sesMap[key];
    if (ts > s.ts_end) s.ts_end = ts;
    if (p.Esercizio === 'RPE-seduta') {
      if (s.rpe === null) s.rpe = Number(p.Valore);
    } else if (!SKIP.has(p.Esercizio) && p.Valore) {
      s.hasRealRows = true;
      if (ts < s.ts_start) s.ts_start = ts;
    }
  });

  // RPE senza N_Seduta → sessione più vicina disponibile per quell'atleta
  progressi
    .filter(p => p.Esercizio === 'RPE-seduta' && !p.N_Seduta && p.Timestamp && p.Valore)
    .forEach(p => {
      const rpeTs = new Date(p.Timestamp);
      if (isNaN(rpeTs)) return;
      const id = String(p.ID_Giocatrice);
      let best = null, bestDiff = Infinity;
      Object.values(sesMap).forEach(s => {
        if (s.id !== id || s.rpe !== null) return;
        const diff = Math.abs(rpeTs.getTime() - s.ts_end.getTime());
        if (diff < bestDiff) { best = s; bestDiff = diff; }
      });
      if (best) best.rpe = Number(p.Valore);
    });

  // ── Durata e sRPE per seduta ───────────────────────────────────────────────
  const sessions = Object.values(sesMap).map(s => {
    const dur = !s.hasRealRows ? 0
              : s.ts_end >= PRE_SEASON_START ? PRE_SEASON_DUR
              : Math.max(0, Math.round((s.ts_end - s.ts_start) / 60000));
    const srpe = (s.rpe !== null && dur >= 10) ? s.rpe * dur : null;
    return { id: s.id, ts: s.ts_end, srpe };
  });

  const atlete = giocatrici.map(g => {
    const id = String(g.ID);
    const pEserc = progressi.filter(p =>
      String(p.ID_Giocatrice) === id && !SKIP.has(p.Esercizio) && p.Valore && p.Timestamp
    );
    const sed7  = new Set(pEserc.filter(p => new Date(p.Timestamp) >= cut7).map(p => p.N_Seduta)).size;
    const sed28 = new Set(pEserc.filter(p => new Date(p.Timestamp) >= cut28).map(p => p.N_Seduta)).size;
    const athSes = sessions.filter(s => s.id === id && s.srpe !== null);
    const srpe7  = athSes.filter(s => s.ts >= cut7).reduce((sum, s) => sum + s.srpe, 0);
    const srpe28 = athSes.filter(s => s.ts >= cut28).reduce((sum, s) => sum + s.srpe, 0);
    const chronic = srpe28 / 4;
    const acwr    = chronic > 0 ? Math.round(srpe7 / chronic * 100) / 100 : null;
    const rpe7vals = progressi
      .filter(p => String(p.ID_Giocatrice) === id && p.Esercizio === 'RPE-seduta'
                && p.Timestamp && new Date(p.Timestamp) >= cut7)
      .map(p => Number(p.Valore)).filter(v => !isNaN(v));
    const avgRpe7 = rpe7vals.length
      ? Math.round(rpe7vals.reduce((a, b) => a + b, 0) / rpe7vals.length * 10) / 10 : null;
    const w7 = wellness.filter(w =>
      String(w.ID_Giocatrice) === id && w.Timestamp && new Date(w.Timestamp) >= cut7
    );
    const _avgW = arr => {
      const v = arr.map(Number).filter(x => !isNaN(x) && x > 0);
      return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length * 10) / 10 : null;
    };
    return {
      id, nome: g.Nome, ruolo: g.Ruolo || null,
      sessions_7d: sed7, sessions_28d: sed28,
      avg_rpe_7d: avgRpe7, srpe_7d: srpe7, srpe_28d_total: srpe28, acwr,
      wellness_entries_7d: w7.length,
      avg_sonno_7d:    _avgW(w7.map(w => w.Qualita_Sonno)),
      avg_fatica_7d:   _avgW(w7.map(w => w.Fatica)),
      avg_readines_7d: _avgW(w7.map(w => w.Readines)),
      avg_dolori_7d:   _avgW(w7.map(w => w.Dolori)),
    };
  });

  const teamTotalSed7 = new Set(
    progressi
      .filter(p => !SKIP.has(p.Esercizio) && p.Valore && p.Timestamp && new Date(p.Timestamp) >= cut7)
      .map(p => `${p.ID_Giocatrice}__${p.N_Seduta}`)
  ).size;

  const ruoliMap = {};
  atlete.forEach(a => {
    const r = a.ruolo || 'N/D';
    if (!ruoliMap[r]) ruoliMap[r] = { atlete: 0, acwrVals: [], sed7Vals: [] };
    ruoliMap[r].atlete++;
    if (a.acwr !== null) ruoliMap[r].acwrVals.push(a.acwr);
    ruoliMap[r].sed7Vals.push(a.sessions_7d);
  });
  const per_ruolo = Object.entries(ruoliMap).map(([ruolo, d]) => {
    const _avg = arr => arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length * 100) / 100 : null;
    return { ruolo, atlete: d.atlete, avg_acwr: _avg(d.acwrVals), avg_sessions_7d: _avg(d.sed7Vals) };
  });

  return ContentService
    .createTextOutput(JSON.stringify({
      ok: true, generato: now.toISOString(),
      team: { totale_atlete: giocatrici.length, total_sessions_7d: teamTotalSed7 },
      per_ruolo, atlete,
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function _leggiOggetti(ss, nomeSheet) {
  const sheet = ss.getSheetByName(nomeSheet);
  if (!sheet) return [];
  const vals = sheet.getDataRange().getValues();
  if (vals.length < 2) return [];
  const headers = vals[0];
  return vals.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => { if (h) obj[String(h)] = row[i] !== undefined ? row[i] : ''; });
    return obj;
  });
}
