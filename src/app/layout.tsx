import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import CommandLineNav from '@/components/CommandLineNav'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-mono'
})

export const metadata: Metadata = {
  title: 'Seung-wa Akpan | Software Engineer',
  description: 'Software Engineer specializing in scale, reliability, and architectural distinction.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="selection:bg-black selection:text-cream" suppressHydrationWarning>
      <body className={`${ibmPlexMono.variable} font-mono bg-cream text-black antialiased`}>
        <div className="vignette" />
        <CommandLineNav />
        {children}
      </body>
    </html>
  )
}
