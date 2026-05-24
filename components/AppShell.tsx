"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";

function navClass(isActive: boolean) {
  return [
    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition",
    isActive
      ? "bg-white/12 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
      : "text-stone-300 hover:bg-white/8 hover:text-white",
  ].join(" ");
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-white/10 bg-black/20 px-5 py-6 backdrop-blur-xl lg:block">
        <Link href="/" className="block rounded-md px-2 py-1">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-teal-200">
            SMA
          </div>
          <div className="mt-2 text-xl font-semibold text-white">
            Spiritual Manifesting App
          </div>
        </Link>

        <nav className="mt-10 space-y-1" aria-label="Primary navigation">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link key={item.href} href={item.href} className={navClass(isActive)}>
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#07080f]/82 px-4 py-3 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="min-w-0">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-teal-200">
              SMA
            </div>
            <div className="truncate text-sm font-semibold text-white">
              Spiritual Manifesting App
            </div>
          </Link>
        </div>
        <nav
          className="mt-3 flex gap-2 overflow-x-auto pb-1"
          aria-label="Mobile navigation"
        >
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "flex min-w-12 items-center justify-center rounded-md border px-3 py-2",
                  isActive
                    ? "border-teal-200/40 bg-teal-200/12 text-teal-100"
                    : "border-white/10 bg-white/5 text-stone-300",
                ].join(" ")}
                aria-label={item.label}
                title={item.label}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="px-4 py-8 sm:px-6 lg:ml-72 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
