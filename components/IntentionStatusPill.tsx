export type IntentionStatus = "active" | "paused" | "completed";

type IntentionStatusPillProps = {
  status: IntentionStatus;
};

const statusStyles: Record<IntentionStatus, string> = {
  active: "border-teal-200/30 bg-teal-200/10 text-teal-100",
  paused: "border-amber-200/25 bg-amber-200/10 text-amber-100",
  completed: "border-emerald-200/25 bg-emerald-200/10 text-emerald-100",
};

export function IntentionStatusPill({ status }: IntentionStatusPillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium capitalize ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
