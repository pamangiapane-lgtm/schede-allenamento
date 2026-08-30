# Blocco Specifico Ruolo W2 — Proposta

**Posizione nel CSV**: Metodo 4 in W2-MarP e W2-GioV  
**Effetto**: gli attuali Metodi 4→8 slittano a 5→9 in entrambe le sedute  
**Non approvato** — da validare prima dell'inserimento in W2_Esercizi.csv

---

## W2-MarP (martedì pesante) — Metodo 4 — ~8 min — focus CONTROLLO ARTICOLARE

| Ruolo | Esercizio 1 | Esercizio 2 |
|---|---|---|
| **Centrale** | Step-down lateral con pausa 2×6/lato | Calf raise mono ISO+CON 2×10 |
| **Schiaccia/Opposto** | Romanian DL mono con pausa 2×6/lato | Nordic hamstring curl assistito 2×4 |
| **Palleggiatrice** | ER isometrica elastico 3 posizioni 2×30s | Pistol squat assistito su box 2×6/lato |
| **Libero** | Copenhagen ISO→dinamico 2×(20s+8)/lato | Deceleration lunge con pausa 2×6/lato |

**Logica**: seduta già pesante → il blocco ruolo è preventivo/controllo, non aggiunge potenza. Ogni atleta esegue solo i propri 2 esercizi (~4 min effettivi per atleta).

---

## W2-GioV (giovedì veloce) — Metodo 4 — ~10 min — focus POTENZA SPECIFICA

| Ruolo | Esercizio 1 | Esercizio 2 |
|---|---|---|
| **Centrale** | Jump squat corpo libero 3×4 | Side-to-side lateral bound 3×4/lato |
| **Schiaccia/Opposto** | Broad jump + atterraggio stabilizzato 3×4 | Hip thrust esplosivo 3×6 |
| **Palleggiatrice** | Skater jump laterale 3×6/lato | MB overhead throw a parete 2×8 |
| **Libero** | Depth jump basso verso difesa 3×5 | Lateral shuffle + touch ground 3×6m |

**Logica**: seduta veloce → il blocco ruolo esprime potenza specifica per gesto. Complementa il clean e lo squat veloce già presenti senza duplicare il pattern.

---

## Fonte KB

- §5 "Differenziazione per ruolo" — Preseason_A2_2026_Programma_6settimane_v2.pdf (id `1RV5pgz9iw9JTAHFLlB0F52V6e8Gkn9lq`)
- §3 "Sala pesi per ruolo" — stesso documento
- ELAV A.L.E.S.A. (id `1e6_0inJDktx3g6kOQaXJielvWMAkUYvq`) — single limb stance, Y-Balance

---

## Come integrare (istruzioni per il commit)

1. Aprire `W2_Esercizi.csv`
2. Inserire le 8 righe W2-MarP dopo l'ultima riga `W2-MarP,3,...` e prima della prima `W2-MarP,4,...`
3. Rinumerare i vecchi Metodi 4→8 di W2-MarP in 5→9
4. Inserire le 8 righe W2-GioV dopo l'ultima riga `W2-GioV,3,...` e prima della prima `W2-GioV,4,...`
5. Rinumerare i vecchi Metodi 4→8 di W2-GioV in 5→9

Oppure: conferma e lo faccio in automatico con Python.
