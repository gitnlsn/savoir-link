import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-lowest">
      <div className="mx-auto grid w-full max-w-container grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
        <div className="col-span-2 md:col-span-1">
          <span className="text-headline-sm font-extrabold text-primary">
            Savoir Link
          </span>
          <p className="mt-2 text-body-sm text-on-surface-variant">
            Conectando clientes e profissionais de serviços em todo o Brasil.
          </p>
        </div>
        <FooterCol
          title="Clientes"
          links={[
            ["Publicar pedido", "/publicar"],
            ["Como funciona", "/como-funciona"],
            ["Categorias", "/categorias"],
          ]}
        />
        <FooterCol
          title="Profissionais"
          links={[
            ["Encontrar clientes", "/app/leads"],
            ["Preços e créditos", "/precos"],
          ]}
        />
        <FooterCol
          title="Institucional"
          links={[
            ["Termos de uso", "/termos"],
            ["Privacidade", "/privacidade"],
          ]}
        />
      </div>
      <div className="border-t border-outline-variant/30 py-6 text-center text-label-md text-on-surface-variant">
        © {new Date().getFullYear()} Savoir Link. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h4 className="mb-3 text-label-lg font-bold text-on-surface">{title}</h4>
      <ul className="space-y-2">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link
              href={href}
              className="text-body-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
