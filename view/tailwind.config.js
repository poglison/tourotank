/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF4F00',
        'zinc-100': '#565656',
      }, 

      fontFamily: {
        'montserrat': ['Montserrat Alternates', 'sans-serif'],
        'ibm': ['IBM Plex Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

