// Story do Instagram (1080×1920) no kit da marca: o cartão de convite do
// Dr.Sig, com nome, rótulo, o Freud, o que o app faz e os canais oficiais.
// Áreas seguras do story: nada importante nos 250 px do topo nem nos 250 px
// do rodapé (a interface do Instagram cobre).
//
//   node marketing/designer/story.mjs marketing/identidade/story-convite.png
//
import { chromium } from 'playwright';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const FREUD = 'C:/Users/USER/Documents/meu-app/assets/icon.png';
const W = 1080, H = 1920;

const COR = {
  papel: '#F7F5F0', alto: '#FDFCFA', linha: '#EAE5DC', veu: '#E4EFE9',
  salvia: '#497363', funda: '#3A5C4F', base: '#6B9E8A', suave: '#A8CBBA',
  t900: '#302C28', t700: '#4E4941', t500: '#756E66',
};

function html(freudB64) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Lora:ital,wght@1,600&display=swap');
  * { margin:0; padding:0; box-sizing:border-box; }
  html, body { width:${W}px; height:${H}px; overflow:hidden; }
  body { background:${COR.papel}; font-family:Roboto,"Segoe UI",Arial,sans-serif; color:${COR.t700}; position:relative; -webkit-font-smoothing:antialiased; }

  /* Cabeçalho: sálvia funda com a onda fechando embaixo. */
  .topo { position:absolute; left:0; top:0; width:${W}px; height:720px; background:${COR.funda}; }
  .topo .marca { position:absolute; left:80px; top:270px; font-family:Lora,Georgia,serif; font-style:italic; font-weight:600; font-size:172px; letter-spacing:-6px; line-height:1; color:${COR.papel}; }
  .topo .rotulo { position:absolute; left:84px; top:458px; font-size:27px; letter-spacing:6px; text-transform:uppercase; color:${COR.suave}; font-weight:500; }
  .topo .freud { position:absolute; right:-50px; bottom:-8px; height:470px; }
  .onda { position:absolute; left:0; top:660px; width:${W}px; height:120px; }

  .miolo { position:absolute; left:80px; right:80px; top:785px; display:flex; flex-direction:column; }
  h1 { font-size:60px; line-height:1.1; font-weight:700; letter-spacing:-1.8px; color:${COR.t900}; text-wrap:balance; }
  .texto { margin-top:22px; font-size:30px; line-height:1.4; color:${COR.t700}; max-width:900px; }
  .texto strong { color:${COR.t900}; }

  /* A moldura tripla do kit, no cartão dos canais. */
  .moldura { margin-top:32px; border:1px solid ${COR.suave}; border-radius:21px; padding:5px; }
  .moldura > div { border:3px solid ${COR.salvia}; border-radius:18px; padding:5px; }
  .moldura > div > div { border:1px solid ${COR.suave}; border-radius:13px; background:${COR.alto}; padding:32px 44px 24px; }
  .cartao-titulo { font-size:24px; letter-spacing:4px; text-transform:uppercase; color:${COR.t500}; font-weight:500; margin-bottom:14px; }
  .canal { display:flex; align-items:baseline; gap:22px; padding:12px 0; border-top:1px solid ${COR.linha}; }
  .canal:first-of-type { border-top:0; }
  .canal .k { width:190px; flex:none; font-size:22px; letter-spacing:3px; text-transform:uppercase; color:${COR.salvia}; font-weight:700; }
  .canal .v { font-size:34px; color:${COR.t900}; font-weight:500; letter-spacing:-0.3px; }
  .canal .v small { display:block; font-size:24px; color:${COR.t500}; font-weight:400; margin-top:4px; letter-spacing:0; }

  .rodape { margin-top:30px; }
  .frase { font-family:Lora,Georgia,serif; font-style:italic; font-size:34px; color:${COR.funda}; }
  .demo { margin-top:10px; font-size:24px; color:${COR.t500}; line-height:1.4; }
  </style></head><body>
  <div class="topo">
    <div class="marca">Dr.Sig</div>
    <div class="rotulo">O seu assistente clínico</div>
    <img class="freud" src="data:image/png;base64,${freudB64}" alt="">
  </div>
  <svg class="onda" viewBox="0 0 1080 120" preserveAspectRatio="none"><path d="M0 0 H1080 V40 C 900 110, 720 0, 540 60 S 180 120, 0 50 Z" fill="${COR.funda}"/><path d="M0 50 C 180 120, 360 0, 540 60 S 900 110, 1080 40 V 70 C 900 130, 720 20, 540 85 S 180 140, 0 80 Z" fill="${COR.base}" opacity="0.35"/></svg>

  <div class="miolo">
    <h1>Seu consultório inteiro no bolso.</h1>
    <div class="texto">Agenda, fichas, registro das sessões, cobrança e recibos, num lugar só. Feito para quem atende em psicoterapia, <strong>com o sigilo garantido pelo próprio banco de dados</strong>.</div>

    <div class="moldura"><div><div>
      <div class="cartao-titulo">Onde encontrar</div>
      <div class="canal"><div class="k">Site</div><div class="v">drsig.com.br</div></div>
      <div class="canal"><div class="k">App</div><div class="v">Google Play: Dr.Sig<small>Em breve também na Apple Store</small></div></div>
      <div class="canal"><div class="k">Instagram</div><div class="v">@oseusig</div></div>
      <div class="canal"><div class="k">Facebook</div><div class="v">Página Dr. Sig</div></div>
      <div class="canal"><div class="k">E-mail</div><div class="v">drsig@drsig.com.br</div></div>
    </div></div></div>
  <div class="rodape">
    <div class="frase">O consultório e a escuta, no mesmo lugar.</div>
    <div class="demo">Conheça sem criar conta: "Conhecer o app" na tela de entrada abre o consultório do Freud.</div>
  </div>
  </div>

  </body></html>`;
}

async function freudSemFundo(pagina, b64) {
  return await pagina.evaluate(async (src) => {
    const img = new Image();
    img.src = 'data:image/png;base64,' + src;
    await img.decode();
    const c = document.createElement('canvas');
    c.width = img.width; c.height = img.height;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const d = ctx.getImageData(0, 0, c.width, c.height);
    const p = d.data;
    for (let i = 0; i < p.length; i += 4) {
      const dr = p[i] - 0x49, dg = p[i + 1] - 0x73, db = p[i + 2] - 0x63;
      if (dr * dr + dg * dg + db * db < 900) p[i + 3] = 0;
    }
    ctx.putImageData(d, 0, 0);
    return c.toDataURL('image/png').split(',')[1];
  }, b64);
}

async function main() {
  const destino = process.argv[2];
  if (!destino) throw new Error('uso: node story.mjs <arquivo.png>');
  await fs.mkdir(path.dirname(destino), { recursive: true });
  const freud = (await fs.readFile(FREUD)).toString('base64');
  const navegador = await chromium.launch();
  const pagina = await navegador.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  try {
    await pagina.setContent('<html><body></body></html>');
    const freudLimpo = await freudSemFundo(pagina, freud);
    await pagina.setContent(html(freudLimpo), { waitUntil: 'networkidle' });
    await pagina.evaluate(() => document.fonts.ready);
    await pagina.screenshot({ path: destino, type: 'png' });
    console.log(destino, `${W}x${H}`);
  } finally {
    await navegador.close();
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
