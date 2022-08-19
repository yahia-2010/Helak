/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      colors: {
        "color-primary": "#F59E0B",
        "dark-primary": "#2b2a33",
        "dark-secondary": "#42414d",
      },
      boxShadow: {
        md: "0 0 8px -1.5px rgba(0, 0, 0, 0.25)",
        lg: "0 0 8px 1.5px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
