"""
invia_email_wellness.py — Email locked to Coach Paulo ONLY.
"""
import sys
sys.stdout.reconfigure(encoding="utf-8")

COACH_EMAIL = "pamangiapane@gmail.com"
BASE_URL = "https://pamangiapane-lgtm.github.io/schede-allenamento/wellness.html"

def main():
    print(f"🔒 MODALITA' PROTETTA: Email alle atlete BLOCCATE.")
    print(f"   Destinatario autorizzato unico: {COACH_EMAIL}")
    print(f"   Link test generato: {BASE_URL}?id=1")

if __name__ == '__main__':
    main()
