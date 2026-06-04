
ALTER TABLE public.free_trial_leads
  ADD COLUMN IF NOT EXISTS contacted BOOLEAN NOT NULL DEFAULT false;

GRANT SELECT, UPDATE, DELETE ON public.free_trial_leads TO anon, authenticated;

DROP POLICY IF EXISTS "Demo admin can read leads" ON public.free_trial_leads;
CREATE POLICY "Demo admin can read leads"
  ON public.free_trial_leads
  FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "Demo admin can update leads" ON public.free_trial_leads;
CREATE POLICY "Demo admin can update leads"
  ON public.free_trial_leads
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Demo admin can delete leads" ON public.free_trial_leads;
CREATE POLICY "Demo admin can delete leads"
  ON public.free_trial_leads
  FOR DELETE
  TO anon, authenticated
  USING (true);
