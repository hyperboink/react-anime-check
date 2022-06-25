import React from 'react'
//import SearchResult from '../components/SearchResult'
const SearchResult = React.lazy(() => import('../components/SearchResult'))

export default function SearchResultPage() {
    return (
        <div id="content" className="search-results">
            <SearchResult />
        </div>
    )
}
