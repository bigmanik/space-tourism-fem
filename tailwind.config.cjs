

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
    extend: {
       backdropBlur: {
        md: '10px',
      },
      backgroundImage:{
        'fullbdy':"url('/assets/home/background-home-desktop.jpg')",
        'tabscrn':"url('/assets/home/background-home-tablet.jpg')",
        'minscrn':"url('/assets/home/background-home-mobile.jpg')",
        'destinationbdy':"url('/assets/destination/background-destination-desktop.jpg')",
        'destinationtabscrn':"url('/assets/destination/background-destination-tablet.jpg')",
        'destinationminscrn':"url('/assets/destination/background-destination-mobile.jpg')",
        'crewbdy':"url('/assets/crew/background-crew-desktop.jpg')",
        'crewtabscrn':"url('/assets/crew/background-crew-tablet.jpg')",
        'crewminscrn':"url('/assets/crew/background-crew-mobile.jpg')",
        'techbdy':"url('/assets/technology/background-technology-desktop.jpg')",
        'techtabscrn':"url('/assets/technology/background-technology-tablet.jpg')",
        'techminscrn':"url('/assets/technology/background-technology-mobile.jpg')",
      },
     fontFamily:{
      'sans': ['orbitron', 'sans-serif'],
     },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'mobile': { 'max': '640px' },  
        'tablet': { 'min': '641px', 'max': '1023px' },
      }
    },
  },
  plugins: [],
}