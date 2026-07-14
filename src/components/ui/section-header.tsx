import type { ReactNode } from "react";
import { cn } from "~/lib/utils";
import { SectionSubtitle, SectionTitle } from "./typography";

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  alignment?: "left" | "center";
  showUnderline?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  alignment = "center",
  showUnderline = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 sm:mb-12",
        alignment === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      <SectionTitle>{title}</SectionTitle>
      {subtitle && <SectionSubtitle className="mt-4">{subtitle}</SectionSubtitle>}
      {showUnderline && (
        <div
          className={cn(
            "mt-6 h-1 w-16 rounded-full bg-primary",
            alignment === "center" && "mx-auto",
          )}
        />
      )}
    </div>
  );
}
