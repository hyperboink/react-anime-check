import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
import { day } from './utils/Date'
import { daysOftheWeek } from './Constants'

export default function Scheduled() {
    const [scheduled, setScheduled] = useState([])
    const allScheduledByDays = daysOftheWeek.concat(['other', 'unknown'])

    useEffect(() =>{
        axios.get('https://api.jikan.moe/v3/schedule')
            .then((res) =>  setScheduled(res.data))
            .catch(err => console.log(err))
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
