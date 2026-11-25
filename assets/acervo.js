/*
 * ZELO · Acervo técnico
 * Base de normas, teses e modelos usada pelo Estúdio para montar minutas.
 *
 * Convenções
 * - "conferir: true" marca itens cuja redação ou número deve ser checado na fonte
 *   oficial antes de uso em peça. Não remova a marca sem conferir.
 * - Textos de tese usam variáveis entre chaves duplas, preenchidas pelo Estúdio:
 *   {{responsavel}}, {{cargo}}, {{orgao}}, {{tribunal}}, {{anos}}, {{achado}}, {{valor}}.
 * - Referências ao TCU (Lei 8.443/1992, RI-TCU, resoluções) valem para o TCU.
 *   TCEs e TCMs têm leis orgânicas próprias: o Estúdio avisa quando o tribunal não é o TCU.
 */
window.ZELO_ACERVO = {
  versao: "2026.11.25",

  /* ------------------------------------------------------------------ NORMAS */
  normas: [
    { id: "cf71", ref: "CF/1988, art. 71, II e § 3º", tema: "Competência",
      resumo: "Compete ao TCU julgar as contas dos administradores e responsáveis por dinheiros, bens e valores públicos. Decisões que imputem débito ou multa têm eficácia de título executivo." },
    { id: "cf5lv", ref: "CF/1988, art. 5º, LIV e LV", tema: "Garantias",
      resumo: "Devido processo legal, contraditório e ampla defesa, com os meios e recursos a ela inerentes, inclusive em processo administrativo." },
    { id: "sv3", ref: "Súmula Vinculante 3 (STF)", tema: "Garantias",
      resumo: "Nos processos perante o TCU asseguram-se o contraditório e a ampla defesa quando da decisão puder resultar anulação ou revogação de ato que beneficie o interessado, exceto a apreciação da legalidade do ato de concessão inicial de aposentadoria, reforma e pensão." },
    { id: "l8443_12", ref: "Lei 8.443/1992, art. 12", tema: "Citação e audiência",
      resumo: "Verificada irregularidade, o relator define a responsabilidade individual ou solidária, ordena a citação (débito) ou a audiência (sem débito) para defesa ou recolhimento em quinze dias. § 2º: reconhecida a boa-fé, a liquidação tempestiva do débito atualizado sana o processo." },
    { id: "l8443_16", ref: "Lei 8.443/1992, art. 16", tema: "Julgamento",
      resumo: "As contas são julgadas regulares, regulares com ressalva (impropriedade ou falta de natureza formal sem dano ao erário) ou irregulares (omissão no dever de prestar contas, ato ilegal ou antieconômico, dano ao erário, desfalque ou desvio)." },
    { id: "l8443_20", ref: "Lei 8.443/1992, arts. 20 e 21", tema: "Contas iliquidáveis",
      resumo: "As contas são consideradas iliquidáveis quando caso fortuito ou força maior, comprovadamente alheio à vontade do responsável, tornar materialmente impossível o julgamento de mérito. O Tribunal ordena o trancamento das contas." },
    { id: "l8443_57", ref: "Lei 8.443/1992, arts. 57 e 58", tema: "Sanções",
      resumo: "Multa de até 100% do valor atualizado do débito (art. 57) ou multa por ato irregular sem débito, dentro do limite legal atualizado (art. 58)." },
    { id: "l8443_60", ref: "Lei 8.443/1992, art. 60", tema: "Sanções",
      resumo: "Inabilitação, por cinco a oito anos, para cargo em comissão ou função de confiança, quando a infração for considerada grave pela maioria absoluta do Tribunal." },
    { id: "l8443_rec", ref: "Lei 8.443/1992, arts. 32 a 35 e 48", tema: "Recursos",
      resumo: "Reconsideração (15 dias, efeito suspensivo), embargos de declaração (10 dias), revisão (5 anos, sem efeito suspensivo) e, em fiscalização, pedido de reexame (15 dias, efeito suspensivo)." },
    { id: "lindb20", ref: "LINDB (Decreto-Lei 4.657/1942), art. 20", tema: "LINDB",
      resumo: "Nas esferas administrativa, controladora e judicial, não se decide com base em valores jurídicos abstratos sem considerar as consequências práticas da decisão." },
    { id: "lindb22", ref: "LINDB, art. 22", tema: "LINDB",
      resumo: "Na interpretação de normas de gestão pública, consideram-se os obstáculos e as dificuldades reais do gestor e as exigências das políticas públicas a seu cargo. § 2º: na aplicação de sanções, consideram-se a natureza e a gravidade da infração, os danos, as circunstâncias agravantes ou atenuantes e os antecedentes do agente." },
    { id: "lindb24", ref: "LINDB, art. 24", tema: "LINDB",
      resumo: "A revisão da validade de ato cuja produção já se houver completado levará em conta as orientações gerais da época, sendo vedado declarar inválidas situações plenamente constituídas com base em mudança posterior de orientação geral." },
    { id: "lindb28", ref: "LINDB, art. 28", tema: "LINDB",
      resumo: "O agente público responderá pessoalmente por suas decisões ou opiniões técnicas em caso de dolo ou erro grosseiro." },
    { id: "d9830", ref: "Decreto 9.830/2019, art. 12", tema: "LINDB",
      resumo: "Considera-se erro grosseiro aquele manifesto, evidente e inescusável praticado com culpa grave, caracterizado por ação ou omissão com elevado grau de negligência, imprudência ou imperícia. O montante do dano, por si só, não basta para caracterizá-lo." },
    { id: "l9873", ref: "Lei 9.873/1999, art. 1º", tema: "Prescrição",
      resumo: "Prescreve em cinco anos a ação punitiva da Administração Pública Federal, contados da prática do ato ou, se permanente ou continuado, do dia em que tiver cessado. § 1º: prescrição intercorrente quando o procedimento fica paralisado por mais de três anos, pendente de julgamento ou despacho." },
    { id: "res344", ref: "Resolução TCU 344/2022", tema: "Prescrição",
      resumo: "Regulamenta, no TCU, a prescrição das pretensões punitiva e de ressarcimento, adotando o prazo quinquenal da Lei 9.873/1999, com termos iniciais, causas de interrupção e prescrição intercorrente.", conferir: true },
    { id: "tema899", ref: "STF, Tema 899 (RE 636.886)", tema: "Prescrição",
      resumo: "É prescritível a pretensão de ressarcimento ao erário fundada em decisão de Tribunal de Contas." },
    { id: "tema897", ref: "STF, Tema 897 (RE 852.475)", tema: "Prescrição",
      resumo: "São imprescritíveis as ações de ressarcimento ao erário fundadas na prática de ato doloso tipificado na Lei de Improbidade Administrativa. Delimita o alcance do Tema 899." },
    { id: "in71", ref: "IN TCU 71/2012, art. 6º, II", tema: "TCE",
      resumo: "Dispensa a instauração de tomada de contas especial quando houver transcorrido prazo superior a dez anos entre a data provável do dano e a primeira notificação do responsável pela autoridade administrativa competente.", conferir: true },
    { id: "ms24631", ref: "STF, MS 24.631", tema: "Parecer jurídico",
      resumo: "Distingue parecer facultativo, obrigatório e vinculante para fins de responsabilização do parecerista. No parecer meramente opinativo, o parecerista não é, em regra, responsabilizado solidariamente com o administrador, salvo culpa grave ou erro grosseiro." },
    { id: "l14133_53", ref: "Lei 14.133/2021, art. 53", tema: "Licitações",
      resumo: "Ao final da fase preparatória, o processo licitatório segue para o órgão de assessoramento jurídico, que realiza controle prévio de legalidade mediante análise jurídica da contratação." },
    { id: "l14133_169", ref: "Lei 14.133/2021, art. 169", tema: "Licitações",
      resumo: "As contratações públicas submetem-se a práticas contínuas de gestão de riscos e controle preventivo, organizadas em três linhas de defesa." },
    { id: "tema157", ref: "STF, Tema 157 (RE 848.826)", tema: "Inelegibilidade",
      resumo: "Para fins de inelegibilidade (LC 64/1990, art. 1º, I, g), a apreciação das contas de prefeito, tanto de governo quanto de gestão, é feita pela Câmara Municipal, com auxílio dos Tribunais de Contas, cujo parecer prévio só deixa de prevalecer por decisão de dois terços dos vereadores." },
    { id: "lc64", ref: "LC 64/1990, art. 1º, I, g", tema: "Inelegibilidade",
      resumo: "Inelegibilidade por oito anos de quem tiver as contas rejeitadas por irregularidade insanável que configure ato doloso de improbidade administrativa, por decisão irrecorrível do órgão competente, salvo se suspensa ou anulada pelo Judiciário." }
  ],

  /* ------------------------------------------------------------------ GATILHOS
   * Perguntas do Estúdio. Cada resposta "sim" ativa as teses listadas.
   */
  gatilhos: [
    { id: "g_tempo5",   pergunta: "Passaram mais de 5 anos entre o fato e a primeira notificação ou citação?", teses: ["prescricao"] },
    { id: "g_parado3",  pergunta: "O processo ficou parado por mais de 3 anos sem despacho ou julgamento?", teses: ["prescricao_intercorrente"] },
    { id: "g_tempo10",  pergunta: "Passaram mais de 10 anos entre o fato e a primeira notificação?", teses: ["tce_dez_anos", "prejuizo_defesa"] },
    { id: "g_parecer",  pergunta: "O responsável decidiu com base em parecer jurídico ou técnico?", teses: ["parecer_respaldo", "erro_grosseiro"] },
    { id: "g_delegou",  pergunta: "O ato foi praticado por outra pessoa (delegação, comissão, fiscal do contrato)?", teses: ["ilegitimidade", "nexo_causal"] },
    { id: "g_fora",     pergunta: "Parte do período apontado está fora da gestão do responsável?", teses: ["periodo_gestao"] },
    { id: "g_objeto",   pergunta: "O objeto (obra, serviço, convênio) foi executado ou entregue, ao menos em parte?", teses: ["execucao_objeto", "debito_excessivo"] },
    { id: "g_formal",   pergunta: "A falha é formal, sem dano ao erário?", teses: ["falha_formal"] },
    { id: "g_dificuldade", pergunta: "Havia dificuldades reais na época (emergência, falta de pessoal, pandemia, desastre)?", teses: ["dificuldades_reais"] },
    { id: "g_orientacao", pergunta: "A acusação aplica um entendimento posterior aos fatos?", teses: ["orientacao_epoca"] },
    { id: "g_contraditorio", pergunta: "Houve falha na citação, falta de acesso aos autos ou prova nova sem vista?", teses: ["nulidade_citacao"] },
    { id: "g_boafe",    pergunta: "Há interesse em recolher o débito, se mantido, com reconhecimento da boa-fé?", teses: ["boa_fe_recolhimento"] },
    { id: "g_prefeito", pergunta: "O responsável é ou foi prefeito, com risco de inelegibilidade?", teses: ["inelegibilidade_prefeito"] },
    { id: "g_documentos", pergunta: "Há documentos que comprovam a regular aplicação e não foram juntados até agora?", teses: ["prova_documental"] }
  ],

  /* ------------------------------------------------------------------ TESES
   * etapa: preliminar | prejudicial | merito | subsidiaria
   */
  teses: [
    { id: "nulidade_citacao", etapa: "preliminar", nome: "Nulidade por vício no contraditório",
      quando: "Citação sem descrição individualizada da conduta, sem acesso integral aos autos, ou com juntada de elementos novos sem vista ao responsável.",
      normas: ["cf5lv", "sv3", "l8443_12"],
      texto: "Preliminarmente, a comunicação dirigida a {{responsavel}} não individualiza a conduta que lhe é atribuída, nem demonstra o nexo entre essa conduta e o resultado apontado. Sem essa delimitação, a defesa é obrigada a responder a uma imputação genérica, o que esvazia as garantias do contraditório e da ampla defesa (CF, art. 5º, LV). Requer-se o reconhecimento do vício, com a renovação do ato e a reabertura do prazo, ou, ao menos, que a análise de mérito se restrinja aos fatos efetivamente descritos na comunicação.",
      provas: ["Cópia do ofício de citação ou audiência", "Comprovante de pedido de vista e resposta", "Demonstração dos elementos juntados após a citação"],
      cuidado: "Só alegue se houver vício concreto. Preliminar genérica enfraquece a peça." },

    { id: "ilegitimidade", etapa: "preliminar", nome: "Ilegitimidade passiva",
      quando: "O ato foi praticado por agente com competência própria ou delegada, sem participação do responsável.",
      normas: ["l8443_12", "lindb28"],
      texto: "{{responsavel}} não praticou o ato tido como irregular. A competência para o ato apontado pertencia a outro agente, por força de norma de organização ou de ato de delegação, de modo que não se pode atribuir ao responsável, por mera posição hierárquica, conduta que não lhe cabia. A responsabilidade perante o Tribunal de Contas é subjetiva e pressupõe conduta própria, nexo causal e culpabilidade, ausentes no caso.",
      provas: ["Ato de delegação de competência publicado", "Regimento ou lei de estrutura do órgão", "Portaria de designação de comissão, fiscal ou gestor do contrato"],
      cuidado: "Verifique se não há indício de culpa in vigilando ou in eligendo. Se houver, combine com a tese de ausência de nexo." },

    { id: "periodo_gestao", etapa: "preliminar", nome: "Fatos fora do período de gestão",
      quando: "Parte dos fatos ocorreu antes da posse ou depois do afastamento do responsável.",
      normas: ["l8443_12"],
      texto: "Os fatos descritos ocorreram, ao menos em parte, fora do período em que {{responsavel}} exerceu o cargo de {{cargo}}, conforme atos de nomeação e exoneração juntados. Não há como imputar responsabilidade por atos praticados antes da posse ou após o afastamento, devendo a imputação ser excluída ou, no mínimo, restringida ao período efetivo de gestão.",
      provas: ["Atos de nomeação, posse e exoneração", "Publicações no diário oficial", "Folhas de frequência ou termos de transmissão de cargo"],
      cuidado: "Confira datas de empenho, liquidação e pagamento: o ato relevante pode ser diferente da data do contrato." },

    { id: "prescricao", etapa: "prejudicial", nome: "Prescrição das pretensões punitiva e ressarcitória",
      quando: "Mais de cinco anos entre o fato (ou ciência pela administração) e a primeira causa interruptiva válida.",
      normas: ["tema899", "l9873", "res344", "tema897"],
      texto: "Como prejudicial de mérito, registra-se que entre os fatos e a primeira causa interruptiva válida transcorreram aproximadamente {{anos}} anos. O Supremo Tribunal Federal assentou que é prescritível a pretensão de ressarcimento fundada em decisão de Tribunal de Contas (Tema 899), e o próprio Tribunal disciplinou a matéria adotando o prazo quinquenal da Lei 9.873/1999. Ultrapassado esse prazo, estão prescritas tanto a pretensão punitiva quanto a de ressarcimento, o que impõe o arquivamento do processo em relação a {{responsavel}}.",
      provas: ["Linha do tempo com datas do fato, ciência, instauração e notificações", "Cópia de cada ato que o tribunal possa considerar interruptivo"],
      cuidado: "Mapeie todas as causas interruptivas previstas no regulamento do tribunal. Em TCE e TCM, confira a lei orgânica local. Se houver imputação de ato doloso de improbidade, avalie o Tema 897.", conferir: true },

    { id: "prescricao_intercorrente", etapa: "prejudicial", nome: "Prescrição intercorrente",
      quando: "Processo paralisado por mais de três anos, pendente de julgamento ou despacho.",
      normas: ["l9873", "res344"],
      texto: "O processo permaneceu paralisado por período superior a três anos, sem julgamento ou despacho apto a impulsioná-lo, conforme se verifica da sequência de movimentações. Configurada a prescrição intercorrente prevista no art. 1º, § 1º, da Lei 9.873/1999 e acolhida pela regulamentação do Tribunal, requer-se seu reconhecimento.",
      provas: ["Extrato de movimentação processual com datas", "Indicação do período de paralisação"],
      cuidado: "Atos meramente ordinatórios podem ou não ser considerados impulso, conforme o regulamento. Confira a jurisprudência atual do tribunal.", conferir: true },

    { id: "tce_dez_anos", etapa: "prejudicial", nome: "Mais de dez anos até a primeira notificação",
      quando: "Decorridos mais de dez anos entre o dano provável e a primeira notificação do responsável.",
      normas: ["in71", "l8443_20"],
      texto: "Entre a data provável do dano e a primeira notificação de {{responsavel}} transcorreram mais de dez anos. Nessa hipótese, a própria regulamentação do Tribunal dispensa a instauração da tomada de contas especial, justamente por reconhecer que o decurso do tempo compromete o exercício da defesa. Requer-se o arquivamento do processo.",
      provas: ["Comprovação da data provável do dano", "Comprovação da data da primeira notificação"],
      cuidado: "Aplica-se ao TCU e a tribunais que tenham norma equivalente.", conferir: true },

    { id: "prejuizo_defesa", etapa: "prejudicial", nome: "Contas iliquidáveis por prejuízo à defesa",
      quando: "O tempo decorrido ou fato alheio ao responsável tornou impossível reunir a prova.",
      normas: ["l8443_20", "cf5lv"],
      texto: "O longo tempo decorrido e as circunstâncias descritas, alheias à vontade de {{responsavel}}, tornaram materialmente impossível reunir os documentos necessários à defesa: os registros pertencem à administração, que deixou de ser chefiada pelo responsável. Diante disso, requer-se que as contas sejam consideradas iliquidáveis, com o seu trancamento, nos termos dos arts. 20 e 21 da Lei 8.443/1992.",
      provas: ["Pedidos de documentos à administração e respostas (ou ausência de resposta)", "Prova de extravio, sinistro ou destruição de arquivos"],
      cuidado: "Demonstre a tentativa concreta de obter os documentos. Sem isso, a tese não prospera." },

    { id: "erro_grosseiro", etapa: "merito", nome: "Ausência de dolo ou erro grosseiro",
      quando: "Conduta de boa-fé, sem culpa grave, inclusive em matéria interpretativa controvertida.",
      normas: ["lindb28", "d9830"],
      texto: "Ainda que se considerasse irregular a ocorrência examinada neste tópico, não haveria dolo nem erro grosseiro. O art. 28 da LINDB limita a responsabilidade pessoal do agente público a essas hipóteses, e o Decreto 9.830/2019 define erro grosseiro como aquele manifesto, evidente e inescusável, praticado com culpa grave. A conduta de {{responsavel}} foi pautada por elementos técnicos disponíveis à época e por interpretação razoável da norma, o que afasta a culpa grave e, com ela, a possibilidade de sanção.",
      provas: ["Pareceres, notas técnicas e manifestações que embasaram a decisão", "Normas internas e orientações vigentes à época", "Decisões de outros órgãos no mesmo sentido"],
      cuidado: "Os tribunais de contas costumam aplicar o art. 28 à multa, mas não ao débito. Sustente a tese para afastar a sanção e trate o débito separadamente." },

    { id: "parecer_respaldo", etapa: "merito", nome: "Decisão amparada em parecer técnico ou jurídico",
      quando: "O gestor seguiu parecer jurídico ou técnico fundamentado, sem indício de ilegalidade evidente.",
      normas: ["l14133_53", "lindb28", "ms24631"],
      texto: "A decisão de {{responsavel}} foi precedida de manifestação do órgão de assessoramento jurídico e técnico, que atestou a regularidade do procedimento. O gestor não é obrigado a refazer a análise técnica especializada de seus órgãos de apoio, cabendo-lhe confiar em pareceres fundamentados que não apresentem ilegalidade manifesta. Agir em conformidade com esses pareceres afasta a culpa grave exigida pelo art. 28 da LINDB.",
      provas: ["Íntegra dos pareceres", "Comprovação de que o parecer foi emitido antes da decisão", "Qualificação dos signatários"],
      cuidado: "Não funciona se o parecer for genérico, padronizado sem exame do caso ou se a ilegalidade for evidente para um leigo." },

    { id: "nexo_causal", etapa: "merito", nome: "Ausência de nexo de causalidade",
      quando: "O resultado decorreu de conduta de terceiro ou de fato que o responsável não podia evitar.",
      normas: ["l8443_12", "lindb28"],
      texto: "Não há nexo de causalidade entre a conduta de {{responsavel}} e o resultado apontado. A ocorrência decorreu de atos de terceiros, praticados no exercício de atribuições próprias, sem ordem, ciência ou participação do responsável. A responsabilização por fato de outrem exige demonstração de falha concreta no dever de supervisão, o que não consta da instrução.",
      provas: ["Atos dos terceiros envolvidos", "Fluxo do processo administrativo com responsáveis por etapa", "Relatórios de fiscalização do contrato"],
      cuidado: "Antecipe a alegação de culpa in vigilando: mostre que havia controle razoável." },

    { id: "execucao_objeto", etapa: "merito", nome: "Execução do objeto e ausência de dano",
      quando: "Obra, serviço ou convênio executado, ainda que com falhas documentais.",
      normas: ["l8443_16", "lindb20"],
      texto: "O objeto foi executado e atingiu sua finalidade pública, como demonstram os documentos e registros juntados. Eventuais falhas na documentação não se confundem com dano ao erário: havendo prova da execução e do nexo entre os recursos e o objeto, não cabe imputação de débito, sob pena de enriquecimento sem causa da administração, que recebeu a obra ou serviço.",
      provas: ["Fotografias datadas e georreferenciadas", "Laudos, medições e termos de recebimento", "Extratos bancários que vinculem pagamentos ao objeto", "Declarações dos beneficiários ou de órgãos de fiscalização"],
      cuidado: "O nexo financeiro (dinheiro da conta específica para o fornecedor do objeto) é o ponto que mais derruba defesas de convênio. Prove-o." },

    { id: "debito_excessivo", etapa: "subsidiaria", nome: "Redução do débito ao dano efetivo",
      quando: "Débito calculado sobre o valor total, embora parte do objeto tenha sido executada.",
      normas: ["l8443_16", "lindb22"],
      texto: "Subsidiariamente, o débito de {{valor}} foi calculado sobre a totalidade dos recursos, sem descontar a parcela comprovadamente executada. O dano, se existente, limita-se à diferença entre o valor pago e o valor do que foi efetivamente entregue, devendo o débito ser recalculado nesses termos.",
      provas: ["Planilha de cálculo alternativa", "Medições e laudos da parcela executada"],
      cuidado: "Apresente o número. Pedido de redução sem cálculo raramente é acolhido." },

    { id: "falha_formal", etapa: "merito", nome: "Falha formal: contas regulares com ressalva",
      quando: "Impropriedade sem dano, sem desvio de finalidade e sem má-fé.",
      normas: ["l8443_16", "lindb22"],
      texto: "A ocorrência apontada constitui, quando muito, impropriedade de natureza formal, sem dano ao erário e sem prejuízo à finalidade do ato. Nessa hipótese, a própria Lei Orgânica prevê o julgamento pela regularidade com ressalva, com determinação para correção, sem aplicação de multa.",
      provas: ["Demonstração de que não houve prejuízo financeiro", "Providências adotadas para corrigir a falha"],
      cuidado: "Mostre a correção já feita: pesa muito no julgamento." },

    { id: "dificuldades_reais", etapa: "merito", nome: "Dificuldades reais do gestor",
      quando: "Contexto de emergência, falta de estrutura, pandemia, desastre ou limitação orçamentária.",
      normas: ["lindb22", "lindb20"],
      texto: "A conduta de {{responsavel}} deve ser examinada à luz dos obstáculos e das dificuldades reais enfrentadas na época, como determina o art. 22 da LINDB. O contexto documentado nos autos impunha decisões rápidas, com estrutura reduzida, para não interromper serviço essencial à população. Ignorar essas circunstâncias levaria a exigir do gestor uma conduta impossível nas condições existentes.",
      provas: ["Decretos de emergência ou calamidade", "Quadro de pessoal da época", "Comunicações que demonstrem a urgência"],
      cuidado: "Ligue a dificuldade concreta à conduta específica. Contexto genérico não convence." },

    { id: "orientacao_epoca", etapa: "merito", nome: "Orientação vigente à época dos fatos",
      quando: "A irregularidade se baseia em entendimento firmado depois dos fatos.",
      normas: ["lindb24"],
      texto: "O entendimento invocado pela unidade técnica foi firmado após a prática do ato. À época, a orientação dominante, inclusive em decisões do próprio Tribunal e de órgãos de controle interno, admitia o procedimento adotado. O art. 24 da LINDB veda declarar inválidas situações plenamente constituídas com base em mudança posterior de orientação geral.",
      provas: ["Decisões, manuais ou orientações vigentes à época", "Data do precedente invocado pela acusação"],
      cuidado: "Cite precedentes com data. É o que torna a tese concreta." },

    { id: "boa_fe_recolhimento", etapa: "subsidiaria", nome: "Boa-fé e recolhimento do débito",
      quando: "Responsável disposto a recolher o débito, se mantido, para sanar o processo.",
      normas: ["l8443_12"],
      texto: "Subsidiariamente, caso o Tribunal entenda pela manutenção do débito, requer-se o reconhecimento expresso da boa-fé de {{responsavel}}, com a abertura de novo prazo para recolhimento da importância atualizada monetariamente, sem juros de mora, o que sanará o processo nos termos do art. 12, § 2º, da Lei 8.443/1992.",
      provas: ["Elementos que demonstrem ausência de proveito pessoal", "Histórico funcional do responsável"],
      cuidado: "O recolhimento tempestivo com boa-fé reconhecida leva às contas regulares com ressalva. Converse com o cliente antes de incluir." },

    { id: "dosimetria", etapa: "subsidiaria", nome: "Proporcionalidade da multa",
      quando: "Sempre que houver risco de multa.",
      normas: ["lindb22", "l8443_57"],
      texto: "Por fim, caso mantida alguma irregularidade, requer-se que eventual multa observe a natureza e a gravidade da infração, a inexistência de dano ou de proveito pessoal, as circunstâncias atenuantes e os bons antecedentes de {{responsavel}}, como determina o art. 22, § 2º, da LINDB, fixando-se o valor no mínimo legal.",
      provas: ["Certidão de inexistência de condenações anteriores no tribunal", "Comprovação de providências corretivas"],
      cuidado: "Inclua sempre como último pedido subsidiário." },

    { id: "inelegibilidade_prefeito", etapa: "subsidiaria", nome: "Contas de prefeito e inelegibilidade",
      quando: "Responsável é prefeito ou ex-prefeito, com risco eleitoral.",
      normas: ["tema157", "lc64"],
      texto: "Registra-se, por fim, que, para fins de inelegibilidade, a apreciação das contas de prefeito é da Câmara Municipal, cabendo ao Tribunal de Contas a emissão de parecer prévio (STF, Tema 157). Requer-se que eventual decisão deixe claro que não há irregularidade insanável nem ato doloso de improbidade, evitando efeitos que não decorrem da competência desta Corte.",
      provas: ["Cópia de eventual julgamento da Câmara Municipal"],
      cuidado: "No TCU, em recursos federais transferidos, a lógica do Tema 157 tem aplicação discutida. Avalie caso a caso.", conferir: true },

    { id: "prova_documental", etapa: "merito", nome: "Prova documental nova",
      quando: "Documentos que comprovam a regular aplicação ainda não constam dos autos.",
      normas: ["cf5lv", "l8443_16"],
      texto: "Junta-se, nesta oportunidade, a documentação que comprova a regular aplicação dos recursos relativos à ocorrência examinada, ainda não examinada pela unidade técnica. Requer-se a sua análise integral, com a consequente reavaliação da irregularidade apontada.",
      provas: ["Documentos novos, organizados e numerados", "Quadro que relacione cada documento ao achado que ele responde"],
      cuidado: "Organize como anexo numerado e cite o número do anexo no texto." }
  ],

  /* ------------------------------------------------------------------ MODELOS */
  pecas: {
    "Citação":           { titulo: "ALEGAÇÕES DE DEFESA", verbo: "apresentar ALEGAÇÕES DE DEFESA em face da citação" },
    "Audiência":         { titulo: "RAZÕES DE JUSTIFICATIVA", verbo: "apresentar RAZÕES DE JUSTIFICATIVA em atenção à audiência" },
    "Oitiva":            { titulo: "MANIFESTAÇÃO", verbo: "apresentar MANIFESTAÇÃO em atenção à oitiva" },
    "Diligência":        { titulo: "RESPOSTA À DILIGÊNCIA", verbo: "apresentar RESPOSTA À DILIGÊNCIA" },
    "Recurso de reconsideração": { titulo: "RECURSO DE RECONSIDERAÇÃO", verbo: "interpor RECURSO DE RECONSIDERAÇÃO em face do acórdão" },
    "Pedido de reexame": { titulo: "PEDIDO DE REEXAME", verbo: "interpor PEDIDO DE REEXAME em face do acórdão" }
  },

  enderecamento: function (tribunal) {
    if (tribunal === "TCU") return "EXCELENTÍSSIMO(A) SENHOR(A) MINISTRO(A) RELATOR(A) DO TRIBUNAL DE CONTAS DA UNIÃO";
    if (/^TCM-/.test(tribunal)) return "EXCELENTÍSSIMO(A) SENHOR(A) CONSELHEIRO(A) RELATOR(A) DO TRIBUNAL DE CONTAS DOS MUNICÍPIOS (" + tribunal + ")";
    if (tribunal === "TCDF") return "EXCELENTÍSSIMO(A) SENHOR(A) CONSELHEIRO(A) RELATOR(A) DO TRIBUNAL DE CONTAS DO DISTRITO FEDERAL";
    return "EXCELENTÍSSIMO(A) SENHOR(A) CONSELHEIRO(A) RELATOR(A) DO TRIBUNAL DE CONTAS (" + tribunal + ")";
  }
};
