export const paginate = (payload) => {
    return {
        type: 'PAGINATE_NEXT',
        payload: payload
    }
}