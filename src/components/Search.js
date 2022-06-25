import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { search } from '../actions/search'

export default function Search() {
    const dispatch = useDispatch()
    const history = useHistory()
    const searchInput = useRef()
    const submitSearch = (e) => {
        const { value } = searchInput.current

        e.preventDefault();

        if(value){
            dispatch(search(value))
            history.push(`/search/anime?q=${value}`)
        }        
    }

    return (
        <div id="search">
            <form onSubmit={submitSearch}>
                <input type="text" name="q" placeholder="Search anime here..." id="search-field" className="blink search-field" ref={searchInput}/>
                <button type="submit"  className="search-button">GO!</button>
            </form>
        </div>
    )
}