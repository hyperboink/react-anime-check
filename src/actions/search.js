export const SEARCH = 'SEARCH'

export const search = (keyword) => ({
    type: SEARCH,
    keyword
})

export const setSearchResult = (keyword, results) => ({
    type: 'SEARCH_SUCCESS',
    keyword,
    results
})