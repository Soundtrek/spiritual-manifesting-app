# Local Development Docker Workflow

## Purpose

Define the standard local development workflow.

## Principles

- Docker-first
- reproducible environments
- minimal host dependencies
- simple startup process
- migration-safe local development

## Initial Services

- sma-web
- sma-db

## Future Services

- sma-worker
- sma-redis
- sma-minio

## Local Development Rules

- avoid machine-specific assumptions
- use environment files
- document required ports
- document volume mappings
- keep compose readable

## Governance Rule

Do not add infrastructure services unless they solve a real MVP problem.
