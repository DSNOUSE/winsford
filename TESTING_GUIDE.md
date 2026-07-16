# Testing Guide

## Prerequisites

Before testing, ensure you have:
- Node.js 18+ installed
- A Postgres database (Vercel Postgres, Neon, or local)
- Your database connection string ready

## Step 1: Configure Database

1. **Update `.env.local`** with your actual database credentials:

```env
# Replace with your actual database URL
DATABASE_URL='postgresql://YOUR_USER:YOUR_PASSWORD@YOUR_HOST:5432/YOUR_DATABASE?sslmode=require'

# NextAuth configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
```

**To generate a secure NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Generate Prisma Client

```bash
npx prisma generate
```

Expected output:
```
✔ Generated Prisma Client (v7.8.0) to .\node_modules\@prisma\client
```

## Step 4: Run Database Migrations

```bash
npx prisma migrate dev --name init
```

This creates all database tables. You should see:
```
Applying migration `20231201_init`
```

## Step 5: Seed the Database (Recommended)

Create `prisma/seed.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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

  // Create classes
  const pry1 = await prisma.class.upsert({
    where: { id: 'pry-1-placeholder' },
    update: {},
    create: { name: 'Pry 1', level: 'primary' },
  })

  const jss1 = await prisma.class.upsert({
    where: { id: 'jss-1-placeholder' },
    update: {},
    create: { name: 'JSS 1', level: 'secondary' },
  })

  // Create term
  const term = await prisma.term.upsert({
    where: { id: 'term-placeholder' },
    update: {},
    create: { sessionName: '2026/2027 Term 1', isActive: true },
  })

  // Create a test admin user (use a real email)
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@winsfordschools.com.ng' },
    update: {},
    create: {
      email: 'admin@winsfordschools.com.ng',
      name: 'Admin User',
      role: 'admin',
    },
  })

  console.log('Database seeded successfully!')
  console.log('Admin user:', adminUser)
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

Add to package.json:
```json
"prisma": {
  "seed": "ts-node --transpile-only prisma/seed.ts"
}
```

Run:
```bash
npx prisma db seed
```

## Step 6: Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## Step 7: Test Public Pages

### Test Staff Directory
1. Visit `http://localhost:3000/staff`
2. **Expected**: Page loads with gradient header "Our Staff"
3. **Expected**: Shows grid of teacher cards (empty initially until you add data)
4. **Expected**: Each card shows photo (or placeholder), name, employment type, assignments

### Test Teacher Profile
1. Visit `http://localhost:3000/staff/[teacher-id]` (use a real ID from your database)
2. **Expected**: Shows teacher profile with header, bio, assignments
3. **Expected**: Proper caching (revalidate: 3600)

### Test Classes Listing
1. Visit `http://localhost:3000/classes`
2. **Expected**: Shows classes grouped by level (Nursery, Primary, Secondary)
3. **Expected**: Each class card links to its detail page

### Test Individual Class Page
1. Visit `http://localhost:3000/classes/pry-1`
2. **Expected**: Shows class name and level
3. **Expected**: Lists Class Teachers (cards with photos)
4. **Expected**: Lists Subject Teachers (table with subject-teacher pairs)
5. **Expected**: Both link to teacher profile pages

## Step 8: Test Portal Authentication

### Test Sign-In Page
1. Visit `http://localhost:3000/portal/signin`
2. **Expected**: Shows sign-in form
3. **Test**: Try signing in with any email/password (demo mode)
4. **Expected**: Redirects to / (or callbackUrl if provided)

### Test Middleware Protection
1. While logged in as a student, try: `http://localhost:3000/portal/teacher/dashboard`
2. **Expected**: Redirects to home page (role mismatch)
3. **Expected**: Sign-in page shows for unauthenticated users

## Step 9: Test Teacher Portal

1. **In database**, create a teacher:
```typescript
const user = await prisma.user.create({
  data: {
    email: 'teacher@winsfordschools.com.ng',
    name: 'Mrs Smith',
    role: 'teacher',
    teacher: {
      create: {
        title: 'Mrs',
        firstName: 'Jane',
        lastName: 'Smith',
        employmentType: 'class_teacher'
      }
    }
  }
})
```

2. **Create assignment**:
```typescript
await prisma.assignment.create({
  data: {
    teacherId: teacher.id,
    classId: pry1.id,
    termId: term.id,
    role: 'class_teacher'
  }
})
```

3. Visit `http://localhost:3000/portal/teacher/dashboard`
4. **Expected**: Shows teacher dashboard with assignments
5. **Expected**: Displays class teacher role and active term

## Step 10: Test Admin Portal

1. Visit `http://localhost:3000/portal/admin/assignments`
2. **Expected**: Shows assignment management interface
3. **Expected**: Lists all assignments in a table
4. **Expected**: Shows "Quick Actions" section with copy-from-last-term form

### Test Create Assignment
1. Fill out the form: select teacher, class, subject (optional), term, role
2. Click "Create Assignment"
3. **Expected**: Assignment is created
4. **Expected**: Page revalidates and shows new assignment in table
5. **Expected**: Staff directory and class page are updated

### Test Delete Assignment
1. Click "Delete" on any assignment
2. Confirm the action
3. **Expected**: Assignment is removed
4. **Expected**: Related pages are revalidated

### Test Copy from Last Term
1. Select source and target terms
2. Click "Copy Assignments"
3. **Expected**: All assignments from source term are duplicated to target
4. **Expected**: Staff and class pages are revalidated

## Step 11: Test Caching

### Test ISR on Public Pages
1. Visit `http://localhost:3000/staff`
2. In terminal, note: "Cache miss - fetching fresh data"
3. Visit again within 1 hour
4. **Expected**: Cached version serves (faster)
5. After admin creates an assignment, pages should update immediately (revalidatePath)

## Step 12: Test Student Portal (Optional)

1. Create a student in database:
```typescript
const user = await prisma.user.create({
  data: {
    email: 'student@example.com',
    name: 'John Student',
    role: 'student',
    student: {
      create: {
        firstName: 'John',
        lastName: 'Student',
        classId: pry1.id
      }
    }
  }
})
```

2. Visit `http://localhost:3000/portal/student/dashboard`
3. **Expected**: Shows student name, class
4. **Expected**: Lists class teachers and subject teachers for their class

## Step 13: Verify Revalidation

1. Go to admin portal
2. Create or modify an assignment
3. Immediately visit:
   - `/staff` - should show updated info
   - `/classes/pry-1` - should show updated teachers
4. **Expected**: Changes appear immediately without server restart

## Expected Errors & Solutions

### "Cannot find module '@/lib/prisma'"
- Ensure you're using `.js` imports in lib/auth.js
- Check file paths use `@` alias

### "Prisma schema validation error"
- Run `npx prisma format` to fix formatting
- Ensure all relations have corresponding fields

### "Database connection failed"
- Verify DATABASE_URL in .env.local
- Check database server is running
- Ensure IP whitelist allows your IP

### "Authentication not working"
- Verify NEXTAUTH_URL matches your dev server URL
- Ensure database has User records
- Check middleware.ts configuration

## Database Tools

### View Database Data
```bash
npx prisma studio
```
Opens browser-based database viewer at `http://localhost:5555`

### Reset Database (WARNING: deletes all data)
```bash
npx prisma migrate reset
```

### Check Current Status
```bash
npx prisma migrate status
```

## Production Checklist

Before deploying:

1. [ ] Set strong `NEXTAUTH_SECRET`
2. [ ] Update `NEXTAUTH_URL` to production domain
3. [ ] Add real `DATABASE_URL` from Vercel/Neon
4. [ ] Implement bcrypt password hashing in `lib/auth.js`
5. [ ] Add email verification for users
6. [ ] Set up password reset flow
7. [ ] Configure image upload for teacher photos
8. [ ] Add rate limiting on auth endpoints
9. [ ] Run `npm run build` to verify no build errors

## Common Testing Queries

### Check if user exists
```bash
npx prisma studio
# Navigate to User model
```

### Create test admin user via Prisma Studio
1. Open Prisma Studio
2. Go to User table
3. Create new record:
   - email: admin@test.com
   - name: Test Admin
   - role: admin

### Verify assignments
```bash
# In seed.ts or console
const assignments = await prisma.assignment.findMany({
  include: { teacher: true, class: true, term: true }
})
console.log(assignments)