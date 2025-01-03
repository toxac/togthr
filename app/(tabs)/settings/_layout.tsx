import { Stack } from 'expo-router';

export default function SettingsLayout() {
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
            <Stack.Screen name="index" options={{ title: 'Settings' }} />
            <Stack.Screen name="edit" options={{ title: 'Edit Settings' }} />
        </Stack>
    );
}