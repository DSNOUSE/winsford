const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
  log: ['query', 'info', 'warn', 'error'],
})

async function main() {
  console.log('Seeding database...')

  // Create subjects
  const math = await prisma.subject.upsert({
    where: { name: 'Mathematics' },
    update: {},
    create: { name: 'Mathematics', category: 'core' },
  })

  const english = await prisma.subject.upsert({
    where: { name: 'English' },
    update: {},
    create: { name: 'English', category: 'core' },
  })

  const science = await prisma.subject.upsert({
    where: { name: 'Science' },
    update: {},
    create: { name: 'Science', category: 'core' },
  })

  const socialStudies = await prisma.subject.upsert({
    where: { name: 'Social Studies' },
    update: {},
    create: { name: 'Social Studies', category: 'core' },
  })

  const computerScience = await prisma.subject.upsert({
    where: { name: 'Computer Science' },
    update: {},
    create: { name: 'Computer Science', category: 'elective' },
  })

  const agric = await prisma.subject.upsert({
    where: { name: 'Agricultural Science' },
    update: {},
    create: { name: 'Agricultural Science', category: 'elective' },
  })

  // Create classes
  const pry1 = await prisma.class.upsert({
    where: { id: 'pry-1-placeholder' },
    update: {},
    create: { name: 'Pry 1', level: 'primary' },
  })

  const pry2 = await prisma.class.upsert({
    where: { id: 'pry-2-placeholder' },
    update: {},
    create: { name: 'Pry 2', level: 'primary' },
  })

  const jss1 = await prisma.class.upsert({
    where: { id: 'jss-1-placeholder' },
    update: {},
    create: { name: 'JSS 1', level: 'secondary' },
  })

  const jss2 = await prisma.class.upsert({
    where: { id: 'jss-2-placeholder' },
    update: {},
    create: { name: 'JSS 2', level: 'secondary' },
  })

  const sss1 = await prisma.class.upsert({
    where: { id: 'sss-1-placeholder' },
    update: {},
    create: { name: 'SSS 1', level: 'secondary' },
  })

  // Create term
  const term = await prisma.term.upsert({
    where: { id: 'term-placeholder' },
    update: {},
    create: { sessionName: '2026/2027 Term 1', isActive: true },
  })

  // Create a test admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@winsfordschools.com.ng' },
    update: {},
    create: {
      email: 'admin@winsfordschools.com.ng',
      name: 'Admin User',
      role: 'admin',
    },
  })

  // Create a test teacher
  const teacherUser = await prisma.user.upsert({
    where: { email: 'teacher@winsfordschools.com.ng' },
    update: {},
    create: {
      email: 'teacher@winsfordschools.com.ng',
      name: 'Mrs Samuel',
      role: 'teacher',
    },
  })

  const teacher = await prisma.teacher.upsert({
    where: { userId: teacherUser.id },
    update: {},
    create: {
      userId: teacherUser.id,
      title: 'Mrs',
      firstName: 'Sarah',
      lastName: 'Samuel',
      employmentType: 'class_teacher',
      bio: 'Experienced primary school teacher with 10+ years of teaching.',
    },
  })

  // Create test student
  const studentUser = await prisma.user.upsert({
    where: { email: 'student@example.com' },
    update: {},
    create: {
      email: 'student@example.com',
      name: 'John Student',
      role: 'student',
    },
  })

  const student = await prisma.student.upsert({
    where: { userId: studentUser.id },
    update: {},
    create: {
      userId: studentUser.id,
      firstName: 'John',
      lastName: 'Student',
      classId: pry1.id,
    },
  })

  // Create sample assignments
  await prisma.assignment.upsert({
    where: { id: 'assignment-1' },
    update: {},
    create: {
      id: 'assignment-1',
      teacherId: teacher.id,
      classId: pry1.id,
      termId: term.id,
      role: 'class_teacher',
    },
  })

  await prisma.assignment.upsert({
    where: { id: 'assignment-2' },
    update: {},
    create: {
      id: 'assignment-2',
      teacherId: teacher.id,
      classId: pry2.id,
      subjectId: math.id,
      termId: term.id,
      role: 'subject_teacher',
    },
  })

  console.log('Database seeded successfully!')
  console.log('Admin user:', adminUser)
  console.log('Teacher user:', teacher)
  console.log('Student user:', student)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })