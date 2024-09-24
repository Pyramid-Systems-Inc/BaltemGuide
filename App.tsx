import AppNavigation from './navigation/appNavigation';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
      'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  );
}

export default function App() {
    useFonts({
      'Al-R': require('./assets/fonts/Almarai-Regular.ttf'),
      'Al-B': require('./assets/fonts/Almarai-Bold.ttf'),
      'Al-EB': require('./assets/fonts/Almarai-ExtraBold.ttf'),
      'Al-L': require('./assets/fonts/Almarai-Light.ttf'),
    });
  return (
    <>
      <StatusBar style="dark" />
      <AppNavigation />
    </>
  );
}
