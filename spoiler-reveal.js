'use strict';
async function playSpoilerReveal(button,face,alignment,reveal){
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||typeof face.animate!=='function'){reveal();return;}
 const dark=alignment==='shadow',animations=[];let disclosed=false;
 button.classList.add('spoiler-edge-reveal',dark?'spoiler-edge-shadow':'spoiler-edge-light');
 async function animate(frames,options){const a=face.animate(frames,options);animations.push(a);try{await a.finished;}catch{}}
 try{
  await animate([{transform:'perspective(900px) rotateY(0deg)'},{transform:'perspective(900px) rotateY(90deg)'}],{duration:380,easing:'cubic-bezier(.4,0,.8,.5)',fill:'forwards'});
  reveal();disclosed=true;
  await animate([{transform:'perspective(900px) rotateY(-90deg)'},{transform:'perspective(900px) rotateY(0deg)'}],{duration:550,easing:'cubic-bezier(.15,.7,.2,1)',fill:'forwards'});
  const glow=button.animate([{boxShadow:dark?'0 0 0 1px #b5a0cd80,0 0 18px #9476b82e':'0 0 0 1px #dfc99190,0 0 18px #d7bb7833'},{boxShadow:'0 0 0 1px transparent,0 0 0 transparent'}],{duration:1200,easing:'ease-out'});animations.push(glow);try{await glow.finished;}catch{}
 }finally{if(!disclosed)reveal();animations.forEach(a=>a.cancel());button.classList.remove('spoiler-edge-reveal','spoiler-edge-shadow','spoiler-edge-light');}
}
