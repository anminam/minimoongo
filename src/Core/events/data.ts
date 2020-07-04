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

export const korTodayBookSliderEvent: IEvent = {
  id: "korTodayBookSliderEvent",
  displayName: "오늘의 책",
  list: [
    {
      id: "0",
      displayName: "",
      list: [
        {
          id: "l9791189239176",
          src:
            "http://image.kyobobook.co.kr/images/book/large/176/l9791189239176.jpg",
          displayName: "필(Feel)",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911892391761.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911892391762.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911892391763.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911892391764.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911892391765.jpg",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911892391766.jpg",
            },
          ],
        },
        {
          id: "l9791188941469",
          src:
            "http://image.kyobobook.co.kr/images/book/large/469/l9791188941469.jpg",
          displayName: "언어의 역사(양장본 HardCover)",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791188941469_01.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791188941469_02.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791188941469_03.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791188941469_04.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791188941469_05.jpg",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791188941469_06.jpg",
            },
            {
              id: "6",
              displayName: "6",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791188941469_07.jpg",
            },
            {
              id: "7",
              displayName: "7",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791188941469_08.jpg",
            },
            {
              id: "8",
              displayName: "8",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791188941469_09.jpg",
            },
            {
              id: "9",
              displayName: "9",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791188941469_10.jpg",
            },
            {
              id: "10",
              displayName: "10",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791188941469_11.jpg",
            },
          ],
        },
        {
          id: "l9788932474304",
          src:
            "http://image.kyobobook.co.kr/images/book/large/304/l9788932474304.jpg",
          displayName: "신과 로봇",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889324743041.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889324743042.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889324743043.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889324743044.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889324743045.jpg",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889324743046.jpg",
            },
            {
              id: "6",
              displayName: "6",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889324743047.jpg",
            },
            {
              id: "7",
              displayName: "7",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889324743048.jpg",
            },
            {
              id: "8",
              displayName: "8",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97889324743049.jpg",
            },
            {
              id: "9",
              displayName: "9",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/978893247430410.jpg",
            },
            {
              id: "10",
              displayName: "10",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/978893247430411.jpg",
            },
            {
              id: "11",
              displayName: "11",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/978893247430412.jpg",
            },
          ],
        },
        {
          id: "l9791164050680",
          src:
            "http://image.kyobobook.co.kr/images/book/large/680/l9791164050680.jpg",
          displayName: "팬데믹 패닉",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911640506801.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911640506802.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911640506803.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911640506804.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911640506805.jpg",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911640506806.jpg",
            },
            {
              id: "6",
              displayName: "6",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911640506807.jpg",
            },
            {
              id: "7",
              displayName: "7",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911640506808.jpg",
            },
            {
              id: "8",
              displayName: "8",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/97911640506809.jpg",
            },
            {
              id: "9",
              displayName: "9",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/979116405068010.jpg",
            },
          ],
        },
        {
          id: "l9791190356602",
          src:
            "http://image.kyobobook.co.kr/images/book/large/602/l9791190356602.jpg",
          displayName: "수학은 어떻게 무기가 되는가",
          subImageList: [
            {
              id: "0",
              displayName: "0",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791190356602_01.jpg",
            },
            {
              id: "1",
              displayName: "1",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791190356602_02.jpg",
            },
            {
              id: "2",
              displayName: "2",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791190356602_03.jpg",
            },
            {
              id: "3",
              displayName: "3",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791190356602_04.jpg",
            },
            {
              id: "4",
              displayName: "4",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791190356602_05.jpg",
            },
            {
              id: "5",
              displayName: "5",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791190356602_06.jpg",
            },
            {
              id: "6",
              displayName: "6",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791190356602_07.jpg",
            },
            {
              id: "7",
              displayName: "7",
              href: "/",
              src:
                "http://image.kyobobook.co.kr/images/cardnews/9791190356602_08.jpg",
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
          id: "l9788954672221",
          src:
            "http://image.kyobobook.co.kr/images/book/large/221/l9788954672221.jpg",
          displayName: "화이트 호스",
        },
        {
          id: "l9791190786355",
          src:
            "http://image.kyobobook.co.kr/images/book/large/355/l9791190786355.jpg",
          displayName: "보통의 언어들(나를 숨 쉬게 하는)(양장본 HardCover)",
        },
        {
          id: "l9791164135110",
          src:
            "http://image.kyobobook.co.kr/images/book/large/110/l9791164135110.jpg",
          displayName: "석세스 에이징",
        },
        {
          id: "l9791160804317",
          src:
            "http://image.kyobobook.co.kr/images/book/large/317/l9791160804317.jpg",
          displayName: "박시백의 조선왕조실록 세트(특별 한정판)(전20권)",
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
        },
        {
          id: "l9791190382175",
          src:
            "http://image.kyobobook.co.kr/images/book/large/175/l9791190382175.jpg",
          displayName: "더 해빙(The Having)(양장본 HardCover)",
        },
        {
          id: "l9788954671064",
          src:
            "http://image.kyobobook.co.kr/images/book/large/064/l9788954671064.jpg",
          displayName: "자본과 이데올로기(양장본 HardCover)",
        },
        {
          id: "l9788983711892",
          src:
            "http://image.kyobobook.co.kr/images/book/large/892/l9788983711892.jpg",
          displayName: "코스모스(보급판)",
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
        },
        {
          id: "l9791190183208",
          src:
            "http://image.kyobobook.co.kr/images/book/large/208/l9791190183208.jpg",
          displayName: "요리조리 열어 보는 직업(Usborne)(플랩북)",
        },
        {
          id: "l9791135482991",
          src:
            "http://image.kyobobook.co.kr/images/book/large/991/l9791135482991.jpg",
          displayName: "영양의 비밀",
        },
        {
          id: "l9791165211899",
          src:
            "http://image.kyobobook.co.kr/images/book/large/899/l9791165211899.jpg",
          displayName: "초등 엄마 말의 힘",
        },
        {
          id: "l9791189159634",
          src:
            "http://image.kyobobook.co.kr/images/book/large/634/l9791189159634.jpg",
          displayName: "백반기행(식객 허영만의)",
        },
        {
          id: "l9791136719607",
          src:
            "http://image.kyobobook.co.kr/images/book/large/607/l9791136719607.jpg",
          displayName: "파이브 스타 스토리. 15(개정판)(아이큐 점프 코믹스)",
        },
        {
          id: "l9791185473604",
          src:
            "http://image.kyobobook.co.kr/images/book/large/604/l9791185473604.jpg",
          displayName: "오! 이렇게 다양한 오트밀 요리",
        },
        {
          id: "l9791189096144",
          src:
            "http://image.kyobobook.co.kr/images/book/large/144/l9791189096144.jpg",
          displayName: "어반라이크(Urbanlike)(No.40)",
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
        },
        {
          id: "l9788954753043",
          src:
            "http://image.kyobobook.co.kr/images/book/large/043/l9788954753043.jpg",
          displayName: "고등 영어영역 영어(2020)(2021 수능대비)(EBS 수능완성)",
        },
        {
          id: "l9791162242964",
          src:
            "http://image.kyobobook.co.kr/images/book/large/964/l9791162242964.jpg",
          displayName: "핸즈온 머신러닝(2판)",
        },
        {
          id: "l9791188095315",
          src:
            "http://image.kyobobook.co.kr/images/book/large/315/l9791188095315.jpg",
          displayName: "PEET Organic Chemistry 솔메 실전문풀 Part. 2(4판)",
        },
      ],
    },
  ],
};
export const korBookToday: IEvent = {
  id: "korPageBestseller",
  displayName: "오늘의 책",
  list: [
    {
      id: "0",
      displayName: "문학/인문",
      list: [
        {
          id: "l9788954672221",
          src:
            "http://image.kyobobook.co.kr/images/book/large/221/l9788954672221.jpg",
          displayName: "화이트 호스",
        },
        {
          id: "l9791190786355",
          src:
            "http://image.kyobobook.co.kr/images/book/large/355/l9791190786355.jpg",
          displayName: "보통의 언어들(나를 숨 쉬게 하는)(양장본 HardCover)",
        },
        {
          id: "l9791164135110",
          src:
            "http://image.kyobobook.co.kr/images/book/large/110/l9791164135110.jpg",
          displayName: "석세스 에이징",
        },
        {
          id: "l9791160804317",
          src:
            "http://image.kyobobook.co.kr/images/book/large/317/l9791160804317.jpg",
          displayName: "박시백의 조선왕조실록 세트(특별 한정판)(전20권)",
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
        },
        {
          id: "l9791190382175",
          src:
            "http://image.kyobobook.co.kr/images/book/large/175/l9791190382175.jpg",
          displayName: "더 해빙(The Having)(양장본 HardCover)",
        },
        {
          id: "l9788954671064",
          src:
            "http://image.kyobobook.co.kr/images/book/large/064/l9788954671064.jpg",
          displayName: "자본과 이데올로기(양장본 HardCover)",
        },
        {
          id: "l9788983711892",
          src:
            "http://image.kyobobook.co.kr/images/book/large/892/l9788983711892.jpg",
          displayName: "코스모스(보급판)",
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
        },
        {
          id: "l9791190183208",
          src:
            "http://image.kyobobook.co.kr/images/book/large/208/l9791190183208.jpg",
          displayName: "요리조리 열어 보는 직업(Usborne)(플랩북)",
        },
        {
          id: "l9791135482991",
          src:
            "http://image.kyobobook.co.kr/images/book/large/991/l9791135482991.jpg",
          displayName: "영양의 비밀",
        },
        {
          id: "l9791165211899",
          src:
            "http://image.kyobobook.co.kr/images/book/large/899/l9791165211899.jpg",
          displayName: "초등 엄마 말의 힘",
        },
        {
          id: "l9791189159634",
          src:
            "http://image.kyobobook.co.kr/images/book/large/634/l9791189159634.jpg",
          displayName: "백반기행(식객 허영만의)",
        },
        {
          id: "l9791136719607",
          src:
            "http://image.kyobobook.co.kr/images/book/large/607/l9791136719607.jpg",
          displayName: "파이브 스타 스토리. 15(개정판)(아이큐 점프 코믹스)",
        },
        {
          id: "l9791185473604",
          src:
            "http://image.kyobobook.co.kr/images/book/large/604/l9791185473604.jpg",
          displayName: "오! 이렇게 다양한 오트밀 요리",
        },
        {
          id: "l9791189096144",
          src:
            "http://image.kyobobook.co.kr/images/book/large/144/l9791189096144.jpg",
          displayName: "어반라이크(Urbanlike)(No.40)",
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
        },
        {
          id: "l9788954753043",
          src:
            "http://image.kyobobook.co.kr/images/book/large/043/l9788954753043.jpg",
          displayName: "고등 영어영역 영어(2020)(2021 수능대비)(EBS 수능완성)",
        },
        {
          id: "l9791162242964",
          src:
            "http://image.kyobobook.co.kr/images/book/large/964/l9791162242964.jpg",
          displayName: "핸즈온 머신러닝(2판)",
        },
        {
          id: "l9791188095315",
          src:
            "http://image.kyobobook.co.kr/images/book/large/315/l9791188095315.jpg",
          displayName: "PEET Organic Chemistry 솔메 실전문풀 Part. 2(4판)",
        },
      ],
    },
  ],
};
