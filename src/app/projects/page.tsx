import Link from "next/link";
import GlitchText from "@/components/GlitchText";
import ExpandedProject from "@/components/ExpandedProject";
import { getPayload } from "payload";
import config from "@/payload/payload.config";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";

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

  // Convert lexical rich text fields to HTML for each project
  const projectsWithHTML = await Promise.all(
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

  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <Link
            href="/"
            className="text-lime hover:text-magenta transition-colors font-mono text-sm mb-8 inline-block"
          >
            ← cd ..
          </Link>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            <GlitchText text="PROJECTS" />
          </h1>
          <p className="text-xl text-lime-dim font-mono">
            $ ls -la ./systems-that-actually-work/
          </p>
          <div className="h-1 w-32 bg-magenta mt-6" />
        </div>

        {/* List of all projects with expanded details */}
        <div className="space-y-12">
          {projectsWithHTML.map((project: any, i: number) => (
            <ExpandedProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
