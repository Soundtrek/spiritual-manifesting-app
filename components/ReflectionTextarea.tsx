import { ui } from "@/components/uiStyles";

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
        className={`mt-3 resize-none leading-7 ${ui.field}`}
      />
    </label>
  );
}
