import { call, put, takeLatest } from "@redux-saga/core/effects"
import { safe } from "../utils/safe";
import { getSeason } from "../api"
import { FETCH_SEASON, setSeason } from "../actions/season"
import { setError } from "../actions/error";

export function* fetchSeason(){
    const {response, error} = yield safe(call(getSeason))

    if(response){
        yield put(setSeason(response.data))
    }else{
        yield put(setError(error))
    }
}

export default function* watchSeason(){
    yield takeLatest(FETCH_SEASON, fetchSeason)
}