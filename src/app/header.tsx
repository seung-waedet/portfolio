'use client'

import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-30 -mx-4 mb-8 px-4 py-3 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Seung-wa Akpan
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Backend Engineer
          </TextEffect>
        </div>
        <nav className="flex items-center divide-x divide-zinc-200 dark:divide-zinc-800">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 text-sm transition-colors hover:text-zinc-950 dark:hover:text-zinc-50 ${
                  isActive
                    ? 'text-zinc-950 dark:text-zinc-50 font-medium'
                    : 'text-zinc-500 dark:text-zinc-400'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
