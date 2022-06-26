import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card'
import Pagination from './Pagination'
import Loader from './Loader'
import { fetchGenre } from '../actions/genre'

export default function Genre() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const { genre, loading } = state.genre
    const { id, page }  = useParams()
    const history = useHistory()

    useEffect(() => {
        dispatch(fetchGenre(id, page, history))   
    }, [dispatch, id, page, history])

    return (
        <>
            <div className="head flex anime-pagination-head">
                <h2>{genre?.mal_url ? 'Genre: ' + genre.mal_url.name : ''}</h2>

                <div className="anime-card-pagination">
                    {genre?.item_count ? (
                        <Pagination data={{
                            total: genre.item_count,
                            items: genre.anime,
                            baseLink: '/genre/anime/',
                            responsive: {
                                mobile: 3
                            }
                        }}/>
                    ) : ''}
                </div>
            </div>
            
            <div className="anime-pagination-body">
                {loading ? (
                    <Loader/>
                ) : ''}
                <div className="anime-cards">
                    {genre?.anime ? genre.anime.map(genre => 
                        <Card key={genre.mal_id} detail={genre} />
                    ) : ''}
                </div>
            </div>

            <div className="anime-card-pagination">
                {genre?.item_count ? (
                    <Pagination data={{
                        total: genre.item_count,
                        items: genre.anime,
                        baseLink: '/genre/anime/',
                        responsive: {
                            mobile: 3
                        }
                    }}/>
                ) : ''}
            </div>
        </>
        
 
    )
}
