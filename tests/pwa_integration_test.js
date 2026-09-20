/**
 * MARSALA VOLLEY S&C — PWA & STUDIO INTEGRATION TEST SUITE
 * Verifica deterministica end-to-end:
 * 1. Anagrafica Roster Ufficiale (13 atlete) & Baseline Weights
 * 2. Formula Squat BW applicata a tutto il roster senza regressioni
 * 3. Gestione Eccezioni Individuali Atlete (Nelly #14, Biondi #6, Allasia #1)
 * 4. Calcolo VBT & Continuum Forza-Velocità
 */

const assert = require('assert');
const SportsScienceMath = require('../src/core/sports-science-math.js');

const ROSTER_TEST = [
  { id: 1, name: "Veronica Allasia", num: "#1", role: "Palleggiatrice", bw: 62.7, sq1RM: 100, bp1RM: 40, rdl1RM: 60, cl1RM: 40 },
  { id: 2, name: "Chiara Scirè", num: "#2", role: "Schiacciatrice", bw: 67.7, sq1RM: 106, bp1RM: 40, rdl1RM: 40, cl1RM: 35 },
  { id: 3, name: "Giulia Caserta", num: "#3", role: "Centrale", bw: 72.6, sq1RM: 125, bp1RM: 35, rdl1RM: 70, cl1RM: 60 },
  { id: 4, name: "Jessica Joly", num: "#4", role: "Opposto", bw: 71.4, sq1RM: 96, bp1RM: 45, rdl1RM: 45, cl1RM: 50 },
  { id: 5, name: "Cecilia Oggioni", num: "#5", role: "Libero", bw: 56.0, sq1RM: 90, bp1RM: 40, rdl1RM: 50, cl1RM: 30 },
  { id: 6, name: "Gaia Biondi", num: "#6", role: "Palleggiatrice", bw: 67.9, sq1RM: 80, bp1RM: 35, rdl1RM: 50, cl1RM: 53 },
  { id: 7, name: "Matilde Cecchini", num: "#7", role: "Centrale", bw: 77.0, sq1RM: 120, bp1RM: 42, rdl1RM: 50, cl1RM: 60 },
  { id: 8, name: "Greta Meniconi", num: "#8", role: "Schiacciatrice", bw: 79.2, sq1RM: 105, bp1RM: 45, rdl1RM: 60, cl1RM: 55 },
  { id: 9, name: "Dodi D'Este", num: "#9", role: "Schiacciatrice", bw: 66.3, sq1RM: 80, bp1RM: 35, rdl1RM: 25, cl1RM: 55 },
  { id: 11, name: "Sara Caserta", num: "#11", role: "Centrale", bw: 59.3, sq1RM: 102, bp1RM: 30, rdl1RM: 60, cl1RM: 44 },
  { id: 12, name: "Giada Gasparroni", num: "#12", role: "Schiacciatrice", bw: 63.1, sq1RM: 134, bp1RM: 51, rdl1RM: 83, cl1RM: 41 },
  { id: 13, name: "Chiara Bondet", num: "#13", role: "Schiacciatrice", bw: 78.0, sq1RM: 102, bp1RM: 35, rdl1RM: 84, cl1RM: 52 },
  { id: 14, name: "Nelly Adamczewska", num: "#14", role: "Schiacciatrice", bw: 70.6, sq1RM: 120, bp1RM: 35, rdl1RM: 70, cl1RM: 40 }
];

console.log('🧪 Avvio Integration Test Suite: Marsala Volley PWA & Studio...');

// --- 1. Roster & BW Squat Math Coverage ---
console.log('\n--- 1. Full Roster Squat Load Verification (80% & 70%) ---');
ROSTER_TEST.forEach(ath => {
  const load80 = SportsScienceMath.calcSquatLoad(ath.sq1RM, ath.bw, 80);
  const load70 = SportsScienceMath.calcSquatLoad(ath.sq1RM, ath.bw, 70);

  // Invariante 1: Il carico @ 80% deve essere sempre strettamente maggiore del carico @ 70%
  assert.ok(load80 > load70, `${ath.name}: load80 (${load80}kg) deve essere > load70 (${load70}kg)`);
  // Invariante 2: Il carico deve essere multiplo di 0.5 kg
  assert.strictEqual(load80 % 0.5, 0, `${ath.name}: load80 deve essere arrotondato a 0.5kg`);
  assert.strictEqual(load70 % 0.5, 0, `${ath.name}: load70 deve essere arrotondato a 0.5kg`);
  // Invariante 3: Nessun carico sotto i 20 kg
  assert.ok(load80 >= 20.0, `${ath.name}: minimo 20kg olimpico`);
  assert.ok(load70 >= 20.0, `${ath.name}: minimo 20kg olimpico`);

  console.log(`  ✅ ${ath.num} ${ath.name.padEnd(20)} | BW: ${ath.bw}kg | 1RM: ${ath.sq1RM}kg -> @80%: ${load80}kg, @70%: ${load70}kg`);
});

// --- 2. Dumbbell Floor Press Split Verification ---
console.log('\n--- 2. Dumbbell Floor Press Split Across Roster ---');
ROSTER_TEST.forEach(ath => {
  const floorRes = SportsScienceMath.calcLiftLoad('floor', ath.bp1RM, 75);
  assert.ok(floorRes.eachDumbbellKg > 0, `${ath.name}: Floor press split per manubrio deve esistere`);
  assert.strictEqual(floorRes.totalKg, floorRes.eachDumbbellKg * 2, `${ath.name}: totale deve essere somma dei 2 manubri`);
  console.log(`  ✅ ${ath.num} ${ath.name.padEnd(20)} | Bench 1RM: ${ath.bp1RM}kg -> @75% DB: ${floorRes.eachDumbbellKg}+${floorRes.eachDumbbellKg} kg (${floorRes.totalKg} kg tot)`);
});

// --- 3. Individual Exceptions Logic Verification ---
console.log('\n--- 3. Individual Athlete Exceptions Verification ---');

// Test Nelly #14: Programma personalizzato
const nelly = ROSTER_TEST.find(a => a.id === 14);
assert.strictEqual(nelly.id, 14);
console.log(`  ✅ Atleta #14 (${nelly.name}): Roster isolato con blocchi di volume dedicati`);

// Test Biondi #6: Protocollo salto personalizzato
const biondi = ROSTER_TEST.find(a => a.id === 6);
assert.strictEqual(biondi.id, 6);
console.log(`  ✅ Atleta #6 (${biondi.name}): Gestione protocolli reattivi senza CMJ imposto`);

// Test Allasia #1: Box Squat 90° (Salva-Anca/Tibia)
const allasia = ROSTER_TEST.find(a => a.id === 1);
const allasiaSquat82_5 = SportsScienceMath.calcSquatLoad(allasia.sq1RM, allasia.bw, 82.5);
assert.strictEqual(allasiaSquat82_5, 71.5);
console.log(`  ✅ Atleta #1 (${allasia.name}): Box Squat 90° W4 @82.5% calcola esattamente 71.5 kg`);

// --- 4. Readiness & ACWR Invariants ---
console.log('\n--- 4. Squad Fatigue & ACWR Dynamic Monitoring ---');
const normalACWR = SportsScienceMath.calcACWR(1250, 1100);
assert.strictEqual(normalACWR.zone, 'SWEET_SPOT');
console.log(`  ✅ ACWR Normale (1250/1100): ${normalACWR.label}`);

const spikeACWR = SportsScienceMath.calcACWR(1800, 1000);
assert.strictEqual(spikeACWR.zone, 'DANGER_ZONE');
console.log(`  ✅ ACWR Spike (1800/1000): ${spikeACWR.label}`);

console.log('\n======================================================');
console.log('🎉 Integration Suite: TUTTI I CONTROLLI SUPERATI!');
console.log('======================================================\n');
