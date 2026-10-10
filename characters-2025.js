'use strict';

// Global/JP releases in 2025: new playable characters, new styles and the
// newly unlocked five-star Nonold and Akane. Stellar Awakening-only updates and
// Sidekicks are excluded. Existing character/style IDs are reused across tabs.
// New portraits use transparent Rank 5 WebP assets; no new party/ZONE rules.
// Release notices: https://wp.another-eden.jp/index.php/news/YYYYMMDD/
// Korean names/classes: the corresponding Namu Wiki character articles.
// Altema overall ratings checked 2026-10-09, for each exact style.
const characters2025 = [
  {id:'y2025_lokido_ac', name:'"적막의 연기자" 로키드', style:'노멀 스타일 · 테아트랄 베트', releaseDate:'2025-01-09', releaseVersion:'3.10.20', releaseKind:'new-character', altemaScore:97, wikiArticle:'적막의 연기자', image:'assets/2025/lokido-ac.webp'},
  {id:'y2025_kagurame', name:'카구라메', style:'노멀 스타일 · 야오비쿠니', releaseDate:'2025-01-23', releaseVersion:'3.10.30', releaseKind:'new-character', altemaScore:97, wikiArticle:'카구라메', image:'assets/2025/kagurame.webp'},
  {id:'y2025_kullervo_as', name:'쿨레르보', style:'어나더 스타일 · 리바이버', releaseDate:'2025-02-06', releaseVersion:'3.10.40', releaseKind:'new-style', altemaScore:97, wikiArticle:'쿨레르보(어나더 에덴)', image:'assets/2025/krervo-as.webp'},
  {id:'y2025_nonold', name:'노놀드', style:'노멀 스타일 · 아마란투스', releaseDate:'2025-02-06', releaseVersion:'3.10.40', releaseKind:'class-unlock', altemaScore:91, wikiArticle:'노놀드', image:'assets/2025/nonold.webp'},
  {id:'y2025_yukino_ac', name:'"빙무의 가희" 유키노', style:'노멀 스타일 · 아메노우즈메', releaseDate:'2025-02-20', releaseVersion:'3.10.50', releaseKind:'new-character', altemaScore:95, wikiArticle:'빙무의 가희', image:'assets/2025/yukino-ac.webp'},
  {id:'y2025_komachi_as', name:'코마치', style:'어나더 스타일 · 사쿠야비메', releaseDate:'2025-03-06', releaseVersion:'3.10.60', releaseKind:'new-style', altemaScore:97, wikiArticle:'코마치(어나더 에덴)', image:'assets/2025/komachi-as.webp'},
  {id:'y2025_shion_ac_as', name:'"먹빛의 책사" 시온', style:'어나더 스타일 · 오오쿠니누시', releaseDate:'2025-03-19', releaseVersion:'3.10.70', releaseKind:'new-style', altemaScore:98, wikiArticle:'먹빛의 책사', image:'assets/2025/shion-ac-as.webp'},
  {id:'y2025_senya_as', name:'센야', style:'어나더 스타일 · 아메노토츠카', releaseDate:'2025-03-19', releaseVersion:'3.10.70', releaseKind:'new-style', altemaScore:93, wikiArticle:'센야(어나더 에덴)', image:'assets/2025/senya-as.webp'},
  {id:'y2025_nilya', name:'니르야', style:'노멀 스타일 · 아노말리 데브리', releaseDate:'2025-04-12', releaseVersion:'3.11.0', releaseKind:'new-character', altemaScore:98, wikiArticle:'니르야(어나더 에덴)', image:'assets/2025/nilya.webp'},
  {id:'y2025_shion_es', name:'시온', style:'엑스트라 스타일 · 후츠노미타마', releaseDate:'2025-04-12', releaseVersion:'3.11.0', releaseKind:'new-style', altemaScore:99, wikiArticle:'시온(어나더 에덴)', image:'assets/2025/shion-es.webp'},
  {id:'y2025_aldo_as', name:'알도', style:'어나더 스타일 · 크로노 브레이버', releaseDate:'2025-04-12', releaseVersion:'3.11.0', releaseKind:'new-style', altemaScore:96, wikiArticle:'알도(어나더 에덴)', image:'assets/2025/aldo-as.webp'},
  {id:'y2025_velette_as', name:'베레토', style:'어나더 스타일 · 아크로지스트', releaseDate:'2025-04-24', releaseVersion:'3.11.10', releaseKind:'new-style', altemaScore:99, wikiArticle:'베레토', image:'assets/2025/velette-as.webp'},
  {id:'y2025_red_flamemancer_as', name:'빨간 외투의 화염술사', style:'어나더 스타일 · 라스트 헤이븐', releaseDate:'2025-05-08', releaseVersion:'3.11.20', releaseKind:'new-style', altemaScore:97, wikiArticle:'빨간 외투의 화염술사', image:'assets/2025/dewey-ac-as.webp'},
  {id:'y2025_laclair_ac', name:'"의협의 사냥꾼" 라클레어', style:'노멀 스타일 · 볼뢰르', releaseDate:'2025-05-22', releaseVersion:'3.11.30', releaseKind:'new-character', altemaScore:97, wikiArticle:'의협의 사냥꾼', image:'assets/2025/laclair-ac.webp'},
  {id:'linaria', name:'리나리아', style:'노멀 스타일 · 디텍티브', releaseDate:'2025-06-05', releaseVersion:'3.12.0', releaseKind:'new-character', altemaScore:99, wikiArticle:'리나리아(어나더 에덴)', image:''},
  {id:'blue_reaper', name:'푸른 빛의 낫잡이', style:'어나더 스타일 · 스위트 레이디', releaseDate:'2025-06-19', releaseVersion:'3.12.10', releaseKind:'new-style', altemaScore:98, wikiArticle:'푸른 빛의 낫잡이', image:''},
  {id:'shigure', name:'"붉은 소매의 행상인" 시구레', style:'노멀 스타일 · 대흑천', releaseDate:'2025-07-10', releaseVersion:'3.12.20', releaseKind:'new-character', altemaScore:96, wikiArticle:'붉은 소매의 행상인', image:''},
  {id:'raven', name:'레이븐', style:'어나더 스타일 · 프로핏', releaseDate:'2025-07-24', releaseVersion:'3.12.30', releaseKind:'new-style', altemaScore:97, wikiArticle:'레이븐(어나더 에덴)', image:''},
  {id:'black_swordsman', name:'검은 옷의 칼잡이', style:'어나더 스타일 · 에뚜알르', releaseDate:'2025-08-07', releaseVersion:'3.12.40', releaseKind:'new-style', altemaScore:98, wikiArticle:'검은 옷의 칼잡이', image:''},
  {id:'myrus', name:'뮬루스', style:'엑스트라 스타일 · 웨네트', releaseDate:'2025-08-21', releaseVersion:'3.12.50', releaseKind:'new-style', altemaScore:98, wikiArticle:'뮬루스', image:''},
  {id:'loyalist', name:'푸른색의 충신', style:'노멀 스타일 · 아틀라스', releaseDate:'2025-09-04', releaseVersion:'3.12.60', releaseKind:'new-character', altemaScore:97, wikiArticle:'푸른색의 충신', image:''},
  {id:'nina', name:'니나', style:'노멀 스타일 · 아라크네', releaseDate:'2025-09-18', releaseVersion:'3.12.70', releaseKind:'new-character', altemaScore:98, wikiArticle:'니나(어나더 에덴)', image:''},
  {id:'dunarith', name:'"꿈의 음유시인" 듀나리스', style:'어나더 스타일 · 디오니소스', releaseDate:'2025-10-02', releaseVersion:'3.12.80', releaseKind:'new-style', altemaScore:97, wikiArticle:'꿈의 음유 시인', image:''},
  {id:'mildi', name:'밀디', style:'노멀 스타일 · 알페카', releaseDate:'2025-10-16', releaseVersion:'3.13.0', releaseKind:'new-character', altemaScore:97, wikiArticle:'밀디', image:''},
  {id:'clughorn', name:'클러그혼', style:'노멀 스타일 · 아르크투루스', releaseDate:'2025-11-06', releaseVersion:'3.13.10', releaseKind:'new-character', altemaScore:98, wikiArticle:'클러그혼', image:''},
  {id:'silver_thunder', name:'은빛을 휘감은 번개술사', style:'어나더 스타일 · 이그노랜스', releaseDate:'2025-11-20', releaseVersion:'3.13.20', releaseKind:'new-style', altemaScore:98, wikiArticle:'은빛을 휘감은 번개술사', image:''},
  {id:'verdanta', name:'베르단타', style:'노멀 스타일 · 그랜드 제너럴', releaseDate:'2025-12-04', releaseVersion:'3.13.50', releaseKind:'new-character', altemaScore:99, wikiArticle:'베르단타', image:''},
  {id:'y2025_zidane', name:'지탄', style:'노멀 스타일 · 도적', releaseDate:'2025-12-04', releaseVersion:'3.13.50', releaseKind:'new-character', altemaScore:90, wikiArticle:'지탄(어나더 에덴)', image:'assets/2025/zidane.webp'},
  {id:'y2025_vivi', name:'비비', style:'노멀 스타일 · 흑마도사', releaseDate:'2025-12-04', releaseVersion:'3.13.50', releaseKind:'new-character', altemaScore:89, wikiArticle:'비비(어나더 에덴)', image:'assets/2025/vivi.webp'},
  {id:'y2025_garnet', name:'가넷', style:'노멀 스타일 · 순진한 여왕', releaseDate:'2025-12-04', releaseVersion:'3.13.50', releaseKind:'new-character', altemaScore:88, wikiArticle:'가넷(어나더 에덴)', image:'assets/2025/garnet.webp'},
  {id:'y2025_steiner', name:'슈타이너', style:'노멀 스타일 · 근위 기사', releaseDate:'2025-12-04', releaseVersion:'3.13.50', releaseKind:'new-character', altemaScore:87, wikiArticle:'슈타이너(어나더 에덴)', image:'assets/2025/steiner.webp'},
  {id:'minghua', name:'"백자의 마인" 밍화', style:'어나더 스타일 · 샤스티', releaseDate:'2025-12-18', releaseVersion:'3.13.60', releaseKind:'new-style', altemaScore:98, wikiArticle:'백자의 마인', image:''},
  {id:'hismena_es', name:'히스메나', style:'엑스트라 스타일 · 프라가라흐', releaseDate:'2025-12-30', releaseVersion:'3.13.60', releaseKind:'new-style', altemaScore:99, wikiArticle:'히스메나', image:'assets/part3/character-9.webp', releaseSource:'https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1819386365113564'},
  {id:'legacy_akane', name:'아카네', style:'노멀 스타일 · 히하야히', releaseDate:'2025-07-10', releaseVersion:'3.12.20', releaseKind:'class-unlock', altemaScore:95, wikiArticle:'아카네(어나더 에덴)', image:'assets/stellar/akane.webp', releaseSource:'https://api-ap.another-eden.games/asset/notice_v2/view/644?language=ko'}
].map(character => ({
  ...character,
  part:2025,
  releaseSource:character.releaseSource||'https://wp.another-eden.jp/index.php/news/'+character.releaseDate.replaceAll('-','')+'/'
}));
