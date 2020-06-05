// import { Record } from "immutable";
import { ICategories } from "Interfaces/ICategory";

export interface ICategoryReducer {
    categoryList: ICategories[]
}


// export const CategoryData1: Record.Factory<ICategory> = Record({

export const CategoryData:ICategoryReducer = {
    categoryList: [
        {
            id: "korbook",
            list: [
                { categoryIndex: '1',       id: "daa",      displayName: "소설",                          isBig: true, },
                { categoryIndex: '1',       id: "dab",      displayName: "시/에세이",                     isBig: true, },
                { categoryIndex: '1',       id: "dag",      displayName: "경제/경영",                     },
                { categoryIndex: '1',       id: "dah",      displayName: "자기계발",                      isBig: true, },

                { categoryIndex: '2',       id: "dac",      displayName: "인문",                          isBig: true, },
                { categoryIndex: '2',       id: "dad",      displayName: "역사/문화",                     },
                { categoryIndex: '2',       id: "dae",      displayName: "종교",                          },
                { categoryIndex: '2',       id: "daf",      displayName: "정치/사회",                     },
                { categoryIndex: '2',       id: "dap",      displayName: "예술/대중문화",                 },
                { categoryIndex: '2',       id: "daz",      displayName: "과학",                          },
                { categoryIndex: '2',       id: "da1",      displayName: "기술/공학",                     },
                { categoryIndex: '2',       id: "da2",      displayName: "컴퓨터/IT",                     },

                { categoryIndex: '3',       id: "dai",      displayName: "유아(0~7세)",                   },
                { categoryIndex: '3',       id: "daj",      displayName: "어린이(초등)",                  isBig: true, },
                { categoryIndex: '3',       id: "dal",      displayName: "어린이전집",                    },
                { categoryIndex: '3',       id: "dak",      displayName: "어린이영어",                    },
                { categoryIndex: '3',       id: "dao",      displayName: "청소년",                        },

                { categoryIndex: '4',       id: "dam",      displayName: "초등참고서",                    },
                { categoryIndex: '4',       id: "dan",      displayName: "중/고등참고서",                 isBig: true, },
                { categoryIndex: '4',       id: "da5",      displayName: "대학교재",                      },
                { categoryIndex: '4',       id: "da8",      displayName: "방송통신대교재",                isBig: true, },
                { categoryIndex: '4',       id: "da3",      displayName: "취업/수험서",                   isBig: true, },
                { categoryIndex: '4',       id: "dax",      displayName: "외국어",                        },

                { categoryIndex: '5',       id: "das",      displayName: "가정/육아",                     },
                { categoryIndex: '5',       id: "dav",      displayName: "건강",                          },
                { categoryIndex: '5',       id: "daq",      displayName: "여행",                          },
                { categoryIndex: '5',       id: "dat",      displayName: "요리",                          },
                { categoryIndex: '5',       id: "dar",      displayName: "취미/실용/스포츠",              },
                { categoryIndex: '6',       id: "dau",      displayName: "잡지",                          },
                { categoryIndex: '6',       id: "daw",      displayName: "만화",                          },
                { categoryIndex: '7',       id: "da6",      displayName: "한국소개도서",                  },
            ]
        },
        {
            id: 'otherbook',
            list: [
                { categoryIndex: '1',       id:"c35",   displayName: "영미도서",                      },
                { categoryIndex: '1',       id:"xaa",   displayName: "문학",                          },
                { categoryIndex: '1',       id:"xae",   displayName: "인문/사회",                     },
                { categoryIndex: '1',       id:"xaf",   displayName: "경제/경영",                     },
                { categoryIndex: '1',       id:"xag",   displayName: "과학/기술",                     },
                { categoryIndex: '1',       id:"xab",   displayName: "취미/실용/여행",                },
                { categoryIndex: '1',       id:"xai",   displayName: "ELT/어학/사전",                 },
                { categoryIndex: '1',       id:"xaj",   displayName: "교재",                          },
                { categoryIndex: '1',       id:"xac",   displayName: "생활/요리/건강",                },
                { categoryIndex: '1',       id:"xad",   displayName: "예술/건축",                     },
                { categoryIndex: '2',       id:"xah",   displayName: "어린이영어",                    },
                { categoryIndex: '2',       id:"c37",   displayName: "유아영어",                      },
                { categoryIndex: '2',       id:"c38",   displayName: "영역별영어학습",                },
                { categoryIndex: '2',       id:"c39",   displayName: "코스북",                        },
                { categoryIndex: '2',       id:"c3b",   displayName: "영어동화/그림책",               },
                { categoryIndex: '2',       id:"c3a",   displayName: "미국교과서",                    },
                { categoryIndex: '2',       id:"c3c",   displayName: "어린이중국어",                  },
                { categoryIndex: '2',       id:"c3d",   displayName: "어린이일본어",                  },
                { categoryIndex: '3',       id:"c36",   displayName: "일본도서",                      },
                { categoryIndex: '3',       id:"rDq",   displayName: "잡지",                          },
                { categoryIndex: '3',       id:"rDv",   displayName: "실용서/예술",                   },
                { categoryIndex: '3',       id:"rDp",   displayName: "만화/애니",                     },
                { categoryIndex: '3',       id:"rDx",   displayName: "문학",                          },
                { categoryIndex: '3',       id:"rDt",   displayName: "문고",                          },
                { categoryIndex: '3',       id:"rDy",   displayName: "라이트노벨",                    },
                { categoryIndex: '3',       id:"rDr",   displayName: "어학/학습",                     },
                { categoryIndex: '3',       id:"rDs",   displayName: "엔터테인먼트",                  },
                { categoryIndex: '3',       id:"rDa",   displayName: "아동",                          },
                { categoryIndex: '3',       id:"rDw",   displayName: "인문/사회",                     },
                { categoryIndex: '3',       id:"rDz",   displayName: "자연/기술과학",                 },
                { categoryIndex: '3',       id:"rDu",   displayName: "신서",                          },
            ]
        },
        {
            id: 'ebook',
            list: [
                { categoryIndex: "1",       id: "c3h",          displayName: "소설",                    isBig: true, },
                { categoryIndex: "1",       id: "c3n",          displayName: "경제/경영",               isBig: true, },
                { categoryIndex: "1",       id: "c3k",          displayName: "자기계발",                isBig: true, },
                { categoryIndex: "1",       id: "c3l",          displayName: "시/에세이",               isBig: true, },
                { categoryIndex: "1",       id: "c3m",          displayName: "인문",                    },
                { categoryIndex: "1",       id: "c3n",          displayName: "국어/외국어",             },
                { categoryIndex: "1",       id: "c3o",          displayName: "역사/풍속/신화",          },
                { categoryIndex: "1",       id: "c3p",          displayName: "사회/정치/법",            },
                { categoryIndex: "1",       id: "c3q",          displayName: "가정/생활/요리",          },
                { categoryIndex: "1",       id: "c44",          displayName: "여행/취미",               },
                { categoryIndex: "1",       id: "c3s",          displayName: "건강/의학",               },
                { categoryIndex: "1",       id: "c3t",          displayName: "종교/역학",               },
                
                { categoryIndex: "2",       id: "c3i",          displayName: "장르소설",                },
                { categoryIndex: "2",       id: "c45",          displayName: "외국도서",                },
                { categoryIndex: "2",       id: "c3u",          displayName: "코믹스",                  isBig: true, },
                { categoryIndex: "2",       id: "c3v",          displayName: "아동",                    },
                { categoryIndex: "2",       id: "c8e",          displayName: "유아",                    },
                { categoryIndex: "2",       id: "c3w",          displayName: "예술/대중문화",           },
                { categoryIndex: "2",       id: "c3x",          displayName: "교재/수험서",             },
                { categoryIndex: "2",       id: "c3y",          displayName: "청소년교양",              },
                { categoryIndex: "2",       id: "c3z",          displayName: "자연과학/공학",           },
                { categoryIndex: "2",       id: "c41",          displayName: "컴퓨터/인터넷",           },
                { categoryIndex: "2",       id: "c42",          displayName: "매거진",                  },
                { categoryIndex: "2",       id: "c9l",          displayName: "북모닝",                  },
                { categoryIndex: "2",       id: "c8x",          displayName: "e-오디오북",              },
            ]
        },
        {
            id: 'webnovel',
            list: [
                { categoryIndex: '1',       id:"cc2",           displayName: "로맨스",              isBig: true,                  },
                { categoryIndex: '1',       id:"cc4",           displayName: "판타지",              isBig: true,                  },
                { categoryIndex: '1',       id:"cc3",           displayName: "무협",                isBig: true,                  },
                { categoryIndex: '1',       id:"cc6",           displayName: "라이트노벨",              },
                { categoryIndex: '1',       id:"cc9",           displayName: "BL",                      },
                
                { categoryIndex: '2',       id:"cek",           displayName: "연재",                isBig: true,                  },
                { categoryIndex: '2',       id:"ce2",           displayName: "고화질만화",          isBig: true,                  },
                { categoryIndex: '2',       id:"ce3",           displayName: "무료만화",            isBig: true,                  },
                { categoryIndex: '2',       id:"ce4",           displayName: "교양만화",                  },
                { categoryIndex: '2',       id:"ce5",           displayName: "순정만화",                  },
                { categoryIndex: '2',       id:"ce6",           displayName: "학원만화",                  },
                { categoryIndex: '2',       id:"ce7",           displayName: "드라마",                    },
                { categoryIndex: '2',       id:"ce8",           displayName: "성인만화",                  },
                { categoryIndex: '2',       id:"ce9",           displayName: "BL만화",                    },
            ]
        },
        {
            id: 'gift',
            list: [
                { categoryIndex: '1',       id:"c5b",           displayName: "고급필기구",                      },
                { categoryIndex: '1',       id:"c5l",           displayName: "오피스",                          },
                { categoryIndex: '1',       id:"c5x",           displayName: "리빙/생활가전",                   },
                    
                { categoryIndex: '2',       id:"c5y",           displayName: "키친/푸드",                       },
                { categoryIndex: '2',       id:"c5f",           displayName: "가구/수납",                       },
                { categoryIndex: '2',       id:"c5h",           displayName: "뷰티/헬스",                       },
                    
                { categoryIndex: '3',       id:"c5e",           displayName: "패션잡화",                        },
                { categoryIndex: '3',       id:"c5z",           displayName: "여행/자동차",                     },
                { categoryIndex: '3',       id:"c5d",           displayName: "취미/펫",                         },
                { categoryIndex: '3',       id:"c5g",           displayName: "유아동",                          },

                { categoryIndex: '4',       id:"c5b",           displayName: "고급필기구",                      },
                { categoryIndex: '4',       id:"c5l",           displayName: "오피스",                          },
                { categoryIndex: '4',       id:"c5i",           displayName: "화방",                            },
                { categoryIndex: '4',       id:"c5f",           displayName: "가구",                            },
                { categoryIndex: '4',       id:"c5y",           displayName: "키친/푸드",                       },
                { categoryIndex: '4',       id:"c5g",           displayName: "베이비/키즈",                     },
                { categoryIndex: '4',       id:"c5z",           displayName: "여행/레저",                       },
                { categoryIndex: '4',       id:"c5h",           displayName: "패션",                            },
                { categoryIndex: '4',       id:"c5d",           displayName: "키덜트",                          },
                { categoryIndex: '4',       id:"c5d",           displayName: "키덜트/펫",                       },
                { categoryIndex: '4',       id:"c5k",           displayName: "독서용품",                        },
                { categoryIndex: '4',       id:"c5j",           displayName: "PET",                             },
            ]
        },
        {
            id: 'music',
            list: [
                { categoryIndex: '1',       id:"c46",           displayName: "가요",            isBig: true,    },
                { categoryIndex: '1',       id:"c4e",           displayName: "클래식",          isBig: true,    },
                { categoryIndex: '1',       id:"c47",           displayName: "팝",              isBig: true,    },
                { categoryIndex: '1',       id:"c48",           displayName: "락",                              },
                { categoryIndex: '1',       id:"c49",           displayName: "재즈",                            },
                { categoryIndex: '1',       id:"c4b",           displayName: "O.S.T/뮤지컬",                    },
                { categoryIndex: '1',       id:"c4a",           displayName: "일본음악",                        },
                { categoryIndex: '1',       id:"c4g",           displayName: "유아/아동",                       },
                    
                { categoryIndex: '2',       id:"cc2",           displayName: "블루레이",                        },
                { categoryIndex: '2',       id:"c4m",           displayName: "드라마/로맨스",                   },
                { categoryIndex: '2',       id:"c4n",           displayName: "애니메이션",                      },
                { categoryIndex: '2',       id:"c4v",           displayName: "MUSIC BLU-RAY",                   },

                { categoryIndex: '3',       id:"cb7",           displayName: "DVD",                             },
                { categoryIndex: '3',       id:"c4x",           displayName: "드라마/로맨스",                   },
                { categoryIndex: '3',       id:"c4y",           displayName: "애니메이션",                      },
                { categoryIndex: '3',       id:"c56",           displayName: "MUSIC DVD",                       },
            ]
        },
        {
            id: 'usedthing',
            list: [
                { categoryIndex: '1',       id:"ca9",           displayName: "중고도서",                        },
                { categoryIndex: '1',       id:"caa",           displayName: "소설",                            },
                { categoryIndex: '1',       id:"cab",           displayName: "시/에세이",                       },
                { categoryIndex: '1',       id:"cac",           displayName: "경제/경영",                       },
                { categoryIndex: '1',       id:"cad",           displayName: "자기계발",                        },
                { categoryIndex: '1',       id:"cae",           displayName: "인문",                            },
                { categoryIndex: '1',       id:"caf",           displayName: "정치/사회",                       },
                { categoryIndex: '1',       id:"cag",           displayName: "기술/공학",                       },
                { categoryIndex: '1',       id:"cah",           displayName: "컴퓨터/IT",                       },
                { categoryIndex: '1',       id:"cai",           displayName: "아동",                            },
                { categoryIndex: '1',       id:"caj",           displayName: "중/고등학습",                     },
                { categoryIndex: '1',       id:"cak",           displayName: "외국어",                          },
                { categoryIndex: '1',       id:"cal",           displayName: "취업/수험서",                     },
                    
                { categoryIndex: '2',       id:"cam",           displayName: "중고음반",                        },
                { categoryIndex: '2',       id:"can",           displayName: "중고DVD",                         },
            ]
        },
    ]
};

