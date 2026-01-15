-- Create table for Free Guidance submissions
CREATE TABLE public.free_guidance_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  career_stage TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.free_guidance_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit (INSERT) - this is a public form
CREATE POLICY "Anyone can submit free guidance form"
ON public.free_guidance_submissions
FOR INSERT
WITH CHECK (true);

-- Restrict SELECT to service role only (admins via backend)
CREATE POLICY "Only service role can view free guidance submissions"
ON public.free_guidance_submissions
FOR SELECT
USING (false);

-- Block client-side updates
CREATE POLICY "No direct updates allowed"
ON public.free_guidance_submissions
FOR UPDATE
USING (false);

-- Block client-side deletions
CREATE POLICY "No deletions allowed"
ON public.free_guidance_submissions
FOR DELETE
USING (false);

-- Add trigger for automatic timestamp updates
CREATE TRIGGER update_free_guidance_submissions_updated_at
BEFORE UPDATE ON public.free_guidance_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for resume uploads
INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('resumes', 'resumes', false, 5242880);

-- Storage policy: Anyone can upload resumes (public form)
CREATE POLICY "Anyone can upload resumes"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'resumes');

-- Storage policy: Only service role can read resumes (admins via backend)
CREATE POLICY "Only service role can read resumes"
ON storage.objects
FOR SELECT
USING (bucket_id = 'resumes' AND false);

-- Block public deletions
CREATE POLICY "No public deletions of resumes"
ON storage.objects
FOR DELETE
USING (bucket_id = 'resumes' AND false);