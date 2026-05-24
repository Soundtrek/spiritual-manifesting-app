import { Cloud, Flame, Leaf, Moon, Sunrise } from "lucide-react";

const moods = [
  { value: "soft", label: "Soft", icon: Leaf },
  { value: "steady", label: "Steady", icon: Sunrise },
  { value: "tired", label: "Tired", icon: Moon },
  { value: "restless", label: "Restless", icon: Flame },
  { value: "heavy", label: "Heavy", icon: Cloud },
];

type MoodSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export function MoodSelector({ value, onChange }: MoodSelectorProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
      {moods.map((mood) => {
        const Icon = mood.icon;
        const isSelected = value === mood.value;

        return (
          <button
            key={mood.value}
            type="button"
            onClick={() => onChange(mood.value)}
            className={[
              "flex min-h-24 flex-col items-start justify-between rounded-md border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-slate-950",
              isSelected
                ? "border-teal-200/50 bg-teal-200/14 text-white"
                : "border-white/10 bg-white/[0.04] text-stone-300 hover:border-white/20 hover:bg-white/[0.07]",
            ].join(" ")}
            aria-pressed={isSelected}
          >
            <Icon
              className={isSelected ? "h-5 w-5 text-teal-100" : "h-5 w-5"}
              aria-hidden="true"
            />
            <span className="text-sm font-medium">{mood.label}</span>
          </button>
        );
      })}
    </div>
  );
}
