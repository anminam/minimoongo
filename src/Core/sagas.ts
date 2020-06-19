import { all } from "redux-saga/effects";

import { browserSagas } from "./browser";
import { goodsSagas } from "./goods";

export default function* sagas() {
  yield all([...browserSagas, ...goodsSagas]);
}
