import { CalmCard } from "@/components/CalmCard";
import { SectionLabel } from "@/components/SectionLabel";

export function ReflectionPanel() {
  return (
    <section className="space-y-4">
      <SectionLabel>Reflection panel</SectionLabel>
      <CalmCard
        title="Weekly insight placeholder"
        label="Static"
        body="Later modules can summarize patterns here. For now, this panel simply reserves the space and keeps the tone reflective, practical, and user-led."
      />
    </section>
  );
}
