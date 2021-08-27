import React from 'react'
import Scheduled from '../components/Scheduled'

export default function HomePage() {
    return (
        <>
            <div id="content">
                
                <div className="box">
                    <div className="head">
                        <h2>NEW RELEASES</h2>
                    </div>
                    <div className="anime-cards">
                        <Scheduled/>
                    </div>
                </div>

            </div>
        </>
    )
}
