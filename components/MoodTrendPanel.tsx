import { Activity } from "lucide-react";
import { ui } from "@/components/uiStyles";

const trendBars = [
  { day: "Mon", mood: "60%", energy: "42%" },
  { day: "Tue", mood: "48%", energy: "55%" },
  { day: "Wed", mood: "68%", energy: "61%" },
  { day: "Thu", mood: "52%", energy: "45%" },
  { day: "Fri", mood: "74%", energy: "66%" },
];

export function MoodTrendPanel() {
  return (
    <section className={ui.surface}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={ui.eyebrow}>Mood and energy</p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            Trend placeholder
          </h2>
        </div>
        <div className={ui.iconTileSmall}>
          <Activity className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {trendBars.map((item) => (
          <div key={item.day} className="grid grid-cols-[2.5rem_1fr] gap-3">
            <div className="text-sm text-stone-400">{item.day}</div>
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-teal-200/70"
                  style={{ width: item.mood }}
                />
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-violet-200/60"
                  style={{ width: item.energy }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-xs text-stone-400">
        <span className={`${ui.inset} px-3 py-2`}>
          Mood
        </span>
        <span className={`${ui.inset} px-3 py-2`}>
          Energy
        </span>
      </div>
    </section>
  );
}
