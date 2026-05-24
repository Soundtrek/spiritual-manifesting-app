import { Sparkles } from "lucide-react";
import { ui } from "@/components/uiStyles";

type AffirmationCardProps = {
  intention: string;
  mood: string;
};

export function AffirmationCard({ intention, mood }: AffirmationCardProps) {
  const hasContext = intention.trim().length > 0 || mood.length > 0;

  return (
    <div className="rounded-md border border-dashed border-teal-200/30 bg-teal-200/8 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="flex items-start gap-3">
        <div className={ui.iconTile}>
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-semibold text-white">Affirmation placeholder</h3>
          <p className="mt-3 leading-7 text-stone-300">
            {hasContext
              ? "A future module may offer a grounded affirmation from your check-in. For now, this space simply reflects that the flow has room for one."
              : "Choose a mood or intention first. This static card stays quiet until later modules define approved guidance behavior."}
          </p>
        </div>
      </div>
    </div>
  );
}
