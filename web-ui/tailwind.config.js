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
    },
  },
  plugins: [],
}

