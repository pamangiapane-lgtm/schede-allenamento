"""
invia_wellness.py — Dispatcher Notifiche Push Web per Morning Wellness Marsala Volley.
Invia le notifiche Push Web a tutte le giocatrici iscritte sul loro smartphone.
Filtra automaticamente le atlete che hanno già compilato il questionario oggi.
"""

import os
import sys
import json
import argparse
import requests
from pywebpush import webpush, WebPushException
from datetime import datetime

sys.stdout.reconfigure(encoding='utf-8')

GAS_URL = 'https://script.google.com/macros/s/AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec'
TOKEN   = os.environ.get('APP_TOKEN') or 'mv26-prd-3xF7wNqK'

BASE_APP_URL = 'https://pamangiapane-lgtm.github.io/schede-allenamento/'

VAPID_PRIVATE_KEY = 'zATHxKAdGDA0u7vWp_0H5dGwXKSNCvn4fJ8NxcRx6Ro'
VAPID_CLAIMS      = {'sub': 'mailto:pamangiapane@gmail.com'}

NOTIFICA_TITOLO = '🏐 Marsala Volley — Morning Wellness'
NOTIFICA_TESTO  = 'Buongiorno! Ricordati di compilare il tuo Wellness di oggi 🌅'

ROSTER_NAMES = {
    1: "Ludovica Allasia",
    2: "Giulia Marcuzzi",
    3: "Cecilia Sassolini",
    4: "Anja Asonja",
    5: "Alice Lo Dico",
    6: "Bianca Biondi",
    7: "Giulia Bolé",
    8: "Sara Nonnati",
    9: "Sofia Dodi",
    11: "Michela Cicola",
    12: "Erin Grippo",
    13: "Giulia Caserta",
    14: "Nelly Adamczewska",
    99: "Coach Demo"
}

def main():
    parser = argparse.ArgumentParser(description="Invio Notifiche Push Wellness Marsala Volley")
    parser.add_argument("--force", action="store_true", help="Invia a tutte le atlete registrate anche se hanno già compilato")
    parser.add_argument("--id", type=int, help="Invia solo a una specifica atleta (ID)")
    args = parser.parse_args()

    today_str = datetime.now().strftime('%Y-%m-%d')
    print(f"\n========================================================")
    print(f"🏐 MARSALA VOLLEY — DISPATCHER PUSH WELLNESS ({today_str})")
    print(f"========================================================\n")

    headers = {'User-Agent': 'Mozilla/5.0'}

    # 1. Recupera chi ha già compilato oggi
    completed_ids = set()
    if not args.force:
        try:
            r_well = requests.get(GAS_URL, params={'token': TOKEN, 'azione': 'leggi', 'foglio': 'Wellness'}, headers=headers, timeout=20)
            if r_well.status_code == 200:
                well_rows = r_well.json().get('dati', [])
                for r in well_rows:
                    r_date = str(r.get('Data', ''))[:10]
                    r_ts = str(r.get('Timestamp', ''))[:10]
                    if r_date == today_str or r_ts == today_str:
                        aid = r.get('ID_Giocatrice')
                        if aid is not None:
                            try:
                                completed_ids.add(int(aid))
                            except ValueError:
                                pass
            print(f"ℹ️ Atlete che hanno GIÀ compilato oggi ({len(completed_ids)}): {sorted(list(completed_ids))}")
        except Exception as e:
            print(f"⚠️ Impossibile verificare compilazioni odierne ({e}), invio a tutte le iscritte.")

    # 2. Recupera le sottoscrizioni Push da Google Sheets
    try:
        r_push = requests.get(GAS_URL, params={'token': TOKEN, 'azione': 'leggi', 'foglio': 'PushSub'}, headers=headers, timeout=20)
        subs = r_push.json().get('dati', []) if r_push.status_code == 200 else []
        print(f"📱 Sottoscrizioni Push trovate nel database: {len(subs)}\n")
    except Exception as e:
        print(f"❌ Errore lettura Google Sheets (PushSub): {e}")
        return

    if not subs:
        print("⚠️ Nessun dispositivo registrato.")
        return

    ok = 0
    ko = 0
    skipped = 0

    for sub in subs:
        aid_raw = str(sub.get('ID_Giocatrice', '')).strip()
        endpoint = sub.get('Endpoint', '')
        p256dh = sub.get('P256dh', '')
        auth = sub.get('Auth', '')

        if not endpoint or aid_raw in ['', 'None', 'TEST_99']:
            continue

        try:
            aid = int(aid_raw)
        except ValueError:
            continue

        ath_name = ROSTER_NAMES.get(aid, f"Atleta #{aid}")

        if args.id and aid != args.id:
            continue

        if not args.force and aid in completed_ids:
            print(f"   ⏩ #{aid:02d} {ath_name}: Già compilato oggi. Notifica saltata.")
            skipped += 1
            continue

        target_url = f"{BASE_APP_URL}?id={aid}&wellness=1"
        is_en = (aid in [4, 14])
        body_text = 'Good morning! Please fill in your Daily Wellness 🌅' if is_en else NOTIFICA_TESTO
        title_text = '🏐 Marsala Volley — Morning Wellness'

        payload = json.dumps({
            'title': title_text,
            'body': body_text,
            'url': target_url,
            'id': str(aid)
        })

        try:
            webpush(
                subscription_info={
                    'endpoint': endpoint,
                    'keys': {'p256dh': p256dh, 'auth': auth}
                },
                data=payload,
                vapid_private_key=VAPID_PRIVATE_KEY,
                vapid_claims=dict(VAPID_CLAIMS),
                ttl=86400,
                headers={'Urgency': 'high'}
            )
            print(f"   ✅ #{aid:02d} {ath_name}: Notifica Push INVIATA con successo")
            ok += 1
        except WebPushException as ex:
            print(f"   ⚠️ #{aid:02d} {ath_name}: Errore WebPush ({ex})")
            ko += 1
        except Exception as ex:
            print(f"   ❌ #{aid:02d} {ath_name}: {ex}")
            ko += 1

    print(f"\n🎯 Riepilogo Invio:")
    print(f"   • Consegnate: {ok}")
    print(f"   • Già compilate (saltate): {skipped}")
    print(f"   • Errori/Scadute: {ko}\n")

if __name__ == '__main__':
    main()
