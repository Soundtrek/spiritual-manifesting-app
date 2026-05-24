import type { LucideIcon } from "lucide-react";
import { ui } from "@/components/uiStyles";

type CalmCardProps = {
  title: string;
  body: string;
  label?: string;
  icon?: LucideIcon;
};

export function CalmCard({ title, body, label, icon: Icon }: CalmCardProps) {
  return (
    <article className={ui.surface}>
      <div className="flex items-start justify-between gap-4">
        <div>
          {label ? (
            <p className={ui.eyebrow}>{label}</p>
          ) : null}
          <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2>
        </div>
        {Icon ? (
          <div className={ui.iconTileSmall}>
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        ) : null}
      </div>
      <p className="mt-5 leading-7 text-stone-300">{body}</p>
    </article>
  );
}
