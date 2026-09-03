import requests, json, sys
from datetime import datetime

GAS_URL = 'https://script.google.com/macros/s/AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec'
TOKEN   = 'mv26-prd-3xF7wNqK'
COACH_KEY = 'mv26-coach-8pL2wK'

def run_audit():
    print("=== AUDIT TEST COMPLETO BACKEND GOOGLE APPS SCRIPT ===")
    print(f"Timestamp: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}\n")
    passed = 0
    total = 8

    # 1. Lettura Giocatrici
    try:
        r = requests.get(f"{GAS_URL}?token={TOKEN}&azione=leggi&foglio=Giocatrici", timeout=15)
        dati = r.json().get('dati', [])
        assert r.status_code == 200 and len(dati) >= 13, f"Trovate {len(dati)} atlete"
        print("  [1/8] PASS: Lettura Anagrafica Giocatrici (13 atlete verificate)")
        passed += 1
    except Exception as e:
        print(f"  [1/8] FAIL: Lettura Giocatrici ({e})")

    # 2. Lettura Wellness
    try:
        r = requests.get(f"{GAS_URL}?token={TOKEN}&azione=leggi&foglio=Wellness", timeout=15)
        assert r.status_code == 200 and r.json().get('ok') == True, r.text
        print("  [2/8] PASS: Lettura Database Wellness")
        passed += 1
    except Exception as e:
        print(f"  [2/8] FAIL: Lettura Wellness ({e})")

    # 3. Lettura Progressi
    try:
        r = requests.get(f"{GAS_URL}?token={TOKEN}&azione=leggi&foglio=Progressi", timeout=15)
        assert r.status_code == 200 and r.json().get('ok') == True, r.text
        print("  [3/8] PASS: Lettura Database Progressi (Carichi/1RM)")
        passed += 1
    except Exception as e:
        print(f"  [3/8] FAIL: Lettura Progressi ({e})")

    # 4. Scrittura Log Wellness
    try:
        payload = {
            'token': TOKEN,
            'azione': 'log_wellness',
            'id_giocatrice': 99,
            'data': datetime.now().strftime('%Y-%m-%d'),
            'qualita_sonno': 8,
            'fatica': 7,
            'disponibilita': 9,
            'dolori': 2,
            'stress': 2,
            'note': 'Audit Test'
        }
        r = requests.post(GAS_URL, json=payload, timeout=20)
        assert r.status_code == 200 and r.json().get('ok') == True, r.text
        print("  [4/8] PASS: Invio e Registrazione Morning Wellness (Atleta)")
        passed += 1
    except Exception as e:
        print(f"  [4/8] FAIL: Scrittura Wellness ({e})")

    # 5. Scrittura Log Progressi
    try:
        payload = {
            'token': TOKEN,
            'azione': 'log_progressi',
            'id_giocatrice': 99,
            'n_seduta': 'TEST',
            'esercizio': 'Squat Audit',
            'data': datetime.now().strftime('%Y-%m-%d'),
            'valore': '80kg x 5',
            'note': 'Test campo',
            'kg_usati': '80',
            'reps_fatte': '5',
            'rm_stimato': '93'
        }
        r = requests.post(GAS_URL, json=payload, timeout=20)
        assert r.status_code == 200 and r.json().get('ok') == True, r.text
        print("  [5/8] PASS: Registrazione Carico & Stima 1RM (In Campo)")
        passed += 1
    except Exception as e:
        print(f"  [5/8] FAIL: Scrittura Progressi ({e})")

    # 6. Sottoscrizione Push
    try:
        r = requests.get(f"{GAS_URL}?token={TOKEN}&azione=salva_push_sub&id_giocatrice=99&endpoint=https://test.audit/coach&p256dh=k&auth=a", timeout=15)
        assert r.status_code == 200 and r.json().get('ok') == True, r.text
        print("  [6/8] PASS: Registrazione Notifiche Push (PushSub)")
        passed += 1
    except Exception as e:
        print(f"  [6/8] FAIL: Sottoscrizione Push ({e})")

    # 7. Dashboard Coach Summary
    try:
        r = requests.get(f"{GAS_URL}?token={TOKEN}&azione=dashboard_summary", timeout=20)
        assert r.status_code == 200 and r.json().get('ok') == True, r.text
        print("  [7/8] PASS: Dashboard Coach Summary (ACWR & Medie)")
        passed += 1
    except Exception as e:
        print(f"  [7/8] FAIL: Dashboard Summary ({e})")

    # 8. Note Coach
    try:
        payload = {
            'token': TOKEN,
            'coach_key': COACH_KEY,
            'azione': 'scrivi_nota_coach',
            'id_giocatrice': '99',
            'tipo': 'tecnica',
            'testo': 'Nota test audit'
        }
        r1 = requests.post(GAS_URL, json=payload, timeout=15)
        assert r1.status_code == 200 and r1.json().get('ok') == True
        ts = r1.json().get('timestamp')
        r2 = requests.post(GAS_URL, json={'token': TOKEN, 'coach_key': COACH_KEY, 'azione': 'elimina_nota_coach', 'timestamp': ts}, timeout=15)
        assert r2.status_code == 200 and r2.json().get('ok') == True
        print("  [8/8] PASS: Gestione Note Coach (Scrittura & Cancellazione)")
        passed += 1
    except Exception as e:
        print(f"  [8/8] FAIL: Gestione Note Coach ({e})")

    print(f"\nRISULTATO: {passed}/{total} test superati.")
    return passed == total

if __name__ == '__main__':
    sys.exit(0 if run_audit() else 1)
