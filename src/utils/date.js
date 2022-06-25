import { DAYS_OF_THE_WEEK } from '../utils/constants'

export const day = () => DAYS_OF_THE_WEEK[new Date().getDay()]

export const isValidDay = day => DAYS_OF_THE_WEEK.includes(day)

export const formatDate = date => new Date(date).toLocaleDateString("en-US")