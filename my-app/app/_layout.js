import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Hide the header on the home screen */}
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false,  // This hides the header for the home screen
        }} 
      />
      <Stack.Screen 
        name="aut/sign-in" 
        options={{ 
          title: "Sign In", 
        }} 
      />
      <Stack.Screen 
        name="aut/sign-up" 
        options={{ 
          title: "Sign Up", 
        }} 
      />
    </Stack>
  );
}
