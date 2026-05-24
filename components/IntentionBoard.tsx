"use client";

import { useMemo, useState } from "react";
import { EmptyState } from "@/components/EmptyState";
import { GroundedReframePanel } from "@/components/GroundedReframePanel";
import { IntentionForm, type IntentionFormValues } from "@/components/IntentionForm";
import {
  ManifestationIntentionCard,
  type BoardIntention,
} from "@/components/ManifestationIntentionCard";
import type { IntentionStatus } from "@/components/IntentionStatusPill";
import { SectionLabel } from "@/components/SectionLabel";
import { ui } from "@/components/uiStyles";

const emptyForm: IntentionFormValues = {
  title: "",
  emotion: "",
  why: "",
  note: "",
  status: "active",
};

export function IntentionBoard() {
  const [intentions, setIntentions] = useState<BoardIntention[]>([]);
  const [formValues, setFormValues] = useState<IntentionFormValues>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  const statusCounts = useMemo(() => {
    return intentions.reduce(
      (counts, intention) => {
        counts[intention.status] += 1;
        return counts;
      },
      { active: 0, paused: 0, completed: 0 } satisfies Record<
        IntentionStatus,
        number
      >,
    );
  }, [intentions]);

  function resetForm() {
    setFormValues(emptyForm);
    setEditingId(null);
  }

  function submitForm() {
    const title = formValues.title.trim();

    if (!title) {
      return;
    }

    const nextValues = {
      title,
      emotion: formValues.emotion.trim(),
      why: formValues.why.trim(),
      note: formValues.note.trim(),
      status: formValues.status,
    };

    if (editingId) {
      setIntentions((current) =>
        current.map((intention) =>
          intention.id === editingId ? { ...intention, ...nextValues } : intention,
        ),
      );
      resetForm();
      return;
    }

    setIntentions((current) => [
      {
        id: String(Date.now()),
        ...nextValues,
      },
      ...current,
    ]);
    resetForm();
  }

  function editIntention(intention: BoardIntention) {
    setEditingId(intention.id);
    setFormValues({
      title: intention.title,
      emotion: intention.emotion,
      why: intention.why,
      note: intention.note,
      status: intention.status,
    });
  }

  function deleteIntention(id: string) {
    setIntentions((current) =>
      current.filter((intention) => intention.id !== id),
    );

    if (editingId === id) {
      resetForm();
    }
  }

  function updateStatus(id: string, status: IntentionStatus) {
    setIntentions((current) =>
      current.map((intention) =>
        intention.id === id ? { ...intention, status } : intention,
      ),
    );
  }

  return (
    <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_22rem]">
      <div className="space-y-5">
        <SectionLabel>Board</SectionLabel>

        {intentions.length > 0 ? (
          <div className="grid gap-4">
            {intentions.map((intention) => (
              <ManifestationIntentionCard
                key={intention.id}
                intention={intention}
                onEdit={editIntention}
                onDelete={deleteIntention}
                onStatusChange={updateStatus}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No intentions on the board yet"
            description="Create one intention to start a temporary board for this session. It will not be saved when the page reloads."
          />
        )}
      </div>

      <aside className="space-y-5 xl:sticky xl:top-10 xl:self-start">
        <IntentionForm
          values={formValues}
          isEditing={Boolean(editingId)}
          onChange={setFormValues}
          onSubmit={submitForm}
          onCancelEdit={resetForm}
        />

        <section className={ui.surface}>
          <p className={ui.eyebrow}>Local summary</p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            Current board state
          </h2>
          <dl className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
            <div className={`${ui.inset} p-3`}>
              <dt className="text-stone-400">Active</dt>
              <dd className="mt-1 text-lg font-semibold text-white">
                {statusCounts.active}
              </dd>
            </div>
            <div className={`${ui.inset} p-3`}>
              <dt className="text-stone-400">Paused</dt>
              <dd className="mt-1 text-lg font-semibold text-white">
                {statusCounts.paused}
              </dd>
            </div>
            <div className={`${ui.inset} p-3`}>
              <dt className="text-stone-400">Done</dt>
              <dd className="mt-1 text-lg font-semibold text-white">
                {statusCounts.completed}
              </dd>
            </div>
          </dl>
          <p className={`${ui.inset} mt-4 p-4 text-sm leading-6 text-stone-300`}>
            This board uses temporary browser state only. It is not saved,
            synced, analyzed, or sent anywhere.
          </p>
        </section>

        <GroundedReframePanel />
      </aside>
    </section>
  );
}
