"use client";

import { useState } from "react";
import { Info, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";
import { ui } from "@/components/uiStyles";
import { clearSmaLocalData } from "@/lib/localStore";

const localMvpStatus = [
  ["App mode", "Local MVP"],
  ["Persistence", "Browser local storage only"],
  ["AI", "Not active"],
  ["Auth", "Not active"],
  ["Sync", "Not active"],
  ["Database", "Not active"],
  ["Data clearing", "Available in this browser"],
] as const;

export default function SettingsPage() {
  const [statusMessage, setStatusMessage] = useState("");

  function clearLocalData() {
    const confirmed = window.confirm(
      "Clear local SMA data from this browser? This cannot be undone.",
    );

    if (!confirmed) {
      return;
    }

    clearSmaLocalData();
    setStatusMessage("Local SMA data cleared from this browser.");
  }

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Settings"
        title="Local app data"
        description="Manage data saved by this MVP in this browser only. It is not synced, backed up, or connected to an account."
      />
      <section className="space-y-4">
        <SectionLabel>Local MVP status</SectionLabel>
        <div className={ui.surface}>
          <div className="flex items-start gap-3">
            <div className={ui.iconTileSmall}>
              <Info className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className={ui.eyebrow}>Current mode</p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                Local MVP status
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-stone-300">
                This app is running as a local browser-based MVP. Your saved
                data stays in this browser unless you clear it.
              </p>
            </div>
          </div>

          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            {localMvpStatus.map(([label, value]) => (
              <div key={label} className={`${ui.inset} p-4`}>
                <dt className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                  {label}
                </dt>
                <dd className="mt-2 text-sm font-semibold text-stone-100">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="space-y-4">
        <SectionLabel>Browser storage</SectionLabel>
        <div className={ui.surface}>
          <div>
            <p className={ui.eyebrow}>Local reset</p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Clear local SMA data
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-stone-300">
              This clears Daily Alignment, Intentions, and Journal data saved
              in this browser. It does not affect any backend or account because
              this MVP does not use one yet.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={clearLocalData}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-rose-200/30 bg-rose-200/10 px-4 py-3 text-sm font-semibold text-rose-100 transition hover:border-rose-100/50 hover:bg-rose-200/15 focus:outline-none focus:ring-2 focus:ring-rose-200/30"
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              Clear local SMA data
            </button>

            {statusMessage ? (
              <p className="text-sm text-stone-300" role="status">
                {statusMessage}
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
