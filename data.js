// Marsala Volley — Data Hub Ufficiale (Serie A2 2026/27)
// Aggiornato con Modello Ibrido W3-W4: Programma Generale di Squadra + 13 Programmi Individuali

const ROSTER = [
  {
    "id": 1,
    "Link_Prehab": "https://pro.theprehabguys.com/patient-portal/programs/KSCPPDAB",
    "link_prehab": "https://pro.theprehabguys.com/patient-portal/programs/KSCPPDAB",
    "name": "Veronica Allasia",
    "role": "Palleggiatrice",
    "number": "#01",
    "risk_level": "HIGH",
    "clinical_flags": [
      "Instabilita caviglia DX (inversione grave)",
      "Stress tibiale cronico"
    ],
    "focus_areas": [
      "Attivazione tibiale posteriore/Short Foot SX",
      "Recupero rotazione interna anca DX",
      "Mobilita catena posteriore"
    ],
    "folder": "01_Veronica_Allasia",
    "baseline_1rm": {
      "Bench Press": 30,
      "Clean": 40,
      "Lat Machine": 35,
      "Military Press": 24,
      "Row BB": 20,
      "Squat / Step Up": 75,
      "Stacchi Rumeni": 60
    },
    "offseason_sessions": 4,
    "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactive & Floor\"",
    "rischio_clinico": "🔴 ALTO (Instabilità Caviglie + Stress Tibiale Cronico + Deficit Tibiale Posteriore SX + Anca DX Bloccata in IR)",
    "bw": 63.5
  },
  {
    "id": 2,
    "Link_Prehab": "https://pro.theprehabguys.com/patient-portal/programs/IB56ARLW",
    "link_prehab": "https://pro.theprehabguys.com/patient-portal/programs/IB56ARLW",
    "name": "Maria Marcuzzi",
    "role": "Centrale",
    "number": "#02",
    "risk_level": "MEDIUM",
    "clinical_flags": [
      "Spalla DX debole/ipomobilita scapolare",
      "Deficit podalico bilaterale (arco basso)"
    ],
    "focus_areas": [
      "Rinforzo arco plantare/Short Foot",
      "Allungamento flessori anca (ileopsoas/retto femorale DX)",
      "Core stability IAP",
      "Mobilita scapolo-toracica DX"
    ],
    "folder": "02_Maria_Marcuzzi",
    "baseline_1rm": {
      "Bench Press": 40,
      "Clean": 20,
      "Lat Machine": 45,
      "Military Press": 20,
      "Row BB": 50,
      "Squat / Step Up": 80,
      "Stacchi Rumeni": 40
    },
    "offseason_sessions": 13,
    "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactive & Floor\" (Postazione Rack 1)",
    "rischio_clinico": "🟡 MEDIO (Arco Plantare Lasso + Spalla SX Ipomobile + Butt Wink a 100° + Retrazione Flessori Anca DX)",
    "bw": 72.0
  },
  {
    "id": 3,
    "Link_Prehab": "https://pro.theprehabguys.com/patient-portal/programs/7QBW7ZEY",
    "link_prehab": "https://pro.theprehabguys.com/patient-portal/programs/7QBW7ZEY",
    "name": "Victoria Sassolini",
    "role": "Schiacciatrice",
    "number": "#03",
    "risk_level": "MEDIUM",
    "clinical_flags": [
      "Pregressa frattura tibia DX",
      "Rigidita anca SX",
      "Sovraccarico lombare/polpacci"
    ],
    "focus_areas": [
      "Recupero rotazione interna anca DX",
      "Stabilita monopodalica DX",
      "Allungamento flessori anca e mobilita lombosacrale"
    ],
    "folder": "03_Victoria_Sassolini",
    "baseline_1rm": {
      "Bench Press": 50,
      "Clean": 70,
      "Lat Machine": 56,
      "Military Press": 44,
      "Row BB": 60,
      "Squat / Step Up": 110,
      "Stacchi Rumeni": 70
    },
    "offseason_sessions": 14,
    "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 1 con Asonja e Bole)",
    "rischio_clinico": "🔴 ALTO (Esiti Frattura Tibia DX con Mezzi di Sintesi + Ipomobilità Anca DX + Shift Pelvico a DX + Asimmetria Tricipite Surale)",
    "bw": 67.0
  },
  {
    "id": 4,
    "Link_Prehab": "https://pro.theprehabguys.com/patient-portal/programs/NWSHWMVO",
    "link_prehab": "https://pro.theprehabguys.com/patient-portal/programs/NWSHWMVO",
    "name": "Anja Asonja",
    "role": "Opposto",
    "number": "#04",
    "risk_level": "MEDIUM",
    "clinical_flags": [
      "Tendinite bilaterale ginocchia (overuse)",
      "Spalla DX rigida"
    ],
    "focus_areas": [
      "Allungamento flessori anca",
      "Attivazione tibiale posteriore (DX) e gluteo medio DX",
      "Mobilita lombare e sblocco spalla DX"
    ],
    "folder": "04_Anja_Asonja",
    "baseline_1rm": {
      "Bench Press": 50,
      "Clean": 50,
      "Lat Machine": 45,
      "Military Press": 28,
      "Row BB": 43,
      "Squat / Step Up": 80,
      "Stacchi Rumeni": 45
    },
    "offseason_sessions": 15,
    "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 1 con Sassolini e Bole)",
    "rischio_clinico": "🟡/🔴 MEDIO-ALTO (Tendinopatia Rotulea Cronica Overuse + Valgismo Dinamico Ginocchio DX + Spalla d'Attacco Sovraccarico)",
    "bw": 77.0
  },
  {
    "id": 5,
    "Link_Prehab": "https://pro.theprehabguys.com/patient-portal/programs/VDS44TD5",
    "link_prehab": "https://pro.theprehabguys.com/patient-portal/programs/VDS44TD5",
    "name": "Chiara Lo Dico",
    "role": "Libero",
    "number": "#05",
    "risk_level": "MEDIUM",
    "clinical_flags": [
      "Osgood-Schlatter ginocchio DX (cronico)",
      "Valgismo dinamico ginocchio DX in Step Over"
    ],
    "focus_areas": [
      "Sblocco caviglia dorsiflessione",
      "Allungamento retto femorale DX",
      "Mobilita anca DX IR",
      "Attivazione gluteo medio DX",
      "Rinforzo scapolare Libero"
    ],
    "folder": "05_Chiara_Lo_Dico",
    "baseline_1rm": {
      "Bench Press": 40,
      "Lat Machine": 35,
      "Military Press": 25,
      "Row BB": 30,
      "Squat / Step Up": 70,
      "Stacchi Rumeni": 50
    },
    "offseason_sessions": 5,
    "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactive & Floor\"",
    "rischio_clinico": "🟡 MEDIO (Esiti Osgood-Schlatter Ginocchio DX + Caviglia DX Rigida + Regole Specifiche Ruolo Libero)",
    "bw": 62.0
  },
  {
    "id": 6,
    "Link_Prehab": "https://pro.theprehabguys.com/patient-portal/programs/C4RKEAQL",
    "link_prehab": "https://pro.theprehabguys.com/patient-portal/programs/C4RKEAQL",
    "name": "Gaia Biondi",
    "role": "Centrale",
    "number": "#06",
    "risk_level": "MEDIUM",
    "clinical_flags": [
      "Dolore rotuleo attivo ginocchio DX",
      "Fascite plantare attiva piede SX"
    ],
    "focus_areas": [
      "Stabilizzazione podalica bilaterale (inversione calcaneale)",
      "Allungamento quadricipite DX",
      "Mobilita in rotazione esterna anche",
      "Core stability IAP"
    ],
    "folder": "06_Gaia_Biondi",
    "baseline_1rm": {
      "Squat / Step Up": 75,
      "Bench Press": 35,
      "Row BB": 40,
      "Clean": 40
    },
    "offseason_sessions": 0,
    "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactive & Floor\" (Postazione Rack 1 con Marcuzzi)",
    "rischio_clinico": "🔴 ALTO (Dolore Rotuleo DX Attivo + Fascite Plantare SX + Retrazione Severa Quadricipite DX + Rotazione Bacino)",
    "bw": 70.0
  },
  {
    "id": 7,
    "Link_Prehab": "https://pro.theprehabguys.com/patient-portal/programs/UG7YPMPE",
    "link_prehab": "https://pro.theprehabguys.com/patient-portal/programs/UG7YPMPE",
    "name": "Elisa Bole",
    "role": "Schiacciatrice",
    "number": "#07",
    "risk_level": "MEDIUM",
    "clinical_flags": [
      "Tendinopatia quadricipitale ginocchio SX",
      "Instabilita podalica e valgismo DX"
    ],
    "focus_areas": [
      "Stabilizzazione podalica DX (Short Foot)",
      "Controllo valgismo DX",
      "Mobilita lombo-dorsale",
      "Allineamento spinta metatarsale DX"
    ],
    "folder": "07_Elise_Bole",
    "baseline_1rm": {
      "Bench Press": 35,
      "Clean": 60,
      "Lat Machine": 50,
      "Military Press": 40,
      "Row BB": 55,
      "Squat / Step Up": 110,
      "Stacchi Rumeni": 50
    },
    "offseason_sessions": 11,
    "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 1 con Asonja e Sassolini)",
    "rischio_clinico": "🔴 ALTO (Tendinopatia Quadricipitale SX + Instabilità Podalica DX + Valgismo Dinamico Arto DX + Butt Wink a 80°)",
    "bw": 71.0
  },
  {
    "id": 8,
    "Link_Prehab": "https://pro.theprehabguys.com/patient-portal/programs/IIPRMI4A",
    "link_prehab": "https://pro.theprehabguys.com/patient-portal/programs/IIPRMI4A",
    "name": "Federica Nonnati",
    "role": "Opposto",
    "number": "#08",
    "risk_level": "HIGH",
    "clinical_flags": [
      "Spalla DX cronica (dolore 4-5/10)",
      "Retrazione grave retto femorale (flessione ginocchio a 70 deg)",
      "Storia sublussazione astragalo e edema cuboide SX"
    ],
    "focus_areas": [
      "Allungamento profondo catena anteriore",
      "Recupero ROM anca SX",
      "Rieducazione dita e stabilita podalica",
      "Controllo valgismo"
    ],
    "folder": "08_Federica_Nonnati",
    "baseline_1rm": {
      "Squat / Step Up": 70,
      "Bench Press": 35,
      "Row BB": 35,
      "Clean": 35
    },
    "offseason_sessions": 0,
    "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 2 con Dodi, Caserta e Adamczewska)",
    "rischio_clinico": "🔴 ALTO (Catena Anteriore Retratta + Shift Pelvico + Instabilità Podalica Bilaterale)",
    "bw": 77.0
  },
  {
    "id": 9,
    "Link_Prehab": "https://pro.theprehabguys.com/patient-portal/programs/TTGRYSZD",
    "link_prehab": "https://pro.theprehabguys.com/patient-portal/programs/TTGRYSZD",
    "name": "Sara Dodi",
    "role": "Schiacciatrice",
    "number": "#09",
    "risk_level": "HIGH",
    "clinical_flags": [
      "Ricostruzione LCA + menisco SX (2021)",
      "Menisco DX (2024)",
      "Cervicalgia severa con irradiazione"
    ],
    "focus_areas": [
      "Sblocco dorsiflessione caviglia",
      "Stabilita podalica SX e gluteo medio SX",
      "Allungamento retto femorale",
      "Mobilizzazione anca SX ER",
      "Rieducazione posturale spalla SX"
    ],
    "folder": "09_Sara_Dodi",
    "baseline_1rm": {
      "Bench Press": 40,
      "Clean": 40,
      "Lat Machine": 35,
      "Military Press": 10,
      "Row BB": 40,
      "Squat / Step Up": 40,
      "Stacchi Rumeni": 25
    },
    "offseason_sessions": 17,
    "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 2 con Nonnati, Caserta e Adamczewska)",
    "rischio_clinico": "🔴 CRITICO / MASSIMO (Ginocchia Operate Bilaterali + Cervicalgia Irradiata + Shift Pelvico)",
    "bw": 66.0
  },
  {
    "id": 11,
    "Link_Prehab": "https://pro.theprehabguys.com/patient-portal/programs/CAGFYEG4",
    "link_prehab": "https://pro.theprehabguys.com/patient-portal/programs/CAGFYEG4",
    "name": "Luna Cicola",
    "role": "Libero",
    "number": "#11",
    "risk_level": "MEDIUM",
    "clinical_flags": [
      "Deficit severo rotazione esterna anche",
      "Valgismo dinamico bilaterale"
    ],
    "focus_areas": [
      "Sblocco rotazione esterna anche bilaterale",
      "Stabilita podalica DX",
      "Allungamento quadricipiti",
      "Mobilita overhead spalla SX",
      "Rinforzo scapolare Libero"
    ],
    "folder": "11_Luna_Cicola",
    "baseline_1rm": {
      "Squat / Step Up": 65,
      "Bench Press": 30,
      "Row BB": 30,
      "Clean": 30
    },
    "offseason_sessions": 0,
    "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactivity & Movement Quality\" (Postazione Libero / Campo Libero)",
    "rischio_clinico": "🟡 MEDIO (Deficit Severo Extrarotazione d'Anca + Valgismo Dinamico + Retropiede DX Evertito + Specificità Ruolo Libero)",
    "bw": 60.0
  },
  {
    "id": 12,
    "Link_Prehab": "https://pro.theprehabguys.com/patient-portal/programs/CBQEN45V",
    "link_prehab": "https://pro.theprehabguys.com/patient-portal/programs/CBQEN45V",
    "name": "Erin Grippo",
    "role": "Palleggiatrice",
    "number": "#12",
    "risk_level": "LOW",
    "clinical_flags": [
      "Squat limitato a 90 deg per dorsiflessione caviglia ridotta",
      "Spalle anteposte bilateralmente"
    ],
    "focus_areas": [
      "Sblocco dorsiflessione caviglia bilaterale",
      "Mobilita toracica estensione foam roller",
      "Rieducazione spinta metatarsale DX",
      "Allungamento catena posteriore lombare"
    ],
    "folder": "12_Erin_Grippo",
    "baseline_1rm": {
      "Bench Press": 51,
      "Clean": 40,
      "Military Press": 35,
      "Row BB": 57,
      "Squat / Step Up": 117,
      "Stacchi Rumeni": 83
    },
    "offseason_sessions": 13,
    "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactive & Floor\"",
    "rischio_clinico": "🟡 MEDIO (Dorsiflessione Caviglie Bloccata + Butt Wink a 90° + Spinta Piede DX Mediale + Ipermobilità Lombare di Compenso)",
    "bw": 63.5
  },
  {
    "id": 13,
    "Link_Prehab": "https://pro.theprehabguys.com/patient-portal/programs/WJBUL7HQ",
    "link_prehab": "https://pro.theprehabguys.com/patient-portal/programs/WJBUL7HQ",
    "name": "Giulia Caserta",
    "role": "Centrale",
    "number": "#13",
    "risk_level": "LOW",
    "clinical_flags": [
      "Perdita controllo lombo-pelvico squat profondo >110 deg (butt wink)",
      "Spalla SX anteposta"
    ],
    "focus_areas": [
      "Core stability IAP",
      "Attivazione scapolare DX",
      "Mobilita spalla SX ed estensione toracica",
      "Riequilibrio appoggio podalico SX"
    ],
    "folder": "13_Giulia_Caserta",
    "baseline_1rm": {
      "Bench Press": 30,
      "Clean": 44,
      "Lat Machine": 48,
      "Military Press": 22,
      "Row BB": 38,
      "Squat / Step Up": 84,
      "Stacchi Rumeni": 84
    },
    "offseason_sessions": 13,
    "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 2 con Nonnati, Dodi e Adamczewska)",
    "rischio_clinico": "🟡 MEDIO (Perdita Controllo Lombo-Pelvico oltre 110° + Shift Pelvico Asimmetrico + Deficit Retrazione Scapola DX + Anteposizione Spalla SX)",
    "bw": 68.0
  },
  {
    "id": 14,
    "Link_Prehab": "https://pro.theprehabguys.com/patient-portal/programs/SCRW653I",
    "link_prehab": "https://pro.theprehabguys.com/patient-portal/programs/SCRW653I",
    "name": "Nelly Adamczewska",
    "role": "Schiacciatrice",
    "number": "#14",
    "risk_level": "MEDIUM",
    "clinical_flags": [
      "Lassita legamentosa generalizzata",
      "Cisti ganglionare polso DX",
      "Jumper knee pregresso"
    ],
    "focus_areas": [
      "Stabilita attiva piede (Short Foot, tibiale post. SX)",
      "Controllo pelvico/core (Side Plank)",
      "Coordinamento scapolo-omerale DX",
      "Programma dedicato Strength/Power Michal"
    ],
    "folder": "10_Nelly_Adamczewska",
    "baseline_1rm": {
      "Squat / Step Up": 95,
      "Bench Press": 55,
      "Row BB": 55,
      "Clean": 60
    },
    "offseason_sessions": 0,
    "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 2 con Nonnati, Caserta e Dodi)",
    "rischio_clinico": "🟡/🔴 MEDIO-ALTO (Lassità Legamentosa + Disritmia Scapolare DX + Valgismo SX + Cisti Polso DX)",
    "bw": 70.0
  }
];

const WEEKS_DATA = {
  "W3": {
    "titolo": "Settimana 3 (W3) — SSP 1: Forza & Controllo Eccentrico",
    "sedute": [
      {
        "Numero_Seduta": "W3-LunP",
        "Nome_Seduta": "Seduta 1 — Spinta Orizzontale & Trazione Verticale",
        "Settimana": "W3",
        "Giorno": "Lunedì",
        "Fase": "Mattina",
        "Luogo": "Palestra",
        "Durata_min": "55",
        "Note": "Box Squat 3010 (Enode 0.60-0.65 m/s) + Floor Press DB + Lat Machine neutra"
      },
      {
        "Numero_Seduta": "W3-MerV",
        "Nome_Seduta": "Seduta 2 — Spinta Verticale & Trazione Orizzontale",
        "Settimana": "W3",
        "Giorno": "Mercoledì",
        "Fase": "Mattina",
        "Luogo": "Palestra",
        "Durata_min": "52",
        "Note": "Clean/Powerbag + Half Squat 20X0 + Landmine/Push Press + Single DB Row"
      },
      {
        "Numero_Seduta": "W3-VenR",
        "Nome_Seduta": "Seduta 3 — Cerniera Posteriore & Richiamo Pre-Gara",
        "Settimana": "W3",
        "Giorno": "Venerdì",
        "Fase": "Mattina",
        "Luogo": "Palestra",
        "Durata_min": "40",
        "Note": "RDL bilanciere 2x4 @ buffer 3 (RPE 6-7) + Pulley basso · STRICT FRIDAY JUMP BAN"
      }
    ],
    "programma_squadra": {
      "manifesto": {
        "vbt_w3": "0.60 – 0.65 m/s",
        "vbt_w4": "0.65 – 0.75 m/s",
        "vbt_rule": "Regola del -10% Velocity Loss Threshold: stop immediato alla serie se la velocità cala di oltre il 10% dalla prima rip.",
        "friday_jump_ban": "A meno di 30 ore dall'amichevole del sabato, la Seduta 3 del venerdì vieta tassativamente qualsiasi salto, balzo o impatto pliometrico.",
        "turni": {
          "turno_1": {
            "orario": "08:30 – 09:25",
            "nome": "Speed, Reactive & Floor (6 Atlete)",
            "atlete": [
              "Veronica Allasia",
              "Erin Grippo",
              "Chiara Lo Dico",
              "Luna Cicola",
              "Maria Marcuzzi",
              "Gaia Biondi"
            ]
          },
          "turno_2": {
            "orario": "09:30 – 10:25",
            "nome": "Heavy, Power & Jumpers (7 Atlete)",
            "atlete": [
              "Anja Asonja",
              "Federica Nonnati",
              "Victoria Sassolini",
              "Elisa Bole",
              "Sara Dodi",
              "Nelly Adamczewska",
              "Giulia Caserta"
            ]
          }
        }
      },
      "gym_sessions": [
        {
          "id": "S1",
          "giorno": "Lunedì",
          "fase": "Mattina",
          "nome": "Seduta 1 — Spinta Orizzontale & Trazione Verticale",
          "durata": "52-55 min",
          "focus": "Floor Press DB ↔ Lat Machine neutra + Box Squat con sensore Enode",
          "esercizi": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Test Chronojump CMJ (2 salti massimali)",
              "Set x Reps": "2 salti",
              "Tempo": "Max",
              "Note Tecniche": "Registrazione altezza cm e readiness"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. 90/90 Hip Mobility & De-tensione Anca",
              "Set x Reps": "2 x 6 /lato",
              "Tempo": "`2012`",
              "Note Tecniche": "Mobilità rotatori senza compenso lombare"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Short Foot & Banded Ankle Inversion",
              "Set x Reps": "2 x 10 /lato",
              "Tempo": "`2012`",
              "Note Tecniche": "Attivazione tibiale posteriore"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Box Squat (Parallelo)",
              "Set x Reps": "4 x 5-6 (W3) / 4x4 (W4) / 4x3 (W5)",
              "Tempo": "`3010` (W3) / `20X0` (W4-W5)",
              "Note Tecniche": "Monitoraggio Enode VBT (stop al -10% velocity loss)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Floor Chest Press con Manubri",
              "Set x Reps": "4 x 5-6",
              "Tempo": "`3010` (W3) / `20X0` (W4)",
              "Note Tecniche": "Gomiti a 45°, stop a terra fisiologico salva-cuffia"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Tempo": "`3010` (W3) / `2011` (W4)",
              "Note Tecniche": "Spalle depresse, trazione al petto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat bulgaro con manubri",
              "Set x Reps": "3 x 5+5",
              "Tempo": "`2010`",
              "Note Tecniche": "Discesa controllata, ginocchio in asse"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6-8",
              "Tempo": "`2011`",
              "Note Tecniche": "Presa neutra, retrazione scapolare completa"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico (fitball o KB)",
              "Set x Reps": "3 x 6+6",
              "Tempo": "`2020`",
              "Note Tecniche": "Lombare incollata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass esplosivo contro muro",
              "Set x Reps": "3 x 5",
              "Tempo": "`X`",
              "Note Tecniche": "Palla 3-4 kg, massima intenzione balistica d'uscita"
            }
          ]
        },
        {
          "id": "S2",
          "giorno": "Mercoledì",
          "fase": "Mattina",
          "nome": "Seduta 2 — Spinta Verticale & Trazione Orizzontale",
          "durata": "50-52 min",
          "focus": "Clean/Powerbag + Half Squat Dinamico + Landmine/Push Press ↔ Single DB Row",
          "esercizi": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Spiderman Lunge con apertura toracica",
              "Set x Reps": "2 x 6 /lato",
              "Tempo": "`2011`",
              "Note Tecniche": "Allungamento flessori anca e mobilità torace"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. Prone YTWL / Banded Face Pull",
              "Set x Reps": "2 x 8 per lettera",
              "Tempo": "`1012`",
              "Note Tecniche": "Fissatori della scapola e cuffia dei rotatori"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Calf Raise su step con sosta 2\" in alto",
              "Set x Reps": "2 x 10 /lato",
              "Tempo": "`2012`",
              "Note Tecniche": "Controllo retropiede e asse del calcagno"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1D. Profilazione Chronojump RSI/RFD (Drop Jump 30cm o 5-Hop Test)",
              "Set x Reps": "2 x 3-4 salti",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Misurazione Reactive Strength Index (target >1.80)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Clean to Split OPPURE Powerbag Clean",
              "Set x Reps": "4 x 3+3 (o 4x4)",
              "Tempo": "`X`",
              "Note Tecniche": "Powerbag per *Dodi, Sassolini, Biondi, Adamczewska*"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Half Squat Dinamico al Box",
              "Set x Reps": "4 x 4-5",
              "Tempo": "`20X0` (W3) / `10X0` (W4-W5)",
              "Note Tecniche": "Risalita esplosiva senza staccare le piante dei piedi"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Half Kneeling Landmine Press (o KB Press)",
              "Set x Reps": "4 x 5+5",
              "Tempo": "`2010` (W3) / `10X0` (W4)",
              "Note Tecniche": "Piano scapolare a 30°, tutela collo e spalla"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 5-6 /lato",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto parallelo, gomito aderente"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "3 x 5+5",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura, bacino squadrato"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo con extrarotazione",
              "Set x Reps": "3 x 10",
              "Tempo": "`2012`",
              "Note Tecniche": "Cavo alto, pollici ruotati indietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 6+6",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 4+4",
              "Tempo": "`X`",
              "Note Tecniche": "Palla 3-4 kg, trasferimento forza bacino-tronco con rilascio massimale"
            }
          ]
        },
        {
          "id": "S3",
          "giorno": "Venerdì",
          "fase": "Mattina",
          "nome": "Seduta 3 — Cerniera Posteriore Sub-Massimale & Decompressione",
          "durata": "38-40 min",
          "focus": "RDL Bilanciere 2x4 @ buffer 3 (RPE 6-7) + Pulley decompressivo · ZERO SALTI",
          "esercizi": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Foam Roller Miofasciale Flessori e Ischio",
              "Set x Reps": "2 x 45\" /distretto",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio trigger point muscolatura contratta"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. Banded Monster Walk laterale",
              "Set x Reps": "2 x 10 passi/lato",
              "Tempo": "`1011`",
              "Note Tecniche": "Ginocchia aperte allineate col 2° dito"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "2 x 20\"",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale del rachide lombare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). No affaticamento ischiocrurali pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Pulley Basso al Cavo Presa Parallela",
              "Set x Reps": "3 x 6-8",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione decompressiva al petto, schiena ferma"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6-8",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" fermo al top"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Dumbbell Pullover leggero su panca",
              "Set x Reps": "3 x 8-10",
              "Tempo": "`3010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3C. Standing Calf Raise bilaterale su rialzo",
              "Set x Reps": "3 x 10",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima escursione eccentrica per il tendine d'Achille"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Hollow Body Hold (o Tuck Hollow)",
              "Set x Reps": "3 x 20\"",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4B. Farmer Walk monolaterale con manubrio",
              "Set x Reps": "3 x 15m /lato",
              "Tempo": "Camminata",
              "Note Tecniche": "Anti-flessione laterale"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe leggere e freschezza neurale per il sabato."
            }
          ]
        }
      ],
      "court_sessions": [
        {
          "id": "C1",
          "giorno": "Lunedì",
          "fase": "Pomeriggio (45 min)",
          "nome": "Campo 1 — Decelerazione Eccentrica, COD 180° & Synapse Base",
          "dettagli": {
            "titolo": "Lunedì Pomeriggio — 45 min",
            "contenuto": [
              "Decelerazione Eccentrica, COD 180° & Synapse Base\n*Seguito alla seduta pesi di forza pesante; stimolo neurale ad alta forza frenante a terra senza salti verticali intensivi.*\n1. **Attivazione Senso-Motoria & Mobilità (10 min):**\n   - Sblocco articolare dinamico (anche 90/90, tibiale posteriore/short foot, caviglie con miniband).\n   - Esercizio *SYNAPSE 1*: Arresti reattivi su stimolo cromatico/visivo a segnale improvviso.\n2. **Meccanica di Frenata & Decelerazione Eccentrica a Terra (15 min):**\n   - Sprint brevi 4-6m con arresto squadrato a 2 tempi su linea in meno di 0.3s (anti-valgismo).\n   - COD 180° (5-0-5 modificato volley): decelerazione violenta e ripartenza esplosiva a baricentro basso.\n   - *Densità Metabolica Indiretta:* 5\" lavoro massimale / 15-20\" recupero attivo camminando (RSA).\n3. **Situazionale di Ruolo + Synapse Integrato (13 min):**\n   - *Centrali:* Traslazioni laterali veloci a 2 passi con arresto squadrato bilaterale.\n   - *Schiacciatrici/Opposti:* Decelerazione su rincorsa diagonale a 3 passi senza stacco.\n   - *Liberi/Palleggi:* Navette brevi rasoterra 3x3m con recupero posizione difensiva.\n   - Chest pass balistico contro muro con palla medica 3 kg (3 serie x 5 lanci).\n4. **Prevenzione Finale & Transizione al Coach (7 min):**\n   - Esercizi protettivi rotatori spalla con elastico e tenute core anti-estensione a terra. Consegna al Coach.",
              "---"
            ]
          }
        },
        {
          "id": "C2",
          "giorno": "Mercoledì",
          "fase": "Pomeriggio (45 min)",
          "nome": "Campo 2 — Stiffness Reattiva, Pliometria di Ruolo & Transfer",
          "dettagli": {
            "titolo": "Mercoledì Pomeriggio — 45 min",
            "contenuto": [
              "Stiffness Reattiva, Pliometria di Ruolo & Transfer\n*Finestra principale di transfer elastico post-seduta pesi di potenza e profilazione RSI su pedana Chronojump.*\n1. **Attivazione Elastica & Ankling (10 min):**\n   - Ankling drills a terra dura + Low Pogo Jumps a piedi pari (stiffness caviglia).\n   - Esercizio *SYNAPSE 2*: Footwork coordinativo su scaletta con comando visivo direzionale.\n2. **Stiffness Reattiva & Pliometria Ruolo-Specifica (15 min):**\n   - Pliometria su 4 ostacolini bassi (15-20 cm) a rimbalzo reattivo (4 serie x 4 balzi, rec. 60\").\n   - *Saltatrici (Bande/Opposti/Centrali):* 4 serie x 3 salti specifici (rincorse d'attacco o block jumps a rete).\n   - *Liberi (Lo Dico, Cicola):* Sostituzione dei salti con scivolamenti difensivi reattivi 3x5m con tocco riga.\n3. **Lanci Balistici Medball & Decision-Making (13 min):**\n   - Lanci Medball rotazionali contro muro (3 kg, 3 serie x 4+4) con massima esplosività bacino-tronco.\n   - Esercizio *SYNAPSE 3*: Transizione rapida muro-difesa con perturbazione visiva (palla lanciata).\n4. **Prevenzione Tendinea & Consegna al Coach (7 min):**\n   - Eccentrico/isometrico per tendine d'Achille e rotuleo (soleo stretch e sosta al muro). Consegna al Coach.",
              "---"
            ]
          }
        },
        {
          "id": "C3",
          "giorno": "Venerdì",
          "fase": "Pomeriggio (45 min)",
          "nome": "Campo 3 — Priming Neurale, Synapse Avanzato & ZERO SALTI",
          "dettagli": {
            "titolo": "Venerdì Pomeriggio — 45 min",
            "contenuto": [
              "Priming Neurale, Synapse Avanzato (Go/No-Go) & ZERO SALTI\n*🛑 STRICT FRIDAY JUMP BAN: Nessun impatto pliometrico né salti verticali pre-amichevole.*\n1. **Attivazione Dinamica & Reset Miofasciale (10 min):**\n   - Mobilità globale anche, colonna toracica e catena posteriore; monster walk con elastico.\n2. **Agilità a Terra, Frequenza Rapida & Primi Passi (15 min):**\n   - Scaletta (*speed ladder*) a frequenza massimale (In-Out, Icky Shuffle) a piedi radenti il parquet.\n   - Primi passi esplosivi sui 3-4 metri con frenata elastica progressiva (NO salti).\n3. **SYNAPSE Avanzato & Decision-Making ad Alta Velocità (13 min):**\n   - Circuiti situazionali con comandi *Go / No-Go* (stimolo contraddittorio colore-voce): massima eccitabilità corticale.\n   - Footwork difensivo reattivo e reattività occhio-mano/occhio-piede senza fase di volo.\n4. **Decompressione & Priming Finale (7 min):**\n   - Lavoro isometrico decompressivo, respirazione diaframmatica. Squadra freschissima per il sabato."
            ]
          }
        }
      ]
    },
    "atleti": {
      "1": {
        "id": 1,
        "name": "Veronica Allasia",
        "number": "#01",
        "role": "Palleggiatrice",
        "peso": "63.5 kg",
        "rischio": "🔴 ALTO (Instabilità Caviglie + Stress Tibiale Cronico + Deficit Tibiale Posteriore SX + Anca DX Bloccata in IR)",
        "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactive & Floor\"",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Instabilità di Caviglia & Sindrome da Stress Tibiale (Shin Splints):**\n   - Esiti di severa distorsione in inversione alla caviglia destra con lassità legamentosa cronica; distorsione pregressa a sinistra.\n   - All'inizio di ogni stagione su superfici rigide si riacutizza la periostite tibiale da sovraccarico della membrana interossea e debolezza muscolare profonda.\n2. **Deficit Selettivo del Tibiale Posteriore & Crollo Mediale SX:**\n   - In carico monopodalico (SLS) e nello Step Over, il retropiede sinistro cede in **eversione/pronazione incontrollata**, con conseguente valgismo dinamico al ginocchio sinistro.\n3. **Blocco Meccanico dell'Anca Destra in Intrarotazione & Shift Pelvico:**\n   - Rotazione interna dell'anca destra bloccata a 30° con tendenza fissa all'extrarotazione. Nello squat profondo il bacino compensa eseguendo un evidente *lateral shift* verso sinistra, caricando asimmetricamente il piede sinistro.\n4. **Cingolo Scapolare & Specificità da Palleggiatrice:**\n   - Spalla sinistra elevata e anteposta; necessità assoluta di stabilità e forza nei flessori/estensori dei polsi e delle dita per il palleggio di precisione in sospensione.\n\n---",
        "ban": "* ⛔ **BAN Squat Libero Profondo a Terra:**  \n  ➔ **SOSTITUZIONE:** **Box Squat parallelo a 90° (`3010` / `20X0`)**: il box rigido calibra l'inversione di moto, impedisce lo shift pelvico a sinistra e toglie tensione alla periostite tibiale.\n* ⛔ **BAN Drop Jump Alti (>25 cm):** I salti con atterraggio ad alto impatto infiammano il periostio tibiale.  \n  ➔ **SOSTITUZIONE:** **Low Pogo Jumps elastici a terra e Drop Landing da 15-20 cm su Chronojump** con controllo dell'inversione calcaneale.\n* 🛡️ **PREHAB SPECIFICO (Tibiale Posteriore, Anca DX & Polsi):**\n  - Short Foot attivo su superficie rigida + Banded Ankle Inversion (con elastico per il tibiale posteriore sinistro).\n  - Mobilizzazione anca destra 90/90 in intrarotazione attiva (recupero dell'escursione fisiologica).\n  - Wrist Roller e Dumbbell Wrist Curls per avambracci e polsi.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO IMPATTI PLIOMETRICI**. L'RDL è calibrato a sole 2 serie da 4 reps sub-massimali per preservare le gambe per il test match del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "",
              "Note Tecniche": "Registrazione baseline altezza e simmetria"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. 90/90 Hip Mobility (Focus IR Anca DX)",
              "Set x Reps": "2 x 8 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Ginocchio a terra, intrarotazione attiva pura"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Short Foot & Banded Ankle Inversion SX",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Attivazione arco plantare e tibiale post. SX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Parallelo a 90°)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "50 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Enode VBT target: `0.60-0.65 m/s` (stop al -10%)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "10+10 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, testa e spalle stabili a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "32.5 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Busto eretto, depressione scapolare attiva"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio in asse con il 2° dito, caviglia solida"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse e addotte in chiusura"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione attiva, lombare incollata al pavimento"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Wrist Roller / Dumbbell Wrist Flexion-Extension",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "4 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo flessori/estensori polso per il palleggio"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica SX",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Allungamento flessori anca e mobilità torace"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Prone YTWL a terra",
              "Set x Reps": "2 x 8 per lettera",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Attivazione trapezio inferiore e deltoidi post."
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Heel Raise con pallina tra i talloni su gradino",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Inversione forzata, spinta su 1° e 5° metatarso"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto controllato)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "27.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione dinamica, ricezione solida"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (90°)",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "37.5 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva senza stacco piedi"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+10 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Traiettoria diagonale a 30°, tutela spalla SX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomito aderente, retrazione scapolare completa"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Short foot attivo, bacino orizzontale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Gomiti alti, pollici ruotati indietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in ginocchio con cavo/elastico",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, bacino bloccato"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubri bilaterali",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "14+14 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Presa isometrica forte (avambracci e dita)"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Polpacci, Tibiale Anteriore e Glutei",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio miofasciale tricipite surale e periostio"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Mantenere costante la larghezza dei piedi"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "35 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena ferma e compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "35 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" contrazione glutei"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Single-Leg Calf Iso-Hold",
              "Set x Reps": "2 x 15\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Tenuta solida su avampiede"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Tuck Hold",
              "Set x Reps": "3 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch su panca orizzontale",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il tronco"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza pre-amichevole."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Chronojump CMJ (2 salti) + 90/90 Hip IR (2x6/lato) + Short foot & banded ankle (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Chronojump CMJ (2 salti) + 90/90 Hip IR (2x6/lato) + Short foot & banded ankle (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "55 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Enode VBT: `0.65-0.70 m/s`",
                  "Raw": "**Box Squat Dinamico (90°):** 4 x 4 @ 55 kg (\"4\") | Tempo `20X0` | Enode VBT: `0.65-0.70 m/s`."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "12+12 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 12+12 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "35 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 35 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "10+10 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro: 3 x 5+5 @ 10+10 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "12+12 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 12+12 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass contro muro: 3 x 5 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman reach (2x5/lato) + Prone YTWL (2x6) + Heel raise pallina talloni (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman reach (2x5/lato) + Prone YTWL (2x6) + Heel raise pallina talloni (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "30 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 30 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "42.5 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (90°):** 4 x 4 @ 42.5 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+12.5 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +12.5 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "14 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 14 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 15 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller polpacci/ischio (2x40\") + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller polpacci/ischio (2x40\") + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "50 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Carico controllato a buffer 3",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 50 kg (\"5\") | Tempo `3010` (Carico controllato a buffer 3)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Neutra",
                  "Set_Reps": "3 x 5",
                  "Carico": "37.5 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Neutra:** 3 x 5 @ 37.5 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "40 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 40 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +15 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Wrist Roller",
                  "Set_Reps": "3 x 12",
                  "Carico": "5 kg.",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Wrist Roller: 3 x 12 @ 5 kg."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Side Plank con tocco piede",
                  "Set_Reps": "3 x 6 /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tocco piede: 3 x 6 /lato."
                },
                {
                  "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
                  "Set_Reps": "Zero salti.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "**🛑 STRICT FRIDAY JUMP BAN:** Zero salti."
                }
              ]
            }
          ]
        }
      },
      "2": {
        "id": 2,
        "name": "Maria Marcuzzi",
        "number": "#02",
        "role": "Centrale",
        "peso": "72.0 kg",
        "rischio": "🟡 MEDIO (Arco Plantare Lasso + Spalla SX Ipomobile + Butt Wink a 100° + Retrazione Flessori Anca DX)",
        "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactive & Floor\" (Postazione Rack 1)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Perdita del Controllo Lombo-Pelvico nello Squat & Flessori Anca DX:**\n   - La flessione del ginocchio è buona, ma l'accosciata libera scatena un *butt wink* a circa 100° di flessione (sopra il parallelo) causato da forte retrazione dell'ileopsoas e del retto femorale destro.\n2. **Ipomobilità Cingolo Scapolare Sinistro:**\n   - La spalla sinistra si presenta ipomobile in flessione e abduzione attiva sopra i 120° (difficoltà ad aprire l'angolo del braccio a muro). La Floor Chest Press a terra protegge la capsula gleno-omerale.\n3. **Lassità della Volta Plantare & Retropiede:**\n   - Arco plantare lasso con tendenza al collasso mediale sotto carico massimale. Necessita di attivazione con *Short Foot* e stimolo dell'avampiede.\n4. **Specificità del Centrale:**\n   - Richiesta elevatissima di stiffness dei polpacci e stabilità sui cambi di direzione laterali per gli spostamenti a muro a 2 passi e attacchi di primo tempo in sospensione rapida.\n\n---",
        "ban": "* ⛔ **BAN Squat Libero Profondo a Terra (<90°):**  \n  ➔ **SOSTITUZIONE:** **Box Squat rigido a 90° (`3010` / `20X0`)**: impedisce il crollo lombare e protegge il rachide mantenendo l'intenzione di spinta verticale con Enode VBT.\n* 🛡️ **PREHAB SPECIFICO SPALLA SX & FLESSORI ANCA DX:**\n  - De-tensione miofasciale ileopsoas DX con Couch stretch.\n  - Mobilizzazione spalla sinistra in elevazione su panca/roller e retrazioni scapolari a parete.\n  - Short Foot attivo per rinforzare la volta plantare.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO STRESS PLIOMETRICO**. RDL calibrato a 2 sole serie da 4 reps a buffer 3 (RPE 6-7) per proteggere gli ischiocrurali a 24h dall'amichevole del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "",
              "Note Tecniche": "Registrazione baseline altezza e reattività"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. Couch Stretch Flessori Anca DX",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Statico",
              "Note Tecniche": "Allungamento ileopsoas senza inarcare lombare"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Short Foot & Banded Foot Doming",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Sollevamento arco plantare mediale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Parallelo a 90°)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "60 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Enode VBT: `0.60-0.65 m/s` (stop al -10%)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "14+14 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, tutela spalla sinistra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Depressione scapolare, trazione al petto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat bulgaro con manubri",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Bacino in asse, ginocchio stabile"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "12+12 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomiti larghi, attivazione romboidi"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball schiacciata",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione attiva, lombare incollata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Standing Calf Raise su rialzo con disco",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione per il tendine d'Achille"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica SX",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Apertura torace e mobilità cingolo sinistro"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Scapular Wall Slide a contatto continuo",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Spalla SX guidata verso l'alto senza alzare trapezio"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Calf raise monopodalico con sosta in alto",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Mantenimento asse calcagno-tendine"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto bilanciere)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "32.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione dinamica, arrivo reattivo"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (90°)",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica violenta senza staccare piedi"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Traiettoria diagonale a 30°, zero stress spalla SX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "16 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomito stretto, retrazione scapolare completa"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Cerniera d'anca profonda, ischiocrurali tesi"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con corda",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Cavo alto, pollici verso dietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, tronco immobile"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubri pesanti",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "18+18 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Scapole depresse e addotte, postura eretta"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Polpacci e Glutei",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio miofasciale catena posteriore"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Mantenere costante la tensione alle ginocchia"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena ferma e compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "40 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" fermo al top"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su gradino bilaterale",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Discesa eccentrica profonda per il tendine"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a braccia lungo i fianchi",
              "Set x Reps": "3 x 25\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch con fitball tra le caviglie",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "Fitball",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il torace"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza pre-amichevole."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Chronojump CMJ (2 salti) + Couch stretch (2x40\") + Short foot (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Chronojump CMJ (2 salti) + Couch stretch (2x40\") + Short foot (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "65 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Enode VBT: `0.65-0.70 m/s`",
                  "Raw": "**Box Squat Dinamico (90°):** 4 x 4 @ 65 kg (\"4\") | Tempo `20X0` | Enode VBT: `0.65-0.70 m/s`."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "16+16 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 16+16 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12+12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro: 3 x 5+5 @ 12+12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "14+14 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 14+14 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass contro muro: 3 x 5 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman reach (2x5/lato) + Scapular wall slides (2x8) + Calf raise monopodalico (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman reach (2x5/lato) + Scapular wall slides (2x8) + Calf raise monopodalico (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "35 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 35 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (90°):** 4 x 4 @ 50 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "18 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 18 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller polpacci/ischio (2x40\") + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller polpacci/ischio (2x40\") + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "62.5 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 62.5 kg (\"5\") | Tempo `3010` (Buffer 3)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Neutra",
                  "Set_Reps": "3 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Neutra:** 3 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "45 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 45 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +20 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Dumbbell Pullover su panca",
                  "Set_Reps": "3 x 8",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover su panca: 3 x 8 @ 14 kg | Tempo `2010`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Side Plank con tenuta isometrica",
                  "Set_Reps": "3 x 20\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tenuta isometrica: 3 x 20\" /lato."
                },
                {
                  "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
                  "Set_Reps": "Zero salti.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "**🛑 STRICT FRIDAY JUMP BAN:** Zero salti."
                }
              ]
            }
          ]
        }
      },
      "3": {
        "id": 3,
        "name": "Victoria Sassolini",
        "number": "#03",
        "role": "Schiacciatrice",
        "peso": "67.0 kg",
        "rischio": "🔴 ALTO (Esiti Frattura Tibia DX con Mezzi di Sintesi + Ipomobilità Anca DX + Shift Pelvico a DX + Asimmetria Tricipite Surale)",
        "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 1 con Asonja e Bole)",
        "triage": "### Criticità Funzionali & Pregresso Ortopedico Rilevato\n1. **Esiti di Frattura Spiroide Tibia Destra (Placca e Viti):**\n   - Intervento chirurgico con mezzi di sintesi ancora presenti. La tibia destra presenta una ridotta tolleranza ai microtraumi da impatto assiale violento e un deficit di stiffness elastica rispetto all'arto sinistro sano.\n2. **Deficit Meccanico d'Anca Destra & Lateral Shift nello Squat:**\n   - La rotazione interna dell'anca destra è limitata (rigidità capsulare post-traumatica).\n   - Nello squat libero si evidenzia un netto **lateral shift del bacino verso destra**, caricando in modo disfunzionale la gamba operata e torcendo il rachide lombare.\n3. **Rigidità Asimmetrica del Tendine d'Achille & Tricipite Surale:**\n   - Il polpaccio destro risulta retratto e ipertonico a protezione della cicatrice ossea, con una dorsiflessione della caviglia che blocca l'accosciata a circa 85°.\n4. **Specificità Schiacciatrice:**\n   - Atleta con carichi di salto e colpi d'attacco elevati: necessita di proteggere la spalla destra con la Floor Press e di dissipare gli atterraggi simmetricamente.\n\n---",
        "ban": "* ⛔ **BAN Clean to Split con Bilanciere:** L'atterraggio in split violento monopodalico può provocare impatti di taglio sulla tibia destra operata.  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Powerbag Clean to Chest (`X`)**: la ricezione della sacca zavorrata al petto ammortizza l'impatto, le maniglie parallele mantengono i polsi in sicurezza e l'atterraggio è in **semi-squat parallelo simmetrico**, costringendo entrambi gli arti a distribuire il carico al 50%.\n* ⛔ **BAN Squat Libero a Terra senza Riferimento:**  \n  ➔ **SOSTITUZIONE:** **Box Squat rigido a 90° con Miniband sopra le ginocchia (`3010` / `20X0`)**: l'elastico impedisce il cedimento mediale e il box corregge lo shift pelvico a destra, monitorato dal sensore Enode VBT.\n* 🛡️ **PREHAB SPECIFICO (Tibia DX, Anca DX & Caviglia):**\n  - Allungamento miofasciale profondo del tricipite surale destro su cuneo/gradino (`3010`).\n  - Mobilizzazione 90/90 anca destra in intrarotazione.\n  - Attivazione del core anti-rotazione (Pallof press) e anti-estensione (Deadbug).\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI, ZERO BALZI PLIOMETRICI**. L'RDL è ridotto a sole 2 serie da 4 reps sub-massimali a buffer 3 per non affaticare gli ischiocrurali prima del test match del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "",
              "Note Tecniche": "Registrazione baseline altezza e simmetria"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. 90/90 Hip Mobility (Focus IR Anca DX)",
              "Set x Reps": "2 x 8 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Mobilità rotatori senza compenso lombare"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Polpaccio DX Eccentrico Lento su gradino",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3012`",
              "Note Tecniche": "Allungamento profondo tendine d'Achille DX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Parallelo 90°) con Miniband",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "60 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Enode VBT: `0.60-0.65 m/s` (stop al -10%)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "14+14 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, stop a terra senza perdere tensione"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Depressione scapolare, trazione al petto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat con manubri (supporto al muro)",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Arto DX: ginocchio perpendicolare al 2° dito"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "12+12 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Presa neutra, retrazione scapolare completa"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione costante, lombare incollata a terra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Standing Calf Raise su gradino con disco",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Spinta su 1° e 5° metatarso, discesa controllata"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Mobilità anche + estensione toracica"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Prone Trap-3 Raise su panca inclinata",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "Manubri 3+3 kg",
              "Tempo": "`1012`",
              "Note Tecniche": "Ritmo scapolare schiacciatrice, braccia a Y"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot su pedana rigida (piede DX)",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Mantenimento arco mediale e dita distese"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Powerbag Clean to Chest (Sub. Split Clean)",
              "Set x Reps": "4 x 4",
              "Carico (kg/RPE)": "Bag 15-20 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione dinamica, ricezione parallela al petto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (90°) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva senza stacco piedi"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Traiettoria su piano scapolare, salva spalla d'attacco"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "16 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto parallelo, gomito stretto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Perno su arto DX con ginocchio sbloccato a 15°"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Cavo alto, pollici verso dietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, bacino squadrato"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubri pesanti",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "18+18 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Spalle depresse, presa salda"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Polpaccio DX e Ischiocrurali",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio trigger point muscolatura contratta"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Ginocchia aperte allineate col 2° dito"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra con piedi a sfioro",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena ferma e compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "40 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" fermo al top"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Single-Leg Calf Iso-Hold arto DX",
              "Set x Reps": "2 x 15\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Tenuta solida su avampiede destro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a gambe tese",
              "Set x Reps": "3 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch su panca inclinata",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il torace"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza pre-amichevole."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Chronojump CMJ (2 salti) + 90/90 IR DX (2x6) + Polpaccio eccentrico DX (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Chronojump CMJ (2 salti) + 90/90 IR DX (2x6) + Polpaccio eccentrico DX (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "65 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Enode VBT: `0.65-0.70 m/s`",
                  "Raw": "**Box Squat Dinamico (90°):** 4 x 4 @ 65 kg (\"4\") | Tempo `20X0` | Enode VBT: `0.65-0.70 m/s`."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "16+16 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 16+16 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat con manubri",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12+12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat con manubri: 3 x 5+5 @ 12+12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "14+14 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 14+14 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass contro muro: 3 x 5 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman reach (2x5/lato) + Trap-3 raise (2x8) + Short foot DX (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman reach (2x5/lato) + Trap-3 raise (2x8) + Short foot DX (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Powerbag Clean to Chest",
                  "Set_Reps": "4 x 4",
                  "Carico": "Bag 20 kg",
                  "Tempo": "X",
                  "Note": "Esplosione e arrivo parallelo",
                  "Raw": "**Powerbag Clean to Chest:** 4 x 4 @ Bag 20 kg | Tempo `X` (Esplosione e arrivo parallelo)."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (90°):** 4 x 4 @ 50 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "18 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 18 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller polpacci/ischio (2x40\") + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller polpacci/ischio (2x40\") + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "62.5 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 62.5 kg (\"5\") | Tempo `3010` (Buffer 3)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Neutra",
                  "Set_Reps": "3 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Neutra:** 3 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "45 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 45 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +20 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Dumbbell Pullover su panca",
                  "Set_Reps": "3 x 8",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover su panca: 3 x 8 @ 14 kg | Tempo `2010`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Side Plank con tenuta",
                  "Set_Reps": "3 x 20\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tenuta: 3 x 20\" /lato."
                },
                {
                  "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
                  "Set_Reps": "Zero salti.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "**🛑 STRICT FRIDAY JUMP BAN:** Zero salti."
                }
              ]
            }
          ]
        }
      },
      "4": {
        "id": 4,
        "name": "Anja Asonja",
        "number": "#04",
        "role": "Opposto",
        "peso": "77.0 kg",
        "rischio": "🟡/🔴 MEDIO-ALTO (Tendinopatia Rotulea Cronica Overuse + Valgismo Dinamico Ginocchio DX + Spalla d'Attacco Sovraccarico)",
        "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 1 con Sassolini e Bole)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Tendinopatia Rotulea Cronica Bilaterale (Overuse Salto):**\n   - Pregressa sintomatologia dolorosa all'apice inferiore della rotula (trattata in precedenza con Tecar).\n   - L'ipertono del quadricipite e le forze di taglio in inversione di moto rapida scatenano micro-infiammazioni tendinee.\n2. **Deficit Podalico Bilaterale & Valgismo Dinamico Arto DX:**\n   - Crollo mediale in eversione dell'arco plantare causato da ipovalidità del tibiale posteriore.\n   - Nello Step Over e negli atterraggi, il ginocchio destro collassa medialmente in valgismo dinamico per ritardo di reclutamento del gluteo medio destro.\n3. **Squat Test & Asimmetria d'Appoggio:**\n   - Shift a destra in fase concentrica dello squat; forte retrazione dei flessori d'anca (ileopsoas bilaterale, peggiore a sinistra).\n4. **Cingolo Scapolare & Spalla d'Attacco:**\n   - Rigidità della spalla destra a fine seduta e deficit di mobilità sopra i 120° in abduzione. La Floor Chest Press a terra protegge la cuffia azzerando l'anteriorizzazione dell'omero.\n\n---",
        "ban": "* ⛔ **BAN Squat Libero Profondo con Rimbalzo:**  \n  ➔ **SOSTITUZIONE:** **Box Squat rigido a 90° con Miniband sopra le ginocchia (`3010` / `20X0`)**: il box rigido elimina l'inversione elastica brusca al polo inferiore della rotula; l'elastico costringe il gluteo medio a spingere in fuori contrastando il valgismo del ginocchio destro.\n* 🛡️ **PREHAB SPECIFICO ANALGESICO (Protocollo Cook/Rio Tendine Rotuleo):**\n  - **Spanish Squat Isometrico con elastico pesante a 90° (3-5 serie × 30-45\" di tenuta)** prima di qualsiasi carico: induce analgesia corticale immediata e stimola la sintesi di collagene.\n  - Clamshell con miniband per attivazione gluteo medio destro.\n  - Allungamento miofasciale ileopsoas e quadricipite su foam roller.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO IMPATTI PLIOMETRICI**. L'RDL è ridotto a sole 2 serie da 4 reps sub-massimali a buffer 3 (RPE 6-7) per proteggere i tendini rotulei e gli ischiocrurali a 24h dall'amichevole del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "",
              "Note Tecniche": "Registrazione baseline altezza e reattività"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. Spanish Squat Isometrico con elastico",
              "Set x Reps": "3 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Analgesia rotulea pura, tibie verticali a 90°"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Clamshell con Miniband (fianco SX)",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1012`",
              "Note Tecniche": "Attivazione gluteo medio destro anti-valgo"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Parallelo 90°) con Miniband",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "65 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Enode VBT: `0.60-0.65 m/s` (stop al -10%)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "16+16 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, stop a terra salva-cuffia spalla DX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "42.5 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Depressione scapolare attiva, trazione al petto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat bulgaro (piede anteriore rialzato 5cm)",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio DX perfettamente allineato al 2° dito"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "14+14 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Presa neutra, retrazione scapolare completa"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione costante, lombare incollata a terra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Standing Calf Raise su gradino con disco",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Controllo retropiede, discesa lenta 2\""
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con allungamento ileopsoas",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Mobilità bacino e flessori anca"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Extrarotazioni spalla DX al cavo con spalla a 0°",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Cavo 5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Gomito stretto al fianco, rinforzo sottospinato"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot & Banded Ankle Inversion",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo arco plantare mediale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (o Powerbag Clean)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "35 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Se fastidio rotuleo: Powerbag Clean to Chest"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (90°) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "50 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva senza rimbalzo"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Spinta su piano scapolare a 30°, tutela spalla DX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "16 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto orizzontale, retrazione scapolare"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Cerniera d'anca profonda, ischiocrurali tesi"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Gomiti alti, pollici ruotati indietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, tronco immobile"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubri pesanti",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "18+18 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Scapole depresse, camminata solida"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Quadricipite DX e Tendine Rotuleo",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "De-tensione apparato estensore ginocchio"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Spinta costante verso l'esterno"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra con piedi a sfioro",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "60 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero fatica neurale pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "45 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" contrazione glutei"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "14 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise bilaterale su rialzo",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima escursione eccentrica per il tendine d'Achille"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a gambe tese",
              "Set x Reps": "3 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch su panca orizzontale",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il tronco"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza pre-amichevole."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Chronojump CMJ (2 salti) + Spanish Squat isometrico (3x45\") + Clamshell elastico DX (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Chronojump CMJ (2 salti) + Spanish Squat isometrico (3x45\") + Clamshell elastico DX (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "70 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Enode VBT: `0.65-0.70 m/s`",
                  "Raw": "**Box Squat Dinamico (90°):** 4 x 4 @ 70 kg (\"4\") | Tempo `20X0` | Enode VBT: `0.65-0.70 m/s`."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "18+18 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 18+18 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12+12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro: 3 x 5+5 @ 12+12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "16+16 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 16+16 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass contro muro: 3 x 5 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman reach (2x5/lato) + Extrarotazione spalla DX (2x8) + Short foot (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman reach (2x5/lato) + Extrarotazione spalla DX (2x8) + Short foot (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position (o Powerbag Clean)",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "37.5 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position (o Powerbag Clean):** 4 x 3+3 @ 37.5 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "55 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (90°):** 4 x 4 @ 55 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "18 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 18 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "67.5 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 67.5 kg (\"5\") | Tempo `3010` (Buffer 3)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Neutra",
                  "Set_Reps": "3 x 5",
                  "Carico": "50 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Neutra:** 3 x 5 @ 50 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "50 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 50 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +20 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Dumbbell Pullover su panca",
                  "Set_Reps": "3 x 8",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover su panca: 3 x 8 @ 14 kg | Tempo `2010`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Side Plank con tenuta",
                  "Set_Reps": "3 x 20\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tenuta: 3 x 20\" /lato."
                },
                {
                  "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
                  "Set_Reps": "Zero salti.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "**🛑 STRICT FRIDAY JUMP BAN:** Zero salti."
                }
              ]
            }
          ]
        }
      },
      "5": {
        "id": 5,
        "name": "Chiara Lo Dico",
        "number": "#05",
        "role": "Libero",
        "peso": "62.0 kg",
        "rischio": "🟡 MEDIO (Esiti Osgood-Schlatter Ginocchio DX + Caviglia DX Rigida + Regole Specifiche Ruolo Libero)",
        "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactive & Floor\"",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Esiti di Sindrome di Osgood-Schlatter (Apofisite Tibiale DX):**\n   - Tuberosità tibiale anteriore destra prominente con sensibilità a carichi flessori acuti a ginocchio iperflesso (>100°).\n   - Tendenza al sovraccarico rotuleo negli affondi profondi.\n2. **Deficit Dorsiflessione Caviglia Destra & Meccanica d'Accosciata:**\n   - La caviglia destra presenta una mobilità sagittale ridotta rispetto alla sinistra. Nello squat libero, l'accosciata profonda scatena un compenso pelvico per mancato scivolamento della tibia.\n3. **Specificità Assoluta Ruolo Libero:**\n   - Nel ruolo di libero non vi è alcuna necessità di eseguire distensioni orizzontali pesanti con bilanciere (panca piana) né rematori pesanti con bilanciere, che aumentano la rigidità scapolare e peggiorano l'angolo di ricezione/difesa a terra.\n   - È invece vitale la rapidità d'arresto a baricentro basso, la stabilità del core sui piani trasversi e la mobilità reattiva delle caviglie.\n\n---",
        "ban": "* ⛔ **BAN ASSOLUTO Panca Piana con Bilanciere & Rematore Pesante Bilanciere (Regola Specifica Libero):**  \n  ➔ **SOSTITUZIONE SPECIFICA:**\n  - **Prone Y-Raise con manubri leggeri (`2012`)**: attiva i fissatori inferiori della scapola senza comprimere le spalle.\n  - **Single-Arm Cable Row al cavo medio (`2011`)**: trazione orizzontale funzionale asimmetrica senza carico assiale sulla colonna.\n  - **Low Medball Slam a terra (`X`)**: potenza esplosiva della cerniera d'anca e del core senza impatti.\n* ⚖️ **ADATTAMENTO SQUAT:** **Box Squat calibrato all'80% di profondità con Miniband sopra le ginocchia (`3010` / `20X0`)**: protegge l'apofisi tibiale destra, non sovraccarica la rotula e garantisce la corretta stiffness muscolare per la difesa.\n* 🛡️ **PREHAB SPECIFICO (Caviglia DX & Fissatori Scapolari):**\n  - Knee-to-Wall con fascia elastica per la caviglia destra (mobilizzazione dell'astragalo).\n  - Foam roller su quadricipite e rotula destra.\n  - Scapular Wall Slide a contatto continuo.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO IMPATTI**. L'RDL è ridotto a 2 serie da 4 reps sub-massimali a buffer 3 per non appesantire le gambe prima dell'amichevole del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "",
              "Note Tecniche": "Registrazione baseline altezza e reattività"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. Knee-to-Wall Ankle Mobility DX con elastico",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Band",
              "Tempo": "`2012`",
              "Note Tecniche": "Ginocchio avanzato oltre il 2° dito"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Scapular Wall Slide a contatto continuo",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Depressione e retrazione scapolare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (@80% ROM) con Miniband",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Enode VBT: `0.60-0.65 m/s` (stop al -10%)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Prone Y-Raise su panca inclinata 30° (Sub. Panca)",
              "Set x Reps": "4 x 10",
              "Carico (kg/RPE)": "3+3 kg (\"6\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Solo trapezio inferiore e deltoidi post."
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "32.5 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Busto stabile, discesa 3\", depressione attiva"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Step Down eccentrico controllato da box 15cm",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "BW + Man. 4+4 kg",
              "Tempo": "`3010`",
              "Note Tecniche": "Discesa controllata 3\", ginocchio DX in asse"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Arm Cable Row al cavo (Sub. Row BB)",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "17.5 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomito stretto, rotazione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione attiva, lombare incollata a terra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Standing Calf Raise su rialzo",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+10 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione per il tendine d'Achille"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Mobilità flessori anca e cassa toracica"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Quadricipite e Rotula DX",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "De-tensione apparato estensore ginocchio"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot su pedana rigida",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Mantenimento volta plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto controllato)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "25 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Split moderato, baricentro basso in ricezione"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (@80%) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "37.5 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva, ginocchia salde"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+10 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Spinta su piano scapolare a 30°, core compatto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Chest-Supported Dumbbell Row (Presa Neutra)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "12+12 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Petto su panca 30°, retrazione scapolare"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con Kettlebell",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Cerniera d'anca pura, bacino parallelo"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Banded Face Pull con doppia extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Gomiti alti, pollici ruotati indietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press da mezzo-squat difensivo",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Postura da ricezione volley, anti-rotazione"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Low Medball Slam a terra (ginocchia semiflesse)",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "Medball 4 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Schiacciata a terra senza flettere la schiena"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Ischiocrurali e Glutei",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio miofasciale catena posteriore"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Ginocchia in spinta esterna costante"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso Presa Larga a Gomiti Aperti",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "30 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione orizzontale decompressiva, petto fiero"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge a terra bilaterale con bilanciere",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "35 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" contrazione glutei"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover leggero su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "8 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su gradino",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+10 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Allineamento asse caviglia-tallone"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Tuck Hold",
              "Set x Reps": "3 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Tenuta addominale compatta"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk monolaterale con manubrio (Suitcase)",
              "Set x Reps": "3 x 15m /lato",
              "Carico (kg/RPE)": "14 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Postura eretta, spalle simmetriche"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza reattiva pre-gara."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Chronojump CMJ (2 salti) + Knee-to-wall caviglia DX (2x8) + Scapular wall slides (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Chronojump CMJ (2 salti) + Knee-to-wall caviglia DX (2x8) + Scapular wall slides (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (@80% ROM)",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Enode VBT: `0.65-0.70 m/s`",
                  "Raw": "**Box Squat Dinamico (@80% ROM):** 4 x 4 @ 50 kg (\"4\") | Tempo `20X0` | Enode VBT: `0.65-0.70 m/s`."
                },
                {
                  "Esercizio": "Prone Y-Raise Manubri",
                  "Set_Reps": "4 x 8",
                  "Carico": "4+4 kg (\"5\")",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "**Prone Y-Raise Manubri:** 4 x 8 @ 4+4 kg (\"5\") | Tempo `2012`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "35 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 35 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Step Down da box con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "6 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Step Down da box con KB: 3 x 5+5 @ 6 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Single-Arm Cable Row",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "20 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Single-Arm Cable Row: 3 x 6+6 @ 20 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Low Medball Slam a terra",
                  "Set_Reps": "3 x 4",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Low Medball Slam a terra: 3 x 4 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "MFR quadricipite DX (2x40\") + Clamshell elastico (2x8) + Calf raise monopodalico (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "MFR quadricipite DX (2x40\") + Clamshell elastico (2x8) + Calf raise monopodalico (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "27.5 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 27.5 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (@80%)",
                  "Set_Reps": "4 x 4",
                  "Carico": "42.5 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (@80%):** 4 x 4 @ 42.5 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+12.5 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +12.5 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Chest Supported DB Row",
                  "Set_Reps": "4 x 5",
                  "Carico": "14+14 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Chest Supported DB Row:** 4 x 5 @ 14+14 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 15 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico da mezzo-squat con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico da mezzo-squat con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw basso contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw basso contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman stretch (2x5/lato) + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman stretch (2x5/lato) + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "50 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 50 kg (\"5\") | Tempo `3010` (Buffer 3)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Larga",
                  "Set_Reps": "3 x 5",
                  "Carico": "35 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Larga:** 3 x 5 @ 35 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "40 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 40 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +15 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold compatto",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold compatto: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Suitcase Carry con KB",
                  "Set_Reps": "3 x 15m /lato",
                  "Carico": "16 kg.",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Suitcase Carry con KB: 3 x 15m /lato @ 16 kg."
                },
                {
                  "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
                  "Set_Reps": "Zero salti.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "**🛑 STRICT FRIDAY JUMP BAN:** Zero salti."
                }
              ]
            }
          ]
        }
      },
      "6": {
        "id": 6,
        "name": "Gaia Biondi",
        "number": "#06",
        "role": "Centrale",
        "peso": "70.0 kg",
        "rischio": "🔴 ALTO (Dolore Rotuleo DX Attivo + Fascite Plantare SX + Retrazione Severa Quadricipite DX + Rotazione Bacino)",
        "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactive & Floor\" (Postazione Rack 1 con Marcuzzi)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Dolore Rotuleo Destro Attivo (Tendinopatia Reattiva):**\n   - Sintomatologia dolorosa acuta all'apice inferiore della rotula destra, esacerbata dai rimbalzi veloci e dalle discese eccentriche senza supporto.\n2. **Fascite Plantare Sinistra & Crollo Mediale:**\n   - Infiammazione e rigidità della fascia plantare sinistra con mancata ammortizzazione podalica al suolo, che costringe a scaricare le forze in diagonale sull'arto destro.\n3. **Retrazione Marcata del Quadricipite / Retto Femorale DX:**\n   - La flessione del ginocchio da prono è ridotta e scatena un compenso pelvico in antiversione forzata già a 90°. Nello squat libero, la discesa asimmetrica induce una rotazione del bacino a destra con perdita del controllo lombare (*butt wink* precoce).\n4. **Specificità del Centrale:**\n   - Elevatissimo volume di salti a muro e primo tempo: necessita di eliminare il dolore rotuleo prima di saltare e di conservare la capacità di spostamento laterale rapido.\n\n---",
        "ban": "* ⛔ **BAN Clean to Split con Bilanciere:**  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Powerbag Clean to Chest (`X`)**: l'incastro al petto in semi-squat parallelo simmetrico azzera lo shock monolaterale sul tendine rotuleo destro dolente e distribuisce l'impatto.\n* ⛔ **BAN Squat Libero senza Box:**  \n  ➔ **SOSTITUZIONE:** **Box Squat rigido a 90° con Miniband sopra le ginocchia (`3010` / `20X0`)**: il box rigido toglie l'inversione di moto elastica sulla rotula, guidato dal monitoraggio Enode VBT.\n* 🛡️ **PREHAB SPECIFICO ANALGESICO & PODALICO:**\n  - **Spanish Squat Isometrico con elastico spesso ancorato (3-4 serie × 45\" a 90°)** prima di qualsiasi carico: analgesia immediata del tendine rotuleo destro.\n  - Rilascio miofasciale con pallina da lacrosse sotto la fascia plantare sinistra.\n  - Couch Stretch e foam roller per il quadricipite/retto femorale destro.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO PLIOMETRIA**. L'RDL è calibrato a 2 sole serie da 4 reps a buffer 3 (RPE 6-7) per proteggere i tendini e gli ischiocrurali a 24h dal test match del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "",
              "Note Tecniche": "Registrazione baseline altezza e reattività"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. Spanish Squat Isometrico con elastico",
              "Set x Reps": "3 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Analgesia rotula DX, tibie verticali a 90°"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. MFR Fascia Plantare SX con pallina lacrosse",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Pressione lenta",
              "Note Tecniche": "Rilascio trigger point arco mediale sinistro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Parallelo 90°) con Miniband",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Enode VBT: `0.60-0.65 m/s` (stop al -10%)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "14+14 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, stop a terra senza forzare spalle"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Busto compatto, depressione scapolare attiva"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat isometrico a 90° (focus arto DX)",
              "Set x Reps": "3 x 15\"+15\"",
              "Carico (kg/RPE)": "BW + Man. 6+6 kg",
              "Tempo": "Isometrico",
              "Note Tecniche": "Tenuta solida senza carico sul tendine rotuleo"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "12+12 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole addotte e depresse in chiusura"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione costante, lombare incollata a terra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Standing Calf Raise bilaterale su gradino",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Escursione profonda, fermo 2\" in alto"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con allungamento ileopsoas",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Mobilità flessori anca e cassa toracica"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Couch Stretch profondo Quadricipite DX",
              "Set x Reps": "2 x 40\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Statico",
              "Note Tecniche": "De-tensione retto femorale destro retratto"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot & Banded Ankle Inversion",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Attivazione arco plantare sinistro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Powerbag Clean to Chest (Sub. Split Clean)",
              "Set x Reps": "4 x 4",
              "Carico (kg/RPE)": "Bag 15-20 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione dinamica, ricezione parallela al petto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (90°) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva senza rimbalzo"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Traiettoria su piano scapolare a 30°"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "16 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto orizzontale, gomito stretto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Cerniera d'anca profonda, ischiocrurali tesi"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Cavo alto, pollici ruotati indietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, tronco immobile"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubri pesanti",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "18+18 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Scapole depresse, postura eretta"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Quadricipite DX e Tendine Rotuleo",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "De-tensione apparato estensore ginocchio"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Ginocchia in spinta esterna costante"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero fatica neurale pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena ferma e compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "40 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" contrazione glutei"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su rialzo bilaterale",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima escursione eccentrica per il tendine d'Achille"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Tuck Hold",
              "Set x Reps": "3 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch con fitball tra le caviglie",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "Fitball",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il tronco"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza pre-amichevole."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Chronojump CMJ (2 salti) + Spanish Squat isometrico (3x45\") + MFR fascia plantare SX (2x40\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Chronojump CMJ (2 salti) + Spanish Squat isometrico (3x45\") + MFR fascia plantare SX (2x40\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "60 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Enode VBT: `0.65-0.70 m/s`",
                  "Raw": "**Box Squat Dinamico (90°):** 4 x 4 @ 60 kg (\"4\") | Tempo `20X0` | Enode VBT: `0.65-0.70 m/s`."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "16+16 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 16+16 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat isometrico a 90°",
                  "Set_Reps": "3 x 15\"+15\"",
                  "Carico": "manubri 8+8 kg.",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Split Squat isometrico a 90°: 3 x 15\"+15\" @ manubri 8+8 kg."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "14+14 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 14+14 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass contro muro: 3 x 5 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Couch stretch DX (2x40\") + Scapular wall slides (2x8) + Short foot SX (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Couch stretch DX (2x40\") + Scapular wall slides (2x8) + Short foot SX (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Powerbag Clean to Chest",
                  "Set_Reps": "4 x 4",
                  "Carico": "Bag 20 kg",
                  "Tempo": "X",
                  "Note": "Esplosione d'anca e arrivo compatto",
                  "Raw": "**Powerbag Clean to Chest:** 4 x 4 @ Bag 20 kg | Tempo `X` (Esplosione d'anca e arrivo compatto)."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (90°):** 4 x 4 @ 50 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "18 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 18 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "62.5 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 62.5 kg (\"5\") | Tempo `3010` (Buffer 3)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Neutra",
                  "Set_Reps": "3 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Neutra:** 3 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "45 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 45 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +20 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Dumbbell Pullover su panca",
                  "Set_Reps": "3 x 8",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover su panca: 3 x 8 @ 14 kg | Tempo `2010`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Side Plank con tenuta",
                  "Set_Reps": "3 x 20\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tenuta: 3 x 20\" /lato."
                },
                {
                  "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
                  "Set_Reps": "Zero salti.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "**🛑 STRICT FRIDAY JUMP BAN:** Zero salti."
                }
              ]
            }
          ]
        }
      },
      "7": {
        "id": 7,
        "name": "Elisa Bole",
        "number": "#07",
        "role": "Schiacciatrice",
        "peso": "71.0 kg",
        "rischio": "🔴 ALTO (Tendinopatia Quadricipitale SX + Instabilità Podalica DX + Valgismo Dinamico Arto DX + Butt Wink a 80°)",
        "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 1 con Asonja e Sassolini)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Tendinopatia Quadricipitale Sinistra (Inserzione Sovrarotulea):**\n   - Dolore e tensione alla giunzione miotendinea del retto femorale sinistro sopra il polo superiore della rotula, esacerbato da carichi eccentrici profondi senza battuta.\n2. **Instabilità Podalica Destra & Valgismo Dinamico Arto DX:**\n   - Retropiede destro con mancata inversione calcaneale in SLS; crollo dell'arco mediale che scatena un cedimento marcato in **valgismo dinamico al ginocchio destro** nello Step Over.\n3. **Squat Test & Butt Wink Precoce a 80°:**\n   - L'accosciata libera si blocca a circa 80° al ginocchio (sopra il parallelo) con immediata perdita delle curve fisiologiche lombari (*butt wink* severo) per retrazione della catena anteriore.\n4. **Specificità Schiacciatrice:**\n   - Atleta titolare d'attacco: necessita di proteggere la spalla con la Floor Chest Press e di stabilizzare il ginocchio destro per evitare distorsioni o sovraccarichi patellari negli stacchi e atterraggi da posto 4.\n\n---",
        "ban": "* ⛔ **BAN Squat Libero Profondo a Terra (<85°):**  \n  ➔ **SOSTITUZIONE:** **Box Squat rigido a 85°-90° con Miniband sopra le ginocchia (`3010` / `20X0`)**: il box rigido calibra l'inversione di moto togliendo tensione al tendine quadricipitale sinistro; l'elastico costringe il gluteo medio destro ad aprirsi contrastando il valgismo.\n* 🛡️ **PREHAB SPECIFICO TENDINEO & PODALICO:**\n  - De-tensione miofasciale quadricipite sinistro con foam roller.\n  - Short Foot attivo su superficie dura per il piede destro (alluce e 5° metatarso saldi).\n  - Step Down eccentrico controllato da box basso (15 cm) guidando l'allineamento dell'arto destro.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO IMPATTI PLIOMETRICI**. L'RDL è ridotto a 2 serie da 4 reps a buffer 3 (RPE 6-7) per proteggere gli ischiocrurali a 24h dall'amichevole del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "",
              "Note Tecniche": "Registrazione baseline altezza e reattività"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. Foam Roller Quadricipite SX (Sovrarotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "De-tensione tendine quadricipite sinistro"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Short Foot & Banded Ankle Inversion DX",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Attivazione arco plantare destro anti-valgo"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Parallelo 85°-90°) con Miniband",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "60 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Enode VBT: `0.60-0.65 m/s` (stop al -10%)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "14+14 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, stop a terra salva-cuffia"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Busto stabile, depressione scapolare attiva"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Step Down eccentrico controllato da box 15cm",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "BW + Man. 6+6 kg",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio DX perfettamente in asse col 2° dito"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "12+12 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole addotte e depresse in chiusura"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione costante, lombare incollata a terra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Standing Calf Raise su gradino con disco",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Spinta uniforme su 1° e 5° metatarso"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Mobilità flessori anca e cassa toracica"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Prone YTWL a terra",
              "Set x Reps": "2 x 8 per lettera",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Fissatori della scapola e cuffia dei rotatori"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Clamshell con Miniband su fianco SX",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1012`",
              "Note Tecniche": "Attivazione gluteo medio destro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto bilanciere)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "32.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione dinamica, ricezione solida"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (85°) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva senza rimbalzo"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Spinta su piano scapolare a 30°"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "16 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto orizzontale, gomito stretto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Cerniera d'anca profonda, ischiocrurali tesi"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Cavo alto, pollici ruotati indietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, tronco immobile"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubri pesanti",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "18+18 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Scapole depresse, postura eretta"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Polpacci e Glutei",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio miofasciale catena posteriore"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Ginocchia in spinta esterna costante"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra con piedi a sfioro",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero fatica neurale pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena ferma e compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "40 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" contrazione glutei"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su gradino bilaterale",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima escursione eccentrica per il tendine d'Achille"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a gambe tese",
              "Set x Reps": "3 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch su panca orizzontale",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il tronco"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza pre-amichevole."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Chronojump CMJ (2 salti) + Foam roller quadricipite SX (2x40\") + Short foot DX (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Chronojump CMJ (2 salti) + Foam roller quadricipite SX (2x40\") + Short foot DX (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (85°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "65 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Enode VBT: `0.65-0.70 m/s`",
                  "Raw": "**Box Squat Dinamico (85°):** 4 x 4 @ 65 kg (\"4\") | Tempo `20X0` | Enode VBT: `0.65-0.70 m/s`."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "16+16 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 16+16 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Step Down da box 15cm",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "manubri 8+8 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Step Down da box 15cm: 3 x 5+5 @ manubri 8+8 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "14+14 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 14+14 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass contro muro: 3 x 5 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman reach (2x5/lato) + Clamshell DX (2x8) + Short foot DX (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman reach (2x5/lato) + Clamshell DX (2x8) + Short foot DX (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "35 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 35 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (85°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (85°):** 4 x 4 @ 50 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "18 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 18 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "62.5 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 62.5 kg (\"5\") | Tempo `3010` (Buffer 3)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Neutra",
                  "Set_Reps": "3 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Neutra:** 3 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "45 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 45 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +20 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Dumbbell Pullover su panca",
                  "Set_Reps": "3 x 8",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover su panca: 3 x 8 @ 14 kg | Tempo `2010`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Side Plank con tenuta",
                  "Set_Reps": "3 x 20\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tenuta: 3 x 20\" /lato."
                },
                {
                  "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
                  "Set_Reps": "Zero salti.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "**🛑 STRICT FRIDAY JUMP BAN:** Zero salti."
                }
              ]
            }
          ]
        }
      },
      "8": {
        "id": 8,
        "name": "Federica Nonnati",
        "number": "#08",
        "role": "Opposto",
        "peso": "77.0 kg",
        "rischio": "🔴 ALTO (Catena Anteriore Retratta + Shift Pelvico + Instabilità Podalica Bilaterale)",
        "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 2 con Dodi, Caserta e Adamczewska)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Retrazione Severa della Catena Anteriore & Retto Femorale:**\n   - La flessione del ginocchio da prono è clamorosamente bloccata a soli **70°** (tensione lancinante alla coscia anteriore), a fronte di una traslazione anteriore del bacino inesistente nell'estensione multisegmentale.\n   - *Ripercussione:* Nello squat libero, la discesa si arresta prematuramente a 80°, manifestando una perdita completa della lordosi lombare (*butt wink* severo) già a **100° di flessione di ginocchio** (ben al di sopra del parallelo). Caricare un back squat profondo significherebbe riversare tensioni di taglio estreme su L4-L5 e tendine rotuleo.\n2. **Deficit Torsionale Asimmetrico d'Anca & Lateral Shift:**\n   - Anca DX in pattern intrarotatorio (IR 45°, ER 35-40°).\n   - Anca SX con deficit marcato di rotazione interna (IR 25-30°, ER 45-50°).\n   - *Ripercussione:* Nello squat si evidenzia un evidente *lateral shift* del bacino verso sinistra associato a torsione verso destra, creando asimmetria di spinta al salto e sovraccarico asimmetrico alle ginocchia nello Step Over (valgismo dinamico su entrambi gli arti, peggiore a destra).\n3. **Instabilità Podalica & Carenza del Tibiale Posteriore:**\n   - Dita ad artiglio in semiflessione a riposo, arco plantare collassato, mancata inversione calcaneale fisiologica in appoggio monopodalico.\n   - Spinta propulsiva a DX gravemente deficitaria con sovraccarico compensatorio esclusivo sui primi metatarsi mediali.\n4. **Cingolo Scapolare & Spalla d'Attacco:**\n   - Ipomobilità della scapola sinistra in abduzione overhead e retrazione; spalla destra da opposto ad altissimo volume di colpi che necessita di scarico del piano orizzontale estremo.\n\n---",
        "ban": "* ⛔ **BAN Back Squat Profondo Libero:** L'accosciata a terra senza riferimento produce retroversione pelvica distruttiva a 100°.  \n  ➔ **SOSTITUZIONE:** **Box Squat parallelo (85°-90°) con tempo eccentrico controllato (`3010`) e ripartenza dinamica (`20X0`)**, con controllo dello shift mediante feedback speculare o box rigido calibrato.\n* ⛔ **BAN Bilanciere Panca Piana Tradizionale con arco esasperato:**  \n  ➔ **SOSTITUZIONE:** **Floor Chest Press con manubri (`3010`)**: il pavimento azzera l'iperestensione scapolo-omerale proteggendo il bicipite brachiale e la cuffia dei rotatori, massimizzando il reclutamento del pettorale e tricipite.\n* 🛡️ **INTEGRAZIONE PREHAB OBBLIGATORIA (Targeting Catena Anteriore & Piede):**\n  - Allungamento dinamico e rilascio miofasciale del retto femorale (Couch stretch adattato + foam roller quadriceps).\n  - Mobilizzazione 90/90 anca sinistra in intrarotazione (recupero dei 15° mancanti).\n  - Esercizi di *Short Foot* + inversione caviglia con banda elastica per il tibiale posteriore (attivazione 3 punti d'appoggio podalici).\n* 🛡️ **REGOLA VENERDÌ (Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI, ZERO PLIOMETRIA E ZERO CARICHI ASSIALI COMPRESSIVI SULLA COLONNA**. Focus su catena posteriore, stabilità pelvica e decompressione.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Myofascial Release Retto Femorale + Couch Stretch",
              "Set x Reps": "2 x 45\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Statico",
              "Note Tecniche": "Respirazione diaframmatica, retroversione bacino"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "90/90 Hip Mobility (Focus IR Anca SX)",
              "Set x Reps": "2 x 8 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Nessun compenso lombare"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot + Banded Ankle Inversion (Tib. Post.)",
              "Set x Reps": "2 x 12 /lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Ripristino arco mediale, dita distese"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Box 85°-90°)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "60 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Discesa controllata in 3\", sfioro box senza rimbalzo, spinta simmetrica"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "16+16 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, stop a terra senza perdere tensione pettorale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Focus depressione e retrazione scapolare SX"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat bulgaro con manubri (piede post. basso)",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio in asse, enfasi su stabilità piede DX"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row (Panca inclinata 30°)",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "14+14 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomiti larghi, attivazione romboidi e deltoide post."
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball controlaterale",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Lombare incollata a terra, anti-estensione pura"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Side Plank con abduzione gamba superiore",
              "Set x Reps": "3 x 25\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Attivazione gluteo medio contro valgismo dinamico"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Mobilità anche + estensione toracica"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Prone YTWL a terra",
              "Set x Reps": "2 x 8 per lettera",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Focus adduzione e controllo scapolare SX"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Calf raise monopodalico con controllo inversione calcagno",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Spinta su 1° e 5° metatarso, piede DX controllatissimo"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto alternato)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "35 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione d'anca esplosiva, arrivo stabile"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (85°)",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "50 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Esplosività concentrica massima senza stacco piedi"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press (Monolaterale)",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Traiettoria su piano scapolare, salva spalla"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "18 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto parallelo, retrazione scapolare completa"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Bacino squadrato, allungamento ischiocrurali"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo con extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "17.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Cavo alto, pollici verso dietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in ginocchio con elastico/cavo",
              "Set x Reps": "3 x 10 /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione rigida, bacino bloccato"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk monolaterale con manubrio",
              "Set x Reps": "3 x 20m /lato",
              "Carico (kg/RPE)": "20 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Postura eretta, anti-flessione laterale"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Polpacci e Flessori d'Anca",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio trigger point"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband ginocchia",
              "Tempo": "`1011`",
              "Note Tecniche": "Ginocchia aperte allineate con 2° dito piede"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Scapular Pull-ups alla sbarra",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Solo depressione/retrazione scapolare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "60 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo con Barra Presa Larga",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Decompressione lombare, trazione al petto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Good Morning con bilanciere scarico / disco al petto",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "15 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Spinta glutei indietro, ginocchia sbloccate a 15°"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "14 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise bilaterale su rialzo",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "+15 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima escursione eccentrica, fermo 2\" in alto"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a terra",
              "Set x Reps": "3 x 25\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch su panca inclinata",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il torace"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Recupero neuromuscolare pre-weekend."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "MFR Catena Anteriore (2x45\") + 90/90 Hip Mobility (2x8/lato) + Short Foot & Ankle Band (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "MFR Catena Anteriore (2x45\") + 90/90 Hip Mobility (2x8/lato) + Short Foot & Ankle Band (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico",
                  "Set_Reps": "4 x 4",
                  "Carico": "65 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Fermo solido al box, risalita violenta",
                  "Raw": "**Box Squat Dinamico:** 4 x 4 @ 65 kg (\"4\") | Tempo `20X0` (Fermo solido al box, risalita violenta)."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "18+18 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 18+18 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Supina Inversa",
                  "Set_Reps": "4 x 5",
                  "Carico": "50 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Supina Inversa:** 4 x 5 @ 50 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro con manubri",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12+12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro con manubri: 3 x 5+5 @ 12+12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Dumbbell Seal Row panca 30°",
                  "Set_Reps": "3 x 6",
                  "Carico": "16+16 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Dumbbell Seal Row panca 30°: 3 x 6 @ 16+16 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con bilanciere a braccia tese",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con bilanciere a braccia tese: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Slam a terra da ginocchio alto",
                  "Set_Reps": "3 x 5 (Palla 5 kg)",
                  "Carico": "",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Slam a terra da ginocchio alto: 3 x 5 (Palla 5 kg) | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman Lunge & thoracic reach (2x6/lato) + YTWL prono (2x6) + Calf raise monopodalico isometrico (2x8/lato, 3\" peak).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman Lunge & thoracic reach (2x6/lato) + YTWL prono (2x6) + Calf raise monopodalico isometrico (2x8/lato, 3\" peak)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "37.5 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 37.5 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (85°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "55 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (85°):** 4 x 4 @ 55 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Chest Supported T-Bar Row / Cable Row",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Chest Supported T-Bar Row / Cable Row:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "cavo 20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ cavo 20 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step out",
                  "Set_Reps": "3 x 8+8",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step out: 3 x 8+8 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro (piano trasverso)",
                  "Set_Reps": "3 x 5+5 (Palla 4 kg)",
                  "Carico": "",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro (piano trasverso): 3 x 5+5 (Palla 4 kg) | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller quadricipiti e polpacci (2x45\") + Monster walk (2x10) + Scapular hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller quadricipiti e polpacci (2x45\") + Monster walk (2x10) + Scapular hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "65 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3 / RPE 6-7",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 65 kg (\"5\") | Tempo `3010` (Buffer 3 / RPE 6-7)."
                },
                {
                  "Esercizio": "Pulley Basso Presa V-Grip",
                  "Set_Reps": "3 x 5",
                  "Carico": "50 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa V-Grip:** 3 x 5 @ 50 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Dumbbell Pullover su panca",
                  "Set_Reps": "3 x 8",
                  "Carico": "16 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover su panca: 3 x 8 @ 16 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale su step",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale su step: 3 x 10 @ +20 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Reverse Hyper a terra / Glute Bridge bilanciere",
                  "Set_Reps": "3 x 8",
                  "Carico": "40 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Reverse Hyper a terra / Glute Bridge bilanciere: 3 x 8 @ 40 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hanging Leg Raise alla spalliera (ginocchia al petto)",
                  "Set_Reps": "3 x 8",
                  "Carico": "",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Hanging Leg Raise alla spalliera (ginocchia al petto): 3 x 8 | Tempo `2010`."
                },
                {
                  "Esercizio": "Side Plank Star (arto superiore e inferiore abdotti)",
                  "Set_Reps": "3 x 20\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank Star (arto superiore e inferiore abdotti): 3 x 20\" /lato."
                }
              ]
            },
            {
              "blocco": "STRICT FRIDAY JUMP BAN",
              "items": [
                {
                  "Esercizio": "Nessun salto.",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Nessun salto."
                }
              ]
            }
          ]
        }
      },
      "9": {
        "id": 9,
        "name": "Sara Dodi",
        "number": "#09",
        "role": "Schiacciatrice",
        "peso": "66.0 kg",
        "rischio": "🔴 CRITICO / MASSIMO (Ginocchia Operate Bilaterali + Cervicalgia Irradiata + Shift Pelvico)",
        "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 2 con Nonnati, Caserta e Adamczewska)",
        "triage": "### Criticità Funzionali & Pregresso Chirurgico Rilevato\n1. **Quadro Chirurgico Bilaterale Ginocchia (Innesto LCA + Menischi):**\n   - Ricostruzione LCA e menisco SX (2021) + Meniscectomia/sutura menisco DX (Febbraio 2024).\n   - Nello Step Over e nello squat si evidenzia un **cedimento in valgismo dinamico dell'arto sinistro** associato a un evidente *lateral shift* del bacino a sinistra. Questo pattern torsionale eccentrico riversa un momento in valgo-rotazione distruttivo direttamente sull'innesto legamentoso del ginocchio sinistro.\n2. **Cervico-Dorsalgia Attiva con Irradiazione Craniale:**\n   - La spalla sinistra si presenta marcatamente anteposta, con elevata abduzione e depressione scapolare. I sovraccarichi assiali sopra la testa scatenano contratture paraspinali/trapezoidali che provocano cefalee tensive e disturbano il sonno post-allenamento pesi.\n3. **Blocco Meccanico della Caviglia & Retrazione Catena Anteriore:**\n   - La dorsiflessione della caviglia è marcatamente ridotta (le ginocchia non traslano oltre la punta dei piedi nello squat, arrestando la discesa a 70°-80°).\n   - Retrazione severa del retto femorale a terra (già a 90° di flessione il bacino collassa in antiversione forzata).\n4. **Deficit Piede Sinistro & Rotazione Esterna d'Anca:**\n   - Piede sinistro evertito e pronato a riposo, mancata inversione calcaneale fisiologica in SLS (deficit tibiale posteriore sinistro).\n   - Anca sinistra limitata in rotazione esterna a soli 30° con compenso di sollevamento pelvico.\n\n---",
        "ban": "* ⛔ **BAN ASSOLUTO Push Press o Overhead Press Bilanciere:** Qualsiasi distensione bilaterale con bilanciere sopra la testa comprime il rachide cervicale e scatena l'irradiazione cefalica.  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Lunge Position One-Arm Press con Kettlebell (`3010` / `2010`)** oppure **Half Kneeling Landmine Press**: spinta sul piano scapolare (a 30°), lavoro asimmetrico che stabilizza il core senza comprimere le vertebre cervicali.\n* ⛔ **BAN Deadbug Classico a Corpo Libero:** La perdita di contatto lombare scatena estensione cervicale compensatoria.  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Deadbug Pullover con Kettlebell/Manubrio (`2020`)**: la presa isometrica dell'attrezzo attiva il gran dorsale e il dentato anteriore, ancorando saldamente la cassa toracica ed evitando la tensione nucale.\n* ⛔ **BAN Squat Libero senza Box:** Tendenza a crollare nello shift a sinistra e valgo sull'innesto LCA.  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Box Squat parallelo (85°) con Miniband sopra le ginocchia**: l'elastico induce il reclutamento attivo del gluteo medio contrastando il valgo sinistro; il box rigido calibra la discesa e neutralizza lo shift pelvico.\n* 🛡️ **SOSTITUZIONE OLIMPICA (NO TRAP BAR):**  \n  ➔ **Powerbag Clean to Chest (o Clean to Split con Powerbag/Sandbag 15-20 kg)**: azzera l'impatto articolare della girata su polsi e rachide cervicale, consentendo tripla estensione senza stress torsionale sul ginocchio sinistro operato.\n* 🛡️ **PREHAB MIRATO (Caviglia + Anca SX + Scapola):**\n  - Mobilità caviglia Knee-to-Wall con elastico (trazione dell'astragalo indietro).\n  - Mobilizzazione anca sinistra in rotazione esterna (Figure 4 stretch / 90-90 ER).\n  - Attivazione tibiale posteriore con fascia elastica (inversione calcaneale).\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI, ZERO PLIOMETRIA E ZERO ATTERRAGGI IMPATTANTI**. Protezione assoluta delle ginocchia operate pre-weekend.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Knee-to-Wall Ankle Mobility con elastico",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "Band",
              "Tempo": "`2012`",
              "Note Tecniche": "Trazione astragalica, ginocchio oltre 2° dito"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Couch Stretch + MFR Retto Femorale",
              "Set x Reps": "2 x 40\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Statico",
              "Note Tecniche": "Allungamento controllato senza iperlordosi"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Short Foot & Ankle Inversion SX",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "Band media",
              "Tempo": "`2012`",
              "Note Tecniche": "Attivazione tibiale posteriore arto operato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat parallelo (85°) con Miniband ginocchia",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Miniband attiva (ginocchia in spinta esterna), discesa 3\""
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "12+12 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Nessuna estensione cervicale, testa rilassata a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta (V-Bar)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "35 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Spalle depresse, gomiti verso i fianchi"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat bulgaro con manubri (supporto al muro)",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio SX perfettamente perpendicolare al piede"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca inclinata 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Petto appoggiato per scaricare collo e lombare"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug Pullover con Kettlebell",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "KB 8 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "Braccia tese, lombare premuta, zero tensione cervicale"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Side Plank con abduzione isometrica arto sup.",
              "Set x Reps": "3 x 20\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Attivazione gluteo medio sinistro"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "90/90 Hip ER Mobility (Focus Anca SX)",
              "Set x Reps": "2 x 8 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Mobilità rotatori esterni senza sollevare bacino"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Face Pull con extrarotazione (altezza occhi)",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "Cavo 10 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Deprimere scapole, gomiti a 90°"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Calf Raise su gradino con fermo in allungamento",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Controllo inversione calcagno sinistro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto controllato)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "25 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Split moderato, arresto solido su entrambe le gambe"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (85°) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "37.5 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Esplosione concentrica, ginocchia salde in asse"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lunge Position One-Arm Press con Kettlebell",
              "Set x Reps": "4 x 5+5",
              "Carico (kg/RPE)": "KB 10 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Piano scapolare a 30°, testa neutra, zero carico cervicale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca orizzontale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "14 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomito aderente, retrazione scapolare completa"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con KB controlaterale (arto perno SX)",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio SX microflesso a 15°, stabilità pelvica"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Prone Y-Raise su panca 30°",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "Manubri 2+2 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Attivazione trapezio inferiore e deltoide post."
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press con cavo/elastico da kneeling",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Blocco totale del bacino, anti-rotazione pura"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubrio singolo (Suitcase carry)",
              "Set x Reps": "3 x 15m /lato",
              "Carico (kg/RPE)": "16 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Tronco verticale, scapole depresse e stabili"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Ischiocrurali e Piriforme",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio trigger point gluteo ed anca"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Monster Walk con elastico alle caviglie",
              "Set x Reps": "2 x 10 passi/lato",
              "Carico (kg/RPE)": "Band",
              "Tempo": "`1011`",
              "Note Tecniche": "Mantenere tensione costante, bacino basso"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Scapular Hang alla sbarra con piedi a terra",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna cervicale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso Presa Parallela Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "35 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al basso addome, petto fiero"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge bipodalico con bilanciere",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "35 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Fermo 2\" in alto in massima contrazione glutei"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover leggero su panca",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico delicato, capo sostenuto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su rialzo",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "+10 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Spinta uniforme su 1° e 5° metatarso"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body con ginocchia flesse (Tuck Hollow)",
              "Set x Reps": "3 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Nessun carico sul collo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Bird Dog con tenuta isometrica 3\"",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1013`",
              "Note Tecniche": "Attivazione multifido e stabilità crociata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Protezione assoluta ginocchia pre-weekend."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Caviglia con banda al muro (2x8/lato) + MFR Retto femorale (2x40\") + Short foot SX (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Caviglia con banda al muro (2x8/lato) + MFR Retto femorale (2x40\") + Short foot SX (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat con Miniband",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Arresto pulito al box, spinta rapida",
                  "Raw": "**Box Squat con Miniband:** 4 x 4 @ 50 kg (\"4\") | Tempo `20X0` (Arresto pulito al box, spinta rapida)."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "14+14 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 14+14 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "40 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 40 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "10+10 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro: 3 x 5+5 @ 10+10 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri",
                  "Set_Reps": "3 x 6",
                  "Carico": "12+12 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri: 3 x 6 @ 12+12 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug Pullover con KB",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "10 kg",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug Pullover con KB: 3 x 6+6 @ 10 kg | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass da seduta su panca",
                  "Set_Reps": "3 x 5",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass da seduta su panca: 3 x 5 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "90/90 ER anca SX (2x6/lato) + Banded Face Pull (2x10) + Calf raise monopodalico (2x8/lato).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "90/90 ER anca SX (2x6/lato) + Banded Face Pull (2x10) + Calf raise monopodalico (2x8/lato)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "27.5 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 27.5 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box con Miniband",
                  "Set_Reps": "4 x 4",
                  "Carico": "42.5 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box con Miniband:** 4 x 4 @ 42.5 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Lunge Position One-Arm Press KB",
                  "Set_Reps": "4 x 4+4",
                  "Carico": "12 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Lunge Position One-Arm Press KB:** 4 x 4+4 @ 12 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Cable Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "20 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Cable Row:** 4 x 5+5 @ 20 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Prone Y-Raise panca 30°",
                  "Set_Reps": "3 x 8",
                  "Carico": "3+3 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Prone Y-Raise panca 30°: 3 x 8 @ 3+3 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con miniband ai piedi",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con miniband ai piedi: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller paraspinali dorsali (no collo) e ischiocrurali (2x40\") + Monster walk (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller paraspinali dorsali (no collo) e ischiocrurali (2x40\") + Monster walk (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "50 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3 / RPE 6-7",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 50 kg (\"5\") | Tempo `3010` (Buffer 3 / RPE 6-7)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Neutra",
                  "Set_Reps": "3 x 5",
                  "Carico": "40 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Neutra:** 3 x 5 @ 40 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "40 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 40 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +15 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Tuck Hollow Hold",
                  "Set_Reps": "3 x 25\"",
                  "Carico": "",
                  "Tempo": "Isometrico",
                  "Note": "",
                  "Raw": "Tuck Hollow Hold: 3 x 25\" | Tempo `Isometrico`."
                },
                {
                  "Esercizio": "Side Plank con rotazione controllata",
                  "Set_Reps": "3 x 6 /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con rotazione controllata: 3 x 6 /lato."
                }
              ]
            },
            {
              "blocco": "STRICT FRIDAY JUMP BAN",
              "items": [
                {
                  "Esercizio": "Nessun salto.",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Nessun salto."
                }
              ]
            }
          ]
        }
      },
      "14": {
        "id": 14,
        "name": "Nelly Adamczewska",
        "number": "#14",
        "role": "Schiacciatrice",
        "peso": "70.0 kg",
        "rischio": "🟡/🔴 MEDIO-ALTO (Lassità Legamentosa + Disritmia Scapolare DX + Valgismo SX + Cisti Polso DX)",
        "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 2 con Nonnati, Caserta e Dodi)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Video/Frame)\n1. **Lassità Legamentosa Generalizzata & Tendenza Recurvatum:**\n   - 17 anni, mobilità passiva elevatissima che necessita di eccellente rigidità attiva (*stiffness*) e stabilità lombo-pelvica. Tendenza al recurvatum e pregressa tendinopatia rotulea da salto.\n2. **Disritmia Scapolare Destra & Upper Crossed Pattern:**\n   - Durante l'abduzione/elevazione, la scapola destra sale precocemente e più in alto rispetto alla sinistra (anticipo di elevazione per iper-attivazione del trapezio superiore e inibizione del trapezio inferiore/dentato anteriore).\n   - Presenza di cisti ganglionare al polso destro (asintomatica ma suscettibile di compressione in iperestensione dorsale con bilanciere dritto).\n3. **Deficit Podalico Sinistro & Valgismo Dinamico Arto SX:**\n   - Retropiede sinistro in eversione/pronazione costante con mancata inversione calcaneale sia in SLS che in propulsione (deficit selettivo del tibiale posteriore sinistro).\n   - Nello Step Over, l'arto sinistro mostra un cedimento in valgismo dinamico marcato (SX > DX), non controllato dall'arco plantare collassato.\n4. **Instabilità Lombo-Pelvica nello Squat Profondo & Blocco Rotazionale SX:**\n   - Nello squat, superati gli 80° di flessione di ginocchio, si manifesta una perdita del controllo lombo-pelvico (*butt wink*) sotto i 70°, con rotazione del bacino a destra in fase concentrica.\n   - Restrizione di circa 15°-20° nella rotazione cervicale e del tronco verso sinistra (cerniera cervico-dorsale rigida).\n\n---",
        "ban": "* ⛔ **BAN Squat Profondo Libero (<70° al ginocchio):**  \n  ➔ **SOSTITUZIONE:** **Box Squat parallelo a 80°-85° con Miniband sopra le ginocchia (`3010` / `20X0`)**: il box impedisce il *butt wink* a fondo corsa proteggendo L4-S1, mentre l'elastico recluta il gluteo medio contrastando il valgismo del ginocchio sinistro.\n* ⛔ **BAN Bilanciere Dritto in Iperestensione dei Polsi (Panca / Girata con polsi piegati):** La cisti ganglionare del polso destro non tollera carichi di compressione in estensione forzata.  \n  ➔ **SOSTITUZIONE:** **Floor Chest Press con Manubri a Presa Neutra/Semi-neutra (`3010`)** e Clean to Split eseguito con manubri/powerbag a presa neutra.\n* 🛡️ **SOSTITUZIONE OLIMPICA (NO TRAP BAR):**  \n  ➔ **Powerbag Clean to Chest (o Clean con manubri a presa neutra / Powerbag 15-20 kg)**: elimina l'estensione del polso salvaguardando la cisti ganglionare del polso destro ed esaltando la tripla estensione.\n* 🛡️ **PREHAB SCAPOLARE E PODALICO OBBLIGATORIO:**\n  - Rilascio miofasciale piccolo pettorale destro con pallina da lacrosse (de-tensione coracoide).\n  - Scapular Wall Slide & Prone Trap 3 Raise per rieducare il timing della scapola destra (depressione attiva).\n  - Short Foot + inversione con elastico per il piede sinistro (attivazione tibiale posteriore).\n  - Rotazioni toraciche in quadrupedia (\"Open Book\") focalizzate sul lato sinistro.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO IMPATTI PLIOMETRICI**. Lavoro eccentrico/isocinetico per ischiocrurali e tendine rotuleo senza impatto.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "SMR Piccolo Pettorale DX con pallina lacrosse",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Statico/Pressione",
              "Note Tecniche": "Rilascio trigger point prima delle spinte"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Scapular Wall Slides a schiena a muro",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Mantenere avambracci e polsi aderenti al muro"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot & Banded Ankle Inversion SX",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Focus attivazione tibiale posteriore sinistro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (80°-85°) con Miniband sopra ginocchia",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Discesa in 3\", sfioro box solido, ginocchia aperte"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press Manubri Presa Neutra",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "14+14 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Polsi in asse neutro (tutela cisti polso DX)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Parallela (V-Bar)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Spalle depresse, gomiti guidati verso i fianchi"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat bulgaro con manubri",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Arto perno SX con ginocchio che non collassa in valgo"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "12+12 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Presa neutra, focus retrazione scapolare inferiore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra ginocchia e mani",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione attiva, L4-S1 incollata al pavimento"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Side Plank sul gomito sinistro con abduzione gamba",
              "Set x Reps": "3 x 25\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Rafforzamento selettivo gluteo medio sinistro"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Quadruped Thoracic Rotation (Open Book) a SX",
              "Set x Reps": "2 x 8 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Sblocco rotazione toracica sinistra deficitaria"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Prone Trap 3 Raise con manubri leggeri",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "2+2 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Scapole tirate indietro e in basso (anti-elevazione DX)"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Calf raise monopodalico su step (inversione calcagno)",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Piede SX: mantenere l'arco mediale in spinta"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Bilanciere/Trap Bar)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "32.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione dinamica, polsi neutri e serrati"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (85°) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva, stabilità monopodalica"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Piano scapolare a 30°, presa neutra sul manicotto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row con appoggio panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "16 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomito lungo il corpo, zero compenso del tronco"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Arto perno SX con ginocchio solido e allineato"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con corda (doppia rotazione)",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Gomiti alti, extrarotazione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "Cavo 10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione rigida, bacino squadrato"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk bilaterale con trap bar o manubri",
              "Set x Reps": "3 x 25m",
              "Carico (kg/RPE)": "20+20 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Spalle depresse, presa salda senza estensione polso"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Tendine Rotuleo e Retto Femorale",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio trigger point senza infiammare rotula"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Monster Walk con elastico alle ginocchia e caviglie",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Band",
              "Tempo": "`1011`",
              "Note Tecniche": "Spinta costante verso l'esterno"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra con cinghie/presa comoda",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione cerniera dorsale e lombare L4-S1"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso Presa Parallela Neutra Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere e miniband ginocchia",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "40 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" contrazione glutei"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Apertura gabbia toracica e allungamento gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su gradino bilaterale",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "+15 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Escursione completa senza compenso del ginocchio"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a braccia lungo i fianchi",
              "Set x Reps": "3 x 25\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch su panca orizzontale",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3010`",
              "Note Tecniche": "Bacino arrotolato verso il torace, discesa lenta"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Protezione tendine rotuleo e recupero."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "SMR piccolo pettorale DX (2x40\") + Scapular wall slides (2x8) + Short foot & banded ankle SX (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "SMR piccolo pettorale DX (2x40\") + Scapular wall slides (2x8) + Short foot & banded ankle SX (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat con Miniband",
                  "Set_Reps": "4 x 4",
                  "Carico": "60 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Pausa al box 1\", esplosione verso l'alto",
                  "Raw": "**Box Squat con Miniband:** 4 x 4 @ 60 kg (\"4\") | Tempo `20X0` (Pausa al box 1\", esplosione verso l'alto)."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri Neutri",
                  "Set_Reps": "4 x 5",
                  "Carico": "16+16 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri Neutri:** 4 x 5 @ 16+16 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12+12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro: 3 x 5+5 @ 12+12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri",
                  "Set_Reps": "3 x 6",
                  "Carico": "14+14 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri: 3 x 6 @ 14+14 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con bilanciere a braccia tese",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con bilanciere a braccia tese: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass esplosivo contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass esplosivo contro muro: 3 x 5 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Open Book SX (2x6) + Prone Trap 3 raise (2x8) + Calf raise monopodalico (2x8/lato).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Open Book SX (2x6) + Prone Trap 3 raise (2x8) + Calf raise monopodalico (2x8/lato)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "35 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 35 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box con Miniband",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box con Miniband:** 4 x 4 @ 50 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "18 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 18 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Face Pull al cavo con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Face Pull al cavo con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step out",
                  "Set_Reps": "3 x 8+8",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step out: 3 x 8+8 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro (piano trasverso)",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro (piano trasverso): 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x10) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x10) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "60 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3 / RPE 6-7",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 60 kg (\"5\") | Tempo `3010` (Buffer 3 / RPE 6-7)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Parallela",
                  "Set_Reps": "3 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Parallela:** 3 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Dumbbell Pullover",
                  "Set_Reps": "3 x 8",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover: 3 x 8 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "45 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 45 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +20 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hanging Leg Raise parziale (ginocchia al petto)",
                  "Set_Reps": "3 x 8",
                  "Carico": "",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Hanging Leg Raise parziale (ginocchia al petto): 3 x 8 | Tempo `2010`."
                },
                {
                  "Esercizio": "Side Plank Star sul gomito SX",
                  "Set_Reps": "3 x 20\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank Star sul gomito SX: 3 x 20\" /lato."
                }
              ]
            },
            {
              "blocco": "STRICT FRIDAY JUMP BAN",
              "items": [
                {
                  "Esercizio": "Zero salti.",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Zero salti."
                }
              ]
            }
          ]
        }
      },
      "11": {
        "id": 11,
        "name": "Luna Cicola",
        "number": "#11",
        "role": "Libero",
        "peso": "60.0 kg",
        "rischio": "🟡 MEDIO (Deficit Severo Extrarotazione d'Anca + Valgismo Dinamico + Retropiede DX Evertito + Specificità Ruolo Libero)",
        "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactivity & Movement Quality\" (Postazione Libero / Campo Libero)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Grave Deficit Torsionale d'Anca (Intrarotazione vs Extrarotazione):**\n   - Presenta una marcata asimmetria tra i range di rotazione: intrarotazione eccezionalmente ampia (IR 45° a SX, 50° a DX), ma **extrarotazione gravemente ridotta e bloccata a soli 20°-25° a destra e 30° a sinistra**.\n   - *Ripercussione:* Nello Step Over e negli affondi laterali tipici del libero, l'incapacità di reclutare i rotatori esterni d'anca (gluteo medio/profondi) causa un immediato cedimento in **valgismo dinamico** del ginocchio (più evidente a sinistra).\n2. **Squat Test & Shift Compensatorio:**\n   - Profondità eccellente (accosciata profonda a 50° con curve conservate), ma si nota un *lateral shift* del bacino verso sinistra per scavalcare il blocco articolare dell'anca destra e l'eversione del piede destro.\n3. **Instabilità Retropiede Destro & Carenza Propulsiva:**\n   - Retropiede destro evertito a riposo e in SLS, mancata inversione calcaneale fisiologica, spinta propulsiva al calf raise debole e instabile rispetto al lato sinistro.\n4. **Specificità del Ruolo Libero & Scapola Sinistra:**\n   - Nel ruolo di libero, i carichi di compressione e distensione orizzontale pesante con bilanciere (panca piana e rematore orizzontale con bilanciere pesante) sono controproducenti e aumentano la rigidità scapolare anteriore (già presente con ipomobilità overhead sinistra).\n\n---",
        "ban": "* ⛔ **BAN ASSOLUTO Panca Piana con Bilanciere & Rematore Bilanciere Pesante (Regola Specifica Libero):**  \n  ➔ **SOSTITUZIONE SPECIFICA:**\n  - **Prone Y-Raise con manubri leggeri (`2012`)** per fissare i depressori/stabilizzatori scapolari e il trapezio inferiore.\n  - **Single-Arm Cable Row (`2011`)** per garantire trazione orizzontale asimmetrica senza compressione discale.\n  - **Low Medball Slam a terra (`X`)** con enfasi sulla cerniera d'anca e reattività senza impatto.\n* ⚖️ **ADATTAMENTO SQUAT:** **Box Squat calibrato all'80% di profondità con Miniband sopra le ginocchia (`3010` / `20X0`)**: impedisce lo shift pelvico a sinistra, costringe le ginocchia a spingere contro la banda attivando i rotatori esterni bloccati (ER) e mantiene la stiffness dinamica per la difesa.\n* 🛡️ **PREHAB SPECIALISTICO D'ANCA & PIEDE DX:**\n  - Mobilità 90/90 con trazione elastica per recuperare l'extrarotazione d'anca DX (dai 20° ai 40° fisiologici).\n  - Short Foot + Banded Ankle Inversion per il piede destro (stimolazione tibiale posteriore).\n  - Rilascio miofasciale quadricipite/retto femorale destro su foam roller.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI, ZERO BALZI PLIOMETRICI**. Lavoro puramente decompressivo e di stabilità orizzontale.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "90/90 Hip ER Mobilization (Focus Anca DX)",
              "Set x Reps": "2 x 8 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Fermo 2\" in massima extrarotazione, bacino fermo"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Ankle Inversion Retropiede DX (Tib. Post.)",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Inversione pulita, arco mediale alto"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Scapular Wall Slide a contatto continuo",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Focus abduzione overhead spalla SX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (@80% ROM) con Miniband ginocchia",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Miniband tesa, piedi ancorati, zero shift a SX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Prone Y-Raise su panca inclinata 30° (Sub. Panca)",
              "Set x Reps": "4 x 10",
              "Carico (kg/RPE)": "3+3 kg (\"6\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Solo trapezio inferiore e deltoidi posteriori"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "32.5 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Discesa controllata 3\", depressione scapolare"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Step Down eccentrico controllato da box basso",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "BW + Man. 4+4 kg",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio SX e DX perfettamente allineati al 2° dito"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Arm Cable Row al cavo medio (Sub. Row BB)",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "17.5 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomito stretto, rotazione toracica controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball schiacciata tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione costante, lombare piatta a terra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Side Plank con Clamshell elastico gamba sup.",
              "Set x Reps": "3 x 20\" /lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Reclutamento gluteo medio e rotatori esterni"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Quadricipite e Retto Femorale DX",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "De-tensione catena anteriore"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Clamshell a terra con miniband e fermo 3\"",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1013`",
              "Note Tecniche": "Attivazione selettiva rotatori esterni d'anca DX"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Calf raise monopodalico su gradino con spinta alluce",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Piede DX: evitare il collasso in eversione"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto controllato)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "25 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Split reattivo, baricentro basso in ricezione"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (@80%) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "37.5 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva, ginocchia salde"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press (Monolaterale)",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+10 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Spinta nel piano scapolare, tutela cingolo SX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Chest-Supported Dumbbell Row (Presa Neutra)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "12+12 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Petto su panca 30°, retrazione scapolare"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con Kettlebell",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Piede DX saldo a terra (short foot attivo)"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Banded Face Pull con doppia extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Gomiti alti, pollici ruotati indietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press con cavo in posizione mezzo-squat difensivo",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Postura da ricezione volley, anti-rotazione"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Low Medball Slam a terra (ginocchia semiflesse)",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "Medball 4 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Schiacciata a terra senza piegare la schiena"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica SX",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Allungamento flessori anca e mobilità torace"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Monster Walk con elastico alle ginocchia",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Band",
              "Tempo": "`1011`",
              "Note Tecniche": "Mantenere extrarotazione attiva d'anca"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Scapular Hang alla sbarra con piedi a sfioro",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Scarico totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso Presa Larga a Gomiti Aperti",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "30 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione orizzontale decompressiva, petto in fuori"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg Glute Bridge a terra",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" contrazione"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover leggero su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "8 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Apertura cassa toracica senza forzare spalla SX"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise bilaterale con fermo al top",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "+10 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Allineamento asse caviglia-tallone"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Tuck Hold",
              "Set x Reps": "3 x 25\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Tenuta addominale compatta"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk monolaterale con manubrio (Suitcase carry)",
              "Set x Reps": "3 x 20m /lato",
              "Carico (kg/RPE)": "14 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Postura eretta, spalle simmetriche"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza reattiva pre-gara."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "90/90 ER anca DX (2x8) + Banded ankle DX (2x10) + Scapular wall slides (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "90/90 ER anca DX (2x8) + Banded ankle DX (2x10) + Scapular wall slides (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (@80% ROM)",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Arresto pulito al box, risalita esplosiva",
                  "Raw": "**Box Squat Dinamico (@80% ROM):** 4 x 4 @ 50 kg (\"4\") | Tempo `20X0` (Arresto pulito al box, risalita esplosiva)."
                },
                {
                  "Esercizio": "Prone Y-Raise Manubri",
                  "Set_Reps": "4 x 8",
                  "Carico": "4+4 kg (\"5\")",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "**Prone Y-Raise Manubri:** 4 x 8 @ 4+4 kg (\"5\") | Tempo `2012`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "37.5 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 37.5 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Step Down da box con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "6 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Step Down da box con KB: 3 x 5+5 @ 6 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Single-Arm Cable Row",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "20 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Single-Arm Cable Row: 3 x 6+6 @ 20 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Low Medball Slam a terra",
                  "Set_Reps": "3 x 4",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Low Medball Slam a terra: 3 x 4 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "MFR retto femorale DX (2x40\") + Clamshell elastico (2x8/lato) + Calf raise monopodalico (2x8/lato).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "MFR retto femorale DX (2x40\") + Clamshell elastico (2x8/lato) + Calf raise monopodalico (2x8/lato)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "27.5 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 27.5 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (@80%)",
                  "Set_Reps": "4 x 4",
                  "Carico": "42.5 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (@80%):** 4 x 4 @ 42.5 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+12.5 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +12.5 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Chest Supported DB Row",
                  "Set_Reps": "4 x 5",
                  "Carico": "14+14 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Chest Supported DB Row:** 4 x 5 @ 14+14 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con rotazione esterna",
                  "Set_Reps": "3 x 10",
                  "Carico": "15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con rotazione esterna: 3 x 10 @ 15 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico da mezzo-squat con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico da mezzo-squat con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw basso contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw basso contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman stretch (2x5/lato) + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman stretch (2x5/lato) + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3 / RPE 6-7",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 45 kg (\"5\") | Tempo `3010` (Buffer 3 / RPE 6-7)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Larga",
                  "Set_Reps": "3 x 5",
                  "Carico": "35 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Larga:** 3 x 5 @ 35 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge monopodalico su panca",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "BW",
                  "Tempo": "1012",
                  "Note": "",
                  "Raw": "Glute Bridge monopodalico su panca: 3 x 6+6 @ BW | Tempo `1012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +15 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold compatto",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold compatto: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Suitcase Carry con KB pesante",
                  "Set_Reps": "3 x 15m /lato",
                  "Carico": "16 kg.",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Suitcase Carry con KB pesante: 3 x 15m /lato @ 16 kg."
                }
              ]
            },
            {
              "blocco": "STRICT FRIDAY JUMP BAN",
              "items": [
                {
                  "Esercizio": "Zero salti.",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Zero salti."
                }
              ]
            }
          ]
        }
      },
      "12": {
        "id": 12,
        "name": "Erin Grippo",
        "number": "#12",
        "role": "Palleggiatrice",
        "peso": "63.5 kg",
        "rischio": "🟡 MEDIO (Dorsiflessione Caviglie Bloccata + Butt Wink a 90° + Spinta Piede DX Mediale + Ipermobilità Lombare di Compenso)",
        "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactive & Floor\"",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Dorsiflessione della Caviglia Bloccata & Squat Test:**\n   - La mobilità in dorsiflessione tibio-tarsica è marcatamente limitata bilateralmente. Nello squat a carico libero, le tibie non avanzano oltre i piedi e l'accosciata si arresta bruscamente a 90° (sopra il parallelo).\n   - In quel punto di arresto (90°) scatta una perdita repentina e severa della lordosi lombare (*butt wink* completo), con retroversione del bacino per guadagnare centimetri artificiali di profondità.\n2. **Spinta Propulsiva Piede Destro Alterata:**\n   - Nel calf raise monopodalico e nella spinta a terra, il retropiede destro collassa in eversione, scaricando tutta la forza di trazione quasi esclusivamente sul 1° e 2° metatarso (sovraccarico mediale), a differenza dell'arto sinistro che mantiene una traiettoria fisiologica.\n3. **Rigidità Dorsale & Iper-Estensione Lombare Compensatoria:**\n   - Spalle anteposte bilateralmente con rettilineizzazione toracica. Nell'estensione multisegmentale standing, l'atleta appare \"superpositiva\" perché compensa la rigidità toracica iper-estendendo le vertebre lombari (cerniera L4-S1 sotto stress).\n4. **Specificità Palleggiatrice:**\n   - Necessità assoluta di reattività dell'avampiede nei cambi di direzione per il palleggio e integrità/stabilità dei polsi e delle dita per il tocco di palla.\n\n---",
        "ban": "* ⛔ **BAN Squat Libero Profondo (<90°):**  \n  ➔ **SOSTITUZIONE:** **Box Squat rigido a 90° (`3010` / `20X0`)**: l'altezza del box ferma la discesa esattamente prima del crollo pelvico lombare, consentendo di caricare in sicurezza la tripla estensione senza retroversione.\n* 🛡️ **PREHAB SPECIFICO CAVIGLIA, PIEDE DX E TORACE:**\n   - Knee-to-Wall con elastico alle caviglie (mobilizzazione dell'articolazione tibio-tarsica con trazione posteriore dell'astragalo).\n   - Mobilizzazione in estensione toracica su Foam Roller (mani dietro la nuca, gomiti chiusi) per sbloccare le vertebre dorsali senza sovraccaricare il tratto lombare.\n   - Rieducazione dell'arco plantare destro (*Short Foot* + Calf raise su cuneo per reclutare il 4°-5° metatarso).\n* 🛡️ **TUTELA & POTENZIAMENTO POLSI/FLESSORI PER IL PALLEGGIO:**\n   - Inserimento di Wrist Rollers / Dumbbell Wrist Flexion-Extension a tempo controllato (`2012`) e Farmer Carry con manubri per rinforzare gli avambracci.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n   - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO IMPATTI PLIOMETRICI**. Lavoro decompressivo per la colonna lombare e catena posteriore.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Knee-to-Wall Ankle Mobility con fascia elastica",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "Band",
              "Tempo": "`2012`",
              "Note Tecniche": "Ginocchio spinto in avanti oltre il 2° dito"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Estensione Toracica su Foam Roller",
              "Set x Reps": "2 x 8 estensioni",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Bacino fermo a terra, nessun inarcamento lombare"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot & Calf Raise Piede DX su cuneo",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Spinta distribuita su 1°, 4° e 5° metatarso"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Box a 90° esatti)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "50 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Discesa lenta in 3\", tocco solido senza rimbalzo, spinta simmetrica"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "12+12 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, tutela anteposizione spalle"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Parallela",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "37.5 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Busto stabile, depressione scapolare attiva"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat bulgaro con manubri",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio avanzato e caviglia flessa in carico"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "12+12 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole addotte e depresse in chiusura"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball controlaterale",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Lombare incollata al pavimento (anti-iperlordosi)"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Wrist Roller / Dumbbell Wrist Curls (Polsi)",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Flessione ed estensione dita/polsi per il palleggio"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica SX",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Allungamento flessori anca e mobilità torace"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Prone YTWL a terra",
              "Set x Reps": "2 x 8 per lettera",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Attivazione romboidi e trapezio inferiore"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spinta caviglia contro elastico (plantar-flessione)",
              "Set x Reps": "2 x 12 /lato",
              "Carico (kg/RPE)": "Band pesante",
              "Tempo": "`2012`",
              "Note Tecniche": "Mantenimento asse calcagno-tendine"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto bilanciere)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "27.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Estensione d'anca esplosiva, arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (90°)",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta violenta dal box senza staccare le punte"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+10 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Traiettoria diagonale a 30°, core rigido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "14 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomito stretto, retrazione scapolare completa"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Piede d'appoggio ben radicato, bacino parallelo"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con corda",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Gomiti alti, extrarotazione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in ginocchio con cavo/elastico",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, glutei serrati"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk bilaterale con manubri pesanti",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "16+16 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Presa isometrica forte (avambracci e dita)"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Polpacci e Paravertebrali Toracici",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio trigger point tricipite surale"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Mantenere costante la larghezza dei piedi"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale rachide lombare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "50 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso Presa Neutra Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "37.5 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena ferma e compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "40 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Estensione completa dell'anca, 2\" fermo al top"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su gradino",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "+12.5 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Piede DX controllato, discesa eccentrica profonda"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a braccia distese",
              "Set x Reps": "3 x 25\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al tappeto"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch con fitball tra le caviglie",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "Fitball",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il tronco"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Recupero neuromuscolare pre-weekend."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Knee-to-wall con banda (2x8/lato) + Foam roller torace (2x8) + Calf raise cuneo DX (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Knee-to-wall con banda (2x8/lato) + Foam roller torace (2x8) + Calf raise cuneo DX (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "55 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Fermo solido al box, risalita esplosiva",
                  "Raw": "**Box Squat Dinamico (90°):** 4 x 4 @ 55 kg (\"4\") | Tempo `20X0` (Fermo solido al box, risalita esplosiva)."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "14+14 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 14+14 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "42.5 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 42.5 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "10+10 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro: 3 x 5+5 @ 10+10 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "14+14 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 14+14 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con bilanciere scarico tenuto in alto",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con bilanciere scarico tenuto in alto: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass esplosivo contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass esplosivo contro muro: 3 x 5 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman stretch (2x5/lato) + Prone YTWL (2x6) + Spinta elastico caviglia (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman stretch (2x5/lato) + Prone YTWL (2x6) + Spinta elastico caviglia (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "30 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 30 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "45 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (90°):** 4 x 4 @ 45 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+12.5 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +12.5 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "16 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 16 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con passo laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con passo laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller polpacci/torace (2x40\") + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller polpacci/torace (2x40\") + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "52.5 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3 / RPE 6-7",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 52.5 kg (\"5\") | Tempo `3010` (Buffer 3 / RPE 6-7)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Stretta",
                  "Set_Reps": "3 x 5",
                  "Carico": "42.5 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Stretta:** 3 x 5 @ 42.5 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "45 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 45 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +15 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Wrist Roller / Farmer Carry",
                  "Set_Reps": "3 x 20m",
                  "Carico": "18+18 kg.",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Wrist Roller / Farmer Carry: 3 x 20m @ 18+18 kg."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Side Plank con tocco piede",
                  "Set_Reps": "3 x 6 /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tocco piede: 3 x 6 /lato."
                }
              ]
            },
            {
              "blocco": "STRICT FRIDAY JUMP BAN",
              "items": [
                {
                  "Esercizio": "Zero salti.",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Zero salti."
                }
              ]
            }
          ]
        }
      },
      "13": {
        "id": 13,
        "name": "Giulia Caserta",
        "number": "#13",
        "role": "Centrale",
        "peso": "68.0 kg",
        "rischio": "🟡 MEDIO (Perdita Controllo Lombo-Pelvico oltre 110° + Shift Pelvico Asimmetrico + Deficit Retrazione Scapola DX + Anteposizione Spalla SX)",
        "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 2 con Nonnati, Dodi e Adamczewska)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Perdita del Controllo Lombo-Pelvico nello Squat Profondo & Shift Pelvico:**\n   - Mobilità passiva d'anca eccellente (accosciata fino a 70°), ma la stabilità lombo-pelvica cede bruscamente già a **110° di flessione di ginocchio** (ben prima del parallelo), scatenando un *butt wink* completo e flessione di compenso del tratto dorsale.\n   - Nello squat libero si evidenzia una dinamica a \"doppio shift\": il bacino trasla a sinistra in fase di discesa e scivola a destra all'inversione concentrica, indicando un deficit di stabilità torsionale pelvica e asimmetria tra gli arti.\n2. **Asimmetrie del Cingolo Scapolare (Spalla SX Anteposta / Scapola DX Ipomobile):**\n   - Spalla sinistra visibilmente anteposta e limitata in abduzione overhead attiva.\n   - A braccia tese frontali, la scapola destra presenta un deficit selettivo di adduzione/retrazione (scarsa attivazione del trapezio medio-inferiore e dei romboidi a destra).\n3. **Appoggio Podalico & Mobilità del Piede:**\n   - Piede sinistro in eversione/pronazione più marcata rispetto al destro durante l'accosciata; retropiede rigido con limitata escursione fisiologica pronatoria in spinta propulsiva.\n4. **Specificità del Centrale:**\n   - Richiesta elevatissima di stiffness dei polpacci e stabilità orizzontale/verticale per i ripetuti salti a muro (spostamenti laterali rapidi) e attacco di primo tempo.\n\n---",
        "ban": "* ⛔ **BAN Squat Libero Profondo (<90°):** L'accosciata oltre i 110° scatena retroversione lombare marcata e doppio shift del bacino.  \n  ➔ **SOSTITUZIONE:** **Box Squat rigido a 90° con tempo eccentrico controllato (`3010`) e ripartenza dinamica (`20X0`)**: il box elimina il *butt wink*, calibra l'inversione e guida la simmetria di spinta senza scarico asimmetrico.\n* 🛡️ **PREHAB SCAPOLARE ASIMMETRICO & CORE INTRA-ADDOMINALE:**\n   - Retrazioni scapolari monolaterali al cavo / manubrio con sosta 2\" per la scapola destra.\n   - Rilascio miofasciale piccolo pettorale sinistro ed allungamento intrarotatori spalla SX per sbloccare l'abduzione overhead.\n   - Attivazione del core con pressione intra-addominale (IAP) e Deadbug anti-estensione per eliminare lo shift pelvico nello squat.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n   - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO STRESS PLIOMETRICO**. Focus su catena posteriore, stabilità pelvica e decompressione spinale pre-gara.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "SMR Piccolo Pettorale SX con pallina lacrosse",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Pressione",
              "Note Tecniche": "De-tensione spalla sinistra anteposta"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Retrazione Scapolare al Cavo Monolaterale DX",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`1012`",
              "Note Tecniche": "Braccio teso, solo retrazione selettiva a destra"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot & Banded Ankle Eversion/Inversion SX",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Controllo eversione eccessiva piede sinistro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Box a 90°)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Discesa controllata 3\", sfioro box senza oscillazioni, spinta simmetrica"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "14+14 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, testa e spalle stabili a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta (V-Bar)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Scapole depresse e serrate, trazione al petto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat bulgaro con manubri",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio in asse con il piede, bacino squadrato"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "12+12 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Enfasi sulla retrazione scapolare destra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione attiva, L4-S1 incollata a terra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Side Plank con abduzione gamba superiore",
              "Set x Reps": "3 x 20\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Attivazione gluteo medio contro shift pelvico"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica SX",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Apertura toracica e allungamento flessori anca"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Scapular Wall Slides a schiena a muro",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Mantenere braccio sinistro a contatto muro"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Calf raise monopodalico con fermo al top",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Spinta solida e bilanciata su entrambi i piedi"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto bilanciere)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "32.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione dinamica, ricezione solida"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (90°)",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Esplosione concentrica dal box senza stacco piedi"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Traiettoria su piano scapolare a salvaguardia spalla SX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca (Focus Scapola DX)",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "16 kg (\"6\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Fermo 2\" in massima retrazione scapolare"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Bacino orizzontale, controllo ischiocrurali"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Banded Face Pull con corda ed extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Cavo alto, pollici verso dietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, tronco immobile"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubri pesanti",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "18+18 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Scapole depresse e addotte, postura eretta"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Polpacci e Glutei",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio miofasciale catena posteriore"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Ginocchia in spinta esterna costante"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Scarico totale della colonna lombare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo Presa Parallela",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Petto in fuori, trazione controllata al petto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "40 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" fermo al top"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento gran dorsale senza inarcare lombare"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su rialzo bilaterale",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "+15 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima escursione eccentrica per il tendine d'Achille"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a gambe tese",
              "Set x Reps": "3 x 25\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Lombare incollata al pavimento"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch su panca inclinata",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il torace"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Protezione neuromuscolare pre-weekend."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "SMR piccolo pettorale SX (2x40\") + Retrazioni scapolari al cavo DX (2x10) + Short foot SX (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "SMR piccolo pettorale SX (2x40\") + Retrazioni scapolari al cavo DX (2x10) + Short foot SX (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "60 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Arresto solido, risalita esplosiva",
                  "Raw": "**Box Squat Dinamico (90°):** 4 x 4 @ 60 kg (\"4\") | Tempo `20X0` (Arresto solido, risalita esplosiva)."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "16+16 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 16+16 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro con manubri",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12+12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro con manubri: 3 x 5+5 @ 12+12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "14+14 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 14+14 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con bilanciere a braccia tese",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con bilanciere a braccia tese: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass esplosivo contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass esplosivo contro muro: 3 x 5 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman reach (2x5/lato) + Scapular wall slides (2x8) + Calf raise monopodalico (2x8/lato).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman reach (2x5/lato) + Scapular wall slides (2x8) + Calf raise monopodalico (2x8/lato)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "35 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 35 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (90°):** 4 x 4 @ 50 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row (Focus Scapola DX)",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "18 kg (\"5\")",
                  "Tempo": "1012",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row (Focus Scapola DX):** 4 x 5+5 @ 18 kg (\"5\") | Tempo `1012`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step laterale",
                  "Set_Reps": "3 x 8+8",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step laterale: 3 x 8+8 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller catena posteriore (2x40\") + Monster walk (2x10) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller catena posteriore (2x40\") + Monster walk (2x10) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "60 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3 / RPE 6-7",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 60 kg (\"5\") | Tempo `3010` (Buffer 3 / RPE 6-7)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Parallela",
                  "Set_Reps": "3 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Parallela:** 3 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "45 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 45 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +20 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Dumbbell Pullover su panca",
                  "Set_Reps": "3 x 8",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover su panca: 3 x 8 @ 14 kg | Tempo `2010`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hanging Leg Raise alla spalliera",
                  "Set_Reps": "3 x 8",
                  "Carico": "",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Hanging Leg Raise alla spalliera: 3 x 8 | Tempo `2010`."
                },
                {
                  "Esercizio": "Side Plank con tenuta isometrica",
                  "Set_Reps": "3 x 25\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tenuta isometrica: 3 x 25\" /lato."
                }
              ]
            },
            {
              "blocco": "STRICT FRIDAY JUMP BAN",
              "items": [
                {
                  "Esercizio": "Zero salti.",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Zero salti."
                }
              ]
            }
          ]
        }
      }
    }
  },
  "W4": {
    "titolo": "Settimana 4 (W4) — SSP 2: Contrasto Dinamico & Potenza",
    "sedute": [
      {
        "Numero_Seduta": "W4-LunP",
        "Nome_Seduta": "Seduta 1 — Contrasto Dinamico & Potenza",
        "Settimana": "W4",
        "Giorno": "Lunedì",
        "Fase": "Mattina",
        "Luogo": "Palestra",
        "Durata_min": "55",
        "Note": "Box Squat Dinamico 20X0 (Enode 0.65-0.75 m/s) + Floor Press + Lat Machine"
      },
      {
        "Numero_Seduta": "W4-MerV",
        "Nome_Seduta": "Seduta 2 — Spinta Verticale Veloce & Trazione",
        "Settimana": "W4",
        "Giorno": "Mercoledì",
        "Fase": "Mattina",
        "Luogo": "Palestra",
        "Durata_min": "52",
        "Note": "Clean to Split + Half Squat 10X0 + Push Press/Landmine + Single Row"
      },
      {
        "Numero_Seduta": "W4-VenR",
        "Nome_Seduta": "Seduta 3 — Cerniera Posteriore Sub-Massimale & Decompressione",
        "Settimana": "W4",
        "Giorno": "Venerdì",
        "Fase": "Mattina",
        "Luogo": "Palestra",
        "Durata_min": "40",
        "Note": "RDL bilanciere 2x4 buffer 3 (RPE 6-7) + Pulley · ZERO SALTI (Amichevole sabato)"
      }
    ],
    "programma_squadra": {
      "manifesto": {
        "vbt_w3": "0.60 – 0.65 m/s",
        "vbt_w4": "0.65 – 0.75 m/s",
        "vbt_rule": "Regola del -10% Velocity Loss Threshold: stop immediato alla serie se la velocità cala di oltre il 10% dalla prima rip.",
        "friday_jump_ban": "A meno di 30 ore dall'amichevole del sabato, la Seduta 3 del venerdì vieta tassativamente qualsiasi salto, balzo o impatto pliometrico.",
        "turni": {
          "turno_1": {
            "orario": "08:30 – 09:25",
            "nome": "Speed, Reactive & Floor (6 Atlete)",
            "atlete": [
              "Veronica Allasia",
              "Erin Grippo",
              "Chiara Lo Dico",
              "Luna Cicola",
              "Maria Marcuzzi",
              "Gaia Biondi"
            ]
          },
          "turno_2": {
            "orario": "09:30 – 10:25",
            "nome": "Heavy, Power & Jumpers (7 Atlete)",
            "atlete": [
              "Anja Asonja",
              "Federica Nonnati",
              "Victoria Sassolini",
              "Elisa Bole",
              "Sara Dodi",
              "Nelly Adamczewska",
              "Giulia Caserta"
            ]
          }
        }
      },
      "gym_sessions": [
        {
          "id": "S1",
          "giorno": "Lunedì",
          "fase": "Mattina",
          "nome": "Seduta 1 — Spinta Orizzontale & Trazione Verticale",
          "durata": "52-55 min",
          "focus": "Floor Press DB ↔ Lat Machine neutra + Box Squat con sensore Enode",
          "esercizi": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Test Chronojump CMJ (2 salti massimali)",
              "Set x Reps": "2 salti",
              "Tempo": "Max",
              "Note Tecniche": "Registrazione altezza cm e readiness"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. 90/90 Hip Mobility & De-tensione Anca",
              "Set x Reps": "2 x 6 /lato",
              "Tempo": "`2012`",
              "Note Tecniche": "Mobilità rotatori senza compenso lombare"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Short Foot & Banded Ankle Inversion",
              "Set x Reps": "2 x 10 /lato",
              "Tempo": "`2012`",
              "Note Tecniche": "Attivazione tibiale posteriore"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Box Squat (Parallelo)",
              "Set x Reps": "4 x 5-6 (W3) / 4x4 (W4) / 4x3 (W5)",
              "Tempo": "`3010` (W3) / `20X0` (W4-W5)",
              "Note Tecniche": "Monitoraggio Enode VBT (stop al -10% velocity loss)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Floor Chest Press con Manubri",
              "Set x Reps": "4 x 5-6",
              "Tempo": "`3010` (W3) / `20X0` (W4)",
              "Note Tecniche": "Gomiti a 45°, stop a terra fisiologico salva-cuffia"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Tempo": "`3010` (W3) / `2011` (W4)",
              "Note Tecniche": "Spalle depresse, trazione al petto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat bulgaro con manubri",
              "Set x Reps": "3 x 5+5",
              "Tempo": "`2010`",
              "Note Tecniche": "Discesa controllata, ginocchio in asse"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6-8",
              "Tempo": "`2011`",
              "Note Tecniche": "Presa neutra, retrazione scapolare completa"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico (fitball o KB)",
              "Set x Reps": "3 x 6+6",
              "Tempo": "`2020`",
              "Note Tecniche": "Lombare incollata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass esplosivo contro muro",
              "Set x Reps": "3 x 5",
              "Tempo": "`X`",
              "Note Tecniche": "Palla 3-4 kg, massima intenzione balistica d'uscita"
            }
          ]
        },
        {
          "id": "S2",
          "giorno": "Mercoledì",
          "fase": "Mattina",
          "nome": "Seduta 2 — Spinta Verticale & Trazione Orizzontale",
          "durata": "50-52 min",
          "focus": "Clean/Powerbag + Half Squat Dinamico + Landmine/Push Press ↔ Single DB Row",
          "esercizi": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Spiderman Lunge con apertura toracica",
              "Set x Reps": "2 x 6 /lato",
              "Tempo": "`2011`",
              "Note Tecniche": "Allungamento flessori anca e mobilità torace"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. Prone YTWL / Banded Face Pull",
              "Set x Reps": "2 x 8 per lettera",
              "Tempo": "`1012`",
              "Note Tecniche": "Fissatori della scapola e cuffia dei rotatori"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Calf Raise su step con sosta 2\" in alto",
              "Set x Reps": "2 x 10 /lato",
              "Tempo": "`2012`",
              "Note Tecniche": "Controllo retropiede e asse del calcagno"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1D. Profilazione Chronojump RSI/RFD (Drop Jump 30cm o 5-Hop Test)",
              "Set x Reps": "2 x 3-4 salti",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Misurazione Reactive Strength Index (target >1.80)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Clean to Split OPPURE Powerbag Clean",
              "Set x Reps": "4 x 3+3 (o 4x4)",
              "Tempo": "`X`",
              "Note Tecniche": "Powerbag per *Dodi, Sassolini, Biondi, Adamczewska*"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Half Squat Dinamico al Box",
              "Set x Reps": "4 x 4-5",
              "Tempo": "`20X0` (W3) / `10X0` (W4-W5)",
              "Note Tecniche": "Risalita esplosiva senza staccare le piante dei piedi"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Half Kneeling Landmine Press (o KB Press)",
              "Set x Reps": "4 x 5+5",
              "Tempo": "`2010` (W3) / `10X0` (W4)",
              "Note Tecniche": "Piano scapolare a 30°, tutela collo e spalla"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 5-6 /lato",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto parallelo, gomito aderente"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "3 x 5+5",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura, bacino squadrato"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo con extrarotazione",
              "Set x Reps": "3 x 10",
              "Tempo": "`2012`",
              "Note Tecniche": "Cavo alto, pollici ruotati indietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 6+6",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 4+4",
              "Tempo": "`X`",
              "Note Tecniche": "Palla 3-4 kg, trasferimento forza bacino-tronco con rilascio massimale"
            }
          ]
        },
        {
          "id": "S3",
          "giorno": "Venerdì",
          "fase": "Mattina",
          "nome": "Seduta 3 — Cerniera Posteriore Sub-Massimale & Decompressione",
          "durata": "38-40 min",
          "focus": "RDL Bilanciere 2x4 @ buffer 3 (RPE 6-7) + Pulley decompressivo · ZERO SALTI",
          "esercizi": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Foam Roller Miofasciale Flessori e Ischio",
              "Set x Reps": "2 x 45\" /distretto",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio trigger point muscolatura contratta"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. Banded Monster Walk laterale",
              "Set x Reps": "2 x 10 passi/lato",
              "Tempo": "`1011`",
              "Note Tecniche": "Ginocchia aperte allineate col 2° dito"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "2 x 20\"",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale del rachide lombare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). No affaticamento ischiocrurali pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Pulley Basso al Cavo Presa Parallela",
              "Set x Reps": "3 x 6-8",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione decompressiva al petto, schiena ferma"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6-8",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" fermo al top"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Dumbbell Pullover leggero su panca",
              "Set x Reps": "3 x 8-10",
              "Tempo": "`3010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3C. Standing Calf Raise bilaterale su rialzo",
              "Set x Reps": "3 x 10",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima escursione eccentrica per il tendine d'Achille"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Hollow Body Hold (o Tuck Hollow)",
              "Set x Reps": "3 x 20\"",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4B. Farmer Walk monolaterale con manubrio",
              "Set x Reps": "3 x 15m /lato",
              "Tempo": "Camminata",
              "Note Tecniche": "Anti-flessione laterale"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe leggere e freschezza neurale per il sabato."
            }
          ]
        }
      ],
      "court_sessions": [
        {
          "id": "C1",
          "giorno": "Lunedì",
          "fase": "Pomeriggio (45 min)",
          "nome": "Campo 1 — Decelerazione Eccentrica, COD 180° & Synapse Base",
          "dettagli": {
            "titolo": "Lunedì Pomeriggio — 45 min",
            "contenuto": [
              "Decelerazione Eccentrica, COD 180° & Synapse Base\n*Seguito alla seduta pesi di forza pesante; stimolo neurale ad alta forza frenante a terra senza salti verticali intensivi.*\n1. **Attivazione Senso-Motoria & Mobilità (10 min):**\n   - Sblocco articolare dinamico (anche 90/90, tibiale posteriore/short foot, caviglie con miniband).\n   - Esercizio *SYNAPSE 1*: Arresti reattivi su stimolo cromatico/visivo a segnale improvviso.\n2. **Meccanica di Frenata & Decelerazione Eccentrica a Terra (15 min):**\n   - Sprint brevi 4-6m con arresto squadrato a 2 tempi su linea in meno di 0.3s (anti-valgismo).\n   - COD 180° (5-0-5 modificato volley): decelerazione violenta e ripartenza esplosiva a baricentro basso.\n   - *Densità Metabolica Indiretta:* 5\" lavoro massimale / 15-20\" recupero attivo camminando (RSA).\n3. **Situazionale di Ruolo + Synapse Integrato (13 min):**\n   - *Centrali:* Traslazioni laterali veloci a 2 passi con arresto squadrato bilaterale.\n   - *Schiacciatrici/Opposti:* Decelerazione su rincorsa diagonale a 3 passi senza stacco.\n   - *Liberi/Palleggi:* Navette brevi rasoterra 3x3m con recupero posizione difensiva.\n   - Chest pass balistico contro muro con palla medica 3 kg (3 serie x 5 lanci).\n4. **Prevenzione Finale & Transizione al Coach (7 min):**\n   - Esercizi protettivi rotatori spalla con elastico e tenute core anti-estensione a terra. Consegna al Coach.",
              "---"
            ]
          }
        },
        {
          "id": "C2",
          "giorno": "Mercoledì",
          "fase": "Pomeriggio (45 min)",
          "nome": "Campo 2 — Stiffness Reattiva, Pliometria di Ruolo & Transfer",
          "dettagli": {
            "titolo": "Mercoledì Pomeriggio — 45 min",
            "contenuto": [
              "Stiffness Reattiva, Pliometria di Ruolo & Transfer\n*Finestra principale di transfer elastico post-seduta pesi di potenza e profilazione RSI su pedana Chronojump.*\n1. **Attivazione Elastica & Ankling (10 min):**\n   - Ankling drills a terra dura + Low Pogo Jumps a piedi pari (stiffness caviglia).\n   - Esercizio *SYNAPSE 2*: Footwork coordinativo su scaletta con comando visivo direzionale.\n2. **Stiffness Reattiva & Pliometria Ruolo-Specifica (15 min):**\n   - Pliometria su 4 ostacolini bassi (15-20 cm) a rimbalzo reattivo (4 serie x 4 balzi, rec. 60\").\n   - *Saltatrici (Bande/Opposti/Centrali):* 4 serie x 3 salti specifici (rincorse d'attacco o block jumps a rete).\n   - *Liberi (Lo Dico, Cicola):* Sostituzione dei salti con scivolamenti difensivi reattivi 3x5m con tocco riga.\n3. **Lanci Balistici Medball & Decision-Making (13 min):**\n   - Lanci Medball rotazionali contro muro (3 kg, 3 serie x 4+4) con massima esplosività bacino-tronco.\n   - Esercizio *SYNAPSE 3*: Transizione rapida muro-difesa con perturbazione visiva (palla lanciata).\n4. **Prevenzione Tendinea & Consegna al Coach (7 min):**\n   - Eccentrico/isometrico per tendine d'Achille e rotuleo (soleo stretch e sosta al muro). Consegna al Coach.",
              "---"
            ]
          }
        },
        {
          "id": "C3",
          "giorno": "Venerdì",
          "fase": "Pomeriggio (45 min)",
          "nome": "Campo 3 — Priming Neurale, Synapse Avanzato & ZERO SALTI",
          "dettagli": {
            "titolo": "Venerdì Pomeriggio — 45 min",
            "contenuto": [
              "Priming Neurale, Synapse Avanzato (Go/No-Go) & ZERO SALTI\n*🛑 STRICT FRIDAY JUMP BAN: Nessun impatto pliometrico né salti verticali pre-amichevole.*\n1. **Attivazione Dinamica & Reset Miofasciale (10 min):**\n   - Mobilità globale anche, colonna toracica e catena posteriore; monster walk con elastico.\n2. **Agilità a Terra, Frequenza Rapida & Primi Passi (15 min):**\n   - Scaletta (*speed ladder*) a frequenza massimale (In-Out, Icky Shuffle) a piedi radenti il parquet.\n   - Primi passi esplosivi sui 3-4 metri con frenata elastica progressiva (NO salti).\n3. **SYNAPSE Avanzato & Decision-Making ad Alta Velocità (13 min):**\n   - Circuiti situazionali con comandi *Go / No-Go* (stimolo contraddittorio colore-voce): massima eccitabilità corticale.\n   - Footwork difensivo reattivo e reattività occhio-mano/occhio-piede senza fase di volo.\n4. **Decompressione & Priming Finale (7 min):**\n   - Lavoro isometrico decompressivo, respirazione diaframmatica. Squadra freschissima per il sabato."
            ]
          }
        }
      ]
    },
    "atleti": {
      "1": {
        "id": 1,
        "name": "Veronica Allasia",
        "number": "#01",
        "role": "Palleggiatrice",
        "peso": "63.5 kg",
        "rischio": "🔴 ALTO (Instabilità Caviglie + Stress Tibiale Cronico + Deficit Tibiale Posteriore SX + Anca DX Bloccata in IR)",
        "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactive & Floor\"",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Instabilità di Caviglia & Sindrome da Stress Tibiale (Shin Splints):**\n   - Esiti di severa distorsione in inversione alla caviglia destra con lassità legamentosa cronica; distorsione pregressa a sinistra.\n   - All'inizio di ogni stagione su superfici rigide si riacutizza la periostite tibiale da sovraccarico della membrana interossea e debolezza muscolare profonda.\n2. **Deficit Selettivo del Tibiale Posteriore & Crollo Mediale SX:**\n   - In carico monopodalico (SLS) e nello Step Over, il retropiede sinistro cede in **eversione/pronazione incontrollata**, con conseguente valgismo dinamico al ginocchio sinistro.\n3. **Blocco Meccanico dell'Anca Destra in Intrarotazione & Shift Pelvico:**\n   - Rotazione interna dell'anca destra bloccata a 30° con tendenza fissa all'extrarotazione. Nello squat profondo il bacino compensa eseguendo un evidente *lateral shift* verso sinistra, caricando asimmetricamente il piede sinistro.\n4. **Cingolo Scapolare & Specificità da Palleggiatrice:**\n   - Spalla sinistra elevata e anteposta; necessità assoluta di stabilità e forza nei flessori/estensori dei polsi e delle dita per il palleggio di precisione in sospensione.\n\n---",
        "ban": "* ⛔ **BAN Squat Libero Profondo a Terra:**  \n  ➔ **SOSTITUZIONE:** **Box Squat parallelo a 90° (`3010` / `20X0`)**: il box rigido calibra l'inversione di moto, impedisce lo shift pelvico a sinistra e toglie tensione alla periostite tibiale.\n* ⛔ **BAN Drop Jump Alti (>25 cm):** I salti con atterraggio ad alto impatto infiammano il periostio tibiale.  \n  ➔ **SOSTITUZIONE:** **Low Pogo Jumps elastici a terra e Drop Landing da 15-20 cm su Chronojump** con controllo dell'inversione calcaneale.\n* 🛡️ **PREHAB SPECIFICO (Tibiale Posteriore, Anca DX & Polsi):**\n  - Short Foot attivo su superficie rigida + Banded Ankle Inversion (con elastico per il tibiale posteriore sinistro).\n  - Mobilizzazione anca destra 90/90 in intrarotazione attiva (recupero dell'escursione fisiologica).\n  - Wrist Roller e Dumbbell Wrist Curls per avambracci e polsi.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO IMPATTI PLIOMETRICI**. L'RDL è calibrato a sole 2 serie da 4 reps sub-massimali per preservare le gambe per il test match del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "",
              "Note Tecniche": "Registrazione baseline altezza e simmetria"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. 90/90 Hip Mobility (Focus IR Anca DX)",
              "Set x Reps": "2 x 8 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Ginocchio a terra, intrarotazione attiva pura"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Short Foot & Banded Ankle Inversion SX",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Attivazione arco plantare e tibiale post. SX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Parallelo a 90°)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "50 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Enode VBT target: `0.60-0.65 m/s` (stop al -10%)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "10+10 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, testa e spalle stabili a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "32.5 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Busto eretto, depressione scapolare attiva"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio in asse con il 2° dito, caviglia solida"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse e addotte in chiusura"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione attiva, lombare incollata al pavimento"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Wrist Roller / Dumbbell Wrist Flexion-Extension",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "4 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo flessori/estensori polso per il palleggio"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica SX",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Allungamento flessori anca e mobilità torace"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Prone YTWL a terra",
              "Set x Reps": "2 x 8 per lettera",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Attivazione trapezio inferiore e deltoidi post."
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Heel Raise con pallina tra i talloni su gradino",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Inversione forzata, spinta su 1° e 5° metatarso"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto controllato)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "27.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione dinamica, ricezione solida"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (90°)",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "37.5 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva senza stacco piedi"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+10 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Traiettoria diagonale a 30°, tutela spalla SX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomito aderente, retrazione scapolare completa"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Short foot attivo, bacino orizzontale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Gomiti alti, pollici ruotati indietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in ginocchio con cavo/elastico",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, bacino bloccato"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubri bilaterali",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "14+14 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Presa isometrica forte (avambracci e dita)"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Polpacci, Tibiale Anteriore e Glutei",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio miofasciale tricipite surale e periostio"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Mantenere costante la larghezza dei piedi"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "35 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena ferma e compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "35 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" contrazione glutei"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Single-Leg Calf Iso-Hold",
              "Set x Reps": "2 x 15\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Tenuta solida su avampiede"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Tuck Hold",
              "Set x Reps": "3 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch su panca orizzontale",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il tronco"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza pre-amichevole."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Chronojump CMJ (2 salti) + 90/90 Hip IR (2x6/lato) + Short foot & banded ankle (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Chronojump CMJ (2 salti) + 90/90 Hip IR (2x6/lato) + Short foot & banded ankle (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "55 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Enode VBT: `0.65-0.70 m/s`",
                  "Raw": "**Box Squat Dinamico (90°):** 4 x 4 @ 55 kg (\"4\") | Tempo `20X0` | Enode VBT: `0.65-0.70 m/s`."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "12+12 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 12+12 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "35 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 35 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "10+10 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro: 3 x 5+5 @ 10+10 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "12+12 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 12+12 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass contro muro: 3 x 5 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman reach (2x5/lato) + Prone YTWL (2x6) + Heel raise pallina talloni (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman reach (2x5/lato) + Prone YTWL (2x6) + Heel raise pallina talloni (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "30 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 30 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "42.5 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (90°):** 4 x 4 @ 42.5 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+12.5 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +12.5 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "14 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 14 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 15 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller polpacci/ischio (2x40\") + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller polpacci/ischio (2x40\") + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "50 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Carico controllato a buffer 3",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 50 kg (\"5\") | Tempo `3010` (Carico controllato a buffer 3)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Neutra",
                  "Set_Reps": "3 x 5",
                  "Carico": "37.5 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Neutra:** 3 x 5 @ 37.5 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "40 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 40 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +15 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Wrist Roller",
                  "Set_Reps": "3 x 12",
                  "Carico": "5 kg.",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Wrist Roller: 3 x 12 @ 5 kg."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Side Plank con tocco piede",
                  "Set_Reps": "3 x 6 /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tocco piede: 3 x 6 /lato."
                },
                {
                  "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
                  "Set_Reps": "Zero salti.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "**🛑 STRICT FRIDAY JUMP BAN:** Zero salti."
                }
              ]
            }
          ]
        }
      },
      "2": {
        "id": 2,
        "name": "Maria Marcuzzi",
        "number": "#02",
        "role": "Centrale",
        "peso": "72.0 kg",
        "rischio": "🟡 MEDIO (Arco Plantare Lasso + Spalla SX Ipomobile + Butt Wink a 100° + Retrazione Flessori Anca DX)",
        "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactive & Floor\" (Postazione Rack 1)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Perdita del Controllo Lombo-Pelvico nello Squat & Flessori Anca DX:**\n   - La flessione del ginocchio è buona, ma l'accosciata libera scatena un *butt wink* a circa 100° di flessione (sopra il parallelo) causato da forte retrazione dell'ileopsoas e del retto femorale destro.\n2. **Ipomobilità Cingolo Scapolare Sinistro:**\n   - La spalla sinistra si presenta ipomobile in flessione e abduzione attiva sopra i 120° (difficoltà ad aprire l'angolo del braccio a muro). La Floor Chest Press a terra protegge la capsula gleno-omerale.\n3. **Lassità della Volta Plantare & Retropiede:**\n   - Arco plantare lasso con tendenza al collasso mediale sotto carico massimale. Necessita di attivazione con *Short Foot* e stimolo dell'avampiede.\n4. **Specificità del Centrale:**\n   - Richiesta elevatissima di stiffness dei polpacci e stabilità sui cambi di direzione laterali per gli spostamenti a muro a 2 passi e attacchi di primo tempo in sospensione rapida.\n\n---",
        "ban": "* ⛔ **BAN Squat Libero Profondo a Terra (<90°):**  \n  ➔ **SOSTITUZIONE:** **Box Squat rigido a 90° (`3010` / `20X0`)**: impedisce il crollo lombare e protegge il rachide mantenendo l'intenzione di spinta verticale con Enode VBT.\n* 🛡️ **PREHAB SPECIFICO SPALLA SX & FLESSORI ANCA DX:**\n  - De-tensione miofasciale ileopsoas DX con Couch stretch.\n  - Mobilizzazione spalla sinistra in elevazione su panca/roller e retrazioni scapolari a parete.\n  - Short Foot attivo per rinforzare la volta plantare.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO STRESS PLIOMETRICO**. RDL calibrato a 2 sole serie da 4 reps a buffer 3 (RPE 6-7) per proteggere gli ischiocrurali a 24h dall'amichevole del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "",
              "Note Tecniche": "Registrazione baseline altezza e reattività"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. Couch Stretch Flessori Anca DX",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Statico",
              "Note Tecniche": "Allungamento ileopsoas senza inarcare lombare"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Short Foot & Banded Foot Doming",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Sollevamento arco plantare mediale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Parallelo a 90°)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "60 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Enode VBT: `0.60-0.65 m/s` (stop al -10%)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "14+14 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, tutela spalla sinistra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Depressione scapolare, trazione al petto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat bulgaro con manubri",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Bacino in asse, ginocchio stabile"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "12+12 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomiti larghi, attivazione romboidi"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball schiacciata",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione attiva, lombare incollata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Standing Calf Raise su rialzo con disco",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione per il tendine d'Achille"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica SX",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Apertura torace e mobilità cingolo sinistro"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Scapular Wall Slide a contatto continuo",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Spalla SX guidata verso l'alto senza alzare trapezio"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Calf raise monopodalico con sosta in alto",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Mantenimento asse calcagno-tendine"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto bilanciere)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "32.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione dinamica, arrivo reattivo"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (90°)",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica violenta senza staccare piedi"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Traiettoria diagonale a 30°, zero stress spalla SX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "16 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomito stretto, retrazione scapolare completa"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Cerniera d'anca profonda, ischiocrurali tesi"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con corda",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Cavo alto, pollici verso dietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, tronco immobile"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubri pesanti",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "18+18 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Scapole depresse e addotte, postura eretta"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Polpacci e Glutei",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio miofasciale catena posteriore"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Mantenere costante la tensione alle ginocchia"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena ferma e compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "40 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" fermo al top"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su gradino bilaterale",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Discesa eccentrica profonda per il tendine"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a braccia lungo i fianchi",
              "Set x Reps": "3 x 25\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch con fitball tra le caviglie",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "Fitball",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il torace"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza pre-amichevole."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Chronojump CMJ (2 salti) + Couch stretch (2x40\") + Short foot (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Chronojump CMJ (2 salti) + Couch stretch (2x40\") + Short foot (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "65 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Enode VBT: `0.65-0.70 m/s`",
                  "Raw": "**Box Squat Dinamico (90°):** 4 x 4 @ 65 kg (\"4\") | Tempo `20X0` | Enode VBT: `0.65-0.70 m/s`."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "16+16 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 16+16 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12+12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro: 3 x 5+5 @ 12+12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "14+14 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 14+14 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass contro muro: 3 x 5 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman reach (2x5/lato) + Scapular wall slides (2x8) + Calf raise monopodalico (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman reach (2x5/lato) + Scapular wall slides (2x8) + Calf raise monopodalico (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "35 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 35 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (90°):** 4 x 4 @ 50 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "18 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 18 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller polpacci/ischio (2x40\") + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller polpacci/ischio (2x40\") + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "62.5 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 62.5 kg (\"5\") | Tempo `3010` (Buffer 3)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Neutra",
                  "Set_Reps": "3 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Neutra:** 3 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "45 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 45 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +20 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Dumbbell Pullover su panca",
                  "Set_Reps": "3 x 8",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover su panca: 3 x 8 @ 14 kg | Tempo `2010`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Side Plank con tenuta isometrica",
                  "Set_Reps": "3 x 20\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tenuta isometrica: 3 x 20\" /lato."
                },
                {
                  "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
                  "Set_Reps": "Zero salti.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "**🛑 STRICT FRIDAY JUMP BAN:** Zero salti."
                }
              ]
            }
          ]
        }
      },
      "3": {
        "id": 3,
        "name": "Victoria Sassolini",
        "number": "#03",
        "role": "Schiacciatrice",
        "peso": "67.0 kg",
        "rischio": "🔴 ALTO (Esiti Frattura Tibia DX con Mezzi di Sintesi + Ipomobilità Anca DX + Shift Pelvico a DX + Asimmetria Tricipite Surale)",
        "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 1 con Asonja e Bole)",
        "triage": "### Criticità Funzionali & Pregresso Ortopedico Rilevato\n1. **Esiti di Frattura Spiroide Tibia Destra (Placca e Viti):**\n   - Intervento chirurgico con mezzi di sintesi ancora presenti. La tibia destra presenta una ridotta tolleranza ai microtraumi da impatto assiale violento e un deficit di stiffness elastica rispetto all'arto sinistro sano.\n2. **Deficit Meccanico d'Anca Destra & Lateral Shift nello Squat:**\n   - La rotazione interna dell'anca destra è limitata (rigidità capsulare post-traumatica).\n   - Nello squat libero si evidenzia un netto **lateral shift del bacino verso destra**, caricando in modo disfunzionale la gamba operata e torcendo il rachide lombare.\n3. **Rigidità Asimmetrica del Tendine d'Achille & Tricipite Surale:**\n   - Il polpaccio destro risulta retratto e ipertonico a protezione della cicatrice ossea, con una dorsiflessione della caviglia che blocca l'accosciata a circa 85°.\n4. **Specificità Schiacciatrice:**\n   - Atleta con carichi di salto e colpi d'attacco elevati: necessita di proteggere la spalla destra con la Floor Press e di dissipare gli atterraggi simmetricamente.\n\n---",
        "ban": "* ⛔ **BAN Clean to Split con Bilanciere:** L'atterraggio in split violento monopodalico può provocare impatti di taglio sulla tibia destra operata.  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Powerbag Clean to Chest (`X`)**: la ricezione della sacca zavorrata al petto ammortizza l'impatto, le maniglie parallele mantengono i polsi in sicurezza e l'atterraggio è in **semi-squat parallelo simmetrico**, costringendo entrambi gli arti a distribuire il carico al 50%.\n* ⛔ **BAN Squat Libero a Terra senza Riferimento:**  \n  ➔ **SOSTITUZIONE:** **Box Squat rigido a 90° con Miniband sopra le ginocchia (`3010` / `20X0`)**: l'elastico impedisce il cedimento mediale e il box corregge lo shift pelvico a destra, monitorato dal sensore Enode VBT.\n* 🛡️ **PREHAB SPECIFICO (Tibia DX, Anca DX & Caviglia):**\n  - Allungamento miofasciale profondo del tricipite surale destro su cuneo/gradino (`3010`).\n  - Mobilizzazione 90/90 anca destra in intrarotazione.\n  - Attivazione del core anti-rotazione (Pallof press) e anti-estensione (Deadbug).\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI, ZERO BALZI PLIOMETRICI**. L'RDL è ridotto a sole 2 serie da 4 reps sub-massimali a buffer 3 per non affaticare gli ischiocrurali prima del test match del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "",
              "Note Tecniche": "Registrazione baseline altezza e simmetria"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. 90/90 Hip Mobility (Focus IR Anca DX)",
              "Set x Reps": "2 x 8 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Mobilità rotatori senza compenso lombare"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Polpaccio DX Eccentrico Lento su gradino",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3012`",
              "Note Tecniche": "Allungamento profondo tendine d'Achille DX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Parallelo 90°) con Miniband",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "60 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Enode VBT: `0.60-0.65 m/s` (stop al -10%)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "14+14 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, stop a terra senza perdere tensione"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Depressione scapolare, trazione al petto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat con manubri (supporto al muro)",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Arto DX: ginocchio perpendicolare al 2° dito"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "12+12 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Presa neutra, retrazione scapolare completa"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione costante, lombare incollata a terra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Standing Calf Raise su gradino con disco",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Spinta su 1° e 5° metatarso, discesa controllata"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Mobilità anche + estensione toracica"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Prone Trap-3 Raise su panca inclinata",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "Manubri 3+3 kg",
              "Tempo": "`1012`",
              "Note Tecniche": "Ritmo scapolare schiacciatrice, braccia a Y"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot su pedana rigida (piede DX)",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Mantenimento arco mediale e dita distese"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Powerbag Clean to Chest (Sub. Split Clean)",
              "Set x Reps": "4 x 4",
              "Carico (kg/RPE)": "Bag 15-20 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione dinamica, ricezione parallela al petto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (90°) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva senza stacco piedi"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Traiettoria su piano scapolare, salva spalla d'attacco"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "16 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto parallelo, gomito stretto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Perno su arto DX con ginocchio sbloccato a 15°"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Cavo alto, pollici verso dietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, bacino squadrato"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubri pesanti",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "18+18 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Spalle depresse, presa salda"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Polpaccio DX e Ischiocrurali",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio trigger point muscolatura contratta"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Ginocchia aperte allineate col 2° dito"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra con piedi a sfioro",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena ferma e compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "40 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" fermo al top"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Single-Leg Calf Iso-Hold arto DX",
              "Set x Reps": "2 x 15\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Tenuta solida su avampiede destro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a gambe tese",
              "Set x Reps": "3 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch su panca inclinata",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il torace"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza pre-amichevole."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Chronojump CMJ (2 salti) + 90/90 IR DX (2x6) + Polpaccio eccentrico DX (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Chronojump CMJ (2 salti) + 90/90 IR DX (2x6) + Polpaccio eccentrico DX (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "65 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Enode VBT: `0.65-0.70 m/s`",
                  "Raw": "**Box Squat Dinamico (90°):** 4 x 4 @ 65 kg (\"4\") | Tempo `20X0` | Enode VBT: `0.65-0.70 m/s`."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "16+16 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 16+16 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat con manubri",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12+12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat con manubri: 3 x 5+5 @ 12+12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "14+14 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 14+14 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass contro muro: 3 x 5 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman reach (2x5/lato) + Trap-3 raise (2x8) + Short foot DX (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman reach (2x5/lato) + Trap-3 raise (2x8) + Short foot DX (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Powerbag Clean to Chest",
                  "Set_Reps": "4 x 4",
                  "Carico": "Bag 20 kg",
                  "Tempo": "X",
                  "Note": "Esplosione e arrivo parallelo",
                  "Raw": "**Powerbag Clean to Chest:** 4 x 4 @ Bag 20 kg | Tempo `X` (Esplosione e arrivo parallelo)."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (90°):** 4 x 4 @ 50 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "18 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 18 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller polpacci/ischio (2x40\") + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller polpacci/ischio (2x40\") + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "62.5 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 62.5 kg (\"5\") | Tempo `3010` (Buffer 3)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Neutra",
                  "Set_Reps": "3 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Neutra:** 3 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "45 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 45 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +20 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Dumbbell Pullover su panca",
                  "Set_Reps": "3 x 8",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover su panca: 3 x 8 @ 14 kg | Tempo `2010`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Side Plank con tenuta",
                  "Set_Reps": "3 x 20\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tenuta: 3 x 20\" /lato."
                },
                {
                  "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
                  "Set_Reps": "Zero salti.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "**🛑 STRICT FRIDAY JUMP BAN:** Zero salti."
                }
              ]
            }
          ]
        }
      },
      "4": {
        "id": 4,
        "name": "Anja Asonja",
        "number": "#04",
        "role": "Opposto",
        "peso": "77.0 kg",
        "rischio": "🟡/🔴 MEDIO-ALTO (Tendinopatia Rotulea Cronica Overuse + Valgismo Dinamico Ginocchio DX + Spalla d'Attacco Sovraccarico)",
        "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 1 con Sassolini e Bole)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Tendinopatia Rotulea Cronica Bilaterale (Overuse Salto):**\n   - Pregressa sintomatologia dolorosa all'apice inferiore della rotula (trattata in precedenza con Tecar).\n   - L'ipertono del quadricipite e le forze di taglio in inversione di moto rapida scatenano micro-infiammazioni tendinee.\n2. **Deficit Podalico Bilaterale & Valgismo Dinamico Arto DX:**\n   - Crollo mediale in eversione dell'arco plantare causato da ipovalidità del tibiale posteriore.\n   - Nello Step Over e negli atterraggi, il ginocchio destro collassa medialmente in valgismo dinamico per ritardo di reclutamento del gluteo medio destro.\n3. **Squat Test & Asimmetria d'Appoggio:**\n   - Shift a destra in fase concentrica dello squat; forte retrazione dei flessori d'anca (ileopsoas bilaterale, peggiore a sinistra).\n4. **Cingolo Scapolare & Spalla d'Attacco:**\n   - Rigidità della spalla destra a fine seduta e deficit di mobilità sopra i 120° in abduzione. La Floor Chest Press a terra protegge la cuffia azzerando l'anteriorizzazione dell'omero.\n\n---",
        "ban": "* ⛔ **BAN Squat Libero Profondo con Rimbalzo:**  \n  ➔ **SOSTITUZIONE:** **Box Squat rigido a 90° con Miniband sopra le ginocchia (`3010` / `20X0`)**: il box rigido elimina l'inversione elastica brusca al polo inferiore della rotula; l'elastico costringe il gluteo medio a spingere in fuori contrastando il valgismo del ginocchio destro.\n* 🛡️ **PREHAB SPECIFICO ANALGESICO (Protocollo Cook/Rio Tendine Rotuleo):**\n  - **Spanish Squat Isometrico con elastico pesante a 90° (3-5 serie × 30-45\" di tenuta)** prima di qualsiasi carico: induce analgesia corticale immediata e stimola la sintesi di collagene.\n  - Clamshell con miniband per attivazione gluteo medio destro.\n  - Allungamento miofasciale ileopsoas e quadricipite su foam roller.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO IMPATTI PLIOMETRICI**. L'RDL è ridotto a sole 2 serie da 4 reps sub-massimali a buffer 3 (RPE 6-7) per proteggere i tendini rotulei e gli ischiocrurali a 24h dall'amichevole del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "",
              "Note Tecniche": "Registrazione baseline altezza e reattività"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. Spanish Squat Isometrico con elastico",
              "Set x Reps": "3 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Analgesia rotulea pura, tibie verticali a 90°"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Clamshell con Miniband (fianco SX)",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1012`",
              "Note Tecniche": "Attivazione gluteo medio destro anti-valgo"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Parallelo 90°) con Miniband",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "65 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Enode VBT: `0.60-0.65 m/s` (stop al -10%)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "16+16 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, stop a terra salva-cuffia spalla DX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "42.5 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Depressione scapolare attiva, trazione al petto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat bulgaro (piede anteriore rialzato 5cm)",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio DX perfettamente allineato al 2° dito"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "14+14 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Presa neutra, retrazione scapolare completa"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione costante, lombare incollata a terra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Standing Calf Raise su gradino con disco",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Controllo retropiede, discesa lenta 2\""
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con allungamento ileopsoas",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Mobilità bacino e flessori anca"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Extrarotazioni spalla DX al cavo con spalla a 0°",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Cavo 5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Gomito stretto al fianco, rinforzo sottospinato"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot & Banded Ankle Inversion",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo arco plantare mediale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (o Powerbag Clean)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "35 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Se fastidio rotuleo: Powerbag Clean to Chest"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (90°) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "50 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva senza rimbalzo"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Spinta su piano scapolare a 30°, tutela spalla DX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "16 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto orizzontale, retrazione scapolare"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Cerniera d'anca profonda, ischiocrurali tesi"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Gomiti alti, pollici ruotati indietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, tronco immobile"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubri pesanti",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "18+18 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Scapole depresse, camminata solida"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Quadricipite DX e Tendine Rotuleo",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "De-tensione apparato estensore ginocchio"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Spinta costante verso l'esterno"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra con piedi a sfioro",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "60 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero fatica neurale pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "45 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" contrazione glutei"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "14 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise bilaterale su rialzo",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima escursione eccentrica per il tendine d'Achille"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a gambe tese",
              "Set x Reps": "3 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch su panca orizzontale",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il tronco"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza pre-amichevole."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Chronojump CMJ (2 salti) + Spanish Squat isometrico (3x45\") + Clamshell elastico DX (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Chronojump CMJ (2 salti) + Spanish Squat isometrico (3x45\") + Clamshell elastico DX (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "70 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Enode VBT: `0.65-0.70 m/s`",
                  "Raw": "**Box Squat Dinamico (90°):** 4 x 4 @ 70 kg (\"4\") | Tempo `20X0` | Enode VBT: `0.65-0.70 m/s`."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "18+18 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 18+18 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12+12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro: 3 x 5+5 @ 12+12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "16+16 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 16+16 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass contro muro: 3 x 5 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman reach (2x5/lato) + Extrarotazione spalla DX (2x8) + Short foot (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman reach (2x5/lato) + Extrarotazione spalla DX (2x8) + Short foot (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position (o Powerbag Clean)",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "37.5 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position (o Powerbag Clean):** 4 x 3+3 @ 37.5 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "55 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (90°):** 4 x 4 @ 55 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "18 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 18 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "67.5 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 67.5 kg (\"5\") | Tempo `3010` (Buffer 3)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Neutra",
                  "Set_Reps": "3 x 5",
                  "Carico": "50 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Neutra:** 3 x 5 @ 50 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "50 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 50 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +20 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Dumbbell Pullover su panca",
                  "Set_Reps": "3 x 8",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover su panca: 3 x 8 @ 14 kg | Tempo `2010`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Side Plank con tenuta",
                  "Set_Reps": "3 x 20\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tenuta: 3 x 20\" /lato."
                },
                {
                  "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
                  "Set_Reps": "Zero salti.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "**🛑 STRICT FRIDAY JUMP BAN:** Zero salti."
                }
              ]
            }
          ]
        }
      },
      "5": {
        "id": 5,
        "name": "Chiara Lo Dico",
        "number": "#05",
        "role": "Libero",
        "peso": "62.0 kg",
        "rischio": "🟡 MEDIO (Esiti Osgood-Schlatter Ginocchio DX + Caviglia DX Rigida + Regole Specifiche Ruolo Libero)",
        "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactive & Floor\"",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Esiti di Sindrome di Osgood-Schlatter (Apofisite Tibiale DX):**\n   - Tuberosità tibiale anteriore destra prominente con sensibilità a carichi flessori acuti a ginocchio iperflesso (>100°).\n   - Tendenza al sovraccarico rotuleo negli affondi profondi.\n2. **Deficit Dorsiflessione Caviglia Destra & Meccanica d'Accosciata:**\n   - La caviglia destra presenta una mobilità sagittale ridotta rispetto alla sinistra. Nello squat libero, l'accosciata profonda scatena un compenso pelvico per mancato scivolamento della tibia.\n3. **Specificità Assoluta Ruolo Libero:**\n   - Nel ruolo di libero non vi è alcuna necessità di eseguire distensioni orizzontali pesanti con bilanciere (panca piana) né rematori pesanti con bilanciere, che aumentano la rigidità scapolare e peggiorano l'angolo di ricezione/difesa a terra.\n   - È invece vitale la rapidità d'arresto a baricentro basso, la stabilità del core sui piani trasversi e la mobilità reattiva delle caviglie.\n\n---",
        "ban": "* ⛔ **BAN ASSOLUTO Panca Piana con Bilanciere & Rematore Pesante Bilanciere (Regola Specifica Libero):**  \n  ➔ **SOSTITUZIONE SPECIFICA:**\n  - **Prone Y-Raise con manubri leggeri (`2012`)**: attiva i fissatori inferiori della scapola senza comprimere le spalle.\n  - **Single-Arm Cable Row al cavo medio (`2011`)**: trazione orizzontale funzionale asimmetrica senza carico assiale sulla colonna.\n  - **Low Medball Slam a terra (`X`)**: potenza esplosiva della cerniera d'anca e del core senza impatti.\n* ⚖️ **ADATTAMENTO SQUAT:** **Box Squat calibrato all'80% di profondità con Miniband sopra le ginocchia (`3010` / `20X0`)**: protegge l'apofisi tibiale destra, non sovraccarica la rotula e garantisce la corretta stiffness muscolare per la difesa.\n* 🛡️ **PREHAB SPECIFICO (Caviglia DX & Fissatori Scapolari):**\n  - Knee-to-Wall con fascia elastica per la caviglia destra (mobilizzazione dell'astragalo).\n  - Foam roller su quadricipite e rotula destra.\n  - Scapular Wall Slide a contatto continuo.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO IMPATTI**. L'RDL è ridotto a 2 serie da 4 reps sub-massimali a buffer 3 per non appesantire le gambe prima dell'amichevole del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "",
              "Note Tecniche": "Registrazione baseline altezza e reattività"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. Knee-to-Wall Ankle Mobility DX con elastico",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Band",
              "Tempo": "`2012`",
              "Note Tecniche": "Ginocchio avanzato oltre il 2° dito"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Scapular Wall Slide a contatto continuo",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Depressione e retrazione scapolare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (@80% ROM) con Miniband",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Enode VBT: `0.60-0.65 m/s` (stop al -10%)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Prone Y-Raise su panca inclinata 30° (Sub. Panca)",
              "Set x Reps": "4 x 10",
              "Carico (kg/RPE)": "3+3 kg (\"6\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Solo trapezio inferiore e deltoidi post."
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "32.5 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Busto stabile, discesa 3\", depressione attiva"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Step Down eccentrico controllato da box 15cm",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "BW + Man. 4+4 kg",
              "Tempo": "`3010`",
              "Note Tecniche": "Discesa controllata 3\", ginocchio DX in asse"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Arm Cable Row al cavo (Sub. Row BB)",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "17.5 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomito stretto, rotazione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione attiva, lombare incollata a terra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Standing Calf Raise su rialzo",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+10 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione per il tendine d'Achille"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Mobilità flessori anca e cassa toracica"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Quadricipite e Rotula DX",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "De-tensione apparato estensore ginocchio"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot su pedana rigida",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Mantenimento volta plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto controllato)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "25 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Split moderato, baricentro basso in ricezione"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (@80%) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "37.5 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva, ginocchia salde"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+10 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Spinta su piano scapolare a 30°, core compatto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Chest-Supported Dumbbell Row (Presa Neutra)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "12+12 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Petto su panca 30°, retrazione scapolare"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con Kettlebell",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Cerniera d'anca pura, bacino parallelo"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Banded Face Pull con doppia extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Gomiti alti, pollici ruotati indietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press da mezzo-squat difensivo",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Postura da ricezione volley, anti-rotazione"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Low Medball Slam a terra (ginocchia semiflesse)",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "Medball 4 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Schiacciata a terra senza flettere la schiena"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Ischiocrurali e Glutei",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio miofasciale catena posteriore"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Ginocchia in spinta esterna costante"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso Presa Larga a Gomiti Aperti",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "30 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione orizzontale decompressiva, petto fiero"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge a terra bilaterale con bilanciere",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "35 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" contrazione glutei"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover leggero su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "8 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su gradino",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+10 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Allineamento asse caviglia-tallone"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Tuck Hold",
              "Set x Reps": "3 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Tenuta addominale compatta"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk monolaterale con manubrio (Suitcase)",
              "Set x Reps": "3 x 15m /lato",
              "Carico (kg/RPE)": "14 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Postura eretta, spalle simmetriche"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza reattiva pre-gara."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Chronojump CMJ (2 salti) + Knee-to-wall caviglia DX (2x8) + Scapular wall slides (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Chronojump CMJ (2 salti) + Knee-to-wall caviglia DX (2x8) + Scapular wall slides (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (@80% ROM)",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Enode VBT: `0.65-0.70 m/s`",
                  "Raw": "**Box Squat Dinamico (@80% ROM):** 4 x 4 @ 50 kg (\"4\") | Tempo `20X0` | Enode VBT: `0.65-0.70 m/s`."
                },
                {
                  "Esercizio": "Prone Y-Raise Manubri",
                  "Set_Reps": "4 x 8",
                  "Carico": "4+4 kg (\"5\")",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "**Prone Y-Raise Manubri:** 4 x 8 @ 4+4 kg (\"5\") | Tempo `2012`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "35 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 35 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Step Down da box con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "6 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Step Down da box con KB: 3 x 5+5 @ 6 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Single-Arm Cable Row",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "20 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Single-Arm Cable Row: 3 x 6+6 @ 20 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Low Medball Slam a terra",
                  "Set_Reps": "3 x 4",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Low Medball Slam a terra: 3 x 4 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "MFR quadricipite DX (2x40\") + Clamshell elastico (2x8) + Calf raise monopodalico (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "MFR quadricipite DX (2x40\") + Clamshell elastico (2x8) + Calf raise monopodalico (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "27.5 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 27.5 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (@80%)",
                  "Set_Reps": "4 x 4",
                  "Carico": "42.5 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (@80%):** 4 x 4 @ 42.5 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+12.5 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +12.5 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Chest Supported DB Row",
                  "Set_Reps": "4 x 5",
                  "Carico": "14+14 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Chest Supported DB Row:** 4 x 5 @ 14+14 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 15 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico da mezzo-squat con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico da mezzo-squat con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw basso contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw basso contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman stretch (2x5/lato) + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman stretch (2x5/lato) + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "50 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 50 kg (\"5\") | Tempo `3010` (Buffer 3)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Larga",
                  "Set_Reps": "3 x 5",
                  "Carico": "35 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Larga:** 3 x 5 @ 35 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "40 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 40 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +15 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold compatto",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold compatto: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Suitcase Carry con KB",
                  "Set_Reps": "3 x 15m /lato",
                  "Carico": "16 kg.",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Suitcase Carry con KB: 3 x 15m /lato @ 16 kg."
                },
                {
                  "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
                  "Set_Reps": "Zero salti.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "**🛑 STRICT FRIDAY JUMP BAN:** Zero salti."
                }
              ]
            }
          ]
        }
      },
      "6": {
        "id": 6,
        "name": "Gaia Biondi",
        "number": "#06",
        "role": "Centrale",
        "peso": "70.0 kg",
        "rischio": "🔴 ALTO (Dolore Rotuleo DX Attivo + Fascite Plantare SX + Retrazione Severa Quadricipite DX + Rotazione Bacino)",
        "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactive & Floor\" (Postazione Rack 1 con Marcuzzi)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Dolore Rotuleo Destro Attivo (Tendinopatia Reattiva):**\n   - Sintomatologia dolorosa acuta all'apice inferiore della rotula destra, esacerbata dai rimbalzi veloci e dalle discese eccentriche senza supporto.\n2. **Fascite Plantare Sinistra & Crollo Mediale:**\n   - Infiammazione e rigidità della fascia plantare sinistra con mancata ammortizzazione podalica al suolo, che costringe a scaricare le forze in diagonale sull'arto destro.\n3. **Retrazione Marcata del Quadricipite / Retto Femorale DX:**\n   - La flessione del ginocchio da prono è ridotta e scatena un compenso pelvico in antiversione forzata già a 90°. Nello squat libero, la discesa asimmetrica induce una rotazione del bacino a destra con perdita del controllo lombare (*butt wink* precoce).\n4. **Specificità del Centrale:**\n   - Elevatissimo volume di salti a muro e primo tempo: necessita di eliminare il dolore rotuleo prima di saltare e di conservare la capacità di spostamento laterale rapido.\n\n---",
        "ban": "* ⛔ **BAN Clean to Split con Bilanciere:**  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Powerbag Clean to Chest (`X`)**: l'incastro al petto in semi-squat parallelo simmetrico azzera lo shock monolaterale sul tendine rotuleo destro dolente e distribuisce l'impatto.\n* ⛔ **BAN Squat Libero senza Box:**  \n  ➔ **SOSTITUZIONE:** **Box Squat rigido a 90° con Miniband sopra le ginocchia (`3010` / `20X0`)**: il box rigido toglie l'inversione di moto elastica sulla rotula, guidato dal monitoraggio Enode VBT.\n* 🛡️ **PREHAB SPECIFICO ANALGESICO & PODALICO:**\n  - **Spanish Squat Isometrico con elastico spesso ancorato (3-4 serie × 45\" a 90°)** prima di qualsiasi carico: analgesia immediata del tendine rotuleo destro.\n  - Rilascio miofasciale con pallina da lacrosse sotto la fascia plantare sinistra.\n  - Couch Stretch e foam roller per il quadricipite/retto femorale destro.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO PLIOMETRIA**. L'RDL è calibrato a 2 sole serie da 4 reps a buffer 3 (RPE 6-7) per proteggere i tendini e gli ischiocrurali a 24h dal test match del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "",
              "Note Tecniche": "Registrazione baseline altezza e reattività"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. Spanish Squat Isometrico con elastico",
              "Set x Reps": "3 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Analgesia rotula DX, tibie verticali a 90°"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. MFR Fascia Plantare SX con pallina lacrosse",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Pressione lenta",
              "Note Tecniche": "Rilascio trigger point arco mediale sinistro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Parallelo 90°) con Miniband",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Enode VBT: `0.60-0.65 m/s` (stop al -10%)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "14+14 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, stop a terra senza forzare spalle"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Busto compatto, depressione scapolare attiva"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat isometrico a 90° (focus arto DX)",
              "Set x Reps": "3 x 15\"+15\"",
              "Carico (kg/RPE)": "BW + Man. 6+6 kg",
              "Tempo": "Isometrico",
              "Note Tecniche": "Tenuta solida senza carico sul tendine rotuleo"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "12+12 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole addotte e depresse in chiusura"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione costante, lombare incollata a terra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Standing Calf Raise bilaterale su gradino",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Escursione profonda, fermo 2\" in alto"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con allungamento ileopsoas",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Mobilità flessori anca e cassa toracica"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Couch Stretch profondo Quadricipite DX",
              "Set x Reps": "2 x 40\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Statico",
              "Note Tecniche": "De-tensione retto femorale destro retratto"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot & Banded Ankle Inversion",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Attivazione arco plantare sinistro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Powerbag Clean to Chest (Sub. Split Clean)",
              "Set x Reps": "4 x 4",
              "Carico (kg/RPE)": "Bag 15-20 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione dinamica, ricezione parallela al petto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (90°) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva senza rimbalzo"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Traiettoria su piano scapolare a 30°"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "16 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto orizzontale, gomito stretto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Cerniera d'anca profonda, ischiocrurali tesi"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Cavo alto, pollici ruotati indietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, tronco immobile"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubri pesanti",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "18+18 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Scapole depresse, postura eretta"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Quadricipite DX e Tendine Rotuleo",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "De-tensione apparato estensore ginocchio"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Ginocchia in spinta esterna costante"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero fatica neurale pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena ferma e compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "40 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" contrazione glutei"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su rialzo bilaterale",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima escursione eccentrica per il tendine d'Achille"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Tuck Hold",
              "Set x Reps": "3 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch con fitball tra le caviglie",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "Fitball",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il tronco"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza pre-amichevole."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Chronojump CMJ (2 salti) + Spanish Squat isometrico (3x45\") + MFR fascia plantare SX (2x40\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Chronojump CMJ (2 salti) + Spanish Squat isometrico (3x45\") + MFR fascia plantare SX (2x40\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "60 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Enode VBT: `0.65-0.70 m/s`",
                  "Raw": "**Box Squat Dinamico (90°):** 4 x 4 @ 60 kg (\"4\") | Tempo `20X0` | Enode VBT: `0.65-0.70 m/s`."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "16+16 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 16+16 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat isometrico a 90°",
                  "Set_Reps": "3 x 15\"+15\"",
                  "Carico": "manubri 8+8 kg.",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Split Squat isometrico a 90°: 3 x 15\"+15\" @ manubri 8+8 kg."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "14+14 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 14+14 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass contro muro: 3 x 5 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Couch stretch DX (2x40\") + Scapular wall slides (2x8) + Short foot SX (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Couch stretch DX (2x40\") + Scapular wall slides (2x8) + Short foot SX (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Powerbag Clean to Chest",
                  "Set_Reps": "4 x 4",
                  "Carico": "Bag 20 kg",
                  "Tempo": "X",
                  "Note": "Esplosione d'anca e arrivo compatto",
                  "Raw": "**Powerbag Clean to Chest:** 4 x 4 @ Bag 20 kg | Tempo `X` (Esplosione d'anca e arrivo compatto)."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (90°):** 4 x 4 @ 50 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "18 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 18 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "62.5 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 62.5 kg (\"5\") | Tempo `3010` (Buffer 3)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Neutra",
                  "Set_Reps": "3 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Neutra:** 3 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "45 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 45 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +20 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Dumbbell Pullover su panca",
                  "Set_Reps": "3 x 8",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover su panca: 3 x 8 @ 14 kg | Tempo `2010`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Side Plank con tenuta",
                  "Set_Reps": "3 x 20\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tenuta: 3 x 20\" /lato."
                },
                {
                  "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
                  "Set_Reps": "Zero salti.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "**🛑 STRICT FRIDAY JUMP BAN:** Zero salti."
                }
              ]
            }
          ]
        }
      },
      "7": {
        "id": 7,
        "name": "Elisa Bole",
        "number": "#07",
        "role": "Schiacciatrice",
        "peso": "71.0 kg",
        "rischio": "🔴 ALTO (Tendinopatia Quadricipitale SX + Instabilità Podalica DX + Valgismo Dinamico Arto DX + Butt Wink a 80°)",
        "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 1 con Asonja e Sassolini)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Tendinopatia Quadricipitale Sinistra (Inserzione Sovrarotulea):**\n   - Dolore e tensione alla giunzione miotendinea del retto femorale sinistro sopra il polo superiore della rotula, esacerbato da carichi eccentrici profondi senza battuta.\n2. **Instabilità Podalica Destra & Valgismo Dinamico Arto DX:**\n   - Retropiede destro con mancata inversione calcaneale in SLS; crollo dell'arco mediale che scatena un cedimento marcato in **valgismo dinamico al ginocchio destro** nello Step Over.\n3. **Squat Test & Butt Wink Precoce a 80°:**\n   - L'accosciata libera si blocca a circa 80° al ginocchio (sopra il parallelo) con immediata perdita delle curve fisiologiche lombari (*butt wink* severo) per retrazione della catena anteriore.\n4. **Specificità Schiacciatrice:**\n   - Atleta titolare d'attacco: necessita di proteggere la spalla con la Floor Chest Press e di stabilizzare il ginocchio destro per evitare distorsioni o sovraccarichi patellari negli stacchi e atterraggi da posto 4.\n\n---",
        "ban": "* ⛔ **BAN Squat Libero Profondo a Terra (<85°):**  \n  ➔ **SOSTITUZIONE:** **Box Squat rigido a 85°-90° con Miniband sopra le ginocchia (`3010` / `20X0`)**: il box rigido calibra l'inversione di moto togliendo tensione al tendine quadricipitale sinistro; l'elastico costringe il gluteo medio destro ad aprirsi contrastando il valgismo.\n* 🛡️ **PREHAB SPECIFICO TENDINEO & PODALICO:**\n  - De-tensione miofasciale quadricipite sinistro con foam roller.\n  - Short Foot attivo su superficie dura per il piede destro (alluce e 5° metatarso saldi).\n  - Step Down eccentrico controllato da box basso (15 cm) guidando l'allineamento dell'arto destro.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO IMPATTI PLIOMETRICI**. L'RDL è ridotto a 2 serie da 4 reps a buffer 3 (RPE 6-7) per proteggere gli ischiocrurali a 24h dall'amichevole del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "",
              "Note Tecniche": "Registrazione baseline altezza e reattività"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1B. Foam Roller Quadricipite SX (Sovrarotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "De-tensione tendine quadricipite sinistro"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "1C. Short Foot & Banded Ankle Inversion DX",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Attivazione arco plantare destro anti-valgo"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Parallelo 85°-90°) con Miniband",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "60 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Enode VBT: `0.60-0.65 m/s` (stop al -10%)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "14+14 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, stop a terra salva-cuffia"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Busto stabile, depressione scapolare attiva"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Step Down eccentrico controllato da box 15cm",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "BW + Man. 6+6 kg",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio DX perfettamente in asse col 2° dito"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "12+12 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole addotte e depresse in chiusura"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione costante, lombare incollata a terra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Standing Calf Raise su gradino con disco",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Spinta uniforme su 1° e 5° metatarso"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Mobilità flessori anca e cassa toracica"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Prone YTWL a terra",
              "Set x Reps": "2 x 8 per lettera",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Fissatori della scapola e cuffia dei rotatori"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Clamshell con Miniband su fianco SX",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1012`",
              "Note Tecniche": "Attivazione gluteo medio destro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto bilanciere)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "32.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione dinamica, ricezione solida"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (85°) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva senza rimbalzo"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Spinta su piano scapolare a 30°"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "16 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto orizzontale, gomito stretto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Cerniera d'anca profonda, ischiocrurali tesi"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Cavo alto, pollici ruotati indietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, tronco immobile"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubri pesanti",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "18+18 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Scapole depresse, postura eretta"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Polpacci e Glutei",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio miofasciale catena posteriore"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Ginocchia in spinta esterna costante"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra con piedi a sfioro",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero fatica neurale pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena ferma e compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "40 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" contrazione glutei"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su gradino bilaterale",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+15 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima escursione eccentrica per il tendine d'Achille"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a gambe tese",
              "Set x Reps": "3 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch su panca orizzontale",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il tronco"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza pre-amichevole."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Chronojump CMJ (2 salti) + Foam roller quadricipite SX (2x40\") + Short foot DX (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Chronojump CMJ (2 salti) + Foam roller quadricipite SX (2x40\") + Short foot DX (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (85°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "65 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Enode VBT: `0.65-0.70 m/s`",
                  "Raw": "**Box Squat Dinamico (85°):** 4 x 4 @ 65 kg (\"4\") | Tempo `20X0` | Enode VBT: `0.65-0.70 m/s`."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "16+16 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 16+16 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Step Down da box 15cm",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "manubri 8+8 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Step Down da box 15cm: 3 x 5+5 @ manubri 8+8 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "14+14 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 14+14 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass contro muro: 3 x 5 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman reach (2x5/lato) + Clamshell DX (2x8) + Short foot DX (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman reach (2x5/lato) + Clamshell DX (2x8) + Short foot DX (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "35 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 35 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (85°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (85°):** 4 x 4 @ 50 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "18 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 18 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "62.5 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 62.5 kg (\"5\") | Tempo `3010` (Buffer 3)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Neutra",
                  "Set_Reps": "3 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Neutra:** 3 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "45 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 45 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +20 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Dumbbell Pullover su panca",
                  "Set_Reps": "3 x 8",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover su panca: 3 x 8 @ 14 kg | Tempo `2010`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Side Plank con tenuta",
                  "Set_Reps": "3 x 20\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tenuta: 3 x 20\" /lato."
                },
                {
                  "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
                  "Set_Reps": "Zero salti.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "**🛑 STRICT FRIDAY JUMP BAN:** Zero salti."
                }
              ]
            }
          ]
        }
      },
      "8": {
        "id": 8,
        "name": "Federica Nonnati",
        "number": "#08",
        "role": "Opposto",
        "peso": "77.0 kg",
        "rischio": "🔴 ALTO (Catena Anteriore Retratta + Shift Pelvico + Instabilità Podalica Bilaterale)",
        "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 2 con Dodi, Caserta e Adamczewska)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Retrazione Severa della Catena Anteriore & Retto Femorale:**\n   - La flessione del ginocchio da prono è clamorosamente bloccata a soli **70°** (tensione lancinante alla coscia anteriore), a fronte di una traslazione anteriore del bacino inesistente nell'estensione multisegmentale.\n   - *Ripercussione:* Nello squat libero, la discesa si arresta prematuramente a 80°, manifestando una perdita completa della lordosi lombare (*butt wink* severo) già a **100° di flessione di ginocchio** (ben al di sopra del parallelo). Caricare un back squat profondo significherebbe riversare tensioni di taglio estreme su L4-L5 e tendine rotuleo.\n2. **Deficit Torsionale Asimmetrico d'Anca & Lateral Shift:**\n   - Anca DX in pattern intrarotatorio (IR 45°, ER 35-40°).\n   - Anca SX con deficit marcato di rotazione interna (IR 25-30°, ER 45-50°).\n   - *Ripercussione:* Nello squat si evidenzia un evidente *lateral shift* del bacino verso sinistra associato a torsione verso destra, creando asimmetria di spinta al salto e sovraccarico asimmetrico alle ginocchia nello Step Over (valgismo dinamico su entrambi gli arti, peggiore a destra).\n3. **Instabilità Podalica & Carenza del Tibiale Posteriore:**\n   - Dita ad artiglio in semiflessione a riposo, arco plantare collassato, mancata inversione calcaneale fisiologica in appoggio monopodalico.\n   - Spinta propulsiva a DX gravemente deficitaria con sovraccarico compensatorio esclusivo sui primi metatarsi mediali.\n4. **Cingolo Scapolare & Spalla d'Attacco:**\n   - Ipomobilità della scapola sinistra in abduzione overhead e retrazione; spalla destra da opposto ad altissimo volume di colpi che necessita di scarico del piano orizzontale estremo.\n\n---",
        "ban": "* ⛔ **BAN Back Squat Profondo Libero:** L'accosciata a terra senza riferimento produce retroversione pelvica distruttiva a 100°.  \n  ➔ **SOSTITUZIONE:** **Box Squat parallelo (85°-90°) con tempo eccentrico controllato (`3010`) e ripartenza dinamica (`20X0`)**, con controllo dello shift mediante feedback speculare o box rigido calibrato.\n* ⛔ **BAN Bilanciere Panca Piana Tradizionale con arco esasperato:**  \n  ➔ **SOSTITUZIONE:** **Floor Chest Press con manubri (`3010`)**: il pavimento azzera l'iperestensione scapolo-omerale proteggendo il bicipite brachiale e la cuffia dei rotatori, massimizzando il reclutamento del pettorale e tricipite.\n* 🛡️ **INTEGRAZIONE PREHAB OBBLIGATORIA (Targeting Catena Anteriore & Piede):**\n  - Allungamento dinamico e rilascio miofasciale del retto femorale (Couch stretch adattato + foam roller quadriceps).\n  - Mobilizzazione 90/90 anca sinistra in intrarotazione (recupero dei 15° mancanti).\n  - Esercizi di *Short Foot* + inversione caviglia con banda elastica per il tibiale posteriore (attivazione 3 punti d'appoggio podalici).\n* 🛡️ **REGOLA VENERDÌ (Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI, ZERO PLIOMETRIA E ZERO CARICHI ASSIALI COMPRESSIVI SULLA COLONNA**. Focus su catena posteriore, stabilità pelvica e decompressione.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Myofascial Release Retto Femorale + Couch Stretch",
              "Set x Reps": "2 x 45\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Statico",
              "Note Tecniche": "Respirazione diaframmatica, retroversione bacino"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "90/90 Hip Mobility (Focus IR Anca SX)",
              "Set x Reps": "2 x 8 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Nessun compenso lombare"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot + Banded Ankle Inversion (Tib. Post.)",
              "Set x Reps": "2 x 12 /lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Ripristino arco mediale, dita distese"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Box 85°-90°)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "60 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Discesa controllata in 3\", sfioro box senza rimbalzo, spinta simmetrica"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "16+16 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, stop a terra senza perdere tensione pettorale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Focus depressione e retrazione scapolare SX"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat bulgaro con manubri (piede post. basso)",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio in asse, enfasi su stabilità piede DX"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row (Panca inclinata 30°)",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "14+14 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomiti larghi, attivazione romboidi e deltoide post."
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball controlaterale",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Lombare incollata a terra, anti-estensione pura"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Side Plank con abduzione gamba superiore",
              "Set x Reps": "3 x 25\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Attivazione gluteo medio contro valgismo dinamico"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Mobilità anche + estensione toracica"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Prone YTWL a terra",
              "Set x Reps": "2 x 8 per lettera",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Focus adduzione e controllo scapolare SX"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Calf raise monopodalico con controllo inversione calcagno",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Spinta su 1° e 5° metatarso, piede DX controllatissimo"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto alternato)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "35 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione d'anca esplosiva, arrivo stabile"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (85°)",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "50 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Esplosività concentrica massima senza stacco piedi"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press (Monolaterale)",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Traiettoria su piano scapolare, salva spalla"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "18 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto parallelo, retrazione scapolare completa"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Bacino squadrato, allungamento ischiocrurali"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo con extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "17.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Cavo alto, pollici verso dietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in ginocchio con elastico/cavo",
              "Set x Reps": "3 x 10 /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione rigida, bacino bloccato"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk monolaterale con manubrio",
              "Set x Reps": "3 x 20m /lato",
              "Carico (kg/RPE)": "20 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Postura eretta, anti-flessione laterale"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Polpacci e Flessori d'Anca",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio trigger point"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband ginocchia",
              "Tempo": "`1011`",
              "Note Tecniche": "Ginocchia aperte allineate con 2° dito piede"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Scapular Pull-ups alla sbarra",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Solo depressione/retrazione scapolare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "60 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo con Barra Presa Larga",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Decompressione lombare, trazione al petto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Good Morning con bilanciere scarico / disco al petto",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "15 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Spinta glutei indietro, ginocchia sbloccate a 15°"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "14 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise bilaterale su rialzo",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "+15 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima escursione eccentrica, fermo 2\" in alto"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a terra",
              "Set x Reps": "3 x 25\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch su panca inclinata",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il torace"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Recupero neuromuscolare pre-weekend."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "MFR Catena Anteriore (2x45\") + 90/90 Hip Mobility (2x8/lato) + Short Foot & Ankle Band (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "MFR Catena Anteriore (2x45\") + 90/90 Hip Mobility (2x8/lato) + Short Foot & Ankle Band (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico",
                  "Set_Reps": "4 x 4",
                  "Carico": "65 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Fermo solido al box, risalita violenta",
                  "Raw": "**Box Squat Dinamico:** 4 x 4 @ 65 kg (\"4\") | Tempo `20X0` (Fermo solido al box, risalita violenta)."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "18+18 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 18+18 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Supina Inversa",
                  "Set_Reps": "4 x 5",
                  "Carico": "50 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Supina Inversa:** 4 x 5 @ 50 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro con manubri",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12+12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro con manubri: 3 x 5+5 @ 12+12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Dumbbell Seal Row panca 30°",
                  "Set_Reps": "3 x 6",
                  "Carico": "16+16 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Dumbbell Seal Row panca 30°: 3 x 6 @ 16+16 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con bilanciere a braccia tese",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con bilanciere a braccia tese: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Slam a terra da ginocchio alto",
                  "Set_Reps": "3 x 5 (Palla 5 kg)",
                  "Carico": "",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Slam a terra da ginocchio alto: 3 x 5 (Palla 5 kg) | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman Lunge & thoracic reach (2x6/lato) + YTWL prono (2x6) + Calf raise monopodalico isometrico (2x8/lato, 3\" peak).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman Lunge & thoracic reach (2x6/lato) + YTWL prono (2x6) + Calf raise monopodalico isometrico (2x8/lato, 3\" peak)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "37.5 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 37.5 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (85°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "55 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (85°):** 4 x 4 @ 55 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Chest Supported T-Bar Row / Cable Row",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Chest Supported T-Bar Row / Cable Row:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "cavo 20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ cavo 20 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step out",
                  "Set_Reps": "3 x 8+8",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step out: 3 x 8+8 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro (piano trasverso)",
                  "Set_Reps": "3 x 5+5 (Palla 4 kg)",
                  "Carico": "",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro (piano trasverso): 3 x 5+5 (Palla 4 kg) | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller quadricipiti e polpacci (2x45\") + Monster walk (2x10) + Scapular hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller quadricipiti e polpacci (2x45\") + Monster walk (2x10) + Scapular hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "65 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3 / RPE 6-7",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 65 kg (\"5\") | Tempo `3010` (Buffer 3 / RPE 6-7)."
                },
                {
                  "Esercizio": "Pulley Basso Presa V-Grip",
                  "Set_Reps": "3 x 5",
                  "Carico": "50 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa V-Grip:** 3 x 5 @ 50 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Dumbbell Pullover su panca",
                  "Set_Reps": "3 x 8",
                  "Carico": "16 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover su panca: 3 x 8 @ 16 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale su step",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale su step: 3 x 10 @ +20 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Reverse Hyper a terra / Glute Bridge bilanciere",
                  "Set_Reps": "3 x 8",
                  "Carico": "40 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Reverse Hyper a terra / Glute Bridge bilanciere: 3 x 8 @ 40 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hanging Leg Raise alla spalliera (ginocchia al petto)",
                  "Set_Reps": "3 x 8",
                  "Carico": "",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Hanging Leg Raise alla spalliera (ginocchia al petto): 3 x 8 | Tempo `2010`."
                },
                {
                  "Esercizio": "Side Plank Star (arto superiore e inferiore abdotti)",
                  "Set_Reps": "3 x 20\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank Star (arto superiore e inferiore abdotti): 3 x 20\" /lato."
                }
              ]
            },
            {
              "blocco": "STRICT FRIDAY JUMP BAN",
              "items": [
                {
                  "Esercizio": "Nessun salto.",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Nessun salto."
                }
              ]
            }
          ]
        }
      },
      "9": {
        "id": 9,
        "name": "Sara Dodi",
        "number": "#09",
        "role": "Schiacciatrice",
        "peso": "66.0 kg",
        "rischio": "🔴 CRITICO / MASSIMO (Ginocchia Operate Bilaterali + Cervicalgia Irradiata + Shift Pelvico)",
        "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 2 con Nonnati, Caserta e Adamczewska)",
        "triage": "### Criticità Funzionali & Pregresso Chirurgico Rilevato\n1. **Quadro Chirurgico Bilaterale Ginocchia (Innesto LCA + Menischi):**\n   - Ricostruzione LCA e menisco SX (2021) + Meniscectomia/sutura menisco DX (Febbraio 2024).\n   - Nello Step Over e nello squat si evidenzia un **cedimento in valgismo dinamico dell'arto sinistro** associato a un evidente *lateral shift* del bacino a sinistra. Questo pattern torsionale eccentrico riversa un momento in valgo-rotazione distruttivo direttamente sull'innesto legamentoso del ginocchio sinistro.\n2. **Cervico-Dorsalgia Attiva con Irradiazione Craniale:**\n   - La spalla sinistra si presenta marcatamente anteposta, con elevata abduzione e depressione scapolare. I sovraccarichi assiali sopra la testa scatenano contratture paraspinali/trapezoidali che provocano cefalee tensive e disturbano il sonno post-allenamento pesi.\n3. **Blocco Meccanico della Caviglia & Retrazione Catena Anteriore:**\n   - La dorsiflessione della caviglia è marcatamente ridotta (le ginocchia non traslano oltre la punta dei piedi nello squat, arrestando la discesa a 70°-80°).\n   - Retrazione severa del retto femorale a terra (già a 90° di flessione il bacino collassa in antiversione forzata).\n4. **Deficit Piede Sinistro & Rotazione Esterna d'Anca:**\n   - Piede sinistro evertito e pronato a riposo, mancata inversione calcaneale fisiologica in SLS (deficit tibiale posteriore sinistro).\n   - Anca sinistra limitata in rotazione esterna a soli 30° con compenso di sollevamento pelvico.\n\n---",
        "ban": "* ⛔ **BAN ASSOLUTO Push Press o Overhead Press Bilanciere:** Qualsiasi distensione bilaterale con bilanciere sopra la testa comprime il rachide cervicale e scatena l'irradiazione cefalica.  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Lunge Position One-Arm Press con Kettlebell (`3010` / `2010`)** oppure **Half Kneeling Landmine Press**: spinta sul piano scapolare (a 30°), lavoro asimmetrico che stabilizza il core senza comprimere le vertebre cervicali.\n* ⛔ **BAN Deadbug Classico a Corpo Libero:** La perdita di contatto lombare scatena estensione cervicale compensatoria.  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Deadbug Pullover con Kettlebell/Manubrio (`2020`)**: la presa isometrica dell'attrezzo attiva il gran dorsale e il dentato anteriore, ancorando saldamente la cassa toracica ed evitando la tensione nucale.\n* ⛔ **BAN Squat Libero senza Box:** Tendenza a crollare nello shift a sinistra e valgo sull'innesto LCA.  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Box Squat parallelo (85°) con Miniband sopra le ginocchia**: l'elastico induce il reclutamento attivo del gluteo medio contrastando il valgo sinistro; il box rigido calibra la discesa e neutralizza lo shift pelvico.\n* 🛡️ **SOSTITUZIONE OLIMPICA (NO TRAP BAR):**  \n  ➔ **Powerbag Clean to Chest (o Clean to Split con Powerbag/Sandbag 15-20 kg)**: azzera l'impatto articolare della girata su polsi e rachide cervicale, consentendo tripla estensione senza stress torsionale sul ginocchio sinistro operato.\n* 🛡️ **PREHAB MIRATO (Caviglia + Anca SX + Scapola):**\n  - Mobilità caviglia Knee-to-Wall con elastico (trazione dell'astragalo indietro).\n  - Mobilizzazione anca sinistra in rotazione esterna (Figure 4 stretch / 90-90 ER).\n  - Attivazione tibiale posteriore con fascia elastica (inversione calcaneale).\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI, ZERO PLIOMETRIA E ZERO ATTERRAGGI IMPATTANTI**. Protezione assoluta delle ginocchia operate pre-weekend.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Knee-to-Wall Ankle Mobility con elastico",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "Band",
              "Tempo": "`2012`",
              "Note Tecniche": "Trazione astragalica, ginocchio oltre 2° dito"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Couch Stretch + MFR Retto Femorale",
              "Set x Reps": "2 x 40\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Statico",
              "Note Tecniche": "Allungamento controllato senza iperlordosi"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Short Foot & Ankle Inversion SX",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "Band media",
              "Tempo": "`2012`",
              "Note Tecniche": "Attivazione tibiale posteriore arto operato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat parallelo (85°) con Miniband ginocchia",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Miniband attiva (ginocchia in spinta esterna), discesa 3\""
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "12+12 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Nessuna estensione cervicale, testa rilassata a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta (V-Bar)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "35 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Spalle depresse, gomiti verso i fianchi"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat bulgaro con manubri (supporto al muro)",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio SX perfettamente perpendicolare al piede"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca inclinata 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Petto appoggiato per scaricare collo e lombare"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug Pullover con Kettlebell",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "KB 8 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "Braccia tese, lombare premuta, zero tensione cervicale"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Side Plank con abduzione isometrica arto sup.",
              "Set x Reps": "3 x 20\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Attivazione gluteo medio sinistro"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "90/90 Hip ER Mobility (Focus Anca SX)",
              "Set x Reps": "2 x 8 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Mobilità rotatori esterni senza sollevare bacino"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Face Pull con extrarotazione (altezza occhi)",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "Cavo 10 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Deprimere scapole, gomiti a 90°"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Calf Raise su gradino con fermo in allungamento",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Controllo inversione calcagno sinistro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto controllato)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "25 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Split moderato, arresto solido su entrambe le gambe"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (85°) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "37.5 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Esplosione concentrica, ginocchia salde in asse"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lunge Position One-Arm Press con Kettlebell",
              "Set x Reps": "4 x 5+5",
              "Carico (kg/RPE)": "KB 10 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Piano scapolare a 30°, testa neutra, zero carico cervicale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca orizzontale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "14 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomito aderente, retrazione scapolare completa"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con KB controlaterale (arto perno SX)",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio SX microflesso a 15°, stabilità pelvica"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Prone Y-Raise su panca 30°",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "Manubri 2+2 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Attivazione trapezio inferiore e deltoide post."
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press con cavo/elastico da kneeling",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Blocco totale del bacino, anti-rotazione pura"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubrio singolo (Suitcase carry)",
              "Set x Reps": "3 x 15m /lato",
              "Carico (kg/RPE)": "16 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Tronco verticale, scapole depresse e stabili"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Ischiocrurali e Piriforme",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio trigger point gluteo ed anca"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Monster Walk con elastico alle caviglie",
              "Set x Reps": "2 x 10 passi/lato",
              "Carico (kg/RPE)": "Band",
              "Tempo": "`1011`",
              "Note Tecniche": "Mantenere tensione costante, bacino basso"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Scapular Hang alla sbarra con piedi a terra",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna cervicale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso Presa Parallela Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "35 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al basso addome, petto fiero"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge bipodalico con bilanciere",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "35 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Fermo 2\" in alto in massima contrazione glutei"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover leggero su panca",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico delicato, capo sostenuto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su rialzo",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "+10 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Spinta uniforme su 1° e 5° metatarso"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body con ginocchia flesse (Tuck Hollow)",
              "Set x Reps": "3 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Nessun carico sul collo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Bird Dog con tenuta isometrica 3\"",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1013`",
              "Note Tecniche": "Attivazione multifido e stabilità crociata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Protezione assoluta ginocchia pre-weekend."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Caviglia con banda al muro (2x8/lato) + MFR Retto femorale (2x40\") + Short foot SX (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Caviglia con banda al muro (2x8/lato) + MFR Retto femorale (2x40\") + Short foot SX (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat con Miniband",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Arresto pulito al box, spinta rapida",
                  "Raw": "**Box Squat con Miniband:** 4 x 4 @ 50 kg (\"4\") | Tempo `20X0` (Arresto pulito al box, spinta rapida)."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "14+14 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 14+14 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "40 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 40 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "10+10 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro: 3 x 5+5 @ 10+10 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri",
                  "Set_Reps": "3 x 6",
                  "Carico": "12+12 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri: 3 x 6 @ 12+12 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug Pullover con KB",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "10 kg",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug Pullover con KB: 3 x 6+6 @ 10 kg | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass da seduta su panca",
                  "Set_Reps": "3 x 5",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass da seduta su panca: 3 x 5 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "90/90 ER anca SX (2x6/lato) + Banded Face Pull (2x10) + Calf raise monopodalico (2x8/lato).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "90/90 ER anca SX (2x6/lato) + Banded Face Pull (2x10) + Calf raise monopodalico (2x8/lato)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "27.5 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 27.5 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box con Miniband",
                  "Set_Reps": "4 x 4",
                  "Carico": "42.5 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box con Miniband:** 4 x 4 @ 42.5 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Lunge Position One-Arm Press KB",
                  "Set_Reps": "4 x 4+4",
                  "Carico": "12 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Lunge Position One-Arm Press KB:** 4 x 4+4 @ 12 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Cable Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "20 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Cable Row:** 4 x 5+5 @ 20 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Prone Y-Raise panca 30°",
                  "Set_Reps": "3 x 8",
                  "Carico": "3+3 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Prone Y-Raise panca 30°: 3 x 8 @ 3+3 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con miniband ai piedi",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con miniband ai piedi: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller paraspinali dorsali (no collo) e ischiocrurali (2x40\") + Monster walk (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller paraspinali dorsali (no collo) e ischiocrurali (2x40\") + Monster walk (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "50 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3 / RPE 6-7",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 50 kg (\"5\") | Tempo `3010` (Buffer 3 / RPE 6-7)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Neutra",
                  "Set_Reps": "3 x 5",
                  "Carico": "40 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Neutra:** 3 x 5 @ 40 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "40 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 40 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +15 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Tuck Hollow Hold",
                  "Set_Reps": "3 x 25\"",
                  "Carico": "",
                  "Tempo": "Isometrico",
                  "Note": "",
                  "Raw": "Tuck Hollow Hold: 3 x 25\" | Tempo `Isometrico`."
                },
                {
                  "Esercizio": "Side Plank con rotazione controllata",
                  "Set_Reps": "3 x 6 /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con rotazione controllata: 3 x 6 /lato."
                }
              ]
            },
            {
              "blocco": "STRICT FRIDAY JUMP BAN",
              "items": [
                {
                  "Esercizio": "Nessun salto.",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Nessun salto."
                }
              ]
            }
          ]
        }
      },
      "14": {
        "id": 14,
        "name": "Nelly Adamczewska",
        "number": "#14",
        "role": "Schiacciatrice",
        "peso": "70.0 kg",
        "rischio": "🟡/🔴 MEDIO-ALTO (Lassità Legamentosa + Disritmia Scapolare DX + Valgismo SX + Cisti Polso DX)",
        "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 2 con Nonnati, Caserta e Dodi)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Video/Frame)\n1. **Lassità Legamentosa Generalizzata & Tendenza Recurvatum:**\n   - 17 anni, mobilità passiva elevatissima che necessita di eccellente rigidità attiva (*stiffness*) e stabilità lombo-pelvica. Tendenza al recurvatum e pregressa tendinopatia rotulea da salto.\n2. **Disritmia Scapolare Destra & Upper Crossed Pattern:**\n   - Durante l'abduzione/elevazione, la scapola destra sale precocemente e più in alto rispetto alla sinistra (anticipo di elevazione per iper-attivazione del trapezio superiore e inibizione del trapezio inferiore/dentato anteriore).\n   - Presenza di cisti ganglionare al polso destro (asintomatica ma suscettibile di compressione in iperestensione dorsale con bilanciere dritto).\n3. **Deficit Podalico Sinistro & Valgismo Dinamico Arto SX:**\n   - Retropiede sinistro in eversione/pronazione costante con mancata inversione calcaneale sia in SLS che in propulsione (deficit selettivo del tibiale posteriore sinistro).\n   - Nello Step Over, l'arto sinistro mostra un cedimento in valgismo dinamico marcato (SX > DX), non controllato dall'arco plantare collassato.\n4. **Instabilità Lombo-Pelvica nello Squat Profondo & Blocco Rotazionale SX:**\n   - Nello squat, superati gli 80° di flessione di ginocchio, si manifesta una perdita del controllo lombo-pelvico (*butt wink*) sotto i 70°, con rotazione del bacino a destra in fase concentrica.\n   - Restrizione di circa 15°-20° nella rotazione cervicale e del tronco verso sinistra (cerniera cervico-dorsale rigida).\n\n---",
        "ban": "* ⛔ **BAN Squat Profondo Libero (<70° al ginocchio):**  \n  ➔ **SOSTITUZIONE:** **Box Squat parallelo a 80°-85° con Miniband sopra le ginocchia (`3010` / `20X0`)**: il box impedisce il *butt wink* a fondo corsa proteggendo L4-S1, mentre l'elastico recluta il gluteo medio contrastando il valgismo del ginocchio sinistro.\n* ⛔ **BAN Bilanciere Dritto in Iperestensione dei Polsi (Panca / Girata con polsi piegati):** La cisti ganglionare del polso destro non tollera carichi di compressione in estensione forzata.  \n  ➔ **SOSTITUZIONE:** **Floor Chest Press con Manubri a Presa Neutra/Semi-neutra (`3010`)** e Clean to Split eseguito con manubri/powerbag a presa neutra.\n* 🛡️ **SOSTITUZIONE OLIMPICA (NO TRAP BAR):**  \n  ➔ **Powerbag Clean to Chest (o Clean con manubri a presa neutra / Powerbag 15-20 kg)**: elimina l'estensione del polso salvaguardando la cisti ganglionare del polso destro ed esaltando la tripla estensione.\n* 🛡️ **PREHAB SCAPOLARE E PODALICO OBBLIGATORIO:**\n  - Rilascio miofasciale piccolo pettorale destro con pallina da lacrosse (de-tensione coracoide).\n  - Scapular Wall Slide & Prone Trap 3 Raise per rieducare il timing della scapola destra (depressione attiva).\n  - Short Foot + inversione con elastico per il piede sinistro (attivazione tibiale posteriore).\n  - Rotazioni toraciche in quadrupedia (\"Open Book\") focalizzate sul lato sinistro.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO IMPATTI PLIOMETRICI**. Lavoro eccentrico/isocinetico per ischiocrurali e tendine rotuleo senza impatto.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "SMR Piccolo Pettorale DX con pallina lacrosse",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Statico/Pressione",
              "Note Tecniche": "Rilascio trigger point prima delle spinte"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Scapular Wall Slides a schiena a muro",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Mantenere avambracci e polsi aderenti al muro"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot & Banded Ankle Inversion SX",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Focus attivazione tibiale posteriore sinistro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (80°-85°) con Miniband sopra ginocchia",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Discesa in 3\", sfioro box solido, ginocchia aperte"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press Manubri Presa Neutra",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "14+14 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Polsi in asse neutro (tutela cisti polso DX)"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Parallela (V-Bar)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Spalle depresse, gomiti guidati verso i fianchi"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat bulgaro con manubri",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Arto perno SX con ginocchio che non collassa in valgo"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "12+12 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Presa neutra, focus retrazione scapolare inferiore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra ginocchia e mani",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione attiva, L4-S1 incollata al pavimento"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Side Plank sul gomito sinistro con abduzione gamba",
              "Set x Reps": "3 x 25\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Rafforzamento selettivo gluteo medio sinistro"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Quadruped Thoracic Rotation (Open Book) a SX",
              "Set x Reps": "2 x 8 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Sblocco rotazione toracica sinistra deficitaria"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Prone Trap 3 Raise con manubri leggeri",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "2+2 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Scapole tirate indietro e in basso (anti-elevazione DX)"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Calf raise monopodalico su step (inversione calcagno)",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Piede SX: mantenere l'arco mediale in spinta"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Bilanciere/Trap Bar)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "32.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione dinamica, polsi neutri e serrati"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (85°) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva, stabilità monopodalica"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Piano scapolare a 30°, presa neutra sul manicotto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row con appoggio panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "16 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomito lungo il corpo, zero compenso del tronco"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Arto perno SX con ginocchio solido e allineato"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con corda (doppia rotazione)",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Gomiti alti, extrarotazione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "Cavo 10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione rigida, bacino squadrato"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk bilaterale con trap bar o manubri",
              "Set x Reps": "3 x 25m",
              "Carico (kg/RPE)": "20+20 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Spalle depresse, presa salda senza estensione polso"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Tendine Rotuleo e Retto Femorale",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio trigger point senza infiammare rotula"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Monster Walk con elastico alle ginocchia e caviglie",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Band",
              "Tempo": "`1011`",
              "Note Tecniche": "Spinta costante verso l'esterno"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra con cinghie/presa comoda",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione cerniera dorsale e lombare L4-S1"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso Presa Parallela Neutra Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere e miniband ginocchia",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "40 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" contrazione glutei"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Apertura gabbia toracica e allungamento gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su gradino bilaterale",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "+15 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Escursione completa senza compenso del ginocchio"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a braccia lungo i fianchi",
              "Set x Reps": "3 x 25\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch su panca orizzontale",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3010`",
              "Note Tecniche": "Bacino arrotolato verso il torace, discesa lenta"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Protezione tendine rotuleo e recupero."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "SMR piccolo pettorale DX (2x40\") + Scapular wall slides (2x8) + Short foot & banded ankle SX (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "SMR piccolo pettorale DX (2x40\") + Scapular wall slides (2x8) + Short foot & banded ankle SX (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat con Miniband",
                  "Set_Reps": "4 x 4",
                  "Carico": "60 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Pausa al box 1\", esplosione verso l'alto",
                  "Raw": "**Box Squat con Miniband:** 4 x 4 @ 60 kg (\"4\") | Tempo `20X0` (Pausa al box 1\", esplosione verso l'alto)."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri Neutri",
                  "Set_Reps": "4 x 5",
                  "Carico": "16+16 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri Neutri:** 4 x 5 @ 16+16 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12+12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro: 3 x 5+5 @ 12+12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri",
                  "Set_Reps": "3 x 6",
                  "Carico": "14+14 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri: 3 x 6 @ 14+14 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con bilanciere a braccia tese",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con bilanciere a braccia tese: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass esplosivo contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass esplosivo contro muro: 3 x 5 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Open Book SX (2x6) + Prone Trap 3 raise (2x8) + Calf raise monopodalico (2x8/lato).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Open Book SX (2x6) + Prone Trap 3 raise (2x8) + Calf raise monopodalico (2x8/lato)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "35 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 35 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box con Miniband",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box con Miniband:** 4 x 4 @ 50 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "18 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 18 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Face Pull al cavo con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Face Pull al cavo con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step out",
                  "Set_Reps": "3 x 8+8",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step out: 3 x 8+8 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro (piano trasverso)",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro (piano trasverso): 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x10) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller quadricipiti/rotula (2x40\") + Monster walk (2x10) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "60 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3 / RPE 6-7",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 60 kg (\"5\") | Tempo `3010` (Buffer 3 / RPE 6-7)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Parallela",
                  "Set_Reps": "3 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Parallela:** 3 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Dumbbell Pullover",
                  "Set_Reps": "3 x 8",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover: 3 x 8 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "45 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 45 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +20 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hanging Leg Raise parziale (ginocchia al petto)",
                  "Set_Reps": "3 x 8",
                  "Carico": "",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Hanging Leg Raise parziale (ginocchia al petto): 3 x 8 | Tempo `2010`."
                },
                {
                  "Esercizio": "Side Plank Star sul gomito SX",
                  "Set_Reps": "3 x 20\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank Star sul gomito SX: 3 x 20\" /lato."
                }
              ]
            },
            {
              "blocco": "STRICT FRIDAY JUMP BAN",
              "items": [
                {
                  "Esercizio": "Zero salti.",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Zero salti."
                }
              ]
            }
          ]
        }
      },
      "11": {
        "id": 11,
        "name": "Luna Cicola",
        "number": "#11",
        "role": "Libero",
        "peso": "60.0 kg",
        "rischio": "🟡 MEDIO (Deficit Severo Extrarotazione d'Anca + Valgismo Dinamico + Retropiede DX Evertito + Specificità Ruolo Libero)",
        "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactivity & Movement Quality\" (Postazione Libero / Campo Libero)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Grave Deficit Torsionale d'Anca (Intrarotazione vs Extrarotazione):**\n   - Presenta una marcata asimmetria tra i range di rotazione: intrarotazione eccezionalmente ampia (IR 45° a SX, 50° a DX), ma **extrarotazione gravemente ridotta e bloccata a soli 20°-25° a destra e 30° a sinistra**.\n   - *Ripercussione:* Nello Step Over e negli affondi laterali tipici del libero, l'incapacità di reclutare i rotatori esterni d'anca (gluteo medio/profondi) causa un immediato cedimento in **valgismo dinamico** del ginocchio (più evidente a sinistra).\n2. **Squat Test & Shift Compensatorio:**\n   - Profondità eccellente (accosciata profonda a 50° con curve conservate), ma si nota un *lateral shift* del bacino verso sinistra per scavalcare il blocco articolare dell'anca destra e l'eversione del piede destro.\n3. **Instabilità Retropiede Destro & Carenza Propulsiva:**\n   - Retropiede destro evertito a riposo e in SLS, mancata inversione calcaneale fisiologica, spinta propulsiva al calf raise debole e instabile rispetto al lato sinistro.\n4. **Specificità del Ruolo Libero & Scapola Sinistra:**\n   - Nel ruolo di libero, i carichi di compressione e distensione orizzontale pesante con bilanciere (panca piana e rematore orizzontale con bilanciere pesante) sono controproducenti e aumentano la rigidità scapolare anteriore (già presente con ipomobilità overhead sinistra).\n\n---",
        "ban": "* ⛔ **BAN ASSOLUTO Panca Piana con Bilanciere & Rematore Bilanciere Pesante (Regola Specifica Libero):**  \n  ➔ **SOSTITUZIONE SPECIFICA:**\n  - **Prone Y-Raise con manubri leggeri (`2012`)** per fissare i depressori/stabilizzatori scapolari e il trapezio inferiore.\n  - **Single-Arm Cable Row (`2011`)** per garantire trazione orizzontale asimmetrica senza compressione discale.\n  - **Low Medball Slam a terra (`X`)** con enfasi sulla cerniera d'anca e reattività senza impatto.\n* ⚖️ **ADATTAMENTO SQUAT:** **Box Squat calibrato all'80% di profondità con Miniband sopra le ginocchia (`3010` / `20X0`)**: impedisce lo shift pelvico a sinistra, costringe le ginocchia a spingere contro la banda attivando i rotatori esterni bloccati (ER) e mantiene la stiffness dinamica per la difesa.\n* 🛡️ **PREHAB SPECIALISTICO D'ANCA & PIEDE DX:**\n  - Mobilità 90/90 con trazione elastica per recuperare l'extrarotazione d'anca DX (dai 20° ai 40° fisiologici).\n  - Short Foot + Banded Ankle Inversion per il piede destro (stimolazione tibiale posteriore).\n  - Rilascio miofasciale quadricipite/retto femorale destro su foam roller.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI, ZERO BALZI PLIOMETRICI**. Lavoro puramente decompressivo e di stabilità orizzontale.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "90/90 Hip ER Mobilization (Focus Anca DX)",
              "Set x Reps": "2 x 8 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Fermo 2\" in massima extrarotazione, bacino fermo"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Ankle Inversion Retropiede DX (Tib. Post.)",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Inversione pulita, arco mediale alto"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Scapular Wall Slide a contatto continuo",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Focus abduzione overhead spalla SX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (@80% ROM) con Miniband ginocchia",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Miniband tesa, piedi ancorati, zero shift a SX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Prone Y-Raise su panca inclinata 30° (Sub. Panca)",
              "Set x Reps": "4 x 10",
              "Carico (kg/RPE)": "3+3 kg (\"6\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Solo trapezio inferiore e deltoidi posteriori"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "32.5 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Discesa controllata 3\", depressione scapolare"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Step Down eccentrico controllato da box basso",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "BW + Man. 4+4 kg",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio SX e DX perfettamente allineati al 2° dito"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Arm Cable Row al cavo medio (Sub. Row BB)",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "17.5 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomito stretto, rotazione toracica controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball schiacciata tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione costante, lombare piatta a terra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Side Plank con Clamshell elastico gamba sup.",
              "Set x Reps": "3 x 20\" /lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Reclutamento gluteo medio e rotatori esterni"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Quadricipite e Retto Femorale DX",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "De-tensione catena anteriore"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Clamshell a terra con miniband e fermo 3\"",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1013`",
              "Note Tecniche": "Attivazione selettiva rotatori esterni d'anca DX"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Calf raise monopodalico su gradino con spinta alluce",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Piede DX: evitare il collasso in eversione"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto controllato)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "25 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Split reattivo, baricentro basso in ricezione"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (@80%) con Miniband",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "37.5 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta concentrica esplosiva, ginocchia salde"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press (Monolaterale)",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+10 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Spinta nel piano scapolare, tutela cingolo SX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Chest-Supported Dumbbell Row (Presa Neutra)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "12+12 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Petto su panca 30°, retrazione scapolare"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con Kettlebell",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Piede DX saldo a terra (short foot attivo)"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Banded Face Pull con doppia extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Gomiti alti, pollici ruotati indietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press con cavo in posizione mezzo-squat difensivo",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Postura da ricezione volley, anti-rotazione"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Low Medball Slam a terra (ginocchia semiflesse)",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "Medball 4 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Schiacciata a terra senza piegare la schiena"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica SX",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Allungamento flessori anca e mobilità torace"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Monster Walk con elastico alle ginocchia",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Band",
              "Tempo": "`1011`",
              "Note Tecniche": "Mantenere extrarotazione attiva d'anca"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Scapular Hang alla sbarra con piedi a sfioro",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Scarico totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso Presa Larga a Gomiti Aperti",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "30 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione orizzontale decompressiva, petto in fuori"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg Glute Bridge a terra",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" contrazione"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover leggero su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "8 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Apertura cassa toracica senza forzare spalla SX"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise bilaterale con fermo al top",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "+10 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Allineamento asse caviglia-tallone"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Tuck Hold",
              "Set x Reps": "3 x 25\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Tenuta addominale compatta"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk monolaterale con manubrio (Suitcase carry)",
              "Set x Reps": "3 x 20m /lato",
              "Carico (kg/RPE)": "14 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Postura eretta, spalle simmetriche"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Conservazione freschezza reattiva pre-gara."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "90/90 ER anca DX (2x8) + Banded ankle DX (2x10) + Scapular wall slides (2x8).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "90/90 ER anca DX (2x8) + Banded ankle DX (2x10) + Scapular wall slides (2x8)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (@80% ROM)",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Arresto pulito al box, risalita esplosiva",
                  "Raw": "**Box Squat Dinamico (@80% ROM):** 4 x 4 @ 50 kg (\"4\") | Tempo `20X0` (Arresto pulito al box, risalita esplosiva)."
                },
                {
                  "Esercizio": "Prone Y-Raise Manubri",
                  "Set_Reps": "4 x 8",
                  "Carico": "4+4 kg (\"5\")",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "**Prone Y-Raise Manubri:** 4 x 8 @ 4+4 kg (\"5\") | Tempo `2012`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "37.5 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 37.5 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Step Down da box con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "6 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Step Down da box con KB: 3 x 5+5 @ 6 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Single-Arm Cable Row",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "20 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Single-Arm Cable Row: 3 x 6+6 @ 20 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con fitball",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con fitball: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Low Medball Slam a terra",
                  "Set_Reps": "3 x 4",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Low Medball Slam a terra: 3 x 4 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "MFR retto femorale DX (2x40\") + Clamshell elastico (2x8/lato) + Calf raise monopodalico (2x8/lato).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "MFR retto femorale DX (2x40\") + Clamshell elastico (2x8/lato) + Calf raise monopodalico (2x8/lato)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "27.5 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 27.5 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (@80%)",
                  "Set_Reps": "4 x 4",
                  "Carico": "42.5 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (@80%):** 4 x 4 @ 42.5 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+12.5 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +12.5 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Chest Supported DB Row",
                  "Set_Reps": "4 x 5",
                  "Carico": "14+14 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Chest Supported DB Row:** 4 x 5 @ 14+14 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con rotazione esterna",
                  "Set_Reps": "3 x 10",
                  "Carico": "15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con rotazione esterna: 3 x 10 @ 15 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico da mezzo-squat con step laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico da mezzo-squat con step laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw basso contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw basso contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman stretch (2x5/lato) + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman stretch (2x5/lato) + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3 / RPE 6-7",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 45 kg (\"5\") | Tempo `3010` (Buffer 3 / RPE 6-7)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Larga",
                  "Set_Reps": "3 x 5",
                  "Carico": "35 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Larga:** 3 x 5 @ 35 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge monopodalico su panca",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "BW",
                  "Tempo": "1012",
                  "Note": "",
                  "Raw": "Glute Bridge monopodalico su panca: 3 x 6+6 @ BW | Tempo `1012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +15 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold compatto",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold compatto: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Suitcase Carry con KB pesante",
                  "Set_Reps": "3 x 15m /lato",
                  "Carico": "16 kg.",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Suitcase Carry con KB pesante: 3 x 15m /lato @ 16 kg."
                }
              ]
            },
            {
              "blocco": "STRICT FRIDAY JUMP BAN",
              "items": [
                {
                  "Esercizio": "Zero salti.",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Zero salti."
                }
              ]
            }
          ]
        }
      },
      "12": {
        "id": 12,
        "name": "Erin Grippo",
        "number": "#12",
        "role": "Palleggiatrice",
        "peso": "63.5 kg",
        "rischio": "🟡 MEDIO (Dorsiflessione Caviglie Bloccata + Butt Wink a 90° + Spinta Piede DX Mediale + Ipermobilità Lombare di Compenso)",
        "turno": "🟢 TURNO 1 (08:30 – 09:25) — \"Speed, Reactive & Floor\"",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Dorsiflessione della Caviglia Bloccata & Squat Test:**\n   - La mobilità in dorsiflessione tibio-tarsica è marcatamente limitata bilateralmente. Nello squat a carico libero, le tibie non avanzano oltre i piedi e l'accosciata si arresta bruscamente a 90° (sopra il parallelo).\n   - In quel punto di arresto (90°) scatta una perdita repentina e severa della lordosi lombare (*butt wink* completo), con retroversione del bacino per guadagnare centimetri artificiali di profondità.\n2. **Spinta Propulsiva Piede Destro Alterata:**\n   - Nel calf raise monopodalico e nella spinta a terra, il retropiede destro collassa in eversione, scaricando tutta la forza di trazione quasi esclusivamente sul 1° e 2° metatarso (sovraccarico mediale), a differenza dell'arto sinistro che mantiene una traiettoria fisiologica.\n3. **Rigidità Dorsale & Iper-Estensione Lombare Compensatoria:**\n   - Spalle anteposte bilateralmente con rettilineizzazione toracica. Nell'estensione multisegmentale standing, l'atleta appare \"superpositiva\" perché compensa la rigidità toracica iper-estendendo le vertebre lombari (cerniera L4-S1 sotto stress).\n4. **Specificità Palleggiatrice:**\n   - Necessità assoluta di reattività dell'avampiede nei cambi di direzione per il palleggio e integrità/stabilità dei polsi e delle dita per il tocco di palla.\n\n---",
        "ban": "* ⛔ **BAN Squat Libero Profondo (<90°):**  \n  ➔ **SOSTITUZIONE:** **Box Squat rigido a 90° (`3010` / `20X0`)**: l'altezza del box ferma la discesa esattamente prima del crollo pelvico lombare, consentendo di caricare in sicurezza la tripla estensione senza retroversione.\n* 🛡️ **PREHAB SPECIFICO CAVIGLIA, PIEDE DX E TORACE:**\n   - Knee-to-Wall con elastico alle caviglie (mobilizzazione dell'articolazione tibio-tarsica con trazione posteriore dell'astragalo).\n   - Mobilizzazione in estensione toracica su Foam Roller (mani dietro la nuca, gomiti chiusi) per sbloccare le vertebre dorsali senza sovraccaricare il tratto lombare.\n   - Rieducazione dell'arco plantare destro (*Short Foot* + Calf raise su cuneo per reclutare il 4°-5° metatarso).\n* 🛡️ **TUTELA & POTENZIAMENTO POLSI/FLESSORI PER IL PALLEGGIO:**\n   - Inserimento di Wrist Rollers / Dumbbell Wrist Flexion-Extension a tempo controllato (`2012`) e Farmer Carry con manubri per rinforzare gli avambracci.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n   - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO IMPATTI PLIOMETRICI**. Lavoro decompressivo per la colonna lombare e catena posteriore.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Knee-to-Wall Ankle Mobility con fascia elastica",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "Band",
              "Tempo": "`2012`",
              "Note Tecniche": "Ginocchio spinto in avanti oltre il 2° dito"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Estensione Toracica su Foam Roller",
              "Set x Reps": "2 x 8 estensioni",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Bacino fermo a terra, nessun inarcamento lombare"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot & Calf Raise Piede DX su cuneo",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Spinta distribuita su 1°, 4° e 5° metatarso"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Box a 90° esatti)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "50 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Discesa lenta in 3\", tocco solido senza rimbalzo, spinta simmetrica"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "12+12 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, tutela anteposizione spalle"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Parallela",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "37.5 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Busto stabile, depressione scapolare attiva"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat bulgaro con manubri",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio avanzato e caviglia flessa in carico"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "12+12 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole addotte e depresse in chiusura"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball controlaterale",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Lombare incollata al pavimento (anti-iperlordosi)"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Wrist Roller / Dumbbell Wrist Curls (Polsi)",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Flessione ed estensione dita/polsi per il palleggio"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica SX",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Allungamento flessori anca e mobilità torace"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Prone YTWL a terra",
              "Set x Reps": "2 x 8 per lettera",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Attivazione romboidi e trapezio inferiore"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spinta caviglia contro elastico (plantar-flessione)",
              "Set x Reps": "2 x 12 /lato",
              "Carico (kg/RPE)": "Band pesante",
              "Tempo": "`2012`",
              "Note Tecniche": "Mantenimento asse calcagno-tendine"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto bilanciere)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "27.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Estensione d'anca esplosiva, arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (90°)",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Spinta violenta dal box senza staccare le punte"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+10 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Traiettoria diagonale a 30°, core rigido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "14 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Gomito stretto, retrazione scapolare completa"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Piede d'appoggio ben radicato, bacino parallelo"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Face Pull al cavo alto con corda",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Gomiti alti, extrarotazione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in ginocchio con cavo/elastico",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, glutei serrati"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk bilaterale con manubri pesanti",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "16+16 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Presa isometrica forte (avambracci e dita)"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Polpacci e Paravertebrali Toracici",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio trigger point tricipite surale"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Mantenere costante la larghezza dei piedi"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale rachide lombare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "50 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso Presa Neutra Stretta",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "37.5 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione al petto, schiena ferma e compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "40 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Estensione completa dell'anca, 2\" fermo al top"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento toracico e gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su gradino",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "+12.5 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Piede DX controllato, discesa eccentrica profonda"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a braccia distese",
              "Set x Reps": "3 x 25\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al tappeto"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch con fitball tra le caviglie",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "Fitball",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il tronco"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Recupero neuromuscolare pre-weekend."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Knee-to-wall con banda (2x8/lato) + Foam roller torace (2x8) + Calf raise cuneo DX (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Knee-to-wall con banda (2x8/lato) + Foam roller torace (2x8) + Calf raise cuneo DX (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "55 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Fermo solido al box, risalita esplosiva",
                  "Raw": "**Box Squat Dinamico (90°):** 4 x 4 @ 55 kg (\"4\") | Tempo `20X0` (Fermo solido al box, risalita esplosiva)."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "14+14 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 14+14 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "42.5 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 42.5 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "10+10 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro: 3 x 5+5 @ 10+10 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "14+14 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 14+14 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con bilanciere scarico tenuto in alto",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con bilanciere scarico tenuto in alto: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass esplosivo contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass esplosivo contro muro: 3 x 5 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman stretch (2x5/lato) + Prone YTWL (2x6) + Spinta elastico caviglia (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman stretch (2x5/lato) + Prone YTWL (2x6) + Spinta elastico caviglia (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "30 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 30 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "45 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (90°):** 4 x 4 @ 45 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+12.5 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +12.5 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "16 kg (\"5\")",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row:** 4 x 5+5 @ 16 kg (\"5\") | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con passo laterale",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con passo laterale: 3 x 6+6 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller polpacci/torace (2x40\") + Monster walk (2x8) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller polpacci/torace (2x40\") + Monster walk (2x8) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "52.5 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3 / RPE 6-7",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 52.5 kg (\"5\") | Tempo `3010` (Buffer 3 / RPE 6-7)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Stretta",
                  "Set_Reps": "3 x 5",
                  "Carico": "42.5 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Stretta:** 3 x 5 @ 42.5 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "45 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 45 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+15 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +15 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Wrist Roller / Farmer Carry",
                  "Set_Reps": "3 x 20m",
                  "Carico": "18+18 kg.",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Wrist Roller / Farmer Carry: 3 x 20m @ 18+18 kg."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hollow Body Hold",
                  "Set_Reps": "3 x 20\"",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "Isometrico",
                  "Raw": "Hollow Body Hold: 3 x 20\" | Isometrico."
                },
                {
                  "Esercizio": "Side Plank con tocco piede",
                  "Set_Reps": "3 x 6 /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tocco piede: 3 x 6 /lato."
                }
              ]
            },
            {
              "blocco": "STRICT FRIDAY JUMP BAN",
              "items": [
                {
                  "Esercizio": "Zero salti.",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Zero salti."
                }
              ]
            }
          ]
        }
      },
      "13": {
        "id": 13,
        "name": "Giulia Caserta",
        "number": "#13",
        "role": "Centrale",
        "peso": "68.0 kg",
        "rischio": "🟡 MEDIO (Perdita Controllo Lombo-Pelvico oltre 110° + Shift Pelvico Asimmetrico + Deficit Retrazione Scapola DX + Anteposizione Spalla SX)",
        "turno": "🔴 TURNO 2 (09:30 – 10:25) — \"Heavy, Power & Jumpers\" (Postazione Rack 2 con Nonnati, Dodi e Adamczewska)",
        "triage": "### Criticità Funzionali Rilevate (Analisi ELAV Live)\n1. **Perdita del Controllo Lombo-Pelvico nello Squat Profondo & Shift Pelvico:**\n   - Mobilità passiva d'anca eccellente (accosciata fino a 70°), ma la stabilità lombo-pelvica cede bruscamente già a **110° di flessione di ginocchio** (ben prima del parallelo), scatenando un *butt wink* completo e flessione di compenso del tratto dorsale.\n   - Nello squat libero si evidenzia una dinamica a \"doppio shift\": il bacino trasla a sinistra in fase di discesa e scivola a destra all'inversione concentrica, indicando un deficit di stabilità torsionale pelvica e asimmetria tra gli arti.\n2. **Asimmetrie del Cingolo Scapolare (Spalla SX Anteposta / Scapola DX Ipomobile):**\n   - Spalla sinistra visibilmente anteposta e limitata in abduzione overhead attiva.\n   - A braccia tese frontali, la scapola destra presenta un deficit selettivo di adduzione/retrazione (scarsa attivazione del trapezio medio-inferiore e dei romboidi a destra).\n3. **Appoggio Podalico & Mobilità del Piede:**\n   - Piede sinistro in eversione/pronazione più marcata rispetto al destro durante l'accosciata; retropiede rigido con limitata escursione fisiologica pronatoria in spinta propulsiva.\n4. **Specificità del Centrale:**\n   - Richiesta elevatissima di stiffness dei polpacci e stabilità orizzontale/verticale per i ripetuti salti a muro (spostamenti laterali rapidi) e attacco di primo tempo.\n\n---",
        "ban": "* ⛔ **BAN Squat Libero Profondo (<90°):** L'accosciata oltre i 110° scatena retroversione lombare marcata e doppio shift del bacino.  \n  ➔ **SOSTITUZIONE:** **Box Squat rigido a 90° con tempo eccentrico controllato (`3010`) e ripartenza dinamica (`20X0`)**: il box elimina il *butt wink*, calibra l'inversione e guida la simmetria di spinta senza scarico asimmetrico.\n* 🛡️ **PREHAB SCAPOLARE ASIMMETRICO & CORE INTRA-ADDOMINALE:**\n   - Retrazioni scapolari monolaterali al cavo / manubrio con sosta 2\" per la scapola destra.\n   - Rilascio miofasciale piccolo pettorale sinistro ed allungamento intrarotatori spalla SX per sbloccare l'abduzione overhead.\n   - Attivazione del core con pressione intra-addominale (IAP) e Deadbug anti-estensione per eliminare lo shift pelvico nello squat.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n   - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO STRESS PLIOMETRICO**. Focus su catena posteriore, stabilità pelvica e decompressione spinale pre-gara.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "SMR Piccolo Pettorale SX con pallina lacrosse",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Pressione",
              "Note Tecniche": "De-tensione spalla sinistra anteposta"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Retrazione Scapolare al Cavo Monolaterale DX",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`1012`",
              "Note Tecniche": "Braccio teso, solo retrazione selettiva a destra"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Short Foot & Banded Ankle Eversion/Inversion SX",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Controllo eversione eccessiva piede sinistro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Box Squat (Box a 90°)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Discesa controllata 3\", sfioro box senza oscillazioni, spinta simmetrica"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Floor Chest Press con Manubri",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "14+14 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Gomiti a 45°, testa e spalle stabili a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Lat Machine Presa Neutra Stretta (V-Bar)",
              "Set x Reps": "4 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Scapole depresse e serrate, trazione al petto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Split Squat bulgaro con manubri",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "10+10 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Ginocchio in asse con il piede, bacino squadrato"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "12+12 kg (\"8\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Enfasi sulla retrazione scapolare destra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Deadbug con fitball tra mani e ginocchia",
              "Set x Reps": "3 x 8+8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2020`",
              "Note Tecniche": "Pressione attiva, L4-S1 incollata a terra"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Side Plank con abduzione gamba superiore",
              "Set x Reps": "3 x 20\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Attivazione gluteo medio contro shift pelvico"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Spiderman Lunge con apertura toracica SX",
              "Set x Reps": "2 x 6 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2011`",
              "Note Tecniche": "Apertura toracica e allungamento flessori anca"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Scapular Wall Slides a schiena a muro",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Mantenere braccio sinistro a contatto muro"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Calf raise monopodalico con fermo al top",
              "Set x Reps": "2 x 10 /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`2012`",
              "Note Tecniche": "Spinta solida e bilanciata su entrambi i piedi"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Clean to Split Position (Incastro semiatto bilanciere)",
              "Set x Reps": "4 x 3+3",
              "Carico (kg/RPE)": "32.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione dinamica, ricezione solida"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Squat Dinamico al Box (90°)",
              "Set x Reps": "4 x 5",
              "Carico (kg/RPE)": "45 kg (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Esplosione concentrica dal box senza stacco piedi"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Half Kneeling Landmine Press Monolaterale",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "+12.5 kg (\"6\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Traiettoria su piano scapolare a salvaguardia spalla SX"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Single-Arm Dumbbell Row su panca (Focus Scapola DX)",
              "Set x Reps": "4 x 6+6",
              "Carico (kg/RPE)": "16 kg (\"6\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Fermo 2\" in massima retrazione scapolare"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Single-Leg RDL con manubrio controlaterale",
              "Set x Reps": "3 x 6+6",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Bacino orizzontale, controllo ischiocrurali"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Banded Face Pull con corda ed extrarotazione",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Cavo alto, pollici verso dietro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Pallof Press in piedi con passo laterale",
              "Set x Reps": "3 x 8 /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "`2112`",
              "Note Tecniche": "Anti-rotazione pura, tronco immobile"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Farmer Walk con manubri pesanti",
              "Set x Reps": "3 x 20m",
              "Carico (kg/RPE)": "18+18 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Scapole depresse e addotte, postura eretta"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "Foam Roller Polpacci e Glutei",
              "Set x Reps": "2 x 45\" /distretto",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Dinamico",
              "Note Tecniche": "Rilascio miofasciale catena posteriore"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Banded Monster Walk laterale",
              "Set x Reps": "2 x 12 passi/lato",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`1011`",
              "Note Tecniche": "Ginocchia in spinta esterna costante"
            },
            {
              "Blocco": "# Prehab",
              "Esercizio": "Passive Hang alla sbarra",
              "Set x Reps": "2 x 20\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Scarico totale della colonna lombare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "2 x 4",
              "Carico (kg/RPE)": "55 kg (\"6\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Carico sub-massimale (buffer 3 / RPE 6-7). Zero affaticamento pre-gara!"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "Pulley Basso al Cavo Presa Parallela",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "40 kg (\"6\")",
              "Tempo": "`2011`",
              "Note Tecniche": "Petto in fuori, trazione controllata al petto"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "40 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima estensione dell'anca, 2\" fermo al top"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Dumbbell Pullover su panca piana",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "12 kg (\"8\")",
              "Tempo": "`3010`",
              "Note Tecniche": "Allungamento gran dorsale senza inarcare lombare"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "Standing Calf Raise su rialzo bilaterale",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "+15 kg (\"8\")",
              "Tempo": "`2012`",
              "Note Tecniche": "Massima escursione eccentrica per il tendine d'Achille"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Hollow Body Hold a gambe tese",
              "Set x Reps": "3 x 25\"",
              "Carico (kg/RPE)": "BW",
              "Tempo": "Isometrico",
              "Note Tecniche": "Lombare incollata al pavimento"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Reverse Crunch su panca inclinata",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`3010`",
              "Note Tecniche": "Arrotolamento bacino verso il torace"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Protezione neuromuscolare pre-weekend."
            }
          ]
        },
        "w4_sedute": {
          "1": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "SMR piccolo pettorale SX (2x40\") + Retrazioni scapolari al cavo DX (2x10) + Short foot SX (2x10).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "SMR piccolo pettorale SX (2x40\") + Retrazioni scapolari al cavo DX (2x10) + Short foot SX (2x10)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Box Squat Dinamico (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "60 kg (\"4\")",
                  "Tempo": "20X0",
                  "Note": "Arresto solido, risalita esplosiva",
                  "Raw": "**Box Squat Dinamico (90°):** 4 x 4 @ 60 kg (\"4\") | Tempo `20X0` (Arresto solido, risalita esplosiva)."
                },
                {
                  "Esercizio": "Floor Chest Press Manubri",
                  "Set_Reps": "4 x 5",
                  "Carico": "16+16 kg (\"5\")",
                  "Tempo": "20X0",
                  "Note": "",
                  "Raw": "**Floor Chest Press Manubri:** 4 x 5 @ 16+16 kg (\"5\") | Tempo `20X0`."
                },
                {
                  "Esercizio": "Lat Machine Presa Neutra",
                  "Set_Reps": "4 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Lat Machine Presa Neutra:** 4 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Split Squat bulgaro con manubri",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "12+12 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Split Squat bulgaro con manubri: 3 x 5+5 @ 12+12 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Seal Row manubri su panca",
                  "Set_Reps": "3 x 6",
                  "Carico": "14+14 kg",
                  "Tempo": "1011",
                  "Note": "",
                  "Raw": "Seal Row manubri su panca: 3 x 6 @ 14+14 kg | Tempo `1011`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Deadbug con bilanciere a braccia tese",
                  "Set_Reps": "3 x 6+6",
                  "Carico": "",
                  "Tempo": "2020",
                  "Note": "",
                  "Raw": "Deadbug con bilanciere a braccia tese: 3 x 6+6 | Tempo `2020`."
                },
                {
                  "Esercizio": "Medball Chest Pass esplosivo contro muro",
                  "Set_Reps": "3 x 5",
                  "Carico": "4 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Medball Chest Pass esplosivo contro muro: 3 x 5 @ 4 kg | Tempo `X`."
                }
              ]
            }
          ],
          "2": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Spiderman reach (2x5/lato) + Scapular wall slides (2x8) + Calf raise monopodalico (2x8/lato).",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Spiderman reach (2x5/lato) + Scapular wall slides (2x8) + Calf raise monopodalico (2x8/lato)."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "Clean to Split Position",
                  "Set_Reps": "4 x 3+3",
                  "Carico": "35 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "**Clean to Split Position:** 4 x 3+3 @ 35 kg | Tempo `X`."
                },
                {
                  "Esercizio": "Half Squat Dinamico al Box (90°)",
                  "Set_Reps": "4 x 4",
                  "Carico": "50 kg (\"4\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Squat Dinamico al Box (90°):** 4 x 4 @ 50 kg (\"4\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Half Kneeling Landmine Press",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "+15 kg (\"5\")",
                  "Tempo": "10X0",
                  "Note": "",
                  "Raw": "**Half Kneeling Landmine Press:** 4 x 5+5 @ +15 kg (\"5\") | Tempo `10X0`."
                },
                {
                  "Esercizio": "Single-Arm Dumbbell Row (Focus Scapola DX)",
                  "Set_Reps": "4 x 5+5",
                  "Carico": "18 kg (\"5\")",
                  "Tempo": "1012",
                  "Note": "",
                  "Raw": "**Single-Arm Dumbbell Row (Focus Scapola DX):** 4 x 5+5 @ 18 kg (\"5\") | Tempo `1012`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Single-Leg RDL con KB",
                  "Set_Reps": "3 x 5+5",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Single-Leg RDL con KB: 3 x 5+5 @ 14 kg | Tempo `2010`."
                },
                {
                  "Esercizio": "Banded Face Pull con extrarotazione",
                  "Set_Reps": "3 x 10",
                  "Carico": "17.5 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Banded Face Pull con extrarotazione: 3 x 10 @ 17.5 kg | Tempo `2012`."
                }
              ]
            },
            {
              "blocco": "Core+Trans.",
              "items": [
                {
                  "Esercizio": "Pallof Press dinamico con step laterale",
                  "Set_Reps": "3 x 8+8",
                  "Carico": "",
                  "Tempo": "1111",
                  "Note": "",
                  "Raw": "Pallof Press dinamico con step laterale: 3 x 8+8 | Tempo `1111`."
                },
                {
                  "Esercizio": "Rotational Medball Throw contro muro",
                  "Set_Reps": "3 x 4+4",
                  "Carico": "3 kg",
                  "Tempo": "X",
                  "Note": "",
                  "Raw": "Rotational Medball Throw contro muro: 3 x 4+4 @ 3 kg | Tempo `X`."
                }
              ]
            }
          ],
          "3": [
            {
              "blocco": "Prehab",
              "items": [
                {
                  "Esercizio": "Foam roller catena posteriore (2x40\") + Monster walk (2x10) + Passive hang (2x20\").",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Foam roller catena posteriore (2x40\") + Monster walk (2x10) + Passive hang (2x20\")."
                }
              ]
            },
            {
              "blocco": "Main Exercises",
              "items": [
                {
                  "Esercizio": "RDL Bilanciere",
                  "Set_Reps": "2 x 4",
                  "Carico": "60 kg (\"5\")",
                  "Tempo": "3010",
                  "Note": "Buffer 3 / RPE 6-7",
                  "Raw": "**RDL Bilanciere:** **2 x 4** @ 60 kg (\"5\") | Tempo `3010` (Buffer 3 / RPE 6-7)."
                },
                {
                  "Esercizio": "Pulley Basso Presa Parallela",
                  "Set_Reps": "3 x 5",
                  "Carico": "45 kg (\"5\")",
                  "Tempo": "2011",
                  "Note": "",
                  "Raw": "**Pulley Basso Presa Parallela:** 3 x 5 @ 45 kg (\"5\") | Tempo `2011`."
                }
              ]
            },
            {
              "blocco": "Accessories",
              "items": [
                {
                  "Esercizio": "Glute Bridge con bilanciere",
                  "Set_Reps": "3 x 6",
                  "Carico": "45 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Glute Bridge con bilanciere: 3 x 6 @ 45 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Standing Calf Raise bilaterale",
                  "Set_Reps": "3 x 10",
                  "Carico": "+20 kg",
                  "Tempo": "2012",
                  "Note": "",
                  "Raw": "Standing Calf Raise bilaterale: 3 x 10 @ +20 kg | Tempo `2012`."
                },
                {
                  "Esercizio": "Dumbbell Pullover su panca",
                  "Set_Reps": "3 x 8",
                  "Carico": "14 kg",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Dumbbell Pullover su panca: 3 x 8 @ 14 kg | Tempo `2010`."
                }
              ]
            },
            {
              "blocco": "Abdominals + Transfer",
              "items": [
                {
                  "Esercizio": "Hanging Leg Raise alla spalliera",
                  "Set_Reps": "3 x 8",
                  "Carico": "",
                  "Tempo": "2010",
                  "Note": "",
                  "Raw": "Hanging Leg Raise alla spalliera: 3 x 8 | Tempo `2010`."
                },
                {
                  "Esercizio": "Side Plank con tenuta isometrica",
                  "Set_Reps": "3 x 25\" /lato.",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Side Plank con tenuta isometrica: 3 x 25\" /lato."
                }
              ]
            },
            {
              "blocco": "STRICT FRIDAY JUMP BAN",
              "items": [
                {
                  "Esercizio": "Zero salti.",
                  "Set_Reps": "",
                  "Carico": "",
                  "Tempo": "",
                  "Note": "",
                  "Raw": "Zero salti."
                }
              ]
            }
          ]
        }
      }
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ROSTER, WEEKS_DATA };
}
