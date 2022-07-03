import { all } from "@redux-saga/core/effects"
import scheduled from "./scheduled"
import upcoming from './upcoming'
import topRated from './topRated'
import season from "./season"
import genre from './genre'
import search from "./search"
import details from "./details"

export function* rootSaga(){
    yield all([
        scheduled(),
        upcoming(),
        topRated(),
        season(),
        genre(),
        search(),
        details()
    ])
}