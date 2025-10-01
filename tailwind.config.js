/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9ebff",
          200: "#b9d8ff",
          300: "#90c0ff",
          400: "#5fa1ff",
          500: "#3a84f6",
          600: "#2d68d2",
          700: "#2553a8",
          800: "#224a8e",
          900: "#1e3f78"
        }
      }
    },
  },
  plugins: [],
}
