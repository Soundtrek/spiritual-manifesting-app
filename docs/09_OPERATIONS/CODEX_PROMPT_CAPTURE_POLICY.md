# Codex Prompt Capture Policy

Canonical path: `docs/09_OPERATIONS/CODEX_PROMPT_CAPTURE_POLICY.md`

## Purpose

Prompts and outcomes should be captured so future Codex work can understand module intent, guardrails, validation, and known documentation drift.

## Required Capture

For each substantial Codex task, update `prompts/CODEX_PROMPT_LOG.md` with:

- Date.
- Module or maintenance task name.
- Prompt purpose.
- Guardrails.
- Actual outcome.
- Validation commands and results.
- Commit SHA after commit creation.
- Blockers or path drift discovered.

## Prompt Template

Use `prompts/CODEX_PROMPT_TEMPLATE.md` for future module prompts. The template requires read-first path verification before implementation.

## Preflight Integrity

Before implementation, validate required docs using:

- `docs/DOCUMENT_REGISTRY.md`
- `docs/REQUIRED_DOCS_BY_MODULE.md`
- `docs/DOC_ALIAS_MAP.md`
- `docs/09_OPERATIONS/DOC_PREFLIGHT_VALIDATION_POLICY.md`

Missing required docs must be reported immediately. Fallback docs may not be substituted silently.

## Related Docs

- `prompts/CODEX_PROMPT_LOG.md`
- `prompts/CODEX_PROMPT_TEMPLATE.md`
- `docs/DOCUMENT_REGISTRY.md`
- `docs/REQUIRED_DOCS_BY_MODULE.md`
- `docs/DOC_ALIAS_MAP.md`
- `docs/09_OPERATIONS/DOC_PREFLIGHT_VALIDATION_POLICY.md`
