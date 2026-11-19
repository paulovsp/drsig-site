# Pedido ao Designer — artigo "Por que a gravação de áudio para sozinha no Android?"

**Sem arte.** Como nos outros artigos: o molde do blog não usa imagem, e
não há quadro a renderizar nesta pasta.

Quando o artigo for aprovado: `artigo.html` vai para
`blog/por-que-a-gravacao-de-audio-para-sozinha-no-android.html` e um cartão
novo entra no topo da lista em `blog/index.html`:

```html
<a class="cartao" href="por-que-a-gravacao-de-audio-para-sozinha-no-android.html">
  <div class="eyebrow">Gravação e sigilo · outubro de 2026</div>
  <h2>Por que a gravação de áudio para sozinha no Android?</h2>
  <p>A gravação não para por acaso. São quatro ajustes do Android que derrubam o áudio no meio — e um que nenhum app resolve. Onde conferir cada um.</p>
</a>
```

O corpo **não tem link interno para outro artigo**, pela razão das semanas
anteriores: nove artigos escritos seguem em `pendente/` e só um está no ar.
Se eles subirem juntos, há um link que vale, e é o mais importante da fila:

- "autorização do analisante, pedida por e-mail" → `autorizacao-para-gravar-sessao-de-psicoterapia.html`
  (slug da peça `pendente/2026-09-22-artigo-autorizacao-para-gravar` — conferir
  no cabeçalho do `peca.md` dela antes de inserir)

## Nenhuma captura nova

Este artigo não pede captura. **A captura que ele usaria não deve ser
pedida:** a tela de Proteção da gravação só é interessante quando mostra
pendências, e pendência real é estado do aparelho de alguém — na conta de
demonstração ela aparece vazia ("Tudo liberado"), que é justamente o
contrário do que o artigo descreve. Se um dia virar carrossel, o caminho é
quadro de **lista** com as quatro pendências em tipografia, não captura.

## Uma nota para quem publicar

O artigo descreve comportamento do **Android**, e o título diz "no Android"
de propósito — não mudar isso na revisão.

O `app.json` do app tem configuração iOS (bundle `br.com.drsig.app`), mas a
distribuição hoje é só Google Play, então não há leitora de iPhone chegando
com o app instalado. Se um dia sair na App Store, este artigo não se aplica
àquela plataforma: `protecaoGravacao.js` devolve lista vazia fora do Android
(`if (Platform.OS !== 'android') return []`), e a tela de Proteção da
gravação diria "Tudo liberado" num iPhone sem ter conferido nada.
