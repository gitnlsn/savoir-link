import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "~/lib/utils";

interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-4 py-2 text-label-md",
  md: "px-6 py-3 text-label-lg",
  lg: "px-8 py-4 text-body-md",
};

export function OutlineButton({
  children,
  className = "",
  size = "md",
  ...props
}: OutlineButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-transparent font-semibold text-primary transition-all hover:bg-primary hover:text-on-primary active:scale-[0.98]",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
