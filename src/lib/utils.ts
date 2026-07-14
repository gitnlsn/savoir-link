import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/*
 * Teach tailwind-merge our custom type scale (from globals.css `@theme`). Without this it can't
 * tell a custom `text-<size>` (e.g. text-body-md) apart from a `text-<color>` (e.g. text-on-primary),
 * treats them as conflicting `text-*` classes, and drops one — which silently strips button/badge
 * text colors. Registering the sizes as the `font-size` group keeps color + size classes coexisting.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display",
            "headline-lg",
            "headline-md",
            "headline-sm",
            "body-lg",
            "body-md",
            "body-sm",
            "label-lg",
            "label-md",
            "label-sm",
          ],
        },
      ],
    },
  },
});

/** Merge conditional Tailwind class names, de-duplicating conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Turn arbitrary text into a URL-safe slug (accents stripped, lowercased). */
export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}
