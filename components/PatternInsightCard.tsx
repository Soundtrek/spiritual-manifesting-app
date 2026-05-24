import type { LucideIcon } from "lucide-react";

type PatternInsightCardProps = {
  title: string;
  label: string;
  body: string;
  icon: LucideIcon;
  items: string[];
};

export function PatternInsightCard({
  title,
  label,
  body,
  icon: Icon,
  items,
}: PatternInsightCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
            {label}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2>
        </div>
        <div className="rounded-md border border-teal-200/20 bg-teal-200/10 p-2 text-teal-100">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      <p className="mt-4 leading-7 text-stone-300">{body}</p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-stone-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
