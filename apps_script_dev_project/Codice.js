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

// ── REPORT SETTIMANALE STAFF (Google Slides) ─────────────────────────────────

const FOLDER_STAFF_ID = '1H8NcBNeUi1Jr7b-fx3blaPB8vRKfTrT2';

function creaSlideSettimanale() {
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

  const avgN = arr => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null;
  const f1   = n   => n !== null ? n.toFixed(1) : '—';

  const atletaData = giocatrici.map(g => {
    const pAll   = progressi.filter(p => String(p.ID_Giocatrice) === String(g.ID) && p.Valore);
    const pEserc = pAll.filter(p => !SKIP_SET.has(p.Esercizio));

    const sedSett = new Set(
      pEserc.filter(p => p.Timestamp && inRange(p.Timestamp)).map(p => p.N_Seduta)
    ).size;

    const rpeVals = pAll
      .filter(p => p.Esercizio === 'RPE-seduta' && p.Timestamp && inRange(p.Timestamp))
      .map(p => Number(p.Valore)).filter(v => !isNaN(v));
    const rpeMedia = avgN(rpeVals);
    const volPercepito = rpeMedia !== null ? rpeMedia * sedSett : null;

    let ultimoTs = null;
    pEserc.forEach(p => {
      const ts = p.Timestamp ? new Date(p.Timestamp) : null;
      if (ts && (!ultimoTs || ts > ultimoTs)) ultimoTs = ts;
    });
    const giorniSilenzio = ultimoTs ? Math.floor((ora - ultimoTs) / 86400000) : null;

    const wSett    = wellness.filter(w => String(w.ID_Giocatrice) === String(g.ID) && w.Timestamp && inRange(w.Timestamp));
    const sonno    = avgN(wSett.map(w => Number(w.Qualita_Sonno)).filter(v => !isNaN(v) && v));
    const dolori   = avgN(wSett.map(w => Number(w.Dolori)).filter(v => !isNaN(v) && v));
    const energia  = avgN(wSett.map(w => Number(w.Energia)).filter(v => !isNaN(v) && v));
    const note     = wSett.filter(w => w.Note).map(w => String(w.Note).trim()).filter(Boolean);
    const anomalia = wSett.some(w => Number(w.Qualita_Sonno) <= 2 || Number(w.Dolori) >= 4 || Number(w.Energia) <= 2);

    let statoCat;
    if (giorniSilenzio === null) statoCat = 'mai';
    else if (giorniSilenzio > 7) statoCat = 'rosso';
    else if (giorniSilenzio > 3) statoCat = 'giallo';
    else                          statoCat = 'verde';

    let ultimoLabel;
    if (giorniSilenzio === null)   ultimoLabel = 'mai';
    else if (giorniSilenzio === 0) ultimoLabel = 'oggi';
    else if (giorniSilenzio === 1) ultimoLabel = 'ieri';
    else                           ultimoLabel = giorniSilenzio + 'gg fa';

    return { nome: g.Nome, statoCat, sedSett, rpeMedia, volPercepito,
             giorniSilenzio, ultimoLabel, sonno, dolori, energia, note, anomalia };
  });

  // ── Medie squadra ──────────────────────────────────────────────────────────
  const tot       = atletaData.length;
  const allenate  = atletaData.filter(d => d.statoCat !== 'mai').length;
  const compPct   = Math.round((allenate / tot) * 100);
  const urgenti   = atletaData.filter(d => d.statoCat === 'mai' || d.statoCat === 'rosso').length;
  const allRpe    = atletaData.filter(d => d.rpeMedia !== null).map(d => d.rpeMedia);
  const rpeSquadra  = f1(avgN(allRpe));
  const sonnoSq   = f1(avgN(atletaData.filter(d => d.sonno   !== null).map(d => d.sonno)));
  const doloriSq  = f1(avgN(atletaData.filter(d => d.dolori  !== null).map(d => d.dolori)));
  const energiaSq = f1(avgN(atletaData.filter(d => d.energia !== null).map(d => d.energia)));

  const ordCat = { mai: 0, rosso: 1, giallo: 2, verde: 3 };
  const sorted = [...atletaData].sort((a, b) => ordCat[a.statoCat] - ordCat[b.statoCat]);

  // ── Crea Google Slides ─────────────────────────────────────────────────────
  const BLU = '#1a3a6b';
  const titolo = 'Report Staff — ' + fmt(luneScorso) + '->' + fmt(domScorso) + ' ' + domScorso.getFullYear();
  const pres = SlidesApp.create(titolo);

  function txt_(slide, content, x, y, w, h, sz, bold, hex) {
    const box = slide.insertTextBox(String(content), x, y, w, h);
    box.getFill().setTransparent();
    const style = box.getText().getTextStyle();
    if (sz)   style.setFontSize(sz);
    if (bold) style.setBold(true);
    if (hex)  style.setForegroundColor(hex);
    return box;
  }

  function rect_(slide, x, y, w, h, fillHex, borderHex) {
    const s = slide.insertShape(SlidesApp.ShapeType.ROUNDED_RECTANGLE, x, y, w, h);
    s.getFill().setSolidFill(fillHex);
    if (borderHex) s.getBorder().getLineFill().setSolidFill(borderHex);
    else s.getBorder().getLineFill().setTransparent();
    return s;
  }

  // ── Slide 1: Panoramica squadra ────────────────────────────────────────────
  const s1 = pres.getSlides()[0];
  s1.getBackground().setSolidFill(BLU);
  s1.getPlaceholders().forEach(p => p.remove());

  txt_(s1, 'Marsala Volley', 28, 20, 500, 38, 26, true, '#FFFFFF');
  txt_(s1, 'Report Staff — Settimana ' + fmt(luneScorso) + '-' + fmt(domScorso) + ' ' + domScorso.getFullYear(), 28, 55, 500, 24, 12, false, '#8899BB');

  // KPI cards
  const kpis = [
    { val: allenate + '/' + tot, sub: 'hanno allenato', bg: allenate >= tot * 0.8 ? '#d4edda' : '#f8d7da' },
    { val: compPct + '%',        sub: 'compliance',     bg: compPct >= 80 ? '#d4edda' : '#fff3cd' },
    { val: rpeSquadra,           sub: 'RPE medio sett', bg: '#fff8e1' },
    { val: String(urgenti),      sub: urgenti > 0 ? 'atlete urgenti' : 'tutte ok', bg: urgenti > 0 ? '#f8d7da' : '#d4edda' },
  ];
  kpis.forEach((k, i) => {
    const x = 28 + i * 162;
    const card = rect_(s1, x, 100, 154, 82, k.bg, null);
    txt_(s1, k.val, x + 8, 108, 140, 40, k.val.length > 5 ? 20 : 26, true, BLU);
    txt_(s1, k.sub, x + 8, 150, 140, 18, 10, false, '#555555');
  });

  // Wellness media squadra
  txt_(s1, 'WELLNESS MEDIA SQUADRA', 28, 200, 320, 18, 9, true, '#6688AA');
  [['Sonno', sonnoSq], ['Dolori', doloriSq], ['Energia', energiaSq]].forEach(([lbl, val], i) => {
    const x = 28 + i * 112;
    txt_(s1, val, x, 220, 100, 34, 22, true, '#FFFFFF');
    txt_(s1, lbl, x, 253, 100, 16, 10, false, '#6688AA');
  });

  // Dot grid atleti
  txt_(s1, 'STATO ATLETI', 418, 98, 280, 18, 9, true, '#6688AA');
  const dotColor = { verde: '#2a9d3a', giallo: '#e6a817', rosso: '#cc3333', mai: '#888888' };
  sorted.forEach((d, i) => {
    const col = i % 4, row = Math.floor(i / 4);
    const x = 418 + col * 75, y = 118 + row * 34;
    const dot = s1.insertShape(SlidesApp.ShapeType.ELLIPSE, x, y, 14, 14);
    dot.getFill().setSolidFill(dotColor[d.statoCat]);
    dot.getBorder().getLineFill().setTransparent();
    txt_(s1, d.nome.split(' ')[0], x + 18, y - 1, 54, 17, 9, false, '#FFFFFF');
  });

  // ── Slide 2: Dati individuali ──────────────────────────────────────────────
  const s2 = pres.appendSlide();
  s2.getPlaceholders().forEach(p => p.remove());
  s2.getBackground().setSolidFill('#FFFFFF');

  txt_(s2, 'Compliance · Carico · Wellness — individuale', 20, 14, 680, 32, 17, true, BLU);
  txt_(s2, 'Settimana ' + fmt(luneScorso) + '-' + fmt(domScorso) + '  |  Volume percepito = RPE x sedute', 20, 43, 680, 18, 9, false, '#888888');

  const hY = 62;
  const hBar = s2.insertShape(SlidesApp.ShapeType.RECTANGLE, 18, hY, 690, 19);
  hBar.getFill().setSolidFill(BLU);
  hBar.getBorder().getLineFill().setTransparent();

  const cols = [
    { l:'Atleta',   x:20,  w:92 }, { l:'Stato',   x:115, w:58 },
    { l:'Sed.',     x:176, w:34 }, { l:'RPE',      x:213, w:38 },
    { l:'Vol.',     x:254, w:38 }, { l:'Sonno',    x:295, w:50 },
    { l:'Dolori',   x:348, w:50 }, { l:'Energia',  x:401, w:52 },
    { l:'Note wellness', x:456, w:250 },
  ];
  cols.forEach(c => txt_(s2, c.l, c.x, hY + 3, c.w, 14, 8, true, '#FFFFFF'));

  const rowBg  = { verde: '#f0faf2', giallo: '#fffbea', rosso: '#fff0f0', mai: '#f7f7f7' };
  const statoL = { verde: 'ok', giallo: '> 3gg', rosso: '> 7gg', mai: 'mai' };

  sorted.forEach((d, i) => {
    const rY = hY + 19 + i * 18;
    if (rY + 18 > 400) return;
    const bg = s2.insertShape(SlidesApp.ShapeType.RECTANGLE, 18, rY, 690, 17);
    bg.getFill().setSolidFill(i % 2 === 0 ? rowBg[d.statoCat] : '#FAFAFA');
    bg.getBorder().getLineFill().setTransparent();

    const cells = [
      { v: d.nome.split(' ')[0],     x:20,  w:92  },
      { v: statoL[d.statoCat],       x:115, w:58  },
      { v: String(d.sedSett),        x:176, w:34  },
      { v: f1(d.rpeMedia),           x:213, w:38  },
      { v: f1(d.volPercepito),       x:254, w:38  },
      { v: f1(d.sonno),              x:295, w:50  },
      { v: f1(d.dolori),             x:348, w:50  },
      { v: f1(d.energia),            x:401, w:52  },
      { v: d.note.length ? d.note[0].substring(0, 40) : '', x:456, w:250 },
    ];
    cells.forEach(c => txt_(s2, c.v, c.x, rY + 3, c.w, 13, 9, false, '#333333'));
  });

  // ── Slide 3: Note del coach ────────────────────────────────────────────────
  const s3 = pres.appendSlide();
  s3.getPlaceholders().forEach(p => p.remove());
  s3.getBackground().setSolidFill('#FFFFFF');

  txt_(s3, 'Note del coach', 40, 26, 640, 40, 24, true, BLU);
  txt_(s3, 'Completa questa slide prima di condividere con lo staff — poi cancella questo testo', 40, 66, 640, 22, 11, false, '#888888');

  const noteCard = rect_(s3, 40, 98, 640, 272, '#F8F9FA', '#DDDDDD');
  const noteTxt = noteCard.getText();
  noteTxt.setText(
    'Note generali squadra\n\n\n\n' +
    'Atlete da monitorare\n\n\n\n' +
    'Obiettivi settimana prossima\n\n'
  );
  noteTxt.getTextStyle().setFontSize(13).setForegroundColor('#AAAAAA');
  [0, 4, 8].forEach(idx => {
    const paras = noteTxt.getParagraphs();
    if (paras[idx]) {
      paras[idx].getRange().getTextStyle()
        .setBold(true).setForegroundColor('#555555').setFontSize(14);
    }
  });

  // Sposta nel folder staff
  pres.saveAndClose();
  const presFile = DriveApp.getFileById(pres.getId());
  DriveApp.getFolderById(FOLDER_STAFF_ID).addFile(presFile);
  DriveApp.getRootFolder().removeFile(presFile);

  // Email coach con link
  const oggetto = 'Report Staff Marsala Volley — ' + fmt(luneScorso) + '->' + fmt(domScorso);
  const emailHtml = `
<div style="font-family:Arial,sans-serif;max-width:560px">
  <div style="background:#1a3a6b;color:#fff;padding:14px 20px;border-radius:8px 8px 0 0">
    <h2 style="margin:0;font-size:1rem">📊 Report Staff — Marsala Volley</h2>
    <p style="margin:4px 0 0;font-size:0.82rem;opacity:0.8">Settimana ${fmt(luneScorso)} – ${fmt(domScorso)} ${domScorso.getFullYear()}</p>
  </div>
  <div style="border:1px solid #ddd;border-top:none;padding:16px 20px;border-radius:0 0 8px 8px">
    <p><strong>${allenate}/${tot}</strong> atlete (${compPct}%) · RPE medio: <strong>${rpeSquadra}</strong></p>
    ${urgenti ? `<p style="color:#c33">⚠️ ${urgenti} atlete urgenti</p>` : '<p style="color:#2a9d3a">✓ Compliance OK</p>'}
    <p><a href="${pres.getUrl()}" style="color:#1a3a6b;font-weight:bold">→ Apri le slides, aggiungi le note e condividi con lo staff</a></p>
    <p style="font-size:0.8rem;color:#888">Generato ogni lunedi alle 8:00</p>
  </div>
</div>`;
  MailApp.sendEmail({ to: EMAIL_COACH, subject: oggetto, htmlBody: emailHtml });
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

function risposta(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
function errore(msg) { return risposta({ ok: false, errore: msg }); }