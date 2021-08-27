import { combineReducers } from "redux";
import searchReducer from "./search";
import paginateReducer from './paginate';

const rootReducers = combineReducers({
    searchReducer,
    paginateReducer
})

export default rootReducers