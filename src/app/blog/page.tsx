import Link from 'next/link'
import GlitchText from '@/components/GlitchText'
import { getAllPosts } from '@/lib/hashnode'

export const dynamic = 'force-dynamic'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <Link href="/" className="text-lime hover:text-magenta transition-colors font-mono text-sm mb-8 inline-block">
            ← cd ..
          </Link>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            <GlitchText text="WRITING" />
          </h1>
          <p className="text-xl text-lime-dim font-mono">
            $ cat ./thoughts-on-distributed-chaos.txt
          </p>
          <div className="h-1 w-32 bg-magenta mt-6" />
        </div>

        <div className="space-y-8">
          {posts.map((post: any) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="terminal group hover:scale-[1.01] transition-all">
                <div className="terminal-header">
                  <div className="terminal-dot" />
                  <div className="terminal-dot" />
                  <div className="terminal-dot" />
                  <span>{post.slug}.txt</span>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-3xl font-display font-bold text-lime group-hover:text-magenta transition-colors">
                      {post.title}
                    </h2>
                  </div>

                  <p className="text-lime-dim leading-relaxed">
                    {post.brief}
                  </p>

                  <div className="flex items-center gap-6 text-sm font-mono text-lime-dim pt-4 border-t border-lime/20">
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span>{post.readTimeInMinutes} min read</span>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex gap-2">
                        {post.tags.slice(0, 3).map((t: any, i: number) => (
                          <span key={i} className="text-magenta">
                            #{t.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
