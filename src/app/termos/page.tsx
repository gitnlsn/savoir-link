import { PublicLayout } from "~/components/layout/public-layout";

export const metadata = {
  title: "Termos de uso",
  alternates: { canonical: "/termos" },
};

export default function TermsPage() {
  return (
    <PublicLayout>
      <article className="mx-auto w-full max-w-2xl px-4 py-12 md:px-8">
        <h1 className="text-headline-lg font-extrabold text-on-surface">
          Termos de uso
        </h1>
        <div className="mt-6 space-y-4 text-body-md text-on-surface-variant">
          <p>
            Ao utilizar o Savoir Link, você concorda com estes termos. O Savoir
            Link é um intermediário que conecta clientes que publicam pedidos de
            serviço a profissionais que desejam entrar em contato com eles.
          </p>
          <h2 className="text-headline-sm text-on-surface">Pagamentos</h2>
          <p>
            Clientes pagam uma taxa de publicação para tornar seu pedido visível.
            Profissionais compram créditos para desbloquear os contatos dos
            clientes. Todos os pagamentos são processados via Pagar.me.
          </p>
          <h2 className="text-headline-sm text-on-surface">Responsabilidade</h2>
          <p>
            O Savoir Link não participa da negociação ou execução dos serviços e
            não se responsabiliza pela qualidade dos serviços prestados. A
            contratação ocorre diretamente entre cliente e profissional.
          </p>
          <p className="text-body-sm">Última atualização: julho de 2026.</p>
        </div>
      </article>
    </PublicLayout>
  );
}
