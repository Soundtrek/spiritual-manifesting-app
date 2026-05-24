import { JournalBoard } from "@/components/JournalBoard";
import { PageHeader } from "@/components/PageHeader";

export default function JournalPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Journal"
        title="Journal and history"
        description="Create temporary reflections, mark gratitude moments, and filter this session's timeline. Nothing here is saved yet."
      />
      <JournalBoard />
    </div>
  );
}
