import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUpcoming } from '../actions/upcoming'
import Card from './Card'

export default function Upcoming() {
    const { upcoming } = useSelector(state => state.upcoming)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(fetchUpcoming())
    }, [dispatch])

    return (
        <>
            {upcoming?.anime ? upcoming.anime.map(anime => 
                <Card key={anime.mal_id} detail={anime} />
            ) : ''}
        </>
    )
}