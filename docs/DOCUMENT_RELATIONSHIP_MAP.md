# Document Relationship Map

Canonical path: `docs/DOCUMENT_RELATIONSHIP_MAP.md`

## Build Flow

1. Start with `docs/MASTER_INDEX.md`.
2. Validate canonical paths against `docs/DOCUMENT_REGISTRY.md`.
3. Validate module requirements in `docs/REQUIRED_DOCS_BY_MODULE.md`.
4. Check `docs/DOC_ALIAS_MAP.md` only for drift diagnosis.
5. Apply `docs/09_OPERATIONS/DOC_PREFLIGHT_VALIDATION_POLICY.md`; stop if required docs are missing.
6. Read the module doc in `docs/10_BUILD/` when required for the module.
7. Check boundaries in `docs/10_BUILD/MVP_HARD_BOUNDARY.md`.
8. Check safety language in `docs/01_GOVERNANCE/SAFE_LANGUAGE_GUIDE.md`.
9. Check current status in `docs/10_BUILD/PHASE_STATUS.md` and `handover/CURRENT_HANDOVER.md`.
10. Capture the prompt and outcome in `prompts/CODEX_PROMPT_LOG.md`.

## Relationship Notes

- `docs/MVP_SCOPE.md` defines product scope; `docs/10_BUILD/MVP_HARD_BOUNDARY.md` converts it into implementation guardrails.
- `docs/SAFETY_AND_ETHICS.md` defines safety posture; `docs/01_GOVERNANCE/SAFE_LANGUAGE_GUIDE.md` converts it into copy rules.
- `docs/AI_LAYER_PLAN.md` describes future AI direction; it does not authorize AI implementation by itself.
- `docs/10_BUILD/PHASE_STATUS.md` records completed modules; `handover/CURRENT_HANDOVER.md` tells the next agent where to resume.
- `docs/DOCUMENT_REGISTRY.md` owns canonical documentation paths; `docs/REQUIRED_DOCS_BY_MODULE.md` applies them to module work.
- `docs/DOC_ALIAS_MAP.md` records drift and legacy paths; it must not be used to silently replace missing required docs.
