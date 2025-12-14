import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'

interface ExpandedProjectProps {
  project: any
}

export default async function ExpandedProject({ project }: ExpandedProjectProps) {
  // Convert lexical rich text fields to HTML
  const descriptionHTML = project.description
    ? await convertLexicalToHTML({ data: project.description })
    : '';

  const challengesHTML = project.challenges
    ? await convertLexicalToHTML({ data: project.challenges })
    : '';

  return (
    <div className="terminal mb-12 group box-glow">
      <div className="terminal-header">
        <div className="terminal-dot" />
        <div className="terminal-dot" />
        <div className="terminal-dot" />
        <span>{project.slug}.sh</span>
      </div>

      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-display font-bold text-lime group-hover:text-magenta transition-colors">
              {project.title}
            </h2>
            <p className="text-xl text-magenta mt-2">{project.tagline}</p>
          </div>
          {project.status === 'live' && (
            <span className="text-sm font-mono text-lime border-2 border-lime px-3 py-1 animate-pulse whitespace-nowrap">
              [LIVE]
            </span>
          )}
        </div>

        {/* Tech stack */}
        {project.tech && project.tech.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-display font-bold text-lime mb-3">STACK</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t: any, i: number) => (
                <span
                  key={i}
                  className="border-2 border-lime px-4 py-2 font-mono text-lime hover:bg-lime hover:text-void transition-all"
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <div className="prose prose-invert max-w-none">
          <h3 className="text-xl font-display font-bold text-lime">DESCRIPTION</h3>
          <div
            className="text-lime-dim leading-relaxed mt-3"
            dangerouslySetInnerHTML={{ __html: descriptionHTML }}
          />
        </div>

        {/* API Playground */}
        {project.curlExample && (
          <div>
            <h3 className="text-xl font-display font-bold text-magenta mb-3">API PLAYGROUND</h3>
            <div className="terminal p-4">
              <div className="terminal-header">
                <div className="terminal-dot" />
                <div className="terminal-dot" />
                <div className="terminal-dot" />
                <span>curl_example.sh</span>
              </div>
              <div className="p-4">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-lime">{project.curlExample}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Architecture */}
        {project.architecture && (
          <div>
            <h3 className="text-xl font-display font-bold text-lime mb-3">ARCHITECTURE</h3>
            <div className="terminal p-4">
              <pre className="text-sm text-lime-dim whitespace-pre-wrap">
                {project.architecture}
              </pre>
            </div>
          </div>
        )}

        {/* Benchmarks */}
        {project.benchmarks && project.benchmarks.length > 0 && (
          <div>
            <h3 className="text-xl font-display font-bold text-magenta mb-3">BENCHMARKS</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.benchmarks.map((bench: any, i: number) => (
                <div key={i} className="border-2 border-lime p-6 hover:bg-lime hover:text-void transition-all group">
                  <p className="text-sm font-mono text-lime-dim group-hover:text-void/70 mb-2">
                    {bench.metric}
                  </p>
                  <p className="text-3xl font-display font-bold">{bench.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenges */}
        {project.challenges && (
          <div>
            <h3 className="text-xl font-display font-bold text-lime mb-3">CHALLENGES & LEARNINGS</h3>
            <div className="prose prose-invert max-w-none">
              <div
                className="text-lime-dim leading-relaxed"
                dangerouslySetInnerHTML={{ __html: challengesHTML }}
              />
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-lime px-6 py-3 font-mono text-lime hover:bg-lime hover:text-void transition-all"
            >
              → Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-magenta px-6 py-3 font-mono text-magenta hover:bg-magenta hover:text-void transition-all"
            >
              → GitHub
            </a>
          )}
          {project.swaggerUrl && (
            <a
              href={project.swaggerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-lime px-6 py-3 font-mono text-lime hover:bg-lime hover:text-void transition-all"
            >
              → API Docs
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
