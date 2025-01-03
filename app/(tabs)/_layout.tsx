import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";


export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="notifications"
                options={{
                    title: 'Notifications',
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => <Ionicons
                        name={focused ? "notifications" : "notifications-outline"}
                        size={24} color={color}
                    />,
                }}
            />
            <Tabs.Screen
                name="lists"
                options={{
                    title: 'Lists',
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => <Ionicons
                        name={focused ? "list" : "list-outline"}
                        size={24} color={color}
                    />,
                }}
            />
            <Tabs.Screen
                name="groups"
                options={{
                    title: 'Groups',
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => <Ionicons
                        name={focused ? "people" : "people-outline"}
                        size={24} color={color}
                    />,
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => <Ionicons
                        name="settings"
                        size={24} color={color}
                    />,
                }}
            />

        </Tabs>
    )
}