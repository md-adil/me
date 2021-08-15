const colors = require("tailwindcss/colors");
const primary = colors.indigo;
module.exports = {
  purge: ["./index.html", "./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: primary["500"],
        "primary-light": primary["300"],
        "primary-dark": primary["700"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
