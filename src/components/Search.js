import React from 'react'

export default function Search() {
    return (
        <div id="search">
            <form action="#/search/anime?q=">
                <input type="text" name="q" placeholder="Search anime here..." id="search-field" className="blink search-field"  />
                <button type="submit"  className="search-button">GO!</button>
            </form>
        </div>
    )
}
