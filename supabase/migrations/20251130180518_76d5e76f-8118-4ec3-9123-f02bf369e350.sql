-- Create portfolio projects table
CREATE TABLE public.portfolio_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  client TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  image_url TEXT,
  project_url TEXT,
  metrics JSONB DEFAULT '[]'::jsonb,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.portfolio_projects ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (portfolio is public-facing)
CREATE POLICY "Anyone can view portfolio projects" 
ON public.portfolio_projects 
FOR SELECT 
USING (true);

-- Create policy for authenticated admin insert
CREATE POLICY "Authenticated users can insert portfolio projects" 
ON public.portfolio_projects 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

-- Create policy for authenticated admin update
CREATE POLICY "Authenticated users can update portfolio projects" 
ON public.portfolio_projects 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

-- Create policy for authenticated admin delete
CREATE POLICY "Authenticated users can delete portfolio projects" 
ON public.portfolio_projects 
FOR DELETE 
USING (auth.uid() IS NOT NULL);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_portfolio_projects_updated_at
BEFORE UPDATE ON public.portfolio_projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert real client projects
INSERT INTO public.portfolio_projects (title, client, category, description, tags, project_url, metrics, featured) VALUES
('EFiling Infotech Website & SEO', 'EFiling Infotech', 'Web Development', 'Complete website development with comprehensive SEO optimization and digital marketing strategy for a leading tax filing service provider.', ARRAY['Website', 'SEO', 'Digital Marketing'], 'https://www.efilinginfotech.com/', '[{"label": "Platform", "value": "Custom"}, {"label": "Service", "value": "SEO + Dev"}]'::jsonb, true),
('NeoSigner Web Platform', 'NeoSigner', 'Web Development', 'Modern web application development with advanced SEO techniques and performance optimization for digital signature solutions.', ARRAY['Website', 'SEO', 'Optimization'], 'https://neosigner.com/', '[{"label": "Platform", "value": "Web App"}, {"label": "Service", "value": "SEO + Dev"}]'::jsonb, true),
('Vardhaan Studio Social Media Campaign', 'Vardhaan Studio', 'Poster & Ad Design', 'Creative poster design and social media advertising campaign for a growing photography studio brand.', ARRAY['Posters', 'Social Media', 'Ad Creatives'], 'https://www.facebook.com/Vardhaanstudio', '[{"label": "Platform", "value": "Facebook"}, {"label": "Type", "value": "Ads"}]'::jsonb, true),
('Techsalicious Marketing Materials', 'Techsalicious', 'Poster & Ad Design', 'Tech-focused poster designs and branding materials for social media marketing campaigns.', ARRAY['Tech Posters', 'Social Media', 'Branding'], 'https://www.facebook.com/techsalicious/', '[{"label": "Platform", "value": "Facebook"}, {"label": "Type", "value": "Ads"}]'::jsonb, true),
('DSC Online Services Campaign', 'Get DSC Online Free', 'Poster & Ad Design', 'Digital poster design and social media marketing campaigns for digital signature certificate services.', ARRAY['Digital Posters', 'Marketing', 'Social'], 'https://www.facebook.com/getdsconlinefree', '[{"label": "Platform", "value": "Facebook"}, {"label": "Type", "value": "Campaigns"}]'::jsonb, true);