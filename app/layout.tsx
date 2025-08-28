import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shreyansh Bhagwat - AI/ML Engineer & Full Stack Developer',
  description: 'Portfolio of Shreyansh Bhagwat - Aspiring AI/ML Engineer, Full Stack Developer, and Open Source Enthusiast. Computer Science student passionate about solving real-world problems with technology.',
  keywords: 'Shreyansh Bhagwat, AI/ML Engineer, Full Stack Developer, Computer Science, Machine Learning, Web Development, Open Source',
  authors: [{ name: 'Shreyansh Bhagwat' }],
  openGraph: {
    title: 'Shreyansh Bhagwat - AI/ML Engineer & Full Stack Developer',
    description: 'Portfolio of Shreyansh Bhagwat - Aspiring AI/ML Engineer and Full Stack Developer',
    url: 'https://shreyanshbhagwat.me',
    siteName: 'Shreyansh Bhagwat Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreyansh Bhagwat - AI/ML Engineer & Full Stack Developer',
    description: 'Portfolio of Shreyansh Bhagwat - Aspiring AI/ML Engineer and Full Stack Developer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}