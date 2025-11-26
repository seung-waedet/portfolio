import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/hashnode'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const dynamic = 'force-dynamic'

type Args = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: Args) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-lime hover:text-magenta transition-colors font-mono text-sm mb-8 inline-block">
          ← cd ..
        </Link>

        <article className="terminal">
          <div className="terminal-header">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span>{post.slug}.txt</span>
          </div>

          <div className="p-8 md:p-12">
            <header className="mb-12 border-b border-lime/20 pb-8">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-lime mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-sm font-mono text-lime-dim">
                <span>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span>{post.readTimeInMinutes} min read</span>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2">
                    {post.tags.map((t: any, i: number) => (
                      <span key={i} className="text-magenta">
                        #{t.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </header>

            <div className="prose prose-invert prose-lime max-w-none font-mono">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  }
                }}
              >
                {post.content.markdown}
              </ReactMarkdown>
            </div>
          </div>
        </article>

        {/* Footer */}
        <div className="text-center font-mono text-lime-dim">
          <p>$ EOF</p>
        </div>
      </div>
    </main>
  )
}
