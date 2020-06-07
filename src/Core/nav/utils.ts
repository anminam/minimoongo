import { INavItem } from "Interfaces/INavItem";
import { configureStore } from "Core/Store";
import { Utils } from "Core/Utils";

export class NavUtils {
  public static getCategoryName = (id: string): string => {
    const { list } = configureStore().getState().nav;
    const obj = list.find((pItem) => pItem.categoryId === id);
    return obj?.displayName || id;
  };

  public static getNavCategory = (id: string): INavItem | undefined => {
    const { list } = configureStore().getState().nav;
    const obj = Utils.findObject(list, id);
    return obj;
  };
}
