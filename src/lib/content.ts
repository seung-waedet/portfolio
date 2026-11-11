import { getCollection } from "astro:content";

/** Row shape consumed by <RowList>. */
export type Row = { title: string; sub?: string; end?: string; href?: string };

export async function getProjects() {
  return (await getCollection("projects")).sort((a, b) => a.data.order - b.data.order);
}

export const projectRow = ({ id, data }: Awaited<ReturnType<typeof getProjects>>[number]): Row => ({
  title: data.title,
  sub: data.summary,
  end: String(data.year),
  href: `/projects/${id}`,
});
