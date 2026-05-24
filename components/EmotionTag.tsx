type EmotionTagProps = {
  emotion: string;
};

export function EmotionTag({ emotion }: EmotionTagProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-stone-200">
      {emotion}
    </span>
  );
}
