import { call, put, takeLatest } from "@redux-saga/core/effects"
import { searchAnime } from "../api"
import { SEARCH, setSearchResult } from "../actions/search"

export function* fetchSearchResult({ keyword }){
    try {
        const response = yield call(searchAnime, keyword)
        yield put(setSearchResult(keyword, response.data.results))
    } catch (error) {
        console.log(error);
    }
}

export default function* watchSearch(){
    yield takeLatest(SEARCH, fetchSearchResult)
}