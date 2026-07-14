import { PrismaClient } from "../generated/prisma";

const db = new PrismaClient();

const CATEGORIES: { slug: string; name: string; icon: string }[] = [
  { slug: "encanamento", name: "Encanamento", icon: "wrench" },
  { slug: "eletrica", name: "Elétrica", icon: "zap" },
  { slug: "limpeza", name: "Limpeza", icon: "sparkles" },
  { slug: "mudancas", name: "Mudanças", icon: "truck" },
  { slug: "jardinagem", name: "Jardinagem", icon: "flower-2" },
  { slug: "reformas", name: "Reformas", icon: "hammer" },
  { slug: "climatizacao", name: "Climatização (Ar/Refrigeração)", icon: "wind" },
  { slug: "tecnologia", name: "Tecnologia e Suporte", icon: "monitor" },
  { slug: "design-criacao", name: "Design e Criação", icon: "palette" },
  { slug: "marcenaria", name: "Marcenaria", icon: "ruler" },
];

const LOCATIONS: {
  slug: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}[] = [
  { slug: "sao-paulo-sp", city: "São Paulo", state: "SP", latitude: -23.5505, longitude: -46.6333 },
  { slug: "rio-de-janeiro-rj", city: "Rio de Janeiro", state: "RJ", latitude: -22.9068, longitude: -43.1729 },
  { slug: "belo-horizonte-mg", city: "Belo Horizonte", state: "MG", latitude: -19.9167, longitude: -43.9345 },
  { slug: "curitiba-pr", city: "Curitiba", state: "PR", latitude: -25.4284, longitude: -49.2733 },
  { slug: "porto-alegre-rs", city: "Porto Alegre", state: "RS", latitude: -30.0346, longitude: -51.2177 },
];

async function main() {
  for (const c of CATEGORIES) {
    await db.category.upsert({
      where: { slug: c.slug },
      create: c,
      update: { name: c.name, icon: c.icon },
    });
  }
  for (const l of LOCATIONS) {
    await db.location.upsert({
      where: { slug: l.slug },
      create: l,
      update: { city: l.city, state: l.state },
    });
  }
  console.log(
    `Seeded ${CATEGORIES.length} categories and ${LOCATIONS.length} locations.`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
