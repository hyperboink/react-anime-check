import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getUpcoming } from "../api";
import { FETCH_UPCOMING, setUpcoming } from "../actions/upcoming";

export function* upcoming(){
    try {
        const response = yield call(getUpcoming)
        yield put(setUpcoming(response.data))
    } catch (error) {
        console.log(error);
    }
}

export default function* watchUpcoming(){
    yield takeLatest(FETCH_UPCOMING, upcoming)
}