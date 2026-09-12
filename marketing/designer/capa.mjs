// Capa das redes (Facebook 1640×624; LinkedIn 1128×191 quando houver página),
// no kit da marca: fundo sálvia-funda, wordmark, rótulo e o Freud.
//
//   node marketing/designer/capa.mjs marketing/identidade
//
import { chromium } from 'playwright';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const FREUD = 'C:/Users/USER/Documents/meu-app/assets/icon.png';

const TAMANHOS = {
  'capa-facebook.png': [1640, 624],
  'capa-linkedin.png': [1128, 191],
};

function html(largura, altura, freudB64) {
  const compacta = altura < 300;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Lora:ital,wght@1,600&display=swap');
  * { margin:0; padding:0; box-sizing:border-box; }
  html, body { width:${largura}px; height:${altura}px; overflow:hidden; }
  body { background:#3A5C4F; font-family:Roboto,"Segoe UI",Arial,sans-serif; position:relative; }
  .texto { position:absolute; left:${compacta ? 56 : 120}px; top:50%; transform:translateY(-52%); color:#F7F5F0; }
  .marca { font-family:Lora,Georgia,serif; font-style:italic; font-weight:600; font-size:${compacta ? 84 : 200}px; letter-spacing:-${compacta ? 2 : 6}px; line-height:1; }
  .rotulo { font-size:${compacta ? 16 : 34}px; letter-spacing:${compacta ? 4 : 8}px; text-transform:uppercase; color:#A8CBBA; margin-top:${compacta ? 10 : 26}px; font-weight:500; }
  .frase { font-size:${compacta ? 0 : 30}px; color:#E4EFE9; margin-top:34px; display:${compacta ? 'none' : 'block'}; }
  .freud { position:absolute; right:${compacta ? 40 : 150}px; bottom:0; height:${compacta ? altura * 1.15 : altura * 0.98}px; }
  .onda { position:absolute; left:0; right:0; bottom:0; height:${compacta ? 40 : 110}px; }
  </style></head><body>
  <div class="texto"><div class="marca">Dr.Sig</div><div class="rotulo">O seu assistente clínico</div><div class="frase">O consultório e a escuta, no mesmo lugar.</div></div>
  <img class="freud" src="data:image/png;base64,${freudB64}" alt="">
  <svg class="onda" viewBox="0 0 1640 110" preserveAspectRatio="none"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#497363"/><stop offset="1" stop-color="#6B9E8A"/></linearGradient></defs><path d="M0 55 C 270 0, 550 110, 820 55 S 1370 0, 1640 55 V 110 H 0 Z" fill="url(#g)" opacity="0.45"/></svg>
  </body></html>`;
}

// O ícone do app tem fundo sálvia (#497363); a capa é sálvia-funda. Para o
// Freud não vir com um quadrado de outra cor, recortamos o fundo por cor.
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
  if (!destino) throw new Error('uso: node capa.mjs <pasta-destino>');
  await fs.mkdir(destino, { recursive: true });
  const freud = (await fs.readFile(FREUD)).toString('base64');
  const navegador = await chromium.launch();
  const pagina = await navegador.newPage({ viewport: { width: 1640, height: 624 } });
  try {
    await pagina.setContent('<html><body></body></html>');
    const freudLimpo = await freudSemFundo(pagina, freud);
    for (const [nome, [w, h]] of Object.entries(TAMANHOS)) {
      await pagina.setViewportSize({ width: w, height: h });
      await pagina.setContent(html(w, h, freudLimpo), { waitUntil: 'networkidle' });
      await pagina.evaluate(() => document.fonts.ready);
      await pagina.screenshot({ path: path.join(destino, nome), type: 'png' });
      console.log(nome, `${w}x${h}`);
    }
    await fs.copyFile(FREUD, path.join(destino, 'perfil-1024.png'));
  } finally {
    await navegador.close();
  }
}

main().catch((e) => { console.error(e.message); process.exit(1); });
