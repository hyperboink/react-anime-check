import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search'

export default function Header() {
    return (
        <>
            <div id="header">
                <h1 id="logo"><Link to="/">AnimeCheck</Link></h1>

                <div id="navigation">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/upcoming">ANIME</Link></li>
                        <li><Link to="/top-rated/manga">MANGA</Link></li>
                    </ul>
                </div>
                <div id="sub-navigation">
                    <ul>
                        <li><Link to="/">LATEST</Link></li>
                        <li><Link to="/upcoming">UPCOMING</Link></li>
                        <li><Link to="/top-rated">TOP RATED</Link></li>
                        <li><Link to="/top-rated/characters">CHARACTER RANKING</Link></li>
                        <li><Link to="/genres">GENRES</Link></li>
                    </ul>
                    
                    <Search/>
                </div>
            </div>
        </>
    )
}
