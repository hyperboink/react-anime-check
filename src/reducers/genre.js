export const genre = (state = {}, action) => {
    switch(action.type){
        case 'SET_GENRE':
            return {...state, genre: action.genre}
        default:
            return state
    }
}

export default genre