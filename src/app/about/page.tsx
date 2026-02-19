import LayoutBlogPost from "../blog/layout";

export default function About() {
  const timeline = [
    {
      year: "2021",
      event: "Started B.Sc Computer Science at Arthur Jarvis University",
      tech: "Education",
    },
    {
      year: "2022",
      event: "Founded Google Developer Student Club Chapter",
      tech: "Leadership",
    },
    {
      year: "2022-2023",
      event: "Web Developer Intern at Digital Box",
      tech: "HTML, CSS, JavaScript",
    },
    {
      year: "2023-2024",
      event: "Backend Developer Intern at Resourceful Dev",
      tech: "Node.js, Express, Redis",
    },
    {
      year: "2023",
      event: "Completed ALX AI Career Essentials Program",
      tech: "AI, Machine Learning",
    },
    {
      year: "2024",
      event: "Completed Diploma in Backend Engineering at AltSchool Africa",
      tech: "Backend Development",
    },
    {
      year: "2024-2025",
      event: "Python Developer at TIIDELAB Pre-fellowship",
      tech: "Python, AI APIs",
    },
    {
      year: "2025-Present",
      event: "Python Developer at Kevin Winter Foundation",
      tech: "AI Platforms, Flask, Celery",
    },
    {
      year: "2025-Present",
      event: "Backend Developer at KSolutions",
      tech: "Node.js, SQL, Docker",
    },
  ];

  return (
    <LayoutBlogPost>
      <header className="mb-8">
        <h1 className="text-xl font-medium sm:text-2xl">About.</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          I'm a backend engineer with 1+ years of experience designing and building scalable systems.
        </p>
      </header>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p>
          Currently developing AI platforms and distributed systems at Kevin Winter Foundation and KSolutions.
          My expertise lies in architecting systems that handle real-world loads, from AI-powered video processing
          to robust RESTful APIs.
        </p>
        <p>
          I specialize in Python (Flask, FastAPI), Node.js (Express, Nest.js), and databases like PostgreSQL and MongoDB.
          I prioritize architectural integrity and visual clarity in everything I build.
        </p>

        <h2 className="text-lg font-medium mt-12 pb-2 border-b border-zinc-100 dark:border-zinc-800">Journey</h2>
        <div className="not-prose mt-8 space-y-6">
          {timeline.map((item, i) => (
            <div key={i} className="flex justify-between items-baseline gap-8 border-b border-zinc-50 dark:border-zinc-900 pb-2">
              <div className="space-y-1">
                <p className="text-sm font-medium">{item.event}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{item.tech}</p>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 shrink-0">{item.year}</span>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-medium mt-12 mb-8">Stack</h2>
        <div className="not-prose flex flex-wrap gap-2">
          {[
            "Python", "JavaScript", "TypeScript", "Node.js", "PostgreSQL",
            "MongoDB", "MySQL", "Redis", "Docker", "Git", "Linux", "AWS",
            "Express.js", "Flask", "FastAPI", "Nest.js",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold uppercase tracking-widest rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </LayoutBlogPost>
  );
}
