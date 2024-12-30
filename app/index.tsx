
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

import Container from '~/components/Container';

// styling
// https://www.youtube.com/watch?v=CzJQEstIiEI&t=1111s

export default function Home() {
  return (
    <Container>
      <View className='flex-1 justify-center items-center'>
        <Text className="text-center text-2xl text-emerald-600 font-bold">Let's do Togthr</Text>
        <View className='w-full rounded-lg bg-yellow-700 px-4 py-6'><Text>Hello</Text></View>
        <Link href={{ pathname: '/auth', params: { type: 'login' } }} > Login </Link>
      </View>
    </Container>
  );
}
