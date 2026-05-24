import { ShieldCheck } from "lucide-react";
import { ui } from "@/components/uiStyles";

export function FutureAIReflectionNotice() {
  return (
    <section className="rounded-lg border border-teal-200/20 bg-teal-200/10 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur">
      <div className="flex items-start gap-4">
        <div className={ui.iconTile}>
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
