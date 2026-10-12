"use strict";

/* CSS supplies soft light and blur. JavaScript only handles interactions and reveals. */
(() => {
 const root=document.documentElement;
 const panel=document.querySelector('.primary-party');
 const collection=document.querySelector('#characters');
 const dock=document.querySelector('#formation-dock');
 if(!panel||!collection||!dock) return;

 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const finePointer=window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 761px)');
 let motion=!reduced.matches,width=innerWidth,height=innerHeight;
 let activeCard=null,pointer=null,tiltFrame=0,scrollFrame=0;
 let currentParty=null,partyVisible=false,pendingReveal=false;
 const timers=new Set(),animations=new Set();
 const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));
 const canAnimate=()=>motion&&!document.hidden;
 const later=(callback,delay)=>{const id=setTimeout(()=>{timers.delete(id);callback();},delay);timers.add(id);return id;};

 function clearSummons(){
  for(const timer of timers) clearTimeout(timer);timers.clear();
  for(const animation of animations) animation.cancel();animations.clear();
  for(const slot of document.querySelectorAll('.is-summoning')) slot.classList.remove('is-summoning');
  panel.classList.remove('is-casting');
  document.querySelector('#party-zone')?.classList.remove('is-activating');
 }
 function summonSlots(board){
  if(!canAnimate()) return;
  for(const slot of board.querySelectorAll('.slot.filled')){
   slot.classList.remove('is-summoning');void slot.offsetWidth;slot.classList.add('is-summoning');
   const index=Number(slot.style.getPropertyValue('--slot-index'))||0;
   later(()=>slot.classList.remove('is-summoning'),1100+index*120);
  }
 }
 function summonParty(){
  pendingReveal=false;
  if(!canAnimate()||!currentParty) return;
  panel.classList.remove('is-casting');void panel.offsetWidth;panel.classList.add('is-casting');
  summonSlots(panel);later(()=>panel.classList.remove('is-casting'),1400);
  const zone=document.querySelector('#party-zone');
  if(zone&&!zone.hidden){
   later(()=>{if(canAnimate()){zone.classList.remove('is-activating');void zone.offsetWidth;zone.classList.add('is-activating');}},450);
   later(()=>zone.classList.remove('is-activating'),1500);
  }
 }
 function dealCards(){
  if(!canAnimate()) return;
  for(const [index,card] of [...collection.querySelectorAll('.character')].entries()){
   if(!card.animate) continue;
   const animation=(card.closest('.character-card-shell')||card).animate([
    {opacity:0,filter:'blur(6px)',transform:'translateY(18px) perspective(1000px) rotateY(-8deg) scale(.98)'},
    {offset:.6,opacity:1,filter:'blur(1px)',transform:'translateY(4px) perspective(1000px) rotateY(-2deg) scale(1)'},
    {opacity:1,filter:'blur(0)',transform:'translateY(0) perspective(1000px) rotateY(0deg) scale(1)'}
   ],{duration:650,delay:index*45,easing:'cubic-bezier(.16,.76,.26,1)',fill:'backwards'});
   animations.add(animation);animation.onfinish=()=>animations.delete(animation);
  }
 }

 function resetTilt(){
  if(tiltFrame) cancelAnimationFrame(tiltFrame);tiltFrame=0;
  if(activeCard) for(const property of ['--tilt-x','--tilt-y','--slot-x','--slot-y','--glare-x','--glare-y']) activeCard.style.removeProperty(property);
  activeCard=null;pointer=null;
 }
 function paintTilt(){
  tiltFrame=0;
  if(!canAnimate()||!finePointer.matches||!activeCard?.isConnected||!pointer){resetTilt();return;}
  const bounds=activeCard.getBoundingClientRect();if(!bounds.width||!bounds.height) return;
  const x=clamp((pointer.x-bounds.left)/bounds.width,0,1),y=clamp((pointer.y-bounds.top)/bounds.height,0,1);
  const isSlot=activeCard.classList.contains('slot');
  activeCard.style.setProperty(isSlot?'--slot-x':'--tilt-x',((.5-y)*(isSlot?6:14)).toFixed(2)+'deg');
  activeCard.style.setProperty(isSlot?'--slot-y':'--tilt-y',((x-.5)*(isSlot?9:22)).toFixed(2)+'deg');
  activeCard.style.setProperty('--glare-x',(x*100).toFixed(1)+'%');activeCard.style.setProperty('--glare-y',(y*100).toFixed(1)+'%');
 }
 document.addEventListener('pointermove',event=>{
  if(!canAnimate()||!finePointer.matches||event.pointerType!=='mouse'){resetTilt();return;}
  root.style.setProperty('--scene-x',((.5-event.clientX/width)*8).toFixed(1)+'px');
  root.style.setProperty('--scene-y',((.5-event.clientY/height)*5).toFixed(1)+'px');
  const card=event.target.closest?.('.character,.slot.filled');
  if(!card){resetTilt();return;}
  if(card!==activeCard){resetTilt();activeCard=card;}
  pointer={x:event.clientX,y:event.clientY};if(!tiltFrame) tiltFrame=requestAnimationFrame(paintTilt);
 },{passive:true});
 document.addEventListener('pointerout',event=>{if(activeCard&&!activeCard.contains(event.relatedTarget)) resetTilt();},{passive:true});
 document.addEventListener('pointercancel',resetTilt);
 document.addEventListener('focusin',resetTilt);
 window.addEventListener('blur',resetTilt);
 finePointer.addEventListener('change',resetTilt);

 function updateDock(){
  dock.hidden=!currentParty||partyVisible;
  if(!currentParty) return;
  const leader=currentParty.party.find(character=>character.id===currentParty.id)||currentParty.party[0];if(!leader) return;
  const portrait=document.querySelector('#dock-portrait');portrait.hidden=!leader.image;
  if(leader.image) portrait.src=leader.image;else portrait.removeAttribute('src');
  document.querySelector('#dock-title').textContent=!currentParty.zone||leader.part>=2000?getCharacterDisplayName(leader):getCharacterDisplayName(leader)+' · '+currentParty.party.length+'인 조합';
  document.querySelector('#dock-zone').textContent=currentParty.zone?'추천 : '+currentParty.zone.name:'등록된 파티 프리셋이 없습니다.';
  dock.setAttribute('aria-label',getCharacterDisplayName(leader)+' 추천 파티로 이동');
 }
 function measureParty(){
  const rect=panel.getBoundingClientRect();partyVisible=rect.top<height*.72&&rect.bottom>145;
  updateDock();if(partyVisible&&pendingReveal) summonParty();
 }
 function updateScroll(){
  scrollFrame=0;
  const total=Math.max(1,root.scrollHeight-height);
  root.style.setProperty('--scroll-progress',(clamp(scrollY/total,0,1)*100).toFixed(2)+'%');measureParty();
 }
 window.addEventListener('scroll',()=>{if(!scrollFrame) scrollFrame=requestAnimationFrame(updateScroll);},{passive:true});
 window.addEventListener('resize',()=>{width=innerWidth;height=innerHeight;updateScroll();},{passive:true});
 document.querySelector('#formation-party').addEventListener('click',()=>{
  pendingReveal=motion;panel.scrollIntoView({behavior:motion?'smooth':'instant',block:'start'});measureParty();
 });
 reduced.addEventListener('change',()=>{
  motion=!reduced.matches;resetTilt();
  if(!motion){clearSummons();pendingReveal=false;root.style.removeProperty('--scene-x');root.style.removeProperty('--scene-y');}
 });

 document.addEventListener('partycompass:selection',event=>{
  clearSummons();resetTilt();pendingReveal=false;currentParty=event.detail;
  panel.classList.add('has-party');measureParty();
  if(partyVisible) summonParty();else pendingReveal=motion;
 });
 document.addEventListener('partycompass:reset',()=>{
  clearSummons();resetTilt();currentParty=null;pendingReveal=false;panel.classList.remove('has-party');updateDock();
  const status=document.querySelector('#fx-status');if(status) status.textContent='파티를 초기화했습니다.';
 });
 document.addEventListener('partycompass:grid',event=>{resetTilt();if(event.detail.animate) dealCards();});
 document.addEventListener('visibilitychange',()=>{
  root.dataset.pageHidden=String(document.hidden);
  if(document.hidden){
   clearSummons();resetTilt();if(scrollFrame) cancelAnimationFrame(scrollFrame);scrollFrame=0;
  }else{measureParty();}
 });
 if('IntersectionObserver' in window){
  const entrance=new IntersectionObserver(entries=>{
   if(entries.some(entry=>entry.isIntersecting)){dealCards();entrance.disconnect();}
  },{threshold:.05});entrance.observe(collection);
 }
 root.dataset.pageHidden=String(document.hidden);updateScroll();
})();
