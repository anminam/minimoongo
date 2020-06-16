import "./faicon";

class Mini {
  private static _instance: Mini;
  private age: number = 4;

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

export default Mini.getInstance();
