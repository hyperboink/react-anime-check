import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

export default function Upcoming() {

    const [upcoming, setUpcoming] = useState([])

    useEffect(() =>{
        axios.get('https://api.jikan.moe/v3/season/later')
            .then((res) => setUpcoming(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {upcoming.anime ? upcoming.anime.map(anime => 
                <Card key={anime.mal_id} detail={anime} />
            ) : ''}
        </>
    )
}
