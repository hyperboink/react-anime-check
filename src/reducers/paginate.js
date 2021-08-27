const paginateReducer = (state = {}, action) => {
    switch(action.type){
        case 'PAGINATE_NEXT':
            return {...state, action}
        case 'PAGINATE_PREV':
            return {...state, action}
        default:
            return state
    }
}

export default paginateReducer