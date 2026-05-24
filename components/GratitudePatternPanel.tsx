import { Heart } from "lucide-react";
import { ui } from "@/components/uiStyles";

const gratitudeTopics = ["Rest", "Clear talks", "Small progress"];

export function GratitudePatternPanel() {
  return (
    <section className={ui.surface}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={ui.eyebrow}>Gratitude pattern</p>
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
            className={`${ui.inset} px-3 py-2 text-sm text-stone-300`}
          >
            {topic}
          </span>
        ))}
      </div>
    </section>
  );
}
