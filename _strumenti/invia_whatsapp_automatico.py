import os, sys, requests, json
from datetime import datetime
sys.path.append(os.path.dirname(__file__))
from genera_infografica_report import crea_infografica
from invia_report_whatsapp import compila_report

GREEN_API_INSTANCE = (os.environ.get("GREEN_API_INSTANCE") or "710522726817").strip()
GREEN_API_TOKEN    = (os.environ.get("GREEN_API_TOKEN") or "6bc94d387d5742a3ad17e1225270479a67d4debd7dfa4863ab").strip()
WHATSAPP_GROUP_ID  = (os.environ.get("WHATSAPP_GROUP_ID") or "120363408483842576@g.us").strip() # Medical Conditions

TELEGRAM_BOT_TOKEN = (os.environ.get("TELEGRAM_BOT_TOKEN") or "").strip()
TELEGRAM_CHAT_ID   = (os.environ.get("TELEGRAM_CHAT_ID") or "").strip()

def invia_immagine_whatsapp(img_path):
    if not GREEN_API_INSTANCE or not GREEN_API_TOKEN or not WHATSAPP_GROUP_ID:
        print("[!] Parametri GREEN-API non impostati per invio immagine.")
        print(f"[!] Infografica salvata localmente in: {img_path}")
        return False

    url_file = f"https://api.green-api.com/waInstance{GREEN_API_INSTANCE}/sendFileByUpload/{GREEN_API_TOKEN}"
    
    try:
        with open(img_path, 'rb') as img_f:
            files = {'file': (os.path.basename(img_path), img_f, 'image/png')}
            payload = {
                'chatId': WHATSAPP_GROUP_ID,
                'caption': '' # L'immagine va pulita in alta risoluzione
            }
            res = requests.post(url_file, data=payload, files=files, timeout=40)
            print(f"[WA] Invio infografica a Medical Conditions completato: {res.status_code} - {res.text}")
            return res.ok
    except Exception as e:
        print(f"[WA] Errore invio immagine: {e}")
        return False

def invia_messaggio_whatsapp(testo):
    if not GREEN_API_INSTANCE or not GREEN_API_TOKEN or not WHATSAPP_GROUP_ID:
        print("[!] Parametri GREEN-API non impostati per invio messaggio testo.")
        return False

    url_msg = f"https://api.green-api.com/waInstance{GREEN_API_INSTANCE}/sendMessage/{GREEN_API_TOKEN}"
    try:
        payload = {
            'chatId': WHATSAPP_GROUP_ID,
            'message': testo
        }
        res = requests.post(url_msg, json=payload, timeout=30)
        print(f"[WA] Invio testo report a Medical Conditions completato: {res.status_code} - {res.text}")
        return res.ok
    except Exception as e:
        print(f"[WA] Errore invio messaggio testo: {e}")
        return False

def invia_immagine_telegram(img_path):
    if not TELEGRAM_BOT_TOKEN or not TELEGRAM_CHAT_ID:
        return
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendPhoto"
    try:
        with open(img_path, 'rb') as photo:
            res = requests.post(url, data={'chat_id': TELEGRAM_CHAT_ID}, files={'photo': photo}, timeout=25)
            print(f"[Telegram] Invio immagine completato: {res.status_code}")
    except Exception as e:
        print(f"[Telegram] Errore invio immagine: {e}")

def invia_messaggio_telegram(testo):
    if not TELEGRAM_BOT_TOKEN or not TELEGRAM_CHAT_ID:
        return
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    try:
        res = requests.post(url, json={'chat_id': TELEGRAM_CHAT_ID, 'text': testo, 'parse_mode': 'Markdown'}, timeout=25)
        print(f"[Telegram] Invio testo completato: {res.status_code}")
    except Exception as e:
        print(f"[Telegram] Errore invio testo: {e}")

def main():
    print("[1/3] Generazione infografica HD Wellness...")
    img_path = "report_wellness_oggi.png"
    crea_infografica(img_path)
    
    print("[2/3] Compilazione testo report roster wellness...")
    report_text = compila_report()
    
    print(f"[3/3] Invio automatico (Infografica + Testo Roster) a Medical Conditions ({WHATSAPP_GROUP_ID})...")
    # 1. Immagine infografica
    invia_immagine_whatsapp(img_path)
    invia_immagine_telegram(img_path)
    
    # 2. Messaggio di testo dettagliato con roster ed emoji semaforo
    if report_text:
        invia_messaggio_whatsapp(report_text)
        invia_messaggio_telegram(report_text)
        
    print("Processo completato con successo!")

if __name__ == '__main__':
    main()
