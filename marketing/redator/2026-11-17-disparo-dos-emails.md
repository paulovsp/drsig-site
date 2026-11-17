# Disparo dos e-mails — o que falta para cada um dos quatro sair

Material de apoio da redação de 17/11/2026. **Nada aqui foi enviado.**
Este arquivo existe para o mesmo que o `2026-11-03-passagem-para-o-ar.md`
faz pelo blog: transformar o "aprovo" do dono (pedido 7 do plano de
novembro) em envio, sem decisão nova pelo caminho.

A seção 3 do plano de novembro põe o e-mail como canal com **4 disparos**
e a razão escrita: *"é o único mecanismo de recuperação que existe e não
passa por rede nenhuma"*. Os quatro textos estão prontos desde setembro e
outubro; **nenhum foi enviado**. Este arquivo foi escrito para descobrir
por quê, peça por peça — e a resposta não é a mesma para os quatro.

> **Resumo, antes do detalhe.** Dos quatro, **dois podem sair hoje** sem
> nenhuma pendência (indicação às assinantes, pedido de dois nomes) e
> **dois não podem** — um porque o botão depende de um link que ninguém
> além da própria dona da conta consegue gerar hoje, outro porque **não
> tem destinatário nenhum nesta semana**. E o público real somado dos que
> podem sair é de **no máximo duas pessoas**. Isso muda o tamanho do
> pedido 7, e está detalhado abaixo com o número de cada um.

## O público de cada um, hoje

Contagens lidas hoje por `op-agente` (`funil`, `dias: 35`, campo `status`;
e `resumo`, `horas: 168`), rodada 267. São **agregados** — este arquivo
não traz nome nem endereço de ninguém, e quem disparar tira a lista dos
endereços no painel do Supabase, não daqui.

| Status | Contas | O e-mail que fala com elas |
|---|---|---|
| `ativa` | 1 | Indicação às assinantes |
| `cortesia` | 2 | Pedido de dois nomes às testadoras |
| `sem_assinatura` | 2 | Cadastrou e não assinou |
| `cancelada` | 1 | nenhum dos quatro |
| **Total** | **6** | |

Duas observações que mudam o número para menos, e que valem conferir
antes de escrever o primeiro:

1. **Uma das 2 contas em `cortesia` é a do próprio dono.** O `resumo` de
   hoje devolve `contaDoDono.status: "cortesia"`. Então o e-mail às
   testadoras tem, no máximo, **1 destinatária real** — e o dono não
   precisa se escrever. Vale ele confirmar qual é a outra antes de
   enviar.
2. **O "vai vencer" não tem destinatária esta semana.** O gatilho da peça
   é acesso terminando em 7 dias ou menos; o `resumo` de hoje devolve
   `acessos.vencemEm7Dias: 0` e `vencidosUltimos30Dias: 0`. Não há a quem
   enviar hoje.

## 1. Indicação às assinantes — **pode sair hoje**

`marketing/pendente/2026-09-29-email-indicacao-assinantes/`

| | |
|---|---|
| Formato | e-mail único |
| Público | contas com assinatura ativa — **1 hoje** |
| Remetente | `drsig@drsig.com.br` (remetente e `reply_to`, como todo e-mail do app) |
| Preencher | `{{NOME}}` (1×) e `{{LINK_APP}}` (2×) |
| Trava | **nenhuma** |

**`{{LINK_APP}}` tem resposta hoje**, e a peça já diz qual: *"o link da
ficha na loja, se ela já estiver no ar, ou o endereço do site"*. A ficha
está no ar, então é

```
https://play.google.com/store/apps/details?id=br.com.drsig.app
```

Conferido hoje: responde 200. **Não use o endereço do site** enquanto o
passo 0 do arquivo de subida estiver aberto (o certificado de
`drsig.com.br` está expirado — ver o fim deste arquivo); a ficha da loja
resolve e não passa por lá.

O caminho dentro do app está escrito no corpo do texto (*Meu Perfil ›
Indique e ganhe desconto › Seu código*), e é ele que resolve de verdade
— o botão só leva a pessoa até o app. O `utm_campaign` da peça é
`2026-10-indicacao-assinantes`, escrito em outubro; se o envio for em
novembro, vale trocar o mês para `2026-11-` antes de enviar, para o
relatório do Analista não datar o envio errado.

Sobre sigilo, a peça já diz em uma linha o que precisa dizer, e ela fica:
indicar não expõe nada de ninguém — o convite leva só o código de quem
indica, as contas continuam isoladas uma da outra, e a regra do
isolamento é aplicada pelo banco de dados.

## 2. Pedido de dois nomes às testadoras — **pode sair hoje**

`marketing/pendente/2026-10-14-email-pedido-dois-nomes/`

| | |
|---|---|
| Formato | e-mail único |
| Público | contas em `cortesia` — **2 hoje, uma delas a do dono** → no máximo 1 destinatária |
| Remetente | `drsig@drsig.com.br` |
| Preencher | `{{NOME}}` (1×) e `{{LINK_APP}}` (2×) |
| Trava | **nenhuma** (só confirmar quem é a destinatária real) |

`{{LINK_APP}}` é o mesmo endereço da ficha da loja do item 1, pela mesma
razão. O `utm_campaign` é `2026-10-pedido-dois-nomes` — mesma observação
de mês do item 1.

A linha de sigilo deste também está no lugar e é a mais completa dos
quatro: cada conta isolada no próprio banco de dados, com a regra
aplicada pelo banco e não pelo aplicativo; gravar uma sessão é opcional e
depende da autorização do analisante, pedida por e-mail, sem a
confirmação dele o app não grava; e "Exportar meus dados" devolve tudo
num arquivo quando ela quiser.

## 3. Cadastrou e não assinou — **travado, e a trava é de engenharia**

`marketing/pendente/2026-09-25-email-cadastrou-e-nao-assinou/`

| | |
|---|---|
| Formato | sequência de 3 (E1 em D+2, E2 em D+5, E3 em D+10) |
| Público | contas em `sem_assinatura` — **2 hoje**, nesse estado desde setembro |
| Preencher | `{{NOME}}` (3×) e `{{LINK_PLANO}}` (3×) |
| Trava | **`{{LINK_PLANO}}` não pode ser gerado por quem dispara** |

Esta é a descoberta desta rodada, e é a razão pela qual o pedido 7 não
andou nestes dois meses no item que mais importava.

O botão "Escolher meu plano" não é uma URL fixa: é
`https://app.drsig.com.br/escolher-plano.html?token_hash=…`, com um token
de uso único gerado pela função `reenviar-instrucoes-plano`. Li a função
hoje. Ela tira o endereço de e-mail **do JWT de quem chama**
(`userData.user.email`) e não aceita nenhum parâmetro para gerar o link
de outra conta. Em outras palavras: **só a própria dona da conta
consegue pedir esse link, de dentro do app.** O dono não tem como
produzi-lo para as 2 contas, e a instrução da peça — *"quem disparar a
sequência preenche com o link daquela pessoa"* — foi escrita supondo um
disparo automático, com a chave de serviço, que é o que o cabeçalho da
peça descreve (`gatilho` e `disparo` em D+2/D+5/D+10). Por isso ela não
está errada: **o que não cabe é enviar esta sequência à mão.**

Duas saídas, e a escolha é do dono:

- **(a) Mandar à mão, trocando o botão pelo caminho no app.** O texto da
  peça já registra que *"o mesmo caminho existe dentro do app, em Meu
  Perfil › Seu plano"* — é lá que ela toca e o link chega no e-mail dela
  própria, pela mesma função. É uma troca de uma linha por e-mail, nos
  três, de um botão para uma instrução. Se o dono disser "troca", eu
  escrevo a troca e ela entra na peça em `pendente/` para ele aprovar —
  não mexo nisso sem o "sim", porque mudar a chamada de uma peça é
  decisão dele, não minha.
- **(b) Deixar a sequência para quando for automática**, que é como ela
  foi escrita. Nesse caso a sequência não entra no pedido 7 e o pedido
  passa a ser de 2 e-mails, não de 4.

**E há uma segunda trava, menor, só no E1.** O botão "Ver o app
funcionando" do primeiro e-mail aponta para
`https://drsig.com.br/?utm_source=email&utm_campaign=2026-09-cadastrou-e-nao-assinou-1`
— e esse endereço cai no certificado expirado. **É o único link de
`drsig.com.br` no corpo dos quatro e-mails**; os outros três usam a ficha
da loja ou `app.drsig.com.br`, que estão sadios. Se a saída (a) for
escolhida, esse botão também precisa mudar, ou esperar o passo 0.

## 4. Vai vencer — **pronto, sem destinatária hoje**

`marketing/pendente/2026-10-23-email-vai-vencer/`

| | |
|---|---|
| Formato | sequência de 3 (E1 em D−7, E2 em D−1, E3 em D+3) |
| Público | acesso terminando em ≤7 dias **e** sem cobrança recorrente no Mercado Pago — **0 contas hoje** |
| Preencher | `{{NOME}}` (5×), `{{DIA}}` (6×) e `{{LINK_PLANO}}` (4×) |
| Trava | sem destinatária hoje; e o mesmo `{{LINK_PLANO}}` do item 3 |

Esta é a peça mais bem resolvida dos quatro em texto — tem até seção de
conferência própria, e a linha de sigilo do E1 está no lugar (cada conta
enxerga apenas os próprios analisantes, com a regra aplicada pelo banco
de dados, e isso não muda com a assinatura vencida). Mas ela é uma
sequência **de gatilho**: ela existe para disparar quando um acesso está
a 7 dias de terminar, e hoje `vencemEm7Dias` é 0.

Então ela não é "um disparo que falta fazer": é um gatilho que precisa
existir. Enviar à mão hoje seria escrever "seu acesso termina em
{{DIA}}" para quem não tem acesso terminando. **Fica pronta e parada, de
propósito** — e vale o Estrategista não contá-la como disparo pendente no
plano de dezembro, porque não há o que disparar.

Quando houver destinatária, ela herda a trava do `{{LINK_PLANO}}` do item
3: as duas sequências dependem do mesmo link.

## O que isso faz com o pedido 7 do plano

O pedido 7 diz "enviar os 4 e-mails já escritos". Lido peça por peça, ele
é, hoje:

| Peça | Pode sair hoje? | Destinatárias | O que falta |
|---|---|---|---|
| Indicação às assinantes | **sim** | 1 | nada — preencher nome e o link da loja |
| Pedido de dois nomes | **sim** | ≤1 | confirmar quem é a conta de cortesia que não é a do dono |
| Cadastrou e não assinou | não | 2 | decidir entre (a) trocar o botão pelo caminho no app ou (b) esperar a automação |
| Vai vencer | não | **0** | nada a fazer: não há acesso vencendo |

São **2 e-mails para no máximo 2 pessoas**, não 4 disparos. Não escrevo
isso para diminuir o canal — o plano está certo em dizer que é o único
mecanismo que não passa por rede de terceiro, e dois e-mails para duas
pessoas custam quinze minutos. Escrevo porque o pedido 7 está aberto há
dois meses parecendo maior do que é, e porque uma das quatro peças tem
uma trava que nenhuma quantidade de aprovação resolve.

## O passo 0 vale aqui também, mas quase não atrapalha

O certificado de `https://drsig.com.br` continua expirado (reconferido
hoje — ver `2026-11-03-passagem-para-o-ar.md`, passo 0). Para o e-mail,
o efeito é pequeno e vale dito com precisão, porque é diferente do que
acontece com o blog:

- **Corpo dos e-mails**: um único link de `drsig.com.br`, o botão do E1 de
  "cadastrou e não assinou" (item 3). Todo o resto aponta para a ficha da
  loja ou para `app.drsig.com.br`, que responde 200 com certificado sadio
  — conferido hoje.
- **Cabeçalho `link:` das quatro peças**: todos são
  `https://drsig.com.br/?utm_source=email&…`. É o endereço de registro da
  peça, não um botão do texto; só vai para o corpo se quem disparar
  copiar de lá. **Não copie.**

Ou seja: **o e-mail é o único canal do plano de novembro que o
certificado não para.** O blog para (é a meta do mês), as redes dependem
do pedido 4, e o e-mail passa por fora — desde que o link do item 3 não
seja usado.
