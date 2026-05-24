type ReflectionTextareaProps = {
  value: string;
  onChange: (value: string) => void;
};

export function ReflectionTextarea({ value, onChange }: ReflectionTextareaProps) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-stone-200">
        A short note to close this check-in
      </span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Right now I notice..."
        rows={5}
        className="mt-3 w-full resize-none rounded-md border border-white/10 bg-black/20 px-4 py-3 leading-7 text-white outline-none transition placeholder:text-stone-500 focus:border-teal-200/50 focus:ring-2 focus:ring-teal-200/20"
      />
    </label>
  );
}
