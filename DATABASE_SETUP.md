# Database Setup Guide

## Database Provider: Neon Postgres

This project uses **Neon Postgres** database with serverless connection pooling.

## Setup Steps

### 1. Configure Environment Variables

Update `.env.local` with your actual database URL:

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/database_name"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-generate-with-openssl-rand-base64-32"
```

### 2. Generate Prisma Client

```bash
npx prisma generate
```

### 3. Run Database Migrations

```bash
npx prisma migrate dev --name init
```

This will create the database tables based on the schema.

### 4. Seed the Database (Optional)

Create a seed script in `prisma/seed.ts` to populate initial data:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create sample subjects
  await prisma.subject.createMany({
    data: [
      { name: 'Mathematics', category: 'core' },
      { name: 'English', category: 'core' },
      { name: 'Science', category: 'core' },
      { name: 'Social Studies', category: 'core' },
      { name: 'Computer Science', category: 'elective' },
    ],
    skipDuplicates: true,
  })

  // Create sample classes
  await prisma.class.createMany({
    data: [
      { name: 'Nursery 1', level: 'nursery' },
      { name: 'Nursery 2', level: 'nursery' },
      { name: 'Primary 1', level: 'primary' },
      { name: 'Primary 2', level: 'primary' },
      { name: 'JSS 1', level: 'secondary' },
      { name: 'JSS 2', level: 'secondary' },
      { name: 'SSS 1', level: 'secondary' },
    ],
    skipDuplicates: true,
  })

  // Create sample term
  await prisma.term.create({
    data: {
      sessionName: '2026/2027 Term 1',
      isActive: true,
    },
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

Run the seed script:

```bash
npx prisma db seed
```

## Architecture Overview

### Database Models

- **Teacher**: Staff members who teach classes
- **Class**: Class groups (e.g., "Pry 1", "JSS 2")
- **Subject**: Subjects taught in the school
- **Term**: Academic terms/sessions
- **Assignment**: Links teachers to classes/subjects for specific terms
- **User**: Authentication users with roles (admin, teacher, student, parent)
- **Student**: Student profiles linked to users and classes
- **Parent**: Parent profiles linked to users
- **Account/Session**: NextAuth required tables

### Assignment Logic

The Assignment model uses a nullable `subjectId` + `role` pattern:
- `role: "class_teacher"` + `subjectId: null` = Teacher covers ALL subjects for that class
- `role: "subject_teacher"` + `subjectId: <id>` = Teacher teaches specific subject

Unique constraint prevents duplicate assignments for the same teacher/class/subject/term combination.

## Important Notes

1. **Authentication**: Currently uses demo mode (accepts any password). Add bcrypt for production.
2. **Image Storage**: Teacher photos should be uploaded to Vercel Blob or similar service.
3. **Password Reset**: Implement email-based password reset for production use.
4. **Role Protection**: Middleware protects `/portal/teacher/*`, `/portal/student/*`, and `/portal/admin/*` routes.

## Next Steps

1. Set up your Postgres database on Vercel or Neon
2. Update `.env.local` with your `DATABASE_URL`
3. Run `npx prisma migrate dev --name init`
4. Optionally seed the database with initial data
5. Start the development server: `npm run dev`

## Useful Commands

```bash
# Generate Prisma client after schema changes
npx prisma generate

# Create and apply a new migration
npx prisma migrate dev --name migration_name

# View database in Prisma Studio
npx prisma studio

# Reset database (WARNING: deletes all data)
npx prisma migrate reset