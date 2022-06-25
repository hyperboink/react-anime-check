export const SEARCH = 'SEARCH'

export const search = (keyword) => ({
    type: SEARCH,
    keyword
})

export const setSearchResult = (keyword, results) => ({
    type: 'SET_SEARCH_RESULT',
    keyword,
    results
})