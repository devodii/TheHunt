/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': "#61dafb",
        'home-bg': "rgba(15,23,42)",
        "mid-white": "rgba(255, 255, 255)",
        "button-bg": "rgb(139,92,246)",
        "blue-mid": "rgb(0,153,255)"
      },
      fontSize: {
        "nav-text": "17px"
      },
      screens: {
        'lw': '0px'
      }
    },
  },
  plugins: [],
}
