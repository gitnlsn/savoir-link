import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2 className={cn("mb-4 text-headline-lg text-on-surface", className)}>
      {children}
    </h2>
  );
}
