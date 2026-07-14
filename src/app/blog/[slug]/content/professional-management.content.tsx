import Link from "next/link";
import { BulletList } from "~/components/ui/bullet-list";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

export function ProfessionalManagementContent({ post }: { post: BlogPost }) {
	return (
		<>
			{/* Article 1: 10 Softwares de Gestão Gratuitos */}
			{post.slug ===
				"10-softwares-gestao-gratuitos-profissionais-autonomos-2025" && (
				<>
					<BodyText>
						Profissional autônomo desorganizado = projetos atrasados, clientes
						insatisfeitos, oportunidades perdidas. Mas contratar equipe
						administrativa custa R$ 2.000-4.000/mês. A solução? Ferramentas
						digitais gratuitas que fazem 80% do trabalho por você. Este guia
						apresenta os 10 melhores softwares de gestão gratuitos que vão
						organizar sua vida profissional em 2025.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							As 10 Ferramentas Essenciais
						</Headline>
						<BulletList
							items={[
								"Gestão de Projetos: Trello, Asana, Notion",
								"Controle de Tempo: Toggl, Clockify",
								"Gestão Financeira: Qipu, Conta Azul",
								"Comunicação: WhatsApp Business, Google Agenda",
								"Armazenamento: Google Drive, Dropbox",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Por Que Profissionais Autônomos Precisam de Ferramentas de Gestão?
					</Headline>

					<BodyText>
						Você é designer, desenvolvedor, consultor - NÃO é gerente de
						projetos, contador, secretário. Mas quando trabalha sozinho, precisa
						fazer tudo. Resultado? 40% do seu tempo vai para tarefas
						administrativas, não para trabalho que gera receita.
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<BodyText>
							<strong>Impacto da desorganização:</strong>
							<br />• Perda de clientes: 23% dos freelancers perdem clientes por
							atrasos/esquecimentos (Workana 2024)
							<br />• Estresse e burnout: 67% relatam ansiedade por não
							conseguir acompanhar tudo
							<br />• Dinheiro perdido: Média R$ 8.000/ano em oportunidades
							esquecidas ou mal gerenciadas
							<br />
							<br />
							<strong>ROI de usar ferramentas certas:</strong> Tempo economizado
							= mais projetos = mais receita. Freelancers organizados faturam
							34% a mais que desorganizados com mesma capacidade técnica.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Categoria 1: Gestão de Projetos
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Trello - Kanban Visual (Melhor para Iniciantes)
						</Headline>
						<BodyText>
							<strong>O que é:</strong> Quadros visuais estilo Kanban (colunas
							com cards que você move)
							<br />
							<br />
							<strong>Plano Gratuito:</strong> Ilimitado para sempre, 10
							quadros, cards ilimitados
							<br />
							<br />
							<strong>Ideal para:</strong> Quem nunca usou ferramenta de gestão,
							prefere visual, gerencia até 10 projetos simultâneos
						</BodyText>

						<BodyText className="mt-4">
							<strong>Funcionalidades:</strong>
						</BodyText>
						<BulletList
							items={[
								"Quadros personalizados: Um quadro por cliente ou por tipo de projeto",
								"Cards com checklists: Quebrar projeto grande em micro-tarefas",
								"Datas de vencimento e lembretes",
								"Anexos: Arquivos, links, imagens nos cards",
								"Labels: Cores para prioridade (vermelho=urgente, verde=pode esperar)",
								"App mobile excelente (iOS/Android)",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>Exemplo de uso:</strong> Board &quot;Projetos
							Clientes&quot; com colunas: Backlog | Em Andamento | Em Revisão |
							Concluído. Cada card = 1 projeto.
						</BodyText>

						<BodyText className="mt-4">
							<strong>✅ Prós:</strong> Super fácil de aprender (15min), visual
							intuitivo, grátis robusto
							<br />
							<strong>❌ Contras:</strong> Limitado para projetos muito
							complexos, sem timeline nativo
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Asana - Projetos Complexos com Dependências
						</Headline>
						<BodyText>
							<strong>O que é:</strong> Gestão de projetos completa com
							múltiplas visualizações (lista, board, timeline)
							<br />
							<br />
							<strong>Plano Gratuito:</strong> Até 10 membros (você + 9),
							projetos ilimitados, tarefas ilimitadas
							<br />
							<br />
							<strong>Ideal para:</strong> Projetos com múltiplas etapas,
							dependências (tarefa B só começa quando tarefa A termina),
							deadlines críticos
						</BodyText>

						<BodyText className="mt-4">
							<strong>Funcionalidades:</strong>
						</BodyText>
						<BulletList
							items={[
								"Visualizações múltiplas: Lista, Board, Calendário, Timeline (Gantt)",
								"Subtarefas ilimitadas: Quebrar cada tarefa em micro-etapas",
								"Dependências: 'Design só começa após Briefing aprovado'",
								"Campos personalizados: Status, prioridade, tipo de tarefa",
								"Automações básicas: 'Quando tarefa move para Concluído, notificar cliente'",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>✅ Prós:</strong> Muito poderoso, timeline visual, ótimo
							para projetos longos
							<br />
							<strong>❌ Contras:</strong> Curva de aprendizado maior (1-2
							semanas), pode sobrecarregar iniciantes
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Notion - Tudo-em-Um Flexível
						</Headline>
						<BodyText>
							<strong>O que é:</strong> Workspace tudo-em-um: gestão de projetos
							+ notas + wiki + banco de dados
							<br />
							<br />
							<strong>Plano Gratuito:</strong> Ilimitado (sim, tudo ilimitado
							para uso pessoal!)
							<br />
							<br />
							<strong>Ideal para:</strong> Quem quer personalização máxima,
							gosta de construir sistema próprio, quer tudo em um lugar
						</BodyText>

						<BodyText className="mt-4">
							<strong>Funcionalidades:</strong>
						</BodyText>
						<BulletList
							items={[
								"Páginas infinitas: Crie estrutura como quiser",
								"Bancos de dados: Projetos, clientes, tarefas, finanças - tudo conectado",
								"Templates: Milhares de templates prontos da comunidade",
								"Visualizações: Tabela, Board, Calendário, Galeria, Timeline",
								"Relações entre bancos: 'Este projeto está relacionado a este cliente'",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>✅ Prós:</strong> Flexibilidade infinita, gratuito
							completo, bonito
							<br />
							<strong>❌ Contras:</strong> Curva de aprendizado ALTA (2-4
							semanas), pode virar bagunça se não souber estruturar
						</BodyText>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Qual Escolher? Comparativo Rápido
						</Headline>
						<BodyText className="text-sm">
							<strong>Iniciante/simples:</strong> Trello (você domina em 1 dia)
							<br />
							<strong>Projetos complexos:</strong> Asana (dependências,
							timeline)
							<br />
							<strong>Quer tudo em um lugar:</strong> Notion (mas prepare-se
							para aprender)
							<br />
							<br />
							<em>
								Minha recomendação: Comece com Trello. Se sentir limitado em 3
								meses, migre para Asana ou Notion.
							</em>
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Categoria 2: Controle de Tempo
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Toggl Track - Rastreamento Simples
						</Headline>
						<BodyText>
							<strong>O que é:</strong> Rastreador de tempo automático. Você
							clica &quot;Start&quot; quando começa tarefa, &quot;Stop&quot;
							quando termina.
							<br />
							<br />
							<strong>Plano Gratuito:</strong> 1 usuário, projetos ilimitados,
							relatórios básicos
							<br />
							<br />
							<strong>Por que rastrear tempo?</strong>
						</BodyText>
						<BulletList
							items={[
								"Saber quanto tempo REALMENTE leva cada tipo de projeto (você está subestimando 40%)",
								"Precificar melhor (se projeto leva 15h e você cobra por 10h, está perdendo dinheiro)",
								"Cobrar por hora com precisão",
								"Identificar onde você perde tempo",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>Como usar:</strong> Crie projetos para cada cliente. Toda
							vez que trabalha, inicia timer naquele projeto. Fim do mês:
							relatório automático de horas por cliente/projeto.
						</BodyText>

						<BodyText className="mt-4">
							<strong>✅ Prós:</strong> Super simples, app em todas as
							plataformas, integra com tudo
							<br />
							<strong>❌ Contras:</strong> Relatórios avançados só no pago
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Clockify - Gratuito Ilimitado
						</Headline>
						<BodyText>
							<strong>O que é:</strong> Similar ao Toggl, mas 100% gratuito sem
							limites
							<br />
							<br />
							<strong>Plano Gratuito:</strong> Usuários ilimitados, projetos
							ilimitados, relatórios completos (tudo grátis mesmo!)
							<br />
							<br />
							<strong>Diferencial:</strong> Se você trabalha com equipe
							(freelancers que você contrata), Clockify permite time ilimitado
							gratuitamente. Toggl cobra.
						</BodyText>

						<BodyText className="mt-4">
							<strong>✅ Prós:</strong> Tudo grátis, relatórios excelentes,
							interface limpa
							<br />
							<strong>❌ Contras:</strong> Poucos apps nativos (mais web-based)
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Categoria 3: Gestão Financeira
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Qipu - Contador Virtual para MEI
						</Headline>
						<BodyText>
							<strong>O que é:</strong> Contador virtual automatizado. Ele
							gerencia impostos MEI, lembra de pagar DAS, ajuda com declarações.
							<br />
							<br />
							<strong>Plano Gratuito:</strong> 30 dias trial, depois R$
							29-59/mês (vale MUITO a pena)
							<br />
							<br />
							<strong>Funcionalidades:</strong>
						</BodyText>
						<BulletList
							items={[
								"Gerar DAS automaticamente todo mês",
								"Lembretes de pagamento",
								"Declaração Anual DASN-SIMEI assistida",
								"Controle de receitas e despesas",
								"Emissão de nota fiscal (integração)",
								"Chat com contador real (planos pagos)",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>✅ Prós:</strong> Elimina dor de cabeça tributária, vale
							cada centavo
							<br />
							<strong>❌ Contras:</strong> Não é 100% grátis (mas R$ 29-59 é
							nada vs contratar contador R$ 200+)
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Conta Azul - Gestão Financeira Completa
						</Headline>
						<BodyText>
							<strong>O que é:</strong> ERP simplificado para MEI e pequenas
							empresas
							<br />
							<br />
							<strong>Plano Gratuito:</strong> 90 dias trial, recursos limitados
							depois (fluxo de caixa, contas a pagar/receber)
							<br />
							<br />
							<strong>Funcionalidades:</strong>
						</BodyText>
						<BulletList
							items={[
								"Fluxo de caixa: Quanto entra, quanto sai, saldo projetado",
								"Contas a receber: Controle de quem te deve",
								"Contas a pagar: Boletos, fornecedores, compromissos",
								"Conciliação bancária: Conecta com sua conta bancária",
								"Relatórios financeiros: DRE, balanço, lucro",
								"Emissão de nota fiscal",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>Planos pagos:</strong> R$ 49-159/mês (se fatura R$
							10k+/mês, vale a pena)
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Google Sheets - Planilha Personalizada (100% Grátis)
						</Headline>
						<BodyText>
							Se orçamento é ZERO, planilha Google funciona perfeitamente. Use
							templates prontos:
						</BodyText>
						<BulletList
							items={[
								"Fluxo de caixa mensal",
								"Controle de receitas por cliente",
								"Controle de despesas categorizadas",
								"Projeção de faturamento",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>Vantagens:</strong> Grátis, flexível, você controla tudo
							<br />
							<strong>Desvantagens:</strong> Sem automação, você faz tudo
							manualmente
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Categoria 4: Comunicação e Agendamento
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							WhatsApp Business - Organização de Clientes
						</Headline>
						<BodyText>
							<strong>O que é:</strong> WhatsApp profissional com recursos
							empresariais
							<br />
							<br />
							<strong>100% Gratuito</strong>
							<br />
							<br />
							<strong>Funcionalidades:</strong>
						</BodyText>
						<BulletList
							items={[
								"Perfil comercial: Horário, endereço, site, catálogo de serviços",
								"Mensagem automática de ausência: 'Retorno em X horas'",
								"Mensagem de saudação: Quando cliente fala primeira vez",
								"Respostas rápidas: Salve mensagens comuns (orçamento, prazo, valores)",
								"Etiquetas: Organize contatos (novo cliente, negociação, fechado)",
								"Estatísticas: Mensagens enviadas/recebidas/lidas",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>Por que usar:</strong> WhatsApp é canal #1 de comunicação
							no Brasil. Ter versão Business = profissionalismo + organização.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Google Agenda - Nunca Mais Perca Compromisso
						</Headline>
						<BodyText>
							<strong>100% Gratuito</strong>
							<br />
							<br />
							<strong>Funcionalidades:</strong>
						</BodyText>
						<BulletList
							items={[
								"Calendários múltiplos: Pessoal, Profissional, Cliente A, Cliente B",
								"Compartilhamento: Cliente vê sua disponibilidade em tempo real",
								"Lembretes: Email/notificação antes do compromisso",
								"Integração com Google Meet: Criar videochamada automática",
								"Repetições: Reuniões semanais/mensais automáticas",
								"Fusos horários: Trabalha com clientes em outros estados/países",
							]}
							className="mt-2"
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Categoria 5: Armazenamento e Documentos
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							Google Drive - 15GB Grátis
						</Headline>
						<BodyText>
							<strong>Plano Gratuito:</strong> 15GB (compartilhado entre Drive,
							Gmail, Google Fotos)
							<br />
							<br />
							<strong>Vantagens:</strong>
						</BodyText>
						<BulletList
							items={[
								"Colaboração em tempo real: Compartilhe pasta com cliente, vocês editam juntos",
								"Sincronização: Acesse de qualquer dispositivo",
								"Versionamento: Volta para versões antigas de documentos",
								"Integração: Funciona com tudo (Trello, Asana, Notion)",
								"Google Docs/Sheets/Slides: Office gratuito online",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>Como organizar:</strong>
							<br />
							Pasta por cliente → Dentro: Briefing, Rascunhos, Finais, Contratos
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Dropbox - 2GB Grátis + Referências
						</Headline>
						<BodyText>
							<strong>Plano Gratuito:</strong> 2GB iniciais (até 16GB grátis com
							referências)
							<br />
							<br />
							<strong>Diferencial:</strong> Sincronização mais rápida que Google
							Drive, ótimo para arquivos grandes (vídeos, designs pesados).
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Integrar Ferramentas para Produtividade Máxima
					</Headline>

					<BodyText>
						Ter 10 ferramentas não adianta nada se elas não conversam. Aqui está
						como integrar tudo:
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-4">
						<Headline size="sm" className="mb-4">
							Exemplo de Workflow Integrado
						</Headline>
						<BodyText className="text-sm">
							<strong>1. Cliente envia mensagem no WhatsApp Business</strong>
							<br />
							<strong>2. Você cria card no Trello</strong> com nome do cliente e
							briefing
							<br />
							<strong>3. Anexa arquivos do Google Drive</strong> ao card do
							Trello
							<br />
							<strong>4. Inicia timer no Toggl</strong> quando começa a
							trabalhar no projeto
							<br />
							<strong>5. Agenda reunião no Google Agenda</strong> para
							apresentar resultado
							<br />
							<strong>6. Move card para 'Concluído'</strong> e para timer
							<br />
							<strong>7. Registra pagamento no Conta Azul/Planilha</strong>
							<br />
							<br />
							<em>Tudo conectado, nada esquecido, máxima eficiência.</em>
						</BodyText>
					</ContentCard>

					<BodyText className="mt-6">
						<strong>Automações com Zapier/Make (versões gratuitas):</strong>
						<br />• Quando card move para 'Concluído' no Trello → Envia email
						automático para cliente
						<br />• Quando nova linha é adicionada no Google Sheets → Cria
						tarefa no Asana
						<br />• Quando recebe email com anexo → Salva anexo no Google Drive
						automaticamente
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						Seu Stack Inicial Recomendado
					</Headline>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-4"
					>
						<Headline size="sm" className="mb-4">
							Kit Essencial Freelancer (100% Grátis)
						</Headline>
						<BulletList
							items={[
								"✅ Gestão de Projetos: Trello (simplicidade) ou Notion (flexibilidade)",
								"✅ Controle de Tempo: Toggl ou Clockify",
								"✅ Finanças: Google Sheets (início) ou Qipu R$ 29 (MEI)",
								"✅ Comunicação: WhatsApp Business + Google Agenda",
								"✅ Armazenamento: Google Drive",
								"✅ Extra: Canva (criar conteúdo), ChatGPT (produtividade)",
							]}
						/>

						<BodyText className="mt-4 text-sm">
							<strong>Custo total:</strong> R$ 0-29/mês
							<br />
							<strong>Tempo economizado:</strong> 8-12 horas/semana
							<br />
							<strong>Receita extra por organização:</strong> R$ 2.000-5.000/mês
							(aceita mais projetos, menos retrabalho)
						</BodyText>
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
							A Savoir Link conecta você a clientes que já estão buscando
							profissionais como você. Compre créditos, desbloqueie os contatos de
							quem publicou um pedido e feche negócio direto - sem depender de
							indicações.
						</BodyText>
						<Link href="/precos">
							<PrimaryButton>Começar na Savoir Link</PrimaryButton>
						</Link>
					</ContentCard>
				</>
			)}

			{/* Article 2: Sistema de Agendamento Online */}
			{post.slug ===
				"sistema-agendamento-online-profissionais-saude-consultoria-2025" && (
				<>
					<BodyText>
						"Que dia você pode?" "Quinta às 15h?" "Não, quinta não posso,
						sexta?" "Sexta só de manhã" "Então terça?" Se você perde 30 minutos
						em vai-e-vem de mensagens para marcar CADA consulta/reunião, você
						precisa de sistema de agendamento online. Este guia compara os 7
						melhores sistemas gratuitos de 2025 para profissionais de saúde e
						consultoria no Brasil.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Neste Guia Completo
						</Headline>
						<BulletList
							items={[
								"Por que você precisa de agendamento online",
								"Funcionalidades essenciais que seu sistema deve ter",
								"Top 7 sistemas gratuitos comparados",
								"Como reduzir no-shows (faltas) em 70%",
								"Implementação passo a passo",
								"Integrações poderosas",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Por Que Profissionais Modernos Precisam de Agendamento Online?
					</Headline>

					<BodyText>
						Pesquisa Brain Inteligência 2024: 72% dos brasileiros preferem
						agendar serviços online vs telefone/WhatsApp. Se você só aceita
						agendamento por mensagem, está perdendo 7 em cada 10 potenciais
						clientes.
					</BodyText>

					<ContentCard variant="default" className="mt-4">
						<BodyText>
							<strong>Benefícios mensuráveis:</strong>
						</BodyText>
						<BulletList
							items={[
								"Economia de tempo: 30min/agendamento → 2min (economiza 10-15h/mês)",
								"Redução de no-shows: De 30% para 5-8% (com lembretes automáticos)",
								"Disponibilidade 24/7: Cliente agenda às 23h, sem você estar online",
								"Profissionalismo: Cliente percebe organização, aumenta confiança",
								"Menos estresse: Sem duplo agendamento, sem esquecer compromissos",
							]}
							className="mt-2"
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Funcionalidades Essenciais Que Seu Sistema Deve Ter
					</Headline>

					<BulletList
						items={[
							"Calendário sincronizado: Integração com Google Calendar/Outlook (evita duplo agendamento)",
							"Lembretes automáticos: SMS/email/WhatsApp 24h e 2h antes",
							"Pagamento antecipado: Integração com Stripe, Mercado Pago, PagSeguro (reduz no-shows)",
							"Reagendamento pelo cliente: Cliente pode remarcar sozinho dentro de regras",
							"Múltiplos serviços: Consulta 60min, avaliação 30min, retorno 45min - cada um com preço/duração",
							"Bloqueio de horários: Almoço, compromissos pessoais não aparecem como disponíveis",
							"Limite de antecedência: Cliente não agenda para amanhã (você precisa de X horas de antecedência)",
						]}
						className="mt-4"
					/>

					<Headline size="sm" className="mt-8 mb-4">
						Top 7 Sistemas de Agendamento Gratuitos Brasil 2025
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							1. AgendaClick - Até 50 Agendamentos/Mês Grátis
						</Headline>
						<BodyText>
							<strong>Plano Gratuito:</strong> 50 agendamentos/mês
							<br />
							<strong>Ideal para:</strong> Profissionais começando, 2-3
							clientes/dia
							<br />
							<br />
							<strong>Funcionalidades:</strong>
						</BodyText>
						<BulletList
							items={[
								"Interface 100% português (Brasil)",
								"Sincronização Google Calendar",
								"Lembretes por email e SMS",
								"Link de agendamento personalizável",
								"Reagendamento e cancelamento pelo cliente",
								"Múltiplos serviços",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>Preço planos pagos:</strong> A partir de R$ 39,90/mês
							(agendamentos ilimitados)
							<br />
							<br />
							<strong>✅ Use se:</strong> Você atende 10-50 clientes/mês, quer
							ferramenta simples brasileira
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Calendly - Agendamentos Ilimitados Grátis
						</Headline>
						<BodyText>
							<strong>Plano Gratuito:</strong> 1 tipo de evento, agendamentos
							ilimitados
							<br />
							<strong>Ideal para:</strong> Consultores, coaches, profissionais
							que atendem online
							<br />
							<br />
							<strong>Funcionalidades:</strong>
						</BodyText>
						<BulletList
							items={[
								"Agendamentos ilimitados (sim, grátis ilimitado!)",
								"Sincronização com Google Calendar, Outlook, iCloud",
								"Integração nativa com Zoom, Google Meet, Microsoft Teams",
								"Lembretes automáticos por email",
								"Perguntas personalizadas (capture info antes da reunião)",
								"Detecta fuso horário automaticamente",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>Limitação plano grátis:</strong> Apenas 1 tipo de evento
							(se você tem 'Consulta' e 'Avaliação', precisa pago)
							<br />
							<br />
							<strong>Preço planos pagos:</strong> US$ 10-16/mês
							<br />
							<br />
							<strong>✅ Use se:</strong> Você tem 1 tipo de atendimento
							principal, atende online, quer ilimitado grátis
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Zoho Bookings - Sincronização Completa
						</Headline>
						<BodyText>
							<strong>Plano Gratuito:</strong> 100 agendamentos/mês, 2
							calendários
							<br />
							<strong>Ideal para:</strong> Profissionais que querem integrações
							avançadas
							<br />
							<br />
							<strong>Funcionalidades:</strong>
						</BodyText>
						<BulletList
							items={[
								"Sincronização bidirecional (mudou no Google = atualiza Zoho, vice-versa)",
								"Múltiplos serviços/durações",
								"Formulários personalizados de intake",
								"Lembretes email e SMS (limitado no free)",
								"Integração com Zoho CRM (se você usa)",
								"Widget para incorporar no seu site",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>Preço planos pagos:</strong> US$ 6-12/mês
							<br />
							<br />
							<strong>✅ Use se:</strong> Até 100 agendamentos/mês, quer
							integrações robustas
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							4. Simples Agenda - Brasileira com Trial Generoso
						</Headline>
						<BodyText>
							<strong>Plano Gratuito:</strong> 35 dias trial completo
							<br />
							<strong>Ideal para:</strong> Profissionais de saúde, estética,
							terapeutas
							<br />
							<br />
							<strong>Funcionalidades:</strong>
						</BodyText>
						<BulletList
							items={[
								"Interface brasileira especializada em saúde",
								"Prontuário eletrônico integrado",
								"Lembretes por WhatsApp (diferencial!)",
								"Controle financeiro (pagamentos, pendências)",
								"Confirmação de presença pelo cliente",
								"Histórico completo de atendimentos",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>Preço após trial:</strong> R$ 39,90-119/mês
							<br />
							<br />
							<strong>✅ Use se:</strong> Você é da área da saúde, quer tudo em
							português, integração WhatsApp é importante
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							5. Cucco - Até 45 Agendamentos/Mês
						</Headline>
						<BodyText>
							<strong>Plano Gratuito:</strong> 45 agendamentos/mês, recursos
							completos
							<br />
							<strong>Ideal para:</strong> Profissionais liberais variados
							<br />
							<br />
							<strong>Diferencial:</strong> Plano gratuito muito generoso (45
							agendamentos é bastante!)
						</BodyText>

						<BodyText className="mt-4">
							<strong>✅ Use se:</strong> Você atende 10-45 clientes/mês e quer
							ferramenta completa grátis
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							6. SuperSaaS - 100% Grátis com Anúncios
						</Headline>
						<BodyText>
							<strong>Plano Gratuito:</strong> Ilimitado (com anúncios pequenos)
							<br />
							<strong>Ideal para:</strong> Orçamento zero absoluto
							<br />
							<br />
							<strong>Funcionalidades:</strong>
						</BodyText>
						<BulletList
							items={[
								"Agendamentos ilimitados",
								"Múltiplos calendários",
								"Customização completa",
								"Integrações (Google Calendar, PayPal)",
							]}
							className="mt-2"
						/>

						<BodyText className="mt-4">
							<strong>Desvantagem:</strong> Interface um pouco datada, anúncios
							aparecem (discretos)
							<br />
							<br />
							<strong>✅ Use se:</strong> Orçamento é absolutamente zero e você
							aceita ver anúncios
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							7. Google Calendar + Calendly - Combinação Simples
						</Headline>
						<BodyText>
							Use Google Calendar como base + Calendly (grátis) para permitir
							agendamento.
							<br />
							<br />
							<strong>Como funciona:</strong> Você configura disponibilidade no
							Calendly, compartilha link, cliente agenda, vai direto pro Google
							Calendar.
							<br />
							<br />
							<strong>✅ Vantagens:</strong> Super simples, rápido de configurar
							(30min), ilimitado
							<br />
							<strong>❌ Desvantagens:</strong> Sem lembretes SMS/WhatsApp, sem
							pagamento integrado
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Comparativo: Qual Sistema Escolher?
					</Headline>

					<ContentCard variant="accent" accentPosition="left" className="mt-4">
						<table className="w-full text-xs">
							<thead>
								<tr className="border-outline-variant border-b">
									<th className="pr-2 pb-2 text-left">Sistema</th>
									<th className="pr-2 pb-2 text-left">Limite Grátis</th>
									<th className="pr-2 pb-2 text-left">Diferencial</th>
									<th className="pb-2 text-left">Melhor Para</th>
								</tr>
							</thead>
							<tbody className="text-xs">
								<tr className="border-outline-variant/30 border-b">
									<td className="py-2 pr-2">AgendaClick</td>
									<td className="py-2 pr-2">50/mês</td>
									<td className="py-2 pr-2">100% português BR</td>
									<td className="py-2">Iniciantes</td>
								</tr>
								<tr className="border-outline-variant/30 border-b">
									<td className="py-2 pr-2">Calendly</td>
									<td className="py-2 pr-2">Ilimitado</td>
									<td className="py-2 pr-2">Grátis ilimitado</td>
									<td className="py-2">Consultores online</td>
								</tr>
								<tr className="border-outline-variant/30 border-b">
									<td className="py-2 pr-2">Zoho Bookings</td>
									<td className="py-2 pr-2">100/mês</td>
									<td className="py-2 pr-2">Integrações</td>
									<td className="py-2">Tech savvy</td>
								</tr>
								<tr className="border-outline-variant/30 border-b">
									<td className="py-2 pr-2">Simples Agenda</td>
									<td className="py-2 pr-2">35 dias trial</td>
									<td className="py-2 pr-2">WhatsApp integrado</td>
									<td className="py-2">Saúde/estética</td>
								</tr>
								<tr className="border-outline-variant/30 border-b">
									<td className="py-2 pr-2">Cucco</td>
									<td className="py-2 pr-2">45/mês</td>
									<td className="py-2 pr-2">Generoso</td>
									<td className="py-2">Profissionais liberais</td>
								</tr>
								<tr className="border-outline-variant/30 border-b">
									<td className="py-2 pr-2">SuperSaaS</td>
									<td className="py-2 pr-2">Ilimitado</td>
									<td className="py-2 pr-2">Grátis total</td>
									<td className="py-2">Orçamento zero</td>
								</tr>
								<tr>
									<td className="py-2 pr-2">Google+Calendly</td>
									<td className="py-2 pr-2">Ilimitado</td>
									<td className="py-2 pr-2">Mais simples</td>
									<td className="py-2">Setup rápido</td>
								</tr>
							</tbody>
						</table>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Estratégias para Reduzir No-Shows (Faltas)
					</Headline>

					<BodyText>
						No-show rate Brasil: 25-30% (1 em cada 4 clientes não aparece). Com
						estratégias certas, você reduz para 5-8%.
					</BodyText>

					<BulletList
						items={[
							"Confirmação automática 24h antes: Email/SMS 'Confirme presença clicando aqui' - reduz no-show 40%",
							"Lembrete 2h antes: Segundo lembrete no dia - reduz mais 20%",
							"Pagamento antecipado ou taxa de reserva: R$ 50-100 que desconta da consulta - reduz no-show 70% (funciona MUITO)",
							"Política de cancelamento clara: 'Cancelamento com menos de 24h: cobrança de 50%' - deixe isso claro",
							"Remarketing de faltosos: Quem faltou sem avisar = mensagem 'Sentimos sua falta, reagende aqui' + política mais rígida",
						]}
						className="mt-4"
					/>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Label className="mb-2 block font-bold text-sm">
							TÉCNICA AVANÇADA: CONFIRMAR PRESENÇA OBRIGATÓRIA
						</Label>
						<BodyText>
							Sistema envia mensagem 24h antes: &quot;Confirme sua presença
							clicando AQUI até 18h de hoje, caso contrário agendamento é
							cancelado&quot;. Parece duro, mas funciona. No-show cai para menos
							de 5% e você não fica esperando quem não vem.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Implementação Passo a Passo
					</Headline>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							PASSO 1: CONFIGURAÇÃO INICIAL (30-60 MIN)
						</Label>
						<BulletList
							items={[
								"Crie conta no sistema escolhido",
								"Conecte Google Calendar/Outlook (sincronização bidirecional)",
								"Configure seus horários disponíveis (ex: Seg-Sex 9h-18h, intervalo 12h-14h)",
								"Bloqueie horários não-profissionais (compromissos pessoais, almoço)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							PASSO 2: CADASTRO DE SERVIÇOS
						</Label>
						<BulletList
							items={[
								"Liste tipos de atendimento: Consulta Inicial (60min, R$ 200), Retorno (30min, R$ 120), Avaliação (45min, R$ 150)",
								"Defina duração de cada um",
								"Configure buffer entre atendimentos (10-15min para você respirar)",
								"Defina antecedência mínima (ex: cliente só agenda com 24h de antecedência mínima)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							PASSO 3: PERSONALIZAÇÃO DE LEMBRETES
						</Label>
						<BodyText>
							Configure mensagens automáticas:
							<br />
							<br />
							<strong>24h antes:</strong> &quot;Olá [Nome], lembrete: você tem
							consulta comigo amanhã às [Hora]. Confirme presença clicando aqui.
							Local: [Endereço]. Dúvidas: [WhatsApp]&quot;
							<br />
							<br />
							<strong>2h antes:</strong> &quot;Lembrete: consulta hoje às
							[Hora]. Te espero! [Nome Profissional]&quot;
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Label className="mb-2 block font-bold text-sm text-primary">
							PASSO 4: DIVULGAÇÃO DO LINK
						</Label>
						<BulletList
							items={[
								"Crie link curto personalizado (ex: calendly.com/seu-nome)",
								"Adicione na bio do Instagram: 'Agende consulta: [link]'",
								"Assinatura de email com botão 'Agendar Consulta'",
								"WhatsApp: Mensagem automática 'Para agendar: [link]'",
								"Site: Botão bem visível 'Agendar Online'",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Integrações Poderosas
					</Headline>

					<BulletList
						items={[
							"Google Meet/Zoom: Cria link de videochamada automaticamente, envia para cliente",
							"WhatsApp Business: Lembretes via WhatsApp (Simples Agenda, ou via Zapier/Make)",
							"CRM: Novo agendamento = novo contato no CRM automaticamente",
							"Mercado Pago/Stripe: Pagamento no ato do agendamento (reduz no-show drasticamente)",
							"Email marketing: Após consulta, adiciona cliente na lista de email para conteúdo de valor",
						]}
						className="mt-4"
					/>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-12 text-center"
					>
						<Headline size="sm" className="mb-4">
							Encontre Clientes na Savoir Link
						</Headline>
						<BodyText className="mb-6">
							A Savoir Link conecta você a clientes que já estão buscando seu
							serviço. Compre créditos, desbloqueie os contatos de quem publicou
							um pedido e combine o atendimento diretamente com o cliente - por
							telefone, WhatsApp ou e-mail.
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
