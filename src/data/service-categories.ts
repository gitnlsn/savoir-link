import {
  Camera,
  Droplets,
  GraduationCap,
  Hammer,
  Home,
  MonitorSmartphone,
  PaintRoller,
  PawPrint,
  Scissors,
  Sparkles,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

export interface ServiceCategory {
  /** Marketing label shown on the chip. */
  label: string;
  /** Real Category.slug used to filter orders — must exist in prisma/seed.ts. */
  slug: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

/**
 * Curated "popular categories" for the landing + the /recentes filter.
 * Each `slug` maps to a real category in the taxonomy (prisma/seed.ts) so the
 * filter always resolves. Labels stay marketing-friendly and may differ from
 * the canonical category name (e.g. "Pintura" → `pintor`).
 */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { label: "Reformas e Reparos", slug: "reformas-construcao", icon: Home },
  { label: "Eletricista", slug: "eletricista", icon: Zap },
  { label: "Encanador", slug: "encanador", icon: Droplets },
  { label: "Pintura", slug: "pintor", icon: PaintRoller },
  { label: "Diarista e Limpeza", slug: "diarista", icon: Sparkles },
  { label: "Assistência Técnica", slug: "suporte-tecnico", icon: MonitorSmartphone },
  { label: "Fotografia", slug: "fotografia-filmagem", icon: Camera },
  { label: "Aulas Particulares", slug: "aulas-particulares", icon: GraduationCap },
  { label: "Beleza e Estética", slug: "beleza-bem-estar", icon: Scissors },
  { label: "Marido de Aluguel", slug: "pequenos-reparos", icon: Hammer },
  { label: "Serviços para Pets", slug: "servicos-pets", icon: PawPrint },
  { label: "Mudanças", slug: "fretes-mudancas", icon: Truck },
];

const BY_SLUG = new Map(SERVICE_CATEGORIES.map((c) => [c.slug, c] as const));

/** Look up a curated category by its slug. */
export function findServiceCategory(slug: string | undefined) {
  if (!slug) return undefined;
  return BY_SLUG.get(slug);
}

/** Icon for any category slug — the curated icon when known, else a neutral default. */
export function iconForSlug(slug: string): ServiceCategory["icon"] {
  return BY_SLUG.get(slug)?.icon ?? Wrench;
}

/** Marketing label for a slug when curated, otherwise the category's own name. */
export function labelForSlug(slug: string, fallback: string): string {
  return BY_SLUG.get(slug)?.label ?? fallback;
}
