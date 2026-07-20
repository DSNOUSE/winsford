const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

async function main() {
  console.log('Fixing JSS 3A and JSS 3B admission numbers...');

  // JSS 3A and JSS 3B students should be in year 2014 (JSS 3)
  const newYear = 2014;

  // Find all student users with undefined in username
  const users = await prisma.user.findMany({
    where: { 
      email: { contains: 'undefined' },
      role: 'student'
    },
    include: { student: true }
  });

  let updated = 0;
  let errors = 0;

  for (const user of users) {
    try {
      // Extract serial number from old email (WINundefined001 -> 001)
      const serialMatch = user.email.match(/WINundefined(\d+)/);
      if (!serialMatch) {
        console.log(`Could not parse serial from ${user.email}`);
        errors++;
        continue;
      }

      const serial = serialMatch[1].padStart(3, '0');
      const newEmail = `WIN${newYear}${serial}`;
      const newAdmissionNumber = `WIN/${newYear}/${serial}`;

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

      console.log(`Updated: ${user.name} (${user.email} -> ${newEmail})`);
      updated++;
    } catch (error) {
      console.error(`Error updating ${user.name}:`, error.message);
      errors++;
    }
  }

  console.log('\nSummary:');
  console.log(`Total students to fix: ${users.length}`);
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