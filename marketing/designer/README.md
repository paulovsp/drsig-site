# O renderizador do Designer

Toda arte do Dr.Sig nasce de um `quadros.json` na pasta da peça e vira PNG
1080×1350 por `render.mjs`. Não há arquivo de editor para abrir: para mudar
uma arte, muda-se o JSON e renderiza de novo. Assim a peça é reproduzível,
o kit da marca fica em um lugar só (o CSS dentro de `render.mjs`), e o
agente Designer (`meu-app/.claude/agents/designer.md`) faz o trabalho na
nuvem toda quarta.

## Rodar

    cd marketing/designer
    npm install
    npx playwright install chromium        # uma vez por máquina
    cd ../..
    node marketing/designer/render.mjs marketing/pendente/2026-09-15-recibo-em-um-toque

Saída: `quadro-01.png` … na pasta da peça, e um resumo em JSON no terminal
com as capturas que faltaram.

## Tipos de quadro

Os tipos e os campos de cada um estão no cabeçalho de `render.mjs`. Em
resumo: `capa`, `tipografia`, `lista`, `destaque`, `cartoes`, `icone`,
`captura`, `fecho`. Texto aceita `**negrito**`.

## Capturas do app

`marketing/capturas/<nome>.png` — só da conta de demonstração (consultório
do Freud), tela inteira do celular, sem barra de status pessoal. Um quadro
`captura` que pede um nome inexistente sai com a marca "captura pendente" e
o nome do arquivo esperado; quem tira a captura é o dono.

## Mudar o desenho

O CSS e as ilustrações em traço vivem em `render.mjs`. Mudança de cor ou
tipografia é mudança no kit da marca: passa por `KIT-DA-MARCA.md` primeiro.
