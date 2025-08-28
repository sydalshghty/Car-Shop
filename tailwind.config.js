/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        helveticaArabic: ['Helvetica Neue Arabic', 'Helvetica', 'Arial', 'sans-serif'], 
      },
      colors: {
        maincolor: '#B41B38', 
      },
    },
  },
  plugins: [],
}