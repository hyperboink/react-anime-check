import ReactHtmlParser from 'react-html-parser'
import { config } from '../config'

export const baseUrl = () => {
    let segment = /github/.test(window.location.href) ? '/' : '/'
    return process.env.PUBLIC_URL ? process.env.PUBLIC_URL + segment : config.baseUrl
}

export const getParameterByName = (name, url) => {
    if (!url) url = window.location.href

    url = url.toLowerCase()
    name = name.replace(/[\[\]]/g, "\\$&").toLowerCase(); //eslint-disable-line
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url)

    if (!results) return null
    if (!results[2]) return ''

    return decodeURIComponent(results[2].replace(/\+/g, " "))
}

export const ifEmpty = (data, placeholder) => data || placeholder

export const range = (start, end) => {
    var nums = [];

    for (let i = start; i <= end; i++) {
        nums.push(i);
    }

    return nums;
}

export const SeparateArrayToLink = (array, options) => {
    return ReactHtmlParser(array ? array.map(arr => {
        let type = options.subType ? `${arr.type}/` : '';
        return options.link ? `<a class="anime-link" href="${options.link || ''}${type}${arr.mal_id || ''}${options.page || ''}">${arr.name || ''}</a>` : (arr.name || '')
    }).join(options.separator) : '')
}

export const transformRelations = (array, options) => {
    return ReactHtmlParser(array ? array.map(arr => {
        let type = options.subType ? `${arr.type}/` : '';
        return options.link ? `<a class="anime-link" href="${options.link || ''}${type}${arr.mal_id || ''}${options.page || ''}">${arr.name || ''}</a>` : (arr.name || '')
    }).join(options.separator) : '')
}

export const debounce = (fn, ms) => {
    let timer

    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
        timer = null
        fn.apply(this, fn)
        }, ms)
    };
}