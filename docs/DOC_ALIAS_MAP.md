# Document Alias Map

Canonical path: `docs/DOC_ALIAS_MAP.md`

## Purpose

Tracks renamed, replaced, legacy, deprecated, or missing documentation paths. This map is for drift diagnosis only; it does not authorize silent fallback substitution.

| Old Path | Canonical Path | Status | Notes |
| --- | --- | --- | --- |
| `docs/10_BUILD/MODULE_06_MANIFESTATION_BOARD.md` | None yet | Missing requested path | Requested during Module 06 but not present in this checkout. Treat as drift until created or explicitly deprecated. |
| `npm run typecheck` | `npm.cmd run typecheck` | Command alias | PowerShell may block `npm.ps1`; use the `.cmd` command for validation on Windows. |
| `npm run lint` | `npm.cmd run lint` | Command alias | PowerShell may block `npm.ps1`; use the `.cmd` command for validation on Windows. |
| `npm run build` | `npm.cmd run build` | Command alias | PowerShell may block `npm.ps1`; use the `.cmd` command for validation on Windows. |
