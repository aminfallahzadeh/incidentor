/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2e3456",
        secondary: "#e4f0ff",
        accent: "#ea6633",
      },
      fontFamily: {
        iranYekan: ['"IranYekan"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
