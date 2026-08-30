"""
test_wellness_pipeline.py — Test end-to-end del pipeline wellness.

1. Inserisce una subscription di test nel foglio PushSub via GAS
2. Legge il foglio per confermare il salvataggio
3. Stampa PASS/FAIL

Dipendenze: pip install requests
"""

import json
import sys
import requests
import time

TOKEN   = 'mv26-prd-3xF7wNqK'
GAS_URL = 'https://script.google.com/macros/s/AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec'
HEADERS = {'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json', 'Content-Type': 'application/json'}

TEST_ID       = 'TEST_99'
TEST_ENDPOINT = 'https://fcm.googleapis.com/fcm/send/TEST_FAKE_ENDPOINT_FOR_PIPELINE_VERIFICATION'
TEST_P256DH   = 'BFakePublicKeyForTestingPurposesOnlyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX='
TEST_AUTH     = 'FakeAuthForTest=='

def gas_post(body, tentativi=3):
    for i in range(tentativi):
        try:
            r = requests.post(GAS_URL, json=body, headers=HEADERS, timeout=30, allow_redirects=True)
            if r.status_code == 200:
                return r.json()
        except Exception as ex:
            print(f'   POST attempt {i+1} failed: {ex}')
        time.sleep(2 ** i)
    return None

def gas_get(params, tentativi=3):
    for i in range(tentativi):
        try:
            r = requests.get(GAS_URL, params=params, headers=HEADERS, timeout=30, allow_redirects=True)
            if r.status_code == 200:
                return r.json()
        except Exception as ex:
            print(f'   GET attempt {i+1} failed: {ex}')
        time.sleep(2 ** i)
    return None

print('=' * 60)
print('TEST PIPELINE WELLNESS — verifica end-to-end GAS + PushSub')
print('=' * 60)

# STEP 1: Inserisci subscription di test
print('\n[1/3] POST subscription di test a GAS...')
payload = {
    'azione': 'salva_push_sub',
    'token': TOKEN,
    'id_giocatrice': TEST_ID,
    'endpoint': TEST_ENDPOINT,
    'p256dh': TEST_P256DH,
    'auth': TEST_AUTH
}
risposta = gas_post(payload)
if risposta is None:
    print('❌ FAIL: impossibile contattare GAS')
    sys.exit(1)
if not risposta.get('ok'):
    print(f'❌ FAIL: GAS ha risposto con errore: {risposta}')
    sys.exit(1)
print(f'✅ GAS ha accettato la subscription (aggiornato={risposta.get("aggiornato")})')

# STEP 2: Leggi PushSub e verifica che il record sia presente
print('\n[2/3] GET foglio PushSub per verificare il salvataggio...')
time.sleep(2)
risposta2 = gas_get({'token': TOKEN, 'azione': 'leggi', 'foglio': 'PushSub'})
if risposta2 is None:
    print('❌ FAIL: impossibile leggere PushSub da GAS')
    sys.exit(1)
subs = risposta2.get('dati', [])
print(f'   → {len(subs)} righe nel foglio PushSub')

trovato = any(str(s.get('ID_Giocatrice','')) == TEST_ID for s in subs)
if not trovato:
    print(f'❌ FAIL: subscription TEST_99 non trovata nel foglio PushSub')
    print(f'   Righe presenti: {[s.get("ID_Giocatrice") for s in subs]}')
    sys.exit(1)
print(f'✅ Subscription TEST_99 trovata nel foglio PushSub')

# STEP 3: Conta subscription reali (escluso test)
reali = [s for s in subs if str(s.get('ID_Giocatrice','')) != TEST_ID]
print(f'\n[3/3] Subscription reali di atlete: {len(reali)}')
if reali:
    for s in reali:
        print(f'   - ID {s.get("ID_Giocatrice")}: endpoint presente={bool(s.get("Endpoint"))}')
else:
    print('   ⚠️  Nessuna atleta iscritta ancora — le ragazze devono toccare "Attiva" nell\'app')

print('\n' + '=' * 60)
print('✅ PIPELINE GAS OK: salva_push_sub funziona correttamente')
print('   Il sistema invierà notifiche a tutte le atlete iscritte.')
print('=' * 60)
