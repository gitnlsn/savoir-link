"use client";

import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { cn } from "~/lib/utils";

interface BlogCategoryFilterProps {
  categories: string[];
}

export function BlogCategoryFilter({ categories }: BlogCategoryFilterProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [isOpen, setIsOpen] = useState(false);

  // Preserve search query when switching categories
  const buildCategoryUrl = (category?: string) => {
    const params = new URLSearchParams(searchParams);

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    const queryString = params.toString();
    return queryString ? `/blog?${queryString}` : "/blog";
  };

  const pill = (active: boolean) =>
    cn(
      "w-full rounded-lg px-4 py-2 text-left font-semibold transition-colors md:w-auto md:text-center",
      active
        ? "bg-primary text-on-primary"
        : "border border-outline-variant bg-transparent text-on-surface-variant hover:border-primary hover:text-primary",
    );

  return (
    <div className="mb-12">
      {/* Mobile: Collapsible Filter */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="mb-4 flex w-full items-center justify-between rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-3 font-semibold text-on-surface transition-colors hover:border-primary"
        >
          <span>
            {categoryParam
              ? `Categoria: ${categoryParam}`
              : "Todas as Categorias"}
          </span>
          <ChevronDownIcon
            className={cn(
              "h-5 w-5 transition-transform",
              isOpen && "rotate-180",
            )}
          />
        </button>

        {isOpen && (
          <div className="mb-4 space-y-2 rounded-lg border border-outline-variant bg-surface-container-lowest p-2">
            <Link href={buildCategoryUrl()} onClick={() => setIsOpen(false)}>
              <button type="button" className={pill(!categoryParam)}>
                Todos
              </button>
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={buildCategoryUrl(category)}
                onClick={() => setIsOpen(false)}
              >
                <button
                  type="button"
                  className={pill(categoryParam === category)}
                >
                  {category}
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Desktop: Horizontal Filter */}
      <div className="hidden flex-wrap justify-center gap-3 md:flex">
        <Link href={buildCategoryUrl()}>
          <button type="button" className={pill(!categoryParam)}>
            Todos
          </button>
        </Link>
        {categories.map((category) => (
          <Link key={category} href={buildCategoryUrl(category)}>
            <button type="button" className={pill(categoryParam === category)}>
              {category}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
