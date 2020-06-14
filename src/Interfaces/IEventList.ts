import { ILink } from "./ILink";
import { IMainCategoryId } from "./ICategory";

export interface IEventListItem {
  id: string;
  displayName: string;
  list: ILink[];
}

export interface IEvent1 {
  title: string;
  href: string;
  order: IMainCategoryId[];
  list: string[];
}
export interface IEventPicks {
  title: string;
  href: string;
  list: string[];
  className: string; // 추후 아이디로..
  likeCategory: string;
  likeAuthor: string;
  cicleOfReading: number;
  rankOfReading: number;
}

// export interface IPickItem {
//   class: string; // 추후 아이디로..
//   likeCategory: string;
//   likeAuthor: string;
//   cicleOfReading: number;
//   rankOfReading: number;
//   list: string[];
// }
