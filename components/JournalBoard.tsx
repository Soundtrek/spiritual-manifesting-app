"use client";

import { useMemo, useState } from "react";
import {
  JournalComposer,
  type JournalFormValues,
} from "@/components/JournalComposer";
import {
  JournalFilters,
  type JournalFilterValues,
} from "@/components/JournalFilters";
import { type JournalEntry } from "@/components/JournalEntryCard";
import { JournalTimeline } from "@/components/JournalTimeline";
import { SectionLabel } from "@/components/SectionLabel";

const emptyForm: JournalFormValues = {
  body: "",
  mood: "steady",
  isGratitude: false,
  intentionLink: "",
};

const emptyFilters: JournalFilterValues = {
  search: "",
  mood: "all",
  gratitudeOnly: false,
};

export function JournalBoard() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [formValues, setFormValues] = useState<JournalFormValues>(emptyForm);
  const [filters, setFilters] = useState<JournalFilterValues>(emptyFilters);
  const [editingId, setEditingId] = useState<string | null>(null);

  const filteredEntries = useMemo(() => {
    const normalizedSearch = filters.search.trim().toLowerCase();

    return entries.filter((entry) => {
      const matchesSearch =
        !normalizedSearch ||
        entry.body.toLowerCase().includes(normalizedSearch) ||
        entry.intentionLink.toLowerCase().includes(normalizedSearch);
      const matchesMood = filters.mood === "all" || entry.mood === filters.mood;
      const matchesGratitude = !filters.gratitudeOnly || entry.isGratitude;

      return matchesSearch && matchesMood && matchesGratitude;
    });
  }, [entries, filters]);

  const gratitudeCount = useMemo(
    () => entries.filter((entry) => entry.isGratitude).length,
    [entries],
  );

  function resetForm() {
    setFormValues(emptyForm);
    setEditingId(null);
  }

  function submitForm() {
    const body = formValues.body.trim();

    if (!body) {
      return;
    }

    const nextValues = {
      body,
      mood: formValues.mood,
      isGratitude: formValues.isGratitude,
      intentionLink: formValues.intentionLink.trim(),
    };

    if (editingId) {
      setEntries((current) =>
        current.map((entry) =>
          entry.id === editingId
            ? { ...entry, ...nextValues, updatedAt: new Date().toISOString() }
            : entry,
        ),
      );
      resetForm();
      return;
    }

    setEntries((current) => [
      {
        id: crypto.randomUUID(),
        ...nextValues,
        createdAt: new Date().toISOString(),
      },
      ...current,
    ]);
    resetForm();
  }

  function editEntry(entry: JournalEntry) {
    setEditingId(entry.id);
    setFormValues({
      body: entry.body,
      mood: entry.mood,
      isGratitude: entry.isGratitude,
      intentionLink: entry.intentionLink,
    });
  }

  function deleteEntry(id: string) {
    setEntries((current) => current.filter((entry) => entry.id !== id));

    if (editingId === id) {
      resetForm();
    }
  }

  return (
    <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_22rem]">
      <div className="space-y-6">
        <JournalFilters
          values={filters}
          onChange={setFilters}
          resultCount={filteredEntries.length}
        />
        <JournalTimeline
          entries={filteredEntries}
          hasEntries={entries.length > 0}
          onEdit={editEntry}
          onDelete={deleteEntry}
        />
      </div>

      <aside className="space-y-5 xl:sticky xl:top-10 xl:self-start">
        <JournalComposer
          values={formValues}
          isEditing={Boolean(editingId)}
          onChange={setFormValues}
          onSubmit={submitForm}
          onCancelEdit={resetForm}
        />

        <section className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur">
          <SectionLabel>Session summary</SectionLabel>
          <dl className="mt-5 grid grid-cols-2 gap-3 text-center text-sm">
            <div className="rounded-md border border-white/10 bg-black/20 p-3">
              <dt className="text-stone-400">Entries</dt>
              <dd className="mt-1 text-lg font-semibold text-white">
                {entries.length}
              </dd>
            </div>
            <div className="rounded-md border border-white/10 bg-black/20 p-3">
              <dt className="text-stone-400">Gratitude</dt>
              <dd className="mt-1 text-lg font-semibold text-white">
                {gratitudeCount}
              </dd>
            </div>
          </dl>
          <p className="mt-4 rounded-md border border-white/10 bg-black/20 p-4 text-sm leading-6 text-stone-300">
            This journal uses temporary browser state only. Entries are not
            saved, synced, analyzed, or sent anywhere.
          </p>
        </section>
      </aside>
    </section>
  );
}
