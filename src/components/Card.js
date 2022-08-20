import React from 'react'
import { SeparateArrayToLink } from '../utils/utils'
import { useParams, useHistory } from "react-router-dom"

export default function Card({detail}) {
    const { type } = useParams()
    const history = useHistory()
    const param = type ? type : 'anime'
    const isAnime = param === 'anime'
    const isManga = param === 'manga'
    const isCharacters = param === 'characters'
    const redirectToPage = (e) => {
        e.preventDefault()
        history.push('/page/'+param+'/' + detail.mal_id)
    }

    return (
        <div className="anime anime-card">
            <div className="anime-image">
                <a href={'page/'+param+'/' + detail.mal_id} className="anime-card-link" onClick={redirectToPage}>
                    <img src={detail?.images?.webp.image_url || detail.image_url} alt=""/>
                    {isAnime ? <span className="anime-eps">{detail.episodes ? `${detail.episodes} EPS` : '?? EPS'}</span> : ''}
                    
                </a>
                {isCharacters ? (
                    <span className="character-rank-tag">#{detail.rank}</span>
                ) : ''}

                <div className={'card-title anime-title' + (isCharacters ? ' character-name' : '')}>
                    <a className="anime-link" href={'/page/'+param+'/' + detail.mal_id} onClick={redirectToPage}>{detail.title}</a>
                </div>
                {detail.genres ?(
                    <div className="anime-genre">{SeparateArrayToLink(detail.genres, {separator: '', link: '#/genre/', page: '/1'})}</div>
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
