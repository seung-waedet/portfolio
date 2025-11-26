import Link from 'next/link'
import GlitchText from '@/components/GlitchText'
import ProjectCard from '@/components/ProjectCard'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'

export const dynamic = 'force-dynamic'

export default async function Projects() {
  const payload = await getPayload({ config })
  const projects = await payload.find({
    collection: 'projects',
    sort: '-order',
    where: {
      status: {
        not_equals: 'archived',
      },
    },
  })

  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <Link href="/" className="text-lime hover:text-magenta transition-colors font-mono text-sm mb-8 inline-block">
            ← cd ..
          </Link>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            <GlitchText text="PROJECTS" />
          </h1>
          <p className="text-xl text-lime-dim font-mono">
            $ ls -la ./systems-that-actually-work/
          </p>
          <div className="h-1 w-32 bg-magenta mt-6" />
        </div>

        {/* Masonry-style grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {projects.docs.map((project: any, i: number) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </main>
  )
}
