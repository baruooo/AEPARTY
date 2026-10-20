'use strict';
(()=>{
 const slots=document.querySelector('#party-buddy-slots');
 if(!slots)return;
 let secondBuddyId='tetra';
 const make=(tag,className,text)=>{
  const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node;
 };
 const styleKey=value=>value.includes('어나더')?'as':value.includes('엑스트라')?'es':'ns';
 const nameKey=value=>value.replace(/[\s"「」]/g,'');
 window.resolvePartyBuddies=(party=[],selectedId=null,preferredSecond=secondBuddyId)=>{
  if(!party.length)return {buddies:[],character:null};
  const buddies=window.partyGuideBuddies||[];
  const candidates=party.flatMap((character,index)=>{
   const buddy=buddies.find(item=>{
    if(item.id==='korobo'&&character.name==='애쉬티어')return true;
    if(item.id==='dragon'&&(character.id==='y2024_wryz'||character.name==='류제'))return true;
    const source=item.obtain;if(!source)return false;
    return styleKey(character.style||'')===styleKey(source.style)&&
     (character.image===source.image||nameKey(character.name).includes(nameKey(source.name)));
   });
   return buddy?[{buddy:buddy.id==='dragon'?{...buddy,name:buddy.trueName}:buddy,character,index,score:typeof ratingOrder==='function'?ratingOrder(character.id):-1}]:[];
  }).sort((a,b)=>Number(b.buddy.id==='dragon')-Number(a.buddy.id==='dragon')||Number(b.character.id===selectedId)-Number(a.character.id===selectedId)||b.score-a.score||a.index-b.index);
  const match=candidates[0],first=match?.buddy||buddies.find(item=>item.id==='moke');
  const family=id=>id.replace(/-as$/,'');
  const options=(match?['moke','tetra','tetra-as']:['tetra','tetra-as']).filter(id=>family(id)!==family(first.id));
  const second=buddies.find(item=>item.id===(options.includes(preferredSecond)?preferredSecond:options[0]));
  return {buddies:[first,second].filter(Boolean),character:match?.character||null,options};
 };
 const currentAssignment=()=>window.resolvePartyBuddies(typeof getParty==='function'?getParty(typeof selected!=='undefined'?selected:null):[],typeof selected!=='undefined'?selected:null);
 window.getPartyBuddySelection=()=>currentAssignment().buddies;
 window.renderPartyBuddies=()=>{
  slots.replaceChildren();
  const assignment=currentAssignment();
  const count=document.querySelector('#party-buddy-count');if(count)count.textContent=assignment.buddies.length+' / 2';
  if(!assignment.buddies.length){
   for(let index=0;index<2;index++){
    const empty=make('div','party-buddy-card party-buddy-empty');empty.append(make('span','party-buddy-number','버디 0'+(index+1)),make('span','party-buddy-empty-mark','+'),make('span','party-buddy-empty-label','버디 대기'));slots.append(empty);
   }
   const note=document.querySelector('.party-buddy-note');if(note){note.hidden=false;note.textContent='캐릭터를 선택하면 버디가 표시됩니다.';}return;
  }
  const note=document.querySelector('.party-buddy-note');if(note){note.hidden=true;note.textContent='';}
  assignment.buddies.forEach((buddy,index)=>{
   const genericTetra=index===1&&(buddy.id==='tetra'||buddy.id==='tetra-as');
   const card=make('article','party-buddy-card');card.setAttribute('aria-label','버디 '+(index+1)+' · '+buddy.name+' · '+buddy.style);
   const top=make('div','party-buddy-top');top.append(make('span','party-buddy-number','버디 0'+(index+1)));
   const info=make('button','buddy-info-button party-buddy-info');info.type='button';info.title='버디 정보 보기';info.setAttribute('aria-label',buddy.name+' '+buddy.style+' 정보 보기');info.setAttribute('aria-haspopup','dialog');info.setAttribute('aria-controls','buddy-info-dialog');
   const icon=make('span','collection-tab-icon buddy-info-icon');icon.setAttribute('aria-hidden','true');info.append(icon);
   info.addEventListener('click',()=>document.dispatchEvent(new CustomEvent('partycompass:buddy-info',{detail:{id:buddy.id,opener:info}})));top.append(info);
   const main=make('div','party-buddy-main'),art=make('div','party-buddy-art'),image=make('img');image.src=buddy.image;image.alt='';image.width=100;image.height=100;image.decoding='async';art.append(image);
   const copy=make('div','party-buddy-copy'),name=make('h4','',buddy.name),style=make('div',genericTetra?'party-tetra-availability':'party-buddy-style');
   if(!genericTetra){const emblem=make('img');emblem.src='assets/styles/'+buddy.styleKey+'.png';emblem.alt='';style.append(emblem,make('span','',buddy.style));}
   copy.append(name);if(!genericTetra)copy.append(style);main.append(art,copy);card.append(top,main);
   if(index===1&&assignment.options.length>1){
    const flexible=assignment.options.includes('moke');
    const switcher=make('div','party-tetra-switch'+(flexible?' party-buddy-switch':''));switcher.setAttribute('role','group');switcher.setAttribute('aria-label',flexible?'버디 2 선택':'테트라 스타일 미리보기');
    for(const id of assignment.options){
     const option=(window.partyGuideBuddies||[]).find(item=>item.id===id),key=option.styleKey;
     const button=make('button');button.type='button';button.setAttribute('aria-pressed',String(buddy.id===id));button.setAttribute('aria-label',option.name+' '+option.style);
     const emblem=make('img');emblem.src=option.image;emblem.alt='';button.append(emblem);
     const label=make('span','party-buddy-option-label',flexible?option.name:key==='as'?'어나더':'노멀');
     if(flexible&&id!=='moke')label.append(make('small','',key.toUpperCase()));button.append(label);
     button.addEventListener('click',()=>{
      if(buddy.id===id)return;secondBuddyId=id;window.renderPartyBuddies();
      const active=slots.querySelector('.party-tetra-switch [aria-pressed="true"]');active?.focus({preventScroll:true});
      document.querySelector('#fx-status').textContent='버디 2: '+option.name+' '+option.style;
      document.dispatchEvent(new CustomEvent('partycompass:buddies-change',{detail:{buddies:window.getPartyBuddySelection()}}));
     });switcher.append(button);
    }
    card.append(switcher);
   }
   slots.append(card);
  });
 };
 document.addEventListener('partycompass:reset',()=>{secondBuddyId='tetra';window.renderPartyBuddies();});
 window.renderPartyBuddies();
})();
