/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ['Pacifico', 'cursive'],
      },
    },
    colors: {
      Logo: '#B849D8',
      Navbar: '#c572da',
      Navtitle: '#F4F2F2',
      AccentText: '#1b161f',
      LightBG: '#ebeeef',
    },
  },
  plugins: [],
}
