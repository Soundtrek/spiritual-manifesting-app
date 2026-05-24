type GratitudeCardProps = {
  values: string[];
  onChange: (index: number, value: string) => void;
};

export function GratitudeCard({ values, onChange }: GratitudeCardProps) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {values.map((value, index) => (
        <label
          key={index}
          className="block rounded-md border border-white/10 bg-black/20 p-4"
        >
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-stone-400">
            Gratitude {index + 1}
          </span>
          <textarea
            value={value}
            onChange={(event) => onChange(index, event.target.value)}
            placeholder="Something I can appreciate..."
            rows={4}
            className="mt-3 w-full resize-none bg-transparent text-sm leading-6 text-white outline-none placeholder:text-stone-500"
          />
        </label>
      ))}
    </div>
  );
}
