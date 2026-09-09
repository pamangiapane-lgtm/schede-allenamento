"""
keepalive_whatsapp.py — Heartbeat e Keep-Alive per sessione WhatsApp Web (Playwright Locale).
Mantiene attiva la connessione WebSocket con lo smartphone (+39 350 083 0803),
riappropria la sessione cliccando automaticamente 'Usa qui' se aperta altrove,
e avvisa tempestivamente tramite Notifica Windows Desktop se rileva disconnessione (QR code).
"""

import os
import sys
import json
import time
import subprocess
from datetime import datetime
from playwright.sync_api import sync_playwright

if sys.stdout is None:
    sys.stdout = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'keepalive_wa.log'), 'a', encoding='utf-8')
    sys.stderr = sys.stdout
else:
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROFILE_DIR = os.path.join(SCRIPT_DIR, 'wa_web_profile')
STATUS_FILE = os.path.join(SCRIPT_DIR, 'wa_status.json')
QR_SHOT_FILE = os.path.join(SCRIPT_DIR, 'ultimo_qr_richiesto.png')
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"

def invia_notifica_windows(titolo, messaggio):
    """Invia notifica nativa Windows Toast."""
    try:
        ps_cmd = f"""
        [Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] | Out-Null
        $template = [Windows.UI.Notifications.ToastNotificationManager]::GetTemplateContent([Windows.UI.Notifications.ToastTemplateType]::ToastText02)
        $textNodes = $template.GetElementsByTagName('text')
        $textNodes.Item(0).AppendChild($template.CreateTextNode('{titolo}')) | Out-Null
        $textNodes.Item(1).AppendChild($template.CreateTextNode('{messaggio}')) | Out-Null
        $toast = [Windows.UI.Notifications.ToastNotification]::new($template)
        $notifier = [Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier('Marsala Volley Staff')
        $notifier.Show($toast)
        """
        subprocess.run(["powershell", "-NoProfile", "-Command", ps_cmd], capture_output=True, timeout=6)
    except Exception as e:
        print(f"[Notifica] Errore invio notifica: {e}")

def pulisci_lock_orfani():
    """Elimina i file di lock di Chromium se una sessione precedente si è chiusa in modo anomalo."""
    for lock_name in ['SingletonLock', 'SingletonCookie', 'SingletonSocket']:
        lock_path = os.path.join(PROFILE_DIR, lock_name)
        if os.path.exists(lock_path):
            try:
                os.remove(lock_path)
                print(f"[Pulizia] Rimosso lock orfano: {lock_name}")
            except Exception as e:
                print(f"[Attenzione] Impossibile rimuovere {lock_name}: {e}")

def esegui_keepalive():
    print("=" * 65)
    print(f"💓 MARSALA VOLLEY — WHATSAPP WEB KEEPALIVE & HEALTHCHECK")
    print(f"Data/Ora: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}")
    print("=" * 65)

    pulisci_lock_orfani()
    os.makedirs(PROFILE_DIR, exist_ok=True)

    status_data = {
        "timestamp": datetime.now().isoformat(),
        "date_readable": datetime.now().strftime('%d/%m/%Y %H:%M'),
        "status": "UNKNOWN",
        "detail": ""
    }

    with sync_playwright() as p:
        try:
            ctx = p.chromium.launch_persistent_context(
                user_data_dir=PROFILE_DIR,
                headless=True,
                user_agent=USER_AGENT,
                viewport={'width': 1200, 'height': 850},
                args=[
                    '--disable-blink-features=AutomationControlled',
                    '--no-sandbox'
                ]
            )
            page = ctx.pages[0] if ctx.pages else ctx.new_page()
            print("🌐 Connessione a WhatsApp Web...")
            page.goto("https://web.whatsapp.com", wait_until='domcontentloaded')

            start_t = time.time()
            connected = False
            qr_detected = False

            while time.time() - start_t < 40:
                # 1. Gestione popup 'Usa qui' (se aperto su altro tab/browser)
                try:
                    usa_qui = page.locator('button:has-text("Usa qui"), div[role="button"]:has-text("Usa qui"), button:has-text("Use here")').first
                    if usa_qui.is_visible(timeout=500):
                        print("⚡ Rilevato pulsante 'Usa qui'. Clicco per riattivare la sessione su questo profilo...")
                        usa_qui.click()
                        time.sleep(2)
                except Exception:
                    pass

                # 2. Gestione popup 'Riprova'
                try:
                    riprova = page.locator('button:has-text("Riprova"), button:has-text("Retry")').first
                    if riprova.is_visible(timeout=500):
                        print("🔄 Rilevato pulsante 'Riprova'. Clicco...")
                        riprova.click()
                        time.sleep(2)
                except Exception:
                    pass

                # 3. Verifica sessione attiva (lista chat o barra input)
                try:
                    pane = page.locator('div[id="pane-side"], div[contenteditable="true"]').first
                    if pane.is_visible(timeout=1000):
                        connected = True
                        break
                except Exception:
                    pass

                # 4. Verifica se mostra QR Code
                try:
                    qr = page.locator('canvas, div[data-ref]').first
                    if qr.is_visible(timeout=1000):
                        qr_detected = True
                except Exception:
                    pass

                time.sleep(1)

            if connected:
                print("✅ STATUS: WhatsApp Web è ATTIVO e CONNESSO! Handshake completato.")
                status_data["status"] = "CONNECTED"
                status_data["detail"] = "Sessione attiva e sincronizzata con successo."
            elif qr_detected:
                print("❌ STATUS: DISCONNESSO — Rilevato QR Code!")
                try:
                    page.screenshot(path=QR_SHOT_FILE)
                    print(f"📸 Screenshot QR Code salvato in: {QR_SHOT_FILE}")
                except Exception:
                    pass
                status_data["status"] = "DISCONNECTED"
                status_data["detail"] = "Disconnesso. Necessaria scansione QR Code."
                invia_notifica_windows(
                    "⚠️ WhatsApp Web Disconnesso!",
                    "La sessione WhatsApp Business è scaduta. Scansiona il QR Code dal telefono per garantire i solleciti."
                )
            else:
                print("⚠️ STATUS: TIMEOUT — Nessuna conferma né QR Code entro 40s.")
                status_data["status"] = "TIMEOUT"
                status_data["detail"] = "Timeout caricamento pagina WhatsApp Web."

            ctx.close()

        except Exception as e:
            print(f"❌ Errore durante keepalive: {e}")
            status_data["status"] = "ERROR"
            status_data["detail"] = str(e)

    # Scrivi lo stato su wa_status.json
    try:
        with open(STATUS_FILE, 'w', encoding='utf-8') as f:
            json.dump(status_data, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print(f"[!] Errore scrittura wa_status.json: {e}")

    print("🔒 Keep-Alive completato.\n")
    return status_data["status"]

if __name__ == '__main__':
    esegui_keepalive()
