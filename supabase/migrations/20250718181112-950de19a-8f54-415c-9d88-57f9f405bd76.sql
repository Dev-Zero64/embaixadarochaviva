-- Create media_items table for storing media information
CREATE TABLE public.media_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  date_display TEXT NOT NULL,
  date_sort DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id)
);

-- Enable Row Level Security
ALTER TABLE public.media_items ENABLE ROW LEVEL SECURITY;

-- Create policies for media_items
CREATE POLICY "Media items are viewable by everyone" 
ON public.media_items 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can insert media items" 
ON public.media_items 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update their own media items" 
ON public.media_items 
FOR UPDATE 
TO authenticated
USING (auth.uid() = created_by);

CREATE POLICY "Users can delete their own media items" 
ON public.media_items 
FOR DELETE 
TO authenticated
USING (auth.uid() = created_by);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_media_items_updated_at
  BEFORE UPDATE ON public.media_items
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for media images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('media-images', 'media-images', true);

-- Create storage policies for media images
CREATE POLICY "Media images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'media-images');

CREATE POLICY "Authenticated users can upload media images" 
ON storage.objects 
FOR INSERT 
TO authenticated
WITH CHECK (bucket_id = 'media-images');

CREATE POLICY "Users can update their own media images" 
ON storage.objects 
FOR UPDATE 
TO authenticated
USING (bucket_id = 'media-images');

CREATE POLICY "Users can delete their own media images" 
ON storage.objects 
FOR DELETE 
TO authenticated
USING (bucket_id = 'media-images');