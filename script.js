const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const ready=(document.fonts?document.fonts.ready:Promise.resolve());
const store={get(k){try{return sessionStorage.getItem(k)}catch(e){return null}},set(k,v){try{sessionStorage.setItem(k,v)}catch(e){}}};
// Ebony Rose's projects (content from ebonyrose.xyz); every image is shown square, cropped from the centre, and opens uncropped in the lightbox
const PROJECTS=[{"id": "australia-post", "g": "client", "n": "Australia Post", "t": "Event design + print", "sub": "Locker Land, an immersive Parcel Locker event", "cl": "Australia Post", "role": "Storyboards, walls, print", "line": "Taking Australia Post's Locker Land from brand world to real room: the screens, the walls and everything printed.", "meta": {"Role": "Storyboards, walls, print"}, "desc": ["Locker Land was an immersive event Australia Post ran in Melbourne and Sydney to explore the future of delivery. More than 2 million Australians now use Parcel Lockers, usage has grown 20% in a year and returns through lockers are up 36%. The event brought retailers, property partners and Australia Post experts together to unpack what is driving that growth.", "The brand and look of Locker Land were set by the creative team. My part was making that world work across a whole venue: helping build the storyboards for the main screen video, setting up the large-format wall designs and producing the print assets guests picked up on the day."], "copy": [{"h": "Walls + screens", "lead": "Four walls that walk guests through the locker journey: send, deliver, collect, return.", "p": ["I set up the wall designs across the venue, laying each panel out so the story reads in order as you move through the space, and so the key stats hold up from across the room and up close, right where presenters were speaking to them.", "For the main screens I helped build the storyboards for the motion, including the testimonial loop at the top of this page, where real Google reviews from locker users pop up between the Welcome to Locker Land titles."]}, {"h": "Print", "lead": "Everything guests could hold: badges, table tents, menus, paddles and myth-busting cards.", "p": ["The print side covered the smaller pieces that make an event feel finished. Each had a job, whether it was guiding people through the space, starting conversations at the tables or busting a common myth about Parcel Lockers, and I prepared the artwork for print across the full set.", "Locker Land ran in Melbourne and Sydney, with a digital version at <a href=\"https://www.lockerland.com.au/\" target=\"_blank\" rel=\"noopener\">lockerland.com.au</a> for businesses outside both cities."]}], "sets": [5, 2, 8], "link": "https://www.lockerland.com.au", "ll": "lockerland.com.au", "th": "img/australia-post-thumb.jpg", "vid": "img/australia-post-hero.mp4", "poster": "img/australia-post-hero.jpg", "imgs": ["img/australia-post-01.jpg", "img/australia-post-02.jpg", "img/australia-post-03.jpg", "img/australia-post-04.jpg", "img/australia-post-05.jpg", "img/australia-post-06.jpg", "img/australia-post-07.jpg", "img/australia-post-08.jpg", "img/australia-post-09.jpg", "img/australia-post-10.jpg", "img/australia-post-11.jpg", "img/australia-post-12.jpg", "img/australia-post-13.jpg", "img/australia-post-14.jpg", "img/australia-post-15.jpg"]}, {"id": "youi", "g": "client", "n": "youi", "t": "Illustration, social + templates", "sub": "Social, video and display ads for an Australian insurer", "cl": "youi", "role": "Illustration, storyboards, templates", "meta": {"Role": "Illustration, storyboards, templates"}, "line": "A modular illustration and template system for youi's always-on advertising.", "desc": ["youi runs monthly campaigns across Car, Home, caravan, motorcycle and boat insurance, as well as its footy sponsorships. Each ad needs to communicate a single proof point quickly, within strict brand and legal requirements.", "I contributed illustration, set up social statics and video storyboards, and built brand templates so new messages could be produced quickly and consistently."], "copy": [{"h": "Illustration + storyboards", "lead": "Leading with illustration makes abstract cover easy to understand at a glance.", "p": ["Each story was storyboarded so the illustration establishes the scenario before the headline appears. The monoline style and generous negative space keep frames legible on small screens and at speed.", "Stories and statics were designed as pairs on a shared grid. Fixed positions for the headline, illustration, legal copy and logo keep the campaign recognisable from month to month."]}, {"h": "Templates + footy", "lead": "A single template system lets one message scale across every format.", "p": ["Consistent keylines, type scale and safe zones were applied across 9:16, 1:1, mobile ScrollX and desktop takeovers, reducing rework when resizing.", "The Brisbane Lions partnership work follows the same framework, combining fan photography with line illustration so sponsorship and product advertising read as one brand."]}], "sets": [5, 5, 4], "lay": ["pa", "pb5", "pc4"], "link": "https://www.youi.com.au", "ll": "youi.com.au", "th": "img/youi-thumb.jpg", "vid": "img/youi-hero.mp4?v=2", "poster": "img/youi-hero-poster.jpg", "imgs": ["img/youi-01.jpg", "img/youi-02.jpg", "img/youi-03.jpg", "img/youi-04.jpg", "img/youi-05.jpg", "img/youi-06.jpg", "img/youi-07.jpg", "img/youi-08.jpg", "img/youi-09.jpg", "img/youi-10.jpg", "img/youi-11.jpg", "img/youi-12.jpg", "img/youi-13.jpg", "img/youi-14.jpg"], "vids": {"img/youi-01.jpg": ["img/youi-01.mp4?v=2", "img/youi-01-poster.jpg"], "img/youi-06.jpg": ["img/youi-06.mp4?v=2", "img/youi-06-poster.jpg"], "img/youi-09.jpg": ["img/youi-09.mp4?v=2", "img/youi-09-poster.jpg"], "img/youi-10.jpg": ["img/youi-10.mp4", "img/youi-10-poster.jpg"], "img/youi-11.jpg": ["img/youi-11.mp4", "img/youi-11-poster.jpg"]}}, {"id": "rounds", "g": "build", "n": "Rounds", "t": "Product design + build", "sub": "Side project, live on the web and iOS", "cl": "Self-initiated", "role": "Design + build", "line": "Designed it, then built it. A night out planned before you ask.", "meta": {"Role": "Product design + build", "Team": "Just me", "Platforms": "Web app, installable PWA, iOS", "Status": "Live, with real-time crew voting"}, "desc": ["Rounds plans a day or night out with your crew. You open it and there is already a plan waiting — three stops, times that work, the walk between them — and if you don't like it, one tap gives you another. Share it with a crew and everyone sees each other's votes as they change.", "It started because deciding where to go takes longer than going. That made the design problem the opposite of a blank canvas: the app has to have an opinion first and let you argue with it second, so nearly every screen opens on a decision already made rather than an empty state asking what you want.", "I designed it and then built it — the interface, the Melbourne venue list, a map that works out the walking route on the phone itself, and the server behind the live voting. It runs in a browser, installs on a phone like an app, and there is an iOS build."], "link": "https://rounds.ebonyaugustin2000.workers.dev", "ll": "Open Rounds", "th": "img/rounds-thumb.jpg", "imgs": ["img/rounds-hero.jpg", "img/rounds-plan.jpg", "img/rounds-places.jpg", "img/rounds-icon.jpg", "img/rounds-shuffle.gif"]}, {"id": "pirate-life", "g": "client", "n": "Pirate Life", "t": "Ecommerce web design", "sub": "Online shop for a South Australian brewery", "cl": "Pirate Life Brewing", "role": "Designer", "line": "One online shop that finally felt like the beer.", "meta": {"Role": "Designer", "Scope": "Online shop redesign, new merch range", "Outcome": "Live at shop.piratelife.com.au"}, "desc": ["Pirate Life was growing fast and had a new merch range to sell, but the online shop felt like an afterthought next to the brand. The brief was one shop that felt like the beer.", "I went blocky and loud on purpose. Big product photography carries most of the page, a hand-drawn illustration sits in the footer, and emoji and icons do the small talk so the product copy can stay short."], "link": "https://shop.piratelife.com.au", "ll": "shop.piratelife.com.au", "th": "img/pirate-life-thumb.jpg", "imgs": ["img/pirate-life-01.jpg", "img/pirate-life-02.jpg", "img/pirate-life-03.jpg", "img/pirate-life-04.jpg", "img/pirate-life-05.jpg"]}, {"id": "small-victories", "g": "client", "n": "Small Victories", "t": "Web design", "sub": "Website for a Barossa Valley wine brand", "cl": "Small Victories Wine", "role": "Designer", "line": "A type-led site for a wine brand chasing a younger crowd.", "meta": {"Role": "Designer", "Scope": "Website for a new wine brand", "Audience": "Urban women, 20 to 40", "Outcome": "Live at smallvictorieswine.com"}, "desc": ["Small Victories is an innovative boutique wine brand nestled in the Barossa Valley, South Australia. This brand distinctly appeals to the 20 to 40-year-old fashionable female demographic residing in urban centres. Originating from Elderton Wines, traditionally catering to an audience aged between 30 and 60, Small Victories marks a significant departure towards a more contemporary market focus.", "In alignment with its refreshed branding strategy and to captivate its targeted audience, there was a clear directive for a minimalist and sophisticated user interface (UI). This was to be achieved with a pronounced emphasis on typographic layout, drawing heavily on the aesthetic cues of their existing wine labels to guide the visual direction."], "link": "https://smallvictorieswine.com", "ll": "smallvictorieswine.com", "th": "img/small-victories-thumb.jpg", "imgs": ["img/small-victories-01.jpg", "img/small-victories-02.jpg", "img/small-victories-03.jpg", "img/small-victories-04.jpg", "img/small-victories-05.jpg"]}, {"id": "spellmans", "g": "client", "n": "Spellmans' Social", "t": "Branding", "sub": "Identity for an Adelaide café", "cl": "Spellmans' Social", "role": "Designer", "line": "Café identity, from monogram to glassware.", "meta": {"Role": "Designer", "Scope": "Brand identity, monogram, colour palette", "Client": "Café in Adelaide", "Outcome": "In use, @spellmans.social"}, "desc": ["Situated in the heart of Adelaide, Spellmans' Social is a café that prides itself on creating an atmosphere that feels both inviting and intimate. In their pursuit of a unique brand identity, they expressed a desire for a design that seamlessly marries the nostalgia of yesteryears with the crisp, clean lines of modernity. They envisioned a colour palette that draws inspiration from nature, with deep, rich emerald green as the centrepiece, complemented by the warmth of browns and the subtlety of beige tones.", "The introduction of a monogram was a thoughtful nod to classic design principles, ensuring that the essence of Spellmans' Social could be distilled into a simple, yet elegant, symbol.", "The client's enthusiastic response to this idea was a testament to its alignment with their vision for a brand that speaks of quality, warmth, and a timeless appeal, making Spellmans' Social not just a cafe, but a destination."], "link": "https://www.instagram.com/spellmans.social", "ll": "@spellmans.social", "th": "img/spellmans-thumb.jpg", "imgs": ["img/spellmans-01.jpg", "img/spellmans-02.jpg", "img/spellmans-03.jpg", "img/spellmans-04.jpg", "img/spellmans-05.jpg", "img/spellmans-06.jpg", "img/spellmans-07.jpg"]}, {"id": "clearkind", "g": "play", "n": "clearkind.", "t": "App UX + UI", "sub": "Health and lifestyle app, concept", "cl": "Concept", "role": "UX + UI, solo", "line": "A planner with mental health support built in. Clickable in Figma.", "meta": {"Role": "UX + UI, solo", "Type": "Concept app", "Tools": "Figma (prototype linked)", "Focus": "Planning with mental health support built in"}, "desc": ["I developed an application tailored for young individuals struggling with organisation and daily management, with a strong emphasis on mental health support. This app incorporates specialised features such as break reminders, visualisers, calming timers, and music integration to aid stress management.", "Additionally, it includes notifications for physical activity and hydration, along with access to mental health professionals and techniques for anxiety and breathing management. Colour psychology is strategically utilised to enhance user engagement, employing red for energy, green for motivation, and blue for calm, particularly in sections dedicated to mental health.", "The application not only assists users in completing tasks but also promotes a balanced approach to time management, addressing the underlying issues of fatigue and demotivation. There is also potential to extend this application into a web-based platform for both Mac and Windows, further increasing its accessibility and utility."], "link": "https://www.figma.com/proto/98MvqmccjLyviiaBpDkQuj/clearkind-UI-Wireframes?node-id=2-92&p=f&viewport=724%2C555%2C0.16&t=XTiaeKyQISFD9TkL-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A92&show-proto-sidebar=1&page-id=0%3A1", "ll": "Figma prototype", "th": "img/clearkind-01.jpg", "imgs": ["img/clearkind-01.jpg", "img/clearkind-02.jpg", "img/clearkind-03.jpg", "img/clearkind-04.jpg", "img/clearkind-05.jpg"]}, {"id": "link", "g": "client", "n": "Link NFC Badge", "t": "Product design", "sub": "Wearable technology, concept", "cl": "Concept", "role": "Product design", "line": "A wearable NFC badge, designed down to the clasp.", "meta": {"Role": "Product design", "Type": "Concept", "Scope": "Detachable NFC reader with a pin you can wear alone", "Power": "No charging, wakes at the reader"}, "desc": ["The concept revolves around a badge equipped with an NFC (Near Field Communication) chip, designed for convenience and ease of use without the necessity for charging. Activation occurs exclusively upon interaction with a reader, facilitating a seamless experience. Users can effortlessly detach the main compartment for swiping and subsequently reattach it to the base.", "This device is customisable to suit the unique daily requirements of each user. The design ensures that the brooch component securely fits within the main compartment, minimizing the risk of misplacement. Furthermore, users have the flexibility to wear just the pin independently, offering versatility for days when the full functionality of the device is not needed."], "link": "", "ll": "", "th": "img/link-thumb.jpg", "imgs": ["img/link-01.jpg", "img/link-02.jpg", "img/link-03.jpg", "img/link-04.jpg", "img/link-05.jpg"]}, {"id": "rufus", "g": "play", "n": "Radiance", "t": "Album art", "sub": "Album cover for RÜFÜS DU SOL, unsolicited", "cl": "Self-initiated", "role": "Art direction + design", "line": "Unsolicited vinyl art for RÜFÜS DU SOL. They never asked.", "meta": {"Role": "Art direction + design", "Type": "Self-initiated concept", "Format": "Standard vinyl sleeve + packaging", "Process": "Watercolour gradients, geometric focal points"}, "desc": ["Known for their albums 'Atlas' and 'Bloom'. The group sought a fresh album cover and packaging design for their upcoming album 'Radiance', to be featured on standard-sized vinyl.", "The initial design concepts explored various themes, drawing direct inspiration from the album title 'Radiance,' though it was deemed too literal. Further iterations aimed at achieving a balance between being engaging and reflecting the album's essence.", "Another concept evolved through experimentation with watercolour gradients for a calming visual effect, geometric shapes to create focal points, and a shift from angular to more harmonious designs that integrate well with the intended backdrop.", "The final design aims to mirror the expansive and immersive quality of RÜFÜS's music, as described in their album creation process and thematic content."], "link": "", "ll": "", "th": "img/rufus-thumb.jpg", "imgs": ["img/rufus-01.jpg", "img/rufus-02.jpg", "img/rufus-03.jpg", "img/rufus-04.jpg", "img/rufus-05.jpg"]}, {"id": "more-dood", "g": "play", "n": "More Dood", "t": "UI design", "sub": "LESS Festival collage activity, RMIT University", "cl": "RMIT × LESS Festival", "role": "UI design", "line": "A tool where festival-goers collage each other's GIFs.", "meta": {"Role": "UI design", "Type": "RMIT studio brief", "For": "LESS Festival of Collage, 2021", "Scope": "Desktop-first UI, mobile concepts"}, "desc": ["In the concluding semester of my studio course, we were tasked with conceiving a potential contribution for the 2021 Less Festival. The mandate was that our proposals should centrally feature collage as an artistic technique, while also offering an engaging activity for attendees. In response to this brief, I developed a preliminary user interface (UI) design for a platform named 'More Dood.'", "This UI design is intended to enable users to craft collaged gifs by augmenting each other's mini-animations, thereby fostering a collaborative and creative expression in a casual and approachable art style.", "Although concepts were developed for mobile accessibility, the full richness and functionality of the UI are optimally experienced via desktop."], "link": "https://lessfestivalofcollage.com/less-festival-2021", "ll": "lessfestivalofcollage.com", "th": "img/more-dood-thumb.jpg", "imgs": ["img/more-dood-01.jpg", "img/more-dood-02.jpg", "img/more-dood-03.jpg", "img/more-dood-04.gif", "img/more-dood-05.gif", "img/more-dood-06.jpg", "img/more-dood-07.jpg"]}];
const imgTag=(src,alt)=>`<img src="${src}" alt="${(alt||'').replace(/"/g,'&quot;')}" loading="lazy" decoding="async">`;
// shared artwork and size pattern, so images vary in size on every page
const pal=[['#e8453c','#0a0a0a','#f4f1ea','#fff'],['#e6a817','#1a1a1a','#fff','#000'],['#c9d77a','#0f3d2e','#fff','#000'],['#f08fc0','#3a0a2a','#fff','#000'],['#2b2b2b','#f4f4f2','#e8453c','#fff'],['#dfe8ef','#0c2340','#e8453c','#000'],['#6b8f5e','#f4f4f2','#0c0c0d','#fff'],['#4a0e3a','#f08fc0','#fff','#fff']];
const rng=a=>()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
// generative artwork so each project has its own image; swap for real project images later
const art=(i,p)=>{const r=rng(i*977+13),[bg,fg,ac]=p,kind=i%6;let g='';
 if(kind===0){for(let k=7;k>0;k--)g+=`<circle cx="${40+r()*20}" cy="${45+r()*20}" r="${k*7}" fill="${k%2?fg:ac}"/>`}
 else if(kind===1){for(let k=-4;k<12;k++)g+=`<rect x="${k*12}" y="-20" width="5" height="160" fill="${k%3?fg:ac}" transform="rotate(${18+r()*10} 50 50)"/>`}
 else if(kind===2){g+=`<circle cx="${30+r()*40}" cy="${35+r()*30}" r="${22+r()*14}" fill="${fg}"/><circle cx="${60+r()*25}" cy="${60+r()*25}" r="${8+r()*8}" fill="${ac}"/>`}
 else if(kind===3){for(let x=0;x<7;x++)for(let y=0;y<7;y++)g+=`<circle cx="${10+x*13}" cy="${10+y*13}" r="${2+r()*5}" fill="${(x+y)%3?fg:ac}"/>`}
 else if(kind===4){for(let k=0;k<6;k++)g+=`<path d="M${-5} ${20+k*14} Q 30 ${r()*60+k*8} 55 ${40+k*8} T 105 ${30+k*12}" fill="none" stroke="${k%2?fg:ac}" stroke-width="${2+r()*3}"/>`}
 else{for(let k=0;k<5;k++)g+=`<path d="M${10+k*6} ${95-k*14} L ${50} ${15+k*14} L ${90-k*6} ${95-k*14} Z" fill="${k%2?fg:ac}"/>`}
 return`<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="100" height="100" fill="${bg}"/>${g}</svg>`};

// every image is square; the size variation is scale only: one big 2x2 image framed by single squares, so all covers keep the same ratio
const LAY_WORK=[[1,1],[2,1],[3,1],[4,1],[1,2],['2 / span 2','2 / span 2'],[4,2],[1,3],[4,3],[1,4],[2,4],[3,4],[4,4]];LAY_WORK.rows=4;
const SZ_WORK=['1','1','1','1','1','b','1','1','1','1','1','1','1'];
// work grid: one 3x3 lead, a 2x2 further down, and singles packing the rest, all square
const LAY_WG=[['2 / span 3','1 / span 3'],[1,1],[1,2],[1,3],[1,4],[2,4],[3,4],[4,4]];LAY_WG.rows=4;
const SZ_WG=['c','1','1','1','1','1','1','1'];
const LAY_ABOUT=[[1,1]];LAY_ABOUT.rows=1;
const SZ_ABOUT=['1','1','1','1','1','1','1','1'];
const LAY_ENG=[['1 / span 2','1 / span 2'],[3,1],[4,1],[3,2],[4,2]];LAY_ENG.rows=2;
const SZ_ENG=['b','1','1','1','1'];
const SIZES=SZ_WORK;
const placeAt=(lay,i)=>{const p=lay[i%lay.length],off=Math.floor(i/lay.length)*lay.rows;let r=String(p[1]);if(off)r=r.replace(/\d+/,m=>+m+off);return`--gc:${p[0]};--gr:${r}`};
const artTile=(i,k,sizes,lay,extra='')=>{const p=pal[i%pal.length];return`<a class="wtile pl sz-${sizes[k%sizes.length]}" style="${placeAt(lay,k)}" href="#">${art(i,p)}${extra}</a>`};

// fit wordmark to container width
const logo=document.querySelector('.big-logo');
if(logo){const fit=()=>{logo.style.fontSize='100px';const t=document.createElement('span');
 t.style.cssText='position:absolute;visibility:hidden;white-space:nowrap;font:inherit';t.textContent=logo.textContent;logo.appendChild(t);
 const tw=t.getBoundingClientRect().width;t.remove();logo.style.fontSize=(100*logo.clientWidth/tw)+'px'};
 ready.then(fit);addEventListener('resize',fit)}

// nav: pill stays centred, the ruler content slides under it
const centre=(s,item,smooth)=>s.scrollTo({left:item.offsetLeft+item.offsetWidth/2-s.clientWidth/2,behavior:smooth&&!reduce?'smooth':'auto'});
const sizePill=(pill,item)=>{pill.style.width=(item.getBoundingClientRect().width+20)+'px'};
document.querySelectorAll('.nav-viewport').forEach(v=>{
 const s=v.querySelector('.nav-scroller'),pill=v.querySelector('.nav-pill'),items=[...v.querySelectorAll('.nav-item')];
 const active=v.querySelector('.nav-item.active');if(!active)return;
 const primary=!!v.querySelector('a.nav-link');
 const knob=v.closest('.nav').querySelector('.knob');
 if(knob)s.addEventListener('scroll',()=>knob.style.setProperty('--rot',(s.scrollLeft*.45)+'deg'),{passive:true});
 const place=()=>{sizePill(pill,active);centre(s,active,false)};
 ready.then(()=>{
  if(primary){ // arrive from the previous tab, then glide to this one
   const prev=items[+store.get('navFrom')];
   if(prev&&prev!==active&&!reduce){sizePill(pill,prev);s.style.scrollSnapType='none';centre(s,prev,false);
    requestAnimationFrame(()=>requestAnimationFrame(()=>{sizePill(pill,active);centre(s,active,true);setTimeout(()=>s.style.scrollSnapType='',700)}))}
   else place();
   store.set('navFrom',items.indexOf(active));
  }else place();
 });
 addEventListener('resize',place);
 if(!primary){ // filters: glide on click
  s.addEventListener('click',e=>{const it=e.target.closest('.nav-item');if(it)centre(s,it,true)});return}
 const go=item=>{const a=item.querySelector('a');if(!a||item===active)return;
  sizePill(pill,item);centre(s,item,true);store.set('navFrom',items.indexOf(active));
  setTimeout(()=>{document.body.classList.add('page-leave');setTimeout(()=>location.href=a.href,180)},reduce?0:380)};
 s.addEventListener('click',e=>{const a=e.target.closest('a.nav-link');if(!a)return;e.preventDefault();if(s.dataset.moved)return;go(a.closest('.nav-item'))});
 // drag to scrub; release snaps to the nearest tab and opens it
 let down=null;
 s.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')return;down={x:e.clientX,left:s.scrollLeft};delete s.dataset.moved});
 addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-down.x;if(Math.abs(dx)>4){s.dataset.moved='1';s.classList.add('dragging');s.scrollLeft=down.left-dx;
  const mid=s.getBoundingClientRect().left+s.clientWidth/2;
  const n=items.reduce((b,i)=>{const r=i.getBoundingClientRect();return Math.abs(r.left+r.width/2-mid)<Math.abs(b.getBoundingClientRect().left+b.getBoundingClientRect().width/2-mid)?i:b},items[0]);sizePill(pill,n)}});
 addEventListener('pointerup',()=>{if(!down)return;down=null;s.classList.remove('dragging');if(!s.dataset.moved)return;
  const mid=s.getBoundingClientRect().left+s.clientWidth/2;
  const n=items.reduce((b,i)=>{const r=i.getBoundingClientRect(),br=b.getBoundingClientRect();return Math.abs(r.left+r.width/2-mid)<Math.abs(br.left+br.width/2-mid)?i:b},items[0]);
  if(n===active){sizePill(pill,active);centre(s,active,true)}else go(n);setTimeout(()=>delete s.dataset.moved,50)});
});

// design filter with FLIP reflow
const filters=document.querySelectorAll('[data-filter]');
const tiles=[...document.querySelectorAll('.tile')];
let busy=false;
filters.forEach(b=>b.addEventListener('click',async()=>{
 if(busy)return;
 document.querySelector('.grid')?.classList.toggle('filtering',b.dataset.filter!=='All');
 filters.forEach(x=>{x.classList.toggle('active',x===b);x.closest('.nav-item').classList.toggle('active',x===b)});
 const show=t=>b.dataset.filter==='All'||t.dataset.cat.includes(b.dataset.filter[0]);
 if(reduce){tiles.forEach(t=>t.hidden=!show(t));return}
 busy=true;
 const leaving=tiles.filter(t=>!t.hidden&&!show(t));
 await Promise.all(leaving.map(t=>t.animate({opacity:[1,0],transform:['scale(1)','scale(.94)']},{duration:160,fill:'forwards'}).finished));
 const before=new Map(tiles.filter(t=>!t.hidden).map(t=>[t,t.getBoundingClientRect()]));
 tiles.forEach(t=>{t.hidden=!show(t);t.getAnimations().forEach(a=>a.cancel())});
 tiles.filter(t=>!t.hidden).forEach(t=>{const o=before.get(t),n=t.getBoundingClientRect();
  if(o)t.animate({transform:[`translate(${o.left-n.left}px,${o.top-n.top}px)`,'none']},{duration:420,easing:'cubic-bezier(.22,.61,.36,1)'});
  else t.animate({opacity:[0,1],transform:['scale(.94)','none']},{duration:320,delay:120,fill:'backwards'})});
 setTimeout(()=>busy=false,450)}));

// articles carousel
const track=document.querySelector('.art-track');
document.querySelectorAll('[data-dir]').forEach(b=>b.addEventListener('click',()=>
 track.scrollBy({left:+b.dataset.dir*(track.firstElementChild.offsetWidth+48),behavior:'smooth'})));
// engineering list
document.querySelectorAll('.eng-list button').forEach(b=>b.addEventListener('click',()=>{
 document.querySelectorAll('.eng-list button').forEach(x=>x.classList.toggle('active',x===b))}));

// cursor trail: coloured shapes follow the pointer over the footer, and over the blank space to the right of the opening statement
const trailOn=(area,layer)=>{
 const cols=['#e8453c','#e6a817','#f08fc0','#6b8f5e','#c9d77a','#8d7bff'];
 const shape=[
  c=>`<svg viewBox="0 0 24 24"><path d="M12 1 23 12 12 23 1 12Z" fill="${c}"/></svg>`,
  c=>`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="${c}"/></svg>`,
  c=>`<svg viewBox="0 0 24 24"><path d="M12 1l3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" fill="${c}"/></svg>`];
 layer.style.setProperty('--trail-size','min(4.45vw,64px)');
 let last=null,n=0;
 area.addEventListener('pointermove',e=>{const r=layer.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
  if(x<0||y<0||x>r.width||y>r.height){last=null;return}
  if(last&&Math.hypot(x-last.x,y-last.y)<70)return;last={x,y};
  const d=document.createElement('div');d.innerHTML=shape[n%3](cols[n++%cols.length]);const el=d.firstChild;
  el.style.left=x+'px';el.style.top=y+'px';layer.appendChild(el);
  const rot=(Math.random()-.5)*60;
  const a=el.animate([{opacity:0,transform:`scale(.3) rotate(${rot-30}deg)`},{opacity:1,transform:`scale(1) rotate(${rot}deg)`,offset:.2},{opacity:1,transform:`scale(1) rotate(${rot}deg)`,offset:.6},{opacity:0,transform:`scale(.6) rotate(${rot+20}deg)`}],{duration:1800,easing:'ease-out'});
  a.onfinish=()=>el.remove()});
 area.addEventListener('pointerleave',()=>last=null)};
if(!reduce&&matchMedia('(min-width:801px) and (hover:hover)').matches){
 const foot=document.querySelector('.about-footer');
 if(foot){const layer=document.createElement('div');layer.className='trail';layer.setAttribute('aria-hidden','true');foot.appendChild(layer);trailOn(foot,layer)}
 const lead=document.querySelector('.about-lead'),page=document.querySelector('.about-page');
 if(lead&&page){const layer=document.createElement('div');layer.className='trail lead-trail';layer.setAttribute('aria-hidden','true');page.appendChild(layer);
  const place=()=>{const pr=page.getBoundingClientRect(),lr=lead.getBoundingClientRect();layer.style.cssText=`inset:auto;left:${lr.right-pr.left+12}px;top:${lr.top-pr.top}px;width:${pr.right-lr.right-12}px;height:${lr.height}px`};
  place();addEventListener('resize',place);ready.then(place);trailOn(page,layer)}}

// live numbered date and time in the top strip, with a line that changes through the day
const clock=document.getElementById('clock'),wit=document.getElementById('wit');
if(clock){
 const lines=[[0,2,'should be asleep'],[2,5,'this is not a normal hour'],[5,7,'up before the sun, suspicious'],[7,9,'coffee is happening'],[9,12,'peak brain, use it'],[12,13,'lunch, obviously'],[13,15,'the post-lunch dip is real'],[15,17,'second wind'],[17,19,'tools down. mostly.'],[19,21,'off the clock'],[21,23,'one more tweak and that is it'],[23,24,'the good ideas hour']];
 const fmt=new Intl.DateTimeFormat('en-AU',{timeZone:'Australia/Melbourne',day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false,timeZoneName:'short'});
 const tick=()=>{const parts=Object.fromEntries(fmt.formatToParts(new Date()).map(x=>[x.type,x.value])),hh=+parts.hour%24;
  clock.textContent=`${parts.day}/${parts.month}/${parts.year} ${String(hh).padStart(2,'0')}:${parts.minute}:${parts.second} ${parts.timeZoneName||'AEST'}`;
  if(wit){const l=lines.find(x=>hh>=x[0]&&hh<x[1]);if(l&&wit.textContent!==l[2])wit.textContent=l[2]}};
 tick();setInterval(tick,1000)}

// custom cursor (mouse only)
if(matchMedia('(hover:hover) and (pointer:fine)').matches){
 const c=document.createElement('div');c.className='cursor';c.setAttribute('aria-hidden','true');document.body.appendChild(c);
 document.documentElement.classList.add('has-cursor');
 let x=-100,y=-100,cx=x,cy=y;
 const move=()=>{cx+=(x-cx)*(reduce?1:.28);cy+=(y-cy)*(reduce?1:.28);
  c.style.transform=`translate3d(${cx}px,${cy}px,0)`;requestAnimationFrame(move)};
 requestAnimationFrame(move);
 addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;
  if(!c.classList.contains('on')){cx=x=e.clientX;cy=y=e.clientY;c.classList.add('on')}
  x=e.clientX;y=e.clientY;
  c.classList.toggle('link',!!e.target.closest('a,button,[role="button"],.tile'))},{passive:true});
 document.documentElement.addEventListener('pointerleave',()=>c.classList.remove('on'));
 document.documentElement.addEventListener('pointerenter',()=>c.classList.add('on'));
}

// sticky pill menu: outline slides to the hovered page, then back to the current one
const pill=document.querySelector('.pill');
if(pill){const hi=pill.querySelector('.pill-hi'),links=[...pill.querySelectorAll('a')],act=pill.querySelector('a.active');
 const to=a=>{hi.style.width=a.offsetWidth+'px';hi.style.transform=`translateX(${a.offsetLeft}px)`;links.forEach(l=>l.classList.toggle('lit',l===a))};
 const jump=a=>{hi.style.transition='none';to(a);hi.offsetWidth;hi.style.transition=''};
 ready.then(()=>{const prev=links[+store.get('navFrom')];
  if(prev&&prev!==act&&!reduce){jump(prev);requestAnimationFrame(()=>to(act))}else jump(act);
  store.set('navFrom',links.indexOf(act))});
 links.forEach(l=>{l.addEventListener('pointerenter',()=>to(l));l.addEventListener('focus',()=>to(l));
  l.addEventListener('click',e=>{if(l===act)return;e.preventDefault();to(l);store.set('navFrom',links.indexOf(act));
   setTimeout(()=>{document.body.classList.add('page-leave');setTimeout(()=>location.href=l.href,180)},reduce?0:250)})});
 pill.addEventListener('pointerleave',()=>to(act));pill.addEventListener('focusout',()=>to(act));
 addEventListener('resize',()=>jump(act))}

// contact: the Contact link on any page goes to the contact section on the About page and highlights it
const target=document.getElementById('contact-info');
const showContact=()=>{
 const glow=()=>{const end=getComputedStyle(target).backgroundColor;target.animate([{backgroundColor:'rgba(255,255,255,.2)',boxShadow:'0 0 0 1px rgba(255,255,255,.9)'},{backgroundColor:end,boxShadow:'0 0 0 1px rgba(255,255,255,.5)',offset:.6},{backgroundColor:end,boxShadow:'0 0 0 1px rgba(255,255,255,0)'}],{duration:2600,easing:'ease-out'})};
 const sc=window.__cscene;
 if(sc){const y=sc.getBoundingClientRect().top+scrollY+.8*(sc.offsetHeight-innerHeight);scrollTo({top:y,behavior:reduce?'auto':'smooth'});setTimeout(glow,reduce?0:1100);return}
 target.scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'});setTimeout(glow,reduce?0:450)};
document.querySelectorAll('[data-contact-open]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();
 if(target){showContact();return}
 store.set('goContact','1');document.body.classList.add('page-leave');setTimeout(()=>location.href='index.html',reduce?0:180)}));
if(target&&store.get('goContact')){store.set('goContact','');ready.then(()=>setTimeout(showContact,350))}

// copy email
document.querySelectorAll('[data-copy]').forEach(b=>{const label=b.textContent;
 b.addEventListener('click',async()=>{let ok=false;try{await navigator.clipboard.writeText(b.dataset.copy);ok=true}catch(e){}
  b.textContent=ok?'Copied':b.dataset.copy;setTimeout(()=>b.textContent=label,1800)})});

// work list: two entrances that alternate each visit
const workList=document.querySelector('.work-list');
let workView=store.get('workView')==='grid'?'grid':'list';
if(workList&&!reduce&&workView==='list'){
 const top=workList.getBoundingClientRect().top;
 const rows=[...workList.children];
 const rnd=(a,b)=>a+Math.random()*(b-a),sign=()=>Math.random()<.5?-1:1;
 const E={fall:'cubic-bezier(.55,0,.85,.5)',up:'cubic-bezier(.2,.6,.4,1)',snap:'cubic-bezier(.3,1.6,.5,1)'};
 const kf=end=>(y,x,rt,o,e,white=true)=>({transform:`translate(${x}px,${y}px) rotate(${rt}deg)`,backgroundColor:white?'#fff':'rgba(255,255,255,0)',color:white?'#000':end,offset:o,easing:e});
 const info=r=>{const box=r.getBoundingClientRect();return{dist:box.top-top+box.height,b:Math.min(18,box.top-top),end:getComputedStyle(r).color}};
 const wait=(i,ms)=>Math.min(i,12)*ms;
 const variants=[
  // book falling: bottom row lands first with no bounce, staying offset sideways for a while before snapping straight
  ()=>rows.slice().reverse().forEach((r,i)=>{const{dist,b,end}=info(r),f=kf(end),dx=sign()*rnd(8,24),rot=0;
   r.animate([
    f(-dist,dx,rot,0,E.fall),
    f(0,dx,rot,.5,'linear'),
    f(0,dx,rot,.76,'ease-out'),
    f(0,dx*.9,rot*.9,.88,E.snap),
    f(0,0,0,.93,'ease-out'),
    f(0,0,0,1,'linear',false)
   ],{duration:Math.min(3000,1600+dist*1.2),delay:wait(i,115),fill:'backwards'})}),
  // cascade: each white panel swings open in 3D from its own top edge, and every panel stays hinged to the bottom edge of the one above, so the chain never separates
  ()=>{const n=rows.length,total=4000,STEP=25,N=Math.round(total/STEP),LAG=110,AMP=90,FREQ=.85,PERSP=2200;
   const clamp=v=>Math.max(0,Math.min(1,v)),sm=x=>{x=clamp(x);return x*x*(3-2*x)};
   const geo=rows.map(r=>{const bx=r.getBoundingClientRect();return{rel:bx.top-workList.getBoundingClientRect().top,h:bx.height}});
   const fr=rows.map(()=>[]);
   workList.style.perspective=PERSP+'px';workList.style.perspectiveOrigin='50% 0';
   rows.forEach(r=>{r.style.transformOrigin='50% 0'});
   workList.classList.add('fall');rows.forEach(r=>r.style.transitionDuration='1100ms');
   for(let k=0;k<=N;k++){const t=k/N*total,out=1-sm((t-3000)/900);
    let hy=geo[0].rel,hz=0;
    rows.forEach((r,i)=>{const u=Math.max(0,t-i*LAG)/1000,th=-AMP*Math.exp(-1.15*u)*Math.cos(2*Math.PI*FREQ*u)*out,rad=th*Math.PI/180;
     fr[i].push({opacity:t<i*LAG?0:1,transform:`translate3d(0px,${(hy-geo[i].rel).toFixed(2)}px,${hz.toFixed(2)}px) rotateX(${th.toFixed(3)}deg)`,offset:k/N});
     hy+=geo[i].h*Math.cos(rad);hz+=geo[i].h*Math.sin(rad)})}
   rows.forEach((r,i)=>r.animate(fr[i],{duration:total,easing:'linear',fill:'backwards'}).finished.then(()=>{r.style.transformOrigin=''},()=>{}));
   setTimeout(()=>workList.classList.remove('fall'),total-1300);
   setTimeout(()=>{rows.forEach(r=>r.style.transitionDuration='');workList.style.perspective='';workList.style.perspectiveOrigin=''},total+300)}
 ];
 let pick=window.__workVariant;
 if(!Number.isInteger(pick)){const last=store.get('workAnim');pick=last===null?Math.floor(Math.random()*variants.length):(+last+1)%variants.length}
 store.set('workAnim',pick);
 variants[pick]()}

// work page: a second view with imagery, switchable from the toolbar
const workPage=document.querySelector('.work-page[data-view]');
if(workPage&&workList){
 const grid=document.createElement('div');grid.className='work-grid';
 grid.innerHTML=[...workList.children].map((r,i)=>{const p=pal[i%pal.length],name=r.querySelector('.work-name').textContent,cat=r.querySelector('.work-cat').textContent,yr=r.querySelector('.work-year').textContent;
  return`<a class="wtile pl sz-${SZ_WG[i%SZ_WG.length]}" style="${placeAt(LAY_WG,i)}" href="project.html?p=${i}" data-group="${r.dataset.group||''}" style="color:${p[3]}">${imgTag(PROJECTS[i]?PROJECTS[i].th:'',name)}<span class="wt-name">${name}</span><span class="wt-meta">${cat}${yr?', '+yr:''}</span></a>`}).join('');
 workList.after(grid);
 // Build projects get a techy pixel mask: large stepped bites out of the corners, a few grey and white glitch blocks, re-rolled on hover
 grid.querySelectorAll('.wtile[data-group="build"]').forEach((t,n)=>{
  const cv=document.createElement('canvas');cv.className='pix';cv.setAttribute('aria-hidden','true');t.querySelector('.wt-name').before(cv);
  let seed=n*131+7;
  const draw=()=>{const w=Math.round(t.clientWidth),h=Math.round(t.clientHeight);if(!w||!h)return;
   cv.width=w;cv.height=h;const x=cv.getContext('2d'),C=18,cols=Math.ceil(w/C),rows=Math.ceil(h/C),r=rng(seed);
   // stepped bites out of the corners only: each corner gets its own depth, with a ragged staircase edge
   const cap=Math.ceil(Math.min(cols,rows)/7),depth=[0,1,2,3].map(()=>Math.min(cap,2+Math.floor(r()*4)));
   for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){
    const d=[i+j,cols-1-i+j,i+rows-1-j,cols-1-i+rows-1-j];let on=false,hint=false;
    for(let k=0;k<4;k++){if(d[k]<depth[k]||(d[k]===depth[k]&&r()<.5)||(d[k]===depth[k]+1&&r()<.15))on=true;if(d[k]<=depth[k]+2&&r()<.03)hint=true}
    if(on){x.fillStyle='#0c0c0d';x.fillRect(i*C,j*C,C,C)}
    else if(hint){x.fillStyle=r()<.5?'#c9c9c9':'#fff';x.fillRect(i*C,j*C,C,C)}}};
  new ResizeObserver(draw).observe(t);
  t.addEventListener('pointerenter',()=>{seed=Math.floor(Math.random()*1e6);draw()})});
 const btns=[...workPage.querySelectorAll('[data-view]')].filter(b=>b.tagName==='BUTTON');
 const gridIn=()=>{if(reduce)return; // simple entrance: tiles fade up one after another in reading order
  [...grid.children].forEach((t,i)=>t.animate([{opacity:0,transform:'translateY(24px)'},{opacity:1,transform:'none'}],{duration:900,delay:Math.min(i,14)*60,easing:'cubic-bezier(.2,.7,.2,1)',fill:'backwards'}))};
 const set=(v,first)=>{workView=v;workPage.dataset.view=v;store.set('workView',v);
  btns.forEach(b=>{const on=b.dataset.view===v;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});
  if(first||reduce)return;
  if(v==='grid')gridIn();
  else workList.animate([{opacity:0,transform:'translateY(14px)'},{opacity:1,transform:'none'}],{duration:450,easing:'ease-out'})};
 btns.forEach(b=>b.addEventListener('click',()=>{if(b.dataset.view!==workView)set(b.dataset.view)}));
 set(workView,true);
 if(workView==='grid')gridIn();
}

// Play panel: the suggestion box posts to Ebony's Google Form, and the Watching line can be changed in data.json without touching the HTML
(()=>{const f=document.getElementById('suggest-form');if(!f)return;const i=document.getElementById('suggest-in'),st=document.getElementById('suggest-status');
 const FORM='https://docs.google.com/forms/d/e/1FAIpQLSc3ZhTDmqhz0EqbRdNrCVl0202E89HFy7ii8ZmJbnyOnyN2YQ/formResponse',FIELD='entry.1680850579';
 f.addEventListener('submit',e=>{e.preventDefault();const v=i.value.trim();if(!v){st.textContent='type something first';return}
  const data=new URLSearchParams();data.append(FIELD,v);
  fetch(FORM,{method:'POST',mode:'no-cors',body:data}).then(()=>{st.textContent='thanks! added \u2713';i.value='';setTimeout(()=>st.textContent='',3000)}).catch(()=>{st.textContent="hmm, didn't go through. try again?"})});
 const w=document.getElementById('watching');
 if(w)fetch('data.json',{cache:'no-store'}).then(r=>r.ok?r.json():null).then(d=>{const x=d&&d.watching;if(x&&x.title){w.querySelector('.play-h').textContent=x.title;w.querySelector('.play-d').textContent=x.note||''}}).catch(()=>{});
})();

// Nav: All work, Play and Build all live on the work page and filter the projects
(()=>{const links=[...document.querySelectorAll('.tb-contact a[href^="work.html"]')],onWork=!!document.querySelector('.work-list');
 if(!links.length)return;
 const items=()=>[...document.querySelectorAll('.work-row,.wtile')];
 const rise=els=>{if(!reduce)els.forEach((el,i)=>el.animate([{opacity:0,transform:'translateY(14px)'},{opacity:1,transform:'none'}],{duration:550,delay:Math.min(i,16)*40,easing:'cubic-bezier(.2,.7,.2,1)',fill:'backwards'}))};
 const mark=g=>links.forEach(l=>{const on=(l.dataset.g||null)===g;l.classList.toggle('cur',on);on?l.setAttribute('aria-current','page'):l.removeAttribute('aria-current')});
 const side=document.getElementById('play-side'),mainEl=document.querySelector('.work-page');
 const TAGS={'':['A mid-weight Designer<br>making things for fun,<br>not just briefs.',''],play:['Play.','Things made for fun,<br>not for briefs.'],build:['Build.','Products designed<br>and built end to end.']};
 const tagEl=document.getElementById('work-tag');
 const setTag=g=>{if(!tagEl)return;const t=TAGS[g||''];const html=t[0]+(t[1]?`<em>${t[1]}</em>`:'');if(tagEl.dataset.k===(g||''))return;tagEl.dataset.k=g||'';if(reduce){tagEl.innerHTML=html;return}tagEl.animate([{opacity:1},{opacity:0}],{duration:120,fill:'forwards'}).onfinish=()=>{tagEl.innerHTML=html;tagEl.animate([{opacity:0,transform:'translateY(6px)'},{opacity:1,transform:'none'}],{duration:380,easing:'cubic-bezier(.16,1,.3,1)',fill:'forwards'})}};
 const apply=(g,animate)=>{mark(g);setTag(g);if(side){const on=g==='play';mainEl.classList.toggle('play-on',on);side.hidden=!on;if(on&&animate&&!reduce)side.animate([{opacity:0,transform:'translateY(16px)'},{opacity:1,transform:'none'}],{duration:600,easing:'cubic-bezier(.2,.7,.2,1)'})}
  document.querySelector('.work-grid')?.classList.toggle('filtering',!!g);
  items().forEach(el=>el.hidden=!!g&&el.dataset.group!==g);
  document.querySelectorAll('.wtile.lead').forEach(t=>t.classList.remove('lead'));
  if(g){const first=[...document.querySelectorAll('.wtile')].find(t=>!t.hidden);if(first)first.classList.add('lead')}
  if(animate)rise(items().filter(el=>!el.hidden&&el.offsetParent!==null))};
 if(!onWork)return;
 const q=new URLSearchParams(location.search).get('g');apply(['play','build'].includes(q)?q:null,false);
 links.forEach(l=>l.addEventListener('click',e=>{e.preventDefault();const g=l.dataset.g||null;apply(g,true);history.replaceState(null,'',g?'work.html?g='+g:'work.html')}))})();

// imagery with size variation on the other pages
(()=>{
 // Design: tiles get artwork in varied sizes
 const dg=document.querySelector('.grid');
 if(dg){const all=[...dg.querySelectorAll('.tile')];while(dg.querySelectorAll('.tile').length<26){const src=all[dg.querySelectorAll('.tile').length%all.length].cloneNode(true);dg.append(src)}
  dg.querySelectorAll('.tile').forEach((t,i)=>{t.style.background='none';t.classList.remove('big');t.classList.add('pl','sz-'+SZ_WORK[i%SZ_WORK.length]);t.setAttribute('style','background:none;'+placeAt(LAY_WORK,i));t.querySelector(':scope>svg')?.remove();t.insertAdjacentHTML('afterbegin',art(i+3,pal[(i+3)%pal.length]))})}
 // Articles: wide, tall and square images of different widths
 const ratios=['1/1','1/1','1/1','1/1'],widths=['100%','68%','52%','84%'];
 document.querySelectorAll('.article').forEach((a,n)=>{
  const fig=a.querySelector('.figure');
  if(fig){fig.classList.add('art-img');fig.style.aspectRatio=ratios[n%4];fig.style.width=widths[n%4];fig.style.background='none';fig.innerHTML=art(n*2+1,pal[(n*2+1)%pal.length])}
  const h3=a.querySelector('h3');
  if(h3){const f2=document.createElement('div');f2.className='figure art-img';f2.style.aspectRatio=ratios[(n+2)%4];f2.style.width=['46%','100%','62%','40%'][n%4];f2.style.marginLeft='auto';f2.style.background='none';f2.innerHTML=art(n*2+2,pal[(n*2+2)%pal.length]);h3.before(f2)}});
 // About: a gallery of mixed-size images under the opening statement
 const lead=document.querySelector('.about-lead');
 if(lead){const g=document.createElement('div');g.className='art-grid about-gallery';g.setAttribute('role','img');g.setAttribute('aria-label','Selected images');
  g.innerHTML=PROJECTS.map((pj,k)=>`<a class="wtile pl sz-1" style="${placeAt(LAY_ABOUT,k)}" href="project.html?p=${k}" data-group="${pj.g}">${imgTag(pj.th,pj.n)}</a>`).join('');
  const more=document.createElement('div');more.className='work-more';more.innerHTML='<a href="work.html">View all work <span aria-hidden="true">&#8599;</span></a>';
  g.classList.add('hstrip');const wrap=document.createElement('div');wrap.className='hscroll';wrap.append(g);lead.after(wrap);wrap.after(more)}
 // Engineering: a few mixed-size images in the preview panel
 const eb=document.querySelector('.eng-body');
 if(eb){const g=document.createElement('div');g.className='art-grid eng-gallery';
  g.innerHTML=SZ_ENG.map((sz,k)=>artTile(k+9,k,SZ_ENG,LAY_ENG)).join('');eb.append(g)}
})();

// About: the table and gallery reveal as they scroll into view
if(!reduce&&'IntersectionObserver' in window){
 const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;io.unobserve(en.target);
  const kids=[...en.target.querySelectorAll('.info-label,.info-row,.wtile')];
  (kids.length?kids:[en.target]).forEach((k,i)=>{k.style.transitionDelay=Math.min(i,10)*60+'ms';k.classList.add('in')})}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
 document.querySelectorAll('.info-section,.about-gallery').forEach(sec=>{
  sec.querySelectorAll('.info-label,.info-row,.wtile').forEach(k=>k.classList.add('rv'));io.observe(sec)})}


// Home tab: on the home page it scrolls back to the top; from any other page it fades out and goes home
const wipeEl=()=>{const ov=document.createElement('div');ov.className='wipe';ov.setAttribute('aria-hidden','true');ov.innerHTML='<i></i>';document.body.append(ov);return ov};
document.querySelectorAll('.tb-contact a[href="index.html"],.tb-logo').forEach(a=>a.addEventListener('click',e=>{
 e.preventDefault();
 if(document.querySelector('.about-lead')){scrollTo({top:0,behavior:reduce?'auto':'smooth'});return}
 a.classList.add('opening');setTimeout(()=>location.assign('index.html'),reduce?0:170)}));

// Home entrance: the tabs rise and the opening statement fades up
(()=>{const lead=document.querySelector('.about-lead'),bar=document.querySelector('.topbar');
  document.documentElement.classList.remove('home-in');
 if(reduce||!lead||!bar)return;
 let base=document.documentElement.classList.contains('intro-pending')?1900:0;
 const fromSite=(()=>{try{return new URL(document.referrer).origin===location.origin}catch(e){return false}})();
 if(fromSite)return;
 [...bar.querySelectorAll('.tb-info,.topbar-time')].forEach(el=>el.animate([{opacity:0},{opacity:1}],{duration:600,delay:base+250,fill:'backwards'}));
 lead.animate([{opacity:0,transform:'translateY(24px)'},{opacity:1,transform:'none'}],{duration:800,delay:base+250,easing:'cubic-bezier(.2,.7,.2,1)',fill:'backwards'})})();

// Home: the row of images drifts sideways on its own, and scrolling pushes it further across
(()=>{const gal=document.querySelector('.about-gallery.hstrip'),wrap=document.querySelector('.hscroll');if(!gal||!wrap||reduce)return;
 const render=t=>{const r=wrap.getBoundingClientRect();if(r.bottom<-300||r.top>innerHeight+300)return;
  const p=Math.max(0,Math.min(1,(innerHeight*.55-r.top)/(innerHeight*.55+r.height))),travel=Math.max(0,gal.scrollWidth-wrap.clientWidth),
   drift=Math.sin(t/5200)*.12;
  gal.style.transform=`translateX(${(-travel*(.12+.76*p+drift)).toFixed(1)}px)`};
 const loop=t=>{render(t);requestAnimationFrame(loop)};
 ready.then(()=>requestAnimationFrame(loop))})();

// project pages: one template, filled from the project list. "Next project" swaps the content in place, starting back at the top
(()=>{const page=document.querySelector('.project-page');if(!page)return;
 if('scrollRestoration' in history)history.scrollRestoration='manual';
 // a few short facts per project; external links live in the button beside the hero, never here
 const GLANCE={youi:[['My part','Illustration, storyboards, templates'],['Formats','Social, video, display'],['Cover','Car, home, caravan, moto, boat']],
  'australia-post':[['Cities','Melbourne + Sydney'],['My part','Storyboards, walls, print'],['Audience','Retailers + partners']],
  rounds:[['Team','Just me'],['Platforms','Web, PWA, iOS'],['Status','Live']],
  'pirate-life':[['Scope','Online shop + merch'],['Brand','Pirate Life'],['Status','Live']],
  'small-victories':[['Scope','Brand website'],['Audience','Women, 20 to 40'],['Status','Live']],
  spellmans:[['Scope','Identity + monogram'],['Palette','Emerald, brown, beige'],['Status','In use']],
  clearkind:[['Type','Concept app'],['Tool','Figma'],['Focus','Planning + wellbeing']],
  link:[['Type','Concept'],['Product','NFC badge + pin'],['Power','No charging']],
  rufus:[['Type','Self-initiated'],['Format','Vinyl sleeve'],['Process','Watercolour + geometry']],
  'more-dood':[['Type','RMIT brief'],['For','LESS Festival 2021'],['Scope','Desktop UI']]};
 const row=(l,v)=>`<div class="pj-row"><span class="pj-l">${l}</span><span class="pj-v">${v}</span></div>`;
 const trow=(l,body)=>`<section class="pj-trow"><h2 class="pj-tl">${l}</h2><div class="pj-tb">${body}</div></section>`;
 const LAY_PA=[['1 / span 2','1 / span 2'],[3,1],[4,1],[3,2],[4,2]];LAY_PA.rows=2;const SZ_PA=['b','1','1','1','1'];
 const LAY_PB=[['1 / span 2','1 / span 2'],['3 / span 2','1 / span 2']];LAY_PB.rows=2;
 const LAY_PB5=[[1,1],[2,1],[1,2],[2,2],['3 / span 2','1 / span 2']];LAY_PB5.rows=2;
 const LAY_PC4=[['1 / span 2','1 / span 2'],['3 / span 2',1],[3,2],[4,2]];LAY_PC4.rows=2;
 const LAYS={pa:[LAY_PA,SZ_PA],pb2:[LAY_PB,['b']],pb5:[LAY_PB5,['1','1','1','1','b']],pc4:[LAY_PC4,['b','w','1','1']]};
 const layOf=(k,fb)=>P_LAY&&P_LAY[k]&&LAYS[P_LAY[k]]||fb;let P_LAY=null;
 const idxOf=()=>{const q=+new URLSearchParams(location.search).get('p');return q>=0&&q<PROJECTS.length?q:0};
 let cur=idxOf();
 const render=i=>{cur=i;const P=PROJECTS[i],nx=PROJECTS[(i+1)%PROJECTS.length];
  document.title=P.n+' | Ebony Rose';
  P_LAY=P.lay||null;const vt=(src,alt)=>{const v=P.vids&&P.vids[src];return v?`<video src="${v[0]}" poster="${v[1]}" muted loop playsinline ${reduce?'':'autoplay '}preload="metadata" aria-label="${alt}"></video>`:imgTag(src,alt)};
  const imgTile=(src,k,sizes,lay)=>`<a class="wtile pl sz-${sizes[k%sizes.length]}" ${lay?`style="${placeAt(lay,k)}"`:''} href="${src}">${vt(src,P.n+' image '+(k+1))}</a>`;
  page.querySelector('.pj-title').textContent=P.n;
  page.querySelector('.pj-sub').textContent=P.sub;
  page.querySelector('.pj-top').innerHTML=`<div class="wtile pl sz-c pj-hero" data-group="${P.g}" style="--gc:1 / span 3;--gr:1 / span 3;view-transition-name:project-hero">${P.vid?`<video src="${P.vid}" poster="${P.poster||P.th}" muted loop playsinline ${reduce?'':'autoplay '}preload="auto" aria-label="${P.n}, animated main screen"></video>`:imgTag(P.th,P.n)}</div>
   <div class="pj-details">${row('Client',P.cl)}${row('Discipline',P.t)}${P.link?`<div class="work-more"><a href="${P.link}" target="_blank" rel="noopener">${P.ll||'Visit project'} <span aria-hidden="true">&#8599;</span></a></div>`:''}</div>`;
  page.querySelector('.pj-over').innerHTML=trow('Overview',`<p class="pj-lead">${P.line}</p><div class="pj-cols"><p>${P.desc[0]}</p>${P.desc[1]?`<p>${P.desc[1]}</p>`:''}</div>`);
  const imgs=P.imgs.filter(src=>src!==P.th),S=P.sets||[5,imgs.length],A=imgs.slice(0,S[0]),Bx=imgs.slice(S[0],S[0]+S[1]),Cx=imgs.slice(S[0]+S[1]);
  const copyRow=c=>c?trow(c.h,`${c.lead?`<p class="pj-callout">${c.lead}</p>`:''}<div class="pj-cols">${c.p.map(t=>`<p>${t}</p>`).join('')}</div>`):'';
  const La=layOf(0,[A.length===5?LAY_PA:null,SZ_PA]);page.querySelector('.pj-gal-a').innerHTML=A.map((src,k)=>imgTile(src,k,La[1],La[0])).join('');
  page.querySelector('.pj-mid').innerHTML=P.copy?copyRow(P.copy[0]):P.desc.length>2?trow('More',`<div class="pj-cols">${P.desc.slice(2).map(t=>`<p>${t}</p>`).join('')}</div>`):'';
  const gb=page.querySelector('.pj-gal-b');const Lb=layOf(1,[P.sets&&Bx.length===2?LAY_PB:null,['b']]);gb.innerHTML=Bx.map((src,k)=>imgTile(src,k,Lb[1],Lb[0])).join('');gb.hidden=!Bx.length;
  const m2=page.querySelector('.pj-mid-2');if(m2)m2.innerHTML=P.copy?copyRow(P.copy[1]):'';
  const gc=page.querySelector('.pj-gal-c');if(gc){const Lc=layOf(2,[null,['1']]);gc.innerHTML=Cx.map((src,k)=>imgTile(src,k,Lc[1],Lc[0])).join('');gc.hidden=!Cx.length}
  const gl=GLANCE[P.id]||[];
  page.querySelector('.pj-end').innerHTML=gl.length?trow('At a glance',`<dl class="pj-glance">${gl.map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`):'';
  page.querySelectorAll('.art-grid a.wtile').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
  const nxt=page.querySelector('.pj-next');nxt.href='project.html?p='+((i+1)%PROJECTS.length);
  nxt.querySelector('.pj-next-name').textContent=nx.n};
 render(cur);
 // swap to another project: fade out, jump to the top while hidden, fill in the new project, fade back in
 let busy=false;
 const go=(j,push)=>{if(busy)return;busy=true;
  const done=()=>{scrollTo({top:0,left:0,behavior:'instant'});render(j);if(push)history.pushState({p:j},'','project.html?p='+j);
   page.getAnimations().forEach(an=>an.cancel());
   if(!reduce)page.animate([{opacity:0,transform:'translateY(14px)'},{opacity:1,transform:'none'}],{duration:480,easing:'cubic-bezier(.2,.7,.2,1)'});
   busy=false};
  if(reduce){done();return}
  page.animate([{opacity:1},{opacity:0}],{duration:220,easing:'ease-in',fill:'forwards'}).onfinish=done};
 page.querySelector('.pj-next').addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;e.preventDefault();go((cur+1)%PROJECTS.length,true)});
 addEventListener('popstate',()=>{const j=idxOf();if(j!==cur)go(j,false)});
})();

// Home: a pixel dinosaur lives on the work images. He rides the strip (so his feet never slide), runs and turns with your scrolling,
// hops each gap, always works his way back into view (centre to slightly right on desktop), stops now and then to do something silly,
// and reacts differently every time you click him
(()=>{const wrap=document.querySelector('.hscroll'),galEl=document.querySelector('.about-gallery.hstrip'),home=!!(wrap&&galEl);if(reduce)return;
 const gal=home?galEl:{children:[],style:{},scrollWidth:0,isConnected:true,append(){},getBoundingClientRect:()=>({left:0,top:1e5})};
 const R=['..........########..','.........##########.','.........##.#######.','.........##########.','.........##########.','.........#####......','.........########..','#.......##########..','#......###########..','##.....#######.#....','##....##########....','###..###########.#..','################....','.#############......','..############......','...##########......','....########.......'];
 const L={a:['....###..###.......','....##....#........','....###...##.......'],b:['....###..###.......','.........##........','........###........'],j:['....###..###.......','....##...##........','....###..###.......']};
 const PX=innerWidth<700?2:3,W=20*PX,TOP=4,H=(R.length+3+TOP)*PX,AIR=520,mobile=innerWidth<700;
 const cv=document.createElement('canvas');cv.className='dino';cv.width=W;cv.height=H;cv.setAttribute('aria-label','Pixel dinosaur');document.body.append(cv);if(!home)cv.style.display='none';
 const bub=document.createElement('span');bub.className='dino-say';bub.hidden=true;bub.setAttribute('aria-hidden','true');document.body.append(bub);
 // simple obstacles stand on the images and ride along with the strip: a cross, a plus, a block, a little triangle and the cursor arrow
 const OB=[['#.....#','.#...#.','..#.#..','...#...','..#.#..','.#...#.','#.....#'],
  ['...#...','...#...','...#...','#######','...#...','...#...','...#...'],
  ['#####','#####','#####','#####','#####'],
  ['...#...','..###..','.#####.','#######'],
  ['#......','##.....','###....','####...','#####..','######.','####...','##.##..','#..##..','....##.']];
 const OP={'#':'#f2f2f2',a:'#e8453c',b:'#e6a817',c:'#c9d77a'};
 const obstacles=[];let gen=0;
 // click an obstacle and it vanishes in a poof, the dinosaur says thanks, and a fresh one grows back a little later
 const poof=(r)=>{const cx=r.left+r.width/2,cy=r.top+r.height/2;
  for(let i=0;i<10;i++){const d=document.createElement('i');d.className='dino-puff';const sz=4+Math.random()*6;d.style.cssText=`left:${cx-sz/2}px;top:${cy-sz/2}px;width:${sz}px;height:${sz}px`;document.body.append(d);
   const ang=i/10*Math.PI*2+Math.random()*.5,dist=22+Math.random()*30;
   d.animate([{opacity:1,transform:'translate(0,0) scale(1)'},{opacity:0,transform:`translate(${Math.cos(ang)*dist}px,${Math.sin(ang)*dist}px) scale(.3)`}],{duration:560+Math.random()*200,easing:'cubic-bezier(.2,.7,.3,1)'}).onfinish=()=>d.remove()}};
 const mk=(sp,left,myGen,fade)=>{const c=document.createElement('canvas');c.className='dino-ob';c.width=sp[0].length*PX;c.height=sp.length*PX;c.setAttribute('aria-hidden','true');
  const cx=c.getContext('2d');sp.forEach((row,y)=>{for(let k=0;k<row.length;k++)if(OP[row[k]]){cx.fillStyle=OP[row[k]];cx.fillRect(k*PX,y*PX,PX,PX)}});
  c.style.left=left+'px';c.style.top=(-c.height)+'px';gal.append(c);obstacles.push(c);
  if(fade&&!reduce)c.animate([{opacity:0,transform:'scale(.2)'},{opacity:1,transform:'none'}],{duration:450,easing:'cubic-bezier(.2,.8,.2,1)'});
  c.addEventListener('click',e=>{e.stopPropagation();const r=c.getBoundingClientRect(),t=performance.now();poof(r);c.remove();const i=obstacles.indexOf(c);if(i>=0)obstacles.splice(i,1);
   say('thank u!',1800,t);if(mode==='run'&&airT<0)jump(t,.9);
   setTimeout(()=>{if(myGen===gen&&gal.isConnected)mk(sp,left,myGen,true)},22000)});
  return c};
 // the corner pill is Ebony's availability, with a green dot, and opens an email
 const score=document.createElement('a');score.className='dino-score';score.href='mailto:ebonyroseaugustin@gmail.com?subject=Hi%20Ebony';score.innerHTML='<i class="live-dot" aria-hidden="true"></i><span class="ds-t">Open to roles</span>';if(home)document.body.append(score);
 const scoreText=()=>{};
 {const rr=rng(31);gal.style.position='relative';
  const build=()=>{obstacles.splice(0).forEach(o=>o.remove());gen++;let ox=260;const total=gal.scrollWidth;
   while(ox<total-160){const sp=OB[Math.floor(rr()*OB.length)],c=mk(sp,ox,gen,false);ox+=200+rr()*200+c.width}};
  build();addEventListener('resize',build)}
 const g=cv.getContext('2d');
 const px=(x,y,c)=>{g.fillStyle=c;g.fillRect(x*PX,y*PX,PX,PX)};
 const DR={
  phones:()=>{const hy=TOP-2,b='#b8b8bd',c='#8a8a90';for(let x=12;x<=16;x++)px(x,hy,b);[10,11,17,18].forEach(x=>px(x,hy+1,b));px(9,hy+2,b);px(19,hy+2,b);for(let y=4;y<=7;y++)for(let x=7;x<=10;x++)px(x,y+hy,c);px(7,4+hy,b);px(10,7+hy,b);px(9,3+hy,b)},
  party:()=>{px(14,1,'#e6a817');for(let x=13;x<=15;x++)px(x,2,'#e8453c');for(let x=12;x<=16;x++)px(x,3,x%2?'#e8453c':'#f08fc0')},
  shades:()=>{for(let x=10;x<=14;x++)px(x,TOP+2,'#0c0c0d');px(10,TOP+1,'#0c0c0d');px(14,TOP+1,'#0c0c0d')},
  crown:()=>{const c='#e6a817';[11,14,17].forEach(x=>px(x,2,c));for(let x=11;x<=17;x++)px(x,3,c);px(14,3,'#e8453c')},
  nightcap:()=>{const c='#8d7bff';for(let x=11;x<=17;x++)px(x,3,c);for(let x=12;x<=16;x++)px(x,2,c);for(let x=13;x<=15;x++)px(x,1,c);px(16,0,c);px(17,0,'#f2f2f2')},
  beanie:()=>{for(let x=10;x<=17;x++){px(x,3,'#e8453c');px(x,4,'#b8312a')}for(let x=11;x<=16;x++)px(x,2,'#e8453c');px(13,1,'#f2f2f2');px(14,1,'#f2f2f2')},
  cap:()=>{for(let x=10;x<=17;x++)px(x,3,'#6b8f5e');for(let x=11;x<=16;x++)px(x,2,'#6b8f5e');px(18,3,'#4a6b3e');px(19,3,'#4a6b3e')},
  bucket:()=>{for(let x=9;x<=18;x++)px(x,3,'#c9d77a');for(let x=11;x<=16;x++)px(x,2,'#c9d77a')},
  bowtie:()=>{[12,13,15,16].forEach(x=>px(x,11,'#e8453c'));px(14,11,'#8d0f08')},
  scarf:()=>{for(let x=9;x<=17;x++)px(x,11,x===12?'#f2f2f2':'#e8453c');px(9,12,'#e8453c');px(10,12,'#e8453c')},
  coffee:()=>{for(let y=13;y<=15;y++)for(let x=17;x<=19;x++)px(x,y,y===13?'#f2f2f2':'#e6a817');px(Math.floor(performance.now()/260)%2?18:19,11,'#8d8d8d')},
  pumpkin:()=>{for(let x=11;x<=16;x++)px(x,3,'#f08a24');for(let x=12;x<=15;x++)px(x,2,'#f08a24');px(13,1,'#6b8f5e')},
  santa:()=>{for(let x=10;x<=17;x++)px(x,3,'#f2f2f2');for(let x=11;x<=16;x++)px(x,2,'#e8453c');for(let x=13;x<=16;x++)px(x,1,'#e8453c');px(16,0,'#f2f2f2');px(17,0,'#f2f2f2');px(17,1,'#f2f2f2')},
  fascinator:()=>{[11,12,13].forEach(x=>px(x,3,'#f08fc0'));px(12,2,'#f08fc0');px(14,2,'#8d7bff');px(15,1,'#8d7bff');px(16,0,'#8d7bff')},
  heart:()=>{const c='#e8453c';px(12,0,c);px(14,0,c);for(let x=11;x<=15;x++)px(x,1,c);for(let x=12;x<=14;x++)px(x,2,c);px(13,3,c)},
  umbrella:()=>{const t=performance.now(),a='#8d7bff';for(let x=11;x<=16;x++)px(x,0,a);for(let x=9;x<=18;x++)px(x,1,x===12||x===15?'#f2f2f2':a);px(9,2,a);px(18,2,a);px(14,2,'#b8b8bd');px(14,3,'#b8b8bd');
   const d=Math.floor(t/110);px(7,2+d%4,'#29b3e8');px(19,3+(d+2)%4,'#29b3e8')},
  sweat:()=>{const y=6+(Math.floor(performance.now()/320)%2);px(19,y,'#29b3e8');px(19,y+1,'#29b3e8')},
  bolt:()=>{if(Math.floor(performance.now()/160)%3){const c='#e6a817';px(18,0,c);px(17,1,c);px(18,2,c);px(17,3,c)}},
  sparkler:()=>{px(18,13,'#b8b8bd');px(19,12,'#b8b8bd');if(Math.floor(performance.now()/90)%2){px(19,11,'#f2f2f2');px(18,10,'#e6a817')}else{px(19,10,'#f2f2f2')}}};
 const draw=(rows,props,earned)=>{g.clearRect(0,0,W,H);g.fillStyle='#f2f2f2';rows.forEach((row,y)=>{for(let x=0;x<row.length;x++)if(row[x]==='#')g.fillRect(x*PX,(y+TOP)*PX,PX,PX)});
  (props&&props.length?props:(earned?[earned]:[])).forEach(n=>DR[n]&&DR[n]())};
 let lineUntil=0,kinds,greeted=false,sy0=scrollY,sv=0,dir=1,u=null,x=innerWidth*.5,t0=0,airT=-1,jh=1,flip=false,phase=0,gx0=null,mx=-999,my=-999,mode='run',kind='',actEnd=0,nextAct=7000,sayEnd=0,hey=0,hopAt=0,boost=0,leapUntil=0,clicks=0,plat=null,lastPlat=null,platAt=9000,leaveAt=0,curFeet=null,vy=0,rise=null,gOn=false,gNext=0,gSaid=false,gHop=0;
 const touch=matchMedia('(hover:none)').matches;
 // today's plan for his first appearance of a visit: what he wears and does as he walks in (add ?day=fri or ?date=2026-12-25 to the link to preview, ?dino=first to replay)
 const qs=new URLSearchParams(location.search),NOW=(()=>{const d=new Date(),dt=qs.get('date'),dn=qs.get('day');
  if(dt&&/^\d{4}-\d{2}-\d{2}$/.test(dt)){const p=dt.split('-').map(Number);return new Date(p[0],p[1]-1,p[2],d.getHours())}
  if(dn){const i=['sun','mon','tue','wed','thu','fri','sat'].indexOf(dn.slice(0,3).toLowerCase());if(i>=0){const z=new Date(d);z.setDate(z.getDate()+((i-z.getDay()+7)%7));return z}}
  return d})();
 const hr=NOW.getHours(),dow=NOW.getDay(),mo=NOW.getMonth()+1,dom=NOW.getDate(),night=hr>=22||hr<6,lunch=hr===12;
 const WEEK=[{props:['nightcap','scarf'],speed:90,line:'sunday scaries?',then:'sleep'},{props:['beanie','coffee'],speed:100,line:'is it friday yet?',then:'coffee'},{props:['phones'],speed:120,line:'tuesday tunes',then:'music'},
  {props:['cap'],speed:120,line:'halfway there',then:'hop'},{props:['bowtie'],speed:170,line:'nearly',then:'fancy'},{props:['shades','party'],speed:110,line:'knock-off time',then:'dance'},{props:['bucket'],speed:95,line:'no plans, no problem',then:'beach'}];
 const DAYX=[['sleep'],['coffee'],['music'],['hop'],['fancy'],['cool','dance'],['beach']];
 const SPECIAL=mo===10&&dom===31?{props:['pumpkin'],speed:100,line:'boo',then:'boo',extra:['boo']}:mo===11&&dow===2&&dom<=7?{props:['fascinator','bowtie'],speed:130,line:"and they're racing",then:'race',extra:['race']}:
  mo===12&&dom>=24&&dom<=26?{props:['santa'],speed:100,line:'merry christmas, you',then:'carol',extra:['carol']}:mo===12&&dom===31?{props:['party','sparkler'],speed:100,line:'ten, nine, eight',then:'count',extra:['count']}:
  mo===2&&dom===14?{props:['heart'],speed:80,line:'aww',then:'love',extra:['love']}:null;
 const PLAN=SPECIAL||WEEK[dow];
 // he is plain apart from his first walk-in; props then appear only while he is doing the matching action
 const PBK={music:['phones'],dance:['party'],sleep:['nightcap'],yawn:['nightcap'],cool:['shades'],fancy:['bowtie'],coffee:['beanie','coffee'],beach:['bucket'],boo:['pumpkin'],carol:['santa'],count:['party','sparkler'],race:['fascinator','bowtie'],love:['heart'],hop:['cap']};
 const ACTS={hi:[2400,'hi.'],sleep:[3800],look:[2400],dance:[2600,'watch this'],music:[4600],yawn:[2400,'yaaawn...'],lunch:[2400,'lunch time?'],coffee:[3000,'need coffee'],cool:[2400,'too cool'],fancy:[2400,'fancy'],beach:[3200,'beach day'],boo:[2200,'boo'],carol:[2800,'la la la'],count:[2800,'ten, nine, eight'],race:[2600,"and they're racing"],love:[2400,'aww'],hop:[1800,'halfway there'],wx:[3800]};
 const acc=()=>'';
 const first=!store.get('dinoIn')||qs.get('dino')==='first';store.set('dinoIn','1');
 const introOn=document.documentElement.classList.contains('intro-pending');
 // live Melbourne weather (Open-Meteo, no key needed, refreshed every 10 minutes). He reacts to it now and then.
 // Preview a condition by adding ?wx=rain, storm, hot, sunny, cold, windy, fog, grey or snow to the link.
 let WX=null;
 const WXFAKE={rain:{c:63,t:14,w:18},storm:{c:95,t:19,w:30},hot:{c:0,t:37,w:12},sunny:{c:0,t:29,w:10},cold:{c:3,t:7,w:14},windy:{c:2,t:17,w:48},fog:{c:45,t:11,w:6},grey:{c:3,t:16,w:12},snow:{c:73,t:2,w:20}};
 const loadWx=()=>{const f=qs.get('wx');if(f&&WXFAKE[f]){WX=WXFAKE[f];return}
  try{fetch('https://api.open-meteo.com/v1/forecast?latitude=-37.8136&longitude=144.9631&current=temperature_2m,weather_code,wind_speed_10m&timezone=Australia%2FMelbourne').then(r=>r.ok?r.json():Promise.reject()).then(d=>{const c=d&&d.current;if(c&&c.temperature_2m!=null)WX={c:+c.weather_code,t:Math.round(c.temperature_2m),w:Math.round(c.wind_speed_10m||0)}}).catch(()=>{})}catch(e){}};
 loadWx();setInterval(loadWx,10*60*1000);
 const wxPlan=()=>{if(!WX)return null;const c=WX.c,tp=WX.t,w=WX.w;
  if(c>=95)return{props:['umbrella','bolt'],line:'thunder. i was not scared.'};
  if((c>=51&&c<=67)||(c>=80&&c<=82))return{props:['umbrella'],line:tp+'\u00b0 and raining. four seasons in one day.'};
  if(c>=71&&c<=77)return{props:['beanie','scarf'],line:'snow in melbourne? check the date.'};
  if(tp>=35)return{props:['shades','sweat'],line:tp+'\u00b0 in melbourne. i am melting.'};
  if(tp>=28&&c<=3)return{props:['shades'],line:tp+'\u00b0 and sunny. someone turn it down.'};
  if(tp<=9)return{props:['beanie','scarf'],line:tp+'\u00b0 in melbourne. brrr.'};
  if(w>=35)return{props:[],line:w+' km/h winds. hold onto your hat.'};
  if(c===45||c===48)return{props:['scarf'],line:'foggy out. very mysterious.'};
  if(c>=2)return{props:[],line:tp+'\u00b0 and grey. peak melbourne.'};
  return{props:c<=1&&tp>=20?['shades']:[],line:tp+'\u00b0 in melbourne. not bad at all.'}};
 let outfit=[],walk=first?{started:false,done:false}:null;
 if(home&&first)cv.style.display='none';
 greeted=first;gNext=first?(introOn?2600:1300):6000+Math.random()*7000;
 const QUIPS=['hey, nice to see you','psst. keep scrolling','just passing through','dont mind me, carry on','you have excellent taste in websites','hey, you. yes, you'];
 addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY},{passive:true});
 const say=(txt,ms,t)=>{bub.textContent=txt;bub.hidden=false;sayEnd=t+ms};
 const jump=(t,h=1,fl=false)=>{if(airT>=0)return;airT=t;jh=h;flip=fl};
 const act=(k,t,ms)=>{mode='act';kind=k;actEnd=t+ms;hopAt=t;airT=-1};
 const startAct=(k,t,line)=>{if(k==='wx'){const p=wxPlan();if(p){PBK.wx=p.props;line=p.line}else k='hi'}
  const a=ACTS[k]||[2400],ms=a[0],l=line||a[1];act(k,t,ms);if(line)lineUntil=t+1800;
  if(k==='look')say(mx>-900?(mx<x?'nice cursor':'what are you doing?'):'anyone there?',2300,t);else if(l)say(l,ms,t);
  if(k==='fancy')jump(t,1.5,true);else if(k==='boo'||k==='cool'||k==='hop'||(k==='wx'&&WX&&WX.c>=95))jump(t,1.3)};
 // clicking him gets a different reaction each time
 const reactions=[
  t=>{jump(t,1.6);say('ouch!',1300,t)},
  t=>{jump(t,1.9,true);say('wheee',1300,t)},
  t=>{boost=t+1800;say('gotta go fast',1500,t)},
  t=>{act('dead',t,2300);say('x_x',2300,t)},
  t=>{act('music',t,4200)},
  t=>{act('dance',t,2400);say('not bad, right?',2400,t)},
  t=>{act('hi',t,2000);say('hey, you.',2000,t)},
  t=>{if(WX)startAct('wx',t);else{act('hi',t,2000);say('hey!',2000,t)}}];
 cv.addEventListener('click',()=>{const t=performance.now();reactions[clicks++%reactions.length](t)});

 document.addEventListener('dino:party',()=>{const t=performance.now();if(mode==='run'&&airT<0){act('dance',t,2600);say('you are welcome',2600,t)}});
 const loop=t=>{requestAnimationFrame(loop);
  if(!t0)t0=t;const dt=Math.min(.05,(t-t0)/1000)||.016;t0=t;
  const gr=gal.getBoundingClientRect(),vw=innerWidth,vh=innerHeight;
  if(home&&walk&&!walk.started){if(t<(introOn?2300:700)){return}walk.started=true;cv.style.display='';x=-W*1.5;dir=1;u=null;mode='run';airT=-1;outfit=PLAN.props.slice()}
  if(home&&!greeted&&t>2600&&mode==='run'){greeted=true;say(night?'so sleepy...':lunch?'lunch time?':hr<10?'morning!':hr>=18?'evening.':'hi there',1800,t)}
  // on the other pages he only pops up now and then: runs across the bottom of the screen and leaves again
  if(!home&&!gOn){if(t>gNext){gOn=true;gSaid=false;dir=Math.random()<.5?1:-1;x=dir>0?-W*1.5:vw+W*.5;u=null;mode='run';airT=-1;gHop=t+900;cv.style.display='';if(walk&&!walk.started){walk.started=true;outfit=PLAN.props.slice()}}else{cv.style.display='none';bub.hidden=true;return}}
  // standing height: on the images while they are on screen, otherwise he stays in view at the edge of the screen
  const minFeet=H+90,maxFeet=vh;
  // ground: the line he is standing on if he has dropped onto one, otherwise the top of the images (or the screen edge)
  let pr=null;if(plat){pr=plat.getBoundingClientRect();if(pr.top<minFeet||pr.top>maxFeet){plat=null;pr=null}}
  const gx=plat?0:gr.left,ground=pr?pr.top:gr.top,tgt=Math.max(minFeet,Math.min(maxFeet,ground)),onStrip=!plat&&tgt===gr.top;
  if(curFeet===null)curFeet=tgt;
  if(tgt>curFeet+40){vy+=1900*dt;curFeet=Math.min(tgt,curFeet+vy*dt);if(curFeet===tgt)vy=0}
  else if(tgt<curFeet-40&&!rise){rise={from:curFeet,t:t}}
  else if(!rise){curFeet=tgt;vy=0}
  if(rise){const kk=Math.min(1,(t-rise.t)/650);curFeet=rise.from+(tgt-rise.from)*kk-Math.sin(kk*Math.PI)*PX*14;if(kk>=1){rise=null;curFeet=tgt}}
  const feet=curFeet,grounded=Math.abs(feet-tgt)<2&&!rise;
  // scroll speed and direction
  sv=sv*.85+((scrollY-sy0)/dt)*.15;sy0=scrollY;
  const centre=vw*(mobile?.5:.58),band=vw*(mobile?.34:.3),lo=W,hi=vw-W*2;
  if(plat!==lastPlat){u=x-gx;lastPlat=plat}
  if(Math.abs(sv)>40)dir=sv>0?1:-1;
  // he works his way back toward the middle of the screen (a little right on desktop) whenever he drifts out of it
  let steer=0;if(x<centre-band)steer=1;else if(x>centre+band)steer=-1;
  if(x<lo)steer=1;if(x>hi)steer=-1;
  if(!home)steer=0;
  const run=mode==='run';
  if(run&&steer)dir=steer;
  let v=run?70+Math.min(480,Math.abs(sv)*.55):0;if(t<leapUntil)v=Math.max(v,200);
  if(run&&steer)v=Math.max(v,60+Math.min(90,Math.abs(x-centre)*.35));
  if(run&&t<boost)v=Math.max(v,420);
  if(run&&walk&&walk.started&&!walk.done){v=PLAN.speed;if(home)dir=1}
  if(!home&&run)v=Math.max(150,v);
  const gxl=gx;if(u===null)u=x-gxl;
  if(walk&&walk.started&&!walk.done)u=x-gxl;
  if(run){u+=dir*v*dt;phase+=v*dt/26}
  x=u+gxl;
  if(home&&!(walk&&!walk.done)&&(x<lo-W||x>hi+W)){x=Math.max(lo,Math.min(hi,x));u=x-gxl}
  if(mode==='act'&&kind!=='dead'&&Math.abs(sv)>160&&airT<0){mode='run';bub.hidden=true;sayEnd=0;nextAct=t+9000}
  // jump over design obstacles on the strip: take off just before one, leap clear across it, land on the far side
  if(run&&onStrip&&grounded&&airT<0){const front=dir>0?x+W*.65:x+W*.35,span=W*.45;
   for(const o of obstacles){const r=o.getBoundingClientRect(),d=dir>0?r.left-front:front-r.right;
    if(d<26&&d>-(r.width+span)){jump(t,1.15);leapUntil=t+AIR;break}}}
  // he sometimes drops down onto the thin lines of the info table and walks along them, then hops back up to the images
  if(home&&run&&!plat&&grounded&&airT<0&&!rise&&t>platAt&&Math.abs(sv)<40){
   const cand=[...document.querySelectorAll('.info-section')].find(el=>{const q=el.getBoundingClientRect().top;return q>feet+70&&q<maxFeet-10});
   if(cand){plat=cand;leaveAt=t+9000+Math.random()*6000;platAt=t+14000;jump(t,.7);say('down we go',1500,t)}else platAt=t+3000}
  if(plat&&t>leaveAt&&run&&airT<0&&!rise&&gr.top>minFeet&&gr.top<maxFeet){plat=null;platAt=t+16000+Math.random()*9000;say('and up',1100,t)}
  if(plat&&pr){if(x<pr.left+8){x=pr.left+8;u=x-gx;dir=1}if(x>pr.right-W-8){x=pr.right-W-8;u=x-gx;dir=-1}}
  // guest visits on the other pages
  if(!home&&gOn&&run){
   if(!gSaid&&Math.abs(x+W/2-vw/2)<70){gSaid=true;if(walk&&!walk.done){walk.done=true;startAct(PLAN.then,t,PLAN.line)}else say(QUIPS[Math.floor(Math.random()*QUIPS.length)],1700,t)}
   if(airT<0&&t>gHop){jump(t,.9);gHop=t+1300+Math.random()*1600}
   if((dir>0&&x>vw+W)||(dir<0&&x<-W*2.5)){gOn=false;gNext=t+26000+Math.random()*22000;cv.style.display='none';bub.hidden=true;return}}
  if(home&&run&&walk&&walk.started&&!walk.done&&x>=vw*(mobile?.25:.3)){walk.done=true;startAct(PLAN.then,t,PLAN.line)}
  // the user gets close: hop and say hey
  if(run&&airT<0&&t>hey&&Math.abs(mx-(x+W/2))<70&&my>feet-H-20&&my<feet+20){jump(t,1.3);say('hey!',1200,t);hey=t+5000}
  // every so often he stops and does something
  if(run&&airT<0&&t>nextAct&&Math.abs(sv)<40&&!(walk&&!walk.done)){kinds=['hi','sleep','look','dance','music'].concat(DAYX[dow],SPECIAL?SPECIAL.extra:[]);if(WX)kinds.push('wx','wx');if(night)kinds.push('yawn','yawn','sleep');if(lunch)kinds.push('lunch','lunch');
   startAct(kinds[Math.floor(Math.random()*kinds.length)],t)}
  if(mode==='act'){
   if(kind==='sleep'&&t>lineUntil){bub.textContent=['z','zz','zzz'][Math.floor((t-actEnd+3800)/450)%3];bub.hidden=false;sayEnd=t+200}
   if((kind==='music'||kind==='carol')&&t>lineUntil){bub.textContent=['♪','♫','♪ ♫'][Math.floor(t/420)%3];bub.hidden=false;sayEnd=t+200}
   if((kind==='dance'||kind==='race')&&airT<0&&t>hopAt){jump(t,.8);hopAt=t+(kind==='race'?480:620)}
   if(t>actEnd&&airT<0){mode='run';nextAct=t+9000+Math.random()*8000;if(outfit.length)outfit=[]}}
  if(airT>=0&&t-airT>=AIR)airT=-1;
  const k=airT>=0?(t-airT)/AIR:0,up=airT>=0?Math.sin(k*Math.PI)*PX*13*jh:(mode==='act'&&(kind==='music'||kind==='carol')&&Math.floor(t/210)%2?PX:0);
  const rot=airT>=0&&flip?-dir*360*k:(mode==='act'&&kind==='dead'?dir*88:0);
  const pr2=outfit.slice();if(mode==='act'&&PBK[kind])PBK[kind].forEach(n=>{if(!pr2.includes(n))pr2.push(n)});
  draw(R.concat(airT>=0||mode==='act'?L.j:(Math.floor(phase)%2?L.a:L.b)),pr2,acc());
  if(sayEnd&&t>sayEnd){bub.hidden=true;sayEnd=0}
  const top=feet-H-up;
  cv.style.transform=`translate(${x.toFixed(1)}px,${top.toFixed(1)}px) scaleX(${dir}) rotate(${(dir*rot).toFixed(1)}deg)`;
  // speech bubble sits right above his head
  if(!bub.hidden){const bw=bub.offsetWidth,hx=dir>0?x+W*.72:x+W*.28,bx=Math.max(6,Math.min(vw-bw-6,hx-bw/2)),by=Math.max(92,top-bub.offsetHeight-2+(mode==='act'&&kind==='dead'?H*.4:0));
   bub.style.transform=`translate(${bx.toFixed(1)}px,${by.toFixed(1)}px)`}};
 requestAnimationFrame(loop)})();
document.documentElement.classList.remove('anim-pending');
