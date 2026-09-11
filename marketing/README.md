# Divulgação do Dr.Sig

Tudo o que a marca publica passa por aqui — e nada sai daqui sem o dono
mover a pasta.

## Pastas

- `plano/AAAA-MM.md` — o plano do mês (Estrategista). Meta, canais, temas,
  orçamento, o que parar, pedidos ao dono.
- `pendente/AAAA-MM-DD-<slug>/` — peças prontas esperando aprovação
  (Redator + Designer). Cada pasta tem `peca.md` (o texto, com cabeçalho
  YAML), `imagens.md` (o pedido de arte), `quadros.json` (a arte descrita,
  feita pelo Designer) e `quadro-NN.png` (as imagens renderizadas).
- `capturas/<nome>.png` — capturas do app na conta de demonstração, que os
  quadros do tipo `captura` usam. Quem tira é o dono; o Designer só pede.
- `designer/` — o renderizador (`render.mjs`) e o registro semanal
  `designer/AAAA-MM-DD.md`.
- `aprovado/` — o dono moveu a pasta para cá: pode publicar.
- `publicado/` — publicada, com a data e o link no cabeçalho de `peca.md`.
- `recusado/` — o dono não quis; a razão vai numa linha no `peca.md`, e o
  Redator lê antes da próxima semana.
- `analise/AAAA-MM-DD.md` — o painel semanal do funil (Analista).
- `gastos/AAAA-MM.md` — o que foi gasto em anúncios, por canal e por dia
  (Gestor de tráfego, ou o dono, à mão). Sem isso o custo por assinante não
  existe.
- `redator/AAAA-MM-DD.md` — o registro semanal do que foi produzido.
- `ORCAMENTO.md` — o teto mensal de anúncios e a regra de aprovação.

## O fluxo

1. Dia 1: o Estrategista escreve o plano e manda os "pedidos ao dono".
2. Toda terça: o Redator entrega as peças da semana em `pendente/`.
   Toda quarta: o Designer renderiza as artes de cada peça na própria pasta.
3. Toda sexta, na conversa com o Claude, o dono vê as peças com as imagens
   e diz "aprovo" ou "recuso: razão"; a pasta é movida para `aprovado/` ou
   `recusado/` por quem recebeu a resposta. O dono nunca precisa abrir o
   repositório.
4. Publicação: hoje é manual (o dono cola no Instagram @oseusig, no
   Facebook e no LinkedIn; artigos
   entram no site por commit em `blog/`). Quando as APIs de publicação
   estiverem ligadas, um agente publica o que está em `aprovado/` e move
   para `publicado/`.
5. Toda segunda: o Analista diz o que aconteceu.

## Regras fixas (também estão em `KIT-DA-MARCA.md`)

Nada de resultado clínico prometido. Nada de número inventado. Nada de
dado de usuária real. Toda peça sobre gravação ou dado de analisante diz
como o sigilo é garantido. Preços só os da página de planos.
