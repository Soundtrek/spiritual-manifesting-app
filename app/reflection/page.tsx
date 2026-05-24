import { PageHeader } from "@/components/PageHeader";
import { ReflectionDashboard } from "@/components/ReflectionDashboard";

export default function ReflectionPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Reflection"
        title="Reflection and insights"
        description="A calm, static dashboard for noticing patterns without prediction, certainty, or generated guidance."
      />
      <ReflectionDashboard />
    </div>
  );
}
