import Link from "next/link";
import { BulletList } from "~/components/ui/bullet-list";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

export function DomesticCleaningContent({ post }: { post: BlogPost }) {
	return (
		<>
			{post.slug === "quanto-custa-diarista-2025-precos-cidade" && (
				<>
					<BodyText>
						Você quer contratar uma diarista mas não faz ideia de quanto cobram,
						se o preço é por hora ou por diária, se varia muito entre cidades...
						Este guia traz preços médios atualizados em 2025, o que influencia o
						valor e como negociar com transparência.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Preço Médio de Diarista no Brasil (2025)
						</Headline>
						<BodyText>
							O valor da diária varia bastante dependendo da cidade, tamanho do
							imóvel e serviços incluídos. Em média, uma diária completa (6-8
							horas) custa entre <strong>R$ 120 a R$ 250</strong>.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Preços por Cidade (Capitais)
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>São Paulo (SP):</strong> R$ 150-280/diária
						</BodyText>
						<BodyText className="mb-4">
							<strong>Rio de Janeiro (RJ):</strong> R$ 140-260/diária
						</BodyText>
						<BodyText className="mb-4">
							<strong>Belo Horizonte (MG):</strong> R$ 120-200/diária
						</BodyText>
						<BodyText className="mb-4">
							<strong>Brasília (DF):</strong> R$ 150-250/diária
						</BodyText>
						<BodyText className="mb-4">
							<strong>Curitiba (PR):</strong> R$ 130-220/diária
						</BodyText>
						<BodyText>
							<strong>Porto Alegre (RS):</strong> R$ 120-210/diária
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Influencia o Preço?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Tamanho do Imóvel
						</Headline>
						<BodyText>
							Apartamento de 50m²: R$ 120-150 | Casa de 100m²: R$ 180-250 | Casa
							de 200m²+: R$ 250-350
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Frequência
						</Headline>
						<BodyText>
							Diarista fixa (semanal): 10-20% mais barato que eventual. Exemplo:
							ao invés de R$ 150/diária eventual, paga R$ 130/diária semanal.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Serviços Extras
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Limpeza pesada (após obra): +50-100%",
								"→ Passar roupas: +R$ 30-50",
								"→ Limpeza de vidraças: +R$ 40-80",
								"→ Organização de armários: +R$ 30-60",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Diária vs Mensalista vs Por Hora
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Diária (6-8h):</strong> R$ 120-250. Melhor para limpeza
							completa 1-2x/semana.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Mensalista (4x/mês):</strong> R$ 500-900. Desconto por
							fidelidade, mesma diarista toda semana.
						</BodyText>
						<BodyText>
							<strong>Por Hora:</strong> R$ 20-35/hora. Útil para serviços
							rápidos (2-3h), mas sai mais caro proporcionalmente.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Encontre Diaristas na Sua Região
						</Headline>
						<BodyText className="mb-6">
							Publique seu pedido na Savoir Link, descreva o que precisa e seu
							orçamento, e diaristas verificadas entram em contato com você.
							Transparência total nos valores e serviços incluídos.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 44: Contratar Diarista */}
			{post.slug === "como-contratar-diarista-clt-autonoma-documentos" && (
				<>
					<BodyText>
						Você quer contratar uma diarista, mas não sabe se precisa registrar
						em carteira, quais documentos pedir, se pode contratar como autônoma
						ou se vai ter problema com a Justiça do Trabalho. Este guia explica
						tudo sobre contratação legal, diferenças entre CLT e autônoma, e
						como formalizar.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							CLT vs Autônoma: Qual a Diferença?
						</Headline>
						<BodyText>
							A diferença principal é a <strong>frequência de trabalho</strong>.
							Diarista que trabalha até 2x por semana pode ser autônoma (sem
							vínculo CLT). Acima disso, é obrigatório registro em carteira.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Diarista Autônoma (Sem Carteira Assinada)
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Quando Pode Contratar Como Autônoma
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Trabalha no máximo 2x por semana",
								"→ Não há subordinação (diarista define como faz o trabalho)",
								"→ Não há habitualidade rígida (pode mudar dias da semana)",
								"→ Recebe por diária, não por salário mensal fixo",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Documentos Necessários
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ RG e CPF",
								"→ Comprovante de residência",
								"→ Recibo de pagamento (guardar comprovantes mensais)",
							]}
						/>
						<BodyText className="mt-4">
							<strong>NÃO precisa:</strong> Carteira de trabalho assinada,
							contrato formal obrigatório (mas recomenda-se fazer).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Vantagens e Desvantagens
						</Headline>
						<BodyText className="mb-4">
							<strong>Vantagens:</strong> Sem encargos trabalhistas (INSS, FGTS,
							férias), mais barato, menos burocracia.
						</BodyText>
						<BodyText>
							<strong>Desvantagens:</strong> Diarista não tem direitos
							trabalhistas, pode faltar sem aviso, não há garantia de
							continuidade.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Diarista com Carteira Assinada (CLT)
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Quando É Obrigatório Registrar
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Trabalha 3x ou mais por semana",
								"→ Mesma diarista há mais de 3 meses com frequência fixa",
								"→ Há subordinação (você diz como e quando fazer o trabalho)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Direitos Trabalhistas (CLT)
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Salário mínimo nacional (ou piso regional)",
								"→ 13º salário",
								"→ Férias remuneradas + 1/3",
								"→ FGTS (8% do salário)",
								"→ INSS (contribuição patronal)",
								"→ Aviso prévio em caso de demissão",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Custos Adicionais (Além do Salário)
						</Headline>
						<BodyText>
							Encargos trabalhistas somam cerca de <strong>40% a mais</strong>{" "}
							sobre o salário. Exemplo: salário R$ 1.500 = custo total ~R$
							2.100/mês.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Formalizar a Contratação
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="check"
							items={[
								"Defina frequência (1-2x = autônoma, 3x+ = CLT)",
								"Peça documentos (RG, CPF, comprovante residência, carteira trabalho se CLT)",
								"Faça contrato por escrito (especificando dias, horários, valor, serviços)",
								"Se CLT: registre carteira, cadastre eSocial, pague INSS e FGTS mensalmente",
								"Guarde recibos de pagamento (autônoma) ou contracheques (CLT)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Contrate Diaristas Verificadas
						</Headline>
						<BodyText className="mb-6">
							Na Savoir Link, você publica seu pedido e diaristas informam se
							trabalham como autônomas ou com carteira assinada ao entrar em
							contato. Contrate com segurança jurídica.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Diarista Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 45: Tempo Limpeza */}
			{post.slug === "diarista-1x-semana-quanto-tempo-limpeza" && (
				<>
					<BodyText>
						Você está pensando em contratar diarista uma vez por semana, mas não
						sabe se dá tempo de limpar tudo, quanto tempo leva para limpar sua
						casa, se vale a pena ou se deveria contratar 2x na semana. Este guia
						explica quanto tempo leva cada tipo de limpeza e o que dá tempo
						fazer em 6-8 horas.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Quanto Tempo Leva para Limpar uma Casa?
						</Headline>
						<BodyText>
							Depende do tamanho do imóvel, nível de sujeira e serviços
							incluídos. Em média, uma diarista leva{" "}
							<strong>1-2 horas por cômodo</strong> para limpeza completa.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Tempo Médio por Tamanho de Imóvel
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Apartamento 50m² (2 quartos):</strong> 4-5 horas
						</BodyText>
						<BodyText className="mb-4">
							<strong>Apartamento 80m² (3 quartos):</strong> 6-7 horas
						</BodyText>
						<BodyText className="mb-4">
							<strong>Casa 100m² (3 quartos):</strong> 7-8 horas
						</BodyText>
						<BodyText>
							<strong>Casa 150m²+ (4+ quartos):</strong> 8-10 horas (pode
							precisar de 2 diaristas ou 2 dias)
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Dá Tempo Fazer em 1 Diária (6-8h)?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Limpeza Completa de Apartamento 50-80m²
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Aspirar/varrer todos os cômodos",
								"Passar pano em pisos",
								"Limpar banheiros completos (vaso, box, pia, espelho)",
								"Limpar cozinha (fogão, pia, bancadas, geladeira por fora)",
								"Tirar pó de móveis",
								"Arrumar camas",
								"Recolher lixo",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							O Que Geralmente NÃO Dá Tempo (Sem Combinar Antes)
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Passar roupas (adiciona 1-2h)",
								"→ Limpeza pesada (vidros externos, persianas, lustres)",
								"→ Organizar armários/gavetas",
								"→ Lavar roupas",
								"→ Limpar quintal/garagem grande",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Diarista 1x por Semana É Suficiente?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Quando 1x/Semana Funciona Bem
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Casal ou pessoa sozinha (pouco uso da casa)",
								"→ Casa organizada no dia a dia (você faz limpeza leve entre as diárias)",
								"→ Imóvel até 80m²",
								"→ Sem crianças pequenas ou pets",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Quando Pode Precisar de 2x/Semana
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Família com crianças (bagunça constante)",
								"→ Pets que soltam muito pelo",
								"→ Casa grande (100m²+)",
								"→ Você não tem tempo para limpeza leve entre diárias",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Otimizar o Tempo da Diarista
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="check"
							items={[
								"Deixe a casa organizada antes (recolha roupas, brinquedos, objetos espalhados)",
								"Defina prioridades (o que DEVE ser feito vs o que é bom se der tempo)",
								"Forneça produtos de limpeza (economiza tempo de procurar)",
								"Combine serviços extras com antecedência (passar roupa, vidros)",
								"Mantenha limpeza leve no dia a dia (evita sujeira acumulada)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Encontre Diaristas Experientes
						</Headline>
						<BodyText className="mb-6">
							Ao publicar seu pedido na Savoir Link, diaristas informam tempo
							médio de trabalho e serviços incluídos quando entram em contato.
							Compare os orçamentos e escolha a melhor opção.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 46: Lista Tarefas */}
			{post.slug === "lista-tarefas-diarista-o-que-pedir-evitar" && (
				<>
					<BodyText>
						Você contratou uma diarista mas não sabe exatamente o que pode
						pedir, o que está incluído na diária padrão, o que custa extra e o
						que é considerado abusivo. Esta lista completa mostra tarefas
						permitidas, serviços extras pagos e o que você NÃO deve exigir.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							O Que Está Incluído na Diária Padrão?
						</Headline>
						<BodyText>
							A diária padrão (6-8h) geralmente cobre{" "}
							<strong>limpeza completa dos ambientes</strong>: varrer, passar
							pano, tirar pó, limpar banheiros e cozinha. Serviços extras devem
							ser combinados antes.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Lista de Tarefas Padrão (Incluídas na Diária)
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Todos os Cômodos
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Varrer e/ou aspirar pisos",
								"Passar pano nos pisos",
								"Tirar pó de móveis, prateleiras, quadros",
								"Limpar portas, maçanetas, interruptores",
								"Recolher lixo e trocar sacos de lixeira",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Banheiros
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Lavar vaso sanitário (dentro e fora)",
								"Limpar box/cortina de banheiro",
								"Limpar pia, torneira, espelho",
								"Passar pano no piso",
								"Organizar toalhas/produtos de higiene",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Cozinha
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Lavar pia e torneira",
								"Limpar fogão (bocas, trempes, mesa)",
								"Limpar bancadas",
								"Limpar parte externa da geladeira/micro-ondas",
								"Organizar utensílios/louças visíveis",
								"Varrer e passar pano no chão",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Quartos e Sala
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Arrumar camas (trocar lençóis se pedido)",
								"Tirar pó de móveis",
								"Organizar objetos básicos (livros, controles remotos)",
								"Varrer/aspirar e passar pano",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Serviços Extras (Pagos Separadamente ou Combinados Antes)
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Passar roupas (+R$ 30-50)",
								"→ Lavar/estender roupas (+R$ 20-40)",
								"→ Limpar vidros externos (+R$ 40-80)",
								"→ Limpar persianas/cortinas (+R$ 30-60)",
								"→ Limpeza de forno/geladeira por dentro (+R$ 30-50)",
								"→ Organizar armários/gavetas (+R$ 30-60)",
								"→ Limpar quintal/varanda grande (+R$ 40-80)",
								"→ Limpeza pesada (após obra/reforma) (+50-100% da diária)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Você NÃO Deve Pedir (Considerado Abusivo)
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Cuidar de crianças/idosos (não é função de diarista)",
								"→ Fazer compras no mercado",
								"→ Cozinhar refeições (salvo combinado como extra)",
								"→ Lavar carro",
								"→ Trabalhar mais de 8h sem combinar hora extra",
								"→ Limpar sujeira extrema sem aviso prévio (fezes de animal, lixo acumulado meses)",
								"→ Usar produtos químicos perigosos sem equipamento adequado",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Montar Sua Lista de Tarefas
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="check"
							items={[
								"Liste prioridades (o que DEVE ser feito vs o que é bom se der tempo)",
								"Combine serviços extras ANTES da diária (não durante)",
								"Seja realista com o tempo (não dá para limpar casa de 150m² + passar 20 roupas em 6h)",
								"Forneça produtos de limpeza adequados",
								"Deixe instruções claras sobre preferências (não usar determinado produto, não mexer em certos objetos)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Diaristas com Serviços Claros
						</Headline>
						<BodyText className="mb-6">
							Na Savoir Link, ao entrar em contato, as diaristas especificam
							exatamente quais serviços estão incluídos na diária e quais são
							extras. Transparência total antes de contratar.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 47: Diarista Faltou */}
			{post.slug === "diarista-faltou-sem-avisar-o-que-fazer" && (
				<>
					<BodyText>
						Sua diarista não apareceu hoje e não avisou. Você organizou o dia
						para estar em casa, esperou, e nada. Pode descontar? Pode dispensar?
						Como evitar que isso aconteça de novo? Este guia explica seus
						direitos e o que fazer.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Por Que Diaristas Faltam Sem Avisar?
						</Headline>
						<BodyText>
							Motivos comuns: doença de última hora, problema familiar,
							transporte público atrasado/parado, esquecimento (se não tem
							compromisso fixo). Profissionais sérias avisam com antecedência
							sempre que possível.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Fazer Quando Diarista Falta Sem Avisar
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="check"
							items={[
								"Tente contato (WhatsApp, ligação) para confirmar se houve imprevisto",
								"Se responder e justificar emergência: seja compreensivo, remarque",
								"Se não responder ou justificativa for fraca: avalie se quer continuar",
								"Se for diarista autônoma e primeira falta: dê advertência verbal",
								"Se faltar 2+ vezes sem justificativa: considere trocar de profissional",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Pode Descontar a Falta?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Diarista Autônoma (Sem Carteira)
						</Headline>
						<BodyText>
							<strong>Sim.</strong> Como não há vínculo empregatício, você
							simplesmente não paga pela diária que não foi trabalhada. Não há
							obrigação de pagar se o serviço não foi prestado.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Diarista com Carteira Assinada (CLT)
						</Headline>
						<BodyText className="mb-4">
							<strong>Sim, pode descontar.</strong> Falta injustificada pode ser
							descontada do salário (desconto proporcional ao dia não trabalhado
							+ DSR - Descanso Semanal Remunerado).
						</BodyText>
						<BodyText>
							<strong>Advertência:</strong> Após 3 faltas injustificadas em 30
							dias, pode aplicar suspensão ou até demissão por justa causa.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Pode Dispensar a Diarista Por Falta?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Diarista Autônoma
						</Headline>
						<BodyText>
							<strong>Sim, a qualquer momento.</strong> Não há vínculo
							empregatício, então você pode simplesmente parar de chamar.
							Recomenda-se avisar com educação que não vai mais precisar dos
							serviços.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Diarista CLT
						</Headline>
						<BodyText className="mb-4">
							<strong>Sim, mas com regras.</strong> Pode demitir sem justa causa
							(pagando verbas rescisórias) ou por justa causa (se houver 30+
							faltas injustificadas em 12 meses ou outra falta grave prevista em
							lei).
						</BodyText>
						<BodyText>
							Demissão sem justa causa exige pagamento de aviso prévio, 13º
							proporcional, férias + 1/3, saque FGTS + multa 40%.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Evitar Faltas Sem Aviso
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="check"
							items={[
								"Contrate profissionais com boas avaliações (histórico de pontualidade)",
								"Estabeleça comunicação clara (WhatsApp, combinar avisar com 24h de antecedência mínimo)",
								"Faça contrato por escrito especificando política de faltas",
								"Tenha diarista reserva (caso a titular falte, tem backup)",
								"Valorize a profissional (pague em dia, trate bem) - reduz faltas injustificadas",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Diaristas Confiáveis e Responsáveis
						</Headline>
						<BodyText className="mb-6">
							Na Savoir Link, você publica seu pedido e diaristas entram em
							contato para você conhecer o trabalho de cada uma. Peça
							referências e contrate profissionais com histórico comprovado de
							responsabilidade.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>
									Publicar Meu Pedido
								</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 48: Diferença Tipos */}
			{post.slug === "diferenca-diarista-faxineira-empregada-domestica" && (
				<>
					<BodyText>
						Você quer contratar alguém para limpar sua casa, mas não sabe a
						diferença entre diarista, faxineira e empregada doméstica. São a
						mesma coisa? Tem diferença nos direitos trabalhistas? Qual é melhor
						para você? Este guia explica as diferenças legais, custos e quando
						contratar cada uma.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Resumo Rápido das Diferenças
						</Headline>
						<BodyText className="mb-4">
							<strong>Diarista:</strong> Trabalha 1-2x/semana, sem vínculo CLT,
							paga por diária.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Faxineira:</strong> Termo popular para diarista (é a mesma
							coisa).
						</BodyText>
						<BodyText>
							<strong>Empregada Doméstica:</strong> Trabalha 3x+/semana com
							carteira assinada, salário mensal, direitos trabalhistas
							completos.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						1. Diarista (Autônoma)
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Características
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Trabalha até 2x por semana",
								"→ Sem vínculo empregatício (não precisa carteira assinada)",
								"→ Paga por diária (R$ 120-250)",
								"→ Sem direitos trabalhistas (férias, 13º, FGTS)",
								"→ Pode trabalhar para vários clientes",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Quando Contratar
						</Headline>
						<BodyText>
							Ideal para: Quem precisa de limpeza completa 1-2x/semana, não quer
							compromisso trabalhista, quer pagar só pelos dias trabalhados.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						2. Faxineira
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							O Que É
						</Headline>
						<BodyText>
							<strong>Faxineira é o mesmo que diarista.</strong> "Faxineira" é o
							termo popular usado principalmente em algumas regiões do Brasil.
							Legalmente, não há diferença. Ambas são trabalhadoras autônomas
							que fazem limpeza doméstica por diária.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						3. Empregada Doméstica (CLT)
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Características
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Trabalha 3x ou mais por semana (geralmente 5-6x)",
								"→ Carteira assinada obrigatória",
								"→ Salário mensal fixo (mínimo nacional ou piso regional)",
								"→ Todos os direitos trabalhistas (férias, 13º, FGTS, INSS)",
								"→ Trabalha exclusivamente para 1 empregador",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Direitos Trabalhistas
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Salário mínimo (ou piso da categoria)",
								"13º salário",
								"Férias remuneradas + 1/3",
								"FGTS (8% do salário)",
								"INSS (previdência)",
								"Aviso prévio (30 dias)",
								"Seguro-desemprego (se demitida sem justa causa)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Custos Mensais
						</Headline>
						<BodyText>
							Salário + encargos (INSS, FGTS) somam ~40% a mais. Exemplo:
							salário R$ 1.500 = custo total ~R$ 2.100/mês.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Quando Contratar
						</Headline>
						<BodyText>
							Ideal para: Quem precisa de limpeza diária/quase diária, tem casa
							grande, quer mesma pessoa sempre, pode arcar com encargos
							trabalhistas.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Comparação de Custos
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Diarista 1x/semana:</strong> R$ 150/diária × 4 = R$
							600/mês
						</BodyText>
						<BodyText className="mb-4">
							<strong>Diarista 2x/semana:</strong> R$ 140/diária × 8 = R$
							1.120/mês
						</BodyText>
						<BodyText>
							<strong>Empregada doméstica (5x/semana CLT):</strong> R$ 2.100/mês
							(salário + encargos)
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Qual Contratar?
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BodyText className="mb-4">
							<strong>Contrate DIARISTA se:</strong> Precisa limpeza
							1-2x/semana, quer flexibilidade, não quer encargos trabalhistas.
						</BodyText>
						<BodyText>
							<strong>Contrate EMPREGADA DOMÉSTICA se:</strong> Precisa limpeza
							diária, tem casa grande/família numerosa, quer pessoa fixa e
							confiável, pode pagar salário + encargos.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Encontre Profissionais de Limpeza
						</Headline>
						<BodyText className="mb-6">
							Na Savoir Link, você publica seu pedido e diaristas e empregadas
							domésticas entram em contato informando regime de trabalho,
							disponibilidade e valores. Compare e escolha a melhor opção para
							sua necessidade.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 49: Vale a Pena Contratar Diarista */}
			{post.slug === "vale-pena-contratar-diarista-custos-beneficios" && (
				<>
					<BodyText>
						Você passa o fim de semana inteiro limpando casa, está sempre
						cansado, não tem tempo para lazer... mas fica na dúvida se vale a
						pena pagar por diarista ou se é "desperdício de dinheiro". Este guia
						analisa custos reais, economia de tempo e quando compensa contratar.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Quanto Custa Contratar Diarista?
						</Headline>
						<BodyText>
							Diária padrão (6-8h): R$ 120-250. Mensal (4x/mês): R$ 500-900.
							Compare com o valor da sua hora de trabalho e tempo livre.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Análise Custo-Benefício
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Quanto Tempo Você Gasta Limpando?
						</Headline>
						<BodyText className="mb-4">
							Pessoa média gasta <strong>2-4 horas por semana</strong> limpando
							casa (varrer, passar pano, banheiros, cozinha). Isso dá 8-16
							horas/mês.
						</BodyText>
						<BodyText>
							<strong>Pergunta:</strong> O que você faria com 8-16 horas extras
							por mês? Trabalhar mais? Descansar? Estar com família?
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Cálculo: Sua Hora Vale Quanto?
						</Headline>
						<BodyText className="mb-4">
							Se você ganha R$ 3.000/mês (20 dias úteis × 8h = 160h), sua hora
							vale ~R$ 19.
						</BodyText>
						<BodyText className="mb-4">
							Se gastar 8h/mês limpando, está "perdendo" R$ 152 de tempo que
							poderia trabalhar ou descansar.
						</BodyText>
						<BodyText>
							Diarista 1x/mês custa R$ 150. <strong>Quase empata.</strong> Mas
							você ganha qualidade de limpeza profissional + tempo livre.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Vale a Pena Contratar
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Você trabalha muito e não tem tempo/energia para limpar",
								"Tem filhos pequenos (casa sempre bagunçada)",
								"Quer tempo livre para lazer/família",
								"Limpeza profunda fica sempre para depois (acumula sujeira)",
								"Sua renda permite sem apertar orçamento",
								"Você ODEIA limpar (vai fazer mal feito de qualquer jeito)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando NÃO Vale a Pena
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Orçamento muito apertado (priorize essenciais)",
								"→ Casa pequena (30-40m²) e você mora sozinho",
								"→ Você gosta de limpar / tem tempo sobrando",
								"→ Casa já fica organizada naturalmente",
								"→ Prefere economizar para outros objetivos",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Benefícios Além da Limpeza
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Saúde mental: menos estresse, mais tempo para relaxar",
								"Qualidade da limpeza: profissional faz melhor/mais rápido",
								"Relacionamentos: evita brigas em casa por tarefas domésticas",
								"Produtividade: tempo livre para trabalhar mais ou descansar melhor",
								"Bem-estar: chegar em casa limpa depois do trabalho",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Economizar com Diarista
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="check"
							items={[
								"Comece com 1x/mês (teste se funciona antes de aumentar frequência)",
								"Faça limpeza leve no dia a dia (diarista faz pesada)",
								"Negocie pacote mensal (desconto por fidelidade)",
								"Divida custos (se mora com companheiros de ap)",
								"Forneça produtos de limpeza (alguns cobram extra)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Experimente Contratar uma Diarista
						</Headline>
						<BodyText className="mb-6">
							Teste 1 mês com diarista 1-2x e veja se vale a pena para você. Na
							Savoir Link, publique seu pedido, compare orçamentos e contrate
							por diária avulsa sem compromisso.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Diarista Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 50: Preço Pintura */}
		</>
	);
}
