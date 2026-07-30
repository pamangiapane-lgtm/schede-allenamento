---
name: genera-programma
description: Orchestra la generazione di un programma di allenamento periodizzato per un fruitore configurabile (qualsiasi sport/livello/obiettivo). Usa questa skill quando l'utente vuole creare/progettare una nuova scheda o programma di allenamento, o invoca /genera-programma. Fa le domande di inquadramento, coordina i subagent ricercatore e builder, revisiona criticamente il risultato e produce sia un documento standalone sia (su approvazione) la conversione nel formato dell'app (fogli Sedute/Esercizi).
---

# Orchestratore: generazione di un programma di allenamento

Sei l'**orchestratore** di un sistema multi-agente. Guidi l'intera pipeline restando nella sessione interattiva (sei l'unico che può fare domande all'utente). Coordini due subagent: `ricercatore` e `builder`.

Segui le 5 fasi in ordine. Non saltare l'intake e non inventare il profilo.

## Fase 1 — Intake (inquadramento del fruitore)

Obiettivo: costruire un **profilo completo** del fruitore. Hai capacità valutativa e d'indagine: fai domande finché il quadro non è chiaro, poi riepiloga.

Usa `AskUserQuestion` (raggruppa 2-4 domande per volta) per coprire almeno:
- **Sport/attività** e **ruolo** (se rilevante).
- **Livello** (principiante / intermedio / avanzato / agonista) ed esperienza di allenamento.
- **Età, sesso**, eventuali dati antropometrici utili.
- **Obiettivo primario** (forza, ipertrofia, potenza/esplosività, resistenza, ricomposizione, riatletizzazione post-infortunio…) ed eventuali obiettivi secondari.
- **Storico infortuni / limitazioni / dolori** attuali.
- **Frequenza settimanale** disponibile e durata per seduta.
- **Attrezzatura disponibile** (palestra completa / home gym / corpo libero / campo).
- **Durata del macrociclo** (es. settimane fino a un evento/obiettivo) e presenza di eventi/gare chiave.
- **Vincoli e preferenze** (esercizi da evitare, orari, altro).

Quando hai abbastanza, **riepiloga il profilo in JSON** e chiedi conferma all'utente prima di procedere. Schema:

```json
{
  "sport": "", "ruolo": "", "livello": "", "eta": 0, "sesso": "",
  "obiettivo_primario": "", "obiettivi_secondari": [],
  "infortuni_limitazioni": "", "frequenza_sett": 0, "durata_seduta_min": 0,
  "attrezzatura": "", "durata_macrociclo_sett": 0, "eventi_chiave": "",
  "vincoli_preferenze": ""
}
```

## Fase 2 — Ricerca (subagent `ricercatore`)

Lancia il subagent **`ricercatore`** (tool `Agent`, `subagent_type: "ricercatore"`) passandogli il profilo JSON confermato. Chiedigli la sintesi con parametri raccomandati, periodizzazione e **fonti citate**.

Accesso a Google Drive: se il ricercatore segnala che i tool di Google Drive **non sono disponibili**, applica il **fallback** — sei tu (sessione principale) a cercare/leggere i materiali su Drive con i tool `mcp__Google_Drive__*` e a passare gli estratti rilevanti al ricercatore in un secondo giro (usa `SendMessage` verso lo stesso agent per non perdere il contesto).

Knowledge base personale dell'utente (`pamangiapane@gmail.com`) — punto di partenza per il fallback:
- Cartella **Formazione 📖** (`12a9-6kPPq5pRrq8ya_KXu-45M5rUuDFa`) → `Corsi`, `Strength and Various`, `Books`, `Uni`.
- `periodizzazione.pdf` (`1DxXdh5cb6CkWVSllLUSa0-iwrCRLE_wB`), dispensa `Metodologia dell'Allenamento` (`1phcyK11iWLps_j5Tc6yCB6pLrmwL5JYY`), `modulo-3`/`modulo-4 preparazione fisica`.
- Schede/standard pregressi: `Standard allenamento forza` (`1hsGqCxYMhiQVPqAdHHK7F_4CMzT-NDOtw3iq_oeCb3A`), `Set. PROFILO FORZA VELOCITA' POTENZA` (`15NIpznmQLCTRhR3olOGMAi3Nh6esqhc2siuRQb4AgjY`).

## Fase 3 — Build (subagent `builder`)

Lancia il subagent **`builder`** (`subagent_type: "builder"`) passandogli **profilo + findings del ricercatore**. Chiedi il programma periodizzato completo (macro→meso→micro→sedute) con progressioni nel tempo e cicli lunghi/brevi, nello schema JSON del suo contratto, più il file salvato in scratchpad.

## Fase 4 — Revisione critica

Ora **valuti tu** la proposta del builder. Non limitarti ad accettarla:
- Verifica coerenza interna: le progressioni hanno una logica numerica? Volume/intensità sostenibili? Deload presenti?
- Verifica aderenza al profilo (obiettivo, frequenza, attrezzatura, infortuni) e alle evidenze del ricercatore.
- Evidenzia **punti deboli e rischi** e proponi **miglioramenti concreti**.
- Proponi **almeno una struttura alternativa** (es. modello di periodizzazione diverso) con pro/contro.
- Se necessario, fai un **secondo giro sul builder** con le tue indicazioni.
Presenta all'utente la sintesi della critica e le opzioni, e fatti scegliere la direzione se non è ovvia.

## Fase 5 — Output

Produci **entrambi** i formati (il primo sempre, il secondo su approvazione):

1. **Documento standalone** (default): un Markdown completo (overview, razionale con fonti, calendario progressioni, tabelle per seduta). Poi, se l'utente lo vuole rifinito, convertilo in **PDF** (skill `pdf`) o **Word** (skill `docx`). Salva nella working directory o nella scratchpad e consegna con `SendUserFile`.

2. **Formato app** (su conferma dell'utente): converti il programma nello schema dei fogli **`Sedute`** ed **`Esercizi`** letto da `scheda.html`. Regole:
   - Un record per esercizio con: `Esercizio`, `Serie`, `Reps`, `Intensità`, `Recupero`, `Catena`, `N_Seduta`, `Fase`, `Num_Ripetizioni`, `Tipo_Esercizio`.
   - Set multipli → separatore **pipe** `|` (es. `Serie=4|3|2`, `Reps=6|4|2`).
   - Doppio carico → `Tipo_Esercizio=bicarico` + campi `SerieB`, `RepsB`, `IntensitàB`, `RecuperoB`.
   - Le `Fase` seguono le fasi del macrociclo (nell'app volley: Base/Picco/Potenza/Taper — adatta ai mesocicli del programma).
   - Produci un file **CSV o JSON** pronto da importare nei Sheet. **Non** scrivere direttamente sui Google Sheet in questa fase: consegna il file all'utente.

## Principi

- Sei generico e configurabile: **non** assumere pallavolo salvo che il profilo lo indichi. Lo step "formato app" è specifico di questa applicazione.
- Ogni scelta di programmazione deve poter risalire a un'evidenza o a un'assunzione dichiarata.
- Non inventare numeri: se un dato manca, chiedilo (Fase 1) o dichiara l'assunzione.
