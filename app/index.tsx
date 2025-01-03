import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

import Container from '~/components/Container';

function HomeScreen() {
    return (
        <Container>
            <Text className='text-2xl'>HomeScreen</Text>
            <View className='flex gap-3'>
                <Link href='/(tabs)/lists'>Lists</Link>
                <Link href='/auth'>Auth</Link>
            </View>
        </Container>
    )
}

export default HomeScreen