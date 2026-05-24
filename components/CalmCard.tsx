import type { LucideIcon } from "lucide-react";

type CalmCardProps = {
  title: string;
  body: string;
  label?: string;
  icon?: LucideIcon;
};

export function CalmCard({ title, body, label, icon: Icon }: CalmCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          {label ? (
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
              {label}
            </p>
          ) : null}
          <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2>
        </div>
        {Icon ? (
          <div className="rounded-md border border-teal-200/20 bg-teal-200/10 p-2 text-teal-100">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        ) : null}
      </div>
      <p className="mt-5 leading-7 text-stone-300">{body}</p>
    </article>
  );
}
