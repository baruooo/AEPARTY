'use strict';
// Image and list source: anothereden.game-info.wiki; checked 2026-10-15.
window.partyGuideBuddies=[
  {
    "id": "choco",
    "name": "초코",
    "originalName": "チョコ",
    "style": "노멀 스타일",
    "rank": "★5",
    "element": "none",
    "image": "assets/buddies/choco.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%c1%a5%e7%a5%b3",
    "imageSource": "https://image02.seesaawiki.jp/a/o/anothereden-game-info/06c81f4498c591a3.png",
    "styleKey": "ns",
    "acquisition": "story",
    "rarities": [
      5
    ],
    "acquisitionPath": "파이널 판타지 IX 협주",
    "details": {
      "autoSkill": {
        "name": "딜리셔스☆힐",
        "charge": 1,
        "effects": [
          "아군 전체 HP 회복 20% + MP 회복 25"
        ],
        "additional": {
          "condition": "「FF IX」 캐릭터일 경우",
          "effects": [
            "효과량 증가(2배)"
          ]
        },
        "note": "스테이터스에 따른 스킬 효과 상승: HP 회복량 n% UP"
      },
      "chargeSkill": {
        "name": "초코 브레이브",
        "charge": 8,
        "effects": [
          "아군 전체의 모든 속성 공격 100% UP(3회 행동)"
        ],
        "additional": {
          "condition": "「FF IX」 캐릭터일 경우",
          "effects": [
            "트랜스 게이지 축적"
          ]
        }
      },
      "auras": [
        {
          "name": "용기의 날개",
          "target": "아군 단일",
          "condition": "HP가 「50%」 이하가 되면 발동",
          "effects": [
            "발동 조건을 달성한 아군 하나의 HP 최대치 30% UP"
          ]
        },
        {
          "name": "초코의 응원!",
          "target": "아군 전체",
          "condition": "「대기」 계통의 환경 발생 시 발동",
          "effects": [
            "아군 전체의 크리티컬 대미지 20% UP",
            "아군 전체의 마법 크리티컬 대미지 20% UP"
          ]
        }
      ]
    }
  },
  {
    "id": "hanyamo",
    "name": "하냐모",
    "originalName": "ハニャモ",
    "style": "노멀 스타일",
    "rank": "★4",
    "element": "none",
    "image": "assets/buddies/hanyamo.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%cf%a5%cb%a5%e3%a5%e2",
    "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/c4bbec2151d2bea6.png",
    "styleKey": "ns",
    "acquisition": "story",
    "rarities": [
      4
    ],
    "acquisitionPath": "망향의 혼과 역성의 여행자 - 환령의 검과 기서의 등불",
    "details": {
      "autoSkill": {
        "name": "프리즘 브레이크",
        "charge": 1,
        "effects": [
          "적 전체에 고정 대미지 공격(100,000)",
          "하냐모의 레벨에 따라 대미지량 증가(최대 레벨 60/10배)",
          "베기 저항 15% DOWN + 마법 저항 15% DOWN(3턴, 최고 누적 횟수 3)"
        ],
        "note": "스테이터스에 따른 스킬 효과 상승: 디버프 효과량 n% UP",
        "additionals": [
          {
            "condition": "플라즈마 쿼츠 장착 시 추가",
            "effects": [
              "아군 전방에 「검」, 「도」, 「도끼」 특성 인원수가 3명 이상일 경우 적 전체에 웨폰 브레이크(베기) 3 축적",
              "아군 전방에 「지팡이」 특성 인원수가 3명 이상일 경우 적 전체에 웨폰 브레이크(마법) 3 축적"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "크로노 레저넌스",
          "target": "적 전체",
          "condition": "랜덤 적이 베기, 마법 대미지를 받으면 발동",
          "effects": [
            "아군 전체의 가하는 대미지가 10% UP"
          ]
        }
      ]
    }
  },
  {
    "id": "mare",
    "name": "메어",
    "originalName": "メア",
    "style": "노멀 스타일",
    "rank": "★5",
    "element": "shade",
    "image": "assets/buddies/mare.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%e1%a5%a2",
    "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/37b92eac6c8ef4f1.png",
    "styleKey": "ns",
    "acquisition": "dream",
    "rarities": [
      5
    ],
    "obtain": {
      "name": "어둠 잠식의 몽마",
      "style": "노멀 스타일",
      "image": "assets/part3/character-5.webp",
      "faceCrop": {
        "x": 540,
        "y": 175,
        "size": 185,
        "imageWidth": 1312
      }
    },
    "details": {
      "autoSkill": {
        "name": "한번 맛봐 줄게",
        "charge": 1,
        "effects": [
          "적 전체에 그림자 속성 마법 공격(극) + 힘 15% DOWN + 지능 15% DOWN(3턴)",
          "아군 전체 MP 회복 10%"
        ],
        "additionals": [
          {
            "condition": "전방에 어둠 잠식의 몽마(나이트메어)가 있을 때 추가",
            "effects": [
              "차지 축적량 +1"
            ]
          }
        ],
        "note": "스테이터스에 따른 스킬 효과 상승: 디버프 효과량 n% UP"
      },
      "chargeSkill": {
        "name": "달콤~한 악몽을 꾸길",
        "charge": 5,
        "effects": [
          "적 전체에 그림자 속성 마법 공격(극, 3배)",
          "아군 전체 HP 회복 100% + MP 회복 100%"
        ],
        "additionals": [
          {
            "condition": "전방에 어둠 잠식의 몽마(나이트메어)가 있을 때 추가",
            "effects": [
              "어둠 잠식의 몽마(나이트메어)를 드림 이터 상태로 변화(3턴)",
              "어둠 잠식의 몽마(나이트메어)에게 MP 치유(MP 최대치 20%, 5회) 부여"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "비비드 드림",
          "target": "아군 단일",
          "condition": "최대 MP가 「1500」 이상이 되면 발동",
          "effects": [
            "발동 조건을 달성한 아군 하나의 가하는 대미지 20% UP"
          ]
        },
        {
          "name": "페일 드림",
          "target": "아군 전체",
          "condition": "「특수」 계통의 환경 발생 시 발동",
          "effects": [
            "아군 전체 MP 최대치 30% UP"
          ]
        }
      ]
    }
  },
  {
    "id": "gunce-as",
    "name": "건스",
    "originalName": "ガンス(AS)",
    "style": "어나더 스타일",
    "rank": "★5",
    "element": "thunder",
    "image": "assets/buddies/gunce-as.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%ac%a5%f3%a5%b9%28%a5%a2%a5%ca%a5%b6%a1%bc%a5%b9%a5%bf%a5%a4%a5%eb%29",
    "imageSource": "https://image02.seesaawiki.jp/a/o/anothereden-game-info/0e39b528e5dd7863.png",
    "details": {
      "autoSkill": {
        "name": "아포카타스타시",
        "charge": 1,
        "effects": [
          "아군 전체 HP 회복(강) + 상태 이상 회복",
          "간헐적으로 디버프 해제"
        ],
        "additional": {
          "condition": "초뢰진 전개 시 추가",
          "effects": [
            "차지 축적량 +1"
          ]
        },
        "note": "스테이터스에 따른 스킬 효과 상승: HP 회복량 n% UP"
      },
      "chargeSkill": {
        "name": "이시오스",
        "charge": 5,
        "effects": [
          "아군 전체에 턴 종료 시까지 변화무쌍(번개) 부여",
          "어나더 포스 게이지 30% 회복"
        ],
        "additional": {
          "condition": "전방에 베레토(아크로지스트)가 있을 때 추가",
          "effects": [
            "베레토에게 연격 수 UP 부여 (3턴)"
          ]
        }
      },
      "auras": [
        {
          "name": "프로티조",
          "target": "아군 전체",
          "condition": "「초뢰진」 전개 시 발동",
          "effects": [
            "아군 전체 HP 최대치 30% UP",
            "아군 전체 MP 최대치 30% UP"
          ]
        },
        {
          "name": "멜레티",
          "target": "아군 전체",
          "condition": "「날씨」 계통의 환경 발생 시 발동",
          "effects": [
            "아군 전체의 크리티컬/마법 크리티컬률 100% UP"
          ]
        }
      ]
    },
    "styleKey": "as",
    "acquisition": "dream",
    "rarities": [
      5
    ],
    "obtain": {
      "name": "베레토",
      "style": "어나더 스타일",
      "image": "assets/2025/velette-as.webp",
      "faceCrop": {
        "x": 625,
        "y": 120,
        "size": 180,
        "imageWidth": 1360
      }
    }
  },
  {
    "id": "laika",
    "name": "라이카",
    "originalName": "ライカ",
    "style": "노멀 스타일",
    "rank": "★5",
    "element": "none",
    "image": "assets/buddies/laika.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%e9%a5%a4%a5%ab",
    "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/57e8f92eb544f940.png",
    "styleKey": "ns",
    "acquisition": "story",
    "rarities": [
      5
    ],
    "acquisitionPath": "메인스토리 3부 최종편",
    "details": {
      "autoSkill": {
        "name": "가라! 라이카 탐험대",
        "charge": 1,
        "effects": [
          "적 전체에 타격 공격(미약)",
          "간헐적으로 차지량 +1"
        ],
        "additional": {
          "condition": "라이카의 부적 장착 시 추가",
          "effects": [
            "랜덤으로 아이템 입수(전투 중 1회만)",
            "부적 색상에 따라 아이템 획득률 변화"
          ]
        }
      },
      "chargeSkill": {
        "name": "라이카 매직 - 극",
        "charge": 10,
        "effects": [
          "적과 아군 전체의 버프, 디버프를 모두 해제 + 랜덤으로 추가 효과 발생"
        ],
        "additionals": [
          {
            "condition": "라이카의 부적 장착 시 추가",
            "effects": [
              "부적 색상에 따라 추가 효과 발생률 변화"
            ]
          },
          {
            "condition": "빨강 라이카 행동 시",
            "effects": [
              "적 전체의 힘 50% DOWN + 지능 50% DOWN + 속도 50% DOWN(1턴)"
            ]
          },
          {
            "condition": "노랑 라이카 행동 시",
            "effects": [
              "아군 전체의 크리티컬 시 대미지 50% UP + 마법 크리티컬 시 대미지 50% UP(1턴)"
            ]
          },
          {
            "condition": "파랑 라이카 행동 시",
            "effects": [
              "아군 전체 HP 회복(강) + 상태 이상 회복 + 상태 이상 무효(1회)"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "힘내! 라이카!",
          "target": "아군 전체",
          "condition": "AF 게이지가 최대가 되면 발동",
          "effects": [
            "적 전체의 가하는 대미지 15% DOWN"
          ]
        },
        {
          "name": "지지 마! 라이카!",
          "target": "아군 전체",
          "condition": "「특수」 계통의 환경 발생 시 발동",
          "effects": [
            "아군 전체의 가하는 대미지 15% UP"
          ]
        }
      ]
    }
  },
  {
    "id": "jilya",
    "name": "지르야",
    "originalName": "ジルヤ",
    "style": "노멀 스타일",
    "rank": "★5",
    "element": "crystal",
    "image": "assets/buddies/jilya.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%b8%a5%eb%a5%e4",
    "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/c6a17bce63c05014.png",
    "styleKey": "ns",
    "acquisition": "dream",
    "rarities": [
      5
    ],
    "aliases": [
      "질야"
    ],
    "obtain": {
      "name": "니르야",
      "style": "노멀 스타일",
      "image": "assets/2025/nilya.webp",
      "faceCrop": {
        "x": 765,
        "y": 80,
        "size": 180,
        "imageWidth": 1376
      }
    },
    "details": {
      "autoSkill": {
        "name": "인베이드 글로",
        "charge": 1,
        "effects": [
          "적 전체에 결정 속성 마법 공격(극) + 물리 저항 10% DOWN + 마법 저항 10% DOWN(3턴, 최고 누적 횟수 5)"
        ],
        "additionals": [
          {
            "condition": "차지 축적량이 5 이상일 경우 추가",
            "effects": [
              "니르야가 전방에 있는 경우 니르야의 루나틱+가 재사용 가능해짐"
            ]
          },
          {
            "condition": "휘정진 전개 시 추가",
            "effects": [
              "차지 축적량 +1"
            ]
          }
        ],
        "note": "스테이터스에 따른 스킬 효과 상승: 디버프 효과량 n% UP"
      },
      "chargeSkill": {
        "name": "리컨스트릭트",
        "charge": 7,
        "effects": [
          "아군 전체 HP 회복 100% + MP 회복 100%",
          "아군 전체 전투 불능 회복 + 상태 이상 회복 + 디버프 해제"
        ]
      },
      "auras": [
        {
          "name": "벌러너빌리티",
          "target": "적 전체",
          "condition": "약점 대미지를 받으면 발동",
          "effects": [
            "아군 전체의 크리티컬/마법 크리티컬률 100% UP"
          ]
        },
        {
          "name": "바이탈라이즈",
          "target": "아군 전체",
          "condition": "「특수」 계통의 환경 발생 시 발동",
          "effects": [
            "아군 전체의 크리티컬 시 대미지 30% UP",
            "아군 전체의 마법 크리티컬 시 대미지 30% UP",
            "「식시 활성」, 「식시 폭주」 환경일 경우 턴 시작 시 니르야에게 식시 활성 축적"
          ]
        }
      ]
    }
  },
  {
    "id": "kuramaru",
    "name": "쿠라마루",
    "originalName": "クラマル",
    "style": "노멀 스타일",
    "rank": "★4",
    "element": "fire",
    "image": "assets/buddies/kuramaru.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%af%a5%e9%a5%de%a5%eb",
    "imageSource": "https://image02.seesaawiki.jp/a/o/anothereden-game-info/7Q3AMlZubT.png",
    "styleKey": "ns",
    "acquisition": "story",
    "rarities": [
      4
    ],
    "acquisitionPath": "만고의 죄와 불복의 칼날 10화",
    "details": {
      "autoSkill": {
        "name": "코나키 카구야인",
        "charge": 1,
        "effects": [
          "적 전체에 불 속성 베기 공격(극)"
        ],
        "additionals": [
          {
            "condition": "전방에 센야(아메노토츠카)가 있을 시",
            "effects": [
              "아군 전후방 전체의 상태 이상 회복",
              "센야에게 강의 도기와 유의 도기 1 축적"
            ]
          },
          {
            "condition": "수초의 방울 장착 시 추가",
            "effects": [
              "아군 전체의 물리 저항 10% UP + 마법 저항 10% UP(3턴, 최고 누적 횟수 5)"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "요호의 은총",
          "target": "아군 전체",
          "condition": "아군 중 하나의 속도가 「300」 이상이 되면 발동",
          "effects": [
            "적 전체의 베기 저항 20% DOWN"
          ]
        }
      ]
    }
  },
  {
    "id": "hazama",
    "name": "틈틈이",
    "originalName": "ハザマちゃん",
    "style": "노멀 스타일",
    "rank": "★5",
    "element": "none",
    "image": "assets/buddies/hazama.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%cf%a5%b6%a5%de%a4%c1%a4%e3%a4%f3",
    "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/sgK_RFRfOt.png",
    "styleKey": "ns",
    "acquisition": "dream",
    "rarities": [
      5
    ],
    "aliases": [
      "하자마"
    ],
    "obtain": {
      "name": "이드",
      "style": "노멀 스타일",
      "image": "assets/2024/id.webp",
      "faceCrop": {
        "x": 780,
        "y": 210,
        "size": 190,
        "imageWidth": 1412
      }
    },
    "details": {
      "autoSkill": {
        "name": "상주부단",
        "charge": 1,
        "effects": [
          "적 전체에 타격 공격(극)",
          "아군 전체의 망치, 권갑 장착자 대미지 15% UP(3턴, 최고 누적 횟수 5)"
        ],
        "additionals": [
          {
            "condition": "굉타진 전개 시 추가",
            "effects": [
              "아군 전체에 크리티컬률 15% UP(3회 행동)"
            ]
          },
          {
            "condition": "ANOTHER ZONE 전개 시 추가",
            "effects": [
              "위력 증가(2배)"
            ]
          },
          {
            "condition": "아군 전방의 타격 무기 종류 3 이상 시 추가",
            "effects": [
              "차지 축적량 +1"
            ]
          }
        ],
        "note": "스테이터스에 따른 스킬 효과 상승: 버프 효과량 n% UP"
      },
      "chargeSkill": {
        "name": "몽환포영",
        "charge": 5,
        "effects": [
          "적 전체에 타격 공격 5회(극) + 극 굉타진 전개"
        ],
        "additionals": [
          {
            "condition": "전방에 이드(니르바나)가 있는 경우",
            "effects": [
              "턴 종료 시까지 이드에게 연격 수에 따라 위력 증가 효과 부여(최대 5hit/3배)"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "예찬",
          "target": "아군 전체",
          "condition": "「굉타진」 전개 시 발동",
          "effects": [
            "가하는 타격 대미지 20% UP"
          ]
        },
        {
          "name": "제행무상",
          "target": "아군 전체",
          "condition": "「날씨」 계통의 환경 발생 시 발동",
          "effects": [
            "크리티컬 시의 대미지 30% UP + 물리 크리티컬률 100% UP"
          ]
        }
      ]
    }
  },
  {
    "id": "tetra-as",
    "name": "테트라",
    "originalName": "テトラ(AS)",
    "style": "어나더 스타일",
    "rank": "★5",
    "element": "none",
    "image": "assets/buddies/tetra-as.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%c6%a5%c8%a5%e9%28%a5%a2%a5%ca%a5%b6%a1%bc%a5%b9%a5%bf%a5%a4%a5%eb%29",
    "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/tdQarjFYGH.png",
    "styleKey": "as",
    "acquisition": "dream",
    "rarities": [
      5
    ],
    "obtain": {
      "name": "미나르카",
      "style": "어나더 스타일",
      "image": "assets/2024/minalca-as.webp",
      "faceCrop": {
        "x": 705,
        "y": 200,
        "size": 160,
        "imageWidth": 1508
      }
    },
    "details": {
      "autoSkill": {
        "name": "스파클 리벨리온",
        "charge": 1,
        "effects": [
          "적 전체에 마법 공격 3회(극)",
          "아군 전후방 전체의 HP 회복 20% + 상태 이상 회복"
        ],
        "additionals": [
          {
            "condition": "아군 전방 전체의 HP가 80% 이하 시",
            "effects": [
              "차지 축적량 +1"
            ]
          }
        ],
        "note": "스테이터스에 따른 스킬 효과 상승: 버프 효과량 n% UP · HP 회복량 n% UP"
      },
      "chargeSkill": {
        "name": "루인카르나시온",
        "charge": 8,
        "effects": [
          "적 전체에 자신의 회복력(최대치: 500)에 따른 공격(방어 무시)",
          "아군 전체 HP 회복 100% + 전투 불능 회복 + 버티기 부여"
        ],
        "additionals": [
          {
            "condition": "전방에 「미나르카(에리스)」가 있을 경우",
            "effects": [
              "미나르카에게 「스티그마타」 1 축적",
              "※ 아웃레이지 발동 가능 시 한정"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "라인 포스",
          "target": "아군 단일",
          "condition": "HP가 「80%」 이하가 되면 발동",
          "effects": [
            "발동 조건을 달성한 아군 하나의 최대 HP, MP 25% UP",
            "발동 조건을 달성한 아군 하나의 물리, 마법 저항 30% UP"
          ]
        },
        {
          "name": "아트모스 레지사이드",
          "target": "아군 전체",
          "condition": "「대기」 계통의 환경 발생 시 발동",
          "effects": [
            "아군 전체의 물리 크리티컬률 100% UP",
            "아군 전체의 마법 크리티컬률 100% UP"
          ]
        }
      ]
    }
  },
  {
    "id": "tusia",
    "name": "튜시아",
    "originalName": "テュシア",
    "style": "노멀 스타일",
    "rank": "★3〜★5",
    "element": "none",
    "image": "assets/buddies/tusia.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%c6%a5%e5%a5%b7%a5%a2",
    "imageSource": "https://image02.seesaawiki.jp/a/o/anothereden-game-info/LruIMSnEzU.png",
    "styleKey": "ns",
    "acquisition": "story",
    "rarities": [
      3,
      4,
      5
    ],
    "details": {
      "autoSkill": {
        "name": "하늘의 기도",
        "charge": 1,
        "effects": [
          "아군 전체에 별의 반짝임 1 축적",
          "아군 전체 HP 회복(중) + MP 20 회복",
          "별의 반짝임 축적량에 따라 회복량 증가"
        ],
        "additionals": [
          {
            "condition": "성해진 전개 시",
            "effects": [
              "차지 축적량 +1"
            ]
          }
        ]
      },
      "chargeSkill": {
        "name": "스타 더스트",
        "charge": 8,
        "effects": [
          "적 전체에 마법 공격(극)",
          "아군 전체의 별의 반짝임 축적량에 따라 위력 증가(최대 30배)",
          "성해진 전개"
        ]
      },
      "auras": [
        {
          "name": "별에게 소원을",
          "target": "적 전체",
          "condition": "「성해진」 전개 시 발동",
          "effects": [
            "적 전체의 가하는 대미지 20% DOWN"
          ]
        },
        {
          "name": "조화",
          "target": "아군 전체",
          "condition": "「대기」 계통의 환경 발생 시 발동",
          "effects": [
            "아군 전체의 모든 상태 이상 저항 100% UP"
          ]
        }
      ]
    },
    "acquisitionPath": "메인스토리 3부 후편"
  },
  {
    "id": "iridian",
    "name": "피이",
    "originalName": "ぴーたん",
    "style": "노멀 스타일",
    "rank": "★5",
    "element": "water",
    "image": "assets/buddies/iridian.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a4%d4%a1%bc%a4%bf%a4%f3",
    "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/TBIBwXdsfb.png",
    "styleKey": "ns",
    "acquisition": "dream",
    "rarities": [
      5
    ],
    "obtain": {
      "name": "질퍼니",
      "style": "노멀 스타일",
      "image": "assets/2024/jillfunny.webp",
      "faceCrop": {
        "x": 875,
        "y": 145,
        "size": 160,
        "imageWidth": 1420
      }
    },
    "details": {
      "autoSkill": {
        "name": "수류축격",
        "charge": 1,
        "effects": [
          "적 하나에 물 속성 타격 공격(극)",
          "자신의 공격력에 따라 위력 증가(최대 7배)"
        ],
        "additionals": [
          {
            "condition": "수천진 전개 시",
            "effects": [
              "추가로 위력 증가(2배) + 차지 축적량 +1"
            ]
          }
        ]
      },
      "chargeSkill": {
        "name": "굉류난무",
        "charge": 5,
        "effects": [
          "적 하나에 물 속성 타격 공격 6회(극대)",
          "자신의 공격력에 따라 위력 증가(최대 30배)"
        ],
        "additionals": [
          {
            "condition": "전방에 질퍼니(검성)이 있을 시",
            "effects": [
              "질퍼니에게 실드 부여(5턴, 고정치 6000)",
              "질퍼니가 「풀고르」 상태로 변화"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "점 꿰뚫기",
          "target": "아군 전체",
          "condition": "「수천진」 전개 시 발동",
          "effects": [
            "아군 전체의 단일 공격으로 가하는 대미지 20% UP"
          ]
        },
        {
          "name": "고요한 마음",
          "target": "아군 전체",
          "condition": "「지표」 계통의 환경 발생 시 발동",
          "effects": [
            "아군 전체의 최대 MP 30% UP"
          ]
        }
      ]
    }
  },
  {
    "id": "iridian-as",
    "name": "피이",
    "originalName": "ぴーたん(AS)",
    "style": "어나더 스타일",
    "rank": "★5",
    "element": "water",
    "image": "assets/buddies/iridian-as.png",
    "styleKey": "as",
    "acquisition": "dream",
    "rarities": [
      5
    ],
    "obtain": {
      "name": "질퍼니",
      "style": "어나더 스타일",
      "image": "assets/2026/jillfunny-as.webp",
      "faceCrop": {
        "x": 220,
        "y": 245,
        "size": 160,
        "imageWidth": 1332
      }
    },
    "details": {
      "autoSkill": {
        "name": "정륜비각",
        "charge": 1,
        "effects": [
          "적 하나에 물 속성 타격 공격(극)",
          "아군 전체 MP 최대치 합계에 따라 위력 증가(최대 4000/12배)"
        ],
        "additionals": [
          {
            "condition": "전방에 질퍼니(루블라디우스)가 있을 시",
            "effects": [
              "차지 축적 수 1 증가 + 재공격 실행"
            ]
          },
          {
            "condition": "휘정진 전개 시",
            "effects": [
              "공격 속성이 결정으로 변화"
            ]
          }
        ]
      },
      "chargeSkill": {
        "name": "황격상각",
        "charge": 7,
        "effects": [
          "적 하나에 물 속성 타격 공격 3회(극대)",
          "아군 전체 MP 최대치 합계에 따라 위력 증가(최대 4000/20배)",
          "재공격 실행"
        ],
        "additionals": [
          {
            "condition": "전방에 질퍼니(루블라디우스)가 있을 시",
            "effects": [
              "전개 중인 ZONE에 따라 효과 변화"
            ]
          },
          {
            "condition": "전방에 질퍼니(루블라디우스)가 있고 수천진 전개 시",
            "effects": [
              "턴 종료 시까지 질퍼니가 수호 상태로 변화"
            ]
          },
          {
            "condition": "전방에 질퍼니(루블라디우스)가 있고 휘정진 전개 시",
            "effects": [
              "공격 속성이 결정으로 변화",
              "질퍼니에게 턴 종료 시까지 루나틱 <결사> 부여"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "신묘",
          "target": "아군 전체",
          "condition": "최대 MP가 「1000」 이상이 되면 발동",
          "effects": [
            "아군 전체의 가하는 대미지 20% UP"
          ]
        },
        {
          "name": "늠름",
          "target": "아군 전체",
          "condition": "「특수」 계통의 환경 발생 시 발동",
          "effects": [
            "아군 전체의 최대 MP 30% UP"
          ]
        }
      ]
    }
  },
  {
    "id": "kumos-as",
    "name": "큐모스",
    "originalName": "キュモス(AS)",
    "style": "어나더 스타일",
    "rank": "★5",
    "element": "shade",
    "image": "assets/buddies/kumos-as.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%ad%a5%e5%a5%e2%a5%b9%28%a5%a2%a5%ca%a5%b6%a1%bc%a5%b9%a5%bf%a5%a4%a5%eb%29",
    "imageSource": "https://image02.seesaawiki.jp/a/o/anothereden-game-info/MzslZMwvB5.png",
    "styleKey": "as",
    "acquisition": "dream",
    "rarities": [
      5
    ],
    "obtain": {
      "name": "야쿠모",
      "style": "어나더 스타일",
      "image": "assets/2024/yakumo-as.webp",
      "faceCrop": {
        "x": 680,
        "y": 200,
        "size": 150,
        "imageWidth": 1352
      }
    },
    "details": {
      "autoSkill": {
        "name": "오버 커밍",
        "charge": 1,
        "effects": [
          "적 전체에 속도 15% DOWN + 그림자 속성 저항 15% DOWN(3턴, 최고 누적 횟수 5)",
          "적 전체에 브레이크 부여",
          "아군 전체의 MP 10% 회복(야쿠모만 20% 회복)"
        ],
        "additionals": [
          {
            "condition": "각음진 또는 환마진 전개 시 추가",
            "effects": [
              "차지 축적량 +1"
            ]
          }
        ],
        "note": "스테이터스에 따른 스킬 효과 상승: 디버프 효과량 n% UP"
      },
      "chargeSkill": {
        "name": "라베지 오브 그리드",
        "charge": 8,
        "effects": [
          "적 하나에 자신의 방해력(최대치: 600)에 따라 5회 공격(대상의 방어 무시)",
          "턴 종료 시까지 힘 50% DOWN + 지능 50% DOWN"
        ],
        "additionals": [
          {
            "condition": "전방에 「야쿠모(회그니스)」가 있을 때",
            "effects": [
              "야쿠모가 「모드: 미제르」 상태로 모드 체인지",
              "턴 종료 시까지 야쿠모에게 수호 부여",
              "아군 전체 HP 회복 100% + MP 회복 100%"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "사로 앤드 밤",
          "target": "적 단일",
          "condition": "마법 대미지를 받으면 발동",
          "effects": [
            "발동 조건을 달성한 적 하나의 마법 저항 20% DOWN",
            "발동 조건을 달성한 적 하나가 가하는 대미지 30% DOWN"
          ]
        },
        {
          "name": "리젝션",
          "target": "적 전체",
          "condition": "「특수」 계통의 환경 발생 시 발동",
          "effects": [
            "적 전체의 모든 속성 저항 50% DOWN"
          ]
        }
      ]
    }
  },
  {
    "id": "dragon",
    "name": "새끼용",
    "originalName": "竜の子",
    "style": "공격형",
    "rank": "★4",
    "element": "fire",
    "image": "assets/buddies/dragon-attack.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%ce%b5%a4%ce%bb%d2",
    "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/0j7oYJTLCF.png",
    "aliases": [
      "새끼용",
      "아기용",
      "라이리스"
    ],
    "variants": [
      {
        "id": "dragon-attack",
        "name": "새끼용",
        "originalName": "竜の子（攻撃型）",
        "style": "공격형",
        "rank": "★4",
        "element": "fire",
        "image": "assets/buddies/dragon-attack.webp",
        "sourcePage": "https://anothereden.game-info.wiki/d/%ce%b5%a4%ce%bb%d2",
        "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/0j7oYJTLCF.png",
        "styleKey": "ns",
        "acquisition": "story",
        "rarities": [
          4
        ],
        "details": {
          "autoSkill": {
            "name": "이리스 플람마",
            "charge": 1,
            "effects": [
              "적 전체에 불 속성 마법 공격 3회(극)",
              "턴 경과에 따라 위력 UP(최대 10턴/10배)",
              "벌룡 공주의 스카프 장착 시 적 전체에 페인 부여",
              "자신의 공격에 따른 위력"
            ],
            "additionals": [
              {
                "condition": "전방에 류제(벌룡 공주)가 있을 시",
                "effects": [
                  "류제에게 소룡사의 인연 1 축적"
                ]
              },
              {
                "condition": "불, 물, 땅, 바람 속성 ZONE 전개 시 추가",
                "effects": [
                  "전개 중인 ZONE에 따라 속성 변화"
                ]
              }
            ]
          },
          "chargeSkill": {
            "name": "아르쿠스 이리스",
            "charge": 5,
            "effects": [
              "적 전체에 물 속성 마법 공격 3회(극, 2배)"
            ],
            "additionals": [
              {
                "condition": "전방에 류제(벌룡 공주)가 있을 시 추가",
                "effects": [
                  "류제에게 용 두름 1 축적 + 디버프 해제"
                ]
              },
              {
                "condition": "불, 물, 땅, 바람 속성 ZONE 전개 시 추가",
                "effects": [
                  "전개 중인 ZONE에 따라 속성 변화"
                ]
              }
            ]
          },
          "auras": [
            {
              "name": "용의 마식",
              "target": "적, 아군 단일",
              "condition": "마법 대미지를 받으면 발동",
              "effects": [
                "발동 조건을 달성한 적과 아군 하나의 모든 속성 저항 10% DOWN"
              ]
            },
            {
              "name": "무지개의 위광",
              "target": "적 전체",
              "condition": "「특수」 계통의 환경 발생 시 발동",
              "effects": [
                "적 전체의 물리 저항 50% DOWN"
              ]
            }
          ]
        }
      },
      {
        "id": "dragon-defense",
        "name": "새끼용",
        "originalName": "竜の子（防御型）",
        "style": "수비형",
        "rank": "★4",
        "element": "water",
        "image": "assets/buddies/dragon-defense.webp",
        "sourcePage": "https://anothereden.game-info.wiki/d/%ce%b5%a4%ce%bb%d2",
        "imageSource": "https://image02.seesaawiki.jp/a/o/anothereden-game-info/GcJCLmWV5e.png",
        "styleKey": "ns",
        "acquisition": "story",
        "rarities": [
          4
        ],
        "details": {
          "autoSkill": {
            "name": "아르쿠스 투텔라",
            "charge": 1,
            "effects": [
              "적 전체에 물 속성 타격 공격(극)",
              "아군 전체에 대미지를 25% 감소시키는 배리어 부여(1회)",
              "벌룡 공주의 스카프 장착 시 아군 전체의 물리 저항 10% UP(3턴, 최고 누적 횟수 3)"
            ],
            "additionals": [
              {
                "condition": "전방에 류제(벌룡 공주)가 있을 시",
                "effects": [
                  "류제에게 소룡사의 인연 1 축적"
                ]
              }
            ]
          },
          "chargeSkill": {
            "name": "아르쿠스 이리스",
            "charge": 5,
            "effects": [
              "적 전체에 물 속성 마법 공격 3회(극, 2배)"
            ],
            "additionals": [
              {
                "condition": "전방에 류제(벌룡 공주)가 있을 시 추가",
                "effects": [
                  "류제에게 용 두름 1 축적 + 디버프 해제"
                ]
              },
              {
                "condition": "불, 물, 땅, 바람 속성 ZONE 전개 시 추가",
                "effects": [
                  "전개 중인 ZONE에 따라 속성 변화"
                ]
              }
            ]
          },
          "auras": [
            {
              "name": "용의 가호",
              "target": "아군 전체",
              "condition": "아군 중 하나의 HP가 「80%」 이하가 되면 발동",
              "effects": [
                "아군 전체의 모든 속성 저항 10% UP"
              ]
            },
            {
              "name": "무지개의 위광",
              "target": "적 전체",
              "condition": "「특수」 계통의 환경 발생 시 발동",
              "effects": [
                "적 전체의 물리 저항 50% DOWN"
              ]
            }
          ]
        }
      },
      {
        "id": "dragon-heal",
        "name": "새끼용",
        "originalName": "竜の子（回復型）",
        "style": "회복형",
        "rank": "★4",
        "element": "wind",
        "image": "assets/buddies/dragon-heal.webp",
        "sourcePage": "https://anothereden.game-info.wiki/d/%ce%b5%a4%ce%bb%d2",
        "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/P0gS5QhVS3.png",
        "styleKey": "ns",
        "acquisition": "story",
        "rarities": [
          4
        ],
        "details": {
          "autoSkill": {
            "name": "아르쿠스 사니타스",
            "charge": 1,
            "effects": [
              "적 전체에 바람 속성 베기 공격 2회(극)",
              "아군 전체 HP 회복(약) + MP 회복 15",
              "벌룡 공주의 스카프 장착 시 적 전체의 속도 10% DOWN(3턴, 최고 누적 횟수 3)"
            ],
            "additionals": [
              {
                "condition": "전방에 류제(벌룡 공주)가 있을 시",
                "effects": [
                  "류제에게 소룡사의 인연 1 축적"
                ]
              }
            ],
            "note": "스테이터스에 따른 스킬 효과 상승: HP 회복량 n% UP"
          },
          "chargeSkill": {
            "name": "아르쿠스 이리스",
            "charge": 5,
            "effects": [
              "적 전체에 물 속성 마법 공격 3회(극, 2배)"
            ],
            "additionals": [
              {
                "condition": "전방에 류제(벌룡 공주)가 있을 시 추가",
                "effects": [
                  "류제에게 용 두름 1 축적 + 디버프 해제"
                ]
              },
              {
                "condition": "불, 물, 땅, 바람 속성 ZONE 전개 시 추가",
                "effects": [
                  "전개 중인 ZONE에 따라 속성 변화"
                ]
              }
            ]
          },
          "auras": [
            {
              "name": "용의 풍역",
              "target": "적, 아군 단일",
              "condition": "바람 속성 대미지를 받으면 발동",
              "effects": [
                "발동 조건을 달성한 적과 아군 하나의 힘, 지능 10% DOWN"
              ]
            },
            {
              "name": "무지개의 위광",
              "target": "적 전체",
              "condition": "「특수」 계통의 환경 발생 시 발동",
              "effects": [
                "적 전체의 물리 저항 50% DOWN"
              ]
            }
          ]
        }
      }
    ],
    "styleKey": "ns",
    "acquisition": "story",
    "rarities": [
      4
    ],
    "trueName": "라이리스",
    "acquisitionPath": "벌룡 공주 기담 Ⅱ - 천명의 길과 영롱한 아이",
    "details": {
      "autoSkill": {
        "name": "이리스 플람마",
        "charge": 1,
        "effects": [
          "적 전체에 불 속성 마법 공격 3회(극)",
          "턴 경과에 따라 위력 UP(최대 10턴/10배)",
          "벌룡 공주의 스카프 장착 시 적 전체에 페인 부여",
          "자신의 공격에 따른 위력"
        ],
        "additionals": [
          {
            "condition": "전방에 류제(벌룡 공주)가 있을 시",
            "effects": [
              "류제에게 소룡사의 인연 1 축적"
            ]
          },
          {
            "condition": "불, 물, 땅, 바람 속성 ZONE 전개 시 추가",
            "effects": [
              "전개 중인 ZONE에 따라 속성 변화"
            ]
          }
        ]
      },
      "chargeSkill": {
        "name": "아르쿠스 이리스",
        "charge": 5,
        "effects": [
          "적 전체에 물 속성 마법 공격 3회(극, 2배)"
        ],
        "additionals": [
          {
            "condition": "전방에 류제(벌룡 공주)가 있을 시 추가",
            "effects": [
              "류제에게 용 두름 1 축적 + 디버프 해제"
            ]
          },
          {
            "condition": "불, 물, 땅, 바람 속성 ZONE 전개 시 추가",
            "effects": [
              "전개 중인 ZONE에 따라 속성 변화"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "용의 마식",
          "target": "적, 아군 단일",
          "condition": "마법 대미지를 받으면 발동",
          "effects": [
            "발동 조건을 달성한 적과 아군 하나의 모든 속성 저항 10% DOWN"
          ]
        },
        {
          "name": "무지개의 위광",
          "target": "적 전체",
          "condition": "「특수」 계통의 환경 발생 시 발동",
          "effects": [
            "적 전체의 물리 저항 50% DOWN"
          ]
        }
      ]
    }
  },
  {
    "id": "moke",
    "name": "모케",
    "originalName": "モケ",
    "style": "노멀 스타일",
    "rank": "★5",
    "element": "none",
    "image": "assets/buddies/moke.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%e2%a5%b1",
    "imageSource": "https://image02.seesaawiki.jp/a/o/anothereden-game-info/KXkFCjVfCP.png",
    "details": {
      "autoSkill": {
        "name": "모케의 하울링",
        "charge": 1,
        "effects": [
          "적 전체의 힘 10% DOWN + 지능 10% DOWN (3턴, 최고 누적 횟수 3)",
          "어나더 포스 게이지 약간 회복"
        ],
        "additional": {
          "condition": "ANOTHER ZONE 전개 시",
          "effects": [
            "차지 축적량 +1"
          ]
        },
        "note": "스테이터스에 따른 스킬 효과 상승: 디버프 효과량 n% UP"
      },
      "chargeSkill": {
        "name": "노도의 모케 일족",
        "charge": 5,
        "effects": [
          "적 전체에 고정 대미지 공격 5회 (각 1 대미지) + 기절 부여",
          "적 전체의 물리 저항 50% DOWN + 모든 속성 저항 50% DOWN (1턴)"
        ],
        "additional": {
          "condition": "전방에 틸릴 ES(새크라멘트)가 있는 경우",
          "effects": [
            "아군 전체에 루나틱(심안) 부여 (1턴)",
            "틸릴이 「검을 든 구세주」로 변화 (3턴)"
          ]
        }
      },
      "auras": [
        {
          "name": "몰아넣기",
          "target": "적 전체",
          "condition": "약점 대미지를 받으면 발동",
          "effects": [
            "아군 전체의 크리티컬 시 대미지 30% UP",
            "아군 전체의 마법 크리티컬 시 대미지 30% UP"
          ]
        },
        {
          "name": "신비한 동물",
          "target": "아군 전체",
          "condition": "「특수」 계통의 환경 발생 시 발동",
          "effects": [
            "아군 전체의 공격에 배리어 관통 효과 발생"
          ]
        }
      ]
    },
    "styleKey": "ns",
    "acquisition": "dream",
    "rarities": [
      5
    ],
    "obtain": {
      "name": "틸릴",
      "style": "엑스트라 스타일",
      "image": "assets/2024/thillelille-es.webp",
      "faceCrop": {
        "x": 650,
        "y": 200,
        "size": 170,
        "imageWidth": 1444
      }
    }
  },
  {
    "id": "gunce",
    "name": "건스",
    "originalName": "ガンス",
    "style": "노멀 스타일",
    "rank": "★5",
    "element": "thunder",
    "image": "assets/buddies/gunce.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%ac%a5%f3%a5%b9",
    "imageSource": "https://image02.seesaawiki.jp/a/o/anothereden-game-info/6HTM_uaAv0.png",
    "styleKey": "ns",
    "acquisition": "dream",
    "rarities": [
      5
    ],
    "obtain": {
      "name": "베레토",
      "style": "노멀 스타일",
      "image": "assets/buddy-obtain/velette-ns.jpg",
      "faceCrop": {
        "x": 500,
        "y": 25,
        "size": 175,
        "imageWidth": 1207
      }
    },
    "details": {
      "autoSkill": {
        "name": "아르쿠다",
        "charge": 1,
        "effects": [
          "적 전원에게 엘리멘탈 브레이크(번개) 3개",
          "아군의 모든 속성 저항 +15%(3턴, 5회 누적)"
        ],
        "additionals": [
          {
            "condition": "초뢰진 상태",
            "effects": [
              "차지 +1"
            ]
          }
        ],
        "note": "스테이터스에 따른 스킬 효과 상승: 버프 효과량 n% UP"
      },
      "chargeSkill": {
        "name": "악티나",
        "charge": 5,
        "effects": [
          "적 전원에게 번개 마법 10회(극)",
          "마력에 비례해 최대 8배 강화(상한 500)",
          "전방 번개 아군에게 루나틱(하전) 3턴"
        ],
        "additionals": [
          {
            "condition": "베레토 NS(드림 디거)가 전방에 있으면",
            "effects": [
              "번개 엘리멘탈 브레이크를 적 전원에게 10개",
              "극 초뢰진 전개"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "춘그라나",
          "target": "아군 전체",
          "condition": "어나더 포스 게이지가 0이 되면",
          "effects": [
            "모든 스테이터스 +20%"
          ]
        },
        {
          "name": "케로스",
          "target": "아군 전체",
          "condition": "「날씨」 계통 환경",
          "effects": [
            "모든 속성 저항 +30%"
          ]
        }
      ]
    }
  },
  {
    "id": "hyuga",
    "name": "휴우가",
    "originalName": "ヒュウガ",
    "style": "노멀 스타일",
    "rank": "★4",
    "element": "shade",
    "image": "assets/buddies/hyuga.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%d2%a5%e5%a5%a6%a5%ac",
    "imageSource": "https://image02.seesaawiki.jp/a/o/anothereden-game-info/tl3wfPaRBz.png",
    "styleKey": "ns",
    "acquisition": "story",
    "rarities": [
      4
    ],
    "acquisitionPath": "메인스토리 3부 중편",
    "details": {
      "autoSkill": {
        "name": "기갑 격투술 - 정심",
        "charge": 1,
        "effects": [
          "아군 전체의 힘 10% UP(3턴, 최고 누적 횟수 5) + 크리티컬율 100% UP(1회 행동)",
          "기갑 장비의 종류에 따라 추가 효과"
        ],
        "note": "스테이터스에 따른 스킬 효과 상승: 버프 효과량 n% UP",
        "additionals": [
          {
            "condition": "기갑 발톱",
            "effects": [
              "적 전체에 그림자 속성 베기 공격(극) + 물리 저항 10% DOWN(3턴, 최고 누적 횟수 5)"
            ]
          },
          {
            "condition": "기갑 단창",
            "effects": [
              "적 전체에 그림자 속성 찌르기 공격(극) + 아군 전체의 물리 저항 10% UP(3턴, 최고 누적 횟수 5)"
            ]
          },
          {
            "condition": "기갑 너클",
            "effects": [
              "적 전체에 그림자 속성 타격 공격(극) + 페인, 기절 부여"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "계승되는 마음",
          "target": "아군 전체",
          "condition": "「독기」 계통의 환경 발생 시 발동",
          "effects": [
            "아군 전체의 크리티컬 시 대미지 30% UP"
          ]
        }
      ]
    }
  },
  {
    "id": "limil",
    "name": "릴레노",
    "originalName": "リレーノ",
    "style": "노멀 스타일",
    "rank": "★5",
    "element": "none",
    "image": "assets/buddies/limil.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%ea%a5%ec%a1%bc%a5%ce",
    "imageSource": "https://image02.seesaawiki.jp/a/o/anothereden-game-info/a_gED07bBs.png",
    "styleKey": "ns",
    "acquisition": "dream",
    "rarities": [
      5
    ],
    "obtain": {
      "name": "\"심홍의 사자\" 이루루",
      "style": "노멀 스타일",
      "image": "assets/buddy-obtain/scarlet-reaper.jpg",
      "faceCrop": {
        "x": 350,
        "y": 50,
        "size": 180,
        "imageWidth": 923
      }
    },
    "details": {
      "autoSkill": {
        "name": "팔르 캇투스",
        "charge": 1,
        "effects": [
          "적 전체에 베기 공격(극)",
          "베기 무기 종류 장착자 대미지 15% UP(3턴, 최고 누적 횟수 5)"
        ],
        "additionals": [
          {
            "condition": "황참진 시 추가",
            "effects": [
              "위력 증가(2배)"
            ]
          },
          {
            "condition": "ANOTHER ZONE 전개 시",
            "effects": [
              "추가로 위력 증가(2배)"
            ]
          },
          {
            "condition": "전방 아군의 베기 무기 종류 3 이상 시 추가",
            "effects": [
              "차지 축적량 +1"
            ]
          }
        ],
        "note": "스테이터스에 따른 스킬 효과 상승: 버프 효과량 n% UP"
      },
      "chargeSkill": {
        "name": "게헤나 팔르",
        "charge": 5,
        "effects": [
          "적 전체에 베기 공격(극)",
          "전방에 베기 무기 종류 수에 따라 위력 증가(최대 20배)"
        ],
        "additionals": [
          {
            "condition": "황참진 시 추가",
            "effects": [
              "극 황참진 전개"
            ]
          },
          {
            "condition": "전방에 「\"심홍의 사자\" 이루루」가 있을 경우",
            "effects": [
              "턴 종료 시까지 「\"심홍의 사자\" 이루루」의 힘 100% UP + 지능 100% UP"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "세크쇼네",
          "target": "아군 전체",
          "condition": "「황참진」 전개 시 발동",
          "effects": [
            "아군 전체의 가하는 베기 속성 대미지 20% UP"
          ]
        },
        {
          "name": "카투스",
          "target": "적 전체",
          "condition": "「지표」 계통의 환경 발생 시 발동",
          "effects": [
            "발동 조건을 달성한 적 전체의 회피율 100% DOWN"
          ]
        }
      ]
    }
  },
  {
    "id": "pisce",
    "name": "피스케",
    "originalName": "ピスケ",
    "style": "노멀 스타일",
    "rank": "★3〜★4",
    "element": "none",
    "image": "assets/buddies/pisce.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%d4%a5%b9%a5%b1",
    "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/UeXQCoBdX4.png",
    "styleKey": "ns",
    "acquisition": "story",
    "rarities": [
      3,
      4
    ],
    "acquisitionPath": "서가",
    "details": {
      "autoSkill": {
        "name": "성해의 물보라",
        "charge": 1,
        "effects": [
          "아군 전체에 치유 부여(3회) + 지능 10% UP(3턴, 최고 누적 횟수 5)"
        ],
        "note": "스테이터스에 따른 스킬 효과 상승: 버프 효과량 n% UP · HP 회복량 n% UP"
      },
      "auras": [
        {
          "name": "이중성운",
          "target": "아군 전체",
          "condition": "「환혹의 안개」 계통의 환경 발생 시 발동",
          "effects": [
            "아군 전체의 모든 속성 공격력 30% UP"
          ]
        }
      ]
    }
  },
  {
    "id": "kumos",
    "name": "큐모스",
    "originalName": "キュモス",
    "style": "노멀 스타일",
    "rank": "★5",
    "element": "shade",
    "image": "assets/buddies/kumos.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%ad%a5%e5%a5%e2%a5%b9",
    "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/itbzvhH2Yp.png",
    "styleKey": "ns",
    "acquisition": "dream",
    "rarities": [
      5
    ],
    "obtain": {
      "name": "야쿠모",
      "style": "노멀 스타일",
      "image": "assets/buddy-obtain/yakumo-ns.jpg",
      "faceCrop": {
        "x": 95,
        "y": 40,
        "size": 225,
        "imageWidth": 1050
      }
    },
    "details": {
      "autoSkill": {
        "name": "오버 커밍",
        "charge": 1,
        "effects": [
          "적 전체에 속도 15% DOWN + 그림자 속성 저항 15% DOWN(3턴, 최고 누적 횟수 5)",
          "적 전체에 브레이크 부여",
          "아군 전체의 MP 10% 회복(야쿠모만 20% 회복)"
        ],
        "additionals": [
          {
            "condition": "각음진 또는 환마진 전개 시 추가",
            "effects": [
              "차지 축적량 +1"
            ]
          }
        ],
        "note": "스테이터스에 따른 스킬 효과 상승: 디버프 효과량 n% UP"
      },
      "chargeSkill": {
        "name": "라베지 오브 라스",
        "charge": 5,
        "effects": [
          "적 하나에 자신의 방해력(최대치: 600)에 따라 5회 공격(대상의 방어 무시)",
          "턴 종료 시까지 힘 50% DOWN + 지능 50% DOWN"
        ],
        "additionals": [
          {
            "condition": "전방에 「야쿠모(다인슬라이프)」가 있을 때",
            "effects": [
              "야쿠모 HP, MP 회복 100% + 루나틱(결사) 부여",
              "추가로 야쿠모가 「모드: 메나스」 상태로 모드 체인지하여 MP를 소비하지 않음",
              "고유 스킬 사용 시 모드 체인지 해제"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "사로 앤드 밤",
          "target": "적 단일",
          "condition": "마법 대미지를 받으면 발동",
          "effects": [
            "발동 조건을 달성한 적 하나의 마법 저항 20% DOWN",
            "발동 조건을 달성한 적 하나가 가하는 대미지 30% DOWN"
          ]
        },
        {
          "name": "리젝션",
          "target": "적 전체",
          "condition": "「특수」 계통의 환경 발생 시 발동",
          "effects": [
            "적 전체의 모든 속성 저항 50% DOWN"
          ]
        }
      ]
    }
  },
  {
    "id": "korobo",
    "name": "코로보",
    "originalName": "コロボ",
    "style": "노멀 스타일",
    "rank": "★5",
    "element": "fire",
    "image": "assets/buddies/korobo.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%b3%a5%ed%a5%dc",
    "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/qihwNhTDM8.png",
    "styleKey": "ns",
    "acquisition": "story",
    "rarities": [
      5
    ],
    "details": {
      "autoSkill": {
        "name": "히트 너클",
        "charge": 1,
        "effects": [
          "랜덤으로 적 하나에 불 속성 타격 공격(극)",
          "턴 경과에 따라 위력 UP(최대 10턴/5배)"
        ]
      },
      "chargeSkill": {
        "name": "미라클 스팀",
        "charge": 6,
        "effects": [
          "어나더 포스 게이지 30% 회복"
        ],
        "additionals": [
          {
            "condition": "전방에 「애쉬티어」가 있을 시",
            "effects": [
              "어나더 포스 게이지 회복량이 50%로 변경"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "플레임 재머",
          "target": "적·아군 단일",
          "condition": "불 속성 대미지를 받으면 발동",
          "effects": [
            "발동 조건을 달성한 적과 아군 하나의 힘, 지능 25% DOWN"
          ]
        },
        {
          "name": "볼캐닉 배리어",
          "target": "적·아군 전체",
          "condition": "「지표」 계통의 환경 발생 시 발동",
          "effects": [
            "모든 상태 이상 저항 100% UP"
          ]
        }
      ]
    },
    "acquisitionPath": "메인스토리 3부 전편"
  },
  {
    "id": "tetra",
    "name": "테트라",
    "originalName": "テトラ",
    "style": "노멀 스타일",
    "rank": "★5",
    "element": "none",
    "image": "assets/buddies/tetra.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%c6%a5%c8%a5%e9",
    "imageSource": "https://image02.seesaawiki.jp/a/o/anothereden-game-info/o5Psf8gTi4.png",
    "styleKey": "ns",
    "acquisition": "dream",
    "rarities": [
      5
    ],
    "obtain": {
      "name": "미나르카",
      "style": "노멀 스타일",
      "image": "assets/buddy-obtain/minalca-ns.jpg",
      "faceCrop": {
        "x": 175,
        "y": 15,
        "size": 120,
        "imageWidth": 480
      }
    },
    "details": {
      "autoSkill": {
        "name": "스파클 리벨리온",
        "charge": 1,
        "effects": [
          "적 전체에 마법 공격 3회(극)",
          "아군 전후방 전체의 HP 회복 20% + 상태 이상 회복"
        ],
        "additionals": [
          {
            "condition": "아군 전방 전체의 HP가 80% 이하 시",
            "effects": [
              "차지 축적량 +1"
            ]
          }
        ],
        "note": "스테이터스에 따른 스킬 효과 상승: 버프 효과량 n% UP · HP 회복량 n% UP"
      },
      "chargeSkill": {
        "name": "레 엔카르나시온",
        "charge": 8,
        "effects": [
          "적 전체에 자신의 회복력(최대치: 500)에 따른 공격(방어 무시)",
          "아군 전체 HP 회복 100% + 전투 불능 회복 + 버티기 부여"
        ],
        "additionals": [
          {
            "condition": "전방에 「미나르카(네메시스)」가 있을 경우",
            "effects": [
              "미나르카가 「리설 모드」로 변화"
            ]
          }
        ]
      },
      "auras": [
        {
          "name": "라인 포스",
          "target": "아군 단일",
          "condition": "HP가 「80%」 이하가 되면 발동",
          "effects": [
            "발동 조건을 달성한 아군 하나의 최대 HP, MP 25% UP",
            "발동 조건을 달성한 아군 하나의 물리, 마법 저항 30% UP"
          ]
        },
        {
          "name": "아트모스 레지사이드",
          "target": "아군 전체",
          "condition": "「대기」 계통의 환경 발생 시 발동",
          "effects": [
            "아군 전체의 물리 크리티컬률 100% UP",
            "아군 전체의 마법 크리티컬률 100% UP"
          ]
        }
      ]
    }
  },
  {
    "id": "mordy",
    "name": "모르디",
    "originalName": "モルディ",
    "style": "노멀 스타일",
    "rank": "★4",
    "element": "earth",
    "image": "assets/buddies/mordy.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%e2%a5%eb%a5%c7%a5%a3",
    "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/Qwzs3ZsUk8.png",
    "styleKey": "ns",
    "acquisition": "story",
    "rarities": [
      4
    ],
    "acquisitionPath": "메인스토리 3부 전편",
    "details": {
      "autoSkill": {
        "name": "나무난타",
        "charge": 1,
        "effects": [
          "적 전체에 땅 속성 타격 공격 3회(극)",
          "아군 전체의 힘 10% UP + 속도 10% UP(3턴, 최고 누적 횟수 5)"
        ],
        "note": "스테이터스에 따른 스킬 효과 상승: 버프 효과량 n% UP"
      },
      "auras": [
        {
          "name": "타임 원더러",
          "target": "아군 전체",
          "condition": "「난시류」 계통의 환경 발생 시 발동",
          "effects": [
            "아군 전체의 어나더 포스 중에 가하는 대미지 50% UP"
          ]
        }
      ]
    }
  },
  {
    "id": "otamander",
    "name": "올챙이맨더",
    "originalName": "オタマンダー",
    "style": "노멀 스타일",
    "rank": "★3",
    "element": "fire",
    "image": "assets/buddies/otamander.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%aa%a5%bf%a5%de%a5%f3%a5%c0%a1%bc",
    "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/U7EZojy6HR.png",
    "styleKey": "ns",
    "acquisition": "story",
    "rarities": [
      3
    ],
    "details": {
      "autoSkill": {
        "name": "미니인페르노",
        "charge": 1,
        "effects": [
          "적 전체에 불 속성 마법 공격(극)",
          "아군 전체의 바람 속성 저항 10% UP(3턴, 최고 누적 횟수 5)"
        ],
        "note": "스테이터스에 따른 스킬 효과 상승: 버프 효과량 n% UP"
      }
    }
  },
  {
    "id": "lord-ukulele",
    "name": "우쿨렐레 님",
    "originalName": "ウクレレ様",
    "style": "노멀 스타일",
    "rank": "★3",
    "element": "none",
    "image": "assets/buddies/lord-ukulele.webp",
    "sourcePage": "https://anothereden.game-info.wiki/d/%a5%a6%a5%af%a5%ec%a5%ec%cd%cd",
    "imageSource": "https://image01.seesaawiki.jp/a/o/anothereden-game-info/wadIZpook9.png",
    "styleKey": "ns",
    "acquisition": "story",
    "rarities": [
      3
    ],
    "details": {
      "autoSkill": {
        "name": "붕붕소다",
        "charge": 1,
        "effects": [
          "적 전체의 지능 10% DOWN + 속도 10% DOWN + 땅 속성 저항 10% DOWN(3턴, 최고 누적 횟수 5)"
        ],
        "note": "스테이터스에 따른 스킬 효과 상승: 디버프 효과량 n% UP"
      }
    }
  }
];
