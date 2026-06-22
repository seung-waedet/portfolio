FROM node:22-alpine AS builder

WORKDIR /app

# Build-time env vars (passed by Dokploy)
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

COPY package.json ./
# Intentionally NOT copying package-lock.json. Lockfiles generated on
# macOS routinely miss the Linux-musl optional binaries that sharp and
# rollup require on Alpine. Letting npm resolve fresh on the build
# platform sidesteps npm/cli#4828 entirely.
RUN npm install --no-audit --no-fund

COPY . .
RUN npm run build


FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1
