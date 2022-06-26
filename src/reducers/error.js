export const error = (state = {}, action) => {
    switch(action.type){
        case 'SET_ERROR':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default error