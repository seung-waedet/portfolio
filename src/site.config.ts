/**
 * Site-wide identity. Page content lives in src/content/ (see content.config.ts);
 * this file holds only what is shared by every page.
 */
export const SITE = {
  name: "Seung-wa Akpan",
  url: "https://seungwaakpan.com",
  tagline: "software developer · python & node.js · ai/llm integrations",
  description:
    "Software developer building web applications, APIs, RAG pipelines and LLM integrations in Python and Node.js.",
  socials: [
    { label: "github", href: "https://github.com/seung-waedet" },
    { label: "linkedin", href: "https://linkedin.com/in/seungwaakpan" },
    { label: "email", href: "mailto:seungwaakpan@gmail.com" },
  ],
  nav: [
    { label: "home", href: "/" },
    { label: "projects", href: "/projects" },
    { label: "about", href: "/about" },
  ],
  /** Rendered with set:html so <em> can mark the accent phrases. */
  intro: {
    home: `I design and ship scalable web applications and APIs across Python and Node.js — including RAG pipelines, <em>LLM integrations</em>, and real-time systems. Currently building backend services at <em>KSolutions</em> and AI platforms at <em>Kevin Winter Foundation</em>.`,
    projects: `Interfaces and services I've built. Code lives on GitHub; write-ups are added as I get to them.`,
    about: `Software developer with 1+ years of experience designing and shipping scalable web applications and APIs across Python and Node.js — including <em>RAG pipelines, LLM integrations</em>, and real-time communication systems. Founded the first Google Developer Student Club chapter at Arthur Jarvis University.`,
  },
} as const;
