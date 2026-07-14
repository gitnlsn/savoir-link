import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

/** Public read access to taxonomy + geography, used by the order form and browse filters. */
export const catalogRouter = createTRPCRouter({
  categories: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.category.findMany({
      orderBy: { name: "asc" },
      select: { id: true, slug: true, name: true, icon: true },
    });
  }),
  locations: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.location.findMany({
      orderBy: [{ state: "asc" }, { city: "asc" }],
      select: { id: true, slug: true, city: true, state: true },
    });
  }),
});
