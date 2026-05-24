# Spiritual Manifesting App — Build Module Plan

This document defines the first planning-first build sequence for the Spiritual Manifesting App.

The project should remain documentation-first until the MVP boundaries, AI safety rules, and user journeys are clear.

---

## Build Principles

1. Plan before code.
2. Keep the app grounded and emotionally safe.
3. Do not promise supernatural, medical, financial, or guaranteed outcomes.
4. AI supports reflection and structure; it does not become an authority over the user.
5. Build the daily loop before adding advanced mystical features.
6. Keep the MVP small enough to finish.
7. Treat spiritual language as aesthetic and reflective, not as proof or prediction.

---

## Module 00 — Project Foundation

### Goal
Define what the app is and what it is not.

### Deliverables
- Project brief
- Product philosophy
- Safety rules
- MVP scope
- Non-goals list
- Repo structure

### Acceptance Criteria
- The app purpose is clearly defined.
- The app has safety boundaries.
- The MVP scope is small and understandable.
- No production code is started before this module is stable.

### Status
Started.

---

## Module 01 — User Journey Design

### Goal
Define the user experience before code.

### Deliverables
- First-time user journey
- Daily ritual journey
- Journaling journey
- Manifestation board journey
- Weekly reflection journey
- Settings and privacy journey

### Acceptance Criteria
- Every MVP screen has a clear purpose.
- The daily loop is understandable without explanation.
- The AI touchpoints are identified.
- The user always remains in control.

---

## Module 02 — Core Data Model

### Goal
Define what the app must remember.

### Core Objects
- User
- Intention
- Journal entry
- Mood / energy check-in
- Affirmation
- Ritual
- Reflection summary
- Synchronicity log

### Deliverables
- Data object definitions
- Relationships between objects
- Privacy notes per object
- Retention assumptions
- Export/delete assumptions

### Acceptance Criteria
- The core app memory is defined.
- Sensitive user data is identified.
- AI memory boundaries are documented.

---

## Module 03 — AI Safety & Prompt System

### Goal
Make the AI helpful, reflective, and safe.

### Deliverables
- AI safety rules
- Forbidden claim list
- System prompt draft
- Affirmation prompt
- Journal reflection prompt
- Weekly summary prompt
- Intention rewrite prompt

### Acceptance Criteria
- AI does not claim certainty or supernatural proof.
- AI does not diagnose, manipulate, or create dependency.
- AI responses remain advisory and reflective.
- Prompt outputs are structured enough for future app use.

---

## Module 04 — MVP App Shell

### Goal
Create the basic app structure.

### Features
- Home dashboard
- Navigation
- Daily alignment page
- Journal page
- Manifestation board page
- Settings page

### Acceptance Criteria
- The app can be opened and navigated.
- Placeholder states exist for all MVP areas.
- No advanced feature creep is added.

---

## Module 05 — Daily Alignment Engine

### Goal
Build the core daily loop.

### Features
- Mood check-in
- Daily intention
- Gratitude entry
- AI-generated affirmation
- Short reflection

### Acceptance Criteria
- A user can complete a daily alignment session.
- The session stores enough information for later reflection.
- AI output follows the safety rules.

---

## Module 06 — Manifestation Board

### Goal
Let users create and track grounded intentions.

### Features
- Create intention
- Edit intention
- Attach target emotion
- Add why it matters
- Add progress notes
- AI rewrite into grounded intention

### Acceptance Criteria
- Users can manage intentions.
- Vague wishes can be reframed into grounded statements.
- The app does not frame outcomes as guaranteed.

---

## Module 07 — Journal & History

### Goal
Store the user’s spiritual and emotional timeline.

### Features
- Journal entries
- Mood history
- Gratitude history
- Basic search/filter
- Timeline view

### Acceptance Criteria
- Users can create and revisit entries.
- The history supports future weekly summaries.
- Private/sensitive content is treated carefully.

---

## Module 08 — AI Reflection Layer

### Goal
Turn user history into gentle insight.

### Features
- Weekly summary
- Emotional pattern notes
- Recurring theme detection
- Suggested next ritual
- Suggested affirmation

### Acceptance Criteria
- AI insights are grounded in user-provided entries.
- AI avoids overclaiming.
- The user can ignore or reject suggestions.

---

## Module 09 — Ritual Builder

### Goal
Create reusable spiritual routines.

### Features
- Morning ritual
- Evening reflection
- Gratitude ritual
- Custom ritual builder
- Reminder planning

### Acceptance Criteria
- Users can create a simple reusable ritual.
- Rituals are optional and non-coercive.
- The feature does not distract from the core daily loop.

### Priority
Optional until the core loop feels good.

---

## Module 10 — Visual Polish

### Goal
Make the app feel calm, magical, and uncluttered.

### Features
- Dark cosmic theme
- Soft gradients
- Calm cards
- Subtle animations
- Peaceful empty states

### Acceptance Criteria
- The UI feels calm and personal.
- Visual effects do not overpower usability.
- The app remains readable and accessible.

---

## Module 11 — Accounts & Persistence

### Goal
Make the app usable across sessions and devices.

### Features
- Authentication
- Database persistence
- User profile
- Saved intentions
- Saved journal history
- Basic privacy settings

### Acceptance Criteria
- User data persists safely.
- The user can return to their previous entries.
- Privacy and delete/export assumptions are documented.

---

## Module 12 — Beta Readiness

### Goal
Prepare for real testing.

### Deliverables
- Test checklist
- Safety checklist
- Privacy notes
- MVP acceptance criteria
- Known limitations
- Beta feedback plan

### Acceptance Criteria
- The MVP can be tested by a small group.
- Known risks are documented.
- Feedback can be captured and turned into future modules.

---

## Suggested Build Order

1. Module 00 — Project Foundation
2. Module 01 — User Journey Design
3. Module 02 — Core Data Model
4. Module 03 — AI Safety & Prompt System
5. Module 04 — MVP App Shell
6. Module 05 — Daily Alignment Engine
7. Module 06 — Manifestation Board
8. Module 07 — Journal & History
9. Module 08 — AI Reflection Layer
10. Module 10 — Visual Polish
11. Module 11 — Accounts & Persistence
12. Module 12 — Beta Readiness

Module 09 should stay optional until the main daily loop is proven.

---

## Current Recommendation

Start with Module 00 and Module 01 only.

Do not start app coding yet. The next best planning document is:

`docs/USER_JOURNEYS.md`
