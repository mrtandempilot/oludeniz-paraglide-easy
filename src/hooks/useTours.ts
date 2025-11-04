// src/hooks/useTours.ts
import { useQuery } from '@tanstack/react-query';
import { supabase, Tour } from '@/lib/supabase';

export function useTours() {
  return useQuery<Tour[]>({
    queryKey: ['tours'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tours')
        .select('*')
        .eq('is_active', true)
        .order('price_adult', { ascending: true });

      if (error) {
        throw error;
      }

      return data || [];
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    refetchOnWindowFocus: false,
  });
}

export function useTour(slug: string) {
  return useQuery<Tour | null>({
    queryKey: ['tour', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tours')
        .select('*')
        .eq('slug', slug)
        .eq('is_active', true)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // Not found
          return null;
        }
        throw error;
      }

      return data;
    },
    enabled: !!slug,
  });
}

export function useToursByCategory(category: string) {
  return useQuery<Tour[]>({
    queryKey: ['tours', 'category', category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tours')
        .select('*')
        .eq('category', category)
        .eq('is_active', true)
        .order('price_adult', { ascending: true });

      if (error) {
        throw error;
      }

      return data || [];
    },
    enabled: !!category,
  });
}
