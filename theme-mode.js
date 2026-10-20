'use strict';
(()=>{
 const key='party-guide-theme',root=document.documentElement;
 let mode='dark';try{if(localStorage.getItem(key)==='light')mode='light';}catch{}
 const apply=(next,persist=false)=>{
  mode=next==='light'?'light':'dark';root.dataset.theme=mode;
  const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=mode==='light'?'#ffffff':'#07101d';
  for(const button of document.querySelectorAll('[data-theme-choice]'))button.setAttribute('aria-pressed',String(button.dataset.themeChoice===mode));
  if(persist)try{localStorage.setItem(key,mode);}catch{}
 };
 apply(mode);
 const bind=()=>{
  apply(mode);
  for(const button of document.querySelectorAll('[data-theme-choice]'))button.addEventListener('click',()=>apply(button.dataset.themeChoice,true));
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind,{once:true});else bind();
})();
