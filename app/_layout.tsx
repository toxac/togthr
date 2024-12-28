import '../global.css';
import { Ionicons } from '@expo/vector-icons';
import { Tabs, Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      {/* Main tabs */}
      <Tabs.Screen
        name="lists"
        options={{
          title: 'Lists',
          tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: 'Groups',
          tabBarIcon: ({ color }) => <Ionicons name="people" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
        }}
      />

      {/* Hidden routes */}
      <Tabs.Screen
        name="auth"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
