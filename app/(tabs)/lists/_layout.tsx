import { Stack } from 'expo-router';

export default function ListsLayout() {
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
            <Stack.Screen name="index" options={{ title: 'My Lists' }} />
            <Stack.Screen name="create" options={{ title: 'Create List' }} />
            <Stack.Screen name="[listId]" options={{ title: 'List Details' }} />
            <Stack.Screen name="[listId]/edit" options={{ title: 'Edit List' }} />
            <Stack.Screen name="[listId]/items/create" options={{ title: 'Add Item' }} />
            <Stack.Screen name="[listId]/[itemId]/edit" options={{ title: 'Edit Item' }} />
        </Stack>
    );
}