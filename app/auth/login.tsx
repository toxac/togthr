// handles both login and register
import React, { useState } from 'react';
import { View, Text, Alert, AppState, TextInput } from 'react-native';

import { Button } from '../../components/Button';

import { Container } from '~/components/Container';



function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function login() {
        setLoading(true);

    }

    async function register() {
        setLoading(true);
    }

    return (
        <Container>
            <View className='flex-1 gap-6'>
                <TextInput
                    className='h-12 px-4 rounded-full bg-white border border-gray-700'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="email@address.com"
                    autoCapitalize='none'
                />

                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    className='h-12 px-4 rounded-full bg-white border border-gray-700'
                    value={password}
                    secureTextEntry={true}
                    placeholder="Password"
                    autoCapitalize='none'
                />
                <View className='flex flex-row gap-6 w-full'>
                    <Button title="Sign in" disabled={loading} onPress={() => login()} />
                    <Button title="Sign up" disabled={loading} onPress={() => register()} />
                </View>
            </View>

        </Container>
    );
}

export default LoginScreen;