-- Create table for Get Started form submissions
CREATE TABLE public.get_started_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT NOT NULL,
  career_goal TEXT NOT NULL,
  linkedin_url TEXT,
  github_url TEXT,
  selected_service TEXT NOT NULL,
  has_resume BOOLEAN DEFAULT false,
  resume_url TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.get_started_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit get started form" 
ON public.get_started_submissions 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated admins can view submissions (for now, allow service role only)
-- This keeps submissions private and viewable only in the backend

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_get_started_submissions_updated_at
BEFORE UPDATE ON public.get_started_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();