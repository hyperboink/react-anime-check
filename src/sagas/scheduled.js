import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getScheduled } from '../api';
import { FETCH_SCHEDULED, setScheduled } from "../actions/scheduled";

export function* fetchScheduled() {
    try {
        const response = yield call(getScheduled)
        yield put(setScheduled(response.data))
    } catch (error) {
        console.log(error);
    }
}

export default function* watchScheduled(){
    yield takeLatest(FETCH_SCHEDULED, fetchScheduled)
}

