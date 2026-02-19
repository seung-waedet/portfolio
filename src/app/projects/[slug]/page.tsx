import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@/payload/payload.config";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { HARDCODED_PROJECTS } from "@/lib/projects";
import LayoutBlogPost from "@/app/blog/layout";

export const dynamic = "force-dynamic";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. Check if it's a hardcoded project first
  const hardcodedProject = HARDCODED_PROJECTS.find(p => p.slug === slug);

  let project: any;
  let descriptionHTML = "";

  if (hardcodedProject) {
    project = hardcodedProject;
    descriptionHTML = project.descriptionHTML || "";
  } else {
    // 2. Otherwise, fetch from Payload
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "projects",
      where: {
        slug: {
          equals: slug,
        },
      },
    });

    if (!result.docs.length) {
      notFound();
    }

    project = result.docs[0];

    descriptionHTML = project.description
      ? await convertLexicalToHTML({ data: project.description })
      : "";
  }

  return (
    <LayoutBlogPost>
      <header className="mb-8">
        <h1 className="text-xl font-medium sm:text-2xl">{project.title}</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {project.tagline}
        </p>
        <div className="mt-6 flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline underline-offset-4 hover:text-zinc-500 transition-colors"
            >
              Live Project
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline underline-offset-4 hover:text-zinc-500 transition-colors"
            >
              Source Code
            </a>
          )}
        </div>
      </header>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-lg font-medium">Overview</h2>
        <div dangerouslySetInnerHTML={{ __html: descriptionHTML }} />

        <h2 className="text-lg font-medium mt-12 pb-2 border-b border-zinc-100 dark:border-zinc-800">Technical Foundation</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 not-prose mt-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech?.map((t: any, i: number) => (
                <span key={i} className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold uppercase tracking-widest rounded-md">
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {project.benchmarks && project.benchmarks.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">Performance</h3>
              <div className="space-y-4">
                {project.benchmarks.map((bench: any, i: number) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-zinc-50 dark:border-zinc-900 pb-1">
                    <span className="text-xs text-zinc-500">{bench.metric}</span>
                    <span className="text-sm font-medium">{bench.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {project.architecture && (
          <>
            <h2 className="text-lg font-medium mt-12">System Architecture</h2>
            <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 p-6 rounded-xl overflow-x-auto font-mono text-[10px] leading-relaxed">
              <pre>{project.architecture}</pre>
            </div>
          </>
        )}
      </div>
    </LayoutBlogPost>
  );
}
