const fs = require('fs');
const path = require('path');

// Load existing data
const primaryFile = path.join(__dirname, 'data', 'primary_students.json');
const secondaryFile = path.join(__dirname, 'data', 'secondary_students.json');

const primaryData = JSON.parse(fs.readFileSync(primaryFile, 'utf8'));
const secondaryData = JSON.parse(fs.readFileSync(secondaryFile, 'utf8'));

// Map class names to admission year
const primaryClassYearMap = {
  'Preparatory': 2026,
  'Nursery One': 2025,
  'Nursery Two': 2024,
  'Kindergarten': 2023,
  'Basic One': 2022,
  'Basic Two': 2021,
  'Basic Three': 2020,
  'Basic Four': 2019,
  'Basic Five': 2018,
  'Basic Six': 2017
};

const secondaryClassYearMap = {
  'JSS 1': 2016,
  'JSS 2': 2015,
  'JSS 3': 2014,
  'SS 1': 2013,
  'SS 2': 2012,
  'SS 3': 2011
};

function sortPhoneNumbersInAddress(student) {
  // If address contains phone numbers, sort them
  if (student.address && /\d{11}/.test(student.address)) {
    const phones = student.address.match(/\d{11}/g);
    if (phones && phones.length > 1) {
      phones.sort();
      // Replace unsorted phones with sorted ones
      let newAddress = student.address;
      phones.forEach((phone, index) => {
        newAddress = newAddress.replace(phone, `SORTED_PHONE_${index}`);
      });
      phones.forEach((phone, index) => {
        newAddress = newAddress.replace(`SORTED_PHONE_${index}`, phone);
      });
      student.address = newAddress;
    }
  }
}

function sortPhoneNumbersInPhoneField(student) {
  if (student.phone && student.phone.includes('\n')) {
    const phones = student.phone.split('\n').map(p => p.trim()).filter(p => p);
    phones.sort();
    student.phone = phones.join('\n');
  }
}

// Process primary students
const primaryClasses = {};
primaryData.forEach(student => {
  if (!primaryClasses[student.class]) {
    primaryClasses[student.class] = [];
  }
  primaryClasses[student.class].push(student);
});

// Sort and assign admission numbers
const updatedPrimaryData = [];
Object.keys(primaryClasses).sort().forEach(className => {
  const students = primaryClasses[className];
  // Sort alphabetically by name
  students.sort((a, b) => a.name.localeCompare(b.name));
  
  const year = primaryClassYearMap[className];
  students.forEach((student, index) => {
    student.sn = `${index + 1}.`;
    student.admissionNumber = `WIN/${year}/${String(index + 1).padStart(3, '0')}`;
    sortPhoneNumbersInAddress(student);
    sortPhoneNumbersInPhoneField(student);
    updatedPrimaryData.push(student);
  });
});

// Process secondary students
const secondaryClasses = {};
secondaryData.forEach(student => {
  if (!secondaryClasses[student.class]) {
    secondaryClasses[student.class] = [];
  }
  secondaryClasses[student.class].push(student);
});

// Sort and assign admission numbers
const updatedSecondaryData = [];
Object.keys(secondaryClasses).sort().forEach(className => {
  const students = secondaryClasses[className];
  // Sort alphabetically by name
  students.sort((a, b) => a.name.localeCompare(b.name));
  
  const year = secondaryClassYearMap[className];
  students.forEach((student, index) => {
    student.sn = `${index + 1}.`;
    student.admissionNumber = `WIN/${year}/${String(index + 1).padStart(3, '0')}`;
    // Clean up sex field if it contains the name
    if (student.sex && student.sex === student.name) {
      student.sex = '';
    }
    sortPhoneNumbersInPhoneField(student);
    updatedSecondaryData.push(student);
  });
});

// Write updated files
fs.writeFileSync(primaryFile, JSON.stringify(updatedPrimaryData, null, 2) + '\n');
fs.writeFileSync(secondaryFile, JSON.stringify(updatedSecondaryData, null, 2) + '\n');

console.log('Student data updated successfully!');
console.log(`Primary: ${updatedPrimaryData.length} students`);
console.log(`Secondary: ${updatedSecondaryData.length} students`);