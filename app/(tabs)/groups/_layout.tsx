import { Stack } from 'expo-router';

export default function GroupsLayout() {
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
            <Stack.Screen name="index" options={{ title: 'My Groups' }} />
            <Stack.Screen name="create" options={{ title: 'Create Group' }} />
            <Stack.Screen name="[groupId]" options={{ title: 'Group Details' }} />
            <Stack.Screen name="[groupId]/edit" options={{ title: 'Edit Group' }} />
        </Stack>
    );
}