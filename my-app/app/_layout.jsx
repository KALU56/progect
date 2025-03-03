import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
            <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false,  // This hides the header for the home screen
        }} 
      />
      {/* Authentication Screens */}
      <Stack.Screen name="aut/sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="aut/sign-up" options={{ headerShown: false }} />

      {/* Main App (Tabs) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
