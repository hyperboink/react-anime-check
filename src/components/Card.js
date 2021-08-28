import React from 'react'
import { Link } from 'react-router-dom'
import { SeparateArrayToLink } from '../components/utils/Utils'
import { useParams } from "react-router-dom"
import { baseUrl } from '../components/utils/Utils'

export default function Card({detail}) {
    const { type } = useParams()
    const param = type ? type : 'anime'
    const isAnime = param === 'anime'
    const isManga = param === 'manga'
    const isCharacters = param === 'characters'

    return (
        <div className="anime anime-card">
            <div className="anime-image">
                <Link to={baseUrl() + 'page/'+param+'/' + detail.mal_id} className="anime-card-link" >
                    <img src={detail.image_url} alt=""/>
                    {isAnime ? <span className="anime-eps">{detail.episodes ? `${detail.episodes} EPS` : '?? EPS'}</span> : ''}
                    
                </Link>
                {isCharacters ? (
                    <span className="character-rank-tag">#{detail.rank}</span>
                ) : ''}

                <div className={'card-title anime-title' + (isCharacters ? ' character-name' : '')}>
                    <Link className="anime-link" to={'/page/'+param+'/' + detail.mal_id}>{detail.title}</Link>
                </div>
                {detail.genres ?(
                    <div className="anime-genre">{SeparateArrayToLink(detail.genres, {separator: '', link: baseUrl() + 'genre/anime/', page: '/1'})}</div>
                ) : ''}
            </div>
            
            {isAnime || isManga
                ? (
                <div className="rating">
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <div className="rating-score">{detail.score ? detail.score : 'NA'}</div>
                </div>
                ) : ''
            }

        </div>
    )
}
