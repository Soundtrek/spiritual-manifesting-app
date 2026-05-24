# NUC Deployment Guide

## Purpose

Deploy the SMA local MVP to a local Intel NUC with Docker Compose for real-life alpha testing.

## Scope

This deployment runs the existing Next.js app only.

It does not add:

- AI calls
- authentication
- database persistence
- Supabase
- background workers
- payment services
- notification services

User data remains browser-local through the existing local storage behavior.

## NUC Prerequisites

- Git installed.
- Docker Engine and Docker Compose plugin installed.
- Network access from tester devices to the NUC.
- Port `3000` available, or another port selected through `SMA_WEB_PORT`.

Check Docker:

```bash
docker --version
docker compose version
```

## First Deployment

Clone the repository on the NUC:

```bash
git clone <repo-url> spiritual-manifesting-app
cd spiritual-manifesting-app
```

Create the environment file:

```bash
cp .env.example .env
```

Optional: edit `.env` if host port `3000` is already in use:

```bash
SMA_WEB_PORT=3001
```

Validate and start:

```bash
docker compose config
docker compose up --build -d
docker compose ps
```

Open from the NUC:

```text
http://localhost:3000
```

Open from another device on the same network:

```text
http://<nuc-lan-ip>:3000
```

If `SMA_WEB_PORT` was changed, use that port instead.

## Updating The NUC

From the repository directory on the NUC:

```bash
git pull origin main
docker compose up --build -d
docker compose ps
```

## Health And Smoke Checks

Container health:

```bash
docker compose ps
```

Logs:

```bash
docker compose logs --tail=100 sma-web
```

HTTP check from the NUC:

```bash
curl -I http://localhost:3000
```

Manual smoke check:

- Home page loads.
- `/daily` loads and accepts local entries.
- `/intentions` loads and local intention changes work.
- `/journal` loads and local journal changes work.
- `/reflection` loads.
- `/settings` loads and shows local MVP status.

## Stop And Restart

Stop:

```bash
docker compose down
```

Restart:

```bash
docker compose up -d
```

## Troubleshooting

If the app is not reachable:

- Run `docker compose ps` and confirm `sma-web` is running or healthy.
- Run `docker compose logs sma-web`.
- Confirm the selected host port is open on the NUC firewall.
- Confirm tester devices are on the same LAN as the NUC.
- If port `3000` is occupied, set `SMA_WEB_PORT=3001` in `.env` and run `docker compose up -d`.

## Rollback

Use Git to return to the previous known-good commit, then rebuild:

```bash
git log --oneline -5
git checkout <commit-sha>
docker compose up --build -d
```

Return to current main later:

```bash
git checkout main
git pull origin main
docker compose up --build -d
```
