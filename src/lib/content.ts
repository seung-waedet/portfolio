import { getCollection } from "astro:content";
import { formatRange } from "./dates";

/** Row shape consumed by <RowList>. */
export type Row = { icon?: string; title: string; sub?: string; end?: string; href?: string };

export async function getProjects({ featuredOnly = false } = {}) {
  const all = await getCollection("projects", ({ data }) => !featuredOnly || data.featured);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export const projectRow = ({ id, data }: Awaited<ReturnType<typeof getProjects>>[number]): Row => ({
  icon: data.icon,
  title: data.title,
  sub: data.summary,
  end: String(data.year),
  href: `/projects/${id}`,
});

/** "Still there" sorts after every real YYYY-MM end date. */
const ONGOING = "9999";

/**
 * Work history: current roles first, then by most recent end, then by most recent start.
 * `stackLimit` trims the tech list for compact views.
 */
export async function getWorkRows({ limit, stackLimit }: { limit?: number; stackLimit?: number } = {}) {
  const work = (await getCollection("work")).sort(
    (a, b) =>
      (b.data.end ?? ONGOING).localeCompare(a.data.end ?? ONGOING) ||
      b.data.start.localeCompare(a.data.start),
  );
  return work.slice(0, limit).map(({ data }): Row => ({
    icon: "§",
    title: data.company,
    sub: [data.role, ...data.stack.slice(0, stackLimit)].join(" · "),
    end: formatRange(data.start, data.end),
    href: data.url,
  }));
}

export async function getEducation() {
  const items = (await getCollection("education")).sort((a, b) => a.data.start.localeCompare(b.data.start));
  return items.map(({ id, data }) => ({ id, ...data, when: formatRange(data.start, data.end) }));
}

export async function getTimeline() {
  // Stable sort keeps file order within the same year.
  return (await getCollection("timeline")).sort((a, b) => b.data.year - a.data.year).map((e) => e.data);
}

export async function getCertifications() {
  return (await getCollection("certifications")).sort((a, b) => a.data.year - b.data.year).map((c) => c.data);
}

export async function getSkills() {
  return (await getCollection("skills")).flatMap((s) => s.data.items);
}
