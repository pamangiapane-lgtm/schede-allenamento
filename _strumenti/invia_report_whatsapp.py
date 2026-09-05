import requests, json
from datetime import datetime

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
    try:
        r = requests.get(GAS_URL, params={'token': TOKEN, 'azione': 'leggi', 'foglio': 'Wellness'}, timeout=20)
        dati = r.json().get('dati', [])
    except Exception as e:
        print(f"Errore caricamento dati: {e}")
        return ""

    today_str = datetime.now().strftime('%Y-%m-%d')
    today_formatted = datetime.now().strftime('%d/%m/%Y')

    live_data = {}
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

    count_filled = 0
    total_readiness = 0
    readiness_count = 0
    alerts = []
    roster_lines = []

    for a in ROSTER:
        w = live_data.get(a['id'])
        if w and w['is_today']:
            count_filled += 1
            rd = w['readiness']
            if rd is not None and str(rd).isdigit():
                total_readiness += int(rd)
                readiness_count += 1
            
            is_red = (rd is not None and int(rd) < 6) or (w['sonno'] and int(w['sonno']) < 6) or (w['dolori'] and str(w['dolori']).isdigit() and int(w['dolori']) >= 5)
            is_yellow = not is_red and ((rd and int(rd) <= 7) or (w['dolori'] and str(w['dolori']).isdigit() and int(w['dolori']) >= 3) or (w['note'] and len(w['note']) > 0))
            
            tag = '🔴' if is_red else ('🟡' if is_yellow else '🟢')
            surname = a['name'].split()[-1]
            role_c = a['role'][0]
            
            d_val = w['dolori'] if (w['dolori'] is not None and str(w['dolori']).strip()) else '0'
            st_val = w['stress'] if w['stress'] is not None else '2'
            
            roster_lines.append(f"{tag} #{a['id']} {surname} ({role_c}) | R:{w['readiness'] or '-'} S:{w['sonno'] or '-'} E:{w['fatica'] or '-'} D:{d_val} St:{st_val}")
            
            if is_red or is_yellow:
                alerts.append({'ath': a, 'w': w, 'is_red': is_red})
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
            msg += f"{em} *#{ath['id']} {ath['name']}* ({ath['role']})\n"
            if w.get('dolori') and str(w['dolori']).isdigit() and int(w['dolori']) >= 3:
                msg += f"   • Dolori: *{w['dolori']}/10*\n"
            if w.get('note'):
                msg += f"   💬 _\"{w['note']}\"_\n"
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
