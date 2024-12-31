import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, AppState } from 'react-native';

import Container from '../../components/Container';

import LoginForm from '~/components/authentication/LoginForm';
import RegisterForm from '~/components/authentication/RegisterForm';
import { supabase } from '~/lib/supabase';

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
    }
})

export default function AuthMainScreen() {
    const { type } = useLocalSearchParams();
    const isParamLogin: boolean = type === "login";
    const [isLogin, setIsLogin] = useState(isParamLogin);

    return (
        <Container bgColor='bg-gray-100'>
            <View className='flex-1 justify-center items-center'>
                {isLogin ? <LoginForm /> : <RegisterForm />}
                <Text className='underline' onPress={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Click to Register" : "Login"}
                </Text>
            </View>

        </Container>
    )
}
