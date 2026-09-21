/**
 * Unit Test: Marsala Volley Campo S&C Data & Structure Verification
 */
const assert = require('assert');
const path = require('path');
const fs = require('fs');

const campoDataFile = path.join(__dirname, '..', 'src', 'campo_data.js');
assert.ok(fs.existsSync(campoDataFile), 'src/campo_data.js must exist');

// Load sandbox
const vm = require('vm');
const code = fs.readFileSync(campoDataFile, 'utf8');
const sandbox = { window: {}, document: {}, localStorage: { getItem: () => null, setItem: () => {} } };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

console.log('🧪 Avvio Unit Test: Marsala Volley Campo S&C (W3, W4, W5, W6)...');

const CAMPO_DATA = sandbox.CAMPO_DATA || (sandbox.window && sandbox.window.CAMPO_DATA);
assert.ok(CAMPO_DATA, 'CAMPO_DATA must be defined');

const weeks = ['W3', 'W4', 'W5', 'W6'];
const days = ['lun', 'mer', 'ven'];

weeks.forEach(w => {
  assert.ok(CAMPO_DATA[w], `Week ${w} must exist in CAMPO_DATA`);
  days.forEach(d => {
    const dayData = CAMPO_DATA[w][d];
    assert.ok(dayData, `Week ${w} Day ${d} must exist`);
    assert.ok(dayData.title, `Week ${w} Day ${d} must have title`);
    assert.ok(dayData.subtitle, `Week ${w} Day ${d} must have subtitle`);
    assert.ok(dayData.meta, `Week ${w} Day ${d} must have meta`);
    assert.ok(Array.isArray(dayData.badges) && dayData.badges.length > 0, `Week ${w} Day ${d} must have badges`);
    assert.ok(Array.isArray(dayData.blocks) && dayData.blocks.length === 4, `Week ${w} Day ${d} must have 4 blocks (B1, B2, B3, B4)`);
    assert.ok(dayData.safety, `Week ${w} Day ${d} must have safety rule`);
    console.log(`  ✅ PASS: ${w} - ${d.toUpperCase()} [${dayData.blocks.length} blocchi, ${dayData.badges.length} badge, safety: OK]`);
  });
});

// W5 Specific Invariants
assert.ok(CAMPO_DATA['W5']['ven'].safety.includes('STRICT FRIDAY JUMP BAN'), 'W5 Friday must have STRICT FRIDAY JUMP BAN');
// W6 Specific Invariants (Bosquet rule, Costa Volpino)
assert.ok(CAMPO_DATA['W6']['mer'].safety.includes('BOSQUET'), 'W6 Wednesday must have Bosquet safety rule');
assert.ok(CAMPO_DATA['W6']['ven'].safety.includes('STRICT JUMP BAN'), 'W6 Friday must have Strict Jump Ban');
assert.ok(CAMPO_DATA['W6']['ven'].blocks[3].desc.includes('Costa Volpino'), 'W6 Friday B4 must reference Costa Volpino match');

console.log('\n======================================================');
console.log('🎯 TUTTI I TEST CAMPO S&C SUPERATI CON SUCCESSO!');
console.log('======================================================\n');
