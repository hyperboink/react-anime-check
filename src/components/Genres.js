import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { slug } from '../utils/utils'
import { fetchGenre } from '../actions/genre'

export default function Genre() {
    const dispatch = useDispatch()
    const genre = useSelector(state => state.genre)

    useEffect(() => {
        dispatch(fetchGenre())   
    }, [dispatch])

    return (
        <ul className="anime-genre-list">
            {genre?.list?.data.length ? 
                genre.list.data.map((item) => <li key={item.mal_id}><Link className="anime-link" to={'/genre/' + slug(item.name) + '/' + item.mal_id + '/1'}>{item.name}</Link></li>            
            ) : ''}
        </ul>
    )
}
