/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
      extend: {
        colors: {
            'lamina-yellow': '#fec200',
        }
      },
  },
  plugins: [require("tw-elements/dist/plugin")]
  }
