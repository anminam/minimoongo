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
