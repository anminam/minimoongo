import { all } from 'redux-saga/effects';

import { browserSagas } from './browser';

export default function* sagas() {
    yield all([
        ...browserSagas,
    ])
}