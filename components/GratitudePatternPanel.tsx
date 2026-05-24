import { Heart } from "lucide-react";

const gratitudeTopics = ["Rest", "Clear talks", "Small progress"];

export function GratitudePatternPanel() {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
            Gratitude pattern
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            Gratitude placeholder
          </h2>
        </div>
        <div className="rounded-md border border-rose-200/20 bg-rose-200/10 p-2 text-rose-100">
          <Heart className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <p className="mt-4 leading-7 text-stone-300">
        This panel reserves space for future gratitude grouping. The current
        topics are demo labels only and are not derived from journal text.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {gratitudeTopics.map((topic) => (
          <span
            key={topic}
            className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-stone-300"
          >
            {topic}
          </span>
        ))}
      </div>
    </section>
  );
}
