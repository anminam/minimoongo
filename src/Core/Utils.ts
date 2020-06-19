import { configureStore } from "Core/Store";
import { IBook } from "Interfaces/IGoods";
import { IDate } from "Interfaces/IDate";
interface IObject {
  id: string;
}
export class Utils {
  public static findObject = <T extends IObject>(array: T[], id: string) => {
    return array?.find((pItem) => pItem.id === id);
  };
  public static findIndex = <T extends IObject>(
    array: T[],
    id: string
  ): number => {
    return array?.findIndex((pItem) => pItem.id === id);
  };
  public static nextIndex = <T extends IObject>(
    array: T[],
    index: number
  ): number => {
    const len = array.length;
    return index >= len - 1 ? 0 : index + 1;
  };
  public static prevIndex = <T extends IObject>(
    array: T[],
    index: number
  ): number => {
    const len = array.length;
    return index === 0 ? len - 1 : index - 1;
  };

  public static getBook = (id: string): IBook | undefined => {
    const { bookList } = configureStore().getState().goods;
    // 이상하네
    if (bookList) {
      const obj = Utils.findObject(bookList, id) as IBook;
      return obj;
    } else {
      return undefined;
    }
  };

  public static getListMaxLength = (
    listLength: number,
    maxLength: number
  ): number => {
    let max = Math.floor(listLength / maxLength) - 1;
    if (listLength % maxLength > 0) {
      max = max + 1;
    }

    return max;
  };

  public static getLinkOfProduct = (id: string): string => {
    return `#/product/${id}`;
  };

  public static numComma = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  private static korDayList = ["일", "월", "화", "수", "목", "금", "토", "일"];

  public static today = (): IDate => {
    const d = new Date();
    const year = d.getFullYear().toString();
    const month = (d.getMonth() + 1).toString();
    const date = d.getDate().toString();
    const day = d.getDay().toString();
    const korDay = Utils.korDayList[Number(day)];

    return {
      year,
      month,
      date,
      day,
      korDay,
    };
  };
}
