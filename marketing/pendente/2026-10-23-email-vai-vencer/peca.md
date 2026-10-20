---
canal: email
formato: sequência (3 e-mails)
tema: retenção — o acesso que termina na data, para quem não tem renovação automática (sequência "vai vencer", pendente desde setembro na lista do Redator)
funcao_do_app: Seu plano (estado da assinatura, "Receber o link por e-mail"), Exportar meus dados, acesso de leitura ao que já foi registrado
objetivo: renovação antes da data; recuperação até três dias depois
chamada: Escolher meu plano
link: https://drsig.com.br/?utm_source=email&utm_campaign=2026-10-vai-vencer
estado: pendente
arte: sem arte (ver imagens.md)
gatilho: assinatura ou cortesia válida que termina em 7 dias ou menos E a conta NÃO tem cobrança recorrente no Mercado Pago
disparo: E1 em D−7, E2 em D−1, E3 em D+3; qualquer assinatura ativa interrompe a sequência
remetente: drsig@drsig.com.br (mesmo remetente e reply_to de todo e-mail do app)
---

# Quem recebe, e quem não recebe

Esta é a parte que define a peça, e errar nela é pior do que não mandar
nada.

O app distingue duas situações que, na tela, parecem a mesma coisa: a conta
cujo acesso **renova sozinho** (tem cobrança recorrente no Mercado Pago) e a
conta cujo acesso **simplesmente acaba na data**. Para a primeira, a data que
se aproxima não exige ação nenhuma — mandar "seu acesso vai acabar" a quem
tem renovação automática é assustar sem motivo e dar informação errada.

Então esta sequência vai **somente** para contas sem cobrança recorrente
ativa cujo acesso termina em sete dias ou menos. Na prática, três casos:

- **cortesia** com data de validade (testadoras, convidadas);
- **assinatura cancelada** que continua valendo até a data;
- qualquer conta cujo acesso acabe na data sem renovar.

Quem tem renovação automática **não recebe**. Qualquer assinatura ativa no
meio do caminho interrompe a sequência.

# Como os links funcionam

O botão "Escolher meu plano" **não é uma URL fixa**: a página
`escolher-plano.html` só abre com um token gerado para aquela conta — é o que
a função `reenviar-instrucoes-plano` já faz quando a pessoa pede o link em
Meu Perfil › Seu plano. Nos textos abaixo esse endereço aparece como
`{{LINK_PLANO}}`; quem disparar preenche com o link daquela pessoa.

Vale saber **por que esta sequência existe como e-mail**, e não como tela: a
política do Google Play proíbe preço, link de pagamento e instrução de
compra dentro do aplicativo. O app pode dizer que o acesso termina na data; a
ponte para o plano e para o preço é, obrigatoriamente, o e-mail.

`{{DIA}}` é a data de término no formato "12 de novembro". `{{NOME}}` é o
primeiro nome.

---

# E-mail 1 — D−7

**Assunto:** O seu acesso termina em sete dias

Oi, {{NOME}}.

O seu acesso ao Dr.Sig termina em {{DIA}}, e ele não renova sozinho — não há cobrança automática na sua conta, então a data chega e o acesso acaba. Este e-mail existe para que isso não seja surpresa no meio de uma semana de atendimento.

Vale dizer com precisão o que acontece e o que não acontece nesse dia, porque as duas coisas costumam ser confundidas:

**O que continua.** Tudo o que você registrou continua lá, e você continua podendo abrir e ler: analisantes, sessões, registros, agenda, lançamentos. Nada é apagado por vencimento. "Exportar meus dados", em Meu Perfil, continua funcionando e devolve o seu material num arquivo, quando você quiser.

**O que para.** Criar, alterar e apagar. Lançar uma sessão, gravar, pedir transcrição, emitir recibo, abrir relatório, corrigir um cadastro — é essa parte que depende da assinatura ativa. A separação não é feita pelo aplicativo: no banco de dados, a leitura dos seus próprios dados nunca é bloqueada, e é a escrita que exige assinatura em dia.

Se faz sentido continuar, o botão abaixo abre a escolha do plano na sua conta. Se não faz, não precisa fazer nada: o acesso termina sozinho, sem cobrança e sem pendência, e os seus dados ficam onde estão.

Sobre sigilo, já que o assunto é o seu material: cada conta enxerga apenas os próprios analisantes, e essa regra é aplicada pelo banco de dados, não pelo aplicativo. Isso não muda com a assinatura vencida.

**Botão:** Escolher meu plano → {{LINK_PLANO}}

## Variante para conta em cortesia

Quando a conta é de cortesia, o primeiro parágrafo do E1 é substituído por
este — o resto do e-mail não muda:

> O seu acesso de cortesia ao Dr.Sig termina em {{DIA}}. Ele foi um convite, com prazo combinado desde o começo, e não vira cobrança nenhuma quando acabar: não há cartão na sua conta e nada será debitado. Este e-mail só avisa a data, e conta o que acontece nela.

---

# E-mail 2 — D−1

**Assunto:** Amanhã é o último dia do seu acesso

Oi, {{NOME}}.

Amanhã, {{DIA}}, é o último dia do seu acesso ao Dr.Sig. Se continuar faz sentido, dá para resolver hoje em dois minutos — e, como a pergunta que trava quase todo mundo é o preço, ele vai aqui, inteiro, sem letra miúda.

São três formas de assinar, sem fidelidade em nenhuma delas:

- **Mensal** — R$ 89 por mês.
- **Semestral** — R$ 414 a cada seis meses, cerca de R$ 69 por mês.
- **Anual** — R$ 588 por ano, cerca de R$ 49 por mês.

Todas renovam automaticamente na mesma periodicidade, e você cancela quando quiser: não há multa nem prazo mínimo. O pagamento é pelo Mercado Pago, em cartão de crédito.

A assinatura inclui crédito mensal para os recursos que usam IA — transcrição de sessões e de aulas, relatórios e busca: R$ 5 no Mensal, R$ 7 no Semestral, R$ 10 no Anual. O crédito entra todo mês e o que não foi usado acumula para o mês seguinte.

Nada do que você já registrou depende dessa decisão. Os seus dados continuam acessíveis para leitura e exportação depois de amanhã; o que a assinatura destrava é criar, alterar e apagar.

**Botão:** Escolher meu plano → {{LINK_PLANO}}

---

# E-mail 3 — D+3

**Assunto:** Nada foi apagado

Oi, {{NOME}}.

O seu acesso ao Dr.Sig terminou em {{DIA}}, e este é o último e-mail sobre isso.

Ele serve para dizer uma coisa só, porque é a que costuma dar aflição: **nada foi apagado**. Os seus analisantes, as sessões, os registros, a agenda e os lançamentos continuam na sua conta. Você entra, abre e lê como antes. E "Exportar meus dados", em Meu Perfil, devolve tudo num arquivo a qualquer momento — sem assinatura, sem pedido, sem depender de nós.

Isso importa além da conveniência. Para quem tem CRP, a Resolução CFP 001/2009 fixa cinco anos como prazo mínimo de guarda do registro documental, contados do último atendimento. Um aplicativo que apagasse o seu material por causa de uma mensalidade vencida estaria criando um problema que não é seu. O Dr.Sig não faz isso: quem apaga os seus dados é você, em Meu Perfil, e aí é em cascata e sem cópia guardada.

Se voltar fizer sentido mais adiante — num mês mais calmo, num semestre novo —, é o mesmo botão, e a sua conta estará do jeito que você deixou. Em Meu Perfil › Seu plano há o atalho "Receber o link por e-mail", que manda este mesmo endereço quando você quiser.

E se não voltar, está tudo bem. Obrigado pelo tempo que você passou aqui.

**Botão:** Voltar para o Dr.Sig → {{LINK_PLANO}}

---

# Conferência

- **Nenhuma promessa de resultado clínico** em nenhum dos três.
- **Preços só os da página de planos** (`index.html`, seção "Quanto custa?" e
  os três cartões): R$ 89/mês, R$ 414/6 meses (~R$ 69/mês), R$ 588/ano
  (~R$ 49/mês); crédito mensal de R$ 5, R$ 7 e R$ 10. Sem "a partir de".
- **Nenhum dado de usuária real.** Não há exemplo nominal nenhum nos três
  e-mails; os campos são `{{NOME}}` e `{{DIA}}`.
- **Sigilo**: o E1 diz, em uma linha, como o isolamento é garantido (regra no
  banco de dados), porque fala do material da analista. O E3 diz o que
  acontece com os dados no vencimento e quem pode apagá-los.
- **A afirmação central foi conferida no banco, não no texto do app.** A
  migration `0025_assinatura_estado_e_bloqueio.sql` cria, em cada tabela,
  quatro políticas no lugar de uma: a de `select` exige apenas posse
  (`user_id = auth.uid()` ou `owns_patient`), e as de `insert`, `update` e
  `delete` exigem também `assinatura_ativa(auth.uid())`. Leitura nunca é
  bloqueada por vencimento; escrita é. É isso que os três e-mails dizem.
- **O que não foi afirmado**, de propósito: que os dados ficam guardados para
  sempre. O E3 diz que nada foi apagado e que a exportação continua
  funcionando — as duas coisas são verdade hoje e verificáveis. Prazo de
  retenção indefinido não é promessa que uma peça de divulgação deva fazer.
- **O que não foi prometido**: nenhum desconto de retenção, nenhuma extensão
  de cortesia, nenhuma "oferta de volta". Nada disso existe no app, e
  inventar na peça criaria pedido que o dono teria de honrar à mão.
