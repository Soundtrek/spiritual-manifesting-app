import type { FormEvent } from "react";
import { Check, Plus, X } from "lucide-react";
import {
  getMoodEnergyLabel,
  type MoodEnergy,
  moodEnergyOptions,
} from "@/components/MoodEnergyTag";

export type JournalFormValues = {
  body: string;
  mood: MoodEnergy;
  isGratitude: boolean;
  intentionLink: string;
};

type JournalComposerProps = {
  values: JournalFormValues;
  isEditing: boolean;
  onChange: (values: JournalFormValues) => void;
  onSubmit: () => void;
  onCancelEdit: () => void;
};

export function JournalComposer({
  values,
  isEditing,
  onChange,
  onSubmit,
  onCancelEdit,
}: JournalComposerProps) {
  function updateField<Key extends keyof JournalFormValues>(
    key: Key,
    value: JournalFormValues[Key],
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
      className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur"
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
          {isEditing ? "Revise entry" : "New entry"}
        </p>
        <h2 className="mt-2 text-xl font-semibold text-white">
          {isEditing ? "Edit this reflection" : "Add a journal note"}
        </h2>
        <p className="mt-3 leading-7 text-stone-300">
          Write what feels useful to remember. This stays in temporary page
          state only.
        </p>
      </div>

      <div className="mt-6 space-y-5">
        <label className="block text-sm font-medium text-stone-200">
          Reflection
          <textarea
            value={values.body}
            onChange={(event) => updateField("body", event.target.value)}
            placeholder="Today I noticed..."
            rows={6}
            className="mt-2 w-full resize-none rounded-md border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-stone-500 focus:border-teal-200/50 focus:ring-2 focus:ring-teal-200/20"
          />
        </label>

        <label className="block text-sm font-medium text-stone-200">
          Mood or energy
          <select
            value={values.mood}
            onChange={(event) =>
              updateField("mood", event.target.value as MoodEnergy)
            }
            className="mt-2 w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-teal-200/50 focus:ring-2 focus:ring-teal-200/20"
          >
            {moodEnergyOptions.map((mood) => (
              <option key={mood} value={mood}>
                {getMoodEnergyLabel(mood)}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-stone-200">
          Optional intention link
          <input
            value={values.intentionLink}
            onChange={(event) =>
              updateField("intentionLink", event.target.value)
            }
            placeholder="Connected intention, if any..."
            className="mt-2 w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-stone-500 focus:border-teal-200/50 focus:ring-2 focus:ring-teal-200/20"
          />
        </label>

        <label className="flex items-start gap-3 rounded-md border border-white/10 bg-black/20 p-4 text-sm text-stone-200">
          <input
            type="checkbox"
            checked={values.isGratitude}
            onChange={(event) =>
              updateField("isGratitude", event.target.checked)
            }
            className="mt-1 h-4 w-4 rounded border-white/20 bg-black/30 text-teal-200 focus:ring-2 focus:ring-teal-200/30"
          />
          <span>
            <span className="block font-medium text-white">
              Mark as gratitude-related
            </span>
            <span className="mt-1 block leading-6 text-stone-400">
              Use this when the entry includes appreciation, relief, or
              something you want to remember gently.
            </span>
          </span>
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-100 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          {isEditing ? (
            <Check className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Plus className="h-4 w-4" aria-hidden="true" />
          )}
          {isEditing ? "Save changes" : "Create entry"}
        </button>

        {isEditing ? (
          <button
            type="button"
            onClick={onCancelEdit}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-stone-200 transition hover:border-white/20 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-teal-200/30"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  );
}
