import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <section className={cn("relative", className)}>
      <div className="mx-auto w-full max-w-container px-4 py-12 md:px-8">
        {children}
      </div>
    </section>
  );
}
