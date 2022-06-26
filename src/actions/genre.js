export const FETCH_GENRE = 'FETCH_GENRE'

export const SET_GENRE = 'SET_GENRE'

export const fetchGenre = (id, page, history) => ({
    type: FETCH_GENRE,
    id,
    page,
    history
})

export const setGenre = (genre) => ({
    type: SET_GENRE,
    genre
})