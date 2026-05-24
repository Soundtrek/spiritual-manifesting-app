# Docker Strategy

## Purpose

Use Docker from the beginning to create a portable, reproducible, migration-safe development environment.

## Core Principle

The project should be runnable locally with minimal host dependencies.

## Initial Containers

### sma-web

Next.js application container.

Responsibilities:
- frontend
- API routes
- UI runtime

### sma-db

Postgres database container.

Responsibilities:
- journaling data
- intentions
- summaries
- persistence

## Future Optional Containers

### sma-redis
Optional queue/cache/runtime memory layer.

### sma-worker
Optional AI/background processing worker.

### sma-minio
Optional object/file storage.

## Why Docker First

- reproducible development
- migration-safe
- easier onboarding
- environment consistency
- future deployment portability
- infrastructure governance

## Early Recommendation

Start simple:
- Next.js
- Postgres
- Docker Compose

Avoid early infrastructure over-complexity.

## Current Recommendation

Do not start with full Supabase self-hosting yet.

Begin with:
- plain Postgres
- local auth strategy later
- simple architecture first
