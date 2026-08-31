"""
invia_wellness.py — Push notification locked to COACH ONLY.
"""
import sys
sys.stdout.reconfigure(encoding="utf-8")

COACH_ONLY_MODE = True

if COACH_ONLY_MODE:
    print("🔒 MODALITA' PROTETTA: Invio push alle ragazze BLOCCATO. Nessuna notifica inviata alle atlete.")
    sys.exit(0)
