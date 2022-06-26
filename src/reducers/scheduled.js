export const scheduled = (state = {}, action) => {
    switch(action.type){
        case 'SET_SCHEDULED':
            return {
                ...state,
                scheduled: action.scheduled
            }
        default:
            return state
    }
}

export default scheduled