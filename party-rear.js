'use strict';
(()=>{
 const root=document.querySelector('#party-rear-slots');if(!root)return;
 const family=character=>character.name.replace(/[\s"「」]/g,'');
 const capacity=value=>Number(value)>=200?4:3;
 const traits=character=>typeof characterFilters==='undefined'?null:characterFilters[character.id];
 const tagMatches=(item,info)=>{
  if(!info)return false;
  if(item.tagKind==='all')return true;
  if(item.tagKind==='weapon')return info.weapon===item.tagKey;
  if(item.tagKind==='element')return info.elements?.includes(item.tagKey);
  if(item.tagKind==='personality')return info.personalities?.includes(item.tagKey)||item.tagKey==='Phantom Thieves'&&info.personalities?.includes('Phantom Thieves of Hearts');
  return false;
 };
 const attackCategories=new Set(['attribute','element-attack','hp-full','hp-low','resonance','zone-damage','zone-awakened','zone-extreme']);
 const usable=(item,hpMode,options={})=>attackCategories.has(item.category)&&item.tagKind!=='unmapped'&&
  (item.category!=='hp-full'||hpMode==='full')&&(item.category!=='hp-low'||hpMode==='low')&&
  (item.category!=='zone-damage'||item.zoneId===options.zoneId)&&(item.category!=='zone-extreme'||item.zoneId===options.zoneId&&Boolean(options.zoneAwakened))&&(item.category!=='zone-awakened'||Boolean(options.zoneId&&options.zoneId!=='none'&&options.zoneAwakened));
 const stackable=item=>item.category==='hp-full'||item.category==='hp-low';
 const copyCap=item=>stackable(item)?item.quantityStatus==='verified'?Math.max(1,Math.floor(Number(item.maxCopies)||1)):8:1;
 const copyLimit=(item,quantities={})=>{const configured=quantities[item.id];if(configured!==undefined)return Math.min(copyCap(item),Math.max(0,Math.floor(Number(configured)||0)));return stackable(item)?Math.max(1,Math.floor(Number(item.maxCopies)||1)):1;};
 const conditionMatches=(info,condition={})=>Boolean(info)&&(!condition.weapon||info.weapon===condition.weapon)&&(!condition.alignment||info.alignment===condition.alignment)&&(!condition.element||info.elements?.includes(condition.element));
 const profileMatches=(info,requirements)=>info?.alignment===requirements.alignment&&(!requirements.weapon||info.weapon===requirements.weapon)&&requirements.elements.every(x=>info.elements?.includes(x))&&requirements.personalities.every(x=>info.personalities?.includes(x)||x==='Phantom Thieves'&&info.personalities?.includes('Phantom Thieves of Hearts'));
 const profileFor=(holder,condition,candidates)=>{const requirements={alignment:traits(holder.character).alignment,weapon:condition?.weapon||'',elements:condition?.element?[condition.element]:[],personalities:[]};for(const {item} of holder.grastas){if(item.tagKind==='weapon')requirements.weapon=item.tagKey;else if(item.tagKind==='element')requirements.elements.push(item.tagKey);else if(item.tagKind==='personality')requirements.personalities.push(item.tagKey);}requirements.elements=[...new Set(requirements.elements)];requirements.personalities=[...new Set(requirements.personalities)];return {...holder,requirements,eligible:candidates.filter(c=>profileMatches(traits(c),requirements))};};
 const priority=item=>stackable(item)?2:item.category==='attribute'?1.4:1;
 const alignmentCounts=party=>party.reduce((counts,character)=>{const key=traits(character)?.alignment;if(key==='light'||key==='shadow')counts[key]++;else counts.unknown++;return counts;},{light:0,shadow:0,unknown:0,total:party.length});
 const resolveEntry=(entry,counts)=>{
  if(entry.item.category!=='resonance')return entry;
  const count=counts[entry.item.countAlignment];if(!count)return null;
  const value=Math.min(30,count*5),label=entry.item.countAlignment==='light'?'천':'명';
  return {...entry,item:{...entry.item,value,effect:'전열·후열 '+label+' '+count+'명 × 5% → 아군 전체가 가하는 대미지 '+value+'% UP (최대 30%)'}};
 };
 const recipients=(item,party)=>party.filter(character=>{
  const info=traits(character);if(!tagMatches(item,info))return false;
  if(item.category==='element-attack')return info.elements.includes(item.attackElement);
  if(item.category==='attribute')return info.elements.some(element=>element!=='none');
  return true;
 });
 function recommend(party,options={}){
  if(!party.length)return null;
  const catalog=options.catalog||(typeof characters==='undefined'?[]:characters),hpMode=options.hpMode||'full';
  const frontFamilies=new Set(party.map(family)),values=options.tenmei||{},fixed=options.holderIds||[];
  const focusId=party.some(character=>character.id===options.focusId)?options.focusId:null;
  const targetWeight=target=>focusId?(target.id===focusId?10:1):1;
  const preferred=entry=>stackable(entry.item)&&(!focusId||entry.targets.some(target=>target.id===focusId));
  const damageTier=entry=>(!focusId||entry.targets.some(t=>t.id===focusId))?(preferred(entry)?3:['zone-damage','zone-awakened','zone-extreme'].includes(entry.item.category)?2:0):0;
  const budget=item=>copyLimit(item,options.quantities);
  const candidates=catalog.filter(character=>traits(character)&&!frontFamilies.has(family(character))&&
   !(typeof isSpoilerHidden==='function'&&isSpoilerHidden(character)));
  const entries=(window.partyGuideGrastas||[]).filter(item=>usable(item,hpMode,options)&&budget(item)>0).map(item=>({item,targets:recipients(item,party)})).filter(entry=>entry.targets.length);
  const holders=candidates.map(character=>{
   const items=entries.filter(entry=>tagMatches(entry.item,traits(character))),slots=options.expanded?4:capacity(values[character.id]);
   const best=items.flatMap(entry=>Array(Math.min(slots,budget(entry.item))).fill(entry)).map(entry=>(entry.item.category==='resonance'?30:entry.item.value*priority(entry.item)+(preferred(entry)?1000:0))*entry.targets.reduce((sum,target)=>sum+targetWeight(target),0)).sort((a,b)=>b-a).slice(0,slots);
   return {character,items,capacity:slots,potential:best.reduce((a,b)=>a+b,0)};
  }).filter(holder=>holder.items.length);
  const ranked=[...holders].sort((a,b)=>b.potential-a.potential||a.character.id.localeCompare(b.character.id));
  // Keep both alignments and multiple tag combinations in the candidate pool.
  const signatures=new Map(),pool=[];
  for(const holder of ranked){
   const signature=traits(holder.character).alignment+'|'+holder.items.map(entry=>entry.item.id).join('|'),families=signatures.get(signature)||new Set(),name=family(holder.character);
   if(families.has(name)||families.size>=2)continue;
   families.add(name);signatures.set(signature,families);pool.push(holder);if(pool.length===40)break;
  }
  const fixedHolder=index=>holders.find(holder=>holder.character.id===fixed[index]);
  const fits=(holder,index)=>conditionMatches(traits(holder.character),options.holderConditions?.[index]);
  const left=(fixedHolder(0)?[fixedHolder(0)]:pool).filter(h=>fits(h,0)),right=(fixedHolder(1)?[fixedHolder(1)]:pool).filter(h=>fits(h,1));
  if(options.holderConditions)for(let i=0;i<2;i++){const side=i?right:left;if(!(i?fixedHolder(1):fixedHolder(0)))for(const h of ranked.filter(h=>fits(h,i)).slice(0,20))if(!side.includes(h))side.push(h);}
  let best=null;
  for(const a of left)for(const b of right){
   if(family(a.character)===family(b.character))continue;
   const pair=[a,b],counts=alignmentCounts([...party,a.character,b.character]);
   const pairItems=pair.map(holder=>holder.items.map(entry=>resolveEntry(entry,counts)).filter(Boolean));
   const assigned=[[],[]],used=new Map(),coverage=new Map();let score=0,focusScore=0;
   const gainFor=entry=>entry.targets.reduce((sum,target)=>sum+targetWeight(target)*(entry.item.value*priority(entry.item)/(1+(coverage.get(target.id)||0)*.15)+(coverage.has(target.id)?0:18)),0);
   const assign=(index,entry)=>{
    const gain=gainFor(entry);assigned[index].push(entry);used.set(entry.item.id,(used.get(entry.item.id)||0)+1);score+=gain*(assigned[index].length>3?.15:1);
    if(focusId&&entry.targets.some(target=>target.id===focusId))focusScore+=entry.item.value*priority(entry.item)*(assigned[index].length>3?.15:1);
    entry.targets.forEach(target=>coverage.set(target.id,(coverage.get(target.id)||0)+1));
   };
   // Reserve active resonances in the base slots; zero-effect alignments are omitted.
   const mandatory=pairItems[0].filter(entry=>entry.item.category==='resonance').sort((a,b)=>b.item.value-a.item.value);
   mandatory.forEach((entry,index)=>assign(index%2,entry));
   for(const limit of [3,4]){
    while(true){
     let pick=null;
     pair.forEach((holder,index)=>{
      if(assigned[index].length>=Math.min(limit,holder.capacity))return;
      for(const entry of pairItems[index]){
       if((used.get(entry.item.id)||0)>=budget(entry.item))continue;
       const gain=gainFor(entry),hpFirst=damageTier(entry);if(!pick||hpFirst>pick.hpFirst||hpFirst===pick.hpFirst&&gain>pick.gain)pick={index,entry,gain,hpFirst};
      }
     });
     if(!pick)break;assign(pick.index,pick.entry);
    }
   }
   // Keep mandatory resonances in base slots, then rank damage support; weakest optional item is fourth.
   const strength=entry=>entry.item.value*priority(entry.item)*entry.targets.reduce((sum,target)=>sum+targetWeight(target),0);
   assigned.forEach(items=>items.sort((a,b)=>(b.item.category==='resonance')-(a.item.category==='resonance')||damageTier(b)-damageTier(a)||strength(b)-strength(a)));
   focusScore=focusId?assigned.reduce((sum,items)=>sum+items.reduce((total,entry,index)=>total+(entry.targets.some(target=>target.id===focusId)?entry.item.value*priority(entry.item)*(index>2?.15:1):0),0),0):0;
   const hpDamageScore=assigned.reduce((sum,items)=>sum+items.reduce((total,entry,index)=>total+(preferred(entry)?entry.item.value*(focusId?1:entry.targets.length)*(index>2?.15:1):0),0),0);
   const conditionalDamageScore=assigned.reduce((sum,items)=>sum+items.reduce((n,e,i)=>n+(['zone-damage','zone-awakened','zone-extreme'].includes(e.item.category)&&(!focusId||e.targets.some(t=>t.id===focusId))?e.item.value*(focusId?1:e.targets.length)*(i>2?.15:1):0),0),0);
   const baseCount=assigned.reduce((sum,items)=>sum+Math.min(3,items.length),0),totalCount=assigned[0].length+assigned[1].length;
   const better=(!best||baseCount>best.baseCount||baseCount===best.baseCount&&(hpDamageScore>best.hpDamageScore||hpDamageScore===best.hpDamageScore&&(conditionalDamageScore>best.conditionalDamageScore||conditionalDamageScore===best.conditionalDamageScore&&(focusId?(focusScore>best.focusScore||focusScore===best.focusScore&&(totalCount>best.totalCount||totalCount===best.totalCount&&score>best.score)):(totalCount>best.totalCount||totalCount===best.totalCount&&score>best.score)))));
   if(better)best={score,focusScore,hpDamageScore,conditionalDamageScore,focusId,baseCount,totalCount,alignmentCounts:counts,carriers:pair.map((holder,index)=>({...holder,grastas:assigned[index]})),covered:[...coverage.keys()]};
  }
  return best?{...best,zoneId:options.zoneId||'none',zoneAwakened:Boolean(options.zoneAwakened),carriers:best.carriers.map((holder,index)=>profileFor(holder,options.holderConditions?.[index],candidates)),candidates:holders.map(holder=>holder.character)}:null;
 }
 window.partyGuideRearEngine={recommend,capacity,tagMatches,recipients,alignmentCounts,copyLimit,copyCap,conditionMatches,profileMatches,usable};
})();
