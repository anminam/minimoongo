import { fork } from "redux-saga/effects";

export function* helloSaga() {
    yield console.log('Heeeeee saga');
}

export const browserSagas = [
    fork(helloSaga)
]