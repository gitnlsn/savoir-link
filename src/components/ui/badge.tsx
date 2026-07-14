import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg px-2 py-1 text-label-sm uppercase tracking-wider font-bold",
  {
    variants: {
      variant: {
        neutral: "bg-surface-container text-on-surface-variant",
        success: "bg-secondary-container text-on-secondary-container",
        primary: "bg-primary-container text-white",
        error: "bg-error-container text-on-error-container",
      },
    },
    defaultVariants: { variant: "neutral" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

/** A small tag/pill (e.g. category chips on lead cards). */
export function Chip({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-surface-container px-2 py-1 text-label-md text-on-surface-variant",
        className,
      )}
      {...props}
    />
  );
}
