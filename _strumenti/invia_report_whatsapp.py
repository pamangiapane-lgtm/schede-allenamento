import requests, json, os, sys
from datetime import datetime

if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

SUPABASE_URL = (os.environ.get("SUPABASE_URL") or "https://trhaoucqnmhqiimrkada.supabase.co").rstrip("/")
SUPABASE_ANON_KEY = os.environ.get("SUPABASE_ANON_KEY") or "sb_publishable_SDPimUfUqYBFlO5mZ_JdGQ_8N4sWYwd"
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

def compila_report():
    today_str = datetime.now().strftime('%Y-%m-%d')
    today_formatted = datetime.now().strftime('%d/%m/%Y')
    live_data = {}

    # 1. Tentativo primario: Supabase REST (<150ms, Single Source of Truth)
    try:
        url = f"{SUPABASE_URL}/rest/v1/wellness_logs?date=eq.{today_str}&select=*"
        headers = {
            "apikey": SUPABASE_ANON_KEY,
            "Authorization": f"Bearer {SUPABASE_ANON_KEY}"
        }
        r = requests.get(url, headers=headers, timeout=10)
        if r.ok:
            for row in r.json():
                aid = int(row.get('athlete_id') or 0)
                live_data[aid] = {
                    'date': row.get('date'),
                    'ts': row.get('created_at') or '',
                    'sonno': row.get('sleep_quality'),
                    'fatica': row.get('fatigue'),
                    'readiness': row.get('readiness'),
                    'dolori': row.get('soreness'),
                    'stress': row.get('stress', 2),
                    'note': str(row.get('note') or '').strip(),
                    'is_today': True
                }
    except Exception as e:
        print(f"[Supabase fallback] Errore connessione Supabase: {e}")

    # 2. Fallback su Google Apps Script se Supabase non ha record
    if not live_data:
        try:
            r = requests.get(GAS_URL, params={'token': TOKEN, 'azione': 'leggi', 'foglio': 'Wellness'}, timeout=20)
            dati = r.json().get('dati', []) if r.ok else []
            for row in dati:
                aid = int(row.get('ID_Giocatrice') or 0)
                rdate = str(row.get('Data') or '')[:10]
                ts = str(row.get('Timestamp') or '')
                if aid not in live_data or ts > live_data[aid].get('ts', ''):
                    live_data[aid] = {
                        'date': rdate,
                        'ts': ts,
                        'sonno': row.get('Qualita_Sonno'),
                        'fatica': row.get('Fatica'),
                        'readiness': row.get('Readines') if row.get('Readines') is not None else row.get('Disponibilita'),
                        'dolori': row.get('Dolori'),
                        'stress': row.get('Stress', 2),
                        'note': str(row.get('Note') or '').strip(),
                        'is_today': (rdate == today_str or ts.startswith(today_str))
                    }
        except Exception as e:
            print(f"Errore caricamento dati GAS: {e}")
            if not live_data:
                return ""

    count_filled = 0
    total_readiness = 0
    readiness_count = 0
    alerts = []
    roster_lines = []

    def to_float(v, default=None):
        try:
            if v is None or str(v).strip() == '':
                return default
            return float(v)
        except (ValueError, TypeError):
            return default

    for a in ROSTER:
        w = live_data.get(a['id'])
        if w and w['is_today']:
            count_filled += 1
            rd_num = to_float(w.get('readiness'))
            so_num = to_float(w.get('sonno'))
            do_num = to_float(w.get('dolori'), 0.0)
            st_num = to_float(w.get('stress'), 2.0)
            note_str = (w.get('note') or '').strip()

            if rd_num is not None:
                total_readiness += rd_num
                readiness_count += 1

            is_red = (rd_num is not None and rd_num < 6.0) or (so_num is not None and so_num < 6.0) or (do_num is not None and do_num >= 5.0)
            is_yellow = not is_red and ((rd_num is not None and rd_num <= 7.0) or (do_num is not None and do_num >= 3.0) or (len(note_str) > 0))

            tag = '🔴' if is_red else ('🟡' if is_yellow else '🟢')
            surname = a['name'].split()[-1]
            role_c = a['role'][0]

            d_val = f"{int(do_num)}" if (do_num is not None and do_num.is_integer()) else f"{do_num}"
            st_val = f"{int(st_num)}" if (st_num is not None and st_num.is_integer()) else f"{st_num}"
            rd_val = f"{int(rd_num)}" if (rd_num is not None and rd_num.is_integer()) else f"{rd_num or '-'}"
            so_val = f"{int(so_num)}" if (so_num is not None and so_num.is_integer()) else f"{so_num or '-'}"
            fa_num = to_float(w.get('fatica'))
            fa_val = f"{int(fa_num)}" if (fa_num is not None and fa_num.is_integer()) else f"{fa_num or '-'}"

            roster_lines.append(f"{tag} #{a['id']} {surname} ({role_c}) | R:{rd_val} S:{so_val} E:{fa_val} D:{d_val} St:{st_val}")

            if is_red or is_yellow:
                alerts.append({'ath': a, 'w': w, 'is_red': is_red, 'dolori_num': do_num, 'note': note_str})
        else:
            surname = a['name'].split()[-1]
            role_c = a['role'][0]
            roster_lines.append(f"⚪ #{a['id']} {surname} ({role_c}) | _Non compilato_")

    avg_pct = round((total_readiness / readiness_count) * 10) if readiness_count > 0 else '--'

    msg = f"🏐 *MARSALA VOLLEY — DAILY REPORT* 🏐\n"
    msg += f"📅 *{today_formatted}*\n\n"
    msg += f"📊 *QUADRO GENERALE SQUADRA:*\n"
    msg += f"• Readiness Media: *{avg_pct}%* {'🟢' if avg_pct != '--' and avg_pct >= 75 else ('🟡' if avg_pct != '--' and avg_pct >= 60 else '🔴')}\n"
    msg += f"• Compilazione: *{count_filled} / {len(ROSTER)} Atlete*\n"
    msg += f"• Atlete da Monitorare: *{len(alerts)}*\n\n"

    if alerts:
        msg += f"🚨 *SEGNALAZIONI & FASTIDI:*\n"
        for item in alerts:
            em = '🔴' if item['is_red'] else '🟡'
            ath = item['ath']
            w = item['w']
            d_num = item.get('dolori_num', 0.0)
            d_str = f"{int(d_num)}" if (d_num is not None and hasattr(d_num, 'is_integer') and d_num.is_integer()) else f"{d_num}"
            msg += f"{em} *#{ath['id']} {ath['name']}* ({ath['role']})\n"
            if d_num is not None and d_num >= 3.0:
                msg += f"   • Dolori: *{d_str}/10*\n"
            if item.get('note'):
                msg += f"   💬 _\"{item['note']}\"_\n"
        msg += "\n"
    else:
        msg += "✅ *Nessuna segnalazione critica o dolore segnalato stamattina.*\n\n"

    msg += f"👥 *DETTAGLIO ROSTER:*\n"
    msg += "\n".join(roster_lines) + "\n\n"
    msg += "🔗 *Command Center:* https://pamangiapane-lgtm.github.io/schede-allenamento/coach/"

    return msg

if __name__ == '__main__':
    report = compila_report()
    print('=== TESTO REPORT WHATSAPP ===')
    print(report)
