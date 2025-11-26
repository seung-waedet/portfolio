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
      <div className={`terminal group hover:scale-[1.02] transition-all duration-300 h-full ${sizeClass} box-glow hover:box-glow-hover`}>
        <div className="terminal-header">
          <div className="terminal-dot" />
          <div className="terminal-dot" />
          <div className="terminal-dot" />
          <span>{project.slug}.sh</span>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-2xl font-display font-bold text-lime group-hover:text-magenta transition-colors">
              {project.title}
            </h2>
            {project.status === 'live' && (
              <span className="text-xs font-mono text-lime border border-lime px-2 py-1 whitespace-nowrap">
                [LIVE]
              </span>
            )}
          </div>

          <p className="text-lime-dim text-sm">
            {project.tagline}
          </p>

          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 4).map((t: any, i: number) => (
                <span key={i} className="text-xs font-mono text-magenta">
                  #{t.name}
                </span>
              ))}
            </div>
          )}

          {project.apiEndpoint && (
            <div className="pt-4 border-t border-lime/20">
              <p className="text-xs font-mono text-lime-dim">
                <span className="text-magenta">$</span> curl {project.apiEndpoint}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
