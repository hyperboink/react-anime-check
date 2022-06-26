export const genre = (state = { loading: false }, action) => {
    switch(action.type){
        case 'FETCH_GENRE':
            return {
                ...state,
                loading: true
            }
        case 'SET_GENRE':
            return {
                ...state,
                genre: action.genre,
                loading: false
            }
        default:
            return state
    }
}

export default genre