"""
invia_wellness_giornaliero.py — Dispatcher automatico mattutino (ore 08:00).
Invia le notifiche Push Web a tutte le giocatrici iscritte sul loro smartphone.
Al tocco della notifica, si apre direttamente il loro Morning Wellness personalizzato.
"""

import os
import sys
import json
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
NOTIFICA_TESTO  = 'Buongiorno! Compila il tuo Wellness di oggi 🌅'

def main():
    print("=== MARSALA VOLLEY — WEB PUSH NOTIFICHE DISATTIVATE ===")
    print("ℹ️ Le notifiche Web Push sono state disattivate in favore del canale/gruppo WhatsApp.")
    print("Nessun invio effettuato.")
    return

    # 2. Invia notifica push a tutte le atlete registrate
    ok = 0
    ko = 0

    for sub in subs:
        aid = str(sub.get('ID_Giocatrice', ''))
        endpoint = sub.get('Endpoint', '')
        p256dh = sub.get('P256dh', '')
        auth = sub.get('Auth', '')

        # Salta record vuoti
        if not endpoint or aid in ['', 'None']:
            continue

        target_url = f"{BASE_APP_URL}?id={aid}&wellness=1"
        
        payload = json.dumps({
            'title': NOTIFICA_TITOLO,
            'body': NOTIFICA_TESTO,
            'url': target_url,
            'id': aid
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
            print(f"   ✅ ID #{aid:02s}: Notifica Push inviata con successo")
            ok += 1
        except WebPushException as ex:
            print(f"   ⚠️ ID #{aid:02s}: Errore push ({ex})")
            ko += 1
        except Exception as ex:
            print(f"   ❌ ID #{aid:02s}: {ex}")
            ko += 1

    print(f"\n🎯 Risultato Invio: {ok} notifiche consegnate, {ko} errori.")

if __name__ == '__main__':
    main()
