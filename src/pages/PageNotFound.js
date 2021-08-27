import React from 'react'

export default function PageNotFound() {
    return (
        <div id="content" className="page-not-found center-all flex">
            <div className="text-center">
                <h1>Error 404</h1>
                <p>You are lost! The page your are looking for could not be found.</p>
                <a className="anime-link" href="/">Go to Home?</a>
            </div>
        </div>
    )
}
