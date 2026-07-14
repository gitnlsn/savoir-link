import { WalletClient } from "~/components/wallet/wallet-client";
import { CREDIT_PACKAGES } from "~/server/config/pricing";

export const metadata = { title: "Carteira" };

export default function WalletPage() {
  const packages = CREDIT_PACKAGES.map((p) => ({
    id: p.id,
    label: p.label,
    credits: p.credits,
    priceCents: p.priceCents,
  }));

  return (
    <div>
      <h1 className="mb-6 text-headline-lg font-extrabold text-on-surface">
        Carteira
      </h1>
      <WalletClient packages={packages} />
    </div>
  );
}
