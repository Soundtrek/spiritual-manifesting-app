"use client";

import { useEffect, useMemo, useState } from "react";
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
import { ui } from "@/components/uiStyles";
import {
  localStoreKeys,
  readLocalStore,
  writeLocalStore,
} from "@/lib/localStore";

type DailyAlignmentState = {
  mood: string;
  intention: string;
  gratitude: string[];
  reflection: string;
};

const emptyDailyAlignment: DailyAlignmentState = {
  mood: "",
  intention: "",
  gratitude: ["", "", ""],
  reflection: "",
};

function isDailyAlignmentState(value: unknown): value is DailyAlignmentState {
  if (!value || typeof value !== "object") {
    return false;
  }

  const state = value as Record<string, unknown>;

  return (
    typeof state.mood === "string" &&
    typeof state.intention === "string" &&
    Array.isArray(state.gratitude) &&
    state.gratitude.every((entry) => typeof entry === "string") &&
    typeof state.reflection === "string"
  );
}

export default function DailyPage() {
  const [mood, setMood] = useState(emptyDailyAlignment.mood);
  const [intention, setIntention] = useState(emptyDailyAlignment.intention);
  const [gratitude, setGratitude] = useState(emptyDailyAlignment.gratitude);
  const [reflection, setReflection] = useState(emptyDailyAlignment.reflection);
  const [hasLoadedLocalState, setHasLoadedLocalState] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedState = readLocalStore(
        localStoreKeys.dailyAlignment,
        emptyDailyAlignment,
        isDailyAlignmentState,
      );

      setMood(savedState.mood);
      setIntention(savedState.intention);
      setGratitude(
        savedState.gratitude.length > 0
          ? [...savedState.gratitude, "", "", ""].slice(0, 3)
          : emptyDailyAlignment.gratitude,
      );
      setReflection(savedState.reflection);
      setHasLoadedLocalState(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!hasLoadedLocalState) {
      return;
    }

    writeLocalStore(localStoreKeys.dailyAlignment, {
      mood,
      intention,
      gratitude,
      reflection,
    });
  }, [gratitude, hasLoadedLocalState, intention, mood, reflection]);

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
        description="A quiet check-in for mood, intention, gratitude, and reflection. Entries are stored in this browser only and are not synced or backed up."
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

          <section className={ui.surface}>
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="mt-1 h-5 w-5 shrink-0 text-teal-100"
                aria-hidden="true"
              />
              <div>
                <p className={ui.eyebrow}>
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

            <div className={`${ui.inset} mt-6 p-4 text-sm leading-6 text-stone-300`}>
              This summary is saved only in this browser. It is not synced,
              backed up, analyzed, or sent to a server; account persistence is
              for a later module.
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
