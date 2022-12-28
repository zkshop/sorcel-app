import { envVars } from '@3shop/config';
import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://kqjytgxbtetzewipikax.supabase.co';
const supabaseKey = envVars.SECRET_SUPABASE || '';

export const supabase = createClient(supabaseUrl, supabaseKey);
