import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import Card from './Card'

export default function TopRated() {

    const [topRated, setTopRated] = useState([])
    const { type } = useParams()
    const param = type ? type : 'anime'
    const paramUppercase = param.toUpperCase()

    useEffect(() =>{
        axios.get('https://api.jikan.moe/v3/top/' + param)
            .then((res) => setTopRated(res.data))
            .catch(err => console.log(err))
    }, [param])

    return (
        <div id="content">
            <div className="box">
                <div className="head">
                    <h2>TOP RATED {paramUppercase}</h2>
                </div>

                <div className="anime-cards">
                    {topRated.top ? topRated.top.map(anime => 
                        <Card key={anime.mal_id} 
                            detail={anime}
                            noEpsTag={param !== 'anime' && param !== 'manga'}/>
                    ) : ''}
                </div>
            </div>
        </div>
    )
}
