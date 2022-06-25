import { combineReducers } from "redux";
import scheduled from './scheduled';
import upcoming from "./upcoming";
import topRated from "./topRated";
import genre from "./genre";
import search from "./search";

const reducers = combineReducers({
    scheduled,
    upcoming,
    topRated,
    genre,
    search
})

export default reducers