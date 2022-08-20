import axios from 'axios'
import { BASE_API } from '../utils/constants'

export const getScheduled = (day) => axios.get(`${BASE_API}/schedules?filter=${day}`)

export const getUpcoming = () => axios.get(`${BASE_API}/seasons/upcoming`)

export const getTopRated = source => axios.get(`${BASE_API}/top/${source}`)

export const getSeason = () => axios.get(`${BASE_API}/seasons/now`)

export const getGenre = (id, pageId) => axios.get(`${BASE_API}/anime?genres=${id}&page=${pageId}`)

export const getGenreList = () => axios.get(`${BASE_API}/genres/anime`)

export const getDetailsByTypeAndId = (pageType, id, extraSegment) => axios.get(`${BASE_API}/${pageType}/${id}${extraSegment}`)

export const searchAnime = (query, timeout) => axios.get(`${BASE_API}/anime?q=` + query, {timeout: timeout})