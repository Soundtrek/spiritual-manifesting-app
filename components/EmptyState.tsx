import { Circle } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-white/15 bg-black/[0.22] p-8 text-center shadow-[0_14px_44px_rgba(0,0,0,0.18)]">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/5 text-teal-100">
        <Circle className="h-5 w-5" aria-hidden="true" />
      </div>
      <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl leading-7 text-stone-300">
        {description}
      </p>
    </div>
  );
}
