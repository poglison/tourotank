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

        'stone-850': '#111111',
        'stone-900': '#1A1A1A',

        // 'primary': '#444',
      },

      width: {
        "30/61": "49.18033%",
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

