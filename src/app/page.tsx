"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import GlitchText from "@/components/GlitchText";
import TerminalButton from "@/components/TerminalButton";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText =
    "> Building distributed systems that don't fall apart at 3 AM_";

  useEffect(() => {
    setMounted(true);
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden"
      suppressHydrationWarning
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="z-10 max-w-5xl w-full space-y-12 text-center">
        {/* Main heading */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-8xl font-display font-bold">
            <span className="text-lime">SEUNG-WA</span>
            <br />
            <span className="text-magenta">AKPAN</span>
          </h1>

          <p className="text-2xl md:text-3xl font-display font-semibold text-lime-dim">
            Backend Engineer
          </p>

          {/* Typewriter tagline */}
          <p className="text-xl md:text-2xl font-mono text-lime-dim min-h-[2em]">
            {typedText}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <Link href="/projects">
            <TerminalButton variant="primary">$ ls ./projects</TerminalButton>
          </Link>
          <Link href="/blog">
            <TerminalButton variant="secondary">$ cat ./writing</TerminalButton>
          </Link>
        </div>

        {/* About Section */}
        <section className="pt-16 max-w-3xl mx-auto">
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dot" />
              <div className="terminal-dot" />
              <div className="terminal-dot" />
              <span>about.txt</span>
            </div>
            <div className="p-8 text-left">
              <h2 className="text-3xl font-display font-bold text-lime mb-4">
                $ whoami
              </h2>
              <p className="text-lime-dim leading-relaxed font-mono">
                Backend Engineer with 1+ years of experience building scalable
                systems in Python, Node.js, and modern web technologies.
                Currently developing AI platforms and distributed systems at
                Kevin Winter Foundation and KSolutions. Proven track record in
                architecting video processing systems that handle terabytes of
                data, building matching algorithms, and implementing
                authentication systems. Strong foundation in database design,
                containerization, and test-driven development.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="pt-12 max-w-4xl mx-auto">
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dot" />
              <div className="terminal-dot" />
              <div className="terminal-dot" />
              <span>skills.json</span>
            </div>
            <div className="p-8 text-left">
              <h2 className="text-3xl font-display font-bold text-lime mb-6">
                $ cat skills.json
              </h2>
              <div className="grid md:grid-cols-2 gap-6 font-mono text-sm">
                <div>
                  <h3 className="text-magenta font-bold mb-3">"backend": [</h3>
                  <ul className="ml-6 space-y-1 text-lime-dim">
                    <li>"Node.js (Express.js, Nest.js)",</li>
                    <li>"Flask",</li>
                    <li>"FastAPI",</li>
                    <li>"RESTful APIs"</li>
                  </ul>
                  <p className="text-magenta mt-1">],</p>
                </div>

                <div>
                  <h3 className="text-magenta font-bold mb-3">
                    "languages": [
                  </h3>
                  <ul className="ml-6 space-y-1 text-lime-dim">
                    <li>"Python",</li>
                    <li>"JavaScript",</li>
                    <li>"TypeScript"</li>
                  </ul>
                  <p className="text-magenta mt-1">],</p>
                </div>

                <div>
                  <h3 className="text-magenta font-bold mb-3">
                    "databases": [
                  </h3>
                  <ul className="ml-6 space-y-1 text-lime-dim">
                    <li>"PostgreSQL",</li>
                    <li>"MongoDB",</li>
                    <li>"MySQL",</li>
                    <li>"Redis"</li>
                  </ul>
                  <p className="text-magenta mt-1">],</p>
                </div>

                <div>
                  <h3 className="text-magenta font-bold mb-3">"devops": [</h3>
                  <ul className="ml-6 space-y-1 text-lime-dim">
                    <li>"Docker",</li>
                    <li>"Git",</li>
                    <li>"Linux",</li>
                    <li>"AWS",</li>
                    <li>"CI/CD"</li>
                  </ul>
                  <p className="text-magenta mt-1">],</p>
                </div>

                <div>
                  <h3 className="text-magenta font-bold mb-3">"testing": [</h3>
                  <ul className="ml-6 space-y-1 text-lime-dim">
                    <li>"Jest",</li>
                    <li>"Mocha",</li>
                    <li>"pytest",</li>
                    <li>"Unit Testing",</li>
                    <li>"Integration Testing"</li>
                  </ul>
                  <p className="text-magenta mt-1">]</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <div className="pt-12 flex gap-6 justify-center items-center font-mono text-lg">
          <a
            href="https://github.com/seung-waedet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime hover:text-magenta transition-colors"
          >
            GitHub
          </a>
          <span className="text-lime-dim">•</span>
          <a
            href="https://linkedin.com/in/seungwaakpan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime hover:text-magenta transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-lime-dim">•</span>
          <a
            href="mailto:seungwaakpan@gmail.com"
            className="text-lime hover:text-magenta transition-colors"
          >
            Email
          </a>
        </div>

        {/* Status bar */}
        <div className="pt-12 font-mono text-sm text-lime-dim opacity-60">
          <p>[SYSTEM STATUS: ONLINE] [UPTIME: ∞] [COFFEE: CRITICAL]</p>
        </div>
      </div>
    </main>
  );
}
