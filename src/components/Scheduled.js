import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchScheduled } from '../actions/scheduled'
import Card from './Card'
import { day } from '../utils/date'
import { DAYS_OF_THE_WEEK } from '../utils/constants'

export default function Scheduled() {
    const dispatch = useDispatch()
    const { scheduled } = useSelector(state => state.scheduled)
    const allScheduledByDays = DAYS_OF_THE_WEEK.concat(['other', 'unknown'])

    useEffect(() =>{
        dispatch(fetchScheduled())
    }, [dispatch])

    return (
        <>
            {scheduled?.[day()] ? scheduled[day()].map(anime => <Card key={anime.mal_id} detail={anime} />) : ''}

            {scheduled ? Object.entries(scheduled).map(([key, animes]) => {
                return allScheduledByDays.includes(key) && key !== day()
                    ? Object.entries(animes).map(([k, anime]) => <Card key={anime.mal_id} detail={anime} />)
                    : '';
            }) : ''}
        </>
    )
}
