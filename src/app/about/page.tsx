'use client'

import Link from 'next/link'
import GlitchText from '@/components/GlitchText'

export default function About() {
  const timeline = [
    { year: '2018', event: 'Discovered Linux, never looked back', tech: 'Ubuntu, Bash' },
    { year: '2019', event: 'Built first REST API, immediately broke production', tech: 'Node.js, Express' },
    { year: '2020', event: 'Fell in love with message queues', tech: 'RabbitMQ, Redis' },
    { year: '2021', event: 'Survived the microservices hype cycle', tech: 'Docker, K8s' },
    { year: '2022', event: 'Started living in tmux and htop', tech: 'tmux, Neovim' },
    { year: '2023', event: 'Built Linguify - video transcription at scale', tech: 'Python, Celery, FFmpeg' },
    { year: '2024', event: 'Shipped Scissor - URL shortener with analytics', tech: 'Go, PostgreSQL' },
    { year: '2025', event: 'Still debugging in production', tech: 'Everything' },
  ]

  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="text-lime hover:text-magenta transition-colors font-mono text-sm mb-8 inline-block">
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
              I'm a backend engineer who believes that good infrastructure is invisible 
              and great infrastructure is boring. I spend my days architecting systems 
              that scale, my nights debugging why they don't, and my weekends reading 
              database internals papers for fun.
            </p>
            <p className="text-lime-dim">
              My weapon of choice is whatever gets the job done—Python for data pipelines, 
              Go for services that need to be fast, Node.js when I'm feeling nostalgic. 
              I've built video processing systems that handle terabytes, URL shorteners 
              that serve millions, and rate limiters that actually work.
            </p>
            <p className="text-lime-dim">
              When I'm not writing code, I'm probably staring at htop, optimizing Docker 
              builds, or arguing about database indexes on Twitter. I believe in boring 
              technology, comprehensive logging, and the healing power of a well-placed 
              cache layer.
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
              <p><span className="text-magenta">$</span> location: Remote</p>
              <p><span className="text-magenta">$</span> editor: Neovim</p>
              <p><span className="text-magenta">$</span> shell: zsh + tmux</p>
              <p><span className="text-magenta">$</span> db: PostgreSQL</p>
              <p><span className="text-magenta">$</span> queue: RabbitMQ</p>
              <p><span className="text-magenta">$</span> deploy: Docker</p>
              <p><span className="text-magenta">$</span> monitor: Grafana</p>
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
                    <p className="text-sm text-lime-dim font-mono">{item.tech}</p>
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
              'Python', 'Go', 'Node.js', 'TypeScript',
              'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ',
              'Docker', 'Kubernetes', 'AWS', 'GCP',
              'Nginx', 'Celery', 'FastAPI', 'gRPC'
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
            $ echo "Let's build something that doesn't crash"
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a 
              href="https://github.com/seungwa-akpan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lime hover:text-magenta transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/seungwa-akpan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lime hover:text-magenta transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://x.com/seungwa_akpan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lime hover:text-magenta transition-colors"
            >
              X
            </a>
            <a 
              href="mailto:seungwa@example.com"
              className="text-lime hover:text-magenta transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
