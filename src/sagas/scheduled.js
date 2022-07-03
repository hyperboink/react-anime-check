import { call, put, takeLatest } from "@redux-saga/core/effects"
import { safe } from "../utils/safe"
import { getScheduled } from '../api'
import { FETCH_SCHEDULED, setScheduled } from "../actions/scheduled"
import { setError } from "../actions/error"

export function* fetchScheduled({ day }) {
    const {response, error} = yield safe(call(getScheduled, day))

    if(response){
        yield put(setScheduled(response.data))
    }else{
        yield put(setError(error))
    }
}

export default function* watchScheduled(){
    yield takeLatest(FETCH_SCHEDULED, fetchScheduled)
}

