import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { formatDate } from '../components/utils/Date';
import { SeparateArrayToLink, ifEmpty } from '../components/utils/Utils';
import { getAnimeByTypeAndId } from '../services/anime';
import Loader from '../components/Loader';

export default function SinglePage() {
    const { id, type } = useParams();
    const pageType = type === 'characters' ? 'character' : type;
    const [anime, setAnime] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        let unmount = false
        setLoading(true)

        getAnimeByTypeAndId(pageType, id)
            .then((res) => {
                if(unmount) return
                setAnime(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))

        return _ => {
            unmount = true
        }
    }, [type, pageType, id])

    return (
        <div className="single-page flex">
            {loading ? (
                <Loader/>
            ) : (
                <>
                    <div className="single-page-side">
                        <div className="featured-img">
                            <img src={anime.image_url} alt=""/>
                        </div>

                        {pageType !== 'character' ? (
                            <div className="single-page-side-info">
                                <ul>
                                    <li>English Title: {anime.title_english}</li>
                                    <li>Status: {anime.status}</li>
                                    <li>Aired: {anime.aired ? formatDate(anime.aired.from) : '??'} - {anime.aired && anime.aired.to ? formatDate(anime.aired.to) : '??'}</li>
                                    <li>Type: {anime.type}</li>
                                    <li>Episodes: {anime.episodes || '??'}</li>
                                    <li>Genre: {SeparateArrayToLink(anime.genres, {separator: ' / ', link: '#/genre/anime/', page: '/1'})}</li>
                                    <li>Producers: {SeparateArrayToLink(anime.producers, {separator: ', '})}</li>
                                    <li>Studios: {SeparateArrayToLink(anime.studios, {separator: ', '})}</li>
                                    <li>Licensors: {anime.licensors && anime.licensors.length ? SeparateArrayToLink(anime.licensors, {separator: ', '}): 'NA'}</li>
                                    <li>Duration: {ifEmpty(anime.duration, 'NA')}</li>
                                    <li>Rating: {anime.rating}</li>
                                    <li>Score: {ifEmpty(anime.score, 'NA')}</li>
                                    <li>Rank: {ifEmpty(anime.rank, 'NA')}</li>
                                </ul>
                            </div>
                        ) : ''}
                    </div>

                    <div className="single-page-content">
                        <h1 className="single-page-title page-title">{anime.title || anime.name}</h1>
                        <p>{anime.synopsis || anime.about}</p>

                        {anime.trailer_url && (type === 'anime')? (
                            <div className="trailer">
                                <h3>Trailer</h3>
                                <iframe width="100%" height="400" src={anime.trailer_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        ) : ''}

                        {pageType !== 'character' ? (
                            <>
                                <h3 className="related-title">Other Information</h3>

                                <div className="related-info">
                                    {anime.related ? Object.entries(anime.related).map(([key, related]) => 
                                        (
                                            <div key={key} className="related-info-con">
                                                <strong>{key}: </strong>
                                                {SeparateArrayToLink(related, {
                                                    separator: ', ',
                                                    link: '#/page/',
                                                    subType: true
                                                })}
                                            </div>
                                        )
                                    ) : ''}
                            </div>
                            </>
                        ) : ''}
                    </div>
                </>
            )}
        </div>
    )
}
