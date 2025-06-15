import type { Config } from 'tailwindcss';
const nativewindPreset = require("nativewind/preset");

const config: Config = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [nativewindPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;