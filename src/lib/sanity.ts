import { createClient } from "@sanity/client";

// @sanity/client throws synchronously at module load when projectId is
// undefined. We provide a placeholder so the build always succeeds — the
// guarded() wrapper in queries.ts then no-ops the actual fetches when
// the real env var isn't set.
export const sanity = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2025-01-01",
  useCdn: true, // build-time fetch — CDN is fine and free
  perspective: "published",
});
