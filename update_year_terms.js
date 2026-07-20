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

const yearMapping = {
  'Year 7': 'JSS 1',
  'Year 8': 'JSS 2',
  'Year 9': 'JSS 3',
  'Year 10': 'SS 1',
};

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
    let hasChanges = false;

    for (const [oldYear, newYear] of Object.entries(yearMapping)) {
      if (content.includes(oldYear)) {
        content = content.replaceAll(oldYear, newYear);
        hasChanges = true;
      }
    }

    if (hasChanges) {
      fs.writeFileSync(fullPath, content);
      console.log(`Updated: ${pagePath}`);
      updated++;
    } else {
      console.log(`No changes needed: ${pagePath}`);
    }
  } catch (error) {
    console.error(`Error updating ${pagePath}:`, error.message);
    errors++;
  }
}

console.log('\nSummary:');
console.log(`Pages updated: ${updated}`);
console.log(`Errors: ${errors}`);