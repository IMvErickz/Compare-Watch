/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-oliver-300': '#293634',
        'green-oliver-200': '#465754',
        'green-oliver-110': '#568279',
        'green-oliver-100': '#5D6C69'


        
      }
    },
  },
  plugins: [],
}