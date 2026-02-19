import { getPayload } from "payload";
import config from "@/payload/payload.config";
import { HARDCODED_PROJECTS } from "@/lib/projects";
import HomeClient from "@/app/HomeClient";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const payload = await getPayload({ config });
  const projectsFromCMS = await payload.find({
    collection: "projects",
    sort: "-order",
    where: {
      status: {
        not_equals: "archived",
      },
    },
  });

  const cmsProjects = projectsFromCMS.docs.map(p => ({
    name: p.title,
    description: p.tagline,
    link: `/projects/${p.slug}`,
    video: (p as any).previewVideo?.url || "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
    id: p.id
  }));

  const hardcodedProjects = HARDCODED_PROJECTS.map(p => ({
    name: p.title,
    description: p.tagline,
    link: `/projects/${p.slug}`,
    video: "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
    id: p.id
  }));

  const allProjects = [...cmsProjects, ...hardcodedProjects];

  return (
    <main className="space-y-12">
      <header>
        <h1 className="text-xl font-medium sm:text-2xl">Work.</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          A collection of distributed systems, backend engines, and architectural experiments.
        </p>
      </header>

      {/* Reusing HomeClient's section logic for consistency */}
      <HomeClient
        projects={allProjects}
        blogPosts={[]}
        workExperience={[]}
        socialLinks={[]}
        email=""
        isListingPage={true}
      />
    </main>
  );
}
