export const FETCH_SEASON = 'FETCH_SEASON'

export const SET_SEASON = 'SET_SEASON'

export const fetchSeason = () => ({
    type: FETCH_SEASON
})

export const setSeason = (season) => ({
    type: SET_SEASON,
    season
})