/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.html",
    "./src/**/*.js",

  ],
  debug: true,
  theme: {
    extend: {
       backdropBlur: {
        md: '10px',
      },
      backgroundImage:{
        'fullbdy':"url('/src/assets/home/background-home-desktop.jpg')",
      },
     fontFamily:{
      'sans': ['orbitron', 'sans-serif'],
     },
    },
  },
  plugins: [],
}

