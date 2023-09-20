/** @type {import('tailwindcss').Config} */
module.exports = {
  extend: {
    fontFamily: {
      inter: ['Inter', 'sans']
    },
  },
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true
      }
    },
  },
  plugins: []
}

