import React, {useState, useEffect} from 'react'
import Card from './Card'
import { day } from './utils/Date'
import { DAYS_OF_THE_WEEK } from './Constants'
import { getScheduled } from '../services/anime'

export default function Scheduled() {
    const [scheduled, setScheduled] = useState([])
    const allScheduledByDays = DAYS_OF_THE_WEEK.concat(['other', 'unknown'])

    useEffect(() =>{
        let unmount = false

        getScheduled()
            .then((res) => {
                if(unmount) return
                setScheduled(res.data)
            })
            .catch(err => console.log(err))

        return _ => {
            unmount = true
        }
    }, [])

    return (
        <>
            {scheduled[day()] ? scheduled[day()].map(anime => <Card key={anime.mal_id} detail={anime} />) : ''}

            {scheduled ? Object.entries(scheduled).map(([key, animes]) => {
                return allScheduledByDays.includes(key) && key !== day()
                    ? Object.entries(animes).map(([k, anime]) => <Card key={anime.mal_id} detail={anime} />)
                    : '';
            }) : ''}
        </>
    )
}
