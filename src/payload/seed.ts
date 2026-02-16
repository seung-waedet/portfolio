import { getPayload } from 'payload'
import config from './payload.config'

async function seed() {
  const payload = await getPayload({ config })

  console.log('🌱 Seeding database...')

  // Create admin user
  try {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@example.com',
        password: 'password123',
        name: 'Admin User',
      },
    })
    console.log('✅ Admin user created')
  } catch (e) {
    console.log('⚠️  Admin user already exists')
  }

  // Seed projects
  const projects = [
    {
      title: 'AETHER',
      slug: 'aether',
      tagline: 'High-end digital infrastructure for the editorial age',
      description: '<p>Aether is a luxury-refined SaaS landing experience focused on infrastructure and intelligence. It challenges generic SaaS aesthetics with high-contrast serif typography, grain textures, and scroll-driven image reveals.</p><p>The project showcases "Zero Dead Links" maturity, with fully designed sub-pages for Infrastructure, Intelligence, Architecture, and Security.</p>',
      status: 'live',
      tech: [
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'Framer Motion' },
        { name: 'Lucide React' },
      ],
      githubUrl: 'https://github.com/seung-waedet/saas-landing-page',
      liveUrl: 'https://saas-landing-page-taupe-sigma.vercel.app/',
      architecture: `
┌───────────┐      ┌─────────────┐      ┌──────────────┐
│  AETHER   │─────▶│ Next.js App │─────▶│ High-End UI  │
│  Systems  │      │   Router    │      │ Componentry  │
└───────────┘      └─────────────┘      └──────────────┘
      `,
      benchmarks: [
        { metric: 'Navigation Latency', value: '18ms' },
        { metric: 'Visual Polish', value: 'Production-Grade' },
        { metric: 'Mobile Performance', value: 'Optimized' },
      ],
      featured: true,
      order: 10,
    },
    {
      title: 'VOLT.dev',
      slug: 'volt-dev',
      tagline: 'Industrial-grade developer utilities and system monitoring',
      description: '<p>VOLT.dev is a brutalist, industrial dashboard designed for high-consequence technical monitoring. It utilizes raw CSS grids, stark black-and-white palettes with construction-orange accents, and simulated data streams.</p><p>Features a comprehensive system status suite including Core metrics, Pulse heartbeat monitoring, and Security threat logging.</p>',
      status: 'live',
      tech: [
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'Framer Motion' },
        { name: 'Industrial UI' },
      ],
      githubUrl: 'https://github.com/seung-waedet/volt-dev',
      liveUrl: 'https://volt-dev.vercel.app/',
      architecture: `
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  Industrial │────▶│  VOLT KERNEL │────▶│  System Log │
│  Interface  │     │   (App)      │     │  (Active)   │
└─────────────┘     └──────────────┘     └─────────────┘
      `,
      benchmarks: [
        { metric: 'Refresh Rate', value: '60fps' },
        { metric: 'Latency', value: 'Sub-millisecond' },
        { metric: 'Styling', value: 'Raw Brutalist' },
      ],
      featured: true,
      order: 11,
    },
    {
      title: 'FLUID',
      slug: 'fluid',
      tagline: 'Organic digital movement for experimental creative studios',
      description: '<p>FLUID is an experimental agency portfolio that breaks the grid with organic, physics-based motion and zen-like aesthetics. It features soft cream palettes, lavender accents, and liquid mesh gradients.</p><p>Incorporates a functional glassmorphic mobile menu and unique sub-pages for Work, Studio, Labs, and Contact.</p>',
      status: 'live',
      tech: [
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'Framer Motion' },
        { name: 'Fluid Motion' },
      ],
      githubUrl: 'https://github.com/seung-waedet/fluid-agency',
      liveUrl: 'https://fluid-agency.vercel.app/',
      architecture: `
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  Organic    │────▶│  FLUID FLOW  │────▶│  Zen State  │
│  Input      │     │   (Studio)   │     │  (Output)   │
└─────────────┘     └──────────────┘     └─────────────┘
      `,
      benchmarks: [
        { metric: 'Animation Smoothness', value: 'Liquid' },
        { metric: 'Aesthetic Range', value: 'Experimental' },
        { metric: 'Navigation', value: 'Glassmorphic' },
      ],
      featured: true,
      order: 12,
    },

    {
      title: 'Linguify',
      slug: 'linguify',
      tagline: 'Video transcription API that actually scales',
      description: '<p>Built a distributed video transcription system that processes thousands of hours of content daily. Uses FFmpeg for audio extraction, Whisper for transcription, and Celery for job orchestration.</p><p>The system handles everything from YouTube URLs to raw video uploads, with automatic language detection, speaker diarization, and subtitle generation.</p>',
      status: 'live',
      tech: [
        { name: 'Python' },
        { name: 'FastAPI' },
        { name: 'Celery' },
        { name: 'Redis' },
        { name: 'FFmpeg' },
        { name: 'Whisper' },
        { name: 'PostgreSQL' },
      ],
      apiEndpoint: 'https://api.linguify.io/v1',
      swaggerUrl: 'https://api.linguify.io/docs',
      githubUrl: 'https://github.com/username/linguify',
      liveUrl: 'https://linguify.io',
      architecture: `
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Client    │────▶│  FastAPI     │────▶│   Celery    │
│             │     │   Gateway    │     │   Workers   │
└─────────────┘     └──────────────┘     └─────────────┘
                           │                     │
                           ▼                     ▼
                    ┌──────────────┐     ┌─────────────┐
                    │  PostgreSQL  │     │   Redis     │
                    │   (Metadata) │     │   (Queue)   │
                    └──────────────┘     └─────────────┘
                                               │
                                               ▼
                                        ┌─────────────┐
                                        │   FFmpeg    │
                                        │   Whisper   │
                                        └─────────────┘
      `,
      challenges: '<p>The biggest challenge was handling video files that are too large to process in memory. Implemented streaming uploads with chunked processing and S3 for temporary storage.</p><p>Also had to deal with Celery workers dying mid-transcription. Added comprehensive retry logic and job state persistence.</p>',
      benchmarks: [
        { metric: 'Avg Processing Time', value: '0.3x realtime' },
        { metric: 'Concurrent Jobs', value: '500+' },
        { metric: 'Daily Transcriptions', value: '10,000+ hours' },
        { metric: 'API Uptime', value: '99.9%' },
      ],
      curlExample: `curl -X POST https://api.linguify.io/v1/transcribe \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://youtube.com/watch?v=dQw4w9WgXcQ",
    "language": "auto",
    "format": "srt"
  }'`,
      featured: true,
      order: 1,
    },
    {
      title: 'Scissor',
      slug: 'scissor',
      tagline: 'URL shortener with analytics that don\'t suck',
      description: '<p>A high-performance URL shortener built in Go that handles millions of redirects per day. Features real-time analytics, custom domains, QR codes, and link expiration.</p><p>Uses Redis for caching hot links and PostgreSQL for persistence. The redirect path is optimized to under 5ms p99.</p>',
      status: 'live',
      tech: [
        { name: 'Go' },
        { name: 'PostgreSQL' },
        { name: 'Redis' },
        { name: 'Nginx' },
      ],
      apiEndpoint: 'https://api.scissor.link/v1',
      githubUrl: 'https://github.com/username/scissor',
      liveUrl: 'https://scissor.link',
      architecture: `
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Browser   │────▶│    Nginx     │────▶│  Go Server  │
│             │     │ Load Balancer│     │             │
└─────────────┘     └──────────────┘     └─────────────┘
                                                 │
                                    ┌────────────┴────────────┐
                                    ▼                         ▼
                             ┌─────────────┐         ┌──────────────┐
                             │   Redis     │         │  PostgreSQL  │
                             │   (Cache)   │         │  (Storage)   │
                             └─────────────┘         └──────────────┘
      `,
      challenges: '<p>Scaling to millions of redirects required aggressive caching strategies. Implemented a two-tier cache with Redis and in-memory LRU for the hottest links.</p><p>Analytics were initially slowing down redirects. Moved to async event streaming with a separate analytics pipeline.</p>',
      benchmarks: [
        { metric: 'Redirect Latency (p99)', value: '< 5ms' },
        { metric: 'Daily Redirects', value: '5M+' },
        { metric: 'Cache Hit Rate', value: '98.5%' },
        { metric: 'Uptime', value: '99.99%' },
      ],
      curlExample: `curl -X POST https://api.scissor.link/v1/shorten \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com/very/long/url",
    "custom_slug": "my-link",
    "expires_at": "2025-12-31T23:59:59Z"
  }'`,
      featured: true,
      order: 2,
    },
    {
      title: 'RateLimiter',
      slug: 'ratelimiter',
      tagline: 'Distributed rate limiting that actually works',
      description: '<p>A Redis-based distributed rate limiter library that supports multiple algorithms: token bucket, leaky bucket, fixed window, and sliding window.</p><p>Used in production to protect APIs from abuse while maintaining sub-millisecond overhead.</p>',
      status: 'live',
      tech: [
        { name: 'Go' },
        { name: 'Redis' },
        { name: 'Lua' },
      ],
      githubUrl: 'https://github.com/username/ratelimiter',
      architecture: `
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  API Server │────▶│ RateLimiter  │────▶│   Redis     │
│             │     │  Middleware  │     │  (Atomic)   │
└─────────────┘     └──────────────┘     └─────────────┘
                           │
                           ▼
                    Lua Scripts for
                    Atomic Operations
      `,
      benchmarks: [
        { metric: 'Overhead', value: '< 1ms' },
        { metric: 'Throughput', value: '100k+ req/s' },
        { metric: 'Accuracy', value: '99.99%' },
      ],
      curlExample: `// Go usage example
limiter := ratelimiter.New(redis, ratelimiter.Config{
    Rate:     100,
    Per:      time.Minute,
    Strategy: ratelimiter.SlidingWindow,
})

allowed, err := limiter.Allow(ctx, "user:123")`,
      featured: false,
      order: 3,
    },
    {
      title: 'StreamQueue',
      slug: 'streamqueue',
      tagline: 'Lightweight message queue for when Kafka is overkill',
      description: '<p>A simple, Redis-backed message queue with at-least-once delivery guarantees. Built for projects that need reliable async processing without the operational overhead of Kafka or RabbitMQ.</p><p>Supports delayed jobs, retries, dead letter queues, and priority queues.</p>',
      status: 'dev',
      tech: [
        { name: 'Python' },
        { name: 'Redis' },
        { name: 'asyncio' },
      ],
      githubUrl: 'https://github.com/username/streamqueue',
      architecture: `
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  Producer   │────▶│    Redis     │◀────│  Consumer   │
│             │     │   Streams    │     │   Workers   │
└─────────────┘     └──────────────┘     └─────────────┘
                           │
                           ▼
                    ┌──────────────┐
                    │  Dead Letter │
                    │    Queue     │
                    └──────────────┘
      `,
      benchmarks: [
        { metric: 'Throughput', value: '50k+ msg/s' },
        { metric: 'Latency (p99)', value: '< 10ms' },
      ],
      curlExample: `# Python usage
from streamqueue import Queue

queue = Queue("tasks", redis_url="redis://localhost")

# Producer
await queue.enqueue("process_video", {"video_id": 123})

# Consumer
async for job in queue.consume():
    await process_video(job.data)
    await job.ack()`,
      featured: false,
      order: 4,
    },
    {
      title: 'LogDrain',
      slug: 'logdrain',
      tagline: 'Centralized logging without the enterprise price tag',
      description: '<p>A lightweight log aggregation system that collects, indexes, and searches logs from distributed services. Built as an alternative to expensive SaaS solutions.</p><p>Uses ClickHouse for storage and full-text search, with a clean web UI for querying.</p>',
      status: 'dev',
      tech: [
        { name: 'Go' },
        { name: 'ClickHouse' },
        { name: 'React' },
      ],
      githubUrl: 'https://github.com/username/logdrain',
      benchmarks: [
        { metric: 'Ingestion Rate', value: '100k+ logs/s' },
        { metric: 'Query Speed', value: '< 100ms' },
        { metric: 'Storage Cost', value: '$0.01/GB/month' },
      ],
      featured: false,
      order: 5,
    },
  ]

  for (const project of projects) {
    try {
      await payload.create({
        collection: 'projects',
        data: project,
      })
      console.log(`✅ Created project: ${project.title}`)
    } catch (e) {
      console.log(`⚠️  Project ${project.title} already exists`)
    }
  }

  // Seed blog posts
  const posts = [
    {
      title: 'Why Celery Beat Is the Wrong Tool for Video Jobs',
      slug: 'why-celery-beat-is-wrong',
      excerpt: 'Celery Beat seems perfect for scheduled tasks until you try to scale video processing. Here\'s why it failed us and what we built instead.',
      content: `
        <h2>The Problem</h2>
        <p>When we started building Linguify, Celery Beat seemed like the obvious choice for scheduling video transcription jobs. It's battle-tested, well-documented, and integrates seamlessly with our existing Celery workers.</p>
        
        <p>But as we scaled to thousands of concurrent jobs, we hit a wall. Celery Beat is designed for periodic tasks, not for managing a dynamic queue of user-submitted jobs with varying priorities and deadlines.</p>

        <h2>What Went Wrong</h2>
        <p>The first issue was task scheduling granularity. Celery Beat checks for tasks to run every few seconds, which is fine for cron-style jobs but terrible for real-time video processing where users expect immediate feedback.</p>

        <p>Second, there's no built-in priority system. All tasks are treated equally, so a 10-hour documentary would block dozens of 2-minute clips.</p>

        <p>Third, and most critically, Celery Beat doesn't handle task dependencies well. Video processing often requires chaining operations: download → extract audio → transcribe → generate subtitles. With Beat, we had to manually manage these chains, leading to brittle code.</p>

        <h2>The Solution</h2>
        <p>We built a custom job scheduler on top of Redis Streams. It gives us:</p>
        <ul>
          <li>Sub-second scheduling granularity</li>
          <li>Priority queues with weighted fair scheduling</li>
          <li>Native support for job dependencies and DAGs</li>
          <li>Better observability with real-time job status</li>
        </ul>

        <p>The migration took two weeks but reduced our average job latency from 45 seconds to under 5 seconds.</p>

        <h2>Lessons Learned</h2>
        <p>Don't cargo-cult technology choices. Celery Beat is great for what it's designed for, but that doesn't mean it's right for every async task. Sometimes the best tool is the one you build yourself.</p>
      `,
      publishedAt: new Date('2024-11-15'),
      readTime: 8,
      tags: [
        { tag: 'python' },
        { tag: 'celery' },
        { tag: 'architecture' },
        { tag: 'scaling' },
      ],
      status: 'published',
    },
    {
      title: 'Building a Million-Redirect URL Shortener Without Dying',
      slug: 'million-redirect-url-shortener',
      excerpt: 'How we scaled Scissor to handle 5 million redirects per day with a tiny server budget and aggressive caching.',
      content: `
        <h2>The Challenge</h2>
        <p>URL shorteners are deceptively simple. Take a long URL, generate a short code, store the mapping, redirect requests. Easy, right?</p>

        <p>Then you hit scale. Suddenly you're serving millions of redirects per day, each one needs to be fast (users hate slow redirects), and you need analytics on every click.</p>

        <h2>Architecture Decisions</h2>
        <p>We made three key decisions that let us scale without breaking the bank:</p>

        <h3>1. Go for the API</h3>
        <p>Go's performance characteristics are perfect for this use case. Low memory footprint, fast startup times, and excellent concurrency support. Our redirect handler is literally 20 lines of code and handles 10k req/s on a single core.</p>

        <h3>2. Aggressive Caching</h3>
        <p>We use a three-tier caching strategy:</p>
        <ul>
          <li>In-memory LRU cache (10k hottest links)</li>
          <li>Redis cache (1M most recent links)</li>
          <li>PostgreSQL (everything else)</li>
        </ul>
        <p>This gives us a 98.5% cache hit rate, meaning most redirects never touch the database.</p>

        <h3>3. Async Analytics</h3>
        <p>Initially, we were writing analytics synchronously on every redirect. This added 50ms to every request. We switched to streaming events to a separate analytics pipeline, dropping redirect latency to under 5ms.</p>

        <h2>The Numbers</h2>
        <p>Today, Scissor handles:</p>
        <ul>
          <li>5M+ redirects per day</li>
          <li>p99 latency under 5ms</li>
          <li>Running on 3 small VMs ($30/month total)</li>
          <li>99.99% uptime</li>
        </ul>

        <h2>What I'd Do Differently</h2>
        <p>If I were starting over, I'd use SQLite instead of PostgreSQL. For our read-heavy workload with infrequent writes, SQLite's simplicity and performance would be perfect. Plus, no separate database server to manage.</p>
      `,
      publishedAt: new Date('2024-10-22'),
      readTime: 12,
      tags: [
        { tag: 'go' },
        { tag: 'redis' },
        { tag: 'scaling' },
        { tag: 'performance' },
      ],
      status: 'published',
    },
    {
      title: 'The Database Index That Saved Us $10k/Month',
      slug: 'database-index-saved-10k',
      excerpt: 'A single missing index was costing us thousands in server costs. Here\'s how we found it and what we learned about PostgreSQL performance.',
      content: `
        <h2>The Symptom</h2>
        <p>Our API was slow. Not catastrophically slow, but slow enough that users noticed. Response times were creeping up from 200ms to 800ms, and our database CPU was pegged at 80%.</p>

        <p>We threw more resources at it—upgraded from 4 cores to 8, then to 16. Each upgrade bought us a few weeks before the problem returned. Our AWS bill was spiraling out of control.</p>

        <h2>The Investigation</h2>
        <p>I finally sat down with pg_stat_statements and found the culprit: a simple query that was running thousands of times per second.</p>

        <pre><code>SELECT * FROM events 
WHERE user_id = $1 
AND created_at > $2 
ORDER BY created_at DESC 
LIMIT 50;</code></pre>

        <p>Looks innocent, right? We had an index on user_id, so what's the problem?</p>

        <h2>The Problem</h2>
        <p>PostgreSQL was using the user_id index to find matching rows, then doing a sequential scan to filter by created_at, then sorting the results. For users with millions of events, this was scanning huge amounts of data.</p>

        <p>The solution was a composite index:</p>

        <pre><code>CREATE INDEX idx_events_user_created 
ON events (user_id, created_at DESC);</code></pre>

        <p>This single index let PostgreSQL do everything in one pass: find the user's events, already sorted by date, and return the first 50.</p>

        <h2>The Results</h2>
        <p>Query time dropped from 800ms to 12ms. Database CPU dropped from 80% to 15%. We downgraded back to a 4-core instance and saved $10k/month.</p>

        <h2>Lessons Learned</h2>
        <ul>
          <li>Always profile before scaling vertically</li>
          <li>Composite indexes are your friend for multi-column queries</li>
          <li>pg_stat_statements should be enabled in production</li>
          <li>EXPLAIN ANALYZE is your best debugging tool</li>
        </ul>

        <p>Sometimes the best optimization is the one you should have done from the start.</p>
      `,
      publishedAt: new Date('2024-09-10'),
      readTime: 10,
      tags: [
        { tag: 'postgresql' },
        { tag: 'performance' },
        { tag: 'optimization' },
        { tag: 'databases' },
      ],
      status: 'published',
    },
    {
      title: 'Why I Stopped Using Docker Compose in Production',
      slug: 'stopped-using-docker-compose',
      excerpt: 'Docker Compose is great for development, but it\'s not a production orchestration tool. Here\'s what we use instead and why.',
      content: `
        <h2>The Honeymoon Phase</h2>
        <p>Docker Compose is magical when you're starting out. One YAML file, one command, and your entire stack is running. It's perfect for development and even works fine for small production deployments.</p>

        <p>We ran our first production services on Compose for over a year. It was simple, it worked, and we could focus on building features instead of learning Kubernetes.</p>

        <h2>When It Breaks Down</h2>
        <p>The problems started when we needed to scale beyond a single server:</p>

        <ul>
          <li>No built-in load balancing across multiple hosts</li>
          <li>Zero-downtime deployments require manual orchestration</li>
          <li>No automatic failover if a container dies</li>
          <li>Health checks are basic and unreliable</li>
          <li>Secrets management is an afterthought</li>
        </ul>

        <p>We tried to work around these limitations with custom scripts, but we were essentially building a worse version of Kubernetes.</p>

        <h2>What We Use Now</h2>
        <p>We didn't jump straight to Kubernetes. Instead, we adopted a middle ground: systemd + Docker.</p>

        <p>Each service runs as a systemd unit that manages a Docker container. This gives us:</p>

        <ul>
          <li>Automatic restarts on failure</li>
          <li>Proper logging with journald</li>
          <li>Resource limits via cgroups</li>
          <li>Simple deployment with Ansible</li>
          <li>No orchestration overhead</li>
        </ul>

        <h2>When to Use What</h2>
        <p>Docker Compose: Development and staging environments</p>
        <p>systemd + Docker: Small production deployments (1-5 servers)</p>
        <p>Kubernetes: When you have a dedicated platform team</p>

        <p>Don't let anyone shame you for not using Kubernetes. Use the simplest tool that solves your problem.</p>
      `,
      publishedAt: new Date('2024-08-05'),
      readTime: 9,
      tags: [
        { tag: 'docker' },
        { tag: 'devops' },
        { tag: 'deployment' },
        { tag: 'infrastructure' },
      ],
      status: 'published',
    },
  ]

  for (const post of posts) {
    try {
      await payload.create({
        collection: 'posts',
        data: post,
      })
      console.log(`✅ Created post: ${post.title}`)
    } catch (e) {
      console.log(`⚠️  Post ${post.title} already exists`)
    }
  }

  console.log('🎉 Seeding complete!')
  process.exit(0)
}

seed()
