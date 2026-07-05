"""
Backup locale schede allenamento.
Salva tutti i fogli Google in un file JSON giornaliero nella cartella backup_locale/.
Puoi pianificarlo con Windows Task Scheduler per eseguirlo ogni giorno automaticamente.
"""
import json, urllib.request, sys, os, datetime

sys.stdout.reconfigure(encoding="utf-8")

API   = "https://script.google.com/macros/s/AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec"
TOKEN = "squadra2026"

FOGLI = ["Giocatrici", "Esercizi", "LibreriaIndividuale", "Log_Progressi"]

BACKUP_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "backup_locale")
os.makedirs(BACKUP_DIR, exist_ok=True)

oggi = datetime.date.today().strftime("%Y-%m-%d")
filename = os.path.join(BACKUP_DIR, f"backup-{oggi}.json")

if os.path.exists(filename):
    print(f"Backup di oggi già presente: {filename}")
    sys.exit(0)

print(f"Backup in corso — {oggi}")
dati = {}
for foglio in FOGLI:
    print(f"  Lettura {foglio}...")
    resp = urllib.request.urlopen(f"{API}?token={TOKEN}&azione=leggi&foglio={foglio}", timeout=60)
    result = json.loads(resp.read().decode())
    dati[foglio] = result.get("dati", [])
    print(f"    → {len(dati[foglio])} righe")

with open(filename, "w", encoding="utf-8") as f:
    json.dump(dati, f, ensure_ascii=False, indent=2)

print(f"\nBackup salvato: {filename}")
print(f"  Righe totali: {sum(len(v) for v in dati.values())}")
