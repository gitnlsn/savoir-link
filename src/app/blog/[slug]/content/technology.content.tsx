import Link from "next/link";
import { BulletList } from "~/components/ui/bullet-list";
import { PrimaryButton } from "~/components/ui/buttons";
import { ContentCard } from "~/components/ui/content-card";
import { BodyText, Headline, Label } from "~/components/ui/typography";
import type { BlogPost } from "~/data/blog-posts";

export function TechnologyContent({ post }: { post: BlogPost }) {
	return (
		<>
			{post.slug === "computador-lento-7-causas-como-resolver" && (
				<>
					<BodyText>
						Seu computador leva 10 minutos para ligar, trava ao abrir programas,
						o mouse congela... Você já reiniciou mil vezes mas continua lento.
						Insuportavelmente lento.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							O Que Pode Estar Causando Isso?
						</Headline>
						<BodyText>
							Computador lento tem diversas causas: vírus, falta de memória RAM,
							disco cheio, programas pesados abrindo sozinhos, hardware antigo.
							Vamos identificar a causa raiz e resolver definitivamente.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						7 Causas Principais de PC Lento + Soluções
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Vírus ou Malware
						</Headline>
						<BodyText className="mb-4">
							Sinais: Lentidão extrema, programas abrindo sozinhos, propagandas
							aparecendo. Solução: Execute antivírus (Windows Defender ou
							Malwarebytes gratuito).
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							2. Pouca Memória RAM
						</Headline>
						<BodyText className="mb-4">
							Sinais: Lentidão ao abrir múltiplos programas. Solução: Verifique
							uso de RAM no Gerenciador de Tarefas (Ctrl+Shift+Esc). Se sempre
							acima de 80%, considere upgrade de RAM.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							3. Disco Cheio (HD/SSD)
						</Headline>
						<BodyText className="mb-4">
							Sinais: Espaço em disco abaixo de 10%. Solução: Limpe arquivos
							temporários, desinstale programas não usados, mova arquivos para
							HD externo.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							4. Muitos Programas na Inicialização
						</Headline>
						<BodyText className="mb-4">
							Sinais: Demora para ligar. Solução: Gerenciador de Tarefas →
							Inicializar → Desabilite programas desnecessários.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							5. HD Antigo (Não SSD)
						</Headline>
						<BodyText className="mb-4">
							Sinais: Lentidão geral, especialmente ao ligar. Solução: Upgrade
							para SSD (melhoria de desempenho imediata).
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							6. Fragmentação de Disco
						</Headline>
						<BodyText className="mb-4">
							Sinais: HD lento ao acessar arquivos. Solução: Desfragmentar disco
							(Windows → Desfragmentar e Otimizar Unidades).
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							7. Sistema Operacional Desatualizado
						</Headline>
						<BodyText>
							Sinais: Windows muito antigo. Solução: Atualize Windows Update ou
							considere reinstalação limpa do sistema.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Precisa de Ajuda Técnica?
						</Headline>
						<BodyText className="mb-6">
							Técnicos de informática diagnosticam o problema, removem vírus,
							fazem limpeza completa e otimizam seu PC para máximo desempenho.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Técnico Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 30: Como Saber Se Celular Tem Vírus */}
			{post.slug === "como-saber-se-celular-tem-virus" && (
				<>
					<BodyText>
						Seu celular está estranho: bateria acaba em 3 horas, esquenta
						demais, propagandas aparecem do nada, apps abrem sozinhos. Você
						suspeita: será que é vírus?
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-6"
					>
						<Headline size="sm" className="mb-4">
							Sim, Celular Pega Vírus (Especialmente Android)
						</Headline>
						<BodyText>
							Malware mobile rouba dados, consome bateria, exibe propagandas,
							envia SMS premium e monitora suas atividades. Aprenda a
							identificar e remover.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						5 Sinais de Alerta de Vírus no Celular
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Bateria acabando rápido demais (mesmo sem uso intenso)",
								"→ Celular esquentando sem motivo aparente",
								"→ Propagandas aparecendo na tela inicial ou em apps que não tinham antes",
								"→ Apps desconhecidos instalados sem sua permissão",
								"→ Uso de dados móveis altíssimo (vírus envia informações para servidores externos)",
								"→ Lentidão extrema e travamentos frequentes",
								"→ SMS enviados automaticamente (vírus envia SMS premium cobrando da sua conta)",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Remover Vírus do Celular
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Passo 1: Identifique Apps Suspeitos
						</Headline>
						<BodyText className="mb-6">
							Configurações → Apps → Veja apps que você não se lembra de
							instalar → Desinstale.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							Passo 2: Execute Antivírus
						</Headline>
						<BodyText className="mb-6">
							Instale antivírus confiável (Avast Mobile, Bitdefender, Kaspersky)
							e execute varredura completa.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							Passo 3: Limpe Cache e Dados
						</Headline>
						<BodyText className="mb-6">
							Configurações → Armazenamento → Limpar cache. Também limpe dados
							de navegador.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							Passo 4: Restauração de Fábrica (Se Necessário)
						</Headline>
						<BodyText>
							Se vírus persiste: Faça backup de fotos/contatos e restaure
							celular às configurações de fábrica.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Precisa de Ajuda Profissional?
						</Headline>
						<BodyText className="mb-6">
							Técnicos especializados removem vírus de celular, recuperam dados
							e garantem segurança total do aparelho.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Técnico Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 31: Propaganda Aparecendo Sozinha no PC */}
			{post.slug === "propaganda-aparecendo-sozinha-pc-como-remover" && (
				<>
					<BodyText>
						Você está trabalhando e POP: propaganda. Fecha a propaganda,
						continua trabalhando, POP: outra propaganda. Você nem está com
						navegador aberto e as propagandas aparecem sozinhas. Desesperador.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							O Que É Isso? Adware
						</Headline>
						<BodyText>
							Adware é software malicioso que exibe propagandas intrusivas. Ele
							se instala quando você baixa programas "grátis" de sites
							duvidosos. Vamos removê-lo definitivamente.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Remover Adware Passo a Passo
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Passo 1: Desinstale Programas Suspeitos
						</Headline>
						<BodyText className="mb-6">
							Painel de Controle → Programas e Recursos → Veja programas
							instalados recentemente que você não reconhece → Desinstale.
							Procure por nomes estranhos ou programas que você não se lembra de
							instalar.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							Passo 2: Remova Extensões Maliciosas do Navegador
						</Headline>
						<BodyText className="mb-6">
							Chrome: Configurações → Extensões → Remova extensões
							desconhecidas. Firefox: Menu → Complementos → Extensões → Remova.
							Edge: Configurações → Extensões → Remova.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							Passo 3: Limpe Cache e Cookies
						</Headline>
						<BodyText className="mb-6">
							Chrome: Ctrl+Shift+Delete → Marque "Cookies" e "Imagens em cache"
							→ Limpar dados. Isso remove rastros do adware.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							Passo 4: Execute Antivírus + Anti-Malware
						</Headline>
						<BodyText className="mb-6">
							Windows Defender + Malwarebytes (gratuito). Execute varredura
							completa. Malwarebytes é especializado em remover adware.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							Passo 5: Verifique Configurações de Inicialização
						</Headline>
						<BodyText>
							Gerenciador de Tarefas (Ctrl+Shift+Esc) → Inicializar → Desabilite
							programas desconhecidos que iniciam com Windows.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Ainda Aparecendo Propagandas?
						</Headline>
						<BodyText className="mb-6">
							Técnicos especializados removem adware persistente, limpam
							registro do Windows e garantem que propagandas não voltem.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Técnico Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 32: Computador Reiniciando Sozinho */}
			{post.slug === "computador-reiniciando-sozinho-causas-solucoes" && (
				<>
					<BodyText>
						Você está trabalhando, escrevendo um documento importante, e de
						repente: tela azul, reinicialização, tudo perdido. E acontece de
						novo. E de novo. Computador reiniciando sozinho é um dos problemas
						mais frustrantes.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-6"
					>
						<Headline size="sm" className="mb-4">
							Por Que Isso Acontece?
						</Headline>
						<BodyText>
							Reinicializações aleatórias podem ser causadas por
							superaquecimento, problemas de hardware (RAM, fonte), drivers
							desatualizados, vírus ou erro crítico do Windows (BSOD - Blue
							Screen of Death).
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Principais Causas + Soluções
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							1. Superaquecimento
						</Headline>
						<BodyText className="mb-6">
							Sintomas: PC reinicia ao executar programas pesados, ventoinhas
							fazem barulho. Solução: Limpe poeira interna, verifique coolers
							funcionando, aplique pasta térmica nova no processador.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							2. Problema de Hardware (RAM ou Fonte)
						</Headline>
						<BodyText className="mb-6">
							Sintomas: Reinicializações aleatórias sem padrão. Solução: Teste
							memória RAM (Windows Memory Diagnostic) e verifique se fonte de
							alimentação está fornecendo energia estável.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							3. Drivers Desatualizados ou Corrompidos
						</Headline>
						<BodyText className="mb-6">
							Sintomas: Tela azul com mensagem de erro de driver. Solução:
							Atualize drivers de placa de vídeo, chipset e dispositivos via
							Gerenciador de Dispositivos.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							4. Vírus ou Malware
						</Headline>
						<BodyText className="mb-6">
							Sintomas: Reinicializações + lentidão + propagandas. Solução:
							Execute antivírus completo (Windows Defender + Malwarebytes).
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							5. Erro Crítico do Windows (BSOD)
						</Headline>
						<BodyText>
							Sintomas: Tela azul com código de erro antes de reiniciar.
							Solução: Anote código de erro, pesquise solução específica ou
							restaure Windows a ponto anterior.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Problema Persiste?
						</Headline>
						<BodyText className="mb-6">
							Técnicos diagnosticam hardware, identificam componentes com
							defeito e resolvem problemas críticos de sistema que causam
							reinicializações.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Técnico Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 33: Como Remover Vírus Sem Antivírus */}
			{post.slug === "como-remover-virus-pc-sem-antivirus" && (
				<>
					<BodyText>
						Seu antivírus não está funcionando, ou pior: o vírus desativou o
						antivírus. Você precisa remover o vírus manualmente mas não sabe
						como. Calma, existe solução.
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							É Possível Remover Vírus Sem Antivírus?
						</Headline>
						<BodyText>
							Sim, usando Modo de Segurança do Windows (vírus não carrega),
							remoção manual de arquivos maliciosos e restauração do sistema.
							Requer atenção e seguir passos corretamente.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Passo a Passo: Remoção Manual de Vírus
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Passo 1: Inicie em Modo de Segurança
						</Headline>
						<BodyText className="mb-6">
							Reinicie PC → Pressione F8 repetidamente → Escolha "Modo de
							Segurança com Rede". Em Windows 10/11: Configurações → Atualização
							e Segurança → Recuperação → Reinicialização Avançada → Solução de
							Problemas → Opções Avançadas → Configurações de Inicialização →
							Modo de Segurança.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							Passo 2: Abra Gerenciador de Tarefas
						</Headline>
						<BodyText className="mb-6">
							Ctrl+Shift+Esc → Processos → Procure por processos com nomes
							estranhos consumindo muita CPU/memória → Clique direito → Abrir
							local do arquivo → Anote caminho → Finalizar processo.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							Passo 3: Delete Arquivos Maliciosos
						</Headline>
						<BodyText className="mb-6">
							Vá ao caminho anotado (geralmente em C:\Users\[Nome]\AppData ou
							C:\Temp) → Delete a pasta do vírus. Se Windows não permitir, use
							ferramentas como Unlocker (gratuito).
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							Passo 4: Limpe Registro do Windows
						</Headline>
						<BodyText className="mb-6">
							Win+R → digite "regedit" → Ctrl+F → pesquise nome do vírus →
							Delete entradas relacionadas. CUIDADO: não delete entradas não
							relacionadas ao vírus.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							Passo 5: Restauração do Sistema
						</Headline>
						<BodyText>
							Painel de Controle → Recuperação → Abrir Restauração do Sistema →
							Escolha ponto de restauração ANTES da infecção → Restaurar.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Precisa de Ajuda Profissional?
						</Headline>
						<BodyText className="mb-6">
							Remoção manual de vírus é arriscada (pode danificar sistema).
							Técnicos especializados removem vírus com segurança e garantem
							limpeza completa.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Técnico Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 34: Navegador Abrindo Páginas Sozinho */}
			{post.slug === "navegador-abrindo-paginas-sozinho-como-resolver" && (
				<>
					<BodyText>
						Você abre Chrome e ele vai direto para um site estranho. Você digita
						"google.com" e é redirecionado para outro site. Novas abas abrem
						sozinhas com propagandas. Seu navegador foi sequestrado.
					</BodyText>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-6"
					>
						<Headline size="sm" className="mb-4">
							O Que É Browser Hijacker?
						</Headline>
						<BodyText>
							É malware que sequestra configurações do navegador: muda página
							inicial, altera mecanismo de busca, redireciona para sites
							maliciosos e exibe propagandas incessantes. Vamos recuperar
							controle.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Como Limpar Navegador Sequestrado
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							Passo 1: Remova Extensões Maliciosas
						</Headline>
						<BodyText className="mb-6">
							Chrome: Configurações → Extensões → Remova TODAS extensões que
							você não instalou conscientemente. Firefox/Edge: mesmo processo.
							Extensões maliciosas são principal causa de sequestro.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							Passo 2: Restaure Configurações do Navegador
						</Headline>
						<BodyText className="mb-6">
							Chrome: Configurações → Redefinir configurações → Restaurar
							padrões originais. Firefox: Menu → Ajuda → Informações para
							solução de problemas → Restaurar Firefox. Edge: Configurações →
							Redefinir configurações.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							Passo 3: Limpe Cache e Cookies
						</Headline>
						<BodyText className="mb-6">
							Ctrl+Shift+Delete → Marque "Cookies e dados de sites" + "Imagens e
							arquivos em cache" → Todo o período → Limpar dados.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							Passo 4: Verifique Página Inicial e Mecanismo de Busca
						</Headline>
						<BodyText className="mb-6">
							Configurações → Na inicialização → Defina página inicial que você
							quer. Mecanismo de pesquisa → Selecione Google (ou preferido) e
							remova mecanismos estranhos.
						</BodyText>

						<Headline size="sm" className="mb-4 text-primary">
							Passo 5: Execute Anti-Malware
						</Headline>
						<BodyText>
							Malwarebytes (gratuito) é especializado em remover browser
							hijackers. Execute varredura completa.
						</BodyText>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Ainda Redirecionando?
						</Headline>
						<BodyText className="mb-6">
							Técnicos removem browser hijackers persistentes, limpam DNS e
							garantem navegação segura sem redirecionamentos.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Encontrar Técnico Agora</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 35: Vale a Pena Chamar Técnico de Informática */}
			{post.slug === "vale-pena-chamar-tecnico-informatica-precos" && (
				<>
					<BodyText>
						Computador com problema, vírus, lentidão... Você fica na dúvida:
						tento resolver sozinho vendo tutoriais no YouTube ou chamo um
						técnico? Quanto custa? Vale a pena?
					</BodyText>

					<ContentCard variant="accent" accentPosition="left" className="mt-6">
						<Headline size="sm" className="mb-4">
							A Pergunta Certa
						</Headline>
						<BodyText>
							Não é "vale a pena?", mas sim "vale a pena PARA MIM, no MEU
							caso?". Depende da complexidade, seu nível técnico, tempo
							disponível e valor do seu tempo.
						</BodyText>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quanto Custa Técnico de Informática?
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Visita técnica domiciliar: R$ 80-150",
								"→ Remoção de vírus: R$ 100-200",
								"→ Formatação + reinstalação Windows: R$ 150-300",
								"→ Upgrade de hardware (instalação): R$ 80-150",
								"→ Recuperação de dados: R$ 200-800 (dependendo complexidade)",
								"→ Manutenção preventiva: R$ 100-180",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						Quando Vale a Pena Chamar Técnico?
					</Headline>

					<ContentCard variant="default">
						<Headline size="sm" className="mb-4 text-primary">
							✅ Vale a Pena Se:
						</Headline>
						<BulletList
							variant="arrow"
							items={[
								"→ Problema complexo (hardware, tela azul recorrente, vírus persistente)",
								"→ Você não tem conhecimento técnico para resolver",
								"→ Tentou resolver sozinho e piorou o problema",
								"→ Precisa de garantia de que será resolvido corretamente",
								"→ Tempo é mais valioso que o custo do técnico (profissionais ocupados)",
								"→ Dados importantes em risco",
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
								"→ Problema simples (limpeza de disco, desinstalar programa)",
								"→ Você tem conhecimento técnico básico",
								"→ Tutorial confiável disponível",
								"→ Não há risco de perder dados importantes",
								"→ Tem tempo disponível para tentar",
							]}
						/>
					</ContentCard>

					<Headline size="sm" className="mt-8 mb-4">
						O Que Técnico Faz Que Você Não Consegue?
					</Headline>

					<ContentCard variant="default">
						<BulletList
							variant="arrow"
							items={[
								"→ Diagnóstico preciso de hardware (testa componentes)",
								"→ Remoção completa de vírus complexos",
								"→ Recuperação de dados de HD com defeito",
								"→ Otimização avançada de sistema",
								"→ Instalação correta de drivers e configurações",
								"→ Garantia do serviço (se problema voltar, resolve sem custo)",
							]}
						/>
					</ContentCard>

					<ContentCard
						variant="accent"
						accentPosition="corners"
						className="mt-8"
					>
						<Headline size="sm" className="mb-4">
							Compare Técnicos na Sua Região
						</Headline>
						<BodyText className="mb-6">
							Veja perfis, avaliações, especialidades e preços de técnicos
							qualificados. Escolha o melhor custo-benefício para seu problema.
						</BodyText>
						<div className="text-center">
							<Link href="/publicar">
								<PrimaryButton>Ver Técnicos Disponíveis</PrimaryButton>
							</Link>
						</div>
					</ContentCard>
				</>
			)}

			{/* SEO Article 36: Demissão Sem Justa Causa */}
		</>
	);
}
