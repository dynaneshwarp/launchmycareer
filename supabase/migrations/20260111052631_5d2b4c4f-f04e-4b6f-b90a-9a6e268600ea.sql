-- Add restrictive SELECT policy - only service role (backend) can read submissions
CREATE POLICY "Only service role can view submissions"
ON public.get_started_submissions
FOR SELECT
USING (false);

-- Add restrictive UPDATE policy - block all client updates
CREATE POLICY "No direct updates allowed"
ON public.get_started_submissions
FOR UPDATE
USING (false);

-- Add restrictive DELETE policy - block all deletions
CREATE POLICY "No deletions allowed"
ON public.get_started_submissions
FOR DELETE
USING (false);