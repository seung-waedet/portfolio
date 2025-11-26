export const HASHNODE_GQL_ENDPOINT = 'https://gql.hashnode.com'
// TODO: Replace with your actual Hashnode publication host (e.g., seungwa.hashnode.dev)
export const HASHNODE_HOST = 'hng-stage-0-task.hashnode.dev'

export async function gql(query: string, variables: any = {}) {
  const res = await fetch(HASHNODE_GQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 3600 }, // Cache for 1 hour
  })

  if (!res.ok) {
    throw new Error('Failed to fetch from Hashnode API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error('Hashnode Errors:', json.errors)
    throw new Error('Hashnode API returned errors')
  }

  return json.data
}

export async function getAllPosts() {
  const query = `
    query GetPosts($host: String!) {
      publication(host: $host) {
        posts(first: 10) {
          edges {
            node {
              id
              title
              brief
              slug
              publishedAt
              readTimeInMinutes
              coverImage {
                url
              }
              tags {
                name
                slug
              }
            }
          }
        }
      }
    }
  `

  const data = await gql(query, { host: HASHNODE_HOST })
  return data.publication?.posts?.edges?.map((edge: any) => edge.node) || []
}

export async function getPostBySlug(slug: string) {
  const query = `
    query GetPost($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          id
          title
          subtitle
          brief
          slug
          publishedAt
          readTimeInMinutes
          content {
            markdown
          }
          coverImage {
            url
          }
          tags {
            name
            slug
          }
        }
      }
    }
  `

  const data = await gql(query, { host: HASHNODE_HOST, slug })
  return data.publication?.post
}
