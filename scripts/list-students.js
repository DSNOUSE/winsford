const data = require('../data/all_students.json');
console.log('Total Students:', data.length);
console.log('\nStudents with Admission Numbers:');
data.forEach(s => {
  console.log(`${s.sn}. ${s.name} | ${s.class} | ${s.admissionNumber || 'N/A'}`);
});