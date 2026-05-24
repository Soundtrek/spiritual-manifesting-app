import type { FormEvent } from "react";
import { Check, Plus, X } from "lucide-react";
import type { IntentionStatus } from "@/components/IntentionStatusPill";
import { ui } from "@/components/uiStyles";

export type IntentionFormValues = {
  title: string;
  emotion: string;
  why: string;
  note: string;
  status: IntentionStatus;
};

type IntentionFormProps = {
  values: IntentionFormValues;
  isEditing: boolean;
  onChange: (values: IntentionFormValues) => void;
  onSubmit: () => void;
  onCancelEdit: () => void;
};

const statusOptions: IntentionStatus[] = ["active", "paused", "completed"];

export function IntentionForm({
  values,
  isEditing,
  onChange,
  onSubmit,
  onCancelEdit,
}: IntentionFormProps) {
  function updateField<Key extends keyof IntentionFormValues>(
    key: Key,
    value: IntentionFormValues[Key],
  ) {
    onChange({ ...values, [key]: value });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={ui.surface}
    >
      <div>
        <p className={ui.eyebrow}>
          {isEditing ? "Revise intention" : "New intention"}
        </p>
        <h2 className="mt-2 text-xl font-semibold text-white">
          {isEditing ? "Edit the board card" : "Add a grounded intention"}
        </h2>
        <p className="mt-3 leading-7 text-stone-300">
          Keep it plain, specific, and connected to what feels possible to
          practice.
        </p>
      </div>

      <div className="mt-6 space-y-5">
        <label className="block text-sm font-medium text-stone-200">
          Intention
          <input
            value={values.title}
            onChange={(event) => updateField("title", event.target.value)}
            placeholder="I want to practice..."
            className={`mt-2 ${ui.field}`}
          />
        </label>

        <label className="block text-sm font-medium text-stone-200">
          Target emotion
          <input
            value={values.emotion}
            onChange={(event) => updateField("emotion", event.target.value)}
            placeholder="Steady, open, clear..."
            className={`mt-2 ${ui.field}`}
          />
        </label>

        <label className="block text-sm font-medium text-stone-200">
          Why it matters
          <textarea
            value={values.why}
            onChange={(event) => updateField("why", event.target.value)}
            placeholder="This matters because..."
            rows={3}
            className={`mt-2 resize-none ${ui.field}`}
          />
        </label>

        <label className="block text-sm font-medium text-stone-200">
          Progress note
          <textarea
            value={values.note}
            onChange={(event) => updateField("note", event.target.value)}
            placeholder="One small thing I noticed or tried..."
            rows={3}
            className={`mt-2 resize-none ${ui.field}`}
          />
        </label>

        <label className="block text-sm font-medium text-stone-200">
          Status
          <select
            value={values.status}
            onChange={(event) =>
              updateField("status", event.target.value as IntentionStatus)
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

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className={ui.primaryButton}
        >
          {isEditing ? (
            <Check className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Plus className="h-4 w-4" aria-hidden="true" />
          )}
          {isEditing ? "Save changes" : "Create intention"}
        </button>

        {isEditing ? (
          <button
            type="button"
            onClick={onCancelEdit}
            className={ui.secondaryButton}
          >
            <X className="h-4 w-4" aria-hidden="true" />
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  );
}
