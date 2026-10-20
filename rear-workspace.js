'use strict';
(()=>{
 const root=document.querySelector('#party-rear-slots'),engine=window.partyGuideRearEngine;if(!root||!engine)return;
 const {recommend,recipients,usable}=engine,stateByParty=new Map();
 const make=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
 const node=id=>document.querySelector('#'+id);
 const button=(id,cls,label,action,pressed)=>{const b=make('button',cls,label);b.type='button';b.id=id;if(pressed!==undefined)b.setAttribute('aria-pressed',String(pressed));b.addEventListener('click',action);return b;};
 const currentParty=()=>typeof getParty==='function'?getParty(typeof selected==='undefined'?null:selected):[];
 const keyFor=party=>party.map(c=>c.id).join('|');
 const stateFor=party=>{const key=keyFor(party);if(!stateByParty.has(key))stateByParty.set(key,{holderConditions:[{},{}],hpMode:'full',focusId:null,zoneId:'auto',zoneAwakened:false,zoneMenuOpen:false,editor:null,examples:[false,false],inspectId:null,inspectTab:'effect'});return stateByParty.get(key);};
 const name=c=>typeof getCharacterDisplayName==='function'?getCharacterDisplayName(c):c.name;
 const style=c=>typeof getCharacterStyleText==='function'?getCharacterStyleText(c):c.style||'노멀 스타일';
 const weapons={staff:'지팡이',sword:'검',katana:'도',ax:'도끼',lance:'창',bow:'활',fists:'권갑',hammer:'망치'};
 const elements={fire:'불',water:'물',earth:'땅',wind:'바람',shade:'그림자',thunder:'번개',crystal:'결정',none:'무'};
 const alignments={light:'천',shadow:'명'};
 const categories=[['hp-full','HP 최대'],['hp-low','HP 저하'],['zone','존·각성'],['resonance','공명'],['attribute','속성·전능']];
 const fallbackZones=[['zone-1','각음진'],['zone-2','굉타진'],['zone-3','성해진'],['zone-4','수천진'],['zone-5','순돌진'],['zone-6','쌍격진 - 참돌'],['zone-7','쌍격진 - 참마'],['zone-8','열화진'],['zone-9','월광진'],['zone-10','지열진'],['zone-11','초뢰진'],['zone-12','풍왕진'],['zone-13','환마진'],['zone-14','황참진'],['zone-15','휘정진'],['zone-17','견수진'],['zone-18','섬격진']].map(([id,name])=>({id,name,image:'assets/zones/'+id+'.png'}));
 const zoneList=()=>typeof zones!=='undefined'?zones.filter(z=>!['zone-16','zone-19'].includes(z.id)):fallbackZones;
 const presetZone=()=>typeof getSelectedPartyPreset==='function'?getSelectedPartyPreset()?.zone:null;
 const activeZone=s=>s.zoneId==='auto'?(presetZone()?.id||'none'):s.zoneId;
 const options=s=>({hpMode:s.hpMode,zoneId:activeZone(s),zoneAwakened:s.zoneAwakened&&activeZone(s)!=='none'});
 const familyFor=item=>item.category.startsWith('zone-')?'zone':['attribute','element-attack'].includes(item.category)?'attribute':item.category;
 const offense=item=>['hp-full','hp-low','resonance','zone','attribute'].includes(familyFor(item))&&item.tagKind!=='unmapped';
 const typeLabel=item=>Object.fromEntries(categories)[familyFor(item)]||'P 강화';
 const condition=item=>item.conditionLabel||(item.category==='hp-full'?'강화 대상 HP 최대':item.category==='hp-low'?'강화 대상 HP 80% 이하':'P 연성');
 const effectLabel=item=>item.category==='attribute'?'모든 속성 공격':item.category==='element-attack'?(elements[item.attackElement]||'속성')+' 공격':'대미지';
 const liveItem=(item,plan)=>{if(item.category!=='resonance'||!plan)return item;const count=plan.alignmentCounts[item.countAlignment]||0,value=Math.min(30,count*5),label=item.countAlignment==='light'?'천':'명';return {...item,value,effect:'전열·후열 '+label+' '+count+'명 × 5% → 아군 전체가 가하는 대미지 '+value+'% UP'};};
 const available=(item,party,s)=>usable(item,s.hpMode,options(s))&&recipients(item,party).length>0&&!(item.category==='resonance'&&item.value===0);
 const unavailable=(item,party,s)=>!recipients(item,party).length?'공유 대상 없음':item.category==='resonance'&&item.value===0?'해당 천명 인원 없음':condition(item)+' 필요';
 const change=fn=>()=>{const focus=document.activeElement?.id;fn();window.renderPartyRear();if(focus)document.getElementById?.(focus)?.focus?.();};
 const icon=(src,size=24)=>{const img=make('img');img.src=src;img.alt='';img.width=size;img.height=size;return img;};
 const chip=(kind,key,label)=>{const c=make('span','rear-chip');if(key)c.append(icon('assets/card-icons/'+kind+'-'+key+'.png',22));c.append(make('span','',label));return c;};
 const targetPortrait=c=>{const item=make('span','rear-target-portrait');item.append(icon(c.image,28));item.title=name(c);return item;};
 const openItem=(item,s)=>()=>{s.inspectReturn=document.activeElement?.id;s.inspectId=item.id;s.inspectTab='effect';window.renderPartyRear();const panel=node('rear-item-detail');panel.setAttribute('tabindex','-1');panel.scrollIntoView?.({behavior:'smooth',block:'nearest'});panel.focus?.({preventScroll:true});};
 const closeItem=s=>()=>{const id=s.inspectReturn;s.inspectId=null;window.renderPartyRear();if(id)document.getElementById?.(id)?.focus?.();};
 window.getPartyRearFocusId=()=>stateByParty.get(keyFor(currentParty()))?.focusId||null;
 window.setPartyRearFocus=id=>{const party=currentParty(),c=party.find(c=>c.id===id);if(!c||typeof isSpoilerHidden==='function'&&isSpoilerHidden(c))return;const s=stateFor(party);s.focusId=s.focusId===id?null:id;window.renderPartyRear();};
 const syncFocus=()=>{
  const id=window.getPartyRearFocusId();for(const b of document.querySelectorAll?.('.slot-focus-button')||[]){b.setAttribute('aria-pressed',String(b.dataset.characterId===id));b.closest('.slot')?.classList.remove('rear-focus');}
  const c=currentParty().find(c=>c.id===id);node('rear-focus-summary').textContent=c?name(c)+' 우선':'전열 전체 균형';
  const clear=node('rear-focus-clear');clear.hidden=false;clear.setAttribute('aria-pressed',String(!c));
 };
 const choices=(root,values,current,id,onChange,kind)=>{
  root.replaceChildren();for(const [value,label]of values){const b=button(id+'-'+(value||'auto'),'rear-choice','',change(()=>onChange(value)),value===current);if(kind&&value)b.append(icon('assets/card-icons/'+kind+'-'+value+'.png',23));b.append(make('span','',label));root.append(b);}
 };
 function drawSettings(party,s){
  choices(node('rear-hp-options'),[['full','HP 최대 시 세팅'],['low','HP 저하 시 세팅'],['none','조건 없음']],s.hpMode,'rear-hp',v=>s.hpMode=v);
  const zid=activeZone(s),z=zoneList().find(z=>z.id===zid),zoneButton=node('rear-zone-open');zoneButton.replaceChildren();if(z?.image)zoneButton.append(icon(z.image,30));zoneButton.append(make('span','',(s.zoneId==='auto'?'자동 · ':'')+(z?.name||'존 없음')),make('span','rear-caret','⌄'));zoneButton.setAttribute('aria-expanded',String(s.zoneMenuOpen));
  const menu=node('rear-zone-options');menu.replaceChildren();menu.hidden=!s.zoneMenuOpen;
  for(const item of [{id:'auto',name:'프리셋 자동'},{id:'none',name:'존 없음'},...zoneList()]){const b=button('rear-zone-'+item.id,'rear-choice rear-zone-choice','',change(()=>{s.zoneId=item.id;s.zoneMenuOpen=false;}),s.zoneId===item.id);if(item.image)b.append(icon(item.image,28));b.append(make('span','',item.name));menu.append(b);}
  choices(node('rear-awake-options'),[['normal','일반 ZONE'],['extreme','극 · ANOTHER ZONE']],s.zoneAwakened&&zid!=='none'?'extreme':'normal','rear-awake',v=>s.zoneAwakened=v==='extreme');
  const awake=node('rear-awake-options').children[1];awake.disabled=zid==='none';
  const picker=node('rear-target-picker');picker.replaceChildren();for(const c of party){const b=button('rear-focus-'+c.id,'rear-target-button','',()=>window.setPartyRearFocus(c.id),s.focusId===c.id);b.setAttribute('aria-label',name(c)+' 강화 우선');b.append(icon(c.image,36),make('span','',name(c)));picker.append(b);}
 }
 function drawEditor(s){
  const panel=node('rear-profile-controls');panel.replaceChildren();panel.hidden=s.editor===null;if(s.editor===null)return;
  const index=s.editor,header=make('div','rear-editor-heading');header.append(make('strong','','후열 0'+(index+1)+' 조건'),button('rear-editor-close','rear-close','닫기',change(()=>s.editor=null)));panel.append(header);
  for(const [key,label,values,kind]of [['weapon','무기',weapons,'weapon'],['alignment','천명',alignments,'alignment'],['element','속성',elements,'element']]){const section=make('div','rear-editor-row'),set=make('div','rear-choice-group');section.append(make('span','rear-setting-label',label));choices(set,[['','자동'],...Object.entries(values)],s.holderConditions[index][key]||'','rear-require-'+index+'-'+key,v=>s.holderConditions[index][key]=v,kind);section.append(set);panel.append(section);}
  panel.append(button('rear-conditions-reset','rear-small-action','조건 자동으로',change(()=>{s.holderConditions=[{},{}];})));
 }
 function tile(item,targets,s,id,slot,enabled=true){
  const b=button(id,'rear-grasta-tile'+(s.inspectId===item.id?' is-inspected':'')+(!enabled?' is-inactive':''),'',openItem(item,s));b.dataset.grastaId=item.id;b.setAttribute('aria-label',item.name+' · '+condition(item)+' · '+effectLabel(item)+' '+item.value+'% · 상세 보기');b.setAttribute('aria-expanded',String(s.inspectId===item.id));b.setAttribute('aria-controls','rear-item-detail');
  const top=make('span','rear-tile-top');top.append(make('span','rear-tile-kind',slot!==undefined?String(slot+1).padStart(2,'0')+(slot===3?' · 천명 200+':''):typeLabel(item)));b.append(top);
  const title=make('span','rear-tile-title'),art=item.zoneId?'assets/zones/'+item.zoneId+'.png':item.tagKind==='weapon'?'assets/card-icons/weapon-'+item.tagKey+'.png':item.tagKind==='element'?'assets/card-icons/element-'+item.tagKey+'.png':null;if(art)title.append(icon(art,28));title.append(make('strong','',item.name.replace(/<.*>$/,'')));b.append(title);
  const suffix=item.name.match(/<(.+)>$/)?.[1];if(suffix)b.append(make('span','rear-tile-tag',suffix));
  const benefit=make('span','rear-tile-benefit');benefit.append(make('b','','+'+item.value+'%'),make('small','',effectLabel(item)));b.append(benefit);
  const bottom=make('span','rear-tile-bottom'),faces=make('span','rear-tile-faces');for(const c of targets.slice(0,4))faces.append(targetPortrait(c));bottom.append(faces,make('small','',enabled?targets.length+'명 적용':unavailable(item,currentParty(),s)));b.append(bottom);return b;
 }
 function drawCard(holder,index,plan,s){
  const r=holder.requirements,card=make('article','rear-card rear-profile-card'),heading=make('div','rear-profile-heading');heading.append(make('span','rear-kicker','후열 0'+(index+1)),button('rear-edit-'+index,'rear-small-action','조건 선택',change(()=>s.editor=s.editor===index?null:index)));card.append(heading);
  card.append(make('h4','rear-profile-title',[r.weapon?weapons[r.weapon]:'무기 자유',alignments[r.alignment],...(r.elements.length?r.elements.map(e=>elements[e]):['속성 자유'])].join(' · ')));
  const tags=make('div','rear-profile-tags');if(r.weapon)tags.append(chip('weapon',r.weapon,weapons[r.weapon]));tags.append(chip('alignment',r.alignment,alignments[r.alignment]));for(const e of r.elements)tags.append(chip('element',e,elements[e]));for(const p of r.personalities){const label=(window.partyGuideGrastas||[]).find(x=>x.tagKind==='personality'&&x.tagKey===p)?.tag||p;tags.append(chip('','',label));}card.append(tags);
  const grid=make('div','rear-grasta-grid');holder.grastas.forEach((entry,slot)=>grid.append(tile(entry.item,entry.targets,s,'rear-slot-'+index+'-'+slot,slot)));for(let slot=holder.grastas.length;slot<4;slot++){const blank=make('div','rear-slot-empty');blank.append(make('strong','',String(slot+1).padStart(2,'0')),make('span','',slot===3?'천명 200 이상':'추가 강화 없음'));grid.append(blank);}card.append(grid);
  const footer=make('div','rear-card-footer');footer.append(button('rear-examples-'+index,'rear-small-action','캐릭터 예시',change(()=>s.examples[index]=!s.examples[index]),s.examples[index]));card.append(footer);
  if(s.examples[index]){const examples=make('div','rear-example-grid');for(const c of holder.eligible.slice(0,16)){const e=make('div','rear-character-example'),copy=make('span');copy.append(make('strong','',name(c)),make('small','',style(c)));e.append(icon(c.image,38),copy);examples.append(e);}card.append(examples);}
  return card;
 }
 function drawCoverage(party,plan){
  const panel=node('rear-coverage');panel.replaceChildren();for(const c of party){const entries=plan.carriers.flatMap(h=>h.grastas.map((g,i)=>({...g,extra:i===3}))).filter(g=>g.targets.some(t=>t.id===c.id)),row=make('div','rear-coverage-item'),copy=make('span');copy.append(make('strong','',name(c)),make('small','','기본 '+entries.filter(g=>!g.extra).length+' · 추가 '+entries.filter(g=>g.extra).length));row.append(icon(c.image,32),copy);panel.append(row);}
 }
 function drawInspector(party,plan,s){
  const panel=node('rear-item-detail');panel.replaceChildren();panel.hidden=!s.inspectId;if(!s.inspectId)return;const raw=(window.partyGuideGrastas||[]).find(i=>i.id===s.inspectId);if(!raw){s.inspectId=null;panel.hidden=true;return;}const item=liveItem(raw,plan);
  const heading=make('div','rear-inspector-heading');heading.append(make('h4','',item.name),button('rear-detail-close','rear-close','닫기 ×',closeItem(s)));panel.append(heading);
  const tabs=make('div','rear-detail-tabs');choices(tabs,[['effect','효과'],['targets','적용 대상']],s.inspectTab,'rear-detail-tab',v=>s.inspectTab=v);panel.append(tabs);
  if(s.inspectTab==='effect'){const badges=make('div','rear-effect-badges');badges.append(make('strong','','+'+item.value+'%'),make('span','',effectLabel(item)),make('span','',condition(item)));panel.append(badges,make('p','rear-effect-text',item.effect));}
  if(s.inspectTab==='targets'){const targets=recipients(item,party),enabled=available(item,party,s);panel.append(make('p','rear-detail-status',enabled?'현재 발동 조건 충족':unavailable(item,party,s)));const list=make('div','rear-detail-targets');for(const c of targets){const row=make('div');row.append(icon(c.image,42),make('strong','',name(c)));list.append(row);}if(!targets.length)list.append(make('p','','조건에 해당하는 전열이 없습니다.'));panel.append(list);}
 }
 window.renderPartyRear=()=>{
  const party=currentParty(),s=stateFor(party),concealed=party.some(c=>typeof isSpoilerHidden==='function'&&isSpoilerHidden(c));syncFocus();root.replaceChildren();for(const id of ['rear-coverage','rear-profile-controls','rear-item-detail'])node(id).replaceChildren();node('rear-item-detail').hidden=true;
  node('rear-conditions').hidden=!party.length||concealed;
  if(!party.length||concealed){node('party-rear-summary').textContent='후열 0 / 2';node('rear-alignment-summary').textContent='';root.append(make('div','rear-empty',concealed?'전열 공개 후 추천합니다.':'전열을 선택하면 후열을 추천합니다.'));return;}
  drawSettings(party,s);drawEditor(s);const plan=recommend(party,{...options(s),holderConditions:s.holderConditions,focusId:s.focusId,expanded:true});
  if(plan){node('party-rear-summary').textContent='기본 '+plan.baseCount+' · 200 이상 +'+(plan.totalCount-plan.baseCount);const counts=plan.alignmentCounts;node('rear-alignment-summary').textContent=counts.total+'명 기준 · 천 '+counts.light+' / 명 '+counts.shadow;plan.carriers.forEach((holder,index)=>root.append(drawCard(holder,index,plan,s)));drawCoverage(party,plan);}else{node('party-rear-summary').textContent='조건 조정 필요';node('rear-alignment-summary').textContent='';root.append(make('p','rear-empty','후열 조건을 자동으로 바꾸거나 다른 조건을 선택하세요.'));}
  drawInspector(party,plan,s);
 };
 node('rear-zone-open').addEventListener('click',change(()=>{const s=stateFor(currentParty());s.zoneMenuOpen=!s.zoneMenuOpen;}));
 node('rear-focus-clear').addEventListener('click',change(()=>stateFor(currentParty()).focusId=null));
 node('rear-auto-reset').addEventListener('click',change(()=>{const s=stateFor(currentParty());s.holderConditions=[{},{}];s.editor=null;}));
 document.addEventListener('keydown',event=>{if(event.key!=='Escape')return;const s=stateFor(currentParty());if(!s.inspectId&&!s.zoneMenuOpen&&s.editor===null)return;const back=s.inspectId?s.inspectReturn:s.zoneMenuOpen?'rear-zone-open':s.editor!==null?'rear-edit-'+s.editor:null;s.inspectId=null;s.zoneMenuOpen=false;s.editor=null;window.renderPartyRear();if(back)document.getElementById?.(back)?.focus?.();});
 document.addEventListener('partycompass:reset',()=>{stateByParty.clear();window.renderPartyRear();});
 window.renderPartyRear();
})();
