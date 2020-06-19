import { takeEvery, put, call } from "redux-saga/effects";
import { goodsActions } from "./actions";
import axios from "axios";

const a = "http://localhost:3003/api/books";
function getApi() {
  return axios.get(a);
}
function* fetchData(action: any) {
  const response = yield call(getApi);
  // 이거에대한 에러처리
  yield put({ type: goodsActions.INIT, payload: response.data.books });
}

function* watchInit() {
  yield takeEvery(goodsActions.INIT_ASYNC, fetchData);
}

export const goodsSagas = [watchInit()];
