import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import MatrixRain from '@/components/MatrixRain'
import CommandLineNav from '@/components/CommandLineNav'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-clash',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-berkeley',
  display: 'swap',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Seung-wa Akpan | Backend Engineer',
  description: 'Building distributed systems that don\'t fall apart at 3 AM',
  keywords: ['backend', 'systems', 'api', 'distributed systems', 'engineering', 'Seung-wa Akpan'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-mono" suppressHydrationWarning>
        <CommandLineNav />
        <div className="page-transition">
          {children}
        </div>
      </body>
    </html>
  )
}
