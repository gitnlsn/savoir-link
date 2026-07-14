import { toNumber } from "~/lib/decimal";
import { filterAndSortByRadius, getBoundingBox } from "~/lib/geo";
import { OrderStatus, type Prisma, type PrismaClient } from "~/server/db-types";

/** Upper bound on bbox rows fetched before in-memory distance filtering (radius mode). */
const RADIUS_FETCH_CAP = 500;

export interface ListLeadsInput {
  /** When omitted (public browse), `alreadyUnlocked` is always false. */
  providerId?: string;
  categorySlugs?: string[];
  locationSlug?: string;
  /** Precise radius search: center point + radius in km. Takes precedence over `locationSlug`. */
  center?: { lat: number; lng: number };
  radiusKm?: number;
  search?: string;
  page?: number;
  pageSize?: number;
}

export interface LeadCard {
  publicId: string;
  title: string;
  description: string;
  budget: number;
  categories: { name: string; slug: string }[];
  location: { city: string; state: string };
  /** Distance from the search center, in km — present only in radius mode. */
  distanceKm?: number;
  createdAt: Date;
  expiresAt: Date | null;
  unlockCount: number;
  alreadyUnlocked: boolean;
}

/** Row shape selected from Prisma (before mapping to LeadCard). */
interface OrderRow {
  publicId: string;
  title: string;
  description: string;
  budget: Prisma.Decimal;
  latitude: number | null;
  longitude: number | null;
  createdAt: Date;
  expiresAt: Date | null;
  unlockCount: number;
  categories: { name: string; slug: string }[];
  location: { city: string; state: string };
  unlocks?: { id: string }[];
}

/**
 * Provider-facing browse of ACTIVE, non-expired leads. Contact fields are never selected; each
 * card is annotated with whether the current provider already unlocked it. Supports either a coarse
 * `locationSlug` filter or a precise `center` + `radiusKm` radius search.
 */
export class ListLeadsUseCase {
  constructor(private deps: { db: PrismaClient }) {}

  async execute(input: ListLeadsInput): Promise<{ leads: LeadCard[]; total: number }> {
    const page = Math.max(1, input.page ?? 1);
    const pageSize = Math.min(50, input.pageSize ?? 12);

    const useRadius = Boolean(input.center && input.radiusKm);

    const where = this.buildWhere(input, useRadius);
    const select = this.buildSelect(input.providerId);

    if (useRadius) {
      return this.executeRadius(input, where, select, page, pageSize);
    }

    const { db } = this.deps;
    const [orders, total] = await Promise.all([
      db.order.findMany({
        where,
        orderBy: { publishedAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
        select,
      }),
      db.order.count({ where }),
    ]);

    return {
      leads: (orders as unknown as OrderRow[]).map((o) => this.toCard(o)),
      total,
    };
  }

  /** Radius mode: bbox-prefilter in the DB, then exact Haversine filter + sort + in-memory paginate. */
  private async executeRadius(
    input: ListLeadsInput,
    where: Record<string, unknown>,
    select: Record<string, unknown>,
    page: number,
    pageSize: number,
  ): Promise<{ leads: LeadCard[]; total: number }> {
    const { db } = this.deps;
    const center = input.center!;
    const radiusKm = input.radiusKm!;
    const box = getBoundingBox(center.lat, center.lng, radiusKm);

    const rows = (await db.order.findMany({
      where: {
        ...where,
        latitude: { gte: box.minLat, lte: box.maxLat, not: null },
        longitude: { gte: box.minLng, lte: box.maxLng, not: null },
      },
      orderBy: { publishedAt: "desc" },
      take: RADIUS_FETCH_CAP,
      select,
    })) as unknown as OrderRow[];

    // Exact filter + ascending-distance sort; drops bbox-corner rows outside the true circle.
    const within = filterAndSortByRadius(rows, center, radiusKm, (r) =>
      r.latitude != null && r.longitude != null
        ? { lat: r.latitude, lng: r.longitude }
        : null,
    );

    const total = within.length;
    const paged = within.slice((page - 1) * pageSize, page * pageSize);
    return {
      leads: paged.map((r) => this.toCard(r, r.distanceKm)),
      total,
    };
  }

  private buildWhere(input: ListLeadsInput, useRadius: boolean) {
    return {
      status: OrderStatus.ACTIVE,
      expiresAt: { gt: new Date() },
      ...(input.categorySlugs?.length
        ? { categories: { some: { slug: { in: input.categorySlugs } } } }
        : {}),
      // In radius mode the point filter supersedes the coarse city slug.
      ...(!useRadius && input.locationSlug
        ? { location: { slug: input.locationSlug } }
        : {}),
      ...(input.search
        ? {
            OR: [
              { title: { contains: input.search, mode: "insensitive" as const } },
              { description: { contains: input.search, mode: "insensitive" as const } },
            ],
          }
        : {}),
    };
  }

  private buildSelect(providerId?: string) {
    return {
      publicId: true,
      title: true,
      description: true,
      budget: true,
      latitude: true,
      longitude: true,
      createdAt: true,
      expiresAt: true,
      unlockCount: true,
      categories: { select: { name: true, slug: true } },
      location: { select: { city: true, state: true } },
      unlocks: providerId
        ? { where: { providerId }, select: { id: true }, take: 1 }
        : false,
    };
  }

  private toCard(o: OrderRow, distanceKm?: number): LeadCard {
    return {
      publicId: o.publicId,
      title: o.title,
      description: o.description,
      budget: toNumber(o.budget),
      categories: o.categories,
      location: o.location,
      ...(distanceKm != null ? { distanceKm } : {}),
      createdAt: o.createdAt,
      expiresAt: o.expiresAt,
      unlockCount: o.unlockCount,
      alreadyUnlocked: Array.isArray(o.unlocks) && o.unlocks.length > 0,
    };
  }
}
