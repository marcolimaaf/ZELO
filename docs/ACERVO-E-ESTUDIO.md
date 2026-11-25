# Acervo técnico e Estúdio

O **Estúdio** (`/estudio/`, fora do menu público e marcado como `noindex`) é a ferramenta interna de redação. Ele não chama nenhum serviço externo: tudo roda no navegador e o caso fica salvo só ali.

## Como funciona hoje

1. **Caso:** tribunal, peça, número, ciência e prazo (com vencimento calculado), responsável, achados (o que o tribunal aponta, valor e a versão do responsável) e advogado.
2. **Triagem:** 14 perguntas de sim/não. Cada "sim" sugere teses do acervo.
3. **Teses:** 19 teses em quatro etapas (preliminares, prejudiciais, mérito, subsidiários). As de mérito entram em cada achado, em ordem lógica: prova, execução do objeto, falha formal, nexo, orientação da época, dificuldades reais, parecer, LINDB 28.
4. **Prova:** checklist de documentos gerado a partir das teses marcadas, pronto para mandar ao cliente.
5. **Minuta ao vivo:** endereçamento, qualificação, tempestividade, síntese, preliminares, prejudiciais, mérito por achado, subsidiários e pedidos montados conforme as teses. Exporta em .doc (abre no Word), PDF ou texto.

Marcações na minuta:
- **Amarelo:** dado faltante.
- **Vermelho "CONFERIR FONTE":** dispositivo ou precedente que precisa ser checado no texto oficial antes do protocolo.

## Onde está o acervo

`assets/acervo.js`, em quatro blocos:

| Bloco | O que contém |
|---|---|
| `normas` | Dispositivos e precedentes com resumo (CF, Lei 8.443/1992, LINDB, Decreto 9.830/2019, Lei 9.873/1999, Res. TCU 344/2022, Temas 157, 897 e 899 do STF, MS 24.631, Lei 14.133/2021, LC 64/1990, IN TCU 71/2012) |
| `gatilhos` | Perguntas da triagem e as teses que cada uma ativa |
| `teses` | Nome, quando usar, fundamentos, texto-modelo com variáveis, provas recomendadas e cuidados |
| `pecas` | Título e verbo de abertura de cada peça |

Para acrescentar uma tese: copie um bloco de `teses`, dê um `id` novo, ligue a um gatilho se quiser sugestão automática e use apenas `id`s de normas existentes.

## Revisão jurídica pendente (Marco)

- [ ] Conferir os itens marcados `conferir: true` (Res. TCU 344/2022, IN TCU 71/2012, Tema 157 aplicado ao TCU, prescrição intercorrente).
- [ ] Revisar a redação de cada tese no seu estilo.
- [ ] Acrescentar as leis orgânicas e regimentos do **TCE-BA** e do **TCM-BA** (prazos, recursos, nomes das peças), já que serão os tribunais mais frequentes.
- [ ] Incluir acórdãos paradigmáticos do TCU e dos tribunais baianos por tese (número, data, relator, trecho). Só inclua o que foi lido no inteiro teor.

## Próximo nível: redação assistida por modelo de linguagem

O Estúdio atual é determinístico: monta a peça a partir de textos revisados por você. O passo seguinte é um modelo de linguagem que leia o relatório de auditoria e redija o mérito sob medida, usando o acervo como única fonte de fundamentos. Isso exige:

1. **Servidor** (ex.: Cloudflare Workers ou Vercel) para guardar a chave da API; ela nunca pode ficar no site.
2. **Contrato com o provedor** sem uso dos dados para treinamento e com cláusula de confidencialidade (sigilo profissional + LGPD).
3. **Regra de citação fechada:** o modelo só pode citar normas e acórdãos que estejam no acervo, para não inventar precedentes.
4. **Login** na área do cliente e no Estúdio.

Custo estimado e escolha de provedor: decidir quando o primeiro cliente fechar.
