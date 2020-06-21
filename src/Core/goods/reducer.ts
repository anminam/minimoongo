import { ActionType } from "typesafe-actions";
import { IBook } from "Interfaces/IGoods";
import { goodsActions } from "./actions";
import { bookData } from "./data";

interface IGoodsReducer {
  bookList: IBook[] | undefined;
}

export const initState: IGoodsReducer = {
  bookList: bookData, // 이부분 서버일때랑 분기해야함
};
type goodsActions = ActionType<typeof goodsActions>;

export const goodsReducer = (state = initState, action: goodsActions) => {
  switch (action.type) {
    case goodsActions.INIT:
      return {
        ...state,
        bookList: action.payload.slice(0),
      };
    case goodsActions.INIT_FAIL:
      return {
        ...state,
        bookList: bookData,
      };
    default:
      return state;
  }
};
