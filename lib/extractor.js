const mustString = require('./type')
const urlRegexSafe = require('url-regex-safe')

/**
 * Extract all urls from a string
 * @param {string} text Text to have urls being extracted 
 * @returns {Array<string>} Links extracted
 */
function extractURLsFromString(text) {
    const matches = mustString(text).match(urlRegexSafe())
    if (!matches) {
        return []
    }
    let ret = []
    for (const match of matches) {
        ret.push(match)
    }
    return ret
}

/**
 * Extracts the video id from a youtube url
 * @param {string} url
 */
function extractYoutubeIDFromURL(url) {
    return mustString(url)
    .replace(/https?:/, '')
    .replace(/\//g, '')
    .replace("youtu.be", '')
    .replace("www.", '')
    .replace("youtube.com", '')
    .replace("watch?v=", '')
}

module.exports = {
    extractURLsFromString,
    extractYoutubeIDFromURL
}