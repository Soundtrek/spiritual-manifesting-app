import type { LucideIcon } from "lucide-react";

type AlignmentStepCardProps = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  children: React.ReactNode;
};

export function AlignmentStepCard({
  step,
  title,
  description,
  icon: Icon,
  children,
}: AlignmentStepCardProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-teal-200/20 bg-teal-200/10 text-teal-100">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
            {step}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-stone-300">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
