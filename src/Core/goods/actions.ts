import { IBook } from "Interfaces/IGoods";

export const goodsActions = {
  INIT: "goods/INIT" as const,
  INIT_ASYNC: "goods/INIT_ASYNC" as const,
  INIT_FAIL: "goods/INIT_FAIL" as const,

  initData: (data: IBook[]) => ({
    type: goodsActions.INIT,
    payload: data,
  }),

  initAsync: () => ({
    type: goodsActions.INIT_ASYNC,
  }),
  initFail: (error: any) => ({
    type: goodsActions.INIT_FAIL,
    payload: error,
  }),
};
