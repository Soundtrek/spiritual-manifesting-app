import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Settings"
        title="App preferences"
        description="A placeholder for future account, theme, and privacy controls."
      />
      <section className="space-y-4">
        <SectionLabel>Preferences</SectionLabel>
        <EmptyState
          title="Settings are not active yet"
          description="Auth, billing, notifications, and account management are outside Module 04."
        />
      </section>
    </div>
  );
}
