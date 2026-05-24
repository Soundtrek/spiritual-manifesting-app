import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";

export default function DailyPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Daily"
        title="Today's alignment"
        description="A static placeholder for the daily intention and mood check-in flow."
      />
      <section className="space-y-4">
        <SectionLabel>Daily practice</SectionLabel>
        <EmptyState
          title="No daily flow is wired yet"
          description="Module 04 only establishes the shell. Entries, persistence, and guidance will arrive in later modules."
        />
      </section>
    </div>
  );
}
