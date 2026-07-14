import { cn } from "~/lib/utils";

interface BulletListProps {
  items: string[];
  variant?: "arrow" | "check" | "dash";
  className?: string;
}

const variantConfig = {
  arrow: { icon: "▸", color: "text-primary" },
  check: { icon: "✓", color: "text-secondary" },
  dash: { icon: "—", color: "text-on-surface-variant" },
};

export function BulletList({
  items,
  variant = "check",
  className = "",
}: BulletListProps) {
  const { icon, color } = variantConfig[variant];

  return (
    <ul
      className={cn(
        "space-y-3 text-on-surface-variant text-body-sm sm:text-body-md",
        className,
      )}
    >
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className={cn("mt-1", color)}>{icon}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
