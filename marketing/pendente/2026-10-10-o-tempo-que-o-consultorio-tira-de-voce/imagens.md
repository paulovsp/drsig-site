# Pedido ao Designer — carrossel "O tempo que o consultório tira de você"

**Sem o Freud.** Não é peça de apresentação nem de dinheiro: é peça sobre
o cansaço de quem atende, e a caricatura puxaria o tom para a brincadeira.

Sete quadros. **Todas as capturas pedidas já existem em `capturas/`** — esta
peça não depende de nenhuma captura nova.

| Quadro | Tipo | O que aparece |
|---|---|---|
| 1 | capa | ilustração `papeis`; rótulo "10 DE OUTUBRO"; título "A sessão termina às 15h50. O seu trabalho, não." |
| 2 | tipografia | "Hoje todo mundo vai dizer para você se cuidar." · texto: "Vamos falar da outra parte — a que não é a escuta." |
| 3 | lista | título "O que fica pendurado numa semana comum"; itens: O recibo que pediram · O horário que mudou · A mensagem sem resposta · O registro a escrever antes de esquecer · O caso a levar à supervisão · A sua própria supervisão a pagar |
| 4 | tipografia | "Não é tarefa de escritório. É trabalho clínico que sobrou sem lugar." · texto: "E, sem lugar, mora na sua cabeça." |
| 5 | destaque | título "A lista dentro do consultório"; etiqueta "Afazeres"; valor "Novo afazer..."; texto: "Item novo entra no topo. A ordem é a que você monta arrastando. O que está feito fica onde está, riscado." |
| 6 | captura | `registro-supervisao-demonstracao`; título "A supervisão também é trabalho" |
| 7 | fecho | texto: "O Dr.Sig não cuida de você. Ele tira da sua cabeça a parte do trabalho que não é a escuta. Link na bio." (o tipo `fecho` já desenha a marca e a assinatura; só o texto é nosso) |

## Observações

- **Quadro 5**: o valor do campo é o texto que o app mostra de verdade na
  caixa de novo item (`placeholder` "Novo afazer..." em `AfazeresScreen.js`).
  Não inventar afazeres de exemplo dentro do quadro — a lista do quadro 3 já
  faz esse papel, e ali eles são genéricos, sem nome de ninguém.
- **Quadro 6**: a captura é da conta de demonstração — um registro de
  supervisão do consultório fictício do Freud, referente a Otto Rank,
  personagem histórico, texto escrito para a demonstração. Não há dado de
  pessoa real em nenhum quadro.
- **Quadro 1**: se o rótulo "10 DE OUTUBRO" ficar apertado sobre a
  ilustração, ele sai — a data está na legenda e o gancho se sustenta sem
  ele. O que não sai é o título.
- Nenhum valor em reais, nenhum preço e nenhum número em toda a peça.
