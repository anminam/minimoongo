import { ILink } from "./ILink";

export interface INavItem extends ILink {
    subItems?: ILink[]
}
