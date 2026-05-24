import { Flag } from "lucide-react";

const progressItems = [
  { label: "Active", value: "2", tone: "text-teal-100" },
  { label: "Paused", value: "1", tone: "text-amber-100" },
  { label: "Completed", value: "1", tone: "text-emerald-100" },
];

export function IntentionProgressSummary() {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
            Intention progress
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            Progress placeholder
          </h2>
        </div>
        <div className="rounded-md border border-teal-200/20 bg-teal-200/10 p-2 text-teal-100">
          <Flag className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
        {progressItems.map((item) => (
          <div
            key={item.label}
            className="rounded-md border border-white/10 bg-black/20 p-3"
          >
            <dt className="text-stone-400">{item.label}</dt>
            <dd className={`mt-1 text-xl font-semibold ${item.tone}`}>
              {item.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 rounded-md border border-white/10 bg-black/20 p-4 text-sm leading-6 text-stone-300">
        Later, this area can summarize intention movement from user-provided
        entries. For now it is a static layout sample, not an interpretation.
      </p>
    </section>
  );
}
