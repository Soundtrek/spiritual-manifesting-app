import { Edit3, Trash2 } from "lucide-react";
import { EmotionTag } from "@/components/EmotionTag";
import {
  IntentionStatusPill,
  type IntentionStatus,
} from "@/components/IntentionStatusPill";
import { ui } from "@/components/uiStyles";

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
    <article className={ui.surface}>
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
            className={`${ui.iconButton} hover:border-teal-200/30 hover:bg-teal-200/10`}
          >
            <Edit3 className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onDelete(intention.id)}
            aria-label={`Delete ${intention.title}`}
            className={`${ui.iconButton} hover:border-rose-200/30 hover:bg-rose-200/10 focus:ring-rose-200/30`}
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
            className={`mt-2 ${ui.field}`}
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
