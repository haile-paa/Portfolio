/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Add this line to enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        // You can add custom colors for dark mode if needed
        dark: {
          100: "#1f2937",
          200: "#111827",
          300: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};
