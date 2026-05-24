import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ui } from "@/components/uiStyles";

type PrimaryActionProps = {
  href: string;
  children: React.ReactNode;
};

export function PrimaryAction({ href, children }: PrimaryActionProps) {
  return (
    <Link
      href={href}
      className={ui.primaryButton}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
