export const SEARCH = 'SEARCH'

export const SEARCH_SUCCESS = `${SEARCH}_SUCCESS`

export const search = (keyword) => ({
    type: SEARCH,
    keyword
})

export const setSearchResult = (keyword, results) => ({
    type: SEARCH_SUCCESS,
    keyword,
    results
})