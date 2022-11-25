/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/*.html', './src/**/*.{html,js}'],
    theme: {
      extend: {
        colors: {
            'primary': '#f3c614',
            'secondary': '#353535',
            'terciary': '#6e6e6e',
        },
        height:{
          '80': '20rem',
          '100': '25rem',
        }
      },
    },
    plugins: [],
  }