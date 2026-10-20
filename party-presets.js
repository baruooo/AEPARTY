'use strict';
// Reviewed 2026-10-10. Exact featured styles only; source links and battle order retained.
const partyPresetDefinitions = {
  "y2026_suzunui": [{
    "title": "환마진",
    "members": ["y2026_suzunui", "shenhua", "erina", "nightmare"],
    "roles": {},
    "summary": "",
    "conditions": "",
    "zoneId": "zone-13",
    "sources": [],
    "evidenceType": "user",
    "mergeAlternatives": false
  }],
  "verdanta": [
    {
      "title": "수천진",
      "members": [
        "verdanta",
        "y2024_elseal_as",
        "hismena",
        "y2026_jillfunny_as"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-4",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "쌍격진 참돌",
      "members": [
        "verdanta",
        "linaria",
        "hismena_es",
        "elenoa"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-6",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "황참진",
      "members": [
        "verdanta",
        "y2025_shion_es",
        "elenoa",
        "legacy_isuka"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-14",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "쌍격진 참마",
      "members": [
        "flammelapis",
        "elenoa",
        "legacy_yuna",
        "verdanta"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-7",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "수천진",
      "members": [
        "y2024_elseal_as",
        "myrus",
        "y2026_jillfunny_as",
        "verdanta"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-4",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2024_elseal_as": [
    {
      "title": "수천진",
      "members": [
        "verdanta",
        "y2024_elseal_as",
        "hismena",
        "y2026_jillfunny_as"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-4",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "수천진",
      "members": [
        "y2024_elseal_as",
        "y2024_mazrika",
        "dunarith",
        "y2026_jillfunny_as"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-4",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "수천진",
      "members": [
        "y2024_elseal_as",
        "myrus",
        "y2026_jillfunny_as",
        "verdanta"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-4",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "hismena": [
    {
      "title": "수천진",
      "members": [
        "verdanta",
        "y2024_elseal_as",
        "hismena",
        "y2026_jillfunny_as"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-4",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2026_jillfunny_as": [
    {
      "title": "수천진",
      "members": [
        "verdanta",
        "y2024_elseal_as",
        "hismena",
        "y2026_jillfunny_as"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-4",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "휘정진",
      "members": [
        "nina",
        "y2024_alma_as",
        "y2026_jillfunny_as",
        "y2024_thillelille_es"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-15",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "수천진",
      "members": [
        "y2024_elseal_as",
        "y2024_mazrika",
        "dunarith",
        "y2026_jillfunny_as"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-4",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "수천진",
      "members": [
        "y2024_elseal_as",
        "myrus",
        "y2026_jillfunny_as",
        "verdanta"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-4",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "linaria": [
    {
      "title": "쌍격진 참돌",
      "members": [
        "verdanta",
        "linaria",
        "hismena_es",
        "elenoa"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-6",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "쌍격진 참돌",
      "members": [
        "linaria",
        "legacy_cetie",
        "hismena_es",
        "legacy_isuka"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-6",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "쌍격진 참돌",
      "members": [
        "linaria",
        "elenoa",
        "hismena_es",
        "legacy_isuka"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-6",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "hismena_es": [
    {
      "title": "쌍격진 참돌",
      "members": [
        "verdanta",
        "linaria",
        "hismena_es",
        "elenoa"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-6",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "쌍격진 참돌",
      "members": [
        "linaria",
        "legacy_cetie",
        "hismena_es",
        "legacy_isuka"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-6",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "쌍격진 참돌",
      "members": [
        "linaria",
        "elenoa",
        "hismena_es",
        "legacy_isuka"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-6",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "elenoa": [
    {
      "title": "쌍격진 참돌",
      "members": [
        "verdanta",
        "linaria",
        "hismena_es",
        "elenoa"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-6",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "황참진",
      "members": [
        "verdanta",
        "y2025_shion_es",
        "elenoa",
        "legacy_isuka"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-14",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "쌍격진 참돌",
      "members": [
        "linaria",
        "elenoa",
        "hismena_es",
        "legacy_isuka"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-6",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "쌍격진 참마",
      "members": [
        "flammelapis",
        "elenoa",
        "legacy_yuna",
        "verdanta"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-7",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2025_shion_es": [
    {
      "title": "황참진",
      "members": [
        "verdanta",
        "y2025_shion_es",
        "elenoa",
        "legacy_isuka"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-14",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "황참진-보현일도류",
      "displayZoneName": "황참진-보현일도류",
      "members": [
        "y2025_shion_es",
        "y2024_akane_ac",
        "shigure",
        "y2024_shigure_es"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-14",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "legacy_isuka": [
    {
      "title": "황참진",
      "members": [
        "verdanta",
        "y2025_shion_es",
        "elenoa",
        "legacy_isuka"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-14",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "쌍격진 참돌",
      "members": [
        "linaria",
        "legacy_cetie",
        "hismena_es",
        "legacy_isuka"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-6",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "쌍격진 참돌",
      "members": [
        "linaria",
        "elenoa",
        "hismena_es",
        "legacy_isuka"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-6",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "legacy_cetie": [
    {
      "title": "쌍격진 참돌",
      "members": [
        "linaria",
        "legacy_cetie",
        "hismena_es",
        "legacy_isuka"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-6",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "shenhua": [
    {
      "title": "환마진",
      "members": [
        "shenhua",
        "y2024_yakumo_as",
        "y2024_izuna",
        "nekoko"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-13",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "환마진",
      "members": [
        "shenhua",
        "y2024_yakumo_as",
        "nightmare",
        "nekoko"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-13",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2024_yakumo_as": [
    {
      "title": "환마진",
      "members": [
        "shenhua",
        "y2024_yakumo_as",
        "y2024_izuna",
        "nekoko"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-13",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "환마진",
      "members": [
        "shenhua",
        "y2024_yakumo_as",
        "nightmare",
        "nekoko"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-13",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2024_izuna": [
    {
      "title": "환마진",
      "members": [
        "shenhua",
        "y2024_yakumo_as",
        "y2024_izuna",
        "nekoko"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-13",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "초뢰진",
      "members": [
        "y2025_velette_as",
        "silver_thunder",
        "y2024_utpalaka",
        "y2024_izuna"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-11",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "nekoko": [
    {
      "title": "환마진",
      "members": [
        "shenhua",
        "y2024_yakumo_as",
        "y2024_izuna",
        "nekoko"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-13",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "환마진",
      "members": [
        "shenhua",
        "y2024_yakumo_as",
        "nightmare",
        "nekoko"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-13",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "flammelapis": [
    {
      "title": "쌍격진 참마",
      "members": [
        "flammelapis",
        "elenoa",
        "legacy_yuna",
        "verdanta"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-7",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "legacy_yuna": [
    {
      "title": "쌍격진 참마",
      "members": [
        "flammelapis",
        "elenoa",
        "legacy_yuna",
        "verdanta"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-7",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "kuchinawa": [
    {
      "title": "지열진",
      "members": [
        "kuchinawa",
        "violet_lancer",
        "minghua",
        "y2026_theodorus"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-10",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "지열진",
      "members": [
        "legacy_myrus",
        "violet_lancer",
        "raven",
        "kuchinawa"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-10",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "0": [
          "legacy_myrus",
          "minghua"
        ]
      }
    }
  ],
  "violet_lancer": [
    {
      "title": "지열진",
      "members": [
        "kuchinawa",
        "violet_lancer",
        "minghua",
        "y2026_theodorus"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-10",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "지열진",
      "members": [
        "legacy_myrus",
        "violet_lancer",
        "raven",
        "kuchinawa"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-10",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "0": [
          "legacy_myrus",
          "minghua"
        ]
      }
    }
  ],
  "minghua": [
    {
      "title": "지열진",
      "members": [
        "kuchinawa",
        "violet_lancer",
        "minghua",
        "y2026_theodorus"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-10",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "지열진",
      "members": [
        "legacy_myrus",
        "violet_lancer",
        "raven",
        "kuchinawa"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-10",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "0": [
          "legacy_myrus",
          "minghua"
        ]
      }
    }
  ],
  "y2026_theodorus": [
    {
      "title": "지열진",
      "members": [
        "kuchinawa",
        "violet_lancer",
        "minghua",
        "y2026_theodorus"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-10",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "굉타진",
      "members": [
        "havoc",
        "y2026_theodorus",
        "y2024_shanie_ac",
        "y2024_id"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-2",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "ceries": [
    {
      "title": "순돌진",
      "members": [
        "ceries",
        "y2025_laclair_ac",
        "legacy_hozuki",
        "clughorn"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-5",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "순돌진",
      "members": [
        "y2026_darunis_as",
        "ceries",
        "clughorn",
        "legacy_hozuki"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-5",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2025_laclair_ac": [
    {
      "title": "순돌진",
      "members": [
        "ceries",
        "y2025_laclair_ac",
        "legacy_hozuki",
        "clughorn"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-5",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "legacy_hozuki": [
    {
      "title": "순돌진",
      "members": [
        "ceries",
        "y2025_laclair_ac",
        "legacy_hozuki",
        "clughorn"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-5",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "순돌진",
      "members": [
        "y2026_darunis_as",
        "ceries",
        "clughorn",
        "legacy_hozuki"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-5",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "clughorn": [
    {
      "title": "순돌진",
      "members": [
        "ceries",
        "y2025_laclair_ac",
        "legacy_hozuki",
        "clughorn"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-5",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "월광진",
      "members": [
        "mildi",
        "legacy_kamlanage",
        "clughorn"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-9",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "각음진",
      "members": [
        "legacy_iphi",
        "erina",
        "y2026_jorna",
        "black_swordsman"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-1",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "2": [
          "y2026_jorna",
          "clughorn"
        ]
      }
    },
    {
      "title": "순돌진",
      "members": [
        "y2026_darunis_as",
        "ceries",
        "clughorn",
        "legacy_hozuki"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-5",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "nina": [
    {
      "title": "휘정진",
      "members": [
        "nina",
        "y2024_alma_as",
        "y2026_jillfunny_as",
        "y2024_thillelille_es"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-15",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2024_alma_as": [
    {
      "title": "휘정진",
      "members": [
        "nina",
        "y2024_alma_as",
        "y2026_jillfunny_as",
        "y2024_thillelille_es"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-15",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2024_thillelille_es": [
    {
      "title": "휘정진",
      "members": [
        "nina",
        "y2024_alma_as",
        "y2026_jillfunny_as",
        "y2024_thillelille_es"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-15",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "nightmare": [
    {
      "title": "환마진",
      "members": [
        "shenhua",
        "y2024_yakumo_as",
        "nightmare",
        "nekoko"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-13",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "blue_reaper": [
    {
      "title": "풍왕진",
      "members": [
        "y2024_sesta_as",
        "blue_reaper",
        "y2024_tsubame_ac",
        "y2024_shigure_es"
      ],
      "slotAlternatives": {
        "1": [
          "blue_reaper",
          "melpiphia"
        ],
        "2": [
          "y2024_tsubame_ac",
          "legacy_felmina"
        ]
      },
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-12",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "풍왕진",
      "members": [
        "y2024_sesta_as",
        "ravina",
        "y2024_tsubame_ac",
        "y2024_shigure_es"
      ],
      "slotAlternatives": {
        "1": [
          "ravina",
          "blue_reaper"
        ]
      },
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-12",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2024_sesta_as": [
    {
      "title": "풍왕진",
      "members": [
        "y2024_sesta_as",
        "blue_reaper",
        "y2024_tsubame_ac",
        "y2024_shigure_es"
      ],
      "slotAlternatives": {
        "1": [
          "blue_reaper",
          "melpiphia"
        ],
        "2": [
          "y2024_tsubame_ac",
          "legacy_felmina"
        ]
      },
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-12",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "풍왕진",
      "members": [
        "y2024_sesta_as",
        "ravina",
        "y2024_tsubame_ac",
        "y2024_shigure_es"
      ],
      "slotAlternatives": {
        "1": [
          "ravina",
          "blue_reaper"
        ]
      },
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-12",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2024_shigure_es": [
    {
      "title": "풍왕진",
      "members": [
        "y2024_sesta_as",
        "blue_reaper",
        "y2024_tsubame_ac",
        "y2024_shigure_es"
      ],
      "slotAlternatives": {
        "1": [
          "blue_reaper",
          "melpiphia"
        ],
        "2": [
          "y2024_tsubame_ac",
          "legacy_felmina"
        ]
      },
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-12",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "풍왕진",
      "members": [
        "y2024_sesta_as",
        "ravina",
        "y2024_tsubame_ac",
        "y2024_shigure_es"
      ],
      "slotAlternatives": {
        "1": [
          "ravina",
          "blue_reaper"
        ]
      },
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-12",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "황참진-보현일도류",
      "displayZoneName": "황참진-보현일도류",
      "members": [
        "y2025_shion_es",
        "y2024_akane_ac",
        "shigure",
        "y2024_shigure_es"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-14",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "legacy_felmina": [
    {
      "title": "풍왕진",
      "members": [
        "y2024_sesta_as",
        "blue_reaper",
        "y2024_tsubame_ac",
        "y2024_shigure_es"
      ],
      "slotAlternatives": {
        "1": [
          "blue_reaper",
          "melpiphia"
        ],
        "2": [
          "y2024_tsubame_ac",
          "legacy_felmina"
        ]
      },
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-12",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2024_tsubame_ac": [
    {
      "title": "풍왕진",
      "members": [
        "y2024_sesta_as",
        "blue_reaper",
        "y2024_tsubame_ac",
        "y2024_shigure_es"
      ],
      "slotAlternatives": {
        "1": [
          "blue_reaper",
          "melpiphia"
        ],
        "2": [
          "y2024_tsubame_ac",
          "legacy_felmina"
        ]
      },
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-12",
      "sources": [],
      "evidenceType": "user"
    },
    {
      "title": "풍왕진",
      "members": [
        "y2024_sesta_as",
        "ravina",
        "y2024_tsubame_ac",
        "y2024_shigure_es"
      ],
      "slotAlternatives": {
        "1": [
          "ravina",
          "blue_reaper"
        ]
      },
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-12",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "melpiphia": [
    {
      "title": "풍왕진",
      "members": [
        "y2024_sesta_as",
        "blue_reaper",
        "y2024_tsubame_ac",
        "y2024_shigure_es"
      ],
      "slotAlternatives": {
        "1": [
          "blue_reaper",
          "melpiphia"
        ],
        "2": [
          "y2024_tsubame_ac",
          "legacy_felmina"
        ]
      },
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-12",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "legacy_kamlanage": [
    {
      "title": "월광진",
      "members": [
        "mildi",
        "legacy_kamlanage",
        "clughorn"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-9",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "mildi": [
    {
      "title": "월광진",
      "members": [
        "mildi",
        "legacy_kamlanage",
        "clughorn"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-9",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "merit": [
    {
      "title": "열화진",
      "members": [
        "ravina",
        "y2024_minalca_as",
        "merit",
        "legacy_ewan"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-8",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "0": [
          "ravina",
          "y2024_renri_ac"
        ],
        "1": [
          "y2024_minalca_as",
          "tsukiha"
        ]
      }
    }
  ],
  "y2024_renri_ac": [
    {
      "title": "열화진",
      "members": [
        "ravina",
        "y2024_minalca_as",
        "merit",
        "legacy_ewan"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-8",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "0": [
          "ravina",
          "y2024_renri_ac"
        ],
        "1": [
          "y2024_minalca_as",
          "tsukiha"
        ]
      }
    }
  ],
  "ravina": [
    {
      "title": "열화진",
      "members": [
        "ravina",
        "y2024_minalca_as",
        "merit",
        "legacy_ewan"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-8",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "0": [
          "ravina",
          "y2024_renri_ac"
        ],
        "1": [
          "y2024_minalca_as",
          "tsukiha"
        ]
      }
    },
    {
      "title": "풍왕진",
      "members": [
        "y2024_sesta_as",
        "ravina",
        "y2024_tsubame_ac",
        "y2024_shigure_es"
      ],
      "slotAlternatives": {
        "1": [
          "ravina",
          "blue_reaper"
        ]
      },
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-12",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2024_minalca_as": [
    {
      "title": "열화진",
      "members": [
        "ravina",
        "y2024_minalca_as",
        "merit",
        "legacy_ewan"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-8",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "0": [
          "ravina",
          "y2024_renri_ac"
        ],
        "1": [
          "y2024_minalca_as",
          "tsukiha"
        ]
      }
    }
  ],
  "legacy_ewan": [
    {
      "title": "열화진",
      "members": [
        "ravina",
        "y2024_minalca_as",
        "merit",
        "legacy_ewan"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-8",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "0": [
          "ravina",
          "y2024_renri_ac"
        ],
        "1": [
          "y2024_minalca_as",
          "tsukiha"
        ]
      }
    }
  ],
  "tsukiha": [
    {
      "title": "열화진",
      "members": [
        "ravina",
        "y2024_minalca_as",
        "merit",
        "legacy_ewan"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-8",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "0": [
          "ravina",
          "y2024_renri_ac"
        ],
        "1": [
          "y2024_minalca_as",
          "tsukiha"
        ]
      }
    }
  ],
  "erina": [
    {
      "title": "각음진",
      "members": [
        "legacy_iphi",
        "erina",
        "y2026_jorna",
        "black_swordsman"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-1",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "2": [
          "y2026_jorna",
          "clughorn"
        ]
      }
    }
  ],
  "black_swordsman": [
    {
      "title": "각음진",
      "members": [
        "legacy_iphi",
        "erina",
        "y2026_jorna",
        "black_swordsman"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-1",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "2": [
          "y2026_jorna",
          "clughorn"
        ]
      }
    },
    {
      "title": "각음진",
      "members": [
        "legacy_iphi",
        "y2023_wenefica",
        "black_swordsman",
        "loyalist"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-1",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "legacy_iphi": [
    {
      "title": "각음진",
      "members": [
        "legacy_iphi",
        "erina",
        "y2026_jorna",
        "black_swordsman"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-1",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "2": [
          "y2026_jorna",
          "clughorn"
        ]
      }
    },
    {
      "title": "각음진",
      "members": [
        "legacy_iphi",
        "y2023_wenefica",
        "black_swordsman",
        "loyalist"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-1",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2026_jorna": [
    {
      "title": "각음진",
      "members": [
        "legacy_iphi",
        "erina",
        "y2026_jorna",
        "black_swordsman"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-1",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "2": [
          "y2026_jorna",
          "clughorn"
        ]
      }
    }
  ],
  "y2024_id": [
    {
      "title": "굉타진",
      "members": [
        "havoc",
        "y2026_theodorus",
        "y2024_shanie_ac",
        "y2024_id"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-2",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2024_shanie_ac": [
    {
      "title": "굉타진",
      "members": [
        "havoc",
        "y2026_theodorus",
        "y2024_shanie_ac",
        "y2024_id"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-2",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "havoc": [
    {
      "title": "굉타진",
      "members": [
        "havoc",
        "y2026_theodorus",
        "y2024_shanie_ac",
        "y2024_id"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-2",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "silver_thunder": [
    {
      "title": "초뢰진",
      "members": [
        "y2025_velette_as",
        "silver_thunder",
        "y2024_utpalaka",
        "y2024_izuna"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-11",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2025_velette_as": [
    {
      "title": "초뢰진",
      "members": [
        "y2025_velette_as",
        "silver_thunder",
        "y2024_utpalaka",
        "y2024_izuna"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-11",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2024_utpalaka": [
    {
      "title": "초뢰진",
      "members": [
        "y2025_velette_as",
        "silver_thunder",
        "y2024_utpalaka",
        "y2024_izuna"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-11",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2024_akane_ac": [
    {
      "title": "황참진-보현일도류",
      "displayZoneName": "황참진-보현일도류",
      "members": [
        "y2025_shion_es",
        "y2024_akane_ac",
        "shigure",
        "y2024_shigure_es"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-14",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "shigure": [
    {
      "title": "황참진-보현일도류",
      "displayZoneName": "황참진-보현일도류",
      "members": [
        "y2025_shion_es",
        "y2024_akane_ac",
        "shigure",
        "y2024_shigure_es"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-14",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2024_mazrika": [
    {
      "title": "수천진",
      "members": [
        "y2024_elseal_as",
        "y2024_mazrika",
        "dunarith",
        "y2026_jillfunny_as"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-4",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "dunarith": [
    {
      "title": "수천진",
      "members": [
        "y2024_elseal_as",
        "y2024_mazrika",
        "dunarith",
        "y2026_jillfunny_as"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-4",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "myrus": [
    {
      "title": "수천진",
      "members": [
        "y2024_elseal_as",
        "myrus",
        "y2026_jillfunny_as",
        "verdanta"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-4",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "raven": [
    {
      "title": "지열진",
      "members": [
        "legacy_myrus",
        "violet_lancer",
        "raven",
        "kuchinawa"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-10",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "0": [
          "legacy_myrus",
          "minghua"
        ]
      }
    }
  ],
  "legacy_myrus": [
    {
      "title": "지열진",
      "members": [
        "legacy_myrus",
        "violet_lancer",
        "raven",
        "kuchinawa"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-10",
      "sources": [],
      "evidenceType": "user",
      "slotAlternatives": {
        "0": [
          "legacy_myrus",
          "minghua"
        ]
      }
    }
  ],
  "y2024_kuchinawa": [],
  "y2023_wenefica": [
    {
      "title": "각음진",
      "members": [
        "legacy_iphi",
        "y2023_wenefica",
        "black_swordsman",
        "loyalist"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-1",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "loyalist": [
    {
      "title": "각음진",
      "members": [
        "legacy_iphi",
        "y2023_wenefica",
        "black_swordsman",
        "loyalist"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-1",
      "sources": [],
      "evidenceType": "user"
    }
  ],
  "y2026_darunis_as": [
    {
      "title": "순돌진",
      "members": [
        "y2026_darunis_as",
        "ceries",
        "clughorn",
        "legacy_hozuki"
      ],
      "roles": {},
      "summary": "",
      "conditions": "",
      "zoneId": "zone-5",
      "sources": [],
      "evidenceType": "user"
    }
  ]
};

// Requested compositions stay separate; only the specified water slot is interchangeable.
const addedPartyPresets20261012=[
  {
    "title": "열화진",
    "members": [
      "y2024_renri_ac",
      "y2024_minalca_as",
      "merit",
      "legacy_tsukiha"
    ],
    "zoneId": "zone-8",
    "roles": {},
    "summary": "",
    "conditions": "",
    "sources": [],
    "evidenceType": "user",
    "mergeAlternatives": false
  },
  {
    "title": "아르카디아-불",
    "members": [
      "y2024_sazanca",
      "y2024_wryz",
      "y2024_melpiphia",
      "y2025_aldo_as"
    ],
    "zoneId": "zone-19",
    "displayZoneName": "아르카디아-불",
    "roles": {},
    "summary": "",
    "conditions": "",
    "sources": [],
    "evidenceType": "user",
    "mergeAlternatives": false
  },
  {
    "title": "아르카디아-번개",
    "members": [
      "y2024_utpalaka",
      "y2024_melpiphia",
      "y2024_wryz",
      "y2025_aldo_as"
    ],
    "zoneId": "zone-19",
    "displayZoneName": "아르카디아-번개",
    "roles": {},
    "summary": "",
    "conditions": "",
    "sources": [],
    "evidenceType": "user",
    "mergeAlternatives": false
  },
  {
    "title": "굉타진",
    "members": [
      "y2024_id",
      "y2024_daisy_as",
      "y2024_renri_ac",
      "y2024_ciel_ac"
    ],
    "zoneId": "zone-2",
    "roles": {},
    "summary": "",
    "conditions": "",
    "sources": [],
    "evidenceType": "user",
    "mergeAlternatives": false
  },
  {
    "title": "수천진",
    "members": [
      "y2024_elseal_as",
      "y2024_jillfunny",
      "verdanta",
      "y2026_melody_ac"
    ],
    "slotAlternatives": {
      "2": [
        "verdanta",
        "hismena"
      ]
    },
    "zoneId": "zone-4",
    "roles": {},
    "summary": "",
    "conditions": "",
    "sources": [],
    "evidenceType": "user",
    "mergeAlternatives": false
  },
  {
    "title": "굉타진",
    "members": [
      "y2024_id",
      "y2024_daisy_as",
      "y2024_renri_ac",
      "y2025_kagurame"
    ],
    "zoneId": "zone-2",
    "roles": {},
    "summary": "",
    "conditions": "",
    "sources": [],
    "evidenceType": "user",
    "mergeAlternatives": false
  },
  {
    "title": "굉타진",
    "members": [
      "havoc",
      "y2026_theodorus",
      "y2025_nilya",
      "y2025_kagurame"
    ],
    "zoneId": "zone-2",
    "roles": {},
    "summary": "",
    "conditions": "",
    "sources": [],
    "evidenceType": "user",
    "mergeAlternatives": false
  }
];
for(const preset of addedPartyPresets20261012){
 (partyPresetDefinitions[preset.members[0]]??=[]).push(preset);
}

const addedPartyPresets20261012Second=[
  {
    "title": "초뢰진",
    "zoneId": "zone-11",
    "members": [
      "y2025_velette_as",
      "silver_thunder",
      "y2024_utpalaka",
      "y2026_melody_ac"
    ],
    "roles": {},
    "summary": "",
    "conditions": "",
    "sources": [],
    "evidenceType": "user",
    "mergeAlternatives": false
  },
  {
    "title": "열화진",
    "zoneId": "zone-8",
    "members": [
      "ravina",
      "tsukiha",
      "merit",
      "y2026_melody_ac"
    ],
    "roles": {},
    "summary": "",
    "conditions": "",
    "sources": [],
    "evidenceType": "user",
    "mergeAlternatives": false
  },
  {
    "title": "수천진",
    "zoneId": "zone-4",
    "members": [
      "y2024_elseal_as",
      "y2026_jillfunny_as",
      "verdanta",
      "y2026_melody_ac"
    ],
    "roles": {},
    "summary": "",
    "conditions": "",
    "sources": [],
    "evidenceType": "user",
    "mergeAlternatives": false
  },
  {
    "title": "환마진",
    "zoneId": "zone-13",
    "members": [
      "y2024_xianhua",
      "y2025_kullervo_as",
      "y2024_yakumo_as",
      "y2024_izuna"
    ],
    "slotAlternatives": {
      "0": [
        "y2024_xianhua",
        "shenhua"
      ],
      "1": [
        "y2025_kullervo_as",
        "legacy_yuna"
      ]
    },
    "roles": {},
    "summary": "",
    "conditions": "",
    "sources": [],
    "evidenceType": "user",
    "mergeAlternatives": false
  }
];
for(const preset of addedPartyPresets20261012Second){
 (partyPresetDefinitions[preset.members[0]]??=[]).push(preset);
}

const addedPartyPresets20261013=[
  {
    "title": "황참진-보현일도류",
    "zoneId": "zone-14",
    "displayZoneName": "황참진-보현일도류",
    "members": [
      "y2025_shion_es",
      "y2024_akane_ac",
      "y2024_shigure_es",
      "legacy_akane"
    ],
    "slotAlternatives": {
      "3": [
        "legacy_akane",
        "y2025_aldo_as"
      ]
    },
    "roles": {},
    "summary": "",
    "conditions": "",
    "sources": [],
    "evidenceType": "user",
    "mergeAlternatives": false
  },
  {
    "title": "황참진",
    "zoneId": "zone-14",
    "members": [
      "y2025_shion_es",
      "elenoa",
      "legacy_isuka",
      "y2025_aldo_as"
    ],
    "roles": {},
    "summary": "",
    "conditions": "",
    "sources": [],
    "evidenceType": "user",
    "mergeAlternatives": false
  },
  {
    "title": "쌍격진 참마",
    "zoneId": "zone-7",
    "members": [
      "flammelapis",
      "elenoa",
      "legacy_starky",
      "y2025_aldo_as"
    ],
    "slotAlternatives": {
      "3": [
        "y2025_aldo_as",
        "y2026_spirika"
      ]
    },
    "roles": {},
    "summary": "",
    "conditions": "",
    "sources": [],
    "evidenceType": "user",
    "mergeAlternatives": false
  }
];
for(const preset of addedPartyPresets20261013){
 (partyPresetDefinitions[preset.members[0]]??=[]).push(preset);
}
