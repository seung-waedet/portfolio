import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/hashnode'

export const dynamic = 'force-dynamic'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <main className="space-y-12">
      <header>
        <h1 className="text-xl font-medium sm:text-2xl">Writing.</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Thoughts on distributed systems, backend patterns, and the evolution of engineering architecture.
        </p>
      </header>

      <div className="divide-y divide-zinc-100 dark:divide-zinc-800 border-t border-zinc-100 dark:border-zinc-800">
        {posts.map((post: any) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <article className="group flex gap-4 py-6">
              {post.coverImage?.url && (
                <div className="relative my-auto h-20 w-28 shrink-0 overflow-hidden rounded-lg md:h-28 md:w-44">
                  <Image
                    src={post.coverImage.url}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 112px, 176px"
                  />
                </div>
              )}
              <div className="flex flex-col justify-center gap-y-1.5">
                <h2 className="text-lg font-medium text-zinc-950 group-hover:underline dark:text-zinc-50">
                  {post.title}
                </h2>
                <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {post.brief}
                </p>
                <div className="flex items-center gap-x-3 text-xs text-zinc-400 dark:text-zinc-500">
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  {post.readTimeInMinutes && (
                    <>
                      <span>&middot;</span>
                      <span>{post.readTimeInMinutes} min read</span>
                    </>
                  )}
                  {post.tags?.length > 0 && (
                    <>
                      <span>&middot;</span>
                      <div className="flex gap-1">
                        {post.tags.slice(0, 3).map((tag: any) => (
                          <span
                            key={tag.slug}
                            className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
