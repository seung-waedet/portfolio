"use client";

import Link from "next/link";

export default function CommandLineNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-cream/90 backdrop-blur-md py-10">
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between font-bold text-[10px] uppercase tracking-[0.4em]">
        <Link href="/" className="hover:opacity-40 transition-opacity">
          Seung-wa Akpan
        </Link>

        <div className="flex items-center gap-12">
          <Link href="/projects" className="hover:opacity-40 transition-opacity">
            Work
          </Link>
          <Link href="/blog" className="hover:opacity-40 transition-opacity">
            Logs
          </Link>
        </div>
      </div>
    </nav>
  )
}
