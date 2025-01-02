import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

import { useAuth } from './AuthContext';




export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (!user) {
        router.replace({ pathname: '/auth', params: { type: 'login' } });
        return null;
    }

    return <>{children}</>;
};
