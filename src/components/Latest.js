import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchScheduled } from '../actions/scheduled'
import { fetchSeason } from '../actions/season'
import Card from './Card'
import { day } from '../utils/date'

export default function Scheduled() {
    const dispatch = useDispatch()
    const { scheduled } = useSelector(state => state.scheduled)
    const { season } = useSelector(state => state.season)
    const latest = scheduled?.data && season?.data ? [...scheduled.data, ...season.data] : []

    useEffect(() =>{
        dispatch(fetchScheduled(day()))
        dispatch(fetchSeason())
    }, [dispatch])

    return (
        <>
            {latest.length ? latest.map(anime => <Card key={anime.mal_id} detail={anime} />) : ''}
        </>
    )
}
