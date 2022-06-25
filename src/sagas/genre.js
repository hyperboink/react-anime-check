import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getGenre } from "../api";
import { FETCH_GENRE, setGenre } from "../actions/genre";

export function* fetchGenre({id, page}){
    try {
        const response = yield call(getGenre, id, page)
        yield put(setGenre(response.data))
    } catch (error) {
        console.log(error)
    }
}

export default function* watchGenre(){
    yield takeLatest(FETCH_GENRE, fetchGenre)
}