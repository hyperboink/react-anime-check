import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { search } from '../actions/search';
import Loader from '../components/Loader'

export default function SearchResultPage() {
    const params = new URLSearchParams(useLocation().search)
    const query = params.get('q')
    const { results, loading } = useSelector(state => state.search)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(search(query))
    }, [dispatch, query])

    return (
        <>
            {loading 
                ? <Loader /> 
                : ( results?.data?.length ? results.data.map((result) => (
                    <div key={result.mal_id} className="search-result flex">
                        <div className="search-left">
                            <Link className="anime-link" to={'/page/anime/' + result.mal_id}>
                                <img src={result.images.webp.image_url} alt="" />
                            </Link>
                        </div>
                        <div className="search-right">
                            <h3><Link className="anime-link" to={'/page/anime/' + result.mal_id}>{result.title}</Link></h3>
                            <p className="anime-excerpt">{result.synopsis || 'No info yet.'}</p>
                            <Link className="anime-btn" to={'/page/anime/' + result.mal_id}>Read More</Link>
                        </div>
                    </div>
                )) : (
                    <div className="no-result-content flex center-all">
                        <h3>Search again or try another?</h3>
                    </div>
                )
            )}
        </>
    )
}
