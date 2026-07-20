const fs = require('fs');
const path = require('path');

const subjectPages = [
  'app/science/page.js',
  'app/religious-studies/page.js',
  'app/personal-development/page.js',
  'app/pe-sport/page.js',
  'app/music/page.js',
  'app/mathematics/page.js',
  'app/languages/page.js',
  'app/history/page.js',
  'app/geography/page.js',
  'app/english/page.js',
  'app/drama/page.js',
  'app/design-technology/page.js',
  'app/computing/page.js',
  'app/art/page.js',
];

const heroImage = "/images/School Photos/the-library.jpg";

let updated = 0;
let errors = 0;

for (const pagePath of subjectPages) {
  try {
    const fullPath = path.join(__dirname, pagePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`Skipping ${pagePath}: File not found`);
      continue;
    }

    let content = fs.readFileSync(fullPath, 'utf8');

    // Check if heroImages already exists
    if (content.includes('heroImages')) {
      console.log(`Skipping ${pagePath}: Already has heroImages`);
      continue;
    }

    // Add heroImages after the subtitle line in InnerPageHero
    const innerPageHeroPattern = /(<InnerPageHero\s+title="[^"]+"\s+subtitle="[^"]+")(\s+\/>)/;
    
    if (innerPageHeroPattern.test(content)) {
      content = content.replace(innerPageHeroPattern, `$1\n          heroImages={[\n            '${heroImage}',\n          ]}\n        $2`);
      fs.writeFileSync(fullPath, content);
      console.log(`Updated: ${pagePath}`);
      updated++;
    } else {
      console.log(`Skipping ${pagePath}: InnerPageHero pattern not found`);
    }
  } catch (error) {
    console.error(`Error updating ${pagePath}:`, error.message);
    errors++;
  }
}

console.log('\nSummary:');
console.log(`Pages updated: ${updated}`);
console.log(`Errors: ${errors}`);