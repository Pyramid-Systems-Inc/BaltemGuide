import {Stack} from "expo-router";
import {useFonts} from "expo-font";
import {ClerkProvider, ClerkLoaded, SignedIn, SignedOut} from '@clerk/clerk-expo'
import Onboarding from "@/components/Onboarding";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
    throw new Error(
        'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
    )
}
export default function RootLayout() {
    useFonts({
        "Al-R": require("../assets/fonts/Almarai-Regular.ttf"),
        "Al-B": require("../assets/fonts/Almarai-Bold.ttf"),
        "Al-EB": require("../assets/fonts/Almarai-ExtraBold.ttf"),
        "Al-L": require("../assets/fonts/Almarai-Light.ttf"),
    }); // Load fonts
    return (
        <ClerkProvider publishableKey={publishableKey}>
            <SignedIn>
                <ClerkLoaded>
                    <Stack screenOptions={{headerShown: false}}>
                        <Stack.Screen name="(tabs)"/>
                    </Stack>
                </ClerkLoaded>
            </SignedIn>
            <SignedOut>
                <Onboarding/>
            </SignedOut>
        </ClerkProvider>
    );
}
