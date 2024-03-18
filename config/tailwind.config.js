/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
console.log(colors)
module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*',
  ],
  theme: {
    colors: {
      ...colors,
      primary: {
        DEFAULT : '#FF5A5F',
        dark : '#FF385C'
      }
    },
  },
  plugins: [],
}