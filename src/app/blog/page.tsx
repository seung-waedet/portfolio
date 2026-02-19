import Link from 'next/link'
import { getAllPosts } from '@/lib/hashnode'

export const dynamic = 'force-dynamic'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen pt-40 px-6 max-w-2xl mx-auto space-y-24 pb-32 reveal">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Writing.</h1>
        <p className="text-lg text-muted leading-relaxed">
          Thoughts on distributed systems, backend patterns, and the evolution of engineering architecture.
        </p>
      </header>

      <div className="space-y-6 py-12 border-t border-separator">
        {posts.map((post: any) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <article className="group py-8 border-b border-separator transition-all hover:bg-neutral-50 -mx-4 px-4 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold group-hover:text-black transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2 max-w-xl">
                    {post.brief}
                  </p>
                </div>
                <span className="text-xs text-muted tabular-nums whitespace-nowrap">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
