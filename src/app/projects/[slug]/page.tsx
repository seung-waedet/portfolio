import Link from 'next/link'
import { notFound } from 'next/navigation'
import GlitchText from '@/components/GlitchText'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'

export const dynamic = 'force-dynamic'

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const projects = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  if (!projects.docs.length) {
    notFound()
  }

  const project = projects.docs[0]

  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <Link href="/projects" className="text-lime hover:text-magenta transition-colors font-mono text-sm mb-8 inline-block">
            ← cd ../projects
          </Link>

          <div className="flex items-start justify-between gap-4 mb-6">
            <h1 className="text-5xl md:text-7xl font-display font-bold">
              <GlitchText text={project.title} />
            </h1>
            {project.status === 'live' && (
              <span className="text-sm font-mono text-lime border-2 border-lime px-3 py-1 animate-pulse">
                [LIVE]
              </span>
            )}
          </div>

          <p className="text-2xl text-magenta mb-6">{project.tagline}</p>
          <div className="h-1 w-32 bg-magenta" />
        </div>

        {/* Tech stack */}
        {project.tech && project.tech.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold text-lime mb-4">STACK</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t: any, i: number) => (
                <span key={i} className="border-2 border-lime px-4 py-2 font-mono text-lime hover:bg-lime hover:text-void transition-all">
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <div className="mb-12 prose prose-invert max-w-none">
          <div className="text-lime-dim leading-relaxed" dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>

        {/* API Playground */}
        {project.curlExample && (
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold text-magenta mb-4">API PLAYGROUND</h2>
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot" />
                <div className="terminal-dot" />
                <div className="terminal-dot" />
                <span>curl_example.sh</span>
              </div>
              <div className="p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-lime">{project.curlExample}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Architecture */}
        {project.architecture && (
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold text-lime mb-4">ARCHITECTURE</h2>
            <div className="terminal p-6">
              <pre className="text-sm text-lime-dim whitespace-pre-wrap">
                {project.architecture}
              </pre>
            </div>
          </div>
        )}

        {/* Benchmarks */}
        {project.benchmarks && project.benchmarks.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold text-magenta mb-4">BENCHMARKS</h2>
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
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold text-lime mb-4">CHALLENGES & LEARNINGS</h2>
            <div className="prose prose-invert max-w-none">
              <div className="text-lime-dim leading-relaxed" dangerouslySetInnerHTML={{ __html: project.challenges }} />
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4">
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
    </main>
  )
}
