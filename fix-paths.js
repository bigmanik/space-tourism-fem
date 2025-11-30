const fs = require('fs');
const path = require('path');

// List all HTML files in dist
const htmlFiles = [
  'dist/index.html',
  'dist/crew-engineer.html',
  'dist/destination-mars.html',
  'dist/technology-vehicle.html'
];

// JS file location
const jsFiles = [
  'dist/js/script.js'
];

// Fix HTML files
htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // AGGRESSIVELY fix ALL variations of dist/css paths
    content = content.replace(/\.\.\/dist\/css\//g, '/css/');
    content = content.replace(/\/dist\/css\//g, '/css/');
    content = content.replace(/href="\.\.\/dist\//g, 'href="/');
    
    // Fix navigation links - remove /src/ prefix
    content = content.replace(/href="\/src\//g, 'href="/');
    content = content.replace(/src="\/src\//g, 'src="/');
    
    // Fix asset paths
    content = content.replace(/\.\.\/assets\//g, '/assets/');
    content = content.replace(/src="assets\//g, 'src="/assets/');
    
    fs.writeFileSync(file, content);
    console.log(`✓ Fixed paths in ${file}`);
  } else {
    console.log(`✗ File not found: ${file}`);
  }
});

// Fix JavaScript files
jsFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace /src/assets/ with /assets/ in JS
    content = content.replace(/\/src\/assets\//g, '/assets/');
    
    fs.writeFileSync(file, content);
    console.log(`✓ Fixed paths in ${file}`);
  } else {
    console.log(`✗ File not found: ${file}`);
  }
});

console.log('\n🎉 Path fixing complete!');