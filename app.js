'use strict';
const characters = [
{id:'shenhua',name:'셴화',style:'어나더 스타일 · 혼원노군',part:1,image:'assets/character-7.webp'},
{id:'kuchinawa',name:'쿠치나와',style:'어나더 스타일 · 아이테르',part:1,image:'assets/character-9.webp'},
{id:'elenoa',name:'엘레노아',style:'',part:1,image:'assets/character-8.webp'},
{id:'nekoko',name:'"고답의 요묘" 네코코',style:'',part:1,image:'assets/character-1.webp'},
{id:'ceries',name:'세리에스',style:'어나더 스타일 · 타케미나카타',part:1,image:'assets/character-6.webp'},
{id:'verdanta',name:'베르단타',style:'',part:1,image:'assets/character-5.webp'},
{id:'mildi',name:'밀디',style:'',part:1,image:'assets/character-4.webp'},
{id:'loyalist',name:'푸른색의 충신',style:'',part:1,image:'assets/character-10.webp'},
{id:'raven',name:'레이븐',style:'어나더 스타일 · 프로핏',part:1,image:'assets/character-2.webp'},
{id:'linaria',name:'리나리아',style:'',part:1,image:'assets/character-3.webp'},{"id": "hismena", "name": "\"월화의 영애\" 히스메나", "style": "어나더 스타일 · 흰 장미 공주", "image": "assets/part2/character-7.webp", "part": 2}, {"id": "melpiphia", "name": "멜피피아", "style": "어나더 스타일 · 모리구", "image": "assets/part2/character-4.webp", "part": 2}, {"id": "flammelapis", "name": "플람라피스", "style": "엑스트라 스타일 · 클리브 솔리스", "image": "assets/part2/character-10.webp", "part": 2}, {"id": "violet_lancer", "name": "보라 의상의 창술사", "style": "어나더 스타일 · 프로세르피나", "image": "assets/part2/character-6.webp", "part": 2}, {"id": "merit", "name": "메릿", "style": "", "image": "assets/part2/character-3.webp", "part": 2}, {"id": "minghua", "name": "\"백자의 마인\" 밍화", "style": "어나더 스타일 · 샤스티", "image": "assets/part2/character-5.webp", "part": 2}, {"id": "clughorn", "name": "클러그혼", "style": "", "image": "assets/part2/character-8.webp", "part": 2}, {"id": "nina", "name": "니나", "style": "", "image": "assets/part2/character-2.webp", "part": 2}, {"id": "black_swordsman", "name": "검은 옷의 칼잡이", "style": "어나더 스타일 · 에뚜알르", "image": "assets/part2/character-1.webp", "part": 2}, {"id": "blue_reaper", "name": "푸른 빛의 낫잡이", "style": "어나더 스타일 · 스위트 레이디", "image": "assets/part2/character-9.webp", "part": 2},{"id": "erina", "name": "에리나", "style": "어나더 스타일 · 영야난국", "image": "assets/part3/character-6.webp", "part": 3}, {"id": "havoc", "name": "하보크", "style": "", "image": "assets/part3/character-8.webp", "part": 3}, {"id": "tsukiha", "name": "\"꽃피우는 공주\" 츠키하", "style": "어나더 스타일 · 마리시텐", "image": "assets/part3/character-10.webp", "part": 3}, {"id": "nightmare", "name": "어둠 잠식의 몽마", "style": "", "image": "assets/part3/character-5.webp", "part": 3}, {"id": "ravina", "name": "라비나", "style": "어나더 스타일 · 하토르", "image": "assets/part3/character-3.webp", "part": 3}, {"id": "hismena_es", "name": "히스메나", "style": "엑스트라 스타일 · 프라가라흐", "image": "assets/part3/character-9.webp", "part": 3}, {"id": "silver_thunder", "name": "은빛을 휘감은 번개술사", "style": "어나더 스타일 · 이그노랜스", "image": "assets/part3/character-7.webp", "part": 3}, {"id": "dunarith", "name": "\"꿈의 음유시인\" 듀나리스", "style": "어나더 스타일 · 디오니소스", "image": "assets/part3/character-1.webp", "part": 3}, {"id": "myrus", "name": "뮬루스", "style": "엑스트라 스타일 · 웨네트", "image": "assets/part3/character-4.webp", "part": 3}, {"id": "shigure", "name": "\"붉은 소매의 행상인\" 시구레", "style": "", "image": "assets/part3/character-2.webp", "part": 3}
];
// Year collections reference the same character/style as the anniversary cards.
const annualCharacters=[...characters2025,...characters2024,...characters2026,...characters2023];
const releaseCollections=new Map([
 [2026,new Map(characters2026.map(c=>[c.id,c.releaseDate]))],
 [2025,new Map(characters2025.map(c=>[c.id,c.releaseDate]))],
 [2024,new Map(characters2024.map(c=>[c.id,c.releaseDate]))],
 [2023,new Map(characters2023.map(c=>[c.id,c.releaseDate]))]
]);
const stellarAwakeningDates=new Map(charactersStellar.map(c=>[c.id,c.awakeningDate]));
const catalogCharacters=[...annualCharacters,...charactersStellar];
for(const character of catalogCharacters){
 if(!characters.some(existing=>existing.id===character.id)) characters.push(character);
}
// Explicit article names distinguish alternate-timeline characters.
const namuWikiArticles = {
 "shenhua": "셴화",
 "kuchinawa": "쿠치나와(어나더 에덴)",
 "elenoa": "엘레노아(어나더 에덴)",
 "nekoko": "고답의 요묘",
 "ceries": "세리에스",
 "verdanta": "베르단타",
 "mildi": "밀디",
 "loyalist": "푸른색의 충신",
 "raven": "레이븐(어나더 에덴)",
 "linaria": "리나리아(어나더 에덴)",
 "hismena": "월화의 영애",
 "melpiphia": "멜피피아",
 "flammelapis": "플람라피스",
 "violet_lancer": "보라 의상의 창술사",
 "merit": "메릿",
 "minghua": "백자의 마인",
 "clughorn": "클러그혼",
 "nina": "니나(어나더 에덴)",
 "black_swordsman": "검은 옷의 칼잡이",
 "blue_reaper": "푸른 빛의 낫잡이",
 "erina": "에리나(어나더 에덴)",
 "havoc": "하보크(어나더 에덴)",
 "tsukiha": "꽃피우는 공주",
 "nightmare": "어둠 잠식의 몽마",
 "ravina": "라비나(어나더 에덴)",
 "hismena_es": "히스메나",
 "silver_thunder": "은빛을 휘감은 번개술사",
 "dunarith": "꿈의 음유 시인",
 "myrus": "뮬루스",
 "shigure": "붉은 소매의 행상인"
};
Object.assign(namuWikiArticles,Object.fromEntries(catalogCharacters.map(c=>[c.id,c.wikiArticle])));
// Only the six requested aliases conceal their true names.
const characterIdentities=new Map();
for(const [id,trueName] of Object.entries({violet_lancer:'투바',black_swordsman:'이스카',blue_reaper:'수제트',silver_thunder:'프레메아',nightmare:'마이티',y2025_red_flamemancer_as:'듀이',loyalist:'바레스'})){
 const c=characters.find(c=>c.id===id);if(c)characterIdentities.set(id,{alias:c.name,trueName});
}
const revealedIdentities=new Set();
function getCharacterDisplayName(c){const identity=characterIdentities.get(c.id);return identity?(revealedIdentities.has(c.id)?identity.trueName:identity.alias):c.name;}
function setupIdentitySticker(c,name){
 const identity=characterIdentities.get(c.id);if(!identity||revealedIdentities.has(c.id))return;
 name.classList.add('identity-sticker');name.tabIndex=0;name.setAttribute('role','button');name.setAttribute('aria-label',identity.alias+' · 이름표 벗기기');
 const mask=document.createElement('span');mask.className='identity-sticker-mask';mask.textContent=identity.alias;
 name.replaceChildren(mask);
 let peeling=false;
 const reveal=async event=>{
  event.preventDefault();event.stopPropagation();if(peeling||revealedIdentities.has(c.id))return;peeling=true;
  const underneath=document.createElement('span');underneath.className='identity-underneath';underneath.textContent=identity.trueName;name.prepend(underneath);
  const motion=!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&typeof mask.animate==='function';
  if(motion){name.classList.add('is-peeling');try{await mask.animate([{clipPath:'polygon(0 0,100% 0,100% 100%,0 100%)',transform:'rotate(0deg)',opacity:1},{clipPath:'polygon(0 0,65% 0,100% 60%,100% 100%,0 100%)',transform:'rotate(-3deg)',opacity:1,offset:.35},{clipPath:'polygon(0 60%,0 60%,30% 100%,0 100%)',transform:'translate(-18px,14px) rotate(-12deg)',opacity:0}],{duration:650,easing:'cubic-bezier(.3,.1,.2,1)',fill:'forwards'}).finished;}catch{}}
  revealedIdentities.add(c.id);renderParty();renderGrid();
  document.querySelector('#fx-status').textContent=identity.trueName+' 공개됨';
 };
 name.addEventListener('click',reveal);name.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){reveal(event);}});
}
// Only explicitly researched featured-character presets can populate companions.
function getPartyCandidates(id){
 const preset=getPartyPresets(id)[0];
 if(preset)return preset.party;
 const character=characters.find(c=>c.id===id);
 return character?[character]:[];
}
function getParty(id){return getPartyCandidates(id);}
const zones = [{"id": "zone-1", "name": "각음진", "image": "assets/zones/zone-1.png"}, {"id": "zone-2", "name": "굉타진", "image": "assets/zones/zone-2.png"}, {"id": "zone-3", "name": "성해진", "image": "assets/zones/zone-3.png"}, {"id": "zone-4", "name": "수천진", "image": "assets/zones/zone-4.png"}, {"id": "zone-5", "name": "순돌진", "image": "assets/zones/zone-5.png"}, {"id": "zone-6", "name": "쌍격진 - 참돌", "image": "assets/zones/zone-6.png"}, {"id": "zone-7", "name": "쌍격진 - 참마", "image": "assets/zones/zone-7.png"}, {"id": "zone-8", "name": "열화진", "image": "assets/zones/zone-8.png"}, {"id": "zone-9", "name": "월광진", "image": "assets/zones/zone-9.png"}, {"id": "zone-10", "name": "지열진", "image": "assets/zones/zone-10.png"}, {"id": "zone-11", "name": "초뢰진", "image": "assets/zones/zone-11.png"}, {"id": "zone-12", "name": "풍왕진", "image": "assets/zones/zone-12.png"}, {"id": "zone-13", "name": "환마진", "image": "assets/zones/zone-13.png"}, {"id": "zone-14", "name": "황참진", "image": "assets/zones/zone-14.png"}, {"id": "zone-15", "name": "휘정진", "image": "assets/zones/zone-15.png"}, {"id": "zone-16", "name": "보현일도류", "image": null}, {"id": "zone-17", "name": "견수진", "image": "assets/zones/zone-17.png"}, {"id": "zone-18", "name": "섬격진", "image": "assets/zones/zone-18.png"}];
const characterZoneIds = {"verdanta":["zone-6","zone-14"],"elenoa":["zone-6","zone-14","zone-7"],"linaria":["zone-6"],"clughorn":["zone-6","zone-5","zone-9","zone-1"],"hismena_es":["zone-6"],"nekoko":["zone-13"],"shenhua":["zone-13"],"nightmare":["zone-13"],"kuchinawa":["zone-10"],"raven":["zone-10"],"violet_lancer":["zone-10"],"minghua":["zone-10"],"ceries":["zone-5"],"mildi":["zone-9"],"shigure":["zone-14"],"loyalist":["zone-14","zone-1"],"flammelapis":["zone-7"],"hismena":["zone-4"],"dunarith":["zone-4"],"melpiphia":["zone-12"],"blue_reaper":["zone-12"],"ravina":["zone-12","zone-8"],"merit":["zone-8"],"tsukiha":["zone-8"],"black_swordsman":["zone-1"],"erina":["zone-1"],"nina":["zone-15"],"havoc":["zone-2"],"silver_thunder":["zone-11"],"myrus":["zone-3"]};
Object.assign(characterZoneIds,{"y2023_cerius":["zone-5"],"y2023_oboro":["zone-11"],"y2024_alma_as":["zone-15"],"y2024_thillelille_es":["zone-15"],"y2024_akane_ac":["zone-16"],"y2024_sazanca":["zone-8"],"y2024_daisy_as":["zone-2"],"y2024_kuchinawa":["zone-10"],"y2024_xianhua":["zone-13"],"y2024_anabel_es":["zone-8"],"y2024_ciel_ac":["zone-2"],"y2024_yakumo_as":["zone-13"],"y2024_mazrika":["zone-4"],"y2024_jillfunny":["zone-4"],"y2024_feinne_as":["zone-3"],"y2024_minalca_as":["zone-8"],"y2024_renri_ac":["zone-8","zone-2"],"y2024_utpalaka":["zone-11"],"y2024_zilva_as":["zone-14"],"y2024_shanie_ac":["zone-2"],"y2024_lingli_as":["zone-2"],"y2024_shigure_es":["zone-12","zone-14","zone-16"],"y2024_senya":["zone-1"],"y2024_sesta_as":["zone-12"],"y2024_tsubame_ac":["zone-12"],"y2024_rufus_as":["zone-8"],"y2024_izuna":["zone-11","zone-13"],"y2024_id":["zone-2"],"y2024_elseal_as":["zone-4"]});
// 각 캐릭터의 존 표기 및 프리셋 표시 순서.
const preferredCharacterZones = {y2026_melody_ac:["zone-8","zone-4","zone-11"],y2026_theodorus:["zone-2","zone-10"],y2026_jorna:["zone-1"],y2026_jillfunny_as:["zone-4","zone-15"],y2026_darunis_as:['zone-5','zone-6'],legacy_radica:['zone-8'],loyalist:['zone-1','zone-14'],clughorn:['zone-1','zone-9','zone-5','zone-6'],ravina:['zone-12','zone-8']};
Object.assign(preferredCharacterZones,{"y2025_lokido_ac": ["zone-10"], "y2025_kagurame": ["zone-1", "zone-2"], "y2025_kullervo_as": ["zone-13"], "y2025_yukino_ac": ["zone-4"], "y2025_komachi_as": ["zone-10"], "y2025_shion_ac_as": ["zone-8"], "y2025_shion_es": ["zone-14"], "y2025_nilya": ["zone-15", "zone-2"], "y2025_aldo_as": ["zone-8", "zone-7", "zone-6", "zone-3"], "y2025_velette_as": ["zone-11"], "y2025_red_flamemancer_as": ["zone-15"], "y2025_laclair_ac": ["zone-5"], "y2023_wenefica": ["zone-1"], "legacy_tsukiha": ["zone-8", "zone-14"], "legacy_suzette": ["zone-12"], "legacy_ewan": ["zone-8", "zone-2"], "legacy_shion": ["zone-14"], "legacy_shanie": ["zone-4"], "legacy_mighty": ["zone-4"], "legacy_yuna": ["zone-13", "zone-7"], "legacy_eva": ["zone-13", "zone-4", "zone-15"], "legacy_toova": ["zone-10"], "y2025_nonold": ["zone-13"], "legacy_isuka": ["zone-14", "zone-12", "zone-6"], "legacy_myrus": ["zone-10"], "legacy_hismena": ["zone-4"], "legacy_cetie": ["zone-6"], "legacy_renri": ["zone-6"], "legacy_akane": ["zone-16"], "legacy_mariel": ["zone-13"], "legacy_lokido": ["zone-2"], "legacy_anabel": ["zone-4"], "legacy_rosetta": ["zone-8", "zone-13"], "legacy_kamlanage": ["zone-9", "zone-11"], "legacy_thillelille": ["zone-14", "zone-8", "zone-1"], "legacy_claude": ["zone-5"], "legacy_iphi": ["zone-1", "zone-8"], "legacy_hozuki": ["zone-5"], "legacy_victor": ["zone-14", "zone-11", "zone-12"], "legacy_felmina": ["zone-12"], "legacy_mistrare": ["zone-12", "zone-15"], "legacy_dewey": ["zone-2", "zone-4"], "legacy_gariyu": ["zone-8", "zone-13"], "legacy_ewella": ["zone-4", "zone-15"]});
preferredCharacterZones.legacy_ashtear = [...new Set([...(preferredCharacterZones.legacy_ashtear || []), 'zone-17'])];
preferredCharacterZones.y2025_aldo_as = [...new Set([...(preferredCharacterZones.y2025_aldo_as || []), 'zone-17'])];
preferredCharacterZones.legacy_melissa = [...new Set([...(preferredCharacterZones.legacy_melissa || []), 'zone-18'])];
for (const [id, addedZones] of Object.entries({"legacy_aldo": ["zone-14"], "legacy_tiramisu": ["zone-10"], "legacy_helena": ["zone-13", "zone-10"], "legacy_bertrand": ["zone-10"], "legacy_melina": ["zone-14", "zone-2", "zone-13", "zone-5", "zone-4"], "legacy_guildna": ["zone-8"], "legacy_kid": ["zone-7"], "legacy_harle": ["zone-7"], "legacy_serge": ["zone-7"], "legacy_starky": ["zone-7"], "legacy_cyrus": ["zone-4", "zone-14"], "legacy_rovella": ["zone-5"], "legacy_amy": ["zone-2", "zone-12"]})) {
 preferredCharacterZones[id] = [...new Set([...(preferredCharacterZones[id] || []), ...addedZones])];
}
function getCharacterZones(id){
 const zoneIds=[...new Set([...(preferredCharacterZones[id]||[]),...(characterZoneIds[id]||[])])];
 return zoneIds.map(zoneId=>zones.find(zone=>zone.id===zoneId)).filter(Boolean);
}
// Card zone badges never generate or select a party.
function groupPartyDefinitions(definitions){
 const groups=[],seen=new Set();
 // Prefer the explicitly requested Eleanor/Cetie pair before any other overlap.
 const ordered=[...definitions].sort((a,b)=>{
  const priority=d=>d.zoneId==='zone-6'&&['linaria','hismena_es','legacy_isuka'].every(id=>d.members.includes(id))?(d.members.includes('elenoa')?0:d.members.includes('legacy_cetie')?1:2):2;
  return priority(a)-priority(b);
 });
 for(const definition of ordered){
  const key=definition.zoneId+':'+[...definition.members].sort().join(',')+JSON.stringify(definition.slotAlternatives||{});if(seen.has(key))continue;seen.add(key);
  let merged=false;
  for(const group of groups){
   if(definition.slotAlternatives||group.slotAlternatives||!definition.zoneId||group.zoneId!==definition.zoneId)continue;
   const changed=group.members.map((member,index)=>definition.members.includes(member)?-1:index).filter(index=>index>=0);
   if(changed.length!==1)continue;
   const index=changed[0];if(group.alternatives&&group.alternativeSlot!==index)continue;
   const replacement=definition.members.find(member=>!group.members.includes(member));
   group.alternativeSlot=index;group.alternatives=[...new Set([...(group.alternatives||[group.members[index]]),replacement])];merged=true;break;
  }
  if(!merged)groups.push({...definition,members:[...definition.members]});
 }
 return groups;
}
function getPartyPresets(id){
 if(!characters.some(c=>c.id===id))return [];
 const definitions=groupPartyDefinitions(Object.values(partyPresetDefinitions).flat());
 return definitions.filter(definition=>definition.members.includes(id)||definition.alternatives?.includes(id)||Object.values(definition.slotAlternatives||{}).some(options=>options.includes(id))).map((definition,index)=>{
  const memberIds=[...definition.members];for(const [slot,options] of Object.entries(definition.slotAlternatives||{}))if(options.includes(id))memberIds[Number(slot)]=id;
  if(definition.alternatives?.includes(id))memberIds[definition.alternativeSlot]=id;
  return {...definition,variant:index,zone:(()=>{const zone=zones.find(zone=>zone.id===definition.zoneId);return zone?{...zone,name:definition.displayZoneName||zone.name}:null;})(),
   party:memberIds.map(memberId=>characters.find(character=>character.id===memberId)).filter(Boolean)};
 });
}
function renderAlternativeSlot(slot,ids){
 slot.replaceChildren();slot.classList.add('or-slot');
 const names=document.createElement('div');names.className='or-names';
 ids.forEach((id,index)=>{
  const c=characters.find(c=>c.id===id);if(!c)return;
  const half=document.createElement('div');half.className='or-half or-half-'+(index%2);
  const image=document.createElement('img');image.src=c.image;image.alt='';half.append(image);
  const label=document.createElement('span');label.className='or-character-name or-name-'+(index%2);label.textContent=getCharacterDisplayName(c);
  const style=document.createElement('small');style.textContent=getStyleDetails(c).label;label.append(style);
  if(namuWikiArticles[c.id]){
   const wiki=document.createElement('a');wiki.className='or-wiki-link';wiki.href='https://namu.wiki/w/'+encodeURIComponent(namuWikiArticles[c.id]);wiki.target='_blank';wiki.rel='noopener noreferrer';wiki.setAttribute('aria-label',getCharacterDisplayName(c)+' 나무위키 문서 열기 (새 탭)');
   const icon=document.createElement('img');icon.src='assets/namuwiki.png';icon.alt='';icon.width=24;icon.height=24;wiki.append(icon);label.append(wiki);
  }
  slot.append(half);names.append(label);
 });
 slot.append(names);
 const badge=document.createElement('span');badge.className='or-badge';badge.textContent='OR';slot.append(badge);
 slot.setAttribute('aria-label',ids.map(id=>{const c=characters.find(c=>c.id===id);return getCharacterDisplayName(c)+' '+getStyleDetails(c).label;}).join(' 또는 '));
}
let selected=null,part=0;
let category='catalog',catalogPart=0,dreamPart=1,annualView='monthly';
let catalogOpen=false;
let dreamRenderKey='';
const dreamGrid=document.querySelector('#dream-characters');
const grid=document.querySelector('#characters');
const slots=document.querySelector('#slots');
const search=document.querySelector('#search');
const selectedElements=new Set(),selectedWeapons=new Set(),selectedPersonalities=new Set(),selectedAlignments=new Set(),selectedStyles=new Set();
let spoilerProtection=true;
const revealedSpoilers=new Set();
const spoilerStories={y2026_spirika:'나선의 장: 진화의 두 원칙',y2025_aldo_as:'메인스토리 3부 최종편',y2024_feinne_as:'메인스토리 3부 후편',legacy_guildna:'메인스토리 1.5부',y2025_senya_as:'만고의 죄와 불복의 칼날 10화',y2024_galliard:'닫힌 정원과 창궁의 반역자'};
const specialAcquisitions={};
function isSpoilerHidden(c){return spoilerProtection&&Boolean(spoilerStories[c.id]||specialAcquisitions[c.id])&&!revealedSpoilers.has(c.id);}

function getCharacterStyleKey(character){const label=getStyleDetails(character).label;return label==='어나더 스타일'?'as':label==='엑스트라 스타일'?'es':'ns';}
function matchesCharacterFilters(character){
 const info=characterFilters[character.id];
 return (!selectedStyles.size||selectedStyles.has(getCharacterStyleKey(character)))&&(!selectedAlignments.size||selectedAlignments.has(info?.alignment))&&(!selectedElements.size||info?.elements.some(element=>selectedElements.has(element)))&&(!selectedWeapons.size||selectedWeapons.has(info?.weapon))&&(!selectedPersonalities.size||info?.personalities.some(item=>selectedPersonalities.has(item)));
}

function renderSlots(slots,party,preset=null){
 slots.replaceChildren();
 for(let i=0;i<4;i++){
  const c=party[i];
  const slot=document.createElement('div');
  slot.className='slot'+(c?.id===selected?' leader':'')+(c?' filled':'');
  slot.style.setProperty('--slot-index',String(i));
  slot.innerHTML='<span class="slot-number">0'+(i+1)+'</span><span class="slot-role">'+(c?.id===selected?'선택 캐릭터':c?'추천 동료':'빈 슬롯')+'</span>';
  if(c){
   if(i>0&&['melpiphia','blue_reaper'].includes(c.id)&&['melpiphia','blue_reaper'].every(id=>party.some(member=>member.id===id))){
    const warning=document.createElement('span');warning.className='effect-warning';warning.textContent='[기도 중복]';
    warning.title='멜피피아와 푸른 빛의 낫잡이가 모두 기도 효과를 가지고 있어요.';
    slot.append(warning);
   }
   const portal=document.createElement('span');portal.className='slot-portal';portal.setAttribute('aria-hidden','true');portal.innerHTML='<i></i><i></i><span>✧</span>';
   const flare=document.createElement('span');flare.className='summon-flare';flare.setAttribute('aria-hidden','true');slot.append(portal,flare);
   if(c.image){const img=document.createElement('img');img.className='slot-portrait';img.src=c.image;img.alt=c.name;slot.append(img);}
   else{const placeholder=document.createElement('span');placeholder.className='slot-placeholder';placeholder.setAttribute('aria-hidden','true');slot.classList.add('artwork-empty');slot.append(placeholder);}
   const caption=document.createElement('div');caption.className='slot-caption';
   const label=document.createElement('small');label.textContent=c.id===selected?'선택한 캐릭터':'추천 동료';
   const memberName=document.createElement('span');memberName.textContent=getCharacterDisplayName(c);setupIdentitySticker(c,memberName);caption.append(label,memberName);
   const styleLabel=document.createElement('small');styleLabel.className='preset-member-style';styleLabel.textContent=getStyleDetails(c).label;caption.append(styleLabel);
   slot.append(caption);
   if(namuWikiArticles[c.id]){
   const wikiLink=document.createElement('a');wikiLink.className='slot-wiki-link';
   wikiLink.href='https://namu.wiki/w/'+encodeURIComponent(namuWikiArticles[c.id]);
   wikiLink.target='_blank';wikiLink.rel='noopener noreferrer';
   wikiLink.setAttribute('aria-label',c.name+' 나무위키 문서 열기 (새 탭)');
   wikiLink.title=c.name+' · 나무위키 (새 탭)';
   const wikiIcon=document.createElement('img');wikiIcon.src='assets/namuwiki.png';
   wikiIcon.alt='';wikiIcon.width=24;wikiIcon.height=24;
   wikiLink.append(wikiIcon);slot.append(wikiLink);
   }
  }else{
   const mark=document.createElement('span');mark.className='empty-mark';mark.textContent=i===0?'✧':'+';
   const title=document.createElement('span');title.className='empty-title';title.textContent=preset?'빈자리':i===0?'캐릭터를 선택하세요':'동료를 기다리는 중';
   const subtitle=document.createElement('span');subtitle.className='empty-sub';subtitle.textContent=preset?'3인 프리셋':i===0?'아래 리스트에서 골라 주세요':selected?'등록된 파티 프리셋이 없습니다.':'선택하면 추천이 표시돼요';
   slot.append(mark,title,subtitle);
  }
  const alternatives=preset?.slotAlternatives?.[i]||(preset?.alternatives&&i===preset.alternativeSlot?preset.alternatives:null);
  if(alternatives)renderAlternativeSlot(slot,alternatives);
  slots.append(slot);
 }
}
function renderParty(){
 const presets=getPartyPresets(selected),preset=presets[0],party=getParty(selected);
 renderSlots(slots,party,preset);
 const zone=preset?.zone;
 const zoneBanner=document.querySelector('#party-zone');zoneBanner.replaceChildren();zoneBanner.hidden=!preset;
 if(preset){
  if(zone?.image){const icon=document.createElement('img');icon.src=zone.image;icon.alt='';zoneBanner.append(icon);}
  const label=document.createElement('span');label.textContent=(zone?zone.name+' · ':'')+'프리셋 1';zoneBanner.append(label);
 }
 renderAdditionalPresets();
 document.querySelector('#party-count').textContent=party.length+' / 4';
 document.querySelector('.party-note').hidden=Boolean(preset);
 document.querySelector('#party-note').textContent=!selected?'등록된 조합의 캐릭터를 선택하면 프리셋을 볼 수 있어요.':preset?'':'등록된 파티 프리셋이 없습니다.';
}
function renderAdditionalPresets(){
 const container=document.querySelector('#additional-presets');container.replaceChildren();
 const presets=getPartyPresets(selected).slice(1);container.hidden=presets.length===0;if(!presets.length)return;
 const heading=document.createElement('h2');heading.className='preset-heading';heading.textContent='다른 참고 프리셋';container.append(heading);
 for(const preset of presets){
  const panel=document.createElement('section');panel.className='party-panel';
  const top=document.createElement('div');top.className='preset-title';
  if(preset.zone?.image){const icon=document.createElement('img');icon.src=preset.zone.image;icon.alt='';top.append(icon);}
  const title=document.createElement('h3');title.textContent=(preset.zone?preset.zone.name+' · ':'')+'프리셋 '+(preset.variant+1);
  const count=document.createElement('span');count.className='count';count.textContent=preset.party.length+' / 4';top.append(title,count);
  const presetSlots=document.createElement('div');presetSlots.className='slots';renderSlots(presetSlots,preset.party,preset);
  panel.append(top,presetSlots);container.append(panel);
 }
}

const styleIcons={normal:'assets/styles/ns.png',another:'assets/styles/as.png',extra:'assets/styles/es.png'};
const normalStyleClasses = {
 "elenoa": "서도사",
 "nekoko": "음양묘",
 "verdanta": "그랜드 제너럴",
 "mildi": "알페카",
 "loyalist": "아틀라스",
 "linaria": "디텍티브",
 "merit": "바스테트",
 "clughorn": "아르크투루스",
 "nina": "아라크네",
 "havoc": "마크 달렛",
 "nightmare": "나이트메어",
 "shigure": "대흑천"
};
function getStyleDetails(character){
 const [label,subtitle=normalStyleClasses[character.id]||'']=(character.style||'노멀 스타일').split(' · ');
 const type=label==='어나더 스타일'?'another':label==='엑스트라 스타일'?'extra':'normal';
 return {label,subtitle,icon:styleIcons[type]};
}
// Altema overall ratings, exact featured styles; checked 2026-10-09.
const altemaScores={"shenhua": 98, "kuchinawa": 98, "elenoa": 98, "nekoko": 98, "hismena": 98, "melpiphia": 98, "violet_lancer": 98, "minghua": 98, "clughorn": 98, "nina": 98, "black_swordsman": 98, "blue_reaper": 98, "erina": 98, "havoc": 98, "tsukiha": 98, "nightmare": 98, "ravina": 98, "silver_thunder": 98, "myrus": 98, "verdanta": 99, "linaria": 99, "flammelapis": 99, "merit": 99, "hismena_es": 99, "ceries": 97, "mildi": 97, "loyalist": 97, "raven": 97, "dunarith": 97, "shigure": 96};
Object.assign(altemaScores,Object.fromEntries(catalogCharacters.map(c=>[c.id,c.altemaScore])));
function ratingOrder(id){return altemaScores[id]??-1;}
const encounterPeriods={
 1:"2026년 10월 8일 ~ 10월 12일(월)까지",
 2:"2026년 10월 10일 ~ 10월 14일(수)까지",
 3:"2026년 10월 12일 ~ 10월 16일(금)까지"
};
function createCharacterCard(c){
  const button=document.createElement('button');button.type='button';button.className='character';button.setAttribute('aria-pressed',String(selected===c.id));button.setAttribute('aria-label',getCharacterDisplayName(c)+(c.style?' '+c.style:'')+' 선택');
  const face=document.createElement('span');face.className='character-face';button.append(face);
  const foil=document.createElement('span');foil.className='foil-veil';foil.setAttribute('aria-hidden','true');face.append(foil);
  const corners=document.createElement('span');corners.className='card-corners';corners.setAttribute('aria-hidden','true');face.append(corners);
  button.dataset.characterId=c.id;
  button.dataset.tier=altemaScores[c.id]===null?'unrated':altemaScores[c.id]>=99?'gold':altemaScores[c.id]>=98?'silver':'bronze';
  const characterZones=getCharacterZones(c.id);
  if(characterZones.length||c.id==='y2024_necoco_es'){
   const badges=document.createElement('span');badges.className='card-badges';
   for(const zone of characterZones.filter(zone=>c.id==='legacy_melina'?!['zone-14','zone-2','zone-13','zone-5'].includes(zone.id):c.id!=='nekoko'||zone.id!=='zone-13')){const badge=document.createElement('span');badge.className='card-badge';if(zone.image){const icon=document.createElement('img');icon.src=zone.image;icon.alt='';icon.className='zone-badge-icon';badge.append(icon);}else{badge.classList.add('text-only-zone');}const label=document.createElement('span');label.textContent=zone.name;badge.append(label);badges.append(badge);}
   if(['nekoko','legacy_melina'].includes(c.id)){
    const badge=document.createElement('span');badge.className='card-badge all-weapon-badge';badge.title='황참진 · 굉타진 · 환마진 · 순돌진';
    const icons=document.createElement('span');icons.className='weapon-zone-icons';icons.setAttribute('aria-hidden','true');
    for(const id of ['zone-14','zone-2','zone-13','zone-5']){const zone=zones.find(z=>z.id===id);const icon=document.createElement('img');icon.src=zone.image;icon.alt='';icons.append(icon);}
    const label=document.createElement('span');label.textContent='전 무기 타입 존';badge.append(icons,label);badges.append(badge);
   }
   if(c.id==='y2024_necoco_es'){
    const badge=document.createElement('span');badge.className='card-badge all-element-badge';badge.title='열화진 · 풍왕진 · 수천진 · 지열진 · 휘정진 · 각음진 · 초뢰진';
    const icons=document.createElement('span');icons.className='element-zone-ring';icons.setAttribute('aria-hidden','true');
    for(const [index,id] of ['zone-8','zone-12','zone-4','zone-10','zone-15','zone-1','zone-11'].entries()){
     const zone=zones.find(z=>z.id===id),icon=document.createElement('img');icon.src=zone.image;icon.alt='';
     const angle=(index*2*Math.PI/7)-Math.PI/2;icon.style.left=(25+20*Math.cos(angle))+'px';icon.style.top=(25+20*Math.sin(angle))+'px';icons.append(icon);
    }
    const label=document.createElement('span');label.textContent='전 속성 존';badge.append(icons,label);badges.append(badge);
   }
   face.append(badges);
   button.setAttribute('aria-label',getCharacterDisplayName(c)+(c.style?' '+c.style:'')+' 선택 · 소속 존: '+characterZones.map(zone=>zone.name).join(', '));
  }
  if(['nekoko','legacy_melina'].includes(c.id))button.setAttribute('aria-label',button.getAttribute('aria-label')+' · 전 무기 타입 존: 황참진, 굉타진, 환마진, 순돌진');
  if(c.id==='y2024_necoco_es')button.setAttribute('aria-label',getCharacterDisplayName(c)+' '+c.style+' 선택 · 전 속성 존: 열화진, 풍왕진, 수천진, 지열진, 휘정진, 각음진, 초뢰진');
  const score=altemaScores[c.id];
  const scoreLabel=score===null?'미평가':score+'점';
  const rating=document.createElement('span');rating.className='altema-score '+(score===null?'score-unrated':score>=99?'score-gold':score>=98?'score-silver':'score-bronze');rating.textContent='알테마 '+(score===null?'미평가':score);rating.title='알테마 종합 평가 '+scoreLabel+' · 2026-10-09 확인';rating.setAttribute('aria-label','알테마 '+scoreLabel);face.append(rating);
  button.setAttribute('aria-label',button.getAttribute('aria-label')+' · 알테마 '+scoreLabel);
  const img=document.createElement(c.image?'img':'span');img.className=c.image?'portrait':'portrait portrait-placeholder portrait-empty';if(c.image){img.src=c.image;img.alt='';img.loading='lazy';}else{img.setAttribute('aria-hidden','true');}
  const info=document.createElement('span');info.className='card-info';
  const name=document.createElement('span');name.className='card-name';name.textContent=getCharacterDisplayName(c);setupIdentitySticker(c,name);
  const style=document.createElement('span');style.className='card-style';
  const details=getStyleDetails(c);
  const styleIcon=document.createElement('img');styleIcon.src=details.icon;styleIcon.alt='';styleIcon.className='style-icon';
  const styleCopy=document.createElement('span');styleCopy.className='style-copy';
  const styleLabel=document.createElement('span');styleLabel.className='style-label';styleLabel.textContent=details.label;styleCopy.append(styleLabel);
  if(details.subtitle){const subtitle=document.createElement('span');subtitle.className='style-class';subtitle.textContent=details.subtitle;styleCopy.append(subtitle);}
  const styleMask=document.createElement('span');styleMask.className='style-icon-mask';const styleNoise=document.createElement('span');styleNoise.className='style-icon-noise';styleNoise.textContent='▓';styleNoise.hidden=true;styleMask.append(styleIcon,styleNoise);style.append(styleMask,styleCopy);info.append(name,style);
  const traits=document.createElement('span');traits.className='card-traits';
  const traitData=characterFilters[c.id];
  const traitLabels={staff:'지팡이',katana:'도',sword:'검',ax:'도끼',lance:'창',fists:'권갑',bow:'활',hammer:'망치',fire:'불',water:'물',earth:'땅',wind:'바람',crystal:'결정',shade:'그림자',thunder:'번개',none:'무',light:'천',shadow:'명'};
  if(traitData){
   for(const [kind,values] of [['weapon',[traitData.weapon]],['element',traitData.elements],['alignment',[traitData.alignment]]]){
    const group=document.createElement('span');group.className='trait-group';
    for(const value of values){if(!value)continue;const icon=document.createElement('img');icon.src='assets/card-icons/'+kind+'-'+value+'.png'+(kind==='element'&&value==='water'?'?v=20261010-user-water':'');icon.alt=traitLabels[value];icon.title=traitLabels[value];icon.className='trait-icon';icon.loading='lazy';group.append(icon);}
    traits.append(group);
   }
  }
  face.append(img,traits,info);

  const conceal=isSpoilerHidden(c);
  function revealIdentity(){
   revealedSpoilers.add(c.id);button.classList.remove('spoiler-hidden');
   styleLabel.textContent=details.label;styleLabel.classList.remove('glitch-redacted');styleLabel.removeAttribute('aria-hidden');styleMask.classList.remove('glitch-redacted');styleMask.removeAttribute('aria-hidden');styleIcon.hidden=false;styleNoise.hidden=true;
   const badges=button.querySelector('.card-badges');if(badges){badges.hidden=false;badges.removeAttribute('aria-hidden');}
   name.textContent=getCharacterDisplayName(c);name.classList.remove('glitch-redacted');name.removeAttribute('aria-hidden');
   const subtitle=styleCopy.querySelector('.style-class');if(subtitle){subtitle.textContent=details.subtitle;subtitle.classList.remove('glitch-redacted');subtitle.removeAttribute('aria-hidden');}
   button.querySelector('.spoiler-reveal-hint')?.remove();
   button.setAttribute('aria-label',getCharacterDisplayName(c)+' '+c.style+' 선택 · 알테마 '+scoreLabel);
   document.querySelector('#fx-status').textContent=c.name+' 공개됨';
  }
  if(conceal){
   styleLabel.textContent='░▓▒ ▓░▒▓';styleLabel.classList.add('glitch-redacted');styleLabel.setAttribute('aria-hidden','true');styleMask.classList.add('glitch-redacted');styleMask.setAttribute('aria-hidden','true');styleIcon.hidden=true;styleNoise.hidden=false;
   const badges=button.querySelector('.card-badges');if(badges){badges.hidden=true;badges.setAttribute('aria-hidden','true');}
   button.classList.add('spoiler-hidden');button.setAttribute('aria-label',specialAcquisitions[c.id]?'특수 획득 캐릭터 · 눌러서 보기':spoilerStories[c.id]+' 스토리 스포일러 캐릭터 · 눌러서 보기');
   name.textContent='▓▒░ ▒▓░';name.classList.add('glitch-redacted');name.setAttribute('aria-hidden','true');
   const subtitle=styleCopy.querySelector('.style-class');if(subtitle){subtitle.textContent='░▓▒ ▓░▒▓';subtitle.classList.add('glitch-redacted');subtitle.setAttribute('aria-hidden','true');}
   const hint=document.createElement('span');hint.className='spoiler-reveal-hint';const story=document.createElement('span');story.className='spoiler-story';story.textContent=spoilerStories[c.id]||specialAcquisitions[c.id];const warning=document.createElement('span');warning.className='spoiler-warning';warning.textContent=specialAcquisitions[c.id]?'눌러서 공개':'스토리 스포일러';hint.append(story,warning);face.append(hint);
  }
  button.addEventListener('click',async()=>{
   if(button.classList.contains('spoiler-flipping')||button.classList.contains('identity-peeling'))return;
   if(isSpoilerHidden(c)){
    button.classList.add('spoiler-flipping');
    try { await playSpoilerReveal(button,face,characterFilters[c.id]?.alignment,revealIdentity); }
    finally { button.classList.remove('spoiler-flipping'); }
    return;
   }
   selectCharacter(c.id);
  });
  return button;
}
function syncBrowser(){
 for(const tab of document.querySelectorAll('#catalog-tabs .tab')){
  const active=Number(tab.dataset.part)===catalogPart;
  tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;
 }
 for(const tab of document.querySelectorAll('#dream-tabs .tab')){
  const active=Number(tab.dataset.part)===dreamPart;
  tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;
 }
 for(const button of document.querySelectorAll('.view-option')) button.setAttribute('aria-pressed',String(button.dataset.view===annualView));
}
function renderDreamGrid(){
 const key=JSON.stringify([dreamPart,selected,spoilerProtection,[...revealedSpoilers],[...revealedIdentities]]);
 if(key===dreamRenderKey)return;dreamRenderKey=key;
 dreamGrid.replaceChildren();
 dreamGrid.setAttribute('aria-labelledby','tab-'+dreamPart);
 document.querySelector('#encounter-period .encounter-label').replaceChildren();
 const encounterLabel=document.querySelector('#encounter-period .encounter-label');
 if(dreamPart===4){encounterLabel.textContent='확률업 · 다르니스 AS';}
 else{encounterLabel.append('확률업 만남 · Part ');const partLabel=document.createElement('span');partLabel.id='encounter-part';partLabel.textContent=dreamPart;encounterLabel.append(partLabel,' ▼개최 기간');}
 document.querySelector('#encounter-dates').textContent=dreamPart===4?'~ 26.11.8':encounterPeriods[dreamPart];
 for(const c of characters.filter(c=>dreamPart===4?c.id==='y2026_darunis_as':c.part===dreamPart).sort((a,b)=>ratingOrder(b.id)-ratingOrder(a.id)))dreamGrid.append(createCharacterCard(c));
}
function changeCollectionTab(button){
 catalogOpen=button.dataset.category==='catalog';
 document.querySelector('#catalog-panel').hidden=!catalogOpen;
 document.querySelector('#dream-panel').hidden=catalogOpen;
 for(const tab of document.querySelectorAll('.category-tab')){
  const active=tab===button;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;
 }
 renderGrid(true);
}
function renderGrid(animate=false){
 if(!catalogOpen)renderDreamGrid();
 if(!catalogOpen){grid.replaceChildren();return;}
 const annualCollection=category==='catalog'&&part>=2000;
 const stellarCollection=category==='catalog'&&part===-2023;
 const allCollection=category==='catalog'&&part===0;
 const grouped=(annualCollection||stellarCollection)&&annualView==='monthly';
 const dates=stellarCollection?stellarAwakeningDates:releaseCollections.get(part);

 document.querySelector('#year-description').hidden=!(annualCollection||stellarCollection);
 document.querySelector('#all-description').hidden=!allCollection;
 document.querySelector('#year-view-controls').hidden=!(annualCollection||stellarCollection);
 document.querySelector('#view-monthly').textContent=stellarCollection?'연도별 순':'월별순';
 if(annualCollection||stellarCollection){
  document.querySelector('#year-description strong').textContent=stellarCollection?'~2023년':part+'년 출시';
  document.querySelector('#year-description span').textContent=stellarCollection?'구 캐릭터 성도각성 · 적용 연도별':part===2026?'1~10월 · 신규 캐릭터 · 신규 스타일 · 5성 클래스':part===2023?'11월 세리에스 노멀 스타일부터 · 11~12월':'신규 캐릭터 · 신규 스타일 · 5성 클래스';
 }
 grid.replaceChildren();
 grid.setAttribute('aria-labelledby','tab-'+part);
 if(grouped) grid.classList.add('monthly-view');else grid.classList.remove('monthly-view');
 const q=search.value.replace(/\s/g,'').toLowerCase();
 const filtered=characters.filter(c=>category==='dream'?c.part===part:allCollection||(dates?.has(c.id)&&(!annualCollection||!stellarAwakeningDates.has(c.id)))).filter(c=>{
  const style=getStyleDetails(c);
  return matchesCharacterFilters(c)&&(isSpoilerHidden(c)?(specialAcquisitions[c.id]?'특수 획득 캐릭터 ':'스포일러 캐릭터 ')+style.label:c.name+style.label+style.subtitle).replace(/\s/g,'').toLowerCase().includes(q);
 }).sort(grouped?
  (a,b)=>dates.get(a.id).localeCompare(dates.get(b.id))||ratingOrder(b.id)-ratingOrder(a.id):
  (a,b)=>ratingOrder(b.id)-ratingOrder(a.id));
 if(!filtered.length){grid.innerHTML='<div class="blank"><strong>찾는 캐릭터가 없어요.</strong>검색어 또는 필터 조건을 변경해 주세요.</div>';document.dispatchEvent(new CustomEvent('partycompass:grid',{detail:{animate:false}}));return;}
 if(grouped){
  const firstMonth=part===2023?11:1,lastMonth=part===2026?10:12;
  const periods=stellarCollection?[...new Set([...stellarAwakeningDates.values()].map(date=>Number(date.slice(0,4))))].sort((a,b)=>a-b):Array.from({length:lastMonth-firstMonth+1},(_,i)=>firstMonth+i);
  for(const period of periods){
   const members=filtered.filter(c=>Number(dates.get(c.id).slice(stellarCollection?0:5,stellarCollection?4:7))===period);
   if(q&&!members.length) continue;
   const section=document.createElement('section');section.className=stellarCollection?'month-section stellar-year-section':'month-section';
   if(stellarCollection) section.dataset.year=String(period);else section.dataset.month=String(period);
   const heading=document.createElement('h3');heading.className='month-title';heading.id=stellarCollection?'awakening-'+period:'release-'+part+'-'+String(period).padStart(2,'0');heading.textContent=stellarCollection?period+'년 성도각성':part+'년 '+period+'월';
   section.setAttribute('aria-labelledby',heading.id);section.append(heading);
   if(members.length){
    const cards=document.createElement('div');cards.className='grid month-cards';
    for(const c of members) cards.append(createCharacterCard(c));
    section.append(cards);
   }else{
    const empty=document.createElement('p');empty.className='month-empty';empty.textContent='등록된 캐릭터가 없어요.';section.append(empty);
   }
   grid.append(section);
  }
 }else{
  for(const c of filtered) grid.append(createCharacterCard(c));
 }
 document.dispatchEvent(new CustomEvent('partycompass:grid',{detail:{animate,part}}));
}
function selectCharacter(id){
 if(!characters.some(c=>c.id===id)) return;
 selected=id;renderParty();renderGrid();
 (catalogOpen?grid:dreamGrid).querySelector('[aria-pressed="true"]')?.focus({preventScroll:true});
 document.dispatchEvent(new CustomEvent('partycompass:selection',{detail:{id,party:getParty(id),zone:getPartyPresets(id)[0]?.zone}}));

}
function changePart(button){
 part=Number(button.dataset.part);
 category='catalog';catalogPart=part;
 syncBrowser();renderGrid(true);
}
function bindTabs(selector,change){
 const tabs=[...document.querySelectorAll(selector)];
 for(const tab of tabs){
  tab.addEventListener('click',()=>change(tab));
  tab.addEventListener('keydown',e=>{
   let next;
   if(e.key==='ArrowRight')next=(tabs.indexOf(tab)+1)%tabs.length;
   if(e.key==='ArrowLeft')next=(tabs.indexOf(tab)+tabs.length-1)%tabs.length;
   if(e.key==='Home')next=0;
   if(e.key==='End')next=tabs.length-1;
   if(next!==undefined){e.preventDefault();tabs[next].focus();change(tabs[next]);}
  });
 }
}

bindTabs('.category-tab',changeCollectionTab);
bindTabs('#catalog-tabs .tab',changePart);
bindTabs('#dream-tabs .tab',button=>{dreamPart=Number(button.dataset.part);syncBrowser();renderDreamGrid();});
for(const button of document.querySelectorAll('.view-option')) button.addEventListener('click',()=>{annualView=button.dataset.view;syncBrowser();renderGrid(true);});
search.addEventListener('input',()=>renderGrid());
document.querySelector('#reset').addEventListener('click',()=>{selected=null;renderParty();renderGrid();document.dispatchEvent(new CustomEvent('partycompass:reset'));});
const filterToggle=document.querySelector('#filter-toggle'),filterPanel=document.querySelector('#character-filter-panel');
function setFilterOpen(open){filterPanel.hidden=!open;filterToggle.setAttribute('aria-expanded',String(open));}
filterToggle.addEventListener('click',()=>setFilterOpen(filterPanel.hidden));
filterPanel.addEventListener('keydown',event=>{if(event.key==='Escape'){setFilterOpen(false);filterToggle.focus();}});
function updateCharacterFilters(){
 selectedElements.clear();selectedWeapons.clear();selectedPersonalities.clear();selectedAlignments.clear();selectedStyles.clear();
 for(const input of filterPanel.querySelectorAll('input[name]:checked'))(input.name==='filter-alignment'?selectedAlignments:input.name==='filter-element'?selectedElements:input.name==='filter-weapon'?selectedWeapons:input.name==='filter-style'?selectedStyles:selectedPersonalities).add(input.value);
 document.querySelector('#personality-count').textContent=selectedPersonalities.size?' · '+selectedPersonalities.size+'개 선택':'';
 const count=selectedElements.size+selectedWeapons.size+selectedPersonalities.size+selectedAlignments.size+selectedStyles.size,badge=document.querySelector('#filter-count');badge.textContent=String(count);badge.hidden=!count;
 filterToggle.classList.toggle('is-active',count>0);renderActiveFilters();renderGrid();
}
const personalityLabels={"Alchemist":"연금술사","Amnesia":"기억상실","Animal Talker":"동물 대화","Art":"미술","Avenger":"복수","Ax":"도끼","Baruoki":"바르오키","Beast":"마수","Bind":"봉인","Blacksmith":"대장간","Bookworm":"독서가","Bow":"활","Cat Hater":"혐묘가","Cat lover":"애묘가","Childhood Friend":"죽마고우","Chronos Empire":"시간 제국","Clergy":"성직자","Cooking":"요리","Crystal":"결정","Cursed":"저주","Demon Sword":"마검","Dog lover":"애견가","Dragon":"용","Dragon Killer":"드래곤 킬러","Earth":"땅","Eastern":"동방","Elf":"엘프","Estrangement":"낯가림","Fairy":"요정","Fire":"불","Fists":"권갑","Forager":"채집","Funeral":"장례","Future Revolutionary":"미래 혁명가","Glasses":"안경","Glutton":"대식가","Gourmet":"미식","Guiding Light":"천계의 인도","Gun":"총","Hammer":"망치","Hood":"후드","IDA School":"IDA 스쿨","Itto-Ryu":"보현일도류","Katana":"도","Lance":"창","Land of Mi":"뱀의 땅","Land of Ro":"여의 땅","Land of Shin":"신의 나라","Lost Laboratory":"로스트 랩","Lovesick":"상사병","Luring Shadow":"명계의 부름","Machinery":"기계","Mask":"가면","Miglance Palace":"미글랜스 왕궁","Military":"밀리터리","Miner":"채굴","Minstrel":"음유 시인","Mounted":"라이더","Napper":"낮잠","New Radical Dreamers":"신 몽상 과격단","New Time Drift":"신 시공 초한 유파","Nicknamer":"작명가","Ninja":"첩자","Outlaw":"무법자","Power to Rule":"만능의 지배자","Prince of Time":"시간의 황자","Protagonist":"주인공","Purgatory":"연옥계","Royalty":"왕족","Scientist":"과학자","Shade":"그림자","Sharp Ears":"귀가 밝음","Shield":"방패","Spicy Lover":"부천수 애호가","Spirit Talker":"정령 대화","Spirit-fused":"영매 체질","Staff":"지팡이","Star":"별","Sweet tooth":"단것 애호가","Sword":"검","Synth Human":"합성인간","Thunder":"번개","Titan":"타이탄","Traveler":"인도의 트래블러","Water":"물","Weapons":"장비","West":"서방","Wind":"바람","Arcadia":"아르카디아","Atelier":"아틀리에","Scallywag":"괭이갈매기 애호가","Scars of the Wheel of Time":"시간의 상흔의 윤무","KMS":"KMS사","Concerto Artes":"콘체르토 아트","Geo":"지오","MMA":"격투기","Paradoxical Dreamers' Leader":"역설 몽상단 리더","FFIX":"FF Ⅸ"};
const personalityAliases={"Amnesia":"기억 상실","Animal Talker":"동물과 대화","Avenger":"복수자","Bind":"속박","Blacksmith":"대장장이","Cat Hater":"고양이 싫어함","Cat lover":"고양이 애호가","Childhood Friend":"소꿉친구","Chronos Empire":"크로노스 제국","Dog lover":"개 애호가","Dragon Killer":"용살자","Estrangement":"이별","Gourmet":"미식가","Guiding Light":"천","KMS":"KMS","Land of Mi":"미의 나라","Lovesick":"짝사랑","Luring Shadow":"명","Military":"군인","Miner":"광부","Minstrel":"음유시인","Mounted":"기승","New Radical Dreamers":"새로운 래디컬 드리머즈","New Time Drift":"새로운 시공 표류자","Nicknamer":"별명 짓기","Ninja":"닌자","Power to Rule":"통치의 힘","Prince of Time":"시간의 왕자","Purgatory":"연옥","Sharp Ears":"뾰족 귀","Spicy Lover":"매운맛 애호가","Spirit Talker":"정령과 대화","Spirit-fused":"정령 융합","Titan":"거인","Traveler":"여행자","Weapons":"무기","Scallywag":"악동","Scars of the Wheel of Time":"시간의 바퀴의 상흔","Concerto Artes":"Concerto Artes","Geo":"Geo","MMA":"MMA","Paradoxical Dreamers' Leader":"Paradoxical Dreamers' Leader","FFIX":"FFIX"};
const duplicatePersonalityFilters=new Set(['Staff','Katana','Sword','Ax','Axe','Lance','Fists','Bow','Hammer','Fire','Water','Earth','Wind','Crystal','Shade','Thunder']);
const personalityOptions=document.querySelector('#personality-options');
for(const value of [...new Set(Object.values(characterFilters).flatMap(info=>info.personalities))].filter(value=>!duplicatePersonalityFilters.has(value)).sort((a,b)=>(personalityLabels[a]||a).localeCompare(personalityLabels[b]||b,'ko'))){
 const label=document.createElement('label');label.className='filter-chip';label.dataset.personalitySearch=((personalityLabels[value]||value)+' '+value+' '+(personalityAliases[value]||'')).replace(/\s/g,'').toLowerCase();
 const input=document.createElement('input');input.type='checkbox';input.name='filter-personality';input.value=value;
 const name=document.createElement('span');name.textContent=personalityLabels[value]||value;label.title=value;label.append(input,name);personalityOptions.append(label);
}
document.querySelector('#personality-search').addEventListener('input',event=>{
 const query=event.target.value.replace(/\s/g,'').toLowerCase();let visible=0;
 for(const label of personalityOptions.children){label.hidden=!label.dataset.personalitySearch.includes(query);if(!label.hidden)visible++;}
 document.querySelector('#personality-empty').hidden=visible>0;
});
filterPanel.addEventListener('change',event=>{
 if(event.target.id==='spoiler-filter'){spoilerProtection=event.target.checked;revealedSpoilers.clear();document.querySelector('#spoiler-filter-state').textContent=spoilerProtection?'적용 중':'미적용';document.querySelector('#spoiler-filter-description').textContent=spoilerProtection?'스포일러 카드를 가립니다. 카드를 누르면 정체가 공개됩니다.':'스포일러 카드의 정체를 모두 표시합니다.';}
 updateCharacterFilters();
});
document.querySelector('#filter-clear').addEventListener('click',()=>{for(const input of filterPanel.querySelectorAll('input[name]'))input.checked=false;document.querySelector('#personality-search').value='';for(const label of personalityOptions.children)label.hidden=false;document.querySelector('#personality-empty').hidden=true;updateCharacterFilters();});
syncBrowser();renderParty();renderGrid();

function renderActiveFilters(){
 const chips=document.querySelector('#active-filter-chips');chips.replaceChildren();
 const inputs=[...filterPanel.querySelectorAll('input[name]:checked')];
 for(const input of inputs){const chip=document.createElement('button');chip.type='button';chip.className='active-filter-chip';const label=input.closest('label').querySelector('span').textContent.trim();chip.textContent=label+' ×';chip.setAttribute('aria-label',label+' 필터 해제');chip.addEventListener('click',()=>{input.checked=false;updateCharacterFilters();document.querySelector('#filter-toggle').focus({preventScroll:true});});chips.append(chip);}
 const status=document.querySelector('#active-spoiler-status');status.textContent='스포일러 필터 · '+(spoilerProtection?'적용 중':'미적용');status.classList.toggle('is-off',!spoilerProtection);
 document.querySelector('#active-filter-clear').hidden=inputs.length===0;
}
document.querySelector('#active-filter-clear').addEventListener('click',()=>document.querySelector('#filter-clear').click());
renderActiveFilters();
