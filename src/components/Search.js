import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { search } from '../actions/search'

export default function Search() {
    const dispatch = useDispatch()
    const searchInput = useRef()
    const history = useHistory()

    const submitSearch = (e) => {
        e.preventDefault();

        if(searchInput.current.value){
            dispatch(search(searchInput.current.value))
            history.push(`/search/anime?q=${searchInput.current.value}`)
            searchInput.current.value = ''
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