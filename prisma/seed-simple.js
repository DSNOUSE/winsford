require('dotenv').config()
const { neon } = require('@neondatabase/serverless')

const sql = neon(process.env.DATABASE_URL)

async function main() {
  console.log('Seeding database...')

  try {
    // Create subjects
    await sql`
      INSERT INTO subjects (id, name, category)
      VALUES 
        (gen_random_uuid(), 'Mathematics', 'core'),
        (gen_random_uuid(), 'English', 'core'),
        (gen_random_uuid(), 'Science', 'core'),
        (gen_random_uuid(), 'Social Studies', 'core'),
        (gen_random_uuid(), 'Computer Science', 'elective'),
        (gen_random_uuid(), 'Agricultural Science', 'elective')
    `

    // Create classes
    await sql`
      INSERT INTO classes (id, name, level)
      VALUES 
        ('pry-1-placeholder', 'Pry 1', 'primary'),
        ('pry-2-placeholder', 'Pry 2', 'primary'),
        ('jss-1-placeholder', 'JSS 1', 'secondary'),
        ('jss-2-placeholder', 'JSS 2', 'secondary'),
        ('sss-1-placeholder', 'SSS 1', 'secondary')
    `

    // Create term
    await sql`
      INSERT INTO terms (id, "sessionName", "isActive")
      VALUES ('term-placeholder', '2026/2027 Term 1', true)
    `

    // Get IDs for relations
    const pry1 = await sql`SELECT id FROM classes WHERE id = 'pry-1-placeholder'`
    const pry2 = await sql`SELECT id FROM classes WHERE id = 'pry-2-placeholder'`
    const math = await sql`SELECT id FROM subjects WHERE name = 'Mathematics'`
    const term = await sql`SELECT id FROM terms WHERE id = 'term-placeholder'`

    // Create users
    const adminResult = await sql`
      INSERT INTO users (id, email, name, role)
      VALUES (gen_random_uuid(), 'admin@winsfordschools.com.ng', 'Admin User', 'admin')
      RETURNING id
    `
    const adminId = adminResult[0]?.id

    const teacherResult = await sql`
      INSERT INTO users (id, email, name, role)
      VALUES (gen_random_uuid(), 'teacher@winsfordschools.com.ng', 'Mrs Samuel', 'teacher')
      RETURNING id
    `
    const teacherId = teacherResult[0]?.id

    const studentResult = await sql`
      INSERT INTO users (id, email, name, role)
      VALUES (gen_random_uuid(), 'student@example.com', 'John Student', 'student')
      RETURNING id
    `
    const studentId = studentResult[0]?.id

    // Create teacher profile
    if (teacherId) {
      await sql`
        INSERT INTO teachers (id, "userId", title, "firstName", "lastName", "employmentType", bio)
        VALUES (gen_random_uuid(), ${teacherId}, 'Mrs', 'Sarah', 'Samuel', 'class_teacher', 'Experienced primary school teacher with 10+ years of teaching.')
      `
    }

    // Create student profile
    if (studentId && pry1[0]) {
      await sql`
        INSERT INTO students (id, "userId", "firstName", "lastName", "classId")
        VALUES (gen_random_uuid(), ${studentId}, 'John', 'Student', ${pry1[0].id})
      `
    }

    // Get teacher ID for assignments
    const teacher = await sql`SELECT id FROM teachers WHERE "userId" = ${teacherId}`

    // Create assignments
    if (teacher[0] && pry1[0] && term[0]) {
      await sql`
        INSERT INTO assignments (id, "teacherId", "classId", "termId", role)
        VALUES (gen_random_uuid(), ${teacher[0].id}, ${pry1[0].id}, ${term[0].id}, 'class_teacher')
      `
    }

    if (teacher[0] && pry2[0] && math[0] && term[0]) {
      await sql`
        INSERT INTO assignments (id, "teacherId", "classId", "subjectId", "termId", role)
        VALUES (gen_random_uuid(), ${teacher[0].id}, ${pry2[0].id}, ${math[0].id}, ${term[0].id}, 'subject_teacher')
      `
    }

    console.log('Database seeded successfully!')
    console.log('Admin user ID:', adminId)
    console.log('Teacher user ID:', teacherId)
    console.log('Student user ID:', studentId)
  } catch (error) {
    console.error('Seeding error:', error)
    process.exit(1)
  }
}

main()
  .then(() => {
    console.log('Done!')
    process.exit(0)
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })