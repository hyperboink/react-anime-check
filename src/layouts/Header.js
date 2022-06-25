import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import { debounce } from '../utils/utils'

export default function Header() {
    const [offset, setOffset] = useState(window.pageYOffset)

    useEffect(_ => {
        const debouncedHandleResize = debounce(_ =>
            setOffset(window.pageYOffset)
        , 150)

        window.addEventListener('scroll', debouncedHandleResize)
    
        return _ => {
          window.removeEventListener('scroll', debouncedHandleResize)
        }
    }, [])

    const scrollToTopRef = useRef()
    const scrollToTopHandler = () => scrollToTopRef.current.scrollIntoView({behavior: 'smooth'})
    const showScrollTopClass = offset >= 450 ? ' show' : ''

    return (
        <>
            <div className={'go-top' + showScrollTopClass} onClick={() => scrollToTopHandler()}>
                <i className="fa fa-angle-up" aria-hidden="true"></i>
            </div>

            <div id="header">
                <div className="header-top clear">
                    <h1 id="logo" className="left">
                        <Link to="/">AnimeCheck</Link>
                    </h1>

                    <div className="header-right right" ref={scrollToTopRef}>
                        <Search/>
                    </div>
                </div>
                <div id="navigation">
                    <ul>
                        <li><Link to="/">LATEST</Link></li>
                        <li><Link to="/upcoming">UPCOMING</Link></li>
                        <li><Link to="/top-rated">TOP RATED</Link></li>
                        <li><Link to="/top-rated/characters">CHARACTER RANKING</Link></li>
                        <li><Link to="/genres">GENRES</Link></li>
                        <li><Link to="/top-rated/manga">MANGA</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
