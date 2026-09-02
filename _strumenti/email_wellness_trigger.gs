/**
 * ============================================================================
 * MARSALA VOLLEY -- INVIO EMAIL WELLNESS (TEST E TRIGGER GIORNALIERO)
 * ============================================================================
 * 
 * ISTRUZIONI RAPIDE PER RICEVERE LA MAIL ORA:
 * 1. Apri il tuo Google Sheet (https://docs.google.com/spreadsheets/d/1FpjJONxZSqS-ZAdMCwk2gS3mudKEBAp5rE43UGPm6ow/edit)
 * 2. Clicca su: Estensioni -> Apps Script
 * 3. Incolla questo codice
 * 4. Seleziona dal menu a tendina in alto la funzione: "inviaEmailDiProvaAPaolo"
 * 5. Clicca su "Esegui" (Run)
 * 
 * La mail di prova arrivera istantaneamente su pamangiapane@gmail.com!
 */

const EMAIL_COACH_TEST = "pamangiapane@gmail.com";
const BASE_URL_WELLNESS = "https://pamangiapane-lgtm.github.io/schede-allenamento/wellness.html";

// Tabella recapiti atlete
const ATLETE_EMAIL = {
  1:  { nome: "Veronica Allasia",     email: "pamangiapane@gmail.com", numero: "01" }, // ID 1 configurato per test su di te
  2:  { nome: "Maria Marcuzzi",       email: "", numero: "02" },
  3:  { nome: "Victoria Sassolini",   email: "", numero: "03" },
  4:  { nome: "Anja Asonja",          email: "", numero: "04" },
  5:  { nome: "Chiara Lo Dico",       email: "", numero: "05" },
  6:  { nome: "Gaia Biondi",          email: "", numero: "06" },
  7:  { nome: "Elisa Bole",           email: "", numero: "07" },
  8:  { nome: "Federica Nonnati",     email: "", numero: "08" },
  9:  { nome: "Sara Dodi",            email: "", numero: "09" },
  11: { nome: "Luna Cicola",          email: "", numero: "11" },
  12: { nome: "Erin Grippo",          email: "", numero: "12" },
  13: { nome: "Giulia Caserta",       email: "", numero: "13" },
  14: { nome: "Nelly Adamczewska",    email: "", numero: "14" }
};

/**
 * FUNZIONE PER INVIARE SUBITO LA MAIL DI PROVA A TE
 */
function inviaEmailDiProvaAPaolo() {
  const oggi = Utilities.formatDate(new Date(), "Europe/Rome", "d MMMM yyyy");
  const linkTest = BASE_URL_WELLNESS + "?id=1";

  const subject = "Test Morning Wellness -- Marsala Volley (" + oggi + ")";
  
  const htmlBody = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:520px;margin:0 auto;padding:24px;border:1px solid #e2e8f0;border-radius:16px;background:#ffffff;">
      <div style="text-align:center;margin-bottom:20px;">
        <h2 style="color:#0f2b5c;margin:0;font-size:22px;font-weight:800;">Marsala Volley</h2>
        <span style="color:#d97706;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Serie A2 Femminile</span>
      </div>
      
      <p style="font-size:16px;color:#0f172a;margin-bottom:12px;">Buongiorno <strong>Veronica (Test Coach)</strong>! 🌅</p>
      <p style="font-size:14px;color:#475569;line-height:1.5;margin-bottom:24px;">
        Prima di iniziare la giornata o l'allenamento, compila i tuoi <strong>4 parametri di Wellness</strong> su scala 0-10 (Sonno, Fatica, Readiness, Dolori) per aiutare lo Staff a monitorare il tuo stato di forma.
      </p>

      <div style="text-align:center;margin:30px 0;">
        <a href="${linkTest}" style="display:inline-block;background:#0f2b5c;color:#ffffff;text-decoration:none;font-weight:800;font-size:16px;padding:14px 28px;border-radius:12px;box-shadow:0 4px 14px rgba(15,43,92,0.25);">
          ⚡ Compila il Wellness di Oggi (Scala 0-10) ➔
        </a>
      </div>

      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px;font-size:12px;color:#64748b;line-height:1.4;">
        💡 <em>Richiede meno di 30 secondi. I punteggi vanno da 0 a 10 e non e mostrata alcuna percentuale all'atleta.</em>
      </div>
      
      <hr style="border:none;border-top:1px solid #f1f5f9;margin:24px 0 16px 0;" />
      <p style="text-align:center;font-size:11px;color:#94a3b8;margin:0;">
        Marsala Volley Performance Staff -- Preparazione Atletica 2026/27
      </p>
    </div>
  `;

  MailApp.sendEmail({
    to: EMAIL_COACH_TEST,
    subject: subject,
    htmlBody: htmlBody
  });

  Logger.log("Email di test inviata con successo a " + EMAIL_COACH_TEST);
}

/**
 * Funzione giornaliera per tutta la squadra
 */
function inviaEmailWellnessMattina() {
  const oggi = Utilities.formatDate(new Date(), "Europe/Rome", "d MMMM yyyy");
  
  for (let id in ATLETE_EMAIL) {
    const at = ATLETE_EMAIL[id];
    if (!at.email) continue;
    
    const linkPersonalizzato = BASE_URL_WELLNESS + "?id=" + id;
    const nomeBreve = at.nome.split(" ")[0];

    const subject = "Marsala Volley -- Morning Wellness (" + oggi + ")";
    
    const htmlBody = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:520px;margin:0 auto;padding:24px;border:1px solid #e2e8f0;border-radius:16px;background:#ffffff;">
        <div style="text-align:center;margin-bottom:20px;">
          <h2 style="color:#0f2b5c;margin:0;font-size:22px;font-weight:800;">Marsala Volley</h2>
          <span style="color:#d97706;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Serie A2 Femminile</span>
        </div>
        
        <p style="font-size:16px;color:#0f172a;margin-bottom:12px;">Buongiorno <strong>${nomeBreve}</strong>! 🌅</p>
        <p style="font-size:14px;color:#475569;line-height:1.5;margin-bottom:24px;">
          Prima di iniziare la giornata, compila i tuoi <strong>4 parametri di Wellness</strong> (Sonno, Fatica, Readiness, Dolori):
        </p>

        <div style="text-align:center;margin:30px 0;">
          <a href="${linkPersonalizzato}" style="display:inline-block;background:#0f2b5c;color:#ffffff;text-decoration:none;font-weight:800;font-size:16px;padding:14px 28px;border-radius:12px;box-shadow:0 4px 14px rgba(15,43,92,0.25);">
            ⚡ Compila il Wellness (Scala 0-10) ➔
          </a>
        </div>
        
        <hr style="border:none;border-top:1px solid #f1f5f9;margin:24px 0 16px 0;" />
        <p style="text-align:center;font-size:11px;color:#94a3b8;margin:0;">
          Marsala Volley Performance Staff -- Preparazione Atletica 2026/27
        </p>
      </div>
    `;

    try {
      MailApp.sendEmail({
        to: at.email,
        subject: subject,
        htmlBody: htmlBody
      });
      Logger.log("Email inviata a " + at.nome + " (" + at.email + ")");
    } catch(e) {
      Logger.log("Errore invio a " + at.nome + ": " + e.message);
    }
  }
}

/**
 * Trigger automatico giornaliero ore 08:00
 */
function impostaTriggerAutomatico() {
  const triggers = ScriptApp.getProjectTriggers();
  for (let i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === "inviaEmailWellnessMattina") {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  ScriptApp.newTrigger("inviaEmailWellnessMattina")
    .timeBased()
    .everyDays(1)
    .atHour(8)
    .inTimezone("Europe/Rome")
    .create();

  Logger.log("Trigger automatico creato con successo per le 08:00 AM");
}
