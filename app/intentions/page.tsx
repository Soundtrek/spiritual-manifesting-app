import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";

export default function IntentionsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Intentions"
        title="Manifestation board"
        description="A future home for active intentions, framed with grounded and user-led language."
      />
      <section className="space-y-4">
        <SectionLabel>Board</SectionLabel>
        <EmptyState
          title="The board is a placeholder"
          description="No forms, database records, or AI rewriting have been added in this foundation module."
        />
      </section>
    </div>
  );
}
