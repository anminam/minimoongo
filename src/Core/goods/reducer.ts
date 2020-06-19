import { Record } from "immutable";
import { ActionType } from "typesafe-actions";
import { IBook } from "Interfaces/IGoods";
import { goodsActions } from "./actions";
import { bookData } from "./data";

interface IGoodsReducer {
  bookList: IBook[] | undefined;
}

export const initState: IGoodsReducer = {
  bookList: undefined,
};
type goodsActions = ActionType<typeof goodsActions>;

export const goodsReducer = (state = initState, action: goodsActions) => {
  switch (action.type) {
    case goodsActions.INIT:
      return {
        ...state,
        bookList: action.payload,
      };

      break;
    default:
      return state;
  }
};
