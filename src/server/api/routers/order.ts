import { z } from "zod";

import { maskContactInfo } from "~/lib/contact-mask";
import { logger } from "~/lib/logger";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getPagarmeClient } from "~/server/integrations/pagarme/pagarme.client";
import { CreateOrderUseCase } from "~/server/use-cases/order/create-order.use-case";
import { GetPublicOrderUseCase } from "~/server/use-cases/order/get-public-order.use-case";
import { ManageOrderUseCase } from "~/server/use-cases/order/manage-order.use-case";

const createOrderInput = z.object({
  title: z
    .string()
    .min(5, "Título muito curto.")
    .max(120)
    .transform((v) => maskContactInfo(v).text),
  description: z
    .string()
    .min(20, "Descreva melhor o que precisa.")
    .max(2000)
    .transform((v) => maskContactInfo(v).text),
  budget: z.number().positive("Informe um orçamento válido."),
  categoryIds: z
    .array(z.string().min(1))
    .min(1, "Escolha ao menos uma categoria.")
    .max(5, "Escolha no máximo 5 categorias."),
  // Coarse city FK (fallback dropdown). Optional when a precise `place` is provided instead.
  locationId: z.string().min(1).optional(),
  // Precise address from Google Places (autocomplete mode). The server upserts the coarse city
  // from city/state so the required Location FK is always satisfied.
  place: z
    .object({
      placeId: z.string().min(1),
      formattedAddress: z.string().min(1),
      latitude: z.number(),
      longitude: z.number(),
      city: z.string().min(1),
      state: z.string().min(1),
      neighborhood: z.string().optional(),
    })
    .optional(),
  contactName: z.string().min(2).max(120),
  contactPhone: z.string().min(8).max(20),
  contactWhatsapp: z.string().max(20).optional(),
  contactEmail: z.string().email("E-mail inválido."),
  durationTierId: z.string().min(1),
}).refine((v) => Boolean(v.locationId) || Boolean(v.place), {
  message: "Informe uma localização.",
  path: ["locationId"],
});

export const orderRouter = createTRPCRouter({
  create: publicProcedure
    .input(createOrderInput)
    .mutation(async ({ ctx, input }) => {
      const useCase = new CreateOrderUseCase({
        db: ctx.db,
        logger,
        pagarme: getPagarmeClient(),
      });
      return useCase.execute(input);
    }),

  getPublic: publicProcedure
    .input(z.object({ publicId: z.string() }))
    .query(async ({ ctx, input }) => {
      return new GetPublicOrderUseCase({ db: ctx.db }).byPublicId(input.publicId);
    }),

  manageGet: publicProcedure
    .input(z.object({ token: z.string() }))
    .query(async ({ ctx, input }) => {
      return new ManageOrderUseCase({
        db: ctx.db,
        logger,
        pagarme: getPagarmeClient(),
      }).get(input.token);
    }),

  manageClose: publicProcedure
    .input(z.object({ token: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return new ManageOrderUseCase({
        db: ctx.db,
        logger,
        pagarme: getPagarmeClient(),
      }).close(input.token);
    }),

  manageRenew: publicProcedure
    .input(z.object({ token: z.string(), durationTierId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return new ManageOrderUseCase({
        db: ctx.db,
        logger,
        pagarme: getPagarmeClient(),
      }).renew(input.token, input.durationTierId);
    }),
});
