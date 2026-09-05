"""
invia_promemoria_mattutino.py — Invio automatico del messaggio Wellness del mattino (ore 08:30).
Invia il promemoria con il link universale a tutte le atlete.
"""

import os
import sys
import time
import requests
from datetime import datetime

sys.stdout.reconfigure(encoding='utf-8')

GREEN_API_INSTANCE = (os.environ.get("GREEN_API_INSTANCE") or "710522726817").strip()
GREEN_API_TOKEN    = (os.environ.get("GREEN_API_TOKEN") or "6bc94d387d5742a3ad17e1225270479a67d4debd7dfa4863ab").strip()

TARGET_CHAT_ID = os.environ.get("WELLNESS_CHAT_ID") or ""

MESSAGGIO_WELLNESS = """🏐 *MARSALA VOLLEY — MORNING WELLNESS* 🌅

Buongiorno ragazze! 
Prima di iniziare la giornata o la seduta pesi/allenamento, compilate il vostro Wellness quotidiano (richiede 20 secondi):

👉 https://pamangiapane-lgtm.github.io/schede-allenamento/

ℹ️ _Toccando il link dal vostro telefono, l'app vi riconosce automaticamente e apre subito la vostra scheda personale!_"""

def invia_promemoria(chat_id):
    if not chat_id:
        print("[!] Nessun chat_id specificato. Configura la variabile WELLNESS_CHAT_ID o passa il chatId come argomento.")
        return False

    url = f"https://api.green-api.com/waInstance{GREEN_API_INSTANCE}/sendMessage/{GREEN_API_TOKEN}"
    payload = {
        "chatId": chat_id,
        "message": MESSAGGIO_WELLNESS,
        "linkPreview": True
    }
    
    try:
        res = requests.post(url, json=payload, timeout=25)
        if res.ok:
            print(f"[WA] Promemoria mattutino inviato con successo a {chat_id}: {res.status_code}")
            return True
        else:
            print(f"[!] Errore invio promemoria ({res.status_code}): {res.text}")
            return False
    except Exception as e:
        print(f"[!] Eccezione invio promemoria: {e}")
        return False

if __name__ == '__main__':
    target = sys.argv[1] if len(sys.argv) > 1 else TARGET_CHAT_ID
    if not target:
        print("=== PROMEMORIA MATTUTINO MARSALA VOLLEY ===")
        print("Testo generato:")
        print("--------------------------------------------------")
        print(MESSAGGIO_WELLNESS)
        print("--------------------------------------------------")
        print("Uso: python invia_promemoria_mattutino.py <CHAT_ID>")
    else:
        invia_promemoria(target)
