/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      manrope: '"Manrope", sans-serif',
    },
    extend: {
      colors: {
        primary_color: "#FF4240",
        font_black: "#131318",
        light_gray: "#13131899",
      },
    },
  },
  plugins: [require("daisyui")],
};
