# Checklist DEV → PROD

Prima di ogni merge `dev` → `main`, verifica punto per punto:

## Codice HTML
- [ ] Nessun banner DEV visibile (cerca `DEV` in index.html, scheda.html, report.html)
- [ ] TOKEN nelle HTML punta a `squadra2026-prd-*` (non al token DEV)
- [ ] URL API nelle HTML punta all'endpoint PROD (non DEV)

## Apps Script
- [ ] `clasp push --force` eseguito sul progetto PROD
- [ ] `clasp deploy` eseguito → deployment ID PROD aggiornato
- [ ] Token in Codice.js PROD corrisponde al token nelle HTML PROD

## Google Sheets
- [ ] I dati DEV non sono stati copiati nel foglio PROD per errore

## Test rapido post-deploy
- [ ] Aprire `https://pamangiapane-lgtm.github.io/schede-allenamento/?id=1` → carica scheda
- [ ] Aprire `https://pamangiapane-lgtm.github.io/schede-allenamento/` → lista giocatrici visibile

## Dopo il deploy
- [ ] Bumpa `CACHE_V` in scheda.html se è cambiata la struttura dati (es. nuove colonne)
