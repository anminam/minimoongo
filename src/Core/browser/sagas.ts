import { fork } from "redux-saga/effects";

export function* helloSaga() {
  yield console.log("call saga");
}

export const browserSagas = [fork(helloSaga)];
