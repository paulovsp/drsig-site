# Pedido ao Designer — ficha da loja (Google Play)

**Atenção: esta peça não cabe no renderizador de hoje.** O `render.mjs`
produz 1080×1350 (o formato do carrossel). A captura de loja do Google
Play é 1080×1920 (proporção 9:16), com a legenda dentro da imagem e a
captura do app emoldurada. Não há renderizador desse tamanho no
repositório — `story.mjs` chega perto (1080×1920), mas desenha o cartão de
convite, não uma captura legendada.

Então este pedido é de duas partes, e a segunda é decisão do dono:

## 1. O que já dá para fazer

As oito capturas da tabela do `peca.md` já existem em
`marketing/capturas/`, todas da conta de demonstração do Freud. Nenhuma
precisa ser tirada de novo.

## 2. O que falta decidir

Como produzir as oito imagens legendadas 1080×1920. Três caminhos, do mais
barato ao mais caro:

- **Um `loja.mjs` novo** no molde do `story.mjs`: fundo papel, faixa
  sálvia-funda no topo com a legenda em tipografia da marca, a captura
  centralizada com a sombra do kit, e o rótulo "O SEU ASSISTENTE CLÍNICO"
  no rodapé. Oito PNGs de um `legendas.json`. É o caminho reproduzível, e
  o que mantém a ficha no kit da marca.
- **Um quadro `captura-loja`** dentro do próprio `render.mjs`, com o
  tamanho variável. Mexe num arquivo que hoje serve a todas as peças.
- **À mão**, pelo dono, em qualquer editor. Resolve uma vez e não se
  repete sem retrabalho.

Recomendação: o `loja.mjs`. A ficha vai mudar de novo (a cada função nova,
a cada revisão de ASO), e é o único caminho em que a segunda revisão custa
um JSON.

Enquanto a decisão não vier, o texto da ficha (título, descrição curta e
descrição completa) já pode ser aplicado sozinho no Play Console — as
capturas atuais continuam valendo, sem legenda.

## Gráfico de destaque

O gráfico de destaque (1024×500) da ficha não entra nesta revisão: o
`capa.mjs` já desenha capas nesse espírito e o dono pode reaproveitar.
Se quiser um novo, é um pedido à parte.
