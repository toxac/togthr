import { Link } from 'expo-router';
import React from 'react'
import { View, Text } from 'react-native';


import Button from '../Button';

function EmptyList() {
    return (
        <View className="">
            <Text className="">You have not created any list</Text>
            <Link href="/(tabs)/lists/create">
                <Button>Create new list</Button>
            </Link>

        </View>
    )
}

export default EmptyList