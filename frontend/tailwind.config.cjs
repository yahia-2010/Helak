/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        "color-primary": "#F59E0B",
        "dark-primary": "#2b2a33",
        "dark-secondary": "#42414d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
