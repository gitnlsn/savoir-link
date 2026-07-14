import Link from "next/link";
import { BulletList } from "~/components/ui/bullet-list";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

export function NutritionContent({ post }: { post: BlogPost }) {
	return (
		<>
			{post.slug === "como-perder-barriga-sem-passar-fome" && (
				<>
					<BodyText>
						Você já tentou todas aquelas dietas milagrosas, passou fome por
						semanas, perdeu alguns quilos... e ganhou tudo de volta (e às vezes
						até mais). O famoso efeito sanfona. E agora você se pergunta: é
						realmente possível perder barriga sem passar fome?
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-6"
					>
						<Headline size="sm" className="mb-4">
							✅ SIM, É Possível! (E Sustentável)
						</Headline>
						<BodyText>
							Nutricionistas afirmam: dietas restritivas extremas não funcionam
							a longo prazo. O segredo está em comer os alimentos certos, nos
							horários certos, promovendo saciedade sem passar fome.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						3 Pilares da Perda de Gordura Com Saciedade
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Proteínas em Todas as Refeições
						</Headline>
						<BodyText>
							Proteínas promovem saciedade, preservam massa muscular e aumentam
							metabolismo. Inclua: frango, peixe, ovos, iogurte natural, queijo
							cottage, leguminosas.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							2. Fibras Para Controlar Fome
						</Headline>
						<BodyText>
							Fibras retardam digestão, estabilizam glicemia e prolongam
							saciedade. Fontes: vegetais, frutas com casca, aveia, feijão,
							chia, linhaça.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							3. Gorduras Boas (Sim, Gorduras!)
						</Headline>
						<BodyText>
							Gorduras saudáveis promovem saciedade e são essenciais para
							hormônios. Inclua: abacate, castanhas, azeite, salmão, sementes.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Estratégias Práticas
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Coma a cada 3-4 horas: evita fome extrema e compulsões",
								"Use pratos menores: controla porções sem sensação de privação",
								"Beba água antes das refeições: aumenta saciedade",
								"Mastigue devagar: dá tempo ao cérebro registrar saciedade (20min)",
								"Durma bem: sono ruim aumenta hormônios da fome (grelina)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Quando Procurar Nutricionista
						</Headline>
						<BodyText className="mb-6">
							Um nutricionista cria plano alimentar individualizado,
							considerando suas preferências, rotina e metabolismo.
							Emagrecimento sustentável requer orientação profissional.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Nutricionista Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 16: Dieta Low Carb Funciona */}
			{post.slug === "dieta-low-carb-funciona-verdade-nutricionistas" && (
				<>
					<BodyText>
						Todo mundo está fazendo low carb. Seu colega emagreceu 10kg. Sua
						amiga eliminou a barriga. E você se pergunta: será que funciona
						mesmo? E mais importante: é seguro fazer por conta própria?
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Nutricionistas Dizem
					</Headline>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<BodyText>
							<strong>Sim, low carb pode funcionar</strong> — mas não é solução
							universal, não é para todos, e fazer sem orientação profissional
							pode trazer riscos sérios à saúde.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Funciona
					</Headline>

					<BodyText>
						Ao reduzir carboidratos drasticamente (abaixo de 100g/dia), o corpo
						entra em cetose: queima gordura como fonte primária de energia.
						Insulina cai, retenção de líquido diminui, apetite reduz.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						Para Quem É Indicado (Com Orientação)
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Pessoas com resistência à insulina ou pré-diabetes",
								"Quem tem muita gordura abdominal para perder",
								"Pessoas sem problemas renais, hepáticos ou cardíacos",
								"Como estratégia temporária (3-6 meses) supervisionada",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							⚠️ Riscos Sem Orientação Profissional
						</Headline>
						<BulletList
							variant="dash"
							items={[
								"❌ Deficiência de vitaminas do complexo B, fibras, magnésio",
								"❌ Sobrecarga renal em pessoas predispostas",
								"❌ Efeito sanfona ao voltar a comer carboidratos",
								"❌ Constipação, fadiga, mau hálito (cetose)",
								"❌ Risco aumentado de pedras nos rins",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						A Verdade Que Ninguém Conta
					</Headline>

					<BodyText>
						Low carb funciona para perda de peso temporária, mas o ideal é
						reeducação alimentar com equilíbrio de macronutrientes. Restrição
						extrema não é sustentável para a maioria das pessoas.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Faça Low Carb Com Segurança
						</Headline>
						<BodyText className="mb-6">
							Consulte um nutricionista para avaliar se low carb é adequado para
							você, monitorar saúde e planejar transição sustentável.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Consultar Nutricionista</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 17: Proteína Para Ganhar Massa */}
			{post.slug === "ganhar-massa-muscular-quanta-proteina-comer" && (
				<>
					<BodyText>
						Você treina pesado, mas os músculos não crescem. Será que está
						comendo proteína suficiente? Ou será que está comendo demais e
						desperdiçando dinheiro? Nutricionistas explicam a quantidade EXATA.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-6"
					>
						<Headline size="sm" className="mb-4">
							📊 A Fórmula Cientí fica
						</Headline>
						<BodyText>
							Para ganho de massa muscular (hipertrofia), a recomendação é{" "}
							<strong>
								1,4 a 2 gramas de proteína por quilo de peso corporal por dia
							</strong>
							.
						</BodyText>
						<BodyText className="mt-4">
							Exemplo: pessoa de 70kg precisa de 98 a 140g de proteína
							diariamente, distribuídas ao longo do dia.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Melhores Fontes de Proteína
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Frango: 30g proteína/100g (peito)",
								"Ovo: 6-7g proteína/unidade",
								"Atum: 25g proteína/100g",
								"Iogurte grego: 10g proteína/100g",
								"Feijão: 6g proteína/100g (cozido)",
								"Whey protein: 20-25g proteína/scoop",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Distribuição Ao Longo do Dia
					</Headline>

					<BodyText>
						Não adianta comer toda proteína em uma refeição. O corpo só consegue
						sintetizar ~25-30g por vez. Distribua em 4-5 refeições: café da
						manhã, lanche pré-treino, pós-treino, almoço, jantar.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						Outros Nutrientes Importantíssimos
					</Headline>

					<BodyText>
						Proteína sozinha não constrói músculo. Você também precisa de:
						carboidratos (energia para treino intenso), gorduras boas (hormônios
						anabólicos), vitaminas e minerais, hidratação adequada, SONO
						(crescimento acontece em repouso).
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Monte Sua Dieta Para Hipertrofia
						</Headline>
						<BodyText className="mb-6">
							Nutricionista esportivo cria plano alimentar personalizado para
							seus objetivos, tipo de treino e biotipo. Maximize seus ganhos.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Nutricionista Esportivo</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 18: Dieta Para Diabético */}
			{post.slug === "dieta-diabetico-tipo-2-o-que-comer" && (
				<>
					<BodyText>
						Você acabou de receber o diagnóstico de diabetes tipo 2. O médico
						disse "precisa mudar a alimentação", mas não explicou COMO. O que
						você pode comer? O que deve evitar? Pode comer frutas? E
						carboidratos?
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						O Objetivo da Dieta Para Diabetes
					</Headline>

					<BodyText>
						Manter glicemia (açúcar no sangue) estável, evitando picos e quedas.
						Isso se faz com alimentos de baixo índice glicêmico, fibras e
						distribuição correta de carboidratos ao longo do dia.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Pode Comer
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Vegetais: brócolis, couve-flor, espinafre, abobrinha (à vontade)",
								"Proteínas magras: frango sem pele, peixe, ovos, tofu",
								"Grãos integrais: arroz integral, quinoa, aveia, farinha integral",
								"Leguminosas: feijão, lentilha, grão-de-bico",
								"Frutas com moderação: maçã, pera, frutas vermelhas (evite sucos)",
								"Gorduras boas: azeite, abacate, castanhas, chia",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Evitar ou Limitar
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="dash"
							items={[
								"❌ Açúcar refinado: doces, refrigerantes, bolos, balas",
								"❌ Farinhas brancas: pão branco, massa branca, biscoitos",
								"❌ Sucos (mesmo naturais): concentram açúcar, removem fibras",
								"❌ Frituras e gorduras trans: prejudicam controle glicêmico",
								"❌ Mel, melado, xaropes: são açúcar concentrado",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Método do Prato (Fácil de Seguir)
					</Headline>

					<BodyText>
						Divida o prato em 3 partes: metade com vegetais e saladas, um quarto
						com proteína magra, um quarto com carboidrato complexo (arroz
						integral, batata-doce).
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Acompanhamento Nutricional É Essencial
						</Headline>
						<BodyText className="mb-6">
							Diabetes tipo 2 requer plano alimentar individualizado.
							Nutricionista ajusta dieta conforme sua glicemia, medicação e
							preferências.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>
									Consultar Nutricionista Especializado
								</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 19: Alimentos Aceleram Metabolismo */}
			{post.slug === "alimentos-aceleram-metabolismo-mito-verdade" && (
				<>
					<BodyText>
						Você já ouviu falar que café, pimenta e chá verde aceleram o
						metabolismo e ajudam a emagrecer. Mas será que funciona MESMO? Ou é
						apenas marketing? Nutricionistas explicam a verdade.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							✅ Verdade: Alimentos Termogênicos Existem
						</Headline>
						<BodyText>
							Alguns alimentos realmente aumentam o gasto calórico do corpo ao
							serem metabolizados. Porém, o efeito é MODESTO (5-10% no
							metabolismo) e NÃO é milagroso.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Principais Termogênicos Comprovados
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Café e chá verde: cafeína e catequinas aumentam metabolismo por 3-4h",
								"Pimenta: capsaicina eleva temperatura corporal e gasto energético",
								"Gengibre: compostos bioativos estimulam termogênese",
								"Canela: ajuda a controlar glicemia e reduzir gordura abdominal",
								"Proteínas: efeito térmico alto (30% das calorias gastas na digestão)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							⚠️ A Verdade Que Ninguém Conta
						</Headline>
						<BodyText>
							Termogênicos NÃO emagrecem sozinhos. Você não vai perder barriga
							tomando 5 xícaras de café por dia comendo pizza. Eles são
							COMPLEMENTOS, não substitutos de dieta equilibrada e exercícios.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Realmente Acelera Metabolismo
					</Headline>

					<BodyText>
						Ganhar massa muscular (músculos queimam mais calorias em repouso),
						comer proteína suficiente, não pular refeições (jejum prolongado
						desacelera metabolismo), dormir bem, hidratar-se adequadamente, e
						praticar exercícios regularmente.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Estratégia Real Para Emagrecer
						</Headline>
						<BodyText className="mb-6">
							Nutricionista cria plano alimentar que combina termogênicos com
							dieta balanceada, promovendo emagrecimento sustentável.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Consultar Nutricionista</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 20: Quanta Água Beber */}
			{post.slug === "quanta-agua-beber-por-dia-calculo" && (
				<>
					<BodyText>
						"Beba 2 litros de água por dia." Você já ouviu isso mil vezes. Mas
						essa quantidade é igual para todo mundo? Para uma pessoa de 50kg e
						outra de 100kg? E se você treina? A resposta é mais precisa do que
						você imagina.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-6"
					>
						<Headline size="sm" className="mb-4">
							💧 A Fórmula Correta
						</Headline>
						<BodyText className="mb-4">
							<strong>Adultos:</strong> 35ml de água por quilo de peso corporal
						</BodyText>
						<BodyText className="mb-4">
							<strong>Exemplo:</strong> Pessoa de 70kg = 70 x 35ml = 2.450ml
							(2,5 litros por dia)
						</BodyText>
						<BodyText>
							<strong>Ajustes:</strong> +500ml se faz exercício intenso, +500ml
							em dias muito quentes
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Sinais de Desidratação
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="dash"
							items={[
								"❌ Urina amarelo-escura com cheiro forte",
								"❌ Boca seca e sede constante",
								"❌ Dor de cabeça frequente",
								"❌ Fadiga e falta de energia",
								"❌ Pele seca e sem elasticidade",
								"❌ Constipação intestinal",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Dicas Para Beber Mais Água
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="check"
							items={[
								"Tenha garrafa sempre por perto (visual lembra de beber)",
								"Beba 1 copo logo ao acordar (corpo desidratado pela noite)",
								"Saborizante natural: rodelas de limão, folhas de hortelã, pepino",
								"Alarmes no celular a cada 2 horas",
								"Antes de cada refeição: 1 copo de água",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Água Demais Também É Problema?
					</Headline>

					<BodyText>
						Sim! Beber água em excesso (acima de 4-5L/dia para pessoas comuns)
						pode diluir eletrólitos no sangue (hiponatremia), causando náusea,
						confusão mental e, em casos extremos, riscos graves. Respeite a
						recomendação.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Hidratação Faz Parte da Dieta
						</Headline>
						<BodyText className="mb-6">
							Nutricionista avalia sua hidratação e cria estratégias
							personalizadas para seus objetivos de saúde.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Consultar Nutricionista</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 21: Quando Procurar Nutricionista */}
			{post.slug === "quando-procurar-nutricionista-5-sinais" && (
				<>
					<BodyText>
						Você já tentou emagrecer sozinho várias vezes. Baixou apps, seguiu
						dietas da internet, comprou shakes... nada funcionou a longo prazo.
						Será que está na hora de procurar um nutricionista? Identifique os
						sinais.
					</BodyText>

					<Headline size="sm" className="mt-8 mb-4">
						5 Sinais Que Você PRECISA de Nutricionista
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Efeito Sanfona Constante
						</Headline>
						<BodyText>
							Você emagrece 5kg, ganha 7kg de volta, emagrece 4kg, ganha 6kg...
							esse ciclo indica que suas dietas não são sustentáveis.
							Nutricionista cria plano que você consegue manter para sempre.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							2. Problemas de Saúde (Diabetes, Hipertensão, Colesterol)
						</Headline>
						<BodyText>
							Condições médicas exigem alimentação específica. Nutricionista
							trabalha junto com médico para controlar sua saúde através da
							dieta.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							3. Objetivos Específicos (Hipertrofia, Performance Esportiva)
						</Headline>
						<BodyText>
							Ganhar massa muscular, melhorar desempenho no esporte, preparação
							para competição — requerem nutrição precisa e periodizada.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							4. Relação Complicada Com Comida
						</Headline>
						<BodyText>
							Compulsão alimentar, restrições extremas, culpa ao comer, medo de
							alimentos — nutricionista ajuda a reconstruir relação saudável com
							comida.
						</BodyText>
					</ContentCard>

					<ContentCard variant="default" className="mt-4">
						<Headline size="sm" className="mb-4 text-primary">
							5. Não Sabe Por Onde Começar
						</Headline>
						<BodyText>
							Informações contraditórias, dietas da moda, influencers vendendo
							fórmulas... você está perdido. Nutricionista oferece orientação
							baseada em ciência, não modismos.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Esperar da Consulta
					</Headline>

					<BodyText>
						Avaliação completa (peso, composição corporal, exames), análise de
						hábitos alimentares, plano alimentar individualizado (não dieta
						genérica), acompanhamento regular com ajustes, educação nutricional
						(você aprende a comer para sempre).
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Invista na Sua Saúde
						</Headline>
						<BodyText className="mb-6">
							Nutricionista não é gasto, é investimento em saúde, qualidade de
							vida e longevidade. Publique seu pedido na Savoir Link, descreva o
							que precisa e seu orçamento, e nutricionistas qualificados entram
							em contato com você.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Publicar Pedido</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 22: Não Consigo Perder Barriga na Academia */}
		</>
	);
}
