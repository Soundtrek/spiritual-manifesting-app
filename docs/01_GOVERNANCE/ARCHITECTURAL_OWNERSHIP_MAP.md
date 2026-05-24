# Architectural Ownership Map

## Purpose

This document prevents drift by defining which part of the system owns each responsibility.

## Current State

Planning stage. No production architecture exists yet.

## Ownership Rules

| Area | Owner | Notes |
|---|---|---|
| Product purpose | Vision docs | Defined in docs/00_VISION |
| Feature scope | Feature registry | Planned in docs/02_PRODUCT |
| AI rules | Governance + AI docs | AI must obey governance docs first |
| User journeys | UX docs | Planned in docs/06_USER_EXPERIENCE |
| Data model | Data model docs | Planned in docs/05_DATA_MODEL |
| Runtime behavior | Runtime docs | Planned in docs/07_RUNTIME |
| Privacy | Security/privacy docs | Planned in docs/08_SECURITY_AND_PRIVACY |
| Build sequence | Build docs | planning/BUILD_MODULE_PLAN.md |

## Rule

If a future code feature conflicts with a governance document, update the governance decision first or reject the feature.
