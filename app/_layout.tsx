import { Stack } from 'expo-router';
import { ClerkProvider } from '@clerk/clerk-expo';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Almarai-Bold': require('../assets/fonts/Almarai-Bold.ttf'),
    'Almarai-ExtraBold': require('../assets/fonts/Almarai-ExtraBold.ttf'),
    'Almarai-Light': require('../assets/fonts/Almarai-Light.ttf'),
    'Almarai-Regular': require('../assets/fonts/Almarai-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const publishableKey = "pk_test_Y3VkZGx5LXBlcmNoLTkxLmNsZXJrLmFjY291bnRzLmRldiQ";

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="signIn" options={{ title: 'Sign In' }} />
        <Stack.Screen name="signUp" options={{ title: 'Sign Up' }} />
        <Stack.Screen name="selectGrade" options={{ title: 'Select Grade' }} />
        <Stack.Screen name="selectProvince" options={{ title: 'Select Province' }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );
}