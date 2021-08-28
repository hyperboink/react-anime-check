import ReactHtmlParser from 'react-html-parser'
import { config } from '../../config'

export const baseUrl = () => process.env.PUBLIC_URL || config.baseUrl

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