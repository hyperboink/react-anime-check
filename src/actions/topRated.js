export const FETCH_TOP_RATED = 'FETCH_TOP_RATED'

export const SET_TOP_RATED = 'SET_TOP_RATED'

export const fetchTopRated = (source) => ({
    type: FETCH_TOP_RATED,
    source
})

export const setTopRated = (topRated) => ({
    type: SET_TOP_RATED,
    topRated
})