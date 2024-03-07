/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      rotate: {
        '24': '24deg',
        '30': '30deg',
      },

      colors: {
        'primary': '#FF4F00',
        // 'primary': '#444',
      },

      fontFamily: {
        'montserrat': ['Montserrat Alternates', 'sans-serif'],
        'ibm': ['IBM Plex Sans', 'sans-serif'],
      },

      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },

  plugins: [],
}

