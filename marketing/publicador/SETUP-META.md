# Ligar a publicação automática no Instagram e no Facebook

**Situação: ligado em 12/09/2026.** App da Meta "zap" (o mesmo do WhatsApp)
com os casos de uso "API do Instagram" e "Gerenciar Páginas"; Página do
Facebook "Dr. Sig" (administrada pela conta "DrSig Assistente Clinico") com
a @oseusig ligada; token de Página sem expiração guardado no Supabase.
`verificar_meta` devolve a Página e o @oseusig. O que segue é o registro de
como foi feito, para refazer se o token cair.

O Publicador publica pela Graph API da Meta. Para isso a Dr.Sig precisa,
uma vez só, de três coisas que só o dono pode criar. Depois disso o agente
publica sozinho o que foi aprovado.

## O que precisa existir

1. **Instagram @oseusig como conta profissional** (Empresa ou Criador de
   conteúdo), ligada à **Página do Facebook do Dr.Sig**. No app do
   Instagram: Configurações → Conta → Mudar para conta profissional; depois
   Configurações → Central de contas → adicionar a Página.
2. **Um app na Meta for Developers** (https://developers.facebook.com/apps),
   tipo "Empresa" (Business), com os produtos *Instagram Graph API* e
   *Login do Facebook para empresas*. O app fica em modo de desenvolvimento:
   isso basta para publicar nas contas que o próprio dono administra, sem
   revisão da Meta.
3. **Um token de Página de longa duração.** No Explorador da Graph API
   (https://developers.facebook.com/tools/explorer): escolher o app, pedir as
   permissões `pages_show_list`, `pages_read_engagement`,
   `pages_manage_posts`, `instagram_basic`, `instagram_content_publish`,
   `business_management`; gerar o token de usuária; trocar por longa
   duração; e pedir `GET /me/accounts` — a resposta traz o `id` da Página e
   o `access_token` **de Página**, que não expira.

## O que o dono me passa

Cole na conversa com o Claude, e eu guardo como segredos do Supabase
(`META_PAGE_TOKEN`, `META_PAGE_ID`, `META_IG_USER_ID`):

- o `access_token` de Página, vindo de `/me/accounts`;
- o `id` da Página;
- o id do Instagram: `GET /<id-da-página>?fields=instagram_business_account`.

Em seguida eu rodo `verificar_meta` pela `op-agente` e, se voltar o nome da
Página e o @oseusig, a publicação está ligada.

## LinkedIn

Publicar como Página do LinkedIn exige a *Community Management API*, que a
LinkedIn libera por pedido, depois de a Página existir. Até lá, a peça de
LinkedIn do dia chega ao dono por e-mail, pronta para colar.

## Limites que valem lembrar

- Instagram: até 25 publicações por dia pela API; imagens 4:5 a 1.91:1 (as
  nossas são 4:5); carrossel de 2 a 10 imagens; Reels exigem vídeo MP4.
- As imagens precisam estar numa URL pública — as artes vivem em
  `https://drsig.com.br/marketing/…`, que é o próprio repositório do site.
- O token de Página não expira, mas morre se a senha do Facebook mudar ou
  se o dono sair da Página. `verificar_meta` avisa; aí é gerar outro.
