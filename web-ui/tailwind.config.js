/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#e53e3e',
        'background': '#0C0B0B',
        'primary': '#660000',
        'secondary': '#ffffff',
        'accent': '#61329a',
       },
    },
  },
  plugins: [],
}

