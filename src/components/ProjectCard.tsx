import Link from 'next/link'

interface ProjectCardProps {
  project: any
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Vary card sizes for masonry effect
  const sizes = ['md:row-span-2', 'md:col-span-2', '', 'md:row-span-2', 'md:col-span-2', '']
  const sizeClass = sizes[index % sizes.length]

  return (
    <Link href={`/projects/${project.slug}`}>
      <div className={`terminal group h-full ${sizeClass} relative`}>
        <div className="terminal-header items-center justify-between">
          <div className="flex gap-1.5">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
          </div>
          <span className="opacity-50 uppercase text-[9px] tracking-tighter">Instance: {project.slug}</span>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-display font-medium text-silver group-hover:text-accent transition-colors tracking-tight">
              {project.title}
            </h2>
            {project.status === 'live' && (
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Live Engine</span>
              </div>
            )}
          </div>

          <p className="text-slate-dim text-sm leading-relaxed">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-white/5">
            {project.tech && project.tech.slice(0, 4).map((t: any, i: number) => (
              <span key={i} className="text-[10px] font-mono text-slate-dim/60 uppercase">
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
