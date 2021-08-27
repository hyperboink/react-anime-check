import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader';

export default function SearchResultPage() {
    const [search, setSearch] = useState([])
    const [loading, setLoading] = useState(true)
    const params = new URLSearchParams(useLocation().search)
    const query = params.get('q')

    useEffect(() =>{
        axios.get('https://api.jikan.moe/v3/search/anime?q=' + query, {timeout: 6000})
            .then((res) => {
                setSearch(res.data)
                setLoading(false)
            })
            .catch(err => setLoading(false))
    }, [query])

    return (
        <div id="content" className="search-results">
            {loading ? (
                <Loader/>
            ) : (
                search.results && search.results.length ? search.results.map((result) => (
                    <div key={result.mal_id} className="search-result flex">
                        <div className="search-left">
                            <a className="anime-link" href={'//page/anime/' + result.mal_id}>
                                <img src={result.image_url} alt="" />
                            </a>
                        </div>
                        <div className="search-right">
                            <h3><a className="anime-link" href={'/page/anime/' + result.mal_id}>{result.title}</a></h3>
                            <p className="anime-excerpt">{result.synopsis}</p>
                            <a className="anime-btn" href={'/page/anime/' + result.mal_id}>Read More</a>
                        </div>
                    </div>
                )) : (
                    <div className="no-result-content flex center-all">
                        <h3>Search again or try another?</h3>
                    </div>
                )
            )}
        </div>
    )
}
