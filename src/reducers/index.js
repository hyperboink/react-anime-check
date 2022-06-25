import { combineReducers } from "redux";
// import searchReducer from "./search";
// import paginateReducer from './paginate';
import scheduled from './scheduled';
import upcoming from "./upcoming";
import topRated from "./topRated";
import genre from "./genre";

const reducers = combineReducers({
    scheduled,
    upcoming,
    topRated,
    genre
})

export default reducers