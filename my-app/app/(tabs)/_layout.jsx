import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons or any other icons you want

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index" // Home tab
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} /> // Icon for Home tab
          ),
        }}
      />
      <Tabs.Screen
        name="profile" // This should correspond to 'profile.jsx' in the '/tabs' folder
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} /> // Icon for Profile tab
          ),
        }}
      />
      <Tabs.Screen
        name="settings" // This should correspond to 'settings.jsx' in the '/tabs' folder
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} /> // Icon for Settings tab
          ),
        }}
      />
    </Tabs>
  );
}
