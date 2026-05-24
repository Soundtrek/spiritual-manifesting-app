import type { LucideIcon } from "lucide-react";
import { ui } from "@/components/uiStyles";

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
    <section className={ui.surface}>
      <div className="flex items-start gap-4">
        <div className={ui.iconTile}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className={ui.eyebrow}>{step}</p>
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
