"""
collega_whatsapp_web.py — Avvia la sessione WhatsApp Web, cattura il QR Code sempre aggiornato
e attende che l'utente effettui la scansione dal telefono.
"""

import os
import sys
import time
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROFILE_DIR = os.path.join(SCRIPT_DIR, 'wa_web_profile')
ARTIFACT_DIR = r"C:\Users\paulo\.gemini\antigravity\brain\4caa3df6-3ccb-4068-9275-24575fa1f355"
QR_PATH = os.path.join(ARTIFACT_DIR, 'qr_whatsapp_web_live.png')

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"

os.makedirs(PROFILE_DIR, exist_ok=True)
os.makedirs(ARTIFACT_DIR, exist_ok=True)

print("Inizializzazione browser WhatsApp Web...")

with sync_playwright() as p:
    ctx = p.chromium.launch_persistent_context(
        user_data_dir=PROFILE_DIR,
        headless=True,
        user_agent=USER_AGENT,
        viewport={'width': 1200, 'height': 850},
        args=['--disable-blink-features=AutomationControlled']
    )
    page = ctx.pages[0] if ctx.pages else ctx.new_page()
    page.goto("https://web.whatsapp.com")

    # Attendi che compaia o la sessione già attiva o il canvas del QR code
    print("In attesa del QR Code...")
    time.sleep(5)

    for i in range(120): # Attendi fino a 4 minuti
        # 1. Controlla se il login è già avvenuto
        try:
            if page.locator('#pane-side, div[contenteditable="true"]').first.is_visible(timeout=1000):
                print("LOGIN_SUCCESS: WhatsApp Web è ora collegato e memorizzato!")
                ctx.close()
                sys.exit(0)
        except Exception:
            pass

        # 2. Controlla se il QR code necessita di ricarica
        try:
            reload_btn = page.locator('button:has-text("Ricarica"), span[data-icon="refresh"], div[role="button"]:has-text("QR")').first
            if reload_btn.is_visible(timeout=500):
                reload_btn.click()
                print("Ricarica QR Code...")
                time.sleep(2)
        except Exception:
            pass

        # 3. Salva screenshot della pagina con il QR Code
        try:
            page.screenshot(path=QR_PATH)
            if i == 0 or i % 10 == 0:
                print(f"QR_UPDATED: Screenshot aggiornato ({i*2}s)")
        except Exception as e:
            pass

        time.sleep(2)

    print("TIMEOUT: Nessuna scansione rilevata entro i tempi.")
    ctx.close()
