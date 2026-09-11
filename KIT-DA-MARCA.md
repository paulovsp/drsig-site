# Kit da marca Dr.Sig

O que qualquer pessoa — ou agente — precisa para produzir uma peça que
pareça do Dr.Sig. A fonte de verdade das cores e da tipografia é
`src/theme/index.js` no repositório do app; este arquivo é a tradução para
quem não lê código.

## A ideia

**"Papel e água."** Um chão morno, de papel, em tudo; a cor da marca — um
verde sálvia — entrando lavada, como aquarela: véu para superfícies, tinta
para o que precisa ser lido. Separação por luz (sombra larga e quente),
nunca por contorno preto. Nada de cinza frio, nada de preto puro.

O nome é sempre **Dr.Sig**, em itálico, com o ponto — nunca "Dr Sig",
"DrSig" ou "Dr. Sig" em texto corrido. O rótulo que acompanha é
**O SEU ASSISTENTE CLÍNICO**, em caixa alta espaçada. A frase de fecho é
*"O consultório e a escuta, no mesmo lugar."*

## Cores

| Papel | | Sálvia | | Tinta | |
|---|---|---|---|---|---|
| base (fundo de tudo) | `#F7F5F0` | tinta (botão, ação) | `#497363` | 900 (títulos) | `#302C28` |
| alto (cartão) | `#FDFCFA` | funda (logotipo, título) | `#3A5C4F` | 700 (corpo) | `#4E4941` |
| linha | `#EAE5DC` | base (onda, decoração) | `#6B9E8A` | 500 (legenda) | `#756E66` |
| véu (pressionado) | `#F1EDE5` | suave (filete) | `#A8CBBA` | 400 (desabilitado) | `#8C857B` |
| | | véu (fundo ativo) | `#E4EFE9` | | |

Semânticas (véu para fundo, tinta para texto): sucesso `#44745B`/`#E2EFE8`,
atenção `#7D6540`/`#F2E9DC`, erro `#975451`/`#F1E4E3`, informação
`#4D6B88`/`#E3EAF1`.

Sombra: `0 6px 18px rgba(78,73,65,0.07)` — a própria tinta diluída, nunca
preto.

## Tipografia

Sistema (San Francisco / Roboto / Segoe), sem fonte externa. Papéis:

- **Marca**: 34–44 px, itálico, peso 600, espaçamento −0,7, cor sálvia funda.
- **Título**: 24 px, peso 600, espaçamento −0,5.
- **Corpo**: 15 px, entrelinha 23, tinta 700. Linhas de até ~65 caracteres.
- **Rótulo**: 11 px, caixa alta, espaçamento 1,5, tinta 500.

## Formas

- Raios: 8 / 12 / 16 / 20 px. Botão 12, cartão 16–20.
- **A moldura tripla** (a invenção formal do app): linha fina sálvia-suave
  (1 px, raio 21) → linha grossa sálvia-tinta (3 px, raio 18) → linha fina
  (1 px, raio 13). Usar no cartão principal de uma peça, nunca em tudo.
- **A onda**: o degradê sálvia `#497363 → #6B9E8A` com a borda ondulada,
  fechando o cabeçalho (o SVG está em qualquer página de `docs/`).

## O Freud

A caricatura do Freud com o charuto (`assets/freud.png`,
`docs/img/convite-hero.png`) é o único personagem. Aparece na splash, na
demonstração e em peças de apresentação. Não se coloca o Freud em peça
sobre dinheiro, cobrança ou erro.

## Voz

- Simples, direta, sem jargão de marketing. Frases curtas.
- Fala com a psicoterapeuta (feminino como padrão, como o app), de igual
  para igual. Nunca "usuário", nunca "cliente" — **analisante**, nunca
  "paciente", quando se fala do atendimento.
- Diz o que faz e o que não faz. **Nunca promete resultado clínico**, nunca
  sugere diagnóstico, nunca se coloca no lugar da supervisão.
- Toda peça que menciona gravação ou dado de analisante diz como o sigilo
  é garantido (autorização por e-mail; isolamento no banco).
- Números só quando verdadeiros e conferíveis (preços da página de
  planos; nada de "milhares de usuárias").

## O que não fazer

Azul-marinho, âmbar ou qualquer paleta antiga; emoji como marcador de
seção; "Mais escolhido" e prova social inventada; capturas do app com
dados de gente real (só a demonstração do Freud).
