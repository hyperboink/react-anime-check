import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom"
import { formatDate } from '../utils/date';
import { SeparateArrayToLink, ifEmpty, transformRelations} from '../utils/utils';
import { fetchDetails } from '../actions/details';
import Loader from '../components/Loader';

export default function DetailsPage() {
    const dispatch = useDispatch()
    const { details, loading } = useSelector(state => state.details)
    const { id, type } = useParams();
    const pageType = type === 'characters' ? 'character' : type;
    const anime = details?.data

    useEffect(() =>{
        dispatch(fetchDetails(pageType, id , type !== 'characters' ? '/full' : ''))
    }, [dispatch, pageType, type, id])

    return (
        <div className="single-page flex">
            {loading ? (
                <Loader/>
            ) : (
                <>
                    <div className="single-page-side">
                        <div className="featured-img">
                            <img src={anime?.images.webp.image_url} alt=""/>
                        </div>

                        {pageType !== 'character' ? (
                            <div className="single-page-side-info">
                                <ul>
                                    <li>English Title: {anime?.title_english}</li>
                                    <li>Status: {anime?.status}</li>
                                    <li>Aired: {anime?.aired ? formatDate(anime?.aired.from) : '??'} - {anime?.aired && anime?.aired.to ? formatDate(anime?.aired.to) : '??'}</li>
                                    <li>Type: {anime?.type}</li>
                                    <li>Episodes: {anime?.episodes || '??'}</li>
                                    <li>Genre: {SeparateArrayToLink(anime?.genres, {separator: ' / ', link: '#/genre/anime/', page: '/1'})}</li>
                                    <li>Producers: {SeparateArrayToLink(anime?.producers, {separator: ', '})}</li>
                                    <li>Studios: {SeparateArrayToLink(anime?.studios, {separator: ', '})}</li>
                                    <li>Licensors: {anime?.licensors && anime?.licensors.length ? SeparateArrayToLink(anime?.licensors, {separator: ', '}): 'NA'}</li>
                                    <li>Duration: {ifEmpty(anime?.duration, 'NA')}</li>
                                    <li>Rating: {anime?.rating}</li>
                                    <li>Score: {ifEmpty(anime?.score, 'NA')}</li>
                                    <li>Rank: {ifEmpty(anime?.rank, 'NA')}</li>
                                </ul>
                            </div>
                        ) : ''}
                    </div>

                    <div className="single-page-content">
                        <h1 className="single-page-title page-title">{anime?.title || anime?.name}</h1>
                        <p>{anime?.synopsis || anime?.about || 'No info yet.'}</p>

                        {anime?.trailer && (type === 'anime')? (
                            <div className="trailer">
                                <h3>Trailer</h3>
                                <iframe width="100%" height="400" src={anime.trailer.embed_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        ) : ''}

                        {pageType !== 'character' ? (
                            <>
                                <h3 className="related-title">Other Information</h3>

                                <div className="related-info">
                                    {anime?.relations.length ? Object.entries(anime.relations).map(([key, related]) => 
                                        (
                                            <div key={key} className="related-info-con">
                                                <strong>{related.relation}: </strong>
                                                {transformRelations(related.entry, {
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
