import { all } from "@redux-saga/core/effects"
import scheduled from "./scheduled"
import upcoming from './upcoming'
import topRated from './topRated'
import genre from './genre'

export function* rootSaga(){
    yield all([
        scheduled(),
        upcoming(),
        topRated(),
        genre()
    ])
}