/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#262626',
        'primary-light': '#f5f5f5',
        'accent-gray': '#3b3b3b',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
