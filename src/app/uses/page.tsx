import Link from 'next/link'
import GlitchText from '@/components/GlitchText'

export default function Uses() {
  const sections = [
    {
      title: 'EDITOR & TERMINAL',
      items: [
        { name: 'Neovim', desc: 'The only editor that matters' },
        { name: 'tmux', desc: 'Window manager for terminal addicts' },
        { name: 'zsh + oh-my-zsh', desc: 'Shell with superpowers' },
        { name: 'Alacritty', desc: 'GPU-accelerated terminal emulator' },
        { name: 'Starship', desc: 'Minimal, blazing-fast prompt' },
      ],
    },
    {
      title: 'LANGUAGES & RUNTIMES',
      items: [
        { name: 'Python 3.11+', desc: 'For data pipelines and async workers' },
        { name: 'Go 1.21+', desc: 'When performance actually matters' },
        { name: 'Node.js 20+', desc: 'JavaScript on the server (unfortunately)' },
        { name: 'TypeScript', desc: 'JavaScript with training wheels' },
      ],
    },
    {
      title: 'DATABASES & STORAGE',
      items: [
        { name: 'PostgreSQL', desc: 'The only real database' },
        { name: 'Redis', desc: 'Cache everything' },
        { name: 'MongoDB', desc: 'For when schemas are optional' },
        { name: 'S3', desc: 'Infinite storage bucket' },
      ],
    },
    {
      title: 'INFRASTRUCTURE',
      items: [
        { name: 'Docker', desc: 'Containers for everything' },
        { name: 'Nginx', desc: 'Reverse proxy and load balancer' },
        { name: 'RabbitMQ', desc: 'Message queue that actually works' },
        { name: 'Celery', desc: 'Distributed task queue' },
        { name: 'Grafana + Prometheus', desc: 'Observability stack' },
      ],
    },
    {
      title: 'TOOLS & UTILITIES',
      items: [
        { name: 'htop', desc: 'System monitor I stare at all day' },
        { name: 'curl', desc: 'API testing from the terminal' },
        { name: 'jq', desc: 'JSON processor and formatter' },
        { name: 'ripgrep', desc: 'Grep but actually fast' },
        { name: 'fzf', desc: 'Fuzzy finder for everything' },
        { name: 'lazygit', desc: 'Git TUI that makes sense' },
      ],
    },
    {
      title: 'HARDWARE',
      items: [
        { name: 'MacBook Pro M2', desc: '32GB RAM, never enough' },
        { name: 'Mechanical Keyboard', desc: 'Cherry MX Blues (sorry neighbors)' },
        { name: 'Vertical Mouse', desc: 'RSI prevention device' },
        { name: 'Dual 27" Monitors', desc: 'One for code, one for logs' },
      ],
    },
  ]

  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <Link href="/" className="text-lime hover:text-magenta transition-colors font-mono text-sm mb-8 inline-block">
            ← cd ..
          </Link>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            <GlitchText text="USES" />
          </h1>
          <p className="text-xl text-lime-dim font-mono">
            $ man setup.1
          </p>
          <div className="h-1 w-32 bg-magenta mt-6" />
        </div>

        {/* Man page style */}
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span>setup(1)</span>
          </div>
          
          <div className="p-8 space-y-12 font-mono text-sm">
            <div>
              <p className="text-lime mb-2">NAME</p>
              <p className="text-lime-dim ml-8">
                setup - backend engineer development environment
              </p>
            </div>

            <div>
              <p className="text-lime mb-2">SYNOPSIS</p>
              <p className="text-lime-dim ml-8">
                A collection of tools, languages, and hardware that power my daily workflow.
                Updated regularly as I discover better ways to waste time optimizing my setup.
              </p>
            </div>

            {sections.map((section, i) => (
              <div key={i}>
                <p className="text-magenta mb-4 font-bold">{section.title}</p>
                <div className="ml-8 space-y-3">
                  {section.items.map((item, j) => (
                    <div key={j}>
                      <p className="text-lime">{item.name}</p>
                      <p className="text-lime-dim ml-4">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <p className="text-lime mb-2">SEE ALSO</p>
              <p className="text-lime-dim ml-8">
                htop(1), tmux(1), nvim(1), docker(1), curl(1)
              </p>
            </div>

            <div>
              <p className="text-lime mb-2">BUGS</p>
              <p className="text-lime-dim ml-8">
                Probably spending too much time configuring tools instead of using them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
