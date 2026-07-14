import Link from "next/link";
import { BulletList } from "~/components/ui/bullet-list";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

export function MasonryContent({ post }: { post: BlogPost }) {
	return (
		<>
			{/* SEO Article 1: Preços de Pedreiro */}
			{post.slug === "quanto-custa-pedreiro-2025-precos-servicos" && (
				<>
					<BodyText>
						Está planejando uma obra ou reforma mas não tem ideia de quanto vai
						gastar com pedreiro? Os preços variam muito, você não sabe se está
						pagando justo, e fica difícil comparar orçamentos. Este guia traz
						valores atualizados para 2025, preços por tipo de serviço e o que
						influencia o custo.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Preços Médios de Pedreiro (2025)
						</Headline>
						<BodyText>
							<strong>Diária:</strong> R$ 350-800/dia (8 horas de trabalho)
							<br />
							<strong>Por hora:</strong> R$ 40-80/hora
							<br />
							<strong>Por m² (alvenaria):</strong> R$ 70-120/m²
							<br />
							<strong>Construção de muro:</strong> R$ 150-400 por metro linear
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Preços por Tipo de Serviço
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Construção de Muro
						</Headline>
						<BodyText>
							<strong>Muro de bloco:</strong> R$ 150-250 por metro linear
							<br />
							<strong>Muro de concreto:</strong> R$ 300-400 por metro linear
							<br />
							<strong>Muro de arrimo:</strong> R$ 350-600 por metro linear
							<br />
							Altura padrão: 2-2,5 metros. Acima disso, preço aumenta 20-30%.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Contrapiso e Regularização
						</Headline>
						<BodyText>
							<strong>Contrapiso básico:</strong> R$ 35-60/m²
							<br />
							<strong>Regularização de piso:</strong> R$ 25-45/m²
							<br />
							<strong>Contrapiso nivelado a laser:</strong> R$ 50-80/m²
							<br />
							Inclui material e mão de obra. Espessura padrão: 3-5cm.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Impermeabilização
						</Headline>
						<BodyText>
							<strong>Parede externa:</strong> R$ 27-60/m²
							<br />
							<strong>Laje:</strong> R$ 50-90/m²
							<br />
							<strong>Banheiro completo:</strong> R$ 800-1.500
							<br />
							Tipo de impermeabilizante influencia muito o preço final.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Pequenos Reparos
						</Headline>
						<BodyText>
							<strong>Reparar trinca:</strong> R$ 150-400 (depende da gravidade)
							<br />
							<strong>Trocar azulejo:</strong> R$ 80-150 por m²
							<br />
							<strong>Reboco:</strong> R$ 40-70/m²
							<br />
							<strong>Massa corrida:</strong> R$ 25-45/m²
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Influencia o Preço?
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Complexidade do serviço: quanto mais técnico, mais caro",
								"Região: capitais cobram 20-40% a mais que interior",
								"Experiência do profissional: pedreiros especializados cobram mais",
								"Material incluso ou não: alguns pedreiros incluem, outros não",
								"Urgência: serviços emergenciais custam 30-50% a mais",
								"Tamanho do projeto: obras maiores têm preço por m² menor",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Dicas para Economizar
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Compare pelo menos 3 orçamentos diferentes",
								"Negocie descontos para projetos maiores",
								"Forneça você mesmo os materiais (pesquise antes)",
								"Evite trabalhos emergenciais (planeje com antecedência)",
								"Peça referências e veja trabalhos anteriores",
								'Combine preço fechado ao invés de diária (evita "enrolação")',
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Compare Pedreiros com Preços Transparentes
						</Headline>
						<BodyText className="mb-6">
							Na Savoir Link, você publica seu pedido e pedreiros qualificados
							entram em contato informando seus preços por tipo de serviço, para
							você comparar orçamentos antes de contratar. Sem surpresas, total
							transparência.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 2: Trincas na Parede */}
			{post.slug === "trinca-parede-grave-quando-estrutural" && (
				<>
					<BodyText>
						Apareceu uma trinca na parede e você está com medo de ser algo
						grave? Não sabe se é só estética ou se pode ser problema estrutural?
						Fica a dúvida: chamo pedreiro agora ou posso esperar? Este guia
						ensina a diferenciar fissura, trinca e rachadura, e quando você deve
						se preocupar de verdade.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Diferença: Fissura, Trinca e Rachadura
						</Headline>
						<BodyText>
							<strong>Fissura:</strong> até 1mm de espessura (geralmente
							superficial, não passa pela parede)
							<br />
							<strong>Trinca:</strong> 1-3mm de espessura (pode atravessar a
							parede, requer atenção)
							<br />
							<strong>Rachadura:</strong> acima de 3mm (grave, pode indicar
							problema estrutural)
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando É Grave? Sinais de Alerta
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							🚨 Perigoso - Chame Pedreiro/Engenheiro Urgente
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"Rachadura diagonal (inclinada) saindo de cantos de portas/janelas",
								"Trinca que atravessa a parede (você vê luz do outro lado)",
								"Rachadura em pilares, vigas ou lajes",
								"Trinca que está crescendo rapidamente (marque com lápis e data para monitorar)",
								"Aberturas que permitem entrada de água, luz ou ar",
								"Rachaduras acompanhadas de portas/janelas travando",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							⚠️ Moderado - Agende Avaliação em Breve
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Trincas horizontais em paredes de alvenaria",
								'Fissuras que formam "escada" entre tijolos',
								"Trincas próximas a áreas úmidas (banheiro, cozinha)",
								"Múltiplas fissuras na mesma parede",
								"Trincas que aparecem após chuva forte",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							✅ Leve - Acompanhe, Não É Emergência
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Fissuras finas superficiais (cabelo)",
								"Fissuras em cantos de parede e teto (comum em casas novas)",
								"Pequenas fissuras em massa corrida ou reboco",
								"Fissuras que não estão crescendo (monitore por 2-3 meses)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Causas Comuns de Trincas
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Problemas de fundação:</strong> Recalque (solo cedendo),
							fundação mal feita, terreno instável. Gera rachaduras diagonais
							graves.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Infiltração e umidade:</strong> Água enfraquece estrutura,
							gera mofo, descola reboco. Trincas aparecem perto de áreas
							molhadas.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Dilatação térmica:</strong> Materiais expandem/contraem
							com calor. Fissuras finas em junção de materiais diferentes.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Vibração:</strong> Tráfego pesado, obras próximas. Trincas
							horizontais ou em rede.
						</BodyText>
						<BodyText>
							<strong>Construção mal feita:</strong> Materiais ruins, cura
							inadequada do concreto. Fissuras espalhadas aleatoriamente.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Monitorar Se a Trinca Está Crescendo
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Teste do Lápis (Método Simples)
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Faça uma marcação a lápis nas duas extremidades da trinca",
								"Anote a data ao lado de cada marca",
								"Fotografe de perto com régua para referência",
								"Volte a verificar após 2-3 meses",
								"Se a trinca ultrapassou as marcas = está crescendo (chame profissional)",
								"Se está estável = monitore por mais 3 meses",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quanto Custa Consertar?
					</Headline>

					<ContentCard variant="default">
						<BodyText>
							<strong>Fissura superficial:</strong> R$ 150-300 (massa corrida +
							pintura)
							<br />
							<strong>Trinca moderada:</strong> R$ 300-600 (tratamento +
							selagem)
							<br />
							<strong>Rachadura grave:</strong> R$ 800-3.000+ (reparo
							estrutural, pode precisar engenheiro)
							<br />
							<strong>Problema de fundação:</strong> R$ 5.000-20.000+ (reforço
							estrutural complexo)
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Encontre Pedreiro para Avaliar Sua Trinca
						</Headline>
						<BodyText className="mb-6">
							Não arrisque ignorar uma trinca que pode ser grave. Pedreiros
							experientes na Savoir Link avaliam o problema, explicam a causa e
							fazem orçamento detalhado do reparo.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Buscar Pedreiro Qualificado</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 3: Impermeabilização */}
			{post.slug === "impermeabilizacao-parede-quanto-custa-quando-fazer" && (
				<>
					<BodyText>
						Sua parede está com infiltração, apareceu mofo ou manchas de
						umidade? Você não sabe se precisa impermeabilizar ou se dá para
						resolver de outro jeito? Fica a dúvida se vale o investimento. Este
						guia explica quando impermeabilização é necessária, preços
						atualizados e como prevenir problemas.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Preços de Impermeabilização (2025)
						</Headline>
						<BodyText>
							<strong>Parede externa:</strong> R$ 27-60/m²
							<br />
							<strong>Parede interna (área úmida):</strong> R$ 40-70/m²
							<br />
							<strong>Laje:</strong> R$ 50-90/m²
							<br />
							<strong>Banheiro completo:</strong> R$ 800-1.500
							<br />
							<strong>Manta asfáltica:</strong> R$ 35-65/m² (aplicação)
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Você Precisa Impermeabilizar?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Sinais Claros de Que Precisa Impermeabilizar
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"Manchas de umidade que voltam mesmo depois de pintar",
								"Mofo preto nas paredes (principalmente cantos)",
								"Tinta descascando ou empolando",
								'Parede "suando" (gotículas de água na superfície)',
								"Cheiro de mofo persistente",
								"Infiltração visível após chuva",
								"Água escorrendo pela parede interna",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Quando Impermeabilizar É Preventivo (Ideal)
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Durante construção (antes de aplicar revestimento)",
								"Paredes externas expostas a chuva",
								"Banheiros e cozinhas (antes de colocar azulejo)",
								"Lajes de cobertura e terraços",
								"Muros de divisa",
								"Áreas próximas a piscinas ou fontes",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Tipos de Impermeabilização
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Impermeabilizante Líquido (Mais Comum)
						</Headline>
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Líquido aplicado com rolo ou
							pincel, forma película protetora.
							<br />
							<strong>Onde usar:</strong> Paredes externas, muros, áreas não
							trafegáveis.
							<br />
							<strong>Preço:</strong> R$ 20-40/m² (material + aplicação)
							<br />
							<strong>Durabilidade:</strong> 3-5 anos
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Argamassa Impermeável (Áreas Molhadas)
						</Headline>
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Cimento polimérico aplicado em
							camadas, penetra nos poros.
							<br />
							<strong>Onde usar:</strong> Banheiros, cozinhas, boxes, áreas que
							recebem água direto.
							<br />
							<strong>Preço:</strong> R$ 40-70/m²
							<br />
							<strong>Durabilidade:</strong> 5-10 anos
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Manta Asfáltica (Mais Durável)
						</Headline>
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Manta aplicada com maçarico, forma
							barreira total.
							<br />
							<strong>Onde usar:</strong> Lajes de cobertura, terraços,
							subsolos.
							<br />
							<strong>Preço:</strong> R$ 50-90/m² (manta 3mm)
							<br />
							<strong>Durabilidade:</strong> 10-20 anos
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							4. Hidrorepelente (Proteção Leve)
						</Headline>
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Líquido que repele água mas deixa
							parede respirar.
							<br />
							<strong>Onde usar:</strong> Fachadas, proteção preventiva.
							<br />
							<strong>Preço:</strong> R$ 20-35/m²
							<br />
							<strong>Durabilidade:</strong> 2-4 anos
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Processo de Impermeabilização
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"1. Preparar superfície: limpar, remover revestimentos soltos",
								"2. Corrigir trincas e buracos com massa específica",
								"3. Aplicar primer/fundo preparador (aumenta aderência)",
								"4. Aplicar impermeabilizante em 2-3 camadas (aguardar secagem entre camadas)",
								"5. Fazer teste de estanqueidade (jogar água e verificar vazamentos)",
								"6. Aplicar camada de proteção mecânica se necessário",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Erros Comuns Que Causam Problema
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="dash"
							items={[
								"Impermeabilizar sobre superfície úmida (não funciona!)",
								"Não corrigir trincas antes de impermeabilizar",
								"Aplicar apenas 1 camada (mínimo são 2 demãos)",
								"Não aguardar tempo de secagem entre camadas",
								"Escolher produto inadequado para o tipo de área",
								"Não fazer teste de estanqueidade antes de cobrir",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Vale a Pena Fazer Sozinho?
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Você pode fazer (mais simples):</strong>
							<br />
							Aplicação de hidrorepelente em fachada, impermeabilizante líquido
							em muro baixo, áreas pequenas sem problemas graves.
						</BodyText>
						<BodyText>
							<strong>Chame profissional (recomendado):</strong>
							<br />
							Banheiros, lajes, áreas com infiltração ativa, manta asfáltica,
							problemas estruturais. Erro na impermeabilização pode custar 3x
							mais para refazer.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Contrate Pedreiro Especializado em Impermeabilização
						</Headline>
						<BodyText className="mb-6">
							Impermeabilização mal feita gera prejuízo maior depois. Publique
							seu pedido na Savoir Link e pedreiros com experiência em
							impermeabilização entram em contato para orçar o serviço.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Buscar Especialista Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 4: Como Escolher Pedreiro */}
			{post.slug === "como-escolher-pedreiro-qualificado-checklist" && (
				<>
					<BodyText>
						Contratar pedreiro sem saber se ele é bom é um risco enorme. Obra
						mal feita, atrasos, preço que aumenta no meio do caminho, trabalho
						porco que você precisa refazer. Esse checklist te ensina a verificar
						experiência, analisar trabalhos anteriores e evitar problemas
						comuns.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Checklist Rápido (5 Pontos Essenciais)
						</Headline>
						<BulletList
							variant="check"
							items={[
								"✅ Verificar trabalhos anteriores (fotos, visita a obra concluída)",
								"✅ Pedir 3 referências de clientes recentes",
								"✅ Comparar orçamentos detalhados de pelo menos 3 pedreiros",
								"✅ Confirmar se tem experiência no tipo específico de serviço",
								"✅ Definir prazo, forma de pagamento e garantia por escrito",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						1. Verificar Experiência e Especialização
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Perguntas Essenciais
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Há quanto tempo trabalha como pedreiro?",
								"Já fez serviços do tipo que preciso? (construção, reforma, reparo)",
								"Tem experiência com [serviço específico]? Ex: impermeabilização, contrapiso nivelado",
								"Trabalha sozinho ou com ajudantes?",
								"Tem ferramentas próprias ou preciso fornecer?",
								"Já trabalhou em projetos de tamanho similar ao meu?",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Red Flags (Sinais de Alerta)
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"Não consegue mostrar nenhum trabalho anterior",
								"Não tem referências ou se recusa a fornecer",
								'Diz que "faz de tudo" sem especialização clara',
								"Pressiona para começar imediatamente sem orçamento detalhado",
								"Pede pagamento adiantado de mais de 50%",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						2. Analisar Portfolio de Trabalhos
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							O Que Verificar em Fotos de Trabalhos Anteriores
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Acabamento: cantos retos, juntas alinhadas, superfície lisa",
								"Limpeza: obra organizada ou bagunçada?",
								"Antes e depois: mostra transformação completa",
								"Variedade: diferentes tipos de serviço",
								"Qualidade dos materiais usados",
								"Se possível, visite pessoalmente obra concluída",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Perguntas Ao Ver Portfolio
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Quanto tempo levou esse projeto?",
								"Teve algum problema durante a obra? Como resolveu?",
								"Esse serviço tem garantia? De quanto tempo?",
								"Posso falar com esse cliente para referência?",
								"Qual foi o custo aproximado desse trabalho?",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						3. Pedir e Verificar Referências
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Como Pedir Referências
						</Headline>
						<BodyText className="mb-4">
							Peça <strong>3 referências de clientes recentes</strong> (últimos
							6 meses). Pedreiros bons não têm problema em fornecer. Prefira
							referências de serviços similares ao que você precisa.
						</BodyText>
						<Headline size="sm" className="mb-4 text-primary">
							Perguntas Para Fazer às Referências
						</Headline>
						<BulletList
							variant="check"
							items={[
								"O trabalho foi concluído no prazo combinado?",
								"A qualidade ficou conforme esperado?",
								"Houve custos extras não previstos no orçamento?",
								"O pedreiro foi pontual e profissional?",
								"A obra ficou limpa ou foi muito bagunçada?",
								"Você contrataria esse pedreiro novamente?",
								"Teve algum problema? Como foi resolvido?",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						4. Comparar Orçamentos Detalhados
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Orçamento Deve Incluir
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Descrição completa dos serviços (o que está incluso)",
								"Material por conta de quem? (pedreiro ou cliente)",
								"Preço total OU preço por m²/diária",
								"Prazo estimado de conclusão",
								"Forma de pagamento (parcelado, % adiantado, % final)",
								"Garantia do serviço (quanto tempo)",
								"O que NÃO está incluso (serviços extras)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Como Comparar Orçamentos
						</Headline>
						<BodyText className="mb-4">
							<strong>Não escolha só pelo mais barato!</strong> Compare:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Qualidade dos materiais propostos (marca, tipo)",
								"Experiência do profissional vs preço",
								"Prazo oferecido (mais rápido nem sempre é melhor)",
								"Garantia incluída",
								"Referências e trabalhos anteriores",
								"Feeling de confiança na conversa",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						5. Definir Acordo Por Escrito
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							O Que Colocar No Contrato/Acordo
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Descrição completa do serviço a ser executado",
								"Valor total e forma de pagamento",
								"Prazo de início e conclusão",
								"Quem fornece materiais (especificar marcas se relevante)",
								"Garantia do serviço (tempo e o que cobre)",
								"Responsabilidade por limpeza da obra",
								"Multa por atraso (se aplicável)",
								"Dados do pedreiro (nome completo, CPF, contato)",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Dica:</strong> Não precisa ser contrato de advogado, mas
							algo assinado por ambos já protege muito.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Erros Comuns Ao Contratar Pedreiro
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="dash"
							items={[
								"Contratar pela indicação sem verificar trabalhos",
								"Aceitar orçamento verbal (sem nada por escrito)",
								"Pagar tudo adiantado (pague em etapas: 30% início, 40% meio, 30% final)",
								"Não visitar obra em andamento para acompanhar",
								'Aceitar "gambiarras" para economizar',
								"Não perguntar sobre garantia do serviço",
								"Contratar o mais barato sem comparar qualidade",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Encontre Pedreiros Verificados para o Seu Projeto
						</Headline>
						<BodyText className="mb-6">
							Na Savoir Link, você publica seu pedido e pedreiros verificados e
							qualificados entram em contato com orçamentos que você pode
							comparar. Tudo em um só lugar, com transparência total.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 5: Construir Muro */}
			{post.slug === "construir-muro-quanto-custa-metro-linear-2025" && (
				<>
					<BodyText>
						Precisa construir um muro mas não tem ideia de quanto vai gastar? Os
						preços variam muito entre materiais e tamanhos, você não sabe se o
						orçamento está justo. Este guia traz valores atualizados por metro
						linear em 2025, diferenças entre tipos de muro e fatores que
						influenciam o custo final.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Preços Médios de Construção de Muro (2025)
						</Headline>
						<BodyText>
							<strong>Muro de bloco comum:</strong> R$ 150-250 por metro linear
							<br />
							<strong>Muro de bloco aparente:</strong> R$ 180-280 por metro
							linear
							<br />
							<strong>Muro de concreto:</strong> R$ 300-400 por metro linear
							<br />
							<strong>Muro de arrimo:</strong> R$ 350-600 por metro linear
							<br />
							<em>Altura padrão considerada: 2-2,5 metros</em>
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Tipos de Muro e Preços Detalhados
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Muro de Bloco Comum (Mais Econômico)
						</Headline>
						<BodyText className="mb-4">
							<strong>Preço:</strong> R$ 150-250 por metro linear (altura
							2-2,5m)
							<br />
							<strong>Material:</strong> Blocos de concreto estrutural (14x19x39
							cm)
							<br />
							<strong>Acabamento:</strong> Requer reboco + pintura (não incluso
							no preço base)
							<br />
							<strong>Tempo:</strong> 3-5 dias para 10 metros lineares
						</BodyText>
						<BodyText>
							<strong>Quando usar:</strong> Divisa de terreno, cercamento de
							fundos, áreas que receberão acabamento depois.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Muro de Bloco Aparente (Sem Reboco)
						</Headline>
						<BodyText className="mb-4">
							<strong>Preço:</strong> R$ 180-280 por metro linear
							<br />
							<strong>Material:</strong> Blocos estruturais de face lisa ou
							blocos decorativos
							<br />
							<strong>Acabamento:</strong> Não precisa reboco (apenas rejunte)
							<br />
							<strong>Tempo:</strong> 4-6 dias para 10 metros lineares (demora
							mais pelo acabamento)
						</BodyText>
						<BodyText>
							<strong>Quando usar:</strong> Muros de frente, áreas visíveis,
							quando quer acabamento moderno sem reboco.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Muro de Concreto (Mais Resistente)
						</Headline>
						<BodyText className="mb-4">
							<strong>Preço:</strong> R$ 300-400 por metro linear
							<br />
							<strong>Material:</strong> Concreto armado com ferragem
							<br />
							<strong>Acabamento:</strong> Precisa reboco + pintura ou textura
							<br />
							<strong>Tempo:</strong> 5-8 dias para 10 metros lineares (inclui
							cura do concreto)
						</BodyText>
						<BodyText>
							<strong>Quando usar:</strong> Áreas que precisam resistência
							extra, muros altos (acima de 3m), terrenos com desnível.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Muro de Arrimo (Contenção)
						</Headline>
						<BodyText className="mb-4">
							<strong>Preço:</strong> R$ 350-600 por metro linear (pode ser mais
							dependendo da altura)
							<br />
							<strong>Material:</strong> Concreto armado reforçado + drenagem
							<br />
							<strong>Observação:</strong> Requer projeto de engenheiro (custo
							adicional R$ 1.000-3.000)
							<br />
							<strong>Tempo:</strong> 7-12 dias para 10 metros lineares
						</BodyText>
						<BodyText>
							<strong>Quando usar:</strong> Terrenos com desnível acentuado,
							contenção de terra, encostas.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Influencia o Preço Final?
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Altura do muro: cada 50cm a mais = +15-20% no preço",
								"Tipo de bloco/material: blocos decorativos custam 30-50% a mais",
								"Fundação: terreno irregular precisa fundação reforçada (+R$ 50-100/m)",
								"Acesso ao local: dificuldade para entrar material aumenta custo",
								"Acabamento: reboco + pintura adiciona R$ 40-70/m²",
								"Portão/vãos: cada abertura para portão custa R$ 200-400 extra",
								"Localização: capitais cobram 20-30% a mais que interior",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Exemplos de Custo Total
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Muro de 10 metros x 2m altura (bloco comum):</strong>
							<br />
							Material: R$ 800-1.200
							<br />
							Mão de obra: R$ 700-1.000
							<br />
							<strong>Total: R$ 1.500-2.200</strong>
						</BodyText>
						<BodyText className="mb-4">
							<strong>Muro de 20 metros x 2,5m altura (bloco aparente):</strong>
							<br />
							Material: R$ 2.400-3.600
							<br />
							Mão de obra: R$ 2.000-2.800
							<br />
							<strong>Total: R$ 4.400-6.400</strong>
						</BodyText>
						<BodyText>
							<strong>
								Muro de arrimo 15 metros x 3m altura (concreto armado):
							</strong>
							<br />
							Projeto: R$ 1.500-2.500
							<br />
							Material: R$ 4.500-7.000
							<br />
							Mão de obra: R$ 3.500-5.000
							<br />
							<strong>Total: R$ 9.500-14.500</strong>
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Etapas da Construção de Muro
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"1. Marcação e limpeza do terreno",
								"2. Escavação para fundação (vala de 40-60cm profundidade)",
								"3. Concretagem da fundação (baldrame)",
								"4. Elevação dos blocos (amarração correta das fiadas)",
								"5. Instalação de ferragem e pilares (a cada 2-3 metros)",
								"6. Cinta de amarração no topo",
								"7. Reboco e acabamento (se aplicável)",
								"8. Pintura ou textura final",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Dicas para Economizar
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Compare preços de blocos em diferentes lojas (pode variar 20-30%)",
								"Compre material à vista para pedir desconto",
								'Se possível, negocie mão de obra por valor fechado (evita "enrolação")',
								"Muro mais baixo: cada 30cm a menos economiza 10-15%",
								"Bloco comum + reboco pode sair mais barato que bloco aparente",
								"Faça em etapas se não tiver toda verba (fundação + elevação + acabamento)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Erros Comuns Ao Construir Muro
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="dash"
							items={[
								"Economizar na fundação (muro rachado/torto depois)",
								"Não colocar ferragem e pilares (muro fraco, cai com vento forte)",
								"Construir muro de arrimo sem projeto de engenheiro (risco de desabamento!)",
								"Não fazer cinta de amarração no topo (muro instável)",
								"Escolher bloco inadequado para tipo de muro",
								"Não verificar alinhamento de divisa com vizinho (processo judicial depois)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Compare Orçamentos de Pedreiros Para Construir Muro
						</Headline>
						<BodyText className="mb-6">
							Construção de muro requer experiência para garantir estrutura
							segura. Publique seu pedido na Savoir Link e pedreiros
							especializados entram em contato com orçamentos transparentes.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Buscar Pedreiros Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 6: Contrapiso */}
			{post.slug === "contrapiso-o-que-e-para-que-serve-quanto-custa" && (
				<>
					<BodyText>
						Vai instalar piso novo mas disseram que precisa fazer contrapiso
						antes? Você não sabe o que é, se realmente precisa ou quanto vai
						gastar? Tem dúvida se é a mesma coisa que regularização? Este guia
						explica tudo sobre contrapiso, quando é necessário e preços
						atualizados.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Preços de Contrapiso (2025)
						</Headline>
						<BodyText>
							<strong>Contrapiso básico:</strong> R$ 35-60/m² (material + mão de
							obra)
							<br />
							<strong>Contrapiso nivelado a laser:</strong> R$ 50-80/m²
							<br />
							<strong>Regularização (camada fina):</strong> R$ 25-45/m²
							<br />
							<strong>Piso aquecido (com tubulação):</strong> R$ 80-120/m²
							<br />
							<em>Espessura padrão: 3-5cm</em>
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que É Contrapiso?
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Definição:</strong> Contrapiso é uma camada de argamassa
							(cimento + areia) aplicada sobre a laje ou chão batido. Serve como
							base lisa e nivelada para instalação do piso final (cerâmica,
							porcelanato, laminado, etc).
						</BodyText>
						<BodyText className="mb-4">
							<strong>Composição:</strong> Geralmente usa-se traço 1:4 (1 parte
							de cimento para 4 de areia) ou 1:3 para maior resistência.
						</BodyText>
						<BodyText>
							<strong>Espessura típica:</strong> 3-5cm. Menos que isso fica
							fraco, mais que isso é desperdício de material (salvo casos
							especiais).
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Contrapiso vs Regularização: Qual a Diferença?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Contrapiso (Camada Grossa)
						</Headline>
						<BodyText className="mb-4">
							<strong>Espessura:</strong> 3-5cm (ou mais se necessário)
							<br />
							<strong>Quando usar:</strong> Obra nova, laje sem acabamento, chão
							irregular com desnível grande
							<br />
							<strong>Função:</strong> Criar base estrutural, nivelar piso,
							esconder tubulações
							<br />
							<strong>Preço:</strong> R$ 35-60/m²
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Regularização (Camada Fina)
						</Headline>
						<BodyText className="mb-4">
							<strong>Espessura:</strong> 0,5-2cm (camada fina)
							<br />
							<strong>Quando usar:</strong> Contrapiso já existe mas está
							irregular, pequenos desníveis, preparação para piso laminado
							<br />
							<strong>Função:</strong> Corrigir pequenas imperfeições,
							nivelar/alisar
							<br />
							<strong>Preço:</strong> R$ 25-45/m²
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Você Precisa de Contrapiso?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							SIM, Precisa de Contrapiso:
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Laje de concreto sem nenhum acabamento",
								"Chão de terra batida ou cascalho",
								"Piso antigo removido (voltou até a laje)",
								"Vai instalar piso sobre tubulações elétricas/hidráulicas",
								"Desnível maior que 2cm entre pontos do chão",
								"Construção nova (sempre tem contrapiso)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Pode Ser Só Regularização (Não Precisa Contrapiso Grosso):
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Contrapiso já existe mas está irregular",
								"Vai trocar piso mas base está OK",
								"Pequenas imperfeições ou buracos",
								"Vai instalar piso laminado/vinílico (precisa superfície perfeita)",
								"Desnível menor que 1cm",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Tipos de Contrapiso
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Contrapiso Convencional (Mais Comum)
						</Headline>
						<BodyText className="mb-4">
							<strong>Como é feito:</strong> Argamassa de cimento e areia
							aplicada e nivelada com régua
							<br />
							<strong>Nível de precisão:</strong> Bom (desnível de até 5mm
							aceito)
							<br />
							<strong>Preço:</strong> R$ 35-50/m²
							<br />
							<strong>Tempo de cura:</strong> 7 dias (pode pisar) / 28 dias
							(cura completa)
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Contrapiso Nivelado a Laser
						</Headline>
						<BodyText className="mb-4">
							<strong>Como é feito:</strong> Usa nível a laser para garantir
							superfície perfeitamente plana
							<br />
							<strong>Nível de precisão:</strong> Excelente (desnível máximo
							1-2mm)
							<br />
							<strong>Preço:</strong> R$ 50-80/m²
							<br />
							<strong>Quando usar:</strong> Pisos laminados, porcelanato grande
							formato, ambientes comerciais
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Contrapiso Autonivelante (Premium)
						</Headline>
						<BodyText className="mb-4">
							<strong>Como é feito:</strong> Argamassa líquida que se
							auto-nivela por gravidade
							<br />
							<strong>Nível de precisão:</strong> Perfeito (nivelamento
							milimétrico)
							<br />
							<strong>Preço:</strong> R$ 70-120/m²
							<br />
							<strong>Quando usar:</strong> Pisos especiais, reforma sem quebrar
							tudo, ambientes de alto padrão
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Processo de Execução do Contrapiso
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"1. Limpeza da base: remover pó, óleo, sujeira (prejudica aderência)",
								"2. Umedecer superfície: evita que laje absorva água da argamassa",
								"3. Aplicar chapisco (opcional mas recomendado): melhora aderência",
								"4. Instalar guias/mestras: réguas que definem nível do contrapiso",
								"5. Preparar argamassa: traço 1:4 (cimento:areia) com aditivo",
								"6. Aplicar e espalhar argamassa entre as guias",
								"7. Nivelar com régua: passar régua sobre as guias para alisar",
								"8. Fazer textura superficial (desempenar ou vassoura): melhora aderência do piso",
								"9. Curar por 7 dias: molhar 2x/dia para evitar trincas",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Erros Comuns Que Causam Problema
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="dash"
							items={[
								"Não limpar bem a base (contrapiso descola depois)",
								"Fazer camada muito fina (menos de 3cm) - fica fraco, racha",
								"Não fazer junta de dilatação em áreas grandes (trincar com certeza)",
								"Andar sobre contrapiso antes de 7 dias (estraga o nivelamento)",
								"Não molhar durante cura (seca rápido demais = trincas)",
								"Colocar piso antes dos 28 dias em contrapiso grosso (ainda não curou 100%)",
								"Usar areia com impurezas ou traço errado (contrapiso fraco)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quanto Material Usar? (Cálculo Rápido)
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Para 1m² de contrapiso com 4cm de espessura:</strong>
							<br />
							Cimento: 8-10kg
							<br />
							Areia: 0,035-0,04m³ (35-40 litros)
							<br />
							Água: 5-6 litros
						</BodyText>
						<BodyText className="mb-4">
							<strong>Exemplo prático: sala de 20m²:</strong>
							<br />
							Cimento: 10 sacos de 50kg = R$ 350-450
							<br />
							Areia: 0,8m³ = R$ 80-120
							<br />
							Mão de obra: R$ 700-1.000
							<br />
							<strong>Total: R$ 1.130-1.570</strong>
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Vale a Pena Fazer Sozinho?
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Difícil para iniciante:</strong> Contrapiso requer prática
							para nivelar corretamente. Erro no nivelamento = piso torto/com
							desnível (MUITO difícil de corrigir depois).
						</BodyText>
						<BodyText className="mb-4">
							<strong>Economia relativa:</strong> Você economiza mão de obra (R$
							700-1.000 em 20m²), mas pode gastar mais em erro/desperdício de
							material.
						</BodyText>
						<BodyText>
							<strong>Recomendação:</strong> Se tem experiência em obra, área
							pequena (varanda, banheiro), pode tentar. Para área grande (sala,
							casa inteira), vale chamar pedreiro - contrapiso mal feito
							compromete todo o piso.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Contrate Pedreiro Experiente Para Fazer Contrapiso
						</Headline>
						<BodyText className="mb-6">
							Contrapiso bem feito é fundamental para piso durar. Publique seu
							pedido na Savoir Link e pedreiros especializados entram em contato
							com orçamentos transparentes.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Buscar Pedreiro Para Contrapiso</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 7: Erros Comuns */}
			{post.slug === "erros-comuns-contratar-pedreiro-como-evitar" && (
				<>
					<BodyText>
						Contratar pedreiro sem saber o que verificar pode gerar muito
						prejuízo: trabalho mal feito que precisa refazer, custo que dobra no
						meio da obra, atrasos de meses. Aprenda os 5 erros mais comuns que
						clientes cometem ao contratar pedreiro e como evitar cada um deles.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Os 5 Erros Que Vão Te Custar Caro
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"❌ Contratar pela indicação sem verificar trabalhos",
								"❌ Aceitar orçamento verbal (nada por escrito)",
								"❌ Pagar tudo ou quase tudo adiantado",
								"❌ Não acompanhar a obra periodicamente",
								"❌ Economizar em material de má qualidade",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Erro #1: Contratar Pela Indicação Sem Verificar Trabalhos
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Por Que É Um Erro
						</Headline>
						<BodyText className="mb-4">
							Mesmo que seja indicação de familiar/amigo, cada obra é diferente.
							O pedreiro pode ser bom para pequenos reparos mas ruim para
							construção grande. Ou fez bom trabalho há 5 anos mas hoje não tem
							mais o mesmo capricho.
						</BodyText>
						<Headline size="sm" className="mb-4 text-primary">
							Como Evitar
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Peça para ver trabalhos recentes (últimos 6 meses)",
								"Se possível, visite pessoalmente obra concluída",
								"Pergunte se já fez serviço SIMILAR ao que você precisa",
								"Peça 2-3 referências diretas de clientes (ligue para eles)",
								"Verifique avaliações online se o profissional tiver perfil",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							História Real
						</Headline>
						<BodyText>
							<em>
								"Meu vizinho indicou um pedreiro que fez reforma na casa dele.
								Contratei sem ver trabalhos. O pedreiro era bom para pequenos
								reparos mas minha obra era construção de muro + contrapiso. Ele
								não tinha experiência, deixou tudo torto, precisei contratar
								outro para refazer. Gastei o dobro."
							</em>{" "}
							- Cliente Savoir Link
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Erro #2: Aceitar Orçamento Verbal (Nada Por Escrito)
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Por Que É Um Erro
						</Headline>
						<BodyText className="mb-4">
							Orçamento verbal gera discussão depois: "Eu disse que reboco NÃO
							estava incluso", "Você falou que ia ser R$ 3.000, não R$ 4.500",
							"Achei que material era por sua conta". Vira sua palavra contra a
							dele.
						</BodyText>
						<Headline size="sm" className="mb-4 text-primary">
							Como Evitar
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Exija orçamento por escrito (pode ser até WhatsApp, mas por escrito)",
								"Orçamento deve especificar: serviços inclusos, materiais (quem fornece), prazo, valor total",
								'Liste o que NÃO está incluso (evita "ah, isso é extra")',
								"Faça contrato simples ou acordo assinado por ambos",
								"Guarde todas conversas de WhatsApp (servem como prova)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							O Que Incluir No Orçamento Escrito
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Descrição completa do serviço (ex: construção de muro 10m x 2,5m altura, bloco estrutural)",
								"Material incluso? Se sim, especificar marcas/tipos",
								"Valor total OU forma de cobrança (por m², por diária)",
								"Prazo estimado (data início e fim)",
								"Forma de pagamento (% adiantado, parcelamento, condições)",
								"Garantia (se aplicável)",
								"Dados do pedreiro (nome, CPF, contato)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Erro #3: Pagar Tudo ou Quase Tudo Adiantado
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Por Que É Um Erro
						</Headline>
						<BodyText className="mb-4">
							Se você pagar 80-100% adiantado, o pedreiro perde senso de
							urgência. Aparece 2-3x por semana, enrola, some por dias. Ou pior:
							desaparece completamente com seu dinheiro (já vi acontecer várias
							vezes).
						</BodyText>
						<Headline size="sm" className="mb-4 text-primary">
							Como Evitar - Forma de Pagamento Correta
						</Headline>
						<BodyText className="mb-4">
							<strong>Modelo ideal para obra/reforma:</strong>
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"30% no início (para comprar material inicial)",
								"40% no meio da obra (quando atingir 50% do trabalho)",
								"30% no final (após conclusão e sua aprovação)",
							]}
						/>
						<BodyText className="mt-4 mb-4">
							<strong>Para serviços pequenos (1-2 dias):</strong>
						</BodyText>
						<BulletList
							variant="check"
							items={["50% no início", "50% após conclusão e aprovação"]}
						/>
						<BodyText className="mt-4">
							<strong>NUNCA:</strong> Pague mais de 50% antes de ver pelo menos
							metade do trabalho pronto.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Erro #4: Não Acompanhar a Obra Periodicamente
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Por Que É Um Erro
						</Headline>
						<BodyText className="mb-4">
							Você confia 100% e só vai ver no final. Aí descobre: parede torta,
							reboco mal feito, material diferente do combinado, trabalho
							pela-metade. Correção fica muito mais cara (às vezes precisa
							demolir e refazer).
						</BodyText>
						<Headline size="sm" className="mb-4 text-primary">
							Como Evitar
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Visite a obra pelo menos 2-3x por semana (ou diariamente se possível)",
								"Tire fotos do progresso (documenta etapas)",
								"Questione se algo parecer diferente do combinado",
								"Verifique se material usado é o especificado",
								"Peça explicação de cada etapa (profissional honesto explica)",
								"Não aprove etapa se não ficou satisfeito (é seu direito)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Checkpoints Importantes Para Verificar
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Fundação: profundidade adequada (40-60cm para muro)",
								"Nível: use nível de bolha para verificar se está reto",
								"Ferragem: verificar se colocou vergalhões onde combinado",
								"Acabamento: cantos retos, juntas alinhadas",
								"Limpeza: obra minimamente organizada (bagunça total = desleixo)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Erro #5: Economizar Comprando Material de Má Qualidade
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Por Que É Um Erro
						</Headline>
						<BodyText className="mb-4">
							Você quer economizar R$ 300 comprando cimento/bloco mais barato,
							mas depois gasta R$ 2.000 para consertar: muro rachado, reboco
							descascando, infiltração. Material ruim compromete TODO o
							trabalho, mesmo que pedreiro seja bom.
						</BodyText>
						<Headline size="sm" className="mb-4 text-primary">
							Como Evitar
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Pergunte ao pedreiro qual material ele recomenda (marca, tipo)",
								"Pesquise preços mas não compre sempre o mais barato",
								"Materiais estruturais (cimento, ferragem): NÃO economize",
								"Materiais de acabamento (tinta, rejunte): pode pechinchar mais",
								"Peça nota fiscal (garantia de procedência)",
								"Se pedreiro insistir em material muito barato, questione o motivo",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Onde Pode Economizar (Sem Prejudicar Qualidade)
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Compare preços em 3-4 lojas de material (variam 15-25%)",
								"Compre à vista para pedir desconto",
								"Negocie frete grátis ou desconto no volume",
								"Evite marcas premium para itens básicos (bloco, areia)",
								"Compre material em promoção mas de marca conhecida",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Outros Erros Comuns (Bônus)
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>
								❌ Não definir responsabilidade por limpeza da obra:
							</strong>{" "}
							Combine antes quem limpa entulho/restos (se não, vira briga no
							final).
						</BodyText>
						<BodyText className="mb-4">
							<strong>❌ Contratar sempre o mais barato:</strong> Preço baixo
							demais = material ruim OU vai enrolar muito OU não tem
							experiência.
						</BodyText>
						<BodyText className="mb-4">
							<strong>❌ Aceitar "gambiarras" para economizar:</strong> "Ah, dá
							pra fazer sem ferragem aqui, economiza R$ 200". NÃO aceite atalhos
							em estrutura.
						</BodyText>
						<BodyText className="mb-4">
							<strong>❌ Não perguntar sobre garantia:</strong> Trabalho de
							qualidade tem garantia (mínimo 3-6 meses). Se pedreiro não dá
							garantia = red flag.
						</BodyText>
						<BodyText>
							<strong>❌ Deixar prazo em aberto:</strong> "Levo o tempo que
							precisar" = vai enrolar. Defina prazo estimado por escrito.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Checklist Anti-Erro (Use Antes de Contratar)
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"☑ Vi trabalhos anteriores recentes do pedreiro?",
								"☑ Falei com pelo menos 2 referências de clientes?",
								"☑ Tenho orçamento detalhado por escrito?",
								"☑ Defini forma de pagamento parcelada (máx 30-40% adiantado)?",
								"☑ Especifiquei material a ser usado (marca/tipo)?",
								"☑ Defini prazo estimado de conclusão?",
								"☑ Estabeleci como vai ser acompanhamento da obra?",
								"☑ Deixei claro quem é responsável por limpeza?",
								"☑ Perguntei sobre garantia do serviço?",
								"☑ Tenho contrato ou acordo assinado?",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Contrate Pedreiros Verificados com Transparência Total
						</Headline>
						<BodyText className="mb-6">
							Na Savoir Link, você evita esses erros: publique seu pedido e
							pedreiros verificados entram em contato com orçamentos detalhados
							que você compara antes de decidir. Contratação segura e
							transparente.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Pedreiro Confiável</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}
		</>
	);
}
