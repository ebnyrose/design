// extras: light mode, page-load intro, hover image preview and smooth opening on the Work page, project lightbox, contact confetti
(()=>{
 const root=document.documentElement,reduceM=matchMedia('(prefers-reduced-motion: reduce)').matches,finePointer=matchMedia('(hover:hover) and (min-width:801px)').matches;
 const svgOf=i=>PROJECTS[i]?imgTag(PROJECTS[i].th,PROJECTS[i].n):'';

 // ---------- light mode ----------
 const bar=document.querySelector('.topbar-time');
 if(bar){const b=document.createElement('button');b.type='button';b.className='theme-toggle';
  const sync=()=>{const light=root.classList.contains('light');b.setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode');b.setAttribute('aria-pressed',light);b.innerHTML=`<span class="tt-dot" aria-hidden="true"></span><span class="tt-l">${light?'Dark':'Light'}</span>`};
  b.addEventListener('click',()=>{root.classList.toggle('light');try{localStorage.setItem('theme',root.classList.contains('light')?'light':'dark')}catch(e){}sync()});
  sync();bar.append(b)}

 // ---------- page-load intro (first page of a visit only) ----------
 if(root.classList.contains('intro-pending')){
  try{sessionStorage.setItem('intro','1')}catch(e){}
  const ov=document.createElement('div');ov.className='intro';ov.setAttribute('aria-hidden','true');
  const word='Ebony Rose';
  ov.innerHTML=`<div class="intro-word">${[...word].map((c,i)=>`<span style="--i:${i}">${c===' '?'&nbsp;':c}</span>`).join('')}</div><div class="intro-line"><i></i></div>`;
  document.body.append(ov);root.classList.remove('intro-pending');
  const out=()=>{ov.animate([{transform:'none'},{transform:'translateY(-100%)'}],{duration:700,easing:'cubic-bezier(.7,0,.2,1)',fill:'forwards'}).onfinish=()=>ov.remove()};
  setTimeout(out,1500);
 }

 // ---------- Work page: hover image preview that follows the cursor, and a smooth opening into the project ----------
 const list=document.querySelector('.work-list');
 const nameFor=el=>{document.querySelectorAll('[style*="view-transition-name"]').forEach(n=>n.style.viewTransitionName='');if(el)el.style.viewTransitionName='project-hero'};
 if(list){
  document.addEventListener('click',e=>{const a=e.target.closest('.work-row,.wtile');if(!a||!a.getAttribute('href')?.startsWith('project.html'))return;
   const pv=document.querySelector('.pv.on');nameFor(a.classList.contains('wtile')?a:(pv||null))},true);
  if(finePointer&&!reduceM){
   const pv=document.createElement('div');pv.className='pv';pv.setAttribute('aria-hidden','true');document.body.append(pv);
   let tx=0,ty=0,cx=0,cy=0,shown=false,cur=-1;
   const idx=el=>+(new URL(el.href,location.href).searchParams.get('p'))||0;
   list.addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY});
   list.addEventListener('pointerover',e=>{const row=e.target.closest('.work-row');if(!row)return;const i=idx(row);
    if(i!==cur){cur=i;pv.innerHTML=svgOf(i)}
    if(!shown){cx=tx=e.clientX;cy=ty=e.clientY;shown=true}pv.classList.add('on')});
   list.addEventListener('pointerleave',()=>{shown=false;pv.classList.remove('on')});
   list.addEventListener('pointerout',e=>{if(!e.relatedTarget||!e.relatedTarget.closest?.('.work-row')){pv.classList.remove('on');shown=false}});
   const tick=()=>{cx+=(tx-cx)*.16;cy+=(ty-cy)*.16;pv.style.transform=`translate(${(cx+28).toFixed(1)}px,${(cy-pv.offsetHeight/2).toFixed(1)}px) rotate(${((tx-cx)*.08).toFixed(2)}deg)`;requestAnimationFrame(tick)};
   requestAnimationFrame(tick);
  }
 }

 // ---------- project lightbox ----------
 const page=document.querySelector('.project-page');
 if(page){
  
  let imgs=[],at=0,box=null,startX=0;
  const collect=()=>imgs=[...page.querySelectorAll('.pj-hero,.pj-gallery .wtile')];
  const show=n=>{at=(n+imgs.length)%imgs.length;const t=imgs[at];const im=t.querySelector('img'),vd=t.querySelector('video');box.querySelector('.lb-img').innerHTML=vd?`<video src="${vd.getAttribute('src')}" poster="${vd.getAttribute('poster')}" muted loop playsinline autoplay aria-label="${vd.getAttribute('aria-label')}"></video>`:im?`<img src="${t.getAttribute('href')&&/\.(jpe?g|gif|png|webp)$/i.test(t.getAttribute('href'))?t.getAttribute('href'):im.src}" alt="${im.alt}">`:(t.querySelector('svg')?.outerHTML||'');box.querySelector('.lb-count').textContent=`${at+1} / ${imgs.length}`};
  const close=()=>{if(!box)return;const b=box;box=null;b.animate([{opacity:1},{opacity:0}],{duration:200,fill:'forwards'}).onfinish=()=>b.remove();document.removeEventListener('keydown',keys)};
  const keys=e=>{if(e.key==='Escape')close();else if(e.key==='ArrowRight')show(at+1);else if(e.key==='ArrowLeft')show(at-1)};
  const open=n=>{if(box)return;collect();box=document.createElement('div');box.className='lb';box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');box.setAttribute('aria-label','Image viewer');
   box.innerHTML='<button class="lb-x" type="button" aria-label="Close">Close</button><button class="lb-prev" type="button" aria-label="Previous image">&larr;</button><div class="lb-img"></div><button class="lb-next" type="button" aria-label="Next image">&rarr;</button><p class="lb-count"></p>';
   document.body.append(box);show(n);
   if(!reduceM)box.animate([{opacity:0},{opacity:1}],{duration:220});
   box.querySelector('.lb-img').animate?.(reduceM?[]:[{transform:'scale(.92)',opacity:0},{transform:'none',opacity:1}],{duration:320,easing:'cubic-bezier(.2,.8,.2,1)'});
   box.addEventListener('click',e=>{if(e.target.closest('.lb-x')||e.target===box)close();else if(e.target.closest('.lb-prev'))show(at-1);else if(e.target.closest('.lb-next')||e.target.closest('.lb-img'))show(at+1)});
   box.addEventListener('touchstart',e=>startX=e.touches[0].clientX,{passive:true});
   box.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>40)show(at+(dx<0?1:-1))});
   document.addEventListener('keydown',keys);box.querySelector('.lb-x').focus()};
  page.addEventListener('click',e=>{const t=e.target.closest('.pj-hero,.pj-gallery .wtile');if(!t)return;e.preventDefault();collect();open(imgs.indexOf(t))});
 }

 // ---------- confetti, only when a contact item is clicked ----------
 document.addEventListener('click',ev=>{if(ev.target.closest('#contact-info .info-row'))confetti()});
 function confetti(){
  document.dispatchEvent(new Event('dino:party'));
  if(reduceM)return;
  const layer=document.createElement('div');layer.className='confetti';layer.setAttribute('aria-hidden','true');document.body.append(layer);
  const cols=['#e8453c','#e6a817','#f08fc0','#6b8f5e','#c9d77a','#8d7bff'];
  const shapes=[c=>`<svg viewBox="0 0 24 24"><path d="M12 1 23 12 12 23 1 12Z" fill="${c}"/></svg>`,c=>`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="${c}"/></svg>`,c=>`<svg viewBox="0 0 24 24"><path d="M12 1l3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" fill="${c}"/></svg>`];
  for(let i=0;i<70;i++){const d=document.createElement('i');d.innerHTML=shapes[i%3](cols[i%cols.length]);const s=16+Math.random()*26;
   d.style.cssText=`left:${Math.random()*100}vw;width:${s}px;height:${s}px;top:-${60+Math.random()*320}px;opacity:0`;layer.append(d);
   const x=(Math.random()-.5)*200,r=(Math.random()-.5)*720;
   d.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:`translate(${x}px,${innerHeight+420}px) rotate(${r}deg)`,opacity:1,offset:.85},{transform:`translate(${x}px,${innerHeight+420}px) rotate(${r}deg)`,opacity:0}],{duration:1600+Math.random()*1500,delay:Math.random()*500,easing:'cubic-bezier(.3,.3,.65,.95)',fill:'forwards'})}
  setTimeout(()=>layer.remove(),5200)}
})();
