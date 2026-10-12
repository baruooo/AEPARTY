// Notice periods in Korea time. The displayed closing minute is inclusive.
window.encounterSchedule={
 1:{endsAt:'2026-10-12T23:59:00+09:00',period:'Ver 3.17.10 업데이트 후 ~ 2026.10.12 23:59 (한국 시간)'},
 2:{startsAt:'2026-10-10T00:00:00+09:00',endsAt:'2026-10-14T23:59:00+09:00',period:'2026.10.10 00:00 ~ 2026.10.14 23:59 (한국 시간)'},
 3:{startsAt:'2026-10-12T00:00:00+09:00',endsAt:'2026-10-16T23:59:00+09:00',period:'2026.10.12 00:00 ~ 2026.10.16 23:59 (한국 시간)'},
 4:{endsAt:'2026-11-08T23:59:00+09:00',period:'~ 2026.11.08 23:59 (한국 시간)'}
};
window.isEncounterEnded=(endDate,now=Date.now())=>now>=(endDate.includes('T')?Date.parse(endDate)+60000:Date.parse(endDate+'T00:00:00+09:00')+86400000);
