import { sanity } from "./sanity";

export type AboutDoc = {
  name: string;
  initial: string;
  tagline: string;
  intro: any[]; // portable text
  email?: string;
  socials?: { label: string; href: string }[];
  longBio?: any[];
};

export type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  icon?: string;
  tagline?: string;
  year?: string;
  tech?: string[];
  githubUrl?: string;
  liveUrl?: string;
  description?: any[];
  featured?: boolean;
  order?: number;
};

export type Book = {
  _id: string;
  title: string;
  author: string;
  status: "reading" | "finished" | "queued" | "abandoned";
  icon?: string;
  currentPage?: number;
  totalPages?: number;
  note?: string;
  startedAt?: string;
  finishedAt?: string;
  rating?: number;
};

export type Note = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  body?: any[];
};

export type Like = { _id: string; label: string; order?: number };

export type Work = {
  _id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  url?: string;
  description?: any[];
};

/** Treat missing Sanity config as "no data" rather than crashing the build. */
const guarded = async <T>(fn: () => Promise<T>, fallback: T): Promise<T> => {
  if (!import.meta.env.PUBLIC_SANITY_PROJECT_ID) return fallback;
  try {
    return await fn();
  } catch (err) {
    console.warn("[sanity] query failed:", err);
    return fallback;
  }
};

export const getAbout = () =>
  guarded(() => sanity.fetch<AboutDoc | null>(`*[_type == "about"][0]`), null);

export const getFeaturedProjects = () =>
  guarded(
    () =>
      sanity.fetch<Project[]>(
        `*[_type == "project" && featured == true] | order(order asc)`
      ),
    []
  );

export const getAllProjects = () =>
  guarded(
    () => sanity.fetch<Project[]>(`*[_type == "project"] | order(order asc)`),
    []
  );

export const getProjectBySlug = (slug: string) =>
  guarded(
    () =>
      sanity.fetch<Project | null>(
        `*[_type == "project" && slug.current == $slug][0]`,
        { slug }
      ),
    null
  );

export const getCurrentlyReading = () =>
  guarded(
    () =>
      sanity.fetch<Book[]>(
        `*[_type == "book" && status == "reading"] | order(_updatedAt desc)`
      ),
    []
  );

export const getFinishedBooks = () =>
  guarded(
    () =>
      sanity.fetch<Book[]>(
        `*[_type == "book" && status == "finished"] | order(finishedAt desc)`
      ),
    []
  );

export const getRecentNotes = (limit = 6) =>
  guarded(
    () =>
      sanity.fetch<Note[]>(
        `*[_type == "note"] | order(publishedAt desc) [0...$limit]`,
        { limit }
      ),
    []
  );

export const getLikes = () =>
  guarded(
    () => sanity.fetch<Like[]>(`*[_type == "like"] | order(order asc)`),
    []
  );

export const getWork = () =>
  guarded(
    () => sanity.fetch<Work[]>(`*[_type == "work"] | order(startDate desc)`),
    []
  );

