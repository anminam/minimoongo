interface IObject {
  id: string;
}
export class Utils {
  public static findObject = <T extends IObject>(array: T[], id: string) => {
    return array?.find((pItem) => pItem.id === id);
  };
}
