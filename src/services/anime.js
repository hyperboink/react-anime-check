import axios from 'axios'
import { BASE_API } from '../components/Constants'

export const getScheduled = _ => axios.get(`${BASE_API}/schedule`)

export const getUpcoming = _ => axios.get(`${BASE_API}/season/later`)

export const getTopRated = type => axios.get(`${BASE_API}/top/${type}`)

export const getGenre = (animeId, pageId) => axios.get(`${BASE_API}/genre/anime/${animeId}/${pageId}`)

export const getAnimeByTypeAndId = (pageType, id) => axios.get(`https://api.jikan.moe/v3/${pageType}/${id}`)

export const searchAnime = (query, timeout) => axios.get('https://api.jikan.moe/v3/search/anime?q=' + query, {timeout: timeout})