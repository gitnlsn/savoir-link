import Link from "next/link";
import { BulletList } from "~/components/ui/bullet-list";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

export function DomesticPaintingContent({ post }: { post: BlogPost }) {
	return (
		<>
			{post.slug === "quanto-custa-pintar-casa-2025-preco-m2" && (
				<>
					<BodyText>
						Quer pintar sua casa mas não tem ideia de quanto vai custar?
						Orçamentos variam muito entre pintores, você não sabe se está
						pagando justo... Este guia traz preços atualizados por m² em 2025, o
						que influencia o custo e como economizar sem perder qualidade.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Preço Médio de Pintura por m² (2025)
						</Headline>
						<BodyText>
							<strong>Pintura interna:</strong> R$ 25-45/m² (incluindo mão de
							obra + tinta básica)
							<br />
							<strong>Pintura externa:</strong> R$ 30-55/m² (mais cara por
							precisar tinta específica e maior dificuldade)
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Influencia o Preço?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Tipo de Tinta
						</Headline>
						<BodyText>
							Látex PVA: R$ 25-35/m² | Acrílica: R$ 30-40/m² | Lavável/Premium:
							R$ 35-50/m²
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Estado da Parede
						</Headline>
						<BodyText>
							Parede nova/boa: preço padrão | Parede com
							rachaduras/imperfeições: +20-40% (precisa massa corrida,
							lixamento)
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Tamanho do Projeto
						</Headline>
						<BodyText>
							Quanto maior a área, menor o preço por m² (economia de escala).
							Exemplo: 50m² = R$ 40/m² | 200m² = R$ 30/m²
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Exemplos de Custo Total
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Apartamento 50m² (2 quartos):</strong> R$ 1.500-2.500
						</BodyText>
						<BodyText className="mb-4">
							<strong>Casa 100m² (3 quartos):</strong> R$ 2.500-4.000
						</BodyText>
						<BodyText>
							<strong>Casa 200m² (4+ quartos):</strong> R$ 5.000-9.000
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Compare Orçamentos de Pintores
						</Headline>
						<BodyText className="mb-6">
							Na Savoir Link, você publica seu pedido e pintores qualificados
							entram em contato informando preço por m², tipo de tinta incluída
							e serviços extras. Compare os orçamentos e contrate com
							transparência total.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 51: Demãos de Tinta */}
			{post.slug === "pintura-interna-quantas-demaos-tinta-necessarias" && (
				<>
					<BodyText>
						Você está pintando (ou contratando pintor) e não sabe quantas demãos
						de tinta aplicar. Uma demão é suficiente? Duas? Três? O tempo de
						secagem entre demãos importa? Este guia explica o número ideal para
						cada situação e como garantir acabamento perfeito.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Quantas Demãos de Tinta São Necessárias?
						</Headline>
						<BodyText>
							<strong>Regra geral:</strong> 2 demãos de tinta + 1 demão de
							selador/primer. Mas varia conforme cor antiga, cor nova e tipo de
							tinta.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Número de Demãos por Situação
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Parede Nova (Massa Corrida/Reboco Novo)
						</Headline>
						<BulletList
							variant="check"
							items={[
								"1 demão de selador/primer (impermeabiliza e economiza tinta)",
								"2 demãos de tinta (mínimo para cobertura uniforme)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Repintura - Cor Clara sobre Cor Clara
						</Headline>
						<BulletList
							variant="check"
							items={["2 demãos de tinta (sem necessidade de selador)"]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Repintura - Cor Clara sobre Cor Escura
						</Headline>
						<BulletList
							variant="check"
							items={[
								"1 demão de primer branco (bloqueia cor escura)",
								"3 demãos de tinta clara (para cobertura total)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Tempo de Secagem Entre Demãos
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Tinta látex/acrílica:</strong> 4-6 horas entre demãos (em
							condições normais de temperatura e umidade)
						</BodyText>
						<BodyText className="mb-4">
							<strong>Selador/primer:</strong> 12-24 horas antes da primeira
							demão de tinta
						</BodyText>
						<BodyText>
							<strong>IMPORTANTE:</strong> Aplicar demão antes da secagem
							completa causa manchas, descascamento e resultado ruim.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Contrate Pintores Experientes
						</Headline>
						<BodyText className="mb-6">
							Pintores profissionais sabem exatamente quantas demãos aplicar
							para cada situação. Publique seu pedido na Savoir Link e contrate
							quem garante acabamento de qualidade.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Pintor Profissional</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 52: Tipos de Tinta */}
			{post.slug === "melhor-tinta-parede-latex-acrilica-lavavel" && (
				<>
					<BodyText>
						Você está na loja de tintas olhando para Látex, Acrílica, PVA,
						Lavável, Premium... e não sabe qual escolher. Qual a diferença? Qual
						é melhor para sala? E para banheiro? Este guia compara todos os
						tipos, preços e indica a melhor opção para cada ambiente.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Principais Tipos de Tinta para Parede
						</Headline>
						<BodyText>
							Látex PVA, Acrílica e Lavável são os tipos mais comuns. A
							diferença está na base (água ou solvente), durabilidade e
							resistência à limpeza.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Comparação Completa
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Látex PVA
						</Headline>
						<BodyText className="mb-4">
							<strong>O que é:</strong> Tinta à base de água, mais básica e
							econômica.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Vantagens:</strong> Mais barata (R$ 80-120/18L), fácil de
							aplicar, sem cheiro forte.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Desvantagens:</strong> NÃO resiste à limpeza (não pode
							lavar parede), menos durável.
						</BodyText>
						<BodyText>
							<strong>Onde usar:</strong> Quartos, salas, tetos (ambientes
							internos secos que não precisam limpeza frequente).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Tinta Acrílica
						</Headline>
						<BodyText className="mb-4">
							<strong>O que é:</strong> Tinta à base de resina acrílica, mais
							resistente que PVA.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Vantagens:</strong> Pode lavar a parede (resistente à
							água), mais durável, melhor cobertura.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Desvantagens:</strong> Mais cara que PVA (R$ 120-180/18L).
						</BodyText>
						<BodyText>
							<strong>Onde usar:</strong> Cozinha, banheiro, áreas externas,
							qualquer ambiente que precisa limpeza.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Tinta Lavável/Premium
						</Headline>
						<BodyText className="mb-4">
							<strong>O que é:</strong> Acrílica de alta qualidade com
							acabamento lavável e resistente.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Vantagens:</strong> Pode esfregar com esponja/pano úmido
							sem sair tinta, resistente a manchas, acabamento superior.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Desvantagens:</strong> Mais cara (R$ 150-250/18L).
						</BodyText>
						<BodyText>
							<strong>Onde usar:</strong> Cozinha, banheiro, casas com crianças
							(parede suja com frequência), corredores.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Qual Escolher?
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BodyText className="mb-4">
							<strong>Use PVA se:</strong> Quer economizar, ambiente seco, não
							precisa lavar parede.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Use Acrílica se:</strong> Quer durabilidade, ambiente
							úmido (cozinha/banheiro), precisa lavar parede ocasionalmente.
						</BodyText>
						<BodyText>
							<strong>Use Lavável se:</strong> Tem crianças, quer parede sempre
							limpa, pode investir mais.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Pintores Indicam a Melhor Tinta
						</Headline>
						<BodyText className="mb-6">
							Pintores profissionais recomendam o tipo ideal de tinta para cada
							ambiente. Consulte especialistas e garanta resultado duradouro.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Consultar Pintor Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 53: Preparar Parede */}
			{post.slug === "como-preparar-parede-antes-pintar-passo-passo" && (
				<>
					<BodyText>
						Você quer pintar mas não sabe se precisa preparar a parede antes, se
						pode pintar direto, como corrigir imperfeições... A preparação é
						essencial para a pintura durar anos sem descascar. Este guia ensina
						o passo a passo completo.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Por Que Preparar a Parede?
						</Headline>
						<BodyText>
							Parede mal preparada faz a tinta descascar em meses, aparecer
							manchas, ficar com textura irregular. Preparação correta garante
							acabamento liso e durabilidade de 5+ anos.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Passo a Passo Completo
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="check"
							items={[
								"1. Limpar a parede (remover poeira, gordura, mofo)",
								"2. Raspar tinta solta/descascada",
								"3. Corrigir imperfeições com massa corrida",
								"4. Lixar após massa secar",
								"5. Aplicar selador/primer",
								"6. Pintar (2-3 demãos)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Detalhamento de Cada Etapa
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Limpeza da Parede
						</Headline>
						<BodyText>
							Use pano úmido para remover poeira. Se houver gordura (cozinha):
							lave com detergente neutro. Se houver mofo: aplique água sanitária
							diluída (1:3).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Raspar Tinta Antiga
						</Headline>
						<BodyText>
							Use espátula para remover tinta descascada, solta ou com bolhas.
							Deixe apenas tinta bem aderida.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Aplicar Massa Corrida
						</Headline>
						<BodyText className="mb-4">
							Preencha buracos, rachaduras e imperfeições com massa corrida. Use
							espátula para nivelar. Aguarde secar (2-4 horas).
						</BodyText>
						<BodyText>
							<strong>Dica:</strong> Aplique camadas finas. Se precisar camada
							grossa, espere secar entre aplicações.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							4. Lixar a Parede
						</Headline>
						<BodyText>
							Após massa secar, lixe com lixa fina (120-220) para deixar
							superfície lisa. Remova pó com pano úmido.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							5. Aplicar Selador/Primer
						</Headline>
						<BodyText className="mb-4">
							Selador impermeabiliza parede, economiza tinta e melhora
							aderência. Aplique 1 demão e aguarde secar (12-24h).
						</BodyText>
						<BodyText>
							<strong>IMPORTANTE:</strong> Nunca pule selador em parede nova ou
							com massa corrida (tinta vai absorver demais).
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Pintores Preparam Tudo Para Você
						</Headline>
						<BodyText className="mb-6">
							Pintor profissional faz toda preparação (massa, lixamento,
							selador) e garante resultado perfeito. Economize tempo e tenha
							acabamento de qualidade.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Contratar Pintor Profissional</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 54: Pintor vs DIY */}
			{post.slug === "pintor-profissional-vs-pintar-sozinho-vale-pena" && (
				<>
					<BodyText>
						Você está pensando em pintar sua casa e na dúvida: contratar pintor
						ou fazer você mesmo? Quanto custa cada opção? Quanto tempo demora? O
						resultado fica bom fazendo DIY? Este guia compara custos reais,
						tempo e qualidade.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Custo: Pintor vs DIY
						</Headline>
						<BodyText>
							<strong>Pintor:</strong> R$ 25-45/m² (inclui mão de obra + tinta
							básica)
							<br />
							<strong>DIY:</strong> R$ 10-20/m² (só material: tinta, rolo,
							pincéis, massa, selador)
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Comparação Completa
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Custo Total (Apartamento 50m²)
						</Headline>
						<BodyText className="mb-4">
							<strong>Pintor:</strong> R$ 1.500-2.500 (mão de obra + material)
						</BodyText>
						<BodyText>
							<strong>DIY:</strong> R$ 600-1.200 (só material: tinta R$ 400,
							rolo/pincéis R$ 150, massa R$ 80, selador R$ 100, lixas R$ 30,
							fitas R$ 40)
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Tempo
						</Headline>
						<BodyText className="mb-4">
							<strong>Pintor:</strong> 2-4 dias (50m²) - profissional trabalha
							rápido
						</BodyText>
						<BodyText>
							<strong>DIY:</strong> 1-2 semanas (fins de semana) - primeira vez
							demora mais
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Qualidade do Resultado
						</Headline>
						<BodyText className="mb-4">
							<strong>Pintor:</strong> Acabamento profissional, sem manchas,
							linhas retas, economiza tinta
						</BodyText>
						<BodyText>
							<strong>DIY:</strong> Resultado depende da sua habilidade. Risco
							de: manchas, demãos desiguais, respingos, fitas mal aplicadas
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Vale a Pena Fazer DIY
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Você tem tempo disponível (fins de semana livres)",
								"Quer economizar (prioriza custo sobre tempo)",
								"Projeto pequeno (1-2 cômodos)",
								"Não se importa com acabamento imperfeito",
								"Gosta de trabalhos manuais",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Vale a Pena Contratar Pintor
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Você não tem tempo (trabalha muito)",
								"Quer resultado profissional",
								"Projeto grande (casa inteira)",
								"Parede com muitos problemas (rachaduras, mofo)",
								"Primeira vez pintando (sem experiência)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Compare Orçamentos de Pintores
						</Headline>
						<BodyText className="mb-6">
							Publique seu pedido e pintores da sua região entram em contato
							com preços e orçamentos. Contrate com qualidade garantida e
							economize tempo.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 55: Tempo Pintura */}
			{post.slug === "quanto-tempo-demora-pintar-casa" && (
				<>
					<BodyText>
						Você está planejando pintar sua casa mas não sabe quanto tempo vai
						levar, quantos dias ficar sem usar os cômodos, se precisa de mais de
						um pintor... Este guia traz prazos realistas por tamanho de imóvel e
						fatores que influenciam a duração.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Tempo Médio por Tamanho
						</Headline>
						<BodyText>
							<strong>Apartamento 50m²:</strong> 2-4 dias
							<br />
							<strong>Casa 100m²:</strong> 4-7 dias
							<br />
							<strong>Casa 200m²+:</strong> 7-14 dias
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Influencia o Prazo?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Estado da Parede
						</Headline>
						<BodyText>
							Parede boa: prazo padrão | Parede com problemas (rachaduras,
							mofo): +30-50% tempo (precisa preparação)
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Número de Pintores
						</Headline>
						<BodyText>
							1 pintor: prazo padrão | 2 pintores: reduz 40-50% do tempo
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Clima
						</Headline>
						<BodyText>
							Dias secos: secagem rápida | Dias chuvosos/úmidos: +1-2 dias
							(tinta demora mais para secar)
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Pintores Cumprem Prazos
						</Headline>
						<BodyText className="mb-6">
							Ao contratar, peça referências sobre pontualidade e cumprimento
							de prazos. Pintores profissionais estimam prazo realista e
							entregam no tempo combinado.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Pintor Pontual</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 56: Tinta Descascando */}
			{post.slug === "tinta-descascando-parede-por-que-como-corrigir" && (
				<>
					<BodyText>
						Você pintou a casa (ou contratou pintor) e meses depois a tinta está
						descascando, com bolhas, manchas... Por que isso acontece? Como
						corrigir? Pode pintar por cima ou precisa refazer tudo? Este guia
						explica as causas e soluções definitivas.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Principais Causas
						</Headline>
						<BodyText>
							Umidade na parede, preparação inadequada, tinta de má qualidade ou
							vencida, aplicação incorreta.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Causas e Soluções
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Umidade (Causa Mais Comum)
						</Headline>
						<BodyText className="mb-4">
							<strong>Sinais:</strong> Tinta descasca em grandes placas, parede
							úmida ao toque, mofo.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Solução:</strong> Encontre fonte de umidade (infiltração,
							vazamento) e corrija ANTES de pintar novamente. Raspe tinta solta,
							trate mofo, espere secar completamente, aplique tinta impermeável.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Preparação Inadequada
						</Headline>
						<BodyText className="mb-4">
							<strong>Sinais:</strong> Tinta descasca em pequenas áreas,
							superfície irregular.
						</BodyText>
						<BodyText>
							<strong>Solução:</strong> Raspe toda tinta solta, aplique massa
							corrida, lixe, aplique selador, pinte novamente.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Tinta de Má Qualidade/Vencida
						</Headline>
						<BodyText className="mb-4">
							<strong>Sinais:</strong> Tinta descasca uniformemente, não adere
							bem.
						</BodyText>
						<BodyText>
							<strong>Solução:</strong> Remova tinta ruim, use tinta de
							qualidade (marcas conhecidas, dentro da validade).
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Corrigir Definitivamente
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="check"
							items={[
								"1. Identifique e corrija causa raiz (umidade, infiltração)",
								"2. Raspe toda tinta descascada com espátula",
								"3. Lave parede (remova sujeira, mofo)",
								"4. Aplique massa corrida nas imperfeições",
								"5. Lixe após secar",
								"6. Aplique selador/primer",
								"7. Pinte com tinta de qualidade (2-3 demãos)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Pintores Corrigem Problemas de Pintura
						</Headline>
						<BodyText className="mb-6">
							Pintor experiente identifica causa, corrige adequadamente e
							garante que problema não volte. Evite retrabalho e gastos extras.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Contratar Pintor Especialista</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}
		</>
	);
}
