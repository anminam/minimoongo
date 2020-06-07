import { Record } from "immutable";
import { INavReducer } from "./reducer";

export const NavData: Record.Factory<INavReducer> = Record({
  list: [
    {
      id: "korbook",
      displayName: "국내도서",
      href: "/korbook",
      categoryId: "korbook",
    },
    {
      id: "otherbook",
      displayName: "외국도서",
      href: "/otherbook",
      categoryId: "otherbook",
    },
    {
      id: "ebook",
      displayName: "eBook",
      href: "/ebook",
      categoryId: "ebook",
    },
    {
      id: "webnovel",
      displayName: "웹소설",
      href: "/webnovel",
      categoryId: "webnovel",
    },
    {
      id: "gift",
      displayName: "기프트",
      href: "/gift",
      categoryId: "gift",
    },
    {
      id: "music",
      displayName: "음반",
      href: "/music",
      categoryId: "music",
    },
    {
      id: "usedthing",
      displayName: "중고장터",
      href: "/usedthing",
      categoryId: "usedthing",
    },
  ],
});
