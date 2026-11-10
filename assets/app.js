/* ==========================================================================
   HUMO LATINO — app.js
   SPA ligera con enrutamiento por hash. Sin dependencias externas.
   ========================================================================== */

const WHATSAPP_NUMBER = "573136517482"; // 313 651 7482
const INSTAGRAM_URL = "https://www.instagram.com/humo_latino/";
const IG_HANDLE = "@humo_latino";
const ADDRESS = "Centro Comercial La Cascada, Local 307";

/* ---------- Helpers ---------- */
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

function cop(n){
  return "$" + Number(n).toLocaleString("es-CO") + " COP";
}

function waLink(message){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function waProductLink(p){
  const prodUrl = `${location.origin}${location.pathname}#/producto/${p.cod}`;
  return waLink(`Hola, estoy interesado en el producto ${p.modelo} (${p.marca}) de Humo Latino:\n${prodUrl}\n\nQuisiera conocer disponibilidad y realizar una consulta.`);
}

function slugify(s){
  return s.toString().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}

function findProduct(cod){
  return PRODUCTS.find(p => String(p.cod) === String(cod));
}

/* ---------- Fotos reales verificadas (COD -> URL del distribuidor oficial) ---------- */
const PRODUCT_IMAGES = {
  "7963": "https://superaudio.com.co/wp-content/uploads/2024/11/LASER-LUZ-PL5000-RGB-PRODJ-LIGHTING-2.webp",
  "8777": "https://superaudio.com.co/wp-content/uploads/2025/11/PL1000RGB-PRODJ-LIGHTING-LASER-1.webp",
  "8778": "https://superaudio.com.co/wp-content/uploads/2025/11/PL500-RGB-PRODJLIGHTING-LASER-PNG1.png",
  "6090": "https://superaudio.com.co/wp-content/uploads/2024/10/PL27RGB-PRODJLIGHTING-LASER-1-1.jpg",
  "8172": "https://audiocustom.com.co/wp-content/uploads/2026/03/LB150-01.jpg",
  "7146": "https://superaudio.com.co/wp-content/uploads/2022/05/LM70S-BIGDIPPER-CABEZAMOVIL-PNG1.png",
  "8136": "https://superaudio.com.co/wp-content/uploads/2025/02/PS460-3.webp",
  "8234": "https://superaudio.com.co/wp-content/uploads/2024/11/CABEZA-MOVIL-PL425-LASER-PRODJ-LIGHTING-8.webp",
  "7300": "https://superaudio.com.co/wp-content/uploads/2024/10/LP009N-BIGDIPPER-PARLED-1-1.jpg",
  "798": "https://superaudio.com.co/wp-content/uploads/2024/10/LP005-BIGDIPPER-PARLED-1-1.jpg",
  "8177": "https://superaudio.com.co/wp-content/uploads/2024/11/LPC010-BIGDIPPER-PARLED-1.webp",
  "1226": "https://superaudio.com.co/wp-content/uploads/2024/11/PAR-LED-LUZ-LPC007-BIGDIPPER-3.webp",
  "1225": "https://superaudio.com.co/wp-content/uploads/2024/10/LPC006-BIGDIPPER-PAR-LED-PNG1.png",
  "5656": "https://superaudio.com.co/wp-content/uploads/2024/10/5656-1.png",
  "7985": "https://superaudio.com.co/wp-content/uploads/2024/11/PAR-LED-LUZ-PL006-PRODJ-LIGHTING-1.webp",
  "7145": "https://superaudio.com.co/wp-content/uploads/2024/10/LM30A-BIG-DIPPER-CABEZA-MOVIL-PNG1.png",
  "8236": "https://superaudio.com.co/wp-content/uploads/2024/11/BLINDER-LUZ-PL2200-BLINDER-PRODJ-LIGHTING-1.webp",
  "8237": "https://superaudio.com.co/wp-content/uploads/2024/11/BLINDER-LUZ-PL4400-BLINDER-PRODJ-LIGHTING-3.webp",
  "5621": "https://superaudio.com.co/wp-content/uploads/2024/10/LC001H-BARNDOOR-BIGDIPPER-BARNDOOR-1.webp",
  "5317": "https://superaudio.com.co/wp-content/uploads/2024/10/PL243WASHER-PRODJLIGHTING-BARRALED-1-1.jpg",
  "7691": "https://ccmtiendadelsonido.com/wp-content/uploads/2026/05/IMG_1954.jpg",
  "5319": "https://superaudio.com.co/wp-content/uploads/2024/10/maquina-de-humo-con-6-leds-3w-rgb-3-en-1-prodj-f900up-led.png",
  "8974": "https://superaudio.com.co/wp-content/uploads/2025/12/FOG900LED-MAQUINADEHUMO-PRODJ-1.webp",
  "4439": "https://superaudio.com.co/wp-content/uploads/2024/10/F900-PRODJ-MAQUINADEHUMO-1-1.jpg",
  "4182": "https://ccmtiendadelsonido.com/wp-content/uploads/2026/05/10633-1.jpg",
  "8971": "https://superaudio.com.co/wp-content/uploads/2025/12/FOG900-CAMARA-DE-HUMO-PRODJ-1.png",
  "4183": "https://superaudio.com.co/wp-content/uploads/2024/10/F-BUBBLE-PRODJLIGHTING-MAQUINABURBUJA-1-1.jpg",
  "7332": "https://superaudio.com.co/wp-content/uploads/2024/10/PL621UV-PRODJLIGHTING-BARRALED-1-1.jpg",
  "8496": "https://superaudio.com.co/wp-content/uploads/2025/02/PL25A-WP-20.webp",
  "8497": "https://superaudio.com.co/wp-content/uploads/2025/02/PAR46-WP-6.webp",
  "7991": "https://superaudio.com.co/wp-content/uploads/2026/02/PAR-LED-LUZ-PL1810-PRODJ-LIGHTING-4.webp",
  "8067": "https://centrodelsonido.net/wp-content/uploads/2026/02/l002b-1-1.webp",
  "10641": "https://superaudio.com.co/wp-content/uploads/2026/06/LF105-PANELLEDRGB-BIGDIPPER-9.webp",
  "8833": "https://superaudio.com.co/wp-content/uploads/2026/02/L1015-BIGDIPPER-BARRAMOVIL-4.webp",
  "10576": "https://superaudio.com.co/wp-content/uploads/2026/02/PL415PARTY-PRODJ-LIGHTING-CABEZAMOVIL-1.webp",
  "7334": "https://superaudio.com.co/wp-content/uploads/2024/10/PL49PARTY-PRODJLIGHTING-LUZTODOENUNO-1-1.jpg"
};

/* ---------- Category icons (esquemas propios, no fotografías) ---------- */
const ICONS = {
  laser: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="24" width="30" height="16" rx="3"/><circle cx="17" cy="32" r="3"/><path d="M40 26 L56 10 M40 32 L58 32 M40 38 L56 54"/></svg>`,
  "cabezas-moviles": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14 h10 a8 8 0 0 1 8 8 v4 h-18 z"/><rect x="18" y="26" width="22" height="16" rx="4"/><path d="M29 42 v6 M22 52 h14"/><path d="M40 30 L52 24 M40 38 L54 42"/></svg>`,
  "pares-led": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="16" width="36" height="30" rx="4"/><circle cx="24" cy="31" r="4.5"/><circle cx="40" cy="31" r="4.5"/><path d="M24 46 v6 M40 46 v6 M14 52 h36"/></svg>`,
  efectos: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="28" r="12"/><path d="M20 28 h-6 M50 28 h-6 M32 16 v-6 M32 40 v-6 M23 19 l-4-4 M41 19 l4-4"/><path d="M18 50 h28" stroke-dasharray="2 4"/></svg>`,
  blinder: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="12" y="18" width="40" height="26" rx="3"/><path d="M20 18 v26 M28 18 v26 M36 18 v26 M44 18 v26"/><path d="M12 50 h40"/></svg>`,
  "barras-led-paneles": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="28" width="48" height="8" rx="3"/><circle cx="16" cy="32" r="1.6" fill="currentColor" stroke="none"/><circle cx="24" cy="32" r="1.6" fill="currentColor" stroke="none"/><circle cx="32" cy="32" r="1.6" fill="currentColor" stroke="none"/><circle cx="40" cy="32" r="1.6" fill="currentColor" stroke="none"/><circle cx="48" cy="32" r="1.6" fill="currentColor" stroke="none"/><path d="M12 22 v-6 M52 22 v-6 M12 48 v6 M52 48 v6"/></svg>`,
  "maquinas-de-humo-y-burbujas": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="30" width="30" height="16" rx="3"/><path d="M44 34 h6 v8 h-6 z"/><path d="M20 30 v-6 h12 v6"/><path d="M10 14 c3 3 -3 5 0 8 M18 10 c3 3 -3 5 0 8 M26 14 c3 3 -3 5 0 8" stroke-opacity=".55"/></svg>`,
};
function categoryIcon(slug){ return ICONS[slug] || ICONS.efectos; }

const IG_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>`;
const WA_ICON = `<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16.02 3C9.4 3 4 8.38 4 15.02c0 2.36.66 4.56 1.8 6.44L4 29l7.73-1.75a11.9 11.9 0 0 0 4.29.8c6.62 0 12.02-5.38 12.02-12.02C28.04 8.38 22.66 3 16.02 3zm0 21.7c-1.9 0-3.68-.5-5.22-1.4l-.37-.22-4.6 1.04 1.06-4.5-.24-.38a9.6 9.6 0 0 1-1.5-5.22c0-5.34 4.35-9.68 9.7-9.68 5.34 0 9.68 4.34 9.68 9.68 0 5.35-4.34 9.68-9.51 9.68zm5.32-7.26c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.5.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.02c.15.2 2.07 3.17 5.02 4.44.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.11.56-.08 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.34z"/></svg>`;
const PIN_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6.4-7-11.5A7 7 0 0 1 19 9.5C19 14.6 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/></svg>`;
const SEARCH_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21 l-4.3-4.3"/></svg>`;
const ARROW_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14 M13 6l6 6-6 6"/></svg>`;

function escapeAttr(s){
  return String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ---------- Rendering: shared bits ---------- */
function productMedia(p, sizeClass){
  const img = PRODUCT_IMAGES[String(p.cod)];
  const icon = categoryIcon(p.categoria_slug);
  const fallback = `<div class="media-fallback" style="${img ? 'display:none;' : 'display:flex;'}width:100%;height:100%;align-items:center;justify-content:center;">${icon}</div>`;
  if(img){
    return `<img src="${img}" alt="${escapeAttr(p.modelo)} ${escapeAttr(p.marca)}" loading="lazy" style="width:100%;height:100%;object-fit:contain;padding:${sizeClass==='pd'?'28px':'14px'};" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';">${fallback}`;
  }
  return fallback;
}

function productCard(p){
  return `
  <a class="product-card" href="#/producto/${p.cod}" data-cod="${p.cod}">
    <div class="product-media">
      <span class="brand-tag">${p.marca}</span>
      ${productMedia(p, 'card')}
    </div>
    <div class="product-body">
      <span class="product-cat">${p.categoria_nombre}</span>
      <h4>${p.modelo}</h4>
      <span class="product-cod">Ref. ${p.cod}</span>
      <span class="product-price">${cop(p.precio)}</span>
      <div class="product-actions">
        <span class="btn btn-outline btn-sm btn-block">Ver producto</span>
      </div>
    </div>
  </a>`;
}

function renderGrid(container, list){
  if(!list.length){
    container.innerHTML = `<div class="empty-state">No encontramos productos con esos filtros.<br>Prueba con otra categoría, marca o término de búsqueda.</div>`;
    return;
  }
  container.innerHTML = list.map(productCard).join("");
}

/* ---------- Header active state / mobile menu ---------- */
function setActiveNav(hash){
  $$("nav.main-nav a").forEach(a=>{
    a.classList.toggle("active", a.getAttribute("href") === hash || (hash.startsWith("#/categoria") && a.dataset.nav==="catalogo") || (hash.startsWith("#/producto") && a.dataset.nav==="catalogo"));
  });
}

function initMobileMenu(){
  const btn = $(".menu-toggle");
  const menu = $(".mobile-menu");
  if(!btn || !menu) return;
  btn.addEventListener("click", ()=> menu.classList.add("open"));
  $(".mobile-menu-close").addEventListener("click", ()=> menu.classList.remove("open"));
  $$(".mobile-menu a").forEach(a => a.addEventListener("click", ()=> menu.classList.remove("open")));
}

/* ---------- Search (global, in header) ---------- */
function initHeaderSearch(){
  const input = $("#global-search");
  if(!input) return;
  input.addEventListener("keydown", (e)=>{
    if(e.key === "Enter" && input.value.trim()){
      location.hash = `#/catalogo?q=${encodeURIComponent(input.value.trim())}`;
    }
  });
}

/* ---------- Views ---------- */
const app = $("#app");


/* ---------- Hero: luces móviles + máquinas de humo (canvas) ---------- */
function initHeroFx(canvas){
  if(!canvas) return;
  const ctx = canvas.getContext("2d");
  const hero = canvas.parentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const COLORS = [[139,107,255],[255,145,66],[40,200,255],[255,60,170],[255,255,255]];
  const SPREAD = .045;
  let W=0,H=0,dpr=1,visible=true,last=performance.now(),t=0,small=false;

  // sprites de humo irregulares (nubes hechas de muchas manchas suaves)
  function makeSprite(){
    const c=document.createElement("canvas"); c.width=c.height=256;
    const g=c.getContext("2d");
    for(let i=0;i<46;i++){
      const an=Math.random()*Math.PI*2, rd=Math.sqrt(Math.random())*72;
      const x=128+Math.cos(an)*rd, y=128+Math.sin(an)*rd, r=22+Math.random()*44;
      const gr=g.createRadialGradient(x,y,0,x,y,r);
      gr.addColorStop(0,"rgba(205,210,225,.11)"); gr.addColorStop(1,"rgba(205,210,225,0)");
      g.fillStyle=gr; g.fillRect(x-r,y-r,r*2,r*2);
    }
    g.globalCompositeOperation="destination-in";
    const m=g.createRadialGradient(128,128,20,128,128,128);
    m.addColorStop(0,"rgba(0,0,0,1)"); m.addColorStop(1,"rgba(0,0,0,0)");
    g.fillStyle=m; g.fillRect(0,0,256,256);
    return c;
  }
  const SPRITES = [makeSprite(),makeSprite(),makeSprite(),makeSprite()];
  const tintCache = {};
  function tinted(i,c){
    const key=i+"-"+(c[0]>>5)+"-"+(c[1]>>5)+"-"+(c[2]>>5);
    if(tintCache[key]) return tintCache[key];
    const o=document.createElement("canvas"); o.width=o.height=256;
    const g=o.getContext("2d"); g.drawImage(SPRITES[i],0,0);
    g.globalCompositeOperation="source-in"; g.fillStyle=`rgb(${c[0]},${c[1]},${c[2]})`; g.fillRect(0,0,256,256);
    return (tintCache[key]=o);
  }

  let heads=[], machines=[], puffs=[], fogAcc=0;
  function resize(){
    dpr = Math.min(window.devicePixelRatio||1, 2);
    W = hero.clientWidth; H = hero.clientHeight; small = W < 700;
    canvas.width = W*dpr; canvas.height = H*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const n = small ? 3 : 5;
    heads = Array.from({length:n},(_,i)=>({
      x:(i+.5)/n*W, phase:i*1.7+Math.random(), speed:.35+Math.random()*.35,
      amp:.45+Math.random()*.3, base:(i-(n-1)/2)*.12, ci:i%COLORS.length, c:[255,255,255], ang:0
    }));
    machines = [{x:W*.07,dir:1,ph:0,acc:0},{x:W*.93,dir:-1,ph:2.4,acc:0}];
  }
  resize();
  window.addEventListener("resize", resize);

  function spawn(m,dt){
    // cada máquina dispara en ráfagas: sube y baja la intensidad
    const burst = Math.max(.12, Math.min(1, Math.sin(t*.55+m.ph)*1.6+.5));
    m.acc += dt*(small?26:46)*burst;
    while(m.acc>=1){
      m.acc--;
      const ang = (-.18 - Math.random()*.6);            // hacia arriba y al centro
      const sp = (260+Math.random()*260)*burst;
      puffs.push({x:m.x+m.dir*10,y:H-18,vx:Math.cos(ang)*sp*m.dir,vy:Math.sin(ang)*sp,
        r:30+Math.random()*30,grow:2.6+Math.random()*1.8,life:0,max:5+Math.random()*4,
        a:.10+Math.random()*.05,rot:Math.random()*6.28,spin:(Math.random()-.5)*.5,
        seed:Math.random()*100,sp:(Math.random()*4)|0});
    }
  }
  function spawnFog(dt){
    fogAcc += dt*(small?.6:1.1);
    while(fogAcc>=1){
      fogAcc--;
      puffs.push({x:Math.random()*W,y:H-Math.random()*40,vx:(Math.random()-.5)*26,vy:-2-Math.random()*5,
        r:130+Math.random()*110,grow:.6,life:0,max:11+Math.random()*6,a:.10,rot:Math.random()*6.28,
        spin:(Math.random()-.5)*.1,seed:Math.random()*100,sp:(Math.random()*4)|0,fog:1});
    }
  }

  function drawBeam(h){
    const ang = h.base + Math.sin(t*h.speed+h.phase)*h.amp + Math.sin(t*h.speed*2.3+h.phase)*.12;
    const f=((t*.15+h.ci)%COLORS.length), i0=Math.floor(f), a=COLORS[i0], b=COLORS[(i0+1)%COLORS.length], k=f%1;
    const c=[a[0]+(b[0]-a[0])*k|0, a[1]+(b[1]-a[1])*k|0, a[2]+(b[2]-a[2])*k|0];
    h.c=c; h.ang=ang;
    const L = H*1.25, x0=h.x, y0=14;
    const x1=x0+Math.sin(ang)*L, y1=y0+Math.cos(ang)*L;
    const px=Math.cos(ang), py=-Math.sin(ang), wEnd=L*SPREAD*2;
    const gr = ctx.createLinearGradient(x0,y0,x1,y1);
    gr.addColorStop(0,`rgba(${c},.55)`); gr.addColorStop(.5,`rgba(${c},.16)`); gr.addColorStop(1,`rgba(${c},0)`);
    ctx.fillStyle = gr;
    ctx.beginPath();
    ctx.moveTo(x0-px*3,y0-py*3); ctx.lineTo(x0+px*3,y0+py*3);
    ctx.lineTo(x1+px*wEnd,y1+py*wEnd); ctx.lineTo(x1-px*wEnd,y1-py*wEnd);
    ctx.closePath(); ctx.fill();
    const og = ctx.createRadialGradient(x0,y0,0,x0,y0,34);
    og.addColorStop(0,`rgba(${c},.9)`); og.addColorStop(1,`rgba(${c},0)`);
    ctx.fillStyle=og; ctx.fillRect(x0-34,y0-34,68,68);
  }
  function drawHeadBody(h){
    ctx.save(); ctx.translate(h.x,14); ctx.rotate(-h.ang);
    ctx.fillStyle="#1a1c21"; ctx.strokeStyle="#33363d"; ctx.lineWidth=1;
    ctx.beginPath(); ctx.roundRect(-9,-4,18,20,4); ctx.fill(); ctx.stroke();
    ctx.fillStyle=`rgb(${h.c})`; ctx.beginPath(); ctx.arc(0,16,5,0,Math.PI*2); ctx.fill();
    ctx.restore();
  }
  // cuánto ilumina un haz a una partícula de humo (0..1) y con qué color
  function lightAt(x,y){
    let best=0, col=null;
    for(const h of heads){
      if(!h.c) continue;
      const dx=Math.sin(h.ang), dy=Math.cos(h.ang), vx=x-h.x, vy=y-14;
      const along=vx*dx+vy*dy; if(along<20) continue;
      const perp=Math.abs(vx*dy-vy*dx), half=along*SPREAD*2+6;
      const v=(1-perp/(half*1.5)); if(v<=0) continue;
      const lit=v*Math.max(0,1-along/(H*1.25));
      if(lit>best){best=lit;col=h.c;}
    }
    return {lit:best,col};
  }

  function frame(now){
    if(!canvas.isConnected){ window.removeEventListener("resize",resize); return; }
    const dt = Math.max(0, Math.min((now-last)/1000,.05)); last=now;
    if(visible){
      t += dt;
      ctx.clearRect(0,0,W,H);
      ctx.fillStyle="rgba(255,255,255,.07)"; ctx.fillRect(0,6,W,3);
      ctx.globalCompositeOperation="lighter";
      heads.forEach(drawBeam);
      machines.forEach(m=>spawn(m,dt));
      spawnFog(dt);
      for(let i=puffs.length-1;i>=0;i--){
        const p=puffs[i]; p.life+=dt;
        if(p.life>p.max){ puffs.splice(i,1); continue; }
        // turbulencia + frenado + flotación
        p.vx += Math.sin(t*.8+p.y*.011+p.seed)*(p.fog?6:34)*dt;
        p.vy += Math.cos(t*.6+p.x*.009+p.seed)*(p.fog?2:14)*dt - (p.fog?0:22)*dt;
        const drag=1-(p.fog?.3:.85)*dt; p.vx*=drag; p.vy*=drag;
        p.x+=p.vx*dt; p.y+=p.vy*dt; p.rot+=p.spin*dt;
        const u=p.life/p.max, size=p.r*(1+p.grow*Math.sqrt(u));
        const alpha=p.a*Math.min(u/.07,1)*Math.pow(1-u,1.5);
        ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot);
        ctx.globalCompositeOperation="source-over"; ctx.globalAlpha=alpha; ctx.drawImage(SPRITES[p.sp],-size,-size,size*2,size*2);
        const L=lightAt(p.x,p.y);
        if(L.lit>.04){ ctx.globalCompositeOperation="lighter"; ctx.globalAlpha=Math.min(alpha*L.lit*3.5,.35); ctx.drawImage(tinted(p.sp,L.col),-size,-size,size*2,size*2); }
        ctx.restore();
      }
      ctx.globalAlpha=1;
      ctx.globalCompositeOperation="source-over";
      heads.forEach(drawHeadBody);
      machines.forEach(m=>{
        ctx.fillStyle="#15171b"; ctx.strokeStyle="#2f3238";
        ctx.beginPath(); ctx.roundRect(m.x-24,H-16,48,16,3); ctx.fill(); ctx.stroke();
      });
    }
    if(!reduced) requestAnimationFrame(frame);
  }
  if(reduced){ // un cuadro estático
    for(let k=0;k<120;k++){ machines.forEach(m=>spawn(m,.05)); spawnFog(.05); t+=.05; puffs.forEach(p=>{p.life+=.05;p.x+=p.vx*.05;p.y+=p.vy*.05;p.vx*=.95;p.vy*=.97;}); }
    frame(performance.now()+16);
  } else {
    new IntersectionObserver(e=>{visible=e[0].isIntersecting; last=performance.now();}).observe(hero);
    requestAnimationFrame(frame);
  }
}

function view_home(){
  const featuredCods = [7963, 8172, 10576, 8974, 8833, 8497];
  const featured = featuredCods.map(findProduct).filter(Boolean);
  const catEntries = Object.entries(CATEGORIES);
  const totalProducts = PRODUCTS.length;
  const totalBrands = Object.keys(BRANDS).length;

  app.innerHTML = `
  <section class="hero hero-stage">
    <canvas class="hero-fx" aria-hidden="true"></canvas>
    <div class="hero-vignette"></div>
    <div class="hero-center">
      <img class="hero-logo" src="assets/logo-hero.png" alt="Humo Latino">
      <div class="hero-ctas">
        <a href="#/catalogo" class="btn btn-primary">Ver catálogo${ARROW_ICON}</a>
        <a href="${waLink('Hola, quiero conocer más sobre los productos de Humo Latino.')}" target="_blank" rel="noopener" class="btn btn-whatsapp">${WA_ICON} Hablar por WhatsApp</a>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="why-grid">
        <div class="why-card"><span class="num">01</span><h3>Trayectoria</h3><p>Más de 15 años equipando eventos, escenarios y discotecas en Colombia.</p></div>
        <div class="why-card"><span class="num">02</span><h3>Soluciones profesionales</h3><p>Iluminación, humo y efectos para producciones de cualquier escala.</p></div>
        <div class="why-card"><span class="num">03</span><h3>Variedad</h3><p>Catálogo amplio y organizado por categoría y marca, siempre creciendo.</p></div>
        <div class="why-card"><span class="num">04</span><h3>Atención directa</h3><p>Contacto inmediato por WhatsApp con asesoría personalizada.</p></div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="container about-wrap">
      <div class="logo-big"><img src="assets/logo-humo-latino.png" alt="Humo Latino"></div>
      <div>
        <span class="eyebrow">Humo Latino</span>
        <h2 style="font-size:32px;margin:14px 0 16px;">Iluminación, humo y efectos con más de 15 años de experiencia</h2>
        <p>Humo Latino provee equipos profesionales de iluminación, máquinas de humo y efectos especiales para eventos, escenarios, discotecas y producciones de entretenimiento. Nuestro catálogo reúne cabezas móviles, láser, pares LED, barras, blinders y generadores de humo de marcas reconocidas en el mercano profesional.</p>
        <p>Cada producto en este catálogo cuenta con ficha técnica real, precio claro y contacto directo por WhatsApp para resolver tu compra sin vueltas.</p>
        <a href="#/catalogo" class="btn btn-outline" style="margin-top:6px;">Explorar catálogo completo${ARROW_ICON}</a>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="section-head">
        <div><span class="eyebrow">Catálogo</span><h2>¿Qué estás buscando?</h2></div>
        <p>Explora por categoría y llega directo a los equipos que necesitas.</p>
      </div>
      <div class="cat-grid">
        ${catEntries.map(([slug, c])=>{
          const count = PRODUCTS.filter(p=>p.categoria_slug===slug).length;
          return `<a class="cat-card" href="#/categoria/${slug}">
            <div class="cat-icon">${categoryIcon(slug)}</div>
            <div>
              <h3>${c.nombre}</h3>
              <p>${c.desc}</p>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="cat-count">${count} referencias</span>
              <span class="cat-link">Ver ${ARROW_ICON}</span>
            </div>
          </a>`;
        }).join("")}
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="section-head">
        <div><span class="eyebrow">Selección</span><h2>Productos destacados</h2></div>
        <a href="#/catalogo" class="btn btn-outline btn-sm">Ver todo el catálogo</a>
      </div>
      <div class="product-grid">${featured.map(productCard).join("")}</div>
    </div>
  </section>

  ${contactSectionHTML()}
  `;
  initHeroFx($(".hero-fx"));
}

function view_catalogo(params){
  const q = (params.get("q") || "").toLowerCase();
  const cat = params.get("categoria") || "";
  const marca = params.get("marca") || "";

  app.innerHTML = `
    <div class="section section-tight">
      <div class="container">
        <div class="breadcrumb"><a href="#/">Inicio</a> / Catálogo</div>
        <div class="section-head" style="margin-bottom:20px;">
          <div><span class="eyebrow">Catálogo completo</span><h2>Todos los productos</h2></div>
        </div>

        <div class="toolbar">
          <div class="search-box" style="display:flex;">
            ${SEARCH_ICON}
            <input id="catalog-search" type="text" placeholder="Buscar por nombre, marca o referencia..." value="${escapeAttr(q)}">
          </div>
          <select id="filter-categoria" class="select-field">
            <option value="">Todas las categorías</option>
            ${Object.entries(CATEGORIES).map(([slug,c])=>`<option value="${slug}" ${slug===cat?'selected':''}>${c.nombre}</option>`).join("")}
          </select>
          <select id="filter-marca" class="select-field">
            <option value="">Todas las marcas</option>
            ${Object.entries(BRANDS).map(([slug,name])=>`<option value="${slug}" ${slug===marca?'selected':''}>${name}</option>`).join("")}
          </select>
          <select id="filter-precio" class="select-field">
            <option value="">Cualquier precio</option>
            <option value="0-100000">Hasta $100.000</option>
            <option value="100000-300000">$100.000 – $300.000</option>
            <option value="300000-600000">$300.000 – $600.000</option>
            <option value="600000-999999999">Desde $600.000</option>
          </select>
          <span class="result-count" id="result-count"></span>
        </div>

        <div class="product-grid" id="catalog-grid"></div>
      </div>
    </div>
  `;

  const grid = $("#catalog-grid");
  const searchInput = $("#catalog-search");
  const catSelect = $("#filter-categoria");
  const marcaSelect = $("#filter-marca");
  const precioSelect = $("#filter-precio");
  const countEl = $("#result-count");

  function apply(){
    const term = searchInput.value.trim().toLowerCase();
    const c = catSelect.value;
    const m = marcaSelect.value;
    const pr = precioSelect.value;
    let list = PRODUCTS.filter(p=>{
      if(c && p.categoria_slug !== c) return false;
      if(m && p.marca_slug !== m) return false;
      if(pr){
        const [min,max] = pr.split("-").map(Number);
        if(p.precio < min || p.precio > max) return false;
      }
      if(term){
        const hay = `${p.modelo} ${p.marca} ${p.categoria_nombre} ${p.cod}`.toLowerCase();
        if(!hay.includes(term)) return false;
      }
      return true;
    });
    countEl.textContent = `${list.length} producto${list.length===1?'':'s'}`;
    renderGrid(grid, list);
  }

  searchInput.addEventListener("input", apply);
  catSelect.addEventListener("change", apply);
  marcaSelect.addEventListener("change", apply);
  precioSelect.addEventListener("change", apply);
  apply();
}

function view_categoria(slug){
  const c = CATEGORIES[slug];
  if(!c){ return view_404(); }
  const list = PRODUCTS.filter(p=>p.categoria_slug===slug);
  app.innerHTML = `
    <div class="section section-tight">
      <div class="container">
        <div class="breadcrumb"><a href="#/">Inicio</a> / <a href="#/catalogo">Catálogo</a> / ${c.nombre}</div>
        <div class="section-head">
          <div>
            <span class="eyebrow">Categoría</span>
            <h2>${c.nombre}</h2>
            <p>${c.desc}</p>
          </div>
          <a href="#/catalogo" class="btn btn-outline btn-sm">Ver catálogo completo</a>
        </div>
        <div class="product-grid">${list.map(productCard).join("")}</div>
      </div>
    </div>
  `;
}

function view_marca(slug){
  const name = BRANDS[slug];
  if(!name){ return view_404(); }
  const list = PRODUCTS.filter(p=>p.marca_slug===slug);
  app.innerHTML = `
    <div class="section section-tight">
      <div class="container">
        <div class="breadcrumb"><a href="#/">Inicio</a> / <a href="#/catalogo">Catálogo</a> / ${name}</div>
        <div class="section-head">
          <div>
            <span class="eyebrow">Marca</span>
            <h2>${name}</h2>
            <p>${list.length} referencias disponibles de ${name} en el catálogo de Humo Latino.</p>
          </div>
          <a href="#/catalogo" class="btn btn-outline btn-sm">Ver catálogo completo</a>
        </div>
        <div class="product-grid">${list.map(productCard).join("")}</div>
      </div>
    </div>
  `;
}

function view_producto(cod){
  const p = findProduct(cod);
  if(!p){ return view_404(); }
  const related = PRODUCTS.filter(x=>x.categoria_slug===p.categoria_slug && x.cod!==p.cod).slice(0,4);

  app.innerHTML = `
    <div class="section section-tight">
      <div class="container">
        <div class="breadcrumb"><a href="#/">Inicio</a> / <a href="#/catalogo">Catálogo</a> / <a href="#/categoria/${p.categoria_slug}">${p.categoria_nombre}</a> / ${p.modelo}</div>
        <div class="pd-wrap">
          <div class="pd-media">${productMedia(p, 'pd')}</div>
          <div class="pd-info">
            <span class="pd-brand">${p.marca}</span>
            <h1 class="pd-title">${p.modelo}</h1>
            <span class="pd-cod">Referencia ${p.cod} · ${p.categoria_nombre}</span>
            <div class="pd-price"><span>Precio público</span>${cop(p.precio)}</div>
            <div class="pd-cta">
              <a class="btn btn-whatsapp" target="_blank" rel="noopener" href="${waProductLink(p)}">${WA_ICON} Consultar por WhatsApp</a>
              <a class="btn btn-outline" href="#/categoria/${p.categoria_slug}">Ver más de ${p.categoria_nombre}</a>
            </div>

            <div class="pd-section">
              <h3>Especificaciones técnicas</h3>
              <div class="spec-list">
                ${p.features.map(f=>featureRow(f)).join("") || '<div class="spec-row"><span class="v">Especificaciones disponibles por consulta directa.</span></div>'}
              </div>
            </div>

            <div class="pd-section">
              <h3>Aplicaciones</h3>
              <div class="pd-applications">
                ${applicationTags(p.categoria_slug).map(t=>`<span class="tag">${t}</span>`).join("")}
              </div>
            </div>
          </div>
        </div>

        ${related.length ? `
        <div class="related-strip">
          <div class="section-head"><div><span class="eyebrow">También te puede interesar</span><h2 style="font-size:24px;">Más de ${p.categoria_nombre}</h2></div></div>
          <div class="product-grid">${related.map(productCard).join("")}</div>
        </div>` : ""}
      </div>
    </div>
  `;
}

function featureRow(f){
  const idx = f.indexOf(":");
  if(idx > -1 && idx < 28){
    const k = f.slice(0, idx).trim();
    const v = f.slice(idx+1).trim();
    if(k && v) return `<div class="spec-row"><span class="k">${k}</span><span class="v">${v}</span></div>`;
  }
  return `<div class="spec-row"><span class="v" style="text-align:left;">${f}</span></div>`;
}

function applicationTags(catSlug){
  const map = {
    laser: ["Discotecas","Conciertos","Festivales","Escenarios"],
    "cabezas-moviles": ["Escenarios","Producciones en vivo","Discotecas","Iglesias"],
    "pares-led": ["Bodas y eventos","Discotecas","Fachadas","Escenarios"],
    efectos: ["Fiestas","Discotecas","Eventos sociales"],
    blinder: ["Conciertos","Momentos climáticos","TV y video"],
    "barras-led-paneles": ["Fondos de escenario","Washes de color","Discotecas"],
    "maquinas-de-humo-y-burbujas": ["Conciertos","Discotecas","Fiestas infantiles","Producciones audiovisuales"],
  };
  return map[catSlug] || ["Eventos","Escenarios"];
}

function view_categorias(){
  const catEntries = Object.entries(CATEGORIES);
  app.innerHTML = `
    <div class="section section-tight">
      <div class="container">
        <div class="breadcrumb"><a href="#/">Inicio</a> / Categorías</div>
        <div class="section-head">
          <div><span class="eyebrow">Explora por categoría</span><h2>Todas las categorías</h2></div>
        </div>
        <div class="cat-grid">
          ${catEntries.map(([slug, c])=>{
            const count = PRODUCTS.filter(p=>p.categoria_slug===slug).length;
            return `<a class="cat-card" href="#/categoria/${slug}">
              <div class="cat-icon">${categoryIcon(slug)}</div>
              <div><h3>${c.nombre}</h3><p>${c.desc}</p></div>
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <span class="cat-count">${count} referencias</span>
                <span class="cat-link">Ver ${ARROW_ICON}</span>
              </div>
            </a>`;
          }).join("")}
        </div>
      </div>
    </div>
  `;
}

function view_marcas(){
  const brandEntries = Object.entries(BRANDS);
  app.innerHTML = `
    <div class="section section-tight">
      <div class="container">
        <div class="breadcrumb"><a href="#/">Inicio</a> / Marcas</div>
        <div class="section-head">
          <div><span class="eyebrow">Explora por marca</span><h2>Todas las marcas</h2></div>
        </div>
        <div class="cat-grid">
          ${brandEntries.map(([slug, name])=>{
            const count = PRODUCTS.filter(p=>p.marca_slug===slug).length;
            return `<a class="cat-card" href="#/marca/${slug}">
              <div class="cat-icon">${ICONS.efectos}</div>
              <div><h3>${name}</h3><p>Equipos profesionales de iluminación y efectos.</p></div>
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <span class="cat-count">${count} referencias</span>
                <span class="cat-link">Ver ${ARROW_ICON}</span>
              </div>
            </a>`;
          }).join("")}
        </div>
      </div>
    </div>
  `;
}

function view_nosotros(){
  app.innerHTML = `
  <div class="section">
    <div class="container about-wrap">
      <div class="logo-big"><img src="assets/logo-humo-latino.png" alt="Humo Latino"></div>
      <div>
        <span class="eyebrow">Nosotros</span>
        <h2 style="font-size:32px;margin:14px 0 16px;">Más de 15 años dando luz a los eventos</h2>
        <p>Humo Latino provee equipos profesionales de iluminación, máquinas de humo y efectos especiales para eventos, escenarios, discotecas y producciones de entretenimiento.</p>
        <p>Trabajamos con marcas especializadas del sector para ofrecer un catálogo amplio, organizado y en constante crecimiento, siempre con atención directa y personalizada por WhatsApp.</p>
        <a href="#/catalogo" class="btn btn-primary" style="margin-top:6px;">Ver catálogo${ARROW_ICON}</a>
      </div>
    </div>
  </div>
  <div class="section" style="padding-top:0">
    <div class="container">
      <div class="why-grid">
        <div class="why-card"><span class="num">01</span><h3>Trayectoria</h3><p>Más de 15 años en el mercado de iluminación y efectos para eventos.</p></div>
        <div class="why-card"><span class="num">02</span><h3>Soluciones profesionales</h3><p>Productos para iluminación, humo, efectos, eventos y escenarios.</p></div>
        <div class="why-card"><span class="num">03</span><h3>Variedad</h3><p>Catálogo organizado por categoría y marca.</p></div>
        <div class="why-card"><span class="num">04</span><h3>Atención personalizada</h3><p>Contacto directo mediante WhatsApp.</p></div>
      </div>
    </div>
  </div>
  ${contactSectionHTML()}
  `;
}

function view_contacto(){
  app.innerHTML = contactSectionHTML(true);
}

function view_404(){
  app.innerHTML = `
    <div class="section text-center">
      <div class="container">
        <span class="eyebrow">404</span>
        <h2 style="margin-top:14px;">No encontramos esa página</h2>
        <p style="color:var(--text-muted);margin:14px 0 26px;">El producto o la sección que buscas no está disponible.</p>
        <a href="#/catalogo" class="btn btn-primary">Ir al catálogo</a>
      </div>
    </div>
  `;
}

function contactSectionHTML(standalone){
  return `
  <section class="section" ${standalone ? '' : 'style="padding-top:0"'}>
    <div class="container">
      <div class="section-head">
        <div><span class="eyebrow">Contacto</span><h2>Hablemos de tu evento</h2></div>
        <p>Escríbenos por WhatsApp o síguenos en Instagram para ver el catálogo en movimiento.</p>
      </div>
      <div class="contact-grid">
        <div class="contact-card">
          <div class="contact-row">
            <div class="ic">${WA_ICON}</div>
            <div class="t"><small>WhatsApp</small><strong>313 651 7482</strong></div>
          </div>
          <div class="contact-row">
            <div class="ic">${PIN_ICON}</div>
            <div class="t"><small>Ubicación</small><strong>${ADDRESS}</strong></div>
          </div>
          <div class="contact-row">
            <div class="ic">${IG_ICON}</div>
            <div class="t"><small>Instagram</small><strong>${IG_HANDLE}</strong></div>
          </div>
          <a class="btn btn-whatsapp btn-block" style="margin-top:20px;" target="_blank" rel="noopener" href="${waLink('Hola, estoy interesado en el catálogo de Humo Latino. Quisiera conocer disponibilidad y realizar una consulta.')}">${WA_ICON} Hablar por WhatsApp</a>
        </div>
        <div class="qr-card">
          <img src="assets/qr-instagram.png" alt="Código QR Instagram Humo Latino" loading="lazy" style="border-radius:8px;background:#fff;padding:6px;width:180px;height:180px;margin:0 auto 14px;object-fit:contain;display:block;">
          <strong style="font-family:var(--font-display);font-size:16px;">Síguenos en Instagram</strong>
          <p>Escanea el código o toca el botón para llegar directo a ${IG_HANDLE}</p>
          <a class="btn btn-outline btn-block" target="_blank" rel="noopener" href="${INSTAGRAM_URL}">${IG_ICON} Seguir en Instagram</a>
        </div>
      </div>
    </div>
  </section>`;
}

/* ---------- Router ---------- */
function router(){
  const raw = location.hash.slice(1) || "/";
  const [path, queryStr] = raw.split("?");
  const params = new URLSearchParams(queryStr || "");
  const segs = path.split("/").filter(Boolean);

  window.scrollTo({top:0, behavior:"instant"});
  setActiveNav("#/" + (segs[0] || ""));

  if(segs.length === 0){ view_home(); return; }
  if(segs[0] === "catalogo"){ view_catalogo(params); return; }
  if(segs[0] === "categorias"){ view_categorias(); return; }
  if(segs[0] === "categoria" && segs[1]){ view_categoria(segs[1]); return; }
  if(segs[0] === "marcas"){ view_marcas(); return; }
  if(segs[0] === "marca" && segs[1]){ view_marca(segs[1]); return; }
  if(segs[0] === "producto" && segs[1]){ view_producto(segs[1]); return; }
  if(segs[0] === "nosotros"){ view_nosotros(); return; }
  if(segs[0] === "contacto"){ view_contacto(); return; }
  view_404();
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", ()=>{
  initMobileMenu();
  initHeaderSearch();
  router();
});
