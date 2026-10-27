# Pedido ao Designer — artigo "O que combinar na primeira sessão (e deixar por escrito)"

**Sem arte.** O molde do blog não usa imagem, e não há quadro a renderizar
nesta pasta.

Quando o artigo for aprovado: `artigo.html` vai para
`blog/o-que-combinar-na-primeira-sessao-de-psicoterapia.html` e um cartão novo
entra no topo da lista em `blog/index.html`:

```html
<a class="cartao" href="o-que-combinar-na-primeira-sessao-de-psicoterapia.html">
  <div class="eyebrow">Rotina do consultório · outubro de 2026</div>
  <h2>O que combinar na primeira sessão (e deixar por escrito)</h2>
  <p>Frequência, valor, falta, sigilo, online e contato entre sessões: os seis combinados que evitam quase toda conversa difícil depois.</p>
</a>
```

A data no `peca.md` (`data_iso: 2026-10-30`) e a linha "30 de outubro de 2026"
do `artigo.html` são a **data sugerida**; quem publicar em outro dia troca as
duas.

## Este é o artigo-guarda-chuva dos três da semana

Os três desta semana formam um grupo: este lista os seis combinados, e dois
deles têm artigo próprio (falta/cancelamento e reajuste). Para a busca
orgânica, o ganho é maior se os três subirem no mesmo commit, porque este
aqui é o que liga os outros dois.

Se subirem juntos, os links do corpo são:

- item 2, "quando o valor muda" → `como-reajustar-o-valor-da-sessao-de-psicoterapia.html`
  (peça `pendente/2026-10-29-artigo-reajuste-do-valor-da-sessao`)
- item 3, "Falta e cancelamento" → `cobrar-sessao-falta-cancelamento-psicoterapia.html`
  (peça `pendente/2026-10-28-artigo-falta-e-cancelamento`)
- item 4, autorização para gravar → `autorizacao-para-gravar-sessao-de-psicoterapia.html`
  (peça `pendente/2026-09-22-artigo-autorizacao-para-gravar`)
- item 4, guarda dos registros → `por-quanto-tempo-guardar-prontuario-psicologico.html`
  (peça `pendente/2026-09-23-artigo-guarda-do-prontuario`)
- item 5, atendimento online → `cadastro-e-psi-atendimento-psicologico-online.html`
  (peça `pendente/2026-10-16-artigo-atendimento-online`)

Conferir o `slug` no cabeçalho de cada `peca.md` antes de inserir. Enquanto
os outros não estiverem no ar, o corpo fica sem link — como nas semanas
anteriores.

## Uma nota sobre o item 5 (online)

O artigo **não afirma nada sobre o cadastro e-Psi**, de propósito: quem
responde a essa pergunta é a peça `2026-10-16-artigo-atendimento-online`, que
mostra que a norma criadora do cadastro foi revogada pela Resolução CFP
09/2024 — e essa peça tem, no relatório de 13/10, um pedido aberto de
reconferência da resolução em `cfp.org.br` antes de ir ao ar. Este artigo
ficou com os três combinados práticos do online (de onde cada um fala, plano
B da conexão, qual ferramenta) e nenhuma afirmação normativa, para não
depender daquela reconferência.

## Nenhuma captura nova

Não pede captura. Se um dia virar carrossel, são seis quadros naturais (um
por combinado) em **lista** e **tipografia**, mais capa e fecho — oito, o
limite do formato. Nenhuma captura de ficha de conta real, em nenhuma
hipótese.
