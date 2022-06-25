import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from "react-router-dom"
import { range, debounce } from '../utils/utils'
import { BREAKPOINTS } from '../utils/constants';
import { config } from '../config'

export default function Pagination({data}) {
    const [dimension, setDimension] = useState({ 
        width: window.innerWidth
    })

    useEffect(_ => {
        const debouncedHandleResize = debounce(_ =>
            setDimension({
                width: window.innerWidth
            })
        , 200)

        window.addEventListener('resize', debouncedHandleResize)
    
        return _ => {
          window.removeEventListener('resize', debouncedHandleResize)
        }
    }, [])

    const { pagination } = config

    let limit = Object.entries(data.responsive || {}).find(([key]) => dimension.width <= BREAKPOINTS[key])
    limit = (limit ? limit[1] : null) || pagination.navigation.limit || 10

    const { id, page } = useParams()
    const currentIndex = parseInt(page)
    const paginationTotal = Math.ceil(data.total / 100)
    const moveTrigger = Math.ceil(limit / 2)
    const offset = currentIndex + moveTrigger
    const paginationLink = () => {

        let minActive = currentIndex - (limit - 2)
        let maxActive = (currentIndex) + moveTrigger

        if(currentIndex < moveTrigger){
            minActive = 1
            maxActive = limit;
        }

        if(currentIndex >= 5){
            minActive = (currentIndex + 1) - moveTrigger
            maxActive = currentIndex + moveTrigger;
        }

        if(offset >= paginationTotal){
            minActive = (paginationTotal + 1) - limit
            maxActive = paginationTotal;
        }

        if(limit > paginationTotal){
            minActive = 1
            maxActive = paginationTotal
        }

        return range(minActive, maxActive).map((num) => 
            <Link key={num} to={(data.baseLink + id || '') + '/' + num} className={'anime-pagination-link' + (currentIndex === num ? ' current': '')}>{num}</Link>
        )
    }
    
    return (
        <div className='anime-pagination'>

            {paginationTotal ? (
                <>
                    {currentIndex !== 1 ? (
                        <>
                            <Link to={data.baseLink + id + '/1'} className="anime-pagination-link prev controls">&lt;&lt;</Link>
                            <Link className='anime-pagination-link prev controls' to={data.baseLink + id + '/' + (currentIndex - 1)}>&lt;</Link>
                        </>
                    ) : ''}

                    {paginationLink()}

                    {currentIndex < paginationTotal ? (
                        <>
                            <Link className='anime-pagination-link next controls' to={data.baseLink + id + '/' + (currentIndex + 1)}>&gt;</Link>
                            <Link to={data.baseLink + id + '/' + paginationTotal} className="anime-pagination-link prev controls">&gt;&gt;</Link>
                        </>
                    ) : ''}
        
                </>
            ) : ''}
            
        </div>
    )
}
