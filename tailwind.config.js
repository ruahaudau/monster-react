/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#071b52',
        'custom-teal': '#008080',
      },
      fontFamily: {
        'bigelow': ['Bigelow Rules', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
