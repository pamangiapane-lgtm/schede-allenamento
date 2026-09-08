/**
 * Marsala Volley A2 - Supabase Client & Dual-Run Engine (v2.0)
 * Gestione sincronizzazione ultra-rapida (< 40ms) con Shadow Backend Google Sheets
 */

const SUPABASE_CONFIG = {
  url: 'https://trhaoucqnmhqiimrkada.supabase.co',
  anonKey: 'sb_publishable_SDPimUfUqYBFlO5mZ_JdGQ_8N4sWYwd',
  dualRunEnabled: true,
  gasUrl: 'https://script.google.com/macros/s/AKfycbyxLzbnm_LcBDYrB1_hBdCD6HxvOxA7__lXHe7_xmbe2kynoGNA_oDDh954zR3RIzr9/exec',
  token: 'mv26-prd-3xF7wNqK'
};

// Inizializzazione Client Supabase
let _sb = null;
function getSb() {
  if (!_sb && window.supabase && typeof window.supabase.createClient === 'function') {
    _sb = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
  }
  return _sb;
}

// ── INDEXEDDB OFFLINE QUEUE ─────────────────────────────────────────────────
const IDB_NAME = 'MarsalaOfflineDB';
const IDB_VERSION = 1;
const IDB_STORE = 'pending_sync';

function openOfflineDB() {
  return new Promise((resolve) => {
    if (!('indexedDB' in window)) return resolve(null);
    const req = indexedDB.open(IDB_NAME, IDB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) {
        db.createObjectStore(IDB_STORE, { keyPath: 'id', autoIncrement: true });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
  });
}

async function queueOfflineItem(type, data) {
  try {
    const db = await openOfflineDB();
    if (!db) return;
    const tx = db.transaction(IDB_STORE, 'readwrite');
    const store = tx.objectStore(IDB_STORE);
    store.add({ type, data, timestamp: new Date().toISOString() });
  } catch (err) {
    console.warn('[OfflineDB] Errore accodamento:', err);
  }
}

async function flushOfflineQueue() {
  if (!navigator.onLine) return;
  try {
    const db = await openOfflineDB();
    if (!db) return;
    const tx = db.transaction(IDB_STORE, 'readwrite');
    const store = tx.objectStore(IDB_STORE);
    const getAllReq = store.getAll();
    getAllReq.onsuccess = async () => {
      const items = getAllReq.result || [];
      if (items.length === 0) return;
      console.log(`[OfflineDB] Svuotamento coda (${items.length} elementi)...`);
      for (const item of items) {
        try {
          if (item.type === 'wellness') await sbSaveWellness(item.data, false);
          else if (item.type === 'training_set') await sbSaveTrainingSet(item.data, false);
          else if (item.type === 'session_rating') await sbSaveSessionRating(item.data, false);
          else if (item.type === 'bodyweight') await sbUpdateAthlete(item.data.athlete_id, { baseline_weight: item.data.weight }, false);
          else if (item.type === 'one_rm') await sbUpdateAthlete(item.data.athlete_id, item.data.fields, false);
          
          const delTx = db.transaction(IDB_STORE, 'readwrite');
          delTx.objectStore(IDB_STORE).delete(item.id);
        } catch (e) {
          console.warn('[OfflineDB] Errore sync item:', e);
        }
      }
    };
  } catch (err) {
    console.warn('[OfflineDB] Errore flush:', err);
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('online', flushOfflineQueue);
}

// ── DUAL-RUN FORWARDING TO GOOGLE SHEETS ──────────────────────────────────────
function forwardToGoogleSheets(payload) {
  if (!SUPABASE_CONFIG.dualRunEnabled) return;
  try {
    fetch(`${SUPABASE_CONFIG.gasUrl}?token=${SUPABASE_CONFIG.token}`, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(() => {});
  } catch (e) {}
}

// ── API CRUD SUPABASE ────────────────────────────────────────────────────────

async function sbSaveWellness(data, queueIfOffline = true) {
  const sb = getSb();
  const dateStr = data.date || new Date().toLocaleDateString('en-CA');
  const record = {
    athlete_id: parseInt(data.athlete_id, 10),
    date: dateStr,
    sleep_quality: data.sleep_quality != null ? Number(data.sleep_quality) : null,
    fatigue: data.fatigue != null ? Number(data.fatigue) : null,
    readiness: data.readiness != null ? Number(data.readiness) : null,
    soreness: data.soreness != null ? Number(data.soreness) : null,
    stress: data.stress != null ? Number(data.stress) : null,
    score: data.score != null ? Number(data.score) : null,
    note: data.note || null
  };

  if (record.score == null && record.sleep_quality && record.fatigue && record.readiness && record.soreness) {
    record.score = Math.round(((record.sleep_quality + record.readiness + (10 - record.fatigue) + (10 - record.soreness)) / 4) * 100) / 100;
  }

  if (typeof navigator !== 'undefined' && !navigator.onLine && queueIfOffline) {
    await queueOfflineItem('wellness', record);
    return { offline: true, data: record };
  }

  if (!sb) {
    forwardToGoogleSheets({ foglio: 'Wellness', ...record });
    return { fallback: true };
  }

  try {
    const { data: res, error } = await sb
      .from('wellness_logs')
      .upsert(record, { onConflict: 'athlete_id,date' })
      .select();
    if (error) throw error;

    forwardToGoogleSheets({
      foglio: 'Wellness',
      id: record.athlete_id,
      data: record.date,
      qualita_sonno: record.sleep_quality,
      fatica: record.fatigue,
      readines: record.readiness,
      dolori: record.soreness,
      stress: record.stress,
      note: record.note,
      timestamp: new Date().toISOString()
    });

    return { success: true, data: res };
  } catch (err) {
    console.error('[Supabase] Errore salvataggio wellness:', err);
    if (queueIfOffline) await queueOfflineItem('wellness', record);
    return { error: err };
  }
}

async function sbSaveTrainingSet(data, queueIfOffline = true) {
  const sb = getSb();
  const dateStr = data.date || new Date().toLocaleDateString('en-CA');
  const record = {
    athlete_id: parseInt(data.athlete_id, 10),
    session_code: data.session_code || 'W-Seduta',
    exercise_name: data.exercise_name || 'Esercizio',
    set_number: parseInt(data.set_number || 1, 10),
    load_kg: data.load_kg != null && !isNaN(data.load_kg) ? Number(data.load_kg) : null,
    reps_done: data.reps_done != null && !isNaN(data.reps_done) ? parseInt(data.reps_done, 10) : null,
    vbt_velocity: data.vbt_velocity != null && !isNaN(data.vbt_velocity) ? Number(data.vbt_velocity) : null,
    cmj_height: data.cmj_height != null && !isNaN(data.cmj_height) ? Number(data.cmj_height) : null,
    rpe: data.rpe != null && !isNaN(data.rpe) ? Number(data.rpe) : null,
    note: data.note || null,
    date: dateStr
  };

  if (typeof navigator !== 'undefined' && !navigator.onLine && queueIfOffline) {
    await queueOfflineItem('training_set', record);
    return { offline: true, data: record };
  }

  if (!sb) {
    forwardToGoogleSheets({ foglio: 'Progressi', ...record });
    return { fallback: true };
  }

  try {
    const { data: res, error } = await sb
      .from('training_sets')
      .insert([record])
      .select();
    if (error) throw error;

    let valStr = '';
    if (record.vbt_velocity != null) valStr = `${record.vbt_velocity} m/s`;
    else if (record.cmj_height != null) valStr = `${record.cmj_height} cm`;
    else if (record.load_kg != null) valStr = `${record.load_kg} kg`;

    forwardToGoogleSheets({
      foglio: 'Progressi',
      id: record.athlete_id,
      n_seduta: record.session_code,
      esercizio: record.exercise_name,
      valore: valStr,
      kg_usati: record.load_kg || '',
      reps_fatte: record.reps_done || '',
      data: record.date,
      note_atleta: record.note || '',
      timestamp: new Date().toISOString()
    });

    return { success: true, data: res };
  } catch (err) {
    console.error('[Supabase] Errore salvataggio training set:', err);
    if (queueIfOffline) await queueOfflineItem('training_set', record);
    return { error: err };
  }
}

async function sbSaveSessionRating(data, queueIfOffline = true) {
  const sb = getSb();
  const dateStr = data.date || new Date().toLocaleDateString('en-CA');
  const record = {
    athlete_id: parseInt(data.athlete_id, 10),
    session_code: data.session_code || 'W-Seduta',
    date: dateStr,
    srpe: data.srpe != null ? Number(data.srpe) : null,
    fatigue: data.fatigue != null ? Number(data.fatigue) : null,
    duration_minutes: parseInt(data.duration_minutes || 60, 10),
    note: data.note || null
  };

  if (typeof navigator !== 'undefined' && !navigator.onLine && queueIfOffline) {
    await queueOfflineItem('session_rating', record);
    return { offline: true, data: record };
  }

  if (!sb) {
    forwardToGoogleSheets({ foglio: 'Progressi', ...record });
    return { fallback: true };
  }

  try {
    const { data: res, error } = await sb
      .from('session_ratings')
      .upsert(record, { onConflict: 'athlete_id,session_code,date' })
      .select();
    if (error) throw error;

    forwardToGoogleSheets({
      foglio: 'Progressi',
      id: record.athlete_id,
      n_seduta: record.session_code,
      esercizio: 'Chiusura-Seduta',
      valore: `RPE ${record.srpe}/10 · Fatica ${record.fatigue}/10`,
      data: record.date,
      note_atleta: record.note || '',
      timestamp: new Date().toISOString()
    });

    return { success: true, data: res };
  } catch (err) {
    console.error('[Supabase] Errore salvataggio session rating:', err);
    if (queueIfOffline) await queueOfflineItem('session_rating', record);
    return { error: err };
  }
}

async function sbUpdateAthlete(athleteId, fields, queueIfOffline = true) {
  const sb = getSb();
  const aid = parseInt(athleteId, 10);

  if (typeof navigator !== 'undefined' && !navigator.onLine && queueIfOffline) {
    await queueOfflineItem('one_rm', { athlete_id: aid, fields });
    return { offline: true };
  }

  if (!sb) return { fallback: true };

  try {
    const { data: res, error } = await sb
      .from('athletes')
      .update(fields)
      .eq('id', aid)
      .select();
    if (error) throw error;

    if (fields.baseline_weight != null) {
      forwardToGoogleSheets({
        foglio: 'Progressi',
        id: aid,
        n_seduta: 0,
        esercizio: 'Peso-corporeo',
        valore: fields.baseline_weight,
        data: new Date().toLocaleDateString('en-CA'),
        timestamp: new Date().toISOString()
      });
    }

    return { success: true, data: res };
  } catch (err) {
    console.error('[Supabase] Errore update atleta:', err);
    if (queueIfOffline) await queueOfflineItem('one_rm', { athlete_id: aid, fields });
    return { error: err };
  }
}

function sbSubscribeRealtime(onUpdate) {
  const sb = getSb();
  if (!sb) return null;
  const channel = sb.channel('marsala_realtime_all')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'wellness_logs' }, (payload) => {
      console.log('[Realtime] Nuovo Wellness:', payload);
      if (typeof onUpdate === 'function') onUpdate('wellness', payload);
    })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'training_sets' }, (payload) => {
      console.log('[Realtime] Nuovo Training Set:', payload);
      if (typeof onUpdate === 'function') onUpdate('training_set', payload);
    })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'session_ratings' }, (payload) => {
      console.log('[Realtime] Nuovo Session Rating:', payload);
      if (typeof onUpdate === 'function') onUpdate('session_rating', payload);
    })
    .subscribe();

  return channel;
}

// Esponi globalmente
if (typeof window !== 'undefined') {
  window.MV_SUPABASE = {
    getSb,
    saveWellness: sbSaveWellness,
    saveTrainingSet: sbSaveTrainingSet,
    saveSessionRating: sbSaveSessionRating,
    updateAthlete: sbUpdateAthlete,
    subscribeRealtime: sbSubscribeRealtime,
    flushOfflineQueue
  };
}
