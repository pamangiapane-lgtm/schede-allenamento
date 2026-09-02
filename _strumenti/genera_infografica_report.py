import os, sys, requests, json
from datetime import datetime
from PIL import Image, ImageDraw, ImageFont

GAS_URL = 'https://script.google.com/macros/s/AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec'
TOKEN   = 'mv26-prd-3xF7wNqK'

ROSTER = [
    {"id": 1, "name": "Veronica Allasia", "role": "Palleggiatrice"},
    {"id": 2, "name": "Maria Marcuzzi", "role": "Centrale"},
    {"id": 3, "name": "Victoria Sassolini", "role": "Palleggiatrice"},
    {"id": 4, "name": "Anja Asonja", "role": "Opposto"},
    {"id": 5, "name": "Chiara Lo Dico", "role": "Schiacciatrice"},
    {"id": 6, "name": "Gaia Biondi", "role": "Centrale"},
    {"id": 7, "name": "Elisa Bole", "role": "Schiacciatrice"},
    {"id": 8, "name": "Federica Nonnati", "role": "Opposto"},
    {"id": 9, "name": "Sara Dodi", "role": "Schiacciatrice"},
    {"id": 11, "name": "Luna Cicola", "role": "Libero"},
    {"id": 12, "name": "Erin Grippo", "role": "Libero"},
    {"id": 13, "name": "Giulia Caserta", "role": "Centrale"},
    {"id": 14, "name": "Nelly Adamczewska", "role": "Schiacciatrice"}
]

def crea_infografica(output_path=r"c:\AI\Pallavolo\Marsala volley\report_wellness_oggi.png"):
    try:
        r = requests.get(GAS_URL, params={'token': TOKEN, 'azione': 'leggi', 'foglio': 'Wellness'}, timeout=20)
        dati = r.json().get('dati', [])
    except Exception as e:
        print(f"Errore download: {e}")
        dati = []

    today_str = datetime.now().strftime('%Y-%m-%d')
    days_it = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"]
    months_it = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
    now = datetime.now()
    date_str = f"{days_it[now.weekday()]} {now.day} {months_it[now.month-1]} {now.year}"

    live_data = {}
    for row in dati:
        aid = int(row.get('ID_Giocatrice') or 0)
        rdate = str(row.get('Data') or '')[:10]
        ts = str(row.get('Timestamp') or '')
        if aid not in live_data or ts > live_data[aid].get('ts', ''):
            live_data[aid] = {
                'date': rdate,
                'ts': ts,
                'sonno': int(row.get('Qualita_Sonno')) if row.get('Qualita_Sonno') is not None and str(row.get('Qualita_Sonno')).isdigit() else None,
                'fatica': int(row.get('Fatica')) if row.get('Fatica') is not None and str(row.get('Fatica')).isdigit() else None,
                'readiness': int(row.get('Readines')) if row.get('Readines') is not None and str(row.get('Readines')).isdigit() else (int(row.get('Disponibilita')) if row.get('Disponibilita') is not None and str(row.get('Disponibilita')).isdigit() else None),
                'dolori': int(row.get('Dolori')) if row.get('Dolori') is not None and str(row.get('Dolori')).isdigit() else 0,
                'stress': int(row.get('Stress')) if row.get('Stress') is not None and str(row.get('Stress')).isdigit() else 2,
                'note': str(row.get('Note') or '').strip(),
                'is_today': (rdate == today_str or ts.startswith(today_str))
            }

    count_filled = 0
    total_readiness = 0
    readiness_count = 0
    focus_list = []

    for a in ROSTER:
        w = live_data.get(a['id'])
        if w and w['is_today']:
            count_filled += 1
            rd = w['readiness']
            if rd is not None:
                total_readiness += rd
                readiness_count += 1
            
            # Calcolo valori specifici FUORI SOGLIA
            out_items = []
            is_red = False
            
            # 1. Dolori
            if w['dolori'] >= 5:
                out_items.append(f"Dolori: {w['dolori']}/10 (Critico)")
                is_red = True
            elif w['dolori'] >= 3:
                out_items.append(f"Dolori: {w['dolori']}/10")

            # 2. Readiness
            if rd is not None and rd < 6:
                out_items.append(f"Readiness: {rd}/10 (Bassa)")
                is_red = True

            # 3. Sonno
            if w['sonno'] is not None and w['sonno'] < 6:
                out_items.append(f"Sonno: {w['sonno']}/10 (Scarso)")
                is_red = True

            # 4. Energia
            if w['fatica'] is not None and w['fatica'] < 6:
                out_items.append(f"Energia: {w['fatica']}/10 (Fatica Alta)")
                is_red = True

            # 5. Stress
            if w['stress'] >= 5:
                out_items.append(f"Stress: {w['stress']}/10")
                is_red = True
            elif w['stress'] == 4:
                out_items.append(f"Stress: 4/10")

            # 6. Note scritte
            if w['note']:
                out_items.append(f'"{w["note"]}"')

            if out_items:
                focus_list.append({
                    'ath': a,
                    'w': w,
                    'is_red': is_red,
                    'details': "   •   ".join(out_items)
                })

    # Ordina: Prima i Rossi, poi i Gialli
    focus_list.sort(key=lambda x: 0 if x['is_red'] else 1)

    avg_pct = round((total_readiness / readiness_count) * 10) if readiness_count > 0 else 0

    W, H = 1080, 1920
    img = Image.new('RGB', (W, H), color='#060a14')
    draw = ImageDraw.Draw(img)

    try:
        font_title = ImageFont.truetype("arialbd.ttf", 46)
        font_sub = ImageFont.truetype("arial.ttf", 26)
        font_kpi_val = ImageFont.truetype("arialbd.ttf", 52)
        font_kpi_lbl = ImageFont.truetype("arialbd.ttf", 22)
        font_sec_title = ImageFont.truetype("arialbd.ttf", 30)
        font_row = ImageFont.truetype("arial.ttf", 23)
        font_row_bold = ImageFont.truetype("arialbd.ttf", 24)
        font_focus_ath = ImageFont.truetype("arialbd.ttf", 24)
        font_focus_sub = ImageFont.truetype("arial.ttf", 22)
        font_note = ImageFont.truetype("ariali.ttf", 22)
    except:
        font_title = ImageFont.load_default()
        font_sub = font_title
        font_kpi_val = font_title
        font_kpi_lbl = font_title
        font_sec_title = font_title
        font_row = font_title
        font_row_bold = font_title
        font_focus_ath = font_title
        font_focus_sub = font_title
        font_note = font_title

    # 1. HEADER (Navy Profondo con Linea Oro)
    draw.rectangle([(0, 0), (W, 190)], fill='#0b1329')
    draw.line([(0, 190), (W, 190)], fill='#f59e0b', width=4)

    logo_path = r'c:\AI\Pallavolo\Marsala volley\logo.jpg'
    x_offset = 50
    if os.path.exists(logo_path):
        try:
            logo = Image.open(logo_path)
            logo = logo.resize((130, 130))
            img.paste(logo, (45, 30))
            x_offset = 195
        except: pass

    draw.text((x_offset, 42), "MARSALA VOLLEY", fill='#f59e0b', font=font_title)
    draw.text((x_offset, 105), f"DAILY WELLNESS & READINESS REPORT · {date_str}", fill='#cbd5e1', font=font_sub)

    # 2. KPI SNAPSHOT CARDS
    card_w = 310
    card_h = 130
    y_kpi = 220

    # Card 1: Readiness Squadra
    col_kpi1 = '#10b981' if avg_pct >= 75 else ('#f59e0b' if avg_pct >= 60 else '#ef4444')
    draw.rounded_rectangle([(40, y_kpi), (40 + card_w, y_kpi + card_h)], radius=16, fill='#0f172a', outline='#1e293b', width=2)
    draw.text((60, y_kpi + 20), "READINESS SQUADRA", fill='#94a3b8', font=font_kpi_lbl)
    draw.text((60, y_kpi + 55), f"{avg_pct}%", fill=col_kpi1, font=font_kpi_val)

    # Card 2: Compilazione
    draw.rounded_rectangle([(40 + card_w + 25, y_kpi), (40 + card_w*2 + 25, y_kpi + card_h)], radius=16, fill='#0f172a', outline='#1e293b', width=2)
    draw.text((40 + card_w + 45, y_kpi + 20), "COMPILAZIONE OGGI", fill='#94a3b8', font=font_kpi_lbl)
    draw.text((40 + card_w + 45, y_kpi + 55), f"{count_filled} / {len(ROSTER)}", fill='#38bdf8', font=font_kpi_val)

    # Card 3: Alert Clinici
    col_alert = '#ef4444' if focus_list else '#10b981'
    draw.rounded_rectangle([(40 + card_w*2 + 50, y_kpi), (40 + card_w*3 + 50, y_kpi + card_h)], radius=16, fill='#0f172a', outline='#1e293b', width=2)
    draw.text((40 + card_w*2 + 70, y_kpi + 20), "ALERT CLINICI", fill='#94a3b8', font=font_kpi_lbl)
    draw.text((40 + card_w*2 + 70, y_kpi + 55), f"{len(focus_list)}", fill=col_alert, font=font_kpi_val)

    # 3. SEZIONE FOCUS CLINICO & SEGNALAZIONI (SOLO ATLETE CON VALORI FUORI SOGLIA)
    y_alert = 380
    draw.text((40, y_alert), "FOCUS CLINICO & VALORI FUORI SOGLIA", fill='#fca5a5', font=font_sec_title)

    y_alert_box = y_alert + 45
    if focus_list:
        # Mostra fino a 5 segnalazioni critiche
        num_items = min(5, len(focus_list))
        box_h = 20 + num_items * 62
        draw.rounded_rectangle([(40, y_alert_box), (W - 40, y_alert_box + box_h)], radius=14, fill='#1b1016', outline='#ef4444', width=2)
        cur_y = y_alert_box + 15
        for item in focus_list[:num_items]:
            ath = item['ath']
            tag_c = '#ef4444' if item['is_red'] else '#f59e0b'
            
            # Badge pallino
            draw.ellipse([(60, cur_y + 6), (72, cur_y + 18)], fill=tag_c)
            # Nome e Ruolo
            draw.text((82, cur_y), f"#{ath['id']} {ath['name']} ({ath['role']})", fill=tag_c, font=font_focus_ath)
            # Valori precisi fuori soglia & Note
            draw.text((82, cur_y + 28), item['details'], fill='#fde68a', font=font_focus_sub)
            cur_y += 62
    else:
        box_h = 70
        draw.rounded_rectangle([(40, y_alert_box), (W - 40, y_alert_box + box_h)], radius=14, fill='#06201a', outline='#10b981', width=2)
        draw.text((60, y_alert_box + 22), "✓ Tutte le atlete sono in fascia VERDE. Nessun valore fuori soglia registrato.", fill='#6ee7b7', font=font_row_bold)

    # 4. TABELLA ROSTER DETTAGLIATA (13 ATLETE)
    y_table = y_alert_box + box_h + 35
    draw.text((40, y_table), "STATUS INDIVIDUALE ROSTER (13 ATLETE)", fill='#fff', font=font_sec_title)

    y_th = y_table + 45
    draw.rounded_rectangle([(40, y_th), (W - 40, y_th + 45)], radius=8, fill='#1e293b')
    draw.text((60, y_th + 10), "ATLETA", fill='#94a3b8', font=font_row_bold)
    draw.text((390, y_th + 10), "RUOLO", fill='#94a3b8', font=font_row_bold)
    draw.text((550, y_th + 10), "SONNO", fill='#94a3b8', font=font_row_bold)
    draw.text((670, y_th + 10), "ENERGIA", fill='#94a3b8', font=font_row_bold)
    draw.text((790, y_th + 10), "DOLORI", fill='#94a3b8', font=font_row_bold)
    draw.text((910, y_th + 10), "READINESS", fill='#f59e0b', font=font_row_bold)

    y_row = y_th + 52
    for idx, a in enumerate(ROSTER):
        w = live_data.get(a['id'])
        bg_row = '#0c1427' if idx % 2 == 0 else '#070c18'
        draw.rounded_rectangle([(40, y_row), (W - 40, y_row + 56)], radius=6, fill=bg_row)

        if w and w['is_today']:
            rd = w['readiness']
            so = w['sonno']
            en = w['fatica']
            do = w['dolori']

            is_red = (rd is not None and rd < 6) or (so is not None and so < 6) or (do >= 5)
            is_yellow = not is_red and ((rd is not None and rd <= 7) or (do >= 3) or (w['note'] and len(w['note']) > 0))
            dot_c = '#ef4444' if is_red else ('#f59e0b' if is_yellow else '#10b981')

            draw.ellipse([(55, y_row + 20), (71, y_row + 36)], fill=dot_c)
            draw.text((85, y_row + 15), f"#{a['id']} {a['name']}", fill='#fff', font=font_row_bold)
            draw.text((390, y_row + 15), a['role'], fill='#94a3b8', font=font_row)

            c_so = '#10b981' if so and so >= 8 else ('#f59e0b' if so and so >= 6 else '#ef4444')
            c_en = '#10b981' if en and en >= 8 else ('#f59e0b' if en and en >= 6 else '#ef4444')
            c_do = '#10b981' if do <= 2 else ('#f59e0b' if do <= 4 else '#ef4444')
            c_rd = '#10b981' if rd and rd >= 8 else ('#f59e0b' if rd and rd >= 6 else '#ef4444')

            draw.text((565, y_row + 15), f"{so if so is not None else '-'}/10", fill=c_so, font=font_row_bold)
            draw.text((685, y_row + 15), f"{en if en is not None else '-'}/10", fill=c_en, font=font_row_bold)
            draw.text((805, y_row + 15), f"{do}/10", fill=c_do, font=font_row_bold)
            draw.text((925, y_row + 15), f"{rd if rd is not None else '-'}/10", fill=c_rd, font=font_row_bold)
        else:
            draw.ellipse([(55, y_row + 20), (71, y_row + 36)], fill='#64748b')
            draw.text((85, y_row + 15), f"#{a['id']} {a['name']}", fill='#64748b', font=font_row)
            draw.text((390, y_row + 15), a['role'], fill='#64748b', font=font_row)
            draw.text((565, y_row + 15), "— Non compilato stamattina —", fill='#64748b', font=font_note)

        y_row += 62

    # 5. FOOTER
    draw.line([(40, H - 70), (W - 40, H - 70)], fill='#1e293b', width=2)
    draw.text((W // 2 - 280, H - 48), "Marsala Volley S&C Command Center · Serie A2 Femminile", fill='#64748b', font=font_note)

    img.save(output_path, "PNG", quality=95)
    print(f"Infografica generata con successo in: {output_path}")
    return output_path

if __name__ == '__main__':
    crea_infografica()
