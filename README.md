# seungwaakpan.com

Personal site. Static [Astro](https://astro.build) build served by nginx, deployed on Dokploy.

## Develop

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm check      # type-check .astro/.ts files and content schemas
pnpm build      # check + static build to dist/
pnpm preview    # serve dist/ locally
```

No environment variables are needed.

## Editing content

All content is in the repo and validated at build time. A typo in a field name or a malformed date fails `pnpm build` with the file and field named.

| What | Where |
| --- | --- |
| Name, tagline, page intros, socials, nav | `src/site.config.ts` |
| Projects (one file each; body = write-up) | `src/content/projects/<slug>.md` |
| Work history | `src/content/work.yaml` |
| Timeline | `src/content/timeline.yaml` |
| Education | `src/content/education.yaml` |
| Certifications | `src/content/certifications.yaml` |
| Skills | `src/content/skills.yaml` |
| Portrait (used for avatar + social card) | `src/assets/me.jpeg` |

Schemas live in `src/content.config.ts`.

**Add a project:** copy any file in `src/content/projects/`, rename it (the filename is the URL slug), edit the frontmatter. `featured: true` puts it on the home page; `order` sorts it.

**Dates** are `YYYY` or `YYYY-MM`. Leave `end` off for a current role; ranges render as `Feb 2025 — now`, `Oct — Dec 2025`, `2021 — 2024`.

## Deploy

`Dockerfile` builds the site and copies `dist/` into `nginx:alpine`. Config is in `nginx/`:

- `default.conf`: routing, 404 page, cache policy (hashed `/_astro/*` cached forever, HTML revalidated).
- `security-headers.conf`: included in every `location` that sets headers, because nginx drops inherited `add_header` directives otherwise.

```sh
docker build -t portfolio .
docker run --rm -p 8080:80 portfolio
```
