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

    if (azione === 'aggiungi_esercizio_prehab') {
      aggiungiEsercizioLibreria(body.esercizio);
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

// ──────────────────────────────────────────────────────────────
// LIBRERIA PREHAB GUYS
// Esegui setupLibreriaPrehab() UNA VOLTA dall'editor Script
// per creare il tab e popolare i 14 esercizi base.
// Quando lo scraper estrae nuovi esercizi, chiama
//   aggiungiEsercizioLibreria(obj) per ogni nuovo record.
// ──────────────────────────────────────────────────────────────

const INTESTAZIONI_PREHAB = [
  'ID', 'Nome', 'Distretto', 'Livello', 'Attrezzatura',
  'Obiettivo', 'Parametri_Base', 'Descrizione',
  'Compensi_Evitare', 'Immagine', 'VideoURL', 'Fonte'
];

const ESERCIZI_PREHAB = [
  ['smr_plantare','SMR Pianta Piede','piede','base','pallina',
   'Allentare la tensione della fascia plantare per migliorare la mobilità e l\'appoggio.',
   '1x2 min per zona [RPE: N/A, Tempo: Lento]',
   'Con pallina da tennis o da golf, premere sui punti di massima tensione sotto la pianta del piede, facendola scivolare lentamente.',
   'Non spingere fino ad avvertire dolore acuto o contratture di difesa.','smr_release.jpg','','Manuale'],
  ['smr_polpaccio','SMR Polpaccio','caviglia','base','foam roller',
   'Rilasciare il tricipite surale per favorire lo sblocco della dorsiflessione.',
   '1x2 min per zona [RPE: N/A, Tempo: Lento]',
   'Usare il foam roller o la pallina sotto il polpaccio, effettuando piccoli movimenti rotatori o longitudinali nei punti di maggior tensione.',
   'Evitare di contrarre la gamba durante il rilascio.','smr_release.jpg','','Manuale'],
  ['smr_pettorale','SMR Pettorale','spalla','base','pallina',
   'Rilasciare gli intrarotatori della spalla per ridurre l\'anteposizione scapolare.',
   '1x2 min per zona [RPE: N/A, Tempo: Lento]',
   'Premere una pallina contro la parete posizionandola sulla zona del gran pettorale, muovendosi lentamente sui punti rigidi.',
   'Non irrigidire il collo.','smr_release.jpg','','Manuale'],
  ['short_foot','Short Foot / Foot Doming','piede','base','corpo libero',
   'Attivare la muscolatura intrinseca del piede e sollevare l\'arco plantare.',
   'W1: 3x12, W2: 3x15 [RPE: 7, Tempo: 3-2-1-0]',
   'Avvicinare la testa del primo metatarso al tallone senza flettere le dita ad artiglio, sollevando la volta plantare.',
   'Arricciare le dita o staccare il tallone da terra.','side-lying-hip-abduction.png','','Prehab Guys'],
  ['clamshell','Clamshell con elastico','anca','base','elastico',
   'Rinforzare il gluteo medio per controllare il valgismo dinamico.',
   'W1: 3x10, W2: 3x12 [RPE: 7, Tempo: 3-1-1-0]',
   'Decubito laterale, ginocchia a 90°. Aprire il ginocchio superiore mantenendo i talloni uniti senza ruotare il bacino all\'indietro.',
   'Rotazione compensatoria del bacino o del tronco.','side-lying-hip-abduction.png','','Prehab Guys'],
  ['couch_stretch','Couch Stretch','anca','base','muro',
   'Allungare il retto femorale e sbloccare la catena anteriore.',
   'W1: 3x30", W2: 3x40" [RPE: 7, Tempo: Iso]',
   'In ginocchio con tibia posteriore poggiata al muro, portare l\'altra gamba in affondo anteriore. Spingere il bacino in retroversione ed erigere il busto.',
   'Iperestensione lombare o mancata retroversione del bacino.','couch_stretch.jpg','','Manuale'],
  ['cat_cow','Cat-Cow Selettivo (Lombare)','rachide_lombare','base','corpo libero',
   'Mobilizzare il tratto lombo-sacrale riducendo la rigidità segmentale.',
   'W1: 3x8, W2: 3x10 [RPE: 7, Tempo: 3-1-1-0]',
   'In quadrupedia, eseguire l\'antiversione e retroversione del bacino muovendo solo il tratto lombare, tenendo fermo il tratto dorsale.',
   'Coinvolgere la zona scapolo-omerale e cervicale nel movimento.','cat-cow-full-spine.png','','Prehab Guys'],
  ['inversione_elastico','Inversione Caviglia con elastico','caviglia','intermedio','elastico',
   'Rinforzare il tibiale posteriore per contrastare l\'eversione del retropiede.',
   'W3: 3x12, W4: 3x15, W5: 4x12 [RPE: 8, Tempo: 3-1-1-0]',
   'Seduti, gamba tesa. Avvolgere un elastico sull\'avampiede e tirare la caviglia verso l\'interno, resistendo nel ritorno.',
   'Ruotare l\'anca o il ginocchio all\'esterno per simulare l\'inversione.','row-band.png','','Prehab Guys'],
  ['scapular_wall_slides','Scapular Wall Slides','spalla','intermedio','muro',
   'Rieducare lo scivolamento scapolare overhead ed attivare il trapezio inferiore.',
   'W3: 3x8, W4: 3x10, W5: 4x8 [RPE: 8, Tempo: 3-1-1-0]',
   'Appoggiati al muro con testa, scapole e glutei. Far scivolare i gomiti e le mani verso l\'alto senza inarcare la schiena.',
   'Sollevare le spalle (iperattività trapezio superiore) o staccare la lombare dal muro.','wall_slides_demo.jpg','','Manuale'],
  ['step_down','Step Down facilitato','ginocchio','intermedio','step',
   'Controllo eccentrico del ginocchio ed attivazione del gluteo medio.',
   'W3: 3x8, W4: 3x10, W5: 4x8 [RPE: 8, Tempo: 3-1-1-0]',
   'Su un gradino da 10-15 cm, scendere lentamente sfiorando il tallone a terra. Il ginocchio di supporto deve rimanere in asse col piede.',
   'Crollo valgo del ginocchio, rotazione del bacino o spinta del piede a terra.','heel-raise.png','','Prehab Guys'],
  ['one_leg_stance','One Leg Stance su piano stabile','piede','intermedio','corpo libero',
   'Sviluppare la stabilità monopodalica statica ed il controllo del retropiede.',
   'W3: 3x30", W4: 3x45", W5: 3x60" [RPE: 8, Tempo: Iso]',
   'Mantenere l\'appoggio su un solo piede con ginocchio sbloccato. Focus su allineamento e piede attivo (inversione calcaneale).',
   'Crollo in eversione dell\'arco o contrazioni ad artiglio delle dita.','single_limb_stance.jpg','','Manuale'],
  ['squat_rnt','Squat RNT (Reactive Neuromuscular Training)','anca','intermedio','elastico',
   'Correggere lo shift laterale o il valgismo dinamico nello squat tramite feedback reattivo.',
   'W3: 3x8, W4: 3x10, W5: 4x8 [RPE: 8, Tempo: 3-1-1-0]',
   'Squat con un elastico teso attorno al ginocchio o al bacino che tira verso l\'interno o verso il lato del compenso. L\'atleta contrasta la trazione.',
   'Perdere l\'allineamento dei piedi o sollevare i talloni.','supine-bridge.png','','Prehab Guys'],
  ['box_squat','Box Squat a 90° con Overhead Reach','ginocchio','avanzato','box e bastone',
   'Estensione dorsale ed accosciata simmetrica limitando il butt wink precoce.',
   'W6: 3x8, W7: 3x10, W8: 4x8 [RPE: 8-9, Tempo: 3-1-1-0]',
   'Scendere sfiorando un box a 90° mantenendo le braccia tese in alto con un bastone, controllando il bacino.',
   'Scaricare il peso sul box o flettere la lombare a fine corsa.','box_squat_demo.jpg','','Prehab Guys'],
  ['landing_control','Landing Control Monopodalico','ginocchio','avanzato','box',
   'Rieducare l\'atterraggio sicuro assorbendo le forze senza valgismo dinamico.',
   'W6: 3x6, W7: 3x8, W8: 4x6 [RPE: 8-9, Tempo: 2-0-1-0 (Decel)]',
   'Saltare da un box da 20 cm atterrando su un solo piede. Eseguire decelerazione ed ammortizzare bloccando la posizione.',
   'Crollo in valgo del ginocchio o perdita dell\'equilibrio all\'arresto.','heel-raise.png','','Prehab Guys']
];

function setupLibreriaPrehab() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let foglio = ss.getSheetByName('LibreriaPrehab');

  // Crea tab se non esiste
  if (!foglio) {
    foglio = ss.insertSheet('LibreriaPrehab');
  } else {
    foglio.clearContents();
  }

  // Intestazioni
  foglio.appendRow(INTESTAZIONI_PREHAB);
  const hRange = foglio.getRange(1, 1, 1, INTESTAZIONI_PREHAB.length);
  hRange.setFontWeight('bold');
  hRange.setBackground('#1a1a2e');
  hRange.setFontColor('#00e5ff');
  foglio.setFrozenRows(1);

  // Dati esercizi
  ESERCIZI_PREHAB.forEach(r => foglio.appendRow(r));

  // Larghezze colonne
  foglio.setColumnWidth(1, 140);   // ID
  foglio.setColumnWidth(2, 220);   // Nome
  foglio.setColumnWidth(6, 300);   // Obiettivo
  foglio.setColumnWidth(7, 220);   // Parametri_Base
  foglio.setColumnWidth(8, 350);   // Descrizione
  foglio.setColumnWidth(9, 300);   // Compensi_Evitare

  // Dropdown Livello (col 4)
  const ruleL = SpreadsheetApp.newDataValidation()
    .requireValueInList(['base', 'intermedio', 'avanzato'], true)
    .setAllowInvalid(false).build();
  foglio.getRange(2, 4, 50, 1).setDataValidation(ruleL);

  // Dropdown Fonte (col 12)
  const ruleF = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Prehab Guys', 'Manuale', 'Scraper'], true)
    .setAllowInvalid(false).build();
  foglio.getRange(2, 12, 50, 1).setDataValidation(ruleF);

  Logger.log('LibreriaPrehab creato con ' + ESERCIZI_PREHAB.length + ' esercizi.');
}

// Aggiunge un singolo esercizio proveniente dallo scraper
// Uso: aggiungiEsercizioLibreria({id, nome, distretto, livello, attrezzatura,
//        obiettivo, parametri_base, descrizione, compensi_evitare, immagine, videourl})
function aggiungiEsercizioLibreria(obj) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const foglio = ss.getSheetByName('LibreriaPrehab');
  if (!foglio) { setupLibreriaPrehab(); return; }

  // Evita duplicati per ID
  const ids = foglio.getRange(2, 1, foglio.getLastRow(), 1).getValues().flat();
  if (ids.includes(obj.id)) return;

  foglio.appendRow([
    obj.id || '', obj.nome || '', obj.distretto || 'da_definire',
    obj.livello || 'intermedio', obj.attrezzatura || 'da_definire',
    obj.obiettivo || '', obj.parametri_base || '',
    obj.descrizione || '', obj.compensi_evitare || '',
    obj.immagine || '', obj.videourl || '', 'Scraper'
  ]);
}

// ──────────────────────────────────────────────────────────────
// Esegui una volta dall'editor per aggiungere colonne + dropdown
function setupValidazione() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  function aggiungiColonnaSeAssente(foglio, nomeCol) {
    const headers = foglio.getRange(1, 1, 1, foglio.getLastColumn()).getValues()[0];
    if (headers.includes(nomeCol)) return headers.indexOf(nomeCol) + 1;
    const col = foglio.getLastColumn() + 1;
    foglio.getRange(1, col).setValue(nomeCol);
    return col;
  }

  function setDropdown(foglio, col, valori) {
    const lastRow = Math.max(foglio.getLastRow(), 2);
    const range = foglio.getRange(2, col, lastRow - 1, 1);
    const rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(valori, true)
      .setAllowInvalid(false)
      .build();
    range.setDataValidation(rule);
  }

  ['Esercizi', 'LibreriaIndividuale'].forEach(nome => {
    const f = ss.getSheetByName(nome);
    if (!f) return;
    const colLog    = aggiungiColonnaSeAssente(f, 'Log_Libero');
    const colCatena = aggiungiColonnaSeAssente(f, 'Catena');
    setDropdown(f, colLog,    ['SI', 'NO']);
    setDropdown(f, colCatena, ['upper', 'lower']);
  });

  Logger.log('setupValidazione completato');
}
