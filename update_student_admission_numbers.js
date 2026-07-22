const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

async function main() {
  console.log('Updating student admission numbers in database...');

  // Load student data
  const fs = require('fs');
  const path = require('path');
  
  const primaryFile = path.join(__dirname, 'data', 'primary_students.json');
  const secondaryFile = path.join(__dirname, 'data', 'secondary_students.json');
  
  const primaryStudents = JSON.parse(fs.readFileSync(primaryFile, 'utf8'));
  const secondaryStudents = JSON.parse(fs.readFileSync(secondaryFile, 'utf8'));
  
  const allStudents = [...primaryStudents, ...secondaryStudents];

  let updated = 0;
  let errors = 0;

  for (const student of allStudents) {
    try {
      if (!student.admissionNumber) {
        console.log(`Skipping ${student.name}: No admission number`);
        continue;
      }

      // Find user by email (which is the admission number without slashes)
      const email = student.admissionNumber.replace(/\//g, '');
      
      const user = await prisma.user.findUnique({
        where: { email },
        include: { student: true }
      });

      if (!user) {
        console.log(`User not found for ${student.name} (${email})`);
        errors++;
        continue;
      }

      if (!user.student) {
        console.log(`No student record for ${student.name}`);
        errors++;
        continue;
      }

      // Update student record with admission number
      await prisma.student.update({
        where: { userId: user.id },
        data: { admissionNumber: student.admissionNumber }
      });

      console.log(`Updated admission number for ${student.name}: ${student.admissionNumber}`);
      updated++;
    } catch (error) {
      console.error(`Error updating ${student.name}:`, error.message);
      errors++;
    }
  }

  console.log('\nSummary:');
  console.log(`Total students processed: ${allStudents.length}`);
  console.log(`Updated: ${updated}`);
  console.log(`Errors: ${errors}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });