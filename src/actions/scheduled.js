export const FETCH_SCHEDULED = 'FETCH_SCHEDULED';

export const SET_SCHEDULED = 'SET_SCHEDULED';

export const fetchScheduled = (day) => ({
    type: FETCH_SCHEDULED,
    day
})

export const setScheduled = (scheduled) => ({
    type: SET_SCHEDULED,
    scheduled
})