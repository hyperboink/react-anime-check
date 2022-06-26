export const topRated = (state = {}, action) => {
    switch(action.type){
        case 'SET_TOP_RATED':
            return {
                ...state,
                topRated: action.topRated
            }
        default:
            return state
    }
}

export default topRated