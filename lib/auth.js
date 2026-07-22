import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'

export const authOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 10 * 60, // 10 minutes (600 seconds) absolute token lifetime
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null

        // Try to find user by email first
        let user = await prisma.user.findUnique({
          where: { email: credentials.username },
          include: {
            teacher: true,
            student: true,
            parent: true
          }
        })

        // If not found by email, try to find by student admission number
        if (!user && credentials.username.startsWith('WIN')) {
          const student = await prisma.student.findFirst({
            where: {
              admissionNumber: credentials.username
            },
            include: {
              user: {
                include: {
                  teacher: true,
                  parent: true
                }
              }
            }
          })

          if (student?.user) {
            user = student.user
          }
        }

        if (!user || !user.password) return null

        const isValid = await bcrypt.compare(credentials.password, user.password)
        
        if (!isValid) return null

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub
        session.user.role = token.role
      }
      return session
    }
  },
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/portal/signin',
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }