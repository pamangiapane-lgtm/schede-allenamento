# -*- coding: utf-8 -*-
"""
genera_w3_w4_data.py — Marsala Volley A2 Femminile
Estrae il Programma Generale di Squadra (00_PROGRAMMA_GENERALE_SQUADRA_W3_W6_IBRIDO.md)
e i 13 programmi individuali delle atlete da 'sedute extra/programma M parallelo/'
e aggiorna data.js, docs/data.js e i CSV in data/.
Elimina W1 e W2 mantenendo esclusivamente W3 e W4.
"""

import os
import re
import csv
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
MD_DIR = os.path.abspath(os.path.join(BASE_DIR, "..", "sedute extra", "programma M parallelo"))

DATA_JS_PATH = os.path.join(BASE_DIR, "data.js")
DOCS_DATA_JS_PATH = os.path.join(BASE_DIR, "docs", "data.js")

ATHLETES_MAP = [
    {"id": 1, "number": "#01", "name": "Veronica Allasia", "role": "Palleggiatrice", "file": "01_Veronica_Allasia.md"},
    {"id": 2, "number": "#02", "name": "Maria Marcuzzi", "role": "Centrale", "file": "02_Maria_Marcuzzi.md"},
    {"id": 3, "number": "#03", "name": "Victoria Sassolini", "role": "Schiacciatrice", "file": "03_Victoria_Sassolini.md"},
    {"id": 4, "number": "#04", "name": "Anja Asonja", "role": "Opposto", "file": "04_Anja_Asonja.md"},
    {"id": 5, "number": "#05", "name": "Chiara Lo Dico", "role": "Libero", "file": "05_Chiara_Lo_Dico.md"},
    {"id": 6, "number": "#06", "name": "Gaia Biondi", "role": "Centrale", "file": "06_Gaia_Biondi.md"},
    {"id": 7, "number": "#07", "name": "Elisa Bole", "role": "Schiacciatrice", "file": "07_Elise_Bole.md"},
    {"id": 8, "number": "#08", "name": "Federica Nonnati", "role": "Opposto", "file": "08_Federica_Nonnati.md"},
    {"id": 9, "number": "#09", "name": "Sara Dodi", "role": "Schiacciatrice", "file": "09_Sara_Dodi.md"},
    {"id": 14, "number": "#14", "name": "Nelly Adamczewska", "role": "Schiacciatrice", "file": "10_Nelly_Adamczewska.md"},
    {"id": 11, "number": "#11", "name": "Luna Cicola", "role": "Libero", "file": "11_Luna_Cicola.md"},
    {"id": 12, "number": "#12", "name": "Erin Grippo", "role": "Palleggiatrice", "file": "12_Erin_Grippo.md"},
    {"id": 13, "number": "#13", "name": "Giulia Caserta", "role": "Centrale", "file": "13_Giulia_Caserta.md"}
]

def parse_markdown_table(lines):
    if len(lines) < 3:
        return []
    headers = [c.strip() for c in lines[0].strip('|').split('|')]
    rows = []
    current_blocco = ""
    for line in lines[2:]:
        cols = [c.strip() for c in line.strip('|').split('|')]
        if len(cols) >= 2:
            row_dict = {}
            if len(headers) == 6 and len(cols) == 5:
                c4 = cols[4].replace('`', '').strip()
                if re.match(r'^(?:\d{4}|\d[0-9X]{3}|X|Isometrico|Dinamico|Fluido)', c4, re.IGNORECASE):
                    row_dict = {
                        headers[0]: cols[0].replace('**', '').strip(),
                        headers[1]: cols[1].replace('**', '').strip(),
                        headers[2]: cols[2].replace('**', '').strip(),
                        headers[3]: cols[3].replace('**', '').strip(),
                        headers[4]: cols[4].replace('**', '').strip(),
                        headers[5]: ""
                    }
                else:
                    row_dict = {
                        headers[0]: cols[0].replace('**', '').strip(),
                        headers[1]: cols[1].replace('**', '').strip(),
                        headers[2]: cols[2].replace('**', '').strip(),
                        headers[3]: cols[3].replace('**', '').strip(),
                        headers[4]: "",
                        headers[5]: cols[4].replace('**', '').strip()
                    }
            else:
                for i, h in enumerate(headers):
                    val = cols[i] if i < len(cols) else ""
                    row_dict[h] = val.replace('**', '').strip()
            if "Blocco" in row_dict:
                if row_dict["Blocco"]:
                    current_blocco = row_dict["Blocco"]
                else:
                    row_dict["Blocco"] = current_blocco
            rows.append(row_dict)
    return rows


def parse_w4_item(it_str):
    # Check if format: **Name:** Set x Reps @ Load | Tempo ...
    m_name = re.match(r'^\*{0,2}(.*?)\*{0,2}:\s*(.*)', it_str)
    if not m_name:
        return {"Esercizio": it_str.replace('*', '').strip(), "Set_Reps": "", "Carico": "", "Tempo": "", "Note": "", "Raw": it_str}
    
    nome = m_name.group(1).strip().replace('*', '')
    rest = m_name.group(2).strip()
    
    parts = [p.strip() for p in rest.split('|')]
    first_part = parts[0]
    
    set_reps = ""
    carico = ""
    if "@" in first_part:
        sr_part, car_part = first_part.split("@", 1)
        set_reps = sr_part.replace('*', '').strip()
        carico = car_part.replace('*', '').strip()
    else:
        set_reps = first_part.replace('*', '').strip()
    
    tempo = ""
    notes = []
    for p in parts[1:]:
        m_tempo = re.search(r'Tempo\s*`?([A-Za-z0-9]+)`?', p, re.IGNORECASE)
        if m_tempo:
            tempo = m_tempo.group(1).strip()
            rem = re.sub(r'Tempo\s*`?[A-Za-z0-9]+`?', '', p).strip(' :;()-.')
            if rem:
                notes.append(rem)
        else:
            cleaned_p = p.strip().rstrip('.')
            if cleaned_p:
                notes.append(cleaned_p)
            
    return {
        "Esercizio": nome,
        "Set_Reps": set_reps,
        "Carico": carico,
        "Tempo": tempo,
        "Note": " · ".join(notes),
        "Raw": it_str
    }

def parse_w4_bullets(w4_text):
    sedute = {}
    sed4_splits = re.split(r'####\s+(?:SEDUTA|SESSION)\s+(\d)', w4_text, flags=re.IGNORECASE)
    for i in range(1, len(sed4_splits), 2):
        s_num = int(sed4_splits[i])
        s_chunk = sed4_splits[i+1]
        
        blocks = []
        cur_block = None
        cur_items = []
        for line in s_chunk.strip().split('\n'):
            line_str = line.strip()
            if not line_str or line_str.startswith('---'):
                continue
            
            m_b = re.match(r'^[-*]\s+\*\*#?\s*([A-Za-z0-9\s+&./-]+?):?\*\*:?(.*)', line_str)
            if not m_b:
                m_b = re.match(r'^[-*]\s+#?\s*([A-Za-z0-9\s+&./-]+?):(.*)', line_str)
            
            if m_b and any(k in m_b.group(1).lower() for k in ['prehab', 'main', 'accessories', 'core', 'abdominals', 'friday']):
                if cur_block:
                    blocks.append({"blocco": cur_block, "items": cur_items})
                cur_block = m_b.group(1).strip().rstrip(':')
                cur_items = []
                inline = m_b.group(2).strip()
                if inline:
                    cur_items.append(parse_w4_item(inline))
            elif line_str.startswith('-') or line_str.startswith('*'):
                item_txt = re.sub(r'^[-*]\s+', '', line_str).strip()
                if item_txt:
                    cur_items.append(parse_w4_item(item_txt))
            else:
                if cur_items:
                    cur_items[-1]["Raw"] += " " + line_str
                    if cur_items[-1]["Note"]:
                        cur_items[-1]["Note"] += " " + line_str
                    else:
                        cur_items[-1]["Note"] = line_str
        if cur_block:
            blocks.append({"blocco": cur_block, "items": cur_items})
        sedute[s_num] = blocks
    return sedute


def parse_general_team_program():
    gen_file = os.path.join(MD_DIR, "00_PROGRAMMA_GENERALE_SQUADRA_W3_W6_IBRIDO.md")
    with open(gen_file, "r", encoding="utf-8") as f:
        text = f.read()

    # Extract macrocycle details
    w3_vbt = "0.60 – 0.65 m/s"
    w4_vbt = "0.65 – 0.75 m/s"
    vbt_rule = "Regola del -10% Velocity Loss Threshold: stop immediato alla serie se la velocità cala di oltre il 10% dalla prima rip."
    
    # Gym sessions
    gym_s1_match = re.search(r'###\s+🔵\s+SEDUTA\s+1.*?\n(\|.*?\n)\n---', text, re.DOTALL)
    gym_s2_match = re.search(r'###\s+🔴\s+SEDUTA\s+2.*?\n(\|.*?\n)\n---', text, re.DOTALL)
    gym_s3_match = re.search(r'###\s+🟢\s+SEDUTA\s+3.*?\n(\|.*?\n)\n---', text, re.DOTALL)

    gym_s1_rows = parse_markdown_table([l.strip() for l in gym_s1_match.group(1).split('\n') if l.strip().startswith('|')]) if gym_s1_match else []
    gym_s2_rows = parse_markdown_table([l.strip() for l in gym_s2_match.group(1).split('\n') if l.strip().startswith('|')]) if gym_s2_match else []
    gym_s3_rows = parse_markdown_table([l.strip() for l in gym_s3_match.group(1).split('\n') if l.strip().startswith('|')]) if gym_s3_match else []

    # Court sessions
    court_s1_match = re.search(r'###\s+🟢\s+CAMPO\s+1\s*\((.*?)\):(.*?)(?=###\s+🔴\s+CAMPO\s+2)', text, re.DOTALL)
    court_s2_match = re.search(r'###\s+🔴\s+CAMPO\s+2\s*\((.*?)\):(.*?)(?=###\s+🔵\s+CAMPO\s+3)', text, re.DOTALL)
    court_s3_match = re.search(r'###\s+🔵\s+CAMPO\s+3\s*\((.*?)\):(.*?)(?=\Z)', text, re.DOTALL)

    def clean_court_text(m):
        if not m:
            return {"titolo": "", "dettagli": []}
        titolo = m.group(1).strip()
        body = m.group(2).strip()
        paragraphs = [p.strip() for p in body.split('\n\n') if p.strip()]
        return {"titolo": titolo, "contenuto": paragraphs}

    court_s1 = clean_court_text(court_s1_match)
    court_s2 = clean_court_text(court_s2_match)
    court_s3 = clean_court_text(court_s3_match)

    return {
        "manifesto": {
            "vbt_w3": w3_vbt,
            "vbt_w4": w4_vbt,
            "vbt_rule": vbt_rule,
            "friday_jump_ban": "A meno di 30 ore dall'amichevole del sabato, la Seduta 3 del venerdì vieta tassativamente qualsiasi salto, balzo o impatto pliometrico.",
            "turni": {
                "turno_1": {
                    "orario": "08:30 – 09:25",
                    "nome": "Speed, Reactive & Floor (6 Atlete)",
                    "atlete": ["Veronica Allasia", "Erin Grippo", "Chiara Lo Dico", "Luna Cicola", "Maria Marcuzzi", "Gaia Biondi"]
                },
                "turno_2": {
                    "orario": "09:30 – 10:25",
                    "nome": "Heavy, Power & Jumpers (7 Atlete)",
                    "atlete": ["Anja Asonja", "Federica Nonnati", "Victoria Sassolini", "Elisa Bole", "Sara Dodi", "Nelly Adamczewska", "Giulia Caserta"]
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
                "esercizi": gym_s1_rows
            },
            {
                "id": "S2",
                "giorno": "Mercoledì",
                "fase": "Mattina",
                "nome": "Seduta 2 — Spinta Verticale & Trazione Orizzontale",
                "durata": "50-52 min",
                "focus": "Clean/Powerbag + Half Squat Dinamico + Landmine/Push Press ↔ Single DB Row",
                "esercizi": gym_s2_rows
            },
            {
                "id": "S3",
                "giorno": "Venerdì",
                "fase": "Mattina",
                "nome": "Seduta 3 — Cerniera Posteriore Sub-Massimale & Decompressione",
                "durata": "38-40 min",
                "focus": "RDL Bilanciere 2x4 @ buffer 3 (RPE 6-7) + Pulley decompressivo · ZERO SALTI",
                "esercizi": gym_s3_rows
            }
        ],
        "court_sessions": [
            {
                "id": "C1",
                "giorno": "Lunedì",
                "fase": "Pomeriggio (45 min)",
                "nome": "Campo 1 — Decelerazione Eccentrica, COD 180° & Synapse Base",
                "dettagli": court_s1
            },
            {
                "id": "C2",
                "giorno": "Mercoledì",
                "fase": "Pomeriggio (45 min)",
                "nome": "Campo 2 — Stiffness Reattiva, Pliometria di Ruolo & Transfer",
                "dettagli": court_s2
            },
            {
                "id": "C3",
                "giorno": "Venerdì",
                "fase": "Pomeriggio (45 min)",
                "nome": "Campo 3 — Priming Neurale, Synapse Avanzato & ZERO SALTI",
                "dettagli": court_s3
            }
        ]
    }

def parse_athlete_individual(ath_meta):
    filepath = os.path.join(MD_DIR, ath_meta["file"])
    with open(filepath, "r", encoding="utf-8") as f:
        text = f.read()

    # Metadata
    peso_m = re.search(r'\*\*Peso Corporeo:\*\*\s*(.*)', text)
    peso = peso_m.group(1).replace('**', '').strip() if peso_m else ""

    rischio_m = re.search(r'\*\*Indice di Rischio Clinico-Funzionale:\*\*\s*(.*)', text)
    rischio = rischio_m.group(1).replace('**', '').strip() if rischio_m else ""

    turno_m = re.search(r'\*\*Turno Sala Pesi:\*\*\s*(.*)', text)
    turno = turno_m.group(1).replace('**', '').strip() if turno_m else ""

    # Triage Section
    triage_m = re.search(r'## 1\. IL "PERCHÉ" — TRIAGE CLINICO & BIOMECCANICO\s*(.*?)\s*## 2\.', text, re.DOTALL)
    triage = triage_m.group(1).strip() if triage_m else ""

    # Ban Section
    ban_m = re.search(r'## 2\. IL "COSA" — MODIFICHE, BAN & SOSTITUZIONI TECNICHE\s*(.*?)\s*## 3\.', text, re.DOTALL)
    ban = ban_m.group(1).strip() if ban_m else ""

    # Settimana 3
    w3_m = re.search(r'###\s+(?:SETTIMANA|WEEK)\s+3.*?(?=###\s+(?:SETTIMANA|WEEK)\s+4|\Z)', text, re.DOTALL | re.IGNORECASE)
    w3_text = w3_m.group(0).strip() if w3_m else ""

    w3_sedute = {}
    sed_splits = re.split(r'####\s+(?:SEDUTA|SESSION)\s+(\d)', w3_text, flags=re.IGNORECASE)
    for i in range(1, len(sed_splits), 2):
        s_num = int(sed_splits[i])
        s_chunk = sed_splits[i+1]
        t_lines = [l.strip() for l in s_chunk.split('\n') if l.strip().startswith('|')]
        table_rows = parse_markdown_table(t_lines)
        w3_sedute[s_num] = table_rows

    # Settimana 4
    w4_m = re.search(r'###\s+(?:SETTIMANA|WEEK)\s+4.*?(?=###\s+(?:SETTIMANA|WEEK)\s+5|\Z)', text, re.DOTALL | re.IGNORECASE)
    w4_text = w4_m.group(0).strip() if w4_m else ""
    w4_sedute = parse_w4_bullets(w4_text)

    return {
        "id": ath_meta["id"],
        "name": ath_meta["name"],
        "number": ath_meta["number"],
        "role": ath_meta["role"],
        "peso": peso,
        "rischio": rischio,
        "turno": turno,
        "triage": triage,
        "ban": ban,
        "w3_sedute": w3_sedute,
        "w4_sedute": w4_sedute
    }

def main():
    print("Parsing Programma Generale di Squadra...")
    team_program = parse_general_team_program()
    print(f"  Gym sessions: {len(team_program['gym_sessions'])}, Court sessions: {len(team_program['court_sessions'])}")

    athletes_data = {}
    for ath in ATHLETES_MAP:
        print(f"Parsing individual program for {ath['name']}...")
        ind_data = parse_athlete_individual(ath)
        athletes_data[str(ath["id"])] = ind_data
        print(f"  ID {ath['id']}: W3 S1={len(ind_data['w3_sedute'].get(1, []))}, S2={len(ind_data['w3_sedute'].get(2, []))}, S3={len(ind_data['w3_sedute'].get(3, []))}")
        print(f"           W4 S1={len(ind_data['w4_sedute'].get(1, []))}, S2={len(ind_data['w4_sedute'].get(2, []))}, S3={len(ind_data['w4_sedute'].get(3, []))}")

    # Build W3 and W4 datasets for WEEKS_DATA
    # Sedute definitions
    w3_sedute_def = [
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
    ]

    w4_sedute_def = [
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
    ]

    weeks_data = {
        "W3": {
            "titolo": "Week 3 — SSP 1: Forza & Controllo Eccentrico",
            "sedute": w3_sedute_def,
            "programma_squadra": team_program,
            "atleti": athletes_data
        },
        "W4": {
            "titolo": "Week 4 — SSP 2: Contrasto Dinamico & Potenza",
            "sedute": w4_sedute_def,
            "programma_squadra": team_program,
            "atleti": athletes_data
        }
    }

    # Write CSV for W3 and W4 sedute
    w3_sedute_csv = os.path.join(BASE_DIR, "data", "W3_Sedute.csv")
    with open(w3_sedute_csv, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["Numero_Seduta", "Nome_Seduta", "Settimana", "Giorno", "Fase", "Luogo", "Durata_min", "Note"])
        writer.writeheader()
        writer.writerows(w3_sedute_def)

    w4_sedute_csv = os.path.join(BASE_DIR, "data", "W4_Sedute.csv")
    with open(w4_sedute_csv, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["Numero_Seduta", "Nome_Seduta", "Settimana", "Giorno", "Fase", "Luogo", "Durata_min", "Note"])
        writer.writeheader()
        writer.writerows(w4_sedute_def)

    # Update ROSTER in data.js
    with open(DATA_JS_PATH, "r", encoding="utf-8") as f:
        data_js_content = f.read()

    # Extract existing ROSTER
    roster_match = re.search(r'const ROSTER = (\[.*?\]);', data_js_content, re.DOTALL)
    if not roster_match:
        raise ValueError("Could not find ROSTER in data.js")
    
    current_roster = json.loads(roster_match.group(1))
    # Update current roster with enriched clinical flags & turno
    for ath_item in current_roster:
        ath_id_str = str(ath_item.get("id"))
        if ath_id_str in athletes_data:
            ind_info = athletes_data[ath_id_str]
            ath_item["turno"] = ind_info["turno"]
            ath_item["rischio_clinico"] = ind_info["rischio"]
            if ind_info["peso"]:
                try:
                    num_p = float(re.search(r'\d+(?:\.\d+)?', ind_info["peso"]).group(0))
                    ath_item["bw"] = num_p
                except:
                    pass

    # Serialize ROSTER and WEEKS_DATA
    roster_json_str = json.dumps(current_roster, indent=2, ensure_ascii=False)
    weeks_data_json_str = json.dumps(weeks_data, indent=2, ensure_ascii=False)

    new_data_js = f"""// Marsala Volley — Data Hub Ufficiale (Serie A2 2026/27)
// Aggiornato con Modello Ibrido W3-W4: Programma Generale di Squadra + 13 Programmi Individuali

const ROSTER = {roster_json_str};

const WEEKS_DATA = {weeks_data_json_str};

if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{ ROSTER, WEEKS_DATA }};
}}
"""

    with open(DATA_JS_PATH, "w", encoding="utf-8") as f:
        f.write(new_data_js)
    print(f"Successfully updated {DATA_JS_PATH}")

    with open(DOCS_DATA_JS_PATH, "w", encoding="utf-8") as f:
        f.write(new_data_js)
    print(f"Successfully updated {DOCS_DATA_JS_PATH}")

    # Also update docs/data/W3_Sedute.csv and docs/data/W4_Sedute.csv if directory exists
    docs_data_dir = os.path.join(BASE_DIR, "docs", "data")
    if os.path.isdir(docs_data_dir):
        with open(os.path.join(docs_data_dir, "W3_Sedute.csv"), "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=["Numero_Seduta", "Nome_Seduta", "Settimana", "Giorno", "Fase", "Luogo", "Durata_min", "Note"])
            writer.writeheader()
            writer.writerows(w3_sedute_def)
        with open(os.path.join(docs_data_dir, "W4_Sedute.csv"), "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=["Numero_Seduta", "Nome_Seduta", "Settimana", "Giorno", "Fase", "Luogo", "Durata_min", "Note"])
            writer.writeheader()
            writer.writerows(w4_sedute_def)
        print("Updated CSV files in docs/data/")

if __name__ == "__main__":
    main()
