const search = (state = {
    keyword: '',
    results: [],
    loading: false,
    error: {}
}, action) => {
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