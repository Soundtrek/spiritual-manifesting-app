export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-teal-200/50" aria-hidden="true" />
      <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-stone-300">
        {children}
      </h2>
    </div>
  );
}
