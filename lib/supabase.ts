import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseAPI = process.env.PUBLIC_SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseAPI) {
    throw new Error('Missing Supabase URL or API key');
}

export const supabase = createClient(supabaseUrl, supabaseAPI, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
