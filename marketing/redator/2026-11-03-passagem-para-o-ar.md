# Passagem para o ar — os 12 artigos do blog

Material de apoio da redação de 03/11/2026. **Nada aqui está publicado.**
Este arquivo existe para que o "aprovo" do dono (pedido 2 do plano de
novembro) vire um commit, sem decisão nova pelo caminho.

## O que já está pronto em cada peça

Os doze artigos estão em `marketing/pendente/*-artigo-*/`, cada um com
`peca.md` (texto e cabeçalho) e `artigo.html` (já no molde
`blog/_molde.html`). Conferido em 03/11:

- `artigo.html` gerado no molde, **sem nenhum campo `{{ }}` sobrando** nos 12.
- Tags balanceadas nos 12 (`<ul>`, `<li>`, `<a>`, `<article>`).
- `canonical` e `og:url` com o slug certo; `datePublished` preenchido.
- UTM de saída correta nos 12 (`utm_source=blog`).
- **Nenhum preço citado em nenhum dos 12** — a revisão de preço contra a
  página de planos (R$ 89 / R$ 414 / R$ 588; créditos de R$ 5, R$ 7 e
  R$ 10) não encontrou nada a corrigir, porque nenhum artigo cita valor.
- **Links entre artigos: acrescentados nesta semana** (ver abaixo). Antes
  desta rodada, os doze tinham **zero** link interno no corpo.

## A ordem de subida, e por que ela importa

Os 25 links novos foram escritos numa ordem só: **cada artigo só aponta
para um artigo do mesmo lote, de um lote anterior, ou para o
`recibo-de-psicoterapia-imposto-de-renda`, que já está no ar.** Nenhum
artigo aponta para frente.

A consequência prática: **subindo os lotes nesta ordem, nenhum link
interno dá 404 em momento nenhum** — nem se o dono parar no lote 2 e só
retomar em dezembro. Se os doze subirem no mesmo commit, a ordem não
importa e todos os 25 links funcionam de imediato.

Os quatro primeiros lotes são os **8 artigos da meta do mês** (seção 2 do
plano), dois por semana, e seguem os temas 1 a 4 da seção 4.

## Os três passos de cada subida

1. `cp marketing/pendente/<pasta>/artigo.html blog/<slug>.html`
2. Acrescentar o cartão do artigo em `blog/index.html`, dentro de
   `<div class="lista">`, **o mais novo em cima** (os cartões prontos
   estão no fim deste arquivo).
3. Mover a pasta de `pendente/` para `publicado/` e escrever a data e o
   link no cabeçalho do `peca.md`, como pede `marketing/README.md`.

**Antes do passo 1, decidir a data.** Os `artigo.html` carregam hoje a
data em que foram escritos (22/09 a 30/10) em três lugares: o
`datePublished` do JSON-LD, a linha `<p class="meta">` e o cartão do
índice. Um artigo que entra no ar em novembro anunciando 22 de setembro
nasce com três semanas de idade para o Google e para quem lê. **A
recomendação é trocar as três ocorrências pela data real da subida**; é
uma linha por arquivo, e o `data_iso` do `peca.md` serve de espelho. Se o
dono preferir manter a data de redação, é escolha dele — mas é escolha,
não automatismo.

## Os 25 links, por artigo

| Artigo | Aponta para |
|---|---|
| autorização para gravar | proteção da gravação |
| proteção da gravação | autorização para gravar |
| registro da sessão | guarda do prontuário · autorização para gravar |
| guarda do prontuário | registro da sessão · autorização para gravar |
| agenda do consultório | falta e cancelamento |
| falta e cancelamento | agenda do consultório · **recibo (no ar)** |
| financeiro do consultório | reajuste · falta e cancelamento · **recibo (no ar)** |
| reajuste do valor da sessão | financeiro do consultório · falta e cancelamento |
| combinado da primeira sessão | falta e cancelamento · reajuste · autorização · guarda |
| tarefas administrativas | financeiro · agenda · **recibo (no ar)** |
| meus cursos | tarefas administrativas · financeiro |
| atendimento online | registro da sessão · autorização para gravar |

Os links internos **não levam UTM** — de propósito. UTM em link de
`drsig.com.br` para `drsig.com.br` quebra a atribuição de origem, que é
justamente o que o plano quer começar a medir.

Três artigos ficam **sem link de entrada**: o combinado da primeira
sessão, meus cursos e atendimento online. É consequência direta da regra
de não apontar para frente, e os três são os últimos lotes. Quando os
doze estiverem no ar, vale acrescentar um link de entrada para cada um —
a partir de "falta e cancelamento" e "reajuste" para o combinado, e de
"tarefas administrativas" para meus cursos. **Fica anotado para a semana
em que isso acontecer**; não foi feito agora porque hoje seria 404.

## O que trava a subida de um artigo

**`2026-10-16-artigo-atendimento-online` não deve subir ainda.** O
`imagens.md` da peça pede, desde 13/10, reconferir a **Resolução CFP
nº 9/2024** em fonte oficial antes de ir ao ar — e pede de novo se o
artigo ficar meses parado, que é o caso. A reconferência **foi tentada
nesta rodada e não foi possível**: `atosnormativos.cfp.org.br` não
resolve a partir deste ambiente e `atosoficiais.com.br/cfp` (a base de
resoluções para onde o próprio site do CFP aponta) devolve HTTP 403. O
artigo é o único dos doze cujo argumento inteiro depende de uma norma
estar vigente; os outros onze não têm essa dependência. Ou o dono abre a
resolução e confirma, ou o ambiente libera um dos dois domínios.

Os outros onze não têm trava conhecida.

## Os cartões do índice, prontos para colar

Cada bloco vai dentro de `<div class="lista">` em `blog/index.html`, o
mais novo em cima. Se a data for trocada na subida, trocar também no
`eyebrow` do cartão.

### L1 — Sigilo e gravação (tema 1 do plano)

**Preciso de autorização para gravar a sessão de psicoterapia?** — `2026-09-22-artigo-autorizacao-para-gravar`  
slug: `autorizacao-para-gravar-sessao-de-psicoterapia.html`

```html
    <a class="cartao" href="autorizacao-para-gravar-sessao-de-psicoterapia.html">
      <div class="eyebrow">Sigilo · setembro de 2026</div>
      <h2>Preciso de autorização para gravar a sessão de psicoterapia?</h2>
      <p>Gravar a sessão exige autorização do analisante. O que a autorização precisa dizer, quem assina, quando ela cai e o que fazer com a transcrição.</p>
    </a>
```

**Por que a gravação de áudio para sozinha no Android?** — `2026-10-22-artigo-protecao-da-gravacao`  
slug: `por-que-a-gravacao-de-audio-para-sozinha-no-android.html`

```html
    <a class="cartao" href="por-que-a-gravacao-de-audio-para-sozinha-no-android.html">
      <div class="eyebrow">Gravação e sigilo · outubro de 2026</div>
      <h2>Por que a gravação de áudio para sozinha no Android?</h2>
      <p>A gravação não para por acaso. São quatro ajustes do Android que derrubam o áudio no meio — e um que nenhum app resolve. Onde conferir cada um.</p>
    </a>
```

### L2 — Registro e guarda (tema 2)

**O que escrever no registro de uma sessão de psicoterapia** — `2026-10-15-artigo-registro-da-sessao`  
slug: `o-que-escrever-no-registro-da-sessao-de-psicoterapia.html`

```html
    <a class="cartao" href="o-que-escrever-no-registro-da-sessao-de-psicoterapia.html">
      <div class="eyebrow">Registro e prontuário · outubro de 2026</div>
      <h2>O que escrever no registro de uma sessão de psicoterapia</h2>
      <p>O registro não é diário nem laudo. O que ele precisa responder, o que é melhor não escrever, quanto escrever e como achar depois.</p>
    </a>
```

**Por quanto tempo guardar o prontuário psicológico?** — `2026-09-23-artigo-guarda-do-prontuario`  
slug: `por-quanto-tempo-guardar-prontuario-psicologico.html`

```html
    <a class="cartao" href="por-quanto-tempo-guardar-prontuario-psicologico.html">
      <div class="eyebrow">Registros · setembro de 2026</div>
      <h2>Por quanto tempo guardar o prontuário psicológico?</h2>
      <p>Cinco anos, contados do último atendimento. O que entra no prontuário, onde guardar, quando descartar e o que fazer se você parar de atender.</p>
    </a>
```

### L3 — Agenda, falta e cancelamento (tema 3)

**Como organizar a agenda de um consultório de psicologia** — `2026-09-26-artigo-agenda-do-consultorio`  
slug: `como-organizar-agenda-consultorio-psicologia.html`

```html
    <a class="cartao" href="como-organizar-agenda-consultorio-psicologia.html">
      <div class="eyebrow">Agenda · setembro de 2026</div>
      <h2>Como organizar a agenda de um consultório de psicologia</h2>
      <p>Horário fixo em vez de remarcação semanal, o que fazer com encaixe e falta, e por que cancelamento e falta não contam igual na cobrança.</p>
    </a>
```

**Posso cobrar a sessão em que o analisante faltou?** — `2026-10-28-artigo-falta-e-cancelamento`  
slug: `cobrar-sessao-falta-cancelamento-psicoterapia.html`

```html
    <a class="cartao" href="cobrar-sessao-falta-cancelamento-psicoterapia.html">
      <div class="eyebrow">Agenda e cobrança · outubro de 2026</div>
      <h2>Posso cobrar a sessão em que o analisante faltou?</h2>
      <p>Falta, cancelamento em cima da hora e reposição são três coisas diferentes. O que o Código de Ética exige, e o combinado que resolve antes.</p>
    </a>
```

### L4 — Dinheiro (tema 4)

**Como organizar o financeiro de um consultório de psicologia** — `2026-10-06-artigo-financeiro-do-consultorio`  
slug: `como-organizar-o-financeiro-do-consultorio-de-psicologia.html`

```html
    <a class="cartao" href="como-organizar-o-financeiro-do-consultorio-de-psicologia.html">
      <div class="eyebrow">Financeiro · outubro de 2026</div>
      <h2>Como organizar o financeiro de um consultório de psicologia</h2>
      <p>As quatro perguntas que o financeiro do consultório precisa responder, por que a planilha não dá conta delas e um fechamento de mês em meia hora.</p>
    </a>
```

**Como reajustar o valor da sessão de psicoterapia** — `2026-10-29-artigo-reajuste-do-valor-da-sessao`  
slug: `como-reajustar-o-valor-da-sessao-de-psicoterapia.html`

```html
    <a class="cartao" href="como-reajustar-o-valor-da-sessao-de-psicoterapia.html">
      <div class="eyebrow">Financeiro · outubro de 2026</div>
      <h2>Como reajustar o valor da sessão de psicoterapia</h2>
      <p>Quando avisar, o que dizer e a quem o reajuste não se aplica — e por que mexer no valor antes de fechar o mês muda a conta do mês passado.</p>
    </a>
```

### L5 — O combinado e a rotina (fora da meta de 8)

**O que combinar na primeira sessão (e deixar por escrito)** — `2026-10-30-artigo-combinado-da-primeira-sessao`  
slug: `o-que-combinar-na-primeira-sessao-de-psicoterapia.html`

```html
    <a class="cartao" href="o-que-combinar-na-primeira-sessao-de-psicoterapia.html">
      <div class="eyebrow">Rotina do consultório · outubro de 2026</div>
      <h2>O que combinar na primeira sessão (e deixar por escrito)</h2>
      <p>Frequência, valor, falta, sigilo, online e contato entre sessões: os seis combinados que evitam quase toda conversa difícil depois.</p>
    </a>
```

**Como organizar as tarefas administrativas do consultório de psicologia** — `2026-10-08-artigo-tarefas-administrativas`  
slug: `tarefas-administrativas-consultorio-de-psicologia.html`

```html
    <a class="cartao" href="tarefas-administrativas-consultorio-de-psicologia.html">
      <div class="eyebrow">Rotina do consultório · outubro de 2026</div>
      <h2>Como organizar as tarefas administrativas do consultório de psicologia</h2>
      <p>O que fica pendurado quando a sessão acaba, por que não cabe na agenda e como separar o que tem hora marcada do que não tem.</p>
    </a>
```

### L6 — Os dois avulsos (fora da meta de 8)

**Como organizar a sua formação continuada: cursos, carga horária e custo** — `2026-10-21-artigo-meus-cursos`  
slug: `como-organizar-formacao-continuada-cursos-carga-horaria-custo.html`

```html
    <a class="cartao" href="como-organizar-formacao-continuada-cursos-carga-horaria-custo.html">
      <div class="eyebrow">Formação continuada · outubro de 2026</div>
      <h2>Como organizar a sua formação continuada: cursos, carga horária e custo</h2>
      <p>Certificado, custo e a hora da aula — três pendências que um curso deixa. Onde cada uma mora e como a carga horária se calcula sozinha.</p>
    </a>
```

**Preciso de cadastro no e-Psi para atender online?** — `2026-10-16-artigo-atendimento-online`  
slug: `cadastro-e-psi-atendimento-psicologico-online.html`

```html
    <a class="cartao" href="cadastro-e-psi-atendimento-psicologico-online.html">
      <div class="eyebrow">Atendimento online · outubro de 2026</div>
      <h2>Preciso de cadastro no e-Psi para atender online?</h2>
      <p>A Resolução CFP 09/2024 revogou a norma que criava o e-Psi. O que o atendimento online exige hoje, e o que fazer com o registro da sessão.</p>
    </a>
```

