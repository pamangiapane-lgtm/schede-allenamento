import os, sys, requests, json
from datetime import datetime
from PIL import Image, ImageDraw, ImageFont

GAS_URL = 'https://script.google.com/macros/s/AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec'
TOKEN   = 'mv26-prd-3xF7wNqK'

ROSTER = [
    {"id": 1, "name": "Veronica Allasia", "role": "Palleggiatrice"},
    {"id": 2, "name": "Maria Marcuzzi", "role": "Centrale"},
    {"id": 3, "name": "Victoria Sassolini", "role": "Schiacciatrice"},
    {"id": 4, "name": "Anja Asonja", "role": "Opposto"},
    {"id": 5, "name": "Chiara Lo Dico", "role": "Libero"},
    {"id": 6, "name": "Gaia Biondi", "role": "Centrale"},
    {"id": 7, "name": "Elisa Bole", "role": "Schiacciatrice"},
    {"id": 8, "name": "Federica Nonnati", "role": "Opposto"},
    {"id": 9, "name": "Sara Dodi", "role": "Schiacciatrice"},
    {"id": 11, "name": "Luna Cicola", "role": "Libero"},
    {"id": 12, "name": "Erin Grippo", "role": "Palleggiatrice"},
    {"id": 13, "name": "Giulia Caserta", "role": "Centrale"},
    {"id": 14, "name": "Nelly Adamczewska", "role": "Schiacciatrice"}
]

def parse_score(val, default=None):
    if val is None or str(val).strip() == '':
        return default
    try:
        return int(round(float(str(val).replace(',', '.'))))
    except Exception:
        return default

def crea_infografica(output_path="report_wellness_oggi.png"):
    dati = []
    # 1. Fetch rapido da Supabase per parità dati immediata
    try:
        sb_url = 'https://trhaoucqnmhqiimrkada.supabase.co/rest/v1/wellness_logs?select=*&order=created_at.desc&limit=150'
        sb_key = 'sb_publishable_SDPimUfUqYBFlO5mZ_JdGQ_8N4sWYwd'
        r_sb = requests.get(sb_url, headers={'apikey': sb_key, 'Authorization': f'Bearer {sb_key}'}, timeout=6)
        if r_sb.status_code == 200:
            for item in r_sb.json():
                dati.append({
                    'ID_Giocatrice': item.get('athlete_id'),
                    'Data': item.get('date'),
                    'Timestamp': item.get('created_at'),
                    'Qualita_Sonno': item.get('sleep_quality'),
                    'Fatica': item.get('fatigue'),
                    'Readines': item.get('readiness'),
                    'Dolori': item.get('soreness'),
                    'Stress': item.get('stress'),
                    'Note': item.get('note')
                })
    except Exception as e:
        print(f"Nota: Supabase bypass: {e}")

    # 2. Fetch di sicurezza da Google Sheets (Shadow Backend)
    try:
        r = requests.get(GAS_URL, params={'token': TOKEN, 'azione': 'leggi', 'foglio': 'Wellness'}, timeout=12)
        gas_dati = r.json().get('dati', [])
        dati.extend(gas_dati)
    except Exception as e:
        print(f"Errore download GAS: {e}")

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
                'sonno': parse_score(row.get('Qualita_Sonno')),
                'fatica': parse_score(row.get('Fatica')),
                'readiness': parse_score(row.get('Readines') if row.get('Readines') is not None else row.get('Disponibilita')),
                'dolori': parse_score(row.get('Dolori'), default=0),
                'stress': parse_score(row.get('Stress'), default=1),
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
            
            # 1. Dolori: >= 5 = Rosso, 4 = Giallo
            if w['dolori'] >= 5:
                out_items.append(f"Dolori: {w['dolori']}/10 (Critico)")
                is_red = True
            elif w['dolori'] == 4:
                out_items.append(f"Dolori: 4/10")

            # 2. Readiness: <= 5 = Rosso, 6 = Giallo
            if rd is not None:
                if rd <= 5:
                    out_items.append(f"Readiness: {rd}/10 (Bassa)")
                    is_red = True
                elif rd == 6:
                    out_items.append(f"Readiness: 6/10")

            # 3. Sonno: <= 5 = Rosso, 6 = Giallo
            if w['sonno'] is not None:
                if w['sonno'] <= 5:
                    out_items.append(f"Sonno: {w['sonno']}/10 (Scarso)")
                    is_red = True
                elif w['sonno'] == 6:
                    out_items.append(f"Sonno: 6/10")

            # 4. Energia/Fatica: <= 5 = Rosso, 6 = Giallo
            if w['fatica'] is not None:
                if w['fatica'] <= 5:
                    out_items.append(f"Energia: {w['fatica']}/10 (Fatica Alta)")
                    is_red = True
                elif w['fatica'] == 6:
                    out_items.append(f"Energia: 6/10")

            # 5. Stress: >= 5 = Rosso, 4 = Giallo
            if w['stress'] >= 5:
                out_items.append(f"Stress: {w['stress']}/10 (Alto)")
                is_red = True
            elif w['stress'] == 4:
                out_items.append(f"Stress: 4/10")

            # Conteggio parametri in giallo
            yellow_metrics = []
            if w['dolori'] in (3, 4): yellow_metrics.append(f"Dolori {w['dolori']}")
            if rd is not None and rd in (6, 7): yellow_metrics.append(f"Readiness {rd}")
            if w['sonno'] is not None and w['sonno'] in (6, 7): yellow_metrics.append(f"Sonno {w['sonno']}")
            if w['fatica'] is not None and w['fatica'] in (6, 7): yellow_metrics.append(f"Energia {w['fatica']}")
            if w['stress'] == 4: yellow_metrics.append(f"Stress 4")

            has_2nd_yellow = (w['dolori'] == 4) or (rd == 6) or (w['sonno'] == 6) or (w['fatica'] == 6) or (w['stress'] == 4)
            has_4_yellows = len(yellow_metrics) >= 4
            has_note = bool(w['note'] and len(w['note'].strip()) > 0)

            # Classificazione Badge Focus
            if is_red:
                badge_type = 'red'
                badge_lbl = "[CRITICO]"
            elif has_2nd_yellow or has_4_yellows:
                badge_type = 'yellow'
                badge_lbl = "[ATTENZIONE]"
                if has_4_yellows and not has_2nd_yellow:
                    out_items.insert(0, f"Fatica Sistemica ({len(yellow_metrics)} Valori Gialli)")
            elif has_note:
                badge_type = 'note'
                badge_lbl = "[SEGNALAZIONE]"
            else:
                badge_type = None

            if badge_type is not None:
                focus_list.append({
                    'ath': a,
                    'w': w,
                    'badge_type': badge_type,
                    'badge_lbl': badge_lbl,
                    'alert_summary': "   •   ".join(out_items) if out_items else None,
                    'note': w['note'] if has_note else None
                })

    def sort_order(x):
        b = x.get('badge_type')
        cat = 0 if b == 'red' else (1 if b == 'yellow' else 2)
        w = x.get('w', {})
        dol = w.get('dolori') or 0
        r_def = 10 - (w.get('readiness') or 10)
        f_def = 10 - (w.get('fatica') or 10)
        s_def = 10 - (w.get('sonno') or 10)
        sev_score = dol * 3 + r_def * 2 + f_def + s_def
        return (cat, -sev_score)

    focus_list.sort(key=sort_order)
    avg_pct = round((total_readiness / readiness_count) * 10) if readiness_count > 0 else 0

    # Calcolo dinamico altezza immagine in base a focus_list e note
    notes_count = sum(1 for a in ROSTER if (live_data.get(a['id']) or {}).get('note'))
    W = 1080
    H = 1920 + (notes_count * 45)

    img = Image.new('RGB', (W, H), color='#0d131f')
    draw = ImageDraw.Draw(img)

    def get_font(names, size):
        for name in names:
            try:
                return ImageFont.truetype(name, size)
            except Exception:
                pass
        return ImageFont.load_default()

    font_title = get_font(["arialbd.ttf", "LiberationSans-Bold.ttf", "DejaVuSans-Bold.ttf"], 44)
    font_sub = get_font(["arial.ttf", "LiberationSans-Regular.ttf", "DejaVuSans.ttf"], 24)
    font_kpi_val = get_font(["arialbd.ttf", "LiberationSans-Bold.ttf", "DejaVuSans-Bold.ttf"], 50)
    font_kpi_lbl = get_font(["arialbd.ttf", "LiberationSans-Bold.ttf", "DejaVuSans-Bold.ttf"], 20)
    font_sec_title = get_font(["arialbd.ttf", "LiberationSans-Bold.ttf", "DejaVuSans-Bold.ttf"], 28)
    font_th = get_font(["arialbd.ttf", "LiberationSans-Bold.ttf", "DejaVuSans-Bold.ttf"], 19)
    font_row = get_font(["arial.ttf", "LiberationSans-Regular.ttf", "DejaVuSans.ttf"], 22)
    font_row_bold = get_font(["arialbd.ttf", "LiberationSans-Bold.ttf", "DejaVuSans-Bold.ttf"], 22)
    font_focus_ath = get_font(["arialbd.ttf", "LiberationSans-Bold.ttf", "DejaVuSans-Bold.ttf"], 22)
    font_focus_sub = get_font(["arial.ttf", "LiberationSans-Regular.ttf", "DejaVuSans.ttf"], 20)
    font_note = get_font(["ariali.ttf", "LiberationSans-Italic.ttf", "DejaVuSans-Oblique.ttf"], 19)
    font_badge = get_font(["arialbd.ttf", "LiberationSans-Bold.ttf", "DejaVuSans-Bold.ttf"], 15)

    # 1. HEADER (Navy con Linea Satinata)
    draw.rectangle([(0, 0), (W, 185)], fill='#111927')
    draw.line([(0, 181), (W, 181)], fill='#94763a', width=4)

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
            logo = logo.resize((125, 125))
            img.paste(logo, (45, 30))
            x_offset = 190
        except: pass

    draw.text((x_offset, 40), "MARSALA VOLLEY", fill='#e5b758', font=font_title)
    draw.text((x_offset, 102), f"DAILY WELLNESS & READINESS REPORT · {date_str}", fill='#cbd5e1', font=font_sub)

    # 2. KPI SNAPSHOT CARDS
    card_w = 310
    card_h = 130
    y_kpi = 220

    # Card 1: Readiness Squadra
    col_kpi1 = '#10b981' if avg_pct >= 75 else ('#f59e0b' if avg_pct >= 60 else '#ef4444')
    draw.rounded_rectangle([(40, y_kpi), (40 + card_w, y_kpi + card_h)], radius=14, fill='#121824', outline='#1e293b', width=2)
    draw.text((60, y_kpi + 22), "READINESS SQUADRA", fill='#94a3b8', font=font_kpi_lbl)
    draw.text((60, y_kpi + 55), f"{avg_pct}%", fill=col_kpi1, font=font_kpi_val)

    # Card 2: Compilazione
    draw.rounded_rectangle([(40 + card_w + 25, y_kpi), (40 + card_w*2 + 25, y_kpi + card_h)], radius=14, fill='#121824', outline='#1e293b', width=2)
    draw.text((40 + card_w + 45, y_kpi + 22), "COMPILAZIONE OGGI", fill='#94a3b8', font=font_kpi_lbl)
    draw.text((40 + card_w + 45, y_kpi + 55), f"{count_filled} / {len(ROSTER)}", fill='#38bdf8', font=font_kpi_val)

    # Card 3: Alert & Note
    has_red_alert = any(x['badge_type'] == 'red' for x in focus_list)
    has_yellow_alert = any(x['badge_type'] == 'yellow' for x in focus_list)
    col_alert = '#ef4444' if has_red_alert else ('#f59e0b' if has_yellow_alert else ('#10b981' if not focus_list else '#38bdf8'))
    draw.rounded_rectangle([(40 + card_w*2 + 50, y_kpi), (40 + card_w*3 + 50, y_kpi + card_h)], radius=14, fill='#121824', outline='#1e293b', width=2)
    draw.text((40 + card_w*2 + 70, y_kpi + 22), "ALERT & NOTE", fill='#94a3b8', font=font_kpi_lbl)
    draw.text((40 + card_w*2 + 70, y_kpi + 55), f"{len(focus_list)}", fill=col_alert, font=font_kpi_val)

    # 3. SEZIONE FOCUS CLINICO & SEGNALAZIONI
    y_alert = 380
    draw.text((40, y_alert), "FOCUS CLINICO & SEGNALAZIONI", fill='#e5b758', font=font_sec_title)

    y_alert_box = y_alert + 45
    if focus_list:
        num_items = min(5, len(focus_list))
        box_h = 20 + num_items * 64
        draw.rounded_rectangle([(40, y_alert_box), (W - 40, y_alert_box + box_h)], radius=14, fill='#121824', outline='#263447', width=2)
        cur_y = y_alert_box + 15
        for item in focus_list[:num_items]:
            ath = item['ath']
            btype = item['badge_type']
            if btype == 'red':
                dot_c = '#ef4444'
                badge_c = '#fca5a5'
            elif btype == 'yellow':
                dot_c = '#f59e0b'
                badge_c = '#fde68a'
            else:
                dot_c = '#38bdf8'
                badge_c = '#7dd3fc'
            
            draw.ellipse([(60, cur_y + 6), (72, cur_y + 18)], fill=dot_c)
            draw.text((82, cur_y), f"#{ath['id']} {ath['name']} ({ath['role']})  {item['badge_lbl']}", fill=badge_c, font=font_focus_ath)
            detail_txt = item['alert_summary'] or (f'💬 "{item["note"]}"' if item['note'] else '')
            draw.text((82, cur_y + 28), detail_txt, fill='#cbd5e1', font=font_focus_sub)
            cur_y += 64
    else:
        box_h = 70
        draw.rounded_rectangle([(40, y_alert_box), (W - 40, y_alert_box + box_h)], radius=14, fill='#121824', outline='#202b3d', width=2)
        draw.text((60, y_alert_box + 22), "✓ Tutte le atlete sono in fascia ottimale. Nessuna criticità o nota clinica.", fill='#52b788', font=font_row_bold)

    # 4. TABELLA ROSTER A 8 COLONNE (ATLETA, RUOLO, SONNO, ENERGIA, STRESS, DOLORI, READINESS, STATO)
    y_table = y_alert_box + box_h + 35
    draw.text((40, y_table), "STATUS INDIVIDUALE ROSTER (13 ATLETE)", fill='#f8fafc', font=font_sec_title)

    y_th = y_table + 45
    draw.rounded_rectangle([(40, y_th), (W - 40, y_th + 50)], radius=8, fill='#151f2e')
    draw.text((76, y_th + 14), "ATLETA", fill='#cbd5e1', font=font_th)
    draw.text((328, y_th + 14), "RUOLO", fill='#cbd5e1', font=font_th)

    # Intestazioni centrate
    def draw_centered_th(text, cx, color='#cbd5e1'):
        bbox = font_th.getbbox(text)
        tw = bbox[2] - bbox[0]
        draw.text((cx - tw // 2, y_th + 14), text, fill=color, font=font_th)

    draw_centered_th("SONNO", 480)
    draw_centered_th("ENERGIA", 570)
    draw_centered_th("STRESS", 660, '#e5b758')
    draw_centered_th("DOLORI", 750)
    draw_centered_th("READINESS", 845, '#e5b758')
    draw_centered_th("STATO", 955)

    y_row = y_th + 58
    for idx, a in enumerate(ROSTER):
        w = live_data.get(a['id'])
        has_n = bool(w and w['is_today'] and w.get('note'))
        base_h = 58
        total_block_h = base_h + (44 if has_n else 0)
        bg_row = '#101725' if idx % 2 == 0 else '#0c121e'
        draw.rounded_rectangle([(40, y_row), (W - 40, y_row + total_block_h)], radius=8, fill=bg_row)

        if w and w['is_today']:
            rd = w['readiness']
            so = w['sonno']
            en = w['fatica']
            st = w['stress']
            do = w['dolori']
            note_str = w['note']

            # Verifica semaforo
            is_ath_red = (rd is not None and rd <= 5) or (so is not None and so <= 5) or (en is not None and en <= 5) or (do >= 5) or (st is not None and st >= 5)
            has_ath_2nd_yellow = (do == 4) or (rd == 6) or (so == 6) or (en == 6) or (st == 4)
            c_y = 0
            if do in (3, 4): c_y += 1
            if rd is not None and rd in (6, 7): c_y += 1
            if so is not None and so in (6, 7): c_y += 1
            if en is not None and en in (6, 7): c_y += 1
            if st == 4: c_y += 1
            has_ath_4_yellows = c_y >= 4

            if is_ath_red:
                dot_c = '#ef4444'
                badge_lbl = "CRITICO"
                badge_bg = '#3b181e'
                badge_fg = '#fca5a5'
            elif has_ath_2nd_yellow or has_ath_4_yellows:
                dot_c = '#f59e0b'
                badge_lbl = "ATTENZIONE"
                badge_bg = '#382813'
                badge_fg = '#fde68a'
            elif has_n:
                dot_c = '#38bdf8'
                badge_lbl = "NOTA"
                badge_bg = '#142838'
                badge_fg = '#7dd3fc'
            else:
                dot_c = '#10b981'
                badge_lbl = "OTTIMALE"
                badge_bg = '#0d2b22'
                badge_fg = '#6ee7b7'

            # Pallino semaforo
            draw.ellipse([(54, y_row + 21), (68, y_row + 35)], fill=dot_c)

            # ID (oro) + Nome Atleta (bianco)
            draw.text((76, y_row + 17), f"#{a['id']}", fill='#e5b758', font=font_row_bold)
            id_bbox = font_row_bold.getbbox(f"#{a['id']} ")
            id_w = id_bbox[2] - id_bbox[0]
            draw.text((76 + id_w, y_row + 17), a['name'], fill='#ffffff', font=font_row_bold)

            # Ruolo
            draw.text((328, y_row + 17), a['role'], fill='#94a3b8', font=font_row)

            # Metriche centrate
            def draw_score(val, cx, is_inverted=False):
                txt = f"{val}/10" if val is not None else "-/10"
                if val is None:
                    col = '#94a3b8'
                elif is_inverted:
                    col = '#10b981' if val <= 2 else ('#f59e0b' if val <= 4 else '#ef4444')
                else:
                    col = '#10b981' if val >= 8 else ('#f59e0b' if val >= 6 else '#ef4444')
                bbox = font_row_bold.getbbox(txt)
                tw = bbox[2] - bbox[0]
                draw.text((cx - tw // 2, y_row + 17), txt, fill=col, font=font_row_bold)

            draw_score(so, 480)
            draw_score(en, 570)
            draw_score(st, 660, is_inverted=True)
            draw_score(do, 750, is_inverted=True)
            draw_score(rd, 845)

            # Badge STATO a pillola
            bbox_b = font_badge.getbbox(badge_lbl)
            bw = bbox_b[2] - bbox_b[0] + 16
            bh = 26
            bx = 955 - bw // 2
            by = y_row + 16
            draw.rounded_rectangle([(bx, by), (bx + bw, by + bh)], radius=5, fill=badge_bg)
            draw.text((bx + 8, by + 4), badge_lbl, fill=badge_fg, font=font_badge)

            # Box Nota estesa se presente
            if has_n:
                box_ny = y_row + base_h - 2
                draw.rounded_rectangle([(60, box_ny), (W - 60, box_ny + 36)], radius=6, fill='#091222', outline='#1e293b', width=1)
                draw.text((75, box_ny + 8), f'💬 NOTA ATLETA: "{note_str}"', fill='#fde68a', font=font_note)

        else:
            draw.ellipse([(54, y_row + 21), (68, y_row + 35)], fill='#64748b')
            draw.text((76, y_row + 17), f"#{a['id']} {a['name']}", fill='#64748b', font=font_row)
            draw.text((328, y_row + 17), a['role'], fill='#64748b', font=font_row)
            draw.text((480, y_row + 17), "— Non compilato stamattina —", fill='#64748b', font=font_note)

        y_row += total_block_h + 8

    # 5. FOOTER
    draw.line([(40, H - 60), (W - 40, H - 60)], fill='#1e293b', width=2)
    foot_txt = "Marsala Volley S&C Command Center · Serie A2 Femminile"
    foot_bbox = font_note.getbbox(foot_txt)
    foot_w = foot_bbox[2] - foot_bbox[0]
    draw.text(((W - foot_w) // 2, H - 42), foot_txt, fill='#64748b', font=font_note)

    img.save(output_path, "PNG", quality=95)
    print(f"Infografica generata con successo in: {output_path}")
    return output_path

if __name__ == '__main__':
    crea_infografica()
