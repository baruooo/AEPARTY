'use strict';
(()=>{
 const tabs=[...document.querySelectorAll('[data-party-view]')];if(!tabs.length)return;
 const panes={formation:document.querySelector('#party-formation-pane'),support:document.querySelector('#party-support-pane')};
 let active='formation';
 const show=(next,focus=false)=>{
  active=next==='support'?'support':'formation';
  for(const tab of tabs){const selected=tab.dataset.partyView===active;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;if(selected&&focus)tab.focus();}
  for(const [name,pane] of Object.entries(panes))pane.hidden=name!==active;
 };
 tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>show(tab.dataset.partyView));
  tab.addEventListener('keydown',event=>{
   if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
   event.preventDefault();const target=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;show(tabs[target].dataset.partyView,true);
  });
 });
 document.addEventListener('partycompass:reset',()=>show('formation'));
 show('formation');
})();
