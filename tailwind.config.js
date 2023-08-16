/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        backw: ["hsl(212, 45%, 89%)"],
      },
    },
  },
  plugins: [],
};
