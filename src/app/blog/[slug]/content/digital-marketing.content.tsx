import Link from "next/link";
import { BulletList } from "~/components/ui/bullet-list";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

export function DigitalMarketingContent({ post }: { post: BlogPost }) {
	return (
		<>
			{/* Article 1: Marketing Digital para Iniciantes */}
			{post.slug ===
				"marketing-digital-iniciantes-quanto-custa-como-comecar-2025" && (
				<>
					<BodyText>
						"Marketing digital é caro", "preciso contratar agência", "não
						entendo nada disso". Se você pensa assim, está deixando clientes na
						mesa. Marketing digital em 2025 não é mais opcional - é obrigatório
						para profissionais autônomos que querem crescer. E a boa notícia? Dá
						para começar com R$ 0.
					</BodyText>

					<BodyText className="mt-4">
						Este guia desmistifica TUDO sobre marketing digital: quanto custa de
						verdade (de R$ 0 a R$ 20.000/mês), como começar do zero, qual
						caminho escolher e quanto tempo até ver resultados. Vamos acabar com
						a confusão de uma vez por todas.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							O Que Você Vai Aprender
						</Headline>
						<BulletList
							items={[
								"O que é marketing digital e por que você precisa dele",
								"Estrutura de custos: onde vai o dinheiro",
								"3 opções: DIY (R$ 0-300), Freelancer (R$ 800-3k), Agência (R$ 2-20k)",
								"Investimento em mídia paga (Google Ads, Facebook Ads)",
								"Como calcular seu orçamento ideal",
								"ROI esperado e tempo até resultados",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que é Marketing Digital e Por Que Você Precisa Dele?
					</Headline>

					<BodyText>
						Marketing digital é qualquer ação de marketing feita através de
						canais digitais: redes sociais, Google, email, sites, aplicativos.
						Diferente do marketing tradicional (outdoor, TV, rádio), marketing
						digital é:
					</BodyText>

					<BulletList
						items={[
							"Mensurável: Você sabe EXATAMENTE quantas pessoas viram, clicaram, compraram",
							"Segmentável: Você mostra seu anúncio só para quem tem perfil de cliente ideal",
							"Escalável: Com mesmo esforço, alcança 100 ou 100.000 pessoas",
							"Acessível: Começa com R$ 0 (orgânico) ou R$ 10/dia (pago)",
						]}
						className="mt-4"
					/>

					<ContentCard variant="default" className="mt-6">
						<BodyText>
							<strong>
								Por que profissionais autônomos não podem ignorar marketing
								digital em 2025:
							</strong>
							<br />
							<br />
							87% dos brasileiros pesquisam serviços online antes de contratar
							(Google, 2024). Se você não está na internet, você simplesmente
							não existe para 87% dos potenciais clientes.
						</BodyText>
					</ContentCard>

					<BodyText className="mt-6">
						<strong>Estatísticas de ROI:</strong> Empresas que investem em
						marketing digital têm ROI médio de 3:1 (cada R$ 1 investido retorna
						R$ 3). Para profissionais autônomos bem executado, pode chegar a
						10:1.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						Estrutura de Custos: Entenda Onde Vai o Dinheiro
					</Headline>

					<BodyText>
						Marketing digital não é um custo único. É dividido em 4 categorias:
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							1. CUSTOS DE PRODUÇÃO DE CONTEÚDO
						</Label>
						<BodyText className="text-sm">
							Criar posts, vídeos, artigos, designs para suas redes e anúncios.
							<br />
							<strong>DIY:</strong> Seu tempo (10-15h/semana)
							<br />
							<strong>Terceirizado:</strong> R$ 300-2.000/mês (freelancer de
							conteúdo)
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							2. CUSTOS DE FERRAMENTAS
						</Label>
						<BodyText className="text-sm">
							Softwares para agendar posts, criar designs, analisar resultados.
							<br />
							<strong>Gratuito:</strong> Canva (grátis), Buffer (até 3 redes),
							Google Analytics
							<br />
							<strong>Pago:</strong> R$ 50-300/mês (Canva Pro, Later, Semrush)
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							3. CUSTOS DE MÍDIA PAGA
						</Label>
						<BodyText className="text-sm">
							Anúncios no Google, Facebook, Instagram.
							<br />
							<strong>Mínimo viável:</strong> R$ 10-30/dia (R$ 300-900/mês)
							<br />
							<strong>Recomendado:</strong> R$ 30-100/dia (R$ 900-3.000/mês)
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							4. CUSTOS DE GESTÃO
						</Label>
						<BodyText className="text-sm">
							Quem cuida de tudo: você, freelancer ou agência.
							<br />
							<strong>Você mesmo:</strong> Seu tempo
							<br />
							<strong>Freelancer:</strong> R$ 800-3.000/mês
							<br />
							<strong>Agência:</strong> R$ 2.000-20.000/mês
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Opção 1: Marketing Digital DIY (Faça Você Mesmo) - R$ 0 a R$ 300/mês
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Você faz tudo - cria conteúdo,
							posta, responde, analisa. Usa apenas ferramentas gratuitas ou
							baratas.
						</BodyText>

						<Headline size="sm" className="mb-2 text-primary">
							Ferramentas Gratuitas Essenciais
						</Headline>
						<BulletList
							items={[
								"Canva (Free): Criar posts, stories, banners",
								"CapCut: Editar vídeos (reels, shorts)",
								"Buffer/Later (Free): Agendar posts em 3 redes sociais",
								"Google Analytics: Analisar tráfego do site",
								"Google Meu Negócio: Aparecer em buscas locais (100% grátis)",
								"ChatGPT (Free): Ajudar com ideias de conteúdo, legendas",
							]}
						/>

						<BodyText className="mt-4">
							<strong>Investimento de tempo:</strong> 5-10 horas por semana
							<br />
							<strong>Custo mensal:</strong> R$ 0-300 (se investir em
							ferramentas pagas)
						</BodyText>

						<BodyText className="mt-4">
							<strong>✅ O que você consegue fazer sozinho:</strong>
						</BodyText>
						<BulletList
							items={[
								"Criar perfis profissionais nas redes (Instagram, Facebook, LinkedIn)",
								"Postar conteúdo de valor 3-5x/semana",
								"Responder comentários e DMs",
								"Otimizar Google Meu Negócio",
								"Criar site básico (WordPress, Wix)",
								"Email marketing básico (Mailchimp grátis até 500 contatos)",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>❌ Limitações:</strong>
						</BodyText>
						<BulletList
							items={[
								"Leva tempo (você faz no lugar de projetos pagos)",
								"Curva de aprendizado (3-6 meses para pegar o jeito)",
								"Resultados mais lentos (orgânico demora)",
								"Qualidade pode ser inferior (não é sua especialidade)",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>Quando escolher DIY:</strong> Você está começando, tem
							tempo disponível, orçamento zero, quer aprender marketing digital
							para sempre.
						</BodyText>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Label className="mb-2 block font-bold text-sm">
							CURSOS GRATUITOS PARA APRENDER
						</Label>
						<BulletList
							items={[
								"Google Ateliê Digital: Curso completo gratuito com certificado",
								"Meta Blueprint: Cursos oficiais de Facebook/Instagram Ads",
								"HubSpot Academy: Inbound marketing, redes sociais, SEO",
								"YouTube: Canais como Neil Patel (Brasil), Viver de Blog, Novo Mercado",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Opção 2: Freelancer de Marketing - R$ 800 a R$ 3.000/mês
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Você contrata freelancer
							especializado que cuida de parte ou todo marketing digital.
						</BodyText>

						<Headline size="sm" className="mb-2 text-primary">
							Serviços Incluídos (Depende do Pacote)
						</Headline>
						<BulletList
							items={[
								"Pacote Básico (R$ 800-1.200): Gestão de 1-2 redes sociais, 8-12 posts/mês, resposta a comentários",
								"Pacote Intermediário (R$ 1.200-2.000): 2-3 redes sociais, 12-20 posts/mês, stories diários, gestão de anúncios básica",
								"Pacote Completo (R$ 2.000-3.000): Todas as redes, 20-30 posts/mês, stories, reels, gestão completa de anúncios, relatórios mensais",
							]}
						/>

						<BodyText className="mt-4">
							<strong>Como encontrar e selecionar freelancer:</strong>
						</BodyText>
						<BulletList
							items={[
								"Plataformas: 99Freelas, Workana, LinkedIn (busca 'social media freelancer')",
								"Portfólio: Peça para ver 3-5 casos anteriores com resultados (crescimento de seguidores, engajamento, leads)",
								"Referências: Fale com 2 clientes anteriores",
								"Teste: Contrate por 1 mês antes de compromisso longo",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>✅ Vantagens:</strong> Você foca no seu trabalho,
							profissional especializado, custo-benefício melhor que agência,
							flexibilidade
							<br />
							<br />
							<strong>❌ Red Flags a Evitar:</strong> Promessa de "10k
							seguidores em 1 mês" (fake), portfólio sem resultados mensuráveis,
							não assina contrato, pede pagamento 100% adiantado
						</BodyText>

						<BodyText className="mt-4">
							<strong>Quando escolher freelancer:</strong> Faturando R$
							5.000+/mês, não tem tempo para marketing, quer resultados mais
							rápidos que DIY.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Opção 3: Agência de Marketing - R$ 2.000 a R$ 20.000/mês
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Agência tem time completo
							(designer, redator, gestor de tráfego, estrategista) cuidando de
							tudo.
						</BodyText>

						<Headline size="sm" className="mb-2 text-primary">
							Estrutura de Serviços
						</Headline>
						<BodyText className="text-sm">
							<strong>Agência Pequena (R$ 2.000-5.000/mês):</strong> Gestão
							completa de redes, anúncios, conteúdo, relatórios. Time de 2-4
							pessoas.
							<br />
							<br />
							<strong>Agência Média (R$ 5.000-12.000/mês):</strong> Tudo acima +
							SEO, email marketing, automações, funil completo. Time de 5-10
							pessoas.
							<br />
							<br />
							<strong>Agência Grande (R$ 12.000-20.000+/mês):</strong>{" "}
							Estratégia completa, múltiplos canais, campanhas sofisticadas,
							branded content. Time de 10+ pessoas.
						</BodyText>

						<BodyText className="mt-4">
							<strong>Quando faz sentido contratar agência:</strong>
						</BodyText>
						<BulletList
							items={[
								"Faturamento R$ 30.000+/mês (regra: marketing = 5-10% do faturamento)",
								"Você quer crescer RÁPIDO e escalar",
								"Precisa de estratégia sofisticada (funil completo, múltiplos canais)",
								"Quer time completo sem contratar funcionários CLT",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>✅ Vantagens:</strong> Time completo, estratégia
							profissional, resultados rápidos, você não se preocupa com nada
							<br />
							<br />
							<strong>❌ Desvantagens:</strong> Caro, alguns contratos tem
							fidelidade (12 meses), pode ser "genérico" se agência não entende
							seu nicho
						</BodyText>

						<BodyText className="mt-4">
							<strong>Como escolher agência:</strong> Case studies do seu
							segmento, reunião de alinhamento estratégico (eles devem fazer
							perguntas sobre SEU negócio, não só apresentar portfólio),
							transparência de métricas e relatórios.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Investimento em Mídia Paga (Ads)
					</Headline>

					<BodyText>
						Mídia paga é SEPARADO do custo de gestão. É o dinheiro que vai
						direto para Google/Facebook. Aqui estão os custos realistas:
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Google Ads (Para Aparecer em Buscas)
						</Headline>
						<BodyText>
							<strong>Custo por clique (CPC):</strong> R$ 1-15 (depende muito da
							palavra-chave)
							<br />
							<strong>Orçamento mínimo:</strong> R$ 20-50/dia (R$ 600-1.500/mês)
							<br />
							<strong>Para quem:</strong> Serviços que pessoas PROCURAM
							("advogado trabalhista SP", "personal trainer zona sul")
							<br />
							<br />
							<strong>Exemplo real:</strong> "Encanador emergência [cidade]" -
							CPC R$ 5, com R$ 30/dia você tem 6 cliques/dia = 180 cliques/mês.
							Se 10% viram clientes = 18 clientes/mês.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Facebook/Instagram Ads (Para Gerar Interesse)
						</Headline>
						<BodyText>
							<strong>Custo por clique (CPC):</strong> R$ 0,50-4 (mais barato
							que Google)
							<br />
							<strong>Orçamento mínimo:</strong> R$ 10-30/dia (R$ 300-900/mês)
							<br />
							<strong>Para quem:</strong> Serviços visuais ou que precisam
							"criar demanda" (design, fotografia, nutricionista, personal)
							<br />
							<br />
							<strong>Exemplo real:</strong> Nutricionista, R$ 20/dia, CPC R$ 2
							= 10 cliques/dia = 300 cliques/mês. Se 5% marcam consulta = 15
							consultas/mês.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							LinkedIn Ads (Para Serviços B2B Premium)
						</Headline>
						<BodyText>
							<strong>Custo por clique (CPC):</strong> R$ 15-50 (MUITO mais
							caro)
							<br />
							<strong>Orçamento mínimo:</strong> R$ 50-100/dia (R$
							1.500-3.000/mês)
							<br />
							<strong>Para quem:</strong> Consultoria corporativa, serviços B2B
							de alto ticket (R$ 5.000+)
							<br />
							<br />
							LinkedIn é caro mas público é qualificado (tomadores de decisão,
							empresários, executivos). Vale a pena para serviços premium.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Calculadora: Seu Orçamento Ideal de Marketing
					</Headline>

					<ContentCard variant="accent" accentPosition="left" className="mt-4">
						<Headline size="sm" className="mb-4">
							Regra dos 5-10% do Faturamento
						</Headline>
						<BodyText>
							Empresas bem-sucedidas investem 5-10% do faturamento em marketing.
							Para freelancers/autônomos:
							<br />
							<br />
							<strong>Faturamento R$ 3.000/mês:</strong> R$ 150-300/mês em
							marketing (DIY com ferramentas básicas)
							<br />
							<strong>Faturamento R$ 8.000/mês:</strong> R$ 400-800/mês (DIY
							avançado ou freelancer básico)
							<br />
							<strong>Faturamento R$ 15.000/mês:</strong> R$ 750-1.500/mês
							(freelancer + mídia paga)
							<br />
							<strong>Faturamento R$ 30.000+/mês:</strong> R$ 1.500-3.000+/mês
							(agência pequena ou freelancer + mídia grande)
						</BodyText>
					</ContentCard>

					<BodyText className="mt-6">
						<strong>Fases do negócio:</strong>
					</BodyText>
					<BulletList
						items={[
							"Lançamento (primeiros 6 meses): Invista 15-20% para ganhar tração rápida",
							"Crescimento: 10-15% para escalar",
							"Manutenção: 5-7% para manter posição",
						]}
						className="mt-2"
					/>

					<Headline size="sm" className="mt-8 mb-4">
						ROI Esperado: Quando e Como Medir Resultados
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Tempo até Ver Resultados
						</Headline>
						<BodyText>
							<strong>Orgânico (redes sociais, SEO, conteúdo):</strong>
							<br />• Primeiros sinais: 1-2 meses
							<br />• Resultados consistentes: 3-6 meses
							<br />• Resultados significativos: 6-12 meses
							<br />
							<br />
							<strong>Pago (anúncios Google, Facebook):</strong>
							<br />• Primeiros resultados: 1-2 semanas
							<br />• Otimização completa: 1-2 meses
							<br />• ROI positivo: 2-4 meses (se bem executado)
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Métricas por Canal
						</Headline>
						<BodyText className="text-sm">
							<strong>Redes Sociais:</strong> Alcance, engajamento (curtidas,
							comentários, compartilhamentos), crescimento de seguidores,
							cliques no link
							<br />
							<br />
							<strong>Google Ads:</strong> Impressões, cliques, CPC, taxa de
							conversão (cliques que viram contatos/vendas)
							<br />
							<br />
							<strong>Facebook/Instagram Ads:</strong> Alcance, CPC, CTR (taxa
							de clique), leads gerados, custo por lead
							<br />
							<br />
							<strong>Site:</strong> Visitantes, origem do tráfego, páginas mais
							vistas, taxa de conversão (visitantes que viram clientes)
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Como Calcular Custo por Cliente Adquirido (CAC)
						</Headline>
						<BodyText>
							<strong>Fórmula:</strong> CAC = Investimento Total em Marketing ÷
							Número de Novos Clientes
							<br />
							<br />
							<strong>Exemplo:</strong> Você gastou R$ 1.000 em marketing em um
							mês e conseguiu 10 novos clientes. CAC = R$ 1.000 ÷ 10 = R$ 100
							por cliente.
							<br />
							<br />
							<strong>É bom ou ruim?</strong> Depende do seu ticket médio. Se
							cada cliente paga R$ 500, CAC de R$ 100 é excelente (ROI 5:1). Se
							paga R$ 150, CAC de R$ 100 é ruim (ROI 1,5:1).
						</BodyText>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Label className="mb-2 block font-bold text-sm">
							FERRAMENTAS GRATUITAS DE MENSURAÇÃO
						</Label>
						<BulletList
							items={[
								"Google Analytics: Tráfego do site (de onde vêm, o que fazem)",
								"Meta Business Suite: Métricas de Instagram e Facebook",
								"Google Search Console: Como seu site aparece no Google",
								"Linktree/Bio link com analytics: Rastrear cliques do Instagram",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Seu Plano de Ação: Primeiros 90 Dias
					</Headline>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-4"
					>
						<Headline size="sm" className="mb-4">
							Roadmap Marketing Digital para Iniciantes
						</Headline>
						<BodyText className="mb-2 font-bold text-sm">
							MÊS 1: FUNDAÇÃO
						</BodyText>
						<BulletList
							items={[
								"Semana 1: Criar/otimizar perfis Instagram, Facebook, LinkedIn, Google Meu Negócio",
								"Semana 2: Definir 3 pilares de conteúdo (temas recorrentes)",
								"Semana 3: Criar banco de 20 ideias de posts",
								"Semana 4: Começar a postar 3-5x/semana + responder TUDO",
							]}
						/>

						<BodyText className="mt-4 mb-2 font-bold text-sm">
							MÊS 2: CONSISTÊNCIA
						</BodyText>
						<BulletList
							items={[
								"Manter frequência de posts (mínimo 3x/semana)",
								"Começar stories diários mostrando bastidores",
								"Engajar com comunidade (comentar em posts relacionados)",
								"Analisar o que funcionou melhor (mais curtidas, salvamentos, compartilhamentos)",
							]}
						/>

						<BodyText className="mt-4 mb-2 font-bold text-sm">
							MÊS 3: ACELERAÇÃO
						</BodyText>
						<BulletList
							items={[
								"Se teve resultados orgânicos, considerar investir R$ 10-20/dia em anúncios",
								"Testar 3 formatos de anúncios diferentes",
								"Criar landing page simples para capturar leads",
								"Primeira revisão de métricas: O que funcionou? O que não funcionou?",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-6">
						Marketing digital não é sprint, é maratona. Você não vai viralizar
						no primeiro mês. Mas com consistência, em 6-12 meses você terá um
						canal previsível de novos clientes todo mês. Vale MUITO a pena.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-12 text-center"
					>
						<Headline size="sm" className="mb-4">
							Divulgue Seus Serviços na Savoir Link
						</Headline>
						<BodyText className="mb-6">
							Enquanto você constrói sua presença digital, a Savoir Link já tem
							clientes publicando pedidos e procurando profissionais como você.
							Compre créditos, desbloqueie os contatos de quem busca seu serviço
							e feche negócio direto - sem investir em marketing.
						</BodyText>
						<Link href="/precos">
							<PrimaryButton>Começar Gratuitamente</PrimaryButton>
						</Link>
					</ContentCard>
				</>
			)}

			{/* Article 2: Tráfego Pago */}
			{post.slug ===
				"trafego-pago-profissionais-autonomos-instagram-facebook-ads-2025" && (
				<>
					<BodyText>
						Orgânico demora. Tráfego pago é rápido. Se você quer resultados em
						semanas (não meses), precisa dominar anúncios. Este guia prático vai
						te ensinar TUDO sobre Facebook e Instagram Ads: quanto investir,
						como segmentar, criar anúncios que convertem e medir resultados. Sem
						enrolação, apenas o que funciona em 2025.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Neste Guia Completo
						</Headline>
						<BulletList
							items={[
								"Tráfego pago vs orgânico: quando usar cada um",
								"Fundamentos de Facebook e Instagram Ads",
								"Quanto investir: orçamentos realistas (R$ 10-50/dia)",
								"Segmentação certeira de público",
								"Criativos de anúncios que convertem",
								"Métricas essenciais e como otimizar",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Tráfego Pago vs Orgânico: Quando Investir em Ads?
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Tráfego Orgânico (Grátis)
						</Headline>
						<BodyText>
							<strong>✅ Vantagens:</strong> Não custa nada (só seu tempo),
							constrói audiência própria, relacionamento genuíno, sustentável
							longo prazo
							<br />
							<br />
							<strong>❌ Desvantagens:</strong> MUITO lento (3-6 meses para
							tração), imprevisível (algoritmo muda), teto de alcance (só quem
							te segue vê)
							<br />
							<br />
							<strong>Quando usar:</strong> Você tem mais tempo que dinheiro,
							está construindo marca longo prazo, quer audiência leal
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Tráfego Pago (Anúncios)
						</Headline>
						<BodyText>
							<strong>✅ Vantagens:</strong> Resultados rápidos (1-2 semanas),
							alcance massivo, segmentação precisa, previsível
							<br />
							<br />
							<strong>❌ Desvantagens:</strong> Custa dinheiro, para quando você
							para de pagar, precisa aprender a otimizar
							<br />
							<br />
							<strong>Quando usar:</strong> Você quer crescer rápido, tem
							orçamento (mínimo R$ 300/mês), precisa de clientes agora, quer
							escalar
						</BodyText>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Label className="mb-2 block font-bold text-sm">
							COMBINAÇÃO IDEAL: 70% ORGÂNICO + 30% PAGO
						</Label>
						<BodyText>
							Não é "ou...ou", é "e". Use orgânico para construir autoridade e
							relacionamento. Use pago para acelerar crescimento e alcançar quem
							ainda não te conhece. Profissionais de sucesso fazem os dois.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Fundamentos de Facebook e Instagram Ads
					</Headline>

					<BodyText>
						Primeiro, entenda: Facebook Ads = Instagram Ads. São a mesma
						plataforma (Meta). Você cria anúncio uma vez, escolhe se aparece no
						Facebook, Instagram ou ambos.
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Como a Plataforma Funciona (Leilão de Anúncios)
						</Headline>
						<BodyText>
							Facebook não cobra preço fixo. É leilão: vários anunciantes
							competem para mostrar anúncio para mesma pessoa. Quem ganha?
							<br />
							<br />
							<strong>Fórmula:</strong> (Valor do Lance × Taxa de Engajamento ×
							Relevância) = Pontuação Total
							<br />
							<br />
							Você NÃO precisa pagar mais que concorrentes. Se seu anúncio é
							mais relevante (pessoas clicam, curtem, comentam), você paga MENOS
							e alcança MAIS.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Estrutura: Campanha → Conjunto de Anúncios → Anúncios
						</Headline>
						<BodyText className="text-sm">
							<strong>1. Campanha:</strong> Objetivo geral (Reconhecimento,
							Tráfego, Conversões)
							<br />
							<strong>2. Conjunto de Anúncios:</strong> Quem verá (segmentação),
							quanto gasta (orçamento), onde aparece
							<br />
							<strong>3. Anúncios:</strong> Criativos (imagem/vídeo + texto) que
							pessoas veem
							<br />
							<br />
							<em>
								Você cria 1 campanha, dentro dela 2-3 conjuntos (públicos
								diferentes), em cada conjunto 2-3 anúncios (criativos
								diferentes).
							</em>
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Gerenciador de Anúncios vs Impulsionar Post
						</Headline>
						<BodyText>
							<strong>Impulsionar Post (botão no Instagram):</strong> Rápido,
							simples, MAS opções limitadas. Bom para teste rápido.
							<br />
							<br />
							<strong>Gerenciador de Anúncios (ads.facebook.com):</strong>{" "}
							Completo, todas as opções, melhor controle. Use este para
							campanhas sérias.
							<br />
							<br />
							<em>Regra: Impulsionar para testar, Gerenciador para escalar.</em>
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quanto Investir: Orçamentos Realistas para 2025
					</Headline>

					<ContentCard variant="accent" accentPosition="left" className="mt-4">
						<Headline size="sm" className="mb-4">
							Orçamentos por Nível
						</Headline>
						<BodyText>
							<strong>Iniciante (Teste):</strong> R$ 10-20/dia (R$ 300-600/mês)
							<br />
							Suficiente para testar anúncios, aprender, ter primeiros
							resultados. Não espere escalar com isso, mas dá para validar.
							<br />
							<br />
							<strong>Intermediário (Crescimento):</strong> R$ 30-50/dia (R$
							900-1.500/mês)
							<br />
							Orçamento sério para crescer audiência, gerar leads consistentes.
							Aqui começa a fazer sentido financeiramente.
							<br />
							<br />
							<strong>Avançado (Escala):</strong> R$ 100+/dia (R$ 3.000+/mês)
							<br />
							Para profissionais faturando R$ 20k+/mês. Escala rápida, múltiplas
							campanhas, otimizações avançadas.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Custos Médios Brasil 2025
						</Headline>
						<BodyText className="text-sm">
							<strong>CPC (Custo por Clique):</strong> R$ 0,50-4,00 (depende
							muito do nicho e qualidade do anúncio)
							<br />
							<strong>CPM (Custo por 1.000 impressões):</strong> R$ 10-40
							<br />
							<strong>CPL (Custo por Lead):</strong> R$ 5-50 (depende do funil)
							<br />
							<br />
							<em>
								Nichos competitivos (advocacia, medicina, finanças) têm CPCs
								mais altos. Nichos menos competitivos (artesanato, aulas de
								música) têm CPCs menores.
							</em>
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Definindo Objetivos de Campanha
					</Headline>

					<BodyText>
						Facebook tem 6 objetivos principais. Escolha baseado no que você
						quer AGORA (não o que você quer que cliente faça depois).
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<BulletList
							items={[
								"Reconhecimento (Alcance): Mostrar sua marca para MUITA gente. Use quando: lançamento, precisa ser conhecido",
								"Tráfego: Levar pessoas para seu site/WhatsApp. Use quando: tem site otimizado ou quer direcionar para conversa",
								"Engajamento: Curtidas, comentários, compartilhamentos. Use quando: quer provar social, aumentar credibilidade",
								"Geração de Leads: Capturar contatos (formulário direto no Facebook). Use quando: quer email/telefone de interessados",
								"Conversões: Venda/agendamento direto. Use quando: tem Pixel instalado e já tem tráfego",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Label className="mb-2 block font-bold text-sm">
							QUAL OBJETIVO ESCOLHER PARA PROFISSIONAIS AUTÔNOMOS?
						</Label>
						<BodyText>
							<strong>Maioria dos casos: TRÁFEGO</strong> (para WhatsApp ou site
							de agendamento)
							<br />
							<strong>
								Se tem site com formulário otimizado: GERAÇÃO DE LEADS
							</strong>
							<br />
							<strong>Se já tem audiência e quer reengajar: ENGAJAMENTO</strong>
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Segmentação: Acertar o Público Certo
					</Headline>

					<BodyText>
						Segmentação é 70% do sucesso do anúncio. Criativo incrível para
						público errado = dinheiro jogado fora. Aqui estão os 4 tipos de
						segmentação:
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							1. SEGMENTAÇÃO DEMOGRÁFICA
						</Label>
						<BulletList
							items={[
								"Localização: Cidade, raio de km (ex: 10km do seu escritório), bairros específicos",
								"Idade: Faixa etária do seu cliente ideal (ex: 25-45 anos)",
								"Gênero: Se relevante (personal para mulheres, barbearia para homens)",
								"Idioma: Português (Brasil) - sempre",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							2. SEGMENTAÇÃO POR INTERESSES
						</Label>
						<BodyText className="text-sm">
							Facebook sabe TUDO sobre as pessoas: o que curtem, páginas que
							seguem, apps que usam.
							<br />
							<br />
							<strong>Exemplos:</strong>
							<br />• Nutricionista: Interesse em "Vida saudável", "Musculação",
							"Dieta low carb"
							<br />• Designer: Interesse em "Empreendedorismo", "Pequenas
							empresas", "Marketing"
							<br />• Psicólogo: Interesse em "Autoajuda", "Meditação",
							"Ansiedade"
							<br />
							<br />
							<strong>Dica:</strong> Combine 3-5 interesses relacionados. Não
							seja muito amplo ("Esportes") nem muito restrito ("Crossfit +
							Vegan + Yoga + Minimalismo" = 3 pessoas no Brasil).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							3. PÚBLICOS PERSONALIZADOS
						</Label>
						<BodyText className="text-sm">
							Pessoas que JÁ interagiram com você:
							<br />• Visitantes do seu site (precisa Pixel instalado)
							<br />• Pessoas que seguem você no Instagram/Facebook
							<br />• Lista de clientes (upload de emails/telefones)
							<br />• Quem assistiu seus vídeos (25%, 50%, 95%)
							<br />
							<br />
							<strong>Poder do público personalizado:</strong> Essas pessoas já
							te conhecem = conversão 3-5x maior que público frio. Use para
							reengajar e converter.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							4. PÚBLICOS SEMELHANTES (LOOKALIKE)
						</Label>
						<BodyText className="text-sm">
							Facebook encontra pessoas SIMILARES aos seus melhores clientes.
							<br />
							<br />
							<strong>Como criar:</strong>
							<br />
							1. Crie público personalizado com seus clientes
							<br />
							2. Peça ao Facebook para criar "público semelhante 1%" (1% da
							população brasileira com características similares)
							<br />
							3. Use este público para alcançar novos clientes com perfil ideal
							<br />
							<br />
							<em>
								Lookalike é arma secreta dos profissionais avançados. Conversão
								costuma ser 2-3x melhor que segmentação por interesse.
							</em>
						</BodyText>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Label className="mb-2 block font-bold text-sm">
							ERROS FATAIS DE SEGMENTAÇÃO
						</Label>
						<BulletList
							items={[
								"Muito amplo: 'Brasil inteiro, 18-65 anos' = joga dinheiro fora",
								"Muito restrito: '5km do meu escritório, 28-32 anos, interesse X' = 50 pessoas = anúncio não roda",
								"Não testar: Criar 1 público só. SEMPRE teste 2-3 públicos diferentes",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Criando Anúncios que Convertem
					</Headline>

					<BodyText>
						Anúncio tem 3 partes: IMAGEM/VÍDEO (para) + TEXTO (engaja) + CTA
						(converte). Vamos dominar cada uma:
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Copywriting Persuasivo (Texto do Anúncio)
						</Headline>
						<BodyText className="mb-2">
							<strong>Estrutura que funciona:</strong>
						</BodyText>
						<BodyText className="text-sm">
							<strong>1. GANCHO (primeira linha):</strong> Pergunta provocativa
							ou afirmação forte que para scroll
							<br />• ❌ Ruim: "Olá, sou nutricionista e ofereço consultas"
							<br />• ✅ Bom: "Dieta restritiva não funciona. E você sabe
							disso."
							<br />
							<br />
							<strong>2. DOR (problema do cliente):</strong> Mostra que você
							entende a frustração dele
							<br />• "Você já tentou 5 dietas diferentes e todas te deixaram
							com fome e irritado. Perdeu peso e ganhou tudo de volta em 2
							meses."
							<br />
							<br />
							<strong>3. SOLUÇÃO (seu serviço):</strong> Como você resolve o
							problema
							<br />• "Meu método de nutrição comportamental te ensina a comer
							de forma saudável SEM passar fome, SEM proibições, com resultados
							sustentáveis."
							<br />
							<br />
							<strong>4. CTA (chamada para ação):</strong> O que você quer que
							ele faça AGORA
							<br />• "Clique para agendar consulta gratuita de 30min e descubra
							como alcançar seu peso ideal sem sofrimento."
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Imagens/Vídeos: Especificações e Boas Práticas
						</Headline>
						<BulletList
							items={[
								"Formato quadrado (1:1) ou vertical (4:5) funcionam melhor que horizontal",
								"Resolução mínima: 1080x1080px (qualidade HD)",
								"Texto na imagem: Máximo 20% da área (muito texto = alcance menor)",
								"Rostos funcionam 2x melhor que paisagens/objetos",
								"Vídeos curtos (15-30s) têm engajamento 3x maior que imagens estáticas",
							]}
						/>

						<BodyText className="mt-4">
							<strong>Formatos que convertem:</strong>
						</BodyText>
						<BulletList
							items={[
								"Carrossel (3-10 imagens): Bom para mostrar antes/depois, portfólio, passo a passo",
								"Vídeo curto: Depoimento de cliente, transformação, você explicando serviço",
								"Stories Ads: Formato vertical, imersivo, ótimo para mobile (80% dos usuários)",
							]}
							className="mt-2"
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Exemplos de Anúncios de Profissionais Brasileiros
						</Headline>
						<BodyText className="text-sm">
							<strong>Personal Trainer:</strong>
							<br />
							Imagem: Antes/depois de cliente
							<br />
							Texto: "Cansada de treinar sozinha e não ver resultado? Maria
							perdeu 12kg em 4 meses com treino personalizado. Próxima pode ser
							você."
							<br />
							CTA: "Agende avaliação gratuita"
							<br />
							<br />
							<strong>Designer:</strong>
							<br />
							Carrossel: 5 logos diferentes criados
							<br />
							Texto: "Sua marca merece um logo profissional que te destaca.
							Criei 200+ identidades para pequenas empresas em 2024."
							<br />
							CTA: "Ver portfólio completo"
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Métricas e Otimização
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Métricas Principais (O Que Você DEVE Acompanhar)
						</Headline>
						<BulletList
							items={[
								"CTR (Taxa de Clique): % de pessoas que viram e clicaram. Bom: 1-3%. Ótimo: 3%+. Ruim: <0,5%",
								"CPC (Custo por Clique): Quanto você paga por cada clique. Bom: R$ 0,50-2. Aceitável: R$ 2-4. Caro: R$ 4+",
								"CPL (Custo por Lead): Quanto custa cada contato. Bom: R$ 5-20. Aceitável: R$ 20-50. Caro: R$ 50+",
								"ROAS (Return on Ad Spend): Para cada R$ 1 gasto, quanto volta. Mínimo: 2:1. Bom: 3-5:1. Excelente: 5+:1",
								"Frequência: Quantas vezes mesma pessoa viu anúncio. Ideal: 1-3. Atenção: 4-6. Trocar criativo: 7+",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Quando Desligar Anúncios que Não Performam
						</Headline>
						<BodyText>
							<strong>Regra geral:</strong> Dê no mínimo 3-7 dias e R$ 100-200
							gastos para julgar.
							<br />
							<br />
							<strong>Desligue se:</strong>
							<br />• CTR {"<"} 0,5% após 3 dias (criativo ruim ou público
							errado)
							<br />• CPC {">"} R$ 5 consistentemente (você está pagando caro
							demais)
							<br />• Zero conversões após R$ 200 gastos (algo está muito
							errado)
							<br />• Frequência {">"} 8 (você está saturando audiência)
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Testes A/B: Como Otimizar Continuamente
						</Headline>
						<BodyText>
							Nunca rode 1 anúncio só. Sempre teste 2-3 variações e o Facebook
							mostra qual performa melhor.
							<br />
							<br />
							<strong>O que testar:</strong>
							<br />• Criativos: Imagem A vs Vídeo B vs Carrossel C
							<br />• Textos: Gancho A vs Gancho B (mesma imagem)
							<br />• Públicos: Interesse X vs Interesse Y vs Lookalike
							<br />• CTAs: "Saiba Mais" vs "Entre em Contato" vs "Agendar
							Agora"
							<br />
							<br />
							<strong>Frequência de otimização:</strong> Revise métricas a cada
							3 dias, ajuste a cada 7 dias, troque criativos a cada 14-30 dias.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Erros Fatais em Tráfego Pago
					</Headline>

					<BulletList
						items={[
							"Impulsionar post sem estratégia: 'Ah, esse post ficou legal, vou impulsionar' = desperdício. Impulsione apenas posts com objetivo claro e CTA forte",
							"Não usar Pixel de rastreamento: Sem Pixel, Facebook não sabe quem converteu = não consegue otimizar. Instale ANTES de anunciar",
							"Investir sem testar criativos: Rodar 1 anúncio só = você não sabe se poderia ter resultado 2x melhor com criativo diferente. Sempre teste 3 variações",
							"Desistir antes de ter dados: Rodar anúncio por 2 dias e desligar = não deu tempo de aprender nada. Mínimo 7 dias e R$ 100 gastos por teste",
							"Não ter oferta clara: Anúncio lindo mas sem CTA claro = pessoa clica, não sabe o que fazer, sai. Sempre tenha próximo passo óbvio",
						]}
						className="mt-4"
					/>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-12 text-center"
					>
						<Headline size="sm" className="mb-4">
							Acelere Seus Resultados na Savoir Link
						</Headline>
						<BodyText className="mb-6">
							Enquanto você investe em anúncios, a Savoir Link já conecta você
							com clientes qualificados. Compre créditos, desbloqueie os contatos
							de quem busca seu serviço e fale diretamente com o cliente - sem
							precisar competir por atenção em anúncios.
						</BodyText>
						<Link href="/precos">
							<PrimaryButton>Começar na Savoir Link</PrimaryButton>
						</Link>
					</ContentCard>
				</>
			)}

			{/* Article 3: Divulgar Serviços nas Redes Sociais */}
			{post.slug ===
				"divulgar-servicos-redes-sociais-estrategias-organicas-2025" && (
				<>
					<BodyText>
						Orçamento zero para marketing? Redes sociais são sua melhor amiga.
						85% dos brasileiros usam redes sociais diariamente - seus futuros
						clientes estão lá, conversando, buscando soluções. Este guia vai te
						ensinar estratégias orgânicas (sem pagar nada) para crescer nas
						redes, atrair clientes e construir autoridade em 2025.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							O Que Você Vai Dominar
						</Headline>
						<BulletList
							items={[
								"Por que redes sociais são essenciais em 2025",
								"Escolher as redes certas para seu negócio",
								"Estratégia de conteúdo: o que postar e quando",
								"Frequência e consistência ideais",
								"Técnicas de crescimento orgânico comprovadas",
								"Transformar seguidores em clientes pagantes",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Por Que Redes Sociais São Essenciais Para Profissionais em 2025?
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<BodyText>
							<strong>Fatos concretos Brasil 2025:</strong>
							<br />• 85% dos brasileiros usam redes sociais diariamente (153
							milhões de pessoas)
							<br />• Tempo médio: 3h42min/dia em redes sociais
							<br />• 67% das pessoas pesquisam profissionais no Instagram antes
							de contratar
							<br />• 78% confiam em recomendações de pessoas que seguem nas
							redes
							<br />
							<br />
							<strong>Tradução:</strong> Se você não está nas redes, você é
							invisível para 2/3 dos potenciais clientes.
						</BodyText>
					</ContentCard>

					<BulletList
						items={[
							"Gratuidade e alcance: Zero custo para começar, alcance milhares de pessoas",
							"Construção de autoridade: Posts educativos te posicionam como expert",
							"Relacionamento direto: DM, comentários - conversa 1:1 com possíveis clientes",
							"Prova social: Seguidores, depoimentos, cases visíveis = credibilidade instantânea",
						]}
						className="mt-6"
					/>

					<Headline size="sm" className="mt-8 mb-4">
						Escolhendo as Redes Sociais Certas para Seu Negócio
					</Headline>

					<BodyText>
						Você NÃO precisa estar em todas as redes. Melhor dominar 1-2 redes
						que estar mal em 5. Aqui está o guia de escolha:
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Instagram: Serviços Visuais e Lifestyle
						</Headline>
						<BodyText>
							<strong>Ideal para:</strong> Design, fotografia, personal trainer,
							nutricionista, estética, arquitetura, moda
							<br />
							<br />
							<strong>Público:</strong> 18-45 anos, maioria mulheres (55%),
							classe B/C
							<br />
							<br />
							<strong>Formato:</strong> Imagens, carrosséis, reels (vídeos
							curtos), stories
							<br />
							<br />
							<strong>Use Instagram se:</strong> Seu serviço tem apelo visual,
							você consegue mostrar antes/depois, transformações, trabalha com
							B2C (direto ao consumidor)
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							LinkedIn: B2B e Serviços Corporativos
						</Headline>
						<BodyText>
							<strong>Ideal para:</strong> Consultoria, desenvolvimento,
							marketing, advocacia empresarial, contabilidade, coaching
							executivo
							<br />
							<br />
							<strong>Público:</strong> 25-55 anos, decisores, empreendedores,
							executivos, classe A/B
							<br />
							<br />
							<strong>Formato:</strong> Posts de texto longo, artigos, PDFs,
							vídeos profissionais
							<br />
							<br />
							<strong>Use LinkedIn se:</strong> Você vende para empresas (B2B),
							serviços de alto ticket (R$ 2.000+), quer ser visto como
							autoridade profissional
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Facebook: Serviços Locais e Públicos 35+
						</Headline>
						<BodyText>
							<strong>Ideal para:</strong> Serviços domésticos (encanador,
							eletricista, diarista), aulas particulares, serviços de bairro
							<br />
							<br />
							<strong>Público:</strong> 35-65 anos, famílias, aposentados,
							classe B/C/D
							<br />
							<br />
							<strong>Formato:</strong> Posts, vídeos, grupos (MUITO
							importantes), Facebook Marketplace
							<br />
							<br />
							<strong>Use Facebook se:</strong> Seu público é 35+, você atende
							localmente, participa de grupos da sua cidade/bairro
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							TikTok: Educação e Entretenimento para Jovens
						</Headline>
						<BodyText>
							<strong>Ideal para:</strong> Educadores, criadores de conteúdo,
							qualquer serviço que pode ser ensinado em vídeos curtos
							<br />
							<br />
							<strong>Público:</strong> 16-35 anos, curiosos, alto engajamento
							<br />
							<br />
							<strong>Formato:</strong> Vídeos verticais 15-60s, trends, humor,
							educacional
							<br />
							<br />
							<strong>Use TikTok se:</strong> Você consegue criar vídeos curtos
							educativos/divertidos, quer crescer MUITO rápido (algoritmo
							favorece novos criadores), público jovem te interessa
						</BodyText>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Matriz de Decisão: Onde Focar?
						</Headline>
						<BodyText className="text-sm">
							<strong>Iniciante:</strong> Escolha 1 rede onde seu cliente ideal
							está + 1 backup
							<br />
							<strong>Intermediário:</strong> Domine 2 redes complementares (ex:
							Instagram + LinkedIn)
							<br />
							<strong>Avançado:</strong> 3 redes + reaproveitamento de conteúdo
							<br />
							<br />
							<em>Regra: Melhor ser excelente em 1 rede que medíocre em 5.</em>
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Estratégia de Conteúdo: O Que Postar?
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Regra 80/20: Valor vs Venda
						</Headline>
						<BodyText>
							<strong>80% Conteúdo de Valor:</strong> Educar, inspirar,
							entreter, resolver problemas
							<br />
							<strong>20% Conteúdo de Venda:</strong> Ofertas, chamadas para
							ação, divulgação direta
							<br />
							<br />
							<em>
								Por quê? Se você só vende, ninguém te segue. Se você dá valor,
								constrói audiência que QUER comprar de você.
							</em>
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Pilares de Conteúdo (3-5 Temas Recorrentes)
						</Headline>
						<BodyText className="mb-2">
							Não poste aleatoriamente. Defina 3-5 pilares (temas) e alterne
							entre eles. Exemplos:
						</BodyText>

						<BodyText className="mt-4 text-sm">
							<strong>Nutricionista:</strong>
							<br />
							1. Mitos e verdades sobre alimentação
							<br />
							2. Receitas saudáveis simples
							<br />
							3. Transformações de clientes (antes/depois)
							<br />
							4. Dicas de compra no supermercado
							<br />
							5. Bastidores das consultas
							<br />
							<br />
							<strong>Designer:</strong>
							<br />
							1. Dicas de design para iniciantes
							<br />
							2. Cases de clientes (processo e resultado)
							<br />
							3. Tendências de design 2025
							<br />
							4. Bastidores dos projetos
							<br />
							5. Comparações antes/depois
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							4 Tipos de Conteúdo que TODA Rede Precisa
						</Headline>
						<BulletList
							items={[
								"EDUCACIONAL: Dicas, tutoriais, mitos vs verdades, explicações. Ex: '5 erros que sabotam sua dieta'",
								"INSPIRACIONAL: Transformações, depoimentos, histórias de sucesso. Ex: 'Cliente perdeu 15kg em 4 meses'",
								"RELACIONAL: Bastidores, dia a dia, você como pessoa. Ex: Stories mostrando processo de trabalho",
								"VENDAS: Ofertas, serviços, CTAs diretos. Ex: 'Últimas 3 vagas de consultoria abril'",
							]}
						/>

						<BodyText className="mt-4">
							<strong>Distribuição ideal:</strong> 40% educacional, 30%
							inspiracional, 20% relacional, 10% vendas
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Frequência e Consistência
					</Headline>

					<ContentCard variant="accent" accentPosition="left" className="mt-4">
						<Headline size="sm" className="mb-4">
							Frequência Ideal por Rede (2025)
						</Headline>
						<BodyText>
							<strong>Instagram:</strong>
							<br />• Posts no feed: 4-7x/semana (ideal: 1x/dia)
							<br />• Stories: Diários (mínimo 3-5 stories/dia)
							<br />• Reels: 1-3x/semana (máximo alcance orgânico)
							<br />
							<br />
							<strong>LinkedIn:</strong>
							<br />• Posts: 3-5x/semana
							<br />• Artigos longos: 1-2x/mês
							<br />
							<br />
							<strong>Facebook:</strong>
							<br />• Posts: 3-4x/semana
							<br />• Stories: 3-5x/semana
							<br />• Grupos: Participar diariamente
							<br />
							<br />
							<strong>TikTok/Reels:</strong>
							<br />• 1-3 vídeos/dia (formato curto permite alta frequência)
						</BodyText>
					</ContentCard>

					<BodyText className="mt-6">
						<strong>
							Consistência {">"} Qualidade (nos primeiros 3 meses):
						</strong>
						<br />
						Post regular mas imperfeito {">"} Post perfeito mas irregular.
						Algoritmo recompensa consistência. Depois de ganhar tração, você
						aumenta qualidade mantendo consistência.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						Técnicas de Engajamento e Crescimento Orgânico
					</Headline>

					<BulletList
						items={[
							"Hashtags estratégicas: 10-15 hashtags (3 grandes 100k+, 7 médias 10-100k, 5 pequenas 1-10k). Evite #amor #life (genéricas demais)",
							"Geolocalização: SEMPRE marque localização em posts (principalmente serviços locais). Alcance aumenta 79%",
							"Perguntas e enquetes: Stories com caixinha de perguntas, enquetes, quizzes. Engajamento = algoritmo impulsiona",
							"Responder 100% dos comentários: Nas primeiras 2 horas após postar, responda TODOS os comentários. Algoritmo interpreta como conteúdo interessante",
							"Participar de comunidades: Comente em posts de contas do seu nicho (não concorrentes diretos). 10-15 comentários/dia valor",
							"Parcerias e colaborações: Lives conjuntas, posts conjuntos, menções mútuas. Você acessa audiência do parceiro",
							"Conteúdo gerado por usuários: Reposte depoimentos, fotos de clientes usando seu serviço (com permissão)",
						]}
						className="mt-4"
					/>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Label className="mb-2 block font-bold text-sm">
							TÉCNICA NINJA: COMENTÁRIO ESTRATÉGICO
						</Label>
						<BodyText>
							Quando conta grande do seu nicho posta, seja um dos PRIMEIROS a
							comentar (notificações ligadas). Comentário de valor (não 'legal!'
							ou emoji). Centenas de pessoas verão seu comentário = tráfego
							orgânico para seu perfil. 15min/dia fazendo isso = 500+
							visitas/mês.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Transformando Seguidores em Clientes
					</Headline>

					<BodyText>
						Ter 10.000 seguidores que não compram = 0 clientes. Ter 500
						seguidores engajados = 5-10 clientes/mês. Foco em conversão, não
						vaidade métrica.
					</BodyText>

					<BulletList
						items={[
							"CTAs claros: Todo post deve ter próximo passo. 'Comenta AÍ se você...' 'Salva esse post para...' 'Manda DM para...'",
							"Link na bio otimizado: Use Linktree/Beacons com botões: Agendar, WhatsApp, Portfólio, Depoimentos",
							"Stories com caixinha de perguntas: 'Dúvidas sobre [seu serviço]?' = oportunidade de vender na resposta",
							"Lives e webinars: Ensine algo valioso ao vivo, no final ofereça consultoria/serviço. Taxa conversão 10-20%",
							"Ofertas exclusivas: 'Desconto de 20% só para seguidores do Instagram' = incentivo para comprar",
							"Remarketing manual: Todo mundo que comenta/curte posts de venda = enviar DM personalizada depois",
						]}
						className="mt-4"
					/>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Funil de Conversão nas Redes
						</Headline>
						<BodyText className="text-sm">
							<strong>1. ATRAÇÃO:</strong> Post educativo/inspiracional atrai
							visitantes
							<br />
							<strong>2. ENGAJAMENTO:</strong> Visitante curte, comenta, segue
							<br />
							<strong>3. RELACIONAMENTO:</strong> Stories diários, DM,
							construção de confiança (1-4 semanas)
							<br />
							<strong>4. CONVERSÃO:</strong> Post de oferta, DM com proposta,
							agendamento
							<br />
							<strong>5. FIDELIZAÇÃO:</strong> Cliente vira seguidor leal,
							indica outros
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Ferramentas Gratuitas para Gestão de Redes
					</Headline>

					<BulletList
						items={[
							"Canva (grátis): Criar posts, stories, banners profissionais. Templates prontos incríveis",
							"CapCut: Edição de vídeos (reels, TikToks). Fácil de usar, efeitos virais integrados",
							"Later/Buffer (plano free): Agendar posts em até 3 redes sociais. Economiza MUITO tempo",
							"Metricool: Análise de métricas (alcance, engajamento, melhores horários). Plano grátis OK",
							"ChatGPT: Ajudar com ideias de conteúdo, escrever legendas, gerar variações de post",
							"Unsplash/Pexels: Fotos gratuitas de alta qualidade (quando não tem foto própria)",
						]}
						className="mt-4"
					/>

					<Headline size="sm" className="mt-8 mb-4">
						Erros que Matam Seu Alcance Orgânico
					</Headline>

					<BulletList
						items={[
							"Comprar seguidores/engajamento: Algoritmo detecta fake, seu alcance despenca PERMANENTEMENTE. Nunca faça isso",
							"Postar conteúdo de baixa qualidade: Melhor pular 1 dia que postar algo ruim. Algoritmo penaliza posts com baixo engajamento",
							"Usar bots de automação: Curtir/comentar/seguir automatizado = ban da conta. Instagram é implacável com isso",
							"Ignorar interações: Não responder comentários/DMs = algoritmo interpreta que seu conteúdo não é relevante",
							"Focar em quantidade de seguidores: 10k seguidores com 0,5% engajamento = conta morta. 1k seguidores com 10% engajamento = ouro",
							"Não analisar métricas: Postar sem olhar o que funciona = atirar no escuro. Revise Insights semanalmente",
						]}
						className="mt-4"
					/>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-12 text-center"
					>
						<Headline size="sm" className="mb-4">
							Amplifique Sua Presença com a Savoir Link
						</Headline>
						<BodyText className="mb-6">
							Suas redes sociais constroem autoridade. A Savoir Link converte
							essa autoridade em clientes. Compre créditos, desbloqueie os
							contatos dos clientes que buscam seu serviço e fale diretamente com
							quem precisa do seu trabalho.
						</BodyText>
						<Link href="/precos">
							<PrimaryButton>Começar na Savoir Link</PrimaryButton>
						</Link>
					</ContentCard>
				</>
			)}
		</>
	);
}
