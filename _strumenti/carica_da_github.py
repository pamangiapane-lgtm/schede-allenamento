"""
carica_da_github.py — Manda a GAS solo 4 URL; GAS scarica i CSV da GitHub
e scrive lo Sheet server-side. Zero payload pesante, zero timeout client.

UTILIZZO:
  python _strumenti/carica_da_github.py [--branch NOME] [--dev]

Default branch: claude/pre-season-app-mods-355hqq

TOKEN: imposta APP_TOKEN prima di eseguire:
  PowerShell : $env:APP_TOKEN = "mv26-prd-3xF7wNqK"
  Linux/Mac  : export APP_TOKEN=mv26-prd-3xF7wNqK
"""
import json, os, sys, time, urllib.request, urllib.error, argparse

PROD_API = (
    "https://script.google.com/macros/s/"
    "AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec"
)
DEV_API = (
    "https://script.google.com/macros/s/"
    "AKfycbzq2km30SYxJVeEF6UzT16raAoN06Ghx-MURyLjTqra-6SctVjAfp_wbNwdH4WuNOiO/exec"
)

REPO = "pamangiapane-lgtm/schede-allenamento"
RAW  = "https://raw.githubusercontent.com/{repo}/{branch}/data/{file}"

TOKEN = os.environ.get("APP_TOKEN", "")


def raw_url(branch, filename):
    return RAW.format(repo=REPO, branch=branch, file=filename)


def post_api(api_url, payload, tentativo=0):
    data = json.dumps(payload).encode("utf-8")
    req  = urllib.request.Request(
        api_url, data=data,
        headers={"Content-Type": "text/plain;charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.loads(r.read().decode())
    except (urllib.error.URLError, TimeoutError) as e:
        if tentativo < 4:
            attesa = 2 ** (tentativo + 1)
            print(f"  Rete: {e} — riprovo tra {attesa}s…")
            time.sleep(attesa)
            return post_api(api_url, payload, tentativo + 1)
        raise


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--branch", default="claude/pre-season-app-mods-355hqq",
                        help="Branch GitHub da cui scaricare i CSV")
    parser.add_argument("--dev", action="store_true", help="Usa endpoint DEV")
    args = parser.parse_args()

    api_url   = DEV_API if args.dev else PROD_API
    env_label = "DEV" if args.dev else "PROD"

    if not TOKEN:
        print("ERRORE: APP_TOKEN non impostato.")
        print("  PowerShell: $env:APP_TOKEN = \"mv26-prd-3xF7wNqK\"")
        sys.exit(1)

    print(f"=== Carica W1+W2 da GitHub → GAS {env_label} ===")
    print(f"  Branch : {args.branch}")
    print(f"  API    : {api_url}\n")
    print("  GAS scarica i CSV da GitHub e scrive lo Sheet (attendere ~15s)…",
          end="", flush=True)

    r = post_api(api_url, {
        "token":          TOKEN,
        "azione":         "carica_da_github",
        "url_sedute_w1":  raw_url(args.branch, "W1_Sedute.csv"),
        "url_sedute_w2":  raw_url(args.branch, "W2_Sedute.csv"),
        "url_esercizi_w1": raw_url(args.branch, "W1_Esercizi.csv"),
        "url_esercizi_w2": raw_url(args.branch, "W2_Esercizi.csv"),
    })

    if r.get("ok"):
        print(f"\n  OK — Sedute: {r['sedute']} righe | Esercizi: {r['esercizi']} righe")
        print("\nFatto. Progressi e altri log non toccati.")
    else:
        print(f"\n  ERRORE: {r}")
        sys.exit(1)


if __name__ == "__main__":
    main()
