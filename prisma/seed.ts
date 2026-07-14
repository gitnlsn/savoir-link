import { PrismaClient } from "../generated/prisma";

const db = new PrismaClient();

type SeedCategory = {
  slug: string;
  name: string;
  icon?: string;
  parentSlug: string | null;
};

// Category taxonomy ported from the original Savoir Link seed
// (docs/savoir-link-old/prisma/seed-unified.ts): 15 main categories + subcategories.
const CATEGORIES: SeedCategory[] = [
  // 1. Serviços Domésticos
  { slug: "servicos-domesticos", name: "Serviços Domésticos", icon: "🏡", parentSlug: null },
  { slug: "diarista", name: "Diarista", parentSlug: "servicos-domesticos" },
  { slug: "montador-moveis", name: "Montador de Móveis", parentSlug: "servicos-domesticos" },
  { slug: "pequenos-reparos", name: "Pequenos Reparos", parentSlug: "servicos-domesticos" },
  { slug: "eletricista", name: "Eletricista", parentSlug: "servicos-domesticos" },
  { slug: "encanador", name: "Encanador", parentSlug: "servicos-domesticos" },

  // 2. Suporte Técnico
  { slug: "suporte-tecnico", name: "Suporte Técnico", icon: "💻", parentSlug: null },
  { slug: "manutencao-computadores", name: "Manutenção de Computadores", parentSlug: "suporte-tecnico" },
  { slug: "suporte-celulares", name: "Suporte para Celulares", parentSlug: "suporte-tecnico" },
  { slug: "configuracao-redes", name: "Configuração de Redes", parentSlug: "suporte-tecnico" },
  { slug: "remocao-virus", name: "Remoção de Vírus", parentSlug: "suporte-tecnico" },

  // 3. Eventos
  { slug: "eventos", name: "Eventos", icon: "🎉", parentSlug: null },
  { slug: "fotografia-filmagem", name: "Fotografia e Filmagem", parentSlug: "eventos" },
  { slug: "dj-som", name: "DJ e Som", parentSlug: "eventos" },
  { slug: "buffet-churrasqueiro", name: "Buffet e Churrasqueiro", parentSlug: "eventos" },
  { slug: "decoracao-festas", name: "Decoração de Festas", parentSlug: "eventos" },
  { slug: "bartender", name: "Bartender", parentSlug: "eventos" },

  // 4. Aulas Particulares
  { slug: "aulas-particulares", name: "Aulas Particulares", icon: "📚", parentSlug: null },
  { slug: "reforco-escolar", name: "Reforço Escolar", parentSlug: "aulas-particulares" },
  { slug: "aulas-idiomas", name: "Aulas de Idiomas", parentSlug: "aulas-particulares" },
  { slug: "aulas-musica", name: "Aulas de Música", parentSlug: "aulas-particulares" },
  { slug: "personal-trainer", name: "Personal Trainer", parentSlug: "aulas-particulares" },

  // 5. Beleza e Bem-Estar
  { slug: "beleza-bem-estar", name: "Beleza e Bem-Estar", icon: "💅", parentSlug: null },
  { slug: "manicure-pedicure", name: "Manicure e Pedicure", parentSlug: "beleza-bem-estar" },
  { slug: "cabeleireiro", name: "Cabeleireiro", parentSlug: "beleza-bem-estar" },
  { slug: "maquiagem", name: "Maquiagem", parentSlug: "beleza-bem-estar" },
  { slug: "massagista", name: "Massagista", parentSlug: "beleza-bem-estar" },

  // 6. Reformas e Construção
  { slug: "reformas-construcao", name: "Reformas e Construção", icon: "🔨", parentSlug: null },
  { slug: "pedreiro", name: "Pedreiro", parentSlug: "reformas-construcao" },
  { slug: "pintor", name: "Pintor", parentSlug: "reformas-construcao" },
  { slug: "gesseiro", name: "Gesseiro", parentSlug: "reformas-construcao" },
  { slug: "arquiteto", name: "Arquiteto", parentSlug: "reformas-construcao" },

  // 7. Design e Multimídia
  { slug: "design-multimidia", name: "Design e Multimídia", icon: "🎨", parentSlug: null },
  { slug: "design-grafico", name: "Design Gráfico", parentSlug: "design-multimidia" },
  { slug: "edicao-videos", name: "Edição de Vídeos", parentSlug: "design-multimidia" },
  { slug: "social-media", name: "Social Media", parentSlug: "design-multimidia" },
  { slug: "ui-ux-design", name: "UI/UX Design", parentSlug: "design-multimidia" },

  // 8. Redação e Tradução
  { slug: "redacao-traducao", name: "Redação e Tradução", icon: "✍️", parentSlug: null },
  { slug: "traducao", name: "Tradução", parentSlug: "redacao-traducao" },
  { slug: "producao-conteudo", name: "Produção de Conteúdo", parentSlug: "redacao-traducao" },
  { slug: "revisao-textos", name: "Revisão de Textos", parentSlug: "redacao-traducao" },

  // 9. Serviços Automotivos
  { slug: "servicos-automotivos", name: "Serviços Automotivos", icon: "🚗", parentSlug: null },
  { slug: "mecanico", name: "Mecânico", parentSlug: "servicos-automotivos" },
  { slug: "lava-rapido", name: "Lava Rápido", parentSlug: "servicos-automotivos" },
  { slug: "borracheiro", name: "Borracheiro", parentSlug: "servicos-automotivos" },
  { slug: "eletrica-automotiva", name: "Elétrica Automotiva", parentSlug: "servicos-automotivos" },

  // 10. Moda e Costura
  { slug: "moda-costura", name: "Moda e Costura", icon: "👗", parentSlug: null },
  { slug: "costureira", name: "Costureira", parentSlug: "moda-costura" },
  { slug: "ajustes-roupas", name: "Ajustes de Roupas", parentSlug: "moda-costura" },
  { slug: "personal-stylist", name: "Personal Stylist", parentSlug: "moda-costura" },

  // 11. Serviços para Pets
  { slug: "servicos-pets", name: "Serviços para Pets", icon: "🐾", parentSlug: null },
  { slug: "dog-walker", name: "Dog Walker", parentSlug: "servicos-pets" },
  { slug: "pet-sitter", name: "Pet Sitter", parentSlug: "servicos-pets" },
  { slug: "banho-tosa", name: "Banho e Tosa", parentSlug: "servicos-pets" },

  // 12. Negócios e Consultoria
  { slug: "negocios-consultoria", name: "Negócios e Consultoria", icon: "📈", parentSlug: null },
  { slug: "consultoria-financeira", name: "Consultoria Financeira", parentSlug: "negocios-consultoria" },
  { slug: "consultoria-marketing", name: "Consultoria de Marketing", parentSlug: "negocios-consultoria" },
  { slug: "servicos-contabeis", name: "Serviços Contábeis", parentSlug: "negocios-consultoria" },

  // 13. Fretes e Mudanças
  { slug: "fretes-mudancas", name: "Fretes e Mudanças", icon: "🚚", parentSlug: null },
  { slug: "pequenos-carretos", name: "Pequenos Carretos", parentSlug: "fretes-mudancas" },
  { slug: "mudancas-residenciais", name: "Mudanças Residenciais", parentSlug: "fretes-mudancas" },
  { slug: "motoboy", name: "Motoboy", parentSlug: "fretes-mudancas" },

  // 14. Saúde
  { slug: "saude", name: "Saúde", icon: "❤️", parentSlug: null },
  { slug: "nutricionista", name: "Nutricionista", parentSlug: "saude" },
  { slug: "fisioterapeuta", name: "Fisioterapeuta", parentSlug: "saude" },
  { slug: "psicologo", name: "Psicólogo", parentSlug: "saude" },
  { slug: "cuidador-idosos", name: "Cuidador de Idosos", parentSlug: "saude" },

  // 15. Serviços Jurídicos
  { slug: "servicos-juridicos", name: "Serviços Jurídicos", icon: "⚖️", parentSlug: null },
  { slug: "advogado", name: "Advogado", parentSlug: "servicos-juridicos" },
  { slug: "advogado-trabalhista", name: "Advogado Trabalhista", parentSlug: "servicos-juridicos" },
  { slug: "advogado-familia", name: "Advogado de Família", parentSlug: "servicos-juridicos" },
  { slug: "advogado-imobiliario", name: "Advogado Imobiliário", parentSlug: "servicos-juridicos" },
  { slug: "advogado-consumidor", name: "Advogado Consumidor", parentSlug: "servicos-juridicos" },
];

// All 27 Brazilian capitals (26 states + the Federal District).
const LOCATIONS: {
  slug: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}[] = [
  { slug: "rio-branco-ac", city: "Rio Branco", state: "AC", latitude: -9.9754, longitude: -67.8249 },
  { slug: "maceio-al", city: "Maceió", state: "AL", latitude: -9.6498, longitude: -35.7089 },
  { slug: "macapa-ap", city: "Macapá", state: "AP", latitude: 0.0349, longitude: -51.0694 },
  { slug: "manaus-am", city: "Manaus", state: "AM", latitude: -3.119, longitude: -60.0217 },
  { slug: "salvador-ba", city: "Salvador", state: "BA", latitude: -12.9714, longitude: -38.5014 },
  { slug: "fortaleza-ce", city: "Fortaleza", state: "CE", latitude: -3.7319, longitude: -38.5267 },
  { slug: "brasilia-df", city: "Brasília", state: "DF", latitude: -15.7939, longitude: -47.8828 },
  { slug: "vitoria-es", city: "Vitória", state: "ES", latitude: -20.3155, longitude: -40.3128 },
  { slug: "goiania-go", city: "Goiânia", state: "GO", latitude: -16.6869, longitude: -49.2648 },
  { slug: "sao-luis-ma", city: "São Luís", state: "MA", latitude: -2.5307, longitude: -44.3068 },
  { slug: "cuiaba-mt", city: "Cuiabá", state: "MT", latitude: -15.6014, longitude: -56.0979 },
  { slug: "campo-grande-ms", city: "Campo Grande", state: "MS", latitude: -20.4697, longitude: -54.6201 },
  { slug: "belo-horizonte-mg", city: "Belo Horizonte", state: "MG", latitude: -19.9167, longitude: -43.9345 },
  { slug: "belem-pa", city: "Belém", state: "PA", latitude: -1.4558, longitude: -48.5039 },
  { slug: "joao-pessoa-pb", city: "João Pessoa", state: "PB", latitude: -7.1195, longitude: -34.845 },
  { slug: "curitiba-pr", city: "Curitiba", state: "PR", latitude: -25.4284, longitude: -49.2733 },
  { slug: "recife-pe", city: "Recife", state: "PE", latitude: -8.0476, longitude: -34.877 },
  { slug: "teresina-pi", city: "Teresina", state: "PI", latitude: -5.0892, longitude: -42.8019 },
  { slug: "rio-de-janeiro-rj", city: "Rio de Janeiro", state: "RJ", latitude: -22.9068, longitude: -43.1729 },
  { slug: "natal-rn", city: "Natal", state: "RN", latitude: -5.7945, longitude: -35.211 },
  { slug: "porto-alegre-rs", city: "Porto Alegre", state: "RS", latitude: -30.0346, longitude: -51.2177 },
  { slug: "porto-velho-ro", city: "Porto Velho", state: "RO", latitude: -8.7619, longitude: -63.9039 },
  { slug: "boa-vista-rr", city: "Boa Vista", state: "RR", latitude: 2.8235, longitude: -60.6758 },
  { slug: "florianopolis-sc", city: "Florianópolis", state: "SC", latitude: -27.5949, longitude: -48.5482 },
  { slug: "sao-paulo-sp", city: "São Paulo", state: "SP", latitude: -23.5505, longitude: -46.6333 },
  { slug: "aracaju-se", city: "Aracaju", state: "SE", latitude: -10.9472, longitude: -37.0731 },
  { slug: "palmas-to", city: "Palmas", state: "TO", latitude: -10.184, longitude: -48.3336 },
];

async function main() {
  const parents = CATEGORIES.filter((c) => c.parentSlug === null);
  const children = CATEGORIES.filter((c) => c.parentSlug !== null);

  // Upsert parents first so children can resolve their parentId.
  for (const c of parents) {
    await db.category.upsert({
      where: { slug: c.slug },
      create: { slug: c.slug, name: c.name, icon: c.icon ?? null, parentId: null },
      update: { name: c.name, icon: c.icon ?? null, parentId: null },
    });
  }

  const idBySlug = new Map(
    (await db.category.findMany({ select: { id: true, slug: true } })).map(
      (c) => [c.slug, c.id] as const,
    ),
  );

  for (const c of children) {
    const parentId = idBySlug.get(c.parentSlug as string);
    if (!parentId) {
      throw new Error(`Parent "${c.parentSlug}" not found for "${c.slug}"`);
    }
    await db.category.upsert({
      where: { slug: c.slug },
      create: { slug: c.slug, name: c.name, icon: c.icon ?? null, parentId },
      update: { name: c.name, icon: c.icon ?? null, parentId },
    });
  }

  // Remove categories from earlier seeds that are no longer part of the taxonomy,
  // but only when nothing depends on them (no orders, no children).
  const keep = new Set(CATEGORIES.map((c) => c.slug));
  const stale = await db.category.findMany({
    where: { slug: { notIn: [...keep] } },
    select: {
      id: true,
      slug: true,
      _count: { select: { orders: true, children: true } },
    },
  });
  let removed = 0;
  for (const s of stale) {
    if (s._count.orders === 0 && s._count.children === 0) {
      await db.category.delete({ where: { id: s.id } });
      removed++;
    } else {
      console.warn(
        `Keeping obsolete category "${s.slug}" (orders: ${s._count.orders}, children: ${s._count.children}).`,
      );
    }
  }

  for (const l of LOCATIONS) {
    await db.location.upsert({
      where: { slug: l.slug },
      create: l,
      update: { city: l.city, state: l.state },
    });
  }

  console.log(
    `Seeded ${CATEGORIES.length} categories (${parents.length} main, ${children.length} sub) and ${LOCATIONS.length} locations. Removed ${removed} obsolete categories.`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
