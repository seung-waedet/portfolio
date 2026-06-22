FROM node:22-alpine AS builder

# Enable pnpm via corepack (pinned in package.json's packageManager field)
RUN corepack enable

WORKDIR /app

# Build-time env vars (passed by Dokploy as build args)
ARG PUBLIC_SANITY_PROJECT_ID
ARG PUBLIC_SANITY_DATASET=production
ARG PUBLIC_HASHNODE_HOST
ARG STRAVA_CLIENT_ID
ARG STRAVA_CLIENT_SECRET
ARG STRAVA_REFRESH_TOKEN
ARG STRAVA_ATHLETE_ID

ENV PUBLIC_SANITY_PROJECT_ID=$PUBLIC_SANITY_PROJECT_ID \
    PUBLIC_SANITY_DATASET=$PUBLIC_SANITY_DATASET \
    PUBLIC_HASHNODE_HOST=$PUBLIC_HASHNODE_HOST \
    STRAVA_CLIENT_ID=$STRAVA_CLIENT_ID \
    STRAVA_CLIENT_SECRET=$STRAVA_CLIENT_SECRET \
    STRAVA_REFRESH_TOKEN=$STRAVA_REFRESH_TOKEN \
    STRAVA_ATHLETE_ID=$STRAVA_ATHLETE_ID

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build


FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1
