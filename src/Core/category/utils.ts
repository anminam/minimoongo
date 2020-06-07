import { CategoryData } from "./data";
import { ICategory, ICategories } from "Interfaces/ICategory";
import { Utils } from "Core/Utils";

export class categoryUtils {
  // public static data = new CategoryData();
  public static data = CategoryData;
  // public static getCategoryName = (id:string):string => {
  //     const obj = NavUtils.data.list.find(pItem => pItem.categoryId === id);
  //     return  obj?.displayName || id;
  // }
  public static getDisplayCategoryList = (
    categories: ICategory[]
  ): ICategories[] => {
    const newCategories: ICategories[] = [];

    categories.forEach((item, i) => {
      const saveArray = Utils.findObject(newCategories, item.categoryIndex);
      if (saveArray) {
        saveArray.list.push(item);
      } else {
        newCategories.push({
          id: item.categoryIndex,
          list: [item],
        });
      }
    });

    return newCategories;
  };
}
