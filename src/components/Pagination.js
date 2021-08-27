import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { useHistory } from "react-router-dom"
import { paginate } from '../actions/paginate'
import { baseUrl, range } from './utils/Utils'
import { config } from '../config'

export default function Pagination({data}) {
    const history = useHistory()
    const { id, page } = useParams()
    const dispatch = useDispatch()
    const { pagination } = config
    const currentIndex = parseInt(page)
    const paginationTotal = Math.ceil(data.total / 100)
    const limit = pagination.navigation.limit
    const moveTrigger = Math.ceil(limit / 2)
    const offset = currentIndex + moveTrigger

    const handlePaginationByAjax = (pageIndex) => {
        dispatch(paginate(data))
        history.push(`${data.baseLink + id || ''}/${pageIndex}`)
    }

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

        return range(minActive, maxActive).map((v) => (
            <a key={v} href={baseUrl() + (data.baseLink + id || '') + '/' + v} className={'anime-pagination-link' + (currentIndex === v ? ' current': '')} onClick={(e) => {
                if(pagination.navigation.byRouter){
                    e.preventDefault()
                    handlePaginationByAjax(v)
                }
            }}>{v}</a>
        ))
    }
    
    return (
        <div className='anime-pagination'>

            {paginationTotal ? (
                <>
                    {currentIndex !== 1 ? (
                        <>
                            <a href={baseUrl() + data.baseLink + id + '/1'} className="anime-pagination-link prev controls" onClick={(e) => {
                                if(pagination.navigation.byRouter){
                                    e.preventDefault()
                                    handlePaginationByAjax(1)
                                }
                            }}>&lt;&lt;</a>

                            <a className='anime-pagination-link prev controls' href={baseUrl() + data.baseLink + id + '/' + (currentIndex - 1)} onClick={(e) => {
                                if(pagination.navigation.byRouter){
                                    e.preventDefault()
                                    handlePaginationByAjax(currentIndex - 1)
                                }
                            }}>&lt;</a>
                        </>
                    ) : ''}

                    {paginationLink()}

                    {currentIndex < paginationTotal ? (
                        <>
                            <a className='anime-pagination-link next controls' href={baseUrl() + data.baseLink + id + '/' + (currentIndex + 1)} onClick={(e) => {
                                if(pagination.navigation.byRouter){
                                    e.preventDefault()
                                    handlePaginationByAjax(currentIndex + 1)
                                }
                            }}>&gt;</a>

                            <a href={baseUrl() + data.baseLink + id + '/' + paginationTotal} className="anime-pagination-link prev controls" onClick={(e) => {
                                if(pagination.navigation.byRouter){
                                    e.preventDefault()
                                    handlePaginationByAjax(paginationTotal)
                                }
                            }}>&gt;&gt;</a>
                        </>
                    ) : ''}
        
                </>
            ) : ''}
            
        </div>
    )
}
