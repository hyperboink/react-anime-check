import { FETCH_DETAILS, SET_DETAILS } from "../actions/details"

export const details = (state = { loading: false }, action) => {
    switch(action.type){
        case FETCH_DETAILS:
            return {
                ...state,
                loading: true
            }
        case SET_DETAILS:
            return {
                ...state,
                details: action.details,
                loading: false
            }
        default:
            return state
        
    }
}

export default details