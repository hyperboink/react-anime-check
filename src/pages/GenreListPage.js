import React from 'react'
import { Link } from 'react-router-dom'

export default function GenreListPage() {
    return (
        <div id="content" className="genres-content">
            <h2>Genres</h2>

            <ul className="anime-genre-list">
                <li><Link className="anime-link" to="/genre/anime/1/1">Action</Link></li>
                <li><Link className="anime-link" to="/genre/anime/2/1">Adventure</Link></li>
                <li><Link className="anime-link" to="/genre/anime/3/1">Cars</Link></li>
                <li><Link className="anime-link" to="/genre/anime/4/1">Comedy</Link></li>
                <li><Link className="anime-link" to="/genre/anime/5/1">Dementia</Link></li>
                <li><Link className="anime-link" to="/genre/anime/6/1">Demons</Link></li>
                <li><Link className="anime-link" to="/genre/anime/8/1">Drama</Link></li>
                <li><Link className="anime-link" to="/genre/anime/9/1">Ecchi</Link></li>
                <li><Link className="anime-link" to="/genre/anime/10/1">Fantasy</Link></li>
                <li><Link className="anime-link" to="/genre/anime/11/1">Game</Link></li>
                <li><Link className="anime-link" to="/genre/anime/35/1">Harem</Link></li>
                <li><Link className="anime-link" to="/genre/anime/12/1">Hentai</Link></li>
                <li><Link className="anime-link" to="/genre/anime/13/1">Historical</Link></li>
                <li><Link className="anime-link" to="/genre/anime/14/1">Horror</Link></li>
                <li><Link className="anime-link" to="/genre/anime/43/1">Josei</Link></li>
                <li><Link className="anime-link" to="/genre/anime/15/1">Kids</Link></li>
                <li><Link className="anime-link" to="/genre/anime/16/1">Magic</Link></li>
                <li><Link className="anime-link" to="/genre/anime/17/1">Martial Arts</Link></li>
                <li><Link className="anime-link" to="/genre/anime/18/1">Mecha</Link></li>
                <li><Link className="anime-link" to="/genre/anime/38/1">Military</Link></li>
                <li><Link className="anime-link" to="/genre/anime/19/1">Music</Link></li>
                <li><Link className="anime-link" to="/genre/anime/7/1">Mystery</Link></li>
                <li><Link className="anime-link" to="/genre/anime/20/1">Parody</Link></li>
                <li><Link className="anime-link" to="/genre/anime/39/1">Police</Link></li>
                <li><Link className="anime-link" to="/genre/anime/40/1">Psychological</Link></li>
                <li><Link className="anime-link" to="/genre/anime/22/1">Romance</Link></li>
                <li><Link className="anime-link" to="/genre/anime/21/1">Samurai</Link></li>
                <li><Link className="anime-link" to="/genre/anime/23/1">School</Link></li>
                <li><Link className="anime-link" to="/genre/anime/24/1">Sci-Fi</Link></li>
                <li><Link className="anime-link" to="/genre/anime/42/1">Seinen</Link></li>
                <li><Link className="anime-link" to="/genre/anime/25/1">Shoujo</Link></li>
                <li><Link className="anime-link" to="/genre/anime/26/1">Shoujo Ai</Link></li>
                <li><Link className="anime-link" to="/genre/anime/27/1">Shounen</Link></li>
                <li><Link className="anime-link" to="/genre/anime/28/1">Shounen Ai</Link></li>
                <li><Link className="anime-link" to="/genre/anime/36/1">Slice of Life</Link></li>
                <li><Link className="anime-link" to="/genre/anime/29/1">Space</Link></li>
                <li><Link className="anime-link" to="/genre/anime/30/1">Sports</Link></li>
                <li><Link className="anime-link" to="/genre/anime/31/1">Super Power</Link></li>
                <li><Link className="anime-link" to="/genre/anime/37/1">Supernatural</Link></li>
                <li><Link className="anime-link" to="/genre/anime/41/1">Thriller</Link></li>
                <li><Link className="anime-link" to="/genre/anime/32/1">Vampire</Link></li>
                <li><Link className="anime-link" to="/genre/anime/33/1">Yaoi</Link></li>
                <li><Link className="anime-link" to="/genre/anime/34/1">Yuri</Link></li>
            </ul>
        </div>
    )
}
