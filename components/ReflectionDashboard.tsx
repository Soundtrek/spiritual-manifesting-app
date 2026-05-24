import { Compass, Lightbulb, NotebookText } from "lucide-react";
import { FutureAIReflectionNotice } from "@/components/FutureAIReflectionNotice";
import { GratitudePatternPanel } from "@/components/GratitudePatternPanel";
import { IntentionProgressSummary } from "@/components/IntentionProgressSummary";
import { MoodTrendPanel } from "@/components/MoodTrendPanel";
import { PatternInsightCard } from "@/components/PatternInsightCard";
import { SectionLabel } from "@/components/SectionLabel";
import { WeeklyReflectionCard } from "@/components/WeeklyReflectionCard";

export function ReflectionDashboard() {
  return (
    <div className="space-y-6">
      <SectionLabel>Static reflection dashboard</SectionLabel>

      <WeeklyReflectionCard />

      <div className="grid gap-5 lg:grid-cols-2">
        <PatternInsightCard
          title="Journal pattern placeholder"
          label="Journal patterns"
          icon={NotebookText}
          body="Future pattern summaries can be grounded in entries you choose to provide. This card does not analyze or infer anything yet."
          items={[
            "Repeated topics can appear here as optional observations.",
            "Entries will remain user-led and editable before any future summary.",
          ]}
        />
        <IntentionProgressSummary />
        <MoodTrendPanel />
        <GratitudePatternPanel />
      </div>

      <PatternInsightCard
        title="Gentle next-step suggestion placeholder"
        label="Next step"
        icon={Compass}
        body="This area can later offer a simple reflection prompt based on selected journal and intention data. Nothing here is personalized yet."
        items={[
          "Choose one intention to revisit without pressure.",
          "Notice one small action that feels available today.",
        ]}
      />

      <FutureAIReflectionNotice />

      <PatternInsightCard
        title="Future insight boundary"
        label="Grounding"
        icon={Lightbulb}
        body="Reflection support should stay tentative, practical, and easy to ignore. The user remains the authority on what matters."
        items={[
          "No outcome guarantees.",
          "No certainty claims.",
          "No hidden meaning inferred from sparse notes.",
        ]}
      />
    </div>
  );
}
