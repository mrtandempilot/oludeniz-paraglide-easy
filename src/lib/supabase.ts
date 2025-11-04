// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export interface Tour {
  id: number;
  name: string;
  name_tr: string | null;
  slug: string;
  category: string;
  short_description: string;
  full_description: string;
  description_tr: string | null;
  price_adult: number;
  price_child: number;
  currency: string;
  duration: string;
  start_times: string[];
  meeting_point: string;
  pickup_available: boolean;
  pickup_price: number;
  age_limit: string;
  fitness_level: string;
  included: string[];
  not_included: string[];
  what_to_bring: string[];
  image_url: string | null;
  gallery_urls: string[] | null;
  video_url: string | null;
  is_active: boolean;
  seasonal: boolean;
  available_from: string | null;
  available_to: string | null;
  total_bookings: number;
  rating: number;
  total_reviews: number;
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id?: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  session_id: string;
  channel: string;
  tour_name: string;
  booking_date: string;
  tour_start_time: string;
  adults: number;
  children: number;
  hotel_name?: string;
  pickup_required: boolean;
  pickup_location?: string;
  meeting_point?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  payment_status: 'unpaid' | 'partial' | 'paid' | 'refunded';
  special_requests?: string;
}

export interface Customer {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  language?: string;
  country?: string;
  city?: string;
  preferred_contact?: string;
  hotel_name?: string;
  customer_type?: 'new' | 'returning' | 'vip';
  tags?: string[];
  source?: string;
  notes?: string;
}
