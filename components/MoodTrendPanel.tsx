import { Activity } from "lucide-react";

const trendBars = [
  { day: "Mon", mood: "60%", energy: "42%" },
  { day: "Tue", mood: "48%", energy: "55%" },
  { day: "Wed", mood: "68%", energy: "61%" },
  { day: "Thu", mood: "52%", energy: "45%" },
  { day: "Fri", mood: "74%", energy: "66%" },
];

export function MoodTrendPanel() {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
            Mood and energy
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            Trend placeholder
          </h2>
        </div>
        <div className="rounded-md border border-teal-200/20 bg-teal-200/10 p-2 text-teal-100">
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
        <span className="rounded-md border border-white/10 bg-black/20 px-3 py-2">
          Mood
        </span>
        <span className="rounded-md border border-white/10 bg-black/20 px-3 py-2">
          Energy
        </span>
      </div>
    </section>
  );
}
