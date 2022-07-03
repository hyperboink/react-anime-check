import React from 'react'
const SearchResult = React.lazy(() => import('../components/SearchResult'))

export default function SearchResultPage() {
    return (
        <div id="content" className="search-results">
            <SearchResult />
        </div>
    )
}