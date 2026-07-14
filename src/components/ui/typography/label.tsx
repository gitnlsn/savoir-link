import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

interface LabelProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "base";
}

const sizeClasses = {
  sm: "text-label-md",
  base: "text-label-lg",
};

export function Label({ children, className = "", size = "base" }: LabelProps) {
  return (
    <span
      className={cn(
        "font-bold text-on-surface-variant uppercase tracking-wide",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
