/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#c7b0ff",      // accent
        background: "#1a0b2b", // NEW site-wide background
        accent2: "#c7b0ff",
      },
      fontFamily: {
        primary: [
          "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto",
          "Helvetica Neue","Arial","Noto Sans","Liberation Sans",
          "sans-serif","Apple Color Emoji","Segoe UI Emoji",
          "Segoe UI Symbol","Noto Color Emoji"
        ],
      },
    },
  },
  plugins: [],
}
