import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router'
import Card from './Card'
import Pagination from './Pagination'
import Loader from './Loader'
import { getGenre } from '../api'

export default function Genre() {
    const [genre, setGenre] = useState({})
    const [isLoading, setLoading] = useState(true)
    const { id, page }  = useParams()
    const history = useHistory()

    useEffect(() =>{
        let unmount = false
        setLoading(true)

        getGenre(id, page).then((res) => {
            if(unmount) return
            setGenre(res.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err);
            setLoading(false)
            history.goBack()
        })

        return _ => {
            unmount = true
        }
    }, [id, page, history])

    return (
        <>
            <div className="head flex anime-pagination-head">
                <h2>{genre.mal_url ? 'Genre: ' + genre.mal_url.name : ''}</h2>

                <div className="anime-card-pagination">
                    {genre.item_count ? (
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
                {isLoading ? (
                    <Loader/>
                ) : ''}
                <div className="anime-cards">
                    {genre.anime ? genre.anime.map(genre => 
                        <Card key={genre.mal_id} detail={genre} />
                    ) : ''}
                </div>
            </div>

            <div className="anime-card-pagination">
                {genre.item_count ? (
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
