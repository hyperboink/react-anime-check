import { call, put, takeLatest } from "@redux-saga/core/effects";
import { safe } from "../utils/safe";
import { getUpcoming } from "../api";
import { FETCH_UPCOMING, setUpcoming } from "../actions/upcoming";
import { setError } from "../actions/error";

export function* upcoming(){
    const {response, error} = yield safe(call(getUpcoming))

    if(response){
        yield put(setUpcoming(response.data))
    }else{
        yield put(setError(error))
    }
}

export default function* watchUpcoming(){
    yield takeLatest(FETCH_UPCOMING, upcoming)
}