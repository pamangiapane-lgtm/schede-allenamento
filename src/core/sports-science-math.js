/**
 * MARSALA VOLLEY S&C — PURE SPORTS SCIENCE MATH ENGINE (@marsala/core-math)
 * Modulo puro, stateless e deterministico privo di dipendenze DOM o Database.
 * 
 * Regole Inviolabili:
 * 1. Formula Squat con Bodyweight (BW Formula Ufficiale):
 *    Carico (kg) = (pct / 100) * (1RM + BW) - BW (arrotondato a 0.5 kg, min 20 kg).
 * 2. Precisione assoluta e tolleranza zero per regressioni o NaN.
 */

(function (global) {
  'use strict';

  const SportsScienceMath = {
    /**
     * Calcolo Carico Effettivo sul Bilanciere per Back Squat con Bodyweight
     * @param {number} oneRmKg - Massimale 1RM Back Squat (kg)
     * @param {number} bwKg - Peso Corporeo dell'atleta (kg)
     * @param {number} pct - Percentuale di carico (es. 80 per 80%, 0.80 accettato)
     * @returns {number} Carico sul bilanciere arrotondato a 0.5 kg (minimo 20 kg bilanciere olimpico)
     */
    calcSquatLoad: function (oneRmKg, bwKg, pct) {
      const rm = parseFloat(oneRmKg);
      const bw = parseFloat(bwKg);
      let p = parseFloat(pct);

      if (isNaN(rm) || isNaN(bw) || isNaN(p) || rm <= 0 || bw <= 0 || p <= 0) {
        return 0;
      }
      // Normalizza percentuale se passata come decimale (es. 0.80 -> 80)
      if (p <= 1.0) {
        p = p * 100;
      }

      // Formula Ufficiale Marsala Volley:
      // Carico = (pct / 100) * (1RM + BW) - BW
      const rawLoad = (p / 100.0) * (rm + bw) - bw;
      const rounded = Math.round(rawLoad * 2.0) / 2.0;

      // Un bilanciere olimpico con fermi non scende sotto i 20 kg
      return Math.max(20.0, rounded);
    },

    /**
     * Calcolo Carico per Alzate Generiche (Panca, RDL, Clean, Row, Lat)
     * @param {string} liftType - Tipo di alzata ('bench', 'floor', 'clean', 'rdl', 'row', 'lat', 'military')
     * @param {number} oneRmKg - Massimale 1RM dell'alzata
     * @param {number} pct - Percentuale (es. 70 per 70%)
     * @param {number} [bwKg] - Peso corporeo (usato se squat)
     * @returns {{ totalKg: number, eachDumbbellKg?: number, label: string }}
     */
    calcLiftLoad: function (liftType, oneRmKg, pct, bwKg) {
      const type = String(liftType || '').toLowerCase();
      let p = parseFloat(pct);
      if (p <= 1.0) p = p * 100;

      if (type.includes('squat')) {
        const load = this.calcSquatLoad(oneRmKg, bwKg || 65, p);
        return { totalKg: load, label: `${load} kg (bilanciere)` };
      }

      const rm = parseFloat(oneRmKg);
      if (isNaN(rm) || rm <= 0 || isNaN(p) || p <= 0) {
        return { totalKg: 0, label: '—' };
      }

      const rawTotal = (p / 100.0) * rm;

      // Se esercizio con manubri (Floor Press, DB Row, Dumbbell Bench)
      if (type.includes('floor') || type.includes('manubr') || type.includes('db')) {
        const eachRaw = rawTotal / 2.0;
        const each = Math.round(eachRaw * 2.0) / 2.0;
        return {
          totalKg: each * 2.0,
          eachDumbbellKg: each,
          label: `${each}+${each} kg manubri`
        };
      }

      // Bilanciere o Macchina (RDL, Clean, Lat, Row BB)
      const rounded = Math.round(rawTotal * 2.0) / 2.0;
      return { totalKg: rounded, label: `${rounded} kg` };
    },

    /**
     * Calcolo Z-Score Individuale Hooper-Mackinnon per Monitoraggio Readiness
     * @param {number} currentScore - Punteggio Hooper odierno
     * @param {number[]} historyScores - Array di punteggi storici dell'atleta
     * @returns {{ zScore: number, status: 'GREEN'|'YELLOW'|'RED', note: string }}
     */
    calcHooperZScore: function (currentScore, historyScores) {
      const cur = parseFloat(currentScore);
      if (isNaN(cur) || !Array.isArray(historyScores) || historyScores.length < 3) {
        return { zScore: 0.0, status: 'GREEN', note: 'Baseline insufficiente (<3 log)' };
      }

      const valid = historyScores.map(Number).filter(v => !isNaN(v));
      if (valid.length < 3) {
        return { zScore: 0.0, status: 'GREEN', note: 'Dati storici insufficienti' };
      }

      const n = valid.length;
      const mean = valid.reduce((a, b) => a + b, 0) / n;
      const variance = valid.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / n;
      const std = Math.sqrt(variance);

      if (std === 0) {
        return { zScore: 0.0, status: 'GREEN', note: 'Varianza nulla' };
      }

      const z = (cur - mean) / std;
      const roundedZ = Math.round(z * 100) / 100;

      if (roundedZ >= 1.5) {
        return { zScore: roundedZ, status: 'RED', note: 'Allarme Affaticamento Acuto (|Z| ≥ 1.5σ)' };
      } else if (roundedZ >= 1.0) {
        return { zScore: roundedZ, status: 'YELLOW', note: 'Attenzione: Fatica moderata (|Z| ≥ 1.0σ)' };
      } else {
        return { zScore: roundedZ, status: 'GREEN', note: 'Readiness ottimale' };
      }
    },

    /**
     * Classificazione Continuum Forza-Velocità (Tassonomia Zatsiorsky & Bryan Mann)
     */
    classifyFVZone: function (exName, kg, loadStr, isPlyo) {
      const name = String(exName || '').toLowerCase();
      const load = String(loadStr || '').toLowerCase();
      const weight = parseFloat(kg) || 0;

      if (isPlyo || /pogo|jump|balzi|hurdle|cmj|drop jump/i.test(name)) {
        return {
          zone: 'Balistica / Pliometria (SSC)',
          code: 'speed_elastic',
          color: '#a855f7',
          vbtTarget: '> 1.00 m/s (Max RFD)'
        };
      }

      if ((name.includes('squat') && (load.includes('80%') || load.includes('82.5%') || load.includes('85%') || weight >= 80)) ||
          (load.includes('85%') || load.includes('90%') || load.includes('95%'))) {
        return {
          zone: 'Forza Massima (<0.50 m/s · >85%)',
          code: 'max_strength',
          color: '#ef4444',
          vbtTarget: '0.45 – 0.55 m/s'
        };
      }

      if (/clean|powerbag|chest pass|medball|half squat|push press/i.test(name)) {
        return {
          zone: 'Speed-Strength / RFD (0.75-1.00 m/s)',
          code: 'speed_strength',
          color: '#38bdf8',
          vbtTarget: '0.75 – 1.00 m/s'
        };
      }

      if (/squat|rdl|split|floor|bench|lat|row/i.test(name) && weight >= 15) {
        return {
          zone: 'Strength-Speed (0.50-0.75 m/s)',
          code: 'strength_speed',
          color: '#f59e0b',
          vbtTarget: '0.55 – 0.70 m/s'
        };
      }

      return {
        zone: 'Forza Strutturale / Prehab',
        code: 'structural_prehab',
        color: '#10b981',
        vbtTarget: 'TUT Controllato'
      };
    },

    /**
     * Calcolo ACWR (Acute:Chronic Workload Ratio) di Gabbett
     */
    calcACWR: function (acuteLoad7d, chronicLoad28d) {
      const acute = parseFloat(acuteLoad7d);
      const chronic = parseFloat(chronicLoad28d);

      if (isNaN(acute) || isNaN(chronic) || chronic <= 0) {
        return { acwr: 1.0, zone: 'SWEET_SPOT', label: '1.00 (Baseline)' };
      }

      const ratio = acute / chronic;
      const rounded = Math.round(ratio * 100) / 100;

      if (rounded >= 1.5) {
        return { acwr: rounded, zone: 'DANGER_ZONE', label: `${rounded.toFixed(2)} 🔴 Danger Zone (>1.50)` };
      } else if (rounded >= 0.8 && rounded <= 1.3) {
        return { acwr: rounded, zone: 'SWEET_SPOT', label: `${rounded.toFixed(2)} 🟢 Sweet Spot (0.80–1.30)` };
      } else if (rounded > 1.3 && rounded < 1.5) {
        return { acwr: rounded, zone: 'SWEET_SPOT', label: `${rounded.toFixed(2)} 🟡 Zona Attenzione (1.30–1.50)` };
      } else {
        return { acwr: rounded, zone: 'UNDERLOAD', label: `${rounded.toFixed(2)} ⚪ Sottocarico (<0.80)` };
      }
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = SportsScienceMath;
  } else {
    global.SportsScienceMath = SportsScienceMath;
  }
})(typeof window !== 'undefined' ? window : globalThis);
