# Pedido ao Designer — sequência "vai vencer"

**Sem arte.** Os e-mails do Dr.Sig são texto e um botão, no molde dos
e-mails que o app já manda (remetente `drsig@drsig.com.br`). Não há quadro a
renderizar nesta pasta.

## O que quem disparar precisa preencher

| Campo | O que é | Onde achar |
|---|---|---|
| `{{NOME}}` | primeiro nome da pessoa | `profiles` |
| `{{DIA}}` | data de término, no formato "12 de novembro" | `profiles.assinatura_expira_em` |
| `{{LINK_PLANO}}` | link com token daquela conta | o mesmo que `reenviar-instrucoes-plano` gera (destino `plano`) |

## O filtro, de novo, porque é o risco desta peça

Mandar o E1 ou o E2 para quem **tem** cobrança recorrente ativa no Mercado
Pago é dar informação errada a uma assinante em dia. O recorte está no
cabeçalho do `peca.md` e vale repetir: só vai para conta cujo acesso termina
em 7 dias ou menos **e** que não tem renovação automática.

## Uma nota para quem publicar

Hoje são poucas contas e o disparo é à mão, um e-mail por pessoa. Se um dia
isso virar automático, o gatilho natural é a `enviar-digest-diario`, que já
roda todo dia e já lê o estado das contas — mas isso é trabalho de
engenharia, não desta peça, e não há incidente nem item de backlog aberto
pedindo.
