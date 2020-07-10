import {
  IEvent1,
  IEventPicks,
  IEventListItem,
  IEvent,
} from "Interfaces/IEventList";

/**
 * 화재의 신간
 */
export const event1: IEvent1 = {
  title: "화재의 신간",
  href: "/",
  order: ["korbook", "otherbook", "ebook", "webnovel"],
  list: [
    "l9791190382175",
    "l9791130629636",
    "l9791188331796",
    "l9788932920337",
    "l9791190786355",
    "l9791158740757",
    "l9791196831059",
    "l9788965963790",
    "l9788954671156",
    "l9791190052337",
    "l9791165341756",
    "l9791190299060",
    "l9780590353427",
    "l9780385496490",
    "l9780156012195",
    "l9780142410318",
    "l9780061233845",
    "l9780091816971",
    "l9780064400558",
    "l9780385512275",
    "l9780553277456",
    "l9780439064873",
    "l9781401308773",
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
  list: ["l9791197021602", "l9791190456098", "l9791165210144"],
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

export const mainTodayBookSliderEvent: IEvent = {
  id: "mainTodayBookSliderEvent",
  displayName: "오늘의 책",
  list: [
    {
      id: "0",
      displayName: "국내도서",
      list: [
        {
          id: "l9791196854454",
          src:
            "http://image.kyobobook.co.kr/images/book/large/454/l9791196854454.jpg",
          displayName:
            "A Supplementary Story : You Never Walk Alone(양장본 HardCover)",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911968544541.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911968544542.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911968544543.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911968544544.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911968544545.jpg",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911968544546.jpg",
            },
            {
              id: "6",
              displayName: "6",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911968544547.jpg",
            },
            {
              id: "7",
              displayName: "7",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911968544548.jpg",
            },
            {
              id: "8",
              displayName: "8",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911968544549.jpg",
            },
          ],
        },
        {
          id: "l9788936434427",
          src:
            "http://image.kyobobook.co.kr/images/book/large/427/l9788936434427.jpg",
          displayName: "유원(양장본 HardCover)",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788936434427_1.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788936434427_2.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788936434427_3.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788936434427_4.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788936434427_5.jpg",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788936434427_6.jpg",
            },
            {
              id: "6",
              displayName: "6",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788936434427_7.jpg",
            },
            {
              id: "7",
              displayName: "7",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788936434427_8.jpg",
            },
            {
              id: "8",
              displayName: "8",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788936434427_9.jpg",
            },
            {
              id: "9",
              displayName: "9",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788936434427_10.jpg",
            },
          ],
        },
        {
          id: "l9788901243665",
          src:
            "http://image.kyobobook.co.kr/images/book/large/665/l9788901243665.jpg",
          displayName: "김미경의 리부트",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788901243665_1.png",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788901243665_2.png",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788901243665_3.png",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788901243665_4.png",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788901243665_5.png",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788901243665_6.png",
            },
            {
              id: "6",
              displayName: "6",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788901243665_7.png",
            },
            {
              id: "7",
              displayName: "7",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788901243665_8.png",
            },
          ],
        },
      ],
    },
    {
      id: "1",
      displayName: "eBook",
      list: [
        {
          id: "l9791190807067",
          src:
            "http://image.kyobobook.co.kr/images/book/large/067/l9791190807067.jpg",
          displayName: "마흔의 마음학",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src: "http://image.kyobobook.co.kr/images/cardnews/40mi1.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src: "http://image.kyobobook.co.kr/images/cardnews/40mi2.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src: "http://image.kyobobook.co.kr/images/cardnews/40mi3.jpg",
            },
          ],
        },
        {
          id: "l9791159314834",
          src:
            "http://image.kyobobook.co.kr/images/book/large/834/l9791159314834.jpg",
          displayName: "때론 대충 살고 가끔은 완벽하게 살아",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src: "http://image.kyobobook.co.kr/images/cardnews/dcdc1.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src: "http://image.kyobobook.co.kr/images/cardnews/dcdc2.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src: "http://image.kyobobook.co.kr/images/cardnews/dcdc3.jpg",
            },
          ],
        },
        {
          id: "l4801190492752",
          src:
            "http://image.kyobobook.co.kr/images/book/large/752/l4801190492752.jpg",
          displayName: "웨스트코스트 블루스",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791190492799_1.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791190492799_2.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791190492799_3.jpg",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      displayName: "sam",
      list: [
        {
          id: "l9791170431015",
          src:
            "http://image.kyobobook.co.kr/images/book/large/015/l9791170431015.jpg",
          displayName: "내 집 없는 부자는 없다",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/4801170431016.jpg",
            },
          ],
        },
        {
          id: "l9791188754274",
          src:
            "http://image.kyobobook.co.kr/images/book/large/274/l9791188754274.jpg",
          displayName: "워런 버핏식 현금주의 투자 전략",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/4801188754275_1.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/4801188754275_2.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/4801188754275_3.jpg",
            },
          ],
        },
        {
          id: "l9791189993214",
          src:
            "http://image.kyobobook.co.kr/images/book/large/214/l9791189993214.jpg",
          displayName: "퇴사 말고 휴직",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/4801189993215_1.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/4801189993215_2.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/4801189993215_3.jpg",
            },
          ],
        },
        {
          id: "l9791164840908",
          src:
            "http://image.kyobobook.co.kr/images/book/large/908/l9791164840908.jpg",
          displayName: "한의사가 답하다",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/4801164840909_1.jpg",
            },
          ],
        },
        {
          id: "l4808984059375",
          src:
            "http://image.kyobobook.co.kr/images/book/large/375/l4808984059375.jpg",
          displayName: "김뽀마미 악마의 전신 운동",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/4808984059375_1.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/4808984059375_2.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/4808984059375_3.jpg",
            },
          ],
        },
      ],
    },
  ],
};

// 오늘의 책
export const korTodayBookSliderEvent: IEvent = {
  id: "korPageToday",
  displayName: "오늘의 책",
  list: [
    {
      id: "0",
      displayName: "",
      list: [
        {
          id: "l9791186757628",
          src:
            "http://image.kyobobook.co.kr/images/book/large/628/l9791186757628.jpg",
          displayName: "내 안의 차별주의자",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791186757628_01.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791186757628_02.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791186757628_03.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791186757628_04.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791186757628_05.jpg",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791186757628_06.jpg",
            },
            {
              id: "6",
              displayName: "6",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791186757628_07.jpg",
            },
          ],
        },
        {
          id: "l9791163641179",
          src:
            "http://image.kyobobook.co.kr/images/book/large/179/l9791163641179.jpg",
          displayName: "우아한 가난의 시대(양장본 HardCover)",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911636411791.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911636411792.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911636411793.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911636411794.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911636411795.jpg",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911636411796.jpg",
            },
            {
              id: "6",
              displayName: "6",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911636411797.jpg",
            },
            {
              id: "7",
              displayName: "7",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911636411798.jpg",
            },
            {
              id: "8",
              displayName: "8",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911636411799.jpg",
            },
            {
              id: "9",
              displayName: "9",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/979116364117910.jpg",
            },
          ],
        },
        {
          id: "l9791165790844",
          src:
            "http://image.kyobobook.co.kr/images/book/large/844/l9791165790844.jpg",
          displayName: "선을 지키는 사회, 선을 넘는 사회",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911657908441.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911657908442.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911657908443.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911657908444.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911657908445.jpg",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911657908446.jpg",
            },
            {
              id: "6",
              displayName: "6",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911657908447.jpg",
            },
            {
              id: "7",
              displayName: "7",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911657908448.jpg",
            },
            {
              id: "8",
              displayName: "8",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911657908449.jpg",
            },
            {
              id: "9",
              displayName: "9",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/979116579084410.jpg",
            },
            {
              id: "10",
              displayName: "10",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/979116579084411.jpg",
            },
            {
              id: "11",
              displayName: "11",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/979116579084412.jpg",
            },
            {
              id: "12",
              displayName: "12",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/979116579084413.jpg",
            },
            {
              id: "13",
              displayName: "13",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/979116579084414.jpg",
            },
            {
              id: "14",
              displayName: "14",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/979116579084415.jpg",
            },
          ],
        },
        {
          id: "l9788937491399",
          src:
            "http://image.kyobobook.co.kr/images/book/large/399/l9788937491399.jpg",
          displayName: "동생이 생기는 기분",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889374913991.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889374913992.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889374913993.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889374913994.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889374913995.jpg",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889374913996.jpg",
            },
            {
              id: "6",
              displayName: "6",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889374913997.jpg",
            },
            {
              id: "7",
              displayName: "7",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889374913998.jpg",
            },
            {
              id: "8",
              displayName: "8",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889374913999.jpg",
            },
            {
              id: "9",
              displayName: "9",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/978893749139910.jpg",
            },
            {
              id: "10",
              displayName: "10",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/978893749139911.jpg",
            },
          ],
        },
        {
          id: "l9788954672894",
          src:
            "http://image.kyobobook.co.kr/images/book/large/894/l9788954672894.jpg",
          displayName: "체스트넛 스트리트",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_01.png",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_02.png",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_03.png",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_04.png",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_05.png",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_06.png",
            },
            {
              id: "6",
              displayName: "6",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_07.png",
            },
            {
              id: "7",
              displayName: "7",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_08.png",
            },
            {
              id: "8",
              displayName: "8",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_09.png",
            },
            {
              id: "9",
              displayName: "9",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_010.png",
            },
            {
              id: "10",
              displayName: "10",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_011.png",
            },
            {
              id: "11",
              displayName: "11",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_012.png",
            },
            {
              id: "12",
              displayName: "12",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_013.png",
            },
            {
              id: "13",
              displayName: "13",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_014.png",
            },
            {
              id: "14",
              displayName: "14",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_015.png",
            },
            {
              id: "15",
              displayName: "15",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_016.png",
            },
            {
              id: "16",
              displayName: "16",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_017.png",
            },
            {
              id: "17",
              displayName: "17",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_018.png",
            },
            {
              id: "18",
              displayName: "18",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_019.png",
            },
            {
              id: "19",
              displayName: "19",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788954672894_020.png",
            },
          ],
        },
      ],
    },
  ],
};

export const otherTodayBookSliderEvent: IEvent = {
  id: "otherPageToday",
  displayName: "오늘의 책",
  list: [
    {
      id: "0",
      displayName: "영미도서",
      list: [
        {
          id: "l9780316462914",
          src:
            "http://image.kyobobook.co.kr/images/book/large/914/l9780316462914.jpg",
          displayName: "Talking to Strangers",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9780316462914_01.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9780316462914_02.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9780316462914_03.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9780316462914_04.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9780316462914_05.jpg",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9780316462914_06.jpg",
            },
            {
              id: "6",
              displayName: "6",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9780316462914_07.jpg",
            },
            {
              id: "7",
              displayName: "7",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9780316462914_08.jpg",
            },
            {
              id: "8",
              displayName: "8",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9780316462914_09.jpg",
            },
          ],
        },
        {
          id: "l9781534427037",
          src:
            "http://image.kyobobook.co.kr/images/book/large/037/l9781534427037.jpg",
          displayName: "The to All the Boys I've Loved Before SET - Collection",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9781534427037_1.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9781534427037_2.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9781534427037_3.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9781534427037_4.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9781534427037_5.jpg",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9781534427037_6.jpg",
            },
          ],
        },
        {
          id: "l9780593189740",
          src:
            "http://image.kyobobook.co.kr/images/book/large/740/l9780593189740.jpg",
          displayName: "The Wealthy Gardener",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9780593189740_01.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9780593189740_02.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9780593189740_03.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9780593189740_04.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9780593189740_05.jpg",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9780593189740_06.jpg",
            },
          ],
        },
      ],
    },
    {
      id: "1",
      displayName: "어린이영어",
      list: [
        {
          id: "l9788962229868",
          src:
            "http://image.kyobobook.co.kr/images/book/large/868/l9788962229868.jpg",
          displayName: "기적의 영어리딩 30. 1(CD1장포함)",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788962229868_1.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788962229868_2.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788962229868_3.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788962229868_4.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9788962229868_5.jpg",
            },
          ],
        },
        {
          id: "l9791188228287",
          src:
            "http://image.kyobobook.co.kr/images/book/large/287/l9791188228287.jpg",
          displayName: "Grammar Mentor Joy Early Start. 1(Longman)",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791188228287_01.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791188228287_02.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791188228287_03.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791188228287_04.jpg",
            },
          ],
        },
        {
          id: "l9791163400332",
          src:
            "http://image.kyobobook.co.kr/images/book/large/332/l9791163400332.jpg",
          displayName:
            "초등 필수 영단어 한 권으로 끝:교육부지정800단어+주제별영단어+어원영단어+800단어 따라쓰기",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911634003321.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911634003322.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911634003323.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911634003324.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911634003325.jpg",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911634003326.jpg",
            },
            {
              id: "6",
              displayName: "6",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911634003327.jpg",
            },
            {
              id: "7",
              displayName: "7",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911634003328.jpg",
            },
            {
              id: "8",
              displayName: "8",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911634003329.jpg",
            },
            {
              id: "9",
              displayName: "9",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/979116340033210.jpg",
            },
            {
              id: "10",
              displayName: "10",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/979116340033211.jpg",
            },
            {
              id: "11",
              displayName: "11",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/979116340033212.jpg",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      displayName: "일본도서",
      list: [
        {
          id: "l9784529059848",
          src:
            "http://image.kyobobook.co.kr/images/book/large/848/l9784529059848.jpg",
          displayName: "レ-ス編みのモチ-フ＆ドイリ-100",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9784529059848_1.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9784529059848_2.jpg",
            },
          ],
        },
        {
          id: "l9784046046987",
          src:
            "http://image.kyobobook.co.kr/images/book/large/987/l9784046046987.jpg",
          displayName: "新海誠監督作品「天氣の子」美術畵集",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9784046046987_1.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9784046046987_2.jpg",
            },
          ],
        },
        {
          id: "l9784838731077",
          src:
            "http://image.kyobobook.co.kr/images/book/large/077/l9784838731077.jpg",
          displayName: "村上T 僕の愛したTシャツたち",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9784838731077_1.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9784838731077_2.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9784838731077_3.jpg",
            },
          ],
        },
      ],
    },
  ],
};

export const korKookTopSliderEvent: IEvent = {
  id: "korPageTopSlider",
  displayName: "이벤트",
  list: [
    {
      id: "0",
      displayName: "어린이/학습",
      list: [
        {
          id: "0",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/banner/200617/bnH768x290.jpg",
          displayName: "초중고 여름 특별 이벤트",
        },
        {
          id: "1",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/book/200612_kidsset/bnL_01.jpg",
          displayName: "유아어린이 세트 1위는?",
        },
        {
          id: "2",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/book/200615_kidsplay100/bnL_01.jpg",
          displayName: "놀이북 TOP 100",
        },
        {
          id: "3",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/book/200609_rabbit/bnF_01.jpg",
          displayName: "슈퍼토끼 X 슈퍼충전",
        },
      ],
    },
    {
      id: "1",
      displayName: "문학/실용",
      list: [
        {
          id: "0",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/banner/200612/bnE_01.jpg",
          displayName: "교보문고x그린 블리스",
        },
        {
          id: "1",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/banner/200617/bnC_01.jpg",
          displayName: "스타작가 100 대 1",
        },
        {
          id: "2",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200629_normal/banner/bnA_01.jpg",
          displayName: "보통의 산문전",
        },
        {
          id: "3",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/book/200617_signature/bnG_01.jpg",
          displayName: "교보문고 시그니처향",
        },
      ],
    },
    {
      id: "2",
      displayName: "인문/교양",
      list: [
        {
          id: "0",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/book/200611_event/bnG_01.jpg",
          displayName: "인문교양 읽는 맛",
        },
        {
          id: "1",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200611_theme/bnF_01.jpg",
          displayName: "뇌과학, 통찰과 질문",
        },
        {
          id: "2",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/banner/200615/bnN_01.jpg",
          displayName: "실크로드X데스크매트",
        },
        {
          id: "3",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200619_kkachi/bnG_01.jpg",
          displayName: "까치출판사X행성북클립",
        },
      ],
    },
    {
      id: "3",
      displayName: "비즈/수험",
      list: [
        {
          id: "0",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/book/200617_influential/bnV_01.jpg",
          displayName: "인플루엔셜 단독 브랜드전",
        },
        {
          id: "1",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/book/200529_media/bnG_01.jpg",
          displayName: "한빛미디어 단독 브랜드전",
        },
        {
          id: "2",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/book/200622_seolzzi/bnV_01.jpg",
          displayName: "나의 실전은 7월이다",
        },
        {
          id: "3",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/banner/200421/bnL_01.jpg",
          displayName: "교보단독 선택증정",
        },
      ],
    },
  ],
};

export const otherBookTopSliderEvent: IEvent = {
  id: "otherPageTopSlider",
  displayName: "이벤트",
  list: [
    {
      id: "0",
      displayName: "핫이슈",
      list: [
        {
          id: "0",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200625_john/bnG_01.jpg",
          displayName: "존볼튼 회고록",
        },
        {
          id: "1",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200623_3030eng/bnV_01.jpg",
          displayName: "3030 잉글리시 무료수강권",
        },
        {
          id: "2",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200604_chai/bnV_01.jpg",
          displayName: "차이페이",
        },
        {
          id: "3",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200514_eng/bnV_01.jpg",
          displayName: "직수입원서 꽃다운 할인",
        },
      ],
    },
    {
      id: "1",
      displayName: "영미도서",
      list: [
        {
          id: "0",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200617_flyhigh/bnF_01.jpg",
          displayName: "원서 외국어/수험서 할인",
        },
        {
          id: "1",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/banner/200608/bnE_05.jpg",
          displayName: "인간다움에 대하여",
        },
        {
          id: "2",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200612_racism/banner/bnA_01.jpg",
          displayName: "No Racism",
        },
        {
          id: "3",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200511_yale/bnG_01.jpg",
          displayName: "Kyobo X Yale",
        },
      ],
    },
    {
      id: "2",
      displayName: "어린이영어",
      list: [
        {
          id: "0",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200701_children/bnF_01.jpg",
          displayName: "원세 세트 할인",
        },
        {
          id: "1",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/banner/showcase/200617/bnMH_13.jpg",
          displayName: "노부영 5대 작가",
        },
        {
          id: "2",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200604_efuture/bnG_01.jpg",
          displayName: "대한민국 영어공식",
        },
        {
          id: "3",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/banner/showcase/200601/bnYY_14.jpg",
          displayName: "옥스포드 온라인 학습의 세계",
        },
      ],
    },
    {
      id: "3",
      displayName: "일본도서",
      list: [
        {
          id: "0",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200406_japan/bnG_01.jpg",
          displayName: "일본도서 실용서 기획",
        },
        {
          id: "1",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2017/banner/170703/bnV_015.jpg",
          displayName: "일본도서 예약도서 12% 할인",
        },
        {
          id: "2",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/banner/200608/bnV_01.jpg",
          displayName: "일본 잡지 신간",
        },
      ],
    },
  ],
};

export const korBookBestSeller: IEvent = {
  id: "korPageBestseller",
  displayName: "베스트셀러",
  list: [
    {
      id: "0",
      displayName: "문학/인문",
      list: [
        {
          id: "l9788952241979",
          src:
            "http://image.kyobobook.co.kr/images/book/large/979/l9788952241979.jpg",
          displayName: "다 괜찮아요, 천국이 말했다",
          summaryText: "",
          subCategoryText: "소설",
          price: "12420",
        },
        {
          id: "l9791190786355",
          src:
            "http://image.kyobobook.co.kr/images/book/large/355/l9791190786355.jpg",
          displayName: "보통의 언어들(나를 숨 쉬게 하는)(양장본 HardCover)",
          summaryText: "",
          subCategoryText: "시/에세이",
          price: "13050",
        },
        {
          id: "l9791190030519",
          src:
            "http://image.kyobobook.co.kr/images/book/large/519/l9791190030519.jpg",
          displayName: "사람에 대한 예의",
          summaryText: "",
          subCategoryText: "인문",
          price: "13500",
        },
        {
          id: "l9791160804317",
          src:
            "http://image.kyobobook.co.kr/images/book/large/317/l9791160804317.jpg",
          displayName: "박시백의 조선왕조실록 세트(특별 한정판)(전20권)",
          summaryText: "",
          subCategoryText: "역사/문화",
          price: "99000",
        },
      ],
    },
    {
      id: "1",
      displayName: "경제/교양",
      list: [
        {
          id: "l9791188331796",
          src:
            "http://image.kyobobook.co.kr/images/book/large/796/l9791188331796.jpg",
          displayName: "돈의 속성",
          summaryText: "",
          subCategoryText: "경제/경영",
          price: "15120",
        },
        {
          id: "l9788901243665",
          src:
            "http://image.kyobobook.co.kr/images/book/large/665/l9788901243665.jpg",
          displayName: "김미경의 리부트",
          summaryText: "",
          subCategoryText: "자기계발",
          price: "14400",
        },
        {
          id: "l9788954671064",
          src:
            "http://image.kyobobook.co.kr/images/book/large/064/l9788954671064.jpg",
          displayName: "자본과 이데올로기(양장본 HardCover)",
          summaryText: "",
          subCategoryText: "정치/사회",
          price: "34200",
        },
        {
          id: "l9788983711892",
          src:
            "http://image.kyobobook.co.kr/images/book/large/892/l9788983711892.jpg",
          displayName: "코스모스(보급판)",
          summaryText: "",
          subCategoryText: "과학",
          price: "16650",
        },
      ],
    },
    {
      id: "2",
      displayName: "유아동/실용",
      list: [
        {
          id: "l9791165382674",
          src:
            "http://image.kyobobook.co.kr/images/book/large/674/l9791165382674.jpg",
          displayName: "설민석의 한국사 대모험. 14",
          summaryText: "",
          subCategoryText: "어린이(초등)",
          price: "10800",
        },
        {
          id: "l9791190183208",
          src:
            "http://image.kyobobook.co.kr/images/book/large/208/l9791190183208.jpg",
          displayName: "요리조리 열어 보는 직업(Usborne)(플랩북)",
          summaryText: "",
          subCategoryText: "유아(0~7세)",
          price: "11700",
        },
        {
          id: "l9791135482991",
          src:
            "http://image.kyobobook.co.kr/images/book/large/991/l9791135482991.jpg",
          displayName: "영양의 비밀",
          summaryText: "",
          subCategoryText: "건강",
          price: "23220",
        },
        {
          id: "l9791165211899",
          src:
            "http://image.kyobobook.co.kr/images/book/large/899/l9791165211899.jpg",
          displayName: "초등 엄마 말의 힘",
          summaryText: "",
          subCategoryText: "가정/육아",
          price: "13500",
        },
        {
          id: "l9791189159634",
          src:
            "http://image.kyobobook.co.kr/images/book/large/634/l9791189159634.jpg",
          displayName: "백반기행(식객 허영만의)",
          summaryText: "",
          subCategoryText: "여행",
          price: "15300",
        },
        {
          id: "l9791136719607",
          src:
            "http://image.kyobobook.co.kr/images/book/large/607/l9791136719607.jpg",
          displayName: "파이브 스타 스토리. 15(개정판)(아이큐 점프 코믹스)",
          summaryText: "",
          subCategoryText: "만화",
          price: "9000",
        },
        {
          id: "l9791185473604",
          src:
            "http://image.kyobobook.co.kr/images/book/large/604/l9791185473604.jpg",
          displayName: "오! 이렇게 다양한 오트밀 요리",
          summaryText: "",
          subCategoryText: "요리",
          price: "12420",
        },
        {
          id: "l9791189096144",
          src:
            "http://image.kyobobook.co.kr/images/book/large/144/l9791189096144.jpg",
          displayName: "어반라이크(Urbanlike)(No.40)",
          summaryText: "",
          subCategoryText: "잡지",
          price: "24300",
        },
      ],
    },
    {
      id: "3",
      displayName: "어학/학습",
      list: [
        {
          id: "l9788960498228",
          src:
            "http://image.kyobobook.co.kr/images/book/large/228/l9788960498228.jpg",
          displayName: "영어회화 이디엄(미국적인 너무나 미국적인)",
          summaryText: "",
          subCategoryText: "외국어",
          price: "13500",
        },
        {
          id: "l9788954753043",
          src:
            "http://image.kyobobook.co.kr/images/book/large/043/l9788954753043.jpg",
          displayName: "고등 영어영역 영어(2020)(2021 수능대비)(EBS 수능완성)",
          summaryText: "",
          subCategoryText: "중/고등참고서",
          price: "8820",
        },
        {
          id: "l9791162242964",
          src:
            "http://image.kyobobook.co.kr/images/book/large/964/l9791162242964.jpg",
          displayName: "핸즈온 머신러닝(2판)",
          summaryText: "",
          subCategoryText: "컴퓨터/IT",
          price: "49500",
        },
        {
          id: "l9791188095315",
          src:
            "http://image.kyobobook.co.kr/images/book/large/315/l9791188095315.jpg",
          displayName: "PEET Organic Chemistry 솔메 실전문풀 Part. 2(4판)",
          summaryText: "",
          subCategoryText: "기술/공학",
          price: "18000",
        },
      ],
    },
  ],
};

export const otherBookBestSeller: IEvent = {
  id: "otherPageBestseller",
  displayName: "베스트셀러",
  list: [
    {
      id: "0",
      displayName: "영미도서",
      list: [
        {
          id: "l9781982148034",
          src:
            "http://image.kyobobook.co.kr/images/book/large/034/l9781982148034.jpg",
          displayName: "The Room Where It Happened",
          summaryText: "",
          subCategoryText: "",
          price: "38120",
        },
        {
          id: "l9781984854858",
          src:
            "http://image.kyobobook.co.kr/images/book/large/858/l9781984854858.jpg",
          displayName: "Educated: A Memoir",
          summaryText: "",
          subCategoryText: "",
          price: "9190",
        },
        {
          id: "l9780553509977",
          src:
            "http://image.kyobobook.co.kr/images/book/large/977/l9780553509977.jpg",
          displayName: "Wonder",
          summaryText: "",
          subCategoryText: "",
          price: "6440",
        },
        {
          id: "l9781108681315",
          src:
            "http://image.kyobobook.co.kr/images/book/large/315/l9781108681315.jpg",
          displayName:
            "Cambridge IELTS 14 Academic Student's Book with Answers with Audio",
          summaryText: "",
          subCategoryText: "",
          price: "27000",
        },
        {
          id: "l9781316646731",
          src:
            "http://image.kyobobook.co.kr/images/book/large/731/l9781316646731.jpg",
          displayName: "Basic Grammar in Use with Answers and eBook",
          summaryText: "",
          subCategoryText: "",
          price: "25500",
        },
        {
          id: "l9780571334650",
          src:
            "http://image.kyobobook.co.kr/images/book/large/650/l9780571334650.jpg",
          displayName: "Normal People",
          summaryText: "",
          subCategoryText: "",
          price: "10780",
        },
        {
          id: "l9781847941831",
          src:
            "http://image.kyobobook.co.kr/images/book/large/831/l9781847941831.jpg",
          displayName: "Atomic Habits",
          summaryText: "",
          subCategoryText: "",
          price: "15000",
        },
        {
          id: "l9780446310789",
          src:
            "http://image.kyobobook.co.kr/images/book/large/789/l9780446310789.jpg",
          displayName: "To Kill a Mockingbird",
          summaryText: "",
          subCategoryText: "",
          price: "5500",
        },
        {
          id: "l9780440414803",
          src:
            "http://image.kyobobook.co.kr/images/book/large/803/l9780440414803.jpg",
          displayName: "Holes (1999 Newbery Medal Winner)",
          summaryText: "",
          subCategoryText: "",
          price: "4950",
        },
        {
          id: "l9780521269599",
          src:
            "http://image.kyobobook.co.kr/images/book/large/599/l9780521269599.jpg",
          displayName: "Basic Grammar In Use With Answers (한국어판)",
          summaryText: "",
          subCategoryText: "",
          price: "17850",
        },
        {
          id: "l9780590353427",
          src:
            "http://image.kyobobook.co.kr/images/book/large/427/l9780590353427.jpg",
          displayName: "Harry Potter and the Sorcerer's Stone",
          summaryText: "",
          subCategoryText: "",
          price: "7210",
        },
        {
          id: "l9781250169440",
          src:
            "http://image.kyobobook.co.kr/images/book/large/440/l9781250169440.jpg",
          displayName: "Call Me by Your Name (Movie Tie-in)",
          summaryText: "",
          subCategoryText: "",
          price: "5900",
        },
        {
          id: "l9781501121470",
          src:
            "http://image.kyobobook.co.kr/images/book/large/470/l9781501121470.jpg",
          displayName: "Prisoners of Geography",
          summaryText: "",
          subCategoryText: "",
          price: "13300",
        },
        {
          id: "l9781591451884",
          src:
            "http://image.kyobobook.co.kr/images/book/large/884/l9781591451884.jpg",
          displayName: "Jesus Calling",
          summaryText: "",
          subCategoryText: "",
          price: "13880",
        },
        {
          id: "l9780156012195",
          src:
            "http://image.kyobobook.co.kr/images/book/large/195/l9780156012195.jpg",
          displayName: "The Little Prince",
          summaryText: "",
          subCategoryText: "",
          price: "7250",
        },
      ],
    },
    {
      id: "1",
      displayName: "어린이영어",
      list: [
        {
          id: "l9791162723210",
          src:
            "http://image.kyobobook.co.kr/images/book/large/210/l9791162723210.jpg",
          displayName: "초등영문법 3800제. 1",
          summaryText: "",
          subCategoryText: "",
          price: "8910",
        },
        {
          id: "l9788956354514",
          src:
            "http://image.kyobobook.co.kr/images/book/large/514/l9788956354514.jpg",
          displayName:
            "Smart Phonics 2 : Student Book (New Edition)(CD1장포함)",
          summaryText: "",
          subCategoryText: "",
          price: "11700",
        },
        {
          id: "l9788956354521",
          src:
            "http://image.kyobobook.co.kr/images/book/large/521/l9788956354521.jpg",
          displayName:
            "Smart Phonics 3 : Student Book (New Edition)(CD1장포함)(Paperback)",
          summaryText: "",
          subCategoryText: "",
          price: "11700",
        },
        {
          id: "l9788956354507",
          src:
            "http://image.kyobobook.co.kr/images/book/large/507/l9788956354507.jpg",
          displayName:
            "Smart Phonics 1 : Student Book (New Edition)(CD1장포함)(Paperback)",
          summaryText: "",
          subCategoryText: "",
          price: "11700",
        },
        {
          id: "l9788964358177",
          src:
            "http://image.kyobobook.co.kr/images/book/large/177/l9788964358177.jpg",
          displayName: "Bricks Reading 30. 1(CD1장포함)",
          summaryText: "",
          subCategoryText: "",
          price: "13500",
        },
        {
          id: "l9791164062300",
          src:
            "http://image.kyobobook.co.kr/images/book/large/300/l9791164062300.jpg",
          displayName: "엄마표 세마디 생활영어",
          summaryText: "",
          subCategoryText: "",
          price: "11700",
        },
        {
          id: "l9788956354552",
          src:
            "http://image.kyobobook.co.kr/images/book/large/552/l9788956354552.jpg",
          displayName: "Smart Phonics 1 : Workbook (New Edition)(Paperback)",
          summaryText: "",
          subCategoryText: "",
          price: "5400",
        },
        {
          id: "l9788964356975",
          src:
            "http://image.kyobobook.co.kr/images/book/large/975/l9788964356975.jpg",
          displayName: "Bricks Reading 150. 1",
          summaryText: "",
          subCategoryText: "",
          price: "13500",
        },
        {
          id: "l9791162723272",
          src:
            "http://image.kyobobook.co.kr/images/book/large/272/l9791162723272.jpg",
          displayName: "초등영문법 3800제. 4",
          summaryText: "",
          subCategoryText: "",
          price: "8910",
        },
        {
          id: "l9788956354576",
          src:
            "http://image.kyobobook.co.kr/images/book/large/576/l9788956354576.jpg",
          displayName: "SMART PHONICS. 3 WORKBOOK (NEW EDITION)",
          summaryText: "",
          subCategoryText: "",
          price: "5400",
        },
        {
          id: "l9788962228922",
          src:
            "http://image.kyobobook.co.kr/images/book/large/922/l9788962228922.jpg",
          displayName: "기적의 맨처음 영단어. 1(CD1장포함)",
          summaryText: "",
          subCategoryText: "",
          price: "10800",
        },
        {
          id: "l9788964358221",
          src:
            "http://image.kyobobook.co.kr/images/book/large/221/l9788964358221.jpg",
          displayName: "Bricks Reading 50. 3(CD1장포함)",
          summaryText: "",
          subCategoryText: "",
          price: "13500",
        },
        {
          id: "l9788974577575",
          src:
            "http://image.kyobobook.co.kr/images/book/large/575/l9788974577575.jpg",
          displayName: "초등 영문법, 문법이 쓰기다 기본. 1",
          summaryText: "",
          subCategoryText: "",
          price: "10800",
        },
        {
          id: "l9791157529551",
          src:
            "http://image.kyobobook.co.kr/images/book/large/551/l9791157529551.jpg",
          displayName: "초등 만화 영문법(영문과 교수 아빠가 알려주는)",
          summaryText: "",
          subCategoryText: "",
          price: "10080",
        },
        {
          id: "l9791162726136",
          src:
            "http://image.kyobobook.co.kr/images/book/large/136/l9791162726136.jpg",
          displayName: "초등영문법 777. 0",
          summaryText: "",
          subCategoryText: "",
          price: "6930",
        },
      ],
    },
    {
      id: "2",
      displayName: "일본도서",
      list: [
        {
          id: "l4910277510705",
          src:
            "http://image.kyobobook.co.kr/images/book/large/705/l4910277510705.jpg",
          displayName: "브루터스 BRUTUS 2020.07.01",
          summaryText: "",
          subCategoryText: "",
          price: "9410",
        },
        {
          id: "l9784418174034",
          src:
            "http://image.kyobobook.co.kr/images/book/large/034/l9784418174034.jpg",
          displayName: "エコアンダリヤで編む定番の帽子とおしゃれバッグ",
          summaryText: "",
          subCategoryText: "",
          price: "12380",
        },
        {
          id: "Noimage_l.gif",
          src:
            "http://image.kyobobook.co.kr/newimages/apps/b2c/product/Noimage_l.gif",
          displayName: "올요미모노 オ-ル讀物 2020.07",
          summaryText: "",
          subCategoryText: "",
          price: "13440",
        },
        {
          id: "Noimage_l.gif",
          src:
            "http://image.kyobobook.co.kr/newimages/apps/b2c/product/Noimage_l.gif",
          displayName: "ガンガンJOKER 2020.07",
          summaryText: "",
          subCategoryText: "",
          price: "7930",
        },
        {
          id: "l4910053270809",
          src:
            "http://image.kyobobook.co.kr/images/book/large/809/l4910053270809.jpg",
          displayName: "스프링 SPRING 2020.08",
          summaryText: "",
          subCategoryText: "",
          price: "14520",
        },
        {
          id: "l4910064610700",
          src:
            "http://image.kyobobook.co.kr/images/book/large/700/l4910064610700.jpg",
          displayName: "오늘의요리NHK きょうの料理NHKテキスト 2020.07",
          summaryText: "",
          subCategoryText: "",
          price: "7470",
        },
        {
          id: "l4910088110705",
          src:
            "http://image.kyobobook.co.kr/images/book/large/705/l4910088110705.jpg",
          displayName: "산과계곡 山と溪谷 2020.07",
          summaryText: "",
          subCategoryText: "",
          price: "14790",
        },
        {
          id: "l4910094670705",
          src:
            "http://image.kyobobook.co.kr/images/book/large/705/l4910094670705.jpg",
          displayName: "스테끼니핸드메이드 すてきにハンドメイド 2020.07",
          summaryText: "",
          subCategoryText: "",
          price: "8450",
        },
        {
          id: "l4910094770801",
          src:
            "http://image.kyobobook.co.kr/images/book/large/801/l4910094770801.jpg",
          displayName: "요리통신 料理通信 2020.08",
          summaryText: "",
          subCategoryText: "",
          price: "14660",
        },
        {
          id: "Noimage_l.gif",
          src:
            "http://image.kyobobook.co.kr/newimages/apps/b2c/product/Noimage_l.gif",
          displayName: "한류피아 韓流ぴあ 2020.07",
          summaryText: "",
          subCategoryText: "",
          price: "16140",
        },
        {
          id: "l4910155450703",
          src:
            "http://image.kyobobook.co.kr/images/book/large/703/l4910155450703.jpg",
          displayName: "세컨드 2ND 2020.07",
          summaryText: "",
          subCategoryText: "",
          price: "10490",
        },
        {
          id: "l4910155450802",
          src:
            "http://image.kyobobook.co.kr/images/book/large/802/l4910155450802.jpg",
          displayName: "세컨드 2ND 2020.08",
          summaryText: "",
          subCategoryText: "",
          price: "10490",
        },
        {
          id: "l4910163850809",
          src:
            "http://image.kyobobook.co.kr/images/book/large/809/l4910163850809.jpg",
          displayName: "천연생활 天然生活 2020.08",
          summaryText: "",
          subCategoryText: "",
          price: "11830",
        },
        {
          id: "l4910177010800",
          src:
            "http://image.kyobobook.co.kr/images/book/large/800/l4910177010800.jpg",
          displayName: "히요꼬클럽 ひよこクラブ 2020.08",
          summaryText: "",
          subCategoryText: "",
          price: "14260",
        },
        {
          id: "l4910204840608",
          src:
            "http://image.kyobobook.co.kr/images/book/large/608/l4910204840608.jpg",
          displayName: "앙앙 ANAN 2020.06.24",
          summaryText: "",
          subCategoryText: "",
          price: "8740",
        },
      ],
    },
    {
      id: "3",
      displayName: "해외주문",
      list: [
        {
          id: "l9781982148034",
          src:
            "http://image.kyobobook.co.kr/images/book/large/034/l9781982148034.jpg",
          displayName: "The Room Where It Happened",
          summaryText: "",
          subCategoryText: "",
          price: "38120",
        },
        {
          id: "l9781501175510",
          src:
            "http://image.kyobobook.co.kr/images/book/large/510/l9781501175510.jpg",
          displayName: "Fear",
          summaryText: "",
          subCategoryText: "",
          price: "34740",
        },
        {
          id: "l9780763625481",
          src:
            "http://image.kyobobook.co.kr/images/book/large/481/l9780763625481.jpg",
          displayName: "Different Like Coco",
          summaryText: "",
          subCategoryText: "",
          price: "19680",
        },
        {
          id: "l9780062913685",
          src:
            "http://image.kyobobook.co.kr/images/book/large/685/l9780062913685.jpg",
          displayName: "Disunited Nations",
          summaryText: "",
          subCategoryText: "",
          price: "34740",
        },
        {
          id: "l9781788480697",
          src:
            "http://image.kyobobook.co.kr/images/book/large/697/l9781788480697.jpg",
          displayName: "Beyond the Division",
          summaryText: "",
          subCategoryText: "",
          price: "8860",
        },
        {
          id: "l9780374201234",
          src:
            "http://image.kyobobook.co.kr/images/book/large/234/l9780374201234.jpg",
          displayName: "The Mamba Mentality",
          summaryText: "",
          subCategoryText: "",
          price: "40530",
        },
        {
          id: "l9781534429925",
          src:
            "http://image.kyobobook.co.kr/images/book/large/925/l9781534429925.jpg",
          displayName: "Tiny Feet Between the Mountains",
          summaryText: "",
          subCategoryText: "",
          price: "20830",
        },
        {
          id: "l9780441627400",
          src:
            "http://image.kyobobook.co.kr/images/book/large/400/l9780441627400.jpg",
          displayName: "The Once and Future King",
          summaryText: "",
          subCategoryText: "",
          price: "11570",
        },
        {
          id: "l9781416912057",
          src:
            "http://image.kyobobook.co.kr/images/book/large/057/l9781416912057.jpg",
          displayName: "Unwind",
          summaryText: "",
          subCategoryText: "",
          price: "15040",
        },
        {
          id: "l9781465489562",
          src:
            "http://image.kyobobook.co.kr/images/book/large/562/l9781465489562.jpg",
          displayName: "Lego Star Wars Character Encyclopedia New Edition",
          summaryText: "",
          subCategoryText: "",
          price: "21980",
        },
        {
          id: "l9783126762502",
          src:
            "http://image.kyobobook.co.kr/images/book/large/502/l9783126762502.jpg",
          displayName: "Daf Leicht - Livre + Cahier A1.1 + Dvd-Rom",
          summaryText: "",
          subCategoryText: "",
          price: "30770",
        },
        {
          id: "l9780064407311",
          src:
            "http://image.kyobobook.co.kr/images/book/large/311/l9780064407311.jpg",
          displayName: "Monster",
          summaryText: "",
          subCategoryText: "",
          price: "12730",
        },
        {
          id: "l9780736440301",
          src:
            "http://image.kyobobook.co.kr/images/book/large/301/l9780736440301.jpg",
          displayName: "Frozen 2",
          summaryText: "",
          subCategoryText: "",
          price: "17360",
        },
        {
          id: "l9781476795935",
          src:
            "http://image.kyobobook.co.kr/images/book/large/935/l9781476795935.jpg",
          displayName: "Leadership",
          summaryText: "",
          subCategoryText: "",
          price: "20850",
        },
        {
          id: "l9780920668375",
          src:
            "http://image.kyobobook.co.kr/images/book/large/375/l9780920668375.jpg",
          displayName: "Love You Forever",
          summaryText: "",
          subCategoryText: "",
          price: "6890",
        },
      ],
    },
  ],
};
export const korBookToday: IEvent = {
  id: "korPageToday",
  displayName: "오늘의 책",
  list: [
    {
      id: "0",
      displayName: "문학/인문",
      list: [
        {
          id: "l9788998791988",
          src:
            "http://image.kyobobook.co.kr/images/book/large/988/l9788998791988.jpg",
          displayName: "사일런트 브레스: 당신은 어떤 죽음을 준비하고 있습니까?",
          summaryText: "어떤 죽음을 준비하고 있습니까?",
          subCategoryText: "소설",
          price: "13320",
        },
        {
          id: "l9788946473324",
          src:
            "http://image.kyobobook.co.kr/images/book/large/324/l9788946473324.jpg",
          displayName: "친구에게(양장본 HardCover)",
          summaryText: "다정한 글과 따뜻한 그림",
          subCategoryText: "시/에세이",
          price: "10800",
        },
        {
          id: "l9788961963732",
          src:
            "http://image.kyobobook.co.kr/images/book/large/732/l9788961963732.jpg",
          displayName: "집을 짓다",
          summaryText: "중국인 최초 프리츠커 수상자",
          subCategoryText: "인문",
          price: "19800",
        },
        {
          id: "l9791162541531",
          src:
            "http://image.kyobobook.co.kr/images/book/large/531/l9791162541531.jpg",
          displayName: "전쟁의 미래(양장본 HardCover)",
          summaryText: "전쟁을 복기하고 예측하다",
          subCategoryText: "역사/문화",
          price: "25200",
        },
      ],
    },
    {
      id: "1",
      displayName: "경제/교양",
      list: [
        {
          id: "l9791187150725",
          src:
            "http://image.kyobobook.co.kr/images/book/large/725/l9791187150725.jpg",
          displayName: "달러의 부활(양장본 HardCover)",
          summaryText: "폴 볼커의 역작 국내 최초 발간",
          subCategoryText: "경제/경영",
          price: "29700",
        },
        {
          id: "l9791162541517",
          src:
            "http://image.kyobobook.co.kr/images/book/large/517/l9791162541517.jpg",
          displayName: "나는 오늘도 나를 믿는다",
          summaryText: "정샘물의 셀프 인생 메이크업",
          subCategoryText: "자기계발",
          price: "13500",
        },
        {
          id: "l9791189612702",
          src:
            "http://image.kyobobook.co.kr/images/book/large/702/l9791189612702.jpg",
          displayName: "아이패드 감성 드로잉",
          summaryText: "직접 그리고 굿즈 만들기!",
          subCategoryText: "예술/대중문화",
          price: "17820",
        },
        {
          id: "l9788964373545",
          src:
            "http://image.kyobobook.co.kr/images/book/large/545/l9788964373545.jpg",
          displayName: "지배, 그리고 저항의 예술",
          summaryText: "피지배계급의 생생한 하부정치",
          subCategoryText: "정치/사회",
          price: "22500",
        },
      ],
    },
    {
      id: "2",
      displayName: "유아동/실용",
      list: [
        {
          id: "l9791188867523",
          src:
            "http://image.kyobobook.co.kr/images/book/large/523/l9791188867523.jpg",
          displayName: "색이 변하는 아이가 있었다(양장본 HardCover)",
          summaryText: "사랑하는 것들에 물들다",
          subCategoryText: "유아(0~7세)",
          price: "15300",
        },
        {
          id: "l9791164062270",
          src:
            "http://image.kyobobook.co.kr/images/book/large/270/l9791164062270.jpg",
          displayName: "이상한 과자 가게 전천당. 7",
          summaryText: "교보단독 전천당 동전지갑",
          subCategoryText: "어린이(초등)",
          price: "10800",
        },
        {
          id: "l9788950988845",
          src:
            "http://image.kyobobook.co.kr/images/book/large/845/l9788950988845.jpg",
          displayName: "쏘팟의 하나만 빼고 다 먹는 다이어트",
          summaryText: "맘껏 먹으면서 평생 날씬하게",
          subCategoryText: "건강",
          price: "14400",
        },
        {
          id: "l9791197030116",
          src:
            "http://image.kyobobook.co.kr/images/book/large/116/l9791197030116.jpg",
          displayName: "마미오븐의 초간단 집빵 레시피",
          summaryText: "무작정 따라해도 성공하는 레시피!",
          subCategoryText: "요리",
          price: "14400",
        },
      ],
    },
    {
      id: "3",
      displayName: "어학/학습",
      list: [
        {
          id: "l9791185831978",
          src:
            "http://image.kyobobook.co.kr/images/book/large/978/l9791185831978.jpg",
          displayName: "Tripful(트립풀) 제주(Tripful 시리즈 18)",
          summaryText: "제주답게 여행할 수 있도록",
          subCategoryText: "여행",
          price: "14400",
        },
        {
          id: "l9791190563666",
          src:
            "http://image.kyobobook.co.kr/images/book/large/666/l9791190563666.jpg",
          displayName: "고등 영어 B 기출문제집(비상 홍민표)(2020)(100발 100중)",
          summaryText: "내신 만점 필수 교재!",
          subCategoryText: "중/고등참고서",
          price: "10800",
        },
        {
          id: "l9788978496216",
          src:
            "http://image.kyobobook.co.kr/images/book/large/216/l9788978496216.jpg",
          displayName: "세가새턴 퍼펙트 카탈로그",
          summaryText: "세가새턴의 모든 것!",
          subCategoryText: "취미/실용/스포츠",
          price: "18000",
        },
        {
          id: "l9791162243183",
          src:
            "http://image.kyobobook.co.kr/images/book/large/183/l9791162243183.jpg",
          displayName: "클라우드 네이티브",
          summaryText: "최신 개념과 모범 사례를 배워보자",
          subCategoryText: "컴퓨터/IT",
          price: "19800",
        },
      ],
    },
  ],
};
export const korPageMapEvent: IEvent = {
  id: "pageBoxMap",
  displayName: "이벤트",
  list: [
    {
      id: "0",
      displayName: "",
      list: [
        {
          id: "bnYY_05",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/banner/showcase/200701/bnYY_05.jpg",
          displayName: "죽음의 한 연구",
        },
        {
          id: "bnN_04",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/banner/200618/bnN_04.jpg",
          displayName: "에세이 1위, 스프링노트",
        },
        {
          id: "bnD_04",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2019/book/190405_recover/bnD_04.jpg",
          displayName: "나도 아직 나를 모른다",
        },
        {
          id: "bnYY_04",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/banner/showcase/200512/bnYY_04.jpg",
          displayName: "부자의 언어 단독이벤트",
        },
        {
          id: "bnE_04",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/banner/200619/bnE_04.jpg",
          displayName: "김미경의 리부트",
        },
        {
          id: "bnF_03",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200707_18th/bnF_03.jpg",
          displayName: "18세기 시리즈",
        },
        {
          id: "bnG_02",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200617_signature/bnG_02.jpg",
          displayName: "시그니처향",
        },
        {
          id: "bnG_04",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200526_trot/bnG_04.jpg",
          displayName: "미스터트롯",
        },
        {
          id: "bnYY_10",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/banner/showcase/200518/bnYY_10.jpg",
          displayName: "핵심패턴 233",
        },
        {
          id: "bnG_02",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/book/200602_carrot/bnG_02.jpg",
          displayName: "당근 유치원",
        },
        {
          id: "bnC_04",
          src:
            "http://image.kyobobook.co.kr//ink/images/prom/2020/banner/200529/bnC_04.jpg",
          displayName: "에듀윌 단독 브랜드전",
        },
        {
          id: "bnF_03",
          src:
            "http://image.kyobobook.co.kr/ink/images/prom/2020/book/200529_ebs/bnF_03.jpg",
          displayName: "럭키썸머 경품 증정 이벤트",
        },
      ],
    },
  ],
};
