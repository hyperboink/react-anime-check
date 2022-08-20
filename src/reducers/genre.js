import { 
    FETCH_GENRE,
    SET_GENRE,
    SET_GENRE_LIST
} from "../actions/genre"

export const genre = (state = { loading: false }, action) => {
    switch(action.type){
        case FETCH_GENRE:
            return {
                ...state,
                loading: true
            }        
        case SET_GENRE:
            return {
                ...state,
                genre: action.genre,
                loading: false
            }
        case SET_GENRE_LIST:
            return {
                ...state,
                list: action.list,
                loading: false
            }
        default:
            return state
    }
}

export default genre