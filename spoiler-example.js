'use strict';
(()=>{
 const toggle=document.querySelector('#spoiler-example-toggle'),panel=document.querySelector('#spoiler-example'),card=document.querySelector('#moke-example-card'),face=card.querySelector('.character-face'),name=card.querySelector('.card-name'),hint=card.querySelector('.spoiler-reveal-hint'),caption=document.querySelector('#spoiler-example-caption'),reset=document.querySelector('#spoiler-example-reset'),filter=document.querySelector('#spoiler-filter');let concealed=true,busy=false;
 function syncExampleAvailability(){toggle.hidden=!filter.checked;if(!filter.checked){panel.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.textContent='스포일러 카드 예시 보기';}}
 function display(hidden){concealed=hidden;card.classList.toggle('spoiler-hidden',hidden);name.textContent=hidden?'▓▒░ ▒▓░':'모케';name.classList.toggle('glitch-redacted',hidden);if(hidden)name.setAttribute('aria-hidden','true');else name.removeAttribute('aria-hidden');hint.hidden=!hidden;card.setAttribute('aria-label',hidden?'가려진 모케 예시 카드 · 눌러서 공개':'모케 · 공개된 예시 카드');caption.textContent=hidden?'적용 중: 카드를 누르면 정체가 공개됩니다.':filter.checked?'카드가 공개되었습니다.':'미적용: 캐릭터 이미지와 이름이 바로 표시됩니다.';reset.hidden=hidden||!filter.checked;}
 toggle.addEventListener('click',()=>{panel.hidden=!panel.hidden;toggle.setAttribute('aria-expanded',String(!panel.hidden));toggle.textContent=panel.hidden?'스포일러 카드 예시 보기':'예시 닫기';if(!panel.hidden&&!busy)display(filter.checked);});
 card.addEventListener('click',async()=>{if(!concealed||busy)return;busy=true;card.classList.add('spoiler-flipping');try{await playSpoilerReveal(card,face,'light',()=>display(false));}finally{card.classList.remove('spoiler-flipping');busy=false;if(!filter.checked)display(false);}});
 reset.addEventListener('click',()=>{if(!busy)display(true);});filter.addEventListener('change',()=>{syncExampleAvailability();if(!busy)display(filter.checked);});
 syncExampleAvailability();display(filter.checked);
})();
