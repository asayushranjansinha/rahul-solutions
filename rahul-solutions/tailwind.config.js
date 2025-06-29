/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",       // Root file
    "./app/**/*.{js,jsx,ts,tsx}",  // ALL files in app/ (expo-router screens)
    "./components/**/*.{js,jsx,ts,tsx}",  // Reusable components
    "./screens/**/*.{js,jsx,ts,tsx}",  // Reusable components
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
