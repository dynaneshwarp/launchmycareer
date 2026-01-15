-- Create tables for Expert Review submissions

-- Resume Review Submissions
CREATE TABLE public.resume_review_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  mobile TEXT NOT NULL,
  resume_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.resume_review_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for resume_review_submissions
CREATE POLICY "Anyone can submit resume review form" 
ON public.resume_review_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Only service role can view resume review submissions" 
ON public.resume_review_submissions 
FOR SELECT 
USING (false);

CREATE POLICY "No direct updates allowed on resume reviews" 
ON public.resume_review_submissions 
FOR UPDATE 
USING (false);

CREATE POLICY "No deletions allowed on resume reviews" 
ON public.resume_review_submissions 
FOR DELETE 
USING (false);

-- Trigger for updated_at
CREATE TRIGGER update_resume_review_submissions_updated_at
BEFORE UPDATE ON public.resume_review_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Profile Review Submissions (LinkedIn & GitHub)
CREATE TABLE public.profile_review_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  mobile TEXT NOT NULL,
  linkedin_url TEXT NOT NULL,
  github_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profile_review_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profile_review_submissions
CREATE POLICY "Anyone can submit profile review form" 
ON public.profile_review_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Only service role can view profile review submissions" 
ON public.profile_review_submissions 
FOR SELECT 
USING (false);

CREATE POLICY "No direct updates allowed on profile reviews" 
ON public.profile_review_submissions 
FOR UPDATE 
USING (false);

CREATE POLICY "No deletions allowed on profile reviews" 
ON public.profile_review_submissions 
FOR DELETE 
USING (false);

-- Trigger for updated_at
CREATE TRIGGER update_profile_review_submissions_updated_at
BEFORE UPDATE ON public.profile_review_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Portfolio Review Submissions
CREATE TABLE public.portfolio_review_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  mobile TEXT NOT NULL,
  portfolio_url TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.portfolio_review_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for portfolio_review_submissions
CREATE POLICY "Anyone can submit portfolio review form" 
ON public.portfolio_review_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Only service role can view portfolio review submissions" 
ON public.portfolio_review_submissions 
FOR SELECT 
USING (false);

CREATE POLICY "No direct updates allowed on portfolio reviews" 
ON public.portfolio_review_submissions 
FOR UPDATE 
USING (false);

CREATE POLICY "No deletions allowed on portfolio reviews" 
ON public.portfolio_review_submissions 
FOR DELETE 
USING (false);

-- Trigger for updated_at
CREATE TRIGGER update_portfolio_review_submissions_updated_at
BEFORE UPDATE ON public.portfolio_review_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for resume review uploads
INSERT INTO storage.buckets (id, name, public)
VALUES ('review-resumes', 'review-resumes', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for review-resumes bucket
CREATE POLICY "Anyone can upload review resumes"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'review-resumes');

CREATE POLICY "Only service role can view review resumes"
ON storage.objects FOR SELECT
USING (bucket_id = 'review-resumes' AND false);

CREATE POLICY "Only service role can delete review resumes"
ON storage.objects FOR DELETE
USING (bucket_id = 'review-resumes' AND false);