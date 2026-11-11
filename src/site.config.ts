/**
 * Site-wide identity. Page content lives in src/content/ (see content.config.ts);
 * this file holds only what is shared by every page.
 *
 * Every factual claim here must trace to a line on the CV (~/Desktop/cv/SeungwaAkpan_CV.html).
 * `pnpm build` runs scripts/check-copy.mjs over the output to enforce the style and qualifier rules.
 */
export const SITE = {
  name: "Seung-wa Akpan",
  role: "Applied AI & Backend Engineer",
  url: "https://seungwaakpan.com",
  description:
    "Seung-wa Akpan is an applied AI and backend engineer who builds AI products and the backend that runs them, in Python and TypeScript. Open to remote contract and full-time work.",
  socials: [
    // Rendered from the CV with the phone number stripped. Regenerate with `pnpm resume`.
    { label: "cv", href: "/resume.pdf" },
    { label: "github", href: "https://github.com/seung-waedet" },
    { label: "linkedin", href: "https://linkedin.com/in/seungwaakpan" },
    { label: "email", href: "mailto:seungwaakpan@gmail.com" },
  ],
  nav: [
    { label: "home", href: "/" },
    { label: "projects", href: "/projects" },
  ],
  /** Rendered with set:html so <em> can mark the accent phrases. */
  intro: {
    home: `I build AI products and the backend that runs them. I've built and maintained the AI pipeline for a production <em>transcription and translation platform</em>, and worked on its GPU model serving, job pipelines, billing, and the evals that check the output. I work in Python and TypeScript, and I'm open to <em>remote contract and full-time work</em>.`,
    projects: `Things I've built. Public code is linked where it exists.`,
  },
} as const;

/** "Page · Seung-wa Akpan". Home uses the role instead of a page name. */
export const pageTitle = (page: string = SITE.role) => `${page} · ${SITE.name}`;
