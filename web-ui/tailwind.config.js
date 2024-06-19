const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#ffffff',
        'background': '#0C0B0B',
        'primary': '#AD252A',
        'secondary': '#7E552B',
        'accent': '#BF8E43',
      },
      fontFamily: {
        'sans': ['Mate SC', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        sm: '0.75rem',
        base: '1rem',
        lg: '1.333rem',
        xl: '1.777rem',
        '2xl': '2.369rem',
        '3xl': '3.157rem',
        '4xl': '4.209rem',
        '5xl': '5.61rem'
      }
    },
  },
  plugins: [],
}

