import Link from "next/link";

import {
  iconForSlug,
  labelForSlug,
  SERVICE_CATEGORIES,
  type ServiceCategory,
} from "~/data/service-categories";
import { db } from "~/server/db";
import {
  ListTopCategoriesUseCase,
  type TopCategory,
} from "~/server/use-cases/category/list-top-categories.use-case";

const MAX_CHIPS = 12;

/**
 * "Categorias populares" — real categories ranked by live demand, back-filled
 * with the curated list so the section stays full before the marketplace has
 * traction. Resilient: any query failure just falls back to the curated list.
 */
export async function Categories() {
  let top: TopCategory[] = [];
  try {
    top = await new ListTopCategoriesUseCase({ db }).execute({ limit: MAX_CHIPS });
  } catch {
    top = [];
  }

  const chips = buildChips(top);
  const dataDriven = top.length > 0;

  return (
    <section className="mx-auto w-full max-w-container px-4 py-16 md:px-8">
      <h2 className="mb-8 text-headline-lg font-extrabold text-on-surface">
        {dataDriven ? "Categorias em alta" : "Categorias populares"}
      </h2>
      <div className="flex flex-wrap gap-3">
        {chips.map(({ icon: Icon, label, slug }) => (
          <Link
            key={slug}
            href={`/recentes?categoria=${slug}`}
            className="group flex items-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container-lowest px-6 py-3 transition-all hover:border-primary hover:text-primary"
          >
            <Icon className="h-5 w-5" />
            <span className="text-label-lg font-semibold">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/** Real top categories first, then curated fallbacks (deduped), capped at MAX_CHIPS. */
function buildChips(top: TopCategory[]): ServiceCategory[] {
  const chips: ServiceCategory[] = [];
  const seen = new Set<string>();

  for (const c of top) {
    chips.push({
      slug: c.slug,
      label: labelForSlug(c.slug, c.name),
      icon: iconForSlug(c.slug),
    });
    seen.add(c.slug);
  }

  for (const c of SERVICE_CATEGORIES) {
    if (chips.length >= MAX_CHIPS) break;
    if (seen.has(c.slug)) continue;
    chips.push(c);
    seen.add(c.slug);
  }

  return chips;
}
