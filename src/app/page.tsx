"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen pt-32 md:pt-64 px-6 max-w-[900px] mx-auto space-y-48 reveal">
      {/* Hero Statement */}
      <section className="space-y-12">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight">
          Seung-wa Akpan. <br />
          Software Engineer building <br />
          <span className="opacity-40">scalable systems & <br /> high-end digital tools.</span>
        </h1>

        <div className="flex gap-12 pt-8 text-sm font-medium uppercase tracking-widest">
          <Link href="/projects" className="hover:opacity-40 transition-opacity underline decoration-1 underline-offset-8">
            ./Work
          </Link>
          <Link href="/blog" className="hover:opacity-40 transition-opacity underline decoration-1 underline-offset-8">
            ./Logs
          </Link>
        </div>
      </section>

      {/* About Split */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-24 border-t border-black/5">
        <div className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">
          Background
        </div>
        <div className="md:col-span-3 space-y-8 text-lg font-medium leading-relaxed">
          <p>
            Dedicated to the intersection of technical excellence and minimalist design. 1+ years experience in systems engineering.
          </p>
          <p className="opacity-60 text-base font-normal">
            Specializing in high-reliability backends and fluid frontend experiences. Currently developing with Next.js, Python/FastAPI, and PostgreSQL.
          </p>
        </div>
      </section>

      {/* Experience Split */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-24 border-t border-black/5">
        <div className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">
          Experience
        </div>
        <div className="md:col-span-3 space-y-12">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h3 className="font-bold">Software Engineer</h3>
              <p className="text-sm opacity-60">Independent Engineering</p>
            </div>
            <span className="text-[10px] uppercase font-bold opacity-30">2023 — PRES</span>
          </div>

          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h3 className="font-bold">Full Stack Developer</h3>
              <p className="text-sm opacity-60">Frontend Solutions</p>
            </div>
            <span className="text-[10px] uppercase font-bold opacity-30">2022 — 2023</span>
          </div>
        </div>
      </section>

      {/* Socials */}
      <footer className="pt-24 border-t border-black/5 pb-32 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.4em] font-bold">
          <a href="https://github.com/seung-waedet" className="hover:opacity-40 transition-opacity">GitHub</a>
          <a href="https://linkedin.com/in/seungwaakpan" className="hover:opacity-40 transition-opacity">LinkedIn</a>
          <a href="mailto:seungwaakpan@gmail.com" className="hover:opacity-40 transition-opacity">Email</a>
        </div>
        <div className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">
          seung-wa.me — 2025
        </div>
      </footer>
    </main>
  );
}
