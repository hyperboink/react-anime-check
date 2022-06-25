const initialState = {
    keyword: '',
    results: []
}

const search = (state = initialState, action) => {
    switch(action.type){
        case 'SET_SEARCH_RESULT':
            return {
                ...state,
                keyword: action.keyword,
                results: action.results
            }
        default:
            return state
    }
}

export default search