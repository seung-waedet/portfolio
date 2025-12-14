"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CommandLineNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-lime/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between font-mono text-sm">
        <div className="flex items-center gap-2 text-lime">
          <span className="text-magenta">seungwa@portfolio</span>
          <span className="text-lime-dim">:</span>
          <span className="text-blue-400">
            ~{pathname === "/" ? "" : pathname}
          </span>
          <span className="animate-pulse">$</span>
        </div>

        <div className="flex items-center gap-6 text-lime-dim">
          <Link href="/" className="hover:text-lime transition-colors">
            ./home
          </Link>
          <Link href="/projects" className="hover:text-lime transition-colors">
            ./projects
          </Link>
          <Link href="/blog" className="hover:text-lime transition-colors">
            ./blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
