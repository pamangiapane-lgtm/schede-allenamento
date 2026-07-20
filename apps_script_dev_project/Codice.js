const TOKEN = 'mv26-dev-9kR4tLqB';
const PROD_API_URL = 'https://script.google.com/macros/s/AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec';
const BACKUP_FOLDER_ID = '1iiM7V2CislN971wXZsOmnncGGj1lS1sG';

function doGet(e) {
  const token  = e.parameter.token;
  const azione = e.parameter.azione;
  const foglio = e.parameter.foglio;
  if (token !== TOKEN) return errore('Token non valido');
  try {
    if (azione === 'leggi') return leggi(foglio);
    if (azione === 'leggi_note') return leggiNote(e.parameter.id, e.parameter.n_seduta);
    if (azione === 'leggi_tutte_note') return leggiTutteNote_();
    if (azione === 'conferma_riepilogo_settimanale') {
      inviaRiepilogoSettimanale();
      return HtmlService.createHtmlOutput(
        '<div style="font-family:Arial;max-width:500px;margin:60px auto;text-align:center">' +
        '<div style="font-size:4rem">✅</div>' +
        '<h2 style="color:#16a34a;margin:16px 0 8px">Email inviate!</h2>' +
        '<p style="color:#64748b">Le email settimanali sono state inviate a tutte le atlete.<br>Puoi chiudere questa pagina.</p>' +
        '</div>'
      );
    }
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
    if (azione === 'invia_atleta') return inviaRiepilogoAtleta_(body.id);
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

// ── EMAIL DIGEST ─────────────────────────────────────────────────────────────

const EMAIL_COACH = 'pamangiapane@gmail.com';

function inviaDigest() {
  const ss     = SpreadsheetApp.getActiveSpreadsheet();
  const sheetG = ss.getSheetByName('Giocatrici');
  const sheetP = ss.getSheetByName('Progressi');
  const sheetW = ss.getSheetByName('Wellness');
  const sheetN = ss.getSheetByName('Note_Coach');
  if (!sheetG || !sheetP) return;

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
  const f1   = v => (v !== null && v !== undefined) ? Number(v).toFixed(1) : '—';
  const avgN = arr => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null;

  const righe = giocatrici.map(g => {
    const pAll   = progressi.filter(p => String(p.ID_Giocatrice) === String(g.ID) && p.Valore);
    const pEserc = pAll.filter(p => !SKIP_SET.has(p.Esercizio));
    const pSett  = pEserc.filter(p => p.Timestamp && new Date(p.Timestamp) >= cut7);
    const rpeVals = pAll.filter(p => p.Esercizio === 'RPE-seduta' && p.Timestamp && new Date(p.Timestamp) >= cut7)
                        .map(p => Number(p.Valore)).filter(v => !isNaN(v));
    const seduteSettimana = new Set(pSett.map(p => p.N_Seduta)).size;
    const rpeMedia = avgN(rpeVals);
    const volume   = rpeMedia !== null ? rpeMedia * seduteSettimana : null;

    let ultimoTs = null;
    pEserc.forEach(p => { const ts = p.Timestamp ? new Date(p.Timestamp) : null; if (ts && (!ultimoTs || ts > ultimoTs)) ultimoTs = ts; });
    const giorniSilenzio = ultimoTs ? Math.floor((ora - ultimoTs) / 86400000) : null;

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

    const wSett   = wellness.filter(w => String(w.ID_Giocatrice) === String(g.ID) && w.Timestamp && new Date(w.Timestamp) >= cut7);
    const sonno   = avgN(wSett.map(w => Number(w.Qualita_Sonno)).filter(v => !isNaN(v) && v > 0));
    const dolori  = avgN(wSett.map(w => Number(w.Dolori)).filter(v => !isNaN(v) && v > 0));
    const energia = avgN(wSett.map(w => Number(w.Energia)).filter(v => !isNaN(v) && v > 0));

    const noteAtleta = noteAttive
      .filter(n => String(n.ID_Giocatrice) === String(g.ID) || n.ID_Giocatrice === 'TUTTE')
      .map(n => String(n.Testo).trim()).filter(Boolean);

    return { nome: g.Nome, status, ultimoLabel, seduteSettimana, rpeMedia, rpeVals, volume, sonno, dolori, energia, noteAtleta };
  }).sort((a, b) => {
    const ord = { mai: 0, rosso: 1, giallo: 2, verde: 3 };
    return ord[a.status] - ord[b.status];
  });

  // KPI squadra
  const urgenti      = righe.filter(r => r.status === 'mai' || r.status === 'rosso').length;
  const allenate     = righe.filter(r => r.seduteSettimana > 0).length;
  const totSedute    = righe.reduce((s, r) => s + r.seduteSettimana, 0);
  const allRpe       = righe.flatMap(r => r.rpeVals);
  const rpeSquadra   = avgN(allRpe);
  const caricoSquadra = rpeSquadra !== null ? rpeSquadra * (totSedute / righe.length) : null;
  const sonnoSq      = avgN(righe.map(r => r.sonno).filter(v => v !== null));
  const doloriSq     = avgN(righe.map(r => r.dolori).filter(v => v !== null));
  const energiaSq    = avgN(righe.map(r => r.energia).filter(v => v !== null));

  // Alerts
  const rpeAlti    = righe.filter(r => r.rpeVals.some(v => v >= 8));
  const doloriAlti = righe.filter(r => r.dolori !== null && r.dolori >= 3);
  const inattive   = righe.filter(r => r.status === 'mai' || r.status === 'rosso');

  // Colors
  const wC  = v => v === null ? '#94a3b8' : v >= 4 ? '#1a3a6b' : v >= 3 ? '#d97706' : '#dc2626';
  const dC  = v => v === null ? '#94a3b8' : v <= 1.5 ? '#16a34a' : v <= 2.5 ? '#d97706' : '#dc2626';
  const rC  = v => !v ? '#334155' : v >= 8 ? '#dc2626' : v >= 7 ? '#d97706' : '#334155';
  const stC = { mai: '#f1f5f9', rosso: '#fef2f2', giallo: '#fffbeb', verde: '#f0fdf4' };
  const stE = { mai: '⚫', rosso: '🔴', giallo: '🟡', verde: '🟢' };

  const giornoNomi = ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'];
  const giornoOra  = giornoNomi[ora.getDay()] + ' ' + ora.getDate() + '/' + (ora.getMonth()+1) + ' ' + String(ora.getHours()).padStart(2,'0') + ':00';

  // Alert blocks
  let alertHtml = '';
  if (inattive.length)
    alertHtml += '<div style="background:#fef2f2;border-left:3px solid #dc2626;padding:9px 14px;margin-bottom:8px;border-radius:0 6px 6px 0">' +
      '<p style="margin:0 0 3px;font-size:.7rem;font-weight:700;color:#dc2626;letter-spacing:.04em;text-transform:uppercase">Inattive / Urgenti</p>' +
      '<p style="margin:0;font-size:.82rem;color:#7f1d1d">' + inattive.map(r => esc_(r.nome.split(' ')[0]) + ' (' + r.ultimoLabel + ')').join(' · ') + '</p></div>';
  if (rpeAlti.length)
    alertHtml += '<div style="background:#fff7ed;border-left:3px solid #ea580c;padding:9px 14px;margin-bottom:8px;border-radius:0 6px 6px 0">' +
      '<p style="margin:0 0 3px;font-size:.7rem;font-weight:700;color:#ea580c;letter-spacing:.04em;text-transform:uppercase">RPE alto ≥8</p>' +
      '<p style="margin:0;font-size:.82rem;color:#7c2d12">' + rpeAlti.map(r => esc_(r.nome.split(' ')[0]) + ' (' + Math.max(...r.rpeVals) + ')').join(' · ') + '</p></div>';
  if (doloriAlti.length)
    alertHtml += '<div style="background:#fffbeb;border-left:3px solid #d97706;padding:9px 14px;margin-bottom:0;border-radius:0 6px 6px 0">' +
      '<p style="margin:0 0 3px;font-size:.7rem;font-weight:700;color:#d97706;letter-spacing:.04em;text-transform:uppercase">Dolori elevati ≥3/5</p>' +
      '<p style="margin:0;font-size:.82rem;color:#78350f">' + doloriAlti.map(r => esc_(r.nome.split(' ')[0]) + ' (' + f1(r.dolori) + ')').join(' · ') + '</p></div>';

  // Per-athlete rows
  const righeHtml = righe.map(r => {
    const nc = r.noteAtleta.length ? r.noteAtleta[0] : '';
    const ncTxt = nc.length > 65 ? nc.substring(0, 62) + '…' : nc;
    return '<tr style="background:' + stC[r.status] + ';border-bottom:1px solid #e8edf5">' +
      '<td style="padding:7px 8px;font-size:.75rem;white-space:nowrap">' + stE[r.status] + '</td>' +
      '<td style="padding:7px 4px;font-size:.82rem;font-weight:600;color:#1a3a6b;white-space:nowrap">' + esc_(r.nome.split(' ')[0]) + '</td>' +
      '<td style="padding:7px 4px;font-size:.82rem;text-align:center;font-variant-numeric:tabular-nums">' + r.seduteSettimana + '</td>' +
      '<td style="padding:7px 4px;font-size:.82rem;text-align:center;font-weight:' + (r.rpeMedia !== null && r.rpeMedia >= 7 ? '700' : '400') + ';color:' + rC(r.rpeMedia) + ';font-variant-numeric:tabular-nums">' + (r.rpeMedia !== null ? f1(r.rpeMedia) : '—') + '</td>' +
      '<td style="padding:7px 4px;font-size:.82rem;text-align:center;font-variant-numeric:tabular-nums">' + (r.volume !== null ? f1(r.volume) : '—') + '</td>' +
      '<td style="padding:7px 4px;font-size:.75rem;text-align:center;color:' + wC(r.sonno) + ';font-variant-numeric:tabular-nums">' + (r.sonno !== null ? f1(r.sonno) : '—') + '</td>' +
      '<td style="padding:7px 4px;font-size:.75rem;text-align:center;color:' + dC(r.dolori) + ';font-variant-numeric:tabular-nums">' + (r.dolori !== null ? f1(r.dolori) : '—') + '</td>' +
      '<td style="padding:7px 4px;font-size:.75rem;text-align:center;color:' + wC(r.energia) + ';font-variant-numeric:tabular-nums">' + (r.energia !== null ? f1(r.energia) : '—') + '</td>' +
      '<td style="padding:7px 8px;font-size:.72rem;color:#64748b">' + esc_(ncTxt) + '</td>' +
    '</tr>';
  }).join('');

  // Note automatiche coach-facing (generate dal sistema, non dalle atlete)
  const noteAutoCoach = [];
  if (inattive.length)
    noteAutoCoach.push('⚫ ' + inattive.length + ' atleta/e senza sedute negli ultimi 7gg: ' + inattive.map(r => r.nome.split(' ')[0] + ' (' + r.ultimoLabel + ')').join(', '));
  if (rpeAlti.length)
    noteAutoCoach.push('🔴 RPE ≥8: ' + rpeAlti.map(r => r.nome.split(' ')[0] + ' (max ' + Math.max(...r.rpeVals) + ')').join(', ') + ' — valutare riduzione carico');
  if (doloriAlti.length)
    noteAutoCoach.push('⚠️ Dolori ≥3/5: ' + doloriAlti.map(r => r.nome.split(' ')[0] + ' (' + f1(r.dolori) + ')').join(', ') + ' — monitorare e aggiornare protocollo');
  const noteManCoach = noteAttive
    .filter(n => n.ID_Giocatrice === 'COACH')
    .map(n => String(n.Testo).trim()).filter(Boolean);
  const tutteNoteCoach = noteAutoCoach.concat(noteManCoach);

  const noteCHtml = tutteNoteCoach.length
    ? '<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:12px 16px;margin:0 0 0">' +
      '<p style="margin:0 0 8px;font-size:.65rem;font-weight:700;color:#1a3a6b;letter-spacing:.08em;text-transform:uppercase">Note per il coach</p>' +
      tutteNoteCoach.map(n => '<p style="margin:4px 0;font-size:.8rem;color:#1e3a5f">' + esc_(n) + '</p>').join('') +
      '</div>'
    : '';

  const body = `
<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto">

  <div style="background:#1a3a6b;color:#fff;padding:18px 22px 16px">
    <p style="margin:0 0 2px;font-size:.6rem;opacity:.5;letter-spacing:.12em;text-transform:uppercase">Marsala Volley · Report mattutino</p>
    <h2 style="margin:0;font-size:1.1rem;font-weight:700">${giornoOra} · Ultimi 7 giorni</h2>
    <p style="margin:5px 0 0;font-size:.72rem;opacity:.65">Squadra: ${allenate}/${righe.length} attive · ${urgenti > 0 ? urgenti + ' urgenti' : 'nessuna urgenza'}</p>
  </div>

  ${tutteNoteCoach.length ? '<div style="padding:14px 16px;background:#fafbff;border:1px solid #e8edf5;border-top:none">' + noteCHtml + '</div>' : ''}

  <div style="display:flex;border:1px solid #e8edf5;border-top:none">
    <div style="flex:1;padding:11px 8px;text-align:center;border-right:1px solid #e8edf5">
      <div style="font-size:1.2rem;font-weight:700;color:#1a3a6b">${allenate}/${righe.length}</div>
      <div style="font-size:.6rem;color:#64748b;margin-top:2px;text-transform:uppercase;letter-spacing:.05em">allenate</div>
    </div>
    <div style="flex:1;padding:11px 8px;text-align:center;border-right:1px solid #e8edf5">
      <div style="font-size:1.2rem;font-weight:700;color:#1a3a6b">${totSedute}</div>
      <div style="font-size:.6rem;color:#64748b;margin-top:2px;text-transform:uppercase;letter-spacing:.05em">sedute</div>
    </div>
    <div style="flex:1;padding:11px 8px;text-align:center;border-right:1px solid #e8edf5">
      <div style="font-size:1.2rem;font-weight:700;color:#1a3a6b">${rpeSquadra !== null ? f1(rpeSquadra) : '—'}<span style="font-size:.78rem;font-weight:400">/10</span></div>
      <div style="font-size:.6rem;color:#64748b;margin-top:2px;text-transform:uppercase;letter-spacing:.05em">RPE medio</div>
    </div>
    <div style="flex:1;padding:11px 8px;text-align:center;border-right:1px solid #e8edf5">
      <div style="font-size:1.2rem;font-weight:700;color:#1a3a6b">${caricoSquadra !== null ? f1(caricoSquadra) : '—'}</div>
      <div style="font-size:.6rem;color:#64748b;margin-top:2px;text-transform:uppercase;letter-spacing:.05em">carico</div>
    </div>
    <div style="flex:1;padding:11px 8px;text-align:center;border-right:1px solid #e8edf5">
      <div style="font-size:1.2rem;font-weight:700;color:${wC(sonnoSq)}">${sonnoSq !== null ? f1(sonnoSq) : '—'}<span style="font-size:.72rem;font-weight:400;color:#94a3b8">/5</span></div>
      <div style="font-size:.6rem;color:#94a3b8;margin-top:2px;text-transform:uppercase;letter-spacing:.05em">Sonno</div>
    </div>
    <div style="flex:1;padding:11px 8px;text-align:center;border-right:1px solid #e8edf5">
      <div style="font-size:1.2rem;font-weight:700;color:${dC(doloriSq)}">${doloriSq !== null ? f1(doloriSq) : '—'}<span style="font-size:.72rem;font-weight:400;color:#94a3b8">/5</span></div>
      <div style="font-size:.6rem;color:#94a3b8;margin-top:2px;text-transform:uppercase;letter-spacing:.05em">Dolori ↓</div>
    </div>
    <div style="flex:1;padding:11px 8px;text-align:center">
      <div style="font-size:1.2rem;font-weight:700;color:${wC(energiaSq)}">${energiaSq !== null ? f1(energiaSq) : '—'}<span style="font-size:.72rem;font-weight:400;color:#94a3b8">/5</span></div>
      <div style="font-size:.6rem;color:#94a3b8;margin-top:2px;text-transform:uppercase;letter-spacing:.05em">Energia</div>
    </div>
  </div>

  ${alertHtml ? '<div style="padding:10px 14px;border:1px solid #e8edf5;border-top:none">' + alertHtml + '</div>' : ''}

  <div style="border:1px solid #e8edf5;border-top:none;overflow-x:auto">
    <table style="width:100%;border-collapse:collapse;min-width:560px">
      <thead>
        <tr style="background:#f8fafc">
          <th style="padding:6px 8px;font-size:.58rem;color:#94a3b8;text-align:center;font-weight:700;text-transform:uppercase"></th>
          <th style="padding:6px 4px;font-size:.58rem;color:#94a3b8;text-align:left;font-weight:700;text-transform:uppercase">Atleta</th>
          <th style="padding:6px 4px;font-size:.58rem;color:#94a3b8;text-align:center;font-weight:700;text-transform:uppercase">Sed.</th>
          <th style="padding:6px 4px;font-size:.58rem;color:#94a3b8;text-align:center;font-weight:700;text-transform:uppercase">RPE</th>
          <th style="padding:6px 4px;font-size:.58rem;color:#94a3b8;text-align:center;font-weight:700;text-transform:uppercase">Vol.</th>
          <th style="padding:6px 4px;font-size:.58rem;color:#94a3b8;text-align:center;font-weight:700;text-transform:uppercase">Sonno</th>
          <th style="padding:6px 4px;font-size:.58rem;color:#94a3b8;text-align:center;font-weight:700;text-transform:uppercase">Dolori</th>
          <th style="padding:6px 4px;font-size:.58rem;color:#94a3b8;text-align:center;font-weight:700;text-transform:uppercase">Energia</th>
          <th style="padding:6px 8px;font-size:.58rem;color:#94a3b8;text-align:left;font-weight:700;text-transform:uppercase">Nota coach</th>
        </tr>
      </thead>
      <tbody>${righeHtml}</tbody>
    </table>
  </div>

  <div style="padding:14px 20px;border:1px solid #e8edf5;border-top:none;text-align:center">
    <a href="https://claude.ai/code/artifact/e85a1b03-9788-4d9d-ad27-a9ca626c8c4a" style="display:inline-block;background:#1a3a6b;color:#fff;padding:10px 26px;border-radius:6px;font-size:.85rem;font-weight:600;text-decoration:none;margin-right:8px">Apri report staff →</a>
    <a href="https://pamangiapane-lgtm.github.io/schede-allenamento/report.html?coach=mv26-coach-8pL2wK" style="display:inline-block;background:#f1f5f9;color:#1a3a6b;padding:10px 18px;border-radius:6px;font-size:.82rem;font-weight:600;text-decoration:none;border:1px solid #e2e8f0">Coach dashboard</a>
  </div>
  <p style="text-align:center;font-size:.62rem;color:#cbd5e1;padding:6px 0 4px;margin:0">Marsala Volley 2026/27 · Report automatico · Lun/Mer/Ven/Sab 20:00</p>
</div>`;

  const oggetto = urgenti > 0
    ? `⚠️ Marsala Volley — ${urgenti} urgenti · ${giornoOra}`
    : `✅ Marsala Volley — ${allenate}/${righe.length} allenate · ${giornoOra}`;

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
  '6':  'gaiabio15@gmail.com',
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
  if (IS_DEV_SCRIPT) { Logger.log('[DEV] inviaRiepilogoSettimanale — invio email disabilitato in DEV'); return; }

  giocatrici.forEach(g => {
    const email = EMAIL_ATLETE[String(g.ID)];
    if (!email) { Logger.log('Email mancante per ID ' + g.ID + ' (' + g.Nome + ')'); return; }

    const lingua  = String(g.Lingua || '').trim().toUpperCase() === 'EN' ? 'EN' : 'IT';
    const pAll  = progressi.filter(p => String(p.ID_Giocatrice) === String(g.ID) && p.Valore);
    const pSett = pAll.filter(p => p.Timestamp && inRange(p.Timestamp));

    // Per-session breakdown (skip '?' = manually added max entries)
    const seduteMap = {};
    pSett.filter(p => p.N_Seduta && p.N_Seduta !== '?').forEach(p => {
      if (!seduteMap[p.N_Seduta]) seduteMap[p.N_Seduta] = { nome: p.N_Seduta, rpe: null, fatica: null, ts: null };
      const ts = new Date(p.Timestamp);
      if (!seduteMap[p.N_Seduta].ts || ts < seduteMap[p.N_Seduta].ts) seduteMap[p.N_Seduta].ts = ts;
      if (p.Esercizio === 'RPE-seduta')    { const v = Number(p.Valore); if (!isNaN(v) && v > 0) seduteMap[p.N_Seduta].rpe    = v; }
      if (p.Esercizio === 'Fatica-seduta') { const v = Number(p.Valore); if (!isNaN(v) && v > 0) seduteMap[p.N_Seduta].fatica = v; }
    });
    const sedute = Object.values(seduteMap).sort((a, b) => (a.ts || 0) - (b.ts || 0));

    // Top 5 carichi (all sessions including manual '?' entries)
    const maxPerEs = {};
    pSett.filter(p => !SKIP_SET.has(p.Esercizio)).forEach(p => {
      const m = String(p.Valore).match(/[\d.]+/);
      if (!m) return;
      const kg = parseFloat(m[0]);
      const stima = String(p.Valore).includes('~');
      if (!maxPerEs[p.Esercizio] || kg > maxPerEs[p.Esercizio].kg)
        maxPerEs[p.Esercizio] = { kg, stima };
    });
    const topCarichi = Object.entries(maxPerEs).sort((a, b) => b[1].kg - a[1].kg).slice(0, 5);
    const hasManual  = pSett.some(p => p.N_Seduta === '?' && !SKIP_SET.has(p.Esercizio));

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
      ? buildRiepilogoEN_(nome, settLabel, sedute, topCarichi, hasManual, sonno, dolori, energia, noteAtleta, g.ID, IS_DEV_SCRIPT)
      : buildRiepilogoIT_(nome, settLabel, sedute, topCarichi, hasManual, sonno, dolori, energia, noteAtleta, g.ID, IS_DEV_SCRIPT);

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

function buildRiepilogoIT_(nome, settLabel, sedute, topCarichi, hasManual, sonno, dolori, energia, noteAtleta, idG, isDev) {
  const BASE = isDev
    ? 'https://pamangiapane-lgtm.github.io/schede-allenamento/dev/'
    : 'https://pamangiapane-lgtm.github.io/schede-allenamento/';
  const f1 = v => (v !== null && v !== undefined) ? Number(v).toFixed(1) : null;

  const rpeColor = v => !v ? '#cbd5e1' : v >= 8 ? '#dc2626' : v >= 7 ? '#ea580c' : v >= 6 ? '#d97706' : '#16a34a';
  const fatColor = v => !v ? '#cbd5e1' : v >= 4 ? '#dc2626' : v >= 3 ? '#d97706' : '#16a34a';
  const wColor   = v => v === null ? '#94a3b8' : v >= 4 ? '#1a3a6b' : v >= 3 ? '#d97706' : '#dc2626';
  const dolColor = v => v === null ? '#94a3b8' : v <= 1.5 ? '#16a34a' : v <= 2.5 ? '#d97706' : '#dc2626';

  // Sedute per-session
  const seduteHtml = sedute.length
    ? '<div style="border:1px solid #e8edf5;border-radius:8px;overflow:hidden;margin-bottom:18px">' +
      sedute.map(function(s, i) {
        var rc = rpeColor(s.rpe), fc = fatColor(s.fatica);
        var rv = s.rpe    !== null ? s.rpe    + '<span style="font-size:.65rem;font-weight:400;color:#94a3b8">/10</span>' : '&#x2014;';
        var fv = s.fatica !== null ? s.fatica + '<span style="font-size:.65rem;font-weight:400;color:#94a3b8">/5</span>'  : '&#x2014;';
        var bg  = i % 2 === 1 ? 'background:#fafbfd;' : '';
        var bdr = i < sedute.length - 1 ? 'border-bottom:1px solid #f1f5f9;' : '';
        return '<div style="display:flex;align-items:center;padding:10px 14px;gap:10px;' + bg + bdr + '">' +
          '<span style="background:#e8f0fb;color:#1a3a6b;font-size:.68rem;font-weight:700;padding:3px 9px;border-radius:4px;letter-spacing:.05em;white-space:nowrap">' + esc_(s.nome) + '</span>' +
          '<span style="flex:1;height:1px;background:#eef1f7;display:block"></span>' +
          '<span style="font-size:.68rem;color:#94a3b8;margin-right:3px">RPE</span>' +
          '<span style="font-size:.88rem;font-weight:700;color:' + rc + ';min-width:34px;text-align:right">' + rv + '</span>' +
          '<span style="width:1px;height:14px;background:#e2e8f0;display:inline-block;margin:0 6px"></span>' +
          '<span style="font-size:.68rem;color:#94a3b8;margin-right:3px">Fatica</span>' +
          '<span style="font-size:.88rem;font-weight:700;color:' + fc + ';min-width:24px;text-align:right">' + fv + '</span>' +
          '</div>';
      }).join('') + '</div>'
    : '<div style="background:#fef2f2;border-radius:8px;padding:12px 16px;margin-bottom:18px">' +
      '<p style="margin:0;font-size:.82rem;color:#dc2626">Nessuna seduta registrata questa settimana</p></div>';

  // Wellness
  const wVal = function(v, c) {
    return v !== null
      ? '<div style="font-size:1.25rem;font-weight:700;color:' + c + ';line-height:1">' + f1(v) + '<span style="font-size:.75rem;font-weight:400;color:#94a3b8">/5</span></div>'
      : '<div style="font-size:1.25rem;font-weight:700;color:#94a3b8;line-height:1">&#x2014;</div>';
  };
  const wHtml = (sonno !== null || dolori !== null || energia !== null)
    ? '<p style="margin:0 0 10px;font-size:.65rem;font-weight:700;color:#94a3b8;letter-spacing:.09em;text-transform:uppercase">Wellness medio</p>' +
      '<div style="border:1px solid #e8edf5;border-radius:8px;display:flex;margin-bottom:18px;overflow:hidden">' +
      '<div style="flex:1;padding:12px 8px;text-align:center;border-right:1px solid #e8edf5">'  + wVal(sonno,   wColor(sonno))   + '<div style="font-size:.65rem;color:#94a3b8;margin-top:4px;text-transform:uppercase;letter-spacing:.05em">Sonno</div></div>' +
      '<div style="flex:1;padding:12px 8px;text-align:center;border-right:1px solid #e8edf5">'  + wVal(dolori,  dolColor(dolori)) + '<div style="font-size:.65rem;color:#94a3b8;margin-top:4px;text-transform:uppercase;letter-spacing:.05em">Dolori &#x2193;</div></div>' +
      '<div style="flex:1;padding:12px 8px;text-align:center">'                                  + wVal(energia, wColor(energia))  + '<div style="font-size:.65rem;color:#94a3b8;margin-top:4px;text-transform:uppercase;letter-spacing:.05em">Energia</div></div>' +
      '</div>'
    : '';

  // Carichi
  const lastIdx = topCarichi.length - 1;
  const carichiRighe = topCarichi.length
    ? topCarichi.map(function(entry, i) {
        var es = entry[0], d = entry[1];
        return '<tr' + (i < lastIdx ? ' style="border-bottom:1px solid #f1f5f9"' : '') + '>' +
          '<td style="padding:7px 4px 7px 0;font-size:.82rem;color:#334155">' + esc_(es) + '</td>' +
          '<td style="padding:7px 0;text-align:right;font-weight:700;color:#1a3a6b;font-size:.82rem;font-variant-numeric:tabular-nums">' +
          (d.stima ? '~' : '') + d.kg + ' kg</td></tr>';
      }).join('')
    : '<tr><td colspan="2" style="padding:8px 4px;color:#94a3b8;font-size:.82rem;font-style:italic">Nessun esercizio registrato questa settimana</td></tr>';

  const caricoFooter = topCarichi.length
    ? '<p style="font-size:.68rem;color:#94a3b8;font-style:italic;padding-top:6px;border-top:1px solid #f1f5f9">' +
      (hasManual
        ? 'Carichi aggiunti manualmente &middot; massimali corretti in app'
        : '~ valore stimato in seduta &middot; nessun massimale aggiornato manualmente questa settimana') +
      '</p>'
    : '';

  const nHtml = noteAtleta.length
    ? '<div style="background:#eff6ff;border-left:3px solid #1a3a6b;padding:10px 14px;margin-top:16px;border-radius:0 6px 6px 0">' +
      '<p style="margin:0 0 4px;font-size:.7rem;font-weight:700;color:#1a3a6b;letter-spacing:.04em">NOTA COACH</p>' +
      noteAtleta.map(function(n) { return '<p style="margin:4px 0 0;font-size:.84rem;color:#334155">' + esc_(n) + '</p>'; }).join('') +
      '</div>'
    : '';

  return '<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">' +
    '<div style="background:#1a3a6b;color:#fff;padding:18px 20px">' +
    '<p style="margin:0 0 1px;font-size:.68rem;opacity:.55;letter-spacing:.1em;text-transform:uppercase">Marsala Volley &middot; Riepilogo settimanale</p>' +
    '<h2 style="margin:0;font-size:1.1rem;font-weight:700">Ciao ' + esc_(nome) + '!</h2>' +
    '<p style="margin:4px 0 0;font-size:.78rem;opacity:.7">Settimana ' + settLabel + '</p></div>' +
    '<div style="padding:18px 20px;border:1px solid #e8edf5;border-top:none">' +
    '<p style="margin:0 0 10px;font-size:.65rem;font-weight:700;color:#94a3b8;letter-spacing:.09em;text-transform:uppercase">Sedute settimana</p>' +
    seduteHtml +
    wHtml +
    '<p style="margin:0 0 10px;font-size:.65rem;font-weight:700;color:#94a3b8;letter-spacing:.09em;text-transform:uppercase">Carichi settimana</p>' +
    '<table style="width:100%;border-collapse:collapse;margin-bottom:6px"><tbody>' + carichiRighe + '</tbody></table>' +
    caricoFooter + nHtml +
    '<div style="text-align:center;margin-top:22px">' +
    '<a href="' + BASE + 'scheda.html?id=' + idG + '" style="display:inline-block;background:#1a3a6b;color:#fff;padding:11px 28px;border-radius:6px;font-size:.85rem;font-weight:600;text-decoration:none;letter-spacing:.01em">Apri la mia scheda &#x2192;</a></div>' +
    '<p style="margin-top:18px;padding-top:14px;border-top:1px solid #f1f5f9;text-align:center;font-size:.68rem;color:#cbd5e1">Marsala Volley 2026/27 &middot; Generato automaticamente ogni luned&#xEC;</p>' +
    '</div></div>';
}

function buildRiepilogoEN_(nome, settLabel, sedute, topCarichi, hasManual, sonno, dolori, energia, noteAtleta, idG, isDev) {
  const BASE = isDev
    ? 'https://pamangiapane-lgtm.github.io/schede-allenamento/dev/'
    : 'https://pamangiapane-lgtm.github.io/schede-allenamento/';
  const f1 = v => (v !== null && v !== undefined) ? Number(v).toFixed(1) : null;

  const rpeColor = v => !v ? '#cbd5e1' : v >= 8 ? '#dc2626' : v >= 7 ? '#ea580c' : v >= 6 ? '#d97706' : '#16a34a';
  const fatColor = v => !v ? '#cbd5e1' : v >= 4 ? '#dc2626' : v >= 3 ? '#d97706' : '#16a34a';
  const wColor   = v => v === null ? '#94a3b8' : v >= 4 ? '#1a3a6b' : v >= 3 ? '#d97706' : '#dc2626';
  const dolColor = v => v === null ? '#94a3b8' : v <= 1.5 ? '#16a34a' : v <= 2.5 ? '#d97706' : '#dc2626';

  const seduteHtml = sedute.length
    ? '<div style="border:1px solid #e8edf5;border-radius:8px;overflow:hidden;margin-bottom:18px">' +
      sedute.map(function(s, i) {
        var rc = rpeColor(s.rpe), fc = fatColor(s.fatica);
        var rv = s.rpe    !== null ? s.rpe    + '<span style="font-size:.65rem;font-weight:400;color:#94a3b8">/10</span>' : '&#x2014;';
        var fv = s.fatica !== null ? s.fatica + '<span style="font-size:.65rem;font-weight:400;color:#94a3b8">/5</span>'  : '&#x2014;';
        var bg  = i % 2 === 1 ? 'background:#fafbfd;' : '';
        var bdr = i < sedute.length - 1 ? 'border-bottom:1px solid #f1f5f9;' : '';
        return '<div style="display:flex;align-items:center;padding:10px 14px;gap:10px;' + bg + bdr + '">' +
          '<span style="background:#e8f0fb;color:#1a3a6b;font-size:.68rem;font-weight:700;padding:3px 9px;border-radius:4px;letter-spacing:.05em;white-space:nowrap">' + esc_(s.nome) + '</span>' +
          '<span style="flex:1;height:1px;background:#eef1f7;display:block"></span>' +
          '<span style="font-size:.68rem;color:#94a3b8;margin-right:3px">RPE</span>' +
          '<span style="font-size:.88rem;font-weight:700;color:' + rc + ';min-width:34px;text-align:right">' + rv + '</span>' +
          '<span style="width:1px;height:14px;background:#e2e8f0;display:inline-block;margin:0 6px"></span>' +
          '<span style="font-size:.68rem;color:#94a3b8;margin-right:3px">Fatigue</span>' +
          '<span style="font-size:.88rem;font-weight:700;color:' + fc + ';min-width:24px;text-align:right">' + fv + '</span>' +
          '</div>';
      }).join('') + '</div>'
    : '<div style="background:#fef2f2;border-radius:8px;padding:12px 16px;margin-bottom:18px">' +
      '<p style="margin:0;font-size:.82rem;color:#dc2626">No sessions logged this week</p></div>';

  const wVal = function(v, c) {
    return v !== null
      ? '<div style="font-size:1.25rem;font-weight:700;color:' + c + ';line-height:1">' + f1(v) + '<span style="font-size:.75rem;font-weight:400;color:#94a3b8">/5</span></div>'
      : '<div style="font-size:1.25rem;font-weight:700;color:#94a3b8;line-height:1">&#x2014;</div>';
  };
  const wHtml = (sonno !== null || dolori !== null || energia !== null)
    ? '<p style="margin:0 0 10px;font-size:.65rem;font-weight:700;color:#94a3b8;letter-spacing:.09em;text-transform:uppercase">Avg wellness</p>' +
      '<div style="border:1px solid #e8edf5;border-radius:8px;display:flex;margin-bottom:18px;overflow:hidden">' +
      '<div style="flex:1;padding:12px 8px;text-align:center;border-right:1px solid #e8edf5">'  + wVal(sonno,   wColor(sonno))   + '<div style="font-size:.65rem;color:#94a3b8;margin-top:4px;text-transform:uppercase;letter-spacing:.05em">Sleep</div></div>' +
      '<div style="flex:1;padding:12px 8px;text-align:center;border-right:1px solid #e8edf5">'  + wVal(dolori,  dolColor(dolori)) + '<div style="font-size:.65rem;color:#94a3b8;margin-top:4px;text-transform:uppercase;letter-spacing:.05em">Pain &#x2193;</div></div>' +
      '<div style="flex:1;padding:12px 8px;text-align:center">'                                  + wVal(energia, wColor(energia))  + '<div style="font-size:.65rem;color:#94a3b8;margin-top:4px;text-transform:uppercase;letter-spacing:.05em">Energy</div></div>' +
      '</div>'
    : '';

  const lastIdx = topCarichi.length - 1;
  const loadsRows = topCarichi.length
    ? topCarichi.map(function(entry, i) {
        var es = entry[0], d = entry[1];
        return '<tr' + (i < lastIdx ? ' style="border-bottom:1px solid #f1f5f9"' : '') + '>' +
          '<td style="padding:7px 4px 7px 0;font-size:.82rem;color:#334155">' + esc_(es) + '</td>' +
          '<td style="padding:7px 0;text-align:right;font-weight:700;color:#1a3a6b;font-size:.82rem;font-variant-numeric:tabular-nums">' +
          (d.stima ? '~' : '') + d.kg + ' kg</td></tr>';
      }).join('')
    : '<tr><td colspan="2" style="padding:8px 4px;color:#94a3b8;font-size:.82rem;font-style:italic">No exercises logged this week</td></tr>';

  const loadsFooter = topCarichi.length
    ? '<p style="font-size:.68rem;color:#94a3b8;font-style:italic;padding-top:6px;border-top:1px solid #f1f5f9">' +
      (hasManual
        ? 'Manually added loads &middot; maxes updated in the app'
        : '~ estimated in session &middot; no manual max logged this week') +
      '</p>'
    : '';

  const nHtml = noteAtleta.length
    ? '<div style="background:#eff6ff;border-left:3px solid #1a3a6b;padding:10px 14px;margin-top:16px;border-radius:0 6px 6px 0">' +
      '<p style="margin:0 0 4px;font-size:.7rem;font-weight:700;color:#1a3a6b;letter-spacing:.04em">COACH NOTE</p>' +
      noteAtleta.map(function(n) { return '<p style="margin:4px 0 0;font-size:.84rem;color:#334155">' + esc_(n) + '</p>'; }).join('') +
      '</div>'
    : '';

  return '<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">' +
    '<div style="background:#1a3a6b;color:#fff;padding:18px 20px">' +
    '<p style="margin:0 0 1px;font-size:.68rem;opacity:.55;letter-spacing:.1em;text-transform:uppercase">Marsala Volley &middot; Weekly summary</p>' +
    '<h2 style="margin:0;font-size:1.1rem;font-weight:700">Hi ' + esc_(nome) + '!</h2>' +
    '<p style="margin:4px 0 0;font-size:.78rem;opacity:.7">Week ' + settLabel + '</p></div>' +
    '<div style="padding:18px 20px;border:1px solid #e8edf5;border-top:none">' +
    '<p style="margin:0 0 10px;font-size:.65rem;font-weight:700;color:#94a3b8;letter-spacing:.09em;text-transform:uppercase">Sessions this week</p>' +
    seduteHtml +
    wHtml +
    '<p style="margin:0 0 10px;font-size:.65rem;font-weight:700;color:#94a3b8;letter-spacing:.09em;text-transform:uppercase">Weekly loads</p>' +
    '<table style="width:100%;border-collapse:collapse;margin-bottom:6px"><tbody>' + loadsRows + '</tbody></table>' +
    loadsFooter + nHtml +
    '<div style="text-align:center;margin-top:22px">' +
    '<a href="' + BASE + 'scheda.html?id=' + idG + '" style="display:inline-block;background:#1a3a6b;color:#fff;padding:11px 28px;border-radius:6px;font-size:.85rem;font-weight:600;text-decoration:none;letter-spacing:.01em">Open my program &#x2192;</a></div>' +
    '<p style="margin-top:18px;padding-top:14px;border-top:1px solid #f1f5f9;text-align:center;font-size:.68rem;color:#cbd5e1">Marsala Volley 2026/27 &middot; Sent automatically every Monday</p>' +
    '</div></div>';
}

function esc_(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function inviaRiepilogoAtleta_(idTarget) {
  const ss     = SpreadsheetApp.getActiveSpreadsheet();
  const sheetG = ss.getSheetByName('Giocatrici');
  const sheetP = ss.getSheetByName('Progressi');
  const sheetW = ss.getSheetByName('Wellness');
  const sheetN = ss.getSheetByName('Note_Coach');
  if (!sheetG || !sheetP) return errore('Fogli mancanti');

  const giocatrici = leggiRighe_(sheetG).filter(g => String(g.ID) === String(idTarget));
  if (!giocatrici.length) return errore('Atleta non trovata: ID ' + idTarget);

  const progressi = leggiRighe_(sheetP);
  const wellness  = sheetW ? leggiRighe_(sheetW) : [];
  const noteCoach = sheetN ? leggiRighe_(sheetN) : [];

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
  const fmt  = d => d.getDate() + '/' + (d.getMonth() + 1);
  const dow  = ora.getDay();
  const lune = new Date(ora);
  lune.setDate(ora.getDate() - ((dow === 0 ? 7 : dow) - 1));
  lune.setHours(0, 0, 0, 0);
  const luneScorso = new Date(lune); luneScorso.setDate(lune.getDate() - 7);
  const domScorso  = new Date(lune); domScorso.setMilliseconds(-1);
  const settLabel  = fmt(luneScorso) + '–' + fmt(domScorso) + ' ' + domScorso.getFullYear();
  const inRange    = ts => { const d = new Date(ts); return d >= cut7 && d <= ora; };
  const IS_DEV_SCRIPT = TOKEN === 'mv26-dev-9kR4tLqB';
  if (IS_DEV_SCRIPT) { Logger.log('[DEV] inviaRiepilogoAtleta_ — invio email disabilitato in DEV'); return risposta({ ok: false, errore: 'Invio disabilitato in DEV' }); }

  const g = giocatrici[0];
  const email = EMAIL_ATLETE[String(g.ID)];
  if (!email) return errore('Email mancante per ID ' + g.ID + ' (' + g.Nome + ')');

  const lingua = String(g.Lingua || '').trim().toUpperCase() === 'EN' ? 'EN' : 'IT';
  const pAll   = progressi.filter(p => String(p.ID_Giocatrice) === String(g.ID) && p.Valore);
  const pSett  = pAll.filter(p => p.Timestamp && inRange(p.Timestamp));

  const seduteMap = {};
  pSett.filter(p => p.N_Seduta && p.N_Seduta !== '?').forEach(p => {
    if (!seduteMap[p.N_Seduta]) seduteMap[p.N_Seduta] = { nome: p.N_Seduta, rpe: null, fatica: null, ts: null };
    const ts = new Date(p.Timestamp);
    if (!seduteMap[p.N_Seduta].ts || ts < seduteMap[p.N_Seduta].ts) seduteMap[p.N_Seduta].ts = ts;
    if (p.Esercizio === 'RPE-seduta')    { const v = Number(p.Valore); if (!isNaN(v) && v > 0) seduteMap[p.N_Seduta].rpe    = v; }
    if (p.Esercizio === 'Fatica-seduta') { const v = Number(p.Valore); if (!isNaN(v) && v > 0) seduteMap[p.N_Seduta].fatica = v; }
  });
  const sedute = Object.values(seduteMap).sort((a, b) => (a.ts || 0) - (b.ts || 0));

  const maxPerEs = {};
  pSett.filter(p => !SKIP_SET.has(p.Esercizio)).forEach(p => {
    const m = String(p.Valore).match(/[\d.]+/);
    if (!m) return;
    const kg = parseFloat(m[0]);
    const stima = String(p.Valore).includes('~');
    if (!maxPerEs[p.Esercizio] || kg > maxPerEs[p.Esercizio].kg)
      maxPerEs[p.Esercizio] = { kg, stima };
  });
  const topCarichi = Object.entries(maxPerEs).sort((a, b) => b[1].kg - a[1].kg).slice(0, 5);
  const hasManual  = pSett.some(p => p.N_Seduta === '?' && !SKIP_SET.has(p.Esercizio));

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
    ? buildRiepilogoEN_(nome, settLabel, sedute, topCarichi, hasManual, sonno, dolori, energia, noteAtleta, g.ID, IS_DEV_SCRIPT)
    : buildRiepilogoIT_(nome, settLabel, sedute, topCarichi, hasManual, sonno, dolori, energia, noteAtleta, g.ID, IS_DEV_SCRIPT);

  const subjectBase = lingua === 'EN'
    ? 'Marsala Volley — Weekly summary ' + settLabel
    : 'Marsala Volley — Riepilogo settimana ' + settLabel;

  const dest    = IS_DEV_SCRIPT ? EMAIL_COACH : email;
  const subject = IS_DEV_SCRIPT ? '[TEST ' + g.Nome + '] ' + subjectBase : subjectBase;

  MailApp.sendEmail({ to: dest, subject: subject, htmlBody: html });
  Logger.log('inviaRiepilogoAtleta_: inviato a ' + dest + ' (' + g.Nome + ')');
  return risposta({ ok: true, dest: dest, nome: g.Nome });
}

// Esegui UNA VOLTA per installare il trigger lunedì 8:00
// NOTA: non usare più — il trigger è stato disabilitato per design. Le mail alle atlete
// partono solo su approvazione esplicita del coach.
function installaRiepilogoAtleteTrigger() {
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'inviaRiepilogoSettimanale')
    .forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('inviaRiepilogoSettimanale')
    .timeBased().onWeekDay(ScriptApp.WeekDay.MONDAY).atHour(8).create();
}

// Esegui UNA VOLTA su PROD per rimuovere il trigger lunedì 8:00 esistente
function rimuoviTriggerAtlete() {
  const triggers = ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'inviaRiepilogoSettimanale');
  triggers.forEach(t => ScriptApp.deleteTrigger(t));
  Logger.log('Rimossi ' + triggers.length + ' trigger per inviaRiepilogoSettimanale.');
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

// ── MONITOR PROD ─────────────────────────────────────────────────────────────

function monitoraProd() {
  if (TOKEN === 'mv26-dev-9kR4tLqB') return; // disabilitato in DEV
  try {
    const url  = PROD_API_URL + '?token=mv26-prd-3xF7wNqK&azione=leggi&foglio=Giocatrici';
    const resp = UrlFetchApp.fetch(url, { muteHttpExceptions: true, followRedirects: true });
    const code = resp.getResponseCode();
    let ok = false;
    if (code === 200) {
      try { ok = JSON.parse(resp.getContentText()).ok === true; } catch(e) {}
    }
    if (!ok) {
      const ora = Utilities.formatDate(new Date(), 'Europe/Rome', 'dd/MM/yyyy HH:mm');
      MailApp.sendEmail({
        to: EMAIL_COACH,
        subject: '🚨 Marsala Volley — APP OFFLINE · ' + ora,
        htmlBody: '<div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto">' +
          '<div style="background:#dc2626;color:#fff;padding:16px 20px;border-radius:8px 8px 0 0">' +
          '<p style="margin:0 0 2px;font-size:.65rem;opacity:.7;letter-spacing:.1em;text-transform:uppercase">Marsala Volley · Monitor automatico</p>' +
          '<h2 style="margin:0;font-size:1.1rem;font-weight:700">⚠ App non raggiungibile</h2></div>' +
          '<div style="border:1px solid #fecaca;border-top:none;padding:16px 20px">' +
          '<p style="margin:0 0 10px;font-size:.85rem;color:#7f1d1d">Rilevato alle <b>' + ora + '</b></p>' +
          '<p style="margin:0 0 10px;font-size:.82rem;color:#334155">HTTP ' + code + ' — la PROD API non risponde correttamente.</p>' +
          '<p style="margin:0;font-size:.82rem;color:#334155">Controlla lo script PROD su Google Apps Script e verifica che non ci siano errori di esecuzione.</p>' +
          '</div>' +
          '<div style="border:1px solid #fecaca;border-top:none;padding:12px 20px;background:#fef2f2;border-radius:0 0 8px 8px">' +
          '<p style="margin:0;font-size:.72rem;color:#991b1b">Monitor ogni 30 min · Marsala Volley 2026/27</p>' +
          '</div></div>'
      });
      Logger.log('MONITOR: app offline — HTTP ' + code + ' — email inviata');
    } else {
      Logger.log('MONITOR: ok — ' + new Date().toISOString());
    }
  } catch (ex) {
    const ora = Utilities.formatDate(new Date(), 'Europe/Rome', 'dd/MM/yyyy HH:mm');
    MailApp.sendEmail({
      to: EMAIL_COACH,
      subject: '🚨 Marsala Volley — APP OFFLINE · ' + ora,
      htmlBody: '<div style="font-family:Arial,sans-serif;max-width:500px">' +
        '<div style="background:#dc2626;color:#fff;padding:16px 20px">' +
        '<h2 style="margin:0;font-size:1.1rem">⚠ App non raggiungibile</h2></div>' +
        '<div style="padding:16px 20px;border:1px solid #fecaca;border-top:none">' +
        '<p style="margin:0 0 8px;font-size:.85rem;color:#7f1d1d">Rilevato alle <b>' + ora + '</b></p>' +
        '<p style="margin:0;font-size:.82rem;color:#334155;font-family:monospace">' + esc_(String(ex)) + '</p>' +
        '</div></div>'
    });
    Logger.log('MONITOR: errore fetch — ' + ex);
  }
}

// Esegui UNA VOLTA su PROD per attivare il monitor
function installaMonitorTrigger() {
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'monitoraProd')
    .forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('monitoraProd')
    .timeBased()
    .everyMinutes(30)
    .create();
  Logger.log('Monitor installato — ogni 30 minuti');
}

// ── BACKUP AUTOMATICO ────────────────────────────────────────────────────────

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

function preparaBozzeRiepilogo() {
  const ss     = SpreadsheetApp.getActiveSpreadsheet();
  const sheetG = ss.getSheetByName('Giocatrici');
  const sheetP = ss.getSheetByName('Progressi');
  const sheetW = ss.getSheetByName('Wellness');
  const sheetN = ss.getSheetByName('Note_Coach');
  if (!sheetG || !sheetP || !sheetN) { Logger.log('Fogli mancanti'); return; }

  const sheetSed      = ss.getSheetByName('Sedute');
  const sheetEse      = ss.getSheetByName('Esercizi');
  const tuttiSedute   = sheetSed ? leggiRighe_(sheetSed)   : [];
  const tuttiEsercizi = sheetEse ? leggiRighe_(sheetEse)   : [];

  const giocatrici = leggiRighe_(sheetG).filter(g => g.ID && !isNaN(parseInt(g.ID)));
  const progressi  = leggiRighe_(sheetP);
  const wellness   = sheetW ? leggiRighe_(sheetW) : [];
  const ora  = new Date();
  const cut7 = new Date(ora); cut7.setDate(ora.getDate() - 7);
  const SKIP_SET = new Set(['RPE-seduta', 'Fatica-seduta', 'Peso-corporeo']);
  const avgN = arr => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null;

  const oggi = new Date(); oggi.setHours(0,0,0,0);
  const fra7 = new Date(oggi); fra7.setDate(oggi.getDate() + 7);
  const fmtDate = d => d.toISOString().split('T')[0];

  // Cancella vecchie bozze automatiche tipo 'riepilogo_sett'
  const vals = sheetN.getDataRange().getValues();
  const heads = vals[0];
  const idxTipo = heads.indexOf('Tipo');
  for (let i = vals.length - 1; i >= 1; i--) {
    if (String(vals[i][idxTipo]) === 'riepilogo_sett') sheetN.deleteRow(i + 1);
  }
  SpreadsheetApp.flush();

  // Genera bozza per ogni atleta
  const bozze = [];
  const atletaBlobs = [];
  giocatrici.forEach(g => {
    const pAll    = progressi.filter(p => String(p.ID_Giocatrice) === String(g.ID) && p.Valore);
    const pEserc  = pAll.filter(p => !SKIP_SET.has(p.Esercizio));
    const pSett   = pEserc.filter(p => p.Timestamp && new Date(p.Timestamp) >= cut7);
    const rpeVals = pAll.filter(p => p.Esercizio === 'RPE-seduta' && p.Timestamp && new Date(p.Timestamp) >= cut7)
                        .map(p => Number(p.Valore)).filter(v => !isNaN(v));
    const seduteN  = new Set(pSett.map(p => p.N_Seduta)).size;
    const rpeMedia = avgN(rpeVals);
    let ultimoTs = null;
    pEserc.forEach(p => { const ts = p.Timestamp ? new Date(p.Timestamp) : null; if (ts && (!ultimoTs || ts > ultimoTs)) ultimoTs = ts; });
    const giorniSilenzio = ultimoTs ? Math.floor((ora - ultimoTs) / 86400000) : null;
    const wSett  = wellness.filter(w => String(w.ID_Giocatrice) === String(g.ID) && w.Timestamp && new Date(w.Timestamp) >= cut7);
    const dolori = avgN(wSett.map(w => Number(w.Dolori)).filter(v => !isNaN(v) && v > 0));

    let nota;
    if (giorniSilenzio === null || giorniSilenzio > 7)
      nota = 'Non vedo sedute registrate di recente — come stai? Fammi sapere se ci sono problemi o se hai bisogno di supporto.';
    else if (dolori !== null && dolori >= 3)
      nota = 'Hai segnalato qualche dolore questa settimana (' + dolori.toFixed(1) + '/5). Dimmi dove senti fastidio così adattiamo il programma.';
    else if (rpeMedia !== null && rpeMedia >= 8)
      nota = 'Settimana molto intensa (RPE ' + rpeMedia.toFixed(1) + '/10). Ottimo impegno — questa settimana recupera bene tra le sedute.';
    else if (seduteN >= 2)
      nota = 'Settimana regolare con ' + seduteN + ' sedute completate. Continua con questa costanza, stai lavorando bene.';
    else if (seduteN === 1)
      nota = 'Hai completato una seduta questa settimana. Prova ad aggiungerne un\'altra se riesci — la continuità fa la differenza.';
    else
      nota = 'Settimana con poca attività registrata. Tutto ok? Fammi sapere se hai bisogno di qualcosa.';

    sheetN.appendRow([new Date().toISOString(), String(g.ID), 'riepilogo_sett', '', nota, fmtDate(oggi), fmtDate(fra7)]);
    const nomeBreve = g.Nome ? g.Nome.split(' ')[0] : String(g.Nome);
    bozze.push({ nome: nomeBreve, nota, seduteN, rpeMedia, dolori, giorniSilenzio });

    const schedaHtml = buildSchedaHTML_(g, tuttiSedute, tuttiEsercizi);
    const nomeFile   = 'Scheda_' + String(g.Nome || g.ID).replace(/\s+/g, '_') + '.html';
    atletaBlobs.push(Utilities.newBlob(schedaHtml, 'text/html', nomeFile));
  });
  SpreadsheetApp.flush();

  const sheetUrl   = 'https://docs.google.com/spreadsheets/d/' + ss.getId() + '/edit#gid=' + sheetN.getSheetId();
  const confirmUrl = PROD_API_URL + '?token=mv26-prd-3xF7wNqK&azione=conferma_riepilogo_settimanale';

  const dow = ora.getDay();
  const lune = new Date(ora); lune.setDate(ora.getDate() - ((dow === 0 ? 7 : dow) - 1)); lune.setHours(0,0,0,0);
  const luneS = new Date(lune); luneS.setDate(lune.getDate() - 7);
  const domS  = new Date(lune); domS.setMilliseconds(-1);
  const fmt   = d => d.getDate() + '/' + (d.getMonth() + 1);
  const settLabel = fmt(luneS) + '–' + fmt(domS) + ' ' + domS.getFullYear();

  const righeHtml = bozze.map(b => {
    const stato = b.giorniSilenzio === null ? '⚫ mai' : b.giorniSilenzio > 7 ? '🔴 ' + b.giorniSilenzio + 'gg' : '🟢 ' + b.seduteN + ' sed.';
    return '<tr style="border-bottom:1px solid #f1f5f9">' +
      '<td style="padding:10px 8px;font-size:.85rem;font-weight:600;color:#1a3a6b;white-space:nowrap">' + esc_(b.nome) + '</td>' +
      '<td style="padding:10px 8px;font-size:.78rem;color:#64748b;white-space:nowrap">' + stato + '</td>' +
      '<td style="padding:10px 8px;font-size:.82rem;color:#334155">' + esc_(b.nota) + '</td>' +
    '</tr>';
  }).join('');

  MailApp.sendEmail({ to: EMAIL_COACH,
    subject: '✏️ Bozze riepilogo atlete — ' + settLabel + ' — modifica e conferma',
    attachments: atletaBlobs,
    htmlBody: `
<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto">
  <div style="background:#1a3a6b;color:#fff;padding:18px 22px 16px">
    <p style="margin:0 0 2px;font-size:.6rem;opacity:.5;letter-spacing:.12em;text-transform:uppercase">Marsala Volley · Bozze riepilogo atlete</p>
    <h2 style="margin:0;font-size:1.1rem;font-weight:700">Settimana ${settLabel}</h2>
    <p style="margin:5px 0 0;font-size:.72rem;opacity:.65">${bozze.length} atlete · note generate automaticamente</p>
  </div>
  <div style="padding:12px 16px;background:#fffbeb;border:1px solid #fef08a;border-top:none">
    <p style="margin:0;font-size:.82rem;color:#78350f">⚠️ Queste sono bozze automatiche. Modificale nel foglio Google se necessario, poi clicca Conferma.</p>
  </div>
  <div style="border:1px solid #e8edf5;border-top:none;overflow-x:auto">
    <table style="width:100%;border-collapse:collapse">
      <thead><tr style="background:#f8fafc">
        <th style="padding:8px;font-size:.65rem;color:#94a3b8;text-align:left;font-weight:700;text-transform:uppercase">Atleta</th>
        <th style="padding:8px;font-size:.65rem;color:#94a3b8;text-align:left;font-weight:700;text-transform:uppercase">Stato</th>
        <th style="padding:8px;font-size:.65rem;color:#94a3b8;text-align:left;font-weight:700;text-transform:uppercase">Nota bozza</th>
      </tr></thead>
      <tbody>${righeHtml}</tbody>
    </table>
  </div>
  <div style="padding:20px;border:1px solid #e8edf5;border-top:none;text-align:center">
    <a href="${sheetUrl}" style="display:inline-block;background:#f1f5f9;color:#1a3a6b;padding:10px 18px;border-radius:6px;font-size:.82rem;font-weight:600;text-decoration:none;border:1px solid #e2e8f0;margin-right:10px">✏️ Modifica note nel foglio</a>
    <a href="${confirmUrl}" style="display:inline-block;background:#16a34a;color:#fff;padding:10px 26px;border-radius:6px;font-size:.85rem;font-weight:600;text-decoration:none">✅ Conferma e invia a tutte</a>
  </div>
  <p style="text-align:center;font-size:.62rem;color:#cbd5e1;padding:6px 0 4px;margin:0">Cliccando Conferma le email partono immediatamente · Marsala Volley 2026/27</p>
</div>`
  });
  Logger.log('preparaBozzeRiepilogo completato per ' + bozze.length + ' atlete');
}

// ── SCHEDA HTML PER ATLETA (allegato email bozze — piano B se app offline) ────

function buildSchedaHTML_(g, tuttiSedute, tuttiEsercizi) {
  const idG    = String(g.ID);
  const nome   = g.Nome ? g.Nome.split(' ')[0] : idG;
  const lingua = String(g.Lingua || '').trim().toUpperCase() === 'EN' ? 'EN' : 'IT';

  const sedute = tuttiSedute
    .filter(s => String(s.ID_Giocatrice) === '0' || String(s.ID_Giocatrice) === idG)
    .sort((a, b) => Number(a.Ordine) - Number(b.Ordine));

  const seduteHtml = sedute.map(function(s) {
    const nSeduta = s.Numero_Seduta || s['Numero_Seduta'] || '';

    const esercizi = tuttiEsercizi
      .filter(function(e) {
        if (String(e.N_Seduta) !== String(nSeduta)) return false;
        if (String(e.ID_Giocatrice) !== '0' && String(e.ID_Giocatrice) !== idG) return false;
        if (e.Escludi_ID) {
          const esclusi = String(e.Escludi_ID).split(',').map(function(x) { return x.trim(); });
          if (esclusi.indexOf(idG) !== -1) return false;
        }
        return true;
      })
      .sort(function(a, b) {
        const om = Number(a.Ord_Metodo) - Number(b.Ord_Metodo);
        return om !== 0 ? om : Number(a.Ord_Eserc) - Number(b.Ord_Eserc);
      });

    if (!esercizi.length) return '';

    // Raggruppa per Metodo mantenendo l'ordine
    const metodiMap = [];
    const metodiSeen = [];
    esercizi.forEach(function(e) {
      const m = String(e.Metodo || 'Altro');
      if (metodiSeen.indexOf(m) === -1) {
        metodiSeen.push(m);
        metodiMap.push({ metodo: m, desc: String(e.Desc_Metodo || ''), esercizi: [] });
      }
      metodiMap[metodiSeen.indexOf(m)].esercizi.push(e);
    });

    const metodiHtml = metodiMap.map(function(m) {
      const eHtml = m.esercizi.map(function(e) {
        const nomeE = (lingua === 'EN' && e.Esercizio_EN) ? String(e.Esercizio_EN) : String(e.Esercizio || '');
        const tipo  = String(e.Tipo_Esercizio || '').toLowerCase();

        let setsLine;
        if (tipo === 'bicarico') {
          const pA = (e.Serie || '') + '×' + (e.Reps || '') + (e.Intensit_ || e['Intensità'] || e.Intensita || '' ? ' @ ' + (e.Intensit_ || e['Intensità'] || e.Intensita) : '') + (e.Recupero ? ' · rec ' + e.Recupero : '');
          const pB = (e.SerieB || '') + '×' + (e.RepsB || '') + (e.Intensit_B || e['IntensitàB'] || e.IntensitaB || '' ? ' @ ' + (e.Intensit_B || e['IntensitàB'] || e.IntensitaB) : '') + (e.RecuperoB ? ' · rec ' + e.RecuperoB : '');
          setsLine = '<div style="font-size:.72rem;color:#64748b;margin-top:2px"><b>A:</b> ' + esc_(pA) + '<br><b>B:</b> ' + esc_(pB) + '</div>';
        } else {
          const inten = e.Intensit_ || e['Intensità'] || e.Intensita || '';
          const sets  = (e.Serie || '') + '×' + (e.Reps || '') + (inten ? ' @ ' + inten : '');
          const rec   = e.Recupero ? ' · rec ' + e.Recupero : '';
          setsLine = '<span style="font-size:.78rem;color:#64748b">' + esc_(sets) + '</span>' +
            (rec ? '<span style="font-size:.72rem;color:#94a3b8">' + esc_(rec) + '</span>' : '');
        }

        const note = e.Note ? '<div style="font-size:.68rem;color:#94a3b8;font-style:italic;margin-top:2px">' + esc_(String(e.Note)) + '</div>' : '';

        return '<div style="padding:9px 16px;border-bottom:1px solid #f8fafc">' +
          '<div style="font-size:.82rem;color:#334155;font-weight:500">' + esc_(nomeE) + '</div>' +
          setsLine + note +
          '</div>';
      }).join('');

      return '<div style="background:#f8fafc;padding:6px 16px 4px;border-bottom:1px solid #e8edf5">' +
        '<span style="font-size:.6rem;font-weight:700;color:#94a3b8;letter-spacing:.1em;text-transform:uppercase">' + esc_(m.metodo) + '</span>' +
        (m.desc ? '<span style="font-size:.65rem;color:#94a3b8"> — ' + esc_(m.desc) + '</span>' : '') +
        '</div>' + eHtml;
    }).join('');

    return '<div style="border:1px solid #e8edf5;border-top:none;background:#fff">' +
      '<div style="padding:11px 16px 10px;border-bottom:1px solid #f1f5f9;display:flex;align-items:center;gap:10px;flex-wrap:wrap">' +
      '<span style="background:#1a3a6b;color:#fff;font-size:.68rem;font-weight:700;padding:3px 10px;border-radius:4px;letter-spacing:.04em">' + esc_(nSeduta) + '</span>' +
      '<span style="font-size:.85rem;font-weight:600;color:#1a3a6b">' + esc_(String(s.Nome_Seduta || '')) + '</span>' +
      '</div>' + metodiHtml + '</div>';
  }).filter(Boolean).join('');

  const subtitle = lingua === 'EN' ? 'Complete program — Marsala Volley 2026/27' : 'Programma completo — Marsala Volley 2026/27';
  const intro    = lingua === 'EN'
    ? 'Hi ' + esc_(nome) + '! This is your complete training program. If the app is not available, use this email.'
    : 'Ciao ' + esc_(nome) + '! Questa è la tua scheda completa. Se l\'app non è disponibile, allénati con questa email.';

  return '<!DOCTYPE html><html lang="it"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<title>Scheda ' + esc_(nome) + ' — Marsala Volley</title>' +
    '<style>*{box-sizing:border-box;margin:0;padding:0}body{background:#f1f5f9;font-family:Arial,sans-serif;padding:20px 10px}.wrap{max-width:540px;margin:0 auto}</style>' +
    '</head><body><div class="wrap">' +
    '<div style="background:#1a3a6b;color:#fff;padding:20px 22px 18px;border-radius:8px 8px 0 0">' +
    '<p style="font-size:.62rem;opacity:.5;letter-spacing:.12em;text-transform:uppercase;margin-bottom:3px">Marsala Volley · ' + (lingua === 'EN' ? 'Training program' : 'Scheda allenamento') + '</p>' +
    '<h2 style="font-size:1.1rem;font-weight:700;margin-bottom:4px">' + (lingua === 'EN' ? 'Hi ' + esc_(nome) + '!' : 'Ciao ' + esc_(nome) + '!') + '</h2>' +
    '<p style="font-size:.75rem;opacity:.65">' + subtitle + '</p>' +
    '</div>' +
    '<div style="background:#eff6ff;border:1px solid #bfdbfe;border-top:none;padding:10px 16px">' +
    '<p style="font-size:.8rem;color:#1e3a5f">' + intro + '</p>' +
    '</div>' +
    (seduteHtml || '<div style="border:1px solid #e8edf5;border-top:none;padding:16px;text-align:center"><p style="font-size:.82rem;color:#94a3b8">Nessuna seduta trovata nel programma.</p></div>') +
    '<div style="border:1px solid #e8edf5;border-top:none;padding:10px 16px;text-align:center;background:#f8fafc;border-radius:0 0 8px 8px">' +
    '<p style="font-size:.62rem;color:#cbd5e1">Marsala Volley 2026/27 · Backup scheda · Non condividere</p>' +
    '</div></div></body></html>';
}

function risposta(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
function errore(msg) { return risposta({ ok: false, errore: msg }); }