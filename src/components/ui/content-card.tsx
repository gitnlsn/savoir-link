import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "~/lib/utils";

interface ContentCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "bordered" | "accent";
  accentPosition?: "left" | "top" | "corners";
  className?: string;
}

const variantClasses = {
  default: "border border-outline-variant bg-surface-container-lowest",
  bordered: "border border-outline-variant bg-surface-container-low",
  accent: "border border-outline-variant bg-surface-container-lowest",
};

const accentClasses = {
  left: "border-l-4 border-l-primary",
  top: "border-t-4 border-t-primary",
  corners: "ring-1 ring-primary/20",
};

export function ContentCard({
  children,
  variant = "default",
  accentPosition = "left",
  className = "",
  ...props
}: ContentCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 sm:p-8 md:p-10",
        variantClasses[variant],
        variant === "accent" && accentClasses[accentPosition],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
