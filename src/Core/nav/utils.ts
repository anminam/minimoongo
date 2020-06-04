import { NavData } from "./navData";

export class NavUtils {
    public static data = new NavData();
    public static getCategoryName = (id:string):string => {
        const obj = NavUtils.data.list.find(pItem => pItem.categoryId === id);
        return  obj?.displayName || id;
    }
}