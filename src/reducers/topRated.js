import { FETCH_TOP_RATED, SET_TOP_RATED } from "../actions/topRated"

export const topRated = (state = { loading: false }, action) => {
    switch(action.type){
        case FETCH_TOP_RATED:
            return {
                ...state,
                loading: true
            }
        case SET_TOP_RATED:
            return {
                ...state,
                topRated: action.topRated,
                loading: false
            }
        default:
            return state
    }
}

export default topRated