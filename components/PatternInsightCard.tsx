import type { LucideIcon } from "lucide-react";
import { ui } from "@/components/uiStyles";

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
    <article className={ui.surface}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={ui.eyebrow}>{label}</p>
          <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2>
        </div>
        <div className={ui.iconTileSmall}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      <p className="mt-4 leading-7 text-stone-300">{body}</p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className={`${ui.inset} px-4 py-3 text-sm leading-6 text-stone-300`}
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
