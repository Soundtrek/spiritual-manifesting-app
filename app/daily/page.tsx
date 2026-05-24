"use client";

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  CircleDot,
  Heart,
  MessageSquareText,
  PencilLine,
  Sparkles,
} from "lucide-react";
import { AffirmationCard } from "@/components/AffirmationCard";
import { AlignmentProgress } from "@/components/AlignmentProgress";
import { AlignmentStepCard } from "@/components/AlignmentStepCard";
import { GratitudeCard } from "@/components/GratitudeCard";
import { IntentionCard } from "@/components/IntentionCard";
import { MoodSelector } from "@/components/MoodSelector";
import { PageHeader } from "@/components/PageHeader";
import { ReflectionTextarea } from "@/components/ReflectionTextarea";
import { SectionLabel } from "@/components/SectionLabel";

export default function DailyPage() {
  const [mood, setMood] = useState("");
  const [intention, setIntention] = useState("");
  const [gratitude, setGratitude] = useState(["", "", ""]);
  const [reflection, setReflection] = useState("");

  const completedSteps = useMemo(() => {
    return [
      mood.length > 0,
      intention.trim().length > 0,
      gratitude.some((entry) => entry.trim().length > 0),
      reflection.trim().length > 0,
    ].filter(Boolean).length;
  }, [gratitude, intention, mood, reflection]);

  function updateGratitude(index: number, value: string) {
    setGratitude((current) =>
      current.map((entry, entryIndex) => (entryIndex === index ? value : entry)),
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Daily"
        title="Today's alignment"
        description="A quiet check-in for mood, intention, gratitude, and reflection. Everything here stays local to this page for now."
      />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-5">
          <SectionLabel>Daily practice</SectionLabel>

          <AlignmentStepCard
            step="Step 1"
            title="Mood check-in"
            description="Name the weather of the moment without needing to fix it."
            icon={CircleDot}
          >
            <MoodSelector value={mood} onChange={setMood} />
          </AlignmentStepCard>

          <AlignmentStepCard
            step="Step 2"
            title="Daily intention"
            description="Choose one steady direction for today, small enough to return to."
            icon={PencilLine}
          >
            <IntentionCard value={intention} onChange={setIntention} />
          </AlignmentStepCard>

          <AlignmentStepCard
            step="Step 3"
            title="Gratitude"
            description="Mark a few real things that feel supportive, ordinary, or worth noticing."
            icon={Heart}
          >
            <GratitudeCard values={gratitude} onChange={updateGratitude} />
          </AlignmentStepCard>

          <AlignmentStepCard
            step="Step 4"
            title="Affirmation space"
            description="Reserved for a future grounded prompt. No AI or generated guidance is connected in this module."
            icon={Sparkles}
          >
            <AffirmationCard intention={intention} mood={mood} />
          </AlignmentStepCard>

          <AlignmentStepCard
            step="Step 5"
            title="Short reflection"
            description="Close with one note about what you want to remember from this check-in."
            icon={MessageSquareText}
          >
            <ReflectionTextarea value={reflection} onChange={setReflection} />
          </AlignmentStepCard>
        </div>

        <div className="space-y-5 xl:sticky xl:top-10 xl:self-start">
          <AlignmentProgress completedSteps={completedSteps} totalSteps={4} />

          <section className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="mt-1 h-5 w-5 shrink-0 text-teal-100"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
                  Completion
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  Session summary
                </h2>
              </div>
            </div>

            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-stone-400">Mood</dt>
                <dd className="mt-1 capitalize text-white">
                  {mood || "Not selected yet"}
                </dd>
              </div>
              <div>
                <dt className="text-stone-400">Intention</dt>
                <dd className="mt-1 leading-6 text-white">
                  {intention || "No intention entered yet"}
                </dd>
              </div>
              <div>
                <dt className="text-stone-400">Gratitude notes</dt>
                <dd className="mt-1 text-white">
                  {gratitude.filter((entry) => entry.trim().length > 0).length} of
                  3
                </dd>
              </div>
              <div>
                <dt className="text-stone-400">Reflection</dt>
                <dd className="mt-1 leading-6 text-white">
                  {reflection || "No reflection entered yet"}
                </dd>
              </div>
            </dl>

            <div className="mt-6 rounded-md border border-white/10 bg-black/20 p-4 text-sm leading-6 text-stone-300">
              This summary is temporary UI state only. It is not saved, synced, or
              analyzed.
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
