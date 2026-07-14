import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/20",
        secondary:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-on-primary",
        ghost: "text-on-surface-variant hover:bg-surface-container-high hover:text-primary",
        success: "bg-secondary text-on-secondary hover:opacity-90",
        danger: "bg-error text-on-error hover:opacity-90",
      },
      size: {
        sm: "h-9 px-4 text-label-md",
        md: "h-11 px-6 text-label-lg",
        lg: "h-14 px-8 text-body-md",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { buttonVariants };
