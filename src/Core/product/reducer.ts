import { ProductActions } from "./actions";
import { ActionType } from "typesafe-actions";
import { productData } from "./data";

export interface IProductReducer {
  count: number;
}

type ProductAction = ActionType<typeof ProductActions>;

export const productReducer = (
  state = new productData(),
  action: ProductAction
) => {
  switch (action.type) {
    case ProductActions.ADD:
      return state.set("count", state.count + 1);
    case ProductActions.REMOVE:
      return state.set("count", state.count - 1);
    case ProductActions.CHANGE_VALUE:
      return state.set("count", action.payload);
    default:
      return state;
  }
};
