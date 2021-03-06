import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchScheduled } from '../actions/scheduled'
import Card from './Card'
import { day } from '../utils/date'
import { DAYS_OF_THE_WEEK } from '../utils/constants'

export default function Scheduled() {
    const dispatch = useDispatch()
    const { scheduled } = useSelector(state => state.scheduled)

    useEffect(() =>{
        dispatch(fetchScheduled(day()))
    }, [dispatch])

    return (
        <>
            {scheduled?.data ? scheduled.data.map(anime => <Card key={anime.mal_id} detail={anime} />) : ''}
        </>
    )
}
