"""
sollecito_wellness_automatico.py — Sollecito privato automatico via WhatsApp alle atlete ritardatarie.
Verifica su Google Sheets chi ha compilato il Wellness di oggi.
Invia un messaggio WhatsApp privato ESCLUSIVAMENTE a chi non ha ancora compilato.
Mittente: Marsala Volley — Staff Tecnico (SIM del modem: +39 350 083 0803)
Supporto bilingue: Italiano per le atlete italiane, Inglese per Anja (#4) e Nelly (#14).
"""

import os
import sys
import json
import time
import requests
from datetime import datetime

sys.stdout.reconfigure(encoding='utf-8')

# ==============================================================================
# INTERRUTTORE DI SICUREZZA (MASTER SWITCH)
# ATTIVO ONLINE - Servizio a regime
# ==============================================================================
SISTEMA_ATTIVO = True 

GREEN_API_INSTANCE = (os.environ.get("GREEN_API_INSTANCE") or "710522726817").strip()
GREEN_API_TOKEN    = (os.environ.get("GREEN_API_TOKEN") or "6bc94d387d5742a3ad17e1225270479a67d4debd7dfa4863ab").strip()

GAS_URL = 'https://script.google.com/macros/s/AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec'
TOKEN   = os.environ.get('APP_TOKEN') or 'mv26-prd-3xF7wNqK'

BASE_APP_URL = 'https://pamangiapane-lgtm.github.io/schede-allenamento/'

ROSTER = [
    {"id": 99, "name": "Paulo Mangiapane"},
    {"id": 1, "name": "Veronica Allasia"},
    {"id": 2, "name": "Maria Marcuzzi"},
    {"id": 3, "name": "Victoria Sassolini"},
    {"id": 4, "name": "Anja Asonja"},
    {"id": 5, "name": "Chiara Lo Dico"},
    {"id": 6, "name": "Gaia Biondi"},
    {"id": 7, "name": "Elisa Bole"},
    {"id": 8, "name": "Federica Nonnati"},
    {"id": 9, "name": "Sara Dodi"},
    {"id": 11, "name": "Luna Cicola"},
    {"id": 12, "name": "Erin Grippo"},
    {"id": 13, "name": "Giulia Caserta"},
    {"id": 14, "name": "Nelly Adamczewska"}
]

RUBRICA_FILE = os.path.join(os.path.dirname(__file__), 'rubrica_atlete.json')
LOG_FILE = os.path.join(os.path.dirname(__file__), 'solleciti_inviati.log')

def attendi_rete(timeout_sec=60):
    """Attende che la connessione Wi-Fi o internet sia attiva (es. risveglio da sospensione)."""
    start = time.time()
    while time.time() - start < timeout_sec:
        try:
            r = requests.get("https://api.green-api.com", timeout=4)
            if r.status_code < 500:
                return True
        except Exception:
            pass
        print("[Rete] In attesa che la connessione internet sia attiva...")
        time.sleep(4)
    return False

def carica_rubrica():
    if os.path.exists(RUBRICA_FILE):
        with open(RUBRICA_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}

def chi_ha_compilato_oggi():
    try:
        r = requests.get(GAS_URL, params={'token': TOKEN, 'azione': 'leggi', 'foglio': 'Wellness'}, timeout=20)
        dati = r.json().get('dati', []) if r.status_code == 200 else []
    except Exception as e:
        print(f"[!] Errore lettura Wellness da Google Sheets: {e}")
        return set()

    today_str = datetime.now().strftime('%Y-%m-%d')
    compilati = set()
    for row in dati:
        aid = row.get('ID_Giocatrice')
        rdate = str(row.get('Data') or '')[:10]
        ts = str(row.get('Timestamp') or '')
        if (rdate == today_str or ts.startswith(today_str)) and aid:
            try:
                compilati.add(int(aid))
            except:
                pass
    return compilati

def gia_sollecitata_oggi(aid):
    today_str = datetime.now().strftime('%Y-%m-%d')
    key = f"{today_str}_{aid}"
    if os.path.exists(LOG_FILE):
        with open(LOG_FILE, 'r', encoding='utf-8') as f:
            lines = f.read().splitlines()
            return key in lines
    return False

def registra_sollecito(aid):
    today_str = datetime.now().strftime('%Y-%m-%d')
    key = f"{today_str}_{aid}"
    with open(LOG_FILE, 'a', encoding='utf-8') as f:
        f.write(key + '\n')

def pulisci_numero(num):
    s = ''.join(c for c in str(num) if c.isdigit())
    if not s:
        return ''
    if not s.startswith('39') and len(s) == 10:
        s = '39' + s
    return s

def invia_messaggio_whatsapp_con_retry(tel, messaggio, max_tentativi=3):
    url = f"https://api.green-api.com/waInstance{GREEN_API_INSTANCE}/sendMessage/{GREEN_API_TOKEN}"
    chat_id = f"{tel}@c.us"
    payload = {
        "chatId": chat_id,
        "message": messaggio,
        "linkPreview": True
    }
    
    for tentativo in range(1, max_tentativi + 1):
        try:
            res = requests.post(url, json=payload, timeout=25)
            if res.ok:
                return True, res.status_code, res.text
            else:
                print(f"      [Tentativo {tentativo}/{max_tentativi}] Rifiutato ({res.status_code}): {res.text}")
                time.sleep(3)
        except Exception as e:
            print(f"      [Tentativo {tentativo}/{max_tentativi}] Errore rete: {e}")
            time.sleep(3)
            
    return False, 0, "Tutti i tentativi falliti"

def main():
    print(f"=== MARSALA VOLLEY — CHECK & SOLLECITO PRIVATO WELLNESS ({datetime.now().strftime('%d/%m/%Y %H:%M')}) ===")
    
    # 1. Attesa rete
    if not attendi_rete(timeout_sec=45):
        print("[!] Rete internet non raggiungibile. Operazione annullata.")
        return

    rubrica = carica_rubrica()

    # Modalità Test Mirato
    target_ids = None
    for arg in sys.argv:
        if arg.startswith('--target-ids='):
            target_ids = [int(x.strip()) for x in arg.split('=')[1].split(',') if x.strip().isdigit()]

    is_test = target_ids is not None
    is_live = SISTEMA_ATTIVO or ('--live' in sys.argv) or is_test

    if not is_live:
        print("⏸️ [STANDBY DI SICUREZZA] Il sistema è in attesa di autorizzazione.")
        print("   Usa --target-ids=99,12 per testare solo atleti specifici.")
        print("   Usa --live per l'invio globale.")
        return

    compilati = chi_ha_compilato_oggi()
    print(f"📋 Giocatrici che hanno GIÀ compilato oggi ({len(compilati)}/13): {sorted(list(compilati))}")

    if target_ids:
        candidati = [a for a in ROSTER if a['id'] in target_ids]
        print(f"🎯 Modalità Test Mirato su ID: {target_ids}")
    else:
        candidati = [a for a in ROSTER if a['id'] != 99]

    mancanti = [a for a in candidati if a['id'] not in compilati or target_ids]
    print(f"⏳ Destinatari sollecito ({len(mancanti)}): {[a['name'] for a in mancanti]}")

    if not mancanti:
        print("🎉 Nessun destinatario da sollecitare.")
        return

    force = '--force' in sys.argv or is_test
    dry_run = '--dry-run' in sys.argv
    inviati = 0
    errori = 0

    for a in mancanti:
        aid = a['id']
        nome = a['name'].split()[0]
        
        if not force and gia_sollecitata_oggi(aid):
            print(f"   ℹ️ #{aid:02d} {a['name']}: già sollecitata oggi, salto.")
            continue

        dati_rubrica = rubrica.get(str(aid), {})
        raw_tel = dati_rubrica.get('tel', '')
        tel = pulisci_numero(raw_tel)

        if not tel:
            print(f"   ⚠️ #{aid:02d} {a['name']}: numero di telefono non presente in rubrica. Salto.")
            continue

        target_url = f"{BASE_APP_URL}?id={aid}&wellness=1"
        
        # Testo bilingue
        if aid in [4, 14]:
            testo = f"""🏐 *Marsala Volley — Technical Staff* 🌅

Hi {nome}!
Your Morning Wellness questionnaire for today's session is still pending.

Please take 20 seconds to complete it before training:
👉 {target_url}

Thank you for your cooperation! 💪"""
        else:
            testo = f"""🏐 *Marsala Volley — Staff Tecnico* 🌅

Ciao {nome}!
Risulta mancante la compilazione del tuo questionario Wellness per la seduta odierna.

Ti chiediamo di compilarlo adesso prima dell'allenamento (ci vogliono 20 secondi):
👉 {target_url}

Grazie per la collaborazione! 💪"""

        if dry_run:
            print(f"   [DRY-RUN] #{aid:02d} {a['name']} ({tel}) -> messaggio pronto (non inviato)")
            inviati += 1
            continue

        print(f"   🚀 Invio sollecito WhatsApp a #{aid:02d} {a['name']} ({tel})...")
        ok, status, resp = invia_messaggio_whatsapp_con_retry(tel, testo)
        if ok:
            print(f"   ✅ #{aid:02d} {a['name']} ({tel}): CONSEGNATO con successo!")
            if not is_test:
                registra_sollecito(aid)
            inviati += 1
            time.sleep(2)
        else:
            print(f"   ❌ #{aid:02d} {a['name']} ({tel}): ERRORE ({status}): {resp}")
            errori += 1

    print(f"\n🎯 Riepilogo: {inviati} consegnati, {errori} errori.")

if __name__ == '__main__':
    main()
