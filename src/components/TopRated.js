import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'
import { getTopRated } from '../services/anime'

export default function TopRated() {
    const [topRated, setTopRated] = useState([])
    const { type } = useParams()
    const param = type ? type : 'anime'

    useEffect(() => {
        let unmount = false

        getTopRated(param)
            .then((res) => {
                if(unmount) return
                setTopRated(res.data)
            })
            .catch(err => console.log(err))
        
        return _ => {
            unmount = true
        }
    }, [param])

    return (
        <div id="content">
            <div className="box">
                <div className="head">
                    <h2 className="text-capitalize">Top Rated 50 {param}</h2>
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
