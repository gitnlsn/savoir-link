import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

interface SectionSubtitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionSubtitle({
  children,
  className = "",
}: SectionSubtitleProps) {
  return (
    <p className={cn("text-body-lg text-on-surface-variant", className)}>
      {children}
    </p>
  );
}
