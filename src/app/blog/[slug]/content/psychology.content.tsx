import Link from "next/link";
import { BulletList } from "~/components/ui/bullet-list";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

export function PsychologyContent({ post }: { post: BlogPost }) {
	return (
		<>
			{/* SEO Article 1: Preços de Psicólogo */}
			{post.slug === "quanto-custa-psicologo-2025-precos-terapia-brasil" && (
				<>
					<BodyText>
						Você sabe que precisa de terapia, mas fica preocupado com o custo.
						Os preços variam muito entre psicólogos, você não sabe se pode
						pagar, e fica a dúvida: será que vale o investimento? Este guia traz
						preços reais de 2025, o que influencia o valor e como encontrar
						atendimento acessível.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Preços de Sessão com Psicólogo (2025)
						</Headline>
						<BodyText>
							<strong>Terapia presencial:</strong> R$ 100-350 por sessão (50
							minutos)
							<br />
							<strong>Terapia online:</strong> R$ 50-250 por sessão
							<br />
							<strong>Sessões em plataformas:</strong> R$ 79-150 por sessão
							<br />
							<strong>Psicólogo em clínica popular:</strong> R$ 60-120 por
							sessão
							<br />
							<em>Duração típica: 50-60 minutos por sessão</em>
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Preços por Tipo de Atendimento
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Terapia Presencial (Consultório)
						</Headline>
						<BodyText className="mb-4">
							<strong>São Paulo/Rio:</strong> R$ 180-350 por sessão
							<br />
							<strong>Outras capitais:</strong> R$ 120-250 por sessão
							<br />
							<strong>Interior:</strong> R$ 100-180 por sessão
							<br />
							<strong>Vantagem:</strong> Contato presencial, análise de
							linguagem corporal completa
							<br />
							<strong>Desvantagem:</strong> Mais caro, precisa deslocamento
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Terapia Online (Videochamada)
						</Headline>
						<BodyText className="mb-4">
							<strong>Profissionais autônomos:</strong> R$ 80-200 por sessão
							<br />
							<strong>Plataformas (Psitto, Zenklub, etc):</strong> R$ 79-150 por
							sessão
							<br />
							<strong>Vantagem:</strong> Mais acessível, flexível, sem
							deslocamento
							<br />
							<strong>Desvantagem:</strong> Precisa internet estável, menos
							percepção de linguagem corporal
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Terapia em Grupo
						</Headline>
						<BodyText className="mb-4">
							<strong>Preço:</strong> R$ 40-100 por sessão
							<br />
							<strong>Quando indicado:</strong> Fobias específicas, vícios,
							luto, autoestima
							<br />
							<strong>Vantagem:</strong> Mais barato, troca de experiências
							<br />
							<strong>Desvantagem:</strong> Menos personalizado, precisa se
							expor no grupo
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Influencia o Preço?
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Localização: capitais cobram 30-50% a mais que interior",
								"Experiência do psicólogo: especialistas cobram mais",
								"Especialização: psicólogos com pós-graduação têm valor maior",
								"Formato: presencial é mais caro que online",
								"Horário: sessões fora do horário comercial podem custar mais",
								"Duração: sessões de 90min custam cerca de 1,5x o valor padrão",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Economizar na Terapia
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Opções Mais Acessíveis
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Terapia online: 20-40% mais barata que presencial",
								"Clínicas-escola de psicologia: R$ 20-60 por sessão (atendimento por estudantes supervisionados)",
								"CAPS (Centro de Atenção Psicossocial): gratuito pelo SUS",
								"Plataformas de terapia online: preços tabelados mais acessíveis",
								"Psicólogos em início de carreira: valores menores, qualidade não necessariamente inferior",
								"Pacotes de sessões: alguns profissionais dão desconto ao fechar 4-8 sessões",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Terapia Pelo Plano de Saúde
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Cobertura obrigatória:</strong> Planos de saúde são
							obrigados por lei a cobrir até 12 sessões de psicoterapia por ano
							(após esse limite, podem limitar ou negar cobertura).
						</BodyText>
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Você paga apenas a coparticipação
							(R$ 20-50 por sessão) ou consulta sem custo, dependendo do plano.
						</BodyText>
						<BodyText>
							<strong>Atenção:</strong> Rede credenciada pode ser limitada.
							Muitos psicólogos bons não atendem por convênio.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Vale a Pena o Investimento?
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Custo médio mensal:</strong> R$ 400-1.400 (4 sessões por
							mês)
						</BodyText>
						<BodyText className="mb-4">
							<strong>Compare com:</strong> Academia (R$ 100-200/mês), Netflix
							(R$ 55/mês), Jantar fora (R$ 100-150 por vez)
						</BodyText>
						<BodyText>
							<strong>Benefícios:</strong> Saúde mental melhorada, redução de
							ansiedade/depressão, melhor qualidade de vida, menos gastos com
							medicamentos, aumento de produtividade. Investimento em si mesmo
							que gera resultados duradouros.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Precisa de um Psicólogo?
						</Headline>
						<BodyText className="mb-6">
							Publique seu pedido na Savoir Link, descreva o que procura e seu
							orçamento, e psicólogos qualificados entram em contato com você.
							Terapia online e presencial.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 2: Sinais de Que Precisa de Psicólogo */}
			{post.slug === "sinais-preciso-psicologo-urgente-quando-buscar" && (
				<>
					<BodyText>
						Você não está bem, mas fica na dúvida: será que é grave o suficiente
						para procurar psicólogo? Todos têm problemas, talvez você esteja
						exagerando. Esse pensamento atrasa a busca por ajuda e piora o
						sofrimento. Conheça 7 sinais claros de que você precisa de ajuda
						profissional agora.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Dado Importante: Brasil Lidera em Ansiedade
						</Headline>
						<BodyText>
							O Brasil tem a maior taxa de ansiedade do mundo (9,3% da
							população) e é o quinto país em depressão, segundo a OMS. Se você
							sente algum dos sinais abaixo, você NÃO está sozinho e buscar
							ajuda é o passo mais inteligente.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						7 Sinais de Que Você Precisa de Psicólogo Urgente
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Sintomas Físicos Sem Causa Médica
						</Headline>
						<BodyText className="mb-4">
							<strong>Sinais:</strong> Dores de cabeça frequentes, dor no peito,
							problemas gastrointestinais (gastrite, diarreia), insônia crônica,
							cansaço extremo, tensão muscular constante.
						</BodyText>
						<BodyText>
							<strong>Por que é sério:</strong> Seu corpo está somatizando
							problemas emocionais. Você já foi ao médico, fez exames, tudo deu
							normal, mas os sintomas persistem. Isso indica que a origem é
							psicológica.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Mudanças Drásticas no Sono ou Apetite
						</Headline>
						<BodyText className="mb-4">
							<strong>Sinais:</strong> Insônia (não consegue dormir ou acorda
							várias vezes), hipersonia (dorme demais, 12-14h por dia), perda
							total de apetite ou comer compulsivamente.
						</BodyText>
						<BodyText>
							<strong>Por que é sério:</strong> Alterações no sono e apetite são
							sintomas clássicos de depressão e ansiedade. Se duram mais de 2
							semanas, procure ajuda.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Tristeza Persistente Sem Motivo Aparente
						</Headline>
						<BodyText className="mb-4">
							<strong>Sinais:</strong> Você chora sem razão específica, sente um
							vazio constante, perdeu interesse em coisas que gostava, acha que
							nada vale a pena.
						</BodyText>
						<BodyText>
							<strong>Por que é sério:</strong> Tristeza passageira é normal.
							Tristeza que dura semanas/meses e afeta sua rotina é depressão.
							Não é frescura, é doença e tem tratamento.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							4. Ansiedade Que Paralisa
						</Headline>
						<BodyText className="mb-4">
							<strong>Sinais:</strong> Preocupação excessiva com futuro, medo
							constante de que algo ruim vai acontecer, ataques de pânico
							(coração acelerado, falta de ar, sensação de morte), evita
							situações sociais por medo.
						</BodyText>
						<BodyText>
							<strong>Por que é sério:</strong> Ansiedade saudável te motiva.
							Ansiedade patológica te paralisa e impede de viver. Se você
							cancela compromissos, evita sair de casa ou tem crises, precisa de
							ajuda.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							5. Desempenho no Trabalho/Estudos Caiu Muito
						</Headline>
						<BodyText className="mb-4">
							<strong>Sinais:</strong> Não consegue se concentrar, esquece
							compromissos, produtividade caiu drasticamente, recebe feedbacks
							negativos, pensa em largar tudo.
						</BodyText>
						<BodyText>
							<strong>Por que é sério:</strong> Quando a saúde mental afeta sua
							carreira/estudos, o prejuízo se multiplica. Além do sofrimento
							emocional, você pode perder emprego, reprovar em matérias,
							comprometer seu futuro.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							6. Relacionamentos Estão Todos Ruins
						</Headline>
						<BodyText className="mb-4">
							<strong>Sinais:</strong> Brigas frequentes com família/parceiro,
							isolamento social (não quer ver ninguém), irritabilidade extrema
							com qualquer coisa, ciúme ou controle excessivo.
						</BodyText>
						<BodyText>
							<strong>Por que é sério:</strong> Problemas pontuais são normais.
							Quando TODOS os relacionamentos estão ruins, o problema pode estar
							em como você está lidando emocionalmente com as coisas. Terapia
							ajuda a entender padrões destrutivos.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							7. Uso de Álcool/Drogas Para Lidar com Emoções
						</Headline>
						<BodyText className="mb-4">
							<strong>Sinais:</strong> Bebe para esquecer problemas, usa drogas
							(lícitas ou ilícitas) para se sentir melhor, precisa de
							substâncias para dormir/relaxar, frequência de uso aumentou.
						</BodyText>
						<BodyText>
							<strong>Por que é sério:</strong> Automedicação emocional é sinal
							de que você não tem ferramentas saudáveis para lidar com
							sentimentos. Isso gera dependência química e piora os problemas.
							Busque ajuda antes que vire vício.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Outros Sinais Importantes
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Pensamentos suicidas ou de morte (URGENTE - busque ajuda imediatamente)",
								"Trauma recente (acidente, assalto, violência, perda de ente querido)",
								"Comportamentos compulsivos (TOC, comer compulsivo, compras descontroladas)",
								"Crises de raiva desproporcionais à situação",
								"Sensação constante de que não consegue lidar com a vida",
								"Amigos/família dizem que você mudou ou estão preocupados",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						"Mas Todo Mundo Tem Problemas..."
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Verdade:</strong> Sim, todos têm problemas. A diferença é
							a INTENSIDADE e o IMPACTO na sua vida.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Pergunte-se:</strong>
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Esses sintomas duram mais de 2-3 semanas?",
								"Eles impedem você de fazer suas atividades normais?",
								"Você sente que não consegue mais controlar sozinho?",
								"Outras pessoas notaram mudanças em você?",
							]}
						/>
						<BodyText className="mt-4">
							Se respondeu SIM para 2 ou mais: você precisa de ajuda
							profissional.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Não Espere Chegar no Fundo do Poço
						</Headline>
						<BodyText className="mb-6">
							Quanto antes você buscar ajuda, mais rápida é a recuperação.
							Publique seu pedido na Savoir Link, descreva o que procura, e
							psicólogos qualificados entram em contato com você. Sua saúde
							mental é prioridade.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 3: Terapia Online vs Presencial */}
			{post.slug === "terapia-online-presencial-qual-escolher-2025" && (
				<>
					<BodyText>
						Você decidiu fazer terapia, mas fica na dúvida: online ou
						presencial? Será que terapia online funciona mesmo? É tão eficaz
						quanto presencial? Este guia compara as duas modalidades em todos os
						aspectos para você tomar a melhor decisão.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Resposta Rápida
						</Headline>
						<BodyText>
							<strong>Eficácia:</strong> Estudos mostram que terapia online tem
							a mesma eficácia que presencial para maioria dos casos (ansiedade,
							depressão, estresse).
							<br />
							<strong>Regulamentação:</strong> Ambas são regulamentadas pelo
							Conselho Federal de Psicologia e têm as mesmas obrigações de
							sigilo e ética.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Comparação Detalhada
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Preço
						</Headline>
						<BodyText className="mb-4">
							<strong>Presencial:</strong> R$ 120-350 por sessão
							<br />
							<strong>Online:</strong> R$ 50-250 por sessão (20-40% mais barato)
						</BodyText>
						<BodyText>
							<strong>Vencedor:</strong> Online - Psicólogos economizam em
							aluguel de consultório e repassam a economia. Plataformas também
							oferecem preços mais padronizados e acessíveis.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Flexibilidade
						</Headline>
						<BodyText className="mb-4">
							<strong>Presencial:</strong> Precisa se deslocar, horários mais
							limitados, depende de trânsito/clima.
							<br />
							<strong>Online:</strong> Atende de qualquer lugar, horários mais
							flexíveis (alguns psicólogos atendem até fim de semana/noite),
							perfeito para quem viaja a trabalho.
						</BodyText>
						<BodyText>
							<strong>Vencedor:</strong> Online - Ideal para rotinas corridas,
							pessoas com mobilidade reduzida, quem mora longe de psicólogos
							qualificados.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Conexão e Rapport
						</Headline>
						<BodyText className="mb-4">
							<strong>Presencial:</strong> Contato visual completo, linguagem
							corporal 100% visível, sensação de acolhimento físico.
							<br />
							<strong>Online:</strong> Vê rosto e parte do corpo, pode perder
							alguns sinais corporais, mas estudos mostram que rapport se
							estabelece igualmente bem após 2-3 sessões.
						</BodyText>
						<BodyText>
							<strong>Empate:</strong> Conexão depende mais do psicólogo e da
							sua abertura do que do formato. Muitos pacientes relatam conexão
							profunda mesmo online.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Privacidade
						</Headline>
						<BodyText className="mb-4">
							<strong>Presencial:</strong> Ambiente controlado e privado do
							consultório.
							<br />
							<strong>Online:</strong> Você controla seu ambiente, mas precisa
							garantir espaço privado (quarto/sala sem interrupções).
						</BodyText>
						<BodyText>
							<strong>Atenção:</strong> Online pode ser difícil se você mora com
							muitas pessoas e não tem privacidade em casa. Presencial garante
							ambiente totalmente isolado.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Requisitos Técnicos
						</Headline>
						<BodyText className="mb-4">
							<strong>Presencial:</strong> Nenhum (só chegar no consultório).
							<br />
							<strong>Online:</strong> Internet estável (mínimo 5 Mbps), celular
							ou computador com câmera/áudio, ambiente silencioso.
						</BodyText>
						<BodyText>
							<strong>Vencedor:</strong> Presencial - Sem preocupações técnicas.
							Online pode ter interrupções por queda de conexão (embora seja
							raro).
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Escolher Presencial
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Você prefere contato físico e acha que conecta melhor pessoalmente",
								"Tem casos mais graves (transtornos severos, ideação suicida ativa)",
								"Não tem privacidade em casa para fazer terapia online",
								"Não tem internet confiável ou equipamento adequado",
								"Primeira vez em terapia e quer ambiente mais acolhedor fisicamente",
								"Trabalha com questões corporais (traumas, somatização intensa)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Escolher Online
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Quer economia de 20-40% no preço",
								"Tem rotina muito corrida (economiza tempo de deslocamento)",
								"Mora longe de psicólogos especializados no seu problema",
								"Viaja frequentemente a trabalho (mantém continuidade)",
								"Tem mobilidade reduzida ou dificuldade de transporte",
								"Prefere conforto de casa (algumas pessoas se abrem mais assim)",
								"Ansiedade social dificulta sair de casa",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Dá Para Misturar?
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Sim!</strong> Muitos psicólogos oferecem modalidade
							híbrida:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Primeiras sessões presenciais (para estabelecer vínculo)",
								"Sessões seguintes online (por conveniência)",
								"Retorno presencial em momentos de crise ou quando necessário",
							]}
						/>
						<BodyText className="mt-4">
							Converse com o psicólogo sobre essa possibilidade. Flexibilidade é
							cada vez mais comum.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Dicas Para Terapia Online Funcionar Bem
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Use fones de ouvido (melhora áudio e privacidade)",
								"Garanta ambiente silencioso (avise família para não interromper)",
								"Teste conexão antes da primeira sessão",
								"Escolha momento do dia em que internet está melhor",
								"Tenha plano B (celular com 4G caso wi-fi caia)",
								"Fique em posição confortável mas alerta (não deitado na cama)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Psicólogos Online e Presenciais
						</Headline>
						<BodyText className="mb-6">
							Publique seu pedido na Savoir Link, informe se prefere atendimento
							online, presencial ou ambos e seu orçamento, e psicólogos
							qualificados entram em contato com você.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 4: Como Escolher Psicólogo */}
			{post.slug === "como-escolher-psicologo-certo-guia-completo" && (
				<>
					<BodyText>
						Escolher psicólogo parece difícil: como saber se ele é bom? Qual
						abordagem terapêutica é melhor? Você pode perder tempo e dinheiro
						com profissional inadequado. Este guia ensina a verificar
						qualificações, identificar abordagens e fazer perguntas essenciais.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Checklist Rápido (5 Essenciais)
						</Headline>
						<BulletList
							variant="check"
							items={[
								"✅ Verificar registro no CRP (Conselho Regional de Psicologia)",
								"✅ Confirmar se tem especialização na sua questão específica",
								"✅ Fazer sessão experimental (maioria oferece) antes de fechar pacote",
								"✅ Perguntar sobre abordagem terapêutica e como ela funciona",
								"✅ Avaliar se você se sente confortável e acolhido na primeira conversa",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						1. Verificar Qualificação Legal
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Registro no CRP (OBRIGATÓRIO)
						</Headline>
						<BodyText className="mb-4">
							<strong>O que é:</strong> Todo psicólogo no Brasil precisa ter
							registro no Conselho Regional de Psicologia (CRP) do seu estado.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Como verificar:</strong> Peça o número do CRP e consulte
							no site oficial (e-Psi): https://e-psi.cfp.org.br/
						</BodyText>
						<BodyText>
							<strong>Red flag:</strong> Psicólogo que se recusa a informar CRP
							ou diz que está "em processo" NÃO pode atender legalmente. Fuja.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Formação e Especializações
						</Headline>
						<BodyText className="mb-4">
							<strong>Formação básica:</strong> Graduação em Psicologia (5 anos)
							<br />
							<strong>Especializações (diferenciais):</strong> Pós-graduação,
							mestrado, cursos específicos na área que você precisa
						</BodyText>
						<BodyText>
							<strong>Exemplo:</strong> Se você tem TOC, procure psicólogo com
							especialização em Terapia Cognitivo-Comportamental (TCC), que é a
							abordagem mais eficaz para TOC.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						2. Entender Abordagens Terapêuticas
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Principais Abordagens no Brasil
						</Headline>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Terapia Cognitivo-Comportamental (TCC)
						</Headline>
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Foca em identificar e modificar
							pensamentos e comportamentos disfuncionais. Mais prática e
							diretiva.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Melhor para:</strong> Ansiedade, depressão, TOC, fobias,
							vícios, problemas comportamentais específicos.
						</BodyText>
						<BodyText>
							<strong>Duração típica:</strong> 12-20 sessões (mais breve que
							outras abordagens).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Psicanálise
						</Headline>
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Explora inconsciente, infância,
							sonhos. Psicólogo fala menos, você fala mais e explora sozinho.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Melhor para:</strong> Autoconhecimento profundo, traumas
							da infância, questões existenciais.
						</BodyText>
						<BodyText>
							<strong>Duração típica:</strong> Longo prazo (anos), processo mais
							profundo.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Terapia Humanista (Centrada na Pessoa)
						</Headline>
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Psicólogo oferece acolhimento e
							escuta empática. Você é protagonista do processo.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Melhor para:</strong> Baixa autoestima, questões
							relacionais, busca de propósito.
						</BodyText>
						<BodyText>
							<strong>Duração típica:</strong> Médio prazo (6 meses - 2 anos).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Terapia Sistêmica (Familiar/Casal)
						</Headline>
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> Vê o indivíduo no contexto de suas
							relações (família, casal). Trabalha padrões relacionais.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Melhor para:</strong> Problemas conjugais, conflitos
							familiares, questões que envolvem dinâmicas relacionais.
						</BodyText>
						<BodyText>
							<strong>Duração típica:</strong> Médio prazo, pode incluir sessões
							com família/casal.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						3. Avaliar Experiência Específica
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Perguntas Para Fazer
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Você tem experiência com [seu problema específico]?",
								"Quantos casos similares ao meu você já atendeu?",
								"Qual abordagem você usa e por que funciona para esse caso?",
								"Quanto tempo geralmente leva para ver melhoras?",
								"Como são as sessões? (estruturadas, livres, com tarefas de casa?)",
								"Você trabalha em conjunto com psiquiatra se eu precisar medicação?",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						4. Fazer Sessão Experimental
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>O que é:</strong> Primeira sessão para conhecer o
							psicólogo, explicar seu caso e ver se há conexão.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Avalie:</strong>
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Você se sentiu acolhido e ouvido?",
								"O psicólogo explicou claramente como pode te ajudar?",
								"Você se sentiu confortável para se abrir?",
								"O ambiente (físico ou online) te deixou à vontade?",
								"O psicólogo foi pontual e profissional?",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Importante:</strong> Se não sentir conexão, está OK
							procurar outro. Vínculo terapêutico é essencial para o sucesso.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						5. Red Flags (Sinais de Alerta)
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="dash"
							items={[
								"Não fornece CRP ou não está registrado",
								"Promete cura rápida ou milagrosa",
								"Julga você ou suas escolhas (terapia é sem julgamento)",
								"Impõe valores religiosos ou políticos",
								"Quebra sigilo contando histórias de outros pacientes",
								"Propõe relacionamento pessoal/romântico (crime ético grave)",
								"Fica no celular durante sessão",
								"Cancela ou atrasa sessões frequentemente",
								"Pressiona para fechar pacotes longos logo na primeira sessão",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Psicólogo Bom vs Psicólogo Ruim
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Psicólogo BOM:</strong>
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Escuta mais do que fala",
								"Faz perguntas que te fazem refletir",
								"Explica o processo terapêutico claramente",
								"Respeita seu ritmo e limites",
								"Dá ferramentas práticas para lidar com problemas",
								"Admite quando algo não é sua área e indica outro profissional",
							]}
						/>
						<BodyText className="mt-4 mb-4">
							<strong>Psicólogo RUIM:</strong>
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Fala mais sobre si mesmo do que te ouve",
								"Dá conselhos simplistas tipo 'pensa positivo'",
								"Fica defensivo se você questiona algo",
								"Faz você se sentir pior após sessões consistentemente",
								"Não respeita horários ou combina preço e muda depois",
								"Usa jargões complicados sem explicar",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Encontre o Psicólogo Ideal Para Você
						</Headline>
						<BodyText className="mb-6">
							Publique seu pedido na Savoir Link, descreva o que procura e seu
							orçamento, e psicólogos qualificados entram em contato com você.
							Confira o CRP e a formação de cada profissional ao conversar.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 5: Primeira Sessão */}
			{post.slug === "primeira-sessao-psicologo-o-que-esperar" && (
				<>
					<BodyText>
						A primeira sessão com psicólogo pode gerar ansiedade. Você não sabe
						o que vai acontecer, se vai ter que revelar seus segredos mais
						profundos logo de cara, ou se o psicólogo vai te julgar. Este guia
						explica exatamente o que esperar da primeira sessão para você ir
						mais tranquilo e aproveitar melhor.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							O Que Acontece na Primeira Sessão
						</Headline>
						<BodyText>
							<strong>Duração:</strong> 50-60 minutos (sessão completa)
							<br />
							<strong>Objetivo:</strong> Conhecer você e entender o que te traz
							à terapia
							<br />
							<strong>Formato:</strong> Conversa guiada por perguntas do
							psicólogo
							<br />
							<strong>Nível de profundidade:</strong> Você controla quanto quer
							compartilhar
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Estrutura da Primeira Sessão (Passo a Passo)
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Apresentações e Acolhimento (5-10 min)
						</Headline>
						<BodyText className="mb-4">
							O psicólogo se apresenta, explica como trabalha e a abordagem
							terapêutica que usa. É o momento de você se sentir confortável no
							espaço.
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Psicólogo explica sigilo profissional e limites da confidencialidade",
								"Apresenta formato das sessões (frequência, duração, preço)",
								"Você pode fazer perguntas sobre o processo",
								"Ambiente deve ser acolhedor e não-julgador",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Entendendo Sua Demanda (20-30 min)
						</Headline>
						<BodyText className="mb-4">
							O psicólogo vai fazer perguntas para entender o que te trouxe à
							terapia. Você não precisa contar tudo de uma vez.
						</BodyText>
						<Label className="mb-2">Perguntas Comuns:</Label>
						<BulletList
							variant="arrow"
							items={[
								'"O que te trouxe aqui hoje?"',
								'"Como você tem se sentido ultimamente?"',
								'"Há quanto tempo isso está acontecendo?"',
								'"Como isso tem afetado sua vida?"',
								'"Você já fez terapia antes?"',
								'"Quais são suas expectativas para o tratamento?"',
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Histórico e Contexto (15-20 min)
						</Headline>
						<BodyText className="mb-4">
							O psicólogo pode perguntar sobre sua história de vida para
							entender melhor o contexto do que você está vivendo.
						</BodyText>
						<Label className="mb-2">Áreas Exploradas:</Label>
						<BulletList
							variant="arrow"
							items={[
								"Histórico familiar e relacionamentos",
								"Situação profissional e estudos",
								"Saúde física e uso de medicamentos",
								"Experiências traumáticas ou marcantes",
								"Rede de apoio (amigos, família)",
								"Hábitos de vida (sono, alimentação, atividade física)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							4. Direcionamento e Próximos Passos (5-10 min)
						</Headline>
						<BodyText className="mb-4">
							No final, o psicólogo dá um retorno sobre como pode ajudar e
							sugere o plano terapêutico.
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Psicólogo explica como pode trabalhar sua demanda",
								"Sugere frequência de sessões (semanal, quinzenal)",
								"Define expectativas realistas sobre o processo",
								"Você decide se quer continuar com esse profissional",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Se Preparar Para a Primeira Sessão
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Antes da Sessão
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Anote os principais problemas que quer trabalhar",
								"Pense em sintomas que tem notado (ansiedade, insônia, desmotivação)",
								"Liste perguntas que quer fazer ao psicólogo",
								"Chegue 5-10 minutos antes para se ambientar",
								"Use roupas confortáveis",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Durante a Sessão
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"Seja honesto, mas vá no seu ritmo",
								"Não precisa contar tudo de uma vez",
								"Faça perguntas sempre que tiver dúvidas",
								"Diga se algo te deixa desconfortável",
								"É normal chorar ou se emocionar",
								"Não existe resposta certa ou errada",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que NÃO Acontece na Primeira Sessão
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="dash"
							items={[
								"Psicólogo NÃO vai te dar conselhos ou soluções prontas",
								"NÃO vai te julgar ou criticar suas escolhas",
								"NÃO vai forçar você a falar sobre traumas logo de cara",
								"NÃO vai diagnosticar você na primeira consulta",
								"NÃO vai revelar suas informações a ninguém (sigilo profissional)",
								"NÃO vai ter uma sessão de hipnose ou 'leitura de mente'",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Você Deve Marcar Segunda Sessão?
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<Headline size="sm" className="mb-4">
							Marque Segunda Sessão Se:
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Se sentiu acolhido e respeitado",
								"O psicólogo demonstrou compreensão da sua situação",
								"Conseguiu falar confortavelmente",
								"O estilo de comunicação do psicólogo te agradou",
								"Sentiu que pode confiar nesse profissional",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Considere Outro Psicólogo Se:
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"Não se sentiu confortável ou acolhido",
								"O psicólogo foi invasivo ou desrespeitoso",
								"Sentiu que não foi escutado",
								"O profissional não explicou bem como trabalha",
								"Teve a sensação de ser julgado",
								"Houve quebra de sigilo ou comportamento antiético",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Perguntas Importantes Para Fazer na Primeira Sessão
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								'"Qual sua abordagem terapêutica?"',
								'"Você tem experiência com [seu problema específico]?"',
								'"Quanto tempo costuma durar o tratamento?"',
								'"Com que frequência devemos nos encontrar?"',
								'"Como saberei que estou progredindo?"',
								'"E se eu sentir que a terapia não está funcionando?"',
								'"Posso entrar em contato entre as sessões em caso de crise?"',
								'"Qual sua política de cancelamento?"',
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Comece Sua Terapia com Segurança
						</Headline>
						<BodyText className="mb-6">
							Publique seu pedido na Savoir Link, descreva o que procura e seu
							orçamento, e psicólogos qualificados com CRP ativo entram em
							contato com você. Confira especializações e abordagens ao
							conversar.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 6: Duração da Terapia */}
			{post.slug === "quanto-tempo-dura-terapia-quando-vou-melhorar" && (
				<>
					<BodyText>
						"Terapia dura para sempre?" Essa é uma das perguntas mais comuns de
						quem está considerando começar. Você quer melhorar, mas não quer se
						comprometer com algo eterno. Este guia explica quanto tempo a
						terapia costuma durar, quando você verá resultados e como saber se
						está na hora da alta.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Tempo Médio de Terapia por Objetivo
						</Headline>
						<BodyText>
							<strong>
								Questão pontual (ansiedade leve, decisão específica):
							</strong>{" "}
							3-6 meses (12-24 sessões)
							<br />
							<strong>
								Transtornos moderados (depressão, ansiedade, fobias):
							</strong>{" "}
							6-12 meses (24-48 sessões)
							<br />
							<strong>
								Questões complexas (trauma, transtornos de personalidade):
							</strong>{" "}
							1-3 anos ou mais
							<br />
							<strong>Autoconhecimento e desenvolvimento pessoal:</strong>{" "}
							Indefinido (processo contínuo)
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Você Começa a Ver Resultados?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Primeiras 4 Sessões (1 Mês)
						</Headline>
						<BodyText className="mb-4">
							<strong>O que esperar:</strong> Alívio emocional inicial, sensação
							de ser compreendido, início do vínculo terapêutico.
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Você se sente acolhido e menos sozinho com seus problemas",
								"Começa a entender melhor o que está sentindo",
								"Pode ter insights sobre padrões de comportamento",
								"Ainda não verá mudanças práticas significativas",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2-3 Meses (8-12 Sessões)
						</Headline>
						<BodyText className="mb-4">
							<strong>O que esperar:</strong> Primeiras mudanças
							comportamentais, ferramentas práticas começam a funcionar.
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Você consegue identificar gatilhos emocionais",
								"Começa a aplicar estratégias aprendidas na terapia",
								"Redução de sintomas mais intensos (crises de ansiedade, por exemplo)",
								"Melhora na forma de se relacionar com pessoas próximas",
								"Pode sentir que está progredindo de verdade",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							6-12 Meses (24-48 Sessões)
						</Headline>
						<BodyText className="mb-4">
							<strong>O que esperar:</strong> Mudanças consolidadas,
							autossuficiência crescente, sintomas controlados.
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Você lida melhor com situações que antes te paralisavam",
								"Menos recaídas ou crises",
								"Maior autoconhecimento e autocontrole",
								"Relações interpessoais mais saudáveis",
								"Começa a considerar alta ou espaçamento de sessões",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Influencia a Duração da Terapia?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Fatores Que ACELERAM o Processo
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Fazer terapia com frequência semanal (melhor que quinzenal)",
								"Aplicar as ferramentas aprendidas no dia a dia",
								"Ser honesto e aberto nas sessões",
								"Ter rede de apoio (amigos, família)",
								"Cuidar da saúde física (sono, exercícios, alimentação)",
								"Questões pontuais e recentes (não crônicas)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Fatores Que PROLONGAM o Processo
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"Sessões espaçadas (mensais) - dificulta continuidade",
								"Resistência ou pouca abertura emocional",
								"Problemas complexos ou múltiplos transtornos",
								"Traumas profundos ou de longa data",
								"Falta de apoio social ou ambiente tóxico",
								"Interrupções frequentes do tratamento",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Saber Se Está na Hora da Alta?
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<Headline size="sm" className="mb-4">
							Sinais de Que Você Está Pronto Para Alta
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Consegue lidar com situações difíceis sem crise",
								"Sintomas que te trouxeram à terapia estão controlados",
								"Você tem ferramentas práticas e sabe usá-las",
								"Relações interpessoais melhoraram significativamente",
								"Sente que não precisa mais do psicólogo toda semana",
								"Consegue tomar decisões com mais autonomia",
								"Autoconhecimento suficiente para seguir sozinho",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Sinais de Que Ainda Não É o Momento
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"Sintomas voltam com força quando pensa em parar",
								"Ainda depende muito do psicólogo para tomar decisões",
								"Crises emocionais frequentes",
								"Questões profundas ainda não foram trabalhadas",
								"Medo excessivo de lidar com as coisas sozinho",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Tipos de Alta Terapêutica
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Alta Completa
						</Headline>
						<BodyText className="mb-4">
							Você termina o processo terapêutico e não precisa mais de
							acompanhamento regular. Pode voltar pontualmente se necessário.
						</BodyText>
						<Label className="mb-2">Quando acontece:</Label>
						<BulletList
							variant="arrow"
							items={[
								"Objetivos iniciais foram alcançados",
								"Você está autossuficiente emocionalmente",
								"Sintomas estão controlados há meses",
								"Relações e vida cotidiana funcionam bem",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Espaçamento de Sessões
						</Headline>
						<BodyText className="mb-4">
							Em vez de parar de vez, você vai espaçando as consultas
							gradualmente (quinzenal → mensal → bimestral) até não precisar
							mais.
						</BodyText>
						<Label className="mb-2">Quando acontece:</Label>
						<BulletList
							variant="arrow"
							items={[
								"Você está bem, mas ainda quer acompanhamento",
								"Manutenção do progresso alcançado",
								"Prevenção de recaídas",
								"Segurança de ter suporte se precisar",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Alta com Retornos Pontuais
						</Headline>
						<BodyText className="mb-4">
							Você recebe alta, mas volta para sessões específicas quando surgem
							novos desafios ou crises pontuais.
						</BodyText>
						<Label className="mb-2">Quando acontece:</Label>
						<BulletList
							variant="arrow"
							items={[
								"Situações novas e desafiadoras (mudança de emprego, término de relacionamento)",
								"Momento de crise pontual",
								"Necessidade de recalibrar estratégias",
								"Check-up emocional preventivo",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Mitos Sobre Duração da Terapia
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>❌ MITO:</strong> "Terapia dura a vida inteira"
						</BodyText>
						<BodyText className="mb-4">
							<strong>✅ VERDADE:</strong> A maioria das terapias tem início,
							meio e fim. Terapias focadas em problemas específicos duram meses,
							não anos. Apenas casos complexos ou pessoas que buscam
							desenvolvimento contínuo fazem terapia por anos.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<BodyText className="mb-4">
							<strong>❌ MITO:</strong> "Se eu melhorar rápido, o psicólogo vai
							'enrolar' para eu continuar pagando"
						</BodyText>
						<BodyText className="mb-4">
							<strong>✅ VERDADE:</strong> Psicólogos éticos têm o objetivo de
							te dar alta quando você estiver bem. Prolongar tratamento
							desnecessariamente é antiético e pode resultar em perda de
							registro profissional.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<BodyText className="mb-4">
							<strong>❌ MITO:</strong> "Se eu parar, vou regredir tudo que
							conquistei"
						</BodyText>
						<BodyText className="mb-4">
							<strong>✅ VERDADE:</strong> Se você fez o trabalho terapêutico
							direito, as mudanças ficam. Você aprendeu ferramentas e
							desenvolveu habilidades emocionais que permanecem. Pode haver
							desafios novos no futuro, mas você não "perde" o progresso.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Comece Sua Jornada Terapêutica Hoje
						</Headline>
						<BodyText className="mb-6">
							Publique seu pedido na Savoir Link, descreva o que procura e seu
							orçamento, e psicólogos qualificados que trabalham com metas
							claras e prazos realistas entram em contato com você.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 7: Mitos Sobre Terapia */}
			{post.slug === "mitos-sobre-terapia-psicologia-verdades" && (
				<>
					<BodyText>
						Você sabe que deveria procurar terapia, mas algo te segura. Talvez
						você ache que "terapia é só para louco", ou que "psicólogo vai te
						julgar". Esses mitos comuns impedem milhões de pessoas de buscar
						ajuda que poderia transformar suas vidas. Este artigo desmistifica
						os 5 maiores preconceitos sobre terapia e mostra as verdades por
						trás deles.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						Os 5 Maiores Mitos Sobre Terapia
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							❌ MITO 1: "Terapia é Só Para Quem Tem Problema Mental Grave"
						</Headline>
						<BodyText className="mb-4">
							<strong>A VERDADE:</strong> Terapia é para qualquer pessoa que
							queira melhorar sua qualidade de vida emocional. Você não precisa
							estar "quebrado" para buscar ajuda.
						</BodyText>
						<Label className="mb-2">Pessoas fazem terapia para:</Label>
						<BulletList
							variant="check"
							items={[
								"Melhorar relacionamentos",
								"Lidar com estresse do trabalho",
								"Tomar decisões importantes (carreira, relacionamento)",
								"Desenvolver autoconhecimento",
								"Aumentar autoestima e confiança",
								"Processar perdas e mudanças de vida",
								"Prevenir problemas antes que se agravem",
							]}
						/>
						<BodyText className="mt-4">
							Pensar que terapia é só para "doente mental" é como achar que
							academia é só para quem está obeso. É uma ferramenta de
							desenvolvimento, não apenas de correção.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							❌ MITO 2: "Psicólogo Vai Me Julgar e Criticar Minhas Escolhas"
						</Headline>
						<BodyText className="mb-4">
							<strong>A VERDADE:</strong> O papel do psicólogo é te ajudar a
							entender suas escolhas, não julgá-las. Julgamento é
							contraproducente para o processo terapêutico.
						</BodyText>
						<Label className="mb-2">O que o psicólogo REALMENTE faz:</Label>
						<BulletList
							variant="check"
							items={[
								"Escuta sem julgamento",
								"Te ajuda a refletir sobre consequências das suas escolhas",
								"Questiona padrões que te prejudicam (não você como pessoa)",
								"Te dá ferramentas para tomar decisões mais conscientes",
								"Respeita sua autonomia e valores pessoais",
							]}
						/>
						<BodyText className="mt-4">
							Se você sentir que está sendo julgado, isso é sinal de que esse
							não é o psicólogo certo para você. Um bom profissional cria um
							espaço seguro, não te faz se sentir pior.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							❌ MITO 3: "Terapia é Só Desabafar, Eu Posso Fazer Isso Com
							Amigos"
						</Headline>
						<BodyText className="mb-4">
							<strong>A VERDADE:</strong> Desabafar com amigos ajuda, mas
							terapia é muito mais que isso. É um processo estruturado com
							técnicas científicas para mudar padrões de pensamento e
							comportamento.
						</BodyText>
						<Label className="mb-2">Diferenças entre amigo e psicólogo:</Label>
						<ContentCard
							variant="accent"
							accentPosition="left"
							className="mt-4"
						>
							<BodyText className="mb-2">
								<strong>AMIGO:</strong>
							</BodyText>
							<BulletList
								variant="arrow"
								items={[
									"Escuta e dá apoio emocional",
									"Oferece conselhos baseados na própria experiência",
									"Pode ter vieses e julgamentos",
									"Não tem treinamento profissional",
									"Relação é de via dupla (você também apoia ele)",
								]}
							/>
						</ContentCard>
						<ContentCard
							variant="accent"
							accentPosition="left"
							className="mt-4"
						>
							<BodyText className="mb-2">
								<strong>PSICÓLOGO:</strong>
							</BodyText>
							<BulletList
								variant="check"
								items={[
									"Escuta de forma treinada e estratégica",
									"Usa técnicas baseadas em evidência científica",
									"Te ajuda a identificar padrões inconscientes",
									"Não dá conselhos, te ensina a tomar suas decisões",
									"Mantém sigilo profissional absoluto",
									"Foco 100% em você (sem reciprocidade)",
								]}
							/>
						</ContentCard>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							❌ MITO 4: "Terapia Não Funciona, É Só Enrolação"
						</Headline>
						<BodyText className="mb-4">
							<strong>A VERDADE:</strong> Terapia tem eficácia comprovada
							cientificamente. Estudos mostram que Terapia Cognitivo-
							Comportamental (TCC) tem taxa de sucesso de 70-80% para
							transtornos de ansiedade e depressão.
						</BodyText>
						<Label className="mb-2">
							Por que algumas pessoas acham que não funciona:
						</Label>
						<BulletList
							variant="dash"
							items={[
								"Escolheram psicólogo incompatível (abordagem, personalidade)",
								"Esperavam resultados imediatos (terapia leva tempo)",
								"Não se comprometeram com o processo (faltavam, não aplicavam ferramentas)",
								"Tinham expectativa irrealista (achar que psicólogo vai 'resolver sua vida')",
								"Problema precisava de abordagem integrada (terapia + medicação)",
							]}
						/>
						<BodyText className="mt-4">
							Terapia funciona quando você encontra o profissional certo, se
							compromete com o processo e dá tempo para as mudanças acontecerem.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							❌ MITO 5: "Vou Ficar Dependente do Psicólogo Para Sempre"
						</Headline>
						<BodyText className="mb-4">
							<strong>A VERDADE:</strong> O objetivo da terapia é te tornar
							INDEPENDENTE. Um bom psicólogo te dá ferramentas para você
							caminhar sozinho, não te prende em dependência eterna.
						</BodyText>
						<Label className="mb-2">
							Como a terapia te torna independente:
						</Label>
						<BulletList
							variant="check"
							items={[
								"Ensina técnicas práticas que você usa sozinho no dia a dia",
								"Desenvolve sua autoconsciência para identificar problemas cedo",
								"Te ajuda a tomar decisões com autonomia",
								"Fortalece recursos internos que você já tem",
								"Trabalha para que você precise cada vez menos do psicólogo",
								"Meta final é a alta, não manter você em tratamento eterno",
							]}
						/>
						<BodyText className="mt-4">
							Se um psicólogo te mantém dependente dele sem progresso por meses,
							isso é sinal de alerta. Terapia ética tem início, meio e fim.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Outros Mitos Rápidos Desmascarados
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>❌</strong> "Psicólogo lê minha mente"
							<br />
							<strong>✅</strong> Psicólogo não lê mente. Ele observa padrões,
							faz perguntas estratégicas e te ajuda a conectar os pontos.
						</BodyText>
						<BodyText className="mb-4">
							<strong>❌</strong> "Terapia é para fracos que não conseguem
							resolver sozinhos"
							<br />
							<strong>✅</strong> Buscar ajuda é sinal de força e inteligência.
							Quem se trata cresce; quem ignora problemas emocionais sofre
							sozinho e piora com o tempo.
						</BodyText>
						<BodyText className="mb-4">
							<strong>❌</strong> "Psicólogo vai me obrigar a tomar remédios"
							<br />
							<strong>✅</strong> Psicólogo não receita remédio (apenas
							psiquiatra pode). Se ele avaliar que medicação pode ajudar, vai
							sugerir avaliação psiquiátrica, mas você decide.
						</BodyText>
						<BodyText className="mb-4">
							<strong>❌</strong> "Vou ter que falar sobre a minha infância e
							ficar chorando toda sessão"
							<br />
							<strong>✅</strong> Depende da abordagem. Terapias modernas como
							TCC focam no presente e em soluções práticas. Você não precisa
							passar anos revivendo traumas.
						</BodyText>
						<BodyText className="mb-4">
							<strong>❌</strong> "Terapia é muito cara, não posso pagar"
							<br />
							<strong>✅</strong> Há opções acessíveis: terapia online (R$
							50-150), clínicas-escola (R$ 30-60), programas sociais gratuitos e
							psicólogos que oferecem valores ajustados à sua renda.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Por Que Esses Mitos São Tão Perigosos?
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BodyText className="mb-4">
							Esses mitos impedem milhões de pessoas de buscar ajuda e:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Prolongam sofrimento emocional desnecessário",
								"Agravam problemas que poderiam ser resolvidos cedo",
								"Levam a crises que poderiam ser evitadas",
								"Prejudicam relacionamentos e carreira",
								"Aumentam risco de depressão, ansiedade crônica e até suicídio",
								"Perpetuam estigma que impede outras pessoas de buscar terapia",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Saber Se Você Precisa de Terapia Agora?
					</Headline>

					<ContentCard variant="default">
						<Label className="mb-2">Considere terapia se você:</Label>
						<BulletList
							variant="check"
							items={[
								"Se sente triste, ansioso ou irritado com frequência",
								"Tem dificuldade para dormir ou come demais/de menos",
								"Evita situações sociais ou responsabilidades",
								"Usa álcool, drogas ou comida para lidar com emoções",
								"Sente que está sempre no piloto automático",
								"Relacionamentos estão prejudicados",
								"Performance no trabalho ou estudos caiu",
								"Não sente prazer em coisas que antes gostava",
								"Pensa frequentemente sobre morte ou se machucar",
							]}
						/>
						<BodyText className="mt-4">
							<strong>
								Se marcou 3 ou mais itens, terapia pode ajudar
								significativamente.
							</strong>
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Dê o Primeiro Passo Sem Medo
						</Headline>
						<BodyText className="mb-6">
							Agora que você conhece a verdade sobre terapia, nada te segura.
							Publique seu pedido na Savoir Link, descreva o que procura e seu
							orçamento, e psicólogos qualificados entram em contato com você.
							Comece hoje mesmo.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}
		</>
	);
}
