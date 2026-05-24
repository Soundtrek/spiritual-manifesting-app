import { EmptyState } from "@/components/EmptyState";
import {
  JournalEntryCard,
  type JournalEntry,
} from "@/components/JournalEntryCard";
import { SectionLabel } from "@/components/SectionLabel";

type JournalTimelineProps = {
  entries: JournalEntry[];
  hasEntries: boolean;
  onEdit: (entry: JournalEntry) => void;
  onDelete: (id: string) => void;
};

export function JournalTimeline({
  entries,
  hasEntries,
  onEdit,
  onDelete,
}: JournalTimelineProps) {
  return (
    <section className="space-y-4">
      <SectionLabel>Timeline</SectionLabel>

      {entries.length > 0 ? (
        <div className="grid gap-4">
          {entries.map((entry) => (
            <JournalEntryCard
              key={entry.id}
              entry={entry}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title={hasEntries ? "No entries match these filters" : "No journal entries yet"}
          description={
            hasEntries
              ? "Adjust the search, mood, or gratitude filter to return to the full session timeline."
              : "Create a temporary entry to begin a local journal history for this session. It will not be saved when the page reloads."
          }
        />
      )}
    </section>
  );
}
