# Local Development Docker Workflow

## Purpose

Define the standard local Docker workflow for running the SMA web app in a container.

## Principles

- Docker-first for deployment rehearsal.
- Reproducible production build path.
- Minimal host dependencies.
- Simple startup process.
- No implicit AI, auth, or database services.

## Initial Services

- `sma-web`

## Future Services

- `sma-worker`
- `sma-redis`
- `sma-minio`

## Local Development Rules

- avoid machine-specific assumptions
- use environment files
- document required ports
- avoid bind mounts in production-like Compose runs
- keep compose readable
- keep the container build path aligned with `npm run build` and `npm run start`

## Current Compose Profile

`docker-compose.yml` is production-like and app-only:

- Builds the Next.js app inside Docker.
- Runs `npm run start` with `NODE_ENV=production`.
- Exposes container port `3000` on host port `${SMA_WEB_PORT:-3000}`.
- Loads `.env` if present.
- Does not start database, auth, AI, queue, object storage, or worker services.

## Local Commands

From the repository root:

```powershell
Copy-Item .env.example .env
docker compose config
docker compose up --build -d
docker compose ps
docker compose logs -f sma-web
```

Open `http://localhost:3000`.

Stop the app:

```powershell
docker compose down
```

## Health Checks

The app container has a Compose health check that performs an HTTP request to `http://127.0.0.1:3000` from inside the container.

Host-side checks:

```powershell
docker compose ps
Invoke-WebRequest http://localhost:3000 -UseBasicParsing
```

The service should report `healthy` after startup, and the host request should return a successful HTML response.

## Production Build Verification

The Docker image must continue to pass the same production build path used locally:

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
docker compose config
docker compose build --no-cache
docker compose up -d
```

If Docker is unavailable on the host, run the npm validation commands and repeat the Docker validation on the target machine.

## Governance Rule

Do not add infrastructure services unless they solve a real MVP problem.
