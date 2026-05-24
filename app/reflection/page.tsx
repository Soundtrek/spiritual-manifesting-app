import { PageHeader } from "@/components/PageHeader";
import { ReflectionPanel } from "@/components/ReflectionPanel";

export default function ReflectionPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Reflection"
        title="Weekly reflection"
        description="A static space for future pattern summaries that preserve user agency."
      />
      <ReflectionPanel />
    </div>
  );
}
