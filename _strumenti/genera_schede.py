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
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
       font-size: 14px; color: #1e293b; background: #f1f5f9; }
.atleta { max-width: 480px; margin: 0 auto; padding: 12px 12px 24px;
          background: #f1f5f9; }
@media print {
  body { background: #fff; font-size: 10px; }
  .atleta { page-break-after: always; max-width: 100%; padding: 6px 10px; background: #fff; }
}
/* Header */
.hdr { background: #1a3a6b; color: #fff; padding: 14px 16px 12px;
       border-radius: 12px; margin-bottom: 14px; }
.hdr h1 { font-size: 20px; font-weight: 700; }
.hdr p  { font-size: 12px; opacity: .7; margin-top: 2px; }
/* Section label */
.section-title { font-size: 11px; font-weight: 700; color: #64748b;
                 letter-spacing: .08em; text-transform: uppercase;
                 margin: 14px 0 6px 2px; }
/* Metodo block */
.metodo-block { background: #fff; border-radius: 10px; margin-bottom: 10px;
                overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,.07); }
.metodo-label { font-size: 10px; font-weight: 700; color: #fff;
                background: #1a3a6b; padding: 5px 12px;
                letter-spacing: .06em; text-transform: uppercase; }
/* Exercise row */
.es-row { display: flex; flex-direction: column; padding: 8px 12px;
          border-bottom: 1px solid #f1f5f9; }
.es-row:last-child { border-bottom: none; }
.es-nome { font-size: 14px; font-weight: 600; color: #1e293b; }
.es-params { font-size: 13px; color: #1a3a6b; font-weight: 700; margin-top: 2px; }
.es-meta { display: flex; gap: 10px; margin-top: 2px; }
.es-rec { font-size: 11px; color: #64748b; }
.es-note { font-size: 11px; color: #94a3b8; font-style: italic; }
/* Massimali */
.max-block { background: #fff; border-radius: 10px; overflow: hidden;
             box-shadow: 0 1px 3px rgba(0,0,0,.07); margin-bottom: 10px; }
.max-row { display: flex; justify-content: space-between; align-items: center;
           padding: 7px 12px; border-bottom: 1px solid #f1f5f9; }
.max-row:last-child { border-bottom: none; }
.max-nome { font-size: 13px; color: #334155; flex: 1; }
.max-kg { font-size: 15px; font-weight: 700; color: #1a3a6b; margin-left: 8px; }
.max-data { font-size: 10px; color: #94a3b8; margin-left: 8px; white-space: nowrap; }
hr { border: none; border-top: 1px solid #e2e8f0; margin: 10px 0; }
.footer { font-size: 10px; color: #cbd5e1; text-align: center; margin-top: 16px; }
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
    id_a  = str(atleta.get("ID",""))
    nome  = str(atleta.get("Nome","")).strip()
    ruolo = str(atleta.get("Ruolo","")).strip()

    def vis(e):
        id_e = str(e.get("ID_Giocatrice","")).strip()
        if id_e not in ("", "0") and id_e != id_a:
            return False
        excl = [x.strip() for x in str(e.get("Escludi_ID","")).split(",") if x.strip()]
        if id_a in excl:
            return False
        return esercizio_visibile(e, atleta)

    html = ['<div class="atleta">']
    html.append(f'<div class="hdr"><h1>{esc(nome)}</h1>'
                f'<p>{"Libero" if ruolo == "Libero" else ruolo or "Atleta"} · Marsala Volley 2026/27</p></div>')

    # ── Seduta 1 W1 ──
    # Prima seduta di Palestra W1
    sed1 = next((s for s in sedute_all
                 if str(s.get("Luogo","")).strip() == "Palestra"), None)
    sed1_id   = str(sed1.get("Numero_Seduta","")) if sed1 else ""
    nome_sed1 = str(sed1.get("Nome_Seduta","")) if sed1 else "Seduta Palestra"
    is_libero = (atleta.get("Ruolo", "").strip() == "Libero")
    SKIP_METODI = {"Attivazione", "Prehab individuale", "Prevenzione"}
    if not is_libero:
        SKIP_METODI.add("Rinforzo scapolare Libero")
    es_sed1 = [e for e in esercizi_all
               if str(e.get("N_Seduta","")).strip() == sed1_id
               and str(e.get("Metodo","")).strip() not in SKIP_METODI
               and vis(e)]
    es_sed1.sort(key=lambda e: (float(e.get("Ord_Metodo",0) or 0),
                                float(e.get("Ord_Eserc",0) or 0)))

    if es_sed1:
        html.append(f'<div class="section-title">{esc(sed1_id)} · {esc(nome_sed1)}</div>')
        metodi, seen = [], {}
        for e in es_sed1:
            m = str(e.get("Metodo","")).strip() or "Altro"
            if m not in seen:
                seen[m] = len(metodi)
                metodi.append({"nome": m, "righe": []})
            metodi[seen[m]]["righe"].append(e)

        for blk in metodi:
            html.append('<div class="metodo-block">')
            html.append(f'<div class="metodo-label">{esc(blk["nome"])}</div>')
            for e in blk["righe"]:
                es_nome = str(e.get("Esercizio","")).strip()
                rec     = str(e.get("Recupero","")).strip()
                note    = str(e.get("Note","")).strip() or str(e.get("Istruzione","")).strip()
                note    = (note[:60] + "…") if len(note) > 60 else note
                html.append('<div class="es-row">')
                html.append(f'<span class="es-nome">{esc(es_nome)}</span>')
                html.append(f'<span class="es-params">{esc(params_es(e))}</span>')
                meta = []
                if rec:
                    meta.append(f'<span class="es-rec">Rec {esc(rec)}</span>')
                if note:
                    meta.append(f'<span class="es-note">{esc(note)}</span>')
                if meta:
                    html.append(f'<div class="es-meta">{"".join(meta)}</div>')
                html.append('</div>')
            html.append('</div>')

    # ── Massimali ──
    if maxes:
        html.append('<div class="section-title">Massimali</div>')
        html.append('<div class="max-block">')
        for es_n, (kg, data) in sorted(maxes.items(), key=lambda x: -x[1][0]):
            html.append(f'<div class="max-row">'
                        f'<span class="max-nome">{esc(es_n)}</span>'
                        f'<span class="max-kg">{kg} kg</span>'
                        f'<span class="max-data">{esc(data)}</span>'
                        f'</div>')
        html.append('</div>')

    html.append('<div class="footer">Marsala Volley 2026/27 · Non condividere</div>')
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
