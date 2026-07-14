import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "~/lib/utils";

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "text-label-md",
  md: "text-label-lg",
  lg: "text-body-md",
};

export function TextButton({
  children,
  className = "",
  size = "md",
  ...props
}: TextButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "font-semibold text-primary transition-colors hover:text-primary/80",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
