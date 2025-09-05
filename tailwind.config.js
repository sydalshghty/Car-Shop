/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#B41B38",
        whattsappcolor: "#00c49b",
        secondcolor: "#ddfff8",
      }
    },
  },
  plugins: [],
}

