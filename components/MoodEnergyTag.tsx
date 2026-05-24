import { Activity } from "lucide-react";

export type MoodEnergy = "steady" | "low" | "bright" | "tender" | "restless";

type MoodEnergyTagProps = {
  mood: MoodEnergy;
};

const moodLabels: Record<MoodEnergy, string> = {
  steady: "Steady",
  low: "Low energy",
  bright: "Bright",
  tender: "Tender",
  restless: "Restless",
};

const moodStyles: Record<MoodEnergy, string> = {
  steady: "border-teal-200/25 bg-teal-200/10 text-teal-100",
  low: "border-sky-200/25 bg-sky-200/10 text-sky-100",
  bright: "border-amber-200/25 bg-amber-200/10 text-amber-100",
  tender: "border-rose-200/25 bg-rose-200/10 text-rose-100",
  restless: "border-violet-200/25 bg-violet-200/10 text-violet-100",
};

export const moodEnergyOptions: MoodEnergy[] = [
  "steady",
  "low",
  "bright",
  "tender",
  "restless",
];

export function getMoodEnergyLabel(mood: MoodEnergy) {
  return moodLabels[mood];
}

export function MoodEnergyTag({ mood }: MoodEnergyTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium ${moodStyles[mood]}`}
    >
      <Activity className="h-3.5 w-3.5" aria-hidden="true" />
      {moodLabels[mood]}
    </span>
  );
}
