---
canal: email
formato: sequência (3 e-mails)
tema: sequência do plano de setembro — "cadastrou e não assinou"
funcao_do_app: Consultório de demonstração, primeiro uso (analisante, horário, Pix, contador) e escolha do plano
objetivo: conversão cadastro → assinatura
chamada: Escolher meu plano
link: https://drsig.com.br/?utm_source=email&utm_campaign=2026-09-cadastrou-e-nao-assinou
estado: pendente
arte: sem arte (ver imagens.md)
gatilho: conta criada e e-mail confirmado, sem assinatura ativa
disparo: E1 em D+2, E2 em D+5, E3 em D+10; qualquer assinatura interrompe a sequência
remetente: drsig@drsig.com.br (mesmo remetente e reply_to de todo e-mail do app)
---

# Como os links funcionam

O botão "Escolher meu plano" **não é uma URL fixa**: a página
`escolher-plano.html` só abre com um token gerado para aquela conta (é o
que a função `reenviar-instrucoes-plano` já faz hoje quando a pessoa pede
o link pelo app). Nos textos abaixo esse endereço aparece como
`{{LINK_PLANO}}` — quem disparar a sequência preenche com o link daquela
pessoa. O mesmo caminho existe dentro do app, em Meu Perfil › Seu plano.

Os links para o site levam UTM e podem ser iguais para todo mundo.

---

# E-mail 1 — D+2

**Assunto:** Veja o app cheio antes de decidir

Oi, {{NOME}}.

Você criou sua conta no Dr.Sig e parou antes de escolher o plano. Faz sentido: a tela que aparece depois do cadastro é uma tela de decisão, e ninguém decide olhando para um consultório vazio.

Então olhe para um cheio. O app tem um consultório de demonstração — o do Sigmund Freud, inteiramente fictício — com analisantes e supervisionandos, agenda de quatro semanas, registros de sessão e transcrições. Dá para abrir sem cadastro e sem cartão: na tela de entrada do app, toque em "Conhecer o app sem criar conta". Nada ali pode ser alterado, e é a mesma amostra para todo mundo.

Vale percorrer na ordem do dia de trabalho: a agenda com os horários fixos, a ficha de um analisante, o histórico dele com uma sessão transcrita, e depois Cobrança e Fiscal — que é a metade do problema que quase nenhum app de consultório resolve.

Se preferir ler antes de tocar em qualquer coisa, o site conta o mesmo em texto.

**Botão:** Ver o app funcionando → https://drsig.com.br/?utm_source=email&utm_campaign=2026-09-cadastrou-e-nao-assinou-1

---

# E-mail 2 — D+5

**Assunto:** Quatro informações e o app anda

Oi, {{NOME}}.

A dúvida de quem para antes de assinar quase nunca é o preço. É "vou ter que montar tudo de novo aqui dentro?".

Não. São quatro informações, e cada uma destrava uma parte do app:

1. **Um analisante** — nome, valor da sessão e dia de pagamento. É o cadastro de que dependem agenda, sessões, registros, cobrança e recibo.
2. **O horário dele na semana** — a agenda passa a se repetir sozinha, e você não remarca nada toda segunda.
3. **Sua chave Pix** — entra automaticamente nas mensagens de cobrança, em vez de você digitar a chave toda vez.
4. **Os dados do seu contador** — com ele cadastrado, os recibos vão direto, no fechamento que você escolher.

Leva uns cinco minutos, dá para parar no meio e continuar depois, e o app mostra o caminho passo a passo na primeira vez que você entra.

Sobre sigilo, porque é a primeira coisa que se pergunta antes de digitar o nome de alguém: cada consultório fica isolado no próprio banco de dados, e a regra é aplicada pelo banco, não pelo aplicativo. Gravar a sessão é opcional e depende da autorização do analisante, pedida por e-mail — sem a confirmação dele, o app não grava. E "Exportar meus dados", em Meu Perfil, devolve tudo em um arquivo quando você quiser.

**Botão:** Escolher meu plano → {{LINK_PLANO}}

---

# E-mail 3 — D+10

**Assunto:** Quanto custa, e o que vem junto

Oi, {{NOME}}.

Este é o último e-mail desta série — depois dele você só recebe o que pedir.

Fica aqui o que custa, para a conta ser fácil de fazer:

- **R$ 89 por mês**, com R$ 5 por mês em créditos de IA.
- **R$ 414 a cada seis meses** (cerca de R$ 69/mês), com R$ 7 por mês em créditos.
- **R$ 588 por ano** (cerca de R$ 49/mês), com R$ 10 por mês em créditos.

Sem fidelidade em nenhum dos três: você cancela quando quiser, não há multa nem prazo mínimo. Todos os recursos entram em todos os planos, sem limite de analisantes. Os créditos de IA cobrem transcrição de sessões e de aulas, relatórios e a Busca Dr.Sig; o que não for usado acumula para o mês seguinte, e dá para recarregar sem mexer na assinatura. Pagamento pelo Mercado Pago, em cartão de crédito.

O que o app não faz, para não haver surpresa: não diagnostica, não sugere conduta e não substitui supervisão. A IA transcreve, busca e resume dentro do que você escreveu. Quem lê e decide é você.

E se não for para agora, é útil saber por quê. Responda este e-mail dizendo o que faltou — quem lê é uma pessoa, e isso muda o que a gente constrói.

**Botão:** Escolher meu plano → {{LINK_PLANO}}
