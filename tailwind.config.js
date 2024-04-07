/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-oliver':{
          '300': '#293634',
          '200': '#465754',
          '110': '#568279',
          '100': '#5D6C69',
          '700': '#2F4944'
        },
        'gray-compare': {
          '200':'#E0E0E0'
        }
        
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg.svg')"
      }
    },
  },
  plugins: [],
}