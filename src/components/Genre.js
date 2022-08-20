import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card'
import Pagination from './Pagination'
import Loader from './Loader'
import { fetchGenre } from '../actions/genre'
import { title } from '../utils/utils'

export default function Genre() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const { genre, loading } = state.genre
    const { name, id, pageId }  = useParams()
    const history = useHistory()

    useEffect(() => {
        dispatch(fetchGenre(name, id, pageId, history))   
    }, [dispatch, name, id, pageId, history])

    return (
        <>
            {console.log(genre)}
            <div className="head flex anime-pagination-head">
                <h2 className="text-capitalize">Genre: {title(name)}</h2>

                <div className="anime-card-pagination">
                    {genre?.data.length ? (
                        <Pagination data={{
                            total: genre.pagination.items.total,
                            items: genre.data,
                            baseLink: `/genre/${name}`,
                            name: name,
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
                    {genre?.data.length ? genre.data.map(genre => 
                        <Card key={genre.mal_id} detail={genre} />
                    ) : ''}
                </div>
            </div>

            <div className="anime-card-pagination">
                {genre?.data.length ? (
                    <Pagination data={{
                        total: genre.pagination.items.total,
                        items: genre.data,
                        baseLink: `/genre/${name}`,
                        responsive: {
                            mobile: 3
                        }
                    }}/>
                ) : ''}
            </div>
        </>
        
 
    )
}
