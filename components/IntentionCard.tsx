type IntentionCardProps = {
  value: string;
  onChange: (value: string) => void;
};

const prompts = [
  "Move gently and choose one clear next step.",
  "Notice what supports me before I reach for more.",
  "Let today's intention stay simple enough to live.",
];

export function IntentionCard({ value, onChange }: IntentionCardProps) {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-stone-200" htmlFor="intention">
        One intention for today
      </label>
      <input
        id="intention"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="I want to meet today with..."
        className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-stone-500 focus:border-teal-200/50 focus:ring-2 focus:ring-teal-200/20"
      />
      <div className="grid gap-3 md:grid-cols-3">
        {prompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => onChange(prompt)}
            className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-sm leading-6 text-stone-300 transition hover:border-teal-200/30 hover:bg-teal-200/10 hover:text-white"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
