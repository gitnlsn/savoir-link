"use client";

import { forwardRef, useState } from "react";

import { formatCurrency } from "~/lib/currency";
import { cn } from "~/lib/utils";

export interface CurrencyInputProps {
  /** Current value in the major unit (reais). */
  value?: number;
  /** Called with the new value in reais whenever the amount changes. */
  onValueChange: (reais: number) => void;
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

/**
 * BRL currency field with a digit-fills-cents mask: typing 5 → "R$ 0,05", 500 → "R$ 5,00".
 * Internally tracks whole cents; reports the value in reais via `onValueChange`.
 */
export const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ value, onValueChange, className, placeholder, ...props }, ref) => {
    // Derive cents from the controlled reais value (rounded to avoid float drift).
    const [cents, setCents] = useState<number>(() =>
      value != null ? Math.round(value * 100) : 0,
    );

    const commit = (nextCents: number) => {
      const clamped = Math.max(0, nextCents);
      setCents(clamped);
      onValueChange(clamped / 100);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key >= "0" && e.key <= "9") {
        e.preventDefault();
        commit(cents * 10 + Number(e.key));
      } else if (e.key === "Backspace") {
        e.preventDefault();
        commit(Math.floor(cents / 10));
      }
      // Allow Tab / arrows / shortcuts to pass through.
    };

    const display = cents === 0 ? "" : formatCurrency(cents / 100);

    return (
      <input
        ref={ref}
        type="text"
        inputMode="numeric"
        value={display}
        placeholder={placeholder ?? formatCurrency(0)}
        onKeyDown={handleKeyDown}
        // onChange is required for a controlled input; the mask is driven by onKeyDown.
        onChange={() => undefined}
        className={cn(
          "w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-3 text-body-md text-on-surface placeholder:text-outline transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-primary disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
CurrencyInput.displayName = "CurrencyInput";
