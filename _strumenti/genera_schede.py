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
    id_a  = str(atleta.get("ID",""))
    nome  = str(atleta.get("Nome","")).strip()
    ruolo = str(atleta.get("Ruolo","")).strip()

    # Esercizi visibili per questa atleta
    def vis(e):
        id_e = str(e.get("ID_Giocatrice","")).strip()
        if id_e not in ("", "0") and id_e != id_a:
            return False
        excl = [x.strip() for x in str(e.get("Escludi_ID","")).split(",") if x.strip()]
        if id_a in excl:
            return False
        return esercizio_visibile(e, atleta)

    # Sedute rilevanti per palestra
    palestra_luogo = {"Palestra"}
    sedute = [s for s in sedute_all if str(s.get("Luogo","")).strip() in palestra_luogo]

    html = [f'<div class="atleta">']
    html.append(f'<div class="hdr"><h1>{esc(nome)}</h1>'
                f'<p>{"Libero" if ruolo == "Libero" else ruolo or "Atleta"} · Marsala Volley 2026/27</p></div>')

    # ── Sedute palestra ──
    html.append('<div class="section-title">Programma palestra</div>')
    for sed in sedute:
        ns   = str(sed.get("Numero_Seduta",""))
        nome_sed = str(sed.get("Nome_Seduta",""))
        # Esercizi della seduta, filtrati
        es_sed = [e for e in esercizi_all if str(e.get("N_Seduta","")) == ns and vis(e)]
        if not es_sed:
            continue
        es_sed.sort(key=lambda e: (float(e.get("Ord_Metodo",0) or 0),
                                   float(e.get("Ord_Eserc",0)   or 0)))
        html.append(f'<span class="sed-label">{esc(ns)}</span> '
                    f'<span class="sed-nome">{esc(nome_sed)}</span>')

        # Raggruppa per Metodo
        metodi, seen = [], {}
        for e in es_sed:
            m = str(e.get("Metodo","")).strip() or "Altro"
            if m not in seen:
                seen[m] = len(metodi)
                metodi.append({"nome": m, "righe": []})
            metodi[seen[m]]["righe"].append(e)

        for blk in metodi:
            html.append(f'<div class="metodo-label">{esc(blk["nome"])}</div>')
            html.append('<table><thead><tr>'
                        '<th style="width:38%">Esercizio</th>'
                        '<th>Serie×Reps @ Int.</th>'
                        '<th>Rec.</th>'
                        '<th>Note</th></tr></thead><tbody>')
            for e in blk["righe"]:
                es_nome = str(e.get("Esercizio","")).strip()
                rec     = str(e.get("Recupero","")).strip()
                note    = str(e.get("Note","")).strip() or str(e.get("Istruzione","")).strip()
                note    = (note[:70] + "…") if len(note) > 70 else note
                html.append(f'<tr>'
                             f'<td class="nome">{esc(es_nome)}</td>'
                             f'<td class="params">{esc(params_es(e))}</td>'
                             f'<td class="rec">{esc(rec)}</td>'
                             f'<td class="note">{esc(note)}</td></tr>')
            html.append('</tbody></table>')

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

    # ── Log carichi ──
    if logs:
        html.append('<hr><div class="section-title">Log carichi (ultimi 40)</div>')
        html.append('<table class="log-table"><thead><tr>'
                    '<th>Data</th><th>Seduta</th><th>Esercizio</th>'
                    '<th>Kg/Val.</th><th>Reps</th><th>RPE</th><th>Note</th>'
                    '</tr></thead><tbody>')
        for p in logs:
            data   = str(p.get("Data", p.get("Timestamp",""))[:10])
            seduta = str(p.get("N_Seduta",""))
            es_n   = str(p.get("Esercizio",""))
            val    = str(p.get("Valore",""))
            reps   = str(p.get("Reps_Fatte","") or p.get("reps_fatte",""))
            rpe    = str(p.get("RPE","") or "")
            note   = str(p.get("Note",""))
            html.append(f'<tr>'
                        f'<td>{esc(data)}</td><td>{esc(seduta)}</td>'
                        f'<td>{esc(es_n)}</td><td class="kg">{esc(val)}</td>'
                        f'<td>{esc(reps)}</td><td>{esc(rpe)}</td>'
                        f'<td class="note">{esc(note[:40])}</td></tr>')
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

    # Leggi CSV locali
    print("Leggo CSV locali…")
    data_dir  = os.path.join(REPO, "data")
    sedute    = leggi_csv(os.path.join(data_dir, "W1_Sedute.csv")) + \
                leggi_csv(os.path.join(data_dir, "W2_Sedute.csv"))
    esercizi  = leggi_csv(os.path.join(data_dir, "W1_Esercizi.csv")) + \
                leggi_csv(os.path.join(data_dir, "W2_Esercizi.csv"))

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
        logs = log_carichi(progressi, id_a)
        pages.append(render_atleta(g, sedute, esercizi, mx, logs))

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
