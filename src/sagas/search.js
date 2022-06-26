import { call, put, takeLatest } from "@redux-saga/core/effects"
import { safe } from "../utils/safe";
import { searchAnime } from "../api"
import { SEARCH, setSearchResult } from "../actions/search"
import { setError } from "../actions/error";

export function* fetchSearchResult({ keyword }){
    const {response, error} = yield safe(call(searchAnime, keyword))

    if(response){
        yield put(setSearchResult(keyword, response.data.results))
    }else{
        yield put(setError(error))
    }
}

export default function* watchSearch(){
    yield takeLatest(SEARCH, fetchSearchResult)
}