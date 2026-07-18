const TOKEN = 'mv26-dev-9kR4tLqB';

function doGet(e) {
  const token  = e.parameter.token;
  const azione = e.parameter.azione;
  const foglio = e.parameter.foglio;
  if (token !== TOKEN) return errore('Token non valido');
  try {
    if (azione === 'leggi') return leggi(foglio);
    if (azione === 'leggi_note') return leggiNote(e.parameter.id, e.parameter.n_seduta);
    if (azione === 'leggi_tutte_note') return leggiTutteNote_();
    return errore('Azione GET non valida: ' + azione);
  } catch (ex) { return errore(ex.toString()); }
}

function doPost(e) {
  try {
    const body   = JSON.parse(e.postData.contents);
    const token  = body.token;
    const azione = body.azione;
    if (token !== TOKEN) return errore('Token non valido');
    if (azione === 'log_progressi')     return logProgressi(body);
    if (azione === 'log_wellness')      return logWellness(body);
    if (azione === 'scrivi_foglio')     return scriviFoglio(body);
    if (azione === 'crea_foglio_info')  return creaFoglioInfo();
    if (azione === 'scrivi_nota_coach') return scriviNotaCoach_(body);
    if (azione === 'elimina_nota_coach') return eliminaNotaCoach_(body);
    return errore('Azione POST non valida: ' + azione);
  } catch (ex) { return errore(ex.toString()); }
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
    sheet.appendRow(['Timestamp','ID_Giocatrice','Data','Qualita_Sonno','Dolori','Energia','Note']);
  }
  const riga = [
    new Date().toISOString(),
    body.id_giocatrice,
    body.data || '',
    body.qualita_sonno || '',
    body.dolori || '',
    body.energia || '',
    body.note || ''
  ];
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
    if (String(r.ID_Giocatrice) !== String(idGiocatrice)) return false;
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

// ── EMAIL DIGEST ─────────────────────────────────────────────────────────────

const EMAIL_COACH = 'pamangiapane@gmail.com';

function inviaDigest() {
  const ss         = SpreadsheetApp.getActiveSpreadsheet();
  const sheetG     = ss.getSheetByName('Giocatrici');
  const sheetP     = ss.getSheetByName('Progressi');
  if (!sheetG || !sheetP) return;

  const giocatrici = leggiRighe_(sheetG);
  const progressi  = leggiRighe_(sheetP);

  const ora  = new Date();
  const cut7 = new Date(ora); cut7.setDate(ora.getDate() - 7);

  // Per ogni atleta calcola: ultimo log, sedute ultimi 7gg, RPE medio
  const righe = giocatrici
    .filter(g => g.ID && !isNaN(parseInt(g.ID)))
    .map(g => {
      const logsEserc = progressi.filter(p =>
        String(p.ID_Giocatrice) === String(g.ID) &&
        p.Esercizio !== 'RPE-seduta' && p.Esercizio !== 'Fatica-seduta' && p.Esercizio !== 'Peso-corporeo' &&
        p.Valore
      );
      const logsRPE = progressi.filter(p =>
        String(p.ID_Giocatrice) === String(g.ID) && p.Esercizio === 'RPE-seduta' && p.Valore
      );

      // Ultimo log esercizi
      let ultimoTs = null;
      logsEserc.forEach(p => {
        const ts = p.Timestamp ? new Date(p.Timestamp) : null;
        if (ts && (!ultimoTs || ts > ultimoTs)) ultimoTs = ts;
      });
      const giorniSilenzio = ultimoTs ? Math.floor((ora - ultimoTs) / 86400000) : null;

      // Sedute ultimi 7gg
      const seduteSettimana = new Set(
        logsEserc.filter(p => {
          const ts = p.Timestamp ? new Date(p.Timestamp) : null;
          return ts && ts >= cut7;
        }).map(p => p.N_Seduta)
      ).size;

      // RPE medio ultimi 7gg
      const rpeVals = logsRPE
        .filter(p => { const ts = p.Timestamp ? new Date(p.Timestamp) : null; return ts && ts >= cut7; })
        .map(p => Number(p.Valore)).filter(v => !isNaN(v));
      const rpeMedia = rpeVals.length
        ? (rpeVals.reduce((a, b) => a + b, 0) / rpeVals.length).toFixed(1)
        : null;

      // Status
      let status;
      if (giorniSilenzio === null) status = 'mai';
      else if (giorniSilenzio > 7) status = 'rosso';
      else if (giorniSilenzio > 3) status = 'giallo';
      else                          status = 'verde';

      let ultimoLabel;
      if (giorniSilenzio === null) ultimoLabel = 'mai';
      else if (giorniSilenzio === 0) ultimoLabel = 'oggi';
      else if (giorniSilenzio === 1) ultimoLabel = 'ieri';
      else ultimoLabel = giorniSilenzio + 'gg fa';

      return { nome: g.Nome, status, ultimoLabel, seduteSettimana, rpeMedia, rpeVals };
    })
    .sort((a, b) => {
      const ord = { mai: 0, rosso: 1, giallo: 2, verde: 3 };
      return ord[a.status] - ord[b.status];
    });

  const urgenti   = righe.filter(r => r.status === 'mai' || r.status === 'rosso').length;
  const rpeAlti   = righe.filter(r => r.rpeVals.some(v => v >= 8));
  const totSedute = righe.reduce((s, r) => s + r.seduteSettimana, 0);

  const colore = { mai: '#f8d7da', rosso: '#f8d7da', giallo: '#fff3cd', verde: '#d4edda' };
  const emoji  = { mai: '⚫', rosso: '🔴', giallo: '🟡', verde: '🟢' };

  const righeHtml = righe.map(r => `
    <tr style="background:${colore[r.status]}">
      <td style="padding:6px 10px">${emoji[r.status]} ${r.nome}</td>
      <td style="padding:6px 10px;text-align:center">${r.ultimoLabel}</td>
      <td style="padding:6px 10px;text-align:center">${r.seduteSettimana}</td>
      <td style="padding:6px 10px;text-align:center">${r.rpeMedia !== null ? r.rpeMedia : '—'}</td>
    </tr>`).join('');

  const rpeAltiHtml = rpeAlti.length
    ? '<p style="color:#c33;font-weight:bold">⚠️ RPE alto (≥8): ' + rpeAlti.map(r => r.nome + ' (' + Math.max(...r.rpeVals) + ')').join(', ') + '</p>'
    : '<p style="color:#2a9d3a">✓ Nessun RPE anomalo questa settimana</p>';

  const giornoNomi = ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'];
  const giornoOra = giornoNomi[ora.getDay()] + ' ' + ora.getDate() + '/' + (ora.getMonth()+1) + ' ' + ora.getHours() + ':00';

  const body = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
  <div style="background:#1a3a6b;color:#fff;padding:16px 20px;border-radius:8px 8px 0 0">
    <h2 style="margin:0;font-size:1.1rem">📋 Marsala Volley — Digest Allenamenti</h2>
    <p style="margin:4px 0 0;font-size:0.85rem;opacity:0.8">${giornoOra} · Ultimi 7 giorni</p>
  </div>
  <div style="border:1px solid #ddd;border-top:none;padding:16px 20px;border-radius:0 0 8px 8px">
    <div style="display:flex;gap:24px;margin-bottom:16px">
      <div style="text-align:center"><strong style="font-size:1.4rem;color:#c33">${urgenti}</strong><br><span style="font-size:0.8rem;color:#666">urgenti</span></div>
      <div style="text-align:center"><strong style="font-size:1.4rem">${totSedute}</strong><br><span style="font-size:0.8rem;color:#666">sedute tot</span></div>
      <div style="text-align:center"><strong style="font-size:1.4rem">${righe.filter(r=>r.status==='verde').length}</strong><br><span style="font-size:0.8rem;color:#666">atlete ok</span></div>
    </div>
    ${rpeAltiHtml}
    <table style="width:100%;border-collapse:collapse;margin-top:8px">
      <thead>
        <tr style="background:#f0f0f0;font-size:0.78rem;text-transform:uppercase">
          <th style="padding:6px 10px;text-align:left">Atleta</th>
          <th style="padding:6px 10px">Ultimo log</th>
          <th style="padding:6px 10px">Sed. (7gg)</th>
          <th style="padding:6px 10px">RPE medio</th>
        </tr>
      </thead>
      <tbody>${righeHtml}</tbody>
    </table>
    <p style="margin-top:16px;font-size:0.8rem;color:#888;text-align:center">
      <a href="https://pamangiapane-lgtm.github.io/schede-allenamento/report.html?coach=mv26-coach-8pL2wK" style="color:#1a3a6b">→ Apri report completo</a>
    </p>
  </div>
</div>`;

  const oggetto = urgenti > 0
    ? `⚠️ Marsala Volley — ${urgenti} atlete non si allenano (${giornoOra})`
    : `✅ Marsala Volley — Tutte ok (${giornoOra})`;

  MailApp.sendEmail({ to: EMAIL_COACH, subject: oggetto, htmlBody: body });
}

// Chiama questa funzione UNA VOLTA sola dall'editor Apps Script per installare i trigger
function installaTrigger() {
  // Rimuovi trigger inviaDigest esistenti per evitare duplicati
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'inviaDigest')
    .forEach(t => ScriptApp.deleteTrigger(t));

  // Lun, Mer, Ven, Sab alle 20:00
  [[ScriptApp.WeekDay.MONDAY, 20],
   [ScriptApp.WeekDay.WEDNESDAY, 20],
   [ScriptApp.WeekDay.FRIDAY, 20],
   [ScriptApp.WeekDay.SATURDAY, 20]].forEach(([giorno, ora]) => {
    ScriptApp.newTrigger('inviaDigest')
      .timeBased()
      .onWeekDay(giorno)
      .atHour(ora)
      .create();
  });
}

// ── RIEPILOGO SETTIMANALE ATLETE ─────────────────────────────────────────────

const EMAIL_ATLETE = {
  '1':  'allasiaveronica1@gmail.com',
  '2':  'maria2004.marcuzzi@gmail.com',
  '3':  'victoria.sassolini@gmail.com',
  '4':  'anjaasonja2@gmail.com',
  '5':  'chiara.lodico11@gmail.com',
  '7':  'elisa.bole613@gmail.com',
  '8':  'Fede.nonnati@gmail.com',
  '9':  'sara.dodi7@icloud.com',
  '11': 'lunacicola18@gmail.com',
  '12': 'erin.grippo@icloud.com',
  '13': 'giulia.caserta21@gmail.com',
};

function inviaRiepilogoSettimanale() {
  const ss     = SpreadsheetApp.getActiveSpreadsheet();
  const sheetG = ss.getSheetByName('Giocatrici');
  const sheetP = ss.getSheetByName('Progressi');
  const sheetW = ss.getSheetByName('Wellness');
  const sheetN = ss.getSheetByName('Note_Coach');
  if (!sheetG || !sheetP) { Logger.log('Fogli mancanti'); return; }

  const giocatrici = leggiRighe_(sheetG).filter(g => g.ID && !isNaN(parseInt(g.ID)));
  const progressi  = leggiRighe_(sheetP);
  const wellness   = sheetW ? leggiRighe_(sheetW) : [];
  const noteCoach  = sheetN ? leggiRighe_(sheetN) : [];

  const ora  = new Date();
  const cut7 = new Date(ora); cut7.setDate(ora.getDate() - 7);

  const oggi = new Date(); oggi.setHours(0, 0, 0, 0);
  const noteAttive = noteCoach.filter(n => {
    const ini = n.Data_Inizio ? new Date(n.Data_Inizio) : null;
    const fin = n.Data_Fine   ? new Date(n.Data_Fine)   : null;
    if (ini) { const d = new Date(ini); d.setHours(0,0,0,0); if (oggi < d) return false; }
    if (fin) { const d = new Date(fin); d.setHours(23,59,59,999); if (oggi > d) return false; }
    return true;
  });

  const SKIP_SET = new Set(['RPE-seduta', 'Fatica-seduta', 'Peso-corporeo']);
  const fmt  = d  => d.getDate() + '/' + (d.getMonth() + 1);
  const dow  = ora.getDay();
  const lune = new Date(ora);
  lune.setDate(ora.getDate() - ((dow === 0 ? 7 : dow) - 1));
  lune.setHours(0, 0, 0, 0);
  const luneScorso = new Date(lune); luneScorso.setDate(lune.getDate() - 7);
  const domScorso  = new Date(lune); domScorso.setMilliseconds(-1);
  const settLabel  = fmt(luneScorso) + '–' + fmt(domScorso) + ' ' + domScorso.getFullYear();
  const inRange    = ts => { const d = new Date(ts); return d >= cut7 && d <= ora; };
  const IS_DEV_SCRIPT = TOKEN === 'mv26-dev-9kR4tLqB';

  giocatrici.forEach(g => {
    const email = EMAIL_ATLETE[String(g.ID)];
    if (!email) { Logger.log('Email mancante per ID ' + g.ID + ' (' + g.Nome + ')'); return; }

    const lingua  = String(g.Lingua || '').trim().toUpperCase() === 'EN' ? 'EN' : 'IT';
    const pAll    = progressi.filter(p => String(p.ID_Giocatrice) === String(g.ID) && p.Valore);
    const pEserc  = pAll.filter(p => !SKIP_SET.has(p.Esercizio) && p.Timestamp && inRange(p.Timestamp));
    const nSedute = new Set(pEserc.map(p => p.N_Seduta)).size;

    const maxPerEs = {};
    pEserc.forEach(p => {
      const m = String(p.Valore).match(/[\d.]+/);
      if (!m) return;
      const kg = parseFloat(m[0]);
      if (!maxPerEs[p.Esercizio] || kg > maxPerEs[p.Esercizio].kg)
        maxPerEs[p.Esercizio] = { kg };
    });
    const topCarichi = Object.entries(maxPerEs).sort((a, b) => b[1].kg - a[1].kg).slice(0, 5);

    const wSett   = wellness.filter(w => String(w.ID_Giocatrice) === String(g.ID) && w.Timestamp && inRange(w.Timestamp));
    const avgW    = arr => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null;
    const sonno   = avgW(wSett.map(w => Number(w.Qualita_Sonno)).filter(v => !isNaN(v) && v > 0));
    const dolori  = avgW(wSett.map(w => Number(w.Dolori)).filter(v => !isNaN(v) && v > 0));
    const energia = avgW(wSett.map(w => Number(w.Energia)).filter(v => !isNaN(v) && v > 0));

    const noteAtleta = noteAttive
      .filter(n => String(n.ID_Giocatrice) === String(g.ID) || n.ID_Giocatrice === 'TUTTE')
      .map(n => String(n.Testo).trim()).filter(Boolean);

    const nome = g.Nome ? g.Nome.split(' ')[0] : String(g.Nome);
    const html = lingua === 'EN'
      ? buildRiepilogoEN_(nome, settLabel, nSedute, topCarichi, sonno, dolori, energia, noteAtleta, g.ID, IS_DEV_SCRIPT)
      : buildRiepilogoIT_(nome, settLabel, nSedute, topCarichi, sonno, dolori, energia, noteAtleta, g.ID, IS_DEV_SCRIPT);

    const subjectBase = lingua === 'EN'
      ? 'Marsala Volley — Weekly summary ' + settLabel
      : 'Marsala Volley — Riepilogo settimana ' + settLabel;

    const dest    = IS_DEV_SCRIPT ? EMAIL_COACH : email;
    const subject = IS_DEV_SCRIPT ? '[TEST ' + g.Nome + '] ' + subjectBase : subjectBase;

    MailApp.sendEmail({ to: dest, subject: subject, htmlBody: html });
    Logger.log('Inviato a ' + dest + ' (' + g.Nome + ')');
  });

  Logger.log('inviaRiepilogoSettimanale completato — ' + ora.toISOString());
}

function buildRiepilogoIT_(nome, settLabel, nSedute, topCarichi, sonno, dolori, energia, noteAtleta, idG, isDev) {
  const BASE = isDev
    ? 'https://pamangiapane-lgtm.github.io/schede-allenamento/dev/'
    : 'https://pamangiapane-lgtm.github.io/schede-allenamento/';
  const f1 = v => v !== null ? v.toFixed(1) : '—';

  const carichiRighe = topCarichi.length
    ? topCarichi.map(([es, d]) =>
        '<tr><td style="padding:5px 10px;color:#334155;font-size:.82rem">' + esc_(es) +
        '</td><td style="padding:5px 10px;text-align:right;font-weight:700;color:#1a3a6b;font-size:.82rem">' +
        d.kg + ' kg</td></tr>').join('')
    : '<tr><td colspan="2" style="padding:8px 10px;color:#94a3b8;font-size:.82rem;font-style:italic">Nessun esercizio registrato questa settimana</td></tr>';

  const wHtml = (sonno !== null || dolori !== null || energia !== null)
    ? '<div style="background:#f8fafc;border-radius:8px;padding:12px 16px;margin:16px 0">' +
      '<p style="margin:0 0 8px;font-size:.7rem;font-weight:700;color:#64748b;letter-spacing:.06em;text-transform:uppercase">Wellness medio</p>' +
      '<div style="display:flex;gap:12px;flex-wrap:wrap">' +
      (sonno   !== null ? '<div style="flex:1;min-width:70px;text-align:center"><div style="font-size:1.2rem;font-weight:700;color:#1a3a6b">' + f1(sonno)   + '<span style="font-size:.8rem;font-weight:400">/5</span></div><div style="font-size:.7rem;color:#64748b">Sonno</div></div>' : '') +
      (dolori  !== null ? '<div style="flex:1;min-width:70px;text-align:center"><div style="font-size:1.2rem;font-weight:700;color:#16a34a">' + f1(dolori)  + '<span style="font-size:.8rem;font-weight:400">/5</span></div><div style="font-size:.7rem;color:#64748b">Dolori ↓</div></div>' : '') +
      (energia !== null ? '<div style="flex:1;min-width:70px;text-align:center"><div style="font-size:1.2rem;font-weight:700;color:#1a3a6b">' + f1(energia) + '<span style="font-size:.8rem;font-weight:400">/5</span></div><div style="font-size:.7rem;color:#64748b">Energia</div></div>' : '') +
      '</div></div>'
    : '';

  const nHtml = noteAtleta.length
    ? '<div style="background:#eff6ff;border-left:3px solid #1a3a6b;padding:10px 14px;margin:16px 0;border-radius:0 6px 6px 0">' +
      '<p style="margin:0 0 4px;font-size:.7rem;font-weight:700;color:#1a3a6b;letter-spacing:.04em">NOTA COACH</p>' +
      noteAtleta.map(n => '<p style="margin:4px 0 0;font-size:.84rem;color:#334155">' + esc_(n) + '</p>').join('') +
      '</div>'
    : '';

  const sedColore = nSedute > 0 ? '#f0faf2' : '#fef2f2';
  const sedTesto  = nSedute > 0 ? '#16a34a' : '#dc2626';
  const sedLabel  = nSedute === 1 ? 'seduta completata' : nSedute > 1 ? 'sedute completate' : 'sedute registrate';

  return '<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">' +
    '<div style="background:#1a3a6b;color:#fff;padding:18px 20px;border-radius:8px 8px 0 0">' +
    '<p style="margin:0 0 2px;font-size:.72rem;opacity:.7;letter-spacing:.06em">MARSALA VOLLEY · RIEPILOGO</p>' +
    '<h2 style="margin:0;font-size:1.1rem;font-weight:600">Ciao ' + esc_(nome) + '!</h2>' +
    '<p style="margin:4px 0 0;font-size:.8rem;opacity:.8">Settimana ' + settLabel + '</p></div>' +
    '<div style="border:1px solid #e2e8f0;border-top:none;padding:16px 20px;border-radius:0 0 8px 8px">' +
    '<div style="background:' + sedColore + ';border-radius:8px;padding:12px 16px;margin-bottom:16px;display:flex;align-items:center;gap:16px">' +
    '<div style="font-size:2rem;font-weight:700;color:' + sedTesto + '">' + nSedute + '</div>' +
    '<div><div style="font-size:.9rem;font-weight:600;color:#334155">' + sedLabel + '</div>' +
    '<div style="font-size:.78rem;color:#64748b">negli ultimi 7 giorni</div></div></div>' +
    '<p style="margin:0 0 6px;font-size:.7rem;font-weight:700;color:#64748b;letter-spacing:.06em;text-transform:uppercase">Carichi settimana</p>' +
    '<table style="width:100%;border-collapse:collapse;margin-bottom:4px"><tbody>' + carichiRighe + '</tbody></table>' +
    wHtml + nHtml +
    '<div style="text-align:center;margin-top:20px">' +
    '<a href="' + BASE + 'scheda.html?id=' + idG + '" style="display:inline-block;background:#1a3a6b;color:#fff;padding:10px 24px;border-radius:6px;font-size:.85rem;font-weight:600;text-decoration:none">Apri la mia scheda →</a></div>' +
    '<div style="margin-top:16px;padding-top:12px;border-top:1px solid #e2e8f0;text-align:center">' +
    '<p style="margin:0;font-size:.72rem;color:#94a3b8">Marsala Volley 2026/27 · Generato automaticamente ogni lunedì</p></div>' +
    '</div></div>';
}

function buildRiepilogoEN_(nome, settLabel, nSedute, topCarichi, sonno, dolori, energia, noteAtleta, idG, isDev) {
  const BASE = isDev
    ? 'https://pamangiapane-lgtm.github.io/schede-allenamento/dev/'
    : 'https://pamangiapane-lgtm.github.io/schede-allenamento/';
  const f1 = v => v !== null ? v.toFixed(1) : '—';

  const loadsRows = topCarichi.length
    ? topCarichi.map(([es, d]) =>
        '<tr><td style="padding:5px 10px;color:#334155;font-size:.82rem">' + esc_(es) +
        '</td><td style="padding:5px 10px;text-align:right;font-weight:700;color:#1a3a6b;font-size:.82rem">' +
        d.kg + ' kg</td></tr>').join('')
    : '<tr><td colspan="2" style="padding:8px 10px;color:#94a3b8;font-size:.82rem;font-style:italic">No exercises logged this week</td></tr>';

  const wHtml = (sonno !== null || dolori !== null || energia !== null)
    ? '<div style="background:#f8fafc;border-radius:8px;padding:12px 16px;margin:16px 0">' +
      '<p style="margin:0 0 8px;font-size:.7rem;font-weight:700;color:#64748b;letter-spacing:.06em;text-transform:uppercase">Avg wellness</p>' +
      '<div style="display:flex;gap:12px;flex-wrap:wrap">' +
      (sonno   !== null ? '<div style="flex:1;min-width:70px;text-align:center"><div style="font-size:1.2rem;font-weight:700;color:#1a3a6b">' + f1(sonno)   + '<span style="font-size:.8rem;font-weight:400">/5</span></div><div style="font-size:.7rem;color:#64748b">Sleep</div></div>' : '') +
      (dolori  !== null ? '<div style="flex:1;min-width:70px;text-align:center"><div style="font-size:1.2rem;font-weight:700;color:#16a34a">' + f1(dolori)  + '<span style="font-size:.8rem;font-weight:400">/5</span></div><div style="font-size:.7rem;color:#64748b">Pain ↓</div></div>' : '') +
      (energia !== null ? '<div style="flex:1;min-width:70px;text-align:center"><div style="font-size:1.2rem;font-weight:700;color:#1a3a6b">' + f1(energia) + '<span style="font-size:.8rem;font-weight:400">/5</span></div><div style="font-size:.7rem;color:#64748b">Energy</div></div>' : '') +
      '</div></div>'
    : '';

  const nHtml = noteAtleta.length
    ? '<div style="background:#eff6ff;border-left:3px solid #1a3a6b;padding:10px 14px;margin:16px 0;border-radius:0 6px 6px 0">' +
      '<p style="margin:0 0 4px;font-size:.7rem;font-weight:700;color:#1a3a6b;letter-spacing:.04em">COACH NOTE</p>' +
      noteAtleta.map(n => '<p style="margin:4px 0 0;font-size:.84rem;color:#334155">' + esc_(n) + '</p>').join('') +
      '</div>'
    : '';

  const sedColore = nSedute > 0 ? '#f0faf2' : '#fef2f2';
  const sedTesto  = nSedute > 0 ? '#16a34a' : '#dc2626';
  const sedLabel  = nSedute === 1 ? 'session completed' : 'sessions completed';

  return '<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">' +
    '<div style="background:#1a3a6b;color:#fff;padding:18px 20px;border-radius:8px 8px 0 0">' +
    '<p style="margin:0 0 2px;font-size:.72rem;opacity:.7;letter-spacing:.06em">MARSALA VOLLEY · WEEKLY SUMMARY</p>' +
    '<h2 style="margin:0;font-size:1.1rem;font-weight:600">Hi ' + esc_(nome) + '!</h2>' +
    '<p style="margin:4px 0 0;font-size:.8rem;opacity:.8">Week ' + settLabel + '</p></div>' +
    '<div style="border:1px solid #e2e8f0;border-top:none;padding:16px 20px;border-radius:0 0 8px 8px">' +
    '<div style="background:' + sedColore + ';border-radius:8px;padding:12px 16px;margin-bottom:16px;display:flex;align-items:center;gap:16px">' +
    '<div style="font-size:2rem;font-weight:700;color:' + sedTesto + '">' + nSedute + '</div>' +
    '<div><div style="font-size:.9rem;font-weight:600;color:#334155">' + sedLabel + '</div>' +
    '<div style="font-size:.78rem;color:#64748b">in the last 7 days</div></div></div>' +
    '<p style="margin:0 0 6px;font-size:.7rem;font-weight:700;color:#64748b;letter-spacing:.06em;text-transform:uppercase">Weekly loads</p>' +
    '<table style="width:100%;border-collapse:collapse;margin-bottom:4px"><tbody>' + loadsRows + '</tbody></table>' +
    wHtml + nHtml +
    '<div style="text-align:center;margin-top:20px">' +
    '<a href="' + BASE + 'scheda.html?id=' + idG + '" style="display:inline-block;background:#1a3a6b;color:#fff;padding:10px 24px;border-radius:6px;font-size:.85rem;font-weight:600;text-decoration:none">Open my program →</a></div>' +
    '<div style="margin-top:16px;padding-top:12px;border-top:1px solid #e2e8f0;text-align:center">' +
    '<p style="margin:0;font-size:.72rem;color:#94a3b8">Marsala Volley 2026/27 · Sent automatically every Monday</p></div>' +
    '</div></div>';
}

function esc_(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Esegui UNA VOLTA per installare il trigger lunedì 8:00
function installaRiepilogoAtleteTrigger() {
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'inviaRiepilogoSettimanale')
    .forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('inviaRiepilogoSettimanale')
    .timeBased().onWeekDay(ScriptApp.WeekDay.MONDAY).atHour(8).create();
}

// ─────────────────────────────────────────────────────────────────────────────

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

function creaSlideSettimanale() {
  // DEV: non crea slide né manda email — usa PROD per il report reale
  Logger.log('[DEV] creaSlideSettimanale — disabilitata in ambiente di test');
}

function creaSlideSettimanale_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetG = ss.getSheetByName('Giocatrici');
  const sheetP = ss.getSheetByName('Progressi');
  const sheetW = ss.getSheetByName('Wellness');
  if (!sheetG || !sheetP) return;

  const giocatrici = leggiRighe_(sheetG).filter(g => g.ID && !isNaN(parseInt(g.ID)));
  const progressi  = leggiRighe_(sheetP);
  const wellness   = sheetW ? leggiRighe_(sheetW) : [];
  const sheetN     = ss.getSheetByName('Note_Coach');
  const noteCoach  = sheetN ? leggiRighe_(sheetN) : [];
  const oggi       = new Date(); oggi.setHours(0, 0, 0, 0);
  const noteAttive = noteCoach.filter(n => {
    const ini = n.Data_Inizio ? new Date(n.Data_Inizio) : null;
    const fin = n.Data_Fine   ? new Date(n.Data_Fine)   : null;
    if (ini) ini.setHours(0, 0, 0, 0);
    if (fin) fin.setHours(23, 59, 59, 999);
    if (ini && oggi < ini) return false;
    if (fin && oggi > fin) return false;
    return true;
  });
  const SKIP_SET   = new Set(['RPE-seduta', 'Fatica-seduta', 'Peso-corporeo']);

  // ── Date boundaries ───────────────────────────────────────────────────────
  const ora = new Date();
  const dow = ora.getDay();
  const luneCorrente = new Date(ora);
  luneCorrente.setDate(ora.getDate() - ((dow === 0 ? 7 : dow) - 1));
  luneCorrente.setHours(0, 0, 0, 0);
  const luneScorso = new Date(luneCorrente); luneScorso.setDate(luneCorrente.getDate() - 7);
  const domScorso  = new Date(luneCorrente); domScorso.setMilliseconds(-1);

  const fmt  = d => d.getDate() + '/' + (d.getMonth() + 1);
  const avgN = arr => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null;
  const f1   = n   => n !== null ? n.toFixed(1) : '—';

  // ── Ultime 4 settimane con dati (max 8 settimane indietro) ───────────────
  const allWeeks = [];
  for (let w = 7; w >= 0; w--) {
    const wL = new Date(luneScorso); wL.setDate(luneScorso.getDate() - w * 7);
    const wD = new Date(wL); wD.setDate(wL.getDate() + 7); wD.setMilliseconds(-1);
    allWeeks.push({ lune: wL, dom: wD,
      ...computeTeamWeek_(progressi, wellness, giocatrici, wL, wD, SKIP_SET, avgN) });
  }
  const weekData = allWeeks.filter(w => w.allenate > 0 || w.sonno !== null).slice(-4);
  if (!weekData.length) weekData.push(allWeeks[allWeeks.length - 1]);

  // ── Dati per-atleta ultima settimana (slide 2) ────────────────────────────
  const inRange = ts => { const d = new Date(ts); return d >= luneScorso && d < luneCorrente; };
  const atletaData = giocatrici.map(g => {
    const pAll   = progressi.filter(p => String(p.ID_Giocatrice) === String(g.ID) && p.Valore);
    const pEserc = pAll.filter(p => !SKIP_SET.has(p.Esercizio));
    const sedSett = new Set(pEserc.filter(p => p.Timestamp && inRange(p.Timestamp)).map(p => p.N_Seduta)).size;
    const rpeVals = pAll.filter(p => p.Esercizio === 'RPE-seduta' && p.Timestamp && inRange(p.Timestamp))
                        .map(p => Number(p.Valore)).filter(v => !isNaN(v));
    const rpeMedia = avgN(rpeVals);
    const volPercepito = rpeMedia !== null ? rpeMedia * sedSett : null;
    let ultimoTs = null;
    pEserc.forEach(p => { const ts = p.Timestamp ? new Date(p.Timestamp) : null; if (ts && (!ultimoTs || ts > ultimoTs)) ultimoTs = ts; });
    const giorniSilenzio = ultimoTs ? Math.floor((ora - ultimoTs) / 86400000) : null;
    const wSett   = wellness.filter(w => String(w.ID_Giocatrice) === String(g.ID) && w.Timestamp && inRange(w.Timestamp));
    const sonno   = avgN(wSett.map(w => Number(w.Qualita_Sonno)).filter(v => !isNaN(v) && v));
    const dolori  = avgN(wSett.map(w => Number(w.Dolori)).filter(v => !isNaN(v) && v));
    const energia = avgN(wSett.map(w => Number(w.Energia)).filter(v => !isNaN(v) && v));
    const note    = wSett.filter(w => w.Note).map(w => String(w.Note).trim()).filter(Boolean);
    const noteC   = noteAttive.filter(n => String(n.ID_Giocatrice) === String(g.ID))
                              .map(n => String(n.Testo).trim()).filter(Boolean);
    let statoCat;
    if (giorniSilenzio === null)   statoCat = 'mai';
    else if (giorniSilenzio > 7)   statoCat = 'rosso';
    else if (giorniSilenzio > 3)   statoCat = 'giallo';
    else                            statoCat = 'verde';
    return { nome: g.Nome, statoCat, sedSett, rpeMedia, volPercepito, sonno, dolori, energia, note, noteC };
  });
  const ordCat = { mai: 0, rosso: 1, giallo: 2, verde: 3 };
  const sorted = [...atletaData].sort((a, b) => ordCat[a.statoCat] - ordCat[b.statoCat]);
  const lastWk = weekData[weekData.length - 1];

  // ── Crea presentazione ────────────────────────────────────────────────────
  const BLU  = '#1a3a6b';
  const MID  = '#4a7bc4';
  const PALE = '#bfdbfe';
  const titolo = 'Report Staff — ' + fmt(luneScorso) + '->' + fmt(domScorso) + ' ' + domScorso.getFullYear();
  const pres = SlidesApp.create(titolo);
  const presUrl = pres.getUrl();

  function txt_(slide, content, x, y, w, h, sz, bold, hex, alignRight) {
    const str = (content !== null && content !== undefined) ? String(content) : '';
    const box = slide.insertTextBox(str || ' ', x, y, Math.max(w, 20), Math.max(h, 14));
    box.getFill().setTransparent();
    box.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
    const range = box.getText();
    if (sz)         range.getTextStyle().setFontSize(sz);
    if (bold)       range.getTextStyle().setBold(true);
    if (hex)        range.getTextStyle().setForegroundColor(hex);
    if (alignRight) range.getParagraphs()[0].getRange().getParagraphStyle()
                        .setParagraphAlignment(SlidesApp.ParagraphAlignment.END);
    return box;
  }

  // ── SLIDE 1: Accumulata 4 settimane ──────────────────────────────────────
  const s1 = pres.getSlides()[0];
  s1.getBackground().setSolidFill('#FFFFFF');
  s1.getPlaceholders().forEach(p => p.remove());

  // Header
  const s1hdr = s1.insertShape(SlidesApp.ShapeType.RECTANGLE, 0, 0, 720, 26);
  s1hdr.getFill().setSolidFill(BLU); s1hdr.getBorder().setTransparent();
  txt_(s1, 'Marsala Volley — Report Staff', 15, 5, 400, 14, 11, true, '#FFFFFF');
  txt_(s1, 'andamento squadra · ultime 4 settimane', 15, 16, 400, 10, 7, false, '#8ab4e8');

  // Sezione tabella
  txt_(s1, 'VALORI SQUADRA PER SETTIMANA', 15, 32, 400, 10, 6, true, '#94a3b8');

  const tblCols = [
    { l:'Settimana',    x:15,  w:120, r:false },
    { l:'Allenate',     x:135, w:82,  r:true  },
    { l:'Carico medio', x:217, w:82,  r:true  },
    { l:'RPE /10',      x:299, w:82,  r:true  },
    { l:'Sonno /5',     x:381, w:82,  r:true  },
    { l:'Dolori /5 ↓',  x:463, w:82,  r:true  },
    { l:'Energia /5',   x:545, w:82,  r:true  },
    { l:'Urgenti',      x:627, w:78,  r:true  },
  ];
  const tHdrY = 44;
  const tHdrBg = s1.insertShape(SlidesApp.ShapeType.RECTANGLE, 15, tHdrY, 690, 13);
  tHdrBg.getFill().setSolidFill('#e8f0fb'); tHdrBg.getBorder().setTransparent();
  tblCols.forEach(c => txt_(s1, c.l, c.x, tHdrY + 2, c.w, 10, 6, true, BLU, c.r));

  const wkShort4 = weekData.map(w => fmt(w.lune) + '–' + fmt(w.dom));
  weekData.forEach((wd, i) => {
    const ry = tHdrY + 13 + i * 15;
    const isCurr = i === weekData.length - 1;
    const rowBgHex = isCurr ? '#eef3fc' : (i % 2 === 0 ? '#ffffff' : '#f8fafc');
    const bg = s1.insertShape(SlidesApp.ShapeType.RECTANGLE, 15, ry, 690, 14);
    bg.getFill().setSolidFill(rowBgHex); bg.getBorder().setTransparent();
    if (isCurr) {
      const acc = s1.insertShape(SlidesApp.ShapeType.RECTANGLE, 15, ry, 3, 14);
      acc.getFill().setSolidFill(BLU); acc.getBorder().setTransparent();
    }
    const tc = isCurr ? BLU : '#334155';
    const cells = [
      { v:wkShort4[i],                                                  x:15,  w:120, r:false },
      { v:wd.allenate + '/' + wd.tot,                                   x:135, w:82,  r:true  },
      { v:wd.caricoMedio !== null ? wd.caricoMedio.toFixed(1) : '—',    x:217, w:82,  r:true  },
      { v:f1(wd.rpe) + '/10',                                           x:299, w:82,  r:true  },
      { v:f1(wd.sonno) + '/5',                                          x:381, w:82,  r:true  },
      { v:f1(wd.dolori) + '/5',                                         x:463, w:82,  r:true  },
      { v:f1(wd.energia) + '/5',                                        x:545, w:82,  r:true  },
      { v:wd.urgenti + '/' + wd.tot,                                    x:627, w:78,  r:true  },
    ];
    cells.forEach(c => txt_(s1, c.v, c.x + 2, ry + 2, c.w - 4, 10, 7, isCurr, tc, c.r));
  });

  // Divisore
  const divY = tHdrY + 13 + 4 * 15 + 4;
  const divShape = s1.insertShape(SlidesApp.ShapeType.RECTANGLE, 15, divY, 690, 1);
  divShape.getFill().setSolidFill('#e8f0fb'); divShape.getBorder().setTransparent();
  txt_(s1, 'ANDAMENTO', 15, divY + 5, 200, 10, 6, true, '#94a3b8');

  // 4 grafici bubble (stile C)
  const chartStartY = divY + 18;
  const chartH      = 378 - chartStartY;
  const chartW      = 168;
  const chartXs     = [15, 188, 361, 534];
  const wkLabel4    = weekData.map(w => fmt(w.lune));

  [
    { lbl:'Carico medio', vals: weekData.map(w => w.caricoMedio) },
    { lbl:'RPE /10',      vals: weekData.map(w => w.rpe)         },
    { lbl:'Sonno /5',     vals: weekData.map(w => w.sonno)       },
    { lbl:'Energia /5',   vals: weekData.map(w => w.energia)     },
  ].forEach((def, ci) => {
    drawBubbleChart_(s1, def.vals, wkLabel4, chartXs[ci], chartStartY, chartW, chartH, def.lbl);
  });

  // Navigazione 8 settimane
  const folder = DriveApp.getFolderById(FOLDER_STAFF_ID);
  const pastUrls = {};
  const files = folder.getFiles();
  while (files.hasNext()) {
    const f = files.next();
    if (f.getName().startsWith('Report Staff — ')) pastUrls[f.getName()] = f.getUrl();
  }
  const navY = 383;
  txt_(s1, 'vai a →', 15, navY + 2, 44, 10, 5, false, '#94a3b8');
  let navX = 62;
  for (let w = 7; w >= 0; w--) {
    const wL = new Date(luneScorso); wL.setDate(luneScorso.getDate() - w * 7);
    const wD = new Date(wL); wD.setDate(wL.getDate() + 7); wD.setMilliseconds(-1);
    const isCurr = w === 0;
    const pillW  = 46;
    const pill   = s1.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, navX, navY, pillW, 14);
    pill.getFill().setSolidFill(isCurr ? BLU : '#f0f5ff');
    pill.getBorder().getLineFill().setSolidFill(isCurr ? BLU : PALE);
    const pillLbl = fmt(wL) + (isCurr ? '' : ' ↗');
    const pt = txt_(s1, pillLbl, navX + 2, navY + 2, pillW - 4, 10, 5, isCurr, isCurr ? '#ffffff' : MID);
    if (!isCurr) {
      const rName = 'Report Staff — ' + fmt(wL) + '->' + fmt(wD) + ' ' + wD.getFullYear();
      if (pastUrls[rName]) pt.getText().getTextStyle().setLinkUrl(pastUrls[rName]);
    }
    navX += pillW + 3;
  }

  // ── SLIDE 2: Settimana corrente — individuale ─────────────────────────────
  const s2 = pres.appendSlide();
  s2.getPlaceholders().forEach(p => p.remove());
  s2.getBackground().setSolidFill('#FFFFFF');

  const s2hdr = s2.insertShape(SlidesApp.ShapeType.RECTANGLE, 0, 0, 720, 24);
  s2hdr.getFill().setSolidFill(BLU); s2hdr.getBorder().setTransparent();
  txt_(s2, 'Settimana ' + fmt(luneScorso) + '–' + fmt(domScorso) + ' ' + domScorso.getFullYear(), 15, 5, 240, 14, 9, true, '#FFFFFF');
  const chips = [
    { v: lastWk.allenate + '/' + lastWk.tot + ' allenate', ok: lastWk.allenate >= lastWk.tot * 0.75 },
    { v: f1(lastWk.caricoMedio) + ' carico medio',         ok: true  },
    { v: f1(lastWk.rpe) + '/10 RPE',                       ok: true  },
    { v: lastWk.urgenti + '/' + lastWk.tot + ' urgenti',   ok: lastWk.urgenti === 0 },
  ];
  let chipX = 260;
  chips.forEach(ch => {
    const cw = 100;
    const cbg = s2.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, chipX, 5, cw, 14);
    cbg.getFill().setSolidFill(ch.ok ? '#d4edda' : '#f8d7da'); cbg.getBorder().setTransparent();
    txt_(s2, ch.v, chipX + 3, 7, cw - 6, 10, 6.5, false, ch.ok ? '#166534' : '#7f1d1d');
    chipX += cw + 4;
  });

  txt_(s2, 'Compliance · Carico · Wellness — individuale', 15, 28, 680, 16, 11, true, BLU);
  txt_(s2, 'Volume percepito = RPE × sedute', 15, 44, 680, 12, 8, false, '#888888');

  const hY2 = 58;
  const hBar2 = s2.insertShape(SlidesApp.ShapeType.RECTANGLE, 15, hY2, 690, 16);
  hBar2.getFill().setSolidFill(BLU); hBar2.getBorder().setTransparent();
  const s2cols = [
    { l:'Atleta',        x:17,  w:88  },
    { l:'Stato',         x:108, w:52  },
    { l:'Sed.',          x:163, w:30  },
    { l:'RPE',           x:196, w:34  },
    { l:'Vol.',          x:233, w:34  },
    { l:'Sonno',         x:270, w:44  },
    { l:'Dolori',        x:317, w:44  },
    { l:'Energia',       x:364, w:44  },
    { l:'Note wellness', x:411, w:150 },
    { l:'Nota coach',    x:564, w:141 },
  ];
  s2cols.forEach(c => txt_(s2, c.l, c.x, hY2 + 3, c.w, 11, 7, true, '#FFFFFF'));

  const rowBgMap  = { verde:'#f0faf2', giallo:'#fffbea', rosso:'#fff0f0', mai:'#f7f7f7' };
  const statoLbl  = { verde:'ok', giallo:'> 3gg', rosso:'> 7gg', mai:'mai' };
  sorted.forEach((d, i) => {
    const ry = hY2 + 16 + i * 16;
    if (ry + 16 > 402) return;
    const bg = s2.insertShape(SlidesApp.ShapeType.RECTANGLE, 15, ry, 690, 15);
    bg.getFill().setSolidFill(i % 2 === 0 ? rowBgMap[d.statoCat] : '#FAFAFA');
    bg.getBorder().setTransparent();
    [
      { v:d.nome.split(' ')[0],                              x:17,  w:88  },
      { v:statoLbl[d.statoCat],                             x:108, w:52  },
      { v:String(d.sedSett),                                x:163, w:30  },
      { v:f1(d.rpeMedia),                                   x:196, w:34  },
      { v:f1(d.volPercepito),                               x:233, w:34  },
      { v:f1(d.sonno),                                      x:270, w:44  },
      { v:f1(d.dolori),                                     x:317, w:44  },
      { v:f1(d.energia),                                    x:364, w:44  },
      { v:d.note.length  ? d.note[0].substring(0, 30)  : '', x:411, w:150 },
      { v:d.noteC.length ? d.noteC[0].substring(0, 35) : '', x:564, w:141 },
    ].forEach(c => txt_(s2, c.v, c.x, ry + 2, c.w, 11, 7.5, false, '#333333'));
  });

  // Slide 3 rimossa — note coach per atleta in arrivo con Deploy 8 (scheda.html)

  // Salva e sposta nella cartella staff
  pres.saveAndClose();
  const presFile = DriveApp.getFileById(pres.getId());
  DriveApp.getFolderById(FOLDER_STAFF_ID).addFile(presFile);
  DriveApp.getRootFolder().removeFile(presFile);

  // Email disabilitata in DEV — slide disponibile su Drive
  Logger.log('[DEV] Report creato: ' + presUrl);
}

function inviaEmailEsempio() {
  const oggetto = 'Report Staff Marsala Volley — 6/7->12/7 [ESEMPIO]';
  const presUrl = 'https://drive.google.com/';
  MailApp.sendEmail({ to: EMAIL_COACH, subject: oggetto, htmlBody: `
<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">
  <div style="background:#1a3a6b;color:#fff;padding:16px 20px;border-radius:8px 8px 0 0">
    <p style="margin:0 0 2px;font-size:.75rem;opacity:.7;letter-spacing:.06em">MARSALA VOLLEY · STAFF REPORT</p>
    <h2 style="margin:0;font-size:1.1rem;font-weight:600">Settimana 6/7 – 12/7 2026</h2>
    <p style="margin:6px 0 0;font-size:.8rem;opacity:.75">generato automaticamente ogni lunedì alle 8:00</p>
  </div>
  <div style="border:1px solid #e2e8f0;border-top:none;padding:0;border-radius:0 0 8px 8px;overflow:hidden">

    <!-- KPI row -->
    <div style="display:flex;background:#f8fafc;border-bottom:1px solid #e2e8f0">
      <div style="flex:1;padding:12px 16px;text-align:center;border-right:1px solid #e2e8f0">
        <div style="font-size:1.4rem;font-weight:700;color:#1a3a6b">9/13</div>
        <div style="font-size:.72rem;color:#64748b;margin-top:2px">allenate</div>
      </div>
      <div style="flex:1;padding:12px 16px;text-align:center;border-right:1px solid #e2e8f0">
        <div style="font-size:1.4rem;font-weight:700;color:#1a3a6b">14.7</div>
        <div style="font-size:.72rem;color:#64748b;margin-top:2px">carico medio</div>
      </div>
      <div style="flex:1;padding:12px 16px;text-align:center;border-right:1px solid #e2e8f0">
        <div style="font-size:1.4rem;font-weight:700;color:#1a3a6b">4.9<span style="font-size:.9rem;font-weight:400">/10</span></div>
        <div style="font-size:.72rem;color:#64748b;margin-top:2px">RPE medio</div>
      </div>
      <div style="flex:1;padding:12px 16px;text-align:center">
        <div style="font-size:1.4rem;font-weight:700;color:#dc2626">4/13</div>
        <div style="font-size:.72rem;color:#64748b;margin-top:2px">urgenti</div>
      </div>
    </div>

    <!-- Wellness row -->
    <div style="display:flex;border-bottom:1px solid #e2e8f0">
      <div style="flex:1;padding:10px 16px;text-align:center;border-right:1px solid #e2e8f0">
        <div style="font-size:1.1rem;font-weight:600;color:#1a3a6b">4.0<span style="font-size:.8rem;font-weight:400">/5</span></div>
        <div style="font-size:.72rem;color:#64748b">Sonno</div>
      </div>
      <div style="flex:1;padding:10px 16px;text-align:center;border-right:1px solid #e2e8f0">
        <div style="font-size:1.1rem;font-weight:600;color:#16a34a">2.0<span style="font-size:.8rem;font-weight:400">/5</span></div>
        <div style="font-size:.72rem;color:#64748b">Dolori ↓</div>
      </div>
      <div style="flex:1;padding:10px 16px;text-align:center">
        <div style="font-size:1.1rem;font-weight:600;color:#1a3a6b">5.0<span style="font-size:.8rem;font-weight:400">/5</span></div>
        <div style="font-size:.72rem;color:#64748b">Energia</div>
      </div>
    </div>

    <!-- Urgenti -->
    <div style="padding:12px 16px;border-bottom:1px solid #e2e8f0;background:#fef2f2">
      <p style="margin:0;font-size:.85rem;color:#dc2626;font-weight:600">⚠ 4 atlete non si allenano da oltre 7 giorni</p>
      <p style="margin:4px 0 0;font-size:.8rem;color:#7f1d1d">Gaia · Federica · Luna · Nelly</p>
    </div>

    <!-- CTA slides -->
    <div style="padding:16px 20px;border-bottom:1px solid #e2e8f0">
      <p style="margin:0 0 10px;font-size:.85rem;color:#334155">Le slide complete con andamento 4 settimane e dati individuali sono pronte:</p>
      <a href="${presUrl}" style="display:inline-block;background:#1a3a6b;color:#fff;padding:10px 20px;border-radius:6px;font-size:.85rem;font-weight:600;text-decoration:none">Apri report Staff →</a>
    </div>

    <!-- Note coach placeholder -->
    <div style="padding:12px 16px;background:#f0f4fb;border-left:3px solid #1a3a6b">
      <p style="margin:0 0 4px;font-size:.75rem;font-weight:600;color:#1a3a6b;letter-spacing:.04em">NOTE DEL COACH</p>
      <p style="margin:0;font-size:.82rem;color:#64748b;font-style:italic">Aggiungi le tue note nella slide 3 prima di condividere con lo staff</p>
    </div>

    <div style="padding:10px 16px;background:#f8fafc">
      <p style="margin:0;font-size:.72rem;color:#94a3b8">Generato automaticamente · Marsala Volley 2026</p>
    </div>
  </div>
</div>` });
}

// Esegui UNA VOLTA per installare il trigger del report settimanale
function installaReportTrigger() {
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'creaSlideSettimanale')
    .forEach(t => ScriptApp.deleteTrigger(t));

  ScriptApp.newTrigger('creaSlideSettimanale')
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.MONDAY)
    .atHour(8)
    .create();
}

// ─────────────────────────────────────────────────────────────────────────────

function computeTeamWeek_(progressi, wellness, giocatrici, weekStart, weekEnd, SKIP_SET, avgN) {
  const inR = ts => { const d = new Date(ts); return d >= weekStart && d < weekEnd; };
  const tot = giocatrici.length;
  let allenate = 0, urgenti = 0;
  const allRpe = [], allSed = [], allSon = [], allDol = [], allEne = [];
  giocatrici.forEach(g => {
    const pAll   = progressi.filter(p => String(p.ID_Giocatrice) === String(g.ID) && p.Valore);
    const pEserc = pAll.filter(p => !SKIP_SET.has(p.Esercizio));
    const sedSett = new Set(pEserc.filter(p => p.Timestamp && inR(p.Timestamp)).map(p => p.N_Seduta)).size;
    const rpeVals = pAll.filter(p => p.Esercizio === 'RPE-seduta' && p.Timestamp && inR(p.Timestamp))
                        .map(p => Number(p.Valore)).filter(v => !isNaN(v));
    const rpeMedia = avgN(rpeVals);
    if (sedSett > 0) { allenate++; allSed.push(sedSett); } else { urgenti++; }
    if (rpeMedia !== null) allRpe.push(rpeMedia);
    const wSett = wellness.filter(w => String(w.ID_Giocatrice) === String(g.ID) && w.Timestamp && inR(w.Timestamp));
    const son = avgN(wSett.map(w => Number(w.Qualita_Sonno)).filter(v => !isNaN(v) && v));
    const dol = avgN(wSett.map(w => Number(w.Dolori)).filter(v => !isNaN(v) && v));
    const ene = avgN(wSett.map(w => Number(w.Energia)).filter(v => !isNaN(v) && v));
    if (son !== null) allSon.push(son);
    if (dol !== null) allDol.push(dol);
    if (ene !== null) allEne.push(ene);
  });
  const rpe         = avgN(allRpe);
  const sedMedie    = avgN(allSed);
  const caricoMedio = rpe !== null && sedMedie !== null ? rpe * sedMedie : null;
  return { tot, allenate, urgenti, rpe, sedMedie, caricoMedio,
           sonno: avgN(allSon), dolori: avgN(allDol), energia: avgN(allEne) };
}

function drawBubbleChart_(slide, vals, labels, startX, startY, chartW, chartH, title) {
  const BLU = '#1a3a6b', MID = '#4a7bc4', PALE = '#bfdbfe';
  const nonNull = vals.filter(v => v !== null);
  if (!nonNull.length) return;
  const N = vals.length;
  const mn = Math.min(...nonNull), mx = Math.max(...nonNull);
  const pad = (mx - mn) * 0.35 || 0.4;
  const lo = mn - pad, rng = (mx + pad) - lo;
  const pL = 14, pR = 14, pT = 18, pB = 20;
  const cW = chartW - pL - pR, cH = chartH - pT - pB;
  const px = i => startX + pL + (N > 1 ? (i / (N - 1)) * cW : cW / 2);
  const py = v => startY + pT + cH - ((v - lo) / rng) * cH;

  // Titolo grafico
  const tb = slide.insertTextBox(title || ' ', startX, startY, chartW, 14);
  tb.getFill().setTransparent();
  tb.getText().getTextStyle().setFontSize(6);
  tb.getText().getTextStyle().setBold(true);
  tb.getText().getTextStyle().setForegroundColor('#94a3b8');

  // Linee di connessione (sottili, chiare)
  for (let i = 0; i < N - 1; i++) {
    if (vals[i] === null || vals[i + 1] === null) continue;
    const line = slide.insertLine(SlidesApp.LineCategory.STRAIGHT,
      px(i), py(vals[i]), px(i + 1), py(vals[i + 1]));
    line.getLineFill().setSolidFill('#d0dff5');
    line.setWeight(1);
  }

  // Bubble = cerchio colorato + text box separata sovrapposta (evita testo verticale)
  vals.forEach((v, i) => {
    if (v === null) return;
    const cx = px(i), cy = py(v);
    const isCurr = i === N - 1;
    const r      = isCurr ? 15 : 13;

    // Cerchio (solo colore, nessun testo)
    const circle = slide.insertShape(SlidesApp.ShapeType.ELLIPSE, cx - r, cy - r, r * 2, r * 2);
    circle.getFill().setSolidFill(isCurr ? BLU : PALE);
    circle.getBorder().setTransparent();

    // Text box centrata sul cerchio
    const tw = r * 2 + 8;
    const th = r * 1.4;
    const tbox = slide.insertTextBox(v.toFixed(1), cx - tw / 2, cy - th / 2, tw, th);
    tbox.getFill().setTransparent();
    tbox.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
    const tr = tbox.getText();
    tr.getTextStyle().setFontSize(isCurr ? 7 : 6);
    tr.getTextStyle().setBold(isCurr);
    tr.getTextStyle().setForegroundColor(isCurr ? '#ffffff' : MID);
    tr.getParagraphs()[0].getRange().getParagraphStyle()
      .setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);

    // Label settimana sotto la bubble
    const lbl = slide.insertTextBox(labels[i] || ' ', cx - 18, cy + r + 2, 36, 11);
    lbl.getFill().setTransparent();
    lbl.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
    lbl.getText().getTextStyle().setFontSize(5.5);
    lbl.getText().getTextStyle().setForegroundColor(isCurr ? BLU : '#94a3b8');
    lbl.getText().getParagraphs()[0].getRange().getParagraphStyle()
      .setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  });
}

// ── BACKUP AUTOMATICO ────────────────────────────────────────────────────────

function creaBackup() {
  const ss   = SpreadsheetApp.getActiveSpreadsheet();
  const file = DriveApp.getFileById(ss.getId());
  const ts   = Utilities.formatDate(new Date(), 'Europe/Rome', 'yyyy-MM-dd_HH-mm');
  const nome = 'BACKUP_' + ts + '_' + ss.getName();
  const copy = file.makeCopy(nome, DriveApp.getFolderById(FOLDER_STAFF_ID));
  Logger.log('Backup creato: ' + copy.getUrl());
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

// ─────────────────────────────────────────────────────────────────────────────

function risposta(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
function errore(msg) { return risposta({ ok: false, errore: msg }); }