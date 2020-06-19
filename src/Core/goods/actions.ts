import { IBook } from "Interfaces/IGoods";

export const goodsActions = {
  INIT: "goods/INIT" as const,
  INIT_ASYNC: "goods/INIT_ASYNC" as const,

  initData: (data: IBook[]) => ({
    type: goodsActions.INIT,
    payload: data,
  }),

  initAsync: () => ({
    type: goodsActions.INIT_ASYNC,
  }),
};
