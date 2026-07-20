const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

async function main() {
  console.log('Fixing student username format...');

  // Find all student users
  const users = await prisma.user.findMany({
    where: { role: 'student' },
    include: { student: true }
  });

  let updated = 0;
  let errors = 0;

  for (const user of users) {
    try {
      // Check if username contains slashes
      if (user.email.includes('/')) {
        const newEmail = user.email.replace(/\//g, '');
        
        // Check if new email already exists
        const existing = await prisma.user.findUnique({
          where: { email: newEmail }
        });

        if (existing) {
          console.log(`Skipping ${user.name}: New username ${newEmail} already exists`);
          errors++;
          continue;
        }

        // Update user email
        await prisma.user.update({
          where: { id: user.id },
          data: { email: newEmail }
        });

        console.log(`Updated: ${user.email} -> ${newEmail}`);
        updated++;
      }
    } catch (error) {
      console.error(`Error updating ${user.name}:`, error.message);
      errors++;
    }
  }

  console.log('\nSummary:');
  console.log(`Total students: ${users.length}`);
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