"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

export function BlogSearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") ?? "",
  );

  const handleSearch = (value: string) => {
    setSearchQuery(value);

    startTransition(() => {
      const params = new URLSearchParams(searchParams);

      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }

      router.push(`/blog?${params.toString()}`);
    });
  };

  return (
    <div className="mb-8">
      <div className="relative mx-auto max-w-2xl">
        <input
          type="text"
          placeholder="Buscar artigos..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-3 text-on-surface placeholder-on-surface-variant transition-colors focus:border-primary focus:outline-none"
          disabled={isPending}
        />
        {isPending && (
          <div className="-translate-y-1/2 absolute top-1/2 right-4">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        )}
      </div>
    </div>
  );
}
