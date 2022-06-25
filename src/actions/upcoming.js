export const FETCH_UPCOMING = 'FETCH_UPCOMING'

export const SET_UPCOMING = 'SET_UPCOMING'

export const fetchUpcoming = () => ({
    type: FETCH_UPCOMING
})

export const setUpcoming = (upcoming) => ({
    type: SET_UPCOMING,
    upcoming
})