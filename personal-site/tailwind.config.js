/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#0F0F0F',
          text: '#FFFFFF',
          primary: '#232D3F',
          secondary: '#005B41',
          accent: '#008170'
        }, //let's not do dark mode, actually
        light: {
          background: '#FFF5F1',
          text: '#180202',
          primary: '#EB9078',
        }
      }
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false, //dunno what this does
   },
}

