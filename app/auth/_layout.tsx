import { Stack } from 'expo-router';

export default function AuthLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Authentication' }} />
            <Stack.Screen name="forgot-password" options={{ title: 'Reset Password' }} />
        </Stack>
    );
}
