"""
carica_programma.py — Carica W1 + W2 nello Sheet Google (Sedute + Esercizi).
Sovrascrive i fogli Sedute ed Esercizi; i fogli Progressi, Wellness, ecc.
restano intatti (il log carichi/RPE è preservato).

UTILIZZO:
  python _strumenti/carica_programma.py

TOKEN: imposta la variabile d'ambiente APP_TOKEN prima di eseguire:
  export APP_TOKEN=YOUR_PROD_TOKEN   # prod
  export APP_TOKEN=YOUR_DEV_TOKEN    # dev
  python _strumenti/carica_programma.py --dev

Oppure, avendo .env nella root del repo:
  APP_TOKEN=... python _strumenti/carica_programma.py
"""
import csv, json, os, sys, time, urllib.request, urllib.error, argparse

# ── Configurazione ────────────────────────────────────────────────────────────
PROD_API = (
    "https://script.google.com/macros/s/"
    "AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec"
)
DEV_API = (
    "https://script.google.com/macros/s/"
    "AKfycbzq2km30SYxJVeEF6UzT16raAoN06Ghx-MURyLjTqra-6SctVjAfp_wbNwdH4WuNOiO/exec"
)

# Il token viene letto dall'ambiente — non incollarlo mai nel codice.
TOKEN = os.environ.get("APP_TOKEN", "")

# ── Helpers ───────────────────────────────────────────────────────────────────
REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def leggi_csv(percorso: str) -> list[dict]:
    with open(percorso, newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))

def post_api(api_url: str, payload: dict, tentativo: int = 0) -> dict:
    data = json.dumps(payload).encode("utf-8")
    req  = urllib.request.Request(
        api_url,
        data=data,
        headers={"Content-Type": "text/plain;charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            return json.loads(r.read().decode())
    except (urllib.error.URLError, TimeoutError) as e:
        if tentativo < 3:
            attesa = 2 ** (tentativo + 1)
            print(f"  Rete: {e} — riprovo tra {attesa}s…")
            time.sleep(attesa)
            return post_api(api_url, payload, tentativo + 1)
        raise

def scrivi_foglio(api_url: str, foglio: str, intestazioni: list, righe: list[list]) -> None:
    print(f"  Scrittura {foglio} ({len(righe)} righe)…", end="", flush=True)
    r = post_api(api_url, {
        "token": TOKEN,
        "azione": "scrivi_foglio",
        "foglio": foglio,
        "intestazioni": intestazioni,
        "righe": righe,
    })
    if r.get("ok"):
        print(f" OK ({r.get('scritte', len(righe))} scritte)")
    else:
        print(f" ERRORE: {r}")
        sys.exit(1)

# ── Logica principale ─────────────────────────────────────────────────────────
def carica_sedute(api_url: str) -> None:
    """Combina W1 + W2 Sedute, aggiunge Ordine, scrive nel foglio Sedute."""
    files = [
        os.path.join(REPO_ROOT, "data", "W1_Sedute.csv"),
        os.path.join(REPO_ROOT, "data", "W2_Sedute.csv"),
    ]
    righe_csv = []
    for f in files:
        righe_csv.extend(leggi_csv(f))

    # Intestazioni output: quelle del CSV + Ordine
    col_csv = list(righe_csv[0].keys()) if righe_csv else []
    intestazioni = col_csv + ["Ordine"]

    righe_out = []
    for i, r in enumerate(righe_csv, start=1):
        riga = [r.get(c, "") for c in col_csv] + [i]
        righe_out.append(riga)

    scrivi_foglio(api_url, "Sedute", intestazioni, righe_out)

def carica_esercizi(api_url: str, blocco: int = 100) -> None:
    """Combina W1 + W2 Esercizi e scrive nel foglio Esercizi in blocchi."""
    files = [
        os.path.join(REPO_ROOT, "data", "W1_Esercizi.csv"),
        os.path.join(REPO_ROOT, "data", "W2_Esercizi.csv"),
    ]
    righe_csv = []
    for f in files:
        righe_csv.extend(leggi_csv(f))

    col_csv = list(righe_csv[0].keys()) if righe_csv else []
    intestazioni = col_csv
    righe_out = [[r.get(c, "") for c in col_csv] for r in righe_csv]

    # Prima chiamata: svuota il foglio e scrivi le intestazioni + primo blocco
    for i in range(0, len(righe_out), blocco):
        chunk = righe_out[i:i + blocco]
        azione = "scrivi_foglio" if i == 0 else "aggiungi_righe"
        print(f"  Esercizi righe {i+1}-{i+len(chunk)}…", end="", flush=True)
        r = post_api(api_url, {
            "token": TOKEN,
            "azione": azione,
            "foglio": "Esercizi",
            "intestazioni": intestazioni,
            "righe": chunk,
        })
        if r.get("ok"):
            print(f" OK")
        else:
            print(f" ERRORE: {r}")
            sys.exit(1)

def main() -> None:
    parser = argparse.ArgumentParser(description="Carica W1+W2 nello Sheet Google.")
    parser.add_argument("--dev", action="store_true", help="Usa l'endpoint DEV invece di PROD")
    args = parser.parse_args()

    api_url = DEV_API if args.dev else PROD_API
    env_label = "DEV" if args.dev else "PROD"

    if not TOKEN:
        print("ERRORE: variabile d'ambiente APP_TOKEN non impostata.")
        print("  export APP_TOKEN=<token>  — poi riesegui lo script.")
        sys.exit(1)

    print(f"=== Carica programma W1+W2 → {env_label} ===")
    print(f"  API: {api_url}\n")

    carica_sedute(api_url)
    carica_esercizi(api_url)

    print("\nFatto. Il foglio Progressi e gli altri log non sono stati toccati.")
    print("I vecchi dati in Sedute/Esercizi sono stati sostituiti da W1+W2.")

if __name__ == "__main__":
    main()
