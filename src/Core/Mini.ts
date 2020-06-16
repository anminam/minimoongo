import "./faicon";
import { Utils } from "./Utils";

class Mini {
  private static _instance: Mini;
  private age: number = 4;

  public utils = Utils;

  constructor() {}

  public static getInstance(): Mini {
    if (!Mini._instance) {
      Mini._instance = new Mini();
    }

    return Mini._instance;
  }

  public getAge = (): number => {
    return this.age;
  };
}

export const mini = Mini.getInstance();
