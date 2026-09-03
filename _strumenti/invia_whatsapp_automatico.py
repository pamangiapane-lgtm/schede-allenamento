import os, sys, requests, json
from datetime import datetime
sys.path.append(os.path.dirname(__file__))
from genera_infografica_report import crea_infografica

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
                'caption': '' # Nessun testo o link: solo infografica HD con roster e KPI
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
            print(f"[Telegram] Invio immagine completato: {res.status_code}")
    except Exception as e:
        print(f"[Telegram] Errore invio immagine: {e}")

def gia_inviato_oggi():
    """Controlla se l'infografica è già stata inviata oggi al gruppo per evitare duplicati."""
    if not GREEN_API_INSTANCE or not GREEN_API_TOKEN or not WHATSAPP_GROUP_ID:
        return False
    url_history = f"https://api.green-api.com/waInstance{GREEN_API_INSTANCE}/getChatHistory/{GREEN_API_TOKEN}"
    try:
        res = requests.post(url_history, json={'chatId': WHATSAPP_GROUP_ID, 'count': 10}, timeout=20)
        if not res.ok:
            return False
        messages = res.json()
        today_date = datetime.now().date()
        for msg in messages:
            if msg.get('type') == 'outgoing' and msg.get('typeMessage') in ['imageMessage', 'documentMessage']:
                ts = msg.get('timestamp')
                if ts:
                    msg_date = datetime.fromtimestamp(ts).date()
                    if msg_date == today_date:
                        return True
        return False
    except Exception as e:
        print(f"[Anti-Duplicato] Controllo cronologia non riuscito: {e}")
        return False

def main():
    force = '--force' in sys.argv
    if not force and gia_inviato_oggi():
        print(f"[WA] Report infografica di oggi ({datetime.now().strftime('%d/%m/%Y')}) già presente nel gruppo {WHATSAPP_GROUP_ID}.")
        print("[WA] Nessun duplicato inviato. (Usa --force per forzare l'invio).")
        return

    print("[1/2] Generazione infografica HD Wellness...")
    img_path = "report_wellness_oggi.png"
    crea_infografica(img_path)
    
    print(f"[2/2] Invio automatico infografica a Medical Conditions ({WHATSAPP_GROUP_ID})...")
    # Invio esclusivamente del file immagine (nessun testo o link al pannello coach)
    invia_immagine_whatsapp(img_path)
    invia_immagine_telegram(img_path)
        
    print("Processo completato con successo!")

if __name__ == '__main__':
    main()


