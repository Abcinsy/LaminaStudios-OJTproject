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
            'black' : '#212020',
            'brown' : '#2B2925',
            'slate' : '#2B2925',
            'lime' : '#F3C649',

        }
      },
  },
  plugins: [require("tw-elements/dist/plugin")]
  }
