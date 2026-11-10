# Passagem para o ar — os 12 artigos do blog

Material de apoio da redação de 03/11/2026. **Nada aqui está publicado.**
Este arquivo existe para que o "aprovo" do dono (pedido 2 do plano de
novembro) vire um commit, sem decisão nova pelo caminho.

> **Atualizado em 10/11/2026** (redação da semana 9). Mudaram duas coisas
> desde 03/11: apareceu um bloqueio novo, que vale para os doze e vem
> antes de tudo (passo 0, logo abaixo), e caiu a trava do artigo de
> atendimento online (seção "O que trava a subida de um artigo").

## Passo 0 — o HTTPS de `drsig.com.br` está expirado. Nada sobe antes disso

**Nenhum artigo deve subir enquanto `https://drsig.com.br` estiver com o
certificado vencido.** Conferido por handshake TLS em 10/11/2026:
certificado Let's Encrypt, `CN = drsig.com.br`, com `drsig.com.br` e
`www.drsig.com.br` no SAN, **válido de 03/08/2026 a 01/11/2026 17:52
GMT** — expirado há nove dias. Toda visita em `https://` recebe
"certificate has expired" e o navegador recusa a página antes de mostrar
qualquer coisa. Em `http://` o site responde 200 e o conteúdo está
íntegro (`http://drsig.com.br/blog/` → 200), o que quer dizer que o
problema é só do certificado, não do site. `app.drsig.com.br` tem
certificado sadio (válido até 03/01/2027): é só o domínio do site.

Por que isso para a subida, e não é exagero:

- **Um artigo estreia uma vez.** Quem chegar da busca vê aviso de
  segurança, não o texto — e a primeira impressão de um domínio novo no
  blog se gasta aí.
- **A indexação é a razão de ser deste canal.** O Google rastreia por
  `https://` (é o que está no `canonical` e no `og:url` dos doze) e
  encontra um certificado inválido. Subir oito artigos nessa condição é
  pedir rastreamento de uma página que não abre.
- **Atinge todo link com UTM de toda peça do repositório**, não só os
  artigos: os links das 36 peças da fila são todos
  `https://drsig.com.br/...`.

**O que o dono precisa fazer** (é dele, não nosso): abrir o repositório
`drsig-site` no GitHub → **Settings → Pages** e reemitir o certificado do
domínio — o caminho usual é conferir que o domínio em "Custom domain"
continua verificado e, se estiver, remover e recolocar o domínio para o
GitHub Pages pedir um certificado novo ao Let's Encrypt, deixando
"Enforce HTTPS" marcado depois que o certificado sair. Costuma levar
alguns minutos. **Critério para liberar o passo 1: abrir
`https://drsig.com.br/blog/` no navegador e ver a página sem aviso.**

Enquanto isso não acontecer, o material deste arquivo continua pronto e
parado — não há nada a refazer nas peças por causa disto.

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

**Reconferido em 10/11/2026**, por leitura dos doze: nenhum campo `{{ }}`
sobrando, o bloco "Leia também" presente nos doze, os **25** destinos de
link existindo (22 apontam para um dos doze slugs e 3 para o artigo do
recibo, que já está no ar) e nenhum `R$` em nenhum `artigo.html`
nem `peca.md`. Nada divergiu do que foi conferido em 03/11.

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

E, desde 10/11, há um passo antes e um depois: o **passo 0** (o HTTPS,
no alto deste arquivo) e o **passo 4** (indexação, abaixo).

## Passo 4 — indexação (`robots.txt` e `sitemap.xml`)

Acrescentado em 10/11/2026, porque a seção 3 do plano manda "conferir
indexação" e a conferência encontrou o seguinte: **o site não tem
`sitemap.xml` nem `robots.txt`**. Os dois dão 404 em produção e não
existem no repositório. A homepage tem a `meta` de
`google-site-verification`, então o Search Console está configurado e o
dono consegue submeter o sitemap.

**Este passo só faz sentido depois do passo 0.** O Google busca o
`sitemap.xml` por `https://` e todas as URLs de dentro dele são
`https://`: com o certificado expirado, submeter o sitemap é entregar ao
rastreador uma lista de páginas que ele não consegue abrir — pior que não
ter sitemap.

### `robots.txt` — na raiz do repositório, conteúdo inteiro

```
User-agent: *
Allow: /

Sitemap: https://drsig.com.br/sitemap.xml
```

### `sitemap.xml` — na raiz, com **só o que estiver no ar**

A regra: o sitemap lista a raiz, o índice do blog, o artigo do recibo (o
único no ar hoje) e **os artigos do lote que acabou de subir** — nada
mais. Página que não existe no sitemap é página que o rastreador vai
buscar e não encontra, e isso custa confiança no arquivo inteiro.

Base, que vale em qualquer subida (trocar `AAAA-MM-DD` pela data real da
subida, a mesma do passo da data):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://drsig.com.br/</loc>
    <lastmod>AAAA-MM-DD</lastmod>
  </url>
  <url>
    <loc>https://drsig.com.br/blog/</loc>
    <lastmod>AAAA-MM-DD</lastmod>
  </url>
  <url>
    <loc>https://drsig.com.br/blog/recibo-de-psicoterapia-imposto-de-renda.html</loc>
  </url>
</urlset>
```

Para cada artigo que subir, acrescentar **antes** de `</urlset>` o bloco
dele desta lista, na ordem dos lotes:

```xml
  <!-- L1 -->
  <url><loc>https://drsig.com.br/blog/autorizacao-para-gravar-sessao-de-psicoterapia.html</loc><lastmod>AAAA-MM-DD</lastmod></url>
  <url><loc>https://drsig.com.br/blog/por-que-a-gravacao-de-audio-para-sozinha-no-android.html</loc><lastmod>AAAA-MM-DD</lastmod></url>
  <!-- L2 -->
  <url><loc>https://drsig.com.br/blog/o-que-escrever-no-registro-da-sessao-de-psicoterapia.html</loc><lastmod>AAAA-MM-DD</lastmod></url>
  <url><loc>https://drsig.com.br/blog/por-quanto-tempo-guardar-prontuario-psicologico.html</loc><lastmod>AAAA-MM-DD</lastmod></url>
  <!-- L3 -->
  <url><loc>https://drsig.com.br/blog/como-organizar-agenda-consultorio-psicologia.html</loc><lastmod>AAAA-MM-DD</lastmod></url>
  <url><loc>https://drsig.com.br/blog/cobrar-sessao-falta-cancelamento-psicoterapia.html</loc><lastmod>AAAA-MM-DD</lastmod></url>
  <!-- L4 -->
  <url><loc>https://drsig.com.br/blog/como-organizar-o-financeiro-do-consultorio-de-psicologia.html</loc><lastmod>AAAA-MM-DD</lastmod></url>
  <url><loc>https://drsig.com.br/blog/como-reajustar-o-valor-da-sessao-de-psicoterapia.html</loc><lastmod>AAAA-MM-DD</lastmod></url>
  <!-- L5 -->
  <url><loc>https://drsig.com.br/blog/o-que-combinar-na-primeira-sessao-de-psicoterapia.html</loc><lastmod>AAAA-MM-DD</lastmod></url>
  <url><loc>https://drsig.com.br/blog/tarefas-administrativas-consultorio-de-psicologia.html</loc><lastmod>AAAA-MM-DD</lastmod></url>
  <!-- L6 -->
  <url><loc>https://drsig.com.br/blog/como-organizar-formacao-continuada-cursos-carga-horaria-custo.html</loc><lastmod>AAAA-MM-DD</lastmod></url>
  <url><loc>https://drsig.com.br/blog/cadastro-e-psi-atendimento-psicologico-online.html</loc><lastmod>AAAA-MM-DD</lastmod></url>
```

Se os doze subirem no mesmo commit, é a base mais os doze blocos, de uma
vez. As URLs batem com o `canonical` e o `og:url` de cada `artigo.html` —
conferido slug por slug em 10/11.

### E depois, no Search Console

Submeter `https://drsig.com.br/sitemap.xml` em **Sitemaps**, e usar
"Inspeção de URL" em um artigo do lote para ver se a página é alcançável.
Isso é do dono, leva dois minutos, e é a única maneira de saber se a meta
do mês (artigos no ar) virou artigo **indexado**. Duas conferências que
valem registrar na primeira vez: se a raiz e o `blog/` aparecem como
válidos, e se o `canonical` que o Google lê é o `https://` do próprio
artigo.

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

**Já não há trava de conteúdo em nenhum dos doze. A desta seção venceu em
10/11/2026.**

Desde 13/10 o `imagens.md` de `2026-10-16-artigo-atendimento-online`
pedia reconferir a **Resolução CFP nº 9/2024** em fonte oficial antes de
o artigo ir ao ar, porque o argumento inteiro do texto depende de aquela
norma estar vigente e ter revogado a 11/2018, a que criava o e-Psi. A
reconferência foi tentada sem sucesso em 03/11 e **foi feita em
10/11/2026**. As duas afirmações se sustentam, em dois domínios oficiais:

- `transparencia.cfp.org.br/crp12/pergunta-frequente/atendimentopsicologicoonline/`
  — orientação do próprio CFP, escrita em 12/05/2025: *"No dia 31/08/24
  entrou em vigor a Resolução CFP nº 09/2024"*, que revoga as resoluções
  anteriores de atendimento on-line (o link de revogação cita a Resolução
  CFP nº 11, de 11/05/2018, e a Resolução CFP nº 04, de 26/03/2020) e
  *"não é mais necessário realizar o cadastro na plataforma e-psi"*.
- `crp24.org.br/atendimento-on-line/` — Conselho Regional: o atendimento
  online *"é regulamentado pela"* Resolução CFP nº 09/2024, que
  *"descontinuou o Cadastro e-Psi"*, previsto pela Resolução CFP
  nº 11/2018.

**O que não foi possível**, e fica dito: o texto integral da norma em
fonte primária. `atosnormativos.cfp.org.br` não resolve,
`atosoficiais.com.br/cfp` devolve 403, `site.cfp.org.br/legislacao`
devolve 500 e `in.gov.br` não resolve. A confirmação é de duas fontes de
domínio oficial, não da própria resolução. Com isso, a vigência e o fim
do e-Psi estão conferidos; as citações artigo por artigo no corpo (2º,
5º, 6º e 7º) seguem valendo pela leitura de 16/10.

Uma afirmação do corpo **não se sustentava** e foi ajustada em 10/11: o
artigo dizia que a 09/2024 foi publicada em 30/07/2024 e entrou em vigor
"trinta dias depois"; a fonte do CFP afirma 31/08/2024 e não confirma a
data de publicação. O texto passou a dizer só o que a fonte diz. O
cabeçalho de `peca.md` registra a reconferência na chave `reconferencia`,
no mesmo padrão da revisão do artigo da guarda do prontuário, e a chave
`fontes` traz as duas URLs.

**Portanto: os doze podem subir** — nenhum deles tem trava de conteúdo.
O que impede a subida hoje é o passo 0 deste arquivo, que é de
infraestrutura e não de texto.

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

