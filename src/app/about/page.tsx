"use client";

import Link from "next/link";
import GlitchText from "@/components/GlitchText";

export default function About() {
  const timeline = [
    {
      year: "2021",
      event: "Started B.Sc Computer Science at Arthur Jarvis University",
      tech: "Education",
    },
    {
      year: "2022",
      event: "Founded Google Developer Student Club Chapter",
      tech: "Leadership",
    },
    {
      year: "2022-2023",
      event: "Web Developer Intern at Digital Box",
      tech: "HTML, CSS, JavaScript",
    },
    {
      year: "2023-2024",
      event: "Backend Developer Intern at Resourceful Dev",
      tech: "Node.js, Express, Redis",
    },
    {
      year: "2023",
      event: "Completed ALX AI Career Essentials Program",
      tech: "AI, Machine Learning",
    },
    {
      year: "2024",
      event: "Completed Diploma in Backend Engineering at AltSchool Africa",
      tech: "Backend Development",
    },
    {
      year: "2024-2025",
      event: "Python Developer at TIIDELAB Pre-fellowship",
      tech: "Python, AI APIs",
    },
    {
      year: "2025-Present",
      event: "Python Developer at Kevin Winter Foundation",
      tech: "AI Platforms, Flask, Celery",
    },
    {
      year: "2025-Present",
      event: "Backend Developer at KSolutions",
      tech: "Node.js, SQL, Docker",
    },
  ];

  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="text-lime hover:text-magenta transition-colors font-mono text-sm mb-8 inline-block"
          >
            ← cd ..
          </Link>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            <GlitchText text="ABOUT" />
          </h1>
          <div className="h-1 w-32 bg-magenta" />
        </div>

        {/* Asymmetrical layout */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Left column - Bio */}
          <div className="md:col-span-2 space-y-6 text-lg leading-relaxed">
            <p className="text-lime-dim">
              I'm a backend engineer with 1+ years of experience designing and
              building scalable systems using Python, Node.js, and modern
              development practices. Currently developing AI platforms and
              distributed systems at Kevin Winter Foundation and KSolutions.
            </p>
            <p className="text-lime-dim">
              My expertise lies in architecting systems that can handle
              real-world loads—AI-powered video processing platforms that handle
              terabytes of data, matching algorithms with compatibility scoring,
              and RESTful APIs with robust authentication systems. I specialize
              in Python (Flask, FastAPI), Node.js (Express, Nest.js), and
              databases like PostgreSQL and MongoDB.
            </p>
            <p className="text-lime-dim">
              I'm passionate about building reliable systems with strong
              foundations in database design, containerization, and test-driven
              development. My experience includes implementing distributed
              architectures with Docker, managing caching layers with Redis, and
              building comprehensive test suites to ensure software quality.
            </p>
          </div>

          {/* Right column - Quick facts */}
          <div className="terminal p-6 space-y-4 h-fit">
            <div className="terminal-header">
              <div className="terminal-dot" />
              <div className="terminal-dot" />
              <div className="terminal-dot" />
              <span>quick_facts.sh</span>
            </div>
            <div className="p-4 space-y-2 text-sm">
              <p>
                <span className="text-magenta">$</span> location: Remote
              </p>
              <p>
                <span className="text-magenta">$</span> editor: Neovim
              </p>
              <p>
                <span className="text-magenta">$</span> shell: zsh + tmux
              </p>
              <p>
                <span className="text-magenta">$</span> db: PostgreSQL
              </p>
              <p>
                <span className="text-magenta">$</span> queue: RabbitMQ
              </p>
              <p>
                <span className="text-magenta">$</span> deploy: Docker
              </p>
              <p>
                <span className="text-magenta">$</span> monitor: Grafana
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-display font-bold mb-12 text-magenta">
            JOURNEY.LOG
          </h2>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="border-l-2 border-lime pl-8 pb-8 relative hover:border-magenta transition-colors group"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-lime rounded-full group-hover:bg-magenta transition-colors" />
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <span className="text-3xl font-display font-bold text-magenta min-w-[100px]">
                    {item.year}
                  </span>
                  <div className="flex-1">
                    <p className="text-xl text-lime mb-2">{item.event}</p>
                    <p className="text-sm text-lime-dim font-mono">
                      {item.tech}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div>
          <h2 className="text-4xl font-display font-bold mb-12 text-magenta">
            STACK.DUMP
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Python",
              "JavaScript",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "MongoDB",
              "MySQL",
              "Redis",
              "Docker",
              "Git",
              "Linux",
              "AWS",
              "Express.js",
              "Flask",
              "FastAPI",
              "Nest.js",
            ].map((skill, i) => (
              <div
                key={i}
                className="border-2 border-lime p-4 text-center hover:bg-lime hover:text-void transition-all duration-200 hover:scale-105 cursor-default"
              >
                <span className="font-mono">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-20 text-center">
          <p className="text-lime-dim font-mono mb-4">
            $ get_in_touch --email seungwaakpan@gmail.com
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="https://github.com/seung-waedet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime hover:text-magenta transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/seungwaakpan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime hover:text-magenta transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:seungwaakpan@gmail.com"
              className="text-lime hover:text-magenta transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
