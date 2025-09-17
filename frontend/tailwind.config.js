// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        // Custom colors for both light and dark modes
        dark: {
          100: "#1f2937",
          200: "#111827",
          300: "#0f172a",
        },
        // Adding more vibrant colors
        rainbow: {
          red: "#ef4444",
          orange: "#f97316",
          yellow: "#eab308",
          green: "#22c55e",
          blue: "#3b82f6",
          indigo: "#6366f1",
          violet: "#8b5cf6",
        },
      },
      // Adding custom cursor support
      cursor: {
        "custom-light": "url(./src/assets/cursor-light.png), pointer",
        "custom-dark": "url(./src/assets/cursor-dark.png), pointer",
      },
    },
  },
  plugins: [],
};
