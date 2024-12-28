import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          title: 'tabs',
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          title: 'Details',
        }}
      />
      <Stack.Screen
        name="+not-found"
        options={{
          title: 'Oops!',
        }}
      />
    </Stack>
  );
}
