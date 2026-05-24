# Codex Prompt Template

## Task

[Describe the module or maintenance task.]

## Read First

Before implementation, verify these paths exist and report any drift:

- `docs/MASTER_INDEX.md`
- `docs/SOURCE_OF_TRUTH_MATRIX.md`
- `docs/DOCUMENT_RELATIONSHIP_MAP.md`
- `docs/10_BUILD/MVP_HARD_BOUNDARY.md`
- `docs/01_GOVERNANCE/SAFE_LANGUAGE_GUIDE.md`
- `docs/10_BUILD/PHASE_STATUS.md`
- `handover/CURRENT_HANDOVER.md`

If an expected document is missing, stop implementation work and repair or report the documentation path issue first.

## Guardrails

- Stay within the requested task.
- Do not add AI, auth, database, persistence, payments, notifications, or API routes unless explicitly requested.
- Preserve grounded safety language and user agency.
- Do not modify unrelated app code.

## Required Updates

- Update relevant docs.
- Update `handover/CURRENT_HANDOVER.md`.
- Update `docs/10_BUILD/PHASE_STATUS.md`.
- Update `prompts/CODEX_PROMPT_LOG.md`.

## Validation

Run:

- `npm.cmd run typecheck`
- `npm.cmd run lint`
- `npm.cmd run build`

## Commit

Commit with the requested message and report the commit SHA.
