import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Container from '../../components/Container';

import LoginForm from '~/components/authentication/LoginForm';
import RegisterForm from '~/components/authentication/RegisterForm';

function AuthMainScreen() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <Container>
            <View className='flex-1 justify-center items-center'>
                {isLogin ? <LoginForm /> : <RegisterForm />}
                <Text onPress={() => setIsLogin(!isLogin)}>
                    <Text>{isLogin ? "Register" : "Login"}</Text>
                </Text>
            </View>
        </Container>
    )
}

export default AuthMainScreen