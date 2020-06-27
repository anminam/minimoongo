import { IEvent1, IEventPicks, IEventListItem } from "Interfaces/IEventList";

/**
 * 화재의 신간
 */
export const event1: IEvent1 = {
  title: "화재의 신간",
  href: "/",
  order: ["korbook", "otherbook", "ebook", "webnovel"],
  list: [
    "9788965963790",
    "9788993178692",
    "9788954671156",
    "9788950987749",
    "9791190299060",
    "9791158740757",
    "9791197016806",
    "9780547577319",
    "9780553509977",
    "9780547577098",
    "9780393354324",
    "9780374532505",
    "9780062691194",
    "9780099590088",
    "9780156012195",
    "9782330106485",
    "9780882848181",
    "9780674980822",
  ],
};
/**
 * ○○○님을 위한 Picks 추천 샘플
 * ○○○님을 위한 Picks 추천 샘플 [로그인 하고 나만의 AI 맞춤추천 받아보세요] Picks 이용 가이드
 */
export const eventPicks: IEventPicks = {
  title: "님을 위한 Picks 추천 샘플",
  className: "감수성이 예민한 신중형", // 추후 아이디로..
  likeCategory: "시/에세이/인문",
  likeAuthor: "김영하",
  cicleOfReading: 1,
  rankOfReading: 7,
  list: ["9791190299060", "9791158740757", "9791197016806"],
  href: "/",
};

export const bannerTop: IEventListItem = {
  id: "bannerTop",
  displayName: "bannerTop",
  list: [
    {
      id: "topbanner1",
      displayName: "topbanner1",
      href: "/",
      src: "topbanner1.png",
    },
    {
      id: "topbanner2",
      displayName: "topbanner2",
      href: "/",
      src: "topbanner2.png",
    },
  ],
};

export const mainWelcome2Event: IEventListItem = {
  id: "bannerTop",
  displayName: "bannerTop",
  imagePath: "assets/events/welcomes/welcome2/images/",
  list: [
    {
      id: "01",
      displayName: "01",
      href: "/",
      src: "01.jpg",
    },
    {
      id: "02",
      displayName: "02",
      href: "/",
      src: "02.jpg",
    },
    {
      id: "03",
      displayName: "03",
      href: "/",
      src: "03.jpg",
    },
  ],
};

export const korbookSimpleEvent: IEventListItem = {
  id: "bannerTop",
  displayName: "bannerTop",
  imagePath: "assets/events/welcomes/korbook/",
  list: [
    {
      id: "01",
      displayName: "01",
      href: "/",
      src: "01.jpg",
    },
    {
      id: "02",
      displayName: "02",
      href: "/",
      src: "02.jpg",
    },
    {
      id: "03",
      displayName: "03",
      href: "/",
      src: "03.jpg",
    },
  ],
};

export const korbookHaveSliderEvent: IEventListItem = {
  id: "korbookHaveSliderEvent",
  displayName: "오늘의 책",
  imagePath: "",
  list: [
    {
      id: "9791190786850",
      src:
        "http://image.kyobobook.co.kr/images/book/large/850/l9791190786850.jpg",
      displayName: "언니, 나랑 결혼할래요?",
      subImageList: [
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97911969975401.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97911969975402.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97911969975403.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97911969975404.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97911969975405.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97911969975406.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97911969975407.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97911969975408.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97911969975409.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/979119699754010.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/979119699754011.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/979119699754012.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/979119699754013.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/979119699754014.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/979119699754015.jpg",
        },
      ],
      href:
        "http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&amp;ejkGb=KOR&amp;barcode=9791190786850",
    },
    {
      id: "9788950988845",
      src:
        "http://image.kyobobook.co.kr/images/book/large/845/l9788950988845.jpg",
      displayName: "쏘팟의 하나만 빼고 다 먹는 다이어트",
      subImageList: [
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9788950988845_01.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9788950988845_02.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9788950988845_03.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9788950988845_04.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9788950988845_05.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9788950988845_06.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9788950988845_07.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9788950988845_08.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9788950988845_09.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9788950988845_10.jpg",
        },
      ],
      href:
        "http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&amp;ejkGb=KOR&amp;barcode=9788950988845",
    },
    {
      id: "9791189809256",
      src:
        "http://image.kyobobook.co.kr/images/book/large/256/l9791189809256.jpg",
      displayName: "1950",
      subImageList: [
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791189809256_01.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791189809256_02.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791189809256_03.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791189809256_04.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791189809256_05.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791189809256_06.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791189809256_07.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791189809256_08.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791189809256_09.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791189809256_10.jpg",
        },
      ],
      href:
        "http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&amp;ejkGb=KOR&amp;barcode=9791189809256",
    },
    {
      id: "9791190422345",
      src:
        "http://image.kyobobook.co.kr/images/book/large/345/l9791190422345.jpg",
      displayName:
        "철학 VS 실천(강신주의 역사철학 정치철학 1)(양장본 HardCover)",
      subImageList: [
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791190422345_01.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791190422345_02.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791190422345_03.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791190422345_04.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791190422345_05.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791190422345_06.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791190422345_07.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791190422345_08.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791190422345_09.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/9791190422345_10.jpg",
        },
      ],
      href:
        "http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&amp;ejkGb=KOR&amp;barcode=9791190422345",
    },
    {
      id: "9788934995487",
      href:
        "http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&amp;ejkGb=KOR&amp;barcode=9788934995487",
      src:
        "http://image.kyobobook.co.kr/images/book/large/487/l9788934995487.jpg",
      displayName: "폭력의 위상학(양장본 HardCover)",
      subImageList: [
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97889349954871.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97889349954872.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97889349954873.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97889349954874.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97889349954875.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97889349954876.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97889349954877.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97889349954878.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/97889349954879.jpg",
        },
        {
          id: "02",
          displayName: "02",
          href: "/",
          src:
            "http://image.kyobobook.co.kr/images/cardnews/978893499548710.jpg",
        },
      ],
    },
  ],
};
