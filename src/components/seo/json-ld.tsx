const SITE_URL = process.env.APP_URL ?? "http://localhost:3000";
const SITE_NAME = "Savoir Link";

/** Renders a JSON-LD <script> block. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Marketplace que conecta clientes e profissionais de serviços no Brasil.",
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "pt-BR",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** A public order rendered as a service Demand/Offer-style listing. */
export function orderSchema(order: {
  title: string;
  description: string;
  budget: number;
  publicId: string;
  category: string;
  city: string;
  state: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: order.title,
    description: order.description,
    serviceType: order.category,
    areaServed: { "@type": "City", name: `${order.city}, ${order.state}` },
    url: `${SITE_URL}/pedido/${order.publicId}`,
    offers: {
      "@type": "Offer",
      price: order.budget,
      priceCurrency: "BRL",
    },
  };
}
