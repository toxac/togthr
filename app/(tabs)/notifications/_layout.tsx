import { Stack } from 'expo-router';

export default function NotificationsLayout() {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#0d9488',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
            <Stack.Screen name="index" options={{ title: 'Notifications' }} />
        </Stack>
    );
}