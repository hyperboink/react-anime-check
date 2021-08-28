import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../components/utils/Utils'

export default function Footer() {
    return (
      <div id="footer">
        <div className="footer-con flex">
          <div className="nav footer-nav">
              <ul>
                  <li><Link to={baseUrl() + '/'}>LATEST</Link></li>
                  <li><Link to={baseUrl() + '/upcoming'}>UPCOMING</Link></li>
                  <li><Link to={baseUrl() + 'top-rated'}>TOP RATED</Link></li>
                  <li><Link to={baseUrl() + '/top-rated/characters'}>CHARACTER RANKING</Link></li>
                  <li><Link to={baseUrl() + '/top-rated/manga'}>MANGA</Link></li>
              </ul>
          </div>
          <div className="copyright">Copyright &copy; 2021 <a href="http://www.hyperboink.net">Hyperboink</a> - All Rights Reserved</div>
        </div>
      </div>
    )
}
