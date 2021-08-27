import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div id="footer">
          <div className="footer-con flex">
            <div className="nav footer-nav">
                <ul>
                    <li><Link to="/">LATEST</Link></li>
                    <li><Link to="/upcoming">UPCOMING</Link></li>
                    <li><Link to="/top-rated">TOP RATED</Link></li>
                    <li><Link to="/top-rated/characters">CHARACTER RANKING</Link></li>
                    <li><Link to="/top-rated/manga">MANGA</Link></li>
                </ul>
            </div>
            <div className="copyright">Copyright &copy; 2021 <a href="/">Hyperboink</a> - All Rights Reserved</div>
          </div>
        </div>
    )
}
