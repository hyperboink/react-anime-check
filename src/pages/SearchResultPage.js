import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { getParameterByName } from '../components/utils/Utils';
import { searchAnime } from '../services/anime';

export default function SearchResultPage() {
    const [search, setSearch] = useState([])
    const [loading, setLoading] = useState(true)
    const params = new URLSearchParams(useLocation().search)
    const winLocation = window.location.href
    const query = /github/.test(winLocation) ? getParameterByName('q', winLocation) : params.get('q')

    useEffect(() => {
        let unmount = false

        searchAnime(query, 6000)
            .then((res) => {
                if(unmount) return
                setSearch(res.data)
                setLoading(false)
            })
            .catch(err => setLoading(false))
        
        return _ => {
            unmount = true
        }
    }, [query])

    return (
        <div id="content" className="search-results">
            {loading ? (
                <Loader/>
            ) : (
                search.results && search.results.length ? search.results.map((result) => (
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
            )}
        </div>
    )
}
