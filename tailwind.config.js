/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        base: "87rem",
      },
      fontFamily: {
        base: ["Manrope", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#4853F3",
        }
      },
    },
  },
  plugins: [],
};
