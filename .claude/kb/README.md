# Knowledge base — database interno

Questa cartella contiene il **database interno** del sistema di generazione programmi: un
*indice curato* della knowledge base di formazione dell'utente (materiali su Google Drive).

## Cos'è (e cosa non è)
- `index.json` è una **mappa** dei documenti: titolo, `id` Drive, argomenti, archetipi, priorità.
- **Non** contiene il testo completo dei PDF. I documenti si aprono on-demand da Google Drive
  usando l'`id` con i tool `mcp__Google_Drive__read_file_content` / `download_file_content`.
- Serve a **recuperare la fonte giusta senza confusione** e senza dover rileggere tutto.

## Chi lo usa
- **`bibliotecario`** (agente): lo interroga (retrieval) e lo aggiorna (manutenzione).
- **`ricercatore`** (agente): lo consulta come primo passo, prima della ricerca web.
- **`/genera-programma`** (skill orchestratore): lo passa come contesto alla ricerca.

## Come aggiornarlo
Quando carichi nuovi materiali su Drive, chiedi: *"aggiorna l'indice della knowledge base"*.
Il `bibliotecario` scansiona le cartelle (campi `cartelle` e `da_catalogare`), classifica i
nuovi file e riscrive `index.json` (incrementando `versione` e `aggiornato_il`).

## Nota sull'ambiente
Questo è un ambiente remoto: vede solo il repo e Google Drive. I percorsi locali del PC
(`C:\Users\...\Formazione\...`) non sono raggiungibili; lo stesso materiale è però su Drive
ed è quello che l'indice referenzia.
