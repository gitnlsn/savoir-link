import { catalogRouter } from "~/server/api/routers/catalog";
import { healthRouter } from "~/server/api/routers/health";
import { leadRouter } from "~/server/api/routers/lead";
import { orderRouter } from "~/server/api/routers/order";
import { walletRouter } from "~/server/api/routers/wallet";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  health: healthRouter,
  catalog: catalogRouter,
  order: orderRouter,
  wallet: walletRouter,
  lead: leadRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.health.ping();
 */
export const createCaller = createCallerFactory(appRouter);
