# Prompt benchmark — test con altra IA
*Scopo: verificare cosa produce un secondo modello con lo stesso briefing, senza vedere l'output già prodotto*

---

## ISTRUZIONI PER IL TEST

**Cosa dare all'altra IA:**
1. Incollare il testo del blocco § BRIEFING qui sotto
2. Allegare i documenti elencati in § DOCUMENTI DA ALLEGARE
3. **Non allegare** i file prodotti dalla sessione precedente (`Preseason_A2_2026_*`, `Sedute_*`, `Periodizzazione_*`)

**Domanda di confronto:** l'altra IA arriva alle stesse regole chiave? Trova gli stessi errori? Usa un'architettura diversa? Quanto dettaglio scende nelle sedute senza che tu lo chieda esplicitamente?

---

## § BRIEFING

### Contesto generale

Sei un consulente di periodizzazione dell'allenamento fisico per squadre di pallavolo femminile.

Ti viene chiesto di progettare il **programma di preparazione pre-stagionale** per il **Marsala Volley**, squadra militante in **Serie A2 Femminile** (secondo livello nazionale italiano).

---

### Il team e la sua condizione di partenza

- **Categoria**: Serie A2 Femminile (campionato professionistico di secondo livello)
- **Inizio stagione regolare**: domenica 4 ottobre 2026 (prima giornata)
- **Condizione di arrivo al 24/8**: le atlete hanno svolto un off-season strutturato di 4 cicli (OS1-OS4) di 2 settimane ciascuno, con progressione di forza e volume pliometrico. **Non c'è gap di detraining da colmare.** Il picco pliometrico nell'ultima settimana off-season (OS4) era di circa 108 salti di natura pliometrica pura (es. box jump, depth jump), ma a questo vanno aggiunti i salti tecnici di campo (ricevuta, attacco, muro), che nelle sedute di campo NCAA D1 valgono già ~100 salti per seduta.
- **Roster**: squadra completa. Ruoli presenti: palleggiatrici, centrali, bande/schiacciatrici, opposti, libero. Le centrali e le palleggiatrici saltano significativamente di più in gara rispetto a bande/libero.

---

### Finestre di lavoro e logistica

**Periodo pre-season: lunedì 24/8 – domenica 4/10/2026 (6 settimane)**

| Settimana | Finestra logistica | Note |
|-----------|---------------------|-------|
| W1 (24-30/8) | Spiaggia + palestra + campo mini | Spiaggia disponibile (propriocezione, lavoro estensivo a basso impatto) |
| W2 (31/8-6/9) | Spiaggia + palestra + campo mini | Idem |
| W3 (7-13/9) | Palestra + campo sportivo regolare + amichevole | Prima amichevole della stagione (sabato ~13/9) |
| W4 (14-20/9) | Palestra + campo + amichevole | Amichevole piena |
| W5 (21-27/9) | Palestra + campo + amichevole | Amichevole piena, la più importante (test su carico-gara reale) |
| W6 (28/9-4/10) | Taper + gara | Domenica 4/10: prima gara ufficiale di campionato |

**Disponibilità attrezzatura**: palestra pesi con bilancieri (Squat, Clean, Stacco, Upper), vasca/acqua per lavoro a impatto ridotto, campo in sabbia, campo al coperto regolare.

**Frequenza stimata di sedute**: 5 giorni/settimana lavorativi (lun-ven), con sabato dedicato alle amichevoli in W3-W5 e riposo domenica.

---

### Profilo atletico richiesto dalla gara (A2 Femminile)

- **Salti per partita**: 50-95 per atleta (dipende dal ruolo; centrali/palleggiatrici sul limite alto)
- **Pattern energetico dominante**: sforzi alattacidi 3-6", recupero 15-25", gara 90-120'
- **Overhead ripetuto ad alta velocità** (attacco, muro, servizio)
- **Cambi di direzione in spazi < 3m**, reattivi, su segnale
- **Forza espressa in < 250ms** (specificità del salto e del colpo di palla)

---

### Vincoli e regole che il programma deve rispettare

Il programma deve includere motivazione esplicita per ogni scelta metodologica rilevante. Vincoli minimi che ti chiedo di rispettare:

1. **Nessun test massimale diretto**: usa un profilo carico-velocità (VBT approach) in W1 per stimare i RM operativi.
2. **Tetto di intensità in sala pesi: 87% del massimale**, mai oltre (le atlete hanno già visto il 90% in OS3).
3. **Regola 1,5× sul carico di salto**: il jump budget totale settimanale (pliometria + salti di campo + salti di gara) non può più che 1,5× rispetto alla settimana precedente.
4. **Mai due giorni ad alto stress nervoso consecutivi** (sequenza high-low sempre rispettata).
5. **Il venerdì non si salta** (le gambe devono essere fresche per sabato - amichevole - o domenica - gara).
6. **La prima amichevole è a rate**: 3-4 set per atleta con rotazioni su centrali e palleggiatrici (le più sollecitate), non partita piena.
7. **Prevenzione individualizzata per atleta** (spalla, ginocchio, caviglia in base alle anamnesi).

---

### Il tuo compito

Produce i seguenti **4 file distinti**, con i nomi esatti indicati:

---

#### File 1 — `Preseason_A2_2026_Programma_FINALE.md`

Programma pre-season completo di 6 settimane. Deve contenere:

1. **Architettura generale**: quale logica periodizzativa usi e perché (blocchi sequenziali? integrazione verticale? altra?); principi guida dichiarati esplicitamente
2. **Profilo-gara**: tabella con le richieste fisiche della gara A2 e come il programma le costruisce
3. **Regole non negoziabili**: lista numerata dei vincoli operativi che governano il programma
4. **Enfasi settimanale**: tabella con la percentuale di volume per qualità (forza, potenza, elastico-reattivo, metabolico, simil-gara, prevenzione) settimana per settimana
5. **Distribuzione settimanale**: tabella lun-dom × W1-W6 con il tipo di seduta per ogni giorno
6. **Progressione forza** (Squat, Clean, Hinge/Stacco, Upper): volumi, intensità (%RM), RPE settimana per settimana
7. **Carico di salto**: scala simil-gara (% della gara reale per settimana) + tabella numerica del jump budget per ruolo con verifica della regola 1,5×
8. **Gate di progressione**: criteri quantitativi ai passaggi di settimana critici (ingresso al carico-partita; ingresso al taper), con azione di fallback esplicita per ogni caso
9. **Prevenzione**: protocollo settimanale per spalla, ginocchio, caviglia (progressione per fase)

Sii esplicito sulle scelte metodologiche e sui trade-off. Se assumi qualcosa che non trovi nel briefing, dillo.

---

#### File 2 — `Periodizzazione_Stagionale_A2_2026_27.md`

Pianificazione dell'intera stagione 2026/27 (da ottobre 2026 ad aprile 2027). Deve contenere:

1. **Calendario completo**: tutte le 32 giornate con data, avversario, casa/trasferta, infrasettimanali reali, turni di riposo
2. **Pattern critici**: settimane con 3 gare in 7-10 giorni (identificarle tutte, non solo le più evidenti)
3. **Logica di mantenimento in-season**: come distribuire le 2 sedute pesi settimanali + le proposte pre-campo per mantenere il 90% di readiness
4. **Gestione dei cluster critici**: cosa fare nelle settimane con 3 gare, nella sosta natalizia, nel rientro post-sosta
5. **Periodizzazione mesocicli in-season**: come variano volume/intensità nelle diverse fasi del campionato (ottobre, novembre-dicembre, gennaio-marzo, finale)
6. **Momenti di ricarica**: quando e come inserire mini-blocchi di accumulo di forza durante la stagione senza interferire con la performance di gara

---

#### File 3 — `Stagione_Marsala_A2_2026_27.xlsx`

Excel con la stagione completa. Deve contenere almeno i seguenti fogli:

| Foglio | Contenuto |
|--------|-----------|
| `Calendario` | Tutte le 32 gare con data, avversario, casa/trasferta, giornata, tipo settimana (normale/cluster/riposo) |
| `Pre-season W1-W6` | Piano settimanale della pre-season: giorni × tipo seduta, con carico previsto (alto/medio/basso) |
| `Progressione_Forza` | Tabella Squat/Clean/Hinge/Upper per W1-W6 con %RM, serie, rip, RPE |
| `Jump_Budget` | Tabella jump budget per ruolo (banda, centrale/palleggiatrice, libero) per W1-W6 con verifica 1,5× |
| `Settimane_tipo` | 3-4 template di settimana-tipo in-season (settimana normale, settimana cluster, settimana con riposo) |

---

#### File 4 — `sedute/Scheda_Sedute_W[N]_FINALE.md` × 6 (uno per settimana)

Sei file separati (`Scheda_Sedute_W1_FINALE.md` … `Scheda_Sedute_W6_FINALE.md`), uno per ogni settimana della pre-season.

Ogni file deve contenere **tutte le sedute della settimana** in dettaglio operativo completo:

- Giorno e tipo di seduta (es. "Lunedì — Spiaggia + Campo mini (medio)")
- Per ogni esercizio: nome, serie × rip, carico (%RM o kg o RPE), recupero, note di coaching
- RPE target per la seduta e per ogni blocco principale
- Durata stimata totale della seduta
- Note specifiche per ruolo dove rilevante (es. pliometria differenziata centrali vs bande)
- Criteri di monitoraggio del giorno (es. CMJ mattino, fastidio articolare da 0-10)

---

**Formato**: Markdown per i file .md, Excel (.xlsx) per il file 3. Nomenclatura dei file esattamente come indicato sopra. I file delle sedute vanno in una sottocartella `sedute/`.

---

## § DOCUMENTI DA ALLEGARE

*Questi file sono da recuperare dal repository o da Drive. Sono le fonti "grezze" che io avevo a disposizione prima di iniziare a scrivere il programma — non i file prodotti dalla sessione.*

### Obbligatori (cambiano il programma se non ci sono)

| Documento | Dove trovarlo | Cosa contiene |
|-----------|---------------|---------------|
| Calendario ufficiale A2 Fineco 2026/27 | Sito Lega Volley Femminile | Date di tutte le 32 giornate, infrasettimanali, turni di riposo — **verificare il giorno esatto della prima gara (dom 4/10 o sab?)** |
| File Drive: `Programma_individuale_1_ciclo_25_26` | KB Drive della preparazione 25/26 | Sedute e carichi della stagione precedente (riferimento per i livelli di forza delle atlete) |
| File Drive: `Programma_individuale_2_ciclo_25_26` | KB Drive della preparazione 25/26 | Idem, secondo ciclo stagionale |
| File Drive: `Program_design_25_26` | KB Drive della preparazione 25/26 | Logica di periodizzazione del preparatore precedente (utile per vedere cosa c'era prima, cosa ha funzionato) |

### Utili ma non bloccanti

| Documento | Dove trovarlo | Cosa contiene |
|-----------|---------------|---------------|
| File Drive: profilo forza-velocità atlete | KB Drive | Valori VBT già rilevati per alcune atlete (v₀, F₀, Pmax) |
| Letteratura su volume pliometrico volley femminile | Ricerca web | Ramirez-Campillo 2021 (meta-analisi pliometria), dati NCAA D1 su salti/seduta, Bahr & Bahr su tendinopatia rotulea |
| Letteratura su tapering breve (<2 settimane) | Ricerca web | Moran et al. 2018 / Bosquet et al. 2007 su riduzione volume ottimale pre-gara |

---

## § PARAMETRI DI CONFRONTO

Dopo aver ricevuto l'output dell'altra IA, confrontare su questi punti:

| Domanda | Atteso (basato sulla sessione originale) | Da verificare nell'altra IA |
|---------|------------------------------------------|------------------------------|
| Quale architettura sceglie? | Integrazione verticale (enfasi settimanale %, non blocchi sequenziali) | Sceglie blocchi? Ibrido? Altra logica? |
| Identifica il problema del picco forza? | Sì: non far coincidere picco forza con picco carico-partita | Lo separa spontaneamente? |
| Doppia metrica per il salto? | Sì: pliometria programmata + jump budget totale, per ruolo | Conta solo la pliometria? Ignora il salto di campo? |
| Verifica il giorno della prima gara? | Sì: domenica 4/10, non sabato (errore trovato in revisione) | Lo verifica o lo assume? |
| Regola 1,5× enunciata e rispettata? | Enunciata in v1, violata in W2→W3 (corretta in v2) | La rispetta senza prompt esplicito? |
| Differenzia il carico per ruolo? | Sì: centrali/palleggiatrici -25% salti programmati nelle settimane con partita | Usa carichi uniformi? |
| Produce sedute esplose? | Sì, W1-W6 con esercizi, serie, rip, carico, recupero, RPE | Con quale livello di dettaglio? |
| Gate di progressione quantitativi? | Sì: CMJ baseline, fastidio articolare, velocità di barra | Usa criteri qualitativi vaghi o numeri? |
