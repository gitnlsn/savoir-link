import { CheckCircle2, Mail } from "lucide-react";
import Link from "next/link";

import { PublicLayout } from "~/components/layout/public-layout";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export const metadata = { title: "Pedido recebido", robots: { index: false } };

export default async function OrderSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ pedido?: string }>;
}) {
  await searchParams;
  return (
    <PublicLayout>
      <div className="mx-auto w-full max-w-xl px-4 py-16 md:px-8">
        <Card className="text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-secondary" />
          <h1 className="mt-4 text-headline-md font-bold text-on-surface">
            Pagamento confirmado?
          </h1>
          <p className="mt-2 text-body-md text-on-surface-variant">
            Assim que o pagamento for aprovado, seu pedido ficará ativo e
            visível para os profissionais. Você receberá um e-mail com o link
            para gerenciar seu pedido.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-surface-container-low p-3 text-body-sm text-on-surface-variant">
            <Mail className="h-4 w-4" />
            Verifique sua caixa de entrada (e o spam).
          </div>
          <Link href="/" className="mt-6 inline-block">
            <Button variant="secondary">Voltar ao início</Button>
          </Link>
        </Card>
      </div>
    </PublicLayout>
  );
}
