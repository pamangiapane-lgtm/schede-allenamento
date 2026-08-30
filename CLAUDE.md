# Marsala Volley — Sistema Schede Allenamento

## Architettura
```
data/*.csv  ──►  GitHub Action  ──►  GAS (carica CSV)
                                ──►  genera_schede.py (fetch GAS + genera HTML)
                                ──►  docs/index.html  (GitHub Pages, pubblico)
```

## Token e API
| Chiave       | Valore                    | Dove                        |
|--------------|---------------------------|-----------------------------|
| APP_TOKEN    | `mv26-prd-3xF7wNqK`       | env var + GitHub Secret     |
| COACH_KEY    | `mv26-coach-8pL2wK`       | accesso allenatore          |
| GAS PROD     | `AKfycbyx…RIzr9/exec`     | script.google.com (no proxy)|
| GAS DEV      | `AKfycbzq…OiO/exec`       | test                        |

> Il proxy di Claude Code Cloud blocca script.google.com (403). Usare GitHub Action per tutto ciò che richiede GAS.

## Branch di lavoro
`claude/pre-season-app-mods-355hqq` — branch attivo per W1

## Struttura dati

### CSV locali (git)
- `data/W1_Sedute.csv` — sedute settimana 1
- `data/W1_Esercizi.csv` — esercizi W1 (313+ righe)
- `data/W2_Sedute.csv` / `data/W2_Esercizi.csv` — settimana 2

### Colonne chiave W1_Sedute.csv
`Numero_Seduta, Nome_Seduta, Luogo, Giorno`

### Colonne chiave W1_Esercizi.csv
`N_Seduta, Ord_Metodo, Ord_Eserc, Esercizio, Metodo, Serie, Reps, Intensità, Recupero, Ruoli, Istruzione, Note`

### GAS (Google Sheets, non in git)
- **Giocatrici**: ID, Nome, Ruolo — fonte per filtro esercizi per ruolo
- **Progressi**: ID_Giocatrice, Esercizio, Valore, Timestamp — massimali e log

## Sedute W1 — nomi e luoghi
| ID         | Giorno | Luogo    | Note                      |
|------------|--------|----------|---------------------------|
| W1-LunSp   | Lun    | Spiaggia |                           |
| W1-LunC1   | Lun    | Campo    |                           |
| W1-MarP    | Mar    | Palestra | **Seduta 1 — quella in scheda** |
| W1-MerSp   | Mer    | Spiaggia |                           |
| W1-GioV    | Gio    | Palestra | Seduta 2                  |
| W1-VenAq   | Ven    | Piscina  |                           |

## Logica filtri esercizi

### SKIP_METODI (esclusi dalla scheda)
```python
{"Attivazione", "Prehab individuale", "Prevenzione"}
# + "Rinforzo scapolare Libero" per atlete NON Libero
```

### Ruoli disponibili
`tutti · Libero · Nelly · Centrale · Banda · Opposto · Palleggio · Schiaccia/Opposto · Palleggiatrice`

Sintassi nel CSV: `!Nelly` = esclude Nelly · `!Nelly,!Libero` = esclude entrambe · `Libero` = solo Libero

## Atlete (13 attive, ID≠99)
| ID | Nome               | Ruolo   | Note          |
|----|--------------------|---------|---------------|
| 1  | Veronica Allasia   |         |               |
| 2  | Maria Marcuzzi     |         |               |
| 3  | Victoria Sassolini |         |               |
| 4  | Anja Asonja        |         |               |
| 5  | Chiara Lo Dico     | Libero  |               |
| 6  | Gaia Biondi        |         |               |
| 7  | Elisa Bole         |         |               |
| 8  | Federica Nonnati   |         |               |
| 9  | Sara Dodi          |         |               |
| 11 | Luna Cicola        | Libero  |               |
| 12 | Erin Grippo        |         |               |
| 13 | Giulia Caserta     |         |               |
| 14 | Nelly Adamczewska  | Nelly   | programma dedicato |

## Operazioni frequenti

### Modificare un esercizio
1. Edita `data/W1_Esercizi.csv` — trova riga per `N_Seduta` + `Codice`
2. Commit + push → GitHub Action genera schede automaticamente

### Aggiungere/modificare ruolo atleta
- Da PC: modifica direttamente Google Sheet tab `Giocatrici`
- Da Claude Code: al momento richiede PC (GAS bloccato dal proxy)
- **TODO**: migrare Giocatrici in `data/Giocatrici.csv`

### Rigenerare schede manualmente (da PC)
```powershell
cd "C:\AI\Pallavolo\Marsala volley\sedute extra"
git pull origin claude/pre-season-app-mods-355hqq
$env:APP_TOKEN = "mv26-prd-3xF7wNqK"
python _strumenti/carica_da_github.py
python _strumenti/genera_schede.py
```

## GitHub Action
File: `.github/workflows/genera_schede.yml`
- Trigger: push su `data/**` o `_strumenti/*.py`
- Output: `docs/index.html` committato automaticamente
- Richiede: GitHub Secret `APP_TOKEN = mv26-prd-3xF7wNqK`

## GitHub Pages
- Settings → Pages → Branch: `claude/pre-season-app-mods-355hqq` → Folder: `/docs`
- URL: `https://pamangiapane-lgtm.github.io/schede-allenamento/`

## CSS / Design schede
- Font: `Barlow Condensed` (headers) + `Inter` (body)
- Palette: navy `#0c1f40` · amber `#e8a020` · bg `#f0f4f8`
- Artifact preview: `https://claude.ai/code/artifact/418af0af-96ea-4a84-bc48-bed9435cc960`

## TODO aperti
- [ ] Aggiungere `data/Giocatrici.csv` per eliminare dipendenza GAS per i ruoli
- [ ] Completare colonna Ruolo per tutte le atlete nella tabella sopra
- [ ] Fix prescrizione Nelly: Potenza → Strength
