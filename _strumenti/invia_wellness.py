"""
invia_wellness.py — Invia notifica push wellness a tutte le giocatrici iscritte.

Dipendenze (installa una volta):
    pip install pywebpush requests

Utilizzo:
    python _strumenti/invia_wellness.py

Programmazione automatica (Windows Task Scheduler):
    - Programma: python
    - Argomenti: C:\\percorso\\schede-allenamento\\_strumenti\\invia_wellness.py
    - Avvia in: C:\percorso\schede-allenamento
    - Attivazione: ogni giorno alle 08:00
"""

import json
import os
import sys
import requests
from pywebpush import webpush, WebPushException

# ── Configurazione ──────────────────────────────────────────────────────────

VAPID_PRIVATE_KEY = 'zATHxKAdGDA0u7vWp_0H5dGwXKSNCvn4fJ8NxcRx6Ro'
VAPID_CLAIMS      = {'sub': 'mailto:pamangiapane@gmail.com'}

GAS_URL = 'https://script.google.com/macros/s/AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec'
TOKEN   = os.environ.get('APP_TOKEN') or 'mv26-prd-3xF7wNqK'

APP_URL = 'https://pamangiapane-lgtm.github.io/schede-allenamento/scheda.html'

NOTIFICA_TITOLO = '🏐 Marsala Volley — Wellness'
NOTIFICA_TESTO  = 'Buongiorno! Compila il questionario di oggi 🌅'

# ── Lettura subscriptions da Google Sheets ──────────────────────────────────

HEADERS = {'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json'}

def gas_get(params, tentativi=4):
    for i in range(tentativi):
        try:
            r = requests.get(GAS_URL, params=params, headers=HEADERS, timeout=30, allow_redirects=True)
            if r.status_code == 200:
                return r.json()
        except Exception:
            pass
        import time; time.sleep(2 ** i)
    return None

print('📋 Caricamento iscrizioni push da Google Sheets...')
risposta = gas_get({'token': TOKEN, 'azione': 'leggi', 'foglio': 'PushSub'})
if risposta is None:
    print('❌ Impossibile contattare Google Sheets dopo 4 tentativi.')
    sys.exit(1)
subs = risposta.get('dati', [])
print(f'   → {len(subs)} iscrizioni trovate')

if not subs:
    print('⚠️  Nessuna giocatrice iscritta. Le ragazze devono aprire l\'app e toccare "Attiva".')
    sys.exit(0)

# ── Invio push ──────────────────────────────────────────────────────────────

ok = 0
ko = 0

for sub in subs:
    athlete_id = str(sub.get('ID_Giocatrice', sub.get('id_giocatrice', '')))
    endpoint   = sub.get('Endpoint',  sub.get('endpoint', ''))
    p256dh     = sub.get('P256dh',    sub.get('p256dh', ''))
    auth       = sub.get('Auth',      sub.get('auth', ''))

    if not endpoint:
        print(f'   ⚠️  ID {athlete_id}: subscription incompleta, skip')
        continue

    payload = json.dumps({
        'title': NOTIFICA_TITOLO,
        'body':  NOTIFICA_TESTO,
        'url':   f'{APP_URL}?wellness=1&id={athlete_id}',
        'id':    athlete_id
    })

    try:
        webpush(
            subscription_info={
                'endpoint': endpoint,
                'keys': {'p256dh': p256dh, 'auth': auth}
            },
            data=payload,
            vapid_private_key=VAPID_PRIVATE_KEY,
            vapid_claims=VAPID_CLAIMS
        )
        print(f'   ✅ ID {athlete_id}: push inviato')
        ok += 1
    except WebPushException as ex:
        # 410 Gone = subscription scaduta, rimuovere dal db
        status = getattr(ex.response, 'status_code', None) if ex.response else None
        if status == 410:
            print(f'   ⚠️  ID {athlete_id}: subscription scaduta (410) — la ragazza deve riattivare nell\'app')
        else:
            print(f'   ❌ ID {athlete_id}: {ex}')
        ko += 1
    except Exception as ex:
        print(f'   ❌ ID {athlete_id}: {ex}')
        ko += 1

print(f'\n✅ Completato: {ok} inviati, {ko} errori')
