// Notice periods in Korea time. The displayed closing minute is inclusive.
window.encounterSchedule={
 1:{endsAt:'2026-10-12T23:59:00+09:00',period:'Ver 3.17.10 업데이트 후 ~ 2026.10.12 23:59 (한국 시간)'},
 2:{startsAt:'2026-10-10T00:00:00+09:00',endsAt:'2026-10-14T23:59:00+09:00',period:'2026.10.10 00:00 ~ 2026.10.14 23:59 (한국 시간)'},
 3:{startsAt:'2026-10-12T00:00:00+09:00',endsAt:'2026-10-16T23:59:00+09:00',period:'2026.10.12 00:00 ~ 2026.10.16 23:59 (한국 시간)'},
 6:{startsAt:'2026-11-05T12:00:00+09:00',endsAt:'2026-12-06T23:59:00+09:00',period:'2026.11.05 12:00경 ~ 2026.12.06 23:59 (한국 시간)'},
 5:{startsAt:'2026-10-22T12:00:00+09:00',endsAt:'2026-11-22T23:59:00+09:00',period:'2026.10.22 12:00경 ~ 2026.11.22 23:59 (한국 시간)'},
 4:{startsAt:'2026-10-08T12:00:00+09:00',endsAt:'2026-11-08T23:59:00+09:00',period:'2026.10.08 12:00경 ~ 2026.11.08 23:59 (한국 시간)'}
};
window.isEncounterEnded=(endDate,now=Date.now())=>Boolean(endDate)&&now>=(endDate.includes('T')?Date.parse(endDate)+60000:Date.parse(endDate+'T00:00:00+09:00')+86400000);

window.getEncounterStatus=(period,now=Date.now())=>window.isEncounterEnded(period.endsAt,now)?'ended':period.startsAt&&now<Date.parse(period.startsAt)?'upcoming':'active';
