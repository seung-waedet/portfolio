'use client'

import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import Link from 'next/link'
import Image from 'next/image'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

interface Project {
  id: string
  name: string
  description: string
  link: string
}

interface BlogPost {
  uid: string
  title: string
  description: string
  link: string
  date?: string
  coverImage?: string | null
  readTime?: number
}

interface WorkExperience {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

interface SocialLink {
  label: string
  link: string
}

function SocialIcon({ label, link }: SocialLink) {
  const icon =
    label === 'Github' ? (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
      </svg>
    ) : label === 'LinkedIn' ? (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="8" y1="11" x2="8" y2="16" />
        <line x1="8" y1="8" x2="8" y2="8.01" />
        <line x1="12" y1="16" x2="12" y2="11" />
        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
      </svg>
    ) : (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    )

  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
        aria-label={label}
      >
        {icon}
      </a>
    </li>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 border-b border-zinc-200 pb-1 text-lg font-semibold dark:border-zinc-800">
      {children}
    </h3>
  )
}

interface HomeClientProps {
  projects: Project[]
  blogPosts: BlogPost[]
  workExperience: WorkExperience[]
  socialLinks: SocialLink[]
  email: string
  isListingPage?: boolean
}

export default function HomeClient({
  projects,
  blogPosts,
  workExperience,
  socialLinks,
  email,
  isListingPage = false,
}: HomeClientProps) {
  return (
    <motion.main
      className="space-y-20"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {!isListingPage && (
        <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-5">
            <div className="sm:col-span-3">
              <h1 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                Backend Engineer
              </h1>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Backend engineer focused on architectural integrity and minimalist design.
                Currently architecting high-performance systems and AI-integrated platforms.
              </p>
            </div>
            <div className="flex flex-col gap-y-4 pt-3 sm:col-span-2">
              <div>
                <p className="mb-2 text-sm text-zinc-500">Connect:</p>
                <ul className="flex items-center gap-x-4">
                  {socialLinks.map((link) => (
                    <SocialIcon key={link.label} {...link} />
                  ))}
                  <li>
                    <a
                      href={`mailto:${email}`}
                      className="inline-block text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
                      aria-label="Email"
                    >
                      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {projects.length > 0 && (
        <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
          <SectionHeading>Projects</SectionHeading>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                className="group rounded-lg border border-zinc-200 p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
              >
                <h4 className="font-medium text-zinc-950 dark:text-zinc-50">
                  {project.name}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </motion.section>
      )}

      {!isListingPage && (
        <>
          <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
            <SectionHeading>Work Experience</SectionHeading>
            <div className="flex flex-col space-y-2">
              {workExperience.map((job) => (
                <a
                  className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={job.id}
                >
                  <Spotlight
                    className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                    size={64}
                  />
                  <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                    <div className="relative flex w-full flex-row justify-between">
                      <div>
                        <h4 className="font-normal dark:text-zinc-100">{job.title}</h4>
                        <p className="text-zinc-500 dark:text-zinc-400">{job.company}</p>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {job.start} - {job.end}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.section>

          {blogPosts.length > 0 && (
            <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
              <SectionHeading>Writing</SectionHeading>
              <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {blogPosts.map((post) => (
                  <Link
                    key={post.uid}
                    href={post.link}
                    className="group flex gap-4 py-4"
                  >
                    {post.coverImage && (
                      <div className="relative my-auto h-16 w-24 shrink-0 overflow-hidden rounded md:h-24 md:w-36">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 96px, 144px"
                        />
                      </div>
                    )}
                    <div className="flex flex-col justify-center gap-y-1">
                      <h4 className="font-medium text-zinc-950 group-hover:underline dark:text-zinc-50">
                        {post.title}
                      </h4>
                      <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {post.description}
                      </p>
                      {post.date && (
                        <time className="text-xs text-zinc-400 dark:text-zinc-500">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}{' '}
                          {post.readTime && (
                            <span>&middot; {post.readTime} min read</span>
                          )}
                        </time>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </>
      )}
    </motion.main>
  )
}
