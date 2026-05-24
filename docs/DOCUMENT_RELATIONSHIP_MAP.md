# Document Relationship Map

Canonical path: `docs/DOCUMENT_RELATIONSHIP_MAP.md`

## Build Flow

1. Start with `docs/MASTER_INDEX.md`.
2. Verify every read-first path exists before implementation.
3. Read the module doc in `docs/10_BUILD/`.
4. Check boundaries in `docs/10_BUILD/MVP_HARD_BOUNDARY.md`.
5. Check safety language in `docs/01_GOVERNANCE/SAFE_LANGUAGE_GUIDE.md`.
6. Check current status in `docs/10_BUILD/PHASE_STATUS.md` and `handover/CURRENT_HANDOVER.md`.
7. Capture the prompt and outcome in `prompts/CODEX_PROMPT_LOG.md`.

## Relationship Notes

- `docs/MVP_SCOPE.md` defines product scope; `docs/10_BUILD/MVP_HARD_BOUNDARY.md` converts it into implementation guardrails.
- `docs/SAFETY_AND_ETHICS.md` defines safety posture; `docs/01_GOVERNANCE/SAFE_LANGUAGE_GUIDE.md` converts it into copy rules.
- `docs/AI_LAYER_PLAN.md` describes future AI direction; it does not authorize AI implementation by itself.
- `docs/10_BUILD/PHASE_STATUS.md` records completed modules; `handover/CURRENT_HANDOVER.md` tells the next agent where to resume.
