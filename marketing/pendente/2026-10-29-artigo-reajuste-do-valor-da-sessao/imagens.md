# Pedido ao Designer — artigo "Como reajustar o valor da sessão de psicoterapia"

**Sem arte.** O molde do blog não usa imagem, e não há quadro a renderizar
nesta pasta.

Quando o artigo for aprovado: `artigo.html` vai para
`blog/como-reajustar-o-valor-da-sessao-de-psicoterapia.html` e um cartão novo
entra no topo da lista em `blog/index.html`:

```html
<a class="cartao" href="como-reajustar-o-valor-da-sessao-de-psicoterapia.html">
  <div class="eyebrow">Financeiro · outubro de 2026</div>
  <h2>Como reajustar o valor da sessão de psicoterapia</h2>
  <p>Quando avisar, o que dizer e a quem o reajuste não se aplica — e por que mexer no valor antes de fechar o mês muda a conta do mês passado.</p>
</a>
```

A data no `peca.md` (`data_iso: 2026-10-29`) e a linha "29 de outubro de 2026"
do `artigo.html` são a **data sugerida**; quem publicar em outro dia troca as
duas.

## Nenhuma captura nova, e uma que não se deve pedir

O artigo descreve a **ficha do analisante** — Preço da sessão, Tipo de
cobrança, Dia de pagamento. A captura seria boa, mas a ficha mostra nome,
contato e valor de uma pessoa: só serve captura do consultório de
demonstração do Freud, e essa tela ainda não está em `marketing/capturas/`.
**Não pedir captura de ficha de conta real em nenhuma hipótese.**

Se um dia virar carrossel, o caminho é quadro de **lista** com os três
comportamentos do fim do artigo (sessão paga não muda; sessão pendente é
recalculada; grupo tem valor próprio) e um quadro de **destaque** com
"feche o mês antes de trocar o preço".

## Preço: nenhum número neste artigo

O artigo **não cita valor de sessão, de plano nem de inflação**. Isso é
deliberado: valor de sessão varia por profissional e por região, e número de
inflação envelhece. O único número é "trinta dias de antecedência", que é
recomendação de prática, não dado.

## Link interno: ainda não

Mesma razão das semanas anteriores (doze artigos escritos, um no ar). Se os
três desta semana subirem juntos:

- "o que foi contratado é o horário" → `cobrar-sessao-falta-cancelamento-psicoterapia.html`
  (peça `pendente/2026-10-28-artigo-falta-e-cancelamento`)
- "combinar na primeira sessão quando o valor muda" → `o-que-combinar-na-primeira-sessao-de-psicoterapia.html`
  (peça `pendente/2026-10-30-artigo-combinado-da-primeira-sessao`)
