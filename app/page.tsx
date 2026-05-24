import {
  BookOpenText,
  CalendarHeart,
  CircleDot,
  Layers3,
  Sparkles,
} from "lucide-react";
import { CalmCard } from "@/components/CalmCard";
import { PageHeader } from "@/components/PageHeader";
import { PrimaryAction } from "@/components/PrimaryAction";
import { ReflectionPanel } from "@/components/ReflectionPanel";
import { SectionLabel } from "@/components/SectionLabel";

const dashboardCards = [
  {
    title: "Today's Alignment",
    body: "A quiet place for one grounded intention when this module grows.",
    label: "Daily",
    icon: CircleDot,
  },
  {
    title: "Active Intentions",
    body: "Static space for the intentions board, without persistence yet.",
    label: "Intentions",
    icon: Layers3,
  },
  {
    title: "Recent Journal",
    body: "A placeholder for gratitude notes and reflection entries.",
    label: "Journal",
    icon: BookOpenText,
  },
  {
    title: "Weekly Reflection",
    body: "Future summaries will stay grounded and advisory.",
    label: "Reflection",
    icon: CalendarHeart,
  },
  {
    title: "Gentle Insight",
    body: "No AI is connected in Module 04. This panel stays static.",
    label: "Insight",
    icon: Sparkles,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Module 04 shell"
        title="A calm place to begin."
        description="The SMA foundation is a static, mobile-first app shell for intentions, journaling, and reflection."
        action={<PrimaryAction href="/daily">Begin today</PrimaryAction>}
      />

      <section className="space-y-4">
        <SectionLabel>Dashboard</SectionLabel>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {dashboardCards.map((card) => (
            <CalmCard
              key={card.title}
              title={card.title}
              body={card.body}
              label={card.label}
              icon={card.icon}
            />
          ))}
        </div>
      </section>

      <ReflectionPanel />
    </div>
  );
}
