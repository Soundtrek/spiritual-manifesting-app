import { IntentionBoard } from "@/components/IntentionBoard";
import { PageHeader } from "@/components/PageHeader";

export default function IntentionsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Intentions"
        title="Manifestation board"
        description="Create a local board for grounded intentions, target emotions, reasons, progress notes, and status. Data is stored in this browser only."
      />
      <IntentionBoard />
    </div>
  );
}
