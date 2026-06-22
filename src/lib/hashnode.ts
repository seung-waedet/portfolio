/**
 * Build-time Hashnode fetch.
 *
 * Required env:
 *   PUBLIC_HASHNODE_HOST   e.g. "seungwaakpan.hashnode.dev"
 *
 * No API key required for public posts. Returns [] if env missing.
 */

export type HashnodePost = {
  id: string;
  title: string;
  slug: string;
  brief?: string;
  publishedAt: string;
  readTimeInMinutes?: number;
  url: string;
};

export async function fetchHashnodePosts(limit = 6): Promise<HashnodePost[]> {
  const host = import.meta.env.PUBLIC_HASHNODE_HOST;
  if (!host) return [];

  const query = `
    query Posts($host: String!, $first: Int!) {
      publication(host: $host) {
        posts(first: $first) {
          edges {
            node {
              id
              title
              slug
              brief
              publishedAt
              readTimeInMinutes
              url
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { host, first: limit } }),
  });

  if (!res.ok) {
    console.warn("[hashnode] request failed:", res.status);
    return [];
  }

  const json: { data?: { publication?: { posts?: { edges?: { node: HashnodePost }[] } } } } =
    await res.json();
  return json.data?.publication?.posts?.edges?.map((e) => e.node) ?? [];
}
