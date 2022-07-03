import { combineReducers } from "redux";
import scheduled from './scheduled';
import upcoming from "./upcoming";
import topRated from "./topRated";
import season from "./season";
import genre from "./genre";
import details from "./details";
import search from "./search";
import error from "./error";

const reducers = combineReducers({
    scheduled,
    upcoming,
    topRated,
    season,
    genre,
    details,
    search,
    error
})

export default reducers