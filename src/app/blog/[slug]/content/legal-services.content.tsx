import Link from "next/link";
import { BulletList } from "~/components/ui/bullet-list";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

export function LegalServicesContent({ post }: { post: BlogPost }) {
	return (
		<>
			{post.slug === "fui-demitido-sem-justa-causa-direitos" && (
				<>
					<BodyText>
						Você foi demitido sem motivo, sem aviso prévio, sem explicação
						clara... e agora está se perguntando: "Tenho direito a quê?". A
						demissão sem justa causa é uma das situações mais comuns no direito
						trabalhista brasileiro — e você tem MUITO mais direitos do que
						imagina.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							O Que Significa "Demissão Sem Justa Causa"?
						</Headline>
						<BodyText>
							É quando o empregador encerra o contrato de trabalho sem
							apresentar motivo grave (como falta grave, desídia,
							insubordinação). É a forma mais comum de demissão no Brasil. O
							trabalhador tem direito a diversas verbas rescisórias.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Direitos na Demissão Sem Justa Causa
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Saldo de Salário
						</Headline>
						<BodyText className="mb-4">
							<strong>O que é:</strong> Pagamento pelos dias trabalhados no mês
							da demissão (até a data do desligamento).
						</BodyText>
						<BodyText>
							<strong>Cálculo:</strong> (Salário mensal ÷ 30 dias) × dias
							trabalhados no mês.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Aviso Prévio
						</Headline>
						<BodyText className="mb-4">
							<strong>O que é:</strong> Aviso de 30 dias (mínimo) que o
							empregador deve dar antes da demissão. Se não der, paga
							indenizado.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Aviso Prévio Proporcional:</strong> +3 dias por ano
							trabalhado (até máximo de 90 dias). Exemplo: 5 anos = 30 + 15 = 45
							dias.
						</BodyText>
						<BodyText>
							<strong>Valor:</strong> Se indenizado, você recebe o salário
							referente aos dias de aviso.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. 13º Salário Proporcional
						</Headline>
						<BodyText className="mb-4">
							<strong>O que é:</strong> Proporcional aos meses trabalhados no
							ano da demissão.
						</BodyText>
						<BodyText>
							<strong>Cálculo:</strong> (Salário ÷ 12) × meses trabalhados.
							Exemplo: 6 meses trabalhados = metade do salário.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							4. Férias Vencidas + 1/3 Constitucional
						</Headline>
						<BodyText className="mb-4">
							<strong>Férias vencidas:</strong> Período de férias que você já
							adquiriu (completou 12 meses de trabalho) mas não tirou.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Férias proporcionais:</strong> Referentes aos meses
							trabalhados no período aquisitivo atual (não completo).
						</BodyText>
						<BodyText>
							<strong>+1/3:</strong> Adicional de 1/3 sobre o valor das férias
							(garantido pela Constituição).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							5. Saque do FGTS + Multa de 40%
						</Headline>
						<BodyText className="mb-4">
							<strong>FGTS:</strong> Você pode sacar TODO o saldo depositado
							durante o tempo de trabalho.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Multa de 40%:</strong> Empregador paga multa de 40% sobre
							o total de FGTS depositado (esse valor é seu!).
						</BodyText>
						<BodyText>
							<strong>Exemplo:</strong> FGTS acumulado R$ 10.000 → Multa = R$
							4.000 (você recebe).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							6. Seguro-Desemprego
						</Headline>
						<BodyText className="mb-4">
							<strong>Quem tem direito:</strong>
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Trabalhou pelo menos 12 meses (primeira solicitação)",
								"→ 9 meses (segunda solicitação)",
								"→ 6 meses (terceira solicitação em diante)",
								"→ Não pode estar recebendo outro benefício (exceto auxílio-acidente ou pensão por morte)",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Parcelas:</strong> De 3 a 5 parcelas (dependendo do tempo
							trabalhado).
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Fazer Após Ser Demitido?
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="check"
							items={[
								"Exija o Termo de Rescisão do Contrato de Trabalho (TRCT) — documento que comprova a demissão e lista todos os valores devidos.",
								"Confira se todos os valores estão corretos no TRCT (use calculadora trabalhista online ou peça ajuda a advogado).",
								"Receba o pagamento das verbas rescisórias em até 10 dias após a demissão (prazo legal).",
								"Solicite seguro-desemprego pela Carteira de Trabalho Digital (app) ou em agências autorizadas.",
								"Saque o FGTS na Caixa Econômica Federal (pode ser pelo app FGTS).",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						E Se a Empresa Não Pagar Tudo?
					</Headline>

					<BodyText className="mb-4">
						Se o empregador não pagar algum direito ou pagar valor errado, você
						pode:
					</BodyText>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Procurar o sindicato da categoria para tentar acordo",
								"→ Entrar com reclamação trabalhista na Justiça do Trabalho (pode fazer sem advogado, mas advogado aumenta chances de sucesso)",
								"→ Prazo: até 2 anos após a demissão para entrar com ação",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Advogado Trabalhista Pode Te Ajudar
						</Headline>
						<BodyText className="mb-6">
							Advogados especializados em direito do trabalho conferem seus
							direitos, calculam valores corretos, negociam com a empresa e
							entram com ação se necessário. Muitos trabalham com honorários de
							êxito (só cobram se ganhar).
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Advogado Trabalhista</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 37: Divórcio Passo a Passo */}
			{post.slug === "como-dar-entrada-divorcio-passo-a-passo" && (
				<>
					<BodyText>
						Você decidiu se divorciar, mas não sabe por onde começar. Que
						documentos precisa? Quanto custa? Demora quanto tempo? Precisa de
						advogado? Este guia explica o passo a passo completo para dar
						entrada no divórcio no Brasil em 2025.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Tipos de Divórcio no Brasil
						</Headline>
						<BodyText>
							Existem 2 tipos principais: <strong>consensual</strong> (ambos
							concordam) e <strong>litigioso</strong> (há discordância). O tipo
							define custo, prazo e se é obrigatório advogado.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						1. Divórcio Consensual (Mais Rápido e Barato)
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Quando Usar
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Casal concorda com a separação",
								"→ Não há filhos menores de idade OU há acordo sobre guarda/pensão",
								"→ Divisão de bens já foi acordada (ou não há bens a dividir)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Onde Fazer
						</Headline>
						<BodyText className="mb-4">
							<strong>Opção 1: Cartório (Extrajudicial)</strong>
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Mais rápido (1-2 semanas)",
								"→ Obrigatório advogado ou defensor público",
								"→ Só se não houver filhos menores",
								"→ Custo: R$ 300-800 (cartório) + R$ 1.000-3.000 (advogado)",
							]}
						/>
						<BodyText className="mt-4 mb-4">
							<strong>Opção 2: Justiça (Judicial)</strong>
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Se houver filhos menores (juiz homologa acordo)",
								"→ Prazo: 1-3 meses",
								"→ Custo: R$ 1.500-5.000 (advogado + custas processuais)",
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
								"→ RG e CPF de ambos",
								"→ Certidão de casamento atualizada (emitida há menos de 90 dias)",
								"→ Certidão de nascimento dos filhos (se houver)",
								"→ Comprovante de residência",
								"→ Escritura de imóveis ou documentos de bens a dividir",
								"→ Acordo de guarda e pensão (se houver filhos menores)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						2. Divórcio Litigioso (Há Discordância)
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Quando Usar
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Um dos cônjuges não concorda com o divórcio (raro hoje em dia, pois não é mais necessário consentimento)",
								"→ Há disputa sobre divisão de bens",
								"→ Há disputa sobre guarda de filhos ou valor de pensão",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Como Funciona
						</Headline>
						<BodyText className="mb-4">
							<strong>1. Entrada:</strong> Um dos cônjuges entra com ação de
							divórcio (advogado obrigatório).
						</BodyText>
						<BodyText className="mb-4">
							<strong>2. Citação:</strong> Outro cônjuge é notificado e pode
							apresentar defesa.
						</BodyText>
						<BodyText className="mb-4">
							<strong>3. Audiências:</strong> Tentativas de conciliação +
							audiência de instrução (se necessário).
						</BodyText>
						<BodyText className="mb-4">
							<strong>4. Sentença:</strong> Juiz decide sobre divórcio, bens,
							guarda, pensão.
						</BodyText>
						<BodyText>
							<strong>Prazo:</strong> 6 meses a 2 anos (dependendo da
							complexidade e se houver acordo).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Custos
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Advogado: R$ 3.000-15.000 (dependendo da complexidade)",
								"→ Custas processuais: R$ 200-500",
								"→ Perícias (se houver): R$ 1.000-5.000",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Passo a Passo Completo (Divórcio Consensual em Cartório)
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="check"
							items={[
								"Separe todos os documentos necessários (RG, CPF, certidão de casamento atualizada, etc.).",
								"Contrate advogado ou procure Defensoria Pública (se renda familiar for até 3 salários mínimos).",
								"Faça acordo por escrito sobre divisão de bens (se houver).",
								"Advogado leva documentação ao cartório de notas.",
								"Casal comparece ao cartório para assinar escritura pública de divórcio.",
								"Cartório registra o divórcio (2-7 dias).",
								"Pronto! Divórcio concluído. Certidão de casamento é averbada com a informação do divórcio.",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Perguntas Frequentes
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Precisa esperar 1 ano para se divorciar?</strong>
							<br />
							Não! Desde 2010, não há mais prazo de separação obrigatório. Pode
							divorciar imediatamente.
						</BodyText>
						<BodyText className="mb-4">
							<strong>E se meu cônjuge não quiser assinar?</strong>
							<br />
							Não é mais necessário consentimento. Você pode entrar com divórcio
							litigioso e o juiz decreta mesmo sem concordância.
						</BodyText>
						<BodyText>
							<strong>Posso fazer sozinho, sem advogado?</strong>
							<br />
							Não. Divórcio sempre exige advogado (ou defensor público). É
							exigência legal.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Advogado de Família Te Orienta
						</Headline>
						<BodyText className="mb-6">
							Advogados especializados em direito de família te ajudam a
							escolher o melhor tipo de divórcio, preparam documentação,
							negociam acordos e representam você em audiências. Muitos oferecem
							consulta inicial gratuita.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Advogado de Família</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 38: Acidente de Trabalho */}
			{post.slug === "acidente-trabalho-indenizacao-direitos" && (
				<>
					<BodyText>
						Você sofreu um acidente no trabalho — machucou o braço operando
						máquina, caiu de escada, desenvolveu LER por esforço repetitivo... E
						agora? Que direitos você tem? Como receber indenização? Este guia
						explica o que fazer imediatamente após acidente de trabalho e como
						garantir seus direitos.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							O Que é Acidente de Trabalho?
						</Headline>
						<BodyText className="mb-4">
							É qualquer lesão, doença ou morte ocorrida durante o trabalho ou
							em razão dele. Inclui:
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Acidente típico (corte, queda, queimadura no local de trabalho)",
								"→ Acidente de trajeto (ida/volta do trabalho)",
								"→ Doença ocupacional (LER, perda auditiva, problemas respiratórios causados pelo trabalho)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Fazer Imediatamente Após Acidente?
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="check"
							items={[
								"Busque atendimento médico imediatamente (no local ou hospital).",
								"Informe o empregador sobre o acidente (IMEDIATAMENTE, mesmo que lesão pareça pequena).",
								"Exija que a empresa emita a CAT (Comunicação de Acidente de Trabalho) em até 1 dia útil.",
								"Se a empresa se recusar, você mesmo pode emitir CAT no INSS (site Meu INSS ou agência).",
								"Guarde todos os documentos: atestados médicos, exames, receitas, relatórios médicos, testemunhas.",
								"Tire fotos do local do acidente (se possível) e da lesão.",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						CAT — Comunicação de Acidente de Trabalho
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							O Que É
						</Headline>
						<BodyText>
							Documento obrigatório que a empresa deve emitir para o INSS
							informando que você sofreu acidente de trabalho. É ESSENCIAL para
							garantir seus direitos (auxílio-doença acidentário, estabilidade,
							indenização).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Prazo
						</Headline>
						<BodyText>
							Empresa deve emitir até o 1º dia útil após o acidente (ou até o 1º
							dia útil após o diagnóstico de doença ocupacional).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							E Se a Empresa Não Emitir?
						</Headline>
						<BodyText className="mb-4">Você mesmo pode emitir CAT:</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Pelo site/app Meu INSS (mais rápido)",
								"→ Em agência do INSS",
								"→ Sindicato ou médico também podem emitir",
							]}
						/>
						<BodyText className="mt-4">
							<strong>IMPORTANTE:</strong> Mesmo que a empresa diga "não foi
							grave, não precisa", EXIJA a CAT. Se não emitir, você perde
							direitos.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Direitos Após Acidente de Trabalho
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Afastamento Remunerado (Primeiros 15 Dias)
						</Headline>
						<BodyText>
							Se você precisar se afastar do trabalho por causa do acidente, a
							empresa paga seu salário integral nos primeiros 15 dias.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Auxílio-Doença Acidentário (Após 15 Dias)
						</Headline>
						<BodyText className="mb-4">
							Se precisar ficar afastado por mais de 15 dias, o INSS paga
							auxílio-doença acidentário (B91) — 91% do salário de benefício.
						</BodyText>
						<BodyText>
							<strong>Como solicitar:</strong> Pelo Meu INSS (app/site), com
							perícia médica agendada.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Estabilidade de 12 Meses
						</Headline>
						<BodyText>
							Após retornar ao trabalho (alta médica do INSS), você tem
							estabilidade de 12 meses — empresa NÃO pode te demitir sem justa
							causa nesse período. Se demitir, você tem direito a indenização.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							4. Depósito do FGTS Durante Afastamento
						</Headline>
						<BodyText>
							Enquanto recebe auxílio-doença acidentário, a empresa continua
							depositando FGTS (diferente de auxílio-doença comum).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							5. Indenização por Danos Morais e Materiais
						</Headline>
						<BodyText className="mb-4">
							Você pode processar a empresa e receber indenização se:
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Empresa não forneceu EPI (equipamento de proteção)",
								"→ Ambiente de trabalho era inseguro (sem treinamento, sem manutenção)",
								"→ Você ficou com sequela permanente (redução de capacidade de trabalho, cicatriz, amputação)",
								"→ Sofreu dor, trauma psicológico, constrangimento",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Valores:</strong> Danos morais variam de R$ 5.000 a R$
							500.000+ (dependendo da gravidade). Danos materiais cobrem
							tratamentos, medicamentos, perda de renda.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Você Pode Processar a Empresa?
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Empresa não forneceu equipamentos de segurança (EPI)",
								"→ Não ofereceu treinamento adequado",
								"→ Ignorou normas de segurança (NR-6, NR-12, etc.)",
								"→ Forçou você a trabalhar em condições perigosas",
								"→ Você ficou com sequela permanente",
								"→ Perdeu capacidade de trabalho (total ou parcial)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Advogado Trabalhista Garante Seus Direitos
						</Headline>
						<BodyText className="mb-6">
							Advogados especializados em acidente de trabalho emitem CAT (se
							empresa recusar), solicitam auxílio-doença acidentário, recorrem
							se INSS negar, e entram com ação de indenização. Muitos trabalham
							com honorários de êxito (só cobram se ganhar).
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Advogado Trabalhista</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 39: Rescisão de Aluguel */}
			{post.slug === "quebrar-contrato-aluguel-antes-prazo" && (
				<>
					<BodyText>
						Você alugou um apartamento por 30 meses, mas depois de 8 meses
						precisa sair (mudou de cidade, perdeu emprego, encontrou lugar mais
						barato). Pode quebrar o contrato? Vai pagar multa? Quanto? Este guia
						explica as regras, multas e como negociar a saída antecipada do
						aluguel.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Posso Quebrar Contrato de Aluguel?
						</Headline>
						<BodyText>
							<strong>Sim, você pode sair antes do prazo.</strong> Mas
							geralmente há multa rescisória (penalidade por quebrar contrato).
							O valor da multa depende de quando você sair e do que está escrito
							no contrato.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Multa Rescisória — Quanto Você Paga?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Contratos Com Prazo Determinado (30 meses, 12 meses, etc.)
						</Headline>
						<BodyText className="mb-4">
							<strong>Regra padrão (Lei do Inquilinato):</strong>
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Se sair antes de cumprir metade do prazo: multa de 3 aluguéis (proporcional ao tempo restante)",
								"→ Se sair após cumprir metade do prazo: sem multa (desde que avise com 30 dias de antecedência)",
							]}
						/>
						<BodyText className="mt-4 mb-4">
							<strong>Exemplo 1:</strong> Contrato de 30 meses, você sai no mês
							10 (antes da metade = 15 meses).
							<br />
							Multa = até 3 aluguéis (proporcional ao tempo que falta).
						</BodyText>
						<BodyText>
							<strong>Exemplo 2:</strong> Contrato de 30 meses, você sai no mês
							20 (depois da metade).
							<br />
							Multa = zero (desde que avise com 30 dias de antecedência).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Cláusula de Multa no Contrato
						</Headline>
						<BodyText className="mb-4">
							Muitos contratos têm cláusula específica de multa rescisória.
							Exemplo comum:
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Multa de 3 aluguéis (independente de quando sair)",
								"→ Multa de 1 mês de aluguel",
								"→ Multa proporcional ao tempo restante",
							]}
						/>
						<BodyText className="mt-4">
							<strong>IMPORTANTE:</strong> Se o contrato especifica multa, vale
							o que está escrito (desde que não seja abusivo). Leia com atenção!
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Contratos Sem Prazo Determinado (Indeterminado)
						</Headline>
						<BodyText>
							Se o contrato não tem prazo (ou já passou do prazo original e foi
							renovado automaticamente), você pode sair a qualquer momento com
							aviso prévio de 30 dias — sem multa.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Passo a Passo para Sair do Aluguel
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="check"
							items={[
								"Leia o contrato de aluguel com atenção — procure cláusula de rescisão antecipada ou multa.",
								"Calcule a multa que você terá que pagar (ou confirme se não paga multa).",
								"Avise o proprietário/imobiliária por escrito (carta, e-mail, WhatsApp com confirmação) com antecedência de 30 dias (mínimo).",
								"Agende vistoria de saída com proprietário/imobiliária.",
								"Devolva o imóvel limpo e em bom estado (como estava na entrada).",
								"Exija recibo de entrega de chaves.",
								"Receba devolução do depósito caução (se houver) — desconta danos/multa se aplicável.",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Negociar a Saída (E Reduzir Multa)
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							Muitas vezes, proprietário aceita negociar para evitar imóvel
							parado. Tente:
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Propor pagar multa menor (ex: 1 aluguel em vez de 3)",
								"→ Oferecer indicar novo inquilino (proprietário economiza tempo de vacância)",
								"→ Antecipar aviso (avisar com 60 dias em vez de 30 dá mais tempo para achar novo inquilino)",
								"→ Deixar imóvel em perfeito estado (economiza reforma, aumenta boa vontade)",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Dica:</strong> Seja educado e transparente sobre o motivo
							(desemprego, mudança de cidade). Muitos proprietários são
							compreensivos.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Você NÃO Paga Multa
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Imóvel tem problemas graves não resolvidos (infiltração séria, falta de água, estrutura insegura)",
								"→ Proprietário não cumpriu obrigações contratuais (não fez reparos obrigatórios)",
								"→ Transferência de trabalho compulsória (algumas empresas cobrem multa rescisória)",
								"→ Contrato já passou da metade do prazo E você avisou com 30 dias",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						E Se Proprietário Exigir Multa Abusiva?
					</Headline>

					<BodyText className="mb-4">
						Multa superior a 3 aluguéis é considerada abusiva pela Lei do
						Inquilinato. Se proprietário exigir valor absurdo ou reter depósito
						indevidamente:
					</BodyText>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Tente resolver amigavelmente (explique que multa está acima do permitido por lei)",
								"→ Procure advogado especializado em direito imobiliário",
								"→ Entre com ação na Justiça (você pode pedir devolução do depósito + indenização por retenção indevida)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Advogado Imobiliário Te Ajuda
						</Headline>
						<BodyText className="mb-6">
							Advogados especializados em direito imobiliário analisam seu
							contrato, negociam com proprietário/imobiliária, calculam multa
							justa e te defendem em caso de cobrança abusiva ou retenção
							indevida de depósito.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Advogado Imobiliário</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 40: Produto Defeituoso */}
			{post.slug === "produto-defeituoso-direito-reembolso-consumidor" && (
				<>
					<BodyText>
						Você comprou um produto (celular, notebook, geladeira, roupa) e ele
						veio com defeito. A loja não quer trocar, oferece apenas "conserto"
						que demora 30 dias, ou simplesmente ignora você. Você tem direito a
						troca, reembolso ou abatimento — e a lei está do seu lado. Este guia
						explica seus direitos e como exigir solução.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Código de Defesa do Consumidor (CDC) Protege Você
						</Headline>
						<BodyText>
							O CDC garante que produtos devem funcionar perfeitamente. Se
							vierem com defeito (vício), você tem direito a troca, reembolso ou
							abatimento no preço — a escolha é SUA, não da loja.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Prazo de 30 Dias Para Resolver o Problema
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Como Funciona
						</Headline>
						<BodyText className="mb-4">
							<strong>1. Você reclama do defeito:</strong> Procura
							loja/fabricante e informa o problema.
						</BodyText>
						<BodyText className="mb-4">
							<strong>2. Prazo de 30 dias:</strong> Loja/fabricante tem até 30
							dias para CONSERTAR o produto sem custo.
						</BodyText>
						<BodyText>
							<strong>3. Após 30 dias:</strong> Se não consertou, você ESCOLHE
							entre:
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Troca por produto novo (igual ou similar)",
								"→ Reembolso total (devolução do dinheiro)",
								"→ Abatimento proporcional no preço (se quiser ficar com produto mesmo com defeito)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Exceção: Defeito Grave ou Produto Essencial
						</Headline>
						<BodyText>
							Se defeito for grave (produto inutilizável) ou se for produto
							essencial (geladeira que não gela, carro que não liga), você pode
							exigir troca/reembolso IMEDIATAMENTE — sem esperar 30 dias.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Passo a Passo Para Exigir Reembolso
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="check"
							items={[
								"Junte provas: nota fiscal, fotos/vídeos do defeito, conversas com loja (WhatsApp, e-mail).",
								"Reclame formalmente na loja (presencialmente ou por escrito via e-mail/carta).",
								"Dê prazo de 30 dias para conserto (ou exija troca imediata se defeito grave).",
								"Se loja não resolver em 30 dias, envie notificação exigindo: troca, reembolso ou abatimento (escolha o que preferir).",
								"Se loja ignorar, registre reclamação no Procon (online ou presencialmente).",
								"Se Procon não resolver, procure advogado ou Juizado Especial Cível (pequenas causas) para processar a loja.",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Garantia Legal vs Garantia Contratual
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Garantia Legal (Obrigatória por Lei)
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Produtos duráveis (eletrônicos, eletrodomésticos): 90 dias",
								"→ Produtos não duráveis (alimentos, cosméticos): 30 dias",
								"→ Começa a contar da data de entrega (não da compra)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Garantia Contratual (Extra, Oferecida Pelo Fabricante)
						</Headline>
						<BodyText className="mb-4">
							Fabricante pode oferecer garantia adicional (1 ano, 2 anos, etc.).
							Ela SOMA com a garantia legal.
						</BodyText>
						<BodyText>
							<strong>Exemplo:</strong> Notebook com garantia de 1 ano do
							fabricante + 90 dias de garantia legal = 1 ano e 3 meses de
							cobertura total.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Você Pode Exigir Reembolso Imediatamente
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Produto veio com defeito de fábrica (nunca funcionou)",
								"→ Defeito é grave e impede uso (geladeira não gela, TV não liga)",
								"→ Produto é essencial e você não pode esperar 30 dias",
								"→ Loja/fabricante não consertou em 30 dias",
								"→ Produto já foi consertado 2+ vezes e defeito voltou",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Reclamar no Procon
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="check"
							items={[
								"Acesse site do Procon do seu estado ou consumidor.gov.br (plataforma federal).",
								"Registre reclamação com: nota fiscal, fotos do defeito, histórico de contato com loja.",
								"Procon notifica empresa e media acordo.",
								"Prazo: empresas costumam responder em 5-10 dias (querem evitar multa).",
								"Se empresa não resolver, Procon pode aplicar multa e você pode processar judicialmente.",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						E Se Loja Insistir Que "Só Conserta"?
					</Headline>

					<BodyText className="mb-4">
						Loja não pode te obrigar a aceitar conserto após 30 dias. A escolha
						entre troca/reembolso/abatimento é SUA, garantida pelo CDC. Se loja
						recusar:
					</BodyText>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Cite o artigo 18 do CDC (direito de escolher entre troca, reembolso ou abatimento)",
								"→ Registre reclamação no Procon",
								"→ Processe a loja no Juizado Especial Cível (até R$ 40 mil não precisa advogado)",
								"→ Você pode ganhar reembolso + indenização por danos morais (se houve má-fé da loja)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Advogado Especialista em Direito do Consumidor
						</Headline>
						<BodyText className="mb-6">
							Advogados especializados em defesa do consumidor analisam seu
							caso, notificam a empresa, negociam acordo e entram com ação no
							Juizado Especial. Muitos trabalham com honorários de êxito (só
							cobram se você ganhar).
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Advogado Consumidor</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 41: Inventário */}
			{post.slug === "inventario-apos-falecimento-como-funciona" && (
				<>
					<BodyText>
						Um familiar faleceu e deixou bens (casa, carro, dinheiro em conta).
						Você não sabe se precisa fazer inventário, quanto custa, quanto
						tempo demora, se pode fazer em cartório... Este guia explica tudo
						sobre inventário: o que é, quando é obrigatório, tipos, documentos e
						custos envolvidos.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							O Que É Inventário?
						</Headline>
						<BodyText>
							Inventário é o processo legal que identifica todos os bens
							deixados pelo falecido, paga dívidas pendentes e divide herança
							entre herdeiros. É obrigatório por lei quando há bens em nome da
							pessoa que faleceu.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando É Obrigatório Fazer Inventário?
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Quando falecido tinha bens em nome dele (imóvel, carro, dinheiro em conta, investimentos)",
								"→ Prazo legal: até 2 meses após o falecimento (mas na prática pode ser feito depois, com multa de ITCMD)",
								"→ Se não fizer inventário, herdeiros não podem vender bens nem transferir para nome deles",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							Quando NÃO É Necessário
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Falecido não tinha bens em nome dele",
								"→ Todos os bens eram em regime de comunhão total com cônjuge sobrevivente (alguns casos dispensam inventário)",
								"→ Havia testamento com todas as disposições claras e sem conflitos",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Tipos de Inventário
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Inventário Extrajudicial (Cartório) — Mais Rápido
						</Headline>
						<BodyText className="mb-4">
							<strong>Quando usar:</strong>
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Todos os herdeiros são maiores de idade e capazes",
								"→ Não há testamento OU testamento é claro e todos concordam",
								"→ Herdeiros estão de acordo com a divisão dos bens",
							]}
						/>
						<BodyText className="mt-4 mb-4">
							<strong>Vantagens:</strong>
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Mais rápido (30-90 dias)",
								"→ Menos burocrático",
								"→ Custo menor que judicial",
							]}
						/>
						<BodyText className="mt-4 mb-4">
							<strong>Documentos necessários:</strong>
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Certidão de óbito",
								"→ RG e CPF de todos os herdeiros",
								"→ Certidão de casamento do falecido (se era casado)",
								"→ Certidão de nascimento dos filhos",
								"→ Documentos dos bens (escrituras, IPTU, documentos de veículos)",
								"→ Certidão negativa de débitos fiscais",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Custo:</strong> R$ 3.000-15.000 (varia por estado e valor
							dos bens) + ITCMD (4-8% do valor dos bens) + honorários
							advocatícios (R$ 5.000-20.000).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Inventário Judicial (Justiça) — Quando Há Conflito
						</Headline>
						<BodyText className="mb-4">
							<strong>Quando usar:</strong>
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Há herdeiros menores de idade ou incapazes",
								"→ Herdeiros discordam sobre divisão de bens",
								"→ Há testamento contestado",
								"→ Falecido tinha dívidas complexas",
							]}
						/>
						<BodyText className="mt-4 mb-4">
							<strong>Desvantagens:</strong>
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Mais demorado (1-3 anos, pode chegar a 10 anos se houver litígio)",
								"→ Mais caro (honorários advocatícios maiores + custas judiciais)",
								"→ Mais burocrático",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Custo:</strong> R$ 10.000-50.000+ (dependendo da
							complexidade) + ITCMD (4-8%).
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						ITCMD — Imposto Sobre Herança
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							ITCMD (Imposto de Transmissão Causa Mortis e Doação) é imposto
							estadual cobrado sobre herança. Alíquota varia por estado:
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ São Paulo: 4%",
								"→ Rio de Janeiro: 4-8% (progressivo)",
								"→ Minas Gerais: 5%",
								"→ Outros estados: 2-8%",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Base de cálculo:</strong> Valor venal dos bens (imóveis =
							valor do IPTU; veículos = tabela FIPE).
						</BodyText>
						<BodyText className="mt-4">
							<strong>Prazo:</strong> Deve ser pago antes da finalização do
							inventário.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Passo a Passo do Inventário Extrajudicial
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="check"
							items={[
								"Contrate advogado (obrigatório por lei para inventário).",
								"Junte todos os documentos (certidão de óbito, RG/CPF herdeiros, documentos dos bens).",
								"Advogado elabora escritura pública de inventário (lista bens, dívidas, divisão entre herdeiros).",
								"Todos os herdeiros comparecem ao cartório para assinar escritura.",
								"Pague ITCMD (imposto sobre herança).",
								"Cartório registra escritura e emite certidões.",
								"Bens são transferidos para nome dos herdeiros (registro de imóveis, Detran para veículos).",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quanto Custa Fazer Inventário?
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ ITCMD (imposto estadual): 4-8% do valor dos bens",
								"→ Honorários advocatícios: R$ 5.000-20.000 (extrajudicial) ou R$ 10.000-50.000+ (judicial)",
								"→ Custas cartorárias: R$ 2.000-10.000 (varia por estado e valor dos bens)",
								"→ Certidões e documentos: R$ 500-2.000",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Exemplo:</strong> Herança de R$ 500.000 em SP = ITCMD R$
							20.000 + advogado R$ 10.000 + cartório R$ 5.000 = ~R$ 35.000
							total.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Perguntas Frequentes
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Quem paga os custos do inventário?</strong>
							<br />
							Os custos são pagos pela própria herança (antes da divisão entre
							herdeiros). Todos os herdeiros dividem proporcionalmente.
						</BodyText>
						<BodyText className="mb-4">
							<strong>E se não fizer inventário?</strong>
							<br />
							Bens ficam "bloqueados" — não podem ser vendidos, transferidos ou
							usados como garantia. Há multa de ITCMD (10% ao ano de atraso).
							Após 10 anos, herança pode ser considerada abandonada.
						</BodyText>
						<BodyText>
							<strong>Pode fazer inventário mesmo após anos?</strong>
							<br />
							Sim, não há prazo máximo. Mas quanto mais tempo passa, maior a
							multa de ITCMD e mais difícil reunir documentos.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Advogado de Família e Sucessões
						</Headline>
						<BodyText className="mb-6">
							Advogados especializados em inventário e sucessões analisam
							documentos, escolhem melhor tipo de inventário (extrajudicial ou
							judicial), calculam ITCMD, elaboram escritura, representam
							herdeiros e resolvem conflitos.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Advogado Especialista</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 42: Vale a Pena Contratar Advogado */}
			{post.slug === "vale-pena-contratar-advogado-custos" && (
				<>
					<BodyText>
						Você tem um problema jurídico (foi demitido, quer se divorciar, teve
						acidente, precisa cobrar dívida) e está se perguntando: "Vale a pena
						contratar advogado ou tento resolver sozinho?". Este guia compara
						custos, explica quando advogado é obrigatório e quando compensa
						contratar.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							Quando Advogado É Obrigatório Por Lei
						</Headline>
						<BodyText className="mb-4">
							Em alguns casos, você NÃO tem escolha — a lei exige advogado:
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Divórcio (mesmo consensual em cartório)",
								"→ Inventário (partilha de bens após falecimento)",
								"→ Ações trabalhistas acima de R$ 40 mil",
								"→ Ações cíveis acima de 20 salários mínimos (no Juizado Especial)",
								"→ Recursos em tribunais superiores (TJ, STJ, STF)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quanto Custa Contratar Advogado?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Consulta Inicial
						</Headline>
						<BodyText>
							<strong>Preço médio:</strong> R$ 200-800 (1 hora).
							<br />
							Muitos advogados oferecem primeira consulta gratuita para avaliar
							viabilidade do caso.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							2. Honorários Fixos (Valor Fechado)
						</Headline>
						<BodyText className="mb-4">
							Advogado cobra valor fixo pelo serviço, independente do resultado.
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Divórcio consensual: R$ 1.500-5.000",
								"→ Inventário extrajudicial: R$ 5.000-20.000",
								"→ Ação trabalhista simples: R$ 2.000-8.000",
								"→ Contratos e pareceres: R$ 500-5.000",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							3. Honorários de Êxito (% do Resultado)
						</Headline>
						<BodyText className="mb-4">
							Advogado só recebe se você ganhar a ação. Cobra % do valor obtido
							(sentença ou acordo).
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Porcentagem comum: 20-30% do valor ganho",
								"→ Vantagem: você não paga se perder",
								"→ Desvantagem: se ganhar muito, % pode ficar alto",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Exemplo:</strong> Ação trabalhista de R$ 50.000 ganha →
							Advogado recebe R$ 10.000-15.000 (20-30%).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							4. Honorários Mensais (Advocacia Preventiva)
						</Headline>
						<BodyText className="mb-4">
							Empresas e pessoas físicas contratam advogado mensal para
							consultas ilimitadas, revisão de contratos, etc.
						</BodyText>
						<BodyText>
							<strong>Preço médio:</strong> R$ 500-3.000/mês (pessoa física) ou
							R$ 2.000-20.000/mês (empresas).
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Vale a Pena Contratar Advogado?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							✅ Vale a Pena Contratar Se:
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Caso é complexo (você não entende bem as leis envolvidas)",
								"→ Valor em jogo é alto (acima de R$ 10.000)",
								"→ Adversário tem advogado (empresa, ex-cônjuge com advogado)",
								"→ É obrigatório por lei (divórcio, inventário)",
								"→ Você não tem tempo para estudar e fazer sozinho",
								"→ Já tentou resolver sozinho e não conseguiu",
								"→ Risco de perder por erro técnico (prazos, formalidades)",
							]}
						/>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<Headline size="sm" className="mb-4 text-primary">
							❌ Tente Sozinho Se:
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Caso é simples (cobrança de dívida pequena, Juizado até R$ 20 salários mínimos)",
								"→ Você tem conhecimento jurídico básico ou tempo para pesquisar",
								"→ Valor em jogo é baixo (custo de advogado seria quase o valor que vai ganhar)",
								"→ É possível resolver administrativamente (Procon, conciliação)",
								"→ Defensoria Pública não atende seu caso e advogado é muito caro",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Defensoria Pública — Advogado Gratuito
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BodyText className="mb-4">
							Se sua renda familiar é até 3 salários mínimos, você tem direito a
							advogado gratuito da Defensoria Pública.
						</BodyText>
						<BodyText className="mb-4">
							<strong>Atende:</strong> Casos criminais, trabalhistas, cíveis, de
							família (divórcio, pensão), consumidor.
						</BodyText>
						<BodyText>
							<strong>Como acessar:</strong> Procure Defensoria Pública do seu
							estado (presencialmente ou online).
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Comparação: Com e Sem Advogado
					</Headline>

					<ContentCard variant="default">
						<BodyText className="mb-4">
							<strong>Exemplo 1: Ação Trabalhista de R$ 30.000</strong>
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Sem advogado: Você pode entrar sozinho no Juizado. Risco: errar cálculos, perder prazos, aceitar acordo ruim.",
								"→ Com advogado (êxito 25%): Advogado aumenta chances de ganhar e conseguir valor maior. Você paga R$ 7.500 se ganhar R$ 30.000.",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Resultado:</strong> Com advogado, você provavelmente ganha
							mais (advogado negocia melhor, evita erros). Vale a pena.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<BodyText className="mb-4">
							<strong>Exemplo 2: Divórcio Consensual</strong>
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Sem advogado: Não pode (lei exige advogado).",
								"→ Com advogado: R$ 2.000-5.000. Necessário para fazer escritura no cartório.",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Resultado:</strong> Obrigatório. Escolha advogado com
							preço justo (peça orçamentos).
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-6">
						<BodyText className="mb-4">
							<strong>Exemplo 3: Cobrança de Dívida de R$ 2.000</strong>
						</BodyText>
						<BulletList
							variant="arrow"
							items={[
								"→ Sem advogado: Você entra no Juizado Especial (até 20 salários não precisa advogado). Custo zero.",
								"→ Com advogado: R$ 1.000-2.000 (quase o valor da dívida).",
							]}
						/>
						<BodyText className="mt-4">
							<strong>Resultado:</strong> Não vale a pena. Tente sozinho no
							Juizado.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Escolher Bom Advogado
					</Headline>

					<ContentCard variant="accent" accentPosition="left">
						<BulletList
							variant="arrow"
							items={[
								"→ Verifique especialização (advogado trabalhista para ação trabalhista, etc.)",
								"→ Peça indicações de amigos/familiares",
								"→ Consulte OAB para verificar se está regularizado",
								"→ Peça orçamento detalhado (compare preços de 3 advogados)",
								"→ Pergunte sobre estratégia do caso na consulta inicial",
								"→ Prefira honorários de êxito se não tiver como pagar antecipado",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Precisa de um Advogado?
						</Headline>
						<BodyText className="mb-6">
							Publique seu pedido na Savoir Link, descreva seu caso e seu
							orçamento, e advogados qualificados da sua região entram em
							contato com você.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 43: Preço Diarista */}
		</>
	);
}
