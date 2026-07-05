// ═══════════════════════════════════════════════════════════════
// BACKUP AUTOMATICO — incolla queste funzioni nel tuo Apps Script
// esistente (Extensions → Apps Script nel foglio di produzione)
// ═══════════════════════════════════════════════════════════════

const BACKUP_FOLDER_ID = '1jRbhDZoSOV8o6BGusaVYJhw4Em_I428S';

function backupGiornaliero() {
  const ss     = SpreadsheetApp.getActiveSpreadsheet();
  const folder = DriveApp.getFolderById(BACKUP_FOLDER_ID);
  const date   = Utilities.formatDate(new Date(), 'Europe/Rome', 'yyyy-MM-dd');
  const fname  = 'backup-' + date + '.json';

  // Evita duplicati: skip se backup di oggi esiste già
  if (folder.getFilesByName(fname).hasNext()) {
    Logger.log('Backup già presente: ' + fname);
    return;
  }

  const data = {};
  ss.getSheets().forEach(function(sheet) {
    data[sheet.getName()] = sheet.getDataRange().getValues();
  });

  const blob = Utilities.newBlob(
    JSON.stringify(data, null, 2),
    'application/json',
    fname
  );
  folder.createFile(blob);
  Logger.log('Backup creato: ' + fname);
}

// Esegui QUESTA funzione UNA SOLA VOLTA per attivare il backup automatico.
// Apps Script Editor → seleziona "impostaBackupGiornaliero" → ▶ Esegui
function impostaBackupGiornaliero() {
  ScriptApp.getProjectTriggers().forEach(function(t) {
    if (t.getHandlerFunction() === 'backupGiornaliero') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('backupGiornaliero')
    .timeBased()
    .everyDays(1)
    .atHour(3)
    .create();
  Logger.log('Trigger impostato: ogni giorno alle 03:00 (ora italiana)');
}
