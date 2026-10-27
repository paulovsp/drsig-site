# Pedido ao Designer — artigo "Posso cobrar a sessão em que o analisante faltou?"

**Sem arte.** Como nos outros artigos: o molde do blog não usa imagem, e não
há quadro a renderizar nesta pasta.

Quando o artigo for aprovado: `artigo.html` vai para
`blog/cobrar-sessao-falta-cancelamento-psicoterapia.html` e um cartão novo
entra no topo da lista em `blog/index.html`:

```html
<a class="cartao" href="cobrar-sessao-falta-cancelamento-psicoterapia.html">
  <div class="eyebrow">Agenda e cobrança · outubro de 2026</div>
  <h2>Posso cobrar a sessão em que o analisante faltou?</h2>
  <p>Falta, cancelamento em cima da hora e reposição são três coisas diferentes. O que o Código de Ética exige, e o combinado que resolve antes.</p>
</a>
```

A data no `peca.md` (`data_iso: 2026-10-28`) e a linha "28 de outubro de 2026"
do `artigo.html` são a **data sugerida**. Se o dono publicar em outro dia,
quem publicar troca as duas — são os dois únicos lugares com data.

## Nenhuma captura nova

Este artigo não pede captura. As telas que ele descreve são **diálogos de
confirmação** ("A sessão aconteceu?", "Foi cancelada ou falta?", "Cancelar e
cobrar?"), e um diálogo só aparece sobre um compromisso com horário já
vencido — estado que a conta de demonstração não tem de forma estável.

Se um dia virar carrossel, o caminho é quadro de **lista** com as três
situações (cancelamento no prazo, cancelamento em cima da hora, falta) e um
quadro de **destaque** com a frase "o que você vende é o horário reservado",
em tipografia, sem captura.

## Link interno: ainda não

O corpo **não tem link para outro artigo**, pela razão das semanas
anteriores: doze artigos escritos seguem em `pendente/` e só um está no ar.
Se os três desta semana subirem juntos, há dois links que valem, e eles
fecham o trio:

- "reajustado uma vez por ano" → `como-reajustar-o-valor-da-sessao-de-psicoterapia.html`
  (peça `pendente/2026-10-29-artigo-reajuste-do-valor-da-sessao`)
- "combinado da primeira sessão" → `o-que-combinar-na-primeira-sessao-de-psicoterapia.html`
  (peça `pendente/2026-10-30-artigo-combinado-da-primeira-sessao`)

Conferir o `slug` no cabeçalho de cada `peca.md` antes de inserir.
