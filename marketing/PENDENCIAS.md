# Pendências do dono

A lista única do que só o Paulo pode fazer nas redes (a API da Meta não apaga
post do Instagram nem publica no LinkedIn). O Publicador acrescenta itens; o
Paulo risca na conversa com o Claude, que confere na rede (`midias_meta`) e
marca aqui. Um item feito fica riscado com a data, para o histórico.

## Abertas

### Instagram: apagar os 18 posts (recomeço do zero, decisão do dono em 16/09/2026)

Motivo: o perfil nasceu misturado (12 posts soltos de 11/09 sem legenda, um
Fiscal duplicado) e o dono decidiu zerar e deixar o sistema republicar em
ordem. As cinco peças boas já estão em `aprovado/` com datas novas (19, 22,
23, 24 e 25/09); o Publicador só republica cada uma quando o post antigo já
tiver sumido do perfil. Enquanto um destes estiver no ar, a republicação
correspondente espera.

No celular: abrir o post, três pontos no alto à direita, "Excluir", confirmar.
No computador (instagram.com logado): o mesmo caminho. O Instagram guarda o
que foi excluído por 30 dias em "Excluídos recentemente".

Carrosséis do sistema (12 a 15/09) — 4 ainda no ar, 2 já apagados (conferido em 18/09):

- [ ] Guarda de registros (15/09) · https://www.instagram.com/p/DdTyKa_FN-n/
- [ ] Fiscal v2 com a rubrica (14/09) · https://www.instagram.com/p/DdRN9YqlLCX/
- [ ] Gravação precisa de autorização (14/09) · https://www.instagram.com/p/DdRN1XcjkP5/
- [ ] Consultório do Freud (13/09) · https://www.instagram.com/p/DdOoUbHjw_X/

Posts soltos de 11/09 (feitos à mão) — 0 ainda no ar, 12 já apagados (conferido em 18/09).

### Facebook: 2 avisos automáticos que a API não apaga (12/09)

A rotina de 16/09 apagou 5 dos 7 posts da Página pela `apagar_facebook`. Os
outros 2 são avisos automáticos de troca de foto de capa/perfil (sem foto,
sem texto) e a Meta recusou apagar: `(#200) This post wasn't created by the
application` — a Graph API só deixa apagar post feito pela própria
aplicação. Só o dono apaga, direto na Página (post → três pontos → excluir).

- [ ] Aviso de troca de foto (12/09, 18:20) · https://www.facebook.com/122107358865466353/posts/28373795205638104?substory_index=28373795205638104
- [ ] Aviso de troca de foto (12/09, 18:15) · https://www.facebook.com/122107358865466353/posts/122107622577466353?substory_index=1803521420838613

### Instagram: peça de 16/09 não publicou (a Meta recusou a imagem 4x)

`aprovado/2026-09-16-a-agenda-que-se-repete-sozinha` tinha `publicar_em:
2026-09-16` mas as 4 tentativas de publicar (uma da rotina, três de
conferência) voltaram o mesmo erro da Graph API: `Only photo or video can be
accepted as media type. (código 9004/2207052)`. As seis imagens conferem como
PNG válido quando buscadas à mão (`curl`); nada foi publicado (`midias_meta`
não mostra o post). A peça ficou em `aprovado/` com a mesma data — decisão do
dono: pedir para investigar por que a Meta recusa a busca da imagem
(hospedagem/CDN de `drsig.com.br`) ou marcar `publicar_em` para outro dia
depois de resolvido. Detalhe em `marketing/publicador/2026-09-16.md`.

## Feitas

### Instagram: mais 3 dos 18 posts apagados (recomeço do zero) — 18/09/2026

Achado pela conferência do dia (`midias_meta`), não registrado à mão: o Paulo
já apagou pelo app antes desta rodada. Ficam abertos os 4 carrosséis do
sistema de 13 a 15/09 — ver item aberto acima.

- [x] Apresentação do app (15/09) · https://www.instagram.com/p/DdTyC-mDy1_/
- [x] 1/12 · https://www.instagram.com/p/DdIj81oO8SG/
- [x] 12/12 · https://www.instagram.com/p/DdIl6ySOWdN/

### Instagram: 11 dos 18 posts apagados (recomeço do zero) — 16/09/2026

Achado pela conferência do dia (`midias_meta`), não registrado à mão: o Paulo
já apagou pelo app antes desta rodada. Ficam abertos os 5 carrosséis do
sistema e os posts 1/12 e 12/12 — ver item aberto acima.

- [x] Fiscal v1 sem a rubrica (12/09) · https://www.instagram.com/p/DdMDJ7jkQCQ/
- [x] 2/12 · https://www.instagram.com/p/DdIkKWGuNxM/
- [x] 3/12 · https://www.instagram.com/p/DdIkTXoOFU8/
- [x] 4/12 · https://www.instagram.com/p/DdIkbTWuley/
- [x] 5/12 · https://www.instagram.com/p/DdIkjsQO4Z3/
- [x] 6/12 · https://www.instagram.com/p/DdIkr1Zuj96/
- [x] 7/12 · https://www.instagram.com/p/DdIkyJrOx4a/
- [x] 8/12 · https://www.instagram.com/p/DdIk__6u5-h/
- [x] 9/12 · https://www.instagram.com/p/DdIlK__uESy/
- [x] 10/12 · https://www.instagram.com/p/DdIlR1yOd8B/
- [x] 11/12 · https://www.instagram.com/p/DdIlXSJudhW/

### Facebook: apagar os 7 posts da Página (recomeço do zero) — 16/09/2026

5 de 7 apagados pela op-agente (`apagar_facebook`); os outros 2 (avisos
automáticos de foto de capa/perfil) a API recusou — ver item aberto acima.
Relatório: `marketing/publicador/2026-09-16-recomeco-facebook.md`.
