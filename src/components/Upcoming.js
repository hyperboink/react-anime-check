import React, {useState, useEffect} from 'react'
import Card from './Card'
import { getUpcoming } from '../services/anime'

export default function Upcoming() {
    const [upcoming, setUpcoming] = useState([])

    useEffect(() =>{
        let unmount = false

        getUpcoming()
            .then((res) => {
                if(unmount) return
                setUpcoming(res.data)
            })
            .catch(err => console.log(err))
        
        return _ => {
            unmount = true
        }
    }, [])

    return (
        <>
            {upcoming.anime ? upcoming.anime.map(anime => 
                <Card key={anime.mal_id} detail={anime} />
            ) : ''}
        </>
    )
}
