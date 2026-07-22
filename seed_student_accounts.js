const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

async function main() {
  console.log('Creating student portal accounts...');

  // Load student data
  const fs = require('fs');
  const path = require('path');
  
  const primaryFile = path.join(__dirname, 'data', 'primary_students.json');
  const secondaryFile = path.join(__dirname, 'data', 'secondary_students.json');
  
  const primaryStudents = JSON.parse(fs.readFileSync(primaryFile, 'utf8'));
  const secondaryStudents = JSON.parse(fs.readFileSync(secondaryFile, 'utf8'));
  
  const allStudents = [...primaryStudents, ...secondaryStudents];

  // Hash the default password
  const hashedPassword = await bcrypt.hash('winsford2026', 10);

  // Get or create a default class for students
  // First check if classes exist
  const classes = await prisma.class.findMany();
  
  // Map admission number year to class name
  const classMap = {};
  classes.forEach(cls => {
    classMap[cls.name] = cls;
  });

  let created = 0;
  let skipped = 0;
  let errors = 0;

  for (const student of allStudents) {
    try {
      if (!student.admissionNumber) {
        console.log(`Skipping ${student.name}: No admission number`);
        skipped++;
        continue;
      }

      // Use admission number as email (username) without slashes
      const email = student.admissionNumber.replace(/\//g, '');
      
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email }
      });

      if (existingUser) {
        // Update password if user exists but has no password
        if (!existingUser.password) {
          await prisma.user.update({
            where: { email },
            data: { password: hashedPassword }
          });
          console.log(`Updated password for ${student.name}`);
        } else {
          console.log(`Already exists: ${student.name}`);
        }
        skipped++;
        continue;
      }

      // Find matching class
      const studentClass = classMap[student.class];
      if (!studentClass) {
        console.log(`Warning: Class ${student.class} not found for ${student.name}`);
      }

      // Parse student name
      const nameParts = student.name.trim().split(/\s+/);
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

      // Create user
      const user = await prisma.user.create({
        data: {
          email: email,
          name: `${firstName} ${lastName}`,
          password: hashedPassword,
          role: 'student',
        }
      });

      // Create student record
      await prisma.student.create({
        data: {
          userId: user.id,
          admissionNumber: student.admissionNumber,
          firstName: firstName,
          lastName: lastName,
          classId: studentClass?.id,
        }
      });

      console.log(`Created account for ${student.name} (${email})`);
      created++;
    } catch (error) {
      console.error(`Error creating account for ${student.name}:`, error.message);
      errors++;
    }
  }

  console.log('\nSummary:');
  console.log(`Total students processed: ${allStudents.length}`);
  console.log(`New accounts created: ${created}`);
  console.log(`Skipped/existing: ${skipped}`);
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