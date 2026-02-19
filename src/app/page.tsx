import { getPayload } from "payload";
import config from "@/payload/payload.config";
import { getAllPosts } from "@/lib/hashnode";
import { HARDCODED_PROJECTS } from "@/lib/projects";
import HomeClient from "./HomeClient";

export const dynamic = "force-dynamic";

export default async function Home() {
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

  const allProjects = [...cmsProjects, ...hardcodedProjects].slice(0, 4);

  const hashnodePosts = await getAllPosts();
  const blogPosts = hashnodePosts.map((post: any) => ({
    title: post.title,
    description: post.brief,
    link: `/blog/${post.slug}`,
    uid: post.id
  }));

  const workExperience = [
    {
      company: 'KSolutions',
      title: 'Backend Developer',
      start: '2025',
      end: 'Present',
      link: 'https://ksolutions.com',
      id: 'work1',
    },
    {
      company: 'Kevin Winter Foundation',
      title: 'Python Developer',
      start: '2025',
      end: 'Present',
      link: 'https://kevinwinter.foundation',
      id: 'work2',
    },
    {
      company: 'Resourceful Dev',
      title: 'Backend Intern',
      start: '2023',
      end: '2024',
      link: '#',
      id: 'work3',
    },
  ];

  const socialLinks = [
    { label: 'Github', link: 'https://github.com/seung-waedet' },
    { label: 'LinkedIn', link: 'https://linkedin.com/in/seungwaakpan' },
  ];

  const email = 'seungwaakpan@gmail.com';

  return (
    <HomeClient
      projects={allProjects}
      blogPosts={blogPosts}
      workExperience={workExperience}
      socialLinks={socialLinks}
      email={email}
    />
  );
}
