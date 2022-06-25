import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getTopRated } from "../api";
import { FETCH_TOP_RATED, setTopRated } from "../actions/topRated";

export function* fetchTopRated({ source }){
    try {
        const response = yield call(getTopRated, source)
        yield put(setTopRated(response.data))
    } catch (error) {
        console.log(error);
    }
}

export default function* watchTopRated(){
    yield takeLatest(FETCH_TOP_RATED, fetchTopRated)
}