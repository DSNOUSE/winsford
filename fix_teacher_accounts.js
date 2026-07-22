const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

async function main() {
  console.log('Checking and fixing teacher accounts...');

  const hashedPassword = await bcrypt.hash('winsford2026', 10);

  // Check existing test teacher
  const existingTeacher = await prisma.user.findUnique({
    where: { email: 'teacher@winsfordschools.com.ng' },
    include: { teacher: true }
  });

  if (existingTeacher) {
    console.log('Found existing teacher account:');
    console.log('  Email:', existingTeacher.email);
    console.log('  Name:', existingTeacher.name);
    console.log('  Role:', existingTeacher.role);
    console.log('  Has password:', !!existingTeacher.password);
    console.log('  Teacher record exists:', !!existingTeacher.teacher);

    if (!existingTeacher.password) {
      await prisma.user.update({
        where: { email: 'teacher@winsfordschools.com.ng' },
        data: { password: hashedPassword }
      });
      console.log('  - Added password to existing account');
    }

    if (!existingTeacher.teacher) {
      console.log('  - ERROR: No teacher record found for this user');
    }
  } else {
    console.log('No teacher account found, creating one...');
    
    const teacherUser = await prisma.user.create({
      data: {
        email: 'teacher@winsfordschools.com.ng',
        name: 'Mrs Samuel',
        password: hashedPassword,
        role: 'teacher',
      }
    });

    await prisma.teacher.create({
      data: {
        userId: teacherUser.id,
        title: 'Mrs',
        firstName: 'Sarah',
        lastName: 'Samuel',
        employmentType: 'class_teacher',
        bio: 'Experienced primary school teacher with 10+ years of teaching.',
      }
    });

    console.log('Created teacher account:');
    console.log('  Username: teacher@winsfordschools.com.ng');
    console.log('  Password: winsford2026');
  }

  // List all teachers
  console.log('\nAll teacher accounts:');
  const allTeachers = await prisma.teacher.findMany({
    include: { user: true }
  });

  allTeachers.forEach(t => {
    console.log(`  - ${t.title} ${t.firstName} ${t.lastName} (${t.user.email})`);
  });

  console.log('\nTeacher accounts ready for login!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });