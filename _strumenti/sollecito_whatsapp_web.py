"""
sollecito_whatsapp_web.py — Sollecito privato automatico via WhatsApp Web (Playwright Locale).
Zero costi, nessun limite di contatti o tariffe API.
Funziona da PC (anche risvegliandosi dalla sospensione tramite Task Scheduler).
Usa un profilo browser permanente per evitare di richiedere il QR Code ogni volta.
"""

import os
import sys
import json
import time
import urllib.parse
import subprocess
import requests
from datetime import datetime
from playwright.sync_api import sync_playwright

if sys.stdout is None:
    sys.stdout = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'solleciti_esecuzioni.log'), 'a', encoding='utf-8')
    sys.stderr = sys.stdout
else:
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

# ==============================================================================
# CONFIGURAZIONE
# ==============================================================================
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROFILE_DIR = os.path.join(SCRIPT_DIR, 'wa_web_profile')
RUBRICA_FILE = os.path.join(SCRIPT_DIR, 'rubrica_atlete.json')
LOG_FILE = os.path.join(SCRIPT_DIR, 'solleciti_inviati.log')
STATUS_FILE = os.path.join(SCRIPT_DIR, 'wa_status.json')
QR_SHOT_FILE = os.path.join(SCRIPT_DIR, 'ultimo_qr_richiesto.png')
LOCK_FILE = os.path.join(SCRIPT_DIR, 'sollecito.lock')

GAS_URL = 'https://script.google.com/macros/s/AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec'
TOKEN   = os.environ.get('APP_TOKEN') or 'mv26-prd-3xF7wNqK'
BASE_APP_URL = 'https://pamangiapane-lgtm.github.io/schede-allenamento/'

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"

ROSTER = [
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

def attendi_rete(timeout_sec=120):
    """Attende che la connessione internet sia attiva (es. risveglio da sospensione / riapertura schermo)."""
    start = time.time()
    endpoints = ["https://www.google.com", "https://1.1.1.1", "https://api.green-api.com"]
    while time.time() - start < timeout_sec:
        for ep in endpoints:
            try:
                r = requests.get(ep, timeout=3)
                if r.status_code < 500:
                    print(f"[Rete] Connessione internet attiva confermata su {ep}!")
                    return True
            except Exception:
                pass
        print(f"[Rete] In attesa che il Wi-Fi / connessione internet sia attiva... ({int(time.time() - start)}s/{timeout_sec}s)")
        time.sleep(3)
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

def invia_notifica_windows(titolo, messaggio):
    """Invia notifica nativa Windows Toast sul desktop dello staff."""
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

def acquisisci_lock():
    """Garantisce che una sola istanza del bot stia accedendo al profilo WhatsApp Web."""
    if os.path.exists(LOCK_FILE):
        try:
            with open(LOCK_FILE, 'r') as f:
                pid = int(f.read().strip())
            import ctypes
            kernel32 = ctypes.windll.kernel32
            PROCESS_QUERY_INFORMATION = 0x0400
            handle = kernel32.OpenProcess(PROCESS_QUERY_INFORMATION, False, pid)
            if handle != 0:
                kernel32.CloseHandle(handle)
                print(f"[Lock] Un'altra istanza di sollecito è già attiva (PID: {pid}). Operazione terminata per prevenire conflitti.")
                return False
        except Exception:
            pass
    try:
        with open(LOCK_FILE, 'w') as f:
            f.write(str(os.getpid()))
        return True
    except Exception:
        return True

def rilascia_lock():
    try:
        if os.path.exists(LOCK_FILE):
            os.remove(LOCK_FILE)
    except Exception:
        pass

def attendi_e_stabilizza_connessione_wa(page, timeout_sec=65):
    """Attende WhatsApp Web, gestisce 'Usa qui', 'Riprova' e monitora disconnessioni."""
    start_t = time.time()
    print(f"⏳ Stabilizzazione connessione WhatsApp Web (timeout: {timeout_sec}s)...")
    qr_count = 0

    while time.time() - start_t < timeout_sec:
        # 1. Rileva e clicca popup 'Usa qui'
        try:
            usa_qui = page.locator('button:has-text("Usa qui"), div[role="button"]:has-text("Usa qui"), button:has-text("Use here")').first
            if usa_qui.is_visible(timeout=500):
                print("⚡ Rilevato popup 'Usa qui' (sessione aperta altrove). Clicco per riattivare su questo dispositivo...")
                usa_qui.click()
                time.sleep(2)
        except Exception:
            pass

        # 2. Rileva e clicca 'Riprova' / 'Retry'
        try:
            riprova = page.locator('button:has-text("Riprova"), button:has-text("Retry")').first
            if riprova.is_visible(timeout=500):
                print("🔄 Rilevato pulsante 'Riprova'. Clicco...")
                riprova.click()
                time.sleep(2)
        except Exception:
            pass

        # 3. Verifica sessione autenticata (pane-side o input box)
        try:
            pane = page.locator('div[id="pane-side"], div[contenteditable="true"]').first
            if pane.is_visible(timeout=1000):
                print("✅ Connessione a WhatsApp Web stabilita con successo!")
                try:
                    with open(STATUS_FILE, 'w', encoding='utf-8') as f:
                        json.dump({
                            "timestamp": datetime.now().isoformat(),
                            "date_readable": datetime.now().strftime('%d/%m/%Y %H:%M'),
                            "status": "CONNECTED",
                            "detail": "Sessione operativa e pronta all'invio."
                        }, f, indent=2)
                except Exception:
                    pass
                return True
        except Exception:
            pass

        # 4. Verifica se mostra QR Code
        try:
            qr = page.locator('canvas, div[data-ref]').first
            if qr.is_visible(timeout=1000):
                qr_count += 1
                if qr_count >= 8:  # Visibile per più di 12 secondi
                    print("❌ Rilevato QR Code: sessione WhatsApp non collegata o disconnessa!")
                    try:
                        page.screenshot(path=QR_SHOT_FILE)
                        print(f"📸 Screenshot QR salvato in: {QR_SHOT_FILE}")
                    except Exception:
                        pass
                    try:
                        with open(STATUS_FILE, 'w', encoding='utf-8') as f:
                            json.dump({
                                "timestamp": datetime.now().isoformat(),
                                "date_readable": datetime.now().strftime('%d/%m/%Y %H:%M'),
                                "status": "DISCONNECTED",
                                "detail": "Disconnesso. Richiesta scansione QR Code."
                            }, f, indent=2)
                    except Exception:
                        pass
                    invia_notifica_windows(
                        "⚠️ WhatsApp Web Disconnesso",
                        "I solleciti non possono partire. Scansiona il QR Code dal telefono Staff!"
                    )
                    return False
        except Exception:
            pass

        time.sleep(1.5)

    print("⚠️ Timeout stabilizzazione WhatsApp Web.")
    return False

def login_setup():
    """Apre la finestra per inquadrare il QR Code una volta sola e salvare il profilo."""
    print("="*70)
    print("📱 CONFIGURAZIONE INIZIALE WHATSAPP WEB (UNA TANTUM)")
    print("="*70)
    print("Si apre una finestra di Chromium su WhatsApp Web.")
    print("Prendi il telefono con WhatsApp Business (numero Staff +39 350 083 0803):")
    print("  1. Apri WhatsApp Business")
    print("  2. Vai in Impostazioni (o 3 puntini) -> Dispositivi collegati")
    print("  3. Premi 'Collega un dispositivo'")
    print("  4. Inquadra il QR Code visualizzato sullo schermo.")
    print("="*70)

    os.makedirs(PROFILE_DIR, exist_ok=True)
    with sync_playwright() as p:
        browser_context = p.chromium.launch_persistent_context(
            user_data_dir=PROFILE_DIR,
            headless=False,
            user_agent=USER_AGENT,
            viewport={'width': 1200, 'height': 850},
            args=['--disable-blink-features=AutomationControlled']
        )
        page = browser_context.pages[0] if browser_context.pages else browser_context.new_page()
        page.goto("https://web.whatsapp.com")

        print("\n⏳ In attesa della scansione del QR Code (tempo a disposizione: 10 minuti)...")
        
        start_time = time.time()
        logged_in = False
        while time.time() - start_time < 600:
            try:
                # Controlla se il login è avvenuto
                if page.locator('div[id="pane-side"], div[contenteditable="true"]').first.is_visible(timeout=2000):
                    logged_in = True
                    break
            except Exception:
                pass

            # Ricarica automatica del QR Code se scade sullo schermo
            try:
                reload_btn = page.locator('button:has-text("Ricarica"), span[data-icon="refresh"], div[role="button"]:has-text("QR")').first
                if reload_btn.is_visible(timeout=500):
                    reload_btn.click()
                    print("🔄 QR code ricaricato automaticamente per mantenerlo attivo...")
            except Exception:
                pass

            time.sleep(2)

        if logged_in:
            print("\n" + "="*70)
            print("✅ LOGIN EFFETTUATO CON SUCCESSO!")
            print("💾 Profilo WhatsApp Web memorizzato in locale.")
            print("Il bot è ora pronto a funzionare in completa autonomia!")
            print("="*70)
            time.sleep(3)
        else:
            print("⚠️ Tempo scaduto. Rilancia il comando quando sei pronto con il telefono.")

        browser_context.close()

def invia_messaggi(destinatari, dry_run=False):
    """Invia i messaggi WhatsApp tramite il profilo Playwright salvato."""
    if dry_run:
        for a in destinatari:
            print(f"   [DRY-RUN] #{a['id']:02d} {a['name']} ({a['tel']}) -> pronto per invio")
        return len(destinatari), 0

    pulisci_lock_orfani()
    os.makedirs(PROFILE_DIR, exist_ok=True)
    inviati = 0
    errori = 0

    with sync_playwright() as p:
        print("🌐 Avvio browser con profilo WhatsApp Web salvato...")
        browser_context = p.chromium.launch_persistent_context(
            user_data_dir=PROFILE_DIR,
            headless=True,
            user_agent=USER_AGENT,
            viewport={'width': 1200, 'height': 850},
            args=[
                '--disable-blink-features=AutomationControlled',
                '--no-sandbox'
            ]
        )
        page = browser_context.pages[0] if browser_context.pages else browser_context.new_page()
        page.goto("https://web.whatsapp.com", wait_until='domcontentloaded')

        # Verifica con tolleranza, gestione automatica 'Usa qui' e retry
        connesso = attendi_e_stabilizza_connessione_wa(page, timeout_sec=65)
        if not connesso:
            print("🔄 Tentativo di ricarica pagina (retry post-stabilizzazione)...")
            try:
                page.reload(wait_until='domcontentloaded')
                connesso = attendi_e_stabilizza_connessione_wa(page, timeout_sec=35)
            except Exception:
                pass

        if not connesso:
            print("❌ ERRORE CRITICO: Sessione WhatsApp non attiva o non pronta!")
            invia_notifica_windows(
                "❌ Solleciti WhatsApp Falliti",
                "Impossibile collegarsi a WhatsApp Web. Controlla il telefono dello staff (+39 350 083 0803)."
            )
            browser_context.close()
            return 0, len(destinatari)

        for a in destinatari:
            aid = a['id']
            nome = a['name'].split()[0]
            tel = a['tel']
            target_url = f"{BASE_APP_URL}?id={aid}&wellness=1"

            if aid in [4, 14]:
                testo = f"""🏐 Marsala Volley — Technical Staff

Hi {nome}!
Your Morning Wellness questionnaire for today's session is still pending.

Please complete it now:
👉 {target_url}

Thank you for your cooperation! 💪"""
            else:
                testo = f"""🏐 Marsala Volley — Staff Tecnico

Ciao {nome}!
Risulta mancante la compilazione del tuo questionario Wellness per la seduta odierna.

Ti chiediamo di compilarlo adesso:
👉 {target_url}

Grazie per la collaborazione! 💪"""

            encoded_text = urllib.parse.quote(testo)
            chat_url = f"https://web.whatsapp.com/send?phone={tel}&text={encoded_text}"

            print(f"   🚀 Apertura chat con #{aid:02d} {a['name']} ({tel})...")
            try:
                page.goto(chat_url, wait_until='load')
                time.sleep(4)
                
                # Verifica popup numero non valido
                invalid_dialog = page.query_selector('div[data-animate-modal-popup="true"] button')
                if invalid_dialog:
                    btn_text = invalid_dialog.inner_text()
                    if 'OK' in btn_text.upper():
                        print(f"   ⚠️ #{aid:02d} {a['name']} ({tel}): Numero non valido su WhatsApp.")
                        invalid_dialog.click()
                        errori += 1
                        time.sleep(2)
                        continue

                # Cerca pulsante invia o premi Enter
                try:
                    send_btn = page.wait_for_selector('span[data-icon="send"], button[aria-label*="Invia"], button[aria-label*="Send"]', timeout=12000)
                    if send_btn:
                        send_btn.click()
                except Exception:
                    input_box = page.wait_for_selector('div[contenteditable="true"][data-tab="10"]', timeout=4000)
                    if input_box:
                        input_box.press("Enter")

                print(f"   ✅ #{aid:02d} {a['name']} ({tel}): CONSEGNATO con successo!")
                registra_sollecito(aid)
                inviati += 1
                time.sleep(3)
            except Exception as e:
                print(f"   ❌ #{aid:02d} {a['name']} ({tel}): Errore durante l'invio: {e}")
                errori += 1
                time.sleep(2)

        browser_context.close()
        print("🔒 Operazione completata. Browser chiuso.")

    return inviati, errori

def main():
    print(f"=== MARSALA VOLLEY — CHECK & SOLLECITO PRIVATO WELLNESS (PLAYWRIGHT WEB) ===")
    print(f"Data/Ora: {datetime.now().strftime('%d/%m/%Y %H:%M')}\n")

    if '--setup' in sys.argv or '--login' in sys.argv:
        login_setup()
        return

    if not acquisisci_lock():
        return

    try:
        # 1. Attesa rete internet (se risveglio da sospensione)
        if not attendi_rete(timeout_sec=120):
            print("[!] Rete internet non disponibile. Operazione annullata.")
            return

        rubrica = carica_rubrica()

        # Modalità Test Mirato
        target_ids = None
        for arg in sys.argv:
            if arg.startswith('--target-ids='):
                target_ids = [int(x.strip()) for x in arg.split('=')[1].split(',') if x.strip().isdigit()]

        compilati = chi_ha_compilato_oggi()
        print(f"📋 Giocatrici che hanno GIÀ compilato oggi ({len(compilati)}/13): {sorted(list(compilati))}")

        if target_ids:
            candidati = [a for a in ROSTER if a['id'] in target_ids]
            if not candidati and 99 in target_ids:
                candidati = [{"id": 99, "name": "Paulo Mangiapane (Coach)"}]
            print(f"🎯 Modalità Test Mirato su ID: {target_ids}")
        else:
            candidati = [a for a in ROSTER if a['id'] != 99]

        force = '--force' in sys.argv or (target_ids is not None)
        dry_run = '--dry-run' in sys.argv

        destinatari = []
        for a in candidati:
            aid = a['id']
            if not force and aid in compilati:
                continue
            if not force and gia_sollecitata_oggi(aid):
                print(f"   ℹ️ #{aid:02d} {a['name']}: già sollecitata oggi, salto.")
                continue

            raw_tel = rubrica.get(str(aid), {}).get('tel', '')
            tel = pulisci_numero(raw_tel)
            if not tel:
                print(f"   ⚠️ #{aid:02d} {a['name']}: telefono mancante in rubrica.")
                continue

            destinatari.append({
                "id": aid,
                "name": a['name'],
                "tel": tel
            })

        print(f"⏳ Destinatari da sollecitare ({len(destinatari)}): {[d['name'] for d in destinatari]}")
        if not destinatari:
            print("🎉 Nessun messaggio da inviare. Tutte in regola o già avvisate!")
            return

        inviati, errori = invia_messaggi(destinatari, dry_run=dry_run)
        print(f"\n🎯 Riepilogo: {inviati} inviati, {errori} errori.")
    finally:
        rilascia_lock()

if __name__ == '__main__':
    main()
