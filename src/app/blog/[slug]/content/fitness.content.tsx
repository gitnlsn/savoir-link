import Link from "next/link";
import { BulletList } from "~/components/ui/bullet-list";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

export function FitnessContent({ post }: { post: BlogPost }) {
	return (
		<>
			{post.slug === "nao-consigo-perder-barriga-na-academia" && (
				<>
					<BodyText>
						Você vai para a academia religiosamente, treina pesado, sua a
						camisa... mas a barriga não sai. Você já perdeu peso em outras áreas
						do corpo, mas aquela gordura abdominal teimosa continua lá, firme e
						forte.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Por Que Isso Acontece?
						</Headline>
						<BodyText>
							A gordura abdominal é a última a ir embora. Seu corpo tende a
							acumular gordura na barriga (especialmente em homens) e essa é a
							reserva que ele mais resiste em queimar. Mas se você está
							treinando há meses e NÃO vê progresso algum, algo está errado.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						5 Erros Que Impedem Você de Perder Barriga
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Treino de Força Insuficiente
						</Headline>
						<BodyText className="mb-4">
							Você só faz cardio? Grande erro. Musculatura ativa queima gordura
							24h por dia. Treino de força (musculação, peso corporal) é
							ESSENCIAL para perder gordura abdominal.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							2. Alimentação Não Está em Déficit Calórico
						</Headline>
						<BodyText className="mb-4">
							Você pode treinar intensamente, mas se comer mais calorias do que
							gasta, NÃO vai emagrecer. Simples assim. Déficit calórico moderado
							(300-500 calorias a menos por dia) é fundamental.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							3. Cortisol Alto (Estresse Crônico)
						</Headline>
						<BodyText className="mb-4">
							Estresse crônico eleva cortisol, hormônio que promove acúmulo de
							gordura abdominal. Dormir mal, trabalhar demais, treinar em
							excesso = cortisol alto.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							4. Falta de Consistência
						</Headline>
						<BodyText className="mb-4">
							Treina bem uma semana, falta três dias na seguinte, come direito
							por 4 dias e depois desanda no fim de semana. Resultados vêm com
							CONSISTÊNCIA.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							5. Expectativas Irrealistas de Tempo
						</Headline>
						<BodyText>
							Perder gordura abdominal leva tempo. Espere pelo menos 8-12
							semanas de treino e dieta consistentes para ver mudanças
							significativas. Não desista na 3ª semana.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Precisa de Orientação Profissional?
						</Headline>
						<BodyText className="mb-6">
							Personal trainers criam planos de treino personalizados focados em
							seus objetivos e corrigem erros que impedem seu progresso.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Personal Trainer Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 23: Treino em Casa Funciona Mesmo */}
			{post.slug === "treino-em-casa-funciona-mesmo" && (
				<>
					<BodyText>
						Você quer treinar, mas não tem dinheiro para academia, ou não tem
						tempo de ir até lá, ou prefere a privacidade de casa. Aí surge a
						dúvida: treino em casa REALMENTE funciona? Dá para ter resultados
						sem equipamentos?
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-6"
					>
						<Headline size="sm" className="mb-4">
							✅ SIM, Funciona! (Com Condições)
						</Headline>
						<BodyText>
							Personal trainers afirmam: treino em casa PODE ser tão eficaz
							quanto academia, desde que você siga os princípios corretos de
							treino (sobrecarga progressiva, consistência, intensidade).
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						3 Pilares do Treino em Casa Eficaz
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Exercícios de Peso Corporal Bem Executados
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Flexões (push-ups): peito, ombros, tríceps",
								"→ Agachamentos: pernas e glúteos",
								"→ Prancha: core (abdômen e lombar)",
								"→ Burpees: cardio e força full body",
								"→ Afundos: pernas e equilíbrio",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Sobrecarga Progressiva
						</Headline>
						<BodyText>
							Não adianta fazer 20 flexões todo dia. Seu corpo se adapta.
							Aumente repetições, diminua descanso, mude variações (flexão
							declinada, archer push-up), adicione tempo sob tensão.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Consistência e Frequência
						</Headline>
						<BodyText>
							Treinar 3-5x por semana é ideal. Não precisa de 2 horas por dia —
							30-45 minutos de treino intenso já geram resultados excelentes.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Quer um Plano Personalizado?
						</Headline>
						<BodyText className="mb-6">
							Personal trainers montam rotinas de treino em casa adaptadas ao
							seu nível, objetivos e equipamentos disponíveis (ou sem nenhum
							equipamento).
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Personal Trainer Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 24: Quanto Tempo Para Ver Resultado na Academia */}
			{post.slug === "quanto-tempo-para-ver-resultado-academia" && (
				<>
					<BodyText>
						Você acabou de começar na academia e está ansioso. Quer ver a
						barriga sumindo, os músculos crescendo, a definição aparecendo. Aí
						surge a pergunta: quanto tempo até EU ver resultado? 1 mês? 3 meses?
						6 meses?
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							A Resposta Honesta
						</Headline>
						<BodyText>
							Depende do seu objetivo, genética, alimentação, consistência e
							tipo de treino. Mas existem prazos realistas baseados em ciência e
							experiência de personal trainers.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Cronograma Realista de Resultados
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							🕐 1 Mês: Adaptação Neuromuscular
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Você fica mais forte (melhora neural, não músculo ainda)",
								"→ Melhora da postura e disposição",
								"→ Redução de inchaço (retenção de líquidos)",
								"→ Mudanças visuais mínimas (só você percebe)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							📅 3 Meses: Primeiras Mudanças Visíveis
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Ganho muscular perceptível (1-2kg de músculo)",
								"→ Perda de gordura visível (3-5kg se em déficit calórico)",
								"→ Outras pessoas começam a notar",
								"→ Roupas ficam diferentes (mais largas ou mais justas)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							🎯 6 Meses: Transformação Significativa
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Mudança corporal clara (fotos antes/depois impressionantes)",
								"→ Ganho de 3-6kg de massa muscular (homens) ou 2-4kg (mulheres)",
								"→ Definição muscular aparente",
								"→ Nível de força muito superior ao início",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Acelere Seus Resultados
						</Headline>
						<BodyText className="mb-6">
							Personal trainers otimizam seu treino e corrigem erros que atrasam
							progresso. Transformação em 6 meses que levaria 12 meses sozinho.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Personal Trainer Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 25: Dor Muscular Depois do Treino */}
			{post.slug === "dor-muscular-depois-treino-normal-ou-lesao" && (
				<>
					<BodyText>
						Você treinou ontem e hoje acordou dolorido. Aquela dor ao subir
						escada, ao levantar o braço, ao sentar. É normal? Ou você se
						machucou? Quando essa dor é sinal de lesão grave?
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-6"
					>
						<Headline size="sm" className="mb-4">
							Dor Muscular Normal: DOMS
						</Headline>
						<BodyText>
							DOMS (Delayed Onset Muscle Soreness) = Dor Muscular de Início
							Tardio. É aquela dor que aparece 24-48h após treino intenso,
							especialmente se você treinou um movimento novo ou aumentou
							carga/volume.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						DOMS vs Lesão: Como Diferenciar
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							✅ DOMS (Normal)
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Dor difusa no músculo todo (não localizada)",
								"→ Dor simétrica (ambos os lados do corpo)",
								"→ Piora com movimento, melhora com alongamento leve",
								"→ Desaparece em 3-5 dias",
								"→ Sem inchaço ou hematoma",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							⚠️ Lesão (Procure Médico)
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Dor aguda e localizada (ponto específico)",
								"→ Dor assimétrica (só um lado do corpo)",
								"→ Inchaço, hematoma, vermelhidão",
								"→ Dor ao repouso (mesmo sem movimento)",
								"→ Perda de amplitude de movimento ou força súbita",
								"→ Estalos ou sensação de 'algo rasgou'",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Aliviar DOMS
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Alongamento leve e mobilidade",
								"→ Massagem ou rolo de espuma (foam roller)",
								"→ Banho quente ou contraste (quente/frio)",
								"→ Treino leve (active recovery)",
								"→ Hidratação e sono adequado",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Treine com Segurança
						</Headline>
						<BodyText className="mb-6">
							Personal trainers ensinam execução correta de exercícios,
							prevenindo lesões e maximizando ganhos. Treino seguro = treino
							sustentável.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Personal Trainer Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 26: Como Ganhar Massa Muscular Sendo Magro */}
			{post.slug === "como-ganhar-massa-muscular-sendo-magro" && (
				<>
					<BodyText>
						Você é magro, come bastante (ou acha que come) e não ganha peso.
						Treina na academia mas os músculos não crescem. As pessoas chamam
						você de 'palito', 'vareta', e você está cansado disso.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Você É Um "Hardgainer"
						</Headline>
						<BodyText>
							Ectomorfo ou hardgainer = pessoa com metabolismo acelerado,
							dificuldade de ganhar peso e massa muscular. Você PODE ganhar
							massa, mas precisa de estratégia diferente.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						4 Pilares Para Ganhar Massa Sendo Magro
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Superávit Calórico Agressivo
						</Headline>
						<BodyText className="mb-4">
							Você PRECISA comer mais calorias do que gasta. Muito mais. Calcule
							sua manutenção calórica e adicione 500-700 calorias por dia. Sim,
							é desconfortável. Mas é necessário.
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Coma a cada 3 horas (5-6 refeições/dia)",
								"→ Priorize alimentos calóricos: arroz, batata, carne, azeite, pasta de amendoim",
								"→ Smoothies hipercalóricos (leite, banana, aveia, whey, pasta de amendoim)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Treino de Força Focado em Progressão
						</Headline>
						<BodyText className="mb-4">
							Esqueça cardio excessivo. Foco TOTAL em musculação com cargas
							progressivas. Exercícios compostos são reis:
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Agachamento, levantamento terra, supino, barra fixa",
								"→ 3-4x por semana (não precisa treinar todo dia)",
								"→ Aumente carga gradualmente (1-2kg a cada 1-2 semanas)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Descanso e Recuperação
						</Headline>
						<BodyText>
							Músculo cresce NO DESCANSO, não no treino. Durma 8-9 horas por
							noite. Respeite dias de descanso. Overtraining = perda de massa.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							4. Consistência Por Meses
						</Headline>
						<BodyText>
							Hardgainers ganham massa mais devagar. Espere 6-12 meses de treino
							e dieta consistentes para ver transformação significativa. Não
							desista no 2º mês.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Precisa de Acompanhamento?
						</Headline>
						<BodyText className="mb-6">
							Personal trainers montam planos de treino e orientação nutricional
							específicos para hardgainers, otimizando cada variável para máximo
							ganho muscular.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Personal Trainer Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 27: Personal Trainer Vale a Pena */}
			{post.slug === "personal-trainer-vale-a-pena-quanto-custa" && (
				<>
					<BodyText>
						Você está pensando em contratar um personal trainer, mas fica na
						dúvida: será que vale a pena? O custo compensa? Não dá para treinar
						sozinho assistindo vídeos no YouTube?
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-6"
					>
						<Headline size="sm" className="mb-4">
							A Pergunta Certa
						</Headline>
						<BodyText>
							Não é "vale a pena?", mas sim "vale a pena PARA MIM, no MEU
							contexto?". Para algumas pessoas, sim. Para outras, talvez não
							(ainda).
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quanto Custa Personal Trainer?
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Academia (presencial): R$ 100-300 por sessão",
								"→ Online (remoto): R$ 200-800 por mês (plano completo)",
								"→ Pacotes mensais (3x/semana): R$ 800-2000",
								"→ Personal iniciante: R$ 50-100/sessão",
								"→ Personal experiente/especializado: R$ 150-400/sessão",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Benefícios de Ter Personal Trainer
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							✅ Execução Correta (Previne Lesões)
						</Headline>
						<BodyText className="mb-6">
							Personal corrige sua postura, alinhamento, amplitude de movimento.
							Uma lesão por treino errado pode custar milhares em fisioterapia.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							✅ Progressão Otimizada (Resultados Mais Rápidos)
						</Headline>
						<BodyText className="mb-6">
							Personal ajusta treino conforme SUA evolução, evita platôs,
							identifica pontos fracos. Você chega em 6 meses onde levaria 12
							meses sozinho.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							✅ Motivação e Accountability
						</Headline>
						<BodyText className="mb-6">
							Você tem compromisso agendado. Personal te cobra, motiva, não
							deixa você desistir. Taxa de desistência com personal é 70% menor.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							✅ Plano Personalizado
						</Headline>
						<BodyText>
							Treino genérico do YouTube não considera SUAS limitações,
							objetivos, histórico de lesões, disponibilidade de tempo. Personal
							monta algo 100% para você.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Vale a Pena Contratar Personal?
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Você é iniciante total (nunca treinou ou faz anos)",
								"→ Você tem objetivos específicos (hipertrofia, preparo físico, reabilitação)",
								"→ Você teve lesões no passado",
								"→ Você treina sozinho há meses sem resultados",
								"→ Você tem dinheiro para investir (custo-benefício compensa)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Encontre Personal Trainers Qualificados
						</Headline>
						<BodyText className="mb-6">
							Compare perfis, avaliações, especialidades e preços de personal
							trainers na sua região. Investimento que transforma seu corpo e
							saúde.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Ver Personal Trainers Disponíveis</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 28: Treino ABC ou Full Body */}
			{post.slug === "treino-abc-ou-full-body-qual-melhor" && (
				<>
					<BodyText>
						Você está montando sua rotina de treino e surge a dúvida clássica:
						treino ABC (divisão por grupos musculares) ou treino full body
						(corpo inteiro toda sessão)? Qual gera mais resultados? Qual é
						melhor para iniciantes?
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Não Existe "Melhor Absoluto"
						</Headline>
						<BodyText>
							Ambos funcionam. A escolha depende de: seu nível, frequência de
							treino, objetivos, capacidade de recuperação e preferência
							pessoal.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Treino ABC (Divisão Por Grupos Musculares)
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Como Funciona
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Dia A: Peito + Tríceps",
								"→ Dia B: Costas + Bíceps",
								"→ Dia C: Pernas + Ombros",
								"→ Cada grupo muscular treina 1-2x por semana",
								"→ Muito volume por grupo em cada sessão",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							✅ Vantagens do Treino ABC
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Permite alto volume e intensidade em cada grupo",
								"→ Ideal para hipertrofia avançada",
								"→ Mais recuperação entre sessões do mesmo músculo",
								"→ Sessões mais longas (60-90min)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							❌ Desvantagens do Treino ABC
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Requer 4-6 dias de treino/semana para ser eficaz",
								"→ Se perder um dia, fica desbalanceado",
								"→ Não ideal para iniciantes (precisam de mais frequência)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Treino Full Body (Corpo Inteiro)
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Como Funciona
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Cada sessão treina corpo inteiro (peito, costas, pernas, ombros, braços)",
								"→ 2-4 exercícios compostos",
								"→ 3-4x por semana",
								"→ Cada grupo muscular treina 3-4x por semana",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							✅ Vantagens do Treino Full Body
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Ideal para iniciantes (mais frequência = aprendizado motor)",
								"→ Flexível (se perder um dia, não desequilibra)",
								"→ Eficiente (30-45min por sessão)",
								"→ Queima calórica maior (mais músculos recrutados)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							❌ Desvantagens do Treino Full Body
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Menos volume por grupo muscular em cada sessão",
								"→ Pode ser cansativo (corpo todo em um treino)",
								"→ Avançados podem precisar de mais volume específico",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Qual Escolher?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Escolha Full Body Se:
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Você é iniciante (treina há menos de 6 meses)",
								"→ Você tem 3-4 dias/semana disponíveis",
								"→ Você quer treinos mais curtos e eficientes",
								"→ Seu objetivo é condicionamento geral ou emagrecimento",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Escolha Treino ABC Se:
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Você é intermediário/avançado (treina há mais de 1 ano)",
								"→ Você tem 5-6 dias/semana disponíveis",
								"→ Seu objetivo é hipertrofia máxima",
								"→ Você gosta de sessões mais longas e focadas",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Monte Seu Plano Ideal
						</Headline>
						<BodyText className="mb-6">
							Personal trainers analisam seu perfil, objetivos e rotina para
							montar o plano de treino ideal (ABC, full body, upper/lower ou
							outros métodos).
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Personal Trainer Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 29: Computador Lento - 7 Causas */}
		</>
	);
}
