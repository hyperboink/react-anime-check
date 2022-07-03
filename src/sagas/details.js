import { call, put, takeLatest } from "@redux-saga/core/effects"
import { safe } from "../utils/safe"
import { getDetailsByTypeAndId } from "../api"
import { FETCH_DETAILS, setDetails } from "../actions/details"
import { setError } from "../actions/error"

export function* fetchDetails(props){
    const {source, id , extraSegment} = props
    const {response, error} = yield safe(call(getDetailsByTypeAndId, source, id , (extraSegment || '')))

    if(response){
        yield put(setDetails(response.data))
    }else{
        yield put(setError(error))
    }
}

export default function* watchDetails(){
    yield takeLatest(FETCH_DETAILS, fetchDetails)
}