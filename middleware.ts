export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/portal/teacher/:path*', '/portal/student/:path*', '/portal/admin/:path*']
}