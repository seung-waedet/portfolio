import Link from "next/link";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@/payload/payload.config";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { HARDCODED_PROJECTS } from "@/lib/projects";

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
  let challengesHTML = "";

  if (hardcodedProject) {
    project = hardcodedProject;
    descriptionHTML = project.descriptionHTML || "";
    challengesHTML = project.challengesHTML || "";
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

    challengesHTML = project.challenges
      ? await convertLexicalToHTML({ data: project.challenges })
      : "";
  }

  return (
    <main className="min-h-screen bg-onyx p-8 md:p-24 pt-48">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-32 space-y-12 page-reveal">
          <div className="flex items-center gap-4 text-slate-rich">
            <Link href="/projects" className="font-accent text-[10px] uppercase tracking-[0.4em] font-bold hover:text-vermilion transition-colors">
              Archive
            </Link>
            <span className="text-vermilion">/</span>
            <span className="font-accent text-[10px] uppercase tracking-[0.4em] font-bold text-bone">
              {project.title}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div className="space-y-6">
              <h1 className="text-[10vw] md:text-[6vw] font-display font-bold leading-none tracking-[-0.08em] uppercase text-bone">
                {project.title}
              </h1>
              <p className="text-2xl md:text-3xl text-vermilion font-accent font-medium tracking-tight">
                {project.tagline}
              </p>
            </div>
            <div className="flex md:justify-end gap-6 h-fit pt-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-vermilion text-onyx font-bold hover:bg-bone transition-all uppercase tracking-widest text-[10px]"
                >
                  Live Production
                </a>
              )}
            </div>
          </div>
          <div className="h-px w-full bg-white/5" />
        </header>

        <section className="grid md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-8 space-y-24">
            <div
              className="text-2xl md:text-3xl font-accent font-light leading-relaxed text-bone/70 italic border-l border-vermilion/20 pl-8"
              dangerouslySetInnerHTML={{ __html: descriptionHTML }}
            />

            {project.architecture && (
              <div className="space-y-8">
                <h2 className="text-[10px] font-accent font-bold text-vermilion uppercase tracking-[0.5em]">System_Logic</h2>
                <div className="bg-industrial/40 border border-white/5 p-12 overflow-x-auto font-mono text-xs text-slate-rich">
                  <pre>{project.architecture}</pre>
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-4 space-y-12">
            <div className="space-y-6">
              <h2 className="text-[10px] font-accent font-bold text-slate-rich uppercase tracking-[0.5em]">Stack_Registry</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((t: any, i: number) => (
                  <span key={i} className="px-4 py-2 border border-white/5 bg-industrial/20 text-[10px] font-accent font-bold uppercase tracking-widest text-bone/60">
                    {t.name}
                  </span>
                ))}
              </div>
            </div>

            {project.benchmarks && project.benchmarks.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-[10px] font-accent font-bold text-slate-rich uppercase tracking-[0.5em]">Load_Performance</h2>
                <div className="space-y-8">
                  {project.benchmarks.map((bench: any, i: number) => (
                    <div key={i} className="group/bench">
                      <p className="text-[9px] font-accent font-bold text-slate-rich uppercase tracking-[0.4em] mb-1 group-hover/bench:text-vermilion transition-colors">
                        {bench.metric}
                      </p>
                      <p className="text-4xl font-display font-bold text-bone">{bench.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
