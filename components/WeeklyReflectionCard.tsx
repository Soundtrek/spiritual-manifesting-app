import { CalendarDays, CircleCheck, NotebookText } from "lucide-react";
import { ui } from "@/components/uiStyles";

export function WeeklyReflectionCard() {
  return (
    <section className={ui.surface}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className={ui.eyebrow}>Weekly overview</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Reflection snapshot
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-stone-300">
            A quiet weekly space for noticing what you returned to, what felt
            supportive, and what may need more room. Demo values are shown only
            to shape the future dashboard.
          </p>
        </div>
        <div className={ui.iconTile}>
          <CalendarDays className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <dl className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className={`${ui.inset} p-4`}>
          <dt className="flex items-center gap-2 text-sm text-stone-400">
            <NotebookText className="h-4 w-4 text-teal-100" aria-hidden="true" />
            Journal check-ins
          </dt>
          <dd className="mt-2 text-2xl font-semibold text-white">4</dd>
        </div>
        <div className={`${ui.inset} p-4`}>
          <dt className="flex items-center gap-2 text-sm text-stone-400">
            <CircleCheck className="h-4 w-4 text-teal-100" aria-hidden="true" />
            Intentions revisited
          </dt>
          <dd className="mt-2 text-2xl font-semibold text-white">3</dd>
        </div>
        <div className={`${ui.inset} p-4`}>
          <dt className="text-sm text-stone-400">Steady theme</dt>
          <dd className="mt-2 text-base font-medium text-white">Gentle focus</dd>
        </div>
      </dl>
    </section>
  );
}
