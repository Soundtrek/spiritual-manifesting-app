import { Heart } from "lucide-react";

type GratitudeMarkerProps = {
  active: boolean;
};

export function GratitudeMarker({ active }: GratitudeMarkerProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium ${
        active
          ? "border-amber-200/30 bg-amber-200/10 text-amber-100"
          : "border-white/10 bg-white/[0.04] text-stone-400"
      }`}
    >
      <Heart className="h-3.5 w-3.5" aria-hidden="true" />
      {active ? "Gratitude" : "Reflection"}
    </span>
  );
}
