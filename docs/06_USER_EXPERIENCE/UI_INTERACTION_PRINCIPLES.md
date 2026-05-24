# UI Interaction Principles

Canonical path: `docs/06_USER_EXPERIENCE/UI_INTERACTION_PRINCIPLES.md`

## Interaction Rules

- Keep flows calm, reversible, and low-pressure.
- Use local state only unless persistence is explicitly in scope.
- Make progress visible when a flow has steps.
- Let users skip, reset, or revise reflective inputs where appropriate.
- Keep empty states supportive and specific.

## Copy Rules

- Use gentle prompts.
- Invite reflection rather than demand disclosure.
- Avoid certainty, prediction, or miracle framing.
- Avoid medical, therapeutic, diagnostic, or crisis-support claims.

## Technical Boundaries

- Do not add API routes, storage, auth, AI, or database logic from an interaction-only module.
- Keep component changes scoped to the requested workflow.

## Related Docs

- `docs/10_BUILD/MVP_HARD_BOUNDARY.md`
- `docs/SAFETY_AND_ETHICS.md`
