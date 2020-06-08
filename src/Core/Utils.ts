import { configureStore } from "Core/Store";
import { IBook } from "Interfaces/IGoods";
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
    const obj = Utils.findObject(bookList, id);
    return obj;
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
}
