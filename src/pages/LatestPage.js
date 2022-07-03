import React from 'react'
import Latest from '../components/Latest'

export default function LatestPage() {
    return (
        <div id="content">     
            <div className="box">
                <div className="head">
                    <h2>Latest</h2>
                </div>
                <div className="anime-cards">
                    <Latest/>
                </div>
            </div>
        </div>
    )
}
