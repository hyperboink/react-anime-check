const searchReducer = (state = {}, action) => {
    switch(action.type){
        case 'SEARCH_ANIME':
            return {...state, action}
        case 'SEARCH_MANGA':
            return {...state, action}
        case 'SEARCH_CHARACTER':
            return {...state, action}
        case 'SEARCH_PEOPLE':
            return {...state, action}
        default:
            return state 
    }
}

export default searchReducer