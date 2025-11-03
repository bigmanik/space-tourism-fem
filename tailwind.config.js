/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.html",
    "./src/**/*.js",

  ],
  // debug: true,
  theme: {
    extend: {
       backdropBlur: {
        md: '10px',
      },
      backgroundImage:{
        'fullbdy':"url('/src/assets/home/background-home-desktop.jpg')",
        'tabscrn':"url('/src/assets/home/background-home-tablet.jpg')",
        'minscrn':"url('/src/assets/home/background-home-mobile.jpg')",
        'destinationbdy':"url('/src/assets/destination/background-destination-desktop.jpg')",
        'destinationtabscrn':"url('/src/assets/destination/background-destination-tablet.jpg')",
        'destinationminscrn':"url('/src/assets/destination/background-destination-mobile.jpg')",
        'crewbdy':"url('/src/assets/crew/background-crew-desktop.jpg')",
        'crewtabscrn':"url('/src/assets/crew/background-crew-tablet.jpg')",
        'crewminscrn':"url('/src/assets/crew/background-crew-mobile.jpg')",
        'techbdy':"url('/src/assets/technology/background-technology-desktop.jpg')",
         'techtabscrn':"url('/src/assets/technology/background-technology-tablet.jpg')",
          'techminscrn':"url('/src/assets/technology/background-technology-mobile.jpg')",
         


        
      },
     fontFamily:{
      'sans': ['orbitron', 'sans-serif'],
     },
      screens:{
        'sm': '640px',
        'md': '768px',
        'mobile':{ 'max': '639px' },
        'tablet': { 'min': '641px', 'max': '767px' },
         
      },
    },
  },
  plugins: [],
}

