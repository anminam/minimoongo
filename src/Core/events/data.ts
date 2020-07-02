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
