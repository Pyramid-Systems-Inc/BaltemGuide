import { getDefaultConfig } from "@expo/metro-config";
import { withNativeWind } from 'nativewind/metro';
// MetroConfig type can be inferred or imported if specific properties are needed later.
// For now, let's rely on inference for defaultConfig.

// Get the default configuration
const defaultConfig = getDefaultConfig(__dirname);

// Define NativeWind options
// The structure { input: string; getCSSForPlatform: (platform: string) => string; }
// is based on the previous error message indicating these properties are expected.
const nativeWindOptions = {
  input: './global.css',
  getCSSForPlatform: async (platform: string) => { // Make the function async
    // Basic implementation. NativeWind might use this to provide platform-specific CSS.
    // For now, returning the global CSS for any platform.
    return './global.css'; // This will now be wrapped in a Promise
  }
};

// Apply NativeWind
const configWithNativeWind = withNativeWind(defaultConfig, nativeWindOptions);

// Export the configuration
export default configWithNativeWind;