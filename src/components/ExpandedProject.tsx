"use client";

interface ExpandedProjectProps {
  project: any;
}

export default function ExpandedProject({ project }: ExpandedProjectProps) {
  return (
    <div className="space-y-16 reveal">
      {/* Project Meta */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="space-y-6 max-w-xl">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">
            {project.status === 'live' && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
            Artifact_{project.slug}
          </div>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight uppercase leading-[0.9]">
            {project.title}
          </h2>
          <p className="text-lg font-medium opacity-60">
            {project.tagline}
          </p>
        </div>

        <div className="flex items-center gap-8 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="text-[10px] uppercase tracking-[0.4em] font-bold border-b-2 border-accent pb-1 hover:opacity-40 transition-opacity"
            >
              Run_Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              className="text-[10px] uppercase tracking-[0.4em] font-bold border-b-2 border-black pb-1 hover:opacity-40 transition-opacity"
            >
              Source_Bin
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-16 border-t border-black/5">
        <div className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">
          Intelligence
        </div>
        <div className="md:col-span-3 space-y-12">
          <div
            className="text-lg font-medium leading-relaxed opacity-80 max-w-2xl"
            dangerouslySetInnerHTML={{ __html: project.descriptionHTML }}
          />

          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
            {project.tech?.map((t: any, i: number) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[8px] uppercase tracking-widest font-bold opacity-20">Technology</span>
                <span className="text-xs font-bold uppercase tracking-widest">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
