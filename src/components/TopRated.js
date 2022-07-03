import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Card from './Card'
import { fetchTopRated } from '../actions/topRated'
import Loader from './Loader'

export default function TopRated() {
    const { topRated, loading } = useSelector(state => state.topRated)
    const dispatch = useDispatch()
    const { type } = useParams()
    const param = type || 'anime'

    useEffect(() => {
        dispatch(fetchTopRated(param))
    }, [dispatch, param])

    return (
        <div id="content">
            <div className="box">
                <div className="head">
                    <h2 className="text-capitalize">Top Rated {topRated?.data.length} {param}</h2>
                </div>

                {loading ? <Loader /> : (
                    <div className="anime-cards">
                        {topRated?.data ? topRated.data.map(anime => 
                            <Card key={anime.mal_id} 
                                detail={anime}
                                noEpsTag={param !== 'anime' && param !== 'manga'}/>
                        ) : ''}
                    </div>
                )}
            </div>
        </div>
    )
}
