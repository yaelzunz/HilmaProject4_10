// Config file for urls

import { NEWS_DATA_API_KEY } from "./apikeys.config"


export const PROTECTED_URLS = [
    '/home',
    '/article'
]


// News API

const NEWS_API_URL_BASE = `https://newsdata.io/api/1/news?apikey=${NEWS_DATA_API_KEY}&language=he,en`

export const NEWS_API_URL = {
    search: q => `${NEWS_API_URL_BASE}&q=${q}&language=he,en`,
    // by_categories: c => `${NEWS_API_URL_BASE}&category=${c.join(',')}`,
    by_title: t => `${NEWS_API_URL_BASE}&qInTitle=${t}`,
}


// ChatGPT

export const CHATGPT_API_URL = 'https://api.openai.com/v1/chat/completions'