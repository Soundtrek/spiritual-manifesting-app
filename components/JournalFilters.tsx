import { Search } from "lucide-react";
import {
  getMoodEnergyLabel,
  type MoodEnergy,
  moodEnergyOptions,
} from "@/components/MoodEnergyTag";

export type JournalFilterValues = {
  search: string;
  mood: "all" | MoodEnergy;
  gratitudeOnly: boolean;
};

type JournalFiltersProps = {
  values: JournalFilterValues;
  onChange: (values: JournalFilterValues) => void;
  resultCount: number;
};

export function JournalFilters({
  values,
  onChange,
  resultCount,
}: JournalFiltersProps) {
  function updateField<Key extends keyof JournalFilterValues>(
    key: Key,
    value: JournalFilterValues[Key],
  ) {
    onChange({ ...values, [key]: value });
  }

  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
            Filters
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            Find a reflection
          </h2>
        </div>
        <p className="text-sm text-stone-400">
          {resultCount} {resultCount === 1 ? "entry" : "entries"} shown
        </p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_13rem]">
        <label className="block text-sm font-medium text-stone-200">
          Search
          <span className="relative mt-2 block">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500"
              aria-hidden="true"
            />
            <input
              value={values.search}
              onChange={(event) => updateField("search", event.target.value)}
              placeholder="Search entries or linked intentions..."
              className="w-full rounded-md border border-white/10 bg-black/20 py-3 pl-10 pr-4 text-white outline-none transition placeholder:text-stone-500 focus:border-teal-200/50 focus:ring-2 focus:ring-teal-200/20"
            />
          </span>
        </label>

        <label className="block text-sm font-medium text-stone-200">
          Mood or energy
          <select
            value={values.mood}
            onChange={(event) =>
              updateField("mood", event.target.value as "all" | MoodEnergy)
            }
            className="mt-2 w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-teal-200/50 focus:ring-2 focus:ring-teal-200/20"
          >
            <option value="all">All moods</option>
            {moodEnergyOptions.map((mood) => (
              <option key={mood} value={mood}>
                {getMoodEnergyLabel(mood)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 flex items-center gap-3 rounded-md border border-white/10 bg-black/20 p-4 text-sm text-stone-200">
        <input
          type="checkbox"
          checked={values.gratitudeOnly}
          onChange={(event) =>
            updateField("gratitudeOnly", event.target.checked)
          }
          className="h-4 w-4 rounded border-white/20 bg-black/30 text-teal-200 focus:ring-2 focus:ring-teal-200/30"
        />
        Show gratitude-related entries only
      </label>
    </section>
  );
}
