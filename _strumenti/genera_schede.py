"""
genera_schede.py — Scheda individuale per ogni atleta.
Una pagina per atleta: esercizi sedute + massimali + log carichi.

Uso:
  python _strumenti/genera_schede.py [--output schede.html] [--dev]
  $env:APP_TOKEN = "mv26-prd-3xF7wNqK"  # PowerShell
"""
import csv, json, os, sys, time, urllib.request, urllib.error, argparse
from collections import defaultdict

PROD_API = (
    "https://script.google.com/macros/s/"
    "AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec"
)
DEV_API = (
    "https://script.google.com/macros/s/"
    "AKfycbzq2km30SYxJVeEF6UzT16raAoN06Ghx-MURyLjTqra-6SctVjAfp_wbNwdH4WuNOiO/exec"
)
TOKEN   = os.environ.get("APP_TOKEN", "")
REPO    = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP_ES = {"RPE-seduta", "Fatica-seduta", "Peso-corporeo"}


# ── I/O ───────────────────────────────────────────────────────────────────────

def leggi_csv(path):
    with open(path, newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))

def get_api(api_url, params, tentativo=0):
    qs  = "&".join(f"{k}={v}" for k, v in params.items())
    url = f"{api_url}?{qs}"
    req = urllib.request.Request(url, headers={"Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.loads(r.read().decode())
    except (urllib.error.URLError, TimeoutError) as e:
        if tentativo < 3:
            t = 2 ** (tentativo + 1)
            print(f"  Rete: {e} — riprovo tra {t}s…")
            time.sleep(t)
            return get_api(api_url, params, tentativo + 1)
        raise


# ── Filtro Ruoli (replica logica scheda.html:767-777) ────────────────────────

def esercizio_visibile(e, atleta):
    ruoli = str(e.get("Ruoli", "tutti")).strip()
    if not ruoli or ruoli == "tutti":
        return True
    first  = (atleta.get("Nome", "").split()[0]) if atleta.get("Nome") else ""
    role   = atleta.get("Ruolo", "")
    parts  = [p.strip() for p in ruoli.split(",")]
    exclus = [p[1:] for p in parts if p.startswith("!")]
    if any(ex == role or (first and ex == first) for ex in exclus):
        return False
    positivi = [p for p in parts if not p.startswith("!")]
    if not positivi:
        return True
    return any(p == role or (first and p == first) for p in positivi)


# ── Progressi ─────────────────────────────────────────────────────────────────

def massimali(progressi, id_atleta):
    """Ritorna {esercizio: (kg, data)} con il massimo per ogni esercizio."""
    maxes = {}
    for p in progressi:
        if str(p.get("ID_Giocatrice", "")) != str(id_atleta):
            continue
        es = str(p.get("Esercizio", "")).strip()
        if es in SKIP_ES or not es:
            continue
        val = str(p.get("Valore", "")).strip()
        import re
        m = re.search(r"[\d.]+", val)
        if not m:
            continue
        kg = float(m.group())
        data = str(p.get("Data", p.get("Timestamp", ""))[:10])
        if es not in maxes or kg > maxes[es][0]:
            maxes[es] = (kg, data)
    return maxes

def log_carichi(progressi, id_atleta, n=40):
    """Ultimi n log (no RPE/Fatica/Peso)."""
    righe = [
        p for p in progressi
        if str(p.get("ID_Giocatrice", "")) == str(id_atleta)
        and str(p.get("Esercizio", "")) not in SKIP_ES
        and p.get("Valore")
    ]
    righe.sort(key=lambda p: str(p.get("Timestamp", "")), reverse=True)
    return righe[:n]


# ── HTML ──────────────────────────────────────────────────────────────────────

CSS = """
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: Arial, Helvetica, sans-serif; font-size: 11px;
       color: #1e293b; background: #fff; }
.atleta { width: 100%; padding: 14px 18px 10px; min-height: 100vh; }
@media print {
  .atleta { page-break-after: always; min-height: unset; padding: 8px 14px; }
  body { font-size: 9.5px; }
}
.hdr { background: #1a3a6b; color: #fff; padding: 8px 12px;
       border-radius: 5px; margin-bottom: 10px; }
.hdr h1 { font-size: 14px; font-weight: 700; margin-bottom: 1px; }
.hdr p  { font-size: 9px; opacity: .65; letter-spacing: .05em; }
.section-title { font-size: 8.5px; font-weight: 700; color: #94a3b8;
                 letter-spacing: .1em; text-transform: uppercase;
                 margin: 10px 0 4px; }
/* Seduta */
.sed-label { display: inline-block; background: #1a3a6b; color: #fff;
             font-size: 8px; font-weight: 700; padding: 2px 7px;
             border-radius: 3px; letter-spacing: .04em; margin-bottom: 3px; }
.sed-nome  { font-size: 10px; font-weight: 600; color: #1a3a6b;
             margin-bottom: 4px; }
.metodo-label { font-size: 8px; font-weight: 700; color: #94a3b8;
                letter-spacing: .08em; text-transform: uppercase;
                background: #f8fafc; padding: 2px 6px;
                border-left: 2px solid #1a3a6b; margin: 3px 0 2px; }
table { width: 100%; border-collapse: collapse; margin-bottom: 8px; }
th { font-size: 8px; color: #94a3b8; font-weight: 700;
     text-transform: uppercase; letter-spacing: .06em;
     padding: 2px 4px; text-align: left; border-bottom: 1px solid #e2e8f0; }
td { font-size: 9.5px; padding: 2px 4px; border-bottom: 1px solid #f1f5f9;
     vertical-align: top; }
td.nome { font-weight: 500; color: #334155; }
td.params { color: #1a3a6b; font-weight: 600; white-space: nowrap; }
td.rec  { color: #64748b; white-space: nowrap; }
td.note { color: #94a3b8; font-style: italic; font-size: 8.5px; }
.max-table td { font-size: 9px; }
.log-table td { font-size: 8.5px; color: #475569; }
.log-table td.kg { font-weight: 600; color: #1a3a6b; }
hr { border: none; border-top: 1px solid #e2e8f0; margin: 8px 0; }
.footer { font-size: 7.5px; color: #cbd5e1; text-align: center;
          margin-top: 10px; }
"""

def esc(s):
    return str(s).replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")

def params_es(e):
    s = str(e.get("Serie","")).strip()
    r = str(e.get("Reps","")).strip()
    i = str(e.get("Intensità", e.get("Intensita",""))).strip()
    if not s and not r:
        return "—"
    base = f"{s}×{r}" if s and r else (s or r)
    if i:
        base += f" @ {i}"
    return base

def render_atleta(atleta, sedute_all, esercizi_all, maxes, logs):
    nome  = str(atleta.get("Nome","")).strip()
    ruolo = str(atleta.get("Ruolo","")).strip()

    html = [f'<div class="atleta">']
    html.append(f'<div class="hdr"><h1>{esc(nome)}</h1>'
                f'<p>{"Libero" if ruolo == "Libero" else ruolo or "Atleta"} · Marsala Volley 2026/27</p></div>')

    # ── Massimali ──
    if maxes:
        html.append('<hr><div class="section-title">Massimali per esercizio</div>')
        html.append('<table class="max-table"><thead><tr>'
                    '<th>Esercizio</th><th>Max (kg)</th><th>Data</th></tr></thead><tbody>')
        for es_n, (kg, data) in sorted(maxes.items(), key=lambda x: -x[1][0]):
            html.append(f'<tr><td>{esc(es_n)}</td>'
                        f'<td class="params">{kg}</td>'
                        f'<td class="rec">{esc(data)}</td></tr>')
        html.append('</tbody></table>')

    html.append('<div class="footer">Marsala Volley 2026/27 · Generato automaticamente · Non condividere</div>')
    html.append('</div>')
    return "\n".join(html)


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", default="schede_atleta.html")
    parser.add_argument("--dev", action="store_true")
    args = parser.parse_args()

    api_url = DEV_API if args.dev else PROD_API

    if not TOKEN:
        print("ERRORE: APP_TOKEN non impostato.")
        print("  PowerShell: $env:APP_TOKEN = \"mv26-prd-3xF7wNqK\"")
        sys.exit(1)

    # Leggi CSV locali — solo W1
    print("Leggo CSV locali…")
    data_dir  = os.path.join(REPO, "data")
    sedute    = leggi_csv(os.path.join(data_dir, "W1_Sedute.csv"))
    esercizi  = leggi_csv(os.path.join(data_dir, "W1_Esercizi.csv"))

    # Fetch da GAS
    print("Fetch Giocatrici da GAS…")
    r = get_api(api_url, {"token": TOKEN, "azione": "leggi", "foglio": "Giocatrici"})
    if not r.get("ok"):
        print(f"ERRORE Giocatrici: {r}")
        sys.exit(1)
    giocatrici = [g for g in r["dati"]
                  if str(g.get("ID","")).strip() and str(g.get("ID","")) != "99"]

    print("Fetch Progressi da GAS…")
    r2 = get_api(api_url, {"token": TOKEN, "azione": "leggi", "foglio": "Progressi"})
    if not r2.get("ok"):
        print(f"ERRORE Progressi: {r2}")
        sys.exit(1)
    progressi = r2["dati"]

    # Genera HTML
    print(f"Genero schede per {len(giocatrici)} atlete…")
    pages = []
    for g in giocatrici:
        id_a  = str(g.get("ID",""))
        nome  = str(g.get("Nome","")).strip()
        print(f"  {nome} (ID={id_a})")
        mx   = massimali(progressi, id_a)
        pages.append(render_atleta(g, sedute, esercizi, mx, []))

    html = f"""<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Schede Atleta — Marsala Volley 2026/27</title>
<style>{CSS}</style>
</head>
<body>
{"".join(pages)}
</body>
</html>"""

    out = os.path.join(REPO, args.output)
    with open(out, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"\nFatto → {out}")
    print("Apri nel browser e stampa (Ctrl+P) — una pagina per atleta.")

if __name__ == "__main__":
    main()
