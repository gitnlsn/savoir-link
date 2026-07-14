import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

interface HeadlineProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "text-headline-sm sm:text-headline-md",
  md: "text-headline-md sm:text-headline-lg",
  lg: "text-headline-lg sm:text-display",
  xl: "text-display",
};

export function Headline({
  children,
  className = "",
  size = "lg",
}: HeadlineProps) {
  return (
    <h1 className={cn("font-bold text-on-surface", sizeClasses[size], className)}>
      {children}
    </h1>
  );
}
