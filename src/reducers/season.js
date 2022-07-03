const season = (state = {}, action) => {
    switch(action.type){
        case 'SET_SEASON':
            return {
                ...state,
                season: action.season
            }
        default:
            return state
    }
}

export default season