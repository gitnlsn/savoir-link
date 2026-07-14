import { z } from "zod";

import { logger } from "~/lib/logger";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { getPagarmeClient } from "~/server/integrations/pagarme/pagarme.client";
import { GetWalletUseCase } from "~/server/use-cases/wallet/get-wallet.use-case";
import { TopupCreditsUseCase } from "~/server/use-cases/wallet/topup-credits.use-case";

export const walletRouter = createTRPCRouter({
  get: protectedProcedure.query(async ({ ctx }) => {
    return new GetWalletUseCase({ db: ctx.db }).execute(ctx.session.user.id);
  }),

  topup: protectedProcedure
    .input(z.object({ packageId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return new TopupCreditsUseCase({
        db: ctx.db,
        logger,
        pagarme: getPagarmeClient(),
      }).execute({ userId: ctx.session.user.id, packageId: input.packageId });
    }),
});
