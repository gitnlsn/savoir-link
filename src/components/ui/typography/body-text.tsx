import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

interface BodyTextProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "base" | "lg";
}

const sizeClasses = {
  sm: "text-body-sm sm:text-body-md",
  base: "text-body-md sm:text-body-lg",
  lg: "text-body-lg",
};

export function BodyText({
  children,
  className = "",
  size = "base",
}: BodyTextProps) {
  return (
    <p className={cn("text-on-surface leading-relaxed", sizeClasses[size], className)}>
      {children}
    </p>
  );
}
