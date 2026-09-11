// O Designer do Dr.Sig: transforma `quadros.json` de uma peça nas artes em PNG.
//
//   node marketing/designer/render.mjs marketing/pendente/2026-09-15-recibo-em-um-toque
//
// Lê `<pasta>/quadros.json`, escreve `<pasta>/quadro-01.png` … e imprime um
// resumo em JSON (quantos quadros, quais capturas faltaram). Cada quadro é
// uma página HTML montada aqui, no kit da marca (KIT-DA-MARCA.md), aberta num
// Chromium do Playwright a 1080×1350 e fotografada. Não há edição manual:
// para mudar uma arte, muda-se o JSON e renderiza de novo.
//
// Tipos de quadro (campo `tipo`):
//   capa        rótulo + título grande + ilustração em traço (opcional)
//   tipografia  uma frase só, enorme, em sálvia
//   lista       título + itens com marcador sálvia
//   destaque    título + um campo de formulário em evidência (filete de atenção) + texto
//   cartoes     título + três cartões lado a lado (`cartoes: [{titulo, texto}]`)
//   icone       ilustração em traço + frase
//   captura     imagem de `marketing/capturas/<captura>.png` na moldura tripla + frase
//   fecho       fundo sálvia-funda, wordmark grande, frase de encerramento
//
// Campos comuns: `rotulo` (caixa alta, pequeno), `titulo`, `texto`, `ilustracao`
// (papeis | cadeado | campo | toque | calendario | envelope), `captura`.

import { chromium } from 'playwright';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const CAPTURAS = path.resolve(AQUI, '..', 'capturas');

const COR = {
  papel: '#F7F5F0', alto: '#FDFCFA', linha: '#EAE5DC', veu: '#F1EDE5',
  salvia: '#497363', funda: '#3A5C4F', base: '#6B9E8A', suave: '#A8CBBA', salviaVeu: '#E4EFE9',
  tinta900: '#302C28', tinta700: '#4E4941', tinta500: '#756E66', tinta400: '#8C857B',
  atencao: '#7D6540', atencaoVeu: '#F2E9DC',
};

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// **negrito** dentro dos textos vira <strong>.
const rico = (s = '') => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Lora:ital,wght@1,600&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 1080px; height: 1350px; overflow: hidden; }
  body {
    font-family: Roboto, "Segoe UI", -apple-system, Arial, sans-serif;
    background: ${COR.papel}; color: ${COR.tinta900};
    -webkit-font-smoothing: antialiased;
  }
  .quadro { position: relative; width: 1080px; height: 1350px; padding: 96px 88px 150px; display: flex; flex-direction: column; }
  .quadro.tipo-fecho { background: ${COR.funda}; color: ${COR.papel}; }
  .rotulo { font-size: 26px; letter-spacing: 4px; text-transform: uppercase; color: ${COR.tinta500}; font-weight: 500; margin-bottom: 36px; }
  .tipo-fecho .rotulo { color: ${COR.suave}; }
  h1 { font-size: 72px; line-height: 1.12; font-weight: 700; letter-spacing: -1.5px; text-wrap: balance; }
  h1.enorme { font-size: 96px; line-height: 1.08; letter-spacing: -2.5px; color: ${COR.funda}; }
  .texto { font-size: 38px; line-height: 1.42; color: ${COR.tinta700}; margin-top: 40px; max-width: 880px; }
  .texto strong { color: ${COR.tinta900}; font-weight: 700; }
  .tipo-fecho .texto { color: ${COR.salviaVeu}; }
  .miolo { flex: 1; display: flex; flex-direction: column; justify-content: center; }
  .rodape { position: absolute; left: 88px; right: 88px; bottom: 72px; display: flex; align-items: baseline; justify-content: space-between; }
  .contador { font-size: 24px; letter-spacing: 3px; color: ${COR.tinta400}; font-weight: 500; }
  .tipo-fecho .contador { color: ${COR.suave}; }
  .marca { font-family: Lora, Georgia, serif; font-style: italic; font-weight: 600; font-size: 44px; letter-spacing: -0.7px; color: ${COR.funda}; }
  .tipo-fecho .marca { color: ${COR.papel}; }
  .ilustracao { width: 360px; height: 360px; margin-bottom: 56px; }
  .ilustracao svg { width: 100%; height: 100%; }
  .icone .ilustracao { width: 300px; height: 300px; margin: 0 auto 64px; }
  .icone h1 { text-align: center; font-size: 64px; }
  .icone .texto { text-align: center; margin-left: auto; margin-right: auto; }
  ul { list-style: none; margin-top: 48px; display: flex; flex-direction: column; gap: 30px; }
  li { position: relative; padding-left: 64px; font-size: 40px; line-height: 1.32; color: ${COR.tinta700}; }
  li strong { color: ${COR.tinta900}; }
  li::before { content: ''; position: absolute; left: 6px; top: 18px; width: 22px; height: 22px; border-radius: 50%; background: ${COR.salvia}; }
  .campo { margin-top: 56px; background: ${COR.alto}; border: 2px solid ${COR.linha}; border-left: 14px solid ${COR.atencao}; border-radius: 16px; padding: 40px 44px; box-shadow: 0 6px 18px rgba(78,73,65,0.07); }
  .campo .etiqueta { font-size: 24px; letter-spacing: 3px; text-transform: uppercase; color: ${COR.atencao}; font-weight: 700; margin-bottom: 18px; }
  .campo .caixa { height: 84px; border: 2px dashed ${COR.suave}; border-radius: 12px; background: ${COR.papel}; display: flex; align-items: center; padding: 0 28px; font-size: 34px; color: ${COR.tinta400}; }
  .cartoes { margin-top: 56px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .cartao { background: ${COR.alto}; border: 1px solid ${COR.linha}; border-radius: 20px; padding: 40px 30px; min-height: 340px; box-shadow: 0 6px 18px rgba(78,73,65,0.07); display: flex; flex-direction: column; gap: 18px; }
  .cartao h2 { font-size: 40px; font-weight: 700; letter-spacing: -0.5px; color: ${COR.funda}; }
  .cartao p { font-size: 28px; line-height: 1.38; color: ${COR.tinta700}; }
  .cartao.principal { background: ${COR.salviaVeu}; border-color: ${COR.suave}; }
  .moldura { border: 1px solid ${COR.suave}; border-radius: 21px; padding: 4px; }
  .moldura > div { border: 3px solid ${COR.salvia}; border-radius: 18px; padding: 4px; }
  .moldura > div > div { border: 1px solid ${COR.suave}; border-radius: 13px; overflow: hidden; background: ${COR.alto}; }
  .miolo.captura .moldura { align-self: center; }
  .captura-img { display: block; height: 720px; width: auto; max-width: 880px; object-fit: contain; }
  .captura-pendente { width: 420px; height: 720px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; color: ${COR.tinta400}; font-size: 26px; text-align: center; padding: 32px; }
  .captura-pendente small { font-size: 20px; }
  .miolo.captura .texto { margin-top: 32px; }
  .tipo-fecho .marca-grande { font-family: Lora, Georgia, serif; font-style: italic; font-weight: 600; font-size: 168px; letter-spacing: -5px; color: ${COR.papel}; line-height: 1; }
  .tipo-fecho .tagline { font-size: 30px; letter-spacing: 6px; text-transform: uppercase; color: ${COR.suave}; margin-top: 28px; font-weight: 500; }
  .tipo-fecho .texto { margin-top: 72px; font-size: 42px; }
  .onda { position: absolute; left: 0; right: 0; bottom: 0; height: 120px; }
`;

// Ilustrações em traço fino, sálvia. Todas no mesmo viewBox para trocarem de lugar.
const ILUSTRACOES = {
  papeis: `<svg viewBox="0 0 200 200" fill="none" stroke="${COR.salvia}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="52" y="70" width="104" height="120" rx="8" fill="${COR.alto}"/><rect x="42" y="55" width="104" height="120" rx="8" fill="${COR.alto}"/><rect x="32" y="40" width="104" height="120" rx="8" fill="${COR.alto}"/>
    <path d="M52 72h64M52 92h64M52 112h40" stroke="${COR.suave}"/><path d="M118 122l8 8 16-18" stroke="${COR.salvia}" stroke-width="4"/></svg>`,
  cadeado: `<svg viewBox="0 0 200 200" fill="none" stroke="${COR.salvia}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="46" y="88" width="108" height="86" rx="14" fill="${COR.alto}"/><path d="M68 88V66a32 32 0 0 1 64 0v22"/><circle cx="100" cy="126" r="9" fill="${COR.salvia}" stroke="none"/><path d="M100 135v16"/></svg>`,
  campo: `<svg viewBox="0 0 200 200" fill="none" stroke="${COR.salvia}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="24" y="60" width="152" height="52" rx="10" fill="${COR.alto}"/><path d="M40 52h44" stroke="${COR.atencao}" stroke-width="4"/><path d="M40 86h14" stroke="${COR.atencao}" stroke-width="4"/>
    <rect x="24" y="130" width="152" height="40" rx="10" fill="${COR.veu}" stroke="${COR.suave}"/></svg>`,
  toque: `<svg viewBox="0 0 200 200" fill="none" stroke="${COR.salvia}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="52" y="22" width="96" height="156" rx="16" fill="${COR.alto}"/><path d="M84 40h32" stroke="${COR.suave}"/>
    <circle cx="100" cy="104" r="26" stroke="${COR.suave}"/><circle cx="100" cy="104" r="12" fill="${COR.salvia}" stroke="none"/><path d="M150 96l18-8M150 112l18 8M142 82l10-16" stroke="${COR.base}"/></svg>`,
  calendario: `<svg viewBox="0 0 200 200" fill="none" stroke="${COR.salvia}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="30" y="44" width="140" height="130" rx="14" fill="${COR.alto}"/><path d="M30 80h140"/><path d="M64 30v28M136 30v28"/>
    <circle cx="70" cy="110" r="6" fill="${COR.suave}" stroke="none"/><circle cx="100" cy="110" r="6" fill="${COR.suave}" stroke="none"/><circle cx="130" cy="110" r="6" fill="${COR.salvia}" stroke="none"/><circle cx="70" cy="142" r="6" fill="${COR.suave}" stroke="none"/><circle cx="100" cy="142" r="6" fill="${COR.suave}" stroke="none"/></svg>`,
  envelope: `<svg viewBox="0 0 200 200" fill="none" stroke="${COR.salvia}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="28" y="56" width="144" height="98" rx="12" fill="${COR.alto}"/><path d="M28 68l72 52 72-52"/><path d="M28 148l52-44M172 148l-52-44" stroke="${COR.suave}"/></svg>`,
};

const ONDA = `<svg class="onda" viewBox="0 0 1080 120" preserveAspectRatio="none"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="${COR.salvia}"/><stop offset="1" stop-color="${COR.base}"/></linearGradient></defs><path d="M0 60 C 180 0, 360 120, 540 60 S 900 0, 1080 60 V 120 H 0 Z" fill="url(#g)" opacity="0.35"/></svg>`;

function rodape(i, n) {
  return `<div class="rodape"><div class="contador">${String(i).padStart(2, '0')} / ${String(n).padStart(2, '0')}</div><div class="marca">Dr.Sig</div></div>`;
}

async function capturaHtml(nome, textoFalta) {
  if (nome) {
    const arquivo = path.join(CAPTURAS, `${nome}.png`);
    try {
      const b64 = (await fs.readFile(arquivo)).toString('base64');
      return { html: `<img class="captura-img" src="data:image/png;base64,${b64}" alt="">`, faltou: null };
    } catch { /* cai no aviso */ }
  }
  return {
    html: `<div class="captura-pendente"><div style="font-size:64px;color:${COR.suave}">▢</div><div>${esc(textoFalta || 'Captura pendente')}<br><small>${esc(nome ? `marketing/capturas/${nome}.png` : 'sem captura indicada')}</small></div></div>`,
    faltou: nome || '(sem nome)',
  };
}

async function montar(q, i, n) {
  const rot = q.rotulo ? `<div class="rotulo">${esc(q.rotulo)}</div>` : '';
  const ilu = q.ilustracao && ILUSTRACOES[q.ilustracao] ? `<div class="ilustracao">${ILUSTRACOES[q.ilustracao]}</div>` : '';
  const texto = q.texto ? `<p class="texto">${rico(q.texto)}</p>` : '';
  let corpo = '';
  let faltou = null;

  switch (q.tipo) {
    case 'capa':
      corpo = `${rot}<div class="miolo">${ilu}<h1>${rico(q.titulo)}</h1>${texto}</div>`;
      break;
    case 'tipografia':
      corpo = `${rot}<div class="miolo"><h1 class="enorme">${rico(q.titulo)}</h1>${texto}</div>`;
      break;
    case 'lista':
      corpo = `${rot}<div class="miolo"><h1>${rico(q.titulo)}</h1><ul>${(q.itens || []).map((t) => `<li>${rico(t)}</li>`).join('')}</ul>${texto}</div>`;
      break;
    case 'destaque':
      corpo = `${rot}<div class="miolo"><h1>${rico(q.titulo)}</h1><div class="campo"><div class="etiqueta">${esc(q.etiqueta || 'Campo')}</div><div class="caixa">${esc(q.valor || '')}</div></div>${texto}</div>`;
      break;
    case 'cartoes':
      corpo = `${rot}<div class="miolo"><h1>${rico(q.titulo)}</h1><div class="cartoes">${(q.cartoes || []).map((c) => `<div class="cartao${c.principal ? ' principal' : ''}"><h2>${rico(c.titulo)}</h2><p>${rico(c.texto || '')}</p></div>`).join('')}</div>${texto}</div>`;
      break;
    case 'icone':
      corpo = `${rot}<div class="miolo icone">${ilu}<h1>${rico(q.titulo)}</h1>${texto}</div>`;
      break;
    case 'captura': {
      const c = await capturaHtml(q.captura, q.captura_texto);
      faltou = c.faltou;
      corpo = `${rot}<div class="miolo captura"><div class="moldura"><div><div>${c.html}</div></div></div>${q.titulo ? `<h1 style="margin-top:44px;font-size:56px">${rico(q.titulo)}</h1>` : ''}${texto}</div>`;
      break;
    }
    case 'fecho':
      corpo = `${rot}<div class="miolo"><div class="marca-grande">Dr.Sig</div><div class="tagline">O seu assistente clínico</div>${texto}</div>${ONDA}`;
      break;
    default:
      throw new Error(`quadro ${i}: tipo desconhecido "${q.tipo}"`);
  }

  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><style>${CSS}</style></head><body><div class="quadro tipo-${q.tipo}">${corpo}${rodape(i, n)}</div></body></html>`;
  return { html, faltou };
}

async function main() {
  const pasta = process.argv[2];
  if (!pasta) throw new Error('uso: node render.mjs <pasta-da-peca>');
  const spec = JSON.parse(await fs.readFile(path.join(pasta, 'quadros.json'), 'utf8'));
  const quadros = spec.quadros || [];
  if (!quadros.length) throw new Error('quadros.json sem quadros');

  const navegador = await chromium.launch();
  const pagina = await navegador.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  const resumo = { pasta, quadros: 0, arquivos: [], capturasPendentes: [] };
  try {
    for (let i = 0; i < quadros.length; i++) {
      const { html, faltou } = await montar(quadros[i], i + 1, quadros.length);
      await pagina.setContent(html, { waitUntil: 'networkidle' });
      await pagina.evaluate(() => document.fonts.ready);
      const arquivo = path.join(pasta, `quadro-${String(i + 1).padStart(2, '0')}.png`);
      await pagina.screenshot({ path: arquivo, type: 'png' });
      resumo.quadros++;
      resumo.arquivos.push(arquivo);
      if (faltou) resumo.capturasPendentes.push({ quadro: i + 1, captura: faltou });
    }
  } finally {
    await navegador.close();
  }
  console.log(JSON.stringify(resumo, null, 2));
}

main().catch((e) => { console.error(e.message); process.exit(1); });
