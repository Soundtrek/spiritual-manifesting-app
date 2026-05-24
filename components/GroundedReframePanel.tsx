import { Sparkles } from "lucide-react";
import { ui } from "@/components/uiStyles";

export function GroundedReframePanel() {
  return (
    <section className={ui.surface}>
      <div className="flex items-start gap-4">
        <div className={ui.iconTile}>
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className={ui.eyebrow}>Future support</p>
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
