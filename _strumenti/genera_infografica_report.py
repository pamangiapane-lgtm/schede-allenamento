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

def crea_infografica(output_path="report_wellness_oggi.png"):
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
            
            # 1. Dolori: 1° giallo = 3 (NO ALERT), 2° giallo = 4 (ALERT), >= 5 = Rosso (ALERT)
            if w['dolori'] >= 5:
                out_items.append(f"Dolori: {w['dolori']}/10 (Critico)")
                is_red = True
            elif w['dolori'] == 4:
                out_items.append(f"Dolori: 4/10")

            # 2. Readiness: 1° giallo = 7 (NO ALERT), 2° giallo = 6 (ALERT), <= 5 = Rosso (ALERT)
            if rd is not None:
                if rd <= 5:
                    out_items.append(f"Readiness: {rd}/10 (Bassa)")
                    is_red = True
                elif rd == 6:
                    out_items.append(f"Readiness: 6/10")

            # 3. Sonno: 1° giallo = 7 (NO ALERT), 2° giallo = 6 (ALERT), <= 5 = Rosso (ALERT)
            if w['sonno'] is not None:
                if w['sonno'] <= 5:
                    out_items.append(f"Sonno: {w['sonno']}/10 (Scarso)")
                    is_red = True
                elif w['sonno'] == 6:
                    out_items.append(f"Sonno: 6/10")

            # 4. Energia: 1° giallo = 7 (NO ALERT), 2° giallo = 6 (ALERT), <= 5 = Rosso (ALERT)
            if w['fatica'] is not None:
                if w['fatica'] <= 5:
                    out_items.append(f"Energia: {w['fatica']}/10 (Fatica Alta)")
                    is_red = True
                elif w['fatica'] == 6:
                    out_items.append(f"Energia: 6/10")

            # 5. Stress: 1° giallo = 3 (NO ALERT), 2° giallo = 4 (ALERT), >= 5 = Rosso (ALERT)
            if w['stress'] >= 5:
                out_items.append(f"Stress: {w['stress']}/10 (Alto)")
                is_red = True
            elif w['stress'] == 4:
                out_items.append(f"Stress: 4/10")

            # Conteggio parametri in giallo (1° e 2° giallo)
            yellow_metrics = []
            if w['dolori'] in (3, 4):
                yellow_metrics.append(f"Dolori {w['dolori']}")
            if rd is not None and rd in (6, 7):
                yellow_metrics.append(f"Readiness {rd}")
            if w['sonno'] is not None and w['sonno'] in (6, 7):
                yellow_metrics.append(f"Sonno {w['sonno']}")
            if w['fatica'] is not None and w['fatica'] in (6, 7):
                yellow_metrics.append(f"Energia {w['fatica']}")
            if w['stress'] == 4:
                yellow_metrics.append(f"Stress 4")

            has_2nd_yellow = (w['dolori'] == 4) or (rd == 6) or (w['sonno'] == 6) or (w['fatica'] == 6) or (w['stress'] == 4)
            has_4_yellows = len(yellow_metrics) >= 4
            has_note = bool(w['note'] and len(w['note'].strip()) > 0)

            # 6. Note scritte
            if has_note:
                out_items.append(f'Nota: "{w["note"]}"')

            # Classificazione Badge
            if is_red:
                badge_type = 'red'
                badge_lbl = "CRITICO"
            elif has_2nd_yellow or has_4_yellows:
                badge_type = 'yellow'
                badge_lbl = "ATTENZIONE"
                if has_4_yellows and not has_2nd_yellow:
                    out_items.insert(0, f"Fatica Sistemica ({len(yellow_metrics)} Valori Gialli)")
            elif has_note:
                badge_type = 'green'
                badge_lbl = "OTTIMALE"
            else:
                badge_type = None

            if badge_type is not None and out_items:
                focus_list.append({
                    'ath': a,
                    'w': w,
                    'badge_type': badge_type,
                    'badge_lbl': badge_lbl,
                    'details': "   •   ".join(out_items)
                })

    # Ordina per gravità decrescente:
    # 1. Rossi (0)
    # 2. Gialli (1) ordinati per dolori più alti e deficit readiness/fatica/sonno
    # 3. Verdi (2) con note
    def sort_order(x):
        b = x.get('badge_type')
        cat = 0 if b == 'red' else (1 if b == 'yellow' else 2)
        w = x.get('w', {})
        dol = w.get('dolori') if w.get('dolori') is not None else 0
        r_def = 10 - (w.get('readiness') if w.get('readiness') is not None else 10)
        f_def = 10 - (w.get('fatica') if w.get('fatica') is not None else 10)
        s_def = 10 - (w.get('sonno') if w.get('sonno') is not None else 10)
        sev_score = dol * 3 + r_def * 2 + f_def + s_def
        return (cat, -sev_score)

    focus_list.sort(key=sort_order)

    avg_pct = round((total_readiness / readiness_count) * 10) if readiness_count > 0 else 0

    W, H = 1080, 1920
    img = Image.new('RGB', (W, H), color='#060a14')
    draw = ImageDraw.Draw(img)

    def get_font(names, size):
        for name in names:
            try:
                return ImageFont.truetype(name, size)
            except Exception:
                pass
        return ImageFont.load_default()

    font_title = get_font(["arialbd.ttf", "LiberationSans-Bold.ttf", "DejaVuSans-Bold.ttf"], 46)
    font_sub = get_font(["arial.ttf", "LiberationSans-Regular.ttf", "DejaVuSans.ttf"], 26)
    font_kpi_val = get_font(["arialbd.ttf", "LiberationSans-Bold.ttf", "DejaVuSans-Bold.ttf"], 52)
    font_kpi_lbl = get_font(["arialbd.ttf", "LiberationSans-Bold.ttf", "DejaVuSans-Bold.ttf"], 22)
    font_sec_title = get_font(["arialbd.ttf", "LiberationSans-Bold.ttf", "DejaVuSans-Bold.ttf"], 30)
    font_row = get_font(["arial.ttf", "LiberationSans-Regular.ttf", "DejaVuSans.ttf"], 23)
    font_row_bold = get_font(["arialbd.ttf", "LiberationSans-Bold.ttf", "DejaVuSans-Bold.ttf"], 24)
    font_focus_ath = get_font(["arialbd.ttf", "LiberationSans-Bold.ttf", "DejaVuSans-Bold.ttf"], 24)
    font_focus_sub = get_font(["arial.ttf", "LiberationSans-Regular.ttf", "DejaVuSans.ttf"], 22)
    font_note = get_font(["ariali.ttf", "LiberationSans-Italic.ttf", "DejaVuSans-Oblique.ttf"], 22)

    # 1. HEADER (Navy Profondo con Linea Oro)
    draw.rectangle([(0, 0), (W, 190)], fill='#0b1329')
    draw.line([(0, 190), (W, 190)], fill='#f59e0b', width=4)

    logo_candidates = [
        os.path.join(os.path.dirname(__file__), '..', 'logo.jpg'),
        os.path.join(os.path.dirname(__file__), 'logo.jpg'),
        r'c:\AI\Pallavolo\Marsala volley\logo.jpg'
    ]
    logo_path = next((p for p in logo_candidates if os.path.exists(p)), None)
    x_offset = 50
    if logo_path:
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
    has_red_alert = any(x['badge_type'] == 'red' for x in focus_list)
    has_yellow_alert = any(x['badge_type'] == 'yellow' for x in focus_list)
    col_alert = '#ef4444' if has_red_alert else ('#f59e0b' if has_yellow_alert else ('#10b981' if not focus_list else '#34d399'))
    draw.rounded_rectangle([(40 + card_w*2 + 50, y_kpi), (40 + card_w*3 + 50, y_kpi + card_h)], radius=16, fill='#0f172a', outline='#1e293b', width=2)
    draw.text((40 + card_w*2 + 70, y_kpi + 20), "ALERT CLINICI", fill='#94a3b8', font=font_kpi_lbl)
    draw.text((40 + card_w*2 + 70, y_kpi + 55), f"{len(focus_list)}", fill=col_alert, font=font_kpi_val)

    # 3. SEZIONE FOCUS CLINICO & SEGNALAZIONI (VALORI FUORI SOGLIA O NOTE)
    y_alert = 380
    sec_title_c = '#fca5a5' if has_red_alert else ('#fde68a' if has_yellow_alert else '#6ee7b7')
    draw.text((40, y_alert), "FOCUS CLINICO & SEGNALAZIONI", fill=sec_title_c, font=font_sec_title)

    y_alert_box = y_alert + 45
    if focus_list:
        # Mostra fino a 5 segnalazioni critiche
        num_items = min(5, len(focus_list))
        box_h = 20 + num_items * 62
        box_border = '#ef4444' if has_red_alert else ('#f59e0b' if has_yellow_alert else '#10b981')
        box_bg = '#1b1016' if has_red_alert else ('#16131c' if has_yellow_alert else '#06201a')
        draw.rounded_rectangle([(40, y_alert_box), (W - 40, y_alert_box + box_h)], radius=14, fill=box_bg, outline=box_border, width=2)
        cur_y = y_alert_box + 15
        for item in focus_list[:num_items]:
            ath = item['ath']
            btype = item['badge_type']
            if btype == 'red':
                tag_c = '#ef4444'
                badge_tag = "[CRITICO]"
                sub_c = '#fca5a5'
            elif btype == 'yellow':
                tag_c = '#f59e0b'
                badge_tag = "[ATTENZIONE]"
                sub_c = '#fde68a'
            else:
                tag_c = '#10b981'
                badge_tag = "[OTTIMALE]"
                sub_c = '#6ee7b7'
            
            # Badge pallino
            draw.ellipse([(60, cur_y + 6), (72, cur_y + 18)], fill=tag_c)
            # Nome e Ruolo con Badge
            draw.text((82, cur_y), f"#{ath['id']} {ath['name']} ({ath['role']})  {badge_tag}", fill=tag_c, font=font_focus_ath)
            # Valori precisi fuori soglia & Note
            draw.text((82, cur_y + 28), item['details'], fill=sub_c, font=font_focus_sub)
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
            st = w['stress']

            # Verifica semaforo complessivo atleta
            is_ath_red = (rd is not None and rd <= 5) or (so is not None and so <= 5) or (en is not None and en <= 5) or (do >= 5) or (st is not None and st >= 5)
            has_ath_2nd_yellow = (do == 4) or (rd == 6) or (so == 6) or (en == 6) or (st == 4)
            c_y = 0
            if do in (3, 4): c_y += 1
            if rd is not None and rd in (6, 7): c_y += 1
            if so is not None and so in (6, 7): c_y += 1
            if en is not None and en in (6, 7): c_y += 1
            if st == 4: c_y += 1
            has_ath_4_yellows = c_y >= 4

            # Se rosso -> Rosso. Se 2° giallo o 4 gialli -> Giallo. Altrimenti (inclusa nota con carico ok) -> Verde!
            dot_c = '#ef4444' if is_ath_red else ('#f59e0b' if (has_ath_2nd_yellow or has_ath_4_yellows) else '#10b981')

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
