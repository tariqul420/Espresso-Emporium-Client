/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-bg": "rgb(244, 243, 240)",
        "color-primary": "rgb(51, 26, 21)",
        "color-black": "rgb(55, 65, 81)"
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Rancho: ["Rancho", "cursive"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}