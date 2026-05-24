# Manual Smoke Tests

## Dashboard

1. Start the local app.
2. Open `/`.
3. Confirm the dashboard renders and navigation links open the expected pages.

## Daily Alignment Persistence

1. Open `/daily`.
2. Select a mood and enter intention, gratitude, and reflection text.
3. Reload the page.
4. Confirm the saved fields are still present.

## Intentions Persistence

1. Open `/intentions`.
2. Create an intention with emotion, reason, and progress note.
3. Change its status, reload, and confirm the card remains.
4. Delete it and confirm it is removed.

## Journal Persistence

1. Open `/journal`.
2. Create a journal entry with mood or energy, gratitude marker, and optional intention link.
3. Reload and confirm the entry remains.
4. Test search, filters, edit, and delete.

## Reflection Dashboard

1. Open `/reflection`.
2. Confirm dashboard content renders.
3. Confirm AI is presented as inactive or future-scoped, with no generated advice.

## Settings Data Clearing

1. Open `/settings`.
2. Confirm Local MVP status states local browser storage only.
3. Clear local SMA data and accept the confirmation.
4. Reopen Daily, Intentions, and Journal to confirm local data is reset.

## Responsive And Safety Check

1. Test key pages around 375px width and desktop width.
2. Confirm text does not overlap controls.
3. Confirm language avoids guarantees, predictions, urgency, or dependency framing.
