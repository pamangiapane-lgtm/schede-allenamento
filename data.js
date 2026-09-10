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
    "role": "Opposite",
    "number": "#04",
    "risk_level": "MEDIUM",
    "clinical_flags": [
      "Bilateral knee tendinitis (overuse)",
      "Stiff right shoulder"
    ],
    "focus_areas": [
      "Hip flexors stretching",
      "Right posterior tibialis and gluteus medius activation",
      "Lumbar mobility and right shoulder release"
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
    "turno": "",
    "rischio_clinico": "",
    "bw": 77
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
    "role": "Outside Hitter",
    "number": "#14",
    "risk_level": "MEDIUM",
    "clinical_flags": [
      "Ligamentous laxity",
      "Right scapular dyskinesis",
      "Left knee valgus",
      "Right wrist cyst"
    ],
    "focus_areas": [
      "Right wrist protection (neutral grips)",
      "Left ankle stability & dynamic anti-valgus",
      "Hamstrings eccentric stiffness",
      "Scapulo-thoracic control"
    ],
    "folder": "10_Nelly_Adamczewska",
    "baseline_1rm": {
      "Squat / Step Up": 95,
      "Bench Press": 55,
      "Row BB": 55,
      "Clean": 60
    },
    "offseason_sessions": 0,
    "turno": "",
    "rischio_clinico": "",
    "bw": 70
  }
];

const WEEKS_DATA = {
  "W3": {
    "titolo": "Week 3 — SSP 1: Forza & Controllo Eccentrico",
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
              "Esercizio": "2A. Squat (Parallelo)",
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
              "Esercizio": "2B. Half Squat Dinamico",
              "Set x Reps": "3 x 3 @ 70% (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (~110-120°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
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
              "Set x Reps": "3 x 30\"",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale del rachide lombare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6 @ 60-80 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Massima estensione dell'anca, 2\" fermo al top"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4 @ 80% (RIR 6)",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura, schiena neutra, bilanciere aderente alle cosce"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela",
              "Set x Reps": "3 x 6-8 @ 70%",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione decompressiva al petto, schiena ferma"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca",
              "Set x Reps": "2 x 8 @ 8-10 kg",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Esercizio Specifico di Ruolo",
              "Set x Reps": "3 x 8-12",
              "Tempo": "`2012`",
              "Note Tecniche": "Palleggiatrici: Wrist Roller (3x12 @ 4kg)<br>Centrali: Heel Raise zavorrato (+10kg)<br>Schiacciatrici/Opposti: Extrarotazione cavo / Trap-3<br>Liberi: Copenhagen Plank (3x15\"/lato)"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Hollow Body Hold (o Tuck Hollow)",
              "Set x Reps": "2 x 20\"",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4B. Farmer Walk un manubrio (Suitcase carry)",
              "Set x Reps": "2 x 20m /lato @ 10-15 kg",
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
        "ban": "* ⛔ **BAN Squat Libero Profondo a Terra:**  \n  ➔ **SOSTITUZIONE:** **Squat parallelo a 90° (`3010` / `20X0`)**: il box rigido calibra l'inversione di moto, impedisce lo shift pelvico a sinistra e toglie tensione alla periostite tibiale.\n* ⛔ **BAN Drop Jump Alti (>25 cm):** I salti con atterraggio ad alto impatto infiammano il periostio tibiale.  \n  ➔ **SOSTITUZIONE:** **Low Pogo Jumps elastici a terra e Drop Landing da 15-20 cm su Chronojump** con controllo dell'inversione calcaneale.\n* 🛡️ **PREHAB SPECIFICO (Tibiale Posteriore, Anca DX & Polsi):**\n  - Short Foot attivo su superficie rigida + Banded Ankle Inversion (con elastico per il tibiale posteriore sinistro).\n  - Mobilizzazione anca destra 90/90 in intrarotazione attiva (recupero dell'escursione fisiologica).\n  - Wrist Roller e Dumbbell Wrist Curls per avambracci e polsi.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO IMPATTI PLIOMETRICI**. L'RDL è calibrato a sole 2 serie da 4 reps sub-massimali per preservare le gambe per il test match del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (40.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (9+9 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (24.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (6+6 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Wrist Roller per il Palleggio",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "4 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo flessori/estensori polso per il palleggio"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Power Clean con Bilanciere",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "28.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (33.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+17.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (7 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Wrist Roller per il Palleggio",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "4 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo avambracci e presa isometrica"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (48.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (24.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Wrist Roller per il Palleggio",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "4 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: rinforzo flessori ed estensori carpo per il tocco"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "12 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (54.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (12+12 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (15+15 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Tendine Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Tutela tendinopatia rotulea e stabilità del ginocchio"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Power Clean con Bilanciere",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "24.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (46.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+14.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (18 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Tendine Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Tensione costante sul quadricipite e scarico rotuleo"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "75 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (60.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Heel Raise Zavorrato su Step",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+10 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: stabilità retropiede e tendine d'Achille per il muro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "14 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (71.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (15+15 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (39.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (19+19 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone Y-Raise Spalla d'Attacco DX",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "3+3 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo trapezio inferiore e stabilizzatori spalla destra"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Powerbag Clean to Chest",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "49.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (62.0 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+31.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (22 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone Y-Raise Spalla d'Attacco DX",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "3+3 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Focus scapola destra in rotazione craniale"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "70 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (68.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (39.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Extrarotazione Eccentrica al Cavo",
              "Set x Reps": "3 x 10 /lato",
              "Carico (kg/RPE)": "5-7 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: decelerazione braccio d'attacco e salute cuffia rotatori"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "14 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
        }
      },
      "4": {
        "id": 4,
        "name": "Anja Asonja",
        "number": "#04",
        "role": "Opposto",
        "peso": "",
        "rischio": "",
        "turno": "",
        "triage": "",
        "ban": "",
        "w3_sedute": {
          "1": [
            {
              "Block": "# Prehab",
              "Exercise": "1A. Chronojump CMJ Readiness Test",
              "Sets x Reps": "1 x 2 jumps",
              "Load (kg / RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Coach Technical Notes": "Baseline peak height and symmetry check (target drop <7%)"
            },
            {
              "Block": "# Plyo",
              "Exercise": "2A. In-Line Pogo Hops in Cluster",
              "Sets x Reps": "2 x (3+3+3)",
              "Load (kg / RPE)": "BW",
              "Tempo": "`X`",
              "Coach Technical Notes": "15\" intra-set pause. Ankle stiffness, ground contact <200ms"
            },
            {
              "Block": "# Main",
              "Exercise": "3A. Parallel Squat",
              "Sets x Reps": "3 x 3",
              "Load (kg / RPE)": "75% (42.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Coach Technical Notes": "Femur parallel to floor (~90° knee angle). Controlled 1-2s descent, strict stop at parallel, maximal upward acceleration (Max Intent, VBT 0.60-0.65 m/s). Tripod foot pressure"
            },
            {
              "Block": "",
              "Exercise": "3B. Dumbbell Floor Chest Press",
              "Sets x Reps": "3 x 4-5",
              "Load (kg / RPE)": "60% (15+15 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Coach Technical Notes": "Elbows at 45° on floor protecting rotator cuff, 1s pause on floor (pure concentric force), explosive vertical press"
            },
            {
              "Block": "",
              "Exercise": "3C. Lat Pulldown Narrow Neutral Grip",
              "Sets x Reps": "3 x 5",
              "Load (kg / RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Coach Technical Notes": "Depress scapulae before pulling, powerful pull to upper chest, elbows down and tight"
            },
            {
              "Block": "# Accessories",
              "Exercise": "4A. Dumbbell Split Squat (Front Foot Elevated)",
              "Sets x Reps": "2 x 4+4",
              "Load (kg / RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Coach Technical Notes": "Knee tracked over 2nd toe, explosive ascent, RIR 2"
            },
            {
              "Block": "",
              "Exercise": "4B. Dumbbell Seal Row on 30° Incline Bench",
              "Sets x Reps": "3 x 6",
              "Load (kg / RPE)": "60% (13+13 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Coach Technical Notes": "DUMBBELLS ONLY (DB, no barbell). Prone on 30° bench, neutral grip, 1s scapular squeeze at peak, controlled 2s lowering"
            },
            {
              "Block": "# Core+Trans.",
              "Exercise": "5A. Kettlebell Loaded Deadbug",
              "Sets x Reps": "2 x 5+5",
              "Load (kg / RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Coach Technical Notes": "Hold 2-4 kg KB with straight arms vertically. Constant tension, lower back pressed flat to floor (zero space), controlled extension"
            },
            {
              "Block": "",
              "Exercise": "5B. Wall Medball Chest Pass",
              "Sets x Reps": "3 x 4",
              "Load (kg / RPE)": "3 kg",
              "Tempo": "`X`",
              "Coach Technical Notes": "Standing athletic stance, soft knees, explosive ballistic release at maximal velocity without braking arms"
            },
            {
              "Block": "",
              "Exercise": "Left Lefty Hitting Shoulder Cable External Rotators",
              "Sets x Reps": "2 x 10",
              "Load (kg / RPE)": "5 kg",
              "Tempo": "`2012`",
              "Coach Technical Notes": "Capsular and tendon protection for left-handed hitting shoulder"
            }
          ],
          "2": [
            {
              "Block": "# Prehab",
              "Exercise": "1A. Chronojump RSI/RFD Profiling",
              "Sets x Reps": "2 x 3 jumps",
              "Load (kg / RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Coach Technical Notes": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Block": "# Plyo",
              "Exercise": "2A. Mini-Hurdle Hops (20cm Hurdles) in Cluster",
              "Sets x Reps": "2 x (3+3+3)",
              "Load (kg / RPE)": "BW",
              "Tempo": "`X`",
              "Coach Technical Notes": "15\" intra-set pause. Pure elastic rebound"
            },
            {
              "Block": "# Main",
              "Exercise": "3A. Barbell Power Clean",
              "Sets x Reps": "3 x 3",
              "Load (kg / RPE)": "35.0 kg",
              "Tempo": "`X`",
              "Coach Technical Notes": "Explosive triple extension of ankles-knees-hips, fast catch in power position"
            },
            {
              "Block": "",
              "Exercise": "3B. Dynamic Half Squat",
              "Sets x Reps": "3 x 3",
              "Load (kg / RPE)": "70% (34.0 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Coach Technical Notes": "Jump-specific half squat (~110-120° knee angle). Maximal upward acceleration (VBT target 0.70-0.75 m/s)"
            },
            {
              "Block": "",
              "Exercise": "3C. Half-Kneeling Single-Arm Landmine Press",
              "Sets x Reps": "3 x 4+4",
              "Load (kg / RPE)": "70% (+19.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Coach Technical Notes": "Half-kneeling (ipsilateral knee on floor), explosive press at 45° in scapular plane"
            },
            {
              "Block": "",
              "Exercise": "3D. Single-Arm Dumbbell Row on Bench",
              "Sets x Reps": "3 x 5+5",
              "Load (kg / RPE)": "70% (15 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Coach Technical Notes": "Three points of contact, horizontal torso, elbow tight to ribcage, 1s peak contraction"
            },
            {
              "Block": "# Accessories",
              "Exercise": "4A. Single-Leg RDL with Kettlebell",
              "Sets x Reps": "2 x 4+4",
              "Load (kg / RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Coach Technical Notes": "CONTRALATERAL load (KB opposite to stance leg). Knee soft, hinge back, active foot arch"
            },
            {
              "Block": "",
              "Exercise": "4B. High Cable Face Pull with External Rotation",
              "Sets x Reps": "2 x 8",
              "Load (kg / RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Coach Technical Notes": "Thumbs rotated back, rope to eye level, lower trapezius and rotator cuff reinforcement"
            },
            {
              "Block": "# Core+Trans.",
              "Exercise": "5A. Standing Band Pallof Press",
              "Sets x Reps": "2 x 6+6",
              "Load (kg / RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Coach Technical Notes": "Pure anti-rotation, rigid upright torso"
            },
            {
              "Block": "",
              "Exercise": "5B. Rotational Medball Wall Throw",
              "Sets x Reps": "3 x 3+3",
              "Load (kg / RPE)": "3 kg",
              "Tempo": "`X`",
              "Coach Technical Notes": "Standing sideways to wall, hip load and explosive rotational transfer"
            },
            {
              "Block": "",
              "Exercise": "Left Lefty Hitting Shoulder Cable External Rotators",
              "Sets x Reps": "2 x 10",
              "Load (kg / RPE)": "5 kg",
              "Tempo": "`2012`",
              "Coach Technical Notes": "Protection for left-handed hitting shoulder"
            }
          ],
          "3": [
            {
              "Block": "# Prehab",
              "Exercise": "1A. Bar Hang with Feet Support",
              "Sets x Reps": "3 x 30\"",
              "Load (kg / RPE)": "Partial BW",
              "Tempo": "Decompressive",
              "Coach Technical Notes": "Full spinal decompression and shoulder hang"
            },
            {
              "Block": "# Main",
              "Exercise": "2A. Barbell Glute Bridge on Floor",
              "Sets x Reps": "3 x 6",
              "Load (kg / RPE)": "80 kg (RIR 4)",
              "Tempo": "`2012`",
              "Coach Technical Notes": "Moved to Main. Drive through heels, 2s maximal isometric hold at top"
            },
            {
              "Block": "",
              "Exercise": "2B. Barbell Romanian Deadlift (RDL)",
              "Sets x Reps": "3 x 4",
              "Load (kg / RPE)": "80% (68.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Coach Technical Notes": "Pure hip hinge pushing pelvis backward, bar brushing thighs, strict neutral spine"
            },
            {
              "Block": "",
              "Exercise": "2C. Seated Low Cable Pulley Row Narrow Parallel Grip",
              "Sets x Reps": "2 x 6",
              "Load (kg / RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Coach Technical Notes": "Upright torso 90°, decompressive horizontal pull towards navel"
            },
            {
              "Block": "# Accessories",
              "Exercise": "3A. Flat Bench Dumbbell Pullover",
              "Sets x Reps": "2 x 8",
              "Load (kg / RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Coach Technical Notes": "Thoracic ribcage expansion and controlled lats stretch without lumbar hyperextension"
            },
            {
              "Block": "",
              "Exercise": "3B. Incline Bench 30° Trap-3 Raise",
              "Sets x Reps": "3 x 8",
              "Load (kg / RPE)": "2+2 kg",
              "Tempo": "`2012`",
              "Coach Technical Notes": "Role-specific: scapular stabilizers and lower trap for left-handed hitting power"
            },
            {
              "Block": "# Core+Trans.",
              "Exercise": "4A. Single Dumbbell Suitcase Carry",
              "Sets x Reps": "2 x 20m /side",
              "Load (kg / RPE)": "15 kg",
              "Tempo": "Walking",
              "Coach Technical Notes": "Unilateral load, anti-lateral flexion and strong grip"
            },
            {
              "Block": "",
              "Exercise": "🛑 STRICT FRIDAY JUMP BAN",
              "Sets x Reps": "-",
              "Load (kg / RPE)": "-",
              "Tempo": "-",
              "Coach Technical Notes": "ZERO JUMPS. Keep legs fresh and elastic for Saturday match."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (53.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (12+12 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (9+9 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone Y-Raise (Postura Difesa Bassa)",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "2.5+2.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo cingolo scapolare per ricezione e difesa"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Powerbag Clean to Chest (o KB Clean)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "21.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (46.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+17.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (10 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone Y-Raise (Postura Difesa Bassa)",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "2.5+2.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Tenuta scapolare per la difesa a terra"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (44.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Copenhagen Plank Assistito",
              "Set x Reps": "3 x 15\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Isometrico`",
              "Note Tecniche": "Esercizio ruolo: tenuta adduttori ed anti-valgismo ginocchio in postura difensiva bassa"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (43.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (11+11 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (24.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (14+14 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Tendine Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Protezione ginocchio per salti di muro e primo tempo"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Power Clean con Bilanciere",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "35.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (35.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+18.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (16 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Tendine Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Decompressione rotulea e stabilità"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "70 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (60.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (24.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Heel Raise Eccentrico su Step",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+10 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: discesa 3\" controllata per tendine d'Achille e protezione tendine rotuleo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "12 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (63.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (11+11 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (35.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (16+16 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone YTWL Spalla Dominante",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Rinforzo trapezio inferiore e deltoidi posteriori"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Power Clean con Bilanciere",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "44.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (53.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+28.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (19 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone YTWL Spalla Dominante",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Stabilità scapolare per attacco e servizio"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "75 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (60.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (35.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Extrarotazione Eccentrica al Cavo",
              "Set x Reps": "3 x 10 /lato",
              "Carico (kg/RPE)": "6 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: decelerazione braccio d'attacco e salute cuffia rotatori"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "14 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (59.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (11+11 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (35.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (18+18 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Valgo Control Knee Stability Arto Portante",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Allineamento anca-ginocchio-piede in atterraggio"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Power Clean con Bilanciere",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "24.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (50.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+22.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (21 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Valgo Control Knee Stability Arto Portante",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Stabilità in frenata eccentrica"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "80 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (64.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (35.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Incline Trap-3 Raise su Panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "2+2 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: fissatori della scapola e trapezio inferiore per l'attacco dell'opposto"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
        "ban": "* ⛔ **BAN ASSOLUTO Push Press o Overhead Press Bilanciere:** Qualsiasi distensione bilaterale con bilanciere sopra la testa comprime il rachide cervicale e scatena l'irradiazione cefalica.  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Lunge Position One-Arm Press con Kettlebell (`3010` / `2010`)** oppure **Half Kneeling Landmine Press**: spinta sul piano scapolare (a 30°), lavoro asimmetrico che stabilizza il core senza comprimere le vertebre cervicali.\n* ⛔ **BAN Deadbug Classico a Corpo Libero:** La perdita di contatto lombare scatena estensione cervicale compensatoria.  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Deadbug Pullover con Kettlebell/Manubrio (`2020`)**: la presa isometrica dell'attrezzo attiva il gran dorsale e il dentato anteriore, ancorando saldamente la cassa toracica ed evitando la tensione nucale.\n* ⛔ **BAN Squat Libero senza Box:** Tendenza a crollare nello shift a sinistra e valgo sull'innesto LCA.  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Squat parallelo (85°) con Miniband sopra le ginocchia**: l'elastico induce il reclutamento attivo del gluteo medio contrastando il valgo sinistro; il box rigido calibra la discesa e neutralizza lo shift pelvico.\n* 🛡️ **SOSTITUZIONE OLIMPICA (NO TRAP BAR):**  \n  ➔ **Powerbag Clean to Chest (o Clean to Split con Powerbag/Sandbag 15-20 kg)**: azzera l'impatto articolare della girata su polsi e rachide cervicale, consentendo tripla estensione senza stress torsionale sul ginocchio sinistro operato.\n* 🛡️ **PREHAB MIRATO (Caviglia + Anca SX + Scapola):**\n  - Mobilità caviglia Knee-to-Wall con elastico (trazione dell'astragalo indietro).\n  - Mobilizzazione anca sinistra in rotazione esterna (Figure 4 stretch / 90-90 ER).\n  - Attivazione tibiale posteriore con fascia elastica (inversione calcaneale).\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI, ZERO PLIOMETRIA E ZERO ATTERRAGGI IMPATTANTI**. Protezione assoluta delle ginocchia operate pre-weekend.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (96.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (12+12 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (25.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (14+14 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Scarico Femoro-Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Protocollo clinico ginocchio: stop compressioni e de-tensione"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Powerbag Clean to Chest (NO Bilanciere)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "35.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (85.0 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+21.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (16 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Scarico Femoro-Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Detensione femoro-rotulea"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "70 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (84.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (25.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Extrarotazione al Cavo su Piano Scapolare 30°",
              "Set x Reps": "3 x 10 /lato",
              "Carico (kg/RPE)": "5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: extrarotazione protetta salva-cuffia su piano scapolare per spalla DX operata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "12 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
        }
      },
      "14": {
        "id": 14,
        "name": "Nelly Adamczewska",
        "number": "#14",
        "role": "Schiacciatrice",
        "peso": "",
        "rischio": "",
        "turno": "",
        "triage": "",
        "ban": "",
        "w3_sedute": {},
        "w4_sedute": {}
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
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (64.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (9+9 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (30.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (9+9 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone Y-Raise (Postura Difesa Bassa)",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "2.5+2.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo cingolo scapolare per ricezione e difesa"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Powerbag Clean to Chest (o KB Clean)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "35.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (55.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+15.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (10 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone Y-Raise (Postura Difesa Bassa)",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "2.5+2.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Tenuta scapolare per la difesa a terra"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (60.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (30.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Copenhagen Plank Assistito",
              "Set x Reps": "3 x 15\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Isometrico`",
              "Note Tecniche": "Esercizio ruolo: stabilità adduttori e anti-valgismo ginocchio in postura difensiva del Libero"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (75.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (15+15 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (18+18 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Wrist Roller per il Palleggio",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "4 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo flessori/estensori polso per il palleggio"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Power Clean con Bilanciere",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "29.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (66.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+24.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (21 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Wrist Roller per il Palleggio",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "4 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo avambracci e presa isometrica"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (68.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Wrist Roller per il Palleggio",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "4 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: rinforzo flessori ed estensori del carpo, precisione e stabilità del tocco"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "12 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (46.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (9+9 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (33.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (11+11 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Tendine Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Protezione ginocchio per salti di muro e primo tempo"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Power Clean con Bilanciere",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "31.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (38.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+17.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (13 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Tendine Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Decompressione rotulea e stabilità"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "75 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (60.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (33.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Heel Raise Zavorrato su Step",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+10 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: estensione della caviglia e stabilità retropiede per il muro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "14 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
        }
      }
    }
  },
  "W4": {
    "titolo": "Week 4 — SSP 2: Contrasto Dinamico & Potenza",
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
              "Esercizio": "2A. Squat (Parallelo)",
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
              "Esercizio": "2B. Half Squat Dinamico",
              "Set x Reps": "3 x 3 @ 70% (\"6\")",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (~110-120°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
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
              "Set x Reps": "3 x 30\"",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale del rachide lombare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6 @ 60-80 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Massima estensione dell'anca, 2\" fermo al top"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4 @ 80% (RIR 6)",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura, schiena neutra, bilanciere aderente alle cosce"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela",
              "Set x Reps": "3 x 6-8 @ 70%",
              "Tempo": "`2011`",
              "Note Tecniche": "Trazione decompressiva al petto, schiena ferma"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca",
              "Set x Reps": "2 x 8 @ 8-10 kg",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Esercizio Specifico di Ruolo",
              "Set x Reps": "3 x 8-12",
              "Tempo": "`2012`",
              "Note Tecniche": "Palleggiatrici: Wrist Roller (3x12 @ 4kg)<br>Centrali: Heel Raise zavorrato (+10kg)<br>Schiacciatrici/Opposti: Extrarotazione cavo / Trap-3<br>Liberi: Copenhagen Plank (3x15\"/lato)"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Hollow Body Hold (o Tuck Hollow)",
              "Set x Reps": "2 x 20\"",
              "Tempo": "Isometrico",
              "Note Tecniche": "Schiena lombare schiacciata al suolo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4B. Farmer Walk un manubrio (Suitcase carry)",
              "Set x Reps": "2 x 20m /lato @ 10-15 kg",
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
        "ban": "* ⛔ **BAN Squat Libero Profondo a Terra:**  \n  ➔ **SOSTITUZIONE:** **Squat parallelo a 90° (`3010` / `20X0`)**: il box rigido calibra l'inversione di moto, impedisce lo shift pelvico a sinistra e toglie tensione alla periostite tibiale.\n* ⛔ **BAN Drop Jump Alti (>25 cm):** I salti con atterraggio ad alto impatto infiammano il periostio tibiale.  \n  ➔ **SOSTITUZIONE:** **Low Pogo Jumps elastici a terra e Drop Landing da 15-20 cm su Chronojump** con controllo dell'inversione calcaneale.\n* 🛡️ **PREHAB SPECIFICO (Tibiale Posteriore, Anca DX & Polsi):**\n  - Short Foot attivo su superficie rigida + Banded Ankle Inversion (con elastico per il tibiale posteriore sinistro).\n  - Mobilizzazione anca destra 90/90 in intrarotazione attiva (recupero dell'escursione fisiologica).\n  - Wrist Roller e Dumbbell Wrist Curls per avambracci e polsi.\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI E ZERO IMPATTI PLIOMETRICI**. L'RDL è calibrato a sole 2 serie da 4 reps sub-massimali per preservare le gambe per il test match del sabato.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (40.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (9+9 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (24.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (6+6 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Wrist Roller per il Palleggio",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "4 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo flessori/estensori polso per il palleggio"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Power Clean con Bilanciere",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "28.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (33.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+17.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (7 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Wrist Roller per il Palleggio",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "4 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo avambracci e presa isometrica"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (48.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (24.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Wrist Roller per il Palleggio",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "4 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: rinforzo flessori ed estensori carpo per il tocco"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "12 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (54.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (12+12 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (15+15 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Tendine Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Tutela tendinopatia rotulea e stabilità del ginocchio"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Power Clean con Bilanciere",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "24.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (46.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+14.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (18 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Tendine Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Tensione costante sul quadricipite e scarico rotuleo"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "75 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (60.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Heel Raise Zavorrato su Step",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+10 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: stabilità retropiede e tendine d'Achille per il muro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "14 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (71.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (15+15 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (39.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (19+19 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone Y-Raise Spalla d'Attacco DX",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "3+3 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo trapezio inferiore e stabilizzatori spalla destra"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Powerbag Clean to Chest",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "49.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (62.0 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+31.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (22 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone Y-Raise Spalla d'Attacco DX",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "3+3 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Focus scapola destra in rotazione craniale"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "70 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (68.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (39.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Extrarotazione Eccentrica al Cavo",
              "Set x Reps": "3 x 10 /lato",
              "Carico (kg/RPE)": "5-7 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: decelerazione braccio d'attacco e salute cuffia rotatori"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "14 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
        }
      },
      "4": {
        "id": 4,
        "name": "Anja Asonja",
        "number": "#04",
        "role": "Opposto",
        "peso": "",
        "rischio": "",
        "turno": "",
        "triage": "",
        "ban": "",
        "w3_sedute": {
          "1": [
            {
              "Block": "# Prehab",
              "Exercise": "1A. Chronojump CMJ Readiness Test",
              "Sets x Reps": "1 x 2 jumps",
              "Load (kg / RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Coach Technical Notes": "Baseline peak height and symmetry check (target drop <7%)"
            },
            {
              "Block": "# Plyo",
              "Exercise": "2A. In-Line Pogo Hops in Cluster",
              "Sets x Reps": "2 x (3+3+3)",
              "Load (kg / RPE)": "BW",
              "Tempo": "`X`",
              "Coach Technical Notes": "15\" intra-set pause. Ankle stiffness, ground contact <200ms"
            },
            {
              "Block": "# Main",
              "Exercise": "3A. Parallel Squat",
              "Sets x Reps": "3 x 3",
              "Load (kg / RPE)": "75% (42.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Coach Technical Notes": "Femur parallel to floor (~90° knee angle). Controlled 1-2s descent, strict stop at parallel, maximal upward acceleration (Max Intent, VBT 0.60-0.65 m/s). Tripod foot pressure"
            },
            {
              "Block": "",
              "Exercise": "3B. Dumbbell Floor Chest Press",
              "Sets x Reps": "3 x 4-5",
              "Load (kg / RPE)": "60% (15+15 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Coach Technical Notes": "Elbows at 45° on floor protecting rotator cuff, 1s pause on floor (pure concentric force), explosive vertical press"
            },
            {
              "Block": "",
              "Exercise": "3C. Lat Pulldown Narrow Neutral Grip",
              "Sets x Reps": "3 x 5",
              "Load (kg / RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Coach Technical Notes": "Depress scapulae before pulling, powerful pull to upper chest, elbows down and tight"
            },
            {
              "Block": "# Accessories",
              "Exercise": "4A. Dumbbell Split Squat (Front Foot Elevated)",
              "Sets x Reps": "2 x 4+4",
              "Load (kg / RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Coach Technical Notes": "Knee tracked over 2nd toe, explosive ascent, RIR 2"
            },
            {
              "Block": "",
              "Exercise": "4B. Dumbbell Seal Row on 30° Incline Bench",
              "Sets x Reps": "3 x 6",
              "Load (kg / RPE)": "60% (13+13 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Coach Technical Notes": "DUMBBELLS ONLY (DB, no barbell). Prone on 30° bench, neutral grip, 1s scapular squeeze at peak, controlled 2s lowering"
            },
            {
              "Block": "# Core+Trans.",
              "Exercise": "5A. Kettlebell Loaded Deadbug",
              "Sets x Reps": "2 x 5+5",
              "Load (kg / RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Coach Technical Notes": "Hold 2-4 kg KB with straight arms vertically. Constant tension, lower back pressed flat to floor (zero space), controlled extension"
            },
            {
              "Block": "",
              "Exercise": "5B. Wall Medball Chest Pass",
              "Sets x Reps": "3 x 4",
              "Load (kg / RPE)": "3 kg",
              "Tempo": "`X`",
              "Coach Technical Notes": "Standing athletic stance, soft knees, explosive ballistic release at maximal velocity without braking arms"
            },
            {
              "Block": "",
              "Exercise": "Left Lefty Hitting Shoulder Cable External Rotators",
              "Sets x Reps": "2 x 10",
              "Load (kg / RPE)": "5 kg",
              "Tempo": "`2012`",
              "Coach Technical Notes": "Capsular and tendon protection for left-handed hitting shoulder"
            }
          ],
          "2": [
            {
              "Block": "# Prehab",
              "Exercise": "1A. Chronojump RSI/RFD Profiling",
              "Sets x Reps": "2 x 3 jumps",
              "Load (kg / RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Coach Technical Notes": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Block": "# Plyo",
              "Exercise": "2A. Mini-Hurdle Hops (20cm Hurdles) in Cluster",
              "Sets x Reps": "2 x (3+3+3)",
              "Load (kg / RPE)": "BW",
              "Tempo": "`X`",
              "Coach Technical Notes": "15\" intra-set pause. Pure elastic rebound"
            },
            {
              "Block": "# Main",
              "Exercise": "3A. Barbell Power Clean",
              "Sets x Reps": "3 x 3",
              "Load (kg / RPE)": "35.0 kg",
              "Tempo": "`X`",
              "Coach Technical Notes": "Explosive triple extension of ankles-knees-hips, fast catch in power position"
            },
            {
              "Block": "",
              "Exercise": "3B. Dynamic Half Squat",
              "Sets x Reps": "3 x 3",
              "Load (kg / RPE)": "70% (34.0 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Coach Technical Notes": "Jump-specific half squat (~110-120° knee angle). Maximal upward acceleration (VBT target 0.70-0.75 m/s)"
            },
            {
              "Block": "",
              "Exercise": "3C. Half-Kneeling Single-Arm Landmine Press",
              "Sets x Reps": "3 x 4+4",
              "Load (kg / RPE)": "70% (+19.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Coach Technical Notes": "Half-kneeling (ipsilateral knee on floor), explosive press at 45° in scapular plane"
            },
            {
              "Block": "",
              "Exercise": "3D. Single-Arm Dumbbell Row on Bench",
              "Sets x Reps": "3 x 5+5",
              "Load (kg / RPE)": "70% (15 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Coach Technical Notes": "Three points of contact, horizontal torso, elbow tight to ribcage, 1s peak contraction"
            },
            {
              "Block": "# Accessories",
              "Exercise": "4A. Single-Leg RDL with Kettlebell",
              "Sets x Reps": "2 x 4+4",
              "Load (kg / RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Coach Technical Notes": "CONTRALATERAL load (KB opposite to stance leg). Knee soft, hinge back, active foot arch"
            },
            {
              "Block": "",
              "Exercise": "4B. High Cable Face Pull with External Rotation",
              "Sets x Reps": "2 x 8",
              "Load (kg / RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Coach Technical Notes": "Thumbs rotated back, rope to eye level, lower trapezius and rotator cuff reinforcement"
            },
            {
              "Block": "# Core+Trans.",
              "Exercise": "5A. Standing Band Pallof Press",
              "Sets x Reps": "2 x 6+6",
              "Load (kg / RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Coach Technical Notes": "Pure anti-rotation, rigid upright torso"
            },
            {
              "Block": "",
              "Exercise": "5B. Rotational Medball Wall Throw",
              "Sets x Reps": "3 x 3+3",
              "Load (kg / RPE)": "3 kg",
              "Tempo": "`X`",
              "Coach Technical Notes": "Standing sideways to wall, hip load and explosive rotational transfer"
            },
            {
              "Block": "",
              "Exercise": "Left Lefty Hitting Shoulder Cable External Rotators",
              "Sets x Reps": "2 x 10",
              "Load (kg / RPE)": "5 kg",
              "Tempo": "`2012`",
              "Coach Technical Notes": "Protection for left-handed hitting shoulder"
            }
          ],
          "3": [
            {
              "Block": "# Prehab",
              "Exercise": "1A. Bar Hang with Feet Support",
              "Sets x Reps": "3 x 30\"",
              "Load (kg / RPE)": "Partial BW",
              "Tempo": "Decompressive",
              "Coach Technical Notes": "Full spinal decompression and shoulder hang"
            },
            {
              "Block": "# Main",
              "Exercise": "2A. Barbell Glute Bridge on Floor",
              "Sets x Reps": "3 x 6",
              "Load (kg / RPE)": "80 kg (RIR 4)",
              "Tempo": "`2012`",
              "Coach Technical Notes": "Moved to Main. Drive through heels, 2s maximal isometric hold at top"
            },
            {
              "Block": "",
              "Exercise": "2B. Barbell Romanian Deadlift (RDL)",
              "Sets x Reps": "3 x 4",
              "Load (kg / RPE)": "80% (68.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Coach Technical Notes": "Pure hip hinge pushing pelvis backward, bar brushing thighs, strict neutral spine"
            },
            {
              "Block": "",
              "Exercise": "2C. Seated Low Cable Pulley Row Narrow Parallel Grip",
              "Sets x Reps": "2 x 6",
              "Load (kg / RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Coach Technical Notes": "Upright torso 90°, decompressive horizontal pull towards navel"
            },
            {
              "Block": "# Accessories",
              "Exercise": "3A. Flat Bench Dumbbell Pullover",
              "Sets x Reps": "2 x 8",
              "Load (kg / RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Coach Technical Notes": "Thoracic ribcage expansion and controlled lats stretch without lumbar hyperextension"
            },
            {
              "Block": "",
              "Exercise": "3B. Incline Bench 30° Trap-3 Raise",
              "Sets x Reps": "3 x 8",
              "Load (kg / RPE)": "2+2 kg",
              "Tempo": "`2012`",
              "Coach Technical Notes": "Role-specific: scapular stabilizers and lower trap for left-handed hitting power"
            },
            {
              "Block": "# Core+Trans.",
              "Exercise": "4A. Single Dumbbell Suitcase Carry",
              "Sets x Reps": "2 x 20m /side",
              "Load (kg / RPE)": "15 kg",
              "Tempo": "Walking",
              "Coach Technical Notes": "Unilateral load, anti-lateral flexion and strong grip"
            },
            {
              "Block": "",
              "Exercise": "🛑 STRICT FRIDAY JUMP BAN",
              "Sets x Reps": "-",
              "Load (kg / RPE)": "-",
              "Tempo": "-",
              "Coach Technical Notes": "ZERO JUMPS. Keep legs fresh and elastic for Saturday match."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (53.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (12+12 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (9+9 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone Y-Raise (Postura Difesa Bassa)",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "2.5+2.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo cingolo scapolare per ricezione e difesa"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Powerbag Clean to Chest (o KB Clean)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "21.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (46.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+17.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (10 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone Y-Raise (Postura Difesa Bassa)",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "2.5+2.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Tenuta scapolare per la difesa a terra"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (44.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Copenhagen Plank Assistito",
              "Set x Reps": "3 x 15\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Isometrico`",
              "Note Tecniche": "Esercizio ruolo: tenuta adduttori ed anti-valgismo ginocchio in postura difensiva bassa"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (43.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (11+11 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (24.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (14+14 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Tendine Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Protezione ginocchio per salti di muro e primo tempo"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Power Clean con Bilanciere",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "35.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (35.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+18.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (16 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Tendine Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Decompressione rotulea e stabilità"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "70 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (60.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (24.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Heel Raise Eccentrico su Step",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+10 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: discesa 3\" controllata per tendine d'Achille e protezione tendine rotuleo"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "12 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (63.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (11+11 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (35.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (16+16 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone YTWL Spalla Dominante",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Rinforzo trapezio inferiore e deltoidi posteriori"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Power Clean con Bilanciere",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "44.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (53.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+28.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (19 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone YTWL Spalla Dominante",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`1012`",
              "Note Tecniche": "Stabilità scapolare per attacco e servizio"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "75 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (60.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (35.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Extrarotazione Eccentrica al Cavo",
              "Set x Reps": "3 x 10 /lato",
              "Carico (kg/RPE)": "6 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: decelerazione braccio d'attacco e salute cuffia rotatori"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "14 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (59.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (11+11 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (35.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (18+18 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Valgo Control Knee Stability Arto Portante",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Allineamento anca-ginocchio-piede in atterraggio"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Power Clean con Bilanciere",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "24.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (50.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+22.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (21 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Valgo Control Knee Stability Arto Portante",
              "Set x Reps": "2 x 10",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "`2012`",
              "Note Tecniche": "Stabilità in frenata eccentrica"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "80 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (64.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (35.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8-10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Incline Trap-3 Raise su Panca 30°",
              "Set x Reps": "3 x 8",
              "Carico (kg/RPE)": "2+2 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: fissatori della scapola e trapezio inferiore per l'attacco dell'opposto"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "15 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
        "ban": "* ⛔ **BAN ASSOLUTO Push Press o Overhead Press Bilanciere:** Qualsiasi distensione bilaterale con bilanciere sopra la testa comprime il rachide cervicale e scatena l'irradiazione cefalica.  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Lunge Position One-Arm Press con Kettlebell (`3010` / `2010`)** oppure **Half Kneeling Landmine Press**: spinta sul piano scapolare (a 30°), lavoro asimmetrico che stabilizza il core senza comprimere le vertebre cervicali.\n* ⛔ **BAN Deadbug Classico a Corpo Libero:** La perdita di contatto lombare scatena estensione cervicale compensatoria.  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Deadbug Pullover con Kettlebell/Manubrio (`2020`)**: la presa isometrica dell'attrezzo attiva il gran dorsale e il dentato anteriore, ancorando saldamente la cassa toracica ed evitando la tensione nucale.\n* ⛔ **BAN Squat Libero senza Box:** Tendenza a crollare nello shift a sinistra e valgo sull'innesto LCA.  \n  ➔ **SOSTITUZIONE SPECIFICA:** **Squat parallelo (85°) con Miniband sopra le ginocchia**: l'elastico induce il reclutamento attivo del gluteo medio contrastando il valgo sinistro; il box rigido calibra la discesa e neutralizza lo shift pelvico.\n* 🛡️ **SOSTITUZIONE OLIMPICA (NO TRAP BAR):**  \n  ➔ **Powerbag Clean to Chest (o Clean to Split con Powerbag/Sandbag 15-20 kg)**: azzera l'impatto articolare della girata su polsi e rachide cervicale, consentendo tripla estensione senza stress torsionale sul ginocchio sinistro operato.\n* 🛡️ **PREHAB MIRATO (Caviglia + Anca SX + Scapola):**\n  - Mobilità caviglia Knee-to-Wall con elastico (trazione dell'astragalo indietro).\n  - Mobilizzazione anca sinistra in rotazione esterna (Figure 4 stretch / 90-90 ER).\n  - Attivazione tibiale posteriore con fascia elastica (inversione calcaneale).\n* 🛡️ **REGOLA VENERDÌ (Strict Friday Jump Ban):**  \n  - Nella Seduta 3 del venerdì, **ZERO SALTI, ZERO PLIOMETRIA E ZERO ATTERRAGGI IMPATTANTI**. Protezione assoluta delle ginocchia operate pre-weekend.\n\n---",
        "w3_sedute": {
          "1": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (96.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (12+12 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (25.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (14+14 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Scarico Femoro-Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Protocollo clinico ginocchio: stop compressioni e de-tensione"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Powerbag Clean to Chest (NO Bilanciere)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "35.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (85.0 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+21.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (16 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Scarico Femoro-Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Detensione femoro-rotulea"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "70 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (84.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (25.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Extrarotazione al Cavo su Piano Scapolare 30°",
              "Set x Reps": "3 x 10 /lato",
              "Carico (kg/RPE)": "5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: extrarotazione protetta salva-cuffia su piano scapolare per spalla DX operata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "12 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
        }
      },
      "14": {
        "id": 14,
        "name": "Nelly Adamczewska",
        "number": "#14",
        "role": "Schiacciatrice",
        "peso": "",
        "rischio": "",
        "turno": "",
        "triage": "",
        "ban": "",
        "w3_sedute": {},
        "w4_sedute": {}
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
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (64.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (9+9 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (30.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (9+9 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone Y-Raise (Postura Difesa Bassa)",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "2.5+2.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo cingolo scapolare per ricezione e difesa"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Powerbag Clean to Chest (o KB Clean)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "35.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (55.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+15.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (10 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Prone Y-Raise (Postura Difesa Bassa)",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "2.5+2.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Tenuta scapolare per la difesa a terra"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (60.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (30.0 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Copenhagen Plank Assistito",
              "Set x Reps": "3 x 15\" /lato",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Isometrico`",
              "Note Tecniche": "Esercizio ruolo: stabilità adduttori e anti-valgismo ginocchio in postura difensiva del Libero"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "10 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (75.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (15+15 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (18+18 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Wrist Roller per il Palleggio",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "4 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo flessori/estensori polso per il palleggio"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Power Clean con Bilanciere",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "29.5 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (66.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+24.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (21 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Wrist Roller per il Palleggio",
              "Set x Reps": "2 x 12",
              "Carico (kg/RPE)": "4 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Rinforzo avambracci e presa isometrica"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (68.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (31.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Wrist Roller per il Palleggio",
              "Set x Reps": "3 x 12",
              "Carico (kg/RPE)": "4 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: rinforzo flessori ed estensori del carpo, precisione e stabilità del tocco"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "12 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
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
              "Esercizio": "1A. Chronojump CMJ Readiness Test",
              "Set x Reps": "1 x 2 salti",
              "Carico (kg/RPE)": "Max",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Baseline altezza e verifica drop <7%"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Pogo Hops su Linea in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Stiffness caviglia, contatto <200ms"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Squat (Parallelo)",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "75% (46.0 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Parallelo femore-tibia (~90°). Discesa naturale 1-2\", stop secco al parallelo, salita max accelerazione (Max Intent, VBT 0.60-0.65 m/s). Pressione tripode plantare"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Floor Chest Press con Manubri",
              "Set x Reps": "3 x 4-5",
              "Carico (kg/RPE)": "60% (9+9 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Gomiti a 45° a terra salva-cuffia, stop 1\" a terra (zero rimbalzo, forza concentrica pura), spinta verticale potente"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Lat Machine Presa Neutra Stretta",
              "Set x Reps": "3 x 5",
              "Carico (kg/RPE)": "70% (33.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Scapole depresse prima di tirare, trazione potente al petto, gomiti in basso"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Split Squat con manubri (piede ant. su disco)",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "8+8 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Ginocchio in asse col 2° dito, risalita decisa, RIR 2"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Dumbbell Seal Row su panca 30°",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "60% (11+11 kg) [\"8\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "SOLO MANUBRI (DB, no bilanciere). Busto in appoggio prono su panca 30°, presa neutra, 1\" retrazione scapolare al picco, discesa controllata 2\""
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Deadbug con sovraccarico KB",
              "Set x Reps": "2 x 5+5",
              "Carico (kg/RPE)": "2-4 kg",
              "Tempo": "`2020`",
              "Note Tecniche": "KB 2-4 kg a braccia tese verticali. Pressione costante, lombare incollata al suolo (zero spazio), estensione controllata"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Medball Chest Pass contro muro",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi, stance atletica a ginocchia morbide, rilascio balistico esplosivo a massima velocità d'uscita senza frenata delle braccia"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Tendine Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Protezione ginocchio per salti di muro e primo tempo"
            }
          ],
          "2": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Profilazione Chronojump RSI/RFD",
              "Set x Reps": "2 x 3 balzi",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`Max RFD`",
              "Note Tecniche": "Drop Jump 25 cm (target RSI >1.80)"
            },
            {
              "Blocco": "# Plyo",
              "Esercizio": "2A. Mini-Hurdle Hops (Ostacoli 20cm) in Cluster",
              "Set x Reps": "2 x (3+3+3)",
              "Carico (kg/RPE)": "BW",
              "Tempo": "`X`",
              "Note Tecniche": "15\" pausa intra-set. Rimbalzo elastico puro"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3A. Power Clean con Bilanciere",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "31.0 kg",
              "Tempo": "`X`",
              "Note Tecniche": "Tripla estensione esplosiva caviglia-ginocchio-anca e arrivo solido"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3B. Half Squat Dinamico",
              "Set x Reps": "3 x 3",
              "Carico (kg/RPE)": "70% (38.5 kg) [\"6\"]",
              "Tempo": "`20X0`",
              "Note Tecniche": "Mezzo squat specifico del salto (angolo ~110-120° femore-tibia, flessione ~60-70°). Inversione immediata, spinta balistica fulminea (Tempo X, VBT >0.70 m/s). Talloni a terra"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3C. Half-Kneeling Landmine Press Monolaterale",
              "Set x Reps": "3 x 4+4",
              "Carico (kg/RPE)": "70% (+17.5 kg) [\"6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Mezzo inginocchiata (ginocchio a terra omolaterale). Piano scapolare a 30°, traiettoria diagonale 45° salva-spalla, gluteo a terra serrato"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "3D. Single-Arm Dumbbell Row su panca",
              "Set x Reps": "3 x 5+5",
              "Carico (kg/RPE)": "70% (13 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Tre appoggi stabili, busto orizzontale, gomito aderente che sale verso l'anca, 1\" contrazione dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4A. Single-Leg RDL con Kettlebell",
              "Set x Reps": "2 x 4+4",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Carico CONTROLATERALE (KB opposta a gamba in appoggio). Cerniera d'anca pura, bacino a squadro, ginocchio sbloccato 15-20°. Focus gluteo medio e catena crociata"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "4B. Face Pull al cavo alto con extrarotazione",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "12.5 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Pollici ruotati indietro, fune agli occhi, rinforzo extrarotatori cuffia posteriore"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5A. Pallof Press in piedi con elastico",
              "Set x Reps": "2 x 6+6",
              "Carico (kg/RPE)": "7.5 kg",
              "Tempo": "`1111`",
              "Note Tecniche": "Anti-rotazione pura, tronco solido e perpendicolare, stop 1\" a braccia distese"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "5B. Rotational Medball Throw contro muro",
              "Set x Reps": "3 x 3+3",
              "Carico (kg/RPE)": "3 kg",
              "Tempo": "`X`",
              "Note Tecniche": "In piedi di fianco al muro, caricamento d'anca posteriore e rotazione esplosiva del bacino prima delle braccia. Transfer di potenza"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "Spanish Squat Isometrico (Tendine Rotuleo)",
              "Set x Reps": "2 x 45\"",
              "Carico (kg/RPE)": "Miniband",
              "Tempo": "Isometrico",
              "Note Tecniche": "Decompressione rotulea e stabilità"
            }
          ],
          "3": [
            {
              "Blocco": "# Prehab",
              "Esercizio": "1A. Passive Hang alla sbarra con appoggio piedi",
              "Set x Reps": "3 x 30\"",
              "Carico (kg/RPE)": "BW parziale",
              "Tempo": "Decompressivo",
              "Note Tecniche": "Decompressione totale della colonna vertebrale"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2A. Glute Bridge con bilanciere a terra",
              "Set x Reps": "3 x 6",
              "Carico (kg/RPE)": "75 kg (RIR 4)",
              "Tempo": "`2012`",
              "Note Tecniche": "Spostato in Main. Spinta talloni, 2\" contrazione isometrica massimale glutei in alto"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2B. Romanian Deadlift con Bilanciere (RDL)",
              "Set x Reps": "3 x 4",
              "Carico (kg/RPE)": "80% (60.0 kg) [\"RIR 6\"]",
              "Tempo": "`2010`",
              "Note Tecniche": "Cerniera d'anca pura spingendo indietro il bacino, bilanciere aderente alle cosce, fermo sotto la rotula"
            },
            {
              "Blocco": "# Main",
              "Esercizio": "2C. Pulley Basso al Cavo Presa Parallela Stretta",
              "Set x Reps": "2 x 6",
              "Carico (kg/RPE)": "70% (33.5 kg) [\"6\"]",
              "Tempo": "`2011`",
              "Note Tecniche": "Busto eretto 90°, trazione decompressiva orizzontale verso l'ombelico, retrazione scapolare 1\", schiena compatta"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3A. Dumbbell Pullover su panca piana",
              "Set x Reps": "2 x 8",
              "Carico (kg/RPE)": "10 kg (\"8\")",
              "Tempo": "`2010`",
              "Note Tecniche": "Apertura cassa toracica e allungamento controllato del gran dorsale"
            },
            {
              "Blocco": "# Accessories",
              "Esercizio": "3B. Heel Raise Zavorrato su Step",
              "Set x Reps": "3 x 10",
              "Carico (kg/RPE)": "+10 kg",
              "Tempo": "`2012`",
              "Note Tecniche": "Esercizio ruolo: estensione della caviglia e stabilità retropiede per il muro"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "4A. Farmer Walk con un manubrio (Suitcase Carry)",
              "Set x Reps": "2 x 20m /lato",
              "Carico (kg/RPE)": "14 kg",
              "Tempo": "Camminata",
              "Note Tecniche": "Carico monolaterale, anti-flessione laterale del tronco e presa forte"
            },
            {
              "Blocco": "# Core+Trans.",
              "Esercizio": "🛑 STRICT FRIDAY JUMP BAN",
              "Set x Reps": "-",
              "Carico (kg/RPE)": "-",
              "Tempo": "-",
              "Note Tecniche": "ZERO SALTI. Gambe fresche per il sabato."
            }
          ]
        },
        "w4_sedute": {
          "1": [],
          "2": [],
          "3": []
        }
      }
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ROSTER, WEEKS_DATA };
}
