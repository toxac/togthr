import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen name="index"
                options={{
                    title: "Home",
                    headerShown: true,
                }}
            />
            <Stack.Screen name="(tabs)"
                options={{
                    title: "app tabs",
                    headerShown: false,
                }}
            />
            <Stack.Screen name="about"
                options={{
                    title: "About Floqr",
                    headerShown: true,
                }}
            />
            <Stack.Screen name="auth"
                options={{
                    title: "Login/Register",
                    headerShown: true,
                }}
            />
            <Stack.Screen name="forgotpassword"
                options={{
                    title: "Reset Password",
                    headerShown: true,
                }}
            />
            <Stack.Screen name="+not-found"
                options={{
                    title: "Oops not found",
                    headerShown: true,
                }}
            />
        </Stack>
    )
}