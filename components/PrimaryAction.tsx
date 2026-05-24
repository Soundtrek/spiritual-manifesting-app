import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PrimaryActionProps = {
  href: string;
  children: React.ReactNode;
};

export function PrimaryAction({ href, children }: PrimaryActionProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-md bg-teal-100 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-slate-950"
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
