export const HARDCODED_PROJECTS = [
    {
        id: "hardcoded-aether",
        title: "AETHER",
        slug: "aether-systems",
        tagline: "High-end infrastructure and architectural blueprint visualization",
        descriptionHTML: "<p>AETHER is a high-end SaaS platform providing architectural blueprints and infrastructure management visualization. It features a sophisticated UI with fluid animations and production-grade performance.</p>",
        status: "live",
        tech: [{ name: "Next.js" }, { name: "TypeScript" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }],
        githubUrl: "https://github.com/seung-waedet/saas-landing-page",
        liveUrl: "https://saas-landing-page-taupe-sigma.vercel.app/",
        architecture: `
┌───────────┐      ┌─────────────┐      ┌──────────────┐
│  AETHER   │─────▶│ Next.js App │─────▶│ High-End UI  │
│  Systems  │      │   Router    │      │ Componentry  │
└───────────┘      └─────────────┘      └──────────────┘`,
        benchmarks: [
            { metric: "Navigation", value: "18ms" },
            { metric: "Visual Polish", value: "Production-Grade" },
            { metric: "Mobile Support", value: "Audited" },
        ],
        order: 100,
    },
    {
        id: "hardcoded-volt",
        title: "VOLT.dev",
        slug: "volt-dev",
        tagline: "Industrial-grade developer utilities and system monitoring",
        descriptionHTML: "<p>VOLT.dev is a brutalist, industrial dashboard for technical monitoring. Features include real-time pulse heartbeat monitoring, security threat logging, and system health status tracking.</p>",
        status: "live",
        tech: [{ name: "Next.js" }, { name: "TypeScript" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }, { name: "Industrial Design" }],
        githubUrl: "https://github.com/seung-waedet/volt-dev",
        liveUrl: "https://volt-dev.vercel.app/",
        architecture: `
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  Industrial │────▶│  VOLT KERNEL │────▶│  System Log │
│  Interface  │     │   (App)      │     │  (Active)   │
└─────────────┘     └──────────────┘     └─────────────┘`,
        benchmarks: [
            { metric: "Refresh Rate", value: "60fps" },
            { metric: "Latency", value: "Sub-ms" },
            { metric: "Grid Load", value: "Optimized" },
        ],
        order: 99,
    },
    {
        id: "hardcoded-fluid",
        title: "FLUID",
        slug: "fluid",
        tagline: "Organic digital movement for experimental creative studios",
        descriptionHTML: "<p>FLUID is an experimental agency portfolio featuring organic, physics-based motion. It demonstrates innovative navigation and a unique glassmorphic mobile menu system.</p>",
        status: "live",
        tech: [{ name: "Next.js" }, { name: "TypeScript" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }, { name: "Fluid Motion" }],
        githubUrl: "https://github.com/seung-waedet/fluid-agency",
        liveUrl: "https://fluid-agency.vercel.app/",
        architecture: `
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  Organic    │────▶│  FLUID FLOW  │────▶│  Zen State  │
│  Interface  │     │   (Studio)   │     │  (Dynamic)  │
└─────────────┘     └──────────────┘     └─────────────┘`,
        benchmarks: [
            { metric: "Motion Latency", value: "Low" },
            { metric: "Visual Zen", value: "Verified" },
            { metric: "Responsive", value: "Full Audit" },
        ],
        order: 98,
    },
];
