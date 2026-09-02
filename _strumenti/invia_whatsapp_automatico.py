import os, sys, requests, json
from datetime import datetime
sys.path.append(os.path.dirname(__file__))
from genera_infografica_report import crea_infografica

GREEN_API_INSTANCE = os.environ.get("GREEN_API_INSTANCE", "710522726817").strip()
GREEN_API_TOKEN    = os.environ.get("GREEN_API_TOKEN", "6bc94d387d5742a3ad17e1225270479a67d4debd7dfa4863ab").strip()
WHATSAPP_GROUP_ID  = os.environ.get("WHATSAPP_GROUP_ID", "120363408483842576@g.us").strip() # Medical Conditions

TELEGRAM_BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "").strip()
TELEGRAM_CHAT_ID   = os.environ.get("TELEGRAM_CHAT_ID", "").strip()

def invia_immagine_whatsapp(img_path):
    if not GREEN_API_INSTANCE or not GREEN_API_TOKEN or not WHATSAPP_GROUP_ID:
        print("[!] Parametri GREEN-API non impostati.")
        print(f"[!] Infografica salvata localmente in: {img_path}")
        return False

    url_file = f"https://api.green-api.com/waInstance{GREEN_API_INSTANCE}/sendFileByUpload/{GREEN_API_TOKEN}"
    
    try:
        with open(img_path, 'rb') as img_f:
            files = {'file': (os.path.basename(img_path), img_f, 'image/png')}
            payload = {
                'chatId': WHATSAPP_GROUP_ID,
                'caption': '' # Nessun testo di accompagnamento: solo il file immagine completo
            }
            res = requests.post(url_file, data=payload, files=files, timeout=40)
            print(f"[WA] Invio infografica a Medical Conditions completato: {res.status_code} - {res.text}")
            return res.ok
    except Exception as e:
        print(f"[WA] Errore invio immagine: {e}")
        return False

def invia_immagine_telegram(img_path):
    if not TELEGRAM_BOT_TOKEN or not TELEGRAM_CHAT_ID:
        return
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendPhoto"
    try:
        with open(img_path, 'rb') as photo:
            res = requests.post(url, data={'chat_id': TELEGRAM_CHAT_ID}, files={'photo': photo}, timeout=25)
            print(f"[Telegram] Invio completato: {res.status_code}")
    except Exception as e:
        print(f"[Telegram] Errore invio: {e}")

def main():
    print("[1/2] Generazione infografica HD Wellness...")
    img_path = "report_wellness_oggi.png"
    crea_infografica(img_path)
    
    print(f"[2/2] Invio automatico infografica a Medical Conditions ({WHATSAPP_GROUP_ID})...")
    invia_immagine_whatsapp(img_path)
    invia_immagine_telegram(img_path)
    print("Processo completato con successo!")

if __name__ == '__main__':
    main()
