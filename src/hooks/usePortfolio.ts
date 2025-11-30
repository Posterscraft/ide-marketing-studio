import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string | null;
  tags: string[];
  image_url: string | null;
  project_url: string | null;
  metrics: { label: string; value: string }[];
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export const usePortfolio = () => {
  return useQuery({
    queryKey: ["portfolio-projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("portfolio_projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as PortfolioProject[];
    },
  });
};
