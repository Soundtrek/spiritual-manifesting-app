# Document Registry

Canonical path: `docs/DOCUMENT_REGISTRY.md`

## Purpose

Deterministic registry of active documentation paths. Codex must use these canonical paths and must not silently substitute fallback documents when a required path is missing.

| DOC ID | Canonical Path | Purpose | Status | Required By |
| --- | --- | --- | --- | --- |
| NAV-001 | `docs/MASTER_INDEX.md` | Entry point for read-first and source documentation. | Active | All Codex tasks |
| NAV-002 | `docs/SOURCE_OF_TRUTH_MATRIX.md` | Maps project concerns to canonical docs. | Active | All Codex tasks |
| NAV-003 | `docs/DOCUMENT_RELATIONSHIP_MAP.md` | Describes document reading order and relationships. | Active | All Codex tasks |
| NAV-004 | `docs/DOCUMENT_REGISTRY.md` | Registers canonical documentation paths and ownership. | Active | All Codex tasks |
| NAV-005 | `docs/REQUIRED_DOCS_BY_MODULE.md` | Defines required and optional docs by module. | Active | Module prompts |
| NAV-006 | `docs/DOC_ALIAS_MAP.md` | Tracks renamed, replaced, legacy, and deprecated docs. | Active | Drift resolution |
| GOV-001 | `docs/01_GOVERNANCE/SAFE_LANGUAGE_GUIDE.md` | Grounded language and agency-preserving copy rules. | Active | UX and feature work |
| UX-001 | `docs/06_USER_EXPERIENCE/UI_STYLE_CREWFINDER_INSPIRED.md` | Visual style direction for UI implementation. | Active | UI work |
| UX-002 | `docs/06_USER_EXPERIENCE/UI_INTERACTION_PRINCIPLES.md` | Interaction behavior and UX principles. | Active | UI work |
| OPS-001 | `docs/09_OPERATIONS/CODEX_PROMPT_CAPTURE_POLICY.md` | Prompt capture requirements for Codex tasks. | Active | All Codex tasks |
| OPS-002 | `docs/09_OPERATIONS/DOC_PREFLIGHT_VALIDATION_POLICY.md` | Required preflight validation and drift response policy. | Active | All Codex tasks |
| BUILD-001 | `docs/10_BUILD/MVP_HARD_BOUNDARY.md` | Implementation boundaries for MVP work. | Active | All implementation tasks |
| BUILD-002 | `docs/10_BUILD/MODULE_05_DAILY_ALIGNMENT.md` | Module 05 Daily Alignment implementation spec. | Active | Module 05 |
| BUILD-003 | `docs/10_BUILD/MODULE_06_MANIFESTATION_BOARD.md` | Module 06 Manifestation Board implementation spec. | Active | Module 06 |
| BUILD-004 | `docs/10_BUILD/PHASE_STATUS.md` | Completed module and maintenance status. | Active | Handover, status review |
| SRC-001 | `docs/PROJECT_BRIEF.md` | Product purpose and high-level direction. | Active | Scope decisions |
| SRC-002 | `docs/MVP_SCOPE.md` | MVP feature scope and exclusions. | Active | Scope decisions |
| SRC-003 | `docs/SAFETY_AND_ETHICS.md` | Safety posture and ethical constraints. | Active | Safety review |
| SRC-004 | `docs/AI_LAYER_PLAN.md` | Future AI direction and AI boundaries. | Active | AI planning only |
| PROMPT-001 | `prompts/CODEX_PROMPT_TEMPLATE.md` | Standard prompt structure and required preflight checks. | Active | Future prompts |
| PROMPT-002 | `prompts/CODEX_PROMPT_LOG.md` | Historical prompt, outcome, validation, and drift log. | Active | Prompt capture |
| PROMPT-003 | `prompts/COPILOT_START_PROMPT.md` | Copilot start prompt context. | Active | Copilot workflows |
| HAND-001 | `handover/CURRENT_HANDOVER.md` | Current handover state for next agent. | Active | Continuity |
