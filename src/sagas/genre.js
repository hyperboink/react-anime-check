import { call, put, takeLatest } from "@redux-saga/core/effects";
import { safe } from "../utils/safe";
import { getGenre, getGenreList } from "../api";
import { FETCH_GENRE, setGenre, setGenreList } from "../actions/genre";
import { setError } from "../actions/error";

export function* fetchGenre(prop){
    const{ id, name, pageId, history } = prop

    if(name){
        const {response, error} = yield safe(call(getGenre, id, pageId))

        if(response){
            yield put(setGenre(response.data))
        }else{
            if(history){
                history.goBack()
            }
            yield put(setError(error))
        }
    }else{
        const {response, error} = yield safe(call(getGenreList))

        if(response){
            yield put(setGenreList(response.data))
        }else{
            yield put(setError(error))
        }
    }
}

export default function* watchGenre(){
    yield takeLatest(FETCH_GENRE, fetchGenre)
}