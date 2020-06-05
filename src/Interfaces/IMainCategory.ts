import { ILink } from "./ILink";
import { IMainCategoryId } from "Interfaces/ICategory";

export interface IMainCategory {
    id: string
    displayName: string
    href: string
    categoryId: IMainCategoryId
}