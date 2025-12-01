import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',              // HTML files are in 'src/'
  publicDir: 'assets',      // Assets folder is INSIDE 'src/'
  build: {
    outDir: '../dist',      // Build output goes to 'dist/' (outside src)
    emptyOutDir: true,      // Clean dist before building
    rollupOptions: {
      input: {
        main: 'src/index.html',
        destination: 'src/destination-mars.html',
        crew: 'src/crew-engineer.html',
        technology: 'src/technology-vehicle.html'
      }
    }
  }
})