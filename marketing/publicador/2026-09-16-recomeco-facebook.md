# Recomeço do zero — Facebook (16/09/2026)

Decisão do dono em 16/09/2026: apagar os posts da Página do Facebook "Dr. Sig"
para recomeçar as redes do zero. Rotina única, via op-agente (rodada 19).

## Apagados (5)

| id | permalink | resultado |
| --- | --- | --- |
| 1384031781450259_122110315431466353 | https://www.facebook.com/122107358865466353/posts/122110315431466353 | apagado |
| 1384031781450259_122110314069466353 | https://www.facebook.com/122107358865466353/posts/122110314069466353 | apagado |
| 1384031781450259_122109434661466353 | https://www.facebook.com/122107358865466353/posts/122109434661466353 | apagado |
| 1384031781450259_122109433335466353 | https://www.facebook.com/122107358865466353/posts/122109433335466353 | apagado |
| 1384031781450259_122108299791466353 | https://www.facebook.com/122107358865466353/posts/122108299791466353 | apagado |

## Não apagados (2)

| id | permalink | resultado |
| --- | --- | --- |
| 1384031781450259_28373795205638104 | https://www.facebook.com/122107358865466353/posts/28373795205638104?substory_index=28373795205638104 | erro: `(#200) This post wasn't created by the application` |
| 1384031781450259_122107622577466353 | https://www.facebook.com/122107358865466353/posts/122107622577466353?substory_index=1803521420838613 | erro: `(#200) This post wasn't created by the application` |

Os dois que sobraram são avisos automáticos de troca de foto de capa/perfil
(12/09, sem foto e sem texto no `midias_meta`), não posts feitos pela
aplicação — a Graph API não deixa apagá-los por essa via. Ficou registrado em
`marketing/PENDENCIAS.md`, para o dono apagar direto na Página se quiser.

## Conferência

`midias_meta` (facebook) depois das exclusões: só os 2 avisos automáticos
acima seguem na lista; nenhum outro post ficou para trás.

## Fora do escopo desta rotina

Instagram, LinkedIn e qualquer publicação nova não foram tocados — a tarefa
era só apagar o que já estava no Facebook.
