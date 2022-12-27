/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#718096',
        boxcolor: '#EAF8F9',
        buttoncolor: '#2DD3E3',
        'light-yellow': ' #FEE89E',
        'light-blue': '#2DD3E3',
        'sky-blue': '#EAF8F9',
        'light-gray': '#878787',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      lineHeight: {
        18: '4.75rem',
      },
      width: {
        90: '23rem',
      },
    },
  },
  plugins: [],
};