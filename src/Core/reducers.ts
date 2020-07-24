import { combineReducers } from "redux";
import { browserReducer } from "./browser";
import { navReducer } from "./nav";
import { goodsReducer } from "./goods";
import { categoryReducer } from "./category";
import { productReducer } from "./product";
import { coreReducer } from "./core";

const rootReducer = combineReducers({
  browser: browserReducer,
  nav: navReducer,
  goods: goodsReducer,
  category: categoryReducer,
  product: productReducer,
  core: coreReducer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
