export const searchAnime = (data) => {
    return {
        type: 'SEARCH_ANIME',
        keyword: data.keyword,
        payload: data.payload
    }
}