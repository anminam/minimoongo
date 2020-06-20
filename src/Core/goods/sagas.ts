import { takeEvery, put, call } from "redux-saga/effects";
import { goodsActions } from "./actions";
import axios from "axios";
import { API_BOOKS_URL } from "Core/constans";

function getApi() {
  return axios.get(API_BOOKS_URL);
}
function* fetchData(action: any) {
  try {
    const response = yield call(getApi);
    // 이거에대한 에러처리
    yield put({ type: goodsActions.INIT, payload: response.data.books });
  } catch (error) {
    yield put({ type: goodsActions.INIT_FAIL, error });
  }
}

function* watchInit() {
  yield takeEvery(goodsActions.INIT_ASYNC, fetchData);
}

export const goodsSagas = [watchInit()];
