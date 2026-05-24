import { Edit3, Trash2 } from "lucide-react";
import { EmotionTag } from "@/components/EmotionTag";
import {
  IntentionStatusPill,
  type IntentionStatus,
} from "@/components/IntentionStatusPill";

export type BoardIntention = {
  id: string;
  title: string;
  emotion: string;
  why: string;
  note: string;
  status: IntentionStatus;
};

type ManifestationIntentionCardProps = {
  intention: BoardIntention;
  onEdit: (intention: BoardIntention) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: IntentionStatus) => void;
};

const statusOptions: IntentionStatus[] = ["active", "paused", "completed"];

export function ManifestationIntentionCard({
  intention,
  onEdit,
  onDelete,
  onStatusChange,
}: ManifestationIntentionCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <IntentionStatusPill status={intention.status} />
            {intention.emotion ? <EmotionTag emotion={intention.emotion} /> : null}
          </div>
          <h2 className="mt-4 text-xl font-semibold leading-7 text-white">
            {intention.title}
          </h2>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => onEdit(intention)}
            aria-label={`Edit ${intention.title}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-stone-200 transition hover:border-teal-200/30 hover:bg-teal-200/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-200/30"
          >
            <Edit3 className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onDelete(intention.id)}
            aria-label={`Delete ${intention.title}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-stone-200 transition hover:border-rose-200/30 hover:bg-rose-200/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-rose-200/30"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <dl className="mt-6 space-y-4 text-sm">
        <div>
          <dt className="text-stone-400">Why it matters</dt>
          <dd className="mt-1 leading-6 text-stone-100">
            {intention.why || "No reason added yet."}
          </dd>
        </div>
        <div>
          <dt className="text-stone-400">Progress note</dt>
          <dd className="mt-1 leading-6 text-stone-100">
            {intention.note || "No progress note added yet."}
          </dd>
        </div>
      </dl>

      <div className="mt-6 border-t border-white/10 pt-4">
        <label className="block text-sm font-medium text-stone-200">
          Update status
          <select
            value={intention.status}
            onChange={(event) =>
              onStatusChange(
                intention.id,
                event.target.value as IntentionStatus,
              )
            }
            className="mt-2 w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-teal-200/50 focus:ring-2 focus:ring-teal-200/20"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
      </div>
    </article>
  );
}
