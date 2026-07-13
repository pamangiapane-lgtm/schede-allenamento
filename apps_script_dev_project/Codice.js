const TOKEN = 'squadra2026-dev';

function doGet(e) {
  const token  = e.parameter.token;
  const azione = e.parameter.azione;
  const foglio = e.parameter.foglio;
  if (token !== TOKEN) return errore('Token non valido');
  try {
    if (azione === 'leggi') return leggi(foglio);
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

function scriviFoglio(body) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const nomeFoglio = body.foglio;
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
      <a href="https://pamangiapane-lgtm.github.io/schede-allenamento/report.html?coach=coach2026" style="color:#1a3a6b">→ Apri report completo</a>
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

// ── REPORT SETTIMANALE STAFF ──────────────────────────────────────────────────

const FOLDER_STAFF_ID = '1H8NcBNeUi1Jr7b-fx3blaPB8vRKfTrT2';

function creaReportSettimanale() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetG = ss.getSheetByName('Giocatrici');
  const sheetP = ss.getSheetByName('Progressi');
  const sheetW = ss.getSheetByName('Wellness');
  if (!sheetG || !sheetP) return;

  const giocatrici = leggiRighe_(sheetG).filter(g => g.ID && !isNaN(parseInt(g.ID)));
  const progressi  = leggiRighe_(sheetP);
  const wellness   = sheetW ? leggiRighe_(sheetW) : [];

  const ora = new Date();
  const dow = ora.getDay();
  const luneCorrente = new Date(ora);
  luneCorrente.setDate(ora.getDate() - ((dow === 0 ? 7 : dow) - 1));
  luneCorrente.setHours(0, 0, 0, 0);
  const luneScorso = new Date(luneCorrente);
  luneScorso.setDate(luneCorrente.getDate() - 7);
  const domScorso  = new Date(luneCorrente);
  domScorso.setMilliseconds(-1);

  const inRange = ts => { const d = new Date(ts); return d >= luneScorso && d < luneCorrente; };
  const fmt     = d  => d.getDate() + '/' + (d.getMonth() + 1);
  const avg     = arr => arr.length ? (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1) : null;
  const SKIP_SET = new Set(['RPE-seduta', 'Fatica-seduta', 'Peso-corporeo']);

  const atletaData = giocatrici.map(g => {
    const pAll   = progressi.filter(p => String(p.ID_Giocatrice) === String(g.ID) && p.Valore);
    const pEserc = pAll.filter(p => !SKIP_SET.has(p.Esercizio));

    const sedSett = new Set(
      pEserc.filter(p => p.Timestamp && inRange(p.Timestamp)).map(p => p.N_Seduta)
    ).size;

    const rpeVals = pAll
      .filter(p => p.Esercizio === 'RPE-seduta' && p.Timestamp && inRange(p.Timestamp))
      .map(p => Number(p.Valore)).filter(v => !isNaN(v));
    const rpeMedia = avg(rpeVals);

    let ultimoTs = null;
    pEserc.forEach(p => {
      const ts = p.Timestamp ? new Date(p.Timestamp) : null;
      if (ts && (!ultimoTs || ts > ultimoTs)) ultimoTs = ts;
    });
    const giorniSilenzio = ultimoTs ? Math.floor((ora - ultimoTs) / 86400000) : null;

    const wSett   = wellness.filter(w => String(w.ID_Giocatrice) === String(g.ID) && w.Timestamp && inRange(w.Timestamp));
    const sonno   = avg(wSett.map(w => Number(w.Qualita_Sonno)).filter(v => !isNaN(v) && v));
    const dolori  = avg(wSett.map(w => Number(w.Dolori)).filter(v => !isNaN(v) && v));
    const energia = avg(wSett.map(w => Number(w.Energia)).filter(v => !isNaN(v) && v));
    const note    = wSett.filter(w => w.Note).map(w => String(w.Note).trim()).filter(Boolean);
    const anomalia = wSett.some(w => Number(w.Qualita_Sonno) <= 2 || Number(w.Dolori) >= 4 || Number(w.Energia) <= 2);

    let ultimoLabel;
    if (giorniSilenzio === null)     ultimoLabel = 'mai';
    else if (giorniSilenzio === 0)   ultimoLabel = 'oggi';
    else if (giorniSilenzio === 1)   ultimoLabel = 'ieri';
    else                             ultimoLabel = giorniSilenzio + 'gg fa';

    let stato;
    if (giorniSilenzio === null)     stato = '⚫ Mai';
    else if (giorniSilenzio > 7)     stato = '🔴 >7gg';
    else if (giorniSilenzio > 3)     stato = '🟡 >3gg';
    else                             stato = '🟢 OK';

    return { nome: g.Nome, sedSett, rpeMedia, giorniSilenzio, ultimoLabel, stato, sonno, dolori, energia, note, anomalia };
  });

  // ── Crea il Google Doc ─────────────────────────────────────────────────────
  const titolo = 'Report Settimanale — ' + fmt(luneScorso) + '→' + fmt(domScorso) + ' ' + domScorso.getFullYear();
  const doc  = DocumentApp.create(titolo);
  const body = doc.getBody();
  body.setMarginTop(36).setMarginBottom(36).setMarginLeft(54).setMarginRight(54);

  // Intestazione
  body.appendParagraph('Marsala Volley — Report Settimanale')
    .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph('Settimana: ' + fmt(luneScorso) + ' – ' + fmt(domScorso) + ' ' + domScorso.getFullYear())
    .setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph('Generato automaticamente il: ' + ora.toLocaleDateString('it-IT') + ' ore ' + ora.getHours() + ':00');
  body.appendParagraph('');

  // ── Sezione 1: Compliance ──────────────────────────────────────────────────
  body.appendParagraph('1. Compliance Allenamenti').setHeading(DocumentApp.ParagraphHeading.HEADING2);
  const sorted = [...atletaData].sort((a, b) => {
    const ord = { '⚫ Mai': 0, '🔴 >7gg': 1, '🟡 >3gg': 2, '🟢 OK': 3 };
    return (ord[a.stato] || 0) - (ord[b.stato] || 0);
  });

  const tComp = body.appendTable();
  const hComp = tComp.appendTableRow();
  ['Atleta', 'Sedute (sett.)', 'RPE medio', 'Ultimo log', 'Stato'].forEach(h => {
    hComp.appendTableCell(h).editAsText().setBold(true);
  });
  sorted.forEach(d => {
    const row = tComp.appendTableRow();
    row.appendTableCell(d.nome);
    row.appendTableCell(String(d.sedSett));
    row.appendTableCell(d.rpeMedia !== null ? d.rpeMedia + ' / 10' : '—');
    row.appendTableCell(d.ultimoLabel);
    row.appendTableCell(d.stato);
  });
  body.appendParagraph('');

  // ── Sezione 2: Wellness ────────────────────────────────────────────────────
  const wPresenti = atletaData.filter(d => d.sonno !== null || d.dolori !== null || d.energia !== null);
  body.appendParagraph('2. Wellness Squadra').setHeading(DocumentApp.ParagraphHeading.HEADING2);
  if (wPresenti.length) {
    body.appendParagraph('Media settimanale (scala 1–5). Dolori: 1=nessuno, 5=insopportabile. ⚠️ = almeno un valore anomalo.');
    const tW = body.appendTable();
    const hW = tW.appendTableRow();
    ['Atleta', 'Sonno', 'Dolori', 'Energia', 'Anomalia'].forEach(h => {
      hW.appendTableCell(h).editAsText().setBold(true);
    });
    wPresenti.forEach(d => {
      const row = tW.appendTableRow();
      row.appendTableCell(d.nome);
      row.appendTableCell(d.sonno   !== null ? String(d.sonno)   : '—');
      row.appendTableCell(d.dolori  !== null ? String(d.dolori)  : '—');
      row.appendTableCell(d.energia !== null ? String(d.energia) : '—');
      row.appendTableCell(d.anomalia ? '⚠️ sì' : '✓');
    });
  } else {
    body.appendParagraph('Nessun dato wellness registrato questa settimana.');
  }
  body.appendParagraph('');

  // ── Sezione 3: Note giocatrici ─────────────────────────────────────────────
  const notePresenti = atletaData.filter(d => d.note.length > 0);
  body.appendParagraph('3. Note Giocatrici').setHeading(DocumentApp.ParagraphHeading.HEADING2);
  if (notePresenti.length) {
    notePresenti.forEach(d => {
      body.appendParagraph(d.nome + ':').editAsText().setBold(true);
      d.note.forEach(n => body.appendListItem(n));
    });
  } else {
    body.appendParagraph('Nessuna nota registrata questa settimana.');
  }

  doc.saveAndClose();

  // Sposta nel folder staff (rimuovi da My Drive)
  const docFile = DriveApp.getFileById(doc.getId());
  DriveApp.getFolderById(FOLDER_STAFF_ID).addFile(docFile);
  DriveApp.getRootFolder().removeFile(docFile);

  // Email al coach con link diretto
  const urgenti  = atletaData.filter(d => d.giorniSilenzio === null || d.giorniSilenzio > 7).length;
  const anomalie = atletaData.filter(d => d.anomalia).length;
  const oggetto  = 'Report settimanale Marsala Volley — ' + fmt(luneScorso) + '→' + fmt(domScorso);
  const emailHtml = `
<div style="font-family:Arial,sans-serif;max-width:560px">
  <div style="background:#1a3a6b;color:#fff;padding:14px 20px;border-radius:8px 8px 0 0">
    <h2 style="margin:0;font-size:1rem">📊 Report Settimanale Marsala Volley</h2>
    <p style="margin:4px 0 0;font-size:0.82rem;opacity:0.8">Settimana ${fmt(luneScorso)} – ${fmt(domScorso)} ${domScorso.getFullYear()}</p>
  </div>
  <div style="border:1px solid #ddd;border-top:none;padding:16px 20px;border-radius:0 0 8px 8px">
    ${urgenti  ? `<p style="color:#c33">⚠️ ${urgenti} atlete non si allenano da &gt;7gg</p>` : '<p style="color:#2a9d3a">✓ Compliance OK</p>'}
    ${anomalie ? `<p style="color:#e6a817">⚠️ ${anomalie} atlete con anomalie wellness</p>` : '<p style="color:#2a9d3a">✓ Nessuna anomalia wellness</p>'}
    <p><a href="${doc.getUrl()}" style="color:#1a3a6b;font-weight:bold">→ Apri il report completo (Google Doc)</a></p>
    <p style="font-size:0.8rem;color:#888">Generato automaticamente ogni lunedì alle 8:00</p>
  </div>
</div>`;
  MailApp.sendEmail({ to: EMAIL_COACH, subject: oggetto, htmlBody: emailHtml });
}

// Esegui UNA VOLTA per installare il trigger del report settimanale
function installaReportTrigger() {
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'creaReportSettimanale')
    .forEach(t => ScriptApp.deleteTrigger(t));

  ScriptApp.newTrigger('creaReportSettimanale')
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.MONDAY)
    .atHour(8)
    .create();
}

// ─────────────────────────────────────────────────────────────────────────────

function risposta(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
function errore(msg) { return risposta({ ok: false, errore: msg }); }