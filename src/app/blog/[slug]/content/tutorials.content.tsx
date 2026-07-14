import Link from "next/link";
import { BulletList } from "~/components/ui/bullet-list";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

export function TutorialsContent({ post }: { post: BlogPost }) {
	return (
		<>
			{post.slug === "como-escolher-profissional-qualificado" && (
				<>
					<BodyText>
						Escolher o profissional certo para o seu projeto pode ser a
						diferença entre um resultado excepcional e uma experiência
						frustrante. Neste guia, vamos mostrar os critérios essenciais que
						você deve considerar.
					</BodyText>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							1. Verifique as Credenciais
						</h2>
						<BodyText className="mb-4">
							Certifique-se de que o profissional possui as qualificações
							necessárias para executar o serviço:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Certificações e diplomas relevantes",
								"Registro em órgãos de classe (quando aplicável)",
								"Experiência comprovada na área",
								"Portfolio ou trabalhos anteriores",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							2. Peça Referências e Portfólio
						</h2>
						<BodyText className="mb-4">
							Quando um profissional entrar em contato com você, peça provas
							concretas do trabalho dele. Preste atenção em:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Referências de clientes anteriores que você possa contatar",
								"Portfólio com exemplos de trabalhos já concluídos",
								"Casos parecidos com o que você precisa",
								"Clareza ao explicar como conduziria o seu projeto",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							3. Compare os Orçamentos Recebidos
						</h2>
						<BodyText>
							Depois de publicar seu pedido, vários profissionais podem entrar
							em contato com propostas diferentes. O preço mais baixo nem sempre
							é a melhor escolha. Considere o custo-benefício avaliando a
							qualificação do profissional, a qualidade esperada e o prazo de
							entrega. Desconfie de preços muito abaixo da média do mercado.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							4. Comunique-se Antes de Contratar
						</h2>
						<BodyText className="mb-4">
							Tire todas as suas dúvidas antes de fechar o contrato:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Prazo de execução do serviço",
								"Materiais incluídos ou não no orçamento",
								"Política de garantia ou revisão",
								"Forma de pagamento e parcelamento",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-8">
						Seguindo essas dicas, você aumenta significativamente suas chances
						de ter uma experiência positiva e resultados de qualidade.
						Lembre-se: investir tempo na escolha é investir na tranquilidade do
						seu projeto!
					</BodyText>
				</>
			)}

			{post.slug === "seguranca-pagamentos-online" && (
				<>
					<BodyText>
						A segurança em pagamentos online é fundamental para proteger suas
						informações financeiras e garantir transações tranquilas. Vamos
						entender como funciona.
					</BodyText>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Como Funciona a Proteção
						</h2>
						<BodyText className="mb-4">
							Na Savoir Link, utilizamos o Pagar.me, uma das plataformas mais
							seguras do Brasil, para processar os pagamentos da plataforma (a
							taxa de publicação do pedido, para clientes, e a compra de créditos,
							para profissionais). Isso significa que:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Seus dados são criptografados de ponta a ponta",
								"Não armazenamos informações de cartão de crédito",
								"Todas as transações são monitoradas 24/7",
								"Conformidade com PCI-DSS (padrão de segurança de cartões)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Sinais de Uma Transação Segura
						</h2>
						<BulletList
							variant="check"
							items={[
								"URL começa com HTTPS (cadeado na barra de endereço)",
								"Certificado SSL válido",
								"Página de pagamento no domínio oficial",
								"Solicitação de código de segurança (CVV)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Dicas de Segurança
						</h2>
						<BulletList
							variant="dash"
							items={[
								"Nunca compartilhe sua senha com terceiros",
								"Use senhas fortes e únicas",
								"Ative autenticação em dois fatores quando disponível",
								"Monitore regularmente seu extrato bancário",
								"Evite fazer compras em redes Wi-Fi públicas",
							]}
						/>
					</ContentCard>
				</>
			)}

			{/* Tutorial 1: Primeiro Agendamento */}
			{post.slug === "primeiro-agendamento-guia-completo" && (
				<>
					<BodyText>
						Publicar seu primeiro pedido na Savoir Link é simples e rápido.
						Este guia completo vai te mostrar cada passo, desde a criação da
						conta até a publicação do pedido para que profissionais qualificados
						entrem em contato com você.
					</BodyText>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Passo 1: Crie Sua Conta
						</h2>
						<BodyText className="mb-4">
							Para começar, você precisa criar uma conta gratuita na plataforma:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								'Clique em "Entrar" no menu superior',
								"Use login com Google para acesso rápido",
								"Suas informações básicas serão importadas automaticamente",
								"Você será redirecionado para a página inicial já autenticado",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Passo 2: Acesse /publicar e Descreva o Que Precisa
						</h2>
						<BodyText className="mb-4">
							Na Savoir Link você não procura profissionais um a um: você publica
							um pedido e eles vêm até você. Comece descrevendo o serviço:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Acesse a página /publicar para criar seu pedido",
								"Escreva um título claro (ex.: 'Pintura de apartamento de 2 quartos')",
								"Detalhe na descrição o que precisa, o contexto e suas expectativas",
								"Quanto mais claro o pedido, melhores serão os contatos que receberá",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Passo 3: Defina Orçamento, Categoria e Localização
						</h2>
						<BodyText className="mb-4">
							Complete as informações que ajudam os profissionais certos a
							encontrar seu pedido:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Orçamento: informe um valor ou faixa que você tem em mente",
								"Categoria: escolha a área que melhor representa o serviço",
								"Localização: cidade e região onde o serviço será realizado",
								"Prazo ou urgência, se houver",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Passo 4: Deixe Seus Dados de Contato
						</h2>
						<BodyText>
							É por esses dados que os profissionais vão falar com você depois de
							desbloquear o seu pedido. Informe seu nome, telefone (WhatsApp é
							opcional, mas facilita) e e-mail. Seus dados de contato só ficam
							visíveis para os profissionais que optarem por desbloquear o seu
							pedido.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Passo 5: Escolha a Duração da Publicação
						</h2>
						<BodyText className="mb-4">
							Antes de publicar, escolha por quanto tempo seu pedido ficará
							ativo. É uma taxa única de publicação:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"7 dias — R$ 5,00",
								"15 dias — R$ 9,00",
								"30 dias — R$ 15,00",
								"Quanto maior o período, mais tempo os profissionais têm para te encontrar",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Nota:</strong> essa taxa é apenas para publicar o pedido. O
							valor do serviço é combinado e pago diretamente com o profissional.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Passo 6: Pague a Taxa de Publicação
						</h2>
						<BodyText className="mb-4">
							Processamos o pagamento de forma 100% segura via Pagar.me:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Você será redirecionado para a página de checkout seguro",
								"Escolha entre cartão de crédito ou Pix",
								"Seus dados são criptografados e nunca armazenados por nós",
								"Após a confirmação, você receberá um e-mail com o link de gerenciamento",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left">
						<h2 className="mb-4 font-bold text-on-surface text-xl uppercase">
							O Que Acontece Depois?
						</h2>
						<BulletList
							variant="check"
							items={[
								"Seu pedido fica ativo e visível para os profissionais da área",
								"Profissionais interessados desbloqueiam e entram em contato direto com você",
								"Vários profissionais podem te procurar — compare as propostas",
								"Negocie preço e prazo diretamente com quem preferir",
								"Pelo link de gerenciamento você acompanha o status e pode encerrar ou renovar o pedido",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-8">
						Pronto! Agora você sabe como publicar seu primeiro pedido. Descreva
						bem o que precisa, informe seu orçamento e aguarde: profissionais
						qualificados entrarão em contato com você.
					</BodyText>
				</>
			)}

			{/* Tutorial 2: Analisar Perfil */}
			{post.slug === "como-analisar-perfil-profissional" && (
				<>
					<BodyText>
						Escolher o profissional certo é fundamental para o sucesso do seu
						projeto. Depois de publicar seu pedido, vários profissionais podem
						entrar em contato. Este guia vai ensinar você a avaliar cada um de
						forma eficaz e tomar decisões informadas.
					</BodyText>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							1. Referências e Histórico
						</h2>
						<BodyText className="mb-4">
							Ao ser contatado por um profissional, peça provas do trabalho dele.
							Preste atenção em:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Referências: clientes anteriores que você possa contatar",
								"Tempo de experiência e quantidade de trabalhos parecidos já feitos",
								"Registro profissional (CRP, OAB, CREA, etc.), quando aplicável",
								"Consistência entre o que ele fala e as provas apresentadas",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Atenção:</strong> desconfie de quem não consegue apresentar
							nenhuma referência ou exemplo de trabalho anterior.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							2. Converse e Faça Perguntas
						</h2>
						<BodyText className="mb-4">
							Vá além do orçamento e converse com o profissional antes de fechar:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Pergunte como ele conduziria o seu caso, do início ao fim",
								"Verifique se ele entendeu bem o que você precisa",
								"Observe como ele lida com dúvidas e imprevistos",
								"Peça exemplos de projetos similares ao seu",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							3. Portfólio e Trabalhos Anteriores
						</h2>
						<BodyText className="mb-4">
							O portfólio que o profissional compartilha revela a qualidade do
							trabalho dele:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Variedade de trabalhos demonstra experiência diversificada",
								"Qualidade e apresentação indicam atenção aos detalhes",
								"Exemplos similares ao que você precisa mostram experiência relevante",
								"Imagens de antes/depois demonstram o impacto do trabalho",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							4. Clareza da Proposta
						</h2>
						<BodyText>
							Uma proposta bem elaborada indica um profissional sério. Procure
							por: clareza sobre o que está incluído no serviço, menção a prazos
							e processo de trabalho, informações sobre revisões e garantias, e
							transparência sobre limitações ou exclusões.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							5. Agilidade na Resposta
						</h2>
						<BodyText>
							Repare em quanto tempo o profissional leva para responder às suas
							mensagens. Isso é crucial para saber se ele será comunicativo
							durante o projeto. Profissionais que respondem em poucas horas
							tendem a ter melhor comunicação.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							6. Localização e Disponibilidade
						</h2>
						<BodyText className="mb-4">Verifique se:</BodyText>
						<BulletList
							variant="dash"
							items={[
								"O profissional atende sua região (se necessário presencialmente)",
								"Há disponibilidade nas datas que você precisa",
								"Os horários de trabalho são compatíveis com os seus",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left">
						<h2 className="mb-4 font-bold text-on-surface text-xl uppercase">
							Sinais de Alerta
						</h2>
						<BulletList
							variant="dash"
							items={[
								"Recusa em apresentar referências ou exemplos de trabalho",
								"Respostas muito vagas ou genéricas sobre o seu caso",
								"Preços significativamente abaixo do mercado",
								"Falta de portfólio ou de qualquer prova de experiência",
								"Pressa excessiva para fechar antes de esclarecer detalhes",
								"Respostas agressivas ou defensivas às suas perguntas",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-8">
						Seguindo esses critérios de análise, você estará muito mais
						preparado para escolher o profissional ideal. Lembre-se: quando em
						dúvida, converse bastante e peça referências antes de fechar
						negócio!
					</BodyText>
				</>
			)}

			{/* Tutorial 3: Sistema de Pagamentos */}
			{post.slug === "sistema-pagamentos-seguro" && (
				<>
					<BodyText>
						A segurança dos seus pagamentos é nossa prioridade máxima. Vamos
						explicar como funciona nosso sistema de pagamentos e por que você
						pode confiar completamente.
					</BodyText>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Integração com Pagar.me
						</h2>
						<BodyText className="mb-4">
							Utilizamos o Pagar.me, uma das plataformas de pagamento mais
							seguras e confiáveis do Brasil:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Certificação PCI-DSS Level 1 (máximo nível de segurança)",
								"Criptografia de ponta a ponta em todas as transações",
								"Compliance com LGPD e regulamentações do Banco Central",
								"Monitoramento 24/7 contra fraudes",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Métodos de Pagamento Disponíveis
						</h2>
						<BodyText className="mb-4">Aceitamos:</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Cartão de Crédito (Visa, Mastercard, Elo, Amex, Hipercard)",
								"Cartão de Débito (principais bandeiras)",
								"Pix (aprovação instantânea)",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Importante:</strong> Nunca armazenamos dados do seu
							cartão. Todas as informações sensíveis são processadas diretamente
							pelo Pagar.me.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Como Funciona o Fluxo de Pagamento
						</h2>
						<BodyText className="mb-4">
							Para o cliente que publica um pedido:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"1. Você descreve o pedido em /publicar",
								"2. Escolhe a duração da publicação (7, 15 ou 30 dias)",
								"3. É redirecionado para o checkout seguro do Pagar.me (HTTPS)",
								"4. Escolhe o método de pagamento e insere os dados",
								"5. O pagamento é processado em tempo real",
								"6. Você recebe confirmação por e-mail com o link de gerenciamento",
								"7. Seu pedido fica ativo e visível para os profissionais",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Dois Tipos de Pagamento na Plataforma
						</h2>
						<BodyText>
							Na Savoir Link, os únicos pagamentos feitos na plataforma são a
							taxa de publicação (paga pelo cliente para publicar o pedido) e a
							compra de créditos (feita pelo profissional para desbloquear
							contatos). O valor do serviço em si é negociado e pago diretamente
							entre cliente e profissional, fora da plataforma. Ou seja, a
							Savoir Link cobra pela conexão, não pela transação do serviço.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Créditos para Profissionais
						</h2>
						<BodyText className="mb-4">
							Profissionais compram créditos na carteira (sem mensalidade) e
							gastam 1 crédito para desbloquear o contato de cada cliente:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"5 créditos — R$ 49,90",
								"15 créditos — R$ 129,90",
								"40 créditos — R$ 299,90",
								"A compra é feita via checkout seguro do Pagar.me, sem assinatura",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Taxa de Publicação e Créditos
						</h2>
						<BodyText className="mb-4">
							Vale entender as regras de cada pagamento da plataforma:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Taxa de publicação do pedido: 7 dias R$ 5,00, 15 dias R$ 9,00 ou 30 dias R$ 15,00",
								"É uma taxa única por pedido; renovar o pedido gera uma nova publicação",
								"Os créditos comprados pelo profissional não são reembolsáveis",
								"O valor do serviço é combinado e pago diretamente com o profissional",
							]}
						/>
						<BodyText className="mt-4">
							Todos os pagamentos da plataforma são processados com segurança
							pelo Pagar.me.
						</BodyText>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left">
						<h2 className="mb-4 font-bold text-on-surface text-xl uppercase">
							Dicas de Segurança
						</h2>
						<BulletList
							variant="check"
							items={[
								"Sempre verifique se a URL começa com HTTPS e tem o cadeado",
								"Nunca compartilhe sua senha com terceiros",
								"Use senhas fortes e únicas",
								"Monitore seu extrato bancário regularmente",
								"Em caso de suspeita de fraude, entre em contato imediatamente",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-8">
						Com essas camadas de segurança, você pode publicar pedidos e
						comprar créditos na Savoir Link com total tranquilidade. Qualquer
						dúvida sobre pagamentos, nossa equipe de suporte está à disposição!
					</BodyText>
				</>
			)}

			{/* Tutorial 4: Sistema de Mensagens */}
			{post.slug === "sistema-mensagens-comunicacao" && (
				<>
					<BodyText>
						Na Savoir Link, depois que você publica um pedido, os profissionais
						interessados entram em contato diretamente com você. A comunicação
						acontece fora da plataforma, por telefone, WhatsApp ou e-mail. Veja
						como aproveitar bem esse contato.
					</BodyText>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Como os Profissionais Entram em Contato
						</h2>
						<BodyText className="mb-4">Funciona assim:</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Você publica seu pedido com os dados de contato",
								"Profissionais interessados desbloqueiam o seu contato",
								"Eles falam com você diretamente por telefone, WhatsApp ou e-mail",
								"Vários profissionais podem te procurar — compare as propostas",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Canais de Contato
						</h2>
						<BodyText className="mb-4">
							Os profissionais falam com você pelos canais que você informou ao
							publicar o pedido:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Telefone: para uma conversa rápida e direta",
								"WhatsApp: prático para enviar fotos, áudios e detalhes",
								"E-mail: útil para registrar propostas e orçamentos por escrito",
								"Mantenha seus dados de contato sempre corretos e atualizados",
								"Responda com atenção apenas os profissionais que te interessarem",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Melhores Práticas para Clientes
						</h2>
						<BodyText className="mb-4">
							Para uma comunicação eficaz com profissionais:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Seja claro e específico sobre suas necessidades",
								"Forneça todas as informações relevantes de uma vez",
								"Use um tom respeitoso e profissional",
								"Responda em tempo hábil para não atrasar o projeto",
								"Confirme o recebimento de informações importantes",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Estruturando um Bom Briefing
						</h2>
						<BodyText className="mb-4">
							Ao contatar um profissional pela primeira vez, inclua:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Descrição clara do projeto ou serviço necessário",
								"Objetivos que você quer alcançar",
								"Prazo esperado para conclusão",
								"Orçamento disponível (se aplicável)",
								"Exemplos ou referências (se tiver)",
								"Dúvidas específicas sobre o serviço",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							O Que Alinhar Antes de Fechar
						</h2>
						<BodyText className="mb-4">
							<strong>Esclareça bem quando:</strong>
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Tiver dúvidas específicas sobre o escopo do serviço",
								"Precisar negociar prazos ou valores",
								"O projeto for complexo e precisar de esclarecimentos",
								"Quiser verificar disponibilidade em datas específicas",
							]}
						/>
						<BodyText className="mt-4 mb-4">
							<strong>Pode fechar quando:</strong>
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"O escopo do serviço está claro e atende suas necessidades",
								"O preço e o prazo são adequados",
								"Você já verificou as referências e confia no profissional",
								"Combinaram por escrito o que será entregue e quando",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left">
						<h2 className="mb-4 font-bold text-on-surface text-xl uppercase">
							Etiqueta e Boas Práticas
						</h2>
						<BulletList
							variant="check"
							items={[
								"Compartilhe apenas os dados necessários para orçar o serviço",
								"Combine escopo, prazo e valor de forma clara antes de fechar",
								"Não use linguagem ofensiva ou desrespeitosa",
								"Respeite o horário comercial para contatos não urgentes",
								"Mantenha as conversas focadas no serviço que você precisa",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-8">
						Uma comunicação bem conduzida é fundamental para o sucesso do seu
						projeto. Deixar tudo claro previne mal-entendidos e garante
						resultados que atendem suas expectativas!
					</BodyText>
				</>
			)}

			{/* Tutorial 5: Guia de Avaliações */}
			{post.slug === "guia-avaliacoes-reviews" && (
				<>
					<BodyText>
						Depois de publicar seu pedido, vários profissionais podem entrar em
						contato. Como não existe um sistema de notas na plataforma, é você
						quem avalia cada profissional antes de fechar. Aprenda a fazer essa
						análise com segurança.
					</BodyText>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Por Que Avaliar Antes de Fechar
						</h2>
						<BulletList
							variant="check"
							items={[
								"Ajuda você a escolher o profissional certo para o seu caso",
								"Reduz o risco de contratar quem não tem a experiência necessária",
								"Evita surpresas com prazo, escopo ou preço",
								"Dá mais segurança para negociar um serviço que será pago direto",
								"Aumenta as chances de um bom resultado final",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							O Que Verificar Primeiro
						</h2>
						<BodyText className="mb-4">
							Assim que um profissional entrar em contato, comece checando:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Se ele entendeu bem o que você descreveu no pedido",
								"Referências de clientes anteriores que você possa contatar",
								"Portfólio ou exemplos de trabalhos parecidos com o seu",
								"Se apresenta um orçamento claro e dentro do combinado",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Confira o Registro Profissional
						</h2>
						<BodyText className="mb-4">
							Para serviços que exigem habilitação, confirme se o profissional
							tem registro ativo no conselho da categoria:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Psicólogos: registro no CRP",
								"Advogados: inscrição na OAB",
								"Engenheiros e técnicos: registro no CREA/CFT",
								"Arquitetos: registro no CAU",
								"Na dúvida, peça o número do registro e confira no site do conselho",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Compare os Orçamentos Recebidos
						</h2>
						<BodyText className="mb-4">
							Como vários profissionais podem te procurar, compare as propostas
							levando em conta:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Escopo: o que exatamente está incluído em cada orçamento?",
								"Qualidade: a experiência e as referências justificam o preço?",
								"Comunicação: o profissional foi responsivo e claro?",
								"Prazo: o tempo de entrega proposto atende sua necessidade?",
								"Custo-benefício: o preço faz sentido para o que será entregue?",
								"Confiança: você se sentiu seguro na conversa com ele?",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Avalie a Comunicação e a Clareza
						</h2>
						<BodyText className="mb-4">
							<strong>Um bom sinal na prática:</strong>
						</BodyText>
						<BodyText>
							"A Maria respondeu rápido, fez perguntas relevantes para entender
							o que eu precisava e me enviou um orçamento detalhado explicando o
							que estava incluído. Mostrou fotos de trabalhos parecidos e me
							passou o contato de dois clientes anteriores. Deixou o prazo bem
							claro e combinou tudo por escrito antes de começar. Essa clareza
							me deu confiança para fechar com ela."
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Sinais de Alerta
						</h2>
						<BulletList
							variant="dash"
							items={[
								"Preços muito abaixo da realidade do mercado",
								"Recusa em apresentar referências ou exemplos de trabalho",
								"Respostas vagas sobre escopo, prazo ou forma de trabalho",
								"Pressa excessiva para fechar antes de esclarecer detalhes",
								"Pedido de pagamento integral adiantado sem qualquer garantia",
								"Falta de registro profissional quando ele é obrigatório",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left">
						<h2 className="mb-4 font-bold text-on-surface text-xl uppercase">
							Combine Escopo e Prazo por Escrito
						</h2>
						<BodyText className="mb-4">
							Antes de fechar, deixe tudo registrado (por mensagem ou e-mail):
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"O que exatamente será entregue (escopo detalhado)",
								"Valor total, forma e condições de pagamento",
								"Prazo de execução e datas importantes",
								"Quantas revisões ou ajustes estão incluídos",
								"O que fazer em caso de imprevisto",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-8">
						Avaliar bem os profissionais antes de fechar é o que garante uma boa
						contratação. Ao dedicar alguns minutos para comparar propostas e
						verificar referências, você contrata com muito mais segurança!
					</BodyText>
				</>
			)}

			{/* Tutorial 6: Criar Primeiro Serviço */}
			{post.slug === "criar-primeiro-servico" && (
				<>
					<BodyText>
						Este é o guia completo para profissionais que querem começar a
						conseguir clientes na Savoir Link. Aqui você não cria anúncios de
						serviço: você compra créditos e desbloqueia os contatos de clientes
						que já estão buscando o que você oferece.
					</BodyText>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Passo 1: Acesse /app e Faça Login
						</h2>
						<BodyText className="mb-4">
							Primeiro, entre na área do profissional:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Acesse /app e clique em Entrar",
								"Use login com Google para acesso rápido",
								"Suas informações básicas serão importadas automaticamente",
								"Você será direcionado para o painel do profissional",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Passo 2: Complete Seu Perfil
						</h2>
						<BodyText className="mb-4">
							Um perfil completo passa mais confiança quando você entra em
							contato com o cliente:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Adicione uma foto profissional de alta qualidade",
								"Escreva um resumo atraente sobre sua experiência",
								"Preencha suas áreas de especialização e sua região de atendimento",
								"Tenha um portfólio pronto para compartilhar com os clientes",
								"Confira se seus dados de contato estão corretos",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Passo 3: Explore os Leads em /app/leads
						</h2>
						<BodyText className="mb-4">
							Veja os pedidos publicados pelos clientes e encontre os que
							combinam com você:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Acesse /app/leads para ver os pedidos disponíveis",
								"Busque e filtre por categoria e localização",
								"Leia o título, a descrição e o orçamento de cada pedido",
								"Identifique os pedidos que você tem condições de atender",
								"O contato do cliente fica oculto até você desbloquear o lead",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Importante:</strong> os leads são não exclusivos — vários
							profissionais podem desbloquear o mesmo pedido.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Passo 4: Compre Créditos na Carteira
						</h2>
						<BodyText className="mb-4">
							Para desbloquear contatos, você precisa de créditos. Acesse a
							carteira em /app/wallet:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Acesse /app/wallet para comprar créditos",
								"Escolha um dos pacotes disponíveis",
								"Pague via checkout seguro do Pagar.me (cartão ou Pix)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Pacotes de Créditos
						</h2>
						<BodyText className="mb-4">
							<strong>Como funciona:</strong> cada crédito desbloqueia o contato
							de 1 cliente. Não há mensalidade — você compra créditos quando
							quiser.
						</BodyText>
						<BodyText className="mb-4">
							<strong>5 créditos — R$ 49,90:</strong> ideal para começar e testar
							a plataforma.
						</BodyText>
						<BodyText className="mb-4">
							<strong>15 créditos — R$ 129,90:</strong> melhor custo por crédito
							para quem já atende com frequência.
						</BodyText>
						<BodyText className="mb-4">
							<strong>40 créditos — R$ 299,90:</strong> o pacote mais vantajoso
							para quem quer volume de contatos.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Sem mensalidade:</strong> os créditos não expiram por
							assinatura; você usa conforme sua demanda.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Saldo e histórico:</strong> acompanhe tudo na carteira, em
							/app/wallet.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Como Escolher os Melhores Leads
						</h2>
						<BodyText className="mb-4">
							Gastar créditos com estratégia aumenta seu retorno:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Priorize pedidos dentro da sua especialidade e região",
								"Leia a descrição com atenção antes de desbloquear",
								"Verifique se o orçamento do cliente é compatível com seu serviço",
								"Prefira pedidos recentes e bem detalhados",
								"Desbloqueie os contatos que você realmente pretende atender",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Dica:</strong> para conquistar seus primeiros clientes,
							capriche no primeiro contato e ofereça um orçamento claro e justo.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Passo 5: Desbloqueie o Contato e Fale com o Cliente
						</h2>
						<BodyText className="mb-4">
							Com créditos disponíveis, é hora de entrar em contato:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								'Abra o lead escolhido e clique em "Desbloquear contato"',
								"1 crédito é debitado e você vê o telefone, WhatsApp e e-mail do cliente",
								"Entre em contato diretamente e apresente sua proposta",
								"Acompanhe seus contatos desbloqueados em /app/unlocks",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Nota:</strong> o serviço e o pagamento são combinados
							diretamente entre você e o cliente, fora da plataforma.
						</BodyText>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left">
						<h2 className="mb-4 font-bold text-on-surface text-xl uppercase">
							Checklist para Começar
						</h2>
						<BulletList
							variant="check"
							items={[
								"✓ Login feito em /app",
								"✓ Perfil completo com foto profissional",
								"✓ Áreas de atuação e região preenchidas",
								"✓ Portfólio pronto para compartilhar",
								"✓ Créditos comprados na carteira (/app/wallet)",
								"✓ Leads relevantes identificados em /app/leads",
								"✓ Primeiro contato desbloqueado",
								"✓ Orçamento claro preparado para enviar ao cliente",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-8">
						Parabéns! Agora você sabe como conseguir clientes na Savoir Link.
						Compre créditos, desbloqueie os contatos dos clientes que buscam seu
						serviço e construa sua reputação com um excelente atendimento e
						indicações!
					</BodyText>
				</>
			)}

			{/* Tutorial 7: Google Calendar */}
			{post.slug === "integracao-google-calendar" && (
				<>
					<BodyText>
						Quando você começa a desbloquear leads na Savoir Link, vários
						contatos chegam ao mesmo tempo. Manter uma agenda organizada com suas
						próprias ferramentas é o que garante que você não perca nenhum
						retorno nem nenhum compromisso com clientes.
					</BodyText>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Por Que Organizar Sua Agenda?
						</h2>
						<BulletList
							variant="check"
							items={[
								"Você não perde o timing de retornar para os clientes contatados",
								"Evita esquecer visitas, orçamentos e prazos combinados",
								"Ajuda a priorizar os leads com maior chance de fechar",
								"Evita conflitos de horário entre atendimentos",
								"Transmite mais profissionalismo ao cliente",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Passo 1: Escolha uma Ferramenta de Agenda
						</h2>
						<BodyText className="mb-4">
							Use a ferramenta que você já domina para controlar seus
							compromissos:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Google Calendar, Apple Calendar ou o calendário do seu celular",
								"Um app de tarefas para acompanhar retornos pendentes",
								"Uma planilha simples, se preferir algo básico",
								"O importante é ter um único lugar para tudo",
								"Deixe a ferramenta sincronizada entre celular e computador",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Passo 2: Registre Cada Lead Desbloqueado
						</h2>
						<BodyText className="mb-4">
							Assim que gastar um crédito para desbloquear um contato, anote:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"O nome do cliente e o que ele precisa",
								"Os canais de contato (telefone, WhatsApp, e-mail)",
								"Quando você fez ou pretende fazer o primeiro contato",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Dica:</strong> você pode consultar seus contatos
							desbloqueados a qualquer momento em /app/unlocks.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Rotina ao Receber um Novo Lead
						</h2>
						<BodyText className="mb-4">
							Uma rotina simples evita que oportunidades esfriem:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Desbloqueou o contato → agende um retorno o quanto antes",
								"Enviou o orçamento → marque um lembrete para dar seguimento",
								"Cliente pediu para retornar depois → registre a data combinada",
								"Fechou o serviço → bloqueie o horário do atendimento na agenda",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							O Que Anotar de Cada Contato
						</h2>
						<BodyText className="mb-4">
							Para cada lead, mantenha um registro com:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Nome do cliente e serviço solicitado",
								"Data e horário do compromisso ou do retorno",
								"Localização, se o atendimento for presencial",
								"Detalhes do que foi combinado no contato",
								"Valor do orçamento enviado",
								"Status atual (a contatar, aguardando resposta, fechado)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Configure Lembretes para os Retornos
						</h2>
						<BodyText className="mb-4">
							Deixe a sua ferramenta de agenda avisar você na hora certa:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Crie um evento ou tarefa para cada retorno combinado",
								"Configure lembretes (ex.: 1 dia antes, 1 hora antes)",
								"Escolha o tipo de aviso (notificação, e-mail)",
								"Reserve horários fixos do dia para responder aos novos leads",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left">
						<h2 className="mb-4 font-bold text-on-surface text-xl uppercase">
							Boas Práticas de Organização
						</h2>
						<BodyText className="mb-4">
							Para manter tudo sob controle:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Reserve um momento do dia para revisar /app/leads e /app/unlocks",
								"Responda rápido: leads são não exclusivos e outros também os contatam",
								"Não deixe retornos combinados sem um lembrete na agenda",
								"Revise semanalmente quais contatos ainda estão em aberto",
								"Cancele lembretes de leads que já foram fechados ou descartados",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-8">
						Com uma agenda bem organizada, você aproveita melhor cada crédito
						investido, responde na hora certa e aumenta suas chances de fechar
						negócio com os clientes que buscam o seu serviço!
					</BodyText>
				</>
			)}

			{/* Tutorial 8: Gestão Financeira */}
			{post.slug === "gestao-financeira-profissionais" && (
				<>
					<BodyText>
						Como profissional na Savoir Link, é essencial entender como funciona
						a parte financeira da plataforma. Aqui você não recebe pagamentos
						pela plataforma: você investe em créditos para desbloquear contatos e
						cobra o serviço diretamente do cliente. Este guia mostra como
						gerenciar bem esse investimento.
					</BodyText>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Como Funciona a Carteira de Créditos
						</h2>
						<BodyText className="mb-4">
							Todo o controle financeiro na plataforma gira em torno dos
							créditos:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Cada crédito desbloqueia o contato de 1 cliente (1 lead)",
								"Você compra créditos na carteira, em /app/wallet",
								"Não há mensalidade: você paga só pelos contatos que quiser",
								"Compras processadas com segurança pelo Pagar.me",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Comprando Créditos
						</h2>
						<BodyText className="mb-4">
							Para abastecer sua carteira é simples:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Acesse /app/wallet",
								'Clique em "Comprar créditos"',
								"Escolha um dos pacotes disponíveis",
								"Selecione o método de pagamento (cartão ou Pix)",
								"Conclua no checkout seguro do Pagar.me",
								"Os créditos ficam disponíveis na sua carteira",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Quanto Custa Cada Contato
						</h2>
						<BodyText className="mb-4">
							Os pacotes têm preços diferentes por crédito — quanto maior, mais
							vantajoso:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"5 créditos — R$ 49,90 (R$ 9,98 por contato)",
								"15 créditos — R$ 129,90 (R$ 8,66 por contato)",
								"40 créditos — R$ 299,90 (R$ 7,50 por contato)",
								"1 crédito = 1 contato desbloqueado",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Exemplo:</strong> ao comprar o pacote de 40 créditos
							<br />- Valor total: R$ 299,90
							<br />- Custo por contato: R$ 7,50
							<br />
							<strong>Você desbloqueia:</strong> 40 contatos de clientes
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							O Pagamento do Serviço é Direto com o Cliente
						</h2>
						<BodyText className="mb-4">
							A plataforma cobra pela conexão, não pelo serviço:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Você negocia o valor do serviço diretamente com o cliente",
								"O pagamento do serviço acontece fora da plataforma",
								"Você recebe 100% do valor combinado, sem repasse à Savoir Link",
								"Escolha a forma de pagamento que preferir (Pix, dinheiro, cartão, etc.)",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Importante:</strong> a Savoir Link não intermedia o
							pagamento do serviço nem retém valores; isso é combinado entre
							você e o cliente.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Acompanhando Seu Saldo e Histórico
						</h2>
						<BodyText className="mb-4">
							Na carteira você tem controle total do seu investimento:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Acesse /app/wallet para ver seu saldo de créditos",
								"Consulte o histórico de compras de créditos",
								"Veja cada crédito gasto e em qual contato foi usado",
								"Acompanhe seus contatos desbloqueados em /app/unlocks",
								"Planeje novas compras conforme o saldo diminui",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Calculando o Retorno dos Leads
						</h2>
						<BodyText className="mb-4">
							Para saber se o investimento vale a pena, acompanhe:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Quanto você gastou em créditos em um período",
								"Quantos contatos desbloqueados viraram clientes",
								"O faturamento gerado pelos serviços fechados",
								"O custo por contato x o valor médio de cada serviço",
								"Quais categorias de lead convertem melhor para você",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left">
						<h2 className="mb-4 font-bold text-on-surface text-xl uppercase">
							Dicas Financeiras
						</h2>
						<BulletList
							variant="check"
							items={[
								"Desbloqueie apenas leads que você realmente pretende atender",
								"Aproveite os pacotes maiores para reduzir o custo por contato",
								"Acompanhe regularmente seu saldo de créditos",
								"Meça a conversão dos leads para ajustar sua estratégia",
								"Guarde os comprovantes das compras para sua contabilidade",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-8">
						Entender esse fluxo é fundamental para gerenciar bem seu negócio.
						Comprando créditos com estratégia e cobrando o serviço direto do
						cliente, você mantém o controle total dos seus ganhos. Qualquer
						dúvida, nossa equipe de suporte está sempre disponível!
					</BodyText>
				</>
			)}

			{/* Tutorial 9: Dashboard */}
			{post.slug === "dashboard-profissional-guia" && (
				<>
					<BodyText>
						O painel do profissional, em /app, é seu centro de controle na
						plataforma. Aqui você explora leads, desbloqueia contatos, gerencia
						seus créditos e acompanha seus atendimentos. Vamos explorar cada
						seção.
					</BodyText>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Visão Geral do Painel
						</h2>
						<BodyText className="mb-4">O painel possui:</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Menu de navegação principal (leads, contatos, carteira)",
								"Resumo do seu saldo de créditos",
								"Leads recentes que combinam com seu perfil",
								"Avisos importantes da plataforma",
								"Ações rápidas para tarefas comuns",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Explorando Leads (/app/leads)
						</h2>
						<BodyText className="mb-4">
							A seção de leads mostra os pedidos publicados pelos clientes:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Cada lead traz título, descrição, orçamento e localização",
								"O contato do cliente fica oculto até você desbloquear",
								"Busque e filtre por categoria e região",
								"Leads são não exclusivos: vários profissionais podem desbloquear o mesmo",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Ação principal:</strong> abrir um lead e clicar em
							"Desbloquear contato" (custa 1 crédito) para ver os dados do
							cliente.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Meus Contatos (/app/unlocks)
						</h2>
						<BodyText className="mb-4">
							Em "Meus contatos" você acompanha os leads desbloqueados:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Todos os clientes cujo contato você já desbloqueou",
								"Telefone, WhatsApp e e-mail de cada um",
								"Data em que o contato foi desbloqueado",
								"Ponto de partida para entrar em contato e negociar",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Carteira de Créditos (/app/wallet)
						</h2>
						<BodyText className="mb-4">Acesse a carteira para ver:</BodyText>
						<BulletList
							variant="check"
							items={[
								"Seu saldo atual de créditos",
								"Pacotes disponíveis para compra (5, 15 ou 40 créditos)",
								"Histórico de compras de créditos",
								"Histórico de créditos gastos em desbloqueios",
								"Compra via checkout seguro do Pagar.me, sem mensalidade",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Filtrando e Buscando Leads
						</h2>
						<BodyText className="mb-4">Em /app/leads, você pode:</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Ver todos os pedidos disponíveis dos clientes",
								"Filtrar por categoria para achar o que combina com você",
								"Filtrar por localização e região de atendimento",
								"Ordenar pelos leads mais recentes",
								"Ler os detalhes antes de gastar um crédito para desbloquear",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Contato Direto com o Cliente
						</h2>
						<BodyText className="mb-4">Depois de desbloquear um lead:</BodyText>
						<BulletList
							variant="check"
							items={[
								"Você vê o telefone, WhatsApp e e-mail do cliente",
								"O contato acontece diretamente, fora da plataforma",
								"Escolha o canal mais prático para falar com cada cliente",
								"Apresente sua proposta e negocie o serviço",
								"Consulte a qualquer momento em /app/unlocks",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Dica:</strong> entre em contato rápido após desbloquear —
							outros profissionais também podem estar falando com o mesmo cliente.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							E-mails e Avisos
						</h2>
						<BodyText className="mb-4">
							A plataforma envia e-mails transacionais sobre:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Confirmação da compra de créditos",
								"Recibos e comprovantes de pagamento",
								"Avisos importantes sobre a sua conta",
								"Novidades e atualizações da plataforma",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Perfil e Configurações
						</h2>
						<BodyText className="mb-4">Nas configurações, você pode:</BodyText>
						<BulletList
							variant="check"
							items={[
								"Editar perfil e informações pessoais",
								"Atualizar áreas de atuação e região de atendimento",
								"Manter seus dados de contato corretos",
								"Gerenciar privacidade e dados",
								"Revisar seu histórico na carteira de créditos",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left">
						<h2 className="mb-4 font-bold text-on-surface text-xl uppercase">
							Dicas de Produtividade
						</h2>
						<BulletList
							variant="check"
							items={[
								"Comece o dia revisando os novos leads em /app/leads",
								"Entre em contato rápido com os leads desbloqueados",
								"Desbloqueie apenas os pedidos que você pretende atender",
								"Revise sua conversão de leads semanalmente",
								"Mantenha o perfil e as áreas de atuação atualizados",
								"Reabasteça os créditos antes que o saldo acabe",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-8">
						Dominar o painel é essencial para gerenciar seu negócio de forma
						eficiente. Explore cada seção e crie uma rotina diária para
						desbloquear os melhores leads e maximizar seus resultados!
					</BodyText>
				</>
			)}

			{/* Tutorial 10: Perfil de Alto Impacto */}
			{post.slug === "perfil-profissional-destaque" && (
				<>
					<BodyText>
						Um perfil bem construído é a diferença entre fechar muitos negócios
						ou passar despercebido quando você entra em contato com um cliente.
						Vamos mostrar estratégias comprovadas para criar um perfil e uma
						apresentação que transmitem confiança e convertem contatos em
						clientes.
					</BodyText>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Foto de Perfil Profissional
						</h2>
						<BodyText className="mb-4">
							Sua foto é a primeira impressão. Siga estas diretrizes:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Use foto profissional de alta qualidade (mínimo 400x400px)",
								"Mostre seu rosto claramente (sem óculos escuros, chapéus)",
								"Fundo neutro ou relacionado à sua área",
								"Sorria naturalmente (transmite confiança)",
								"Evite selfies ou fotos muito casuais",
								"Atualize se sua aparência mudou significativamente",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Resumo Profissional Claro
						</h2>
						<BodyText className="mb-4">
							Seu resumo deve ser claro, específico e incluir palavras-chave da
							sua área:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"✅ BOM: 'Design de Logo Profissional para Empresas'",
								"❌ RUIM: 'Design Gráfico'",
								"✅ BOM: 'Consultoria Financeira para Pequenos Negócios'",
								"❌ RUIM: 'Consultoria'",
								"✅ BOM: 'Desenvolvimento de Sites em WordPress'",
								"❌ RUIM: 'Programação'",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Dica:</strong> Inclua o benefício principal ou nicho
							específico.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Descrição que Gera Confiança
						</h2>
						<BodyText className="mb-4">
							A descrição do seu perfil deve seguir esta estrutura:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"1. GANCHO: Problema que você resolve ou benefício principal",
								"2. O QUE VOCÊ FAZ: Lista detalhada dos serviços que oferece",
								"3. PROCESSO: Como você trabalha (etapas, prazos)",
								"4. DIFERENCIAIS: Por que escolher você (experiência, garantias)",
								"5. PROVA: Referências e exemplos que reforçam sua credibilidade",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Exemplo de gancho:</strong> "Cansado de sites lentos que
							afastam clientes? Crio sites WordPress otimizados que carregam em
							menos de 2 segundos."
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Portfólio Visual Forte
						</h2>
						<BodyText className="mb-4">
							Ter um bom portfólio para compartilhar com o cliente é crucial:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Reúna seus melhores trabalhos para enviar ao cliente",
								"Comece pelo trabalho mais impactante (sua vitrine)",
								"Mostre antes/depois quando aplicável",
								"Use imagens em alta resolução (mínimo 1200x800px)",
								"Varie os tipos de projeto para demonstrar versatilidade",
								"Adicione contexto em cada exemplo (o que foi feito)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Orçamentos Competitivos
						</h2>
						<BodyText className="mb-4">
							Ao enviar propostas para os clientes que você contatou:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Pesquise 5-10 profissionais que atuam na mesma área",
								"Se está começando, ofereça um valor ligeiramente abaixo da média",
								"Ofereça valor extra (revisões grátis, entrega rápida)",
								"Deixe claro o que está incluído em cada orçamento",
								"Conforme ganha reputação, ajuste seus preços para cima",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Importante:</strong> Não cobre barato demais - isso atrai
							clientes problemáticos e desvaloriza seu trabalho.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Áreas de Atuação e Região
						</h2>
						<BulletList
							variant="dash"
							items={[
								"Escolha as categorias mais específicas em que você atua",
								"Preencha sua região mesmo se atender online",
								"Indique se atende outras regiões além da cadastrada",
								"Isso ajuda você a encontrar os leads mais relevantes",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Construindo Reputação com os Primeiros Clientes
						</h2>
						<BodyText className="mb-4">
							No começo, sua reputação se constrói fora da plataforma.
							Estratégias:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Ofereça uma condição especial nos primeiros 3-5 serviços",
								"Peça referências e depoimentos após um serviço bem feito",
								"Faça follow-up 2-3 dias após a conclusão",
								"Entregue além do esperado nos primeiros trabalhos",
								"Peça indicações para novos clientes",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left">
						<h2 className="mb-4 font-bold text-on-surface text-xl uppercase">
							Checklist do Perfil Perfeito
						</h2>
						<BulletList
							variant="check"
							items={[
								"✓ Foto profissional de alta qualidade",
								"✓ Resumo claro com palavras-chave",
								"✓ Descrição estruturada (mínimo 200 palavras)",
								"✓ Portfólio em alta resolução pronto para compartilhar",
								"✓ Orçamentos competitivos preparados",
								"✓ Categorias de atuação específicas selecionadas",
								"✓ Região de atendimento preenchida",
								"✓ Contato rápido com os clientes desbloqueados",
								"✓ Perfil 100% completo",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-8">
						Um perfil bem construído transmite confiança, atrai clientes de
						qualidade e permite cobrar valores justos pelo seu trabalho. Dedique
						tempo para se apresentar bem e os resultados virão!
					</BodyText>
				</>
			)}

			{/* Tutorial 11: Política de Cancelamento */}
			{post.slug === "politica-cancelamento-reembolso" && (
				<>
					<BodyText>
						Entender as regras de publicação, encerramento e reembolso é
						essencial para saber seus direitos e deveres como cliente ou
						profissional. Vamos detalhar todas as regras e procedimentos.
					</BodyText>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							O Que Você Pode Fazer
						</h2>
						<BodyText className="mb-4">
							<strong>Como Cliente:</strong>
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Você paga apenas uma taxa única para publicar o pedido",
								"Pode encerrar o pedido a qualquer momento pelo link de gerenciamento",
								"Pode renovar o pedido gerando uma nova publicação",
							]}
						/>
						<BodyText className="mt-4 mb-4">
							<strong>Como Profissional:</strong>
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Você compra créditos para desbloquear contatos, sem mensalidade",
								"Cada crédito desbloqueia o contato de 1 cliente",
								"Os créditos não são reembolsáveis após a compra",
								"Desbloqueie apenas os leads que pretende atender",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Taxa de Publicação: Regras
						</h2>
						<BodyText className="mb-4">
							A publicação do pedido tem uma taxa única, conforme a duração:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"7 dias — R$ 5,00",
								"15 dias — R$ 9,00",
								"30 dias — R$ 15,00",
								"A taxa é cobrada uma única vez para deixar o pedido ativo",
								"A taxa de publicação não é reembolsável após o pedido ficar ativo",
							]}
						/>
						<BodyText className="mt-4">
							O valor do serviço em si é combinado e pago diretamente com o
							profissional, fora da plataforma.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Como Encerrar ou Renovar um Pedido (Cliente)
						</h2>
						<BodyText className="mb-4">Passo a passo:</BodyText>
						<BulletList
							variant="dash"
							items={[
								"1. Abra o e-mail que você recebeu ao publicar o pedido",
								"2. Clique no link de gerenciamento do pedido",
								"3. Veja o status e o número de desbloqueios",
								'4. Para encerrar, clique em "Encerrar pedido"',
								"5. O pedido deixa de ficar visível aos profissionais",
								"6. Para renovar, inicie uma nova publicação",
								"7. Escolha a nova duração e conclua o pagamento",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Créditos: Como Funcionam (Profissional)
						</h2>
						<BulletList
							variant="dash"
							items={[
								"1. Compre créditos na carteira, em /app/wallet",
								"2. Cada crédito desbloqueia o contato de 1 cliente",
								"3. Ao desbloquear, 1 crédito é debitado do seu saldo",
								"4. Os créditos comprados não são reembolsáveis",
								"5. Leads são não exclusivos: vários profissionais podem desbloquear o mesmo",
								"6. Acompanhe o histórico de créditos na carteira",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Atenção:</strong> desbloqueie apenas os leads que você
							realmente pretende atender, pois o crédito não é devolvido.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Quando Há Reembolso
						</h2>
						<BodyText className="mb-4">
							Os pagamentos da plataforma têm regras próprias:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Taxa de publicação: não reembolsável após o pedido ficar ativo",
								"Créditos: não reembolsáveis após a compra",
								"Falha no pagamento: nada é cobrado e você pode tentar novamente",
								"Cobrança em duplicidade comprovada: analisada pelo suporte",
								"O serviço em si é pago fora da plataforma, então não passa por aqui",
								"Todos os pagamentos são processados via Pagar.me",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Dúvidas Comuns
						</h2>
						<BodyText className="mb-4">
							Situações que costumam gerar dúvidas:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Não recebi contatos: revise o orçamento e a descrição, ou renove o pedido",
								"Problema com um profissional: fale com o suporte da plataforma",
								"Desbloqueei e o cliente não respondeu: o crédito não é devolvido, priorize leads bem detalhados",
								"Quero mais tempo ativo: encerre e publique novamente com duração maior",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left">
						<h2 className="mb-4 font-bold text-on-surface text-xl uppercase">
							Aproveitando Melhor sua Publicação e Créditos
						</h2>
						<BodyText className="mb-4">
							<strong>Dicas para Clientes:</strong>
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Descreva bem o pedido e informe um orçamento realista",
								"Escolha uma duração compatível com a urgência",
								"Mantenha seus dados de contato corretos",
								"Acompanhe o pedido pelo link de gerenciamento",
							]}
						/>
						<BodyText className="mt-4 mb-4">
							<strong>Dicas para Profissionais:</strong>
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Desbloqueie apenas leads dentro da sua área e região",
								"Leia a descrição com atenção antes de gastar um crédito",
								"Entre em contato rápido após desbloquear",
								"Aproveite os pacotes maiores para reduzir o custo por contato",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-8">
						Nossas regras de publicação e créditos buscam ser claras para ambos
						os lados. Se tiver dúvidas sobre um caso específico, entre em contato
						com o suporte através da plataforma.
					</BodyText>
				</>
			)}

			{/* Tutorial 12: Configurar Notificações */}
			{post.slug === "configurar-notificacoes" && (
				<>
					<BodyText>
						Depois de publicar um pedido na Savoir Link, você acompanha tudo por
						e-mail e por um link de gerenciamento. Vamos mostrar o que você
						recebe e como acompanhar o andamento do seu pedido.
					</BodyText>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							E-mails Que Você Recebe
						</h2>
						<BodyText className="mb-4">A plataforma envia e-mails transacionais:</BodyText>
						<BulletList
							variant="check"
							items={[
								"Confirmação de que o pagamento da publicação foi aprovado",
								'E-mail "Seu pedido foi publicado", com o link de gerenciamento',
								"Recibo/comprovante do pagamento da taxa de publicação",
								"Avisos importantes sobre o seu pedido",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Como Acessar o Link de Gerenciamento
						</h2>
						<BulletList
							variant="dash"
							items={[
								'Abra o e-mail "Seu pedido foi publicado"',
								"Clique no link de gerenciamento do pedido",
								"Você verá o status atual e os detalhes do pedido",
								"Guarde esse e-mail para voltar ao pedido quando quiser",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							O Que Você Acompanha no Pedido
						</h2>
						<BodyText className="mb-4">
							<strong>Pelo link de gerenciamento:</strong>
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Status do pedido (ativo ou encerrado)",
								"Número de desbloqueios feitos por profissionais",
								"Data em que o pedido expira",
								"Opção de encerrar o pedido a qualquer momento",
								"Opção de renovar com uma nova publicação",
							]}
						/>
						<BodyText className="mt-4 mb-4">
							<strong>Fora da plataforma:</strong>
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Os profissionais entram em contato diretamente com você",
								"O contato acontece por telefone, WhatsApp ou e-mail",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Mantenha Seus Dados Corretos
						</h2>
						<BodyText className="mb-4">
							<strong>Para receber os contatos sem falhas:</strong>
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Confira se o e-mail informado está correto",
								"Confirme o telefone e o WhatsApp (se informado)",
								"Use dados que você acompanha com frequência",
								"Assim você não perde nenhum profissional interessado",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Encerrar ou Renovar o Pedido
						</h2>
						<BodyText className="mb-4">
							Pelo link de gerenciamento você tem o controle do pedido:
						</BodyText>
						<BulletList
							variant="dash"
							items={[
								"Encerre o pedido quando já tiver encontrado um profissional",
								"Ao encerrar, ele deixa de ficar visível aos profissionais",
								"Renove com uma nova publicação se precisar de mais tempo",
								"Na renovação você escolhe novamente a duração (7, 15 ou 30 dias)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default">
						<h2 className="mb-4 font-bold text-primary text-xl uppercase">
							Não Está Recebendo Contatos?
						</h2>
						<BodyText className="mb-4">
							Se os profissionais não estão entrando em contato, tente:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Revisar a descrição: deixe o que você precisa bem claro",
								"Rever o orçamento: valores muito baixos afastam bons profissionais",
								"Conferir a categoria e a localização do pedido",
								"Renovar o pedido para ele voltar a aparecer em destaque",
							]}
						/>
					</ContentCard>

					<ContentCard variant="accent" accentPosition="left">
						<h2 className="mb-4 font-bold text-on-surface text-xl uppercase">
							Não Encontrou o E-mail?
						</h2>
						<BodyText className="mb-4">
							Se o e-mail de publicação não chegou:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"Verifique a pasta de spam/lixo eletrônico",
								"Confirme que o e-mail cadastrado está correto",
								"Aguarde alguns minutos após a confirmação do pagamento",
								"Adicione o remetente da Savoir Link aos contatos",
								"Entre em contato com o suporte se o problema persistir",
							]}
						/>
					</ContentCard>

					<BodyText className="mt-8">
						Acompanhar seu pedido é simples: fique de olho no e-mail e use o
						link de gerenciamento para ver o status, encerrar ou renovar. Assim
						você aproveita ao máximo o período em que seu pedido fica ativo!
					</BodyText>
				</>
			)}

			{/* Tutorial 13: Como Funciona o Processo de Serviço */}
			{post.slug === "como-funciona-processo-servico" && (
				<>
					<BodyText>
						Na Savoir Link, desenvolvemos um processo simples e transparente que
						conecta clientes e profissionais. Este guia explica cada etapa, desde
						a publicação do pedido pelo cliente até o momento em que ele e o
						profissional fecham negócio.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left">
						<Headline size="sm" className="mb-4">
							Visão Geral do Processo
						</Headline>
						<BodyText>
							O fluxo completo envolve 5 etapas principais: o cliente publica o
							pedido (pagando a taxa de publicação), o pedido fica ativo e
							visível aos profissionais, os profissionais compram créditos, um
							profissional gasta 1 crédito para desbloquear o contato e, por fim,
							entra em contato para fechar negócio fora da plataforma.
						</BodyText>
					</ContentCard>

					<ContentCard variant="bordered" className="mt-6 p-4 sm:p-8">
						<Headline size="sm" className="mb-4 text-primary">
							Fluxo Completo em 5 Passos
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"1. O cliente publica o pedido e paga a taxa de publicação",
								"2. O pedido fica ativo e visível aos profissionais da área",
								"3. Os profissionais compram créditos na carteira",
								"4. Um profissional gasta 1 crédito para desbloquear o contato",
								"5. O profissional entra em contato e fecham negócio fora da plataforma",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Etapas Detalhadas do Processo
					</Headline>

					<div className="space-y-6">
						{/* Etapa 1 */}
						<ContentCard variant="bordered">
							<Headline size="sm" className="mb-4 text-primary">
								Etapa 1: Cliente Publica o Pedido
							</Headline>
							<BodyText className="mb-4">
								O cliente acessa /publicar e descreve o que precisa: título,
								descrição, orçamento, categoria, localização e seus dados de
								contato.
							</BodyText>
							<BulletList
								variant="check"
								items={[
									"Descrição clara aumenta a qualidade dos contatos",
									"Orçamento realista atrai bons profissionais",
									"Categoria e localização ajudam a achar o pedido",
									"Os dados de contato só aparecem após o desbloqueio",
								]}
							/>
						</ContentCard>

						{/* Etapa 2 */}
						<ContentCard variant="bordered">
							<Headline size="sm" className="mb-4 text-primary">
								Etapa 2: Cliente Paga a Taxa de Publicação
							</Headline>
							<BodyText className="mb-4">
								O cliente escolhe por quanto tempo o pedido ficará ativo e paga
								uma taxa única via Pix ou cartão, no checkout seguro do Pagar.me.
							</BodyText>
							<BulletList
								variant="check"
								items={[
									"7 dias — R$ 5,00",
									"15 dias — R$ 9,00",
									"30 dias — R$ 15,00",
									"Taxa única, apenas para publicar o pedido",
								]}
							/>
						</ContentCard>

						{/* Etapa 3 - Destaque */}
						<ContentCard variant="accent" accentPosition="corners">
							<Headline size="sm" className="mb-4 text-secondary">
								Etapa 3: Pedido Fica Ativo e Visível aos Profissionais
							</Headline>
							<BodyText className="mb-4 font-bold text-primary">
								É aqui que o seu pedido começa a gerar contatos!
							</BodyText>
							<BodyText className="mb-4">
								Após a confirmação do pagamento, o pedido fica ativo e aparece
								para os profissionais da área. O cliente recebe um e-mail com o
								link de gerenciamento para acompanhar tudo.
							</BodyText>
							<BulletList
								variant="arrow"
								items={[
									"O pedido fica visível em /app/leads para os profissionais",
									"O cliente acompanha status e desbloqueios pelo link de gerenciamento",
									"O cliente pode encerrar ou renovar o pedido a qualquer momento",
								]}
							/>
						</ContentCard>

						{/* Etapa 4 */}
						<ContentCard variant="bordered">
							<Headline size="sm" className="mb-4 text-primary">
								Etapa 4: Profissionais Compram Créditos
							</Headline>
							<BodyText className="mb-4">
								Para entrar em contato com os clientes, os profissionais compram
								créditos na carteira (/app/wallet), sem mensalidade.
							</BodyText>
							<BulletList
								variant="check"
								items={[
									"5 créditos — R$ 49,90",
									"15 créditos — R$ 129,90",
									"40 créditos — R$ 299,90",
									"1 crédito desbloqueia o contato de 1 cliente",
								]}
							/>
						</ContentCard>

						{/* Etapa 5 */}
						<ContentCard variant="bordered">
							<Headline size="sm" className="mb-4 text-primary">
								Etapa 5: Profissional Desbloqueia o Contato
							</Headline>
							<BodyText className="mb-4">
								O profissional encontra um pedido compatível e gasta 1 crédito
								para desbloquear os dados de contato do cliente.
							</BodyText>
							<BulletList
								variant="arrow"
								items={[
									"Desbloqueia telefone, WhatsApp e e-mail do cliente",
									"1 crédito é debitado do saldo do profissional",
									"Leads são não exclusivos: vários profissionais podem desbloquear o mesmo",
								]}
							/>
							<BodyText className="mt-4 text-on-surface-variant text-sm">
								💡 Por isso vale entrar em contato rápido: quem responde antes
								sai na frente.
							</BodyText>
						</ContentCard>

						{/* Etapa 6 - Destaque */}
						<ContentCard variant="accent" accentPosition="left">
							<Headline size="sm" className="mb-4 text-secondary">
								Etapa 6: Profissional Entra em Contato
							</Headline>
							<BodyText className="mb-4 font-bold text-primary">
								É o momento de conectar cliente e profissional!
							</BodyText>
							<BodyText className="mb-4">
								Com o contato desbloqueado, o profissional fala diretamente com o
								cliente para apresentar sua proposta. A conversa acontece fora da
								plataforma. Esta etapa é importante pois:
							</BodyText>
							<BulletList
								variant="check"
								items={[
									"O contato é por telefone, WhatsApp ou e-mail",
									"O cliente pode comparar propostas de vários profissionais",
									"É a hora de alinhar escopo, prazo e valor",
									"O cliente escolhe com quem quer seguir",
									"Recomendamos combinar tudo por escrito",
								]}
							/>
							<BodyText className="mt-4">
								<span className="font-bold text-primary">Dica:</span>{" "}
								antes de fechar, o cliente deve pedir referências e verificar o
								portfólio do profissional.
							</BodyText>
						</ContentCard>

						{/* Etapa 7 */}
						<ContentCard variant="bordered">
							<Headline size="sm" className="mb-4 text-primary">
								Etapa 7: Fecham Negócio Fora da Plataforma
							</Headline>
							<BodyText className="mb-4">
								Cliente e profissional combinam o serviço e o pagamento
								diretamente entre si. A Savoir Link cobra pela conexão, não pela
								transação do serviço.
							</BodyText>
							<BulletList
								variant="check"
								items={[
									"O valor do serviço é negociado direto com o profissional",
									"O pagamento do serviço acontece fora da plataforma",
									"A forma de pagamento é combinada entre as partes",
									"O cliente pode encerrar o pedido após fechar negócio",
								]}
							/>
						</ContentCard>
					</div>

					<Headline size="sm" className="mt-8 mb-4">
						Políticas de Publicação e Créditos
					</Headline>

					<ContentCard variant="bordered" className="mt-6 p-4 sm:p-8">
						<Headline size="sm" className="mb-4 text-primary">
							Os Únicos Pagamentos da Plataforma
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"Cliente: taxa única de publicação (7 dias R$ 5,00, 15 dias R$ 9,00 ou 30 dias R$ 15,00)",
								"Profissional: compra de créditos (5/R$ 49,90, 15/R$ 129,90 ou 40/R$ 299,90), sem mensalidade",
								"Taxa de publicação e créditos não são reembolsáveis",
								"O valor do serviço é combinado e pago diretamente com o profissional, fora da plataforma",
								"Todos os pagamentos da plataforma são processados via Pagar.me",
							]}
						/>
					</ContentCard>

					<div className="space-y-6">
						<div>
							<Label className="mb-3 block text-primary">Para Clientes</Label>
							<ContentCard variant="bordered">
								<div className="space-y-3">
									<div>
										<BodyText className="mb-2 font-semibold">
											Taxa de publicação:
										</BodyText>
										<BodyText className="text-on-surface">
											• Paga uma única vez para deixar o pedido ativo
											<br />• Não reembolsável após o pedido ficar ativo
										</BodyText>
									</div>
									<div>
										<BodyText className="mb-2 font-semibold">
											Gerenciamento:
										</BodyText>
										<BodyText className="text-on-surface">
											• Encerre o pedido quando quiser, pelo link de gerenciamento
											<br />• Renove com uma nova publicação se precisar de mais tempo
										</BodyText>
									</div>
								</div>
							</ContentCard>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								Para Profissionais
							</Label>
							<ContentCard variant="bordered">
								<div className="space-y-3">
									<div>
										<BodyText className="mb-2 font-semibold">
											Créditos:
										</BodyText>
										<BodyText className="text-on-surface">
											• 1 crédito desbloqueia o contato de 1 cliente
											<br />• Compra sem mensalidade, quando você quiser
											<br />• Não reembolsáveis após a compra
										</BodyText>
									</div>
									<div>
										<BodyText className="mb-2 font-semibold">
											Contato:
										</BodyText>
										<BodyText className="text-on-surface">
											• Leads não exclusivos: outros também podem desbloquear
											<br />• Contato direto por telefone, WhatsApp ou e-mail
											<br />• O serviço é pago fora da plataforma
										</BodyText>
									</div>
								</div>
							</ContentCard>
						</div>
					</div>

					<Headline size="sm" className="mt-8 mb-4">
						Perguntas Frequentes
					</Headline>

					<div className="space-y-4">
						<ContentCard variant="bordered">
							<Label className="mb-2 block text-secondary">
								E se eu não receber contatos de profissionais?
							</Label>
							<BodyText className="text-on-surface">
								Revise a descrição e o orçamento do pedido: quanto mais claro e
								realista, mais profissionais se interessam. Você também pode
								renovar o pedido para ele voltar a aparecer em destaque.
							</BodyText>
						</ContentCard>

						<ContentCard variant="bordered">
							<Label className="mb-2 block text-secondary">
								Como funciona o pagamento do serviço?
							</Label>
							<BodyText className="text-on-surface">
								O valor do serviço é combinado e pago diretamente entre você e o
								profissional, fora da plataforma. A Savoir Link não intermedia
								nem retém esse pagamento.
							</BodyText>
						</ContentCard>

						<ContentCard variant="bordered">
							<Label className="mb-2 block text-secondary">
								Posso encerrar ou renovar meu pedido?
							</Label>
							<BodyText className="text-on-surface">
								Sim. Pelo link de gerenciamento enviado por e-mail você pode
								encerrar o pedido a qualquer momento ou renová-lo com uma nova
								publicação, escolhendo novamente a duração.
							</BodyText>
						</ContentCard>

						<ContentCard variant="bordered">
							<Label className="mb-2 block text-secondary">
								A taxa de publicação e os créditos são reembolsáveis?
							</Label>
							<BodyText className="text-on-surface">
								Não. A taxa de publicação não é reembolsável após o pedido ficar
								ativo, e os créditos não são reembolsáveis após a compra. Por
								isso, desbloqueie apenas os leads que pretende atender.
							</BodyText>
						</ContentCard>
					</div>
				</>
			)}

			{/* Post: Dicas Primeira Contratação */}
			{post.slug === "dicas-primeira-contratacao" && (
				<>
					<BodyText>
						Contratar serviços online pode parecer intimidador se você nunca fez
						isso antes. Mas com as ferramentas certas e seguindo algumas
						práticas essenciais, você pode ter uma experiência segura e
						satisfatória.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						7 Dicas Essenciais para Sua Primeira Contratação
					</Headline>

					<div className="space-y-6">
						<div>
							<Label className="mb-3 block text-primary">
								1. Compare os Profissionais que Entram em Contato
							</Label>
							<BodyText className="mb-3">
								Depois de publicar seu pedido, vários profissionais podem te
								procurar. Não feche com o primeiro: compare as propostas antes de
								tomar sua decisão.
							</BodyText>
							<BulletList
								variant="check"
								items={[
									"Peça referências de clientes anteriores que você possa contatar",
									"Verifique o portfólio e trabalhos anteriores",
									"Compare os orçamentos, mas não escolha apenas pelo mais barato",
									"Considere a experiência e especialização do profissional",
								]}
							/>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								2. Comunique-se Claramente
							</Label>
							<BodyText className="mb-3">
								Uma boa comunicação é fundamental para o sucesso do projeto.
								Seja específico sobre suas necessidades e expectativas.
							</BodyText>
							<BulletList
								variant="arrow"
								items={[
									"Descreva detalhadamente o que você precisa",
									"Compartilhe referências visuais ou exemplos se possível",
									"Estabeleça prazos realistas e discuta-os abertamente",
									"Faça perguntas sobre qualquer dúvida que tiver",
								]}
							/>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								3. Entenda Como Funcionam os Pagamentos
							</Label>
							<ContentCard variant="accent" accentPosition="left">
								<BodyText className="mb-3">
									Na Savoir Link, você paga apenas uma taxa única para publicar o
									pedido. O valor do serviço é combinado e pago diretamente com o
									profissional, fora da plataforma.
								</BodyText>
								<BulletList
									variant="check"
									items={[
										"Taxa de publicação via Pagar.me (Pix ou cartão), seguro e confiável",
										"Durações: 7 dias R$ 5,00, 15 dias R$ 9,00 ou 30 dias R$ 15,00",
										"O serviço é pago direto ao profissional, na forma que combinarem",
										"Combine o valor por escrito antes de fechar",
									]}
								/>
							</ContentCard>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								4. Defina Expectativas Claras Desde o Início
							</Label>
							<BodyText className="mb-3">
								Antes de confirmar a contratação, certifique-se de que você e o
								profissional estão alinhados sobre todos os detalhes.
							</BodyText>
							<BulletList
								variant="check"
								items={[
									"Escopo do trabalho: o que exatamente será entregue?",
									"Prazo de conclusão: quando o serviço ficará pronto?",
									"Revisões: quantas rodadas de ajustes estão incluídas?",
									"Formatos de entrega: em que formato você receberá o resultado?",
								]}
							/>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								5. Combine Tudo por Escrito
							</Label>
							<BodyText className="mb-3">
								A conversa com o profissional acontece por telefone, WhatsApp ou
								e-mail. Registre o que foi combinado por escrito: isso protege
								ambas as partes.
							</BodyText>
							<BulletList
								variant="arrow"
								items={[
									"Deixe escopo, valor e prazo registrados por mensagem ou e-mail",
									"Guarde o histórico da conversa com cada profissional",
									"Tenha evidência clara em caso de mal-entendidos",
									"Compartilhe apenas os dados necessários para orçar o serviço",
								]}
							/>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								6. Acompanhe o Progresso Regularmente
							</Label>
							<BodyText className="mb-3">
								Não espere até o prazo final para verificar como está o
								trabalho. Acompanhamento regular evita surpresas desagradáveis.
							</BodyText>
							<BulletList
								variant="check"
								items={[
									"Peça atualizações periódicas sobre o andamento",
									"Esteja disponível para responder dúvidas do profissional",
									"Revise rascunhos ou versões preliminares quando oferecido",
									"Dê feedback construtivo durante o processo",
								]}
							/>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								7. Combine Pagamento e Entrega com Segurança
							</Label>
							<ContentCard variant="accent" accentPosition="corners">
								<BodyText className="mb-3 font-bold text-secondary">
									Alinhar tudo antes evita dores de cabeça!
								</BodyText>
								<BodyText className="mb-3">
									Como o pagamento do serviço é feito diretamente com o
									profissional, deixe as condições bem claras antes de começar
									para proteger os dois lados.
								</BodyText>
								<BulletList
									variant="check"
									items={[
										"Combine a forma e as condições de pagamento com antecedência",
										"Evite pagar 100% adiantado sem qualquer garantia",
										"Deixe o escopo e o prazo de entrega registrados por escrito",
										"Peça recibo ou comprovante dos pagamentos feitos",
									]}
								/>
							</ContentCard>
						</div>
					</div>

					<ContentCard variant="bordered" className="mt-8">
						<Headline size="sm" className="mb-4">
							Checklist Final Antes de Contratar
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"✓ Publiquei meu pedido com descrição e orçamento claros",
								"✓ Comparei os profissionais que entraram em contato",
								"✓ Pedi referências e verifiquei o portfólio",
								"✓ Entendi que o serviço é pago direto ao profissional",
								"✓ Combinei escopo, prazo e valor por escrito",
								"✓ Guardei o histórico das conversas",
								"✓ Sei como acompanhar o progresso do trabalho",
								"✓ Alinhei a forma de pagamento com segurança",
							]}
						/>
					</ContentCard>
				</>
			)}

			{/* Post: Como Profissionais Aumentam Clientes */}
			{post.slug === "como-profissionais-aumentam-clientes" && (
				<>
					<BodyText>
						Expandir sua base de clientes é essencial para o crescimento do seu
						negócio como profissional autônomo. Neste guia, compartilhamos
						estratégias práticas e comprovadas para atrair mais clientes e
						construir uma carreira sólida.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						Estratégias para Aumentar Sua Base de Clientes
					</Headline>

					<div className="space-y-6">
						<div>
							<Label className="mb-3 block text-primary">
								1. Construa um Perfil Profissional Impecável
							</Label>
							<ContentCard variant="accent" accentPosition="left">
								<BodyText className="mb-3 font-bold text-secondary">
									Seu perfil é seu cartão de visitas digital!
								</BodyText>
								<BodyText className="mb-3">
									Um perfil bem estruturado transmite profissionalismo e
									confiança. Invista tempo em criar uma apresentação que
									destaque suas habilidades e experiência.
								</BodyText>
								<BulletList
									variant="check"
									items={[
										"Foto profissional de alta qualidade",
										"Descrição clara e objetiva dos seus serviços",
										"Portfólio com seus melhores trabalhos",
										"Diferenciais claros e resultados que você já entregou",
										"Informações de contato e disponibilidade atualizadas",
									]}
								/>
							</ContentCard>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								2. Ofereça Preços Competitivos (Mas Justos)
							</Label>
							<BodyText className="mb-3">
								Encontre o equilíbrio entre atrair clientes e valorizar seu
								trabalho. Preços muito baixos podem passar a impressão de baixa
								qualidade, enquanto preços muito altos podem afastar potenciais
								clientes.
							</BodyText>
							<BulletList
								variant="arrow"
								items={[
									"Pesquise os preços praticados por profissionais similares",
									"Considere sua experiência e especialização ao precificar",
									"Ofereça pacotes ou descontos para primeiros clientes",
									"Seja transparente sobre o que está incluído no preço",
									"Reajuste seus valores conforme ganha experiência e reputação",
								]}
							/>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								3. Responda Rápido e Profissionalmente
							</Label>
							<BodyText className="mb-3">
								A velocidade de resposta pode ser o diferencial que faz um
								cliente escolher você ao invés da concorrência. Clientes
								valorizam profissionais ágeis e comunicativos.
							</BodyText>
							<BulletList
								variant="check"
								items={[
									"Responda mensagens em até 2 horas sempre que possível",
									"Ative os alertas de e-mail para não perder nenhum lead",
									"Seja cortês e profissional em todas as interações",
									"Faça perguntas relevantes para entender bem a necessidade",
									"Mantenha o cliente informado sobre o andamento do trabalho",
								]}
							/>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								4. Entregue Além das Expectativas
							</Label>
							<ContentCard variant="accent" accentPosition="corners">
								<BodyText className="mb-3">
									Clientes satisfeitos são sua melhor propaganda. Quando você
									supera as expectativas, gera indicações e clientes
									recorrentes.
								</BodyText>
								<BulletList
									variant="check"
									items={[
										"Entregue antes do prazo quando possível",
										"Adicione um pequeno extra sem custo (arquivo adicional, formato extra, etc.)",
										"Capriche nos detalhes e na apresentação final",
										"Ofereça suporte pós-entrega para dúvidas ou ajustes",
										"Mantenha contato após a conclusão para fidelizar o cliente",
									]}
								/>
							</ContentCard>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								5. Construa Reputação e Peça Indicações
							</Label>
							<BodyText className="mb-3">
								A reputação é o ativo mais valioso de um profissional no
								mercado. Ela se constrói pelo boca a boca e por bons trabalhos,
								organicamente.
							</BodyText>
							<BulletList
								variant="arrow"
								items={[
									"Peça indicações a clientes satisfeitos",
									"Reúna depoimentos e autorização para usar fotos dos trabalhos",
									"Monte um portfólio para mostrar a novos clientes",
									"Use feedback do cliente como oportunidade de melhoria",
									"Mantenha seu cadastro e registros profissionais em dia",
								]}
							/>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								6. Especialize-se e Destaque sua Expertise
							</Label>
							<BodyText className="mb-3">
								Profissionais especializados geralmente conseguem cobrar mais e
								atrair clientes que procuram exatamente aquela habilidade
								específica.
							</BodyText>
							<BulletList
								variant="check"
								items={[
									"Identifique um nicho onde você se destaca",
									"Atualize suas habilidades e certificações constantemente",
									"Mostre casos de sucesso específicos da sua especialidade",
									"Use palavras-chave relevantes na descrição do seu perfil",
									"Torne-se referência em um segmento específico",
								]}
							/>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								7. Seja Rápido nos Leads
							</Label>
							<BodyText className="mb-3">
								Quem responde primeiro costuma fechar. Quanto mais rápido você
								desbloqueia e responde aos leads, maiores as suas chances.
							</BodyText>
							<BulletList
								variant="check"
								items={[
									"Acesse a lista de leads com frequência",
									"Mantenha créditos na carteira para não perder oportunidades",
									"Atualize seu portfólio com trabalhos recentes",
									"Desbloqueie e entre em contato o quanto antes",
									"Combine horários de atendimento claros com o cliente",
								]}
							/>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								8. Use os Recursos da Savoir Link
							</Label>
							<ContentCard variant="bordered">
								<BodyText className="mb-3">
									A Savoir Link oferece vários recursos para ajudar
									profissionais a encontrar clientes:
								</BodyText>
								<BulletList
									variant="arrow"
									items={[
										"Lista de leads com clientes buscando o seu serviço",
										"Busca e filtros por categoria para achar os leads certos",
										"Carteira de créditos para desbloquear contatos quando quiser",
										"Contato direto do cliente: telefone, WhatsApp e e-mail",
										"Meus contatos: histórico dos leads que você desbloqueou",
									]}
								/>
							</ContentCard>
						</div>
					</div>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Plano de Ação: Primeiros 30 Dias
						</Headline>
						<div className="space-y-3">
							<div>
								<BodyText className="mb-2 font-semibold">
									Semana 1: Fundação
								</BodyText>
								<BodyText className="text-on-surface">
									Complete 100% do seu perfil, adicione portfólio, configure
									preços competitivos e adicione créditos à carteira.
								</BodyText>
							</div>
							<div>
								<BodyText className="mb-2 font-semibold">
									Semana 2: Primeiros Clientes
								</BodyText>
								<BodyText className="text-on-surface">
									Desbloqueie e responda rapidamente aos primeiros leads,
									ofereça um bom preço aos primeiros clientes e peça indicações.
								</BodyText>
							</div>
							<div>
								<BodyText className="mb-2 font-semibold">
									Semana 3: Otimização
								</BodyText>
								<BodyText className="text-on-surface">
									Atualize portfólio com trabalhos recentes, ajuste descrição
									com base no feedback, melhore tempo de resposta.
								</BodyText>
							</div>
							<div>
								<BodyText className="mb-2 font-semibold">
									Semana 4: Expansão
								</BodyText>
								<BodyText className="text-on-surface">
									Foque em superar expectativas, peça indicações, identifique
									seu nicho de especialização e ajuste a estratégia.
								</BodyText>
							</div>
						</div>
					</ContentCard>
				</>
			)}

			{/* Post: Importância das Avaliações */}
			{post.slug === "importancia-avaliacoes" && (
				<>
					<BodyText>
						A reputação é o que sustenta um bom mercado de serviços. Ela cria
						confiança, reconhece bons profissionais e ajuda clientes a decidir com
						segurança. Como o contato na Savoir Link acontece direto entre as
						partes, a reputação se constrói no relacionamento, nas indicações e no
						histórico de bons trabalhos.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Por Que a Reputação Importa
						</Headline>
						<BulletList
							variant="check"
							items={[
								"Ajuda novos clientes a escolher com mais segurança",
								"Reconhece o bom trabalho e o profissionalismo",
								"Incentiva a excelência e a melhoria contínua",
								"Gera indicações e clientes recorrentes",
								"Fortalece a confiança em todo o mercado de serviços",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Para Clientes: Como Avaliar um Profissional
					</Headline>

					<BodyText className="mb-4">
						Depois de publicar seu pedido, vários profissionais podem entrar em
						contato. Avalie cada um antes de fechar negócio:
					</BodyText>

					<div className="space-y-6">
						<div>
							<Label className="mb-3 block text-primary">
								Um Bom Checklist Antes de Contratar
							</Label>
							<BulletList
								variant="arrow"
								items={[
									"Peça referências de trabalhos anteriores",
									"Veja o portfólio e fotos de serviços já realizados",
									"Confira o registro profissional quando aplicável (CRP, OAB, CREA)",
									"Compare os orçamentos que você recebeu",
									"Avalie a clareza e a rapidez na comunicação",
									"Combine escopo, prazo e forma de pagamento por escrito",
								]}
							/>
						</div>

						<div>
							<Label className="mb-3 block text-primary">Sinais de Alerta</Label>
							<ContentCard variant="bordered">
								<BulletList
									variant="dash"
									items={[
										"Preço muito abaixo do mercado sem explicação",
										"Recusa em dar referências ou mostrar trabalhos anteriores",
										"Comunicação confusa ou promessas boas demais",
										"Pressa excessiva para fechar sem detalhar o serviço",
									]}
								/>
							</ContentCard>
						</div>
					</div>

					<Headline size="sm" className="mt-8 mb-4">
						Para Profissionais: Como Construir Reputação
					</Headline>

					<div className="space-y-6">
						<div>
							<Label className="mb-3 block text-primary">
								Sua Reputação é Seu Maior Ativo
							</Label>
							<BodyText className="mb-3">
								Como o negócio é fechado diretamente com o cliente, sua reputação
								se constrói fora da plataforma: pela qualidade do trabalho, pelo
								boca a boca e por um bom histórico.
							</BodyText>
							<BulletList
								variant="check"
								items={[
									"Entregue com qualidade e dentro do prazo combinado",
									"Peça indicações a clientes satisfeitos",
									"Reúna depoimentos e autorização para usar fotos dos trabalhos",
									"Monte um portfólio para apresentar a novos clientes",
									"Responda rápido aos leads e seja claro na proposta",
									"Mantenha cadastro e registros profissionais em dia",
								]}
							/>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								Transforme Clientes em Divulgadores
							</Label>
							<ContentCard variant="accent" accentPosition="corners">
								<BodyText className="mb-3">
									Um cliente satisfeito é sua melhor propaganda. Supere as
									expectativas e peça, com naturalidade, que ele indique seu
									trabalho.
								</BodyText>
								<BulletList
									variant="check"
									items={[
										"Faça um follow-up após concluir o serviço",
										"Ofereça um bom atendimento do primeiro contato ao pós-venda",
										"Peça que compartilhem seu contato com quem precisar",
										"Retribua indicações e mantenha o relacionamento",
									]}
								/>
							</ContentCard>
						</div>
					</div>

					<ContentCard variant="accent" accentPosition="left" className="mt-8">
						<Headline size="sm" className="mb-4">
							Reputação Constrói Confiança
						</Headline>
						<BodyText>
							Seja cliente ou profissional, tratar cada negócio com transparência
							e respeito fortalece toda a comunidade. Avalie com critério, entregue
							com qualidade e construa uma reputação que abre portas.
						</BodyText>
					</ContentCard>
				</>
			)}

			{/* Post: Tendências Serviços 2025 */}
			{post.slug === "tendencias-servicos-2025" && (
				<>
					<BodyText>
						O mercado de serviços profissionais está em constante evolução.
						Tecnologias emergentes, mudanças no comportamento do consumidor e
						novas formas de trabalho estão moldando o futuro. Confira as
						principais tendências para 2025 e como se preparar para elas.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Visão Geral: O Que Esperar em 2025
						</Headline>
						<BodyText className="mb-3">
							O mercado de serviços continuará sua transformação digital, com
							foco em personalização, automação inteligente e experiências
							híbridas. Profissionais que se adaptarem a essas mudanças estarão
							à frente da concorrência.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Principais Tendências para 2025
					</Headline>

					<div className="space-y-6">
						<div>
							<Label className="mb-3 block text-primary">
								1. Inteligência Artificial como Assistente
							</Label>
							<BodyText className="mb-3">
								A IA não vai substituir profissionais, mas quem usar IA vai
								substituir quem não usa. Ferramentas de IA estão se tornando
								assistentes indispensáveis para aumentar produtividade.
							</BodyText>
							<BulletList
								variant="arrow"
								items={[
									"Automação de tarefas repetitivas e administrativas",
									"Análise de dados para insights mais rápidos",
									"Criação de conteúdo assistida (textos, imagens, vídeos)",
									"Atendimento ao cliente 24/7 com chatbots inteligentes",
									"Personalização em escala de serviços e produtos",
								]}
							/>
							<ContentCard variant="bordered" className="mt-4">
								<BodyText className="mb-2 font-semibold">
									Como se preparar:
								</BodyText>
								<BulletList
									variant="check"
									items={[
										"Experimente ferramentas de IA relevantes para sua área",
										"Aprenda a usar IA para otimizar, não substituir, seu trabalho",
										"Destaque habilidades que IA não consegue replicar (criatividade, empatia)",
										"Mantenha-se atualizado sobre novas tecnologias",
									]}
								/>
							</ContentCard>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								2. Trabalho Híbrido e Serviços Flexíveis
							</Label>
							<BodyText className="mb-3">
								A flexibilidade se tornou permanente. Clientes e profissionais
								esperam poder escolher quando, onde e como trabalhar e contratar
								serviços.
							</BodyText>
							<BulletList
								variant="check"
								items={[
									"Serviços oferecidos presencialmente, online ou híbrido",
									"Horários flexíveis adaptados às necessidades do cliente",
									"Modelos de precificação variados (por hora, projeto, assinatura)",
									"Comunicação assíncrona e síncrona conforme preferência",
									"Entrega digital priorizada, com opções físicas quando necessário",
								]}
							/>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								3. Hiperpersonalização de Serviços
							</Label>
							<ContentCard variant="accent" accentPosition="corners">
								<BodyText className="mb-3">
									Clientes não querem mais soluções genéricas. Eles esperam
									serviços adaptados especificamente às suas necessidades,
									preferências e contexto.
								</BodyText>
								<BulletList
									variant="check"
									items={[
										"Consultas iniciais detalhadas para entender o cliente",
										"Propostas customizadas ao invés de pacotes prontos",
										"Acompanhamento personalizado durante e após o serviço",
										"Uso de dados para antecipar necessidades do cliente",
										"Experiências únicas que geram fidelização",
									]}
								/>
							</ContentCard>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								4. Sustentabilidade e Responsabilidade Social
							</Label>
							<BodyText className="mb-3">
								Consumidores estão cada vez mais conscientes. Profissionais que
								demonstram compromisso com sustentabilidade e causas sociais
								ganham vantagem competitiva.
							</BodyText>
							<BulletList
								variant="arrow"
								items={[
									"Preferência por serviços digitais que reduzem pegada de carbono",
									"Transparência sobre práticas de trabalho e fornecedores",
									"Engajamento com causas locais e comunitárias",
									"Processos que minimizam desperdício e impacto ambiental",
									"Comunicação clara sobre valores e responsabilidade social",
								]}
							/>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								5. Modelo de Assinatura e Serviços Recorrentes
							</Label>
							<BodyText className="mb-3">
								Serviços pontuais estão dando lugar a relacionamentos de longo
								prazo. Clientes preferem pagar mensalmente por serviços
								contínuos ao invés de contratações únicas.
							</BodyText>
							<ContentCard variant="bordered">
								<BodyText className="mb-3 font-semibold">
									Vantagens do Modelo de Assinatura:
								</BodyText>
								<div className="grid gap-4 md:grid-cols-2">
									<div>
										<Label className="mb-2 block text-primary">
											Para Profissionais:
										</Label>
										<BulletList
											variant="check"
											items={[
												"Receita previsível e estável",
												"Relacionamentos duradouros",
												"Menor esforço em captação",
												"Maior lifetime value do cliente",
											]}
										/>
									</div>
									<div>
										<Label className="mb-2 block text-primary">
											Para Clientes:
										</Label>
										<BulletList
											variant="check"
											items={[
												"Custo mensal acessível",
												"Acesso contínuo ao profissional",
												"Prioridade no atendimento",
												"Desconto vs. serviços avulsos",
											]}
										/>
									</div>
								</div>
							</ContentCard>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								6. Micro-especializações em Alta
							</Label>
							<BodyText className="mb-3">
								Generalistas estão perdendo espaço para especialistas ultra
								focados. Clientes pagam mais por profissionais que dominam
								nichos muito específicos.
							</BodyText>
							<BulletList
								variant="check"
								items={[
									"Exemplo: Não apenas 'designer', mas 'designer de logos para startups de SaaS'",
									"Especialização permite cobrar preços premium",
									"Marketing mais eficaz com mensagem direcionada",
									"Menos concorrência em nichos específicos",
									"Autoridade reconhecida em área de expertise",
								]}
							/>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								7. Experiência do Cliente Acima de Tudo
							</Label>
							<ContentCard variant="accent" accentPosition="left">
								<BodyText className="mb-3 font-bold text-secondary">
									Qualidade técnica é esperada. Experiência excepcional é o
									diferencial!
								</BodyText>
								<BodyText className="mb-3">
									A jornada completa do cliente, do primeiro contato ao
									pós-venda, determina sucesso e recomendações.
								</BodyText>
								<BulletList
									variant="check"
									items={[
										"Onboarding suave e acolhedor para novos clientes",
										"Comunicação proativa em todas as etapas",
										"Interfaces e processos simples e intuitivos",
										"Surpresas positivas que excedem expectativas",
										"Follow-up pós-serviço para garantir satisfação",
										"Facilidade para dar feedback e fazer ajustes",
									]}
								/>
							</ContentCard>
						</div>

						<div>
							<Label className="mb-3 block text-primary">
								8. Pagamentos Instantâneos e Criptomoedas
							</Label>
							<BodyText className="mb-3">
								Pix revolucionou os pagamentos no Brasil. A próxima onda inclui
								pagamentos internacionais instantâneos e adoção crescente de
								criptomoedas.
							</BodyText>
							<BulletList
								variant="arrow"
								items={[
									"Expectativa de pagamentos e recebimentos instantâneos",
									"Opções de pagamento diversificadas (Pix, cartão, cripto)",
									"Transparência total sobre taxas e processamento",
									"Integração com carteiras digitais e fintechs",
									"Pagamentos internacionais simplificados",
								]}
							/>
						</div>
					</div>

					<Headline size="sm" className="mt-8 mb-4">
						Como a Savoir Link Está Preparada para 2025
					</Headline>

					<ContentCard variant="bordered">
						<BodyText className="mb-4">
							A Savoir Link foi construída pensando no futuro do mercado de
							serviços. Já oferecemos:
						</BodyText>
						<BulletList
							variant="check"
							items={[
								"✓ Conexão direta entre clientes e profissionais, sem intermediar o serviço",
								"✓ Modelo de leads: o cliente publica um pedido e os profissionais o procuram",
								"✓ Contato direto por telefone, WhatsApp e e-mail para negociação ágil",
								"✓ Flexibilidade total: serviços presenciais, online ou híbridos",
								"✓ Créditos flexíveis: o profissional paga só pelos contatos que desbloqueia",
								"✓ Busca e filtros por categoria para encontrar os clientes certos",
								"✓ Plataforma segura com proteção para clientes e profissionais",
								"✓ Suporte para diversos modelos de precificação e serviços",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Prepare-se para o Futuro Agora
						</Headline>
						<BodyText>
							As tendências de 2025 não são futurismo distante - elas já estão
							acontecendo. Profissionais que se adaptarem rapidamente, abraçarem
							novas tecnologias e focarem na experiência do cliente estarão à
							frente da concorrência. A Savoir Link está aqui para apoiar sua
							jornada nessa transformação. Junte-se a nós e construa o futuro
							dos serviços profissionais!
						</BodyText>
					</ContentCard>
				</>
			)}
		</>
	);
}
