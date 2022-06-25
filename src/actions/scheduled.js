export const FETCH_SCHEDULED = 'FETCH_SCHEDULED';

export const SET_SCHEDULED = 'SET_SCHEDULED';

export const fetchScheduled = () => ({
    type: FETCH_SCHEDULED
})

export const setScheduled = (scheduled) => ({
    type: SET_SCHEDULED,
    scheduled
})