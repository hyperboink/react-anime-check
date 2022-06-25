import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { search } from '../actions/search';

export default function SearchResultPage() {
    const params = new URLSearchParams(useLocation().search)
    const query = params.get('q')
    const { keyword, results } = useSelector(state => state.search)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(search(query || keyword))
    }, [dispatch, query, keyword])

    return (
        <>
            {results && results.length ? results.map((result) => (
                    <div key={result.mal_id} className="search-result flex">
                        <div className="search-left">
                            <Link className="anime-link" to={'/page/anime/' + result.mal_id}>
                                <img src={result.image_url} alt="" />
                            </Link>
                        </div>
                        <div className="search-right">
                            <h3><Link className="anime-link" to={'/page/anime/' + result.mal_id}>{result.title}</Link></h3>
                            <p className="anime-excerpt">{result.synopsis}</p>
                            <Link className="anime-btn" to={'/page/anime/' + result.mal_id}>Read More</Link>
                        </div>
                    </div>
                )) : (
                    <div className="no-result-content flex center-all">
                        <h3>Search again or try another?</h3>
                    </div>
                )
            }
        </>
    )
}
