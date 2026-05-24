import { Sparkles } from "lucide-react";

export function GroundedReframePanel() {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-teal-200/20 bg-teal-200/10 text-teal-100">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
            Future support
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            Grounded reframe space
          </h2>
          <p className="mt-3 leading-7 text-stone-300">
            Later, this area may help reframe vague wishes into grounded
            intentions. Nothing is generated here yet, and no AI is connected in
            this module.
          </p>
        </div>
      </div>
    </section>
  );
}
