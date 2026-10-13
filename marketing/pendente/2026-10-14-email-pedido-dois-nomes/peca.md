---
canal: email
formato: e-mail único (envio às testadoras em cortesia)
tema: canal Convite direto do plano de outubro — "enviar o convite de cortesia às testadoras e pedir dois nomes de colegas a cada uma"
funcao_do_app: Programa de indicações (Meu Perfil › Indique e ganhe desconto) e convite de cortesia amarrado ao e-mail
objetivo: contas novas já atribuídas — origem `indicacao` e `indicado_por` preenchido, hoje zero em quatro rodadas do Analista
chamada: Ver o meu código
link: https://drsig.com.br/?utm_source=email&utm_campaign=2026-10-pedido-dois-nomes
estado: pendente
arte: sem arte (ver imagens.md)
gatilho: envio único, manual, à lista de contas em cortesia (`assinatura_status = 'cortesia'`)
disparo: uma vez, na semana em que o dono aprovar
remetente: drsig@drsig.com.br (mesmo remetente e reply_to de todo e-mail do app)
---

# Por que este e-mail existe

O plano de outubro, na linha **Convite direto** da seção 3, pede: *"Enviar
o convite de cortesia às testadoras e pedir **dois nomes de colegas** a cada
uma; registrar cada e-mail pela `enviar-convite-testador`"* — e repete no
pedido 6, marcado como pendente desde setembro. É, nas palavras do próprio
plano, *"o único canal com conversão previsível: a cortesia nasce amarrada
ao e-mail, então a conta já entra atribuída"*.

Das duas metades, uma já tem texto e a outra não tinha:

- **O convite** existe em `meu-app/operacao/convites/whatsapp-testadores.md`,
  para quem o dono só tem o número, e o e-mail de boas-vindas sai sozinho
  quando a `enviar-convite-testador` registra a cortesia. Nada a escrever.
- **O pedido de dois nomes** não existia em lugar nenhum. É o que esta peça
  escreve.

# Como os links funcionam

Um botão só, e ele aponta para a tela de indicação **dentro do app**, em
Meu Perfil › Indique e ganhe desconto. O app não tem link direto para uma
tela (não há esquema de `deep link` declarado), então o endereço aparece
abaixo como `{{LINK_APP}}`: quem disparar preenche com o que existir na hora
— o link da ficha na loja, se ela estiver no ar, ou o endereço do site. O
caminho dentro do app está escrito no corpo, e é ele que resolve mesmo que o
botão abra só a página inicial.

A resposta ao pedido vem por **resposta ao próprio e-mail** (o `reply_to` é
`drsig@drsig.com.br`, como em todo e-mail do app) — não há formulário, e não
vale criar um só para isso.

# A lista

Só as contas em cortesia (`assinatura_status = 'cortesia'`). Todas elas são
elegíveis ao programa de indicações: a elegibilidade vale para as cem
primeiras contas (migration 0103), e hoje são seis contas no sistema — então
a seção **Indique e ganhe desconto** aparece de fato no Perfil de quem
receber. Mandar para quem não vê a seção seria prometer uma tela que a
pessoa não encontra.

# Uma decisão de redação que vale explicar

O plano diz "pedir dois nomes". Pedir o contato de terceiros a quem confiou
na marca é delicado — e numa marca que fala de sigilo em toda peça, pedir de
qualquer jeito seria incoerente. Então o e-mail pede de duas formas, na
ordem:

1. **Primeiro, a que não envolve dado de ninguém:** encaminhar o convite ela
   mesma, com o próprio código.
2. **Depois, a que envolve:** mandar nome e contato — com o aviso explícito
   de que o Dr.Sig escreve uma vez, dizendo quem indicou, e não entra em
   lista nenhuma.

Isso custa dois parágrafos e evita que o pedido pareça captação de lista.

---

# E-mail

**Assunto:** Duas colegas que você indicaria?

Oi, {{NOME}}.

Você está entre as primeiras pessoas a usar o Dr.Sig de verdade, e isso já ajudou mais do que parece: o que você notou e me disse virou correção no app.

Tenho um pedido, e ele é pequeno: **duas colegas**.

Não é por volume. O app está no começo, e quem chega por indicação de alguém que já usa chega sabendo o que vai encontrar — o que é melhor para ela e melhor para mim, porque o retorno que vem dessas pessoas é o que presta.

Há dois jeitos, e o primeiro é o mais simples:

**1. Você mesma convida.** No app, em **Meu Perfil › Indique e ganhe desconto**, está o seu código de indicação, com um botão de compartilhar que já monta a mensagem. Quem criar a conta digitando esse código no campo "Código de indicação" do cadastro fica vinculada a você. Cada pessoa que **assinar** com o seu código tira 10% da sua mensalidade; com dez, a assinatura fica gratuita. Enquanto a sua cortesia durar não há cobrança nenhuma, então o desconto só passa a valer se e quando você assinar — e as indicações feitas desde já continuam contando.

**2. Ou me diz quem são.** Responda a este e-mail com o nome e o contato de duas colegas que você acha que usariam isso, e eu escrevo para elas. Para ser claro sobre o que acontece: eu escrevo **uma vez**, dizendo que foi você quem indicou, e ofereço o mesmo acesso de cortesia que você tem. Ninguém entra em lista de divulgação, e se a pessoa não responder, não insisto. Se preferir avisá-la antes, melhor ainda — é o que eu faria.

Se nenhum dos dois caminhos fizer sentido agora, está ótimo também: responder "não é o momento" é resposta, e não muda nada no seu acesso.

Uma última coisa, porque é a pergunta que uma colega sua vai fazer antes de qualquer outra: **nada do que está no seu consultório sai dele.** Cada conta fica isolada no próprio banco de dados, e a regra é aplicada pelo banco, não pelo aplicativo: nenhuma conta enxerga a ficha, a sessão ou o registro de outra. Gravar uma sessão é opcional e depende da autorização do analisante, pedida por e-mail; sem a confirmação dele, o app não grava. E "Exportar meus dados", em Meu Perfil, devolve tudo em um arquivo quando você quiser.

Obrigado — de novo.

**Botão:** Ver o meu código → {{LINK_APP}}

*Caminho no app, se o botão não abrir a tela: Meu Perfil › Indique e ganhe desconto › Seu código.*
