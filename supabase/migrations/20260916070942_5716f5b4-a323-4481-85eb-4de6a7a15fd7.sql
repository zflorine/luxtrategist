CREATE POLICY "Trusted service manages quote requests"
ON public.quote_requests
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);