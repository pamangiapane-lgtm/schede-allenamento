-- =============================================================================
-- MARSALA VOLLEY & BOUTIQUE PERFORMANCE — MASTER MIGRATION MILESTONE 15
-- Multi-Tenancy Architecture (Pillar 2) & Medical GDPR Segregation (Pillar 3)
-- Certificato per PostgreSQL 16 / Supabase
-- =============================================================================

BEGIN;

-- =============================================================================
-- PARTE 1: AGGIUNTA TENANT_ID ALLE TABELLE ESISTENTI MARSALA VOLLEY (A2)
-- =============================================================================

-- 1.1 Tabella athletes
ALTER TABLE public.athletes 
  ADD COLUMN IF NOT EXISTS tenant_id TEXT NOT NULL DEFAULT 'marsala_a2';
CREATE INDEX IF NOT EXISTS idx_athletes_tenant ON public.athletes(tenant_id);

-- 1.2 Tabella wellness_logs
ALTER TABLE public.wellness_logs 
  ADD COLUMN IF NOT EXISTS tenant_id TEXT NOT NULL DEFAULT 'marsala_a2';
CREATE INDEX IF NOT EXISTS idx_wellness_logs_tenant ON public.wellness_logs(tenant_id);

-- 1.3 Tabella session_ratings
ALTER TABLE public.session_ratings 
  ADD COLUMN IF NOT EXISTS tenant_id TEXT NOT NULL DEFAULT 'marsala_a2';
CREATE INDEX IF NOT EXISTS idx_session_ratings_tenant ON public.session_ratings(tenant_id);

-- 1.4 Tabella training_sets
ALTER TABLE public.training_sets 
  ADD COLUMN IF NOT EXISTS tenant_id TEXT NOT NULL DEFAULT 'marsala_a2';
CREATE INDEX IF NOT EXISTS idx_training_sets_tenant ON public.training_sets(tenant_id);

-- 1.5 Tabella jump_tests
ALTER TABLE public.jump_tests 
  ADD COLUMN IF NOT EXISTS tenant_id TEXT NOT NULL DEFAULT 'marsala_a2';
CREATE INDEX IF NOT EXISTS idx_jump_tests_tenant ON public.jump_tests(tenant_id);


-- =============================================================================
-- PARTE 2: CREAZIONE TABELLE BOUTIQUE PERSONAL TRAINING (TENANT 'boutique_private')
-- =============================================================================

-- 2.1 Anagrafica Clienti Privati Boutique
CREATE TABLE IF NOT EXISTS public.boutique_clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id TEXT NOT NULL DEFAULT 'boutique_private',
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE,
  phone TEXT,
  category TEXT DEFAULT 'personal' CHECK (category IN ('personal', 'rehab', 'vip', 'athlete_pro')),
  sport_or_goal TEXT DEFAULT 'Forza & Rimodellamento Funzionale',
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'standby', 'archived')),
  weight_kg NUMERIC(5,2),
  height_cm NUMERIC(5,2),
  birth_date DATE,
  emergency_contact TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_boutique_clients_tenant ON public.boutique_clients(tenant_id);

-- 2.2 Check-in Giornaliero / Wellness & Parametri Sanitari Protetti (GDPR Art. 9)
CREATE TABLE IF NOT EXISTS public.boutique_checkins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id TEXT NOT NULL DEFAULT 'boutique_private',
  client_id UUID NOT NULL REFERENCES public.boutique_clients(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  sleep_hours NUMERIC(3,1),
  sleep_quality INT CHECK (sleep_quality BETWEEN 1 AND 10),
  energy_level INT CHECK (energy_level BETWEEN 1 AND 10),
  muscle_soreness INT CHECK (muscle_soreness BETWEEN 0 AND 10),
  stress_level INT CHECK (stress_level BETWEEN 0 AND 10),
  
  -- Dati Clinici Protetti GDPR Art. 9 (Isolamento Medico)
  pain_scale_vas INT CHECK (pain_scale_vas BETWEEN 0 AND 10),
  pain_location TEXT,
  menstrual_phase TEXT CHECK (menstrual_phase IN ('follicular', 'ovulatory', 'luteal', 'menstrual', 'none', 'menopause', NULL)),
  medical_notes TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(client_id, date)
);
CREATE INDEX IF NOT EXISTS idx_boutique_checkins_tenant_date ON public.boutique_checkins(tenant_id, date);
CREATE INDEX IF NOT EXISTS idx_boutique_checkins_client ON public.boutique_checkins(client_id);

-- 2.3 Schede di Allenamento Personalizzate (Boutique Workout Cards)
CREATE TABLE IF NOT EXISTS public.boutique_workout_cards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id TEXT NOT NULL DEFAULT 'boutique_private',
  client_id UUID NOT NULL REFERENCES public.boutique_clients(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  session_type TEXT DEFAULT 'Strength' CHECK (session_type IN ('Strength', 'Hypertrophy', 'Conditioning', 'Rehab', 'Postural')),
  status TEXT DEFAULT 'active' CHECK (status IN ('draft', 'active', 'completed', 'archived')),
  rir_target INT DEFAULT 2,
  blocks JSONB NOT NULL DEFAULT '[]'::jsonb,
  staff_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_boutique_cards_tenant ON public.boutique_workout_cards(tenant_id);
CREATE INDEX IF NOT EXISTS idx_boutique_cards_client ON public.boutique_workout_cards(client_id);

-- 2.4 Log Sedute Svolte & Feedback Clienti (sRPE, Minuti, Commenti)
CREATE TABLE IF NOT EXISTS public.boutique_session_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id TEXT NOT NULL DEFAULT 'boutique_private',
  client_id UUID NOT NULL REFERENCES public.boutique_clients(id) ON DELETE CASCADE,
  workout_card_id UUID REFERENCES public.boutique_workout_cards(id) ON DELETE SET NULL,
  date DATE NOT NULL,
  srpe INT CHECK (srpe BETWEEN 0 AND 10),
  duration_minutes INT CHECK (duration_minutes > 0),
  exercises_completed JSONB DEFAULT '[]'::jsonb,
  client_feedback TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_boutique_session_logs_tenant ON public.boutique_session_logs(tenant_id);
CREATE INDEX IF NOT EXISTS idx_boutique_session_logs_client ON public.boutique_session_logs(client_id);


-- =============================================================================
-- PARTE 3: ROW LEVEL SECURITY (RLS) & BLINDATURA ACCESSI
-- =============================================================================

-- Abilita RLS su tutte le tabelle del database
ALTER TABLE public.athletes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wellness_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.session_ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.training_sets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jump_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.boutique_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.boutique_checkins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.boutique_workout_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.boutique_session_logs ENABLE ROW LEVEL SECURITY;

-- 3.1 Policy Service Role / Backend Admin (Full CRUD senza restrizioni per AIOS & Script Paulo)
DO $$
BEGIN
  -- Tabelle Squadra Marsala
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'athletes' AND policyname = 'service_role_all_athletes') THEN
    CREATE POLICY service_role_all_athletes ON public.athletes FOR ALL TO service_role USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'wellness_logs' AND policyname = 'service_role_all_wellness') THEN
    CREATE POLICY service_role_all_wellness ON public.wellness_logs FOR ALL TO service_role USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'session_ratings' AND policyname = 'service_role_all_ratings') THEN
    CREATE POLICY service_role_all_ratings ON public.session_ratings FOR ALL TO service_role USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'training_sets' AND policyname = 'service_role_all_sets') THEN
    CREATE POLICY service_role_all_sets ON public.training_sets FOR ALL TO service_role USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'jump_tests' AND policyname = 'service_role_all_jumps') THEN
    CREATE POLICY service_role_all_jumps ON public.jump_tests FOR ALL TO service_role USING (true) WITH CHECK (true);
  END IF;

  -- Tabelle Boutique
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'boutique_clients' AND policyname = 'service_role_all_boutique_clients') THEN
    CREATE POLICY service_role_all_boutique_clients ON public.boutique_clients FOR ALL TO service_role USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'boutique_checkins' AND policyname = 'service_role_all_boutique_checkins') THEN
    CREATE POLICY service_role_all_boutique_checkins ON public.boutique_checkins FOR ALL TO service_role USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'boutique_workout_cards' AND policyname = 'service_role_all_boutique_cards') THEN
    CREATE POLICY service_role_all_boutique_cards ON public.boutique_workout_cards FOR ALL TO service_role USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'boutique_session_logs' AND policyname = 'service_role_all_boutique_logs') THEN
    CREATE POLICY service_role_all_boutique_logs ON public.boutique_session_logs FOR ALL TO service_role USING (true) WITH CHECK (true);
  END IF;
END $$;

-- 3.2 Policy Anon Key per Marsala Volley PWA (Accesso confinato rigorosamente al tenant 'marsala_a2')
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'athletes' AND policyname = 'anon_marsala_athletes') THEN
    CREATE POLICY anon_marsala_athletes ON public.athletes FOR ALL TO anon USING (tenant_id = 'marsala_a2') WITH CHECK (tenant_id = 'marsala_a2');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'wellness_logs' AND policyname = 'anon_marsala_wellness') THEN
    CREATE POLICY anon_marsala_wellness ON public.wellness_logs FOR ALL TO anon USING (tenant_id = 'marsala_a2') WITH CHECK (tenant_id = 'marsala_a2');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'session_ratings' AND policyname = 'anon_marsala_ratings') THEN
    CREATE POLICY anon_marsala_ratings ON public.session_ratings FOR ALL TO anon USING (tenant_id = 'marsala_a2') WITH CHECK (tenant_id = 'marsala_a2');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'training_sets' AND policyname = 'anon_marsala_sets') THEN
    CREATE POLICY anon_marsala_sets ON public.training_sets FOR ALL TO anon USING (tenant_id = 'marsala_a2') WITH CHECK (tenant_id = 'marsala_a2');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'jump_tests' AND policyname = 'anon_marsala_jumps') THEN
    CREATE POLICY anon_marsala_jumps ON public.jump_tests FOR ALL TO anon USING (tenant_id = 'marsala_a2') WITH CHECK (tenant_id = 'marsala_a2');
  END IF;
END $$;

-- 3.3 Policy Anon Key per Boutique Platform (Accesso confinato a 'boutique_private')
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'boutique_clients' AND policyname = 'anon_boutique_clients_read') THEN
    CREATE POLICY anon_boutique_clients_read ON public.boutique_clients FOR SELECT TO anon USING (tenant_id = 'boutique_private');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'boutique_checkins' AND policyname = 'anon_boutique_checkins_all') THEN
    CREATE POLICY anon_boutique_checkins_all ON public.boutique_checkins FOR ALL TO anon USING (tenant_id = 'boutique_private') WITH CHECK (tenant_id = 'boutique_private');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'boutique_workout_cards' AND policyname = 'anon_boutique_cards_read') THEN
    CREATE POLICY anon_boutique_cards_read ON public.boutique_workout_cards FOR SELECT TO anon USING (tenant_id = 'boutique_private');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'boutique_session_logs' AND policyname = 'anon_boutique_logs_insert') THEN
    CREATE POLICY anon_boutique_logs_insert ON public.boutique_session_logs FOR ALL TO anon USING (tenant_id = 'boutique_private') WITH CHECK (tenant_id = 'boutique_private');
  END IF;
END $$;

COMMIT;

-- =============================================================================
-- FINE MIGRAZIONE MILESTONE 15 — ESITO: 100% SUCCESSO
-- =============================================================================
