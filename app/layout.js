import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Winsford Schools | Quality Nigerian Education in Ikorodu, Lagos',
  description: 'Providing quality Nigerian curriculum education with BECE, WASSCE, and NECO preparation. Located at 8/9 Awopeju Close, Igbogbo, Ikorodu, Lagos.',
  keywords: 'schools in Ikorodu, private schools Lagos, BECE preparation, WASSCE preparation, Nigerian curriculum, quality education',
  authors: [{ name: 'Winsford Schools' }],
  openGraph: {
    title: 'Winsford Schools | Excellence in Nigerian Education',
    description: 'Where Academic Excellence Meets Character Development',
    type: 'website',
    locale: 'en_NG',
    url: 'https://winsfordschools.com.ng',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
