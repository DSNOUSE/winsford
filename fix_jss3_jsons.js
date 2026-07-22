const fs = require('fs');
const path = require('path');

const primaryFile = path.join(__dirname, 'data', 'primary_students.json');
const secondaryFile = path.join(__dirname, 'data', 'secondary_students.json');

let primaryStudents = JSON.parse(fs.readFileSync(primaryFile, 'utf8'));
let secondaryStudents = JSON.parse(fs.readFileSync(secondaryFile, 'utf8'));

// Fix JSS 3A and JSS 3B students in secondary data
let fixed = 0;
secondaryStudents = secondaryStudents.map(student => {
  if (student.admissionNumber && student.admissionNumber.includes('undefined')) {
    const match = student.admissionNumber.match(/WIN\/undefined\/(\d+)/);
    if (match) {
      const serial = match[1].padStart(3, '0');
      student.admissionNumber = `WIN/2014/${serial}`;
      fixed++;
      return student;
    }
  }
  return student;
});

fs.writeFileSync(secondaryFile, JSON.stringify(secondaryStudents, null, 2) + '\n');
console.log(`Fixed ${fixed} JSS 3A/3B admission numbers in secondary_students.json`);

// Also fix primary if needed
primaryStudents = primaryStudents.map(student => {
  if (student.admissionNumber && student.admissionNumber.includes('undefined')) {
    const match = student.admissionNumber.match(/WIN\/undefined\/(\d+)/);
    if (match) {
      const serial = match[1].padStart(3, '0');
      student.admissionNumber = `WIN/2014/${serial}`;
      fixed++;
      return student;
    }
  }
  return student;
});

fs.writeFileSync(primaryFile, JSON.stringify(primaryStudents, null, 2) + '\n');
console.log(`Fixed ${fixed} total admission numbers in JSON files`);