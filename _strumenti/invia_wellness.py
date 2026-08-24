"""
invia_wellness.py — Invia notifica push wellness a tutte le giocatrici iscritte.

Dipendenze (installa una volta):
    pip install pywebpush requests

Utilizzo:
    python _strumenti/invia_wellness.py

Programmazione automatica (Windows Task Scheduler):
    - Programma: python
    - Argomenti: C:\percorso\schede-allenamento\_strumenti\invia_wellness.py
    - Avvia in: C:\percorso\schede-allenamento
    - Attivazione: ogni giorno alle 08:00
"""

import json
import sys
import requests
from pywebpush import webpush, WebPushException

# ── Configurazione ──────────────────────────────────────────────────────────

VAPID_PRIVATE_KEY = 'uAbznecLD_rYJcda0RuvKCELWNkbmeHtRfbTr96D2C0'
VAPID_CLAIMS      = {'sub': 'mailto:pamangiapane@gmail.com'}

GAS_URL = 'https://script.google.com/macros/s/AKfycbyi5wD4IZjetmMb2dXl41r4ubpWJd9TOd2Zr5m0NOMJOBZH2adJyL21IMl8yAdXafsz/exec'
TOKEN   = 'mv26-prd-3xF7wNqK'

APP_URL = 'https://pamangiapane-lgtm.github.io/schede-allenamento/scheda.html'

NOTIFICA_TITOLO = '🏐 Marsala Volley — Wellness'
NOTIFICA_TESTO  = 'Buongiorno! Compila il questionario di oggi 🌅'

# ── Lettura subscriptions da Google Sheets ──────────────────────────────────

print('📋 Caricamento iscrizioni push da Google Sheets...')
try:
    r = requests.get(GAS_URL, params={'token': TOKEN, 'azione': 'leggi', 'foglio': 'PushSub'}, timeout=20)
    r.raise_for_status()
    subs = r.json().get('dati', [])
    print(f'   → {len(subs)} iscrizioni trovate')
except Exception as ex:
    print(f'❌ Errore lettura Sheets: {ex}')
    sys.exit(1)

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
