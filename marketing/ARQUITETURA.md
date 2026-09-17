# Sistema de divulgação — arquitetura

Versão de 17/09/2026, escrita a partir do que existe (rotinas na nuvem,
agentes em `meu-app/.claude/`, a função `op-agente`, as pastas de
`marketing/`). Serve para o dono enxergar o todo antes de redesenhar. Não
propõe nada: descreve.

## 1. Para que serve

Fazer a marca falar todo dia, nas redes e no site, sem que o dono escreva,
desenhe ou publique, e medir se isso vira instalação, cadastro e
assinatura. O dono decide o que sai (aprova a semana) e faz o que as
plataformas só deixam uma pessoa fazer.

## 2. As seis camadas

```
 ┌──────────────────────────────────────────────────────────────────┐
 │ 6. DONO ── aprova a semana no chat · PENDENCIAS.md · capturas     │
 ├──────────────────────────────────────────────────────────────────┤
 │ 5. FILA EM GIT (drsig-site/marketing) ── plano/ → pendente/ →     │
 │    aprovado/ → publicado/ | recusado/ · semana/ · publicador/     │
 ├──────────────────────────────────────────────────────────────────┤
 │ 4. AGENTES ── Estrategista · Redator · Designer · Publicador ·    │
 │    Analista  (perfis em .claude/agents, skills em .claude/skills) │
 ├──────────────────────────────────────────────────────────────────┤
 │ 3. PORTA ── op-agente: publicar · midias_meta · verificar_meta ·  │
 │    apagar_facebook · funil · instalacoes · avisar_dono            │
 ├──────────────────────────────────────────────────────────────────┤
 │ 2. MEDIÇÃO ── op_funil (cadastros, assinaturas, instalações por   │
 │    origem/dia) · UTM nos links · origem_cadastro no app           │
 ├──────────────────────────────────────────────────────────────────┤
 │ 1. CANAIS ── Instagram @oseusig + Página FB (Graph API) · site e  │
 │    blog drsig.com.br (as artes vivem lá) · LinkedIn (manual) ·    │
 │    e-mail (Resend) · Play Store                                   │
 └──────────────────────────────────────────────────────────────────┘
```

- **Camada 1, canais.** A Meta é a única que o sistema opera sozinho
  (token de Página sem expiração no Supabase). As imagens têm de estar
  públicas em `drsig.com.br/marketing/...`: a Meta busca de lá, e o site é
  o próprio repositório. LinkedIn não tem API ligada: o texto vai para o
  dono colar. E-mail sai pela Resend.
- **Camada 2, medição.** Cada peça leva UTM; o cadastro no app pergunta
  "como conheceu"; `op_funil` guarda cadastros, assinaturas e instalações
  por origem e dia (instalações vêm do relatório do Play, por conta de
  serviço, ainda em propagação).
- **Camada 3, a porta.** `publicar` valida imagens e legenda, publica, lê
  o post de volta e confere (tipo, quadros, legenda). `midias_meta` diz o
  que está no ar. `apagar_facebook` apaga post da Página (o Instagram não
  deixa). `funil` e `instalacoes` alimentam o Analista.
- **Camada 4, agentes.** Cinco papéis, cada um com perfil e skill, rodando
  em rotina na nuvem ou na conversa (`/estrategia`, `/redacao`, `/design`,
  `/curadoria`, `/publicacao`, `/analise`).
- **Camada 5, a fila.** Uma pasta por peça: `peca.md` (texto e cabeçalho
  YAML com canal, formato, link, estado, `publicar_em`, links publicados,
  `conferido`), `imagens.md` (pedido de arte), `quadros.json` (arte
  descrita), `quadro-NN.png` (renderizado). Mover a pasta é mudar o estado.
  `PENDENCIAS.md` é a lista única do que só o dono faz.
- **Camada 6, o dono.** Aprova a semana na conversa ("aprovo a semana",
  "menos X", "muda X para quinta"); faz as pendências (apagar no Instagram,
  colar no LinkedIn); tira as capturas do app na conta de demonstração;
  decide dinheiro (teto R$ 200/mês em `ORCAMENTO.md`).

## 3. Quem faz o quê, e quando

| Agente | Cadência (Brasília) | Lê | Escreve | Chama o dono quando |
|---|---|---|---|---|
| **Estrategista** | dia 1, 10:00 (Opus) | funil do mês anterior, `gastos/`, `ORCAMENTO.md` | `plano/AAAA-MM.md`: meta, canais, temas, orçamento, "pedidos ao dono" | sempre: o plano tem pedidos |
| **Redator** | terça 09:00 (Opus) | plano do mês, `recusado/` | `pendente/<peça>/peca.md` + `imagens.md`; `redator/AAAA-MM-DD.md` | nunca (entrega na fila) |
| **Designer** | quarta 09:00 (Sonnet) | `imagens.md`, kit da marca, `capturas/` | `quadros.json` + `quadro-NN.png` na pasta da peça; `designer/AAAA-MM-DD.md` | captura que falta |
| **Publicador · curadoria** | sexta 09:00 (Sonnet) | `midias_meta`, `PENDENCIAS.md`, `pendente/` com arte pronta, `aprovado/` sem data | `semana/AAAA-MM-DD.md` (estado do perfil + tabela da semana) | sempre: e-mail com as imagens para aprovar |
| **Publicador · diário** | todo dia 10:00 (Sonnet) | `aprovado/` com `publicar_em` = hoje | publica IG+FB, confere, move para `publicado/`, `publicador/AAAA-MM-DD.md`, `PENDENCIAS.md` | só se houver pendência nova ou divergência |
| **Analista** | segunda 08:00 (Sonnet) | `op_funil`, instalações, gastos, indicações | `analise/AAAA-MM-DD.md` com três recomendações | nunca (o Estrategista lê) |

## 4. O ciclo de uma peça

```
 plano/ (dia 1) ─▶ Redator (ter) ─▶ pendente/<peça>/peca.md + imagens.md
                                          │
                     Designer (qua) ─▶ quadros.json + quadro-NN.png
                                          │
       Publicador (sex) ─▶ semana/AAAA-MM-DD.md ─▶ e-mail ao dono com as imagens
                                          │
       dono no chat: "aprovo…" ─▶ Claude escreve publicar_em e move para aprovado/
                                          │
       Publicador (todo dia 10:00) ─▶ publicar (IG+FB) ─▶ confere ─▶ publicado/
                                          │
       Analista (seg) ─▶ analise/ ─▶ Estrategista (dia 1) ─▶ plano do mês seguinte
```

Correção de peça já publicada: peça nova + pendência de apagar a antiga
(o Instagram não apaga pela API). Republicação (`republicacao_de:`): só sai
quando o post antigo tiver sumido do perfil.

## 5. O que só o dono faz

Aprovar a semana; apagar ou editar post no Instagram; qualquer coisa na
conta pessoal do Facebook (amizades, mensagens); colar no LinkedIn;
impulsionar ou pagar anúncio; tirar capturas do app; regenerar o token da
Meta (senha); criar a página do LinkedIn.

## 6. Limites externos que moldam o desenho

- Instagram (Graph API): publica imagem e carrossel (2 a 10); não apaga,
  não edita legenda, não segue, não curte, não responde direto (comentários
  e caixa de entrada da Página exigem duas permissões a mais).
- Facebook: só a Página tem API; perfil pessoal, nenhuma. Post automático
  de foto de capa a API não apaga.
- Meta busca as imagens no site: se `drsig.com.br` oscila (502 em 16/09),
  a publicação falha.
- LinkedIn: sem API ligada; página ainda não existe.
- Play: instalações agregadas, com um dia de atraso.
- Rotina na nuvem: 1 h de intervalo mínimo; sem acesso ao PC do dono.

## 7. Fragilidades conhecidas (17/09/2026)

1. Aprovação e pendências chegavam por e-mail, que o dono não lê; a
   página de aprovação com imagens ainda não é o padrão.
2. Publicar para 0 seguidores: o plano de setembro supôs audiência que não
   existe; audiência vem de convite, indicação, LinkedIn e institutos.
3. Uma falha esperada de publicação vira 502 e incidente duplicado.
4. Sem resposta a comentários e mensagens da Página.
5. O site que hospeda as imagens não é monitorado.

## 8. Mapa mental

```mermaid
mindmap
  root((Divulgação))
    Canais
      Instagram @oseusig (Graph API)
      Página Facebook "Dr. Sig" (Graph API)
      Site e blog drsig.com.br (imagens públicas)
      LinkedIn (manual, sem página ainda)
      E-mail (Resend)
      Play Store (instalações)
    Medição
      UTM em todo link
      origem_cadastro no app
      op_funil por origem e dia
      gastos/AAAA-MM.md
    Porta única
      op-agente
        publicar (valida → publica → confere)
        midias_meta
        verificar_meta
        apagar_facebook
        funil · instalacoes
        avisar_dono
    Agentes
      Estrategista · dia 1
      Redator · terça
      Designer · quarta
      Publicador · sexta (curadoria) e todo dia (publicação)
      Analista · segunda
    Fila em git
      plano/
      pendente/ → aprovado/ → publicado/
      recusado/
      semana/ · publicador/ · designer/ · redator/ · analise/
      PENDENCIAS.md
      KIT-DA-MARCA.md · ORCAMENTO.md
    Dono
      aprova a semana no chat
      faz as pendências (IG, LinkedIn)
      capturas da demonstração
      dinheiro (teto R$ 200/mês)
```

Arquivo irmão: `meu-app/operacao/ARQUITETURA.md` (manutenção técnica).
