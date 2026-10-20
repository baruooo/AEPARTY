'use strict';
(()=>{
 const grid=document.querySelector('#buddy-grid'),search=document.querySelector('#buddy-search');
 const dialog=document.querySelector('#buddy-info-dialog'),dialogBody=document.querySelector('#buddy-dialog-body');
 const dialogName=document.querySelector('#buddy-dialog-title'),dialogStyle=document.querySelector('#buddy-dialog-style'),dialogImage=document.querySelector('#buddy-dialog-image');
 const filterPanel=document.querySelector('#buddy-filter-panel'),filterToggle=document.querySelector('#buddy-filter-toggle');
 const filterInputs=[...filterPanel.querySelectorAll('input[name]')];
 let lastQuery=null;
 const selectedTypes=new Map();
 const revealedBuddyNames=new Set();
 const displayName=buddy=>buddy.trueName&&revealedBuddyNames.has(buddy.id)?buddy.trueName:buddy.name;
 let dialogOpener=null,backdropPressed=false;
 const normalize=value=>value.replace(/\s/g,'').toLowerCase();
 const make=(tag,className,text)=>{
  const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node;
 };
 // Keep the original Korean wording while decorating known game terms.
 const buddyZones={'각음진':1,'굉타진':2,'성해진':3,'수천진':4,'순돌진':5,'쌍격진 - 참돌':6,'쌍격진 - 참마':7,'열화진':8,'월광진':9,'지열진':10,'초뢰진':11,'풍왕진':12,'환마진':13,'황참진':14,'휘정진':15,'견수진':17,'섬격진':18};
 const buddyElements={'그림자':'shade','결정':'crystal','번개':'thunder','바람':'wind','불':'fire','물':'water','땅':'earth','무':'none'};
 const buddyTermPattern=new RegExp('(극\\s+)?('+Object.keys(buddyZones).sort((a,b)=>b.length-a.length).join('|')+')|그림자|결정|번개|바람|(?<![가-힣])[불물땅무](?=\\s*[,、]|\\s*속성|\\s+마법|\\s+저항|\\s+대미지)','g');
 const decorateBuddyText=(node,value)=>{
  let cursor=0;
  for(const match of value.matchAll(buddyTermPattern)){
   if(match.index>cursor)node.append(document.createTextNode(value.slice(cursor,match.index)));
   const zone=match[2],term=make('span',zone?'buddy-zone-term':'buddy-element-term buddy-element-'+buddyElements[match[0]]);
   if(zone){const icon=make('img','buddy-term-icon');icon.src='assets/zones/zone-'+buddyZones[zone]+'.png';icon.alt='';icon.setAttribute('aria-hidden','true');term.append(icon);}
   term.append(make('span','',match[0]));node.append(term);cursor=match.index+match[0].length;
  }
  if(cursor<value.length)node.append(document.createTextNode(value.slice(cursor)));
  return node;
 };
 const effectList=effects=>{
  const list=make('ul','buddy-detail-effects');for(const effect of effects)list.append(decorateBuddyText(make('li'),effect));return list;
 };
 const setupNameSticker=(buddy,heading,onReveal)=>{
  if(!buddy.trueName||revealedBuddyNames.has(buddy.id))return;
  heading.classList.add('has-buddy-sticker');
  const sticker=make('button','identity-sticker buddy-name-sticker'),mask=make('span','identity-sticker-mask',buddy.name);
  sticker.type='button';sticker.setAttribute('aria-label',buddy.name+' · 이름표 벗기기');sticker.append(mask);heading.replaceChildren(sticker);
  sticker.addEventListener('click',async event=>{
   event.preventDefault();event.stopPropagation();if(sticker.disabled||revealedBuddyNames.has(buddy.id))return;sticker.disabled=true;
   const underneath=make('span','identity-underneath',buddy.trueName);sticker.prepend(underneath);
   if(!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches&&typeof mask.animate==='function'){
    sticker.classList.add('is-peeling');
    try{await mask.animate([{clipPath:'polygon(0 0,100% 0,100% 100%,0 100%)',transform:'rotate(0deg)',opacity:1},{clipPath:'polygon(0 0,65% 0,100% 60%,100% 100%,0 100%)',transform:'rotate(-3deg)',opacity:1,offset:.35},{clipPath:'polygon(0 60%,0 60%,30% 100%,0 100%)',transform:'translate(-18px,14px) rotate(-12deg)',opacity:0}],{duration:650,easing:'cubic-bezier(.3,.1,.2,1)',fill:'forwards'}).finished;}catch{}
   }
   revealedBuddyNames.add(buddy.id);heading.classList.remove('has-buddy-sticker');onReveal();
   if(heading.isConnected){heading.tabIndex=-1;heading.focus({preventScroll:true});}
   document.querySelector('#fx-status').textContent=buddy.trueName+' 공개됨';
  });
 };
 const obtainPath=buddy=>{
  if(buddy.acquisitionPath){
   const section=make('div','buddy-obtain buddy-story-obtain');section.setAttribute('aria-label','획득 경로: '+buddy.acquisitionPath);
   section.append(make('span','buddy-obtain-label','획득 경로'),make('p','buddy-story-path',buddy.acquisitionPath));return section;
  }
  if(buddy.acquisition!=='dream'||!buddy.obtain)return null;
  const source=buddy.obtain,section=make('div','buddy-obtain');section.setAttribute('aria-label','획득 경로: '+source.name+' · '+source.style);
  section.append(make('span','buddy-obtain-label','획득 경로'));
  const row=make('div','buddy-obtain-row'),avatar=make('span','buddy-obtain-avatar'),portrait=make('img');
  portrait.src=source.image;portrait.alt='';portrait.loading='lazy';portrait.decoding='async';
  const crop=source.faceCrop;portrait.style.width=(crop.imageWidth/crop.size*100)+'%';portrait.style.left=(-crop.x/crop.size*100)+'%';portrait.style.top=(-crop.y/crop.size*100)+'%';
  avatar.append(portrait);avatar.title=source.name+' · '+source.style;
  const copy=make('span','buddy-obtain-copy');copy.append(make('strong','',source.name),make('small','',source.style));row.append(avatar,copy);section.append(row);return section;
 };
 const conditionFallbacks=[{name:'류제',style:'노멀 스타일 · 벌룡 공주',image:'assets/2024/wryz.webp',faceCrop:{x:825,y:265,size:155,imageWidth:1368}},{name:'애쉬티어',style:'노멀 스타일',image:'assets/stellar/ashtear.webp',faceCrop:{x:850,y:150,size:145,imageWidth:1488}}];
 const decorateBuddyCondition=(tag,value,buddy)=>{
  const node=make(tag),sources=[buddy?.obtain,...(window.partyGuideBuddies||[]).map(item=>item.obtain),...conditionFallbacks].filter(Boolean);
  const names=new Set(),portraits=sources.filter(source=>{
   if(!value.includes(source.name)||names.has(source.name))return false;
   names.add(source.name);return true;
  });
  if(!portraits.length)return decorateBuddyText(node,value);
  node.className='buddy-character-condition';
  for(const source of portraits){
   const avatar=make('span','buddy-condition-avatar'),portrait=make('img');avatar.title=source.name+' · '+source.style;
   portrait.src=source.image;portrait.alt='';portrait.decoding='async';portrait.setAttribute('aria-hidden','true');
   const crop=source.faceCrop;portrait.style.width=(crop.imageWidth/crop.size*100)+'%';portrait.style.left=(-crop.x/crop.size*100)+'%';portrait.style.top=(-crop.y/crop.size*100)+'%';
   avatar.append(portrait);node.append(avatar);
  }
  node.append(decorateBuddyText(make('span','buddy-condition-copy'),value));return node;
 };
 const addSkill=(label,skill,chargeLabel,buddy)=>{
  const section=make('section','buddy-detail-section');
  section.append(make('h3','buddy-section-title',label));
  if(!skill){section.append(make('p','buddy-detail-empty','스킬 정보가 아직 등록되지 않았습니다.'));dialogBody.append(section);return;}
  const heading=make('div','buddy-skill-heading');heading.append(make('h4','',skill.name),make('span','buddy-charge-label',chargeLabel+' '+skill.charge));section.append(heading,effectList(skill.effects));
  for(const additional of skill.additionals||(skill.additional?[skill.additional]:[])){const extra=make('div','buddy-detail-additional');extra.append(decorateBuddyCondition('strong',additional.condition,buddy),effectList(additional.effects));section.append(extra);}
  if(skill.note)section.append(make('p','buddy-detail-note',skill.note));
  dialogBody.append(section);
 };
 const addAuras=(auras,buddy)=>{
  const section=make('section','buddy-detail-section');section.append(make('h3','buddy-section-title','오라'));
  if(!auras?.length){section.append(make('p','buddy-detail-empty','오라 정보가 아직 등록되지 않았습니다.'));dialogBody.append(section);return;}
  for(const aura of auras){
   const item=make('article','buddy-aura'),details=make('dl','buddy-aura-details');item.append(make('h4','',aura.name));
   for(const [label,value] of [['오라 대상',aura.target],['발동 조건',aura.condition]])details.append(make('dt','',label),label==='발동 조건'?decorateBuddyCondition('dd',value,buddy):decorateBuddyText(make('dd'),value));
   const effects=make('dd');effects.append(effectList(aura.effects));details.append(make('dt','','오라 효과'),effects);item.append(details);section.append(item);
  }
  dialogBody.append(section);
 };
 const detailTabs=['auto','charge','aura'].map(key=>document.querySelector('#buddy-tab-'+key));
 const selectDetailTab=index=>{
  detailTabs.forEach((tab,i)=>{
   tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;
   const panel=[...dialogBody.children].find(panel=>panel.id===tab.getAttribute('aria-controls'));if(panel)panel.hidden=i!==index;
  });
  dialogBody.scrollTop=0;
 };
 detailTabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>selectDetailTab(index));
  tab.addEventListener('keydown',event=>{
   const visible=detailTabs.map((tab,i)=>tab.hidden?-1:i).filter(i=>i>=0),position=visible.indexOf(index);
   let next=index;
   if(event.key==='ArrowRight')next=visible[(position+1)%visible.length];
   else if(event.key==='ArrowLeft')next=visible[(position+visible.length-1)%visible.length];
   else if(event.key==='Home')next=visible[0];
   else if(event.key==='End')next=visible[visible.length-1];
   else return;
   event.preventDefault();selectDetailTab(next);detailTabs[next].focus();
  });
 });
 const openBuddyInfo=(buddy,opener)=>{
  dialogOpener=opener;dialogName.textContent=buddy.name;dialogStyle.textContent=buddy.style;dialogImage.src=buddy.image;dialogImage.alt='';
  dialogBody.replaceChildren();const details=buddy.details||{};
  const rarity=Math.max(...(buddy.rarities||[Number(buddy.rank?.match(/[3-5]/g)?.pop())||5])),hasCharge=rarity>=5,hasAura=rarity>=4;
  detailTabs[1].hidden=!hasCharge;detailTabs[2].hidden=!hasAura;
  const keys=hasCharge?['auto','charge','aura']:hasAura?['auto','aura']:['auto'];
  addSkill('오토 스킬',details.autoSkill,'차지 축적',buddy);if(hasCharge)addSkill('차지 스킬',details.chargeSkill,'차지 소비',buddy);if(hasAura)addAuras(details.auras,buddy);
  [...dialogBody.children].forEach((panel,index)=>{
   const key=keys[index];panel.id='buddy-pane-'+key;panel.classList.add('buddy-pane-'+key);
   panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby','buddy-tab-'+key);panel.tabIndex=0;
  });
  selectDetailTab(0);
  dialog.showModal();dialogBody.scrollTop=0;document.documentElement.classList.add('buddy-dialog-open');
 };
 document.addEventListener('partycompass:buddy-info',event=>{
  const buddy=(window.partyGuideBuddies||[]).find(item=>item.id===event.detail?.id);
  if(buddy)openBuddyInfo(buddy.id==='dragon'?{...buddy,name:buddy.trueName}:buddy,event.detail.opener);
 });
 document.querySelector('#buddy-dialog-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>{document.documentElement.classList.remove('buddy-dialog-open');backdropPressed=false;if(dialogOpener?.isConnected)dialogOpener.focus({preventScroll:true});dialogOpener=null;});
 const outsideDialog=event=>{const rect=dialog.getBoundingClientRect();return event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom;};
 dialog.addEventListener('pointerdown',event=>{backdropPressed=event.target===dialog&&outsideDialog(event);});
 dialog.addEventListener('pointercancel',()=>{backdropPressed=false;});
 dialog.addEventListener('click',event=>{if(backdropPressed&&event.target===dialog&&outsideDialog(event))dialog.close();backdropPressed=false;});
 const obtainCharacterScore=buddy=>{
  const source=buddy.obtain;if(!source||typeof characters==='undefined'||typeof ratingOrder!=='function')return -1;
  const styleKey=value=>value.includes('어나더')?'as':value.includes('엑스트라')?'es':'ns';
  const style=styleKey(source.style);
  const character=characters.find(item=>item.image===source.image)||characters.find(item=>styleKey(item.style||'')===style&&(item.name===source.name||item.name.includes(source.name)));
  return character?ratingOrder(character.id):-1;
 };
 const sortBuddyGroups=buddies=>{
  const groups=new Map();
  for(const buddy of buddies){const key=buddy.name;if(!groups.has(key))groups.set(key,[]);groups.get(key).push(buddy);}
  const rank=group=>Math.max(...group.map(buddy=>Math.max(...buddy.rarities)));
  const score=group=>Math.max(...group.map(obtainCharacterScore));
  return [...groups.values()].sort((a,b)=>rank(b)-rank(a)||score(b)-score(a)).flatMap(group=>group.sort((a,b)=>obtainCharacterScore(b)-obtainCharacterScore(a)||(a.styleKey==='ns'?0:1)-(b.styleKey==='ns'?0:1)));
 };
 window.renderBuddyList=()=>{
  const query=search.value.trim().toLowerCase(),buddies=window.partyGuideBuddies||[];
  const checked=filterInputs.filter(input=>input.checked),signature=JSON.stringify([query,checked.map(input=>[input.name,input.value])]);
  if(signature===lastQuery)return;lastQuery=signature;
  const selected=key=>checked.filter(input=>input.name==='buddy-filter-'+key).map(input=>input.value);
  const styles=selected('style'),rarities=selected('rarity').map(Number),acquisitions=selected('acquisition');
  const filterCount=document.querySelector('#buddy-filter-count');filterCount.textContent=checked.length;filterCount.hidden=!checked.length;filterToggle.classList.toggle('is-active',checked.length>0);
  const labels={ns:'노멀',as:'어나더','3':'★3','4':'★4','5':'★5',dream:'몽견',story:'스토리'};
  document.querySelector('#buddy-filter-summary').textContent='별 높은 순 · 획득 캐릭터 점수순 · 스타일 묶음 · '+(checked.length?checked.map(input=>labels[input.value]).join(' · '):'전체');
  const tokens=query.split(/\s+/).filter(Boolean).map(normalize);
  const matchesVariant=(buddy,variant)=>{
   const style=variant.styleKey||buddy.styleKey;
   const index=normalize([buddy.name,...(buddy.aliases||[]),variant.originalName,variant.style,variant.id,buddy.id,style,buddy.name+style,buddy.obtain?.name||'',buddy.acquisitionPath||''].join(' '));
   return tokens.every(token=>index.includes(token))&&(!styles.length||styles.includes(variant.styleKey||buddy.styleKey))&&(!rarities.length||(variant.rarities||buddy.rarities).some(rarity=>rarities.includes(rarity)))&&(!acquisitions.length||acquisitions.includes(variant.acquisition||buddy.acquisition));
  };
  const matches=sortBuddyGroups(buddies.filter(buddy=>(buddy.variants||[buddy]).some(variant=>matchesVariant(buddy,variant))));
  grid.replaceChildren();document.querySelector('#buddy-count').textContent=query||checked.length?matches.length+' / '+buddies.length:buddies.length+'개';
  document.querySelector('#buddy-empty').hidden=matches.length>0;
  const styleGroups=new Map();
  for(const buddy of matches){
   let target=styleGroups.get(buddy.name);
   if(!target){target=matches.filter(item=>item.name===buddy.name).length>1?make('div','buddy-style-pair'):grid;if(target!==grid){target.setAttribute('role','group');target.setAttribute('aria-label',buddy.name+' 스타일');grid.append(target);}styleGroups.set(buddy.name,target);}
   const variants=buddy.variants||[buddy],matching=variants.filter(variant=>matchesVariant(buddy,variant));
   let activeBuddy,currentVariant,typeSwitcher=null;
   const card=document.createElement('article');card.className='buddy-card';
   const art=document.createElement('div');art.className='buddy-art';
   const img=document.createElement('img');img.src=buddy.image;if(buddy.id==='iridian'||buddy.id==='iridian-as')img.className='buddy-art-normalized';img.alt=buddy.name+' '+buddy.style;img.loading='lazy';img.decoding='async';img.width=160;img.height=160;
   const rank=document.createElement('span');rank.className='buddy-rank';rank.textContent=buddy.rank.replace(/〜/g,'~');art.append(img,rank);
   const styleIcon=make('img','style-icon buddy-card-style-icon');styleIcon.width=30;styleIcon.height=30;
   const info=document.createElement('div');info.className='buddy-info card-info';
   const name=document.createElement('h3');name.className='card-name';name.textContent=displayName(buddy);
   const style=document.createElement('span');style.className='buddy-style style-label';style.textContent=buddy.style;
   const styleRow=make('div','card-style buddy-card-style');styleRow.append(styleIcon,style);
   const button=make('button','buddy-info-button');button.type='button';button.setAttribute('aria-label',buddy.name+' '+buddy.style+' 정보 보기');button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-controls','buddy-info-dialog');button.title='버디 정보 보기';
   const icon=make('span','collection-tab-icon buddy-info-icon');icon.setAttribute('aria-hidden','true');button.append(icon);button.addEventListener('click',()=>openBuddyInfo(activeBuddy,button));
   const typeButtons=[];
   const switchType=variant=>{
    currentVariant=variant;selectedTypes.set(buddy.id,variant.id);activeBuddy={...buddy,...variant,name:displayName(buddy)};
    img.src=variant.image;img.alt=displayName(buddy)+' '+variant.style;rank.textContent=variant.rank.replace(/〜/g,'~');style.textContent=variant.style;
    const styleKey=variant.styleKey||buddy.styleKey;styleIcon.src='assets/styles/'+styleKey+'.png';styleIcon.alt=styleKey.toUpperCase()+' · '+(styleKey==='as'?'어나더 스타일':'노멀 스타일');
    button.setAttribute('aria-label',displayName(buddy)+' '+variant.style+' 정보 보기');
    for(const [typeButton,type] of typeButtons)typeButton.setAttribute('aria-pressed',String(type.id===variant.id));
   };
   styleRow.append(button);info.append(name,styleRow);card.append(art);
   const obtain=obtainPath(buddy);if(obtain)info.append(obtain);
   if(variants.length>1){
    const switcher=make('div','buddy-type-switcher');typeSwitcher=switcher;switcher.setAttribute('role','group');switcher.setAttribute('aria-label',displayName(buddy)+' 타입 선택');
    for(const variant of variants){const typeButton=make('button','buddy-type-button',variant.style);typeButton.type='button';typeButton.addEventListener('click',()=>switchType(variant));typeButtons.push([typeButton,variant]);switcher.append(typeButton);}
    card.append(switcher);
   }
   switchType(matching.find(variant=>variant.id===selectedTypes.get(buddy.id))||matching[0]);
   setupNameSticker(buddy,name,()=>{name.textContent=displayName(buddy);switchType(currentVariant);if(typeSwitcher)typeSwitcher.setAttribute('aria-label',displayName(buddy)+' 타입 선택');});
   card.append(info);target.append(card);
  }
 };
 search.addEventListener('input',window.renderBuddyList);
 filterToggle.addEventListener('click',()=>{filterPanel.hidden=!filterPanel.hidden;filterToggle.setAttribute('aria-expanded',String(!filterPanel.hidden));});
 filterPanel.addEventListener('change',window.renderBuddyList);
 document.querySelector('#buddy-filter-clear').addEventListener('click',()=>{for(const input of filterInputs)input.checked=false;window.renderBuddyList();});
})();
