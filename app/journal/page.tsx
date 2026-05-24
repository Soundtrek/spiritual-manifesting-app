import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";

export default function JournalPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Journal"
        title="Gratitude and reflection"
        description="A quiet placeholder for future journal entries and reflection history."
      />
      <section className="space-y-4">
        <SectionLabel>Entries</SectionLabel>
        <EmptyState
          title="Journal entries are not stored yet"
          description="This screen is intentionally static until the persistence module is approved."
        />
      </section>
    </div>
  );
}
