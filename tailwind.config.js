/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '25': '25px',
      '32': '32px',
    },
    extend: {
      fontFamily: {
        'sans': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

