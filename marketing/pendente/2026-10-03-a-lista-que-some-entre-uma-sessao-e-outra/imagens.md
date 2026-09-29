# Pedido ao Designer — carrossel "A lista que some entre uma sessão e outra"

Sem o Freud. Sete quadros.

| Quadro | Tipo | O que aparece |
|---|---|---|
| 1 | capa | ilustração `papeis`; "Entre uma sessão e outra, quatro coisas para lembrar" |
| 2 | lista | título "O que não cabe na agenda"; itens: ligar para o convênio · confirmar a supervisão · responder o e-mail de terça · comprar papel |
| 3 | tipografia | "Três lugares para anotar. Nenhum deles aberto na hora em que você lembra." |
| 4 | icone | ilustração `toque`; "Afazeres: o novo entra no topo" |
| 5 | destaque | título "Marcar como feito não desmancha a lista"; etiqueta "Feito"; valor "confirmar a supervisão de quinta" (a arte risca o valor, como o app risca o item concluído) |
| 6 | captura | `inicio-afazeres-demonstracao`, com a linha "Consultório de demonstração do Freud" |
| 7 | fecho | "Link na bio" |

## Captura que falta (só o dono tira)

`inicio-afazeres-demonstracao` — a aba **Início** da tela inicial, com o
quadro de Afazeres visível. As duas capturas de Início que existem hoje
(`inicio-clinica`, `inicio-financeiro`) são das outras duas abas e **não
mostram** a lista. Acrescentar à lista de pendentes de
`capturas/README.md`.

Enquanto ela não existir, o `render.mjs` desenha o aviso de captura
pendente no quadro 6 e o carrossel fica com seis quadros úteis — dá para
aprovar o texto, não a arte final.

Observação: no quadro 5, o valor riscado é arte, não um dado — nenhum nome
de gente real, nem na captura (só a demonstração).
