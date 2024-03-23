/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      'rosy-brown': '#B38481',
      'charcoal-gray': '#3C3E43',
      'gray': '#B0B0B0',
    },
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'el-messiri': ['El Messiri', 'sans-serif'],
    },
    screens: {
      'xs': '330px',
      's': '420px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
    extend: {},

  },
  plugins: [],
}

