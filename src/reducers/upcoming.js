export const upcoming = (state = {}, action) => {
    switch(action.type){
        case 'SET_UPCOMING':
            return {
                ...state,
                upcoming: action.upcoming
            }
        default:
            return state
    }
}

export default upcoming