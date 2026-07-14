import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "~/lib/utils";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-4 py-2 text-label-md",
  md: "px-6 py-3 text-label-lg",
  lg: "px-8 py-4 text-body-md",
};

export function PrimaryButton({
  children,
  className = "",
  size = "md",
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg bg-primary font-semibold text-on-primary transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
