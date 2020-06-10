import { Record } from "immutable";
import { IProductReducer } from "./reducer";

export const productData: Record.Factory<IProductReducer> = Record({
  count: 1,
});
