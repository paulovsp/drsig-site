# Pedido ao Designer — artigo "Como organizar a sua formação continuada"

**Sem arte.** Como nos outros artigos: o molde do blog não usa imagem, e
não há quadro a renderizar nesta pasta.

Quando o artigo for aprovado: `artigo.html` vai para
`blog/como-organizar-formacao-continuada-cursos-carga-horaria-custo.html` e
um cartão novo entra no topo da lista em `blog/index.html`:

```html
<a class="cartao" href="como-organizar-formacao-continuada-cursos-carga-horaria-custo.html">
  <div class="eyebrow">Formação continuada · outubro de 2026</div>
  <h2>Como organizar a sua formação continuada: cursos, carga horária e custo</h2>
  <p>Certificado, custo e a hora da aula — três pendências que um curso deixa. Onde cada uma mora e como a carga horária se calcula sozinha.</p>
</a>
```

O corpo **não tem link interno para outro artigo**, pela mesma razão das
semanas anteriores: oito artigos escritos seguem em `pendente/` e só um está
no ar. Se eles subirem juntos, há dois links que valem:

- "despesa do consultório … preço de sessão" → `financeiro-do-consultorio-de-psicoterapia.html`
- "ocupa o mesmo espaço físico na semana" → `agenda-de-consultorio-de-psicoterapia.html`

(Os dois nomes de arquivo são os slugs das peças `pendente/2026-10-06-artigo-financeiro-do-consultorio`
e `pendente/2026-09-26-artigo-agenda-do-consultorio` — conferir o slug no
cabeçalho de cada `peca.md` antes de inserir o link.)

## Nenhuma captura nova

Este artigo não pede captura. Se um dia a lista de peças deste tema virar
carrossel, as capturas úteis seriam **Meus cursos com dois ou três cursos no
currículo** e **Saídas com a categoria Cursos**, as duas na conta de
demonstração do Freud — nenhuma das duas existe hoje em `marketing/capturas/`,
e nenhuma é necessária para publicar o artigo.
