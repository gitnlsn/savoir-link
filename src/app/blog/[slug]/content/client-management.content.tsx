import Link from "next/link";
import { BulletList } from "~/components/ui/bullet-list";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

export function ClientManagementContent({ post }: { post: BlogPost }) {
	return (
		<>
			{/* Article 1: Como Conseguir Primeiros Clientes */}
			{post.slug ===
				"como-conseguir-primeiros-clientes-freelancer-guia-2025" && (
				<>
					<BodyText>
						Você acabou de decidir ser freelancer, mas enfrenta o maior desafio
						de todos: conseguir os primeiros clientes. Sem portfólio, sem
						reputação, sem rede de contatos... Como alguém vai confiar em você?
						Esta é a barreira que separa quem sonha de quem realmente vive como
						freelancer no Brasil.
					</BodyText>

					<BodyText className="mt-4">
						A boa notícia? Milhares de freelancers brasileiros já superaram este
						obstáculo usando estratégias comprovadas. Neste guia completo, você
						vai aprender exatamente o que fazer para conquistar seus primeiros
						clientes, mesmo começando do zero absoluto.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							O Que Você Vai Aprender Neste Guia
						</Headline>
						<BulletList
							items={[
								"Por que conseguir os primeiros clientes é tão desafiador",
								"5 estratégias práticas para atrair clientes sem experiência comprovada",
								"Como criar portfólio mesmo sem clientes pagos",
								"Plataformas brasileiras onde encontrar primeiras oportunidades",
								"Técnicas de networking digital e prospecção ativa",
								"Erros fatais que afastam clientes iniciantes",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Por Que Conseguir os Primeiros Clientes é o Maior Desafio?
					</Headline>

					<BodyText>
						O mercado freelance brasileiro cresceu 160% nos últimos 5 anos,
						segundo pesquisa da Workana. Mas 78% dos iniciantes desistem nos
						primeiros 3 meses por não conseguirem clientes consistentes. O
						problema não é falta de talento - é o &quot;ciclo do
						iniciante&quot;:
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<BodyText>
							<strong>Clientes querem ver trabalhos anteriores</strong> → Você
							não tem portfólio porque não tem clientes → Não consegue clientes
							porque não tem portfólio → Ciclo vicioso
						</BodyText>
					</ContentCard>

					<BodyText className="mt-4">
						Além disso, você enfrenta três barreiras principais:
					</BodyText>

					<BulletList
						items={[
							"Falta de credibilidade: Clientes têm medo de contratar alguém sem histórico",
							"Rede de contatos limitada: Você ainda não conhece pessoas que podem indicar seus serviços",
							"Insegurança na precificação: Não sabe quanto cobrar e acaba se subvalorizando ou afastando clientes",
						]}
						className="mt-4"
					/>

					<BodyText className="mt-4">
						A mentalidade necessária para superar isso?{" "}
						<strong>
							Aceite que os 3-6 primeiros meses são de investimento
						</strong>{" "}
						- em portfólio, reputação e networking. Seus primeiros clientes
						podem não ser os mais lucrativos, mas são os mais valiosos para
						construir sua carreira.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						Estratégia 1: Construa um Portfólio Mesmo Sem Clientes Pagos
					</Headline>

					<BodyText>
						A primeira objeção que você ouve é: &quot;Não tenho como mostrar meu
						trabalho&quot;. Mas portfólio não precisa ser exclusivamente de
						projetos reais. Aqui estão 4 formas de construir portfólio do zero:
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							1. Projetos Fictícios para Marcas Conhecidas
						</Headline>
						<BodyText className="mb-4">
							Crie trabalhos conceituais como se fossem encomendas reais.
							<br />
							<strong>Exemplos:</strong>
						</BodyText>
						<BulletList
							items={[
								"Designer: Redesign do logo do Nubank, campanha visual para Magazine Luiza",
								"Redator: Série de posts para redes sociais da Natura, e-book para iFood",
								"Desenvolvedor: Clone responsivo do site da Globo, app de delivery modernizado",
								"Consultor de marketing: Plano de marketing digital completo para uma cafeteria fictícia",
							]}
						/>
						<BodyText className="mt-4">
							<em>
								Dica: Use marcas conhecidas para mostrar que você entende o
								mercado, mas deixe claro que são projetos conceituais/fictícios.
							</em>
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							2. Trabalhos para ONGs, Amigos e Família
						</Headline>
						<BodyText className="mb-4">
							Projetos pro bono (gratuitos) contam como experiência real.
							Procure:
						</BodyText>
						<BulletList
							items={[
								"ONGs locais que precisam de sites, identidade visual, gestão de redes sociais",
								"Pequenos negócios de amigos/família (padaria do tio, salão da prima)",
								"Eventos comunitários que precisam de divulgação",
								"Igrejas, associações de bairro, grupos de apoio",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Importante:</strong> Peça permissão por escrito para usar
							os trabalhos no seu portfólio e solicite depoimento após a
							entrega.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							3. Participe de Desafios e Competições
						</Headline>
						<BodyText className="mb-4">
							Plataformas como Behance, Dribbble e 99designs têm desafios
							semanais onde você cria trabalhos seguindo briefings reais. Mesmo
							não ganhando, você:
						</BodyText>
						<BulletList
							items={[
								"Pratica com briefings realistas",
								"Cria peças para seu portfólio",
								"Recebe feedback da comunidade",
								"Pode ser notado por clientes reais que acompanham os desafios",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							4. Mockups e Conceitos de Alta Qualidade
						</Headline>
						<BodyText>
							Use ferramentas gratuitas como Figma, Canva, Photopea para criar
							mockups profissionais dos seus trabalhos. Um logo apresentado em
							cartão de visita, papel timbrado e sinalização tem muito mais
							impacto que apenas o logo solto.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Estratégia 2: Domine as Plataformas de Freelancer Brasileiras
					</Headline>

					<BodyText>
						As 5 principais plataformas para freelancers no Brasil têm mais de
						300 mil projetos ativos mensalmente. Mas apenas 12% dos freelancers
						cadastrados conseguem projetos consistentes. A diferença? Saber como
						se destacar.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-4">
						<Headline size="sm" className="mb-4">
							Top 5 Plataformas Brasileiras de Freelancer
						</Headline>
						<BodyText className="mb-2">
							<strong>1. 99Freelas</strong> - Maior do Brasil, projetos R$
							300-5.000
							<br />
							<strong>2. Workana</strong> - América Latina, projetos maiores R$
							1.000-15.000
							<br />
							<strong>3. GetNinjas</strong> - Serviços locais, aulas,
							instalações
							<br />
							<strong>4. Freelancer.com</strong> - Global, competitivo, preços
							variados
							<br />
							<strong>5. Fiverr</strong> - Pacotes pré-definidos, bom para
							iniciantes
						</BodyText>
					</ContentCard>

					<BodyText className="mt-6">
						<strong>Como criar perfis que convertem em contratações:</strong>
					</BodyText>

					<BulletList
						items={[
							"Foto profissional (não precisa ser estúdio, mas bem iluminada e enquadrada)",
							"Título claro e específico: 'Designer de Logos para Pequenas Empresas' em vez de 'Designer Gráfico'",
							"Descrição focada em benefícios para o cliente, não suas habilidades ('Vou ajudar sua marca a se destacar' vs 'Sei usar Photoshop')",
							"Portfólio com 5-10 trabalhos de alta qualidade (menos é mais)",
							"Preços competitivos mas não os mais baratos (segundo ou terceiro mais barato)",
						]}
						className="mt-4"
					/>

					<ContentCard variant="default" className="mt-6">
						<Label className="mb-2 block font-bold text-sm text-primary">
							DICA DE OURO
						</Label>
						<BodyText>
							Nas primeiras semanas, aceite 2-3 projetos pequenos (mesmo que mal
							remunerados) EXCLUSIVAMENTE para conseguir suas primeiras
							avaliações 5 estrelas. Depois que tiver 3-5 reviews excelentes,
							você pode aumentar preços e ser mais seletivo.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Estratégia 3: Marketing Pessoal nas Redes Sociais
					</Headline>

					<BodyText>
						85% dos brasileiros usam redes sociais diariamente. Seus futuros
						clientes estão lá, mas você precisa ser encontrado. Aqui está como
						usar cada plataforma estrategicamente:
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							LinkedIn: A Mina de Ouro para Freelancers B2B
						</Headline>
						<BodyText className="mb-4">
							Se você oferece serviços para empresas (consultoria,
							desenvolvimento, marketing, design corporativo), LinkedIn é
							obrigatório.
						</BodyText>
						<BulletList
							items={[
								"Otimize seu perfil: título com palavra-chave (ex: 'Consultor de Marketing Digital para PMEs')",
								"Publique conteúdo de valor 3-5x/semana (dicas, cases, aprendizados)",
								"Comente em posts de potenciais clientes e influenciadores da sua área",
								"Conecte com 10-20 pessoas por dia do seu mercado-alvo",
								"Use hashtags relevantes: #FreelancerBrasil #MarketingDigital #DesignGrafico",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Instagram: Mostre Seu Processo e Resultados
						</Headline>
						<BodyText className="mb-4">
							Ideal para serviços visuais ou que geram transformações visíveis
							(design, nutrição, personal, arquitetura, fotografia).
						</BodyText>
						<BulletList
							items={[
								"Posts em carrossel com antes/depois, passo a passo, dicas práticas",
								"Stories diários mostrando bastidores do trabalho (humaniza você)",
								"Reels de 15-30s com dicas rápidas (maior alcance orgânico em 2025)",
								"Bio clara com CTA direto: 'Link para agendamento' ou 'WhatsApp para orçamento'",
								"Destaques organizados: Serviços, Portfólio, Depoimentos, FAQ",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Facebook: Grupos Locais e Comunidades
						</Headline>
						<BodyText className="mb-4">
							Facebook ainda é forte para serviços locais e públicos 35+.
						</BodyText>
						<BulletList
							items={[
								"Participe de grupos da sua cidade ('Empreendedores [Cidade]', 'Indico/Procuro Serviços')",
								"Contribua com valor antes de oferecer serviços (responda dúvidas, dê dicas)",
								"Quando alguém pedir indicação do seu serviço, responda rápido e profissionalmente",
								"Crie uma página comercial e convide amigos/família para curtir e compartilhar",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-6">
						<strong>Frequência ideal:</strong> Instagram (4-7 posts/semana +
						stories diários), LinkedIn (3-5 posts/semana), Facebook (3-4
						posts/semana). Consistência {">"} qualidade nos primeiros meses.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						Estratégia 4: Prospecção Ativa e Direta
					</Headline>

					<BodyText>
						Esperar que clientes te encontrem é lento. Prospecção ativa acelera
						resultados em até 10x. Mas atenção: precisa ser feita sem parecer
						desesperado ou invasivo.
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Passo 1: Identifique Empresas que Precisam do Seu Serviço
						</Headline>
						<BodyText>
							Use Google Maps, Instagram, LinkedIn para encontrar potenciais
							clientes. Procure sinais de que eles PRECISAM do que você oferece:
						</BodyText>
						<BulletList
							items={[
								"Designer: empresas com logo/site desatualizados, sem identidade visual",
								"Social media: empresas que postam irregularmente ou com baixa qualidade",
								"Desenvolvedor: negócios sem site ou com site muito antigo/lento",
								"Redator: empresas com textos de site genéricos, sem blog",
							]}
							className="mt-2"
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Passo 2: Script de Cold Message Que Funciona
						</Headline>
						<BodyText className="mb-4">
							<strong>Estrutura que converte:</strong>
						</BodyText>
						<ContentCard variant="accent" accentPosition="left">
							<BodyText className="text-sm">
								&quot;Oi [Nome], vi o trabalho incrível que vocês fazem na
								[Empresa].
								<br />
								<br />
								Notei que [problema específico que você consegue resolver - ex:
								&apos;o Instagram de vocês tem muito potencial mas está sem
								posts há 2 meses&apos;].
								<br />
								<br />
								Sou [sua profissão] especializado em [nicho] e já ajudei [tipo
								de empresa similar] a [resultado concreto].
								<br />
								<br />
								Posso te mostrar rapidamente 2-3 ideias de como [solução
								específica]? Sem compromisso!&quot;
							</BodyText>
						</ContentCard>
					</ContentCard>

					<BodyText className="mt-6">
						<strong>Onde enviar:</strong> LinkedIn (mensagens diretas),
						Instagram (DM), WhatsApp (se disponível no site), Email (contato do
						site).
					</BodyText>

					<BodyText className="mt-4">
						<strong>Importante:</strong> Personalize cada mensagem. Mensagens
						copiadas e coladas têm taxa de resposta de 2%. Personalizadas chegam
						a 25%.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						Estratégia 5: Networking Offline e Eventos
					</Headline>

					<BodyText>
						Mesmo em 2025, networking presencial ainda é poderosíssimo. 63% dos
						freelancers brasileiros conseguem clientes por indicação pessoal.
					</BodyText>

					<BulletList
						items={[
							"Trabalhe em coworkings: Você conhece empreendedores, startups, outros freelancers que podem indicar você",
							"Participe de eventos da sua área: Meetups, workshops, palestras (procure no Sympla, Eventbrite, Meetup.com)",
							"Frequente cafés e espaços de empreendedores: Converse, troque cartões, siga no Instagram",
							"Ofereça palestras/workshops gratuitos: Posiciona você como autoridade e atrai clientes naturalmente",
						]}
						className="mt-4"
					/>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Label className="mb-2 block font-bold text-sm">
							TÉCNICA PODEROSA: INDICAÇÕES ANTES DO PRIMEIRO CLIENTE
						</Label>
						<BodyText>
							Peça para amigos, familiares e ex-colegas de trabalho te
							indicarem. Não para contratar você, mas para apresentar você para
							pessoas que PODEM precisar. &quot;Conhece alguém que tem negócio e
							precisa de [seu serviço]?&quot; funciona melhor que &quot;Você
							precisa de [seu serviço]?&quot;.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Erros Fatais que Afastam Seus Primeiros Clientes
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							❌ Erro 1: Precificar Muito Baixo
						</Headline>
						<BodyText>
							Muitos iniciantes pensam: &quot;Vou cobrar R$ 50 para conseguir
							clientes&quot;. Resultado? Você atrai clientes problemáticos, se
							queima fazendo trabalho demais por pouco, e se desvaloriza no
							mercado.
							<br />
							<br />
							<strong>Solução:</strong> Pesquise preços de mercado (99Freelas,
							grupos de Facebook) e cobre 70-80% da média enquanto constrói
							reputação.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							❌ Erro 2: Não Ter Clareza Sobre O Que Você Oferece
						</Headline>
						<BodyText>
							&quot;Faço design&quot; é vago. &quot;Crio identidade visual
							completa para pequenas empresas (logo, cartão, redes sociais) em 7
							dias por R$ 800&quot; é específico e vende.
							<br />
							<br />
							<strong>Solução:</strong> Defina seu serviço em uma frase clara:
							[o que você faz] + [para quem] + [resultado/benefício].
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							❌ Erro 3: Comunicação Não Profissional
						</Headline>
						<BodyText>
							Responder em 2 dias, usar apenas áudios, linguagem muito informal,
							não ter contrato/proposta escrita... Tudo isso grita
							&quot;amador&quot;.
							<br />
							<br />
							<strong>Solução:</strong> Responda em até 24h (idealmente 2-4h),
							use textos claros, envie propostas profissionais (pode ser
							simples, mas por escrito), tenha modelo de contrato básico.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							❌ Erro 4: Não Pedir Indicações aos Primeiros Clientes
						</Headline>
						<BodyText>
							Você fez um trabalho incrível, o cliente amou... e você não pediu
							indicação? Perdeu oportunidade de ouro!
							<br />
							<br />
							<strong>Solução:</strong> Após entregar e receber feedback
							positivo, pergunte: &quot;Fico muito feliz que gostou! Você
							conhece alguém que também poderia precisar de [serviço]? Suas
							indicações ajudam muito meu trabalho a crescer.&quot;
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Seu Plano de Ação para os Próximos 30 Dias
					</Headline>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-4"
					>
						<Headline size="sm" className="mb-4">
							Checklist: Primeiros Clientes em 30 Dias
						</Headline>
						<BulletList
							items={[
								"Semana 1: Criar portfólio com 5-8 trabalhos (ficticios, pro bono ou conceituais)",
								"Semana 1-2: Cadastrar em 3 plataformas freelancer com perfis otimizados",
								"Semana 2: Conectar com 50-100 pessoas no LinkedIn do seu nicho",
								"Semana 2-3: Postar conteúdo de valor 3-5x/semana em 2 redes sociais",
								"Semana 3: Prospectar ativamente 20-30 empresas com mensagens personalizadas",
								"Semana 3-4: Participar de 2 eventos de networking (online ou presencial)",
								"Semana 4: Pedir indicações para 10 amigos/familiares/ex-colegas",
								"Contínuo: Responder TODAS as oportunidades em menos de 4 horas",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-6">
						<strong>Meta realista:</strong> 2-5 clientes nos primeiros 30-45
						dias seguindo este guia. Não será fácil, mas é absolutamente
						possível. A chave é ação consistente e não desistir nas primeiras
						semanas.
					</BodyText>

					{/* CTA Section */}
					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-12 text-center"
					>
						<Headline size="sm" className="mb-4">
							Pronto para Conseguir Seus Primeiros Clientes?
						</Headline>
						<BodyText className="mb-6">
							A Savoir Link conecta profissionais com clientes que procuram
							exatamente o que você oferece. Compre créditos, desbloqueie os
							contatos de quem já publicou um pedido e comece a fechar negócios
							hoje mesmo.
						</BodyText>
						<Link href="/precos">
							<PrimaryButton>Criar Conta Gratuita na Savoir Link</PrimaryButton>
						</Link>
					</ContentCard>
				</>
			)}

			{/* Article 2: CRM para Profissionais Autônomos */}
			{post.slug ===
				"crm-gratuito-profissionais-autonomos-ferramentas-2025" && (
				<>
					<BodyText>
						Você perde oportunidades porque esqueceu de retornar um contato? Não
						lembra quando foi a última vez que falou com aquele cliente
						potencial? Tem conversas espalhadas entre WhatsApp, email, Instagram
						e não consegue acompanhar tudo? Se respondeu sim, você precisa de um
						CRM.
					</BodyText>

					<BodyText className="mt-4">
						CRM (Customer Relationship Management) não é luxo de grande empresa.
						É ferramenta essencial para qualquer profissional autônomo que quer
						crescer de forma organizada. E a melhor parte? Existem opções
						gratuitas excelentes em 2025. Neste guia, você vai descobrir os 7
						melhores CRM gratuitos e como usá-los para nunca mais perder um
						cliente.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							O Que Você Vai Aprender
						</Headline>
						<BulletList
							items={[
								"O que é CRM e por que você precisa de um (mesmo sendo autônomo)",
								"Os 7 melhores CRM gratuitos do Brasil comparados lado a lado",
								"Como escolher o CRM ideal para seu tipo de negócio",
								"Implementação prática passo a passo",
								"Boas práticas que multiplicam seus resultados",
								"Quando vale a pena migrar para um CRM pago",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que é CRM e Por Que Você Precisa de Um?
					</Headline>

					<BodyText>
						CRM é um sistema que centraliza TODAS as informações sobre seus
						clientes e potenciais clientes em um único lugar. Pense nele como
						uma agenda turbinada que não só guarda contatos, mas também:
					</BodyText>

					<BulletList
						items={[
							"Registra todo o histórico de conversas e interações",
							"Lemra você de fazer follow-up no momento certo",
							"Organiza leads por estágio (novo contato, proposta enviada, negociação, fechado)",
							"Mostra quais oportunidades estão esfriando e precisam de atenção",
							"Gera relatórios de quantos clientes você ganhou e perdeu",
						]}
						className="mt-4"
					/>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Benefícios Reais de Usar CRM
						</Headline>
						<BulletList
							items={[
								"Aumento de 29% na taxa de conversão (leads que viram clientes)",
								"Redução de 74% no tempo gasto procurando informações de clientes",
								"43% mais follow-ups realizados (que você esqueceria sem CRM)",
								"Previsibilidade: você sabe exatamente quantos projetos virão este mês",
								"Profissionalismo: clientes percebem que você é organizado",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-6">
						<strong>Quando você precisa de um CRM?</strong> Se você identificou
						3 ou mais destes sinais, está na hora:
					</BodyText>

					<BulletList
						items={[
							"Esquece de retornar contatos e perde oportunidades",
							"Tem conversas em múltiplos canais (WhatsApp, email, Instagram) e se perde",
							"Não lembra detalhes de conversas antigas com clientes",
							"Perde propostas que enviou porque não fez follow-up",
							"Não sabe quantos leads tem no pipeline nem quantos deve fechar este mês",
							"Quer crescer mas sente que não consegue acompanhar mais clientes",
						]}
						className="mt-4"
					/>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Label className="mb-2 block font-bold text-sm">
							DIFERENÇA ENTRE PLANILHAS E CRM PROFISSIONAL
						</Label>
						<BodyText>
							Planilhas (Google Sheets/Excel) funcionam para começar, mas param
							de funcionar quando você tem 20+ leads. CRM automatiza follow-ups,
							envia notificações, permite buscas rápidas e escala conforme você
							cresce. Planilha é reativo, CRM é proativo.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Os 7 Melhores CRM Gratuitos do Brasil em 2025
					</Headline>

					<BodyText>
						Testamos 15 CRM gratuitos disponíveis para profissionais
						brasileiros. Estes 7 se destacaram por funcionalidades, facilidade
						de uso e limite generoso do plano gratuito:
					</BodyText>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							1. RD Station CRM (Melhor para Marketing + Vendas)
						</Headline>
						<BodyText className="mb-4">
							<strong>Plano Gratuito:</strong> Ilimitado para sempre, até 2
							usuários
							<br />
							<strong>Ideal para:</strong> Profissionais que fazem marketing
							digital e querem integrar com captação de leads
						</BodyText>
						<BulletList
							items={[
								"Interface 100% em português",
								"Pipeline visual (Kanban) de vendas",
								"Automação de emails de follow-up",
								"Integração com WhatsApp Business",
								"Relatórios de funil de vendas",
								"Landing pages integradas (plano gratuito limitado)",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Limitações:</strong> Apenas 2 usuários, sem integração com
							email marketing no plano gratuito
							<br />
							<strong>Quando usar:</strong> Você já trabalha com marketing
							digital ou quer começar a captar leads online
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. HubSpot CRM (Mais Completo e Poderoso)
						</Headline>
						<BodyText className="mb-4">
							<strong>Plano Gratuito:</strong> Ilimitado, contatos ilimitados,
							usuários ilimitados
							<br />
							<strong>Ideal para:</strong> Quem quer começar com ferramenta
							profissional sem gastar nada
						</BodyText>
						<BulletList
							items={[
								"Contatos, empresas e negócios ilimitados (sim, ilimitados!)",
								"Integração com Gmail e Outlook (rastreia emails automaticamente)",
								"Pipelines de vendas customizáveis",
								"Chat ao vivo para site",
								"Formulários e pop-ups para captura de leads",
								"App mobile excelente (iOS/Android)",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Limitações:</strong> Interface em inglês (tem português
							mas não é 100%), curva de aprendizado maior
							<br />
							<strong>Quando usar:</strong> Você quer o CRM mais poderoso e não
							se importa em aprender uma ferramenta mais complexa
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Agendor (Feito para Brasileiro)
						</Headline>
						<BodyText className="mb-4">
							<strong>Plano Gratuito:</strong> 30 dias (trial), depois R$
							39-59/mês por usuário
							<br />
							<strong>Ideal para:</strong> Profissionais que vendem serviços e
							precisam de CRM simples
						</BodyText>
						<BulletList
							items={[
								"Interface super simples e intuitiva",
								"Funil de vendas visual",
								"Integração com WhatsApp",
								"App mobile muito bom",
								"Suporte em português",
								"Cadastro de produtos/serviços",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Limitações:</strong> Não é totalmente gratuito (apenas
							trial), mas é muito acessível (R$ 39-59/mês)
							<br />
							<strong>Quando usar:</strong> Você quer simplicidade máxima e está
							disposto a pagar valores baixos
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							4. Zoho CRM (Mais Personalizável)
						</Headline>
						<BodyText className="mb-4">
							<strong>Plano Gratuito:</strong> Até 3 usuários, para sempre
							<br />
							<strong>Ideal para:</strong> Quem tem processos específicos e
							precisa customizar tudo
						</BodyText>
						<BulletList
							items={[
								"Altamente customizável (campos, pipelines, automações)",
								"Integração com 500+ aplicativos (Zapier, Make)",
								"Previsão de vendas com IA",
								"Gestão de territórios e times",
								"Relatórios avançados customizáveis",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Limitações:</strong> Interface menos intuitiva, curva de
							aprendizado alta
							<br />
							<strong>Quando usar:</strong> Seu processo de venda é complexo e
							você precisa de flexibilidade máxima
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							5. Brevo (ex-Sendinblue) - CRM + Email Marketing
						</Headline>
						<BodyText className="mb-4">
							<strong>Plano Gratuito:</strong> Ilimitado, até 300 emails/dia
							<br />
							<strong>Ideal para:</strong> Profissionais que querem CRM +
							automação de email em uma ferramenta
						</BodyText>
						<BulletList
							items={[
								"CRM básico + email marketing integrado",
								"Automações de email (boas-vindas, follow-up, carrinho abandonado)",
								"Landing pages e formulários",
								"Segmentação de contatos",
								"SMS marketing (pago)",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Limitações:</strong> CRM menos robusto que concorrentes,
							foco maior em email
							<br />
							<strong>Quando usar:</strong> Você quer fazer email marketing e
							precisa de CRM básico junto
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							6. Bitrix24 (Tudo-em-Um Completo Demais)
						</Headline>
						<BodyText className="mb-4">
							<strong>Plano Gratuito:</strong> Ilimitado, mas com limites de
							armazenamento
							<br />
							<strong>Ideal para:</strong> Quem quer CRM + gestão de projetos +
							comunicação em uma ferramenta
						</BodyText>
						<BulletList
							items={[
								"CRM + gestão de tarefas + chat + videoconferência + drive",
								"Usuários ilimitados no plano gratuito",
								"Automações de vendas",
								"Telefonia integrada (VoIP)",
								"Construtor de sites",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Limitações:</strong> Interface confusa, muitas
							funcionalidades podem sobrecarregar
							<br />
							<strong>Quando usar:</strong> Você quer substituir múltiplas
							ferramentas por uma só e tem paciência para aprender
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							7. Google Sheets + Add-ons (DIY Simples)
						</Headline>
						<BodyText className="mb-4">
							<strong>Plano Gratuito:</strong> Totalmente gratuito
							<br />
							<strong>Ideal para:</strong> Quem quer simplicidade máxima ou está
							começando do zero
						</BodyText>
						<BulletList
							items={[
								"Você controla 100% da estrutura",
								"Add-ons como Yet Another Mail Merge para automação de emails",
								"Integrações com Zapier/Make para automações",
								"Curva de aprendizado zero (todo mundo sabe usar planilhas)",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Limitações:</strong> Sem automações nativas, você faz tudo
							manualmente
							<br />
							<strong>Quando usar:</strong> Menos de 20 leads ativos ou
							preferência por controle total
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Comparativo: Qual CRM Escolher?
					</Headline>

					<ContentCard variant="accent" accentPosition="left" className="mt-4">
						<table className="w-full text-sm">
							<thead>
								<tr className="border-outline-variant border-b">
									<th className="pb-2 text-left">CRM</th>
									<th className="pb-2 text-left">Melhor Para</th>
									<th className="pb-2 text-left">Facilidade</th>
									<th className="pb-2 text-left">Limite Grátis</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-outline-variant/30 border-b">
									<td className="py-2 font-bold">RD Station</td>
									<td className="py-2">Marketing + Vendas</td>
									<td className="py-2">★★★★☆</td>
									<td className="py-2">2 usuários</td>
								</tr>
								<tr className="border-outline-variant/30 border-b">
									<td className="py-2 font-bold">HubSpot</td>
									<td className="py-2">Máximo poder grátis</td>
									<td className="py-2">★★★☆☆</td>
									<td className="py-2">Ilimitado</td>
								</tr>
								<tr className="border-outline-variant/30 border-b">
									<td className="py-2 font-bold">Agendor</td>
									<td className="py-2">Simplicidade</td>
									<td className="py-2">★★★★★</td>
									<td className="py-2">30 dias trial</td>
								</tr>
								<tr className="border-outline-variant/30 border-b">
									<td className="py-2 font-bold">Zoho</td>
									<td className="py-2">Customização</td>
									<td className="py-2">★★☆☆☆</td>
									<td className="py-2">3 usuários</td>
								</tr>
								<tr className="border-outline-variant/30 border-b">
									<td className="py-2 font-bold">Brevo</td>
									<td className="py-2">Email Marketing</td>
									<td className="py-2">★★★★☆</td>
									<td className="py-2">300 emails/dia</td>
								</tr>
								<tr className="border-outline-variant/30 border-b">
									<td className="py-2 font-bold">Bitrix24</td>
									<td className="py-2">Tudo-em-um</td>
									<td className="py-2">★★☆☆☆</td>
									<td className="py-2">Usuários ilimitados</td>
								</tr>
								<tr>
									<td className="py-2 font-bold">Google Sheets</td>
									<td className="py-2">Máxima simplicidade</td>
									<td className="py-2">★★★★★</td>
									<td className="py-2">Ilimitado</td>
								</tr>
							</tbody>
						</table>
					</ContentCard>

					<BodyText className="mt-6">
						<strong>Recomendações por área:</strong>
					</BodyText>

					<BulletList
						items={[
							"Consultoria/Coaching: HubSpot (recursos avançados) ou Agendor (simplicidade)",
							"Design/Desenvolvimento: RD Station (leads online) ou HubSpot (completo)",
							"Saúde (nutri, psico, personal): Agendor (simples) ou Zoho (customizável)",
							"Marketing/Social Media: RD Station (integração perfeita) ou Brevo (email incluído)",
							"Educação/Professores: Google Sheets (começar) ou HubSpot (escalar)",
						]}
						className="mt-4"
					/>

					<Headline size="sm" className="mt-8 mb-4">
						Como Implementar um CRM na Prática
					</Headline>

					<BodyText>
						Ter o CRM não adianta nada se você não usar corretamente. Aqui está
						o passo a passo de implementação que funciona:
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							PASSO 1: CONFIGURAÇÃO INICIAL (1-2 HORAS)
						</Label>
						<BulletList
							items={[
								"Crie sua conta e faça o tour guiado (não pule!)",
								"Configure campos personalizados relevantes (área de atuação, tamanho do projeto, orçamento)",
								"Defina seu pipeline de vendas (ex: Novo Lead → Contato Feito → Proposta Enviada → Negociação → Fechado/Perdido)",
								"Conecte email e WhatsApp (se a ferramenta permitir)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							PASSO 2: IMPORTAÇÃO DE CONTATOS (30-60 MIN)
						</Label>
						<BulletList
							items={[
								"Exporte contatos existentes de planilhas, Gmail, WhatsApp (manualmente)",
								"Importe para o CRM via CSV ou integração",
								"Limpe duplicatas e contatos irrelevantes",
								"Categorize cada contato por estágio no pipeline",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							PASSO 3: CRIAÇÃO DE PROCESSOS
						</Label>
						<BulletList
							items={[
								"Defina o que registrar: toda conversa importante, propostas enviadas, feedbacks",
								"Configure lembretes automáticos (ex: 3 dias após proposta, fazer follow-up)",
								"Crie templates de email para situações comuns (proposta, follow-up, agradecimento)",
								"Configure automações simples (ex: quando lead entra, enviar email de boas-vindas)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Label className="mb-2 block font-bold text-sm">
							REGRA DE OURO: REGISTRE TUDO NO MESMO DIA
						</Label>
						<BodyText>
							Reserve 10-15 minutos no final do dia para atualizar TODOS os
							contatos que você teve naquele dia no CRM. Se você deixar para
							depois, vai esquecer e o CRM vira desperdício.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Boas Práticas para Gestão de Clientes com CRM
					</Headline>

					<BulletList
						items={[
							"Registre TODO contato: cada WhatsApp, email, ligação, reunião. Se não está no CRM, não aconteceu.",
							"Defina lembretes para TODOS os follow-ups: Nunca confie na memória. Se proposta foi enviada, lembrete para 3 dias. Cliente sumiu, lembrete para 1 semana.",
							"Categorize clientes por valor: Use tags como 'Alto Valor' (R$ 3k+), 'Médio' (R$ 500-3k), 'Baixo' (< R$ 500) para priorizar atenção.",
							"Use tags para segmentar: 'Urgente', 'Longo Prazo', 'Indeciso', 'Pronto para Fechar'. Isso permite filtros rápidos.",
							"Revise pipeline semanalmente: Toda segunda de manhã, revise todos os leads ativos. Quem precisa de follow-up? Quem esfrious? Movimente os cards.",
							"Limpe dados mortos: A cada 3 meses, remova/arquive leads que nunca vão fechar (sem resposta há 60+ dias).",
						]}
						className="mt-4"
					/>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Automações Simples Que Economizam Horas
						</Headline>
						<BulletList
							items={[
								"Email automático quando novo lead é adicionado: 'Olá [Nome], obrigado pelo contato! Vou analisar sua solicitação e retorno em até 24h.'",
								"Lembrete automático 3 dias após enviar proposta: Notificação para você fazer follow-up",
								"Rotação de leads: Se lead fica 7 dias em um estágio, notificação para você agir",
								"Relatório semanal automático: Quantos leads entraram, quantos fecharam, taxa de conversão",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Erros Comuns ao Usar CRM (E Como Evitá-los)
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-2">
							<strong>
								❌ Erro 1: Escolher ferramenta muito complexa e abandonar
							</strong>
						</BodyText>
						<BodyText>
							Muitos começam com Salesforce ou Zoho (complexos) e desistem em 1
							semana. Comece simples (Agendor, Google Sheets) e evolua conforme
							necessidade.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-2">
							<strong>
								❌ Erro 2: Não alimentar o sistema consistentemente
							</strong>
						</BodyText>
						<BodyText>
							CRM funciona só se você usar TODO DIA. Se você atualiza apenas
							quando lembra, melhor nem ter. Crie hábito: 10min no final do dia
							para atualizar tudo.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-2">
							<strong>❌ Erro 3: Não usar as automações disponíveis</strong>
						</BodyText>
						<BodyText>
							Muitos usam CRM como planilha glorificada. Use automações!
							Lembretes, emails automáticos, rotação de leads. Se você faz
							manualmente algo que poderia ser automatizado, está perdendo o
							maior valor do CRM.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<BodyText className="mb-2">
							<strong>❌ Erro 4: Esquecer de revisar e limpar dados</strong>
						</BodyText>
						<BodyText>
							Leads mortos, informações desatualizadas, duplicatas... Poluem seu
							CRM e prejudicam análises. Reserve 1h por mês para limpeza e
							atualização.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Migrar para um CRM Pago?
					</Headline>

					<BodyText>
						CRM gratuito é perfeito para começar, mas em algum momento você vai
						bater nos limites. Sinais de que está na hora de investir:
					</BodyText>

					<BulletList
						items={[
							"Você atingiu o limite de contatos/usuários do plano gratuito",
							"Precisa de automações mais avançadas que o plano grátis não oferece",
							"Quer integrar com ferramentas específicas (ERP, sistemas de pagamento)",
							"Equipe cresceu e precisa de múltiplos usuários com permissões diferentes",
							"Precisa de suporte prioritário (planos pagos têm atendimento melhor)",
						]}
						className="mt-4"
					/>

					<BodyText className="mt-6">
						<strong>Valores típicos de planos pagos:</strong>
					</BodyText>

					<BulletList
						items={[
							"RD Station CRM: R$ 19-79/mês por usuário (depende de recursos)",
							"HubSpot: US$ 45-800/mês (depende muito do pacote)",
							"Agendor: R$ 39-119/mês por usuário",
							"Zoho: R$ 60-180/mês por usuário",
						]}
						className="mt-2"
					/>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Label className="mb-2 block font-bold text-sm">
							ROI ESPERADO DE CRM PAGO
						</Label>
						<BodyText>
							Se você está faturando R$ 5.000+/mês como freelancer, investir R$
							50-100/mês em CRM pago tem ROI imediato. O aumento de 20-30% na
							taxa de conversão (leads que viram clientes) paga o CRM em poucos
							dias.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Checklist: Implementando Seu CRM Hoje
					</Headline>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-4"
					>
						<BulletList
							items={[
								"☐ Escolher CRM baseado no seu perfil (use o comparativo acima)",
								"☐ Criar conta e fazer tour guiado completo",
								"☐ Configurar pipeline de vendas (estágios que seus leads passam)",
								"☐ Importar contatos existentes (mínimo 10 para testar)",
								"☐ Criar templates de mensagens comuns",
								"☐ Configurar 3 automações básicas (boas-vindas, follow-up, lembrete)",
								"☐ Definir rotina diária de atualização (10min no fim do dia)",
								"☐ Agendar revisão semanal de pipeline (segundas 9h)",
								"☐ Usar por 30 dias consistentemente antes de julgar se funciona",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-6">
						Com CRM implementado, você nunca mais vai perder oportunidades por
						desorganização. Seus clientes vão perceber o profissionalismo, você
						vai ter previsibilidade de quantos projetos virão, e vai escalar seu
						negócio sem caos.
					</BodyText>

					{/* CTA Section */}
					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-12 text-center"
					>
						<Headline size="sm" className="mb-4">
							Encontre Novos Clientes na Savoir Link
						</Headline>
						<BodyText className="mb-6">
							A Savoir Link conecta você a novos clientes que já estão buscando
							seu serviço. Compre créditos, desbloqueie os contatos de quem
							publicou um pedido e fale diretamente com cada cliente.
						</BodyText>
						<Link href="/precos">
							<PrimaryButton>Começar a Usar Gratuitamente</PrimaryButton>
						</Link>
					</ContentCard>
				</>
			)}
		</>
	);
}
