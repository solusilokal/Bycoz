/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./standalone.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./bycoz_bike_rental.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
