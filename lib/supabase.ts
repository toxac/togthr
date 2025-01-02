import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://cfqfitxiweiwcanqzffq.supabase.co";
const supabaseAPI = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmcWZpdHhpd2Vpd2NhbnF6ZmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2NjM0ODcsImV4cCI6MjA1MTIzOTQ4N30.8sCA0wo3hEp1Pmrig3UWKyR-3HMAvz6PqZdwXpkk020";


export const supabase = createClient(supabaseUrl, supabaseAPI, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
