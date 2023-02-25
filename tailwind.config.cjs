/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        carioFont: ['Cairo', 'sans-serif']
      }
    },
  },
  plugins: [],
}
