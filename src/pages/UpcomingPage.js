import React from 'react'
import Upcoming from '../components/Upcoming'

export default function UpcomingPage() {
    return (
        <div id="content">
            <div className="box">
                <div className="head">
                    <h2>UPCOMING</h2>
                </div>

                <div className="anime-cards">
                    <Upcoming/>
                </div>
            </div>
        </div>
    )
}
