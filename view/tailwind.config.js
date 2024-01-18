/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF4F00',
        // 'primary': '#444',
        'zinc-100': '#565656',
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

