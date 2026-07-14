import Link from "next/link";
import { BulletList } from "~/components/ui/bullet-list";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

export function CareerContent({ post }: { post: BlogPost }) {
	return (
		<>
			{/* Article 1: Quanto Cobrar Como Freelancer */}
			{post.slug === "quanto-cobrar-freelancer-5-metodos-precificacao-2025" && (
				<>
					<BodyText>
						A pergunta que tira o sono de todo freelancer: quanto cobrar? Cobre
						muito caro, perde clientes. Cobre barato demais, trabalha feito
						condenado e mal paga as contas. Este guia vai resolver esse dilema
						de uma vez por todas com 5 métodos práticos de precificação usados
						por freelancers de sucesso no Brasil.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Os 5 Métodos de Precificação
						</Headline>
						<BulletList
							items={[
								"Método 1: Precificação por Hora Trabalhada",
								"Método 2: Precificação por Projeto (Valor Fixo)",
								"Método 3: Precificação por Valor Entregue",
								"Método 4: Precificação por Retainer (Mensalidade)",
								"Método 5: Precificação Híbrida",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Por Que Precificar Corretamente é Crucial?
					</Headline>

					<BodyText>
						78% dos freelancers brasileiros subestimam seus preços nos primeiros
						anos, segundo pesquisa da Workana 2024. Resultado? Burnout,
						frustração e falência. Precificação errada mata negócios freelance
						mais rápido que falta de clientes.
					</BodyText>

					<BulletList
						items={[
							"Subprecificação: Você trabalha 12h/dia por R$ 2.000/mês (menos que salário mínimo por hora)",
							"Precificação alta demais: Assusta clientes e você fica sem projetos",
							"Precificação sem critério: Ora cobre R$ 500, ora R$ 3.000 pelo mesmo serviço - confunde você e o mercado",
						]}
						className="mt-4"
					/>

					<Headline size="sm" className="mt-8 mb-4">
						Método 1: Precificação por Hora Trabalhada
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Você calcula quanto precisa ganhar
							por mês, divide pelas horas disponíveis e cobra por hora
							trabalhada no projeto.
						</BodyText>

						<ContentCard
							variant="accent"
							accentPosition="left"
							className="mt-2"
						>
							<Label className="mb-2 block font-bold text-sm">FÓRMULA</Label>
							<BodyText className="text-sm">
								<strong>
									Valor/Hora = (Custos Mensais + Lucro Desejado) ÷ Horas
									Trabalháveis
								</strong>
								<br />
								<br />
								<strong>Exemplo Real Brasil 2025:</strong>
								<br />• Custos mensais: R$ 4.000 (aluguel, comida, internet,
								MEI, etc.)
								<br />• Lucro desejado: R$ 3.000
								<br />• Total necessário: R$ 7.000/mês
								<br />• Horas trabalháveis: 120h/mês (assumindo 30h/semana em
								projetos pagos)
								<br />•{" "}
								<strong>Valor/hora = R$ 7.000 ÷ 120h = R$ 58/hora</strong>
							</BodyText>
						</ContentCard>

						<BodyText className="mt-4">
							<strong>✅ Vantagens:</strong> Simples de calcular, justo para
							ambos os lados, fácil de ajustar se projeto muda
							<br />
							<strong>❌ Desvantagens:</strong> Teto de ganho (máx
							40-50h/semana), não valoriza eficiência (quanto mais rápido, menos
							ganha), clientes preferem preço fixo
							<br />
							<br />
							<strong>Quando usar:</strong> Projetos com escopo incerto,
							consultorias, manutenções contínuas, quando cliente prefere pagar
							por hora
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Método 2: Precificação por Projeto (Valor Fixo)
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Você estima quantas horas o
							projeto vai levar, multiplica pela sua hora, adiciona buffer de
							segurança (20-30%) e oferece preço fechado.
						</BodyText>

						<ContentCard
							variant="accent"
							accentPosition="left"
							className="mt-2"
						>
							<Label className="mb-2 block font-bold text-sm">
								EXEMPLO PRÁTICO
							</Label>
							<BodyText className="text-sm">
								<strong>Projeto:</strong> Criar logo + identidade visual básica
								<br />
								<strong>Tempo estimado:</strong> 12 horas (briefing, pesquisa,
								criação, revisões)
								<br />
								<strong>Sua hora:</strong> R$ 60/hora
								<br />
								<strong>Base:</strong> 12h × R$ 60 = R$ 720
								<br />
								<strong>Buffer 25%:</strong> R$ 720 × 1,25 = R$ 900
								<br />
								<strong>Preço final:</strong> R$ 900 (você oferece como preço
								fechado)
							</BodyText>
						</ContentCard>

						<BodyText className="mt-4">
							<strong>✅ Vantagens:</strong> Cliente prefere (sabe quanto vai
							pagar), você ganha mais se for eficiente (terminou em 8h, recebe
							por 12h)
							<br />
							<strong>❌ Desvantagens:</strong> Se estimou errado, prejuízo é
							seu; scope creep (cliente pede extras) pode arruinar margem
							<br />
							<br />
							<strong>Quando usar:</strong> Projetos bem definidos (logo, site,
							campanha), deliverables claros, cliente quer previsibilidade
						</BodyText>

						<ContentCard variant="default" className="mt-4">
							<Label className="mb-2 block font-bold text-sm text-primary">
								PROTEÇÃO CONTRA SCOPE CREEP
							</Label>
							<BodyText className="text-sm">
								Sempre inclua no contrato: &quot;Preço inclui X revisões.
								Revisões adicionais ou mudanças de escopo serão cobradas
								separadamente a R$ X/hora ou X% do projeto.&quot;
							</BodyText>
						</ContentCard>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Método 3: Precificação por Valor Entregue
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Você cobra baseado no IMPACTO que
							seu trabalho gera para o negócio do cliente, não no tempo gasto.
						</BodyText>

						<ContentCard
							variant="accent"
							accentPosition="left"
							className="mt-2"
						>
							<Label className="mb-2 block font-bold text-sm">
								EXEMPLO REAL
							</Label>
							<BodyText className="text-sm">
								<strong>Cenário:</strong> Cliente fatura R$ 50.000/mês. Site
								atual converte 1% (500 visitantes/mês = 5 clientes).
								<br />
								Você vai refazer site para converter 3% (500 visitantes = 15
								clientes).
								<br />
								<strong>Valor gerado:</strong> 10 clientes a mais/mês × ticket
								médio R$ 1.000 = R$ 10.000/mês extra
								<br />
								<strong>Seu preço:</strong> 10-20% do valor gerado no primeiro
								mês = R$ 1.000-2.000
								<br />
								<br />
								Trabalho levaria 20h × R$ 60/h = R$ 1.200 por hora. Mas por
								valor, cobra R$ 2.000. Win-win!
							</BodyText>
						</ContentCard>

						<BodyText className="mt-4">
							<strong>✅ Vantagens:</strong> Ganhos muito maiores, alinhamento
							de incentivos (cliente ganha, você ganha), valoriza expertise
							<br />
							<strong>❌ Desvantagens:</strong> Difícil de calcular valor exato,
							cliente pode questionar, requer negociação sofisticada
							<br />
							<br />
							<strong>Quando usar:</strong> Marketing (campanhas com ROI
							mensurável), consultoria estratégica, vendas (comissão por
							resultado), projetos com impacto financeiro claro
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Método 4: Precificação por Retainer (Mensalidade)
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Cliente paga valor fixo mensal por
							disponibilidade de X horas ou escopo definido de trabalho
							recorrente.
						</BodyText>

						<ContentCard
							variant="accent"
							accentPosition="left"
							className="mt-2"
						>
							<Label className="mb-2 block font-bold text-sm">
								ESTRUTURAS COMUNS
							</Label>
							<BodyText className="text-sm">
								<strong>Opção 1 - Por Horas:</strong>
								<br />
								Plano Bronze: 10h/mês = R$ 800 (R$ 80/h)
								<br />
								Plano Prata: 20h/mês = R$ 1.400 (R$ 70/h - desconto volume)
								<br />
								Plano Ouro: 40h/mês = R$ 2.400 (R$ 60/h - desconto maior)
								<br />
								<br />
								<strong>Opção 2 - Por Escopo:</strong>
								<br />
								Gestão de redes sociais: 12 posts/mês + stories + responder
								comentários = R$ 1.200/mês
							</BodyText>
						</ContentCard>

						<BodyText className="mt-4">
							<strong>✅ Vantagens:</strong> Renda previsível (R$ X garantido
							todo mês), relacionamento longo prazo, menos esforço de vendas
							<br />
							<strong>❌ Desvantagens:</strong> Cliente pode explorar (&quot;só
							mais uma coisinha&quot;), limites precisam estar MUITO claros,
							você fica preso a cliente chato
							<br />
							<br />
							<strong>Quando usar:</strong> Serviços recorrentes (social media,
							suporte, manutenção), clientes que precisam de você todo mês,
							quando quer previsibilidade
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Pesquisa de Mercado: Preços Reais Brasil 2025
					</Headline>

					<ContentCard variant="accent" accentPosition="left" className="mt-4">
						<Headline size="sm" className="mb-4">
							Média de Preços por Área (Freelancer Brasil)
						</Headline>
						<BodyText className="text-sm">
							<strong>Design Gráfico:</strong>
							<br />
							Logo: R$ 400-2.500 | Identidade visual completa: R$ 1.200-8.000
							<br />
							<br />
							<strong>Desenvolvimento Web:</strong>
							<br />
							Landing page: R$ 800-3.000 | Site institucional: R$ 2.500-15.000 |
							E-commerce: R$ 8.000-50.000
							<br />
							<br />
							<strong>Marketing Digital:</strong>
							<br />
							Gestão de redes (mês): R$ 800-3.500 | Campanha de ads: R$
							1.500-8.000 + budget mídia
							<br />
							<br />
							<strong>Redação/Copywriting:</strong>
							<br />
							Artigo blog (1000 palavras): R$ 100-800 | Sales page: R$ 600-5.000
							<br />
							<br />
							<strong>Consultoria:</strong>
							<br />
							Hora consultoria: R$ 150-1.000 | Projeto consultoria: R$
							3.000-50.000
						</BodyText>
					</ContentCard>

					<BodyText className="mt-6">
						<strong>Onde pesquisar:</strong> 99Freelas, Workana, Fiverr (filtro
						Brasil), grupos de Facebook da sua área, LinkedIn polls
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						Como Aumentar Preços sem Perder Clientes
					</Headline>

					<BulletList
						items={[
							"Timing perfeito: Após entregar projeto excelente, quando cliente está satisfeito",
							"Comunicação transparente: 'A partir de [data], meus preços serão reajustados para R$ X devido a [razão: demanda, custos, experiência]'",
							"Grandfathering: Manter preço antigo para clientes atuais por 3-6 meses como cortesia",
							"Agregar valor antes: Adicione serviço extra, melhore entrega, aí aumente preço",
							"Aumento gradual: 15-20% por ano é aceito. 50-100% de uma vez assusta",
						]}
						className="mt-4"
					/>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-12 text-center"
					>
						<Headline size="sm" className="mb-4">
							Precifique Certo e Ganhe o Que Merece
						</Headline>
						<BodyText className="mb-6">
							Na Savoir Link, você define seus próprios preços e negocia direto
							com o cliente. Sem leilão de preços, sem competição destrutiva.
							Compre créditos, desbloqueie os contatos de quem busca seu serviço e
							ofereça seu trabalho pelo valor justo.
						</BodyText>
						<Link href="/precos">
							<PrimaryButton>Começar na Savoir Link Agora</PrimaryButton>
						</Link>
					</ContentCard>
				</>
			)}

			{/* Article 2: MEI em 2025 */}
			{post.slug ===
				"mei-2025-guia-completo-formalizacao-prestadores-servicos" && (
				<>
					<BodyText>
						Trabalhar como freelancer informal no Brasil em 2025 é deixar
						dinheiro na mesa. Sem MEI, você perde clientes corporativos (que
						exigem nota fiscal), não tem direitos previdenciários e vive na
						incerteza. Este guia completo vai te mostrar TUDO sobre MEI: como
						abrir em 15 minutos, custos (spoiler: R$ 80,90/mês), benefícios e
						quando migrar para ME.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Neste Guia Você Vai Aprender
						</Headline>
						<BulletList
							items={[
								"O que é MEI e por que todo freelancer deveria ter",
								"Benefícios completos (aposentadoria, auxílios, CNPJ)",
								"Quanto custa mensalmente (detalhado)",
								"Como abrir MEI online em 15-30 minutos",
								"Obrigações e o que acontece se não cumprir",
								"Quando migrar para ME (Microempresa)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que é MEI e Por Que Formalizar em 2025?
					</Headline>

					<BodyText>
						MEI (Microempreendedor Individual) é um regime tributário
						simplificado criado em 2008 para formalizar pequenos negócios no
						Brasil. Em 2025, mais de 15,6 milhões de brasileiros já são MEIs - e
						esse número cresce 8% ao ano.
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<BodyText>
							<strong>Em termos simples:</strong> MEI te dá um CNPJ próprio,
							permite emitir notas fiscais e pagar impostos de forma super
							simplificada (um boleto só por mês). Você vira &quot;pessoa
							jurídica&quot; mas continua sendo você mesmo (sem sócios, sem
							complexidade).
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Benefícios do MEI para Profissionais Autônomos
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							1. Emissão de Notas Fiscais = Acesso a Clientes Corporativos
						</Headline>
						<BodyText>
							Empresas médias/grandes EXIGEM nota fiscal. Sem MEI, você perde
							60-70% das oportunidades no mercado B2B. Com MEI, você emite NFSe
							(Nota Fiscal de Serviço Eletrônica) para qualquer cliente.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							2. Benefícios Previdenciários (INSS)
						</Headline>
						<BulletList
							items={[
								"Aposentadoria por idade (65 anos homens, 62 mulheres)",
								"Aposentadoria por invalidez",
								"Auxílio-doença (após 12 meses contribuindo)",
								"Salário-maternidade (120 dias após 10 meses contribuindo)",
								"Pensão por morte para dependentes",
								"Auxílio-reclusão",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							3. CNPJ Próprio = Credibilidade
						</Headline>
						<BodyText>
							Ter CNPJ transmite profissionalismo. Clientes confiam mais, você
							consegue abrir contas PJ em bancos (com benefícios melhores que
							pessoa física), negocia com fornecedores como empresa.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							4. Tributação Simplificada e Fixa
						</Headline>
						<BodyText>
							Você paga UM boleto por mês (DAS) que já inclui todos os impostos.
							Sem IR complicado, sem múltiplos boletos, sem contador
							obrigatório. R$ 75-81/mês é TUDO que você paga de imposto
							(independente do faturamento até R$ 81k/ano).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							5. Acesso a Crédito e Benefícios
						</Headline>
						<BulletList
							items={[
								"Empréstimos PJ (juros menores que PF)",
								"Maquininha de cartão com taxas PJ",
								"Programas governamentais para micro empresas",
								"Comprar em atacado com CNPJ (preços melhores)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quem Pode Ser MEI? Requisitos e Limitações 2025
					</Headline>

					<ContentCard variant="accent" accentPosition="left" className="mt-4">
						<Headline size="sm" className="mb-4">
							✅ Requisitos para Ser MEI
						</Headline>
						<BulletList
							items={[
								"Faturar até R$ 81.000 por ano (R$ 6.750/mês em média)",
								"Não ter participação em outra empresa (como sócio ou titular)",
								"Ter no máximo 1 empregado contratado (salário mínimo ou piso da categoria)",
								"Exercer uma das 460+ atividades permitidas",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Atividades Permitidas para Freelancers (Mais Comuns)
						</Headline>
						<BodyText className="mb-2 text-sm">
							<strong>✅ PODE SER MEI:</strong> Designer gráfico, desenvolvedor
							web, redator, social media, fotógrafo, videomaker, professor
							particular, tradutor, personal trainer, nutricionista (com
							ressalvas), cabeleireiro, manicure, eletricista, encanador,
							pintor, pedreiro, técnico de informática, consultor de TI, DJ,
							músico, artesão, e 440+ outras atividades.
						</BodyText>
						<BodyText className="mt-4 text-sm">
							<strong>❌ NÃO PODE SER MEI:</strong> Médicos, dentistas,
							advogados, psicólogos, fisioterapeutas, engenheiros, arquitetos,
							contadores (profissões regulamentadas com conselho). Estes
							precisam ser autônomos (contribuinte individual) ou abrir empresa
							(ME, LTDA).
						</BodyText>
					</ContentCard>

					<BodyText className="mt-6">
						<strong>Verificar se sua atividade pode:</strong> Acesse gov.br/mei
						→ &quot;Atividades Permitidas&quot; ou pesquise seu CNAE (código da
						atividade)
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						Quanto Custa Ser MEI em 2025?
					</Headline>

					<ContentCard variant="accent" accentPosition="left" className="mt-4">
						<Headline size="sm" className="mb-4">
							Custos Mensais do MEI (DAS 2025)
						</Headline>
						<BodyText>
							<strong>Prestação de Serviços:</strong> R$ 80,90/mês
							<br />• INSS: R$ 75,90 (5% do salário mínimo R$ 1.518)
							<br />• ISS: R$ 5,00 (Imposto Sobre Serviços)
							<br />
							<br />
							<strong>Comércio:</strong> R$ 75,90/mês
							<br />• INSS: R$ 75,90
							<br />• ICMS: R$ 1,00
							<br />
							<br />
							<strong>Comércio + Serviços:</strong> R$ 81,90/mês
							<br />• INSS: R$ 75,90
							<br />• ICMS: R$ 1,00 + ISS: R$ 5,00
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Label className="mb-2 block font-bold text-sm text-primary">
							IMPORTANTE: ISSO É TUDO QUE VOCÊ PAGA
						</Label>
						<BodyText>
							Freelancer MEI faturando R$ 5.000/mês paga apenas R$ 80,90 de
							imposto (1,6% do faturamento). Compare com CLT ou autônomo que
							paga 20-27,5% de IR. MEI é MUITO vantajoso tributariamente.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Abrir MEI Online (Passo a Passo Completo)
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							PASSO 1: ACESSE O PORTAL GOV.BR
						</Label>
						<BulletList
							items={[
								"Entre em gov.br/mei",
								"Clique em 'Quero ser MEI' → 'Formalize-se'",
								"Faça login com sua conta gov.br (crie se não tiver - precisa CPF, email, celular)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							PASSO 2: PREENCHA OS DADOS
						</Label>
						<BulletList
							items={[
								"Dados pessoais: Nome, CPF, data nascimento, endereço residencial",
								"Escolha da atividade: Busque pelo nome (ex: 'Designer Gráfico') - pode escolher até 15 atividades (1 principal + 14 secundárias)",
								"Endereço comercial: Pode ser o mesmo da sua casa (sim, pode trabalhar de casa como MEI)",
								"Nome fantasia: Como sua empresa será conhecida (ex: 'Studio Design João Silva')",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							PASSO 3: DECLARAÇÕES
						</Label>
						<BodyText className="text-sm">
							Você vai declarar que:
							<br />• Não tem outra empresa
							<br />• Fatura até R$ 81k/ano
							<br />• Não é servidor público federal (estaduais/municipais
							podem, verificar lei do estado)
							<br />• Autoriza uso de endereço residencial para atividade
							econômica
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							PASSO 4: FINALIZE E BAIXE CERTIFICADO
						</Label>
						<BodyText className="text-sm">
							Após enviar, você recebe na hora o{" "}
							<strong>
								CCMEI (Certificado de Condição de Microempreendedor Individual)
							</strong>
							. Este é seu documento de CNPJ.
							<br />
							<br />
							<strong>Tempo total:</strong> 15-30 minutos
							<br />
							<strong>Custo:</strong> R$ 0,00 (abertura é gratuita!)
						</BodyText>
					</ContentCard>

					<BodyText className="mt-6">
						<strong>Inscrição municipal e estadual:</strong> Para prestação de
						serviços, você precisa de inscrição municipal (para emitir NFSe).
						Isso é automático em algumas cidades, em outras você precisa ir à
						prefeitura. Verifique no site da prefeitura da sua cidade.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						Obrigações do MEI em 2025
					</Headline>

					<BulletList
						items={[
							"Pagar DAS mensalmente até dia 20 (R$ 75-81/mês) - Boleto disponível no Portal do Empreendedor",
							"Declaração Anual de Faturamento (DASN-SIMEI) todo ano até 31 de maio - Declara quanto você faturou no ano anterior (super simples, 5 minutos)",
							"Emitir nota fiscal quando cliente pede (obrigatório para PJ, opcional para PF)",
							"Manter Relatório Mensal de Receitas - Planilha simples com entradas e saídas do mês (pode ser caderno, Excel, app)",
						]}
						className="mt-4"
					/>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Label className="mb-2 block font-bold text-sm">
							O QUE ACONTECE SE NÃO PAGAR DAS?
						</Label>
						<BodyText>
							Atraso: multa de 0,33% por dia + juros Selic. Após 12 meses sem
							pagar, MEI é cancelado e você perde benefícios INSS. Dívida vai
							para dívida ativa e pode cair na Serasa. Solução: Parcelar no
							portal (até 60x).
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Ferramentas para Gestão do MEI
					</Headline>

					<BulletList
						items={[
							"App MEI (governo): Acompanhar pagamentos, gerar DAS, fazer DASN-SIMEI",
							"Qipu: Contador virtual automatizado, lembra de pagar DAS, ajuda com declarações (R$ 0-59/mês)",
							"Conta Azul: Gestão financeira completa MEI (R$ 0 com limites, R$ 49-159 plano completo)",
							"Planilha Google: Template gratuito de controle de receitas/despesas",
							"NFE.io / Bling / Tiny: Emissores de nota fiscal eletrônica (muitos gratuitos até certo limite)",
						]}
						className="mt-4"
					/>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Migrar do MEI para ME?
					</Headline>

					<BodyText>
						MEI é perfeito para começar, mas tem limitações. Hora de migrar para
						ME (Microempresa) quando:
					</BodyText>

					<BulletList
						items={[
							"Faturamento ultrapassou R$ 81.000/ano (se passar de R$ 97.200, desenquadramento automático com multa)",
							"Precisa de mais de 1 funcionário",
							"Quer ter sócios",
							"Sua atividade não é permitida no MEI",
							"Quer participar de licitações governamentais (MEI tem restrições)",
						]}
						className="mt-4"
					/>

					<BodyText className="mt-6">
						<strong>Custos da ME:</strong> Contador obrigatório (R$
						200-600/mês), impostos pelo Simples Nacional (4-19% do faturamento
						dependendo da atividade e valor). Vale a pena quando fatura R$
						10k+/mês consistentemente.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-12 text-center"
					>
						<Headline size="sm" className="mb-4">
							Formalize-se e Cresça Profissionalmente
						</Headline>
						<BodyText className="mb-6">
							Com MEI, você pode emitir notas fiscais e atender clientes que
							buscam profissionais formalizados. Compre créditos na Savoir Link,
							desbloqueie os contatos de quem publicou um pedido e acesse
							oportunidades de maior valor.
						</BodyText>
						<Link href="/precos">
							<PrimaryButton>Criar Conta PJ na Savoir Link</PrimaryButton>
						</Link>
					</ContentCard>
				</>
			)}

			{/* Article 3: Como Criar Portfólio */}
			{post.slug ===
				"como-criar-portfolio-profissional-atrai-clientes-alto-valor" && (
				<>
					<BodyText>
						Seu portfólio é mais importante que seu currículo. Cliente não quer
						saber onde você estudou - quer ver o que você SABE fazer. Este guia
						vai te ensinar a criar um portfólio profissional que atrai clientes
						dispostos a pagar bem, mesmo se você ainda não tem clientes pagos.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							O Que Você Vai Aprender
						</Headline>
						<BulletList
							items={[
								"Por que portfólio é mais poderoso que currículo",
								"O que incluir (e o que NÃO incluir)",
								"Como criar portfólio sem clientes pagos",
								"Estrutura de case study que converte",
								"Melhores plataformas para hospedar",
								"Erros fatais que destroem credibilidade",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Por Que Seu Portfólio é Mais Importante Que Currículo?
					</Headline>

					<BodyText>
						Pesquisa da Behance 2024: 94% dos clientes decidem contratar
						freelancer baseado no portfólio, não no currículo. Você tem 7
						segundos para impressionar. Portfólio bem-feito = diferencial
						competitivo brutal.
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<BodyText>
							<strong>Portfólio é prova concreta de habilidades.</strong>{" "}
							Currículo diz &quot;sei Photoshop&quot;. Portfólio MOSTRA 10
							trabalhos incríveis feitos no Photoshop. Qual convence mais?
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Incluir em Um Portfólio Profissional
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Seções Essenciais (Obrigatórias)
						</Headline>
						<BulletList
							items={[
								"Sobre: Quem você é, o que faz, para quem trabalha (3-5 linhas diretas)",
								"Serviços: Lista clara do que você oferece e NÃO oferece",
								"Portfólio/Projetos: 5-10 melhores trabalhos (não mais que isso!)",
								"Depoimentos: 3-5 testemunhos de clientes satisfeitos",
								"Processo: Como você trabalha (opcional mas diferencia)",
								"Contato: Email, WhatsApp, formulário - MÚLTIPLAS opções",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Seções Opcionais (Agregam Valor)
						</Headline>
						<BulletList
							items={[
								"Blog: Artigos demonstrando expertise",
								"Certificações: Se relevantes para sua área",
								"Imprensa: Menções em blogs, podcasts, entrevistas",
								"FAQ: Responde objeções comuns antes do cliente perguntar",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Escolher Projetos para Exibir
					</Headline>

					<ContentCard variant="accent" accentPosition="left" className="mt-4">
						<Label className="mb-2 block font-bold text-sm">
							REGRA DE OURO: QUALIDADE {">"} QUANTIDADE
						</Label>
						<BodyText>
							5 projetos EXCELENTES {">"} 20 projetos medianos. Cliente julga
							você pelo seu trabalho mais fraco. Se incluir algo meia-boca, ele
							assume que esse é seu nível. Seja impiedoso: só o melhor do
							melhor.
						</BodyText>
					</ContentCard>

					<BulletList
						items={[
							"Diversidade com foco: Mostre variedade MAS dentro do seu nicho. Designer de logos: 8 logos diferentes, não 2 logos + 3 sites + 1 ilustração + 2 flyers",
							"Resultados mensuráveis: Sempre que possível, inclua números (aumentou conversão 40%, gerou R$ 50k em vendas, 200k visualizações)",
							"Projetos recentes: Máximo 2-3 anos. Mercado muda rápido, trabalho de 2018 parece ultrapassado em 2025",
							"Autorização de clientes: SEMPRE peça permissão por escrito antes de incluir trabalho de cliente no portfólio",
						]}
						className="mt-4"
					/>

					<Headline size="sm" className="mt-8 mb-4">
						Estrutura de Case Study Que Converte
					</Headline>

					<BodyText>
						Não mostre apenas imagens. Conte a HISTÓRIA do projeto. Case study
						completo tem 4 partes:
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							PARTE 1: CONTEXTO (20% do texto)
						</Label>
						<BodyText className="text-sm">
							Apresente o cliente, o desafio e o objetivo.
							<br />
							<br />
							<strong>Exemplo:</strong> &quot;A Padaria do Bairro estava
							perdendo clientes para grandes redes. Objetivo: criar identidade
							visual única que destacasse o diferencial artesanal e atraísse
							público jovem 25-40 anos.&quot;
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							PARTE 2: PROCESSO (30% do texto)
						</Label>
						<BodyText className="text-sm">
							Explique SUA abordagem, ferramentas usadas, etapas principais.
							<br />
							<br />
							<strong>Exemplo:</strong> &quot;Realizei pesquisa com 50 clientes
							atuais, analisei 15 concorrentes, criei moodboard com 30
							referências. Desenvolvi 3 conceitos diferentes, refinei o
							escolhido em 4 iterações com o cliente.&quot;
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							PARTE 3: SOLUÇÃO (40% - MAIOR PARTE)
						</Label>
						<BodyText className="text-sm">
							MOSTRE o trabalho final. Imagens de alta qualidade, mockups,
							vídeos, aplicações reais.
							<br />
							<br />
							<strong>Boas práticas:</strong> Mockups realistas (logo em
							fachada, embalagens, uniformes), antes/depois, múltiplos ângulos,
							aplicações práticas
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							PARTE 4: RESULTADOS (10% mas CRUCIAL)
						</Label>
						<BodyText className="text-sm">
							Impacto mensurável do seu trabalho.
							<br />
							<br />
							<strong>Exemplo:</strong> &quot;Após o rebranding, a padaria
							aumentou tráfego de clientes em 45% nos primeiros 3 meses e vendas
							online cresceram 120%. Cliente reportou que identidade visual foi
							decisiva para conquista de público jovem.&quot;
							<br />
							<br />
							Se não tiver números, depoimento do cliente serve.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Portfólio Mesmo Sem Clientes Pagos
					</Headline>

					<BodyText>
						&quot;Mas eu não tenho clientes ainda, como faço portfólio?&quot; -
						Você CRIA trabalhos. Simples assim. Aqui estão 5 estratégias:
					</BodyText>

					<BulletList
						items={[
							"Projetos pessoais/fictícios: Redesign de marca famosa, campanha para produto existente, site para empresa fictícia. Deixe claro que é projeto conceitual.",
							"Trabalhos acadêmicos: Se fez faculdade/curso relevante e tem projetos bons, inclua (se recentes)",
							"Projetos pro bono: ONGs, amigos empreendedores, família. Trabalho real, mesmo que gratuito, conta 100%",
							"Desafios de design: Behance, Dribbble, 99designs têm desafios semanais. Participe, crie, adicione ao portfólio",
							"Mockups e conceitos: Use ferramentas como Figma, Canva para criar mockups profissionais de trabalhos fictícios",
						]}
						className="mt-4"
					/>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Label className="mb-2 block font-bold text-sm">
							IMPORTANTE: HONESTIDADE
						</Label>
						<BodyText>
							Identifique projetos fictícios como &quot;Projeto Pessoal&quot; ou
							&quot;Conceito&quot;. NUNCA minta dizendo que cliente real
							contratou quando não contratou. Cliente descobre, você queima
							reputação permanentemente.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Plataformas para Criar e Hospedar Portfólio
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Site Próprio (Melhor Opção)
						</Headline>
						<BulletList
							items={[
								"WordPress: Gratuito, temas profissionais (Divi, Elementor), flexibilidade total. Custo: R$ 0-300/ano (domínio + hospedagem)",
								"Wix/Squarespace: Arrastar e soltar, super fácil, templates lindos. Custo: R$ 0-60/mês",
								"Webflow: Mais profissional, design avançado. Custo: R$ 0-40/mês",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Vantagens:</strong> Controle total, domínio próprio
							(seunome.com), profissionalismo, SEO
							<br />
							<strong>Quando usar:</strong> Você quer marcar território e
							investir em marca pessoal longo prazo
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Plataformas Especializadas (Gratuitas)
						</Headline>
						<BulletList
							items={[
								"Behance: Para designers, criativos. Integra com Adobe. Muito tráfego orgânico",
								"Dribbble: Design UI/UX, ilustração. Comunidade forte, clientes buscam lá",
								"Cargo: Templates minimalistas, perfeito para fotógrafos e designers",
								"Notion: Surpreendentemente bom para portfólios simples e rápidos",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Vantagens:</strong> Grátis, rápido de montar, comunidade
							integrada, possibilidade de ser descoberto
							<br />
							<strong>Quando usar:</strong> Começando, sem orçamento, quer algo
							no ar hoje
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							LinkedIn (Subestimado)
						</Headline>
						<BodyText>
							Seção &quot;Projetos em Destaque&quot; + Posts com cases =
							portfólio embutido na rede profissional mais usada do Brasil.
							Adicione links, imagens, vídeos. Muitos clientes contratam direto
							do LinkedIn.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							PDF Portfólio (Para Propostas)
						</Headline>
						<BodyText>
							Crie PDF profissional (Canva, InDesign, PowerPoint) com seus 5-10
							melhores trabalhos. Envie junto com propostas para clientes.
							Vantagem: cliente não precisa acessar site, tudo em um arquivo.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Erros Fatais em Portfólios
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-2">
							<strong>
								❌ Incluir trabalhos fracos só para &quot;encher&quot;
							</strong>
						</BodyText>
						<BodyText>
							Cliente julga pelo PIOR trabalho. 3 projetos incríveis {">"} 10
							projetos sendo 7 medianos e 3 incríveis
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-2">
							<strong>❌ Design amador ou desatualizado</strong>
						</BodyText>
						<BodyText>
							Portfólio MAL-FEITO grita &quot;não me contrate&quot;. Use
							templates profissionais se não sabe design. Portfólio de 2015 em
							2025 = perda de credibilidade
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-2">
							<strong>❌ Falta de contexto nos projetos</strong>
						</BodyText>
						<BodyText>
							Mostrar só imagem sem explicar NADA não vende. Cliente quer
							entender o problema que você resolveu, não só ver algo bonito
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-2">
							<strong>❌ Informações de contato escondidas</strong>
						</BodyText>
						<BodyText>
							Cliente amou seu trabalho mas não achou como te contratar.
							Frustração = ele procura outro. Botão de contato em TODAS as
							páginas
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-2">
							<strong>❌ Não atualizar regularmente</strong>
						</BodyText>
						<BodyText>
							Último projeto de 2022? Cliente pensa &quot;será que ainda
							trabalha?&quot;. Adicione projeto novo a cada 3-6 meses, mesmo que
							fictício
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Checklist: Lançando Seu Portfólio Profissional
					</Headline>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-4"
					>
						<BulletList
							items={[
								"☐ Escolher plataforma (site próprio, Behance, Notion)",
								"☐ Selecionar 5-10 MELHORES trabalhos (sem piedade, só o excelente)",
								"☐ Escrever case study para cada projeto (contexto, processo, solução, resultados)",
								"☐ Criar mockups profissionais (usar Figma, Canva, templates)",
								"☐ Pedir e incluir 3-5 depoimentos de clientes/professores/colegas",
								"☐ Seção Sobre clara e direta (quem sou, o que faço, para quem)",
								"☐ Múltiplas formas de contato visíveis (email, WhatsApp, formulário)",
								"☐ Revisão de português e ortografia (erro de digitação = amadorismo)",
								"☐ Teste em mobile (60% dos acessos são de celular)",
								"☐ Compartilhar em redes sociais e pedir feedback de 5 pessoas",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-12 text-center"
					>
						<Headline size="sm" className="mb-4">
							Encontre Clientes na Savoir Link
						</Headline>
						<BodyText className="mb-6">
							Um bom portfólio conquista clientes. Na Savoir Link, você encontra
							quem já está buscando seu serviço: compre créditos, desbloqueie os
							contatos de quem publicou um pedido e mostre seu trabalho diretamente
							para o cliente.
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
