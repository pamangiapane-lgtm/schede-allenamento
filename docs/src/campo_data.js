/**
 * MARSALA VOLLEY — CAMPO S&C DATA & CONTROLLER ENGINE (W3, W4, W5, W6)
 */

(function(global) {
  'use strict';

  const CAMPO_SUBTITLES = {
    'W5': "Microciclo Settimana 5 (Picco Elastico-Reattivo & Potenza Integrata) · 3 Sedute Pomeridiane a Secco prima del Volley Tecnico.",
    'W6': "Microciclo Settimana 6 (Tapering Pre-Esordio vs Costa Volpino) · Volume -50%, Picco SYNAPSE & Zero Fatica.",
    'W4': "Microciclo Settimana 4 (Contrasto Dinamico & Decelerazione Rapida) · 3 Sedute Pomeridiane a Secco prima del Volley Tecnico.",
    'W3': "Microciclo Settimana 3 (Picco Forza Pesante & Frenata 180°) · 3 Sedute Pomeridiane a Secco prima del Volley Tecnico."
  };

  const CAMPO_DATA = {
    'W5': {
      'lun': {
        title: "🟡 Lunedì Pomeriggio",
        subtitle: "· CAMPO 1 (45')",
        meta: "Decelerazione ad Altissima Velocità & Synapse Complesso · ZERO SALTI A SECCO",
        badges: [
          { text: "Frenata 100% Vmax", color: "#fde68a", border: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
          { text: "Dual-Task Pallone", color: "#6ee7b7", border: "#10b981", bg: "rgba(16,185,129,0.15)" }
        ],
        blocks: [
          {
            time: "00'–10'",
            title: "B1: ATTIVAZIONE SENSO-MOTORIA & SYNAPSE COMPLESSO",
            tag: "ELAV COGNITIVO",
            tagClass: "tag-synapse",
            desc: "• <strong>Mobilità Dinamica Articolare (4'):</strong> Sblocco articolare dinamico (anche 90/90 a terra, allungamento capsulare, tibiale posteriore/<em>short foot</em> a piedi scalzi).<br>• <strong>Attivazione Caviglia & Arco Plantare (3'):</strong> Monster walk elastica e footwork rapido con miniband alle caviglie (2 serie x 10 passi).<br>• <strong>SYNAPSE 1 — Segnali Incrociati Visivo-Acustici (3'):</strong> Corsa reattiva in cerchio; su fischio / colore chiamato a sorpresa: <strong>arresto monopodalico immediato sul piede esterno</strong> con tenuta isometrica di 2\" (3 serie x 45\", rec. 20\")."
          },
          {
            time: "10'–25'",
            title: "B2: FRENATE ECCENTRICHE MASSIMALI A TERRA & COD 180°",
            tag: "FRENATA MASSIMALE",
            tagStyle: "color:#f87171;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Allunghi 8m al 100% con Frenata Secca a 2 Tempi (7'):</strong> Sprint massimale sui primi 8 metri ➔ arresto squadrato su linea in meno di 0.3s con dissipazione eccentrica pura: 5 serie x 2 frenate (rec. 45\").<br>• <strong>COD 180° Volley Modified (5-0-5) (8'):</strong> Sprint 5m ➔ tocco linea con arresto violento e perno ➔ ripartenza esplosiva a baricentro basso verso la linea di partenza: 4 ripetizioni (rec. 60\").<br>• <strong>Invariante Fisiologica:</strong> Zero impatti verticali traumatici a terra, stimolo puramente eccentrico di decelerazione orizzontale."
          },
          {
            time: "25'–38'",
            title: "B3: SITUAZIONALE DI RUOLO + DUAL-TASK & BALISTICO",
            tag: "SPECIFICO RUOLO",
            tagClass: "tag-role",
            desc: "• <strong style=\"color:#d8b4fe\">Centrali (Caserta, Cecchini, Marcuzzi):</strong> Spostamento laterale rapido a 2 passi lungo la rete + arresto squadrato palleggiando al volo contro parete (4 serie x 3).<br>• <strong style=\"color:#d8b4fe\">Bande / Opposti (Joly, Scirè, Meniconi, Dodi, Gasparroni, Bondet, Adamczewska):</strong> Rincorsa d'attacco in decelerazione a terra con <strong>ricezione di palla medica 3-4 kg al volo</strong> (dissipazione della forza frenante): 4 serie x 3 frenate.<br>• <strong style=\"color:#d8b4fe\">Liberi / Palleggi (Oggioni, Allasia, Biondi):</strong> Reattività rasoterra: navetta 3x3m con scambio palla a rimbalzo con compagna (4 serie x 15\").<br>• <strong>Transfer Balistico Power:</strong> <em>Medball Slam</em> violento a terra a due mani con palla 4 kg (3 serie x 4 slam massimali, rec. 30\")."
          },
          {
            time: "38'–45'",
            title: "B4: PREVENZIONE SPALLA & CONSEGNA AL COACH",
            tag: "CONSEGNA COACH",
            tagStyle: "color:#6ee7b7;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Extrarotatori Spalla con Tenuta Isometrica (4'):</strong> Lavoro con elastico a parete con fermo isometrico di 3\" al massimo punto di tensione (3 serie x 10 rep/braccio).<br>• <strong>Core Anti-Rotazione Pallof Hold (3'):</strong> Tenuta isometrica 20\"/lato.<br>• <strong>Passaggio di Consegne:</strong> Atlete calde, pronte neurologicamente e consegnate al Primo Allenatore per il 6vs6 tecnico."
          }
        ],
        safety: "🛡️ <strong>SAFETY NET AUTOREGOLAZIONE ECCENTRICA (Lunedì W5):</strong> Se al test Chronojump mattutino un'atleta segna drop >7-8%, il Blocco 2 (COD 180°) passa da 5 a 2 serie, convertendo il tempo restante in footwork rapido su scaletta a terra senza impatto frenante violento."
      },
      'mer': {
        title: "🔴 Mercoledì Pomeriggio",
        subtitle: "· CAMPO 2 (45')",
        meta: "Picco di Pliometria Reattiva, Ostacoli 20cm & Rincorse di Ruolo · Transfer Simil-Rally",
        badges: [
          { text: "Ostacoli 20cm", color: "#93c5fd", border: "#38bdf8", bg: "rgba(56,189,248,0.15)" },
          { text: "Picco RFD", color: "#6ee7b7", border: "#10b981", bg: "rgba(16,185,129,0.15)" }
        ],
        blocks: [
          {
            time: "00'–10'",
            title: "B1: ATTIVAZIONE ELASTICA & STIFFNESS CAVIGLIA",
            tag: "ELAV COGNITIVO",
            tagClass: "tag-synapse",
            desc: "• <strong>Attivazione Tendinea Dinamica (4'):</strong> Ankling drills su parquet + Low Pogo continui (3 serie x 12 balzelli, Tc <170ms).<br>• <strong>SYNAPSE 1 — Scaletta con Decisione Cromatica (6'):</strong> Scaletta rapida in-out con uscita d'accelerazione obbligata a destra o sinistra su colore chiamato in frazione di secondo (4 ripetizioni a testa)."
          },
          {
            time: "10'–25'",
            title: "B2: PLIOMETRIA SU OSTACOLINI & RINCORSE DI RUOLO",
            tag: "PLIO REATTIVA",
            tagStyle: "color:#38bdf8;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Ostacolini 20 cm a Rimbalzo Istantaneo (7'):</strong> 4 ostacoli continui a rimbalzo elastico reattivo: 4 serie x 4 balzi (rec. 60\", Tc <190ms).<br>• <strong style=\"color:#d8b4fe\">Bande / Opposti:</strong> 4 serie x 4 salti con rincorsa completa d'attacco alla massima elevazione e frustata d'attacco a secco.<br>• <strong style=\"color:#d8b4fe\">Centrali:</strong> 4 serie x 4 salti a muro doppi (stacco - atterraggio - stacco immediato con braccia a rete).<br>• <strong style=\"color:#d8b4fe\">Liberi:</strong> Sostituzione balzi con scivolamenti difensivi reattivi continui con tuffo/rullata controllata su materassino (4 serie x 15\")."
          },
          {
            time: "25'–38'",
            title: "B3: LANCI ROTAZIONALI MEDBALL & SIMIL-RALLY",
            tag: "VOLLEY DUAL-TASK",
            tagClass: "tag-role",
            desc: "• <strong>Lanci Rotazionali Medball (3 kg) (6'):</strong> Rotazione esplosiva bacino-tronco contro muro: 3 serie x 4+4 lanci esplosivi (rec. 30\").<br>• <strong>Simil-Rally Intermittente a Secco (7'):</strong> Circuito a stazioni: scivolamento laterale difensivo + tocco palla a terra + sprint breve. 6 ripetizioni x (5\" lavoro esplosivo / 15\" recupero attivo, rapporto 1:3)."
          },
          {
            time: "38'–45'",
            title: "B4: PREVENZIONE TENDINEA & CONSEGNA AL COACH",
            tag: "CONSEGNA COACH",
            tagStyle: "color:#6ee7b7;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Scarico Tendineo Rotuleo/Achilleo:</strong> Allungamento soleo e gemelli al muro + Spanish Squat isometrico 2x30\".<br>• <strong>Consegna al Coach:</strong> Atlete elastiche, attivate per il 6vs6 a tutto campo."
          }
        ],
        safety: "🛡️ <strong>SAFETY NET JUMP BUDGET (Mercoledì W5):</strong> Se nella seduta tecnica pomeridiana il coach programma una dose massiccia di salti (>80 salti tecnici nel 6vs6 o tie-break simulato), la pliometria del Blocco 2 scala automaticamente del 50% (8–12 salti massimali anziché 16–24)."
      },
      'ven': {
        title: "🔵 Venerdì Pomeriggio",
        subtitle: "· CAMPO 3 (45')",
        meta: "Priming Neurale Pre-Amichevole Generale (100% Gara) & ZERO SALTI ASSOLUTI",
        badges: [
          { text: "🛑 Strict Jump Ban", color: "#fca5a5", border: "#ef4444", bg: "rgba(239,68,68,0.2)" },
          { text: "Priming Pre-Gara", color: "#6ee7b7", border: "#10b981", bg: "rgba(16,185,129,0.15)" }
        ],
        blocks: [
          {
            time: "00'–10'",
            title: "B1: RESET & MOBILITÀ DINAMICA SENZA CARICHI",
            tag: "RESET NERVOSO",
            tagClass: "tag-synapse",
            desc: "• <strong>Mobilità Globale senza Pesi (5'):</strong> Flessori anca in allungamento dinamico, aperture toraciche, monster walk elastica (2x10 passi).<br>• <strong>Sblocco Miofasciale (5'):</strong> Foam rolling leggero polpacci e tensore fascia lata, respirazione diaframmatica a terra."
          },
          {
            time: "10'–25'",
            title: "B2: RAPIDITÀ PODALICA A TERRA & PRIMI PASSI",
            tag: "ZERO SALTI",
            tagStyle: "color:#f87171;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Scaletta a Frequenza Pura (7'):</strong> 2 piedi dentro ogni spazio ad altissima frequenza senza stacco verticale (In-Out, Icky Shuffle): 3 serie x 6m (rec. 45\").<br>• <strong>Scatti Brevi 3 Metri con Arresto Morbido (8'):</strong> Partenze brucianti da postura difensiva fondamentale con frenata progressiva camminata: 3 serie x 2 partenze (rec. 45\"). <em>Nessun salto né atterraggio d'impatto</em>."
          },
          {
            time: "25'–38'",
            title: "B3: SYNAPSE COGNITIVO AVANZATO (GO / NO-GO)",
            tag: "ECCITABILITÀ CORTICALE",
            tagClass: "tag-synapse",
            desc: "• <strong>Decision-Making Visuo-Motorio ad Alta Velocità (7'):</strong> Circuiti situazionali con comandi <em>Go / No-Go</em> (stimolo visivo contraddittorio colore-voce): massima eccitabilità corticale.<br>• <strong>Footwork Difensivo Reattivo (6'):</strong> Reattività occhio-mano e occhio-piede rasoterra senza stacco."
          },
          {
            time: "38'–45'",
            title: "B4: DECOMPRESSIONE & PRIMING FINALE",
            tag: "CONSEGNA FRESCHISSIME",
            tagStyle: "color:#6ee7b7;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Decompressione & Centratura Mentale:</strong> Lavoro isometrico decompressivo per il rachide, respirazione diaframmatica guidata.<br>• <strong>Consegna Finale:</strong> Squadra fresca, brillante e pronta per l'amichevole piena del sabato."
          }
        ],
        safety: "🛑 <strong>STRICT FRIDAY JUMP BAN (Venerdì W5):</strong> A 24 ore dall'amichevole ufficiale, divieto assoluto di salti a secco. Gambe leggere e freschezza neuromuscolare."
      }
    },
    'W6': {
      'lun': {
        title: "🟡 Lunedì Pomeriggio",
        subtitle: "· CAMPO 1 (45')",
        meta: "Rigenerazione Attiva, Decelerazioni Brevi & Synapse Fluido · TAPERING PRE-ESORDIO (-50% VOLUME)",
        badges: [
          { text: "Tapering -50%", color: "#fde68a", border: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
          { text: "Brillantezza Pura", color: "#6ee7b7", border: "#10b981", bg: "rgba(16,185,129,0.15)" }
        ],
        blocks: [
          {
            time: "00'–12'",
            title: "B1: MOBILITÀ & DECOMPRESSIONE TOTALE",
            tag: "DE-TENSIONE",
            tagClass: "tag-synapse",
            desc: "• <strong>Rilascio Miofasciale Completo (6'):</strong> Foam roller flessori, polpacci, tensore fascia lata e de-tensione diaframmatica.<br>• <strong>Mobilità Dinamica Anche 90/90 (6'):</strong> Allungamento dinamico catena posteriore, mobilità toracica e spalle."
          },
          {
            time: "12'–25'",
            title: "B2: PRIMI PASSI & DECELERAZIONI LEGGERE A TERRA",
            tag: "DECELERAZIONI LEGGERE",
            tagStyle: "color:#38bdf8;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Allunghi Brillanti sui 4 Metri (6'):</strong> Corsa a ritmo brillante sui 4m con arresto morbido progressivo su linea: 3 serie x 2 (rec. 45\"). Nessuna frenata violenta.<br>• <strong>Footwork Coordinativo Rapido (7'):</strong> Scaletta a terra a frequenza leggera e divertente: 2 serie x 6m."
          },
          {
            time: "25'–38'",
            title: "B3: SYNAPSE FLUIDO DI RUOLO & BALISTICO LEGGERO",
            tag: "SYNAPSE FLUIDO",
            tagClass: "tag-role",
            desc: "• <strong>Footwork Rapido a Secco (7'):</strong> Spostamenti di ruolo senza stacco con compiti visivi semplici e divertenti per mantenere alta la concentrazione senza affaticamento cognitivo.<br>• <strong>Transfer Balistico Leggero (6'):</strong> <em>Medball chest pass</em> leggero contro muro (2 serie x 4 lanci con palla 3 kg, rec. 30\")."
          },
          {
            time: "38'–45'",
            title: "B4: CHIUSURA & CONSEGNA AL COACH",
            tag: "CONSEGNA COACH",
            tagStyle: "color:#6ee7b7;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Mobilità Spalla ed Elastici Leggeri:</strong> Lavoro decompressivo per la cuffia.<br>• <strong>Consegna al Primo Allenatore:</strong> Squadra rigenerata e pronta per la seduta tattica."
          }
        ],
        safety: "🛡️ <strong>SAFETY NET TAPERING (Lunedì W6):</strong> Volume ridotto del 50%, focus solo su sensazioni positive e reattività senza affaticamento."
      },
      'mer': {
        title: "🔴 Mercoledì Pomeriggio",
        subtitle: "· CAMPO 2 (45')",
        meta: "Reattività Pura a Volume Dimezzato (-50%) & Transfer Brillante · VELOCITÀ DI CONDUZIONE",
        badges: [
          { text: "Volume Dimezzato (-50%)", color: "#93c5fd", border: "#38bdf8", bg: "rgba(56,189,248,0.15)" },
          { text: "Zero Fatica Lattacida", color: "#6ee7b7", border: "#10b981", bg: "rgba(16,185,129,0.15)" }
        ],
        blocks: [
          {
            time: "00'–10'",
            title: "B1: ATTIVAZIONE ELASTICA LEGGERA",
            tag: "ELASTICO BRILLANTE",
            tagClass: "tag-synapse",
            desc: "• <strong>Pogo Jumps a Bassa Ampiezza (4'):</strong> 2 serie x 8 balzelli morbidi a terra (Tc <165ms).<br>• <strong>Mobilità Scapolare Dinamica (6'):</strong> Aperture con elastico e rotazioni controllate."
          },
          {
            time: "10'–22'",
            title: "B2: PLIOMETRIA BRILLANTE A BASSO VOLUME (-50%)",
            tag: "PLIO BRILLANTE",
            tagStyle: "color:#38bdf8;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Ostacoli Bassi (15 cm) in Mini-Cluster (5'):</strong> Solo 2 ostacoli: <strong>sole 2 serie x 3 balzi</strong> a massima reattività (rec. 60\").<br>• <strong style=\"color:#d8b4fe\">Saltatrici (Bande/Opposti/Centrali):</strong> 2 serie x 2 rincorse d'attacco o salti a muro massimali ma isolati (qualità pura, zero fatica).<br>• <strong style=\"color:#d8b4fe\">Liberi:</strong> 2 serie x 10\" di footwork difensivo a frequenza rapida."
          },
          {
            time: "22'–38'",
            title: "B3: SYNAPSE REATTIVO PRE-GARA & LANCI MB",
            tag: "CONDUZIONE NEURALE",
            tagClass: "tag-role",
            desc: "• <strong>Reattività Istantanea su Stimoli Luminosi/Colorati (8'):</strong> Primi 2 metri a massima velocità di conduzione neurale (4 ripetizioni x 3\").<br>• <strong>Lancio MB Rotazionale Veloce (8'):</strong> 2 serie x 3+3 con palla medica 3 kg."
          },
          {
            time: "38'–45'",
            title: "B4: PREVENZIONE & CONSEGNA AL COACH",
            tag: "CONSEGNA COACH",
            tagStyle: "color:#6ee7b7;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>De-tensione Tendinea:</strong> Isometrie brevi caviglie al muro.<br>• <strong>Consegna al Coach:</strong> Atlete affamate di spinta per la parte tattica."
          }
        ],
        safety: "🛡️ <strong>SAFETY NET DI BOSQUET (Mercoledì W6):</strong> Massima brillantezza neurale (-50% contatti pliometrici). Nessuna ripetizione lenta né fatica lattacida; durata contenuta per consegnare le atlete pronte per la domenica."
      },
      'ven': {
        title: "🔵 Venerdì Pomeriggio",
        subtitle: "· CAMPO 3 (45')",
        meta: "Priming Neurale 48h da Costa Volpino & ZERO SALTI ASSOLUTI · VIGILIA DI CAMPIONATO",
        badges: [
          { text: "🛑 Strict Jump Ban", color: "#fca5a5", border: "#ef4444", bg: "rgba(239,68,68,0.2)" },
          { text: "48h da Costa Volpino", color: "#fde68a", border: "#f59e0b", bg: "rgba(245,158,11,0.15)" }
        ],
        blocks: [
          {
            time: "00'–12'",
            title: "B1: MOBILITÀ DINAMICA DOLCE SENZA SFORZO",
            tag: "RESET PRE-GARA",
            tagClass: "tag-synapse",
            desc: "• <strong>Mobilità Articolare Dolce (6'):</strong> Anche, caviglie e colonna toracica a corpo libero.<br>• <strong>Elastici Cuffia a Bassa Resistenza (6'):</strong> Allungamento capsulare ed esercizi respiratori."
          },
          {
            time: "12'–25'",
            title: "B2: RAPIDITÀ PODALICA FULMINEA A BASSISSIMO VOLUME",
            tag: "ZERO SALTI",
            tagStyle: "color:#f87171;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Scaletta Rapida a Bassissimo Volume (6'):</strong> 2 serie x 5 metri ad altissima frequenza di piedi (rec. 60\"). Piedi rasoterra.<br>• <strong>Primi Passi Esplosivi (7'):</strong> 2 accelerazioni esplosive sui 2-3 metri con arresto controllato."
          },
          {
            time: "25'–38'",
            title: "B3: SYNAPSE COGNITIVO / GO-NO-GO FINALE",
            tag: "ATTIVAZIONE CORTICALE",
            tagClass: "tag-synapse",
            desc: "• <strong>Test Visuo-Motori a Terra (13'):</strong> Reazione rapida di dita, mani e piedi. Attivazione corticale massima senza affaticamento muscolare periferico."
          },
          {
            time: "38'–45'",
            title: "B4: BRIEFING & TRANSIZIONE FINALE",
            tag: "CENTRATURA PRE-GARA",
            tagStyle: "color:#6ee7b7;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Esercizi Respiratori di Centratura Mentale:</strong> Respirazione quadrata diaframmatica.<br>• <strong>Consegna Finale:</strong> Consegna della squadra al Primo Allenatore per la rifinitura tattica pre-partita.<br>• <strong>🏆 Domenica 04 Ottobre 2026:</strong> 1ª Giornata Campionato Serie A2 (vs Costa Volpino)."
          }
        ],
        safety: "🛑 <strong>STRICT JUMP BAN ASSOLUTO (Venerdì W6):</strong> A 48 ore dall'esordio ufficiale in Serie A2, nessun impatto verticale a terra. Massima prontezza decisionale e reattività."
      }
    },
    'W4': {
      'lun': {
        title: "🟡 Lunedì Pomeriggio",
        subtitle: "· CAMPO 1 (45')",
        meta: "Decelerazione Multi-Angolare & Synapse a Tempo di Reazione Ridotto · ZERO SALTI VERTICALI A SECCO",
        badges: [
          { text: "Ratio 1:3 RSA", color: "#fde68a", border: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
          { text: "No Jump Secco", color: "#6ee7b7", border: "#10b981", bg: "rgba(16,185,129,0.15)" }
        ],
        blocks: [
          {
            time: "00'–10'",
            title: "B1: ATTIVAZIONE & SYNAPSE BASE",
            tag: "ELAV COGNITIVO",
            tagClass: "tag-synapse",
            desc: "• <strong>Mobilità Dinamica Articolare (4'):</strong> Sblocco anca 90/90 a terra, allungamento toracico/spalle, attivazione arco plantare (<em>short foot</em> a piedi scalzi).<br>• <strong>Attivazione Neurale Elastico (3'):</strong> Monster walk laterale e camminata elastica a croce con miniband (2x10 passi).<br>• <strong>SYNAPSE 1 — Stimolo & Arresto Eccentrico (3'):</strong> Corsa fluida in cerchio; su fischio / stimolo visivo a sorpresa: <strong>arresto immediato sul piede esterno</strong> con blocco lombo-pelvico e tenuta isometrica di 2\" (3 serie x 45\", rec. 20\")."
          },
          {
            time: "10'–25'",
            title: "B2: FORZA ESPLOSIVA A TERRA & COD ANGOLARI",
            tag: "FORZA A TERRA",
            tagStyle: "color:#f87171;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Slalom a Zig-Zag a 45° (7'):</strong> Slalom su 4 cinesini a terra: taglio netto d'esterno piede, abbassamento baricentro, spinta interna esplosiva verso il cinesino opposto (4 serie, rec. 45\").<br>• <strong>Navetta 5-10-5 m (Pro Agility Shuttle) (8'):</strong> Sprint 5m ➔ tocco linea con frenata secca monopodalica ➔ sprint 10m opposto ➔ sprint finale 5m: 4 ripetizioni (rec. 60\").<br>• <strong>Densità Metabolica Indiretta:</strong> Azioni massimali di 4-6\" con 20\" di recupero attivo (rapporto 1:3). Zero impatti verticali traumatici."
          },
          {
            time: "25'–38'",
            title: "B3: RUOLO A SECCO + TRANSFER BALISTICO",
            tag: "SPECIFICO RUOLO",
            tagClass: "tag-role",
            desc: "• <strong style=\"color:#d8b4fe\">Centrali (Marcuzzi, Biondi, Caserta):</strong> Spostamento laterale rapido a 2 passi lungo la rete + arresto squadrato e spinta delle mani a muro contro parete (4 serie x 3).<br>• <strong style=\"color:#d8b4fe\">Bande / Opposti (Asonja, Nonnati, Sassolini, Bole, Dodi, Adamczewska):</strong> Ultimi 2 passi di rincorsa d'attacco in decelerazione a terra con <strong>ricezione al volo di palla medica 3 kg</strong> (dissipazione della forza frenante): 4 serie x 3 frenate.<br>• <strong style=\"color:#d8b4fe\">Liberi / Palleggi (Lo Dico, Cicola, Allasia, Grippo):</strong> Reattività rasoterra: scivolamento e tocco a terra su stimolo visivo variabile destra/sinistra (4 serie x 15\").<br>• <strong>Transfer Balistico Upper Body:</strong> <em>Chest pass</em> esplosivo contro muro a due mani con palla medica 3 kg (stance atletica, massima velocità d'uscita): 3 serie x 6 lanci massimali (rec. 30\")."
          },
          {
            time: "38'–45'",
            title: "B4: PREVENZIONE SPALLA & CONSEGNA COACH",
            tag: "CONSEGNA COACH",
            tagStyle: "color:#6ee7b7;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Isometrie Cuffia Rotatori (4'):</strong> Tenute con elastico a parete in 3 posizioni (<code>T</code>, <code>Y</code>, <code>W</code>) — 2 serie da 15\" per posizione.<br>• <strong>Decompressione Rachide (3'):</strong> Decompressione lombare e respirazione diaframmatica guidata a terra.<br>• <strong>Passaggio di Consegne:</strong> Atlete calde, attivate neurologicamente e consegnate al Primo Allenatore per il 6vs6."
          }
        ],
        safety: "🛡️ <strong>SAFETY NET AUTOREGOLAZIONE ECCENTRICA (Lunedì W4):</strong> Se al test Chronojump mattutino un'atleta segna drop >7-8%, il Blocco 2 (COD Angolari 5-10-5) passa da 4 a 2 serie, convertendo il tempo restante in footwork rapido su scaletta a terra senza impatto frenante violento."
      },
      'mer': {
        title: "🔴 Mercoledì Pomeriggio",
        subtitle: "· CAMPO 2 (45')",
        meta: "Pliometria a Contrasto (Ostacoli 15-20 cm) & Reattività di Ruolo · Transfer Simil-Rally",
        badges: [
          { text: "Ostacoli 15-20cm", color: "#93c5fd", border: "#38bdf8", bg: "rgba(56,189,248,0.15)" },
          { text: "Simil-Rally", color: "#6ee7b7", border: "#10b981", bg: "rgba(16,185,129,0.15)" }
        ],
        blocks: [
          {
            time: "00'–10'",
            title: "B1: ATTIVAZIONE ELASTICA & SYNAPSE",
            tag: "ELAV COGNITIVO",
            tagClass: "tag-synapse",
            desc: "• <strong>Attivazione Tendinea Dinamica (4'):</strong> Ankling dinamico a terra + Pogo Jumps monopodalici controllati (2 serie x 6/lato, Tc <180ms).<br>• <strong>SYNAPSE 1 — Scaletta con Decisione Cromatica (6'):</strong> Scaletta rapida in-out con uscita d'accelerazione obbligata a destra o sinistra su colore chiamato in frazione di secondo (4 ripetizioni a testa)."
          },
          {
            time: "10'–25'",
            title: "B2: PLIOMETRIA SU OSTACOLINI & RINCORSE RUOLO",
            tag: "PLIO CONTRASTO",
            tagStyle: "color:#38bdf8;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Ostacolini Bassi (15-20 cm) in Cluster (7'):</strong> 4 ostacoli continui a rimbalzo elastico reattivo: 4 serie x 4 balzi (rec. 60\", Tc <200ms).<br>• <strong style=\"color:#d8b4fe\">Bande/Opposti:</strong> 4 serie x 3 rincorse complete d'attacco con stacco massimale e arrivo bilanciato a 2 piedi.<br>• <strong style=\"color:#d8b4fe\">Centrali:</strong> 4 serie x 3 salti a muro con spostamento laterale rapido a 2 passi lungo la rete.<br>• <strong style=\"color:#d8b4fe\">Liberi:</strong> Sostituzione balzi con navette difensive a specchio ad alta densità (4 serie x 15\")."
          },
          {
            time: "25'–38'",
            title: "B3: LANCI ROTAZIONALI & SIMIL-RALLY INTERMITTENTE",
            tag: "VOLLEY DUAL-TASK",
            tagClass: "tag-role",
            desc: "• <strong>Lanci Rotazionali Medball (3 kg) (6'):</strong> Rotazione esplosiva del bacino prima delle braccia contro muro: 3 serie x 4+4 lanci esplosivi (rec. 30\").<br>• <strong>Simil-Rally Metabolico a Secco (7'):</strong> Circuito a stazioni: scivolamento laterale difensivo + tocco palla a terra + sprint breve. 6 ripetizioni x (5\" lavoro esplosivo / 15\" recupero attivo, rapporto 1:3)."
          },
          {
            time: "38'–45'",
            title: "B4: PREVENZIONE TENDINEA & CONSEGNA",
            tag: "CONSEGNA COACH",
            tagStyle: "color:#6ee7b7;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Scarico Tendineo Soleare:</strong> Allungamento soleo e gemelli al muro + tenuta isometrica caviglia a 90°.<br>• <strong>Consegna al Coach:</strong> Atlete elastiche, attivate per il 6vs6 a tutto campo e l'attacco-muro."
          }
        ],
        safety: "🛡️ <strong>SAFETY NET JUMP BUDGET (Mercoledì W4):</strong> Se nella seduta tecnica pomeridiana il coach programma una dose massiccia di salti (>80 salti tecnici nel 6vs6 o tie-break simulato), la pliometria del Blocco 2 scala automaticamente del 50% (8–12 salti massimali anziché 16–24)."
      },
      'ven': {
        title: "🔵 Venerdì Pomeriggio",
        subtitle: "· CAMPO 3 (45')",
        meta: "Priming Neurale Pre-Match & ZERO SALTI ASSOLUTI · Consegna Freschissime per Amichevole",
        badges: [
          { text: "🛑 Friday Jump Ban", color: "#fca5a5", border: "#ef4444", bg: "rgba(239,68,68,0.2)" },
          { text: "Pre-Gara 100%", color: "#6ee7b7", border: "#10b981", bg: "rgba(16,185,129,0.15)" }
        ],
        blocks: [
          {
            time: "00'–10'",
            title: "B1: MOBILITÀ ATTIVA & SBLOCCO MIOFASCIALE",
            tag: "RESET NERVOSO",
            tagClass: "tag-synapse",
            desc: "• <strong>Mobilità Globale senza Carichi (5'):</strong> Flessori anca in allungamento dinamico, aperture toraciche, monster walk elastica (2x10 passi).<br>• <strong>Sblocco Miofasciale (5'):</strong> Foam rolling leggero polpacci e tensore fascia lata, respirazione diaframmatica a terra."
          },
          {
            time: "10'–25'",
            title: "B2: FREQUENZA PODALICA & ACCELERAZIONI BREVI",
            tag: "ZERO SALTI",
            tagStyle: "color:#f87171;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Scaletta a Frequenza Pura (7'):</strong> 2 piedi dentro ogni spazio ad altissima frequenza senza stacco verticale (In-Out, Icky Shuffle): 3 serie x 6m (rec. 45\").<br>• <strong>Scatti Brevi 3 Metri con Decelerazione Progressiva (8'):</strong> Partenze brucianti da postura difensiva fondamentale con frenata progressiva camminata: 3 serie x 2 partenze (rec. 45\"). <em>Nessun salto né atterraggio d'impatto</em>."
          },
          {
            time: "25'–38'",
            title: "B3: SYNAPSE COGNITIVO AVANZATO (GO/NO-GO)",
            tag: "ECCITABILITÀ CORTICALE",
            tagClass: "tag-synapse",
            desc: "• <strong>Decision-Making Visuo-Motorio ad Alta Velocità (7'):</strong> Esercizi situazionali con comandi <em>Go / No-Go</em> (stimolo visivo contraddittorio colore-voce): massima eccitabilità corticale.<br>• <strong>Reattività Posturale Rasoterra (6'):</strong> Spostamenti rapidi su 3 direzioni con recupero dell'equilibrio dinamico."
          },
          {
            time: "38'–45'",
            title: "B4: DECOMPRESSIONE & PRIMING FINALE",
            tag: "CONSEGNA FRESCHISSIME",
            tagStyle: "color:#6ee7b7;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Decompressione & Centratura Mentale:</strong> Lavoro isometrico decompressivo per il rachide, respirazione diaframmatica guidata.<br>• <strong>Consegna Finale:</strong> Squadra fresca, brillante e pronta per l'amichevole piena del sabato."
          }
        ],
        safety: "🛑 <strong>STRICT FRIDAY JUMP BAN (Venerdì W4):</strong> A 24 ore dall'amichevole ufficiale, divieto assoluto di salti a secco. Gambe leggere e freschezza neuromuscolare."
      }
    },
    'W3': {
      'lun': {
        title: "🟡 Lunedì Pomeriggio",
        subtitle: "· CAMPO 1 (45')",
        meta: "Decelerazione Eccentrica, COD 180° & Synapse Base · Post-Forza Pesante",
        badges: [
          { text: "Frenata 180°", color: "#fde68a", border: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
          { text: "No Jump Secco", color: "#6ee7b7", border: "#10b981", bg: "rgba(16,185,129,0.15)" }
        ],
        blocks: [
          {
            time: "00'–10'",
            title: "B1: ATTIVAZIONE SENSO-MOTORIA & MOBILITÀ",
            tag: "SYNAPSE BASE",
            tagClass: "tag-synapse",
            desc: "• <strong>Mobilità Dinamica Articolare (5'):</strong> Sblocco articolare dinamico (anche 90/90, tibiale posteriore/short foot, caviglie con miniband).<br>• <strong>SYNAPSE 1:</strong> Arresti reattivi su stimolo cromatico/visivo a segnale improvviso (5')."
          },
          {
            time: "10'–25'",
            title: "B2: MECCANICA DI FRENATA & DECELERAZIONE ECCENTRICA",
            tag: "FORZA ECCENTRICA",
            tagStyle: "color:#f87171;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Sprint Brevi 4-6m con Arresto Squadrato (7'):</strong> Decelerazione a 2 tempi su linea in meno di 0.3s (anti-valgismo).<br>• <strong>COD 180° (5-0-5 Modificato Volley) (8'):</strong> Decelerazione violenta e ripartenza esplosiva a baricentro basso: 4 serie x 2 (rec. 60\")."
          },
          {
            time: "25'–38'",
            title: "B3: SITUAZIONALE DI RUOLO + BALISTICO UPPER BODY",
            tag: "SPECIFICO RUOLO",
            tagClass: "tag-role",
            desc: "• <strong>Traslazioni di Ruolo a Secco (7'):</strong> Centrali traslazioni 2 passi a rete, Bande rincorse a 3 passi senza stacco, Liberi navette rasoterra 3x3m.<br>• <strong>Chest Pass Balistico Medball (6'):</strong> Lanci contro muro con palla medica 3 kg (3 serie x 5 lanci esplosivi)."
          },
          {
            time: "38'–45'",
            title: "B4: PREVENZIONE SPALLA & CONSEGNA AL COACH",
            tag: "CONSEGNA COACH",
            tagStyle: "color:#6ee7b7;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Esercizi Protettivi Cuffia Rotatori con Elastico (4'):</strong> Lavoro analitico preventivo.<br>• <strong>Tenute Core Anti-Estensione (3'):</strong> Consegna al Coach per la parte tecnica."
          }
        ],
        safety: "🛡️ <strong>SAFETY NET (Lunedì W3):</strong> Autoregolazione del volume di frenata in base alla risposta neuromuscolare."
      },
      'mer': {
        title: "🔴 Mercoledì Pomeriggio",
        subtitle: "· CAMPO 2 (45')",
        meta: "Stiffness Reattiva, Pliometria di Ruolo & Transfer · Post-Potenza Pesi",
        badges: [
          { text: "Ostacoli Bassi", color: "#93c5fd", border: "#38bdf8", bg: "rgba(56,189,248,0.15)" },
          { text: "Transfer Volley", color: "#6ee7b7", border: "#10b981", bg: "rgba(16,185,129,0.15)" }
        ],
        blocks: [
          {
            time: "00'–10'",
            title: "B1: ATTIVAZIONE ELASTICA & ANKLING",
            tag: "STIFFNESS CAVIGLIA",
            tagClass: "tag-synapse",
            desc: "• <strong>Ankling Drills su Parquet (5'):</strong> Ankling a terra dura + Low Pogo Jumps a piedi pari.<br>• <strong>SYNAPSE 2 (5'):</strong> Footwork coordinativo su scaletta con comando visivo direzionale."
          },
          {
            time: "10'–25'",
            title: "B2: STIFFNESS REATTIVA & PLIOMETRIA RUOLO-SPECIFICA",
            tag: "PLIO RUOLO",
            tagStyle: "color:#38bdf8;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Ostacolini Bassi (15-20 cm) (7'):</strong> Pliometria a rimbalzo reattivo: 4 serie x 4 balzi (rec. 60\").<br>• <strong>Saltatrici (Bande/Opposti/Centrali) (8'):</strong> 4 serie x 3 salti specifici (rincorse d'attacco o block jumps).<br>• <strong>Liberi:</strong> Scivolamenti difensivi reattivi 3x5m con tocco riga (zero salti)."
          },
          {
            time: "25'–38'",
            title: "B3: LANCI BALISTICI MEDBALL & DECISION-MAKING",
            tag: "VOLLEY DUAL-TASK",
            tagClass: "tag-role",
            desc: "• <strong>Lanci Medball Rotazionali (7'):</strong> Rotazione bacino contro muro (3 kg, 3 serie x 4+4).<br>• <strong>SYNAPSE 3 — Transizione Muro-Difesa (6'):</strong> Perturbazione visiva con palla lanciata a sorpresa."
          },
          {
            time: "38'–45'",
            title: "B4: PREVENZIONE TENDINEA & CONSEGNA AL COACH",
            tag: "CONSEGNA COACH",
            tagStyle: "color:#6ee7b7;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Scarico Tendine d'Achille e Rotuleo (4'):</strong> Soleo stretch ed eccentrico al muro.<br>• <strong>Consegna al Coach (3'):</strong> Atlete elastiche e attivate per l'allenamento 6vs6."
          }
        ],
        safety: "🛡️ <strong>SAFETY NET JUMP BUDGET (Mercoledì W3):</strong> Monitoraggio attento del totale contatti al suolo."
      },
      'ven': {
        title: "🔵 Venerdì Pomeriggio",
        subtitle: "· CAMPO 3 (45')",
        meta: "Priming Neurale, Synapse Avanzato (Go/No-Go) & ZERO SALTI",
        badges: [
          { text: "🛑 Friday Jump Ban", color: "#fca5a5", border: "#ef4444", bg: "rgba(239,68,68,0.2)" },
          { text: "Pre-Match Priming", color: "#6ee7b7", border: "#10b981", bg: "rgba(16,185,129,0.15)" }
        ],
        blocks: [
          {
            time: "00'–10'",
            title: "B1: ATTIVAZIONE DINAMICA & RESET MIOFASCIALE",
            tag: "RESET MIOFASCIALE",
            tagClass: "tag-synapse",
            desc: "• <strong>Mobilità Globale (5'):</strong> Mobilità dinamica anche, colonna toracica e catena posteriore.<br>• <strong>Attivazione Glutei (5'):</strong> Monster walk con elastico e sblocco capsulare."
          },
          {
            time: "10'–25'",
            title: "B2: AGILITÀ A TERRA, FREQUENZA RAPIDA & PRIMI PASSI",
            tag: "ZERO SALTI",
            tagStyle: "color:#f87171;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Scaletta a Frequenza Massimale (7'):</strong> In-Out e Icky Shuffle a piedi radenti il parquet: 3 serie x 6m.<br>• <strong>Primi Passi Esplosivi 3-4m (8'):</strong> Accelerazione da stance difensiva con frenata progressiva (zero salti)."
          },
          {
            time: "25'–38'",
            title: "B3: SYNAPSE AVANZATO & DECISION-MAKING AD ALTA VELOCITÀ",
            tag: "GO / NO-GO",
            tagClass: "tag-synapse",
            desc: "• <strong>Circuiti Go / No-Go (7'):</strong> Stimoli contraddittori colore-voce ad alta eccitabilità corticale.<br>• <strong>Footwork Difensivo Rasoterra (6'):</strong> Reattività occhio-mano senza fase di volo."
          },
          {
            time: "38'–45'",
            title: "B4: DECOMPRESSIONE & PRIMING FINALE",
            tag: "SQUADRA FRESCA",
            tagStyle: "color:#6ee7b7;font-weight:800;font-size:0.7rem;",
            desc: "• <strong>Lavoro Decompressivo Isometrico:</strong> Respirazione diaframmatica.<br>• <strong>Consegna Finale:</strong> Squadra freschissima e pronta per l'amichevole del sabato."
          }
        ],
        safety: "🛑 <strong>STRICT FRIDAY JUMP BAN (Venerdì W3):</strong> Zero salti per garantire reattività al massimo il sabato."
      }
    }
  };

  function renderCampoDayHtml(dayKey, dayData, isActive) {
    const activeClass = isActive ? 'active' : '';
    const badgesHtml = (dayData.badges || []).map(function(b) {
      return '<span class="campo-badge" style="border-color:' + b.border + ';color:' + b.color + ';background:' + b.bg + '">' + b.text + '</span>';
    }).join('');

    const blocksHtml = (dayData.blocks || []).map(function(blk, idx) {
      const bNum = 'b' + (idx + 1);
      const tagClassHtml = blk.tagClass ? ('class="' + blk.tagClass + '"') : '';
      const tagStyleHtml = blk.tagStyle ? ('style="' + blk.tagStyle + '"') : '';
      return '\n              <!-- B' + (idx + 1) + ' -->\n              <div class="campo-block ' + bNum + '" contenteditable="true">\n                <div class="block-head">\n                  <div><span class="time-tag">' + blk.time + '</span> <span>' + blk.title + '</span></div>\n                  <span ' + tagClassHtml + ' ' + tagStyleHtml + '>' + blk.tag + '</span>\n                </div>\n                <div class="block-desc">\n                  ' + blk.desc + '\n                </div>\n              </div>';
    }).join('');

    return '\n        <!-- ========================================== -->\n        <!-- GIORNO: ' + dayKey.toUpperCase() + ' -->\n        <!-- ========================================== -->\n        <div class="campo-day-section ' + activeClass + '" id="campo-day-' + dayKey + '">\n          <div class="campo-card">\n            <div class="campo-day-head">\n              <div>\n                <div class="campo-day-title">\n                  <span style="color:#f59e0b">' + dayData.title + '</span>\n                  <span style="font-size:0.8rem;color:#cbd5e1;font-weight:700">' + dayData.subtitle + '</span>\n                </div>\n                <div class="campo-day-meta">' + dayData.meta + '</div>\n              </div>\n              <div style="display:flex;gap:6px;flex-wrap:wrap;">\n                ' + badgesHtml + '\n              </div>\n            </div>\n\n            <!-- Griglia 4 Blocchi -->\n            <div class="campo-blocks-grid">\n              ' + blocksHtml + '\n            </div>\n\n            <!-- Safety Net Banner -->\n            <div class="safety-banner" contenteditable="true">\n              ' + dayData.safety + '\n            </div>\n          </div>\n        </div>';
  }

  function renderCampoWeek(week) {
    const container = document.getElementById('campo-days-container');
    if (!container) return;

    const subEl = document.getElementById('campo-subtitle-text');
    if (subEl && CAMPO_SUBTITLES[week]) {
      subEl.innerText = CAMPO_SUBTITLES[week];
    }

    const sel = document.getElementById('campo-week-select');
    if (sel) sel.value = week;

    const savedEdits = localStorage.getItem('coach_mv_campo_edits_' + week.toLowerCase());
    if (savedEdits) {
      container.innerHTML = savedEdits;
      return;
    }

    const wData = CAMPO_DATA[week] || CAMPO_DATA['W5'] || CAMPO_DATA['W4'];
    if (!wData) return;

    const activeDayBtn = document.querySelector('.btn-c-day.active');
    let currentActiveDay = 'lun';
    if (activeDayBtn) {
      const id = activeDayBtn.id;
      if (id.includes('mer')) currentActiveDay = 'mer';
      else if (id.includes('ven')) currentActiveDay = 'ven';
      else if (id.includes('all')) currentActiveDay = 'all';
    }

    let fullHtml = '';
    ['lun', 'mer', 'ven'].forEach(function(d) {
      if (wData[d]) {
        const isActive = (currentActiveDay === 'all' || currentActiveDay === d);
        fullHtml += renderCampoDayHtml(d, wData[d], isActive);
      }
    });

    container.innerHTML = fullHtml;
  }

  function switchCampoDay(day, btn) {
    document.querySelectorAll('.btn-c-day').forEach(function(b) { b.classList.remove('active'); });
    if (btn) btn.classList.add('active');
    
    const days = ['lun', 'mer', 'ven'];
    if (day === 'all') {
      days.forEach(function(d) {
        const el = document.getElementById('campo-day-' + d);
        if (el) el.classList.add('active');
      });
    } else {
      days.forEach(function(d) {
        const el = document.getElementById('campo-day-' + d);
        if (el) {
          if (d === day) el.classList.add('active');
          else el.classList.remove('active');
        }
      });
    }
  }

  function switchCampoWeek(week) {
    localStorage.setItem('coach_mv_campo_week', week);
    renderCampoWeek(week);
    showCampoToast('📅 Caricata Settimana ' + week + ' (Campo S&C)!');
  }

  function saveCampoEdits() {
    const sel = document.getElementById('campo-week-select');
    const week = (sel ? sel.value : 'W5').toLowerCase();
    const container = document.getElementById('campo-days-container');
    if (!container) return;
    localStorage.setItem('coach_mv_campo_edits_' + week, container.innerHTML);
    showCampoToast('✅ Modifiche ' + week.toUpperCase() + ' salvate nella memoria del browser!');
  }

  function resetCampoEdits() {
    const sel = document.getElementById('campo-week-select');
    const week = (sel ? sel.value : 'W5').toLowerCase();
    if (confirm('Vuoi ripristinare il programma Campo originario di ' + week.toUpperCase() + '?')) {
      localStorage.removeItem('coach_mv_campo_edits_' + week);
      renderCampoWeek(week.toUpperCase());
      showCampoToast('🔄 Settimana ' + week.toUpperCase() + ' ripristinata al programma originale!');
    }
  }

  function showCampoToast(msg) {
    const toast = document.getElementById('campo-toast');
    if (!toast) return;
    toast.innerHTML = msg;
    toast.style.display = 'block';
    setTimeout(function() { toast.style.display = 'none'; }, 3500);
  }

  function copyCampoSummary() {
    const sel = document.getElementById('campo-week-select');
    const week = sel ? sel.value : 'W5';
    let text = '🏐 *MARSALA VOLLEY A2 — SEDUTA CAMPO S&C (' + week + ')*\n';
    const activeDays = document.querySelectorAll('.campo-day-section.active');
    activeDays.forEach(function(sec) {
      const title = sec.querySelector('.campo-day-title')?.innerText.replace(/\s+/g, ' ').trim() || '';
      const meta = sec.querySelector('.campo-day-meta')?.innerText.replace(/\s+/g, ' ').trim() || '';
      text += '\n📌 *' + title + '*\n_' + meta + '_\n';
      
      const blocks = sec.querySelectorAll('.campo-block');
      blocks.forEach(function(b) {
        const bTitle = b.querySelector('.block-head span:not(.time-tag):not(.tag-synapse)')?.innerText.trim() || '';
        const time = b.querySelector('.time-tag')?.innerText.trim() || '';
        const desc = b.querySelector('.block-desc')?.innerText.replace(/\s+/g, ' ').trim() || '';
        text += '▪️ *[' + time + '] ' + bTitle + '*: ' + desc + '\n';
      });
      
      const safety = sec.querySelector('.safety-banner')?.innerText.replace(/\s+/g, ' ').trim() || '';
      if (safety) text += '🛡️ *' + safety + '*\n';
    });

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function() {
        showCampoToast('📋 Schema copiato negli appunti per WhatsApp/Staff!');
      }).catch(function() {
        showCampoToast('⚠️ Impossibile copiare automaticamente, seleziona il testo.');
      });
    } else {
      showCampoToast('📋 Copia non supportata su questo browser.');
    }
  }

  function getAutoCampoWeek() {
    const today = new Date().toISOString().slice(0, 10);
    if (today >= '2026-09-28') return 'W6';
    if (today >= '2026-09-21') return 'W5';
    if (today >= '2026-09-14') return 'W4';
    if (today >= '2026-09-07') return 'W3';
    if (today >= '2026-08-31') return 'W2';
    return 'W1';
  }

  function initCampoSection() {
    const activeWeek = localStorage.getItem('coach_mv_campo_week') || getAutoCampoWeek();
    const sel = document.getElementById('campo-week-select');
    if (sel) sel.value = activeWeek;
    renderCampoWeek(activeWeek);
  }

  // Esponi globalmente
  global.CAMPO_SUBTITLES = CAMPO_SUBTITLES;
  global.CAMPO_DATA = CAMPO_DATA;
  global.renderCampoWeek = renderCampoWeek;
  global.switchCampoDay = switchCampoDay;
  global.switchCampoWeek = switchCampoWeek;
  global.saveCampoEdits = saveCampoEdits;
  global.resetCampoEdits = resetCampoEdits;
  global.showCampoToast = showCampoToast;
  global.copyCampoSummary = copyCampoSummary;
  global.initCampoSection = initCampoSection;

})(typeof window !== 'undefined' ? window : globalThis);
