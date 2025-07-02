/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ["Libre Franklin", "sans-serif"],
        radley: ["Radley", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
