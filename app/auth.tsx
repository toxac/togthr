import React, { useState } from 'react';
import { View, Text, AppState } from 'react-native';

import Container from '../components/Container';

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
    const [authComponent, setAuthComponent] = useState('login');
    return (
        <Container bgColor='bg-gray-100'>
            <View className='flex-1 justify-center items-center'>
                <Text className='text-2xl font-bold text-gray-800'>{authComponent === 'register' ? 'Register' : 'Login'}</Text>
                {authComponent === 'register' ?
                    (
                        <>
                            <RegisterForm />
                            <Text className='underline text-right' onPress={() => setAuthComponent('login')}>
                                Click to Login
                            </Text>
                        </>
                    )
                    :
                    (
                        <>
                            <LoginForm />
                            <Text className='underline text-right' onPress={() => setAuthComponent('register')}>
                                Click to Register
                            </Text>
                        </>
                    )

                }
            </View>
        </Container>
    )
}
