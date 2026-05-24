import { JournalBoard } from "@/components/JournalBoard";
import { PageHeader } from "@/components/PageHeader";

export default function JournalPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Journal"
        title="Journal and history"
        description="Create reflections, mark gratitude moments, and filter your local timeline. Entries are stored in this browser only."
      />
      <JournalBoard />
    </div>
  );
}
