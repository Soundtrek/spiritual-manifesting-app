import { ui } from "@/components/uiStyles";

type AlignmentProgressProps = {
  completedSteps: number;
  totalSteps: number;
};

export function AlignmentProgress({
  completedSteps,
  totalSteps,
}: AlignmentProgressProps) {
  const progress = Math.round((completedSteps / totalSteps) * 100);

  return (
    <aside className={ui.surfaceSoft}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className={ui.eyebrowAccent}>
            Flow progress
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">{progress}%</p>
        </div>
        <p className="text-sm text-stone-300">
          {completedSteps} of {totalSteps} touched
        </p>
      </div>
      <div
        className="mt-5 h-2 overflow-hidden rounded-full bg-white/10"
        aria-label={`${progress}% complete`}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <div
          className="h-full rounded-full bg-teal-200 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-stone-400">
        This is only a gentle marker for the session, not a streak or score.
      </p>
    </aside>
  );
}
