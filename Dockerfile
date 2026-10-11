FROM node:22-alpine AS builder

# pnpm version is pinned by package.json's packageManager field.
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
# Full install: `pnpm build` runs `astro check`, which needs the dev dependencies.
# Nothing from node_modules ships; the runtime image is nginx + static files.
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build


FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/security-headers.conf /etc/nginx/snippets/security-headers.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1
