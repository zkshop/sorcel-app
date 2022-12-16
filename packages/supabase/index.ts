import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://kqjytgxbtetzewipikax.supabase.co';
const supabaseKey = process.env.SECRET_SUPABASE || '';

export const supabase = createClient(supabaseUrl, supabaseKey);
