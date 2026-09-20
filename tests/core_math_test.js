/**
 * MARSALA VOLLEY S&C — CORE SPORTS SCIENCE MATH TEST SUITE
 * Test di conformità per SportsScienceMath (@marsala/core-math)
 */

const assert = require('assert');
const SportsScienceMath = require('../src/core/sports-science-math.js');

console.log('🧪 Avvio Unit Test Suite: Marsala Volley Sports Science Math Engine...\n');

let passedTests = 0;
let totalTests = 0;

function it(desc, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✅ PASS: ${desc}`);
    passedTests++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${desc}`);
    console.error(`     Errore: ${err.message}`);
    process.exitCode = 1;
  }
}

// 1. SQUAT BW FORMULA
console.log('--- 1. Squat BW Formula Test ---');

it('Veronica Allasia: 1RM 100kg, BW 62.7kg @ 80% deve restituire 67.5 kg', () => {
  // (0.80 * 162.7) - 62.7 = 130.16 - 62.7 = 67.46 -> round to 67.5
  const load = SportsScienceMath.calcSquatLoad(100, 62.7, 80);
  assert.strictEqual(load, 67.5);
});

it('Veronica Allasia @ 70% deve restituire 51.0 kg', () => {
  // (0.70 * 162.7) - 62.7 = 113.89 - 62.7 = 51.19 -> round to 51.0
  const load = SportsScienceMath.calcSquatLoad(100, 62.7, 70);
  assert.strictEqual(load, 51.0);
});

it('Sara Caserta: 1RM 85kg, BW 78.0kg @ 82.5% deve calcolare correttamente', () => {
  // (0.825 * 163) - 78 = 134.475 - 78 = 56.475 -> round to 56.5
  const load = SportsScienceMath.calcSquatLoad(85, 78.0, 82.5);
  assert.strictEqual(load, 56.5);
});

it('Clamping a minimo 20 kg (bilanciere olimpico) per carichi bassi/negativi', () => {
  const load = SportsScienceMath.calcSquatLoad(20, 50, 30);
  assert.strictEqual(load, 20.0);
});

it('Gestione robusta di input NaN o zero', () => {
  assert.strictEqual(SportsScienceMath.calcSquatLoad(0, 60, 80), 0);
  assert.strictEqual(SportsScienceMath.calcSquatLoad('abc', 60, 80), 0);
  assert.strictEqual(SportsScienceMath.calcSquatLoad(100, null, 80), 0);
});

// 2. GENERIC LIFT LOADS
console.log('\n--- 2. Generic Lift Load Test ---');

it('Floor Press: Split manubri corretto', () => {
  // 1RM 50kg @ 80% = 40kg total -> 20+20kg manubri
  const res = SportsScienceMath.calcLiftLoad('Floor Press', 50, 80);
  assert.strictEqual(res.totalKg, 40.0);
  assert.strictEqual(res.eachDumbbellKg, 20.0);
  assert.strictEqual(res.label, '20+20 kg manubri');
});

it('RDL: Bilanciere arrotondato a 0.5 kg', () => {
  // 1RM 65kg @ 75% = 48.75kg -> 49.0 kg
  const res = SportsScienceMath.calcLiftLoad('rdl', 65, 75);
  assert.strictEqual(res.totalKg, 49.0);
  assert.strictEqual(res.label, '49 kg');
});

it('Squat delegato correttamente via calcLiftLoad', () => {
  const res = SportsScienceMath.calcLiftLoad('Back Squat', 100, 80, 62.7);
  assert.strictEqual(res.totalKg, 67.5);
});

// 3. HOOPER Z-SCORE
console.log('\n--- 3. Hooper Z-Score & Readiness Test ---');

it('Z-Score < 3 registrazioni restituisce GREEN con alert baseline', () => {
  const res = SportsScienceMath.calcHooperZScore(18, [18, 19]);
  assert.strictEqual(res.status, 'GREEN');
  assert.strictEqual(res.zScore, 0.0);
});

it('Z-Score stabile attorno alla media restituisce GREEN', () => {
  // History: [12, 14, 13, 15, 14], Mean = 13.6, Std ~ 1.02
  const res = SportsScienceMath.calcHooperZScore(14, [12, 14, 13, 15, 14]);
  assert.strictEqual(res.status, 'GREEN');
  assert(Math.abs(res.zScore) < 1.0);
});

it('Z-Score con picco acuto (≥ 1.5σ) restituisce RED', () => {
  // History: [10, 10, 10, 10, 12], Mean = 10.4, Std ~ 0.8
  // Current: 16 -> Z = (16 - 10.4)/0.8 = 7.0 -> RED
  const res = SportsScienceMath.calcHooperZScore(16, [10, 10, 10, 10, 12]);
  assert.strictEqual(res.status, 'RED');
  assert(res.zScore >= 1.5);
});

// 4. FORCE-VELOCITY CONTINUUM
console.log('\n--- 4. Force-Velocity Classification (Zatsiorsky & Mann) ---');

it('Pliometria e Balistica classificata come speed_elastic', () => {
  const res = SportsScienceMath.classifyFVZone('Pogo Jumps 3x10', 0, '', true);
  assert.strictEqual(res.code, 'speed_elastic');
  assert.strictEqual(res.zone, 'Balistica / Pliometria (SSC)');
});

it('Back Squat 85% classificato come max_strength', () => {
  const res = SportsScienceMath.classifyFVZone('Back Squat', 80, '85%', false);
  assert.strictEqual(res.code, 'max_strength');
});

it('Power Clean classificato come speed_strength', () => {
  const res = SportsScienceMath.classifyFVZone('Power Clean dal ginocchio', 40, '70%', false);
  assert.strictEqual(res.code, 'speed_strength');
});

it('Split Squat 20kg classificato come strength_speed', () => {
  const res = SportsScienceMath.classifyFVZone('Split Squat bulgaro', 20, '65%', false);
  assert.strictEqual(res.code, 'strength_speed');
});

// 5. ACWR TEST
console.log('\n--- 5. ACWR (Acute:Chronic Workload Ratio) Test ---');

it('ACWR 1.20 classificato come SWEET_SPOT', () => {
  const res = SportsScienceMath.calcACWR(1200, 1000);
  assert.strictEqual(res.acwr, 1.2);
  assert.strictEqual(res.zone, 'SWEET_SPOT');
});

it('ACWR 1.65 classificato come DANGER_ZONE', () => {
  const res = SportsScienceMath.calcACWR(1650, 1000);
  assert.strictEqual(res.acwr, 1.65);
  assert.strictEqual(res.zone, 'DANGER_ZONE');
});

it('ACWR 0.60 classificato come UNDERLOAD', () => {
  const res = SportsScienceMath.calcACWR(600, 1000);
  assert.strictEqual(res.acwr, 0.6);
  assert.strictEqual(res.zone, 'UNDERLOAD');
});

console.log(`\n========================================`);
console.log(`🎯 Risultato Test: ${passedTests}/${totalTests} superati con successo!`);
console.log(`========================================\n`);
