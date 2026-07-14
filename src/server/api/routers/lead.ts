import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { logger } from "~/lib/logger";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { GetLeadDetailUseCase } from "~/server/use-cases/lead/get-lead-detail.use-case";
import { ListLeadsUseCase } from "~/server/use-cases/lead/list-leads.use-case";
import { ListMyUnlocksUseCase } from "~/server/use-cases/lead/list-my-unlocks.use-case";
import {
  UnlockContactUseCase,
  UnlockError,
} from "~/server/use-cases/lead/unlock-contact.use-case";

export const leadRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z.object({
        categorySlugs: z.array(z.string()).optional(),
        locationSlug: z.string().optional(),
        search: z.string().optional(),
        page: z.number().int().min(1).optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return new ListLeadsUseCase({ db: ctx.db }).execute({
        providerId: ctx.session.user.id,
        ...input,
      });
    }),

  detail: protectedProcedure
    .input(z.object({ publicId: z.string() }))
    .query(async ({ ctx, input }) => {
      return new GetLeadDetailUseCase({ db: ctx.db }).execute(
        ctx.session.user.id,
        input.publicId,
      );
    }),

  unlock: protectedProcedure
    .input(z.object({ publicId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        return await new UnlockContactUseCase({ db: ctx.db, logger }).execute(
          ctx.session.user.id,
          input.publicId,
        );
      } catch (e) {
        if (e instanceof UnlockError) {
          throw new TRPCError({
            code: e.code === "NOT_FOUND" ? "NOT_FOUND" : "BAD_REQUEST",
            message: e.message,
            cause: e,
          });
        }
        throw e;
      }
    }),

  myUnlocks: protectedProcedure.query(async ({ ctx }) => {
    return new ListMyUnlocksUseCase({ db: ctx.db }).execute(ctx.session.user.id);
  }),
});
