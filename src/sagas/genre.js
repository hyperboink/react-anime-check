import { call, put, takeLatest } from "@redux-saga/core/effects";
import { safe } from "../utils/safe";
import { getGenre } from "../api";
import { FETCH_GENRE, setGenre } from "../actions/genre";
import { setError } from "../actions/error";

export function* fetchGenre(prop){
    const{ id, page, history } = prop
    const {response, error} = yield safe(call(getGenre, id, page))

    if(response){
        yield put(setGenre(response.data))
    }else{
        history.goBack()
        yield put(setError(error))
    }
}

export default function* watchGenre(){
    yield takeLatest(FETCH_GENRE, fetchGenre)
}