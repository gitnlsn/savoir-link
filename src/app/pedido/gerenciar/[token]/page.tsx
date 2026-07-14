import { PublicLayout } from "~/components/layout/public-layout";
import { ManageOrderClient } from "~/components/order/manage-order-client";
import { DURATION_TIERS } from "~/server/config/pricing";

export const metadata = {
  title: "Gerenciar pedido",
  robots: { index: false },
};

export default async function ManageOrderPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const tiers = DURATION_TIERS.map((t) => ({
    id: t.id,
    label: t.label,
    priceCents: t.priceCents,
  }));

  return (
    <PublicLayout>
      <div className="mx-auto w-full max-w-2xl px-4 py-12 md:px-8">
        <ManageOrderClient token={token} tiers={tiers} />
      </div>
    </PublicLayout>
  );
}
