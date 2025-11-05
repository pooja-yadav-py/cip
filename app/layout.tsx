import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CIP * Dr. Gautham Kolluri, RCIC | Canada Immigration & Study Abroad Experts',
  description: 'Expert legal guidance for Express Entry, Provincial Nominee Programs, study permits, work permits, and all Canadian immigration matters. Led by Dr. Gautham Kolluri, RCIC.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

