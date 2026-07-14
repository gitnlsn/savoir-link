import Link from "next/link";
import { BulletList } from "~/components/ui/bullet-list";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

export function PlumbingProblemsContent({ post }: { post: BlogPost }) {
	return (
		<>
			{post.slug === "pia-cozinha-entupiu-de-novo" && (
				<>
					<BodyText>
						Você acabou de lavar a louça e a água não desce. Fica ali parada na
						pia, empossada, com resto de comida boiando. Você usa o
						desentupidor, funciona por um dia... e no dia seguinte está entupida
						de novo.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Por Que a Pia Entope Tanto?
						</Headline>
						<BodyText>
							A pia da cozinha é um dos pontos mais vulneráveis do encanamento
							doméstico. Diariamente, restos de comida, gordura e sabão descem
							pelo ralo, criando camadas que se acumulam nas paredes dos canos.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						5 Causas Principais
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"1. Gordura acumulada: óleo e gordura solidificam dentro do cano, criando bloqueios",
								"2. Restos de comida: grãos de arroz, cascas, farelos se acumulam e formam tampões",
								"3. Sabão e detergente: resíduos de sabão grudam nas paredes do cano junto com gordura",
								"4. Cabelo e fiapos: mesmo na pia da cozinha, fios podem vir de panos de prato",
								"5. Instalação inadequada: canos com inclinação errada acumulam detritos mais facilmente",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Soluções Caseiras (Para Entupimentos Leves)
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Água fervente: despeje 2L de água fervente lentamente — derrete gordura",
								"Bicarbonato + vinagre: 1 xícara de bicarbonato + 1 xícara de vinagre, espere 30min",
								"Desentupidor manual: crie vácuo bombeando para cima e para baixo",
								"Sifão limpo: abra o sifão (curva embaixo da pia) e remova sujeira acumulada",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							🚨 Quando Chamar Encanador
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"❌ Entupimento volta em menos de 24 horas",
								"❌ Água volta suja pelo ralo",
								"❌ Mau cheiro forte mesmo após limpeza",
								"❌ Água demora muito para escoar",
								"❌ Mais de uma pia/ralo entupido ao mesmo tempo",
							]}
						/>
						<BodyText className="mt-4">
							Esses sinais indicam entupimento profundo na tubulação ou na rede
							de esgoto.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Solução Definitiva: Prevenção
					</Headline>

					<BodyText>
						Use peneira no ralo, nunca despeje óleo/gordura na pia, raspe pratos
						antes de lavar, despeje água quente semanalmente. Um encanador
						profissional pode fazer hidrojateamento para limpeza completa dos
						canos.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Encontre Encanadores Qualificados
						</Headline>
						<BodyText className="mb-6">
							Resolva o entupimento de vez com profissionais experientes em
							desentupimento e limpeza de tubulações.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 9: Vazamento Embaixo da Pia */}
			{post.slug === "vazamento-embaixo-pia-grave" && (
				<>
					<BodyText>
						Você abre o armário embaixo da pia para pegar um produto de limpeza
						e... sente algo molhado no chão. Uma poça d'água se formou ali,
						silenciosamente. De onde está vindo?
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Teste Rápido: É Grave ou Não?
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"1. Seque toda a área embaixo da pia completamente",
								"2. Abra a torneira por 2 minutos",
								"3. Observe: água aparece imediatamente? Lentamente? Só ao dar descarga na pia?",
								"4. Identifique: vem do cano, da conexão, do sifão ou da torneira?",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						4 Causas Mais Comuns
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Sifão com Vazamento
						</Headline>
						<BodyText>
							O sifão (curva em forma de U) pode ter conexões frouxas, borracha
							de vedação ressecada ou até furos de corrosão.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							2. Conexões Soltas
						</Headline>
						<BodyText>
							Conexões entre canos, entre cano e sifão, ou entre sifão e ralo
							podem afrouxar com o tempo e vibração.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							3. Tubulação Furada
						</Headline>
						<BodyText>
							Canos antigos de metal podem enferrujar e desenvolver furos. Canos
							PVC podem rachar.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							4. Vazamento na Torneira (Base)
						</Headline>
						<BodyText>
							Às vezes o vazamento vem de cima, da base da torneira, e escorre
							pela parte de trás da pia.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							⚠️ Quando É Urgente
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"❌ Água jorrando (não apenas pingando)",
								"❌ Mancha de umidade se espalhando na parede",
								"❌ Mofo ou cheiro de mofo",
								"❌ Madeira do armário inchada ou apodrecendo",
								"❌ Vazamento constante (não apenas ao usar torneira)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que o Encanador Faz
					</Headline>

					<BodyText>
						Um encanador qualificado vai identificar a origem exata do
						vazamento, trocar sifão/vedações/tubulação conforme necessário, e
						verificar se o problema se estende a outras partes do encanamento.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Contrate Encanador Agora
						</Headline>
						<BodyText className="mb-6">
							Vazamentos pioram com o tempo. Encontre profissionais verificados
							para resolver antes que cause danos maiores.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Ver Encanadores na Sua Região</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 10: Cano Estourou */}
			{post.slug === "cano-estourou-o-que-fazer-emergencia" && (
				<>
					<BodyText>
						Você ouve um barulho de água jorrando. Corre até o banheiro e vê
						água espirrando da parede, do teto ou do chão. Um cano estourou. O
						que fazer AGORA?
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-6"
					>
						<Headline size="sm" className="mb-4">
							🚨 Passo a Passo de Emergência
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"1. FECHE O REGISTRO GERAL DE ÁGUA imediatamente (geralmente na calçada ou área de serviço)",
								"2. DESLIGUE A ENERGIA se água estiver perto de tomadas/fios (risco de choque)",
								"3. CONTENHA a água com baldes, toalhas — evite que se espalhe",
								"4. DOCUMENTE com fotos para seguro (se aplicável)",
								"5. CHAME ENCANADOR URGENTE — não espere secar para avaliar danos",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Por Que Canos Estouram?
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"Corrosão/ferrugem em canos antigos de ferro",
								"Pressão excessiva da água (acima de 40psi sem regulador)",
								"Congelamento (menos comum no Brasil, mas ocorre em regiões serranas)",
								"Entupimento crônico causando sobrepressão",
								"Perfuração acidental (furadeira, prego)",
								"Instalação malfeita ou material de baixa qualidade",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Contenção Temporária (ATÉ O ENCANADOR CHEGAR)
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							ATENÇÃO: Essas são soluções TEMPORÁRIAS de emergência. Não
							substituem reparo profissional.
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Fita veda-vazamento autofusível (enrolar apertado sobre o furo)",
								"Abraçadeira metálica + borracha (para furos pequenos)",
								"Massa epóxi para tubos (secar área, aplicar conforme instruções)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-8">
						<Headline size="sm" className="mb-4">
							❌ NUNCA Faça Isso
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"Não use fita isolante comum (não aguenta pressão)",
								"Não tente soldar sem conhecimento (risco de incêndio)",
								"Não religue água sem conter vazamento",
								"Não ignore 'vazamentinhos' — podem virar jatos",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Reparo Profissional
					</Headline>

					<BodyText>
						Encanador substituirá o trecho danificado do cano, verificará
						pressão da água, checará outros pontos de risco e garantirá que
						instalação esteja segura.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Emergência? Encontre Encanador AGORA
						</Headline>
						<BodyText className="mb-6">
							Conecte-se com encanadores disponíveis para atendimento de
							emergência 24 horas na sua região.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Ver Encanadores de Emergência</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 11: Vaso Sanitário Entupido */}
			{post.slug === "vaso-sanitario-entupido-desentupidor-nao-resolve" && (
				<>
					<BodyText>
						Você usou o desentupidor. Bombeou, bombeou, bombeou... nada. A água
						continua subindo. Tentou água quente, bicarbonato, até aquele
						produto químico milagroso da propaganda. E o vaso continua entupido.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						Por Que o Desentupidor Não Funciona?
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"O objeto bloqueando é grande demais (pano, brinquedo, absorvente)",
								"O entupimento está muito profundo na tubulação (fora do alcance do desentupidor)",
								"Há acúmulo calcificado de anos nas paredes do cano",
								"O problema é na rede de esgoto do prédio/rua (não no seu vaso)",
								"Você está usando o desentupidor incorretamente (sem vedar bem)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Métodos Caseiros (Última Tentativa)
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Água quente + detergente: 2L água quente (não fervendo) + meio copo detergente, espere 15min",
								"Saco plástico no desentupidor: melhora vedação e pressão",
								"Garrafa PET cortada: improvise um desentupidor se não tiver",
								"Mangueira de jardim: insira com cuidado e abra água com pressão (último recurso)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							🚨 Sinais de Entupimento Grave (CHAME ENCANADOR)
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"❌ Água voltando rapidamente após descarga",
								"❌ Cheiro forte de esgoto",
								"❌ Esgoto voltando pelo ralo do box/pia",
								"❌ Mais de um vaso entupido na casa/prédio",
								"❌ Barulho de gorgolejo vindo do cano",
							]}
						/>
						<BodyText className="mt-4">
							Esses sinais indicam entupimento na rede de esgoto principal — DIY
							não resolve.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que o Encanador Usa
					</Headline>

					<BodyText>
						Encanadores profissionais têm equipamentos especializados: cabo
						desentupidor motorizado (sonda elétrica), hidrojateamento de alta
						pressão, câmera de inspeção para localizar bloqueio, e ventosa
						profissional industrial.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Resolva o Entupimento de Vez
						</Headline>
						<BodyText className="mb-6">
							Encontre encanadores especializados em desentupimento de vaso
							sanitário e esgoto.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Encanador Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 12: Chuveiro Sem Pressão */}
			{post.slug === "chuveiro-sem-pressao-agua-fraca" && (
				<>
					<BodyText>
						Você liga o chuveiro e a água sai fraca, devagar, quase pingando. É
						impossível tomar um banho decente. Enquanto isso, as torneiras da
						casa funcionam normalmente. O que está acontecendo?
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						5 Causas Principais
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Caixa d'Água Muito Baixa ou Pequena
						</Headline>
						<BodyText>
							Pressão da água depende da altura da caixa em relação ao chuveiro.
							Ideal: 1 a 1,5m de desnível. Caixa muito baixa = pressão fraca.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							2. Registro do Chuveiro Parcialmente Fechado
						</Headline>
						<BodyText>
							Verifique o registro (válvula) que controla a água do chuveiro —
							pode estar meio fechado ou com defeito.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							3. Furos do Chuveiro Entupidos (Calcário)
						</Headline>
						<BodyText>
							Depósitos minerais e calcário acumulam nos furinhos do chuveiro ao
							longo do tempo, bloqueando a saída de água.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							4. Tubulação Entupida ou Com Ar
						</Headline>
						<BodyText>
							Bolhas de ar presas na tubulação ou acúmulo de sujeira/ferrugem
							podem reduzir drasticamente o fluxo.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							5. Redutor de Pressão Instalado
						</Headline>
						<BodyText>
							Alguns chuveiros têm redutor de vazão (economia de água) que pode
							ser removido para aumentar pressão.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Soluções Rápidas (Teste Primeiro)
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Limpe os furos do chuveiro: desmonte e deixe de molho em vinagre por 30min",
								"Remova o redutor de vazão (anel plástico dentro do chuveiro)",
								"Abra totalmente o registro do chuveiro",
								"Libere ar: abra todas as torneiras e depois o chuveiro (desligado)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Solução Profissional: Pressurizador
					</Headline>

					<BodyText>
						Se o problema é altura insuficiente da caixa d'água, um encanador
						pode instalar um pressurizador (bomba) que aumenta artificialmente a
						pressão. Custo: R$ 300-1.200 dependendo do modelo.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Aumente a Pressão do Chuveiro
						</Headline>
						<BodyText className="mb-6">
							Encontre encanadores especializados em instalação de pressurizador
							e ajuste de pressão hidráulica.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 13: Torneira Pingando */}
			{post.slug === "torneira-pingando-gasto-agua" && (
				<>
					<BodyText>
						Plic... plic... plic... Aquele som irritante de noite. Você fecha a
						torneira com força, mas ela continua pingando. "É só um pinguinho,
						não deve ser nada grave." ERRADO.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-6"
					>
						<Headline size="sm" className="mb-4">
							💧 O Custo do Pinga-Pinga
						</Headline>
						<BodyText>
							Uma torneira pingando 1 gota por segundo desperdiça
							aproximadamente 10.000 litros de água por ano. Na conta de água
							média brasileira (R$ 30/m³), isso representa R$ 300/ano jogados
							fora.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Por Que a Torneira Pinga?
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"Reparo (vedação) gasto: a borrachinha que veda a passagem de água ressecou",
								"Cartucho com defeito (torneiras monocomando): o cartucho cerâmico interno falhou",
								"Rosca desgastada: a rosca que aperta o reparo está gasta e não veda mais",
								"Assento (sede) danificado: superfície onde o reparo encosta está corroída",
								"Sujeira/calcário: pequenos fragmentos impedem vedação completa",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Trocar o Reparo (DIY Simples)
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"1. Feche o registro de água daquela torneira (ou geral)",
								"2. Abra a torneira para drenar água restante",
								"3. Remova a tampa decorativa do volante (geralmente gira ou faz pressão)",
								"4. Desparafuse o volante e retire-o",
								"5. Com chave inglesa, desparafuse a castanha (peça que segura o eixo)",
								"6. Retire o eixo e troque a borracha (reparo) na ponta",
								"7. Remonte tudo na ordem inversa",
							]}
						/>
						<BodyText className="mt-4">
							Custo do reparo: R$ 2-5. Tempo: 15 minutos.
						</BodyText>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-8">
						<Headline size="sm" className="mb-4">
							Quando Substituir a Torneira Inteira
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"❌ Torneira muito antiga (15+ anos) — reposição difícil",
								"❌ Corpo da torneira corroído ou rachado",
								"❌ Rosca interna espanada (reparo não aperta mais)",
								"❌ Vazamento persiste mesmo após troca de reparo",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Economia + Sustentabilidade
					</Headline>

					<BodyText>
						Consertar uma torneira pingando economiza 10.000L de água potável
						por ano, reduz sua conta em R$ 300, e evita desperdício de um
						recurso cada vez mais escasso. É manutenção simples com grande
						impacto.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Precisa de Ajuda? Contrate Encanador
						</Headline>
						<BodyText className="mb-6">
							Se a troca de reparo não resolveu ou você não se sente confortável
							fazendo sozinho, encontre encanadores qualificados.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Ver Encanadores na Sua Região</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 14: Esgoto Voltando */}
			{post.slug === "esgoto-voltando-ralo-urgente" && (
				<>
					<BodyText>
						Você toma banho e percebe água suja voltando pelo ralo da pia. Ou dá
						descarga no vaso e esgoto borbulha no ralo do box. E aquele cheiro
						insuportável... Isso NÃO é normal.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-6"
					>
						<Headline size="sm" className="mb-4">
							⚠️ É Emergência? SIM!
						</Headline>
						<BodyText>
							Esgoto voltando é sinal de entupimento grave na rede de esgoto.
							Além do transtorno, representa risco sério à saúde: contato com
							bactérias, vírus e parasitas presentes no esgoto pode causar
							doenças gastrointestinais, hepatite A, leptospirose e infecções de
							pele.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Por Que Esgoto Volta?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Entupimento na Rede de Esgoto
						</Headline>
						<BodyText>
							Bloqueio na tubulação principal impede esgoto de seguir o fluxo
							normal. Quando você usa água, esgoto procura caminho mais fácil:
							volta pelos ralos.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							2. Sifão com Problema
						</Headline>
						<BodyText>
							O sifão é uma curva em U que retém água, criando barreira contra
							gases/esgoto. Se secar, quebrar ou entupir, perde função.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							3. Ventilação Inadequada
						</Headline>
						<BodyText>
							Sistema de esgoto precisa de tubos de ventilação para equalizar
							pressão. Sem ventilação, cria-se vácuo que suga água dos sifões ou
							empurra esgoto de volta.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							4. Caixa de Gordura Cheia
						</Headline>
						<BodyText>
							Caixa de gordura transbordando bloqueia saída de esgoto da
							cozinha, fazendo tudo voltar.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Fazer AGORA
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="arrow"
							items={[
								"1. PARE de usar água (não dê descarga, não abra torneiras)",
								"2. Isole a área afetada — mantenha crianças/animais longe",
								"3. Ventile o ambiente (abra janelas) — gases de esgoto são tóxicos",
								"4. Use luvas e máscara se precisar limpar área contaminada",
								"5. CHAME ENCANADOR URGENTE — não tente DIY em refluxo de esgoto",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Prevenção
					</Headline>

					<BodyText>
						Limpe caixa de gordura a cada 3-6 meses, não jogue lixo/gordura/óleo
						no ralo, instale peneiras, faça manutenção preventiva anual do
						encanamento com encanador.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Emergência de Esgoto: Aja Agora
						</Headline>
						<BodyText className="mb-6">
							Conecte-se com encanadores especializados em desentupimento de
							esgoto e emergências hidráulicas.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Encanador de Emergência</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 15: Como Perder Barriga Sem Passar Fome */}
		</>
	);
}
