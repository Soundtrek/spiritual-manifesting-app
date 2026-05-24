import { ShieldCheck } from "lucide-react";

export function FutureAIReflectionNotice() {
  return (
    <section className="rounded-lg border border-teal-200/20 bg-teal-200/10 p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-teal-200/25 bg-black/20 text-teal-100">
          <ShieldCheck className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-100">
            Future AI reflection
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            AI reflection is not active yet
          </h2>
          <p className="mt-3 leading-7 text-stone-200">
            A later module may add AI summaries grounded only in journal and
            intention data you provide. The app will not predict outcomes,
            claim certainty, diagnose you, or present summaries as truth.
          </p>
        </div>
      </div>
    </section>
  );
}
