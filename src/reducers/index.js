import { combineReducers } from "redux";
import scheduled from './scheduled';
import upcoming from "./upcoming";
import topRated from "./topRated";
import genre from "./genre";
import search from "./search";
import error from "./error";

const reducers = combineReducers({
    scheduled,
    upcoming,
    topRated,
    genre,
    search,
    error
})

export default reducers