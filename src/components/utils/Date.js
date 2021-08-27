import { daysOftheWeek } from '../Constants'

export const day = () => daysOftheWeek[new Date().getDay()]

export const isValidDay = day => daysOftheWeek.includes(day)

export const formatDate = date => new Date(date).toLocaleDateString("en-US")