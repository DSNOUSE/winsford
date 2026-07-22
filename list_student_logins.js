const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

async function main() {
  console.log('Student Portal Login Details\n');
  console.log('=' .repeat(70));
  console.log('Username (Admission Number) | Password | Name | Class');
  console.log('=' .repeat(70));
  console.log('');

  const students = await prisma.student.findMany({
    include: {
      user: true,
      class: true
    },
    orderBy: {
      admissionNumber: 'asc'
    },
    take: 20 // Show first 20 students as sample
  });

  for (const student of students) {
    if (student.admissionNumber) {
      const username = student.admissionNumber.replace(/\//g, '');
      console.log(`${username} | winsford2026 | ${student.firstName} ${student.lastName} | ${student.class?.name || 'N/A'}`);
    }
  }

  console.log('');
  console.log('=' .repeat(70));
  console.log(`Total students in database: ${await prisma.student.count()}`);
  console.log('');
  console.log('Login URL: http://localhost:3000/portal/signin');
  console.log('');
  console.log('Note: All students have the same password: winsford2026');
  console.log('      Students should change their password after first login.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });