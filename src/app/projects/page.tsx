import Link from "next/link";
import ExpandedProject from "@/components/ExpandedProject";
import { getPayload } from "payload";
import config from "@/payload/payload.config";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { HARDCODED_PROJECTS } from "@/lib/projects";

export const dynamic = "force-dynamic";

export default async function Projects() {
  const payload = await getPayload({ config });
  const projects = await payload.find({
    collection: "projects",
    sort: "-order",
    where: {
      status: {
        not_equals: "archived",
      },
    },
  });

  // Convert lexical rich text fields to HTML for dynamic projects
  const cmsProjects = await Promise.all(
    projects.docs.map(async (project) => {
      const descriptionHTML = project.description
        ? await convertLexicalToHTML({ data: project.description })
        : "";

      const challengesHTML = project.challenges
        ? await convertLexicalToHTML({ data: project.challenges })
        : "";

      return {
        ...project,
        descriptionHTML,
        challengesHTML,
      };
    }),
  );

  // Merge hardcoded projects with CMS projects
  const allProjects = [...HARDCODED_PROJECTS, ...cmsProjects].sort((a, b) => (b.order || 0) - (a.order || 0));

  return (
    <main className="min-h-screen pt-48 px-6 max-w-[900px] mx-auto space-y-32 reveal">
      <header className="space-y-8 pb-12 border-b border-black/5">
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold">
          <Link href="/" className="hover:opacity-40 transition-opacity">Root</Link>
          <span className="opacity-20">/</span>
          <span>Projects</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase">Selected Works.</h1>
        <p className="text-lg font-medium opacity-60">
          A collection of engineering artifacts, from SaaS engines to industrial dashboards.
        </p>
      </header>

      {/* List of projects */}
      <div className="space-y-64 pb-64">
        {allProjects.map((project: any) => (
          <ExpandedProject key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
