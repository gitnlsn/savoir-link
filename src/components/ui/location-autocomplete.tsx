"use client";

import { Loader2, MapPin, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

/** Precise address emitted on selection (mirrors the server's PlaceDetails). */
export interface ResolvedPlace {
  placeId: string;
  formattedAddress: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  neighborhood?: string;
}

interface Prediction {
  placeId: string;
  description: string;
  mainText: string;
  secondaryText?: string;
}

const DEBOUNCE_MS = 300;
const CACHE_TTL_MS = 5 * 60 * 1000;

// Module-level cache of query → predictions, shared across instances (old hook behavior).
const predictionCache = new Map<string, { at: number; value: Prediction[] }>();

/**
 * Self-contained Google Places address autocomplete (single-select). Follows the `MultiSelect`
 * pattern — plain input + absolute dropdown, outside-click close, no external UI deps. Suggestions
 * come from tRPC `location.autocomplete`; picking one resolves precise coordinates via
 * `location.resolve` and fires `onSelect`.
 */
export function LocationAutocomplete({
  value,
  onSelect,
  placeholder = "Digite um endereço…",
  bias,
  className,
}: {
  value?: string;
  onSelect: (place: ResolvedPlace) => void;
  placeholder?: string;
  bias?: { lat: number; lng: number; radiusKm: number };
  className?: string;
}) {
  const utils = api.useUtils();
  const [query, setQuery] = useState(value ?? "");
  const [open, setOpen] = useState(false);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(false);
  const [resolving, setResolving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep the input text in sync with the parent's controlled value — including clearing it back to
  // empty when the parent resets the selection (e.g. the "Limpar" button sets value to undefined).
  useEffect(() => {
    setQuery(value ?? "");
  }, [value]);

  const biasKey = useMemo(
    () => (bias ? `${bias.lat},${bias.lng},${bias.radiusKm}` : ""),
    [bias],
  );

  // Debounced fetch of suggestions.
  useEffect(() => {
    const q = query.trim();
    if (q.length < 2) {
      setPredictions([]);
      setLoading(false);
      return;
    }

    const cacheKey = `${biasKey}|${q.toLowerCase()}`;
    const cached = predictionCache.get(cacheKey);
    if (cached && Date.now() - cached.at < CACHE_TTL_MS) {
      setPredictions(cached.value);
      setLoading(false);
      return;
    }

    setLoading(true);
    let cancelled = false;
    const timer = setTimeout(async () => {
      try {
        const result = await utils.location.autocomplete.fetch({
          input: q,
          bias,
        });
        if (cancelled) return;
        predictionCache.set(cacheKey, { at: Date.now(), value: result });
        setPredictions(result);
      } catch {
        if (!cancelled) setPredictions([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, DEBOUNCE_MS);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [query, biasKey, bias, utils]);

  // Close on outside click.
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const pick = async (prediction: Prediction) => {
    setResolving(true);
    setOpen(false);
    setQuery(prediction.description);
    try {
      const resolved = await utils.location.resolve.fetch({
        placeId: prediction.placeId,
      });
      onSelect(resolved);
    } catch {
      // Leave the text as-is; the parent keeps its previous selection.
    } finally {
      setResolving(false);
    }
  };

  // Manual fallback: geocode the free text for addresses/places not surfaced as a prediction.
  const geocodeManual = async () => {
    const q = query.trim();
    if (q.length < 3) return;
    setResolving(true);
    setOpen(false);
    try {
      const resolved = await utils.location.geocode.fetch({ address: q });
      if (resolved) {
        setQuery(resolved.formattedAddress);
        onSelect(resolved);
      }
    } catch {
      // Keep the previous selection on failure.
    } finally {
      setResolving(false);
    }
  };

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-outline" />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest py-3 pl-10 pr-10 text-body-md text-on-surface placeholder:text-outline outline-none transition-all focus:ring-2 focus:ring-primary"
        />
        {(loading || resolving) && (
          <Loader2 className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 animate-spin text-outline" />
        )}
      </div>

      {open && query.trim().length >= 2 && (
        <div className="absolute z-20 mt-1 max-h-64 w-full overflow-auto rounded-lg border border-outline-variant bg-surface-container-lowest py-1 shadow-elev-2">
          {predictions.length === 0 && loading ? (
            <p className="px-4 py-2 text-body-sm text-on-surface-variant">
              Buscando…
            </p>
          ) : (
            <>
              {predictions.map((p) => (
                <button
                  key={p.placeId}
                  type="button"
                  onClick={() => pick(p)}
                  className="flex w-full items-start gap-2 px-4 py-2 text-left transition-colors hover:bg-surface-container-high"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0">
                    <span className="block truncate text-body-md text-on-surface">
                      {p.mainText}
                    </span>
                    {p.secondaryText && (
                      <span className="block truncate text-body-sm text-on-surface-variant">
                        {p.secondaryText}
                      </span>
                    )}
                  </span>
                </button>
              ))}
              {/* Manual fallback: geocode whatever the user typed (Brazil-restricted). */}
              {query.trim().length >= 3 && (
                <button
                  type="button"
                  onClick={geocodeManual}
                  className="flex w-full items-center gap-2 border-t border-outline-variant/30 px-4 py-2 text-left transition-colors hover:bg-surface-container-high"
                >
                  <Search className="h-4 w-4 shrink-0 text-outline" />
                  <span className="truncate text-body-sm text-on-surface-variant">
                    Buscar “{query.trim()}” no mapa
                  </span>
                </button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
