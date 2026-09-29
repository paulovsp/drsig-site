# Pedido ao Designer — artigo "Como organizar o financeiro de um consultório de psicologia"

**Sem arte.** Como nos outros artigos: o molde do blog não usa imagem, e
não há quadro a renderizar nesta pasta.

Quando o artigo for aprovado: `artigo.html` vai para
`blog/como-organizar-o-financeiro-do-consultorio-de-psicologia.html` e um
cartão novo entra no topo da lista em `blog/index.html`:

```html
<a class="cartao" href="como-organizar-o-financeiro-do-consultorio-de-psicologia.html">
  <div class="eyebrow">Financeiro · outubro de 2026</div>
  <h2>Como organizar o financeiro de um consultório de psicologia</h2>
  <p>As quatro perguntas que o financeiro do consultório precisa responder, por que a planilha não dá conta delas e um fechamento de mês em meia hora.</p>
</a>
```

Atenção ao link interno: o corpo do artigo aponta para
`recibo-de-psicoterapia-imposto-de-renda.html`, que **já está no ar** — é
o único artigo publicado hoje, então o link não quebra mesmo que os
artigos de setembro ainda não tenham subido.

Ordem em `blog/index.html` com os cinco artigos escritos, do mais novo
para o mais antigo: financeiro do consultório, agenda do consultório,
guarda do prontuário, autorização para gravar, recibo para o IR.
