# Doc Preflight Validation Policy

Canonical path: `docs/09_OPERATIONS/DOC_PREFLIGHT_VALIDATION_POLICY.md`

## Purpose

Prevent documentation path drift and silent fallback behavior during Codex work.

## Required Preflight

Before implementation, Codex must:

- Read the prompt's read-first list.
- Verify every read-first path exists exactly as written.
- Check `docs/DOCUMENT_REGISTRY.md` for canonical path ownership.
- Check `docs/REQUIRED_DOCS_BY_MODULE.md` for module-specific required docs.
- Check `docs/DOC_ALIAS_MAP.md` only to diagnose drift, not to substitute docs.

## Failure Rule

If a required doc is missing, Codex must stop implementation work and report the missing canonical path immediately.

Codex must not:

- Silently use fallback docs.
- Treat optional docs as replacements for missing required docs.
- Continue feature work while required read-first docs are unresolved.

## Drift Recording

Every drift incident must be recorded in:

- `prompts/CODEX_PROMPT_LOG.md`
- `docs/10_BUILD/PHASE_STATUS.md` when the incident affects build continuity.
- `handover/CURRENT_HANDOVER.md` when the next agent needs to know about it.
- `docs/DOC_ALIAS_MAP.md` when the path is renamed, replaced, deprecated, or repeatedly requested.

## Registry Updates

When a documentation file moves, is renamed, is created as canonical, or is deprecated:

- Update `docs/DOCUMENT_REGISTRY.md`.
- Update `docs/SOURCE_OF_TRUTH_MATRIX.md` if source ownership changes.
- Update `docs/DOCUMENT_RELATIONSHIP_MAP.md` if reading order changes.
- Update `docs/DOC_ALIAS_MAP.md` with the old path and status.
