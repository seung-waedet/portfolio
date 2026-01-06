"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import GlitchText from "@/components/GlitchText";
import TerminalButton from "@/components/TerminalButton";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "> Building scalable tools and AI-powered solutions_";

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
            Full Stack Developer
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
                Full Stack Developer with 3+ years of experience building
                scalable internal tools and client-facing products. Specialized
                in Python (FastAPI) backend development and modern JavaScript
                frameworks (React/Next.js). Proven track record in strengthening
                backend infrastructure, designing PostgreSQL databases, and
                integrating AI/LLM APIs. Autonomous developer focused on
                production-ready code, system reliability, and evolving internal
                tools into scalable client solutions.
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
                    <li>"Python (FastAPI)",</li>
                    <li>"Node.js (Express.js)",</li>
                    <li>"RESTful APIs",</li>
                    <li>"PostgreSQL",</li>
                    <li>"Supabase"</li>
                  </ul>
                  <p className="text-magenta mt-1">],</p>
                </div>

                <div>
                  <h3 className="text-magenta font-bold mb-3">"frontend": [</h3>
                  <ul className="ml-6 space-y-1 text-lime-dim">
                    <li>"React",</li>
                    <li>"Next.js",</li>
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
                    <li>"Supabase",</li>
                    <li>"Redis",</li>
                    <li>"Database Design"</li>
                  </ul>
                  <p className="text-magenta mt-1">],</p>
                </div>

                <div>
                  <h3 className="text-magenta font-bold mb-3">
                    "ai_integrations": [
                  </h3>
                  <ul className="ml-6 space-y-1 text-lime-dim">
                    <li>"LLM APIs",</li>
                    <li>"AI Automation Tools",</li>
                    <li>"Data Providers",</li>
                    <li>"API Integrations"</li>
                  </ul>
                  <p className="text-magenta mt-1">],</p>
                </div>

                <div>
                  <h3 className="text-magenta font-bold mb-3">
                    "infrastructure": [
                  </h3>
                  <ul className="ml-6 space-y-1 text-lime-dim">
                    <li>"Cloud Deployment",</li>
                    <li>"Monitoring & Logging",</li>
                    <li>"Error Handling",</li>
                    <li>"Rate Limiting",</li>
                    <li>"Security Best Practices"</li>
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
