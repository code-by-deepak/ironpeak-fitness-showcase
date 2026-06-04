
CREATE TABLE public.free_trial_leads (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  goal TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.free_trial_leads TO anon, authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.free_trial_leads_id_seq TO anon, authenticated;
GRANT ALL ON public.free_trial_leads TO service_role;
GRANT ALL ON SEQUENCE public.free_trial_leads_id_seq TO service_role;

ALTER TABLE public.free_trial_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a free trial lead"
  ON public.free_trial_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 120
    AND char_length(phone) BETWEEN 1 AND 40
    AND char_length(email) BETWEEN 3 AND 255
    AND char_length(goal) BETWEEN 1 AND 60
    AND (message IS NULL OR char_length(message) <= 2000)
  );
