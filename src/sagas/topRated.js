import { call, put, takeLatest } from "@redux-saga/core/effects";
import { safe } from "../utils/safe";
import { getTopRated } from "../api";
import { FETCH_TOP_RATED, setTopRated } from "../actions/topRated";
import { setError } from "../actions/error";

export function* fetchTopRated({ source }){
    const {response, error} = yield safe(call(getTopRated, source))

    if(response){
        yield put(setTopRated(response.data))
    }else{
        yield put(setError(error))
    }
}

export default function* watchTopRated(){
    yield takeLatest(FETCH_TOP_RATED, fetchTopRated)
}