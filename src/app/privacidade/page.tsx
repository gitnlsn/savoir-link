import { PublicLayout } from "~/components/layout/public-layout";

export const metadata = {
  title: "Política de privacidade",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <PublicLayout>
      <article className="mx-auto w-full max-w-2xl px-4 py-12 md:px-8">
        <h1 className="text-headline-lg font-extrabold text-on-surface">
          Política de privacidade
        </h1>
        <div className="mt-6 space-y-4 text-body-md text-on-surface-variant">
          <p>
            Levamos sua privacidade a sério. Esta política explica como tratamos
            seus dados pessoais em conformidade com a LGPD.
          </p>
          <h2 className="text-headline-sm text-on-surface">Dados coletados</h2>
          <p>
            Coletamos os dados de contato que você fornece ao publicar um pedido
            (nome, telefone, WhatsApp e e-mail). Esses dados só são revelados a um
            profissional após o desbloqueio pago do contato.
          </p>
          <h2 className="text-headline-sm text-on-surface">Uso dos dados</h2>
          <p>
            Utilizamos seus dados exclusivamente para operar o marketplace:
            publicar seu pedido, processar pagamentos e permitir que profissionais
            entrem em contato após o desbloqueio.
          </p>
          <p className="text-body-sm">Última atualização: julho de 2026.</p>
        </div>
      </article>
    </PublicLayout>
  );
}
