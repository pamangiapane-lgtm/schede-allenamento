"""
genera_schede.py — Scheda individuale per ogni atleta.
Una pagina per atleta: esercizi seduta 1 W1 + massimali.

Uso:
  python _strumenti/genera_schede.py [--output docs/index.html] [--dev] [--offline]

Modalità --offline: nessuna chiamata GAS.
  - Giocatrici: da data/Giocatrici.csv
  - Progressi:  da data/cache/progressi.json (se esiste), altrimenti nessun massimale
  - Utile per iterazioni veloci su layout/esercizi senza attendere la Action

Token GAS (non serve in --offline):
  $env:APP_TOKEN = "mv26-prd-3xF7wNqK"  # PowerShell
  export APP_TOKEN=mv26-prd-3xF7wNqK    # bash
"""
import csv, json, os, re, sys, time, urllib.request, urllib.error, argparse
from collections import defaultdict

PROD_API = (
    "https://script.google.com/macros/s/"
    "AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec"
)
DEV_API = (
    "https://script.google.com/macros/s/"
    "AKfycbzq2km30SYxJVeEF6UzT16raAoN06Ghx-MURyLjTqra-6SctVjAfp_wbNwdH4WuNOiO/exec"
)
TOKEN = os.environ.get("APP_TOKEN", "")
REPO  = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
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


# ── Config skip_metodi da CSV ─────────────────────────────────────────────────

def carica_skip_metodi():
    """Legge data/config/skip_metodi.csv. Ritorna (skip_sempre, skip_non_libero)."""
    path = os.path.join(REPO, "data", "config", "skip_metodi.csv")
    skip_sempre, skip_non_libero = set(), set()
    if not os.path.exists(path):
        return {"Attivazione", "Prehab individuale", "Prevenzione"}, {"Rinforzo scapolare Libero"}
    for row in leggi_csv(path):
        metodo = str(row.get("Metodo", "")).strip()
        regola = str(row.get("Regola", "")).strip()
        if regola == "sempre":
            skip_sempre.add(metodo)
        elif regola == "solo_libero":
            skip_non_libero.add(metodo)
    return skip_sempre, skip_non_libero


# ── Filtro Ruoli ──────────────────────────────────────────────────────────────

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
    maxes = {}
    for p in progressi:
        if str(p.get("ID_Giocatrice", "")) != str(id_atleta):
            continue
        es = str(p.get("Esercizio", "")).strip()
        if es in SKIP_ES or not es:
            continue
        val = str(p.get("Valore", "")).strip()
        m = re.search(r"[\d.]+", val)
        if not m:
            continue
        kg   = float(m.group())
        data = str(p.get("Data", p.get("Timestamp", ""))[:10])
        if es not in maxes or kg > maxes[es][0]:
            maxes[es] = (kg, data)
    return maxes


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
.hdr { background: #1a3a6b; color: #fff; padding: 14px 16px 12px;
       border-radius: 12px; margin-bottom: 14px; }
.hdr h1 { font-size: 20px; font-weight: 700; }
.hdr p  { font-size: 12px; opacity: .7; margin-top: 2px; }
.section-title { font-size: 11px; font-weight: 700; color: #64748b;
                 letter-spacing: .08em; text-transform: uppercase;
                 margin: 14px 0 6px 2px; }
.metodo-block { background: #fff; border-radius: 10px; margin-bottom: 10px;
                overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,.07); }
.metodo-label { font-size: 10px; font-weight: 700; color: #fff;
                background: #1a3a6b; padding: 5px 12px;
                letter-spacing: .06em; text-transform: uppercase; }
.es-row { display: flex; flex-direction: column; padding: 8px 12px;
          border-bottom: 1px solid #f1f5f9; }
.es-row:last-child { border-bottom: none; }
.es-nome { font-size: 14px; font-weight: 600; color: #1e293b; }
.es-params { font-size: 13px; color: #1a3a6b; font-weight: 700; margin-top: 2px; }
.es-meta { display: flex; gap: 10px; margin-top: 2px; }
.es-rec { font-size: 11px; color: #64748b; }
.es-note { font-size: 11px; color: #94a3b8; font-style: italic; }
.max-block { background: #fff; border-radius: 10px; overflow: hidden;
             box-shadow: 0 1px 3px rgba(0,0,0,.07); margin-bottom: 10px; }
.max-row { display: flex; justify-content: space-between; align-items: center;
           padding: 7px 12px; border-bottom: 1px solid #f1f5f9; }
.max-row:last-child { border-bottom: none; }
.max-nome { font-size: 13px; color: #334155; flex: 1; }
.max-kg { font-size: 15px; font-weight: 700; color: #1a3a6b; margin-left: 8px; }
.max-data { font-size: 10px; color: #94a3b8; margin-left: 8px; white-space: nowrap; }
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

def render_atleta(atleta, sedute_all, esercizi_all, maxes, skip_sempre, skip_non_libero):
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

    is_libero   = (ruolo == "Libero")
    skip_metodi = skip_sempre | (set() if is_libero else skip_non_libero)

    sed1      = next((s for s in sedute_all if str(s.get("Luogo","")).strip() == "Palestra"), None)
    sed1_id   = str(sed1.get("Numero_Seduta","")) if sed1 else ""
    nome_sed1 = str(sed1.get("Nome_Seduta","")) if sed1 else "Seduta Palestra"

    es_sed1 = [e for e in esercizi_all
               if str(e.get("N_Seduta","")).strip() == sed1_id
               and str(e.get("Metodo","")).strip() not in skip_metodi
               and vis(e)]
    es_sed1.sort(key=lambda e: (float(e.get("Ord_Metodo",0) or 0),
                                float(e.get("Ord_Eserc",0) or 0)))

    html = ['<div class="atleta">']
    html.append(f'<div class="hdr"><h1>{esc(nome)}</h1>'
                f'<p>{esc(ruolo or "Atleta")} · Marsala Volley 2026/27</p></div>')

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
    parser.add_argument("--week",    default="W2",
                        help="Settimana da caricare (es. W1, W2). Default: W2")
    parser.add_argument("--output",  default=None)
    parser.add_argument("--dev",     action="store_true")
    parser.add_argument("--offline", action="store_true",
                        help="Nessuna chiamata GAS: usa Giocatrici.csv e cache progressi")
    args = parser.parse_args()

    week = args.week.upper()
    if not args.output:
        args.output = f"schede_atleta_{week.lower()}.html"

    api_url  = DEV_API if args.dev else PROD_API
    data_dir = os.path.join(REPO, "data")

    # Leggi CSV locali
    sedute_csv   = os.path.join(data_dir, f"{week}_Sedute.csv")
    esercizi_csv = os.path.join(data_dir, f"{week}_Esercizi.csv")
    if not os.path.exists(sedute_csv) or not os.path.exists(esercizi_csv):
        print(f"File per {week} non trovati in data/ ({sedute_csv} o {esercizi_csv}). Uso W1 come fallback.")
        week = "W1"
        sedute_csv   = os.path.join(data_dir, "W1_Sedute.csv")
        esercizi_csv = os.path.join(data_dir, "W1_Esercizi.csv")

    print(f"Leggo CSV locali ({week})...")
    sedute   = leggi_csv(sedute_csv)
    esercizi = leggi_csv(esercizi_csv)

    # Config skip metodi
    skip_sempre, skip_non_libero = carica_skip_metodi()

    # Giocatrici — da CSV locale (Fase 1) o da GAS
    gioc_csv = os.path.join(data_dir, "Giocatrici.csv")
    if os.path.exists(gioc_csv):
        print("Giocatrici da CSV locale…")
        giocatrici = [g for g in leggi_csv(gioc_csv)
                      if str(g.get("ID","")).strip() and str(g.get("ID","")) != "99"]
    else:
        if args.offline:
            print("ERRORE: --offline richiede data/Giocatrici.csv")
            sys.exit(1)
        if not TOKEN:
            print("ERRORE: APP_TOKEN non impostato e Giocatrici.csv assente.")
            sys.exit(1)
        print("Fetch Giocatrici da GAS…")
        r = get_api(api_url, {"token": TOKEN, "azione": "leggi", "foglio": "Giocatrici"})
        if not r.get("ok"):
            print(f"ERRORE Giocatrici: {r}")
            sys.exit(1)
        giocatrici = [g for g in r["dati"]
                      if str(g.get("ID","")).strip() and str(g.get("ID","")) != "99"]

    # Progressi — da cache JSON (Fase 3) o da GAS
    cache_path = os.path.join(data_dir, "cache", "progressi.json")
    if args.offline:
        if os.path.exists(cache_path):
            print("Progressi da cache locale…")
            with open(cache_path, encoding="utf-8") as f:
                progressi = json.load(f)
        else:
            print("  (cache progressi assente — massimali non disponibili)")
            progressi = []
    else:
        if not TOKEN:
            print("ERRORE: APP_TOKEN non impostato.")
            print("  Usa --offline per generare senza GAS (massimali dalla cache).")
            sys.exit(1)
        print("Fetch Progressi da GAS…")
        r2 = get_api(api_url, {"token": TOKEN, "azione": "leggi", "foglio": "Progressi"})
        if not r2.get("ok"):
            print(f"ERRORE Progressi: {r2}")
            sys.exit(1)
        progressi = r2["dati"]
        # Aggiorna cache per uso --offline futuro
        os.makedirs(os.path.dirname(cache_path), exist_ok=True)
        with open(cache_path, "w", encoding="utf-8") as f:
            json.dump(progressi, f, ensure_ascii=False)
        print(f"  Cache aggiornata → {cache_path}")

    # Genera HTML
    print(f"Genero schede per {len(giocatrici)} atlete…")
    pages = []
    for g in giocatrici:
        nome = str(g.get("Nome","")).strip()
        print(f"  {nome} (ID={g.get('ID','')})")
        mx = massimali(progressi, str(g.get("ID","")))
        pages.append(render_atleta(g, sedute, esercizi, mx, skip_sempre, skip_non_libero))

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
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"\nFatto -> {out}")
    if not args.offline:
        print("Apri nel browser e stampa (Ctrl+P) - una pagina per atleta.")
    else:
        print("Modalita offline - massimali dalla cache (o assenti se cache vuota).")

if __name__ == "__main__":
    main()
