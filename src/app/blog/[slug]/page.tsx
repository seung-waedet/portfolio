import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/hashnode'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import LayoutBlogPost from '@/app/blog/layout'

export const dynamic = 'force-dynamic'

type Args = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: Args) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <LayoutBlogPost>
      <header className="mb-8">
        <h1 className="text-xl font-medium sm:text-2xl">{post.title}</h1>
        <div className="mt-2 flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          <span>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span>{post.readTimeInMinutes} min read</span>
        </div>
      </header>

      <div className="prose prose-gray dark:prose-invert max-w-none">
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
                  className="rounded-lg !my-8"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={`${className} bg-neutral-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-sm`} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {post.content.markdown}
        </ReactMarkdown>
      </div>
    </LayoutBlogPost>
  )
}
