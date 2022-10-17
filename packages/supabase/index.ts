import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://kqjytgxbtetzewipikax.supabase.co';
const supabaseKey = process.env.SUPABASE_API_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);
