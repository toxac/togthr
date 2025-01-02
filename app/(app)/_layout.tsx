import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { AuthProvider } from '~/components/context/AuthContext';
import { ProtectedRoute } from '~/components/context/ProtectedRoute';

export default function RootLayout() {
  return (
    <AuthProvider>
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
      </Tabs>
    </AuthProvider>
  );
}
