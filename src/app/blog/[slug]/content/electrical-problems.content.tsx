import Link from "next/link";
import { BulletList } from "~/components/ui/bullet-list";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

export function ElectricalProblemsContent({ post }: { post: BlogPost }) {
	return (
		<>
			{/* SEO Article: Por Que o Disjuntor Cai Toda Hora */}
			{post.slug === "por-que-disjuntor-cai-toda-hora" && (
				<>
					<BodyText>
						Você acabou de ligar o chuveiro para tomar um banho relaxante depois
						de um dia cansativo. Mas assim que a água começa a esquentar, *pá* —
						tudo escurece. Novamente. Você solta um suspiro de frustração, pega
						o celular como lanterna e vai até o quadro de luz pela terceira vez
						hoje.
					</BodyText>

					<BodyText>
						Se essa cena é familiar para você, saiba que não está sozinho. **O
						disjuntor caindo constantemente é um dos problemas elétricos mais
						comuns nas residências brasileiras** — e também um dos mais
						irritantes. Mas além da frustração, existe uma preocupação maior:
						será que minha casa está em risco?
					</BodyText>

					<ContentCard variant="accent" accentPosition="left">
						<Headline size="sm" className="mb-4">
							O Que É o Disjuntor e Por Que Ele "Cai"?
						</Headline>
						<BodyText>
							O disjuntor é um dispositivo de segurança instalado no quadro de
							luz da sua casa. Ele funciona como um **guardião da sua instalação
							elétrica**, cortando automaticamente o fornecimento de energia
							quando detecta algo errado — como sobrecarga ou curto-circuito —
							para proteger sua casa de problemas mais graves, como incêndios.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						5 Motivos Principais Para o Disjuntor Cair Constantemente
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Sobrecarga Elétrica: Você Está Pedindo Demais da Sua Rede
						</Headline>
						<BodyText className="mb-4">
							<strong>A causa mais comum.</strong> Sua instalação elétrica foi
							projetada para suportar um certo volume de corrente elétrica.
							Quando você liga vários aparelhos potentes ao mesmo tempo, ocorre
							uma sobrecarga.
						</BodyText>
						<Label className="mb-2">Situações típicas de sobrecarga:</Label>
						<BulletList
							variant="dash"
							items={[
								"Chuveiro elétrico + micro-ondas + ar-condicionado ligados simultaneamente",
								"Vários aparelhos em uma mesma tomada com extensões",
								"Novos aparelhos mais potentes em instalação antiga",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Sinal clássico:</strong> O disjuntor cai sempre que você
							liga um aparelho específico ou combinação de aparelhos.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							2. Curto-Circuito: Quando os Fios Se "Beijam"
						</Headline>
						<BodyText className="mb-4">
							Um curto-circuito acontece quando dois fios que não deveriam se
							tocar entram em contato direto. Isso causa um pico imenso de
							corrente, e o disjuntor desarma imediatamente para evitar
							incêndio.
						</BodyText>
						<Label className="mb-2">Causas comuns:</Label>
						<BulletList
							variant="dash"
							items={[
								"Fios desencapados ou com isolamento danificado",
								"Umidade em caixas de tomadas ou interruptores",
								"Roedores que roeram a fiação",
								"Instalação malfeita ou gambiarra",
							]}
						/>
						<ContentCard
							variant="accent"
							accentPosition="left"
							className="mt-4"
						>
							<BodyText>
								<strong>⚠️ ATENÇÃO:</strong> Se o disjuntor cai instantaneamente
								ao ser religado, mesmo sem aparelhos ligados, NÃO continue
								tentando. Chame um eletricista imediatamente.
							</BodyText>
						</ContentCard>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							3. Disjuntor Subdimensionado: O "Guardião" É Pequeno Demais
						</Headline>
						<BodyText>
							Sua casa pode ter crescido em consumo de energia, mas o disjuntor
							continuou o mesmo de 20 anos atrás. Antigamente: TV, geladeira,
							ventiladores. Hoje: smart TV, videogame, computador,
							ar-condicionado, micro-ondas, máquina de lavar, secadora...
						</BodyText>
						<BodyText className="mt-4">
							Se o disjuntor foi dimensionado para uma carga menor, ele vai
							desarmar com frequência não porque há problema, mas porque
							simplesmente não foi feito para aguentar tanto.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							4. Disjuntor Defeituoso ou Velho: Ele Está Cansado
						</Headline>
						<BodyText>
							Sim, disjuntores envelhecem e podem começar a falhar. Componentes
							internos se desgastam com o tempo, especialmente se desarmou
							muitas vezes ao longo dos anos.
						</BodyText>
						<Label className="mt-4 mb-2">Sinais de disjuntor defeituoso:</Label>
						<BulletList
							variant="dash"
							items={[
								"Desarma sem razão aparente",
								"Está difícil de religar (trava)",
								"Aquece excessivamente",
								"Tem mais de 15-20 anos de uso",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							5. Fiação Antiga ou Inadequada: A Raiz do Problema
						</Headline>
						<BodyText className="mb-4">
							Às vezes o disjuntor está perfeitamente bem — o problema é a
							fiação da casa. Fios muito finos, emendas malfeitas, fiação
							oxidada ou falta de aterramento causam resistência elétrica,
							aquecimento e desarmamento.
						</BodyText>
						<Label className="mb-2">Sinais de fiação problemática:</Label>
						<BulletList
							variant="dash"
							items={[
								"Tomadas ou interruptores quentes ao toque",
								"Luzes piscam quando você liga aparelhos potentes",
								"Cheiro de queimado de tomadas ou quadro de luz",
								"Casa com mais de 20 anos sem revisão elétrica",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Fazer um Teste Simples em Casa
					</Headline>

					<ContentCard variant="bordered">
						<Label className="mb-4">Passo a passo:</Label>
						<BulletList
							variant="arrow"
							items={[
								"1. Desligue todos os aparelhos da tomada e apague todas as luzes",
								"2. Religue o disjuntor que desarmou",
								"3. Observe: Se cair imediatamente sem nada ligado → possível curto (chame eletricista já)",
								"4. Se permanecer ligado, ligue os aparelhos um por um",
								"5. Identifique o culpado: ao ligar qual aparelho ele cai?",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							🚨 Quando Chamar um Eletricista IMEDIATAMENTE
						</Headline>
						<BulletList
							variant="check"
							items={[
								"O disjuntor cai mesmo sem nada ligado",
								"Cheiro de queimado do quadro de luz, tomadas ou interruptores",
								"Faíscas ao religar o disjuntor",
								"Disjuntor ou fios quentes ao toque",
								"Você sente choques leves ao tocar aparelhos",
								"Tomadas ou interruptores derretendo ou com marcas de queimado",
								"Luzes piscam frequentemente",
								"Instalação com mais de 20 anos sem revisão",
							]}
						/>
						<BodyText className="mt-4">
							<strong>⚠️ IMPORTANTE:</strong> Problemas elétricos são uma das
							principais causas de incêndios residenciais no Brasil. Não
							subestime os sinais de alerta.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Você NÃO Deve Fazer
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="dash"
							items={[
								"❌ Trocar o disjuntor por um de amperagem maior sem avaliar a fiação",
								"❌ Desativar ou 'travar' o disjuntor para ele não cair",
								"❌ Fazer 'gambiarras' ou emendas mal feitas",
								"❌ Ignorar o problema e continuar religando",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como um Eletricista Profissional Resolve o Problema
					</Headline>

					<BodyText>
						Quando você contrata um eletricista qualificado pela Savoir Link, o
						profissional vai:
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							✅ Fazer Diagnóstico Completo
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"Medir a corrente elétrica de cada circuito",
								"Verificar a integridade da fiação",
								"Testar se o disjuntor está funcionando corretamente",
								"Identificar pontos de sobrecarga",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							✅ Apresentar Soluções
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"Redistribuir aparelhos em circuitos diferentes",
								"Instalar novos circuitos dedicados para aparelhos potentes",
								"Substituir disjuntores defeituosos ou subdimensionados",
								"Corrigir problemas de fiação ou curto-circuito",
								"Recomendar atualização da instalação, se necessário",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							✅ Realizar o Serviço com Segurança
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"Seguindo normas técnicas (NBR 5410)",
								"Com ferramentas adequadas",
								"Garantindo que o problema não voltará",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-8">
						<Headline size="sm" className="mb-4">
							Prevenção: Como Evitar Que o Disjuntor Fique Caindo
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Distribua a carga: evite ligar vários aparelhos potentes juntos",
								"Use aparelhos adequados à voltagem da sua casa",
								"Faça manutenção preventiva a cada 5-10 anos",
								"Não sobrecarregue tomadas com benjamins e extensões",
								"Atualize sua instalação se a casa tem mais de 20 anos",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Conclusão: Não Deixe Para Depois
					</Headline>

					<BodyText>
						Se o disjuntor da sua casa está caindo constantemente, isso não é
						apenas um incômodo — é um pedido de socorro da sua instalação
						elétrica.
					</BodyText>

					<BodyText>
						Ignorar o problema pode resultar em danos aos aparelhos, contas de
						luz mais altas, risco de choques elétricos e até incêndio. A boa
						notícia? Resolver é mais simples (e mais barato) do que você imagina
						quando conta com um eletricista qualificado.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Precisa de um Eletricista Confiável?
						</Headline>
						<BodyText className="mb-6">
							Na <strong>Savoir Link</strong>, você publica seu pedido,
							descreve o que precisa e seu orçamento, e eletricistas
							qualificados e verificados da sua região entram em contato com
							você — de forma simples e transparente.
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Profissionais verificados",
								"Eletricistas qualificados na sua região",
								"Orçamentos transparentes",
								"Você negocia e contrata direto com o profissional",
								"Publicação rápida do seu pedido",
							]}
						/>
						<div className="mt-6 text-center">
							<Link href="/publicar">
								<PrimaryButton>
									Publicar Meu Pedido
								</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 2: Luz Pisca Quando Ligo Chuveiro */}
			{post.slug === "luz-pisca-quando-ligo-chuveiro" && (
				<>
					<BodyText>
						Você liga o chuveiro e as luzes da casa começam a piscar como uma
						festa de Halloween? Quando desliga, tudo volta ao normal? Esse não é
						apenas um incômodo irritante — é um sinal claro de que algo está
						errado com sua instalação elétrica.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Por Que as Luzes Piscam?
						</Headline>
						<BodyText>
							O chuveiro elétrico pode consumir até 7.500 watts quando ligado —
							mais do que 30 lâmpadas LED ou 5 computadores juntos. Se sua
							instalação não está preparada para essa carga, as luzes piscam por
							três motivos principais.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						3 Causas Principais
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Sobrecarga no Circuito
						</Headline>
						<BodyText>
							Chuveiro e luzes no mesmo circuito, competindo pela mesma
							corrente. O chuveiro "rouba" quase toda a energia, sobrando pouco
							para as lâmpadas.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							2. Fiação Subdimensionada (Fios Muito Finos)
						</Headline>
						<BodyText>
							Fios finos para a potência do chuveiro causam queda de tensão
							quando ele liga — luzes recebem menos energia e piscam.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							3. Conexões Frouxas ou Oxidadas
						</Headline>
						<BodyText>
							Conexões malfeitas, fios soltos ou emendas oxidadas aumentam
							resistência no circuito. Quando o chuveiro exige muita corrente,
							ocorrem perdas de energia.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							🚨 É Perigoso? SIM!
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Risco de incêndio: sobrecarga aquece fios",
								"Danos a aparelhos eletrônicos: oscilações prejudicam TVs, computadores",
								"Choques elétricos: fiação aquecida pode romper isolamento",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Chame eletricista URGENTE se:</strong> Cheiro de queimado,
							tomadas quentes, luzes apagam completamente, disjuntor cai ao
							ligar chuveiro.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Solução Definitiva: Circuito Dedicado
					</Headline>

					<BodyText>
						Um circuito elétrico exclusivo que vai direto do quadro até o
						chuveiro, sem compartilhar com outros aparelhos. Elimina oscilações
						permanentemente.
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<BulletList
							variant="check"
							items={[
								"Chuveiro não compete com luzes",
								"Mais seguro e eficiente",
								"Solução permanente",
								"Custo: R$ 300-800",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Encontre Eletricistas Qualificados
						</Headline>
						<BodyText className="mb-6">
							Na Savoir Link, você publica seu pedido e profissionais
							verificados entram em contato para instalar seu circuito
							dedicado com segurança.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 3: Tomadas Não Funcionam */}
			{post.slug === "tomadas-nao-funcionam-o-que-fazer" && (
				<>
					<BodyText>
						Você vai carregar o celular e... a tomada não funciona. Tenta outra
						tomada no mesmo cômodo e funciona perfeitamente. O que está
						acontecendo? Por que algumas tomadas funcionam e outras não?
					</BodyText>

					<BodyText>
						Esse problema é mais comum do que você imagina e pode ter desde
						causas simples até sinais de problemas sérios na instalação
						elétrica.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						6 Causas Mais Comuns
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"1. Tomada queimada ou desgastada (uso frequente deteriora contatos)",
								"2. Disjuntor específico daquele circuito desarmado",
								"3. Fio solto ou desconectado atrás da tomada",
								"4. Curto-circuito naquele ramal específico",
								"5. Emenda malfeita entre tomadas do mesmo circuito",
								"6. Tomada incompatível com plugues modernos (padrão antigo)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Como Testar em Casa
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"1. Teste outro aparelho na mesma tomada",
								"2. Teste o aparelho em outra tomada",
								"3. Verifique se o disjuntor está ligado",
								"4. Observe se há sinais de queimado na tomada",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							🚨 Quando é Sério?
						</Headline>
						<BodyText className="mb-4">
							Chame eletricista IMEDIATAMENTE se:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"❌ Cheiro de queimado na tomada",
								"❌ Tomada está quente ao toque",
								"❌ Marcas pretas ou derretimento",
								"❌ Faíscas ao plugar aparelhos",
								"❌ Várias tomadas param de funcionar ao mesmo tempo",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Não Tente Consertar Sozinho
					</Headline>

					<BodyText>
						Trabalhar com eletricidade sem conhecimento técnico é perigoso. Um
						eletricista qualificado vai identificar o problema real, trocar
						tomadas defeituosas com segurança e garantir que tudo funcione
						corretamente.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Contrate Eletricistas Verificados
						</Headline>
						<BodyText className="mb-6">
							Publique seu pedido na Savoir Link e eletricistas qualificados
							entram em contato com você.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 4: Chuveiro Não Esquenta */}
			{post.slug === "chuveiro-nao-esquenta-causas-solucoes" && (
				<>
					<BodyText>
						É inverno, você está com frio e ansioso por um banho quente. Abre o
						chuveiro na posição "quente"... mas a água continua gelada. Ou pior:
						estava funcionando ontem e hoje simplesmente parou de esquentar.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						5 Causas Mais Comuns
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Resistência Queimada
						</Headline>
						<BodyText>
							A resistência elétrica é o componente que aquece a água. Com o
							tempo, ela pode queimar por desgaste natural, calcificação da água
							ou picos de energia. Sintoma: chuveiro não esquenta de jeito
							nenhum.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							2. Diafragma Entupido ou Rompido
						</Headline>
						<BodyText>
							O diafragma regula a passagem de água e pressão. Se entope
							(sujeira, calcário) ou rompe, a água não ativa a resistência
							corretamente. Sintoma: água sai em pouca quantidade ou não
							esquenta.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							3. Tensão Elétrica Insuficiente
						</Headline>
						<BodyText>
							Chuveiros precisam de 127V ou 220V conforme modelo. Se sua rede
							tem tensão errada (ex: chuveiro 220V em rede 127V), a água
							esquenta pouco. Sintoma: água morna, nunca quente.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							4. Chave Seletora com Defeito
						</Headline>
						<BodyText>
							A chave "frio/morno/quente" controla a resistência. Se quebrar,
							pode travar na posição "desligado". Sintoma: mesmo mudando
							posição, nada muda.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							5. Fiação Inadequada
						</Headline>
						<BodyText>
							Fios muito finos ou mal conectados não levam corrente suficiente.
							Sintoma: disjuntor cai, chuveiro esquenta mal, fios esquentam.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							⚠️ Perigos de Mexer Sozinho
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"❌ Choque elétrico: chuveiro é 220V ou 127V direto",
								"❌ Queimar nova resistência: instalar voltagem errada",
								"❌ Incêndio: apertar mal os fios, usar bitola errada",
								"❌ Invalidar garantia: muitos fabricantes exigem instalação profissional",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que o Eletricista Faz
					</Headline>

					<BodyText>
						Um eletricista qualificado vai diagnosticar o problema com
						segurança, verificar tensão elétrica, trocar resistência ou
						diafragma com peças corretas, e garantir que a instalação esteja
						adequada.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Contrate Profissionais Qualificados
						</Headline>
						<BodyText className="mb-6">
							Encontre eletricistas experientes em manutenção de chuveiros
							elétricos na sua região.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 5: Levei Choque na Tomada */}
			{post.slug === "levei-choque-tomada-e-perigoso" && (
				<>
					<BodyText>
						Você encostou na geladeira e sentiu um formigamento. Ou plugou o
						carregador do notebook e levou um "choquinho". Pode parecer normal,
						mas NÃO É. Qualquer choque elétrico em casa é sinal de instalação
						com problemas graves.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-6"
					>
						<Headline size="sm" className="mb-4">
							🚨 Choque Elétrico É Sempre Perigoso
						</Headline>
						<BodyText>
							Mesmo "choquinhos leves" indicam fuga de corrente. A gravidade
							depende da intensidade, duração e caminho da corrente pelo corpo.
							Choques podem causar desde queimaduras até parada cardíaca.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						4 Causas Principais de Choque
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Falta de Aterramento
						</Headline>
						<BodyText>
							O fio terra (terceiro pino) desvia corrente acidental para o solo.
							Sem ele, a corrente "vaza" pela carcaça metálica de aparelhos.
							Você encosta, vira o caminho da corrente.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							2. Isolamento Danificado em Fios
						</Headline>
						<BodyText>
							Fios descascados, roídos por ratos, ou ressecados pelo tempo
							expõem partes energizadas. Se encostar em metal ou umidade,
							corrente "escapa".
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							3. Aparelho com Defeito
						</Headline>
						<BodyText>
							Chuveiro, geladeira, máquina de lavar com problema interno podem
							energizar carcaça metálica. Sem aterramento, você recebe o choque.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							4. Ausência de Disjuntor DR
						</Headline>
						<BodyText>
							O DR (Dispositivo Residual) detecta fuga de corrente e desliga
							tudo em milissegundos, salvando vidas. Instalações antigas
							geralmente não têm.
						</BodyText>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-8">
						<Headline size="sm" className="mb-4">
							O Que Fazer SE Levar Choque
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"1. PARE de usar o aparelho/tomada imediatamente",
								"2. Desligue o disjuntor daquele circuito",
								"3. Não toque no aparelho com as mãos molhadas",
								"4. Chame eletricista URGENTE — não espere acontecer de novo",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Solução Profissional
					</Headline>

					<BodyText>
						Um eletricista qualificado vai inspecionar aterramento, instalar ou
						verificar DR, testar isolamento de fios, e identificar aparelhos com
						vazamento de corrente. Investimento em segurança que salva vidas.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Proteja Sua Família: Contrate Eletricista
						</Headline>
						<BodyText className="mb-6">
							Não espere um choque mais forte. Encontre profissionais
							verificados para resolver o problema agora.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 6: Instalação Elétrica Antiga */}
			{post.slug === "instalacao-eletrica-antiga-perigos" && (
				<>
					<BodyText>
						Sua casa tem mais de 20 anos? Fios expostos, tomadas de dois pinos,
						disjuntores antigos de porcelana? Você pode estar morando com uma
						bomba-relógio elétrica prestes a explodir — literalmente.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-6"
					>
						<Headline size="sm" className="mb-4">
							⚠️ Por Que Instalações Antigas São Perigosas
						</Headline>
						<BodyText>
							Padrões elétricos mudaram drasticamente. Casas antigas foram
							projetadas para TVs de tubo e lâmpadas incandescentes — não para
							micro-ondas, ar-condicionado, computadores e chuveiros de 7.500W.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						7 Sinais de Instalação Elétrica Perigosa
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"1. Tomadas de 2 pinos (sem aterramento) — padrão antigo proibido desde 2011",
								"2. Fios aparentes ou emendados com fita isolante — risco de curto e incêndio",
								"3. Disjuntores de porcelana — tecnologia obsoleta, não protegem adequadamente",
								"4. Cheiro de queimado sem origem aparente — sobrecarga crônica",
								"5. Luzes piscam ao ligar aparelhos — fiação subdimensionada",
								"6. Tomadas quentes ou com marcas de queimado — contatos deteriorados",
								"7. Choques em torneiras, chuveiro ou geladeira — ausência de aterramento/DR",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Riscos Reais
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Incêndio elétrico: 40% dos incêndios residenciais no Brasil têm origem elétrica",
								"Choques fatais: sem aterramento e DR, choque pode matar",
								"Perda de aparelhos: oscilações queimam TVs, computadores, geladeiras",
								"Seguro residencial pode não cobrir: instalação irregular invalida apólice",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Deve Ser Atualizado
					</Headline>

					<BodyText>
						Uma reforma elétrica completa envolve: troca de fiação (bitola
						adequada), instalação de quadro moderno com disjuntores
						termomagnéticos e DR, aterramento conforme NBR 5410, tomadas padrão
						novo (três pinos), circuitos dedicados para chuveiro e
						ar-condicionado.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Custo vs Benefício
						</Headline>
						<BodyText>
							Reforma elétrica completa: R$ 3.000 - R$ 10.000 dependendo do
							tamanho. Parece caro? Compare com: custo de reconstruir após
							incêndio, tratamento médico após choque grave, ou perda
							irreparável de vidas.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Atualize Sua Instalação Elétrica
						</Headline>
						<BodyText className="mb-6">
							Encontre eletricistas especializados em reforma e adequação
							elétrica residencial. Peça orçamentos, compare e contrate com
							segurança.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 7: 5 Sinais de Emergência Elétrica */}
			{post.slug === "5-sinais-emergencia-eletrica" && (
				<>
					<BodyText>
						Algumas situações elétricas não podem esperar até amanhã. Reconhecer
						sinais de emergência elétrica pode ser a diferença entre um reparo
						simples e uma tragédia.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-6"
					>
						<Headline size="sm" className="mb-4">
							🚨 5 Sinais de EMERGÊNCIA Elétrica
						</Headline>
						<BodyText className="mb-4">
							Se você identificar QUALQUER um desses sinais, desligue o
							disjuntor geral e chame eletricista IMEDIATAMENTE:
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							1. Cheiro de Queimado sem Origem Clara
						</Headline>
						<BodyText>
							Plástico queimando, odor de fio derretido. Pode ser curto-circuito
							dentro da parede, prestes a iniciar incêndio. NÃO IGNORE.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							2. Faíscas em Tomadas ou Interruptores
						</Headline>
						<BodyText>
							Faíscas ao plugar/desplugar aparelhos indicam arco elétrico —
							conexões soltas, fios expostos. Risco altíssimo de incêndio e
							choque.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							3. Quadro de Luz Quente ou com Barulho
						</Headline>
						<BodyText>
							Disjuntores ou fiação superaquecidos fazem ruídos (zumbido,
							estalo) e ficam quentes ao toque. Sobrecarga extrema — incêndio
							iminente.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							4. Choques Elétricos Frequentes
						</Headline>
						<BodyText>
							Tomar choque ao encostar em aparelhos metálicos (chuveiro,
							torneira, geladeira) é sinal de falha grave no aterramento.
							Próximo choque pode ser fatal.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							5. Disjuntor Cai Repetidamente e Não Reseta
						</Headline>
						<BodyText>
							Se você tenta religar o disjuntor e ele cai imediatamente, há
							curto-circuito ativo. Forçar a religação pode causar incêndio ou
							explodir o disjuntor.
						</BodyText>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-8">
						<Headline size="sm" className="mb-4">
							O Que Fazer em Emergência Elétrica
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"1. Desligue o disjuntor geral IMEDIATAMENTE",
								"2. Não tente consertar sozinho — risco de morte",
								"3. Afaste pessoas e animais da área afetada",
								"4. Chame eletricista de emergência 24h",
								"5. Se houver princípio de incêndio, chame bombeiros (193)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Prevenção: Inspeção Elétrica Anual
					</Headline>

					<BodyText>
						Evite emergências com manutenção preventiva. Um eletricista pode
						inspecionar instalação, identificar pontos de risco, trocar
						componentes desgastados e garantir que tudo está dentro das normas.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Emergência Elétrica? Encontre Ajuda Agora
						</Headline>
						<BodyText className="mb-6">
							Conecte-se com eletricistas qualificados disponíveis para
							atendimento de emergência na sua região.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Meu Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 8: Pia da Cozinha Entupiu */}
		</>
	);
}
