import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../utils/utils'

export default function PageNotFound() {
    return (
        <div id="content" className="page-not-found center-all flex">
            <div className="text-center">
                <h1>Error 404</h1>
                <p>You are lost! The page your are looking for could not be found.</p>
                <Link className="anime-link" to={baseUrl()}>Go to Home?</Link>
            </div>
        </div>
    )
}
