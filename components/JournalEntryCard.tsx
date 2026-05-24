import { Edit3, Link2, Trash2 } from "lucide-react";
import { GratitudeMarker } from "@/components/GratitudeMarker";
import { MoodEnergyTag, type MoodEnergy } from "@/components/MoodEnergyTag";
import { ui } from "@/components/uiStyles";

export type JournalEntry = {
  id: string;
  body: string;
  mood: MoodEnergy;
  isGratitude: boolean;
  intentionLink: string;
  createdAt: string;
  updatedAt?: string;
};

type JournalEntryCardProps = {
  entry: JournalEntry;
  onEdit: (entry: JournalEntry) => void;
  onDelete: (id: string) => void;
};

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

export function JournalEntryCard({
  entry,
  onEdit,
  onDelete,
}: JournalEntryCardProps) {
  const createdLabel = dateFormatter.format(new Date(entry.createdAt));
  const updatedLabel = entry.updatedAt
    ? dateFormatter.format(new Date(entry.updatedAt))
    : null;

  return (
    <article className={ui.surface}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <MoodEnergyTag mood={entry.mood} />
            <GratitudeMarker active={entry.isGratitude} />
          </div>
          <p className="mt-4 text-sm text-stone-400">
            {createdLabel}
            {updatedLabel ? ` • edited ${updatedLabel}` : ""}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => onEdit(entry)}
            aria-label="Edit journal entry"
            className={`${ui.iconButton} hover:border-teal-200/30 hover:bg-teal-200/10`}
          >
            <Edit3 className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onDelete(entry.id)}
            aria-label="Delete journal entry"
            className={`${ui.iconButton} hover:border-rose-200/30 hover:bg-rose-200/10 focus:ring-rose-200/30`}
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <p className="mt-5 whitespace-pre-wrap leading-7 text-stone-100">
        {entry.body}
      </p>

      {entry.intentionLink ? (
        <div className={`${ui.inset} mt-5 flex items-start gap-2 p-4 text-sm leading-6 text-stone-300`}>
          <Link2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-100" aria-hidden="true" />
          <span>
            <span className="font-medium text-stone-100">Intention link: </span>
            {entry.intentionLink}
          </span>
        </div>
      ) : null}
    </article>
  );
}
