import { User } from '@supabase/supabase-js';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { supabase } from '../../lib/supabase';


interface AuthContextProps {
    user: User | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user || null)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null)
        })
        setLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
