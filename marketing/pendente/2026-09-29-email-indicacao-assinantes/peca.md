---
canal: email
formato: e-mail único (envio às assinantes)
tema: canal Indicação do plano de setembro — "1 tela + 1 e-mail às assinantes explicando os 10%"
funcao_do_app: Programa de indicações (Meu Perfil › Indique e ganhe desconto)
objetivo: contas com `indicado_por` — hoje zero, em três rodadas seguidas do Analista
chamada: Ver o meu código
link: https://drsig.com.br/?utm_source=email&utm_campaign=2026-10-indicacao-assinantes
estado: pendente
arte: sem arte (ver imagens.md)
gatilho: envio único, manual, à lista de contas com assinatura ativa e `elegivel_indicacao`
disparo: uma vez, na semana em que o dono aprovar
remetente: drsig@drsig.com.br (mesmo remetente e reply_to de todo e-mail do app)
---

# Por que este e-mail existe

O plano de setembro pede, no canal **Indicação**: "Lembrete dentro do app
(Meu Perfil) e um e-mail às assinantes explicando os 10%". A tela existe
desde antes do lançamento; o e-mail nunca foi escrito. O Analista fechou
três rodadas seguidas (14/09, 21/09 e 28/09) com **zero** contas de origem
`indicacao` e zero descontos por `indicado_por` — o programa está no app e
ninguém foi avisado dele.

# Como os links funcionam

O botão aponta para a tela de indicação **dentro do app**, em Meu Perfil.
O app não tem link direto para uma tela hoje (não há esquema de
`deep link` declarado), então o endereço aparece abaixo como
`{{LINK_APP}}`: quem disparar preenche com o que existir na hora — o link
da ficha na loja, se ela já estiver no ar, ou o endereço do site. O
caminho dentro do app está escrito no corpo do texto, e é ele que resolve
o problema mesmo que o botão só abra a página inicial.

Só entram na lista as contas com assinatura ativa e elegíveis ao programa
(`elegivel_indicacao`) — é a mesma condição que faz a seção aparecer no
app. Mandar para quem não vê a seção seria prometer uma tela que a pessoa
não encontra.

---

# E-mail

**Assunto:** Você indica, sua mensalidade cai

Oi, {{NOME}}.

Existe uma coisa no Dr.Sig que quase ninguém viu ainda, e a culpa é nossa: nunca contamos.

Você tem um código de indicação. Cada colega que assinar usando ele tira **10% da sua mensalidade**. Com dez colegas ativas, a sua assinatura fica gratuita — e continua gratuita enquanto elas continuarem.

O código está em **Meu Perfil**, na seção "Indique e ganhe desconto". Ali você vê três coisas: quantas indicações ativas você tem, quanto de desconto está valendo agora, e o código em si. Tocando nele, o app abre o compartilhamento com um convite já escrito — você não precisa pensar no texto.

Duas coisas que é justo dizer antes de você indicar alguém:

**O desconto acompanha quem está com a assinatura ativa.** Se uma colega que você indicou cancelar, aqueles 10% saem no ajuste seguinte. Não é pegadinha, é a mesma regra nos dois sentidos.

**O número que aparece na tela é o que está sendo cobrado de verdade.** O app não refaz a conta para te mostrar um valor bonito: ele mostra o desconto que já está aplicado na sua cobrança. Se houver diferença entre o que você esperava e o que aparece, é porque o ajuste ainda não passou — e não porque a tela está otimista.

Sobre sigilo: indicar não expõe nada de ninguém. O convite leva só o seu código, e nós não contamos à sua colega que você a indicou, nem a você o que ela faz dentro do app. As contas continuam isoladas uma da outra, como sempre.

Se você conhece uma psicoterapeuta que ainda organiza o consultório em três lugares diferentes, o convite está a um toque.

**Botão:** Ver o meu código → {{LINK_APP}}

---

# Rodapé do e-mail

O de sempre, o mesmo dos outros e-mails do app: remetente
drsig@drsig.com.br, `reply_to` igual, e o descadastramento que o disparo
já usa.
