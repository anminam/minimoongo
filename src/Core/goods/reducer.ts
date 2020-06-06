import { Record } from "immutable";
import { ActionType } from "typesafe-actions";
import { IBook } from "Interfaces/IGoods";
import { goodsActions } from "./actions";
import { bookData } from "./data";

interface IGoodsReducer {
  bookList: IBook[];
}

export const initState: Record.Factory<IGoodsReducer> = Record({
  bookList: bookData,
});

type goodsActions = ActionType<typeof goodsActions>;

export const goodsReducer = (state = new initState(), action: goodsActions) => {
  switch (action.type) {
    default:
      return state;
  }
};
