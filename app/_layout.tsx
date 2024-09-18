import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ClerkProvider, ClerkLoaded, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Onboarding from '@/components/Onboarding';
import LoginScreen from '@/components/LoginScreen';
import HomeScreen from '@/app/(tabs)/home';
import TabsLayout from '@/app/(tabs)/_layout';
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const linking = {
    prefixes: ['https://yourapp.com', 'yourapp://'],
    config: {
        screens: {
            Home: 'home',
            Login: 'login',
            Onboarding: 'onboarding',
        },
    },
};

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
    throw new Error(
        'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
    );
}

export default function RootLayout() {
    useFonts({
        'Al-R': require('../assets/fonts/Almarai-Regular.ttf'),
        'Al-B': require('../assets/fonts/Almarai-Bold.ttf'),
        'Al-EB': require('../assets/fonts/Almarai-ExtraBold.ttf'),
        'Al-L': require('../assets/fonts/Almarai-Light.ttf'),
    });

    return (
        <ClerkProvider publishableKey={publishableKey}>
            <NavigationContainer linking={linking}>
                <SignedIn>
                    <ClerkLoaded>
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="Home" component={TabsLayout} />
                            <Stack.Screen name="Onboarding" component={Onboarding} />
                        </Stack.Navigator>
                    </ClerkLoaded>
                </SignedIn>
                <SignedOut>
                    <LoginScreen />
                </SignedOut>
            </NavigationContainer>
        </ClerkProvider>
    );
}