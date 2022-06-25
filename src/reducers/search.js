const initialState = {
    keyword: '',
    results: [],
    loading: false
}

const search = (state = initialState, action) => {
    switch(action.type){
        case 'SEARCH':
            return {
                ...state,
                keyword: action.keyword,
                loading: true
            }
        case 'SEARCH_SUCCESS':
            return {
                ...state,
                keyword: action.keyword,
                results: action.results,
                loading: false
            }
        default:
            return state
    }
}

export default search