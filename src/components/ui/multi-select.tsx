"use client";

import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "~/lib/utils";

export interface MultiSelectOption {
  value: string;
  label: string;
}

/** Strip accents + lowercase for accent-insensitive matching. */
function normalize(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

/**
 * Searchable multi-select. The user types to filter options and clicks to add; selected values
 * appear as removable chips. Fully self-contained (no external deps).
 */
export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Buscar…",
  max,
  emptyLabel = "Nenhuma opção encontrada.",
}: {
  options: MultiSelectOption[];
  selected: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
  max?: number;
  emptyLabel?: string;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedSet = useMemo(() => new Set(selected), [selected]);
  const labelByValue = useMemo(
    () => new Map(options.map((o) => [o.value, o.label])),
    [options],
  );

  const atMax = max !== undefined && selected.length >= max;

  const matches = useMemo(() => {
    const q = normalize(query.trim());
    return options
      .filter((o) => !selectedSet.has(o.value))
      .filter((o) => (q ? normalize(o.label).includes(q) : true))
      .slice(0, 8);
  }, [options, selectedSet, query]);

  // Close the dropdown when clicking outside.
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const add = (value: string) => {
    if (atMax || selectedSet.has(value)) return;
    onChange([...selected, value]);
    setQuery("");
  };

  const remove = (value: string) => {
    onChange(selected.filter((v) => v !== value));
  };

  return (
    <div ref={containerRef} className="relative">
      {selected.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-2">
          {selected.map((value) => (
            <span
              key={value}
              className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-label-md text-on-primary"
            >
              {labelByValue.get(value) ?? value}
              <button
                type="button"
                onClick={() => remove(value)}
                aria-label={`Remover ${labelByValue.get(value) ?? value}`}
                className="rounded-full p-0.5 hover:bg-on-primary/20"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-outline" />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          disabled={atMax}
          placeholder={
            atMax ? `Máximo de ${max} selecionadas` : placeholder
          }
          className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest py-3 pl-10 pr-4 text-body-md text-on-surface placeholder:text-outline outline-none transition-all focus:ring-2 focus:ring-primary disabled:opacity-50"
        />
      </div>

      {open && !atMax && (
        <div className="absolute z-20 mt-1 max-h-64 w-full overflow-auto rounded-lg border border-outline-variant bg-surface-container-lowest py-1 shadow-elev-2">
          {matches.length === 0 ? (
            <p className="px-4 py-2 text-body-sm text-on-surface-variant">
              {emptyLabel}
            </p>
          ) : (
            matches.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => add(o.value)}
                className="block w-full px-4 py-2 text-left text-body-md text-on-surface transition-colors hover:bg-surface-container-high"
              >
                {o.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
