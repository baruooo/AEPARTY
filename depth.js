'use strict';

// Decorate the card face while keeping the button's hit area still.
(() => {
 const collection=document.querySelector('#characters');
 if(!collection) return;
 const motion=window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 761px) and (prefers-reduced-motion: no-preference)');
 const properties=['--tilt-x','--tilt-y','--glare-x','--glare-y'];
 let activeCard=null,pointer=null,frame=0;

 function reset(){
  if(frame) cancelAnimationFrame(frame);
  frame=0;
  if(activeCard) for(const property of properties) activeCard.style.removeProperty(property);
  activeCard=null;pointer=null;
 }
 function paint(){
  frame=0;
  if(!motion.matches||!activeCard?.isConnected||!pointer){reset();return;}
  const bounds=activeCard.getBoundingClientRect();
  if(!bounds.width||!bounds.height){reset();return;}
  const x=Math.max(0,Math.min(1,(pointer.x-bounds.left)/bounds.width));
  const y=Math.max(0,Math.min(1,(pointer.y-bounds.top)/bounds.height));
  activeCard.style.setProperty('--tilt-x',((.5-y)*7).toFixed(2)+'deg');
  activeCard.style.setProperty('--tilt-y',((x-.5)*9).toFixed(2)+'deg');
  activeCard.style.setProperty('--glare-x',(x*100).toFixed(1)+'%');
  activeCard.style.setProperty('--glare-y',(y*100).toFixed(1)+'%');
 }
 collection.addEventListener('pointermove',event=>{
  if(!motion.matches||event.pointerType!=='mouse'){reset();return;}
  const card=event.target.closest('.character');
  if(!card||!collection.contains(card)){reset();return;}
  if(activeCard!==card){reset();activeCard=card;}
  pointer={x:event.clientX,y:event.clientY};
  if(!frame) frame=requestAnimationFrame(paint);
 },{passive:true});
 collection.addEventListener('pointerleave',reset);
 collection.addEventListener('pointercancel',reset);
 collection.addEventListener('focusout',reset);
 // Selection and tab changes can replace the cards while the mouse is still.
 document.addEventListener('click',reset);
 document.addEventListener('visibilitychange',()=>{if(document.hidden) reset();});
 window.addEventListener('blur',reset);
 motion.addEventListener('change',reset);
})();
