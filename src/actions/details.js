export const FETCH_DETAILS = 'FETCH_DETAILS'

export const SET_DETAILS = 'SET_DETAILS'

export const fetchDetails = (source, id, extraSegment) => ({
    type: FETCH_DETAILS,
    source,
    id,
    extraSegment
})

export const setDetails = (details) => ({
    type: SET_DETAILS,
    details
})