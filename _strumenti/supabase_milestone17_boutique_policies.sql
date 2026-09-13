-- =============================================================================
-- MILESTONE 17: POLICIES ROW LEVEL SECURITY BOUTIQUE PERSONAL TRAINING
-- Abilita inserimento e aggiornamento clienti privati e schede dal Coach Cockpit
-- Tenant: 'boutique_private' (Segregazione stagna da 'marsala_a2')
-- =============================================================================

DO $$
BEGIN
  -- Permesso inserimento anagrafica clienti privati boutique
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'boutique_clients' AND policyname = 'anon_boutique_clients_insert') THEN
    CREATE POLICY anon_boutique_clients_insert ON public.boutique_clients 
      FOR INSERT TO anon 
      WITH CHECK (tenant_id = 'boutique_private');
  END IF;

  -- Permesso modifica anagrafica clienti privati boutique
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'boutique_clients' AND policyname = 'anon_boutique_clients_update') THEN
    CREATE POLICY anon_boutique_clients_update ON public.boutique_clients 
      FOR UPDATE TO anon 
      USING (tenant_id = 'boutique_private') 
      WITH CHECK (tenant_id = 'boutique_private');
  END IF;

  -- Permesso inserimento schede di allenamento private boutique
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'boutique_workout_cards' AND policyname = 'anon_boutique_cards_insert') THEN
    CREATE POLICY anon_boutique_cards_insert ON public.boutique_workout_cards 
      FOR INSERT TO anon 
      WITH CHECK (tenant_id = 'boutique_private');
  END IF;

  -- Permesso modifica schede di allenamento private boutique
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'boutique_workout_cards' AND policyname = 'anon_boutique_cards_update') THEN
    CREATE POLICY anon_boutique_cards_update ON public.boutique_workout_cards 
      FOR UPDATE TO anon 
      USING (tenant_id = 'boutique_private') 
      WITH CHECK (tenant_id = 'boutique_private');
  END IF;
END $$;

-- Inserimento seed iniziale di collaudo per Paulo (se non presente)
INSERT INTO public.boutique_clients (
  id,
  tenant_id,
  first_name,
  last_name,
  email,
  phone,
  category,
  sport_or_goal,
  status,
  weight_kg,
  height_cm,
  notes
) VALUES (
  'b0071000-0000-0000-0000-000000000001',
  'boutique_private',
  'Ciro',
  'Bisi',
  'ciro.bisi@example.com',
  '+39 333 1234567',
  'personal',
  'Forza & Ipertrofia Funzionale (Upper/Lower)',
  'active',
  78.5,
  178.0,
  'Cliente Boutique VIP di Coach Paulo. Focus su panca e squat con controllo del volume.'
) ON CONFLICT (email) DO UPDATE 
SET first_name = EXCLUDED.first_name,
    last_name = EXCLUDED.last_name;

-- Scheda di allenamento seed collegata
INSERT INTO public.boutique_workout_cards (
  id,
  tenant_id,
  client_id,
  name,
  session_type,
  status,
  rir_target,
  blocks,
  staff_notes
) VALUES (
  'c0071000-0000-0000-0000-000000000001',
  'boutique_private',
  'b0071000-0000-0000-0000-000000000001',
  'Full Body A — Forza & Controllo Motorio',
  'Strength',
  'active',
  2,
  '[
    {
      "id": "b-prehab-1",
      "title": "Attivazione & Mobilità Articolare",
      "format": "Classico",
      "items": [
        {
          "id": "item-1",
          "exerciseName": "90/90 Hip Mobility & Extrarotazione",
          "movementPattern": "Mobility",
          "sets": 2,
          "repsOrTime": "10 reps/lato",
          "weightKg": 0,
          "restSec": 45,
          "rpeTarget": 5,
          "staffNotes": "Respirazione diaframmatica lenta, nessun compenso lombare"
        },
        {
          "id": "item-2",
          "exerciseName": "Band Pull-Apart & Dislocazioni Spalla",
          "movementPattern": "Mobility",
          "sets": 2,
          "repsOrTime": "15 reps",
          "weightKg": 0,
          "restSec": 45,
          "rpeTarget": 5,
          "staffNotes": "Attivazione trapezio medio e romboidi"
        }
      ]
    },
    {
      "id": "b-main-1",
      "title": "Blocco Principale — Forza Funzionale",
      "format": "Classico",
      "items": [
        {
          "id": "item-3",
          "exerciseName": "Back Squat con Bilanciere",
          "movementPattern": "Squat",
          "sets": 4,
          "repsOrTime": "6 reps",
          "weightKg": 70,
          "restSec": 120,
          "rpeTarget": 8,
          "staffNotes": "Discesa in 3 secondi, risalita esplosiva. RIR target: 2."
        },
        {
          "id": "item-4",
          "exerciseName": "Spinte Panca Piana con Manubri",
          "movementPattern": "Push",
          "sets": 3,
          "repsOrTime": "8 reps",
          "weightKg": 24,
          "restSec": 90,
          "rpeTarget": 8,
          "staffNotes": "Massima apertura scapolare e spinta compatta."
        },
        {
          "id": "item-5",
          "exerciseName": "Rematore con Manubrio su Panca",
          "movementPattern": "Pull",
          "sets": 3,
          "repsOrTime": "8 reps/lato",
          "weightKg": 26,
          "restSec": 75,
          "rpeTarget": 8,
          "staffNotes": "Gomito vicino al fianco, controllo eccentrico."
        }
      ]
    },
    {
      "id": "b-core-1",
      "title": "Core Stability & Anti-Rotazione",
      "format": "Circuito",
      "items": [
        {
          "id": "item-6",
          "exerciseName": "Pallof Press con Elastico",
          "movementPattern": "Core",
          "sets": 3,
          "repsOrTime": "30 sec/lato",
          "weightKg": 0,
          "restSec": 60,
          "rpeTarget": 7,
          "staffNotes": "Isometria pura senza torsione del bacino."
        }
      ]
    }
  ]'::jsonb,
  'Scheda personalizzata redatta da Coach Paulo Mangiapane. Rispettare i tempi di recupero e l RPE 8.'
) ON CONFLICT (id) DO NOTHING;
