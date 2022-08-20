export const FETCH_GENRE = 'FETCH_GENRE'

export const SET_GENRE = 'SET_GENRE'

export const SET_GENRE_LIST = `${SET_GENRE}_LIST`

export const fetchGenre = (name, id, pageId, history) => ({
    type: FETCH_GENRE,
    name,
    id,
    pageId,
    history
})

export const setGenre = (genre) => ({
    type: SET_GENRE,
    genre
})

export const setGenreList = (list) => ({
    type: SET_GENRE_LIST,
    list
})