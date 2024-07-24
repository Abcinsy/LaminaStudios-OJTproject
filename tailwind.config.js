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
          'black': '#212020',
          'brown': '#2B2925',
          'slate': '#2B2925',
          'lime': '#F3C649',
          'primary-red': '#ff4757',
          'secondary-blue': '#1e90ff',
          'dark': '#1e272e',
          'dark-gray': '#2f3542',
          'medium-gray': '#57606f',
          'palette': '#161F2B',
          'dark-rich' :'#17222E',
          'bluee' : '#364D66',
          'other' : '#2F3741'

        },
        fontFamily: {
          'display': ['Oswald'],
          'manrope': ['Manrope'],
        }
      },
    },
    plugins: [require("tw-elements/dist/plugin")]
  }
